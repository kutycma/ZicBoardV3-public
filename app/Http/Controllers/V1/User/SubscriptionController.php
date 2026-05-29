<?php

namespace App\Http\Controllers\V1\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserSubscription;
use App\Services\SubscriptionService;
use App\Services\UserService;
use App\Utils\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class SubscriptionController extends Controller
{
    public function fetch(Request $request)
    {
        $user = User::find($request->user['id']);
        if (!$user) {
            abort(500, __('The user does not exist'));
        }

        $subscriptionService = new SubscriptionService();
        $subscriptionService->getPrimaryForUser($user);

        $subscriptions = UserSubscription::with('plan')
            ->where('user_id', $user->id)
            ->where('status', SubscriptionService::STATUS_ACTIVE)
            ->orderByRaw('CASE WHEN token = ? THEN 0 ELSE 1 END', [$user->token])
            ->orderBy('updated_at', 'DESC')
            ->orderBy('id', 'DESC')
            ->get();

        $userService = new UserService();
        $changeSniEnabled = (int)config('zicboard.change_sni_enable', 1) === 1;
        foreach ($subscriptions as $subscription) {
            $serviceUser = $subscriptionService->applyToUser(clone $user, $subscription);
            $aliveIps = Cache::get('ALIVE_IP_SUBSCRIPTION_' . $subscription->id, []);
            $usedTraffic = (int)$subscription->u + (int)$subscription->d;

            $subscription->makeHidden(['remarks', 'origin_order_id', 'last_order_id', 'token', 'uuid']);
            $subscription->subscribe_url = Helper::getSubscribeUrl($subscription->token);
            $subscription->alive_ip = is_array($aliveIps) ? count($aliveIps) : 0;
            $subscription->reset_day = $userService->getResetDay($serviceUser);
            $subscription->used_traffic = $usedTraffic;
            $subscription->remaining_traffic = max(0, (int)$subscription->transfer_enable - $usedTraffic);
            $subscription->device_count = $subscription->devices()->where('status', 'bound')->count();
            $subscription->pending_device_count = $subscription->devices()->where('status', 'pending')->count();
            $subscription->banned_device_count = $subscription->devices()->where('status', 'banned')->count();
            if (!$changeSniEnabled) {
                $subscription->makeHidden(['name_sni', 'network_settings']);
            }
        }

        return response([
            'data' => $subscriptions,
            'allow_new_period' => config('zicboard.allow_new_period', 0)
        ]);
    }

    public function updateNote(Request $request)
    {
        $validated = $request->validate([
            'subscription_id' => 'required|integer',
            'note' => 'nullable|string|max:200'
        ]);

        $user = User::find($request->user['id']);
        if (!$user) {
            abort(500, __('The user does not exist'));
        }

        $subscription = (new SubscriptionService())->getForUser($user, $validated['subscription_id']);
        if (!$subscription || $subscription->status !== SubscriptionService::STATUS_ACTIVE) {
            abort(404, __('Subscription does not exist'));
        }

        $note = trim((string)($validated['note'] ?? ''));
        $note = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $note) ?? '';
        $subscription->user_note = $note === '' ? null : $note;

        if (!$subscription->save()) {
            abort(500, __('Update failed'));
        }

        return response([
            'data' => [
                'id' => (int)$subscription->id,
                'user_note' => $subscription->user_note
            ],
            'message' => __('Note updated successfully')
        ]);
    }
}
