<?php
namespace App\Http\Routes\V1;

use Illuminate\Contracts\Routing\Registrar;

class ClientRoute
{
    public function map(Registrar $router)
    {
        $router->group([
            'prefix' => 'client',
            'middleware' => ['client', 'commercial.license']
        ], function ($router) {
            // Client
            if (empty(config('zicboard.subscribe_path'))) {
                $router->get('/subscribe', 'V1\\Client\\ClientController@subscribe');
            }
            // App
            $router->get('/app/getConfig', 'V1\\Client\\AppController@getConfig');
            $router->get('/app/getVersion', 'V1\\Client\\AppController@getVersion');
        });
    }
}
