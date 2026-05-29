<?php

namespace App\Http\Controllers\V1\Staff;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Plan;
use App\Models\Staff;
use App\Models\User;
use App\Services\SubscriptionService;
use App\Services\UserService;
use App\Utils\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;

class HomeController extends Controller
{
    public function info(Request $request)
    {
        $staff = $this->activeStaff($request);
        $user = User::find($request->user['id']);

        return response()->json([
            'status' => 'success',
            'data' => [
                'id' => $user->id,
                'email' => $user->email,
                'is_staff' => $user->is_staff,
                'balance' => $user->balance,
                'commission_balance' => $user->commission_balance,
                'commission_rate' => $user->commission_rate ?? config('zicboard.invite_commission', 10),
                'discount' => $user->discount ?? '0',
                'device_hwid_enable' => (int)config('zicboard.device_hwid_enable', 1),
                'staff' => [
                    'domain' => $staff->domain,
                    'title' => $staff->title,
                    'status' => $staff->status
                ]
            ]
        ]);
    }

    public function stat(Request $request)
    {
        $staffUserId = $this->activeStaff($request)->user_id;

        return response()->json([
            'today_income' => Order::where('created_at', '>=', strtotime(date('Y-m-d')))
                ->where('created_at', '<', time())
                ->whereNotIn('status', [0, 2])
                ->where('invite_user_id', $staffUserId)
                ->sum('total_amount'),
            'month_income' => Order::where('created_at', '>=', strtotime(date('Y-m-1')))
                ->where('created_at', '<', time())
                ->whereNotIn('status', [0, 2])
                ->where('invite_user_id', $staffUserId)
                ->sum('total_amount'),
            'new_users' => (int)User::where('invite_user_id', $staffUserId)->count(),
        ]);
    }

    public function config(Request $request)
    {
        $staff = $this->activeStaff($request);
        $user = User::find($staff->user_id);

        return response()->json([
            'email' => $user ? $user->email : null,
            'domain' => $staff->domain,
            'title' => $staff->title,
            'description' => $staff->description,
            'logo' => $staff->logo,
            'background_url' => $staff->background_url,
            'custom_html' => $staff->custom_html,
        ]);
    }

    public function configSave(Request $request)
    {
        $staff = $this->activeStaff($request);
        $data = $request->only([
            'title',
            'description',
            'logo',
            'background_url',
            'custom_html',
        ]);

        $validator = Validator::make($data, [
            'logo' => 'nullable|url',
            'background_url' => 'nullable|url',
        ], [
            'logo.url' => 'Logo must be a valid URL',
            'background_url.url' => 'Background image must be a valid URL',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->first()
            ], 400);
        }

        $staff->update($data);

        return response()->json(['status' => 'success']);
    }

    public function finduser(Request $request)
    {
        $staffUserId = $this->activeStaff($request)->user_id;
        $current = max(1, (int)$request->input('page', $request->input('current', 1)));
        $pageSize = max(10, (int)$request->input('limit', $request->input('pageSize', 10)));
        $sortType = in_array($request->input('sort_type'), ['ASC', 'DESC']) ? $request->input('sort_type') : 'DESC';
        $sort = in_array($request->input('sort'), ['id', 'email', 'created_at', 'expired_at', 'balance', 'commission_balance'])
            ? $request->input('sort')
            : 'created_at';

        $userModel = User::where('invite_user_id', $staffUserId)
            ->where('is_admin', 0)
            ->where('is_staff', 0)
            ->orderBy($sort, $sortType);

        if ($request->filled('email')) {
            $userModel->where('email', 'like', '%' . $request->input('email') . '%');
        }

        if ($request->filled('id')) {
            $userModel->where('id', $request->input('id'));
        }

        $total = $userModel->count();
        $users = $userModel->forPage($current, $pageSize)->get();
        $plans = Plan::get()->keyBy('id');
        $subscriptionService = new SubscriptionService();
        $userService = new UserService();

        foreach ($users as $user) {
            $subscription = $subscriptionService->getPrimaryForUser($user);
            if ($subscription) {
                $subscriptionService->applyToUser($user, $subscription);
            }

            $user->plan_name = $user->plan_id && isset($plans[$user->plan_id])
                ? $plans[$user->plan_id]->name
                : null;

            $ips = [];
            $ipsArray = $subscription
                ? Cache::get('ALIVE_IP_SUBSCRIPTION_' . $subscription->id)
                : Cache::get('ALIVE_IP_USER_' . $user->id);

            $user->alive_ip = is_array($ipsArray) ? (int)($ipsArray['alive_ip'] ?? 0) : 0;
            if (is_array($ipsArray)) {
                foreach ($ipsArray as $nodeTypeId => $data) {
                    if ($nodeTypeId === 'alive_ip' || !is_array($data) || !isset($data['aliveips'])) {
                        continue;
                    }
                    foreach ($data['aliveips'] as $ipNodeId) {
                        $ip = explode('_', $ipNodeId)[0];
                        $ips[] = $ip . '_' . $nodeTypeId;
                    }
                }
            }

            $user->ips = implode(', ', $ips);
            $user->subscribe_url = Helper::getSubscribeUrl($user->token);
            $user->reset_day = $userService->getResetDay($user);
            $user->makeHidden(['token', 'uuid', 'subscription']);
        }

        return response()->json([
            'data' => $users,
            'success' => true,
            'total' => $total,
            'current' => $current,
            'pageSize' => $pageSize,
        ]);
    }

    private function activeStaff(Request $request)
    {
        $userId = $request->user['id'] ?? $request->input('user.id');
        $user = User::find($userId);
        if (!$user || !$user->is_staff) {
            abort(403, 'Từ chối truy cập: tài khoản không phải nhân viên');
        }

        $staff = Staff::where('user_id', $user->id)->where('status', 1)->first();
        if (!$staff) {
            abort(403, 'Tài khoản nhân viên chưa được kích hoạt');
        }

        return $staff;
    }
}
