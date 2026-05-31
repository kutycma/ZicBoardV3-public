<?php

namespace App\Services;

use App\Services\Core\ProtectedFeatureService;
use Illuminate\Contracts\Cache\LockProvider;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;

class HappSubscribeCacheService
{
    const TABLE = 'v2_happ_subscribe_cache';
    const CACHE_PREFIX = 'HAPP_SUBSCRIBE_URL:';
    const LOCK_PREFIX = 'HAPP_SUBSCRIBE_URL_LOCK:';
    const FAILURE_COOLDOWN_KEY = 'HAPP_SUBSCRIBE_URL_FAILURE_COOLDOWN';
    const FAILURE_ALERT_KEY = 'HAPP_SUBSCRIBE_URL_FAILURE_ALERT';
    const FAILURE_ACTIVE_KEY = 'HAPP_SUBSCRIBE_URL_FAILURE_ACTIVE';

    private static $tableExists = null;

    public function get(string $rawUrl)
    {
        $rawUrl = trim($rawUrl);
        if ($rawUrl === '') {
            return null;
        }

        $cacheKey = $this->cacheKey($rawUrl);
        $now = time();
        $fresh = $this->getFresh($cacheKey, $now);
        if ($fresh !== null) {
            return $fresh;
        }

        $cooldown = (int)config('core.happ_subscribe_failure_cooldown', 30);
        if ($cooldown > 0 && Cache::has(self::FAILURE_COOLDOWN_KEY)) {
            return $this->getStale($cacheKey, $now);
        }

        return $this->generateWithLock($cacheKey, $rawUrl, $now);
    }

    public function forget(string $rawUrl): void
    {
        $cacheKey = $this->cacheKey($rawUrl);
        Cache::forget($cacheKey);
        if ($this->hasTable()) {
            DB::table(self::TABLE)->where('cache_key', $cacheKey)->delete();
        }
    }

    private function generateWithLock(string $cacheKey, string $rawUrl, int $now)
    {
        if (!(Cache::getStore() instanceof LockProvider)) {
            return $this->generateAndStore($cacheKey, $rawUrl, $now);
        }

        $lock = Cache::lock(self::LOCK_PREFIX . $cacheKey, $this->lockTtl());
        if ($lock->get()) {
            try {
                $fresh = $this->getFresh($cacheKey, time());
                if ($fresh !== null) {
                    return $fresh;
                }
                return $this->generateAndStore($cacheKey, $rawUrl, time());
            } finally {
                optional($lock)->release();
            }
        }

        $fresh = $this->waitForFresh($cacheKey);
        if ($fresh !== null) {
            return $fresh;
        }

        return $this->getStale($cacheKey, time());
    }

    private function generateAndStore(string $cacheKey, string $rawUrl, int $now)
    {
        try {
            $encryptedUrl = (new ProtectedFeatureService())->happSubscribeUrl($rawUrl);
            if (!is_string($encryptedUrl) || trim($encryptedUrl) === '') {
                throw new \RuntimeException('Core returned empty Happ encrypted subscribe URL');
            }

            $ttl = $this->freshTtlSeconds();
            $staleTtl = $this->staleTtlSeconds();
            $this->store($cacheKey, $encryptedUrl, $now + $ttl, $staleTtl > 0 ? $now + $ttl + $staleTtl : $now + $ttl);
            Cache::forget(self::FAILURE_COOLDOWN_KEY);
            $this->notifyRecovery();

            return $encryptedUrl;
        } catch (\Throwable $exception) {
            $this->rememberFailureCooldown();
            $this->notifyFailure($exception);
            $stale = $this->getStale($cacheKey, time());
            if ($stale !== null) {
                Log::warning('Failed to encrypt subscribe URL with Happ, using stale cached URL.', [
                    'error' => $exception->getMessage(),
                    'cache_key' => $cacheKey,
                ]);
                return $stale;
            }

            Log::warning('Failed to encrypt subscribe URL with Happ.', [
                'error' => $exception->getMessage(),
                'cache_key' => $cacheKey,
            ]);
            return null;
        }
    }

    private function getFresh(string $cacheKey, int $now)
    {
        $cached = Cache::get($cacheKey);
        if (is_string($cached) && $cached !== '') {
            return $cached;
        }

        if (!$this->hasTable()) {
            return null;
        }

        $row = DB::table(self::TABLE)
            ->where('cache_key', $cacheKey)
            ->where('expires_at', '>', $now)
            ->first();
        if (!$row || empty($row->encrypted_url)) {
            return null;
        }

        $remaining = max(1, (int)$row->expires_at - $now);
        Cache::put($cacheKey, (string)$row->encrypted_url, $remaining);

        return (string)$row->encrypted_url;
    }

