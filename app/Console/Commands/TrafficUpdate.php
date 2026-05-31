<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\UserSubscription;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

class TrafficUpdate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'traffic:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Tác vụ cập nhật dung lượng';

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
        if (Redis::exists('traffic_reset_lock')) {
            return;
        }
        $uploads = Redis::hgetall('zicboard_upload_traffic');
        Redis::del('zicboard_upload_traffic');
        $downloads = Redis::hgetall('zicboard_download_traffic');
        Redis::del('zicboard_download_traffic');
        if (empty($uploads) && empty($downloads)) {
            return;
        }

        $ids = array_unique(array_merge(array_keys($uploads), array_keys($downloads)));
        $subscriptions = UserSubscription::whereIn('id', $ids)->get(['id', 'u', 'd']);
        $time = time();
        $casesU = [];
        $casesD = [];
        $idList = [];

        foreach ($subscriptions as $subscription) {
            $upload = $uploads[$subscription->id] ?? 0;
            $download = $downloads[$subscription->id] ?? 0;

            $casesU[] = "WHEN {$subscription->id} THEN " . ($subscription->u + $upload);
            $casesD[] = "WHEN {$subscription->id} THEN " . ($subscription->d + $download);
            $idList[] = $subscription->id;
        }
        if (!$idList) {
            return;
        }
        if (count($idList) > 1000) {
            $this->updateTrafficInChunks($idList, $casesU, $casesD, $time);
            return;
        }
        $idListStr = implode(',', $idList);
        $casesUStr = implode(' ', $casesU);
        $casesDStr = implode(' ', $casesD);
        $sql = "UPDATE v2_user_subscription SET u = CASE id {$casesUStr} END, d = CASE id {$casesDStr} END, t = {$time}, updated_at = {$time} WHERE id IN ({$idListStr})";
        $summarySql = "UPDATE v2_user AS users INNER JOIN v2_user_subscription AS subscriptions ON users.id = subscriptions.user_id AND users.token = subscriptions.token SET users.u = subscriptions.u, users.d = subscriptions.d, users.t = subscriptions.t, users.updated_at = {$time} WHERE subscriptions.id IN ({$idListStr})";
        try {
            DB::beginTransaction();
            DB::statement($sql);
            DB::statement($summarySql);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            \Log::error('Cập nhật dung lượng thất bại: ' . $e->getMessage());
            return;
        }
    }

    private function updateTrafficInChunks($idList, $casesU, $casesD, $time)
    {
        $caseByIdU = array_combine($idList, $casesU);
        $caseByIdD = array_combine($idList, $casesD);

        foreach (array_chunk($idList, 1000) as $chunkIds) {
            $chunkCasesU = [];
            $chunkCasesD = [];

            foreach ($chunkIds as $id) {
                $chunkCasesU[] = $caseByIdU[$id];
                $chunkCasesD[] = $caseByIdD[$id];
            }

            $idListStr = implode(',', $chunkIds);
            $casesUStr = implode(' ', $chunkCasesU);
            $casesDStr = implode(' ', $chunkCasesD);
            $sql = "UPDATE v2_user_subscription SET u = CASE id {$casesUStr} END, d = CASE id {$casesDStr} END, t = {$time}, updated_at = {$time} WHERE id IN ({$idListStr})";
            $summarySql = "UPDATE v2_user AS users INNER JOIN v2_user_subscription AS subscriptions ON users.id = subscriptions.user_id AND users.token = subscriptions.token SET users.u = subscriptions.u, users.d = subscriptions.d, users.t = subscriptions.t, users.updated_at = {$time} WHERE subscriptions.id IN ({$idListStr})";

            try {
                DB::beginTransaction();
                DB::statement($sql);
                DB::statement($summarySql);
                DB::commit();
            } catch (\Exception $e) {
                DB::rollBack();
                \Log::error('Traffic update failed: ' . $e->getMessage());
                return;
            }
        }
    }
}
