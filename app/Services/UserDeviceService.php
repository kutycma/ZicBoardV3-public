<?php

namespace App\Services;

use App\Models\UserDevice;
use App\Models\User;
use App\Models\UserSubscription;
use App\Services\Core\ProtectedFeatureService;
use App\Utils\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class UserDeviceService
{
    const HWID_HEADER = 'X-Hwid';
    const HWID_MAX_LENGTH = 255;
    const USER_AGENT_MAX_LENGTH = 255;
    const IP_MAX_LENGTH = 128;
    const STATUS_PENDING = 'pending';
    const STATUS_BOUND = 'bound';
    const STATUS_BANNED = 'banned';
    const ONLINE_STATE_TTL = 120;
    const ONLINE_NODE_STALE_SECONDS = 120;

    public function registerFromRequest(UserSubscription $subscription, Request $request)
    {
        if (!$this->isHwidEnabled()) {
            return $subscription;
        }

        $hwid = $this->readHwid($request);
        if ($hwid === null) {
            abort(403, 'Thiếu định danh thiết bị');
        }
        if (strlen($hwid) > self::HWID_MAX_LENGTH) {
            abort(403, 'Định danh thiết bị không hợp lệ');
        }
        if (!$this->hasDeviceLimit($subscription)) {
            return $subscription;
        }

        $hwidHash = hash('sha256', $hwid);
        $device = DB::transaction(function () use ($subscription, $request, $hwid, $hwidHash) {
            $lockedSubscription = UserSubscription::where('id', $subscription->id)->lockForUpdate()->first();
            if (!$lockedSubscription) {
                abort(403, 'Token không hợp lệ');
            }

            $device = UserDevice::where('subscription_id', $lockedSubscription->id)
                ->where('hwid_hash', $hwidHash)
                ->lockForUpdate()
                ->first();
            if ($device) {
                if ($device->status === self::STATUS_BANNED) {
                    abort(403, 'Thiết bị đã bị chặn');
                }
                $this->updateSeenMetadata($device, $request);
                return $device;
            }

            $device = $this->nextPendingSlot($lockedSubscription);
            if (!$device) {
                $this->ensureWaitingSlotForLockedSubscription($lockedSubscription);
                $device = $this->nextPendingSlot($lockedSubscription);
            }
            if (!$device) {
                abort(403, 'Đã đạt giới hạn thiết bị');
            }

            $this->bindSlot($device, $request, $hwid, $hwidHash);
            $this->ensureWaitingSlotForLockedSubscription($lockedSubscription);

            return $device;
        }, 3);

        $subscription->uuid = $device->uuid;
        return $subscription;
    }

    public function ensureWaitingSlot(UserSubscription $subscription)
    {
        if (!$this->isHwidEnabled() || !$this->hasDeviceLimit($subscription)) {
            return null;
        }

        return DB::transaction(function () use ($subscription) {
            $lockedSubscription = UserSubscription::where('id', $subscription->id)->lockForUpdate()->first();
            if (!$lockedSubscription) {
                return null;
            }

            return $this->ensureWaitingSlotForLockedSubscription($lockedSubscription);
        }, 3);
    }

    public function unbind(UserDevice $device)
    {
        return DB::transaction(function () use ($device) {
            $lockedSubscription = UserSubscription::where('id', $device->subscription_id)->lockForUpdate()->first();
            if (!$lockedSubscription) {
                abort(500, 'Gói đăng ký không tồn tại');
            }

            $lockedDevice = UserDevice::where('id', $device->id)
                ->where('subscription_id', $lockedSubscription->id)
                ->lockForUpdate()
                ->first();
            if (!$lockedDevice) {
                abort(500, 'Thiết bị không tồn tại');
            }

            $deleted = $lockedDevice->delete();
            $this->ensureWaitingSlotForLockedSubscription($lockedSubscription);

            return $deleted;
        }, 3);
    }

    public function ban(UserDevice $device)
    {
        return DB::transaction(function () use ($device) {
            $lockedSubscription = UserSubscription::where('id', $device->subscription_id)->lockForUpdate()->first();
            if (!$lockedSubscription) {
                abort(500, 'Gói đăng ký không tồn tại');
            }

            $lockedDevice = UserDevice::where('id', $device->id)
                ->where('subscription_id', $lockedSubscription->id)
                ->lockForUpdate()
                ->first();
            if (!$lockedDevice || !$lockedDevice->hwid_hash) {
                abort(500, 'Chỉ có thể chặn thiết bị đã liên kết');
            }

            if ($lockedDevice->status !== self::STATUS_BANNED) {
                $lockedDevice->update([
                    'status' => self::STATUS_BANNED
                ]);
            }
            $this->ensureWaitingSlotForLockedSubscription($lockedSubscription);

            return true;
        }, 3);
    }

    public function resetUser(User $user)
    {
        return DB::transaction(function () use ($user) {
            $lockedUser = User::where('id', $user->id)->lockForUpdate()->first();
            if (!$lockedUser) {
                abort(500, 'Người dùng không tồn tại');
            }

            UserDevice::where('user_id', $lockedUser->id)->delete();
            foreach (UserSubscription::where('user_id', $lockedUser->id)->get() as $subscription) {
                $this->ensureWaitingSlotForLockedSubscription($subscription);
            }

            return true;
        }, 3);
    }

    public function translateNodeTraffic(array $data): array
    {
        if (!$this->isHwidEnabled()) {
            return $this->normalizeNodeTraffic($data);
        }

        $protectedFeatures = new ProtectedFeatureService();
        $subscriptionIdMap = $this->loadVirtualSubscriptionMap(array_keys($data), $protectedFeatures);
        return $protectedFeatures->translateTraffic($data, $subscriptionIdMap);
    }

    public function translateNodeAliveData(array $data): array
    {
        if (!$this->isHwidEnabled()) {
            return $this->normalizeNodeAliveData($data);
        }

        $protectedFeatures = new ProtectedFeatureService();
        $subscriptionIdMap = $this->loadVirtualSubscriptionMap(array_keys($data), $protectedFeatures);
        return $protectedFeatures->translateAlive($data, $subscriptionIdMap);
    }

    public function recordOnlineDevicesFromNodeAlive(array $rawData, string $nodeType, int $nodeId): void
    {
        if (!$this->isHwidEnabled() || empty($rawData)) {
            return;
        }

        try {
            $records = (new ProtectedFeatureService())->mapOnlineDevices($rawData, $nodeType, $nodeId);
        } catch (\Throwable $e) {
            return;
        }

        if (!$records) {
            return;
        }

        foreach ($records as $deviceId => $record) {
            if (!is_array($record)) {
                continue;
            }

            $deviceId = (int)($record['device_id'] ?? $deviceId);
            if ($deviceId <= 0) {
                continue;
            }

            $cacheKey = $this->onlineDeviceCacheKey($deviceId);
            $state = Cache::get($cacheKey, []);
            $nodeMap = $this->onlineNodeMapFromState(is_array($state) ? $state : []);

            $recordNodeType = (string)($record['node_type'] ?? $nodeType);
            $recordNodeId = (int)($record['node_id'] ?? $nodeId);
            $nodeKey = $recordNodeType . ':' . $recordNodeId;
            $ips = $this->sanitizeOnlineIps($record['online_ips'] ?? []);
            $lastSeenAt = (int)($record['online_last_seen_at'] ?? time());

            if (!$ips) {
                unset($nodeMap[$nodeKey]);
            } else {
                $nodeMap[$nodeKey] = [
                    'node_type' => $recordNodeType,
                    'node_id' => $recordNodeId,
                    'online_ips' => $ips,
                    'online_ip_count' => count($ips),
                    'online_last_seen_at' => $lastSeenAt
                ];
            }

            $nextState = $this->buildOnlineState($nodeMap);
            Cache::put($cacheKey, $nextState, self::ONLINE_STATE_TTL);
        }
    }

    public function withOnlineState($devices)
    {
        if (!$devices || !method_exists($devices, 'pluck')) {
            return $devices;
        }

        $ids = array_values(array_filter($devices->pluck('id')->map(function ($id) {
            return (int)$id;
        })->all()));
        if (!$ids) {
            return $devices;
        }

        $keys = [];
        $keyToId = [];
        foreach ($ids as $id) {
            $key = $this->onlineDeviceCacheKey($id);
            $keys[] = $key;
            $keyToId[$key] = $id;
        }

        $cachedStates = Cache::many($keys);
        $statesById = [];
        foreach ($cachedStates as $key => $state) {
            if (isset($keyToId[$key])) {
                $statesById[$keyToId[$key]] = $this->normalizeOnlineState(is_array($state) ? $state : []);
            }
        }

        foreach ($devices as $device) {
            $state = $statesById[(int)$device->id] ?? $this->emptyOnlineState();
            $device->is_online = $state['is_online'];
            $device->online_ips = $state['online_ips'];
            $device->online_ip_count = $state['online_ip_count'];
            $device->online_nodes = $state['online_nodes'];
            $device->online_last_seen_at = $state['online_last_seen_at'];
        }

        return $devices;
    }

    private function readHwid(Request $request)
    {
        $hwid = trim((string)$request->header(self::HWID_HEADER, ''));
        return $hwid === '' ? null : $hwid;
    }

    private function hasDeviceLimit(UserSubscription $subscription)
    {
        return (int)$subscription->device_limit > 0;
    }

    private function isHwidEnabled()
    {
        return (int)config('zicboard.device_hwid_enable', 0) === 1;
    }

    private function nextPendingSlot(UserSubscription $subscription)
    {
        return UserDevice::where('subscription_id', $subscription->id)
            ->where('status', self::STATUS_PENDING)
            ->lockForUpdate()
            ->orderBy('id', 'ASC')
            ->first();
    }

    private function ensureWaitingSlotForLockedSubscription(UserSubscription $subscription)
    {
        if (!$this->hasDeviceLimit($subscription)) {
            return null;
        }

        $waitingSlot = $this->nextPendingSlot($subscription);
        if ($waitingSlot) {
            return $waitingSlot;
        }

        $activeSlots = UserDevice::where('subscription_id', $subscription->id)
            ->whereIn('status', [self::STATUS_PENDING, self::STATUS_BOUND])
            ->count();
        if ($activeSlots >= (int)$subscription->device_limit) {
            return null;
        }

        return UserDevice::create([
            'user_id' => $subscription->user_id,
            'subscription_id' => $subscription->id,
            'uuid' => Helper::guid(true),
            'status' => self::STATUS_PENDING
        ]);
    }

    private function bindSlot(UserDevice $device, Request $request, string $hwid, string $hwidHash)
    {
        $now = time();
        $ip = $this->readIp($request);
        $device->update([
            'hwid_hash' => $hwidHash,
            'hwid' => $hwid,
            'status' => self::STATUS_BOUND,
            'user_agent' => $this->readUserAgent($request),
            'first_ip' => $ip,
            'last_ip' => $ip,
            'first_seen_at' => $now,
            'last_seen_at' => $now
        ]);
    }

    private function updateSeenMetadata(UserDevice $device, Request $request)
    {
        $device->update([
            'user_agent' => $this->readUserAgent($request),
            'last_ip' => $this->readIp($request),
            'last_seen_at' => time()
        ]);
    }

    private function readUserAgent(Request $request)
    {
        $userAgent = trim((string)$request->userAgent());
        return $userAgent === '' ? null : substr($userAgent, 0, self::USER_AGENT_MAX_LENGTH);
    }

    private function readIp(Request $request)
    {
        $ip = trim((string)$request->ip());
        return $ip === '' ? null : substr($ip, 0, self::IP_MAX_LENGTH);
    }

    private function loadVirtualSubscriptionMap(array $nodeUserIds, ProtectedFeatureService $protectedFeatures): array
    {
        $deviceIds = $protectedFeatures->resolveVirtualDeviceIds($nodeUserIds);
        if (!$deviceIds) {
            return [];
        }

        $slots = UserDevice::whereIn('id', array_values($deviceIds))
            ->pluck('subscription_id', 'id');
        $result = [];
        foreach ($deviceIds as $nodeUserId => $deviceId) {
            if (isset($slots[$deviceId])) {
                $result[$nodeUserId] = (int)$slots[$deviceId];
            }
        }

        return $result;
    }

    private function onlineDeviceCacheKey(int $deviceId): string
    {
        return 'DEVICE_ONLINE_STATE_' . $deviceId;
    }

    private function onlineNodeMapFromState(array $state): array
    {
        if (isset($state['online_node_map']) && is_array($state['online_node_map'])) {
            return $state['online_node_map'];
        }

        $nodeMap = [];
        foreach (($state['online_nodes'] ?? []) as $node) {
            if (!is_array($node)) {
                continue;
            }
            $nodeType = (string)($node['node_type'] ?? '');
            $nodeId = (int)($node['node_id'] ?? 0);
            if ($nodeType === '' || $nodeId <= 0) {
                continue;
            }
            $nodeMap[$nodeType . ':' . $nodeId] = $node;
        }
        return $nodeMap;
    }

    private function buildOnlineState(array $nodeMap): array
    {
        $now = time();
        $activeNodeMap = [];
        foreach ($nodeMap as $nodeKey => $node) {
            if (!is_array($node)) {
                continue;
            }
            $lastSeenAt = (int)($node['online_last_seen_at'] ?? 0);
            if ($lastSeenAt <= 0 || $now - $lastSeenAt > self::ONLINE_NODE_STALE_SECONDS) {
                continue;
            }
            $ips = $this->sanitizeOnlineIps($node['online_ips'] ?? []);
            if (!$ips) {
                continue;
            }
            $activeNodeMap[$nodeKey] = [
                'node_type' => (string)($node['node_type'] ?? ''),
                'node_id' => (int)($node['node_id'] ?? 0),
                'online_ips' => $ips,
                'online_ip_count' => count($ips),
                'online_last_seen_at' => $lastSeenAt
            ];
        }

        $state = $this->normalizeOnlineState([
            'online_node_map' => $activeNodeMap,
            'online_nodes' => array_values($activeNodeMap)
        ]);
        $state['online_node_map'] = $activeNodeMap;
        return $state;
    }

    private function normalizeOnlineState(array $state): array
    {
        $nodes = [];
        $ipMap = [];
        $lastSeenAt = null;

        foreach (($state['online_nodes'] ?? []) as $node) {
            if (!is_array($node)) {
                continue;
            }
            $nodeType = (string)($node['node_type'] ?? '');
            $nodeId = (int)($node['node_id'] ?? 0);
            $ips = $this->sanitizeOnlineIps($node['online_ips'] ?? []);
            $nodeLastSeenAt = (int)($node['online_last_seen_at'] ?? 0);
            if ($nodeType === '' || $nodeId <= 0 || !$ips || $nodeLastSeenAt <= 0) {
                continue;
            }

            foreach ($ips as $ip) {
                $ipMap[$ip] = true;
            }
            if ($lastSeenAt === null || $nodeLastSeenAt > $lastSeenAt) {
                $lastSeenAt = $nodeLastSeenAt;
            }
            $nodes[] = [
                'node_type' => $nodeType,
                'node_id' => $nodeId,
                'online_ips' => $ips,
                'online_ip_count' => count($ips),
                'online_last_seen_at' => $nodeLastSeenAt
            ];
        }

        usort($nodes, function ($a, $b) {
            return ($b['online_last_seen_at'] ?? 0) <=> ($a['online_last_seen_at'] ?? 0);
        });

        $ips = array_keys($ipMap);
        sort($ips);

        return [
            'is_online' => count($nodes) > 0,
            'online_ips' => $ips,
            'online_ip_count' => count($ips),
            'online_nodes' => $nodes,
            'online_last_seen_at' => $lastSeenAt
        ];
    }

    private function emptyOnlineState(): array
    {
        return [
            'is_online' => false,
            'online_ips' => [],
            'online_ip_count' => 0,
            'online_nodes' => [],
            'online_last_seen_at' => null
        ];
    }

    private function sanitizeOnlineIps($ips): array
    {
        if (!is_array($ips)) {
            return [];
        }

        $result = [];
        foreach ($ips as $ip) {
            if (!is_scalar($ip)) {
                continue;
            }
            $ip = trim((string)$ip);
            if ($ip === '') {
                continue;
            }
            $result[substr($ip, 0, self::IP_MAX_LENGTH)] = true;
        }

        $values = array_keys($result);
        sort($values);
        return $values;
    }

    private function normalizeNodeTraffic(array $data): array
    {
        $result = [];
        foreach ($data as $nodeUserId => $traffic) {
            if (!is_numeric($nodeUserId) || !is_array($traffic)) {
                continue;
            }

            $subscriptionId = (int)$nodeUserId;
            if (!isset($result[$subscriptionId])) {
                $result[$subscriptionId] = [0, 0];
            }
            $result[$subscriptionId][0] += (int)($traffic[0] ?? 0);
            $result[$subscriptionId][1] += (int)($traffic[1] ?? 0);
        }

        return $result;
    }

    private function normalizeNodeAliveData(array $data): array
    {
        $result = [];
        foreach ($data as $nodeUserId => $ips) {
            if (!is_numeric($nodeUserId) || !is_array($ips)) {
                continue;
            }

            $subscriptionId = (int)$nodeUserId;
            if (!isset($result[$subscriptionId])) {
                $result[$subscriptionId] = [];
            }
            $result[$subscriptionId] = array_values(array_unique(array_merge($result[$subscriptionId], $ips)));
        }

        return $result;
    }
}
