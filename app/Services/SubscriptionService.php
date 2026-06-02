<?php

namespace App\Services;

use App\Models\Order;
use App\Models\Plan;
use App\Models\User;
use App\Models\UserDevice;
use App\Models\UserSubscription;
use App\Utils\Helper;
use Illuminate\Support\Facades\DB;

class SubscriptionService
{
    const STATUS_ACTIVE = 'active';
    const STATUS_DISABLED = 'disabled';

    const SERVICE_FIELDS = [
        'plan_id',
        'group_id',
        'speed_limit',
        'device_limit',
        't',
        'u',
        'd',
        'transfer_enable',
        'expired_at',
        'auto_renewal',
        'remind_expire',
        'remind_traffic',
        'token',
        'uuid'
    ];

    public function findByToken(string $token)
    {
        $subscription = UserSubscription::where('token', $token)->first();
        if ($subscription) {
            return $subscription;
        }

        $user = User::where('token', $token)->first();
        if (!$user) {
            return null;
        }

        return $this->getPrimaryForUser($user);
    }

    public function getPrimaryForUser(User $user)
    {
        $subscription = UserSubscription::where('user_id', $user->id)
            ->where('status', self::STATUS_ACTIVE)
            ->orderByRaw('CASE WHEN token = ? THEN 0 ELSE 1 END', [$user->token])
            ->orderBy('updated_at', 'DESC')
            ->orderBy('id', 'DESC')
            ->first();
        if ($subscription) {
            return $subscription;
        }

        if (UserSubscription::where('user_id', $user->id)->exists()) {
            return null;
        }

        if (!$this->hasLegacySubscription($user)) {
            return null;
        }

        return $this->createFromLegacyUser($user);
    }

    public function getSingleModeTargetForUser(User $user)
    {
        $subscription = $this->getPrimaryForUser($user);
        if ($subscription) {
            return $subscription;
        }

        return UserSubscription::where('user_id', $user->id)
            ->orderByRaw('CASE WHEN status = ? THEN 0 ELSE 1 END', [self::STATUS_ACTIVE])
            ->orderByRaw('CASE WHEN token = ? THEN 0 ELSE 1 END', [$user->token])
            ->orderBy('updated_at', 'DESC')
            ->orderBy('id', 'DESC')
            ->first();
    }

    public function userHasAnySubscription(User $user)
    {
        return UserSubscription::where('user_id', $user->id)->exists();
    }

    public function enforceSingleSubscriptionMode($userId = null)
    {
        $affected = 0;
        $lastUserId = 0;

        do {
            $query = UserSubscription::select('user_id')
                ->where('status', self::STATUS_ACTIVE)
                ->groupBy('user_id')
                ->havingRaw('COUNT(*) > 1')
                ->orderBy('user_id')
                ->limit(500);

            if ($userId) {
                $query->where('user_id', $userId);
            } else {
                $query->where('user_id', '>', $lastUserId);
            }

            $userIds = $query->pluck('user_id');
            foreach ($userIds as $currentUserId) {
                $lastUserId = max($lastUserId, (int)$currentUserId);
                $user = User::find($currentUserId);
                if (!$user) {
                    continue;
                }

                $primary = $this->getPrimaryForUser($user);
                if (!$primary) {
                    continue;
                }

                $affected += $this->disableOtherActiveSubscriptions($primary);
                $this->syncUserSummary($primary);
            }
        } while (!$userId && $userIds->isNotEmpty());

        return $affected;
    }

    public function getForUser(User $user, $subscriptionId)
    {
        if (!$subscriptionId) {
            return null;
        }

        return UserSubscription::where('user_id', $user->id)
            ->where('id', $subscriptionId)
            ->first();
    }

    public function getRenewableForPlan(User $user, int $planId)
    {
        $subscription = UserSubscription::where('user_id', $user->id)
            ->where('plan_id', $planId)
            ->where('status', self::STATUS_ACTIVE)
            ->where(function ($query) {
                $query->where('expired_at', '>', time())
                    ->orWhereNull('expired_at');
            })
            ->orderBy('updated_at', 'DESC')
            ->orderBy('id', 'DESC')
            ->first();
        if ($subscription) {
            return $subscription;
        }

        $primary = $this->getPrimaryForUser($user);
        if ($primary && (int)$primary->plan_id === $planId) {
            return $primary;
        }

        return null;
    }

    public function isMultipleSubscriptionEnabled()
    {
        return (int)config('zicboard.multiple_subscription_enable', 1) === 1;
    }

    public function resolveOrderTarget(User $user, Order $order)
    {
        if (!$order->plan_id || $order->period === 'deposit') {
            return null;
        }

        if ($order->period === 'reset_price') {
            if ($order->subscription_id) {
                return $this->getForUser($user, $order->subscription_id);
            }

            return $this->getRenewableForPlan($user, (int)$order->plan_id);
        }

        if (!$this->isMultipleSubscriptionEnabled()) {
            if ($order->subscription_id) {
                $subscription = $this->getForUser($user, $order->subscription_id);
                if ($subscription) {
                    return $subscription;
                }
            }

            return $this->getSingleModeTargetForUser($user);
        }

        if ($order->subscription_id) {
            return $this->getForUser($user, $order->subscription_id);
        }

        return null;
    }

