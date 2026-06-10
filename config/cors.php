<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Runtime CORS is handled by App\Http\Middleware\CORS in the global
    | middleware stack. Keep this fallback config aligned with that middleware
    | so static scanners do not report a wildcard policy that is not used.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*'],

    'allowed_methods' => ['GET', 'POST', 'OPTIONS', 'HEAD'],

    'allowed_origins' => [],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['Origin', 'Content-Type', 'Accept', 'Authorization', 'X-Requested-With', 'X-Request-With', 'X-Hwid', 'X-Device'],

    'exposed_headers' => [],

    'max_age' => 10080,

    'supports_credentials' => true,

];
