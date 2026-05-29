<?php

namespace App\Http\Middleware;

use App\Services\Core\ProtectedLicenseGate;
use Closure;

class CommercialLicense
{
    /**
     * Require an active local ZicBoard core entitlement for commercial runtime routes.
     *
     * This is a runtime guard for unmodified deployments. Protected algorithms and
     * secrets still live in zicboard-core, because PHP source can be edited by a
     * server owner.
     */
    public function handle($request, Closure $next)
    {
        (new ProtectedLicenseGate())->assertCommercialEnabled();

        return $next($request);
    }
}
