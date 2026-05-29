<?php

namespace App\Services;

use App\Models\UserDevice;
use App\Models\User;
use App\Models\UserSubscription;
use App\Services\Core\ProtectedFeatureService;
use App\Utils\Helper;
use Illuminate\Http\Request;
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
        return (int)config('zicboard.device_hwid_enable', 1) === 1;
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
