<?php

namespace App\Support;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class ServerLoadIpOnline
{
    private const CACHE_TTL = 3600;
    private const STALE_SECONDS = 300;

    public static function record(Request $request, $server, string $serverType, int $online): void
    {
        self::recordRequest($request, $server, $serverType, max(0, $online));
    }

    public static function recordSeen(Request $request, $server, string $serverType): void
    {
        self::recordRequest($request, $server, $serverType, null);
    }

    private static function recordRequest(Request $request, $server, string $serverType, ?int $online): void
    {
        $serverId = self::serverId($server);
        if ($serverId <= 0) {
            return;
        }

        $loadIps = self::loadIpMap(self::serverLoadIps($server));
        $usedParentLoadIps = false;
        if (!$loadIps) {
            $parentLoadIps = self::parentServerLoadIps($server);
            if ($parentLoadIps) {
                $loadIps = self::loadIpMap($parentLoadIps);
                $usedParentLoadIps = true;
            }
        }

        if (!$loadIps) {
            return;
        }

        $sourceIp = self::normalizeIp($request->ip());
        if (!$sourceIp || !isset($loadIps[$sourceIp])) {
            self::logMatchMiss($server, $serverType, $sourceIp, $loadIps, $serverId, $usedParentLoadIps);
            return;
        }

        $now = time();
        $key = self::cacheKey($serverType, $serverId);
        $cached = Cache::get($key, []);
        if (!is_array($cached)) {
            $cached = [];
        }

        $cached = self::prune($cached, $now);
        $current = is_array($cached[$sourceIp] ?? null) ? $cached[$sourceIp] : [];
        $cached[$sourceIp] = [
            'ip' => $loadIps[$sourceIp],
            'online' => $online === null ? max(0, (int)($current['online'] ?? 0)) : max(0, $online),
            'last_push_at' => $now,
        ];

        Cache::put($key, $cached, self::CACHE_TTL);
    }

    public static function attachToServer(array &$server, string $serverType): void
    {
        $loadIps = self::loadIpMap($server['load_ips'] ?? []);
        if (!$loadIps) {
            $server['load_ip_online'] = [];
            return;
        }

        $serverId = !empty($server['parent_id']) ? (int)$server['parent_id'] : (int)($server['id'] ?? 0);
        if ($serverId <= 0) {
            $server['load_ip_online'] = self::emptyItems($loadIps);
            return;
        }

        $now = time();
        $key = self::cacheKey($serverType, $serverId);
        $cached = Cache::get($key, []);
        if (!is_array($cached)) {
            $cached = [];
        }

        $pruned = self::prune($cached, $now);
        if ($pruned !== $cached) {
            Cache::put($key, $pruned, self::CACHE_TTL);
        }

        $items = [];
        $total = 0;
        $hasFreshData = false;

        foreach ($loadIps as $canonical => $displayIp) {
            $entry = $pruned[$canonical] ?? null;
            $online = 0;
            $lastPushAt = null;

            if (is_array($entry)) {
                $online = max(0, (int)($entry['online'] ?? 0));
                $lastPushAt = isset($entry['last_push_at']) ? (int)$entry['last_push_at'] : null;
                $total += $online;
                $hasFreshData = true;
            }

            $items[] = [
                'ip' => $displayIp,
                'online' => $online,
                'last_push_at' => $lastPushAt,
            ];
        }

        $server['load_ip_online'] = $items;
        if ($hasFreshData) {
            $server['online'] = $total;
        }
    }

    private static function emptyItems(array $loadIps): array
    {
        $items = [];
        foreach ($loadIps as $displayIp) {
            $items[] = [
                'ip' => $displayIp,
                'online' => 0,
                'last_push_at' => null,
            ];
        }
        return $items;
    }

    private static function prune(array $cached, int $now): array
    {
        $fresh = [];
        foreach ($cached as $ip => $entry) {
            if (!is_array($entry)) {
                continue;
            }
            $lastPushAt = (int)($entry['last_push_at'] ?? 0);
            if ($lastPushAt > 0 && ($now - $lastPushAt) <= self::STALE_SECONDS) {
                $fresh[$ip] = $entry;
            }
        }
        return $fresh;
    }

    private static function cacheKey(string $serverType, int $serverId): string
    {
        return 'SERVER_LOAD_IP_ONLINE_' . strtoupper($serverType) . '_' . $serverId;
    }

    private static function serverId($server): int
    {
        if (is_array($server)) {
            return !empty($server['parent_id']) ? (int)$server['parent_id'] : (int)($server['id'] ?? 0);
        }
        return !empty($server->parent_id) ? (int)$server->parent_id : (int)($server->id ?? 0);
    }

    private static function serverParentId($server): int
    {
        if (is_array($server)) {
            return (int)($server['parent_id'] ?? 0);
        }
        return (int)($server->parent_id ?? 0);
    }

    private static function rawServerId($server): int
    {
        if (is_array($server)) {
            return (int)($server['id'] ?? 0);
        }
        return (int)($server->id ?? 0);
    }

    private static function parentServerLoadIps($server): array
    {
        if (is_array($server)) {
            return [];
        }

        $parentId = self::serverParentId($server);
        if ($parentId <= 0) {
            return [];
        }

        $modelClass = get_class($server);
        if (!method_exists($modelClass, 'find')) {
            return [];
        }

        $parent = $modelClass::find($parentId);
        if (!$parent) {
            return [];
        }

        return self::serverLoadIps($parent);
    }

    private static function logMatchMiss($server, string $serverType, ?string $sourceIp, array $loadIps, int $serverId, bool $usedParentLoadIps): void
    {
        Log::debug('Load IP report did not match configured IPs', [
            'server_type' => strtolower($serverType),
            'node_id' => self::rawServerId($server),
            'parent_id' => self::serverParentId($server) ?: null,
            'effective_node_id' => $serverId,
            'source_ip' => $sourceIp,
            'load_ips' => array_values(array_keys($loadIps)),
            'cache_key' => self::cacheKey($serverType, $serverId),
            'load_ips_source' => $usedParentLoadIps ? 'parent' : 'node',
        ]);
    }

    private static function serverLoadIps($server): array
    {
        if (is_array($server)) {
            return self::normalizeLoadIps($server['load_ips'] ?? []);
        }
        return self::normalizeLoadIps($server->load_ips ?? []);
    }

    private static function loadIpMap($value): array
    {
        $map = [];
        foreach (self::normalizeLoadIps($value) as $ip) {
            $canonical = self::normalizeIp($ip);
            if ($canonical && !isset($map[$canonical])) {
                $map[$canonical] = $ip;
            }
        }
        return $map;
    }

    private static function normalizeLoadIps($value): array
    {
        if (is_string($value)) {
            $decoded = json_decode($value, true);
            if (is_array($decoded)) {
                $value = $decoded;
            } else {
                $value = preg_split('/[\r\n,]+/', $value) ?: [];
            }
        }

        if (!is_array($value)) {
            return [];
        }

        $ips = [];
        foreach ($value as $ip) {
            if (!is_scalar($ip)) {
                continue;
            }
            $ip = trim((string)$ip);
            if ($ip !== '') {
                $ips[] = $ip;
            }
        }
        return $ips;
    }

    private static function normalizeIp($ip): ?string
    {
        $ip = trim((string)$ip);
        if ($ip === '') {
            return null;
        }

        $packed = @inet_pton($ip);
        if ($packed === false) {
            return null;
        }

        $normalized = @inet_ntop($packed);
        return $normalized === false ? null : strtolower($normalized);
    }
}