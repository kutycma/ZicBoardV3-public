<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Log as LogModel;
use App\Services\Core\CoreRpcException;
use App\Services\Core\CoreRpcClient;
use App\Utils\CacheKey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Laravel\Horizon\Contracts\JobRepository;
use Laravel\Horizon\Contracts\MasterSupervisorRepository;
use Laravel\Horizon\Contracts\MetricsRepository;
use Laravel\Horizon\Contracts\SupervisorRepository;
use Laravel\Horizon\Contracts\WorkloadRepository;
use Laravel\Horizon\WaitTimeCalculator;

class SystemController extends Controller
{
    public function getSystemStatus()
    {
        return response([
            'data' => [
                'schedule' => $this->getScheduleStatus(),
                'horizon' => $this->getHorizonStatus(),
                'core_license' => $this->coreLicenseStatus(false),
                'schedule_last_runtime' => Cache::get(CacheKey::get('SCHEDULE_LAST_CHECK_AT', null))
            ]
        ]);
    }

    public function getCoreLicenseStatus()
    {
        return response([
            'data' => $this->coreLicenseStatus(false)
        ]);
    }

    public function refreshCoreLicenseStatus()
    {
        return response([
            'data' => $this->coreLicenseStatus(true)
        ]);
    }

    public function getQueueWorkload(WorkloadRepository $workload)
    {
        return response([
            'data' => collect($workload->get())->sortBy('name')->values()->toArray()
        ]);
    }

    protected function getScheduleStatus():bool
    {
        return (time() - 120) < Cache::get(CacheKey::get('SCHEDULE_LAST_CHECK_AT', null));
    }

    protected function getHorizonStatus():bool
    {
        if (! $masters = app(MasterSupervisorRepository::class)->all()) {
            return false;
        }

        return collect($masters)->contains(function ($master) {
            return $master->status === 'paused';
        }) ? false : true;
    }

    public function getQueueStats()
    {
        return response([
            'data' => [
                'failedJobs' => app(JobRepository::class)->countRecentlyFailed(),
                'jobsPerMinute' => app(MetricsRepository::class)->jobsProcessedPerMinute(),
                'pausedMasters' => $this->totalPausedMasters(),
                'periods' => [
                    'failedJobs' => config('horizon.trim.recent_failed', config('horizon.trim.failed')),
                    'recentJobs' => config('horizon.trim.recent'),
                ],
                'processes' => $this->totalProcessCount(),
                'queueWithMaxRuntime' => app(MetricsRepository::class)->queueWithMaximumRuntime(),
                'queueWithMaxThroughput' => app(MetricsRepository::class)->queueWithMaximumThroughput(),
                'recentJobs' => app(JobRepository::class)->countRecent(),
                'status' => $this->getHorizonStatus(),
                'wait' => collect(app(WaitTimeCalculator::class)->calculate())->take(1),
            ]
        ]);
    }

    /**
     * Get the total process count across all supervisors.
     *
     * @return int
     */
    protected function totalProcessCount()
    {
        $supervisors = app(SupervisorRepository::class)->all();

        return collect($supervisors)->reduce(function ($carry, $supervisor) {
            return $carry + collect($supervisor->processes)->sum();
        }, 0);
    }

    /**
     * Get the number of master supervisors that are currently paused.
     *
     * @return int
     */
    protected function totalPausedMasters()
    {
        if (! $masters = app(MasterSupervisorRepository::class)->all()) {
            return 0;
        }

        return collect($masters)->filter(function ($master) {
            return $master->status === 'paused';
        })->count();
    }

    public function getSystemLog(Request $request) {
        $current = $request->input('current') ? $request->input('current') : 1;
        $pageSize = $request->input('page_size') >= 10 ? $request->input('page_size') : 10;
        $builder = LogModel::orderBy('created_at', 'DESC')
            ->setFilterAllowKeys('level');
        $total = $builder->count();
        $res = $builder->forPage($current, $pageSize)
            ->get();
        return response([
            'data' => $res,
            'total' => $total
        ]);
    }

