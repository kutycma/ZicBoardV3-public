<?php
namespace App\Http\Routes\V1;

use Illuminate\Contracts\Routing\Registrar;

class ClientRoute
{
    public function map(Registrar $router)
    {
        $router->group([
            'prefix' => 'client',
            'middleware' => ['client']
        ], function ($router) {
            // Client
            if (empty(config('zicboard.subscribe_path'))) {
                $router->get('/subscribe', 'V1\\Client\\ClientController@subscribe');
            }
            // ZicVPN Secure Config Delivery (add-only): endpoint mã hóa ZICV1.
            // KHÔNG thay thế /subscribe; cả hai cùng tồn tại. Site chưa nâng cấp
            // không có route này -> app tự fallback về link sub gốc (plaintext).
            $router->get('/zicvpn/sub', 'V1\\Client\\ZicvpnEncryptedSubscribeController@sub');
            // App
            $router->get('/app/getConfig', 'V1\\Client\\AppController@getConfig');
            $router->get('/app/getVersion', 'V1\\Client\\AppController@getVersion');
        });
    }
}
