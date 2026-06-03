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
        return $this->registerFromRequestViaCore($subscription, $request, $hwid);
    }

    private function registerFromRequestViaCore(UserSubscription $subscription, Request $request, $hwid)
    {
        $result = DB::transaction(function () use ($subscription, $request, $hwid) {
            $lockedSubscription = UserSubscription::where('id', $subscription->id)->lockForUpdate()->first();
            if (!$lockedSubscription) {
                abort(403, 'Token khong hop le');
            }

            $devices = UserDevice::where('subscription_id', $lockedSubscription->id)
                ->lockForUpdate()
                ->orderBy('id', 'ASC')
                ->get(['id', 'uuid', 'status', 'hwid_hash']);

            $decision = (new ProtectedFeatureService())->registerHwidDevice(
                $this->subscriptionPayload($lockedSubscription),
                $hwid,
                $this->devicePayload($devices),
                $this->requestPayload($request)
            );

            return $this->applyHwidDecision($lockedSubscription, $decision);
        }, 3);

        if (!empty($result['subscription_uuid'])) {
            $subscription->uuid = $result['subscription_uuid'];
        }

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
        return $this->translateNodeTrafficWithDevices($data)['subscriptions'];
    }

    public function translateNodeTrafficWithDevices(array $data): array
    {
        $data = $this->normalizeNodeTraffic($data);
        if (!$this->isHwidEnabled()) {
            return [
                'subscriptions' => $data,
                'devices' => []
            ];
        }

        $protectedFeatures = new ProtectedFeatureService();
        $deviceIdMap = $protectedFeatures->resolveVirtualDeviceIds(array_keys($data));
        $subscriptionIdMap = $this->subscriptionMapFromDeviceIdMap($deviceIdMap);

        return [
            'subscriptions' => $protectedFeatures->translateTraffic($data, $subscriptionIdMap),
            'devices' => $this->normalizeDeviceTraffic($data, $deviceIdMap)
        ];
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

    public function filterOnlineDeviceIdsByNode(array $deviceIds, $nodeType = null, $nodeId = null): array
    {
        $deviceIds = array_values(array_unique(array_filter(array_map('intval', $deviceIds), function ($id) {
            return $id > 0;
        })));

        if (!$deviceIds) {
            return [];
        }

        $nodeType = trim((string)$nodeType);
        $nodeType = $nodeType === '' ? null : $nodeType;
        $nodeId = (int)$nodeId;
        $nodeId = $nodeId > 0 ? $nodeId : null;

        if ($nodeType === null && $nodeId === null) {
            return $deviceIds;
        }

        $keys = [];
        $keyToId = [];
        foreach ($deviceIds as $id) {
            $key = $this->onlineDeviceCacheKey($id);
            $keys[] = $key;
            $keyToId[$key] = $id;
        }

        $matchedIds = [];
        foreach (Cache::many($keys) as $key => $state) {
            if (!isset($keyToId[$key])) {
                continue;
            }

            $onlineState = $this->normalizeOnlineState(is_array($state) ? $state : []);
            foreach (($onlineState['online_nodes'] ?? []) as $node) {
                $currentType = (string)($node['node_type'] ?? '');
                $currentId = (int)($node['node_id'] ?? 0);

                if ($nodeType !== null && strcasecmp($currentType, $nodeType) !== 0) {
                    continue;
                }
                if ($nodeId !== null && $currentId !== $nodeId) {
                    continue;
                }

                $matchedIds[] = $keyToId[$key];
                break;
            }
        }

        $matchedMap = array_flip($matchedIds);
        return array_values(array_filter($deviceIds, function ($id) use ($matchedMap) {
            return isset($matchedMap[$id]);
        }));
    }

    private function applyHwidDecision(UserSubscription $subscription, array $decision): array
    {
        $action = (string)($decision['action'] ?? '');
        if ($action === 'reject') {
            $this->abortHwidDecision((string)($decision['code'] ?? 'unknown'));
        }

        if ($action === 'use_subscription') {
            return [
                'subscription_uuid' => (string)($decision['subscription_uuid'] ?? $subscription->uuid)
            ];
        }

        $fields = is_array($decision['device'] ?? null) ? $decision['device'] : [];
        if ($action === 'update_device' || $action === 'bind_device') {
            $device = UserDevice::where('id', (int)($decision['device_id'] ?? 0))
                ->where('subscription_id', $subscription->id)
                ->lockForUpdate()
                ->first();
            if (!$device) {
                abort(403, 'Thiet bi khong ton tai');
            }

            $allowed = $action === 'update_device'
                ? ['user_agent', 'last_ip', 'last_seen_at']
                : ['hwid_hash', 'hwid', 'status', 'user_agent', 'first_ip', 'last_ip', 'first_seen_at', 'last_seen_at'];
            $device->update($this->onlyDeviceFields($fields, $allowed));
            $this->createWaitingSlotFromDecision($subscription, $decision);

            return [
                'subscription_uuid' => (string)($decision['subscription_uuid'] ?? $device->uuid)
            ];
        }

        if ($action === 'create_and_bind_device') {
            $device = UserDevice::create(array_merge([
                'user_id' => $subscription->user_id,
                'subscription_id' => $subscription->id,
            ], $this->onlyDeviceFields($fields, [
                'uuid', 'hwid_hash', 'hwid', 'status', 'user_agent', 'first_ip', 'last_ip', 'first_seen_at', 'last_seen_at'
            ])));
            $this->createWaitingSlotFromDecision($subscription, $decision);

            return [
                'subscription_uuid' => (string)($decision['subscription_uuid'] ?? $device->uuid)
            ];
        }

        abort(403, 'Xu ly thiet bi that bai');
    }

    private function abortHwidDecision(string $code): void
    {
        switch ($code) {
            case 'missing_hwid':
                abort(403, 'Thieu dinh danh thiet bi');
            case 'invalid_hwid':
                abort(403, 'Dinh danh thiet bi khong hop le');
            case 'device_banned':
                abort(403, 'Thiet bi da bi chan');
            case 'limit_reached':
                abort(403, 'Da dat gioi han thiet bi');
            default:
                abort(403, 'Xu ly thiet bi that bai');
        }
    }

    private function createWaitingSlotFromDecision(UserSubscription $subscription, array $decision): void
    {
        if (empty($decision['create_waiting_slot']) || empty($decision['waiting_slot_uuid'])) {
            return;
        }

        UserDevice::create([
            'user_id' => $subscription->user_id,
            'subscription_id' => $subscription->id,
            'uuid' => (string)$decision['waiting_slot_uuid'],
            'status' => self::STATUS_PENDING
        ]);
    }

    private function onlyDeviceFields(array $fields, array $allowed): array
    {
        $result = [];
        foreach ($allowed as $key) {
            if (array_key_exists($key, $fields)) {
                $result[$key] = $fields[$key];
            }
        }
        return $result;
    }

    private function subscriptionPayload(UserSubscription $subscription): array
    {
        return [
            'id' => (int)$subscription->id,
            'user_id' => (int)$subscription->user_id,
            'uuid' => (string)$subscription->uuid,
            'device_limit' => (int)$subscription->device_limit
        ];
    }

    private function devicePayload($devices): array
    {
        $result = [];
        foreach ($devices as $device) {
            $result[] = [
                'id' => (int)$device->id,
                'uuid' => (string)$device->uuid,
                'status' => (string)$device->status,
                'hwid_hash' => $device->hwid_hash
            ];
        }
        return $result;
    }

    private function requestPayload(Request $request): array
    {
        return [
            'ip' => $this->readIp($request),
            'user_agent' => $this->readUserAgent($request),
            'now' => time()
        ];
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
        return $this->subscriptionMapFromDeviceIdMap($deviceIds);
    }

    private function subscriptionMapFromDeviceIdMap(array $deviceIds): array
    {
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

    private function normalizeDeviceTraffic(array $data, array $deviceIdMap): array
    {
        $result = [];
        foreach ($data as $nodeUserId => $traffic) {
            if (!is_numeric($nodeUserId) || !is_array($traffic) || !isset($deviceIdMap[$nodeUserId])) {
                continue;
            }
            $trafficPair = $this->trafficPair($traffic);
            if (!$trafficPair) {
                continue;
            }

            $deviceId = (int)$deviceIdMap[$nodeUserId];
            if ($deviceId <= 0) {
                continue;
            }

            if (!isset($result[$deviceId])) {
                $result[$deviceId] = [0, 0];
            }
            $result[$deviceId][0] += $trafficPair[0];
            $result[$deviceId][1] += $trafficPair[1];
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
        if (isset($data['data']) && is_array($data['data'])) {
            $data = $data['data'];
        }

        $result = [];
        foreach ($data as $nodeUserId => $traffic) {
            if (!is_numeric($nodeUserId) || !is_array($traffic)) {
                if (!is_array($traffic)) {
                    continue;
                }
                $nodeUserId = $traffic['subscription_id'] ?? $traffic['user_id'] ?? $traffic['id'] ?? null;
                if (!is_numeric($nodeUserId)) {
                    continue;
                }
            } elseif (isset($traffic['subscription_id']) || isset($traffic['user_id']) || isset($traffic['id'])) {
                $nodeUserId = $traffic['subscription_id'] ?? $traffic['user_id'] ?? $traffic['id'];
                if (!is_numeric($nodeUserId)) {
                    continue;
                }
            }

            $trafficPair = $this->trafficPair($traffic);
            if (!$trafficPair) {
                continue;
            }

            $subscriptionId = (int)$nodeUserId;
            if ($subscriptionId <= 0) {
                continue;
            }
            if (!isset($result[$subscriptionId])) {
                $result[$subscriptionId] = [0, 0];
            }
            $result[$subscriptionId][0] += $trafficPair[0];
            $result[$subscriptionId][1] += $trafficPair[1];
        }

        return $result;
    }

    private function trafficPair(array $traffic)
    {
        $upload = $traffic[0]
            ?? $traffic['u']
            ?? $traffic['upload']
            ?? $traffic['up']
            ?? null;
        $download = $traffic[1]
            ?? $traffic['d']
            ?? $traffic['download']
            ?? $traffic['down']
            ?? null;

        if ($upload === null && $download === null) {
            return null;
        }

        return [max(0, (int)$upload), max(0, (int)$download)];
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