    public function createFromPlan(User $user, Plan $plan, array $attributes = [])
    {
        $token = $attributes['token'] ?? Helper::guid();
        $uuid = $attributes['uuid'] ?? Helper::guid(true);

        return UserSubscription::create(array_merge([
            'user_id' => $user->id,
            'plan_id' => $plan->id,
            'group_id' => $plan->group_id,
            'speed_limit' => $plan->speed_limit,
            'device_limit' => $plan->device_limit,
            't' => 0,
            'u' => 0,
            'd' => 0,
            'transfer_enable' => $plan->transfer_enable * 1073741824,
            'expired_at' => 0,
            'auto_renewal' => 0,
            'remind_expire' => 1,
            'remind_traffic' => 1,
            'token' => $token,
            'uuid' => $uuid,
            'status' => self::STATUS_ACTIVE
        ], $attributes));
    }

    public function applyPlan(UserSubscription $subscription, Plan $plan, array $attributes = [])
    {
        $subscription->plan_id = $plan->id;
        $subscription->group_id = $plan->group_id;
        $subscription->speed_limit = $plan->speed_limit;
        $subscription->device_limit = $plan->device_limit;
        $subscription->t = $attributes['t'] ?? 0;
        $subscription->u = $attributes['u'] ?? 0;
        $subscription->d = $attributes['d'] ?? 0;
        $subscription->transfer_enable = $attributes['transfer_enable'] ?? $plan->transfer_enable * 1073741824;
        $subscription->expired_at = array_key_exists('expired_at', $attributes) ? $attributes['expired_at'] : 0;
        $subscription->auto_renewal = $attributes['auto_renewal'] ?? 0;
        $subscription->remind_expire = $attributes['remind_expire'] ?? 1;
        $subscription->remind_traffic = $attributes['remind_traffic'] ?? 1;
        $subscription->status = $attributes['status'] ?? self::STATUS_ACTIVE;

        return $subscription;
    }

    public function createFromLegacyUser(User $user)
    {
        return DB::transaction(function () use ($user) {
            $lockedUser = User::where('id', $user->id)->lockForUpdate()->first();
            if (!$lockedUser) {
                return null;
            }

            $existing = UserSubscription::where('user_id', $lockedUser->id)
                ->where('status', self::STATUS_ACTIVE)
                ->lockForUpdate()
                ->first();
            if ($existing) {
                return $existing;
            }

            if (!$this->hasLegacySubscription($lockedUser)) {
                return null;
            }

            $attributes = [
                'user_id' => $lockedUser->id,
                'plan_id' => $lockedUser->plan_id,
                'group_id' => $lockedUser->group_id,
                'speed_limit' => $lockedUser->speed_limit,
                'device_limit' => $lockedUser->device_limit,
                't' => $lockedUser->t ?: 0,
                'u' => $lockedUser->u ?: 0,
                'd' => $lockedUser->d ?: 0,
                'transfer_enable' => $lockedUser->transfer_enable ?: 0,
                'expired_at' => $lockedUser->expired_at,
                'auto_renewal' => $lockedUser->auto_renewal ?: 0,
                'remind_expire' => $lockedUser->remind_expire === null ? 1 : $lockedUser->remind_expire,
                'remind_traffic' => $lockedUser->remind_traffic === null ? 1 : $lockedUser->remind_traffic,
                'token' => $lockedUser->token ?: Helper::guid(),
                'uuid' => $lockedUser->uuid ?: Helper::guid(true),
                'status' => self::STATUS_ACTIVE,
                'remarks' => 'Migrated from legacy user subscription fields'
            ];

            if (\Illuminate\Support\Facades\Schema::hasColumn('v2_user_subscription', 'name_sni')
                && array_key_exists('name_sni', $lockedUser->getAttributes())) {
                $attributes['name_sni'] = $lockedUser->getAttribute('name_sni');
            }
            if (\Illuminate\Support\Facades\Schema::hasColumn('v2_user_subscription', 'network_settings')
                && array_key_exists('network_settings', $lockedUser->getAttributes())) {
                $attributes['network_settings'] = $lockedUser->getAttribute('network_settings');
            }

            $subscription = UserSubscription::create($attributes);

            UserDevice::where('user_id', $lockedUser->id)
                ->whereNull('subscription_id')
                ->update(['subscription_id' => $subscription->id]);

            return $subscription;
        }, 3);
    }

    public function applyToUser(User $user, UserSubscription $subscription)
    {
        foreach (self::SERVICE_FIELDS as $field) {
            $user->setAttribute($field, $subscription->getAttribute($field));
        }
        $user->setAttribute('subscription_id', $subscription->id);
        $user->setAttribute('subscription', $subscription);
        return $user;
    }

    public function syncUserSummary(UserSubscription $subscription)
    {
        $user = User::find($subscription->user_id);
        if (!$user) {
            return false;
        }

        $params = [];
        foreach (self::SERVICE_FIELDS as $field) {
            $params[$field] = $subscription->getAttribute($field);
        }

        return $user->update($params);
    }

    public function disableOtherActiveSubscriptions(UserSubscription $subscription)
    {
        return UserSubscription::where('user_id', $subscription->user_id)
            ->where('id', '!=', $subscription->id)
            ->where('status', self::STATUS_ACTIVE)
            ->update(['status' => self::STATUS_DISABLED]);
    }

    public function isAvailable(UserSubscription $subscription)
    {
        $user = $subscription->relationLoaded('user')
            ? $subscription->user
            : User::find($subscription->user_id);
        if (!$user || $user->banned || $subscription->status !== self::STATUS_ACTIVE) {
            return false;
        }

        return $subscription->transfer_enable
            && ($subscription->expired_at > time() || $subscription->expired_at === null);
    }

    private function hasLegacySubscription(User $user)
    {
        return $user->plan_id !== null
            || (int)$user->transfer_enable > 0;
    }
}
