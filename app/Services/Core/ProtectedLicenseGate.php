<?php

namespace App\Services\Core;

class ProtectedLicenseGate
{
    private static ?int $lastIntegrityCheck = null;
    private const INTEGRITY_CHECK_INTERVAL = 300; // 5 minutes

    public function assertEnabled()
    {
        $this->assertAllowed('protected feature');
    }

    public function assertCommercialEnabled()
    {
        $this->assertAllowed('ZicBoard commercial runtime');
    }

    private function assertAllowed(string $scope)
    {
        try {
            $rpc = new CoreRpcClient();
            $status = $rpc->call('license.status');
        } catch (\Throwable $e) {
            abort(503, 'ZicBoard license service is unavailable');
        }

        if (!$this->licenseAllowsProtected($status)) {
            try {
                $refreshedStatus = $rpc->call('license.refresh');
                if (is_array($refreshedStatus)) {
                    $status = $refreshedStatus;
                }
            } catch (\Throwable $e) {
                \Log::warning('Core license refresh failed: ' . $e->getMessage());
            }
        }

        if (!$this->licenseAllowsProtected($status)) {
            abort(403, 'ZicBoard license is not active. Please renew your license for ' . $scope);
        }

        // Periodic runtime verification.
        $now = time();
        if (self::$lastIntegrityCheck === null || ($now - self::$lastIntegrityCheck) >= self::INTEGRITY_CHECK_INTERVAL) {
            try {
                $rpc->verifyCoreIntegrity();
                self::$lastIntegrityCheck = $now;
            } catch (\Throwable $e) {
                \Log::warning('Core binary integrity check failed: ' . $e->getMessage());
                abort(503, 'Core binary integrity verification failed');
            }
        }
    }

    private function licenseAllowsProtected($status): bool
    {
        return is_array($status)
            && !empty($status['active'])
            && !empty($status['protected_features_enabled'])
            && (string)($status['status'] ?? '') === 'active';
    }
}
