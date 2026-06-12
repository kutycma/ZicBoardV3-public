<?php

namespace App\Http\Controllers\V1\Staff;

use App\Http\Controllers\Controller;
use App\Http\Requests\Staff\SubscriptionSubscribeUrl;
use App\Models\Plan;
use App\Models\User;
use App\Models\UserSubscription;
use App\Services\Staff\StaffAuditService;
use App\Utils\Helper;

class SubscriptionController extends Controller
{
    public function subscribeUrl(SubscriptionSubscribeUrl $request, StaffAuditService $audit)
    {
        $staffUserId = $request->user['id'];
        $targetUser = User::where('id', $request->input('target_user_id'))
            ->where('invite_user_id', $staffUserId)
            ->where('is_admin', 0)
            ->where('is_staff', 0)
            ->first();

        if (!$targetUser) {
            abort(403, 'You do not have permission to access this user');
        }

        $subscription = UserSubscription::where('id', $request->input('subscription_id'))->first();
        if (!$subscription) {
            abort(500, 'Subscription does not exist');
        }
        if ((int)$subscription->user_id !== (int)$targetUser->id) {
            abort(403, 'Subscription does not belong to selected user');
        }

        $plan = $subscription->plan_id ? Plan::find($subscription->plan_id) : null;
        if (!Helper::canExposeSubscribeUrl($plan, $request)) {
            $result = [
                'url' => null,
                'error' => 'subscribe_url_disabled',
                'protected' => false
            ];
        } else {
            $result = Helper::getSubscribeUrlDetail((string)$subscription->token, $request);
        }

        $audit->record($request, 'subscription.subscribe_url', [
            'staff_id' => $staffUserId,
            'target_user_id' => $targetUser->id,
            'target_email' => $targetUser->email,
            'subscription_id' => $subscription->id,
            'subscribe_url_error' => $result['error'] ?? null,
            'subscribe_url_protected' => (bool)($result['protected'] ?? false)
        ]);

        return response([
            'data' => [
                'subscription_id' => (int)$subscription->id,
                'subscribe_url' => $result['url'] ?? null,
                'subscribe_url_error' => $result['error'] ?? null,
                'subscribe_url_protected' => (bool)($result['protected'] ?? false)
            ]
        ]);
    }
}
