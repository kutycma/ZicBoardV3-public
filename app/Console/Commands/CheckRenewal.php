<?php

namespace App\Console\Commands;

use App\Services\MailService;
use App\Services\PlanService;
use App\Services\OrderService;
use Illuminate\Console\Command;
use App\Models\Order;
use App\Models\UserSubscription;
use App\Services\SubscriptionService;
use App\Utils\Helper;
use Illuminate\Support\Facades\DB;

use Exception;

class CheckRenewal extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:renewal';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Tự động gia hạn';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        ini_set('memory_limit', -1);
        $subscriptions = UserSubscription::where('status', SubscriptionService::STATUS_ACTIVE)
            ->with('user')
            ->get();

        //$mailService = new MailService();
        foreach ($subscriptions as $subscription) {
            $user = $subscription->user;
            if (!$user) {
                continue;
            }
            if ($subscription->auto_renewal && $subscription->plan_id !== NULL && $subscription->expired_at !== NULL && $subscription->expired_at > time() && $subscription->expired_at - time() < 86400 * 2) {
                try {
                    $latestOrder = Order::where('subscription_id', $subscription->id)
                        ->where('period', '!=', 'reset_price')
                        ->where('period', '!=', 'onetime_price')
                        ->where('period', '!=', 'deposit')
                        ->where('status', 3)
                        ->orderBy('created_at', 'desc')
                        ->first();
                    if (!$latestOrder) {
                        throw new Exception("No valid order");
                    }
                    $latestPeriod = $latestOrder->period;

                    $planService = new PlanService($subscription->plan_id);
                    $plan = $planService->plan;
                    if (!$plan) {
                        throw new Exception("No such plan");
                    }
                    if (!$plan->renew) {
                        throw new Exception('This subscription cannot be renewed');
                    }
                    if($user->balance < $plan[$latestPeriod]) {
                        throw new Exception('No enough balance');
                    }

                    $subscriptionService = new SubscriptionService();
                    $primarySubscription = $subscriptionService->getPrimaryForUser($user);
                    $shouldSyncUserSummary = $primarySubscription && (int)$primarySubscription->id === (int)$subscription->id;

                    DB::beginTransaction();
                    $order = new Order();
                    $orderService = new OrderService($order);
                    $order->user_id = $user->id;
                    $order->subscription_id = $subscription->id;
                    $order->plan_id = $plan->id;
                    $order->period = $latestPeriod;
                    $order->trade_no = Helper::generateOrderNo();
                    $order->balance_amount = $plan[$latestPeriod];
                    $order->total_amount = 0;
                    $orderService->setVipDiscount($user);
                    $order->type = 2;
                    
                    $user->balance = $user->balance - $plan[$latestPeriod];
                    $subscription->expired_at = $this->getTime($latestPeriod, $subscription->expired_at);
                    if (!$user->save() || !$subscription->save()) {
                        DB::rollback();
                        throw new Exception('Tự động gia hạnthất bại');
                    }
                    if ($shouldSyncUserSummary && !$subscriptionService->syncUserSummary($subscription)) {
                        DB::rollback();
                        throw new Exception('Tự động gia hạnthất bại');
                    }
                    $order->status = 3;
                    if (!$order->save()) {
                        DB::rollback();
                        throw new Exception('Tự động gia hạnthất bại');
                    }
                    DB::commit();
                    //$mailService->remindAutorenewal($user);
                } catch (\Exception $e) {
                    $subscription->auto_renewal = 0;
                    if(!$subscription->save()){
                        info('Tự động gia hạn người dùng thất bại, điều chỉnh thiết lập thất bại', [$e->getMessage() , $user]);
                    };
                }
            }
        }
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
}
