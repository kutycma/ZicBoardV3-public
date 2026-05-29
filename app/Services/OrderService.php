<?php

namespace App\Services;

use App\Jobs\OrderHandleJob;
use App\Models\Order;
use App\Models\Plan;
use App\Models\User;
use App\Models\UserSubscription;
use Illuminate\Support\Facades\DB;

class OrderService
{
    CONST STR_TO_TIME = [
        'month_price' => 1,
        'quarter_price' => 3,
        'half_year_price' => 6,
        'year_price' => 12,
        'two_year_price' => 24,
        'three_year_price' => 36
    ];
    public $order;
    public $user;
    public $subscription;

    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    public function open()
    {
        $order = $this->order;
        $this->user = User::find($order->user_id);
        if ($order->type == 9) {
            DB::beginTransaction();
            $this->user->balance += $order->total_amount + $this->getbounus($order->total_amount);

            if (!$this->user->save()) {
                DB::rollBack();
                abort(500, 'Nạp tiền thất bại');
            }
            $order->status = 3;
            if (!$order->save()) {
                DB::rollBack();
                abort(500, 'Nạp tiền thất bại');
            }
            DB::commit();
            return;
        }

        $plan = Plan::find($order->plan_id);
        DB::beginTransaction();
        $subscriptionService = new SubscriptionService();
        $primarySubscription = $subscriptionService->getPrimaryForUser($this->user);
        $this->subscription = $subscriptionService->resolveOrderTarget($this->user, $order);
        $createdSubscription = false;
        $targetWasPrimary = $primarySubscription
            && $this->subscription
            && (int)$primarySubscription->id === (int)$this->subscription->id;
        if ($order->period === 'reset_price' && !$this->subscription) {
            DB::rollBack();
            abort(500, __('Subscription has expired or no active subscription, unable to purchase Data Reset Package'));
        }
        if (!$this->subscription) {
            $this->subscription = $subscriptionService->createFromPlan($this->user, $plan, [
                'origin_order_id' => $order->id
            ]);
            $order->subscription_id = $this->subscription->id;
            $createdSubscription = true;
        }

        if ($order->refund_amount) {
            $this->user->balance = $this->user->balance + $order->refund_amount;
        }
        if ($order->surplus_order_ids) {
            try {
                Order::whereIn('id', $order->surplus_order_ids)->update([
                    'status' => 4
                ]);
            } catch (\Exception $e) {
                DB::rollback();
                abort(500, 'Kích hoạt thất bại');
            }
        }
        switch ((string)$order->period) {
            case 'onetime_price':
                $this->buyByOneTime($order, $plan);
                break;
            case 'reset_price':
                $this->buyByResetTraffic();
                break;
            default:
                $this->buyByPeriod($order, $plan);
        }

        switch ((int)$order->type) {
            case 1:
                $this->openEvent(config('zicboard.new_order_event_id', 0));
                break;
            case 2:
                $this->openEvent(config('zicboard.renew_order_event_id', 0));
                break;
            case 3:
                $this->openEvent(config('zicboard.change_order_event_id', 0));
                break;
        }

        $this->setSpeedLimit($plan->speed_limit);
        $this->subscription->last_order_id = $order->id;

        if (!$this->subscription->save()) {
            DB::rollBack();
            abort(500, 'Mở gói đăng ký thất bại');
        }

        if (!$this->user->save()) {
            DB::rollBack();
            abort(500, 'Kích hoạt thất bại');
        }
        if (($createdSubscription || $targetWasPrimary) && !$subscriptionService->syncUserSummary($this->subscription)) {
            DB::rollBack();
            abort(500, 'Đồng bộ thông tin gói đăng ký thất bại');
        }
        $order->status = 3;
        if (!$order->save()) {
            DB::rollBack();
            abort(500, 'Kích hoạt thất bại');
        }

        DB::commit();
        (new UserDeviceService())->ensureWaitingSlot($this->subscription);
    }


    public function setOrderType(User $user)
    {
        $order = $this->order;
        if ($order->period === 'deposit'){
            $order->type = 9;
            return;
        }

        $subscriptionService = new SubscriptionService();
        $subscription = $subscriptionService->resolveOrderTarget($user, $order);
        if ($subscription) {
            $order->subscription_id = $subscription->id;
        }

        if ($order->period === 'reset_price') {
            $order->type = 4;
        } else if ($subscription && $order->plan_id !== $subscription->plan_id) {
            if (!(int)config('zicboard.plan_change_enable', 1)) abort(500, 'Hiện không cho phép đổi gói, vui lòng liên hệ CSKH hoặc gửi ticket');
            $order->type = 3;
            if ((int)config('zicboard.surplus_enable', 1)) $this->getSurplusValue($subscription, $order);
            if ($order->surplus_amount >= $order->total_amount) {
                $order->refund_amount = $order->surplus_amount - $order->total_amount;
                $order->total_amount = 0;
            } else {
                $order->total_amount = $order->total_amount - $order->surplus_amount;
            }
        } else if ($subscription && ($subscription->expired_at > time() || $subscription->expired_at === NULL) && $order->plan_id == $subscription->plan_id) {
            $order->type = 2;
        } else { // Mua mới
            $order->type = 1;
        }
    }

