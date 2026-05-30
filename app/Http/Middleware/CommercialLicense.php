<?php

namespace App\Http\Middleware;

use App\Services\Core\ProtectedLicenseGate;
use Closure;

class CommercialLicense
{
    /**
     * Require a valid ZicBoard commercial license for protected routes.
     */
    public function handle($request, Closure $next)
    {
        (new ProtectedLicenseGate())->assertCommercialEnabled();

        return $next($request);
    }
}
