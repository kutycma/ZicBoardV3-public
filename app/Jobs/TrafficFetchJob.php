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
        foreach($this->data as $userId => $trafficData){
            $userId = (int)$userId;
            if ($userId <= 0 || !is_array($trafficData)) {
                continue;
            }
            $this->incrementTraffic('zicboard_upload_traffic', $userId, $trafficData[0] ?? 0);
            $this->incrementTraffic('zicboard_download_traffic', $userId, $trafficData[1] ?? 0);
        }
        foreach($this->deviceData as $deviceId => $trafficData){
            $deviceId = (int)$deviceId;
            if ($deviceId <= 0 || !is_array($trafficData)) {
                continue;
            }
            $this->incrementTraffic('zicboard_device_upload_traffic', $deviceId, $trafficData[0] ?? 0);
            $this->incrementTraffic('zicboard_device_download_traffic', $deviceId, $trafficData[1] ?? 0);
        }
    }

    private function incrementTraffic(string $key, int $id, $traffic): void
    {
        $increment = $this->weightedTraffic($traffic);
        if ($increment <= 0) {
            return;
        }

        Redis::hincrby($key, $id, $increment);
    }

    private function weightedTraffic($traffic): int
    {
        $rate = is_numeric($this->server['rate'] ?? null) ? (float)$this->server['rate'] : 1.0;
        $traffic = is_numeric($traffic) ? (float)$traffic : 0.0;
        if ($rate <= 0 || $traffic <= 0) {
            return 0;
        }

        return (int)round($traffic * $rate);
    }
}
