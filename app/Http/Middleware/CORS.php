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
        $response->header('Access-Control-Allow-Headers', 'Origin,Content-Type,Accept,Authorization,X-Requested-With,X-Request-With,X-Hwid,X-Device');
        $response->header('Access-Control-Max-Age', 10080);

        return $response;
    }

    private function allowedOrigin($request, $origin)
    {
        if (empty($origin)) {
            return $request->getSchemeAndHttpHost();
        }

        $originHost = $this->normalizeOriginHost($origin);
        if ($originHost === '') {
            return '';
        }

        $allowedHosts = array_merge([
            $this->normalizeOriginHost($request->getSchemeAndHttpHost()),
            $this->normalizeOriginHost($request->getHost()),
            $this->normalizeOriginHost($request->getHttpHost()),
            $this->normalizeOriginHost((string)config('zicboard.app_url')),
        ], $this->configuredAllowedOriginHosts());
        $allowedHosts = array_values(array_unique(array_filter($allowedHosts)));

        return in_array($originHost, $allowedHosts, true) ? rtrim($origin, '/') : '';
    }

    private function configuredAllowedOriginHosts()
    {
        $origins = config('zicboard.cors_allowed_origins', []);
        if (is_string($origins)) {
            $origins = preg_split('/[\r\n,]+/', $origins);
        }
        if (!is_array($origins)) {
            return [];
        }

        $hosts = [];
        foreach ($origins as $origin) {
            if (is_array($origin)) {
                continue;
            }
            $host = $this->normalizeOriginHost((string)$origin);
            if ($host !== '') {
                $hosts[] = $host;
            }
        }

        return $hosts;
    }

    private function normalizeOriginHost($origin)
    {
        $origin = trim((string)$origin);
        if ($origin === '' || strpos($origin, '*') !== false) {
            return '';
        }

        $url = preg_match('/^[a-z][a-z0-9+.-]*:\/\//i', $origin) ? $origin : 'https://' . $origin;
        $host = parse_url($url, PHP_URL_HOST);
        if (!$host) {
            return '';
        }

        $host = strtolower($host);
        $port = parse_url($url, PHP_URL_PORT);

        return $port ? $host . ':' . $port : $host;
    }
}
