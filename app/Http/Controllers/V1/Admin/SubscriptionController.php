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
        $includeSubscribeUrl = filter_var($request->input('include_subscribe_url', false), FILTER_VALIDATE_BOOLEAN);

        $countBuilder = UserSubscription::query();
        if ($this->hasEmailFilter($request)) {
            $countBuilder->leftJoin('v2_user as users', 'users.id', '=', 'v2_user_subscription.user_id');
        }
        $this->applyFilters($request, $countBuilder);
        $total = $countBuilder->count('v2_user_subscription.id');

        $builder = UserSubscription::query()
            ->select([
                'v2_user_subscription.id',
                'v2_user_subscription.user_id',
                'v2_user_subscription.plan_id',
                'v2_user_subscription.group_id',
                'v2_user_subscription.speed_limit',
                'v2_user_subscription.device_limit',
                'v2_user_subscription.u',
                'v2_user_subscription.d',
                'v2_user_subscription.transfer_enable',
                'v2_user_subscription.expired_at',
                'v2_user_subscription.auto_renewal',
                'v2_user_subscription.token',
                'v2_user_subscription.uuid',
                'v2_user_subscription.status',
                'v2_user_subscription.remarks',
                'v2_user_subscription.created_at',
                'v2_user_subscription.updated_at',
                'users.email as user_email',
                'plans.name as plan_name',
                DB::raw('(v2_user_subscription.u + v2_user_subscription.d) as total_used')
            ])
            ->leftJoin('v2_user as users', 'users.id', '=', 'v2_user_subscription.user_id')
            ->leftJoin('v2_plan as plans', 'plans.id', '=', 'v2_user_subscription.plan_id');

        $this->applyFilters($request, $builder);
        $subscriptions = $builder->orderBy('v2_user_subscription.updated_at', 'DESC')
            ->orderBy('v2_user_subscription.id', 'DESC')
            ->forPage($current, $pageSize)
            ->get();

        $subscriptionIds = $subscriptions->pluck('id')->all();
        $deviceCounts = $subscriptionIds
            ? DB::table('v2_user_device')
                ->select('subscription_id', DB::raw('COUNT(*) AS total'))
                ->whereIn('subscription_id', $subscriptionIds)
                ->where('status', 'bound')
                ->groupBy('subscription_id')
                ->pluck('total', 'subscription_id')
            : collect();

        foreach ($subscriptions as $subscription) {
            $subscription->device_count = (int)($deviceCounts[$subscription->id] ?? 0);
        }

        if ($includeSubscribeUrl) {
            foreach ($subscriptions as $subscription) {
                $subscription->subscribe_url = Helper::getSubscribeUrl($subscription->token);
            }
        }

        return response([
            'data' => $subscriptions,
            'total' => $total
        ]);
    }

    public function subscribeUrl(Request $request)
    {
        $request->validate([
            'id' => 'required|integer'
        ]);

        $subscription = UserSubscription::query()
            ->select(['id', 'token'])
            ->find($request->input('id'));
        if (!$subscription) {
            abort(500, 'Subscription does not exist');
        }

        return response([
            'data' => Helper::getSubscribeUrl($subscription->token)
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

    private function hasEmailFilter(Request $request)
    {
        foreach ($request->input('filter', []) ?: [] as $filter) {
            if (($filter['key'] ?? null) === 'email' && trim((string)($filter['value'] ?? '')) !== '') {
                return true;
            }
        }

        return false;
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