    public function setVipDiscount(User $user)
    {
        $order = $this->order;
        if ($user->discount) {
            $order->discount_amount = $order->discount_amount + ($order->total_amount * ($user->discount / 100));
        }
        $order->total_amount = $order->total_amount - $order->discount_amount;
    }

    public function setInvite(User $user):void
    {
        $order = $this->order;
        if ($user->invite_user_id && ($order->total_amount <= 0)) return;
        $order->invite_user_id = $user->invite_user_id;
        $inviter = User::find($user->invite_user_id);
        if (!$inviter) return;
        $isCommission = false;
        switch ((int)$inviter->commission_type) {
            case 0:
                $commissionFirstTime = (int)config('zicboard.commission_first_time_enable', 1);
                $isCommission = (!$commissionFirstTime || ($commissionFirstTime && !$this->haveValidOrder($user)));
                break;
            case 1:
                $isCommission = true;
                break;
            case 2:
                $isCommission = !$this->haveValidOrder($user);
                break;
        }

        if (!$isCommission) return;
        if ($inviter && $inviter->commission_rate) {
            $order->commission_balance = $order->total_amount * ($inviter->commission_rate / 100);
        } else {
            $order->commission_balance = $order->total_amount * (config('zicboard.invite_commission', 10) / 100);
        }
    }

    private function haveValidOrder(User $user)
    {
        return Order::where('user_id', $user->id)
            ->whereNotIn('status', [0, 2])
            ->first();
    }

    private function getSurplusValue(UserSubscription $subscription, Order $order)
    {
        if ($subscription->expired_at === NULL) {
            $this->getSurplusValueByOneTime($subscription, $order);
        } else {
            $this->getSurplusValueByPeriod($subscription, $order);
        }
    }


    private function getSurplusValueByOneTime(UserSubscription $subscription, Order $order)
    {
        $lastOneTimeOrder = Order::where('subscription_id', $subscription->id)
            ->where('period', 'onetime_price')
            ->where('status', 3)
            ->orderBy('id', 'DESC')
            ->first();
        if (!$lastOneTimeOrder) return;
        $nowUserTraffic = $subscription->transfer_enable / 1073741824;
        if ($nowUserTraffic == 0) return;
        $paidTotalAmount = ($lastOneTimeOrder->total_amount + $lastOneTimeOrder->balance_amount);
        if ($paidTotalAmount == 0) return;
        $notUsedTraffic = $nowUserTraffic - (($subscription->u + $subscription->d) / 1073741824);
        $remainingTrafficRatio = $notUsedTraffic / $nowUserTraffic;
        $result = $remainingTrafficRatio * $paidTotalAmount;
        $order->surplus_amount = max($result, 0);
        $orderModel = Order::where('subscription_id', $subscription->id)->where('period', '!=', 'reset_price')->where('status', 3);
        $order->surplus_order_ids = array_column($orderModel->get()->toArray(), 'id');
    }

    private function getSurplusValueByPeriod(UserSubscription $subscription, Order $order)
    {
        $orders = Order::where('subscription_id', $subscription->id)
            ->where('period', '!=', 'reset_price')
            ->where('period', '!=', 'onetime_price')
            ->where('period', '!=', 'deposit')
            ->where('status', 3)
            ->get()
            ->toArray();
        if (!$orders) return;
        $orderAmountSum = 0;
        $orderMonthSum = 0;
        $lastValidateAt = null;
        foreach ($orders as $item) {
            $period = self::STR_TO_TIME[$item['period']];
            $orderEndTime = strtotime("+{$period} month", $item['created_at']);
            if ($orderEndTime < time()) continue;
            $lastValidateAt = $item['created_at'] > $lastValidateAt ? $item['created_at'] : $lastValidateAt;
            $orderMonthSum += $period;
            $orderAmountSum += $item['total_amount'] + $item['balance_amount'] + $item['surplus_amount'] - $item['refund_amount'];
        }
        if ($lastValidateAt === null) return;
    
        $expiredAtByOrder = strtotime("+{$orderMonthSum} month", $lastValidateAt);
        $expiredAtByUser = $subscription->expired_at;
        if ($expiredAtByOrder < time() || $expiredAtByUser < time()) return;
        $orderSurplusSecond = $expiredAtByUser - time();
        $orderRangeSecond = $expiredAtByOrder - $lastValidateAt;
    
        $totalTraffic = $subscription->transfer_enable;
        $usedTraffic = ($subscription->u + $subscription->d);
        if ($totalTraffic == 0) return;
    
        $remainingTrafficRatio = ($totalTraffic - $usedTraffic) / $totalTraffic;
    
        $avgPricePerSecond = $orderAmountSum / $orderRangeSecond;
        if ($orderRangeSecond <= 31 * 86400) {
            $remainingExpiredTimeRatio = $orderSurplusSecond / $orderRangeSecond;
            $surplusRatio = min($remainingExpiredTimeRatio, $remainingTrafficRatio);
            $orderSurplusAmount = $avgPricePerSecond * $orderSurplusSecond * $surplusRatio;
        } else {
            $monthSeconds = 30 * 86400;
            $firstMonthRemainSeconds = $orderSurplusSecond % $monthSeconds;
            $surplusRatio = min($firstMonthRemainSeconds / $monthSeconds, $remainingTrafficRatio);
            $laterMonthsSeconds = $orderSurplusSecond - $firstMonthRemainSeconds;
            $orderSurplusAmount = $avgPricePerSecond * $monthSeconds * $surplusRatio +
                                  $avgPricePerSecond * $laterMonthsSeconds;
        }
    
        $order->surplus_amount = max($orderSurplusAmount, 0);
        $order->surplus_order_ids = array_column($orders, 'id');
    }

