<?php

namespace App\Http\Controllers\V1\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\OrderAssign;
use App\Http\Requests\Manager\OrderPaid;
use App\Models\Order;
use App\Models\Plan;
use App\Models\User;
use App\Services\CouponService;
use App\Services\Manager\ManagerAccessService;
use App\Services\Manager\ManagerAuditService;
use App\Services\OrderService;
use App\Services\SubscriptionService;
use App\Services\UserService;
use App\Utils\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    private $access;
    private $audit;

    public function __construct(ManagerAccessService $access, ManagerAuditService $audit)
    {
        $this->access = $access;
        $this->audit = $audit;
    }

    public function fetch(Request $request)
    {
        $manager = $this->access->currentManager($request);
        $current = max(1, (int)$request->input('page', $request->input('current', 1)));
        $pageSize = min(100, max(10, (int)$request->input('limit', $request->input('pageSize', 10))));
        $sort = in_array($request->input('sort'), ['id', 'trade_no', 'total_amount', 'created_at', 'updated_at'], true)
            ? $request->input('sort')
            : 'created_at';
        $sortType = in_array($request->input('sort_type'), ['ASC', 'DESC'], true)
            ? $request->input('sort_type')
            : 'DESC';

        $query = Order::where('manager_id', $manager->id)->orderBy($sort, $sortType);
        if ($request->filled('status')) {
            $query->where('status', $request->input('status'));
        }
        if ($request->filled('user_id')) {
            $query->where('user_id', $request->input('user_id'));
        }
        if ($request->filled('trade_no')) {
            $query->where('trade_no', 'like', '%' . $request->input('trade_no') . '%');
        }

        $total = $query->count();
        $orders = $query->forPage($current, $pageSize)->get();
        $users = User::whereIn('id', $orders->pluck('user_id')->unique()->all())->get()->keyBy('id');
        $plans = Plan::whereIn('id', $orders->pluck('plan_id')->unique()->all())->get()->keyBy('id');

        foreach ($orders as $order) {
            $user = $users->get($order->user_id);
            $plan = $plans->get($order->plan_id);
            $order->user_email = $user ? $user->email : null;
            $order->plan_name = $plan ? $plan->name : null;
        }

        return response([
            'data' => $orders,
            'total' => $total,
            'current' => $current,
            'pageSize' => $pageSize
        ]);
    }

    public function assign(OrderAssign $request)
    {
        $manager = $this->access->currentManager($request);
        $plan = Plan::find($request->input('plan_id'));
        if (!$plan) {
            abort(500, 'Plan does not exist');
        }

        $period = $request->input('period');
        $planPrice = $plan->getAttribute($period);
        if ($planPrice === null || (int)$planPrice < 0) {
            abort(500, 'Plan does not support this period');
        }

        $targetUser = $this->access->findManageableUserFromRequest($request, $manager, $request->input('target_user_id'));
        if ($targetUser->email !== trim((string)$request->input('email'))) {
            abort(403, 'Selected user email does not match');
        }
        $userService = new UserService();
        if ($userService->isNotCompleteOrderByUserId($targetUser->id)) {
            abort(500, 'Target user has a pending order');
        }

        $subscriptionService = new SubscriptionService();
        $subscription = $request->input('subscription_id')
            ? $subscriptionService->getForUser($targetUser, $request->input('subscription_id'))
            : null;
        if ($request->input('subscription_id') && !$subscription) {
            abort(500, 'Subscription does not exist');
        }
        if ($subscription && (int)$subscription->plan_id !== (int)$plan->id && $period !== 'reset_price') {
            abort(500, 'Selected subscription does not match plan');
        }

        DB::beginTransaction();
        try {
            $order = new Order();
            $orderService = new OrderService($order);
            $order->user_id = $targetUser->id;
            $order->subscription_id = $subscription ? $subscription->id : null;
            $order->plan_id = $plan->id;
            $order->period = $period;
            $order->trade_no = Helper::generateOrderNo();
            $order->total_amount = (int)$planPrice;
            $order->manager_id = $manager->id;

            $couponCode = trim((string)$request->input('coupon_code', ''));
            if ($couponCode !== '') {
                $couponService = new CouponService($couponCode);
                if (!$couponService->use($order)) {
                    throw new \Exception('Coupon failed');
                }
                $order->coupon_id = $couponService->getId();
            }

            $orderService->setVipDiscount($targetUser);
            $orderService->setOrderType($targetUser);

            if ($targetUser->balance > 0 && $order->total_amount > 0) {
                $remainingBalance = $targetUser->balance - $order->total_amount;
                if ($remainingBalance > 0) {
                    if (!$userService->addBalance($order->user_id, - $order->total_amount)) {
                        throw new \Exception('Insufficient balance');
                    }
                    $order->balance_amount = $order->total_amount;
                    $order->total_amount = 0;
                } else {
                    if (!$userService->addBalance($order->user_id, - $targetUser->balance)) {
                        throw new \Exception('Insufficient balance');
                    }
                    $order->balance_amount = $targetUser->balance;
                    $order->total_amount -= $targetUser->balance;
                }
            }

            $orderService->setInvite($targetUser);
            if ((int)$order->total_amount <= 0) {
                $order->commission_balance = 0;
            }

            if (!$order->save()) {
                throw new \Exception('Create order failed');
            }
            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            if ($e instanceof \Symfony\Component\HttpKernel\Exception\HttpException) {
                throw $e;
            }
            abort(500, $e->getMessage());
        }

        $this->audit->record($request, 'order.assign', [
            'manager_id' => $manager->id,
            'manager_email' => $manager->email,
            'target_user_id' => $targetUser->id,
            'target_email' => $targetUser->email,
            'order_trade_no' => $order->trade_no,
            'plan_id' => $order->plan_id,
            'period' => $order->period,
            'coupon_id' => $order->coupon_id,
            'discount_amount' => $order->discount_amount,
            'balance_amount' => $order->balance_amount,
            'surplus_amount' => $order->surplus_amount,
            'refund_amount' => $order->refund_amount,
            'total_amount' => $order->total_amount
        ]);

        return response([
            'data' => $order->trade_no
        ]);
    }

    public function paid(OrderPaid $request)
    {
        $manager = $this->access->currentManager($request);
        $tradeNo = $request->input('trade_no');

        DB::beginTransaction();
        try {
            $order = $this->access->findManagerOrder($manager->id, $tradeNo, true);
            if ((int)$order->status !== 0) {
                abort(500, 'Only pending orders can be approved');
            }
            $targetUser = $this->access->findManageableUser($order->user_id);

            $orderService = new OrderService($order);
            if (!$orderService->paid('manager_manual_operation')) {
                throw new \Exception('Approve order failed');
            }
            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            if ($e instanceof \Symfony\Component\HttpKernel\Exception\HttpException) {
                throw $e;
            }
            abort(500, $e->getMessage());
        }

        $this->audit->record($request, 'order.paid', [
            'manager_id' => $manager->id,
            'manager_email' => $manager->email,
            'target_user_id' => $targetUser->id,
            'target_email' => $targetUser->email,
            'order_trade_no' => $order->trade_no,
            'plan_id' => $order->plan_id,
            'total_amount' => $order->total_amount
        ]);
        $this->audit->notifyOrderPaid($order, $manager, $targetUser);

        return response([
            'data' => true
        ]);
    }
}