    private function coreLicenseStatus(bool $refresh): array
    {
        try {
            $rpc = new CoreRpcClient();
            $status = $rpc->call($refresh ? 'license.refresh' : 'license.status');
            $normalized = $this->normalizeCoreLicenseStatus(is_array($status) ? $status : [], true, null, null);
            if (!$normalized['requires_renewal'] && !$normalized['service_unavailable']) {
                Cache::put(CacheKey::get('CORE_LICENSE_LAST_GOOD_STATUS', null), $normalized + ['cached_at' => time()], 900);
            }
            return $normalized;
        } catch (\Throwable $e) {
            $cached = Cache::get(CacheKey::get('CORE_LICENSE_LAST_GOOD_STATUS', null));
            if (is_array($cached)) {
                $cached['available'] = false;
                $cached['service_unavailable'] = true;
                $cached['requires_renewal'] = false;
                $cached['last_known_good'] = true;
                $cached['stale'] = true;
                $cached['last_refresh_error'] = $e instanceof CoreRpcException ? $e->getCoreCode() : 'core_rpc_error';
                $cached['error'] = null;
                $cached['error_code'] = $e instanceof CoreRpcException ? $e->getCoreCode() : 'core_rpc_error';
                $cached['message'] = 'ZicBoard core is temporarily unavailable; showing the last successful license status.';
                return $cached;
            }
            return $this->normalizeCoreLicenseStatus(
                [],
                false,
                null,
                $e instanceof CoreRpcException ? $e->getCoreCode() : 'core_rpc_error'
            );
        }
    }

    private function normalizeCoreLicenseStatus(array $status, bool $available, $error, $errorCode = null): array
    {
        $state = (string)($status['status'] ?? ($available ? 'unknown' : 'unavailable'));
        $protected = !empty($status['protected_features_enabled']);
        $active = !empty($status['active']);
        $entitlementExpiresAt = isset($status['entitlement_expires_at'])
            ? (int)$status['entitlement_expires_at']
            : (isset($status['expires_at']) ? (int)$status['expires_at'] : null);
        $licenseExpiresAt = isset($status['license_expires_at'])
            ? (int)$status['license_expires_at']
            : $entitlementExpiresAt;
        $daysUntilExpiry = $licenseExpiresAt ? (int)ceil(($licenseExpiresAt - time()) / 86400) : null;
        $resolvedErrorCode = $errorCode ?: ($status['error_code'] ?? null);
        $serverUnavailable = !$available || in_array($resolvedErrorCode, [
            CoreRpcException::UNREACHABLE,
            'license_server_unreachable',
            'license_server_timeout',
        ], true);
        $requiresRenewal = !$serverUnavailable && (
            in_array($resolvedErrorCode, [
                'license_inactive',
                'license_expired',
                'license_suspended',
                'license_revoked',
                'entitlement_invalid',
            ], true)
            || in_array($state, ['expired', 'suspended', 'revoked', 'inactive', 'invalid', 'bound', 'blocked'], true)
            || (!$resolvedErrorCode && (!$protected || $state !== 'active'))
        );
        $renewalWarning = !$serverUnavailable
            && $protected
            && $state === 'active'
            && $licenseExpiresAt
            && $daysUntilExpiry !== null
            && $daysUntilExpiry <= 14;
        $message = $serverUnavailable
            ? 'ZicBoard protection service is temporarily unavailable.'
            : ($requiresRenewal
                ? 'ZicBoard license is not active. Please renew your license to continue using protected features.'
                : 'ZicBoard license is active.');

        return [
            'available' => !$serverUnavailable,
            'status' => $state,
            'active' => $active,
            'protected_features_enabled' => $protected,
            'offline_grace' => !empty($status['offline_grace']),
            'service_unavailable' => $serverUnavailable,
            'requires_renewal' => $requiresRenewal,
            'renewal_warning' => $renewalWarning,
            'renewal_warning_days' => 14,
            'days_until_expiry' => $daysUntilExpiry,
            'message' => $message,
            'license_id' => $status['license_id'] ?? null,
            'activation_id' => $status['activation_id'] ?? null,
            'expires_at' => $licenseExpiresAt,
            'license_expires_at' => $licenseExpiresAt,
            'entitlement_expires_at' => $entitlementExpiresAt,
            'grace_until' => isset($status['grace_until']) ? (int)$status['grace_until'] : null,
            'last_refresh_at' => isset($status['last_refresh_at']) ? (int)$status['last_refresh_at'] : null,
            'blocked_at' => isset($status['blocked_at']) ? (int)$status['blocked_at'] : null,
            'error' => null,
            'error_code' => $resolvedErrorCode,
            'last_known_good' => false,
            'stale' => $serverUnavailable && in_array($resolvedErrorCode, [
                'license_server_unreachable',
                'license_server_timeout',
            ], true),
        ];
    }
}
