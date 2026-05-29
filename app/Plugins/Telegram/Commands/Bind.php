<?php

namespace App\Plugins\Telegram\Commands;

use App\Models\User;
use App\Models\UserSubscription;
use App\Plugins\Telegram\Telegram;
use App\Services\SubscriptionService;
use App\Utils\Helper;
use Illuminate\Support\Facades\Cache;

class Bind extends Telegram {
    public $command = '/bind';
    public $description = 'Liên kết tài khoản Telegram với website';

    public function handle($message, $match = []) {
        if (!$message->is_private) return;
        if (!isset($message->args[0])) {
            abort(500, 'Tham số không hợp lệ, vui lòng gửi kèm liên kết đăng ký');
        }
        $subscribeUrl = $message->args[0];
        $subscribeUrl = parse_url($subscribeUrl);
        parse_str($subscribeUrl['query'], $query);
        $token = $query['token'];
        if (!$token) {
            abort(500, 'Liên kết đăng ký không hợp lệ');
        }
        $submethod = (int)config('zicboard.show_subscribe_method', 0);
        switch ($submethod) {
            case 0:
                break;
            case 1:
                if (!Cache::has("otpn_{$token}")) {
                    abort(403, 'Token không hợp lệ');
                }
                $usertoken = Cache::get("otpn_{$token}");
                $token = $usertoken;
                break;
            case 2:
                $usertoken = Cache::get("totp_{$token}");
                if (!$usertoken) {
                    $timestep = (int)config('zicboard.show_subscribe_expire', 5) * 60;
                    $counter = floor(time() / $timestep);
                    $counterBytes = pack('N*', 0) . pack('N*', $counter);
                    $idhash = Helper::base64DecodeUrlSafe($token);
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
        $subscription = (new SubscriptionService())->findByToken($token);
        $user = $subscription ? User::find($subscription->user_id) : null;
        if (!$user) {
            abort(500, 'Người dùng không tồn tại');
        }
        if ($user->telegram_id) {
            abort(500, 'Tài khoản này đã liên kết Telegram');
        }
        $user->telegram_id = $message->chat_id;
        if (!$user->save()) {
            abort(500, 'Thiết lập thất bại');
        }
        $telegramService = $this->telegramService;
        $telegramService->sendMessage($message->chat_id, 'Liên kết thành công');
    }
}
