<?php

return [
    'rpc_url' => env('ZICBOARD_CORE_RPC_URL', 'http://127.0.0.1:18080/rpc'),
    'rpc_secret' => env('ZICBOARD_CORE_RPC_SECRET', ''),
    'timeout' => env('ZICBOARD_CORE_RPC_TIMEOUT', 3),
    'happ_subscribe_cache_ttl' => env('ZICBOARD_HAPP_SUBSCRIBE_CACHE_TTL', 2592000),
    'happ_subscribe_stale_ttl' => env('ZICBOARD_HAPP_SUBSCRIBE_STALE_TTL', 604800),
    'happ_subscribe_lock_wait' => env('ZICBOARD_HAPP_SUBSCRIBE_LOCK_WAIT', 5),
    'happ_subscribe_failure_cooldown' => env('ZICBOARD_HAPP_SUBSCRIBE_FAILURE_COOLDOWN', 30),
    'happ_subscribe_alert_cooldown' => env('ZICBOARD_HAPP_SUBSCRIBE_ALERT_COOLDOWN', 300),
];