    public function paid(string $callbackNo)
    {
        $order = $this->order;
        if ($order->status !== 0) return true;
        $order->status = 1;
        $order->paid_at = time();
        $order->callback_no = $callbackNo;
        if (!$order->save()) return false;
        try {
            OrderHandleJob::dispatch($order->trade_no);
        } catch (\Exception $e) {
            return false;
        }
        return true;
    }

    public function cancel():bool
    {
        $order = $this->order;
        DB::beginTransaction();
        $order->status = 2;
        if (!$order->save()) {
            DB::rollBack();
            return false;
        }
        if ($order->balance_amount) {
            $userService = new UserService();
            if (!$userService->addBalance($order->user_id, $order->balance_amount)) {
                DB::rollBack();
                return false;
            }
        }
        DB::commit();
        return true;
    }

    private function setSpeedLimit($speedLimit)
    {
        $this->subscription->speed_limit = $speedLimit;
    }

    private function buyByResetTraffic()
    {
        $this->subscription->u = 0;
        $this->subscription->d = 0;
    }

    private function buyByPeriod(Order $order, Plan $plan)
    {
        // change plan process
        if ((int)$order->type === 3) {
            $this->subscription->expired_at = time();
        }
        $this->subscription->transfer_enable = $plan->transfer_enable * 1073741824;
        $this->subscription->device_limit = $plan->device_limit;
        // Chuyển từ một lần sang định kỳ
        if ($this->subscription->expired_at === NULL) $this->buyByResetTraffic();
        // Mua mới
        if ($order->type === 1) $this->buyByResetTraffic();

        // Gia hạn vào ngày hết hạn sẽ làm mới dung lượng
        $expireDay = date('d', $this->subscription->expired_at);
        $expireMonth = date('m', $this->subscription->expired_at);
        $today = date('d');
        $currentMonth = date('m');
        if ($order->type === 2 && $expireMonth == $currentMonth && $expireDay === $today ) {
            $this->buyByResetTraffic();
        }

        $this->subscription->plan_id = $plan->id;
        $this->subscription->group_id = $plan->group_id;
        $this->subscription->expired_at = $this->getTime($order->period, $this->subscription->expired_at);
    }

    private function buyByOneTime(Order $order, Plan $plan)
    {
        $transfer_enable = $plan->transfer_enable;
        if (!$order->surplus_order_ids) {
            $notUsedTraffic = ($this->subscription->transfer_enable - ($this->subscription->u + $this->subscription->d)) / 1073741824;
            if ($notUsedTraffic > 0 && $this->subscription->expired_at == NULL) {
                $transfer_enable += $notUsedTraffic;
            }
        }
        $this->buyByResetTraffic();
        $this->subscription->transfer_enable = $transfer_enable * 1073741824;
        $this->subscription->device_limit = $plan->device_limit;
        $this->subscription->plan_id = $plan->id;
        $this->subscription->group_id = $plan->group_id;
        $this->subscription->expired_at = NULL;
    }

    private function getTime($str, $timestamp)
    {
        if ($timestamp < time()) {
            $timestamp = time();
        }
        switch ($str) {
            case 'month_price':
                return strtotime('+1 month', $timestamp);
            case 'quarter_price':
                return strtotime('+3 month', $timestamp);
            case 'half_year_price':
                return strtotime('+6 month', $timestamp);
            case 'year_price':
                return strtotime('+12 month', $timestamp);
            case 'two_year_price':
                return strtotime('+24 month', $timestamp);
            case 'three_year_price':
                return strtotime('+36 month', $timestamp);
        }
    }

    private function openEvent($eventId)
    {
        switch ((int) $eventId) {
            case 0:
                break;
            case 1:
                $this->buyByResetTraffic();
                break;
        }
    }

    private function getbounus($total_amount) {
        $deposit_bounus = config('zicboard.deposit_bounus', []);
        if (empty($deposit_bounus) || $deposit_bounus[0] === null) {
            return 0;
        }
        $add = 0;
        foreach ($deposit_bounus as $tier) {
            list($amount, $bounus) = explode(':', $tier);
            $amount = (float)$amount * 100;
            $bounus = (float)$bounus * 100;
            $amount = (int)$amount;
            $bounus = (int)$bounus;
            if ($total_amount >= $amount) {
                $add = max($add, $bounus);
            }
        }
        return $add;
    }
}
