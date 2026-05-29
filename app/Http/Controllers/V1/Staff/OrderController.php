<?php

namespace App\Http\Controllers\V1\Staff;

use App\Http\Controllers\Controller;
use App\Http\Requests\Staff\OrderAssign;
use App\Models\Order;
use App\Models\Plan;
use App\Models\Staff;
use App\Models\User;
use App\Services\OrderService;
use App\Services\SubscriptionService;
use App\Services\UserService;
use App\Utils\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function fetch(Request $request)
    {
        $staffUserId = $request->user['id'];
        $current = max(1, (int)$request->input('page', $request->input('current', 1)));
        $pageSize = max(10, (int)$request->input('limit', $request->input('pageSize', 10)));
        $sort = in_array($request->input('sort'), ['id', 'trade_no', 'total_amount', 'created_at', 'updated_at'])
            ? $request->input('sort')
            : 'created_at';
        $sortType = in_array($request->input('sort_type'), ['ASC', 'DESC']) ? $request->input('sort_type') : 'DESC';

        $orderModel = Order::where('invite_user_id', $staffUserId)
            ->orderBy($sort, $sortType);

        if ($request->filled('status')) {
            $orderModel->where('status', $request->input('status'));
        }
        if ($request->filled('user_id')) {
            $orderModel->where('user_id', $request->input('user_id'));
        }
        if ($request->filled('trade_no')) {
            $orderModel->where('trade_no', 'like', '%' . $request->input('trade_no') . '%');
        }
        if ($request->filled('start_date')) {
            $orderModel->where('created_at', '>=', strtotime($request->input('start_date')));
        }
        if ($request->filled('end_date')) {
            $orderModel->where('created_at', '<=', strtotime($request->input('end_date') . ' 23:59:59'));
        }

        $total = $orderModel->count();
        $orders = $orderModel->forPage($current, $pageSize)->get();
        $users = User::whereIn('id', $orders->pluck('user_id')->unique()->all())->get()->keyBy('id');
        $plans = Plan::whereIn('id', $orders->pluck('plan_id')->unique()->all())->get()->keyBy('id');

        foreach ($orders as $order) {
            $order->user_email = isset($users[$order->user_id]) ? $users[$order->user_id]->email : null;
            $order->plan_name = isset($plans[$order->plan_id]) ? $plans[$order->plan_id]->name : null;
            $order->staff_pay_amount = $this->staffPayAmount($order);
        }

        return response()->json([
            'data' => $orders,
            'total' => $total,
            'current' => $current,
            'pageSize' => $pageSize
        ]);
    }

    public function stat(Request $request)
    {
        $staffUserId = $request->user['id'];
        $now = time();
        $todayStart = strtotime(date('Y-m-d'));
        $monthStart = strtotime(date('Y-m-01'));

        $completed = function () use ($staffUserId) {
            return Order::where('invite_user_id', $staffUserId)->whereNotIn('status', [0, 2]);
        };

        $todayOrders = $completed()->where('created_at', '>=', $todayStart)->where('created_at', '<=', $now);
        $monthOrders = $completed()->where('created_at', '>=', $monthStart)->where('created_at', '<=', $now);
        $totalOrders = $completed();

        return response()->json([
            'today' => [
                'count' => (clone $todayOrders)->count(),
                'amount' => (clone $todayOrders)->sum('total_amount')
            ],
            'month' => [
                'count' => (clone $monthOrders)->count(),
                'amount' => (clone $monthOrders)->sum('total_amount')
            ],
            'total' => [
                'count' => (clone $totalOrders)->count(),
                'amount' => (clone $totalOrders)->sum('total_amount')
            ],
            'pending_count' => Order::where('invite_user_id', $staffUserId)->where('status', 0)->count(),
            'total_commission' => $completed()->sum('commission_balance'),
            'commission_balance' => (int)User::where('id', $staffUserId)->value('commission_balance')
        ]);
    }

    public function detail(Request $request)
    {
        if (!$request->input('id')) {
            return response()->json(['message' => 'Order ID is required'], 400);
        }

        $order = Order::where('id', $request->input('id'))
            ->where('invite_user_id', $request->user['id'])
            ->first();

        if (!$order) {
            return response()->json(['message' => 'Đơn hàng không tồn tại'], 404);
        }

        $user = User::find($order->user_id);
        $plan = Plan::find($order->plan_id);
        $order->user_email = $user ? $user->email : null;
        $order->plan_name = $plan ? $plan->name : null;
        $order->staff_pay_amount = $this->staffPayAmount($order);

        return response()->json([
            'data' => $order
        ]);
    }

    public function summary(Request $request)
    {
        $summary = Order::where('invite_user_id', $request->user['id'])
            ->select('status', DB::raw('count(*) as count'), DB::raw('sum(total_amount) as amount'))
            ->groupBy('status')
            ->get();

        $statusMap = [
            0 => 'pending',
            1 => 'processing',
            2 => 'cancelled',
            3 => 'completed',
            4 => 'discounted'
        ];
        $result = [];

        foreach ($summary as $item) {
            $statusName = $statusMap[$item->status] ?? 'unknown';
            $result[$statusName] = [
                'count' => $item->count,
                'amount' => $item->amount ?: 0
            ];
        }

        return response()->json([
            'data' => $result
        ]);
    }

    public function assign(OrderAssign $request)
    {
        $staffUserId = $request->user['id'];
        $plan = Plan::find($request->input('plan_id'));
        $user = User::where('email', $request->input('email'))
            ->where('invite_user_id', $staffUserId)
            ->first();

        if (!$user) {
            abort(500, 'Người dùng không tồn tại hoặc không thuộc nhân viên này');
        }
        if (!$plan) {
            abort(500, 'Gói không tồn tại');
        }

        $staff = Staff::where('user_id', $staffUserId)->where('status', 1)->first();
        if (!$staff) {
            abort(500, 'Nhân viên không tồn tại');
        }

        $staffPlanIds = $staff->plan_id ?: [];
        if (!empty($staffPlanIds) && !in_array((int)$plan->id, $staffPlanIds)) {
            abort(500, 'Bạn không có quyền phân bổ gói này');
        }

        $period = $request->input('period');
        if ($plan[$period] === null || $plan[$period] < 0) {
            abort(500, 'Gói này không có giá cho chu kỳ đã chọn');
        }

        if ((new UserService())->isNotCompleteOrderByUserId($user->id)) {
            abort(500, 'Người dùng này còn đơn hàng chờ xử lý, không thể phân bổ đơn mới');
        }

        $subscriptionService = new SubscriptionService();
        $subscription = $request->input('subscription_id')
            ? $subscriptionService->getForUser($user, $request->input('subscription_id'))
            : null;
        if ($request->input('subscription_id') && !$subscription) {
            abort(500, 'Gói đăng ký không tồn tại');
        }
        if ($subscription && (int)$subscription->plan_id !== (int)$plan->id && $period !== 'reset_price') {
            abort(500, 'Chỉ có thể gia hạn gói đăng ký đã chọn');
        }

        DB::beginTransaction();
        try {
            $order = new Order();
            $orderService = new OrderService($order);
            $order->user_id = $user->id;
            $order->subscription_id = $subscription ? $subscription->id : null;
            $order->plan_id = $plan->id;
            $order->period = $period;
            $order->trade_no = Helper::generateOrderNo();
            $order->total_amount = $plan[$period];

            $orderService->setOrderType($user);
            $orderService->setInvite($user);
            $order->invite_user_id = $staffUserId;
            if ((int)$order->total_amount <= 0) {
                $order->commission_balance = 0;
            }

            if (!$order->save()) {
                throw new \Exception('Tạo đơn hàng thất bại');
            }

            DB::commit();
            return response([
                'data' => $order->trade_no
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            abort(500, $e->getMessage());
        }
    }

    public function paid(Request $request)
    {
        $tradeNo = $request->input('trade_no');
        if (!$tradeNo) {
            abort(500, 'Tham số không hợp lệ');
        }

        DB::beginTransaction();
        try {
            $order = Order::where('trade_no', $tradeNo)
                ->where('invite_user_id', $request->user['id'])
                ->lockForUpdate()
                ->first();
            if (!$order) {
                abort(500, 'Đơn hàng không tồn tại');
            }
            if ((int)$order->status !== 0) {
                abort(500, 'Chỉ có thể duyệt đơn hàng đang chờ xử lý');
            }

            $staff = User::where('id', $request->user['id'])->lockForUpdate()->first();
            if (!$staff || !$staff->is_staff) {
                abort(403, 'Tài khoản nhân viên không tồn tại');
            }

            $payAmount = $this->staffPayAmount($order);
            if ((int)$staff->commission_balance < $payAmount) {
                abort(500, 'Số dư hoa hồng nhân viên không đủ');
            }

            $staff->commission_balance = (int)$staff->commission_balance - $payAmount;
            if (!$staff->save()) {
                throw new \Exception('Cập nhật số dư nhân viên thất bại');
            }

            $order->commission_status = 2;
            $order->actual_commission_balance = $order->commission_balance ?: 0;
            if (!$order->save()) {
                throw new \Exception('Cập nhật đơn hàng thất bại');
            }

            $orderService = new OrderService($order);
            if (!$orderService->paid('staff_commission')) {
                throw new \Exception('Duyệt đơn hàng thất bại');
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            abort(500, $e->getMessage());
        }

        return response([
            'data' => true
        ]);
    }

    public function cancel(Request $request)
    {
        $tradeNo = $request->input('trade_no');
        if (!$tradeNo) {
            abort(500, 'Tham số không hợp lệ');
        }

        $order = Order::where('trade_no', $tradeNo)
            ->where('invite_user_id', $request->user['id'])
            ->first();
        if (!$order) {
            abort(500, 'Đơn hàng không tồn tại');
        }
        if ((int)$order->status !== 0) {
            abort(500, 'Chỉ có thể hủy đơn hàng đang chờ xử lý');
        }

        if (!(new OrderService($order))->cancel()) {
            abort(500, 'Hủy thất bại');
        }

        return response([
            'data' => true
        ]);
    }

    private function staffPayAmount(Order $order): int
    {
        return max(0, (int)$order->total_amount - (int)$order->commission_balance);
    }
}
