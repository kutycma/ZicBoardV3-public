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
            $status = (new CoreRpcClient())->call('license.status');
        } catch (\Throwable $e) {
            abort(503, 'Dịch vụ license ZicBoard không khả dụng');
        }

        if (empty($status['protected_features_enabled'])) {
            abort(403, 'Cần license ZicBoard hợp lệ cho ' . $scope);
        }
    }
}
