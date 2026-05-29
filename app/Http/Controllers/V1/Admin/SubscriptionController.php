<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use App\Models\UserSubscription;
use App\Services\SubscriptionService;
use App\Utils\Helper;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SubscriptionController extends Controller
{
    public function fetch(Request $request)
    {
        $current = max(1, (int)$request->input('current', 1));
        $pageSize = max(10, min((int)$request->input('pageSize', 15), 100));

        $builder = UserSubscription::query()
            ->select([
                'v2_user_subscription.*',
                'users.email as user_email',
                'plans.name as plan_name',
                DB::raw('(v2_user_subscription.u + v2_user_subscription.d) as total_used'),
                DB::raw("(SELECT COUNT(*) FROM v2_user_device AS devices WHERE devices.subscription_id = v2_user_subscription.id AND devices.status = 'bound') AS device_count")
            ])
            ->leftJoin('v2_user as users', 'users.id', '=', 'v2_user_subscription.user_id')
            ->leftJoin('v2_plan as plans', 'plans.id', '=', 'v2_user_subscription.plan_id');

        $this->applyFilters($request, $builder);
        $total = (clone $builder)->count('v2_user_subscription.id');
        $subscriptions = $builder->orderBy('v2_user_subscription.updated_at', 'DESC')
            ->orderBy('v2_user_subscription.id', 'DESC')
            ->forPage($current, $pageSize)
            ->get();

        foreach ($subscriptions as $subscription) {
            $subscription->subscribe_url = Helper::getSubscribeUrl($subscription->token);
        }

        return response([
            'data' => $subscriptions,
            'total' => $total
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required|integer',
            'plan_id' => 'nullable|integer',
            'group_id' => 'nullable|integer',
            'speed_limit' => 'nullable|integer',
            'device_limit' => 'nullable|integer',
            'transfer_enable' => 'nullable|integer|min:0',
            'u' => 'nullable|integer|min:0',
            'd' => 'nullable|integer|min:0',
            'expired_at' => 'nullable|integer',
            'auto_renewal' => 'nullable|in:0,1',
            'remind_expire' => 'nullable|in:0,1',
            'remind_traffic' => 'nullable|in:0,1',
            'status' => 'nullable|in:active,disabled',
            'name_sni' => 'nullable|string|max:255',
            'network_settings' => 'nullable|string|max:255',
            'remarks' => 'nullable'
        ]);

        $subscription = UserSubscription::find($validated['id']);
        if (!$subscription) {
            abort(500, 'Gói đăng ký không tồn tại');
        }

        unset($validated['id']);
        if (array_key_exists('plan_id', $validated) && $validated['plan_id']) {
            $plan = Plan::find($validated['plan_id']);
            if (!$plan) {
                abort(500, 'Gói không tồn tại');
            }
            $validated['group_id'] = $validated['group_id'] ?? $plan->group_id;
        }

        $subscriptionService = new SubscriptionService();
        $primarySubscription = $subscription->user
            ? $subscriptionService->getPrimaryForUser($subscription->user)
            : null;
        $shouldSyncUserSummary = $primarySubscription && (int)$primarySubscription->id === (int)$subscription->id;

        if (!$subscription->update($validated)) {
            abort(500, 'Lưu thất bại');
        }

        if ($shouldSyncUserSummary) {
            $subscriptionService->syncUserSummary($subscription);
        }

        return response([
            'data' => true
        ]);
    }

    public function resetSecret(Request $request)
    {
        $request->validate([
            'id' => 'required|integer'
        ]);
        $subscription = UserSubscription::find($request->input('id'));
        if (!$subscription) {
            abort(500, 'Gói đăng ký không tồn tại');
        }

        $subscriptionService = new SubscriptionService();
        $primarySubscription = $subscription->user
            ? $subscriptionService->getPrimaryForUser($subscription->user)
            : null;
        $shouldSyncUserSummary = $primarySubscription && (int)$primarySubscription->id === (int)$subscription->id;

        $subscription->token = Helper::guid();
        $subscription->uuid = Helper::guid(true);
        if (!$subscription->save()) {
            abort(500, 'Đặt lại thất bại');
        }
        if ($shouldSyncUserSummary) {
            $subscriptionService->syncUserSummary($subscription);
        }

        return response([
            'data' => true,
            'subscribe_url' => Helper::getSubscribeUrl($subscription->token)
        ]);
    }

    private function applyFilters(Request $request, Builder $builder)
    {
        foreach ($request->input('filter', []) ?: [] as $filter) {
            $column = $this->filterColumn($filter['key'] ?? null);
            if (!$column) {
                continue;
            }

            $condition = ($filter['condition'] ?? '=') === '=' ? '=' : 'like';
            $value = $condition === '=' ? $filter['value'] : "%{$filter['value']}%";
            $builder->where($column, $condition, $value);
        }
    }

    private function filterColumn($key)
    {
        switch ($key) {
            case 'id':
                return 'v2_user_subscription.id';
            case 'user_id':
                return 'v2_user_subscription.user_id';
            case 'plan_id':
                return 'v2_user_subscription.plan_id';
            case 'email':
                return 'users.email';
            case 'status':
                return 'v2_user_subscription.status';
            default:
                return null;
        }
    }
}
