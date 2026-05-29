<?php

namespace App\Http\Controllers\V1\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\SubscriptionService;
use Illuminate\Http\Request;

class SniController extends Controller
{
    public function fetchSni(Request $request)
    {
        $this->ensureFeatureEnabled();

        $current = max(1, (int)$request->input('current', 1));
        $pageSize = max(1, (int)$request->input('pageSize', 7));
        $sniData = config('sni.sni', []);

        if (!is_array($sniData)) {
            $sniData = [];
        }

        $total = count($sniData);
        $offset = ($current - 1) * $pageSize;

        return response([
            'data' => array_slice($sniData, $offset, $pageSize),
            'total' => $total
        ]);
    }

    public function changeSNI(Request $request)
    {
        $this->ensureFeatureEnabled();

        $request->validate([
            'subscription_id' => 'nullable|integer',
            'name_sni' => 'nullable|string|max:255',
            'network_settings' => 'nullable|string|max:255'
        ]);

        $user = User::find($request->user['id']);
        if (!$user) {
            abort(500, __('The user does not exist'));
        }

        $subscriptionService = new SubscriptionService();
        $subscription = $request->input('subscription_id')
            ? $subscriptionService->getForUser($user, $request->input('subscription_id'))
            : $subscriptionService->getPrimaryForUser($user);

        if (!$subscription) {
            abort(500, __('Subscription does not exist'));
        }

        $subscription->name_sni = $request->input('name_sni');
        $subscription->network_settings = $request->input('network_settings');

        if (!$subscription->save()) {
            abort(500, __('Update failed'));
        }

        return response([
            'data' => true,
            'message' => __('SNI updated successfully')
        ]);
    }

    private function ensureFeatureEnabled()
    {
        if (!(int)config('zicboard.change_sni_enable', 1)) {
            abort(404);
        }
    }
}
