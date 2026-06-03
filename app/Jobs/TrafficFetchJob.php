<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Redis;

class TrafficFetchJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $data;
    protected $deviceData;
    protected $server;
    protected $protocol;

    public $tries = 3;
    public $timeout = 10;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(array $data, array $server, $protocol, array $deviceData = [])
    {
        $this->onQueue('traffic_fetch');
        $this->data =$data;
        $this->deviceData = $deviceData;
        $this->server = $server;
        $this->protocol = $protocol;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        foreach(array_keys($this->data) as $userId){
            Redis::hincrby('zicboard_upload_traffic', $userId, $this->data[$userId][0] * $this->server['rate']);
            Redis::hincrby('zicboard_download_traffic', $userId, $this->data[$userId][1] * $this->server['rate']);
        }
        foreach(array_keys($this->deviceData) as $deviceId){
            Redis::hincrby('zicboard_device_upload_traffic', $deviceId, $this->deviceData[$deviceId][0] * $this->server['rate']);
            Redis::hincrby('zicboard_device_download_traffic', $deviceId, $this->deviceData[$deviceId][1] * $this->server['rate']);
        }
    }
}
