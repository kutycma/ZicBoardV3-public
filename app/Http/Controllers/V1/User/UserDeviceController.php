<?php

namespace App\Http\Controllers\V1\User;

use App\Http\Controllers\Controller;
use App\Models\UserDevice;
use App\Services\UserDeviceService;
use Illuminate\Http\Request;

class UserDeviceController extends Controller
{
    public function fetch(Request $request)
    {
        $devices = UserDevice::where('user_id', $request->user['id'])
            ->select([
                'id',
                'subscription_id',
                'uuid',
                'status',
                'hwid',
                'user_agent',
                'first_ip',
                'last_ip',
                'first_seen_at',
                'last_seen_at',
                'created_at',
                'updated_at'
            ])
            ->orderBy('last_seen_at', 'DESC')
            ->orderBy('id', 'DESC')
            ->get();
        $devices = (new UserDeviceService())->withOnlineState($devices);

        return response([
            'data' => $devices
        ]);
    }

    public function drop(Request $request)
    {
        $device = $this->getOwnDevice($request);

        return response([
            'data' => (new UserDeviceService())->unbind($device)
        ]);
    }

    public function ban(Request $request)
    {
        $device = $this->getOwnDevice($request);

        return response([
            'data' => (new UserDeviceService())->ban($device)
        ]);
    }

    private function getOwnDevice(Request $request)
    {
        $id = $request->input('id');
        if (!$id || !is_numeric($id)) {
            abort(500, 'Thiết bị không tồn tại');
        }

        $device = UserDevice::where('user_id', $request->user['id'])
            ->where('id', $id)
            ->first();
        if (!$device) {
            abort(500, 'Thiết bị không tồn tại');
        }

        return $device;
    }
}
