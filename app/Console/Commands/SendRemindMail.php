<?php

namespace App\Console\Commands;

use App\Services\MailService;
use Illuminate\Console\Command;
use App\Models\UserSubscription;
use App\Services\SubscriptionService;

class SendRemindMail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:remindMail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Gửi email nhắc nhở';

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
        $mailService = new MailService();
        $subscriptionService = new SubscriptionService();
        foreach ($subscriptions as $subscription) {
            if (!$subscription->user) {
                continue;
            }
            $user = $subscriptionService->applyToUser($subscription->user, $subscription);
            if ($subscription->remind_expire) $mailService->remindExpire($user);
            if (!($subscription->expired_at !== NULL && $subscription->expired_at < time()) && $subscription->remind_traffic) {
                $mailService->remindTraffic($user);
            }
        }
    }
}
