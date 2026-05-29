<?php
namespace App\Http\Routes\V1;

use Illuminate\Contracts\Routing\Registrar;

class ServerRoute
{
    public function map(Registrar $router)
    {
        $router->group([
            'prefix' => 'server',
            'middleware' => 'commercial.license'
        ], function ($router) {
            $router->any('/{class}/{action}', function($class, $action) {
                $controllers = [
                    'uniproxy' => ['controller' => 'UniProxyController', 'actions' => ['user', 'push', 'alivelist', 'alive', 'config']],
                    'shadowsockstidalab' => ['controller' => 'ShadowsocksTidalabController', 'actions' => ['user', 'submit']],
                    'trojantidalab' => ['controller' => 'TrojanTidalabController', 'actions' => ['user', 'submit', 'config']],
                    'deepbwork' => ['controller' => 'DeepbworkController', 'actions' => ['user', 'submit', 'config']],
                ];
                $key = strtolower((string)$class);
                if (!isset($controllers[$key]) || !in_array((string)$action, $controllers[$key]['actions'], true)) {
                    abort(404);
                }
                $ctrl = \App::make("\\App\\Http\\Controllers\\V1\\Server\\" . $controllers[$key]['controller']);
                return \App::call([$ctrl, $action]);
            });
        });
    }
}
