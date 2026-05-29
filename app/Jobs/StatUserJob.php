<?php

namespace App\Jobs;

use App\Models\StatServer;
use App\Models\StatUser;
use App\Models\UserSubscription;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;

class StatUserJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $data;
    protected $server;
    protected $protocol;
    protected $recordType;

    public $tries = 3;
    public $timeout = 60;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(array $data, array $server, $protocol, $recordType = 'd')
    {
        $this->onQueue('stat');
        $this->data =$data;
        $this->server = $server;
        $this->protocol = $protocol;
        $this->recordType = $recordType;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $recordAt = strtotime(date('Y-m-d'));
        if ($this->recordType === 'm') {
            //
        }
        $attempt = 0;
        $maxAttempts = 3;
        $existingData = StatUser::where('record_at', $recordAt)
        ->where('server_rate', $this->server['rate'])
        ->whereIn('subscription_id', array_keys($this->data))
        ->select(['subscription_id', 'id', 'u', 'd'])
        ->get()
        ->keyBy('subscription_id');

        $subscriptionUsers = UserSubscription::whereIn('id', array_keys($this->data))
            ->pluck('user_id', 'id');
        while ($attempt < $maxAttempts) {
            try {
                $insertData = [];
                DB::beginTransaction();
                foreach($this->data as $subscriptionId => $trafficData){
                    if (isset($existingData[$subscriptionId])) {
                        $userdata = StatUser::where('id', $existingData[$subscriptionId]['id'])->first();
                        $userdata->update([
                            'u' => $userdata['u'] + $trafficData[0],
                            'd' => $userdata['d'] + $trafficData[1]
                        ]);
                    } else {
                        if (!isset($subscriptionUsers[$subscriptionId])) {
                            continue;
                        }
                        $insertData[] = [
                            'user_id' => $subscriptionUsers[$subscriptionId],
                            'subscription_id' => $subscriptionId,
                            'server_rate' => $this->server['rate'],
                            'u' => $trafficData[0],
                            'd' => $trafficData[1],
                            'record_type' => $this->recordType,
                            'record_at' => $recordAt
                        ];
                    }
                }
                if (!empty($insertData)) {
                    collect($insertData)->chunk(500)->each(function ($chunk) {
                        StatUser::upsert($chunk->toArray(), ['subscription_id', 'server_rate', 'record_at']);
                    });
                }
                DB::commit();
                return;
            } catch (\Exception $e) {
                DB::rollback();
                if (strpos($e->getMessage(), '40001') !== false || strpos(strtolower($e->getMessage()), 'deadlock') !== false) {
                    $attempt++;
                    if ($attempt < $maxAttempts) {
                        sleep(pow(2, $attempt));
                        continue;
                    }
                }
                abort(500, 'Thống kê dữ liệu người dùng thất bại'. $e->getMessage());
            }
        }
    }
}
