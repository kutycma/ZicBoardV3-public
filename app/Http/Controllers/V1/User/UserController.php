<?php

namespace App\Http\Controllers\V1\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserChangePassword;
use App\Http\Requests\User\UserRedeemGiftCard;
use App\Http\Requests\User\UserTransfer;
use App\Http\Requests\User\UserUpdate;
use App\Models\Giftcard;
use App\Models\Order;
use App\Models\Plan;
use App\Models\Ticket;
use App\Models\User;
use App\Models\UserDevice;
use App\Services\AuthService;
use App\Services\OrderService;
use App\Services\SubscriptionService;
use App\Services\UserDeviceService;
use App\Services\UserService;
use App\Utils\CacheKey;
use App\Utils\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function getActiveSession(Request $request)
    {
        $user = User::find($request->user['id']);
        if (!$user) {
            abort(500, __('The user does not exist'));
        }
        $authService = new AuthService($user);
        return response([
            'data' => $authService->getSessions()
        ]);
    }

    public function removeActiveSession(Request $request)
    {
        $user = User::find($request->user['id']);
        if (!$user) {
            abort(500, __('The user does not exist'));
        }
        $authService = new AuthService($user);
        return response([
            'data' => $authService->removeSession($request->input('session_id'))
        ]);
    }

    public function checkLogin(Request $request)
    {
        $data = [
            'is_login' => $request->user['id'] ? true : false
        ];
        if ($request->user['is_admin']) {
            $data['is_admin'] = true;
        }
        return response([
            'data' => $data
        ]);
    }

    public function changePassword(UserChangePassword $request)
    {
        $user = User::find($request->user['id']);
        if (!$user) {
            abort(500, __('The user does not exist'));
        }
        if (!Helper::multiPasswordVerify(
            $user->password_algo,
            $user->password_salt,
            $request->input('old_password'),
            $user->password
        )) {
            abort(500, __('The old password is wrong'));
        }
        $user->password = password_hash($request->input('new_password'), PASSWORD_DEFAULT);
        $user->password_algo = NULL;
        $user->password_salt = NULL;
        if (!$user->save()) {
            abort(500, __('Save failed'));
        }
        $authService = new AuthService($user);
        $authService->removeAllSession();
        return response([
            'data' => true
        ]);
    }

    public function newPeriod(Request $request) 
    {
        if (!config('zicboard.allow_new_period', 0)) {
            abort(500, __('Renewal is not allowed'));
        }
        DB::beginTransaction();
        try {
            $user = User::find($request->user['id']);
            if (!$user) {
                abort(500, __('The user does not exist'));
            }
            $subscriptionService = new SubscriptionService();
            $primarySubscription = $subscriptionService->getPrimaryForUser($user);
            $subscription = $request->input('subscription_id')
                ? $subscriptionService->getForUser($user, $request->input('subscription_id'))
                : $primarySubscription;
            if (!$subscription || $subscription->status !== SubscriptionService::STATUS_ACTIVE) {
                abort(500, __('You do not allow to renew the subscription'));
            }
            $isPrimarySubscription = $primarySubscription && (int)$primarySubscription->id === (int)$subscription->id;
            $serviceUser = $subscriptionService->applyToUser(clone $user, $subscription);
            if ($subscription->transfer_enable > $subscription->u + $subscription->d) {
                abort(500, __('You have not used up your traffic, you cannot renew your subscription'));
            }
            $userService = new UserService();
            $reset_day = $userService->getResetDay($serviceUser);
            if ($reset_day === null) {
                abort(500, __('You do not allow to renew the subscription'));
            }
            unset($serviceUser->plan);
            $reset_period = $userService->getResetPeriod($serviceUser);
            if ($reset_period === null) {
                abort(500, __('You do not allow to renew the subscription'));
            }
            switch ($reset_period) {
                case 1:
                    $reset_day = 30;
                    $reset_period = 30;
                    break;
                case 30:
                    break;
                case 12:
                    $reset_day = 365;
                    $reset_period = 365;
                    break;
                case 365:
                    break;
                default:
                    abort(500, __('Invalid reset period'));
            }
            if ($reset_day <= 0) {
                $reset_day = $reset_period;
            }
            if ($subscription->expired_at !== null && ($reset_period + 1) * 86400 < $subscription->expired_at - time()) {
                if (!$subscription->update(
                    [
                        'expired_at' => $subscription->expired_at - $reset_day * 86400,
                        'u' => 0,
                        'd' => 0
                    ]
                )) {
                    throw new \Exception(__('Save failed'));
                }
                if ($isPrimarySubscription) {
                    $subscriptionService->syncUserSummary($subscription);
                }
            } else {
                abort(500, __('You do not have enough time to renew your subscription'));
            }

            DB::commit();
            return response([
                'data' => true
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            abort(500, $e->getMessage());
        }
    }

    public function redeemgiftcard(UserRedeemGiftCard $request)
    {
        DB::beginTransaction();

        try {
            $user = User::find($request->user['id']);
            if (!$user) {
                abort(500, __('The user does not exist'));
            }
            $subscriptionService = new SubscriptionService();
            $subscription = $subscriptionService->getPrimaryForUser($user);
            $waitingSlotSubscription = null;
            $giftcard_input = $request->giftcard;
            $giftcard = Giftcard::where('code', $giftcard_input)->first();

            if (!$giftcard) {
                abort(500, __('The gift card does not exist'));
            }

            $currentTime = time();
            if ($giftcard->started_at && $currentTime < $giftcard->started_at) {
                abort(500, __('The gift card is not yet valid'));
            }

            if ($giftcard->ended_at && $currentTime > $giftcard->ended_at) {
                abort(500, __('The gift card has expired'));
            }

            if ($giftcard->limit_use !== null) {
                if (!is_numeric($giftcard->limit_use) || $giftcard->limit_use <= 0) {
                    abort(500, __('The gift card usage limit has been reached'));
                }
            }

            $usedUserIds = $giftcard->used_user_ids ? json_decode($giftcard->used_user_ids, true) : [];
            if (!is_array($usedUserIds)) {
                $usedUserIds = [];
            }

            if (in_array($user->id, $usedUserIds)) {
                abort(500, __('The gift card has already been used by this user'));
            }

            $usedUserIds[] = $user->id;
            $giftcard->used_user_ids = json_encode($usedUserIds);

            switch ($giftcard->type) {
                case 1:
                    $user->balance += $giftcard->value;
                    break;
                case 2:
                    if ($subscription && $subscription->expired_at !== null) {
                        if ($subscription->expired_at <= $currentTime) {
                            $subscription->expired_at = $currentTime + $giftcard->value * 86400;
                        } else {
                            $subscription->expired_at += $giftcard->value * 86400;
                        }
                    } else {
                        abort(500, __('Not suitable gift card type'));
                    }
                    break;
                case 3:
                    if (!$subscription) {
                        abort(500, __('Not suitable gift card type'));
                    }
                    $subscription->transfer_enable += $giftcard->value * 1073741824;
                    break;
                case 4:
                    if (!$subscription) {
                        abort(500, __('Not suitable gift card type'));
                    }
                    $subscription->u = 0;
                    $subscription->d = 0;
                    UserDevice::where('subscription_id', $subscription->id)->update([
                        'u' => 0,
                        'd' => 0,
                        't' => null
                    ]);
                    break;
                case 5:
                    $plan = Plan::where('id', $giftcard->plan_id)->first();
                    if ($plan) {
                        $attributes = [
                            'expired_at' => $giftcard->value == 0
                                ? null
                                : $currentTime + $giftcard->value * 86400
                        ];
                        if (!$subscriptionService->isMultipleSubscriptionEnabled()) {
                            $subscription = $subscriptionService->getSingleModeTargetForUser($user);
                        }
                        $subscription = $subscription
                            ? $subscriptionService->applyPlan($subscription, $plan, $attributes)
                            : $subscriptionService->createFromPlan($user, $plan, $attributes);
                        $waitingSlotSubscription = $subscription;
                    } else {
                        abort(500, __('Not suitable gift card type'));
                    }
                    break;
                default:
                    abort(500, __('Unknown gift card type'));
            }

            if ($subscription && !$subscriptionService->isMultipleSubscriptionEnabled()) {
                $subscription->status = SubscriptionService::STATUS_ACTIVE;
                $subscriptionService->disableOtherActiveSubscriptions($subscription);
            }

            if ($giftcard->limit_use !== null) {
                $giftcard->limit_use -= 1;
            }

            if ($subscription && (!$subscription->save() || !$subscriptionService->syncUserSummary($subscription))) {
                throw new \Exception(__('Save failed'));
            }

            if (!$user->save() || !$giftcard->save()) {
                throw new \Exception(__('Save failed'));
            }

            DB::commit();
            if ($waitingSlotSubscription) {
                (new UserDeviceService())->ensureWaitingSlot($waitingSlotSubscription);
            }

            return response([
                'data' => true,
                'type' => $giftcard->type,
                'value' => $giftcard->value
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            abort(500, $e->getMessage());
        }
    }

    public function info(Request $request)
    {
        $user = User::where('id', $request->user['id'])
            ->select([
                'id',
                'email',
                'transfer_enable',
                'device_limit',
                'token',
                'uuid',
                'group_id',
                'speed_limit',
                'u',
                'd',
                'last_login_at',
                'created_at',
                'banned',
                'auto_renewal',
                'remind_expire',
                'remind_traffic',
                'expired_at',
                'balance',
                'commission_balance',
                'plan_id',
                'discount',
                'commission_rate',
                'telegram_id'
            ])
            ->first();
        if (!$user) {
            abort(500, __('The user does not exist'));
        }
        $subscriptionService = new SubscriptionService();
        $subscription = $subscriptionService->getPrimaryForUser($user);
        if ($subscription) {
            $user = $subscriptionService->applyToUser($user, $subscription);
        }
        $user['avatar_url'] = 'https://cravatar.cn/avatar/' . md5($user->email) . '?s=64&d=identicon';
        $user->makeHidden(['id', 'token', 'uuid', 'subscription']);
        return response([
            'data' => $user
        ]);
    }

    public function getStat(Request $request)
    {
        $stat = [
            Order::where('status', 0)
                ->where('user_id', $request->user['id'])
                ->count(),
            Ticket::where('status', 0)
                ->where('user_id', $request->user['id'])
                ->count(),
            User::where('invite_user_id', $request->user['id'])
                ->count()
        ];
        return response([
            'data' => $stat
        ]);
    }

    public function getSubscribe(Request $request)
    {
        $user = User::where('id', $request->user['id'])
            ->select([
                'id',
                'plan_id',
                'token',
                'expired_at',
                'u',
                'd',
                'transfer_enable',
                'device_limit',
                'email',
                'uuid'
            ])
            ->first();
        if (!$user) {
            abort(500, __('The user does not exist'));
        }
        $subscriptionService = new SubscriptionService();
        $subscription = $subscriptionService->getPrimaryForUser($user);
        if ($request->input('subscription_id')) {
            $selectedSubscription = $subscriptionService->getForUser($user, $request->input('subscription_id'));
            if ($selectedSubscription && $selectedSubscription->status === SubscriptionService::STATUS_ACTIVE) {
                $subscription = $selectedSubscription;
            }
        }
        if ($subscription) {
            $user = $subscriptionService->applyToUser($user, $subscription);
            if ((int)config('zicboard.change_sni_enable', 1)) {
                $user['name_sni'] = $subscription->name_sni;
                $user['network_settings'] = $subscription->network_settings;
            }
        }
        if ($user->plan_id) {
            $user['plan'] = Plan::find($user->plan_id);
            if (!$user['plan']) {
                abort(500, __('Subscription plan does not exist'));
            }
        }

        //Thống kê thiết bị online
        $countalive = 0;
        $ips_array = $subscription
            ? Cache::get('ALIVE_IP_SUBSCRIPTION_' . $subscription->id)
            : Cache::get('ALIVE_IP_USER_' . $request->user['id']);
        if ($ips_array) {
            $countalive = $ips_array['alive_ip'];
        }
        $user['alive_ip'] = $countalive;

        $subscribeToken = $subscription ? $subscription->token : $user['token'];
        $subscribeUrl = Helper::getSubscribeUrlDetail((string)$subscribeToken);
        $user['subscribe_url'] = $subscribeUrl['url'];
        $user['subscribe_url_error'] = $subscribeUrl['error'];
        $user['subscribe_url_protected'] = (bool)($subscribeUrl['protected'] ?? false);
        $user->makeHidden(['token', 'uuid', 'subscription']);

        $userService = new UserService();
        $user['reset_day'] = $userService->getResetDay($user);
        $user['allow_new_period'] = config('zicboard.allow_new_period', 0);
        return response([
            'data' => $user
        ]);
    }

    public function unbindTelegram(Request $request)
    {
        $user = User::find($request->user['id']);
        if (!$user) {
            abort(500, __('The user does not exist'));
        }
        if (!$user->update(['telegram_id' => null])) {
            abort(500, __('Unbind telegram failed'));
        }
        return response([
            'data' => true
        ]);
    }

    public function resetSecurity(Request $request)
    {
        $user = User::find($request->user['id']);
        if (!$user) {
            abort(500, __('The user does not exist'));
        }
        $subscriptionService = new SubscriptionService();
        $primarySubscription = $subscriptionService->getPrimaryForUser($user);
        $subscription = $request->input('subscription_id')
            ? $subscriptionService->getForUser($user, $request->input('subscription_id'))
            : $primarySubscription;
        if (!$subscription) {
            abort(500, __('Subscription does not exist'));
        }
        $isPrimarySubscription = $primarySubscription && (int)$primarySubscription->id === (int)$subscription->id;
        $subscription->uuid = Helper::guid(true);
        $subscription->token = Helper::guid();
        if (!$subscription->save()) {
            abort(500, __('Reset failed'));
        }
        if ($isPrimarySubscription && !$subscriptionService->syncUserSummary($subscription)) {
            abort(500, __('Reset failed'));
        }
        return response([
            'data' => Helper::getSubscribeUrl($subscription['token'])
        ]);
    }

    public function update(UserUpdate $request)
    {
        $updateData = $request->only([
            'auto_renewal',
            'remind_expire',
            'remind_traffic'
        ]);

        $user = User::find($request->user['id']);
        if (!$user) {
            abort(500, __('The user does not exist'));
        }
        try {
            $user->update($updateData);
            $subscriptionService = new SubscriptionService();
            $subscription = $subscriptionService->getPrimaryForUser($user);
            if ($subscription) {
                $subscription->update($updateData);
            }
        } catch (\Exception $e) {
            abort(500, __('Save failed'));
        }

        return response([
            'data' => true
        ]);
    }

    public function transfer(UserTransfer $request)
    {
        $user = User::find($request->user['id']);
        if (!$user) {
            abort(500, __('The user does not exist'));
        }
        if ($request->input('transfer_amount') > $user->commission_balance) {
            abort(500, __('Insufficient commission balance'));
        }
        DB::beginTransaction();
        $order = new Order();
        $orderService = new OrderService($order);
        $order->user_id = $request->user['id'];
        $order->plan_id = 0;
        $order->period = 'deposit';
        $order->trade_no = Helper::generateOrderNo();
        $order->total_amount = $request->input('transfer_amount');

        $orderService->setOrderType($user);
        $orderService->setInvite($user);

        $user->commission_balance = $user->commission_balance - $request->input('transfer_amount');
        $user->balance = $user->balance + $request->input('transfer_amount');
        $order->status = 3;
        $order->total_amount = 0;
        $order->surplus_amount = $request->input('transfer_amount');
        $order->callback_no = 'Chuyển hoa hồng Commission transfer';
        if (!$order->save()||!$user->save()) {
            DB::rollback();
            abort(500, __('Transfer failed'));
        }

        DB::commit();

        return response([
            'data' => true
        ]);
    }

    public function getQuickLoginUrl(Request $request)
    {
        $user = User::find($request->user['id']);
        if (!$user) {
            abort(500, __('The user does not exist'));
        }

        $code = Helper::guid();
        $key = CacheKey::get('TEMP_TOKEN', $code);
        Cache::put($key, $user->id, 60);
        $redirect = '/#/login?verify=' . $code . '&redirect=' . ($request->input('redirect') ? $request->input('redirect') : 'dashboard');
        if (config('zicboard.app_url')) {
            $url = config('zicboard.app_url') . $redirect;
        } else {
            $url = url($redirect);
        }
        return response([
            'data' => $url
        ]);
    }
}
