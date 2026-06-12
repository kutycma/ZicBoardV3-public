<?php

namespace App\Http\Controllers\V1\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\SubscriptionSubscribeUrl;
use App\Models\UserSubscription;
use App\Services\Manager\ManagerAccessService;
use App\Services\Manager\ManagerAuditService;
use App\Utils\Helper;

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
}