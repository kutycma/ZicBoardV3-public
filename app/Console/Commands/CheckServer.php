<?php

namespace App\Console\Commands;

use App\Services\ServerService;
use App\Services\TelegramService;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class CheckServer extends Command
{
    protected $signature = 'check:server';

    protected $description = 'Tác vụ kiểm tra node';

    private const STALE_SECONDS = 300;
    private const ALERT_THROTTLE_SECONDS = 300;

    public function handle()
    {
        $this->checkOffline();
    }

    private function checkOffline(): void
    {
        $telegramService = new TelegramService();
        $servers = (new ServerService())->getAllServers();
        $now = time();

        foreach ($servers as $server) {
            if (!empty($server['parent_id']) || (int)($server['check'] ?? 0) !== 1) {
                continue;
            }

            if ($this->hasLoadIps($server)) {
                $this->checkLoadIps($telegramService, $server, $now);
                continue;
            }

            if ((int)($server['available_status'] ?? 0) === 0) {
                $this->sendNodeAlert($telegramService, $server);
            }
        }
    }

    private function checkLoadIps(TelegramService $telegramService, array $server, int $now): void
    {
        foreach (($server['load_ip_online'] ?? []) as $row) {
            if (!is_array($row)) {
                continue;
            }

            $ip = trim((string)($row['ip'] ?? ''));
            if ($ip === '') {
                continue;
            }

            $lastPushAt = (int)($row['last_push_at'] ?? 0);
            if ($lastPushAt > 0 && ($now - $lastPushAt) <= self::STALE_SECONDS) {
                continue;
            }

            $this->sendLoadIpAlert($telegramService, $server, $ip, $lastPushAt);
        }
    }

    private function hasLoadIps(array $server): bool
    {
        $loadIps = $server['load_ips'] ?? [];
        return is_array($loadIps) && count(array_filter($loadIps)) > 0;
    }

    private function sendNodeAlert(TelegramService $telegramService, array $server): void
    {
        $key = $this->alertKey($server, 'node');
        if (!Cache::add($key, 1, self::ALERT_THROTTLE_SECONDS)) {
            return;
        }

        $message = sprintf(
            "🚨 Cảnh báo node lỗi\n━━━━━━━━━━━━━━\n🖥️ Node: %s\n🔌 Loại: %s\n🌐 Địa chỉ: %s\n🆔 ID: %s\n",
            (string)($server['name'] ?? '-'),
            strtoupper((string)($server['type'] ?? '-')),
            $this->serverAddress($server),
            (string)($server['id'] ?? '-')
        );
        $telegramService->sendMessageWithAdmin($message);
    }

    private function sendLoadIpAlert(TelegramService $telegramService, array $server, string $ip, int $lastPushAt): void
    {
        $key = $this->alertKey($server, 'ip:' . md5($ip));
        if (!Cache::add($key, 1, self::ALERT_THROTTLE_SECONDS)) {
            return;
        }

        $lastReport = $lastPushAt > 0 ? date('Y-m-d H:i:s', $lastPushAt) : 'chưa report';
        $message = sprintf(
            "⚠️ Cảnh báo Load IP lỗi\n━━━━━━━━━━━━━━\n🖥️ Node: %s\n🔌 Loại: %s\n🌐 Địa chỉ: %s\n🆔 ID: %s\n📍 IP lỗi: %s\n🕒 Lần report cuối: %s\n",
            (string)($server['name'] ?? '-'),
            strtoupper((string)($server['type'] ?? '-')),
            $this->serverAddress($server),
            (string)($server['id'] ?? '-'),
            $ip,
            $lastReport
        );
        $telegramService->sendMessageWithAdmin($message);
    }

    private function alertKey(array $server, string $scope): string
    {
        return sprintf(
            'SERVER_CHECK_ALERT_%s_%s_%s',
            strtoupper((string)($server['type'] ?? 'UNKNOWN')),
            (int)($server['id'] ?? 0),
            $scope
        );
    }

    private function serverAddress(array $server): string
    {
        $host = (string)($server['host'] ?? '-');
        $port = $server['port'] ?? ($server['server_port'] ?? null);
        return $port ? $host . ':' . $port : $host;
    }
}