    private function getStale(string $cacheKey, int $now)
    {
        if ($this->staleTtlSeconds() <= 0 || !$this->hasTable()) {
            return null;
        }

        $row = DB::table(self::TABLE)
            ->where('cache_key', $cacheKey)
            ->where('stale_until', '>', $now)
            ->first();

        return $row && !empty($row->encrypted_url) ? (string)$row->encrypted_url : null;
    }

    private function store(string $cacheKey, string $encryptedUrl, int $expiresAt, int $staleUntil): void
    {
        Cache::put($cacheKey, $encryptedUrl, max(1, $expiresAt - time()));

        if (!$this->hasTable()) {
            return;
        }

        $exists = DB::table(self::TABLE)->where('cache_key', $cacheKey)->exists();
        $values = [
            'encrypted_url' => $encryptedUrl,
            'expires_at' => $expiresAt,
            'stale_until' => max($expiresAt, $staleUntil),
            'updated_at' => time(),
        ];
        if (!$exists) {
            $values['created_at'] = time();
        }

        DB::table(self::TABLE)->updateOrInsert(['cache_key' => $cacheKey], $values);
    }

    private function waitForFresh(string $cacheKey)
    {
        $waitSeconds = max(0, (int)config('core.happ_subscribe_lock_wait', 5));
        $deadline = microtime(true) + $waitSeconds;
        do {
            usleep(200000);
            $fresh = $this->getFresh($cacheKey, time());
            if ($fresh !== null) {
                return $fresh;
            }
        } while (microtime(true) < $deadline);

        return null;
    }

    private function freshTtlSeconds(): int
    {
        $method = (int)config('zicboard.show_subscribe_method', 0);
        if ($method === 1) {
            return 86400;
        }
        if ($method === 2) {
            $step = max(60, (int)config('zicboard.show_subscribe_expire', 5) * 60);
            return max(10, $step - (time() % $step));
        }

        return max(60, (int)config('core.happ_subscribe_cache_ttl', 2592000));
    }

    private function staleTtlSeconds(): int
    {
        if ((int)config('zicboard.show_subscribe_method', 0) === 2) {
            return 0;
        }

        return max(0, (int)config('core.happ_subscribe_stale_ttl', 604800));
    }

    private function lockTtl(): int
    {
        $coreTimeout = (int)ceil((float)config('core.timeout', 3));
        return max(10, $coreTimeout + 5);
    }

    private function rememberFailureCooldown(): void
    {
        $seconds = max(0, (int)config('core.happ_subscribe_failure_cooldown', 30));
        if ($seconds > 0) {
            Cache::put(self::FAILURE_COOLDOWN_KEY, 1, $seconds);
        }
    }

    private function notifyFailure(\Throwable $exception): void
    {
        $seconds = max(60, (int)config('core.happ_subscribe_alert_cooldown', 300));
        if (!Cache::add(self::FAILURE_ALERT_KEY, 1, $seconds)) {
            return;
        }

        Cache::put(self::FAILURE_ACTIVE_KEY, 1, 86400);
        try {
            (new TelegramService())->sendMessageWithAdmin(
                'Happ subscribe encrypt failed: ' . $exception->getMessage()
            );
        } catch (\Throwable $notifyException) {
            Log::warning('Failed to notify admins about Happ subscribe encrypt failure.', [
                'error' => $notifyException->getMessage(),
            ]);
        }
    }

    private function notifyRecovery(): void
    {
        if (!Cache::has(self::FAILURE_ACTIVE_KEY)) {
            return;
        }

        Cache::forget(self::FAILURE_ACTIVE_KEY);
        try {
            (new TelegramService())->sendMessageWithAdmin('Happ subscribe encrypt recovered.');
        } catch (\Throwable $notifyException) {
            Log::warning('Failed to notify admins about Happ subscribe encrypt recovery.', [
                'error' => $notifyException->getMessage(),
            ]);
        }
    }

    private function cacheKey(string $rawUrl): string
    {
        return self::CACHE_PREFIX . hash('sha256', $rawUrl);
    }

    private function hasTable(): bool
    {
        if (self::$tableExists !== null) {
            return self::$tableExists;
        }

        try {
            self::$tableExists = Schema::hasTable(self::TABLE);
        } catch (\Throwable $exception) {
            self::$tableExists = false;
        }

        return self::$tableExists;
    }
}
