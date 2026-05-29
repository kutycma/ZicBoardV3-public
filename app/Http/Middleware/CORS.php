<?php

namespace App\Http\Middleware;

use Closure;

class CORS
{
    public function handle($request, Closure $next)
    {
        $origin = $request->header('origin');
        $response = $request->getMethod() === 'OPTIONS'
            ? response('', 204)
            : $next($request);
        $allowedOrigin = $this->allowedOrigin($request, $origin);
        if ($allowedOrigin !== '') {
            $response->header('Access-Control-Allow-Origin', $allowedOrigin);
            $response->header('Access-Control-Allow-Credentials', 'true');
            $response->header('Vary', 'Origin');
        }
        $response->header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,HEAD');
        $response->header('Access-Control-Allow-Headers', 'Origin,Content-Type,Accept,Authorization,X-Requested-With,X-Request-With,X-Hwid');
        $response->header('Access-Control-Max-Age', 10080);

        return $response;
    }

    private function allowedOrigin($request, $origin)
    {
        if (empty($origin)) {
            return $request->getSchemeAndHttpHost();
        }

        $originHost = parse_url($origin, PHP_URL_HOST);
        if (!$originHost) {
            return '';
        }

        $allowedHosts = array_filter([
            $request->getHost(),
            parse_url((string)config('zicboard.app_url'), PHP_URL_HOST),
        ]);

        return in_array($originHost, $allowedHosts, true) ? rtrim($origin, '/') : '';
    }
}
