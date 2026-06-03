<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\UserDevice;
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
        $deviceUploads = Redis::hgetall('zicboard_device_upload_traffic');
        Redis::del('zicboard_device_upload_traffic');
        $deviceDownloads = Redis::hgetall('zicboard_device_download_traffic');
        Redis::del('zicboard_device_download_traffic');
        if (empty($uploads) && empty($downloads) && empty($deviceUploads) && empty($deviceDownloads)) {
            return;
        }

        $time = time();
        $this->updateSubscriptionTraffic($uploads, $downloads, $time);
        $this->updateDeviceTraffic($deviceUploads, $deviceDownloads, $time);
    }

    private function updateSubscriptionTraffic(array $uploads, array $downloads, int $time): void
    {
        $ids = array_unique(array_merge(array_keys($uploads), array_keys($downloads)));
        $ids = $this->positiveIntegerIds($ids);
        if (!$ids) {
            return;
        }

        $subscriptions = UserSubscription::whereIn('id', $ids)->get(['id', 'u', 'd']);
        $casesU = [];
        $casesD = [];
        $idList = [];

        foreach ($subscriptions as $subscription) {
            $upload = (int)($uploads[$subscription->id] ?? 0);
            $download = (int)($downloads[$subscription->id] ?? 0);

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

    private function updateDeviceTraffic(array $uploads, array $downloads, int $time): void
    {
        $ids = array_unique(array_merge(array_keys($uploads), array_keys($downloads)));
        $ids = $this->positiveIntegerIds($ids);
        if (!$ids) {
            return;
        }

        $devices = UserDevice::whereIn('id', $ids)->get(['id', 'u', 'd']);
        $casesU = [];
        $casesD = [];
        $idList = [];

        foreach ($devices as $device) {
            $upload = (int)($uploads[$device->id] ?? 0);
            $download = (int)($downloads[$device->id] ?? 0);

            $casesU[] = "WHEN {$device->id} THEN " . ((int)$device->u + $upload);
            $casesD[] = "WHEN {$device->id} THEN " . ((int)$device->d + $download);
            $idList[] = $device->id;
        }
        if (!$idList) {
            return;
        }
        if (count($idList) > 1000) {
            $this->updateDeviceTrafficInChunks($idList, $casesU, $casesD, $time);
            return;
        }

        $idListStr = implode(',', $idList);
        $casesUStr = implode(' ', $casesU);
        $casesDStr = implode(' ', $casesD);
        $sql = "UPDATE v2_user_device SET u = CASE id {$casesUStr} END, d = CASE id {$casesDStr} END, t = {$time}, updated_at = {$time} WHERE id IN ({$idListStr})";
        try {
            DB::statement($sql);
        } catch (\Exception $e) {
            \Log::error('Device traffic update failed: ' . $e->getMessage());
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

    private function updateDeviceTrafficInChunks($idList, $casesU, $casesD, $time)
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
            $sql = "UPDATE v2_user_device SET u = CASE id {$casesUStr} END, d = CASE id {$casesDStr} END, t = {$time}, updated_at = {$time} WHERE id IN ({$idListStr})";

            try {
                DB::statement($sql);
            } catch (\Exception $e) {
                \Log::error('Device traffic update failed: ' . $e->getMessage());
                return;
            }
        }
    }

    private function positiveIntegerIds(array $ids): array
    {
        return array_values(array_unique(array_filter(array_map('intval', $ids), function ($id) {
            return $id > 0;
        })));
    }
}
