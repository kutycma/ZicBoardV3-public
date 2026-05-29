<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use App\Models\UserSubscription;
use App\Services\SubscriptionService;
use App\Services\UserDeviceService;
use App\Utils\Helper;
use Illuminate\Support\Facades\Cache;

class Client
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = $request->input('token');
        if (empty($token)) {
            abort(403, 'Thiếu token');
        }
        $submethod = (int)config('zicboard.show_subscribe_method', 0);
        switch ($submethod) {
            case 0:
                break;
            case 1:
                if (!Cache::has("otpn_{$token}")) {
                    abort(403, 'Token không hợp lệ');
                }
                $usertoken = Cache::pull("otpn_{$token}");
                Cache::forget("otp_{$usertoken}");
                $token = $usertoken;
                break;
            case 2:
                $usertoken = Cache::get("totp_{$token}");
                if (!$usertoken) {
                    $timestep = (int)config('zicboard.show_subscribe_expire', 5) * 60;
                    $counter = floor(time() / $timestep);
                    $counterBytes = pack('N*', 0) . pack('N*', $counter);
                    $idhash = Helper::base64DecodeUrlSafe($token);
                    if (strpos($idhash, ':') === false) {
                        abort(403, 'Token không hợp lệ');
                    }
                    $parts = explode(':', $idhash, 2);
                    [$subscriptionId, $clienthash] = $parts;
                    if (!$subscriptionId || !$clienthash) {
                        abort(403, 'Token không hợp lệ');
                    }
                    $subscription = UserSubscription::where('id', $subscriptionId)->select('token')->first();
                    if (!$subscription) {
                        abort(403, 'Token không hợp lệ');
                    }
                    $usertoken = $subscription->token;
                    $hash = hash_hmac('sha1', $counterBytes, $usertoken, false);
                    if ($clienthash !== $hash) {
                        abort(403, 'Token không hợp lệ');
                    }
                    Cache::put("totp_{$token}", $usertoken, $timestep);
                }
                $token = $usertoken;
                break;
            default:
                break;
        }
        $subscriptionService = new SubscriptionService();
        $subscription = $subscriptionService->findByToken($token);
        if (!$subscription) {
            abort(403, 'Token không hợp lệ');
        }
        if ($subscription->status !== SubscriptionService::STATUS_ACTIVE) {
            abort(403, 'Gói đăng ký đã bị tắt');
        }
        $user = User::find($subscription->user_id);
        if (!$user) {
            abort(403, 'Token không hợp lệ');
        }
        $subscription = (new UserDeviceService())->registerFromRequest($subscription, $request);
        $user = $subscriptionService->applyToUser($user, $subscription);
        $request->merge([
            'user' => $user,
            'subscription' => $subscription
        ]);
        return $next($request);
    }
}
