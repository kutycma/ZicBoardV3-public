<?php

return [
    'rpc_url' => env('ZICBOARD_CORE_RPC_URL', 'http://127.0.0.1:18080/rpc'),
    'rpc_secret' => env('ZICBOARD_CORE_RPC_SECRET', ''),
    'timeout' => env('ZICBOARD_CORE_RPC_TIMEOUT', 3),
];
