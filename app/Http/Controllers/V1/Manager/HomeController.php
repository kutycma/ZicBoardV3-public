<?php

namespace App\Http\Controllers\V1\Manager;

use App\Http\Controllers\Controller;
use App\Services\Manager\ManagerAccessService;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    private $access;

    public function __construct(ManagerAccessService $access)
    {
        $this->access = $access;
    }

    public function info(Request $request)
    {
        $manager = $this->access->currentManager($request);

        return response([
            'data' => [
                'id' => $manager->id,
                'email' => $manager->email,
                'is_manager' => (int)$manager->is_manager,
                'manager_path' => config('zicboard.manager_path', 'manager'),
                'capabilities' => [
                    'user_search' => true,
                    'user_create' => true,
                    'user_update_password' => true,
                    'subscription_reset' => true,
                    'subscription_subscribe_url' => true,
                    'subscription_qr' => true,
                    'device_unbind' => true,
                    'device_ban' => true,
                    'order_assign' => true,
                    'order_paid' => true,
                    'server_view' => true
                ]
            ]
        ]);
    }
}