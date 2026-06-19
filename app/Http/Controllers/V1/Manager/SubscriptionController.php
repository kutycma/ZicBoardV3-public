<?php

namespace App\Http\Controllers\V1\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\SubscriptionSubscribeUrl;
use App\Http\Requests\Manager\SubscriptionUpdate;
use App\Models\Plan;
use App\Models\UserSubscription;
use App\Services\Manager\ManagerAccessService;
use App\Services\Manager\ManagerAuditService;
use App\Services\SubscriptionService;
use App\Services\UserDeviceService;
use App\Utils\Helper;
use Illuminate\Support\Facades\DB;

class SubscriptionController extends Controller
{
    private $access;
    private $audit;

    public function __construct(ManagerAccessService $access, ManagerAuditService $audit)
    {
        $this->access = $access;
        $this->audit = $audit;
    }

    public function subscribeUrl(SubscriptionSubscribeUrl $request)
    {
        $manager = $this->access->currentManager($request);
        $targetUser = $this->access->findManageableUserFromRequest($request, $manager, $request->input('target_user_id'));

        $subscription = UserSubscription::where('id', $request->input('subscription_id'))->first();
        if (!$subscription) {
            abort(500, 'Subscription does not exist');
        }
        if ((int)$subscription->user_id !== (int)$targetUser->id) {
            abort(403, 'Subscription does not belong to selected user');
        }

        $subscribeUrl = Helper::getSubscribeUrlDetail((string)$subscription->token, $request);

        $this->audit->record($request, 'subscription.subscribe_url', [
            'manager_id' => $manager->id,
            'manager_email' => $manager->email,
            'target_user_id' => $targetUser->id,
            'target_email' => $targetUser->email,
            'subscription_id' => $subscription->id,
            'purpose' => $request->input('purpose', 'link'),
            'subscribe_url_error' => $subscribeUrl['error'] ?? null,
            'subscribe_url_protected' => (bool)($subscribeUrl['protected'] ?? false)
        ]);

        return response([
            'data' => [
                'subscription_id' => (int)$subscription->id,
                'subscribe_url' => $subscribeUrl['url'] ?? null,
                'subscribe_url_error' => $subscribeUrl['error'] ?? null,
                'subscribe_url_protected' => (bool)($subscribeUrl['protected'] ?? false)
            ]
        ]);
    }

    public function update(SubscriptionUpdate $request)
    {
        $manager = $this->access->currentManager($request);
        $targetUser = $this->access->findManageableUserFromRequest($request, $manager, $request->input('target_user_id'));

        $subscription = UserSubscription::where('id', $request->input('subscription_id'))->first();
        if (!$subscription) {
            abort(500, 'Subscription does not exist');
        }
        if ((int)$subscription->user_id !== (int)$targetUser->id) {
            abort(403, 'Subscription does not belong to selected user');
        }

        $plan = Plan::find($request->input('plan_id'));
        if (!$plan) {
            abort(500, 'Plan does not exist');
        }

        $subscriptionService = new SubscriptionService();
        $primarySubscription = $subscriptionService->getPrimaryForUser($targetUser);
        $isPrimarySubscription = $primarySubscription && (int)$primarySubscription->id === (int)$subscription->id;
        $fields = ['plan_id', 'group_id', 'transfer_enable', 'device_limit', 'speed_limit', 'expired_at'];
        $before = $this->audit->snapshot($subscription, $fields);

        DB::beginTransaction();
        try {
            $subscription->plan_id = $plan->id;
            $subscription->group_id = $plan->group_id;
            $subscription->transfer_enable = $plan->transfer_enable * 1073741824;
            $subscription->device_limit = $plan->device_limit;
            $subscription->speed_limit = $plan->speed_limit;
            $subscription->expired_at = $request->has('expired_at') ? $request->input('expired_at') : null;
            $subscription->status = SubscriptionService::STATUS_ACTIVE;
            if (!$subscription->save()) {
                throw new \Exception('Update subscription failed');
            }
            $singleSubscriptionMode = !$subscriptionService->isMultipleSubscriptionEnabled();
            if ($singleSubscriptionMode) {
                $subscriptionService->disableOtherActiveSubscriptions($subscription);
            }
            if ($isPrimarySubscription || $singleSubscriptionMode) {
                $subscriptionService->syncUserSummary($subscription);
            }
            (new UserDeviceService())->ensureWaitingSlot($subscription);
            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            abort(500, $e->getMessage());
        }

        $after = $this->audit->snapshot($subscription, $fields);
        $this->audit->record($request, 'subscription.update', [
            'manager_id' => $manager->id,
            'manager_email' => $manager->email,
            'target_user_id' => $targetUser->id,
            'target_email' => $targetUser->email,
            'subscription_id' => $subscription->id,
            'changes' => $this->audit->changes($before, $after, $fields)
        ]);

        return response([
            'data' => true
        ]);
    }
}