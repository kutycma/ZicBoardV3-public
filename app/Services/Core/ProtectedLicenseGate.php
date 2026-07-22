<?php

namespace App\Services\Core;

class ProtectedLicenseGate
{
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
            $errorCode = is_array($status) ? (string)($status['error_code'] ?? '') : '';
            if (in_array($errorCode, ['license_server_unreachable', 'license_server_timeout'], true)) {
                abort(503, 'ZicBoard license service is temporarily unavailable');
            }
            abort(403, 'ZicBoard license is not active. Please renew your license for ' . $scope);
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
