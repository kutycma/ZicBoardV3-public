<?php
namespace App\Http\Routes\V1;

use Illuminate\Contracts\Routing\Registrar;

class ManagerRoute
{
    public function map(Registrar $router)
    {
        $router->group([
            'prefix' => 'manager',
            'middleware' => ['manager']
        ], function ($router) {
            $router->get ('/info', 'V1\\Manager\\HomeController@info');
            $router->get ('/user/search', 'V1\\Manager\\UserController@search');
            $router->post('/user/create', 'V1\\Manager\\UserController@create');
            $router->get ('/user/detail', 'V1\\Manager\\UserController@detail');
            $router->post('/user/update-password', 'V1\\Manager\\UserController@updatePassword');
            $router->post('/user/resetSecurity', 'V1\\Manager\\UserController@resetSecurity');
            $router->get ('/device/fetch', 'V1\\Manager\\UserDeviceController@fetch');
            $router->post('/device/unbind', 'V1\\Manager\\UserDeviceController@unbind');
            $router->get ('/plan/fetch', 'V1\\Manager\\PlanController@fetch');
            $router->post('/order/assign', 'V1\\Manager\\OrderController@assign');
            $router->get ('/order/fetch', 'V1\\Manager\\OrderController@fetch');
            $router->post('/order/paid', 'V1\\Manager\\OrderController@paid');
        });
    }
}