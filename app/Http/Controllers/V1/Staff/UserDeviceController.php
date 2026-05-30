<?php

namespace App\Http\Controllers\V1\Staff;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserDevice;
use App\Services\UserDeviceService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserDeviceController extends Controller
{
    public function fetch(Request $request)
    {
        if (!$this->isHwidEnabled()) {
            return response([
                'data' => []
            ]);
        }

        $targetUserId = $request->input('target_user_id', $request->input('user_id'));
        if (!$targetUserId) {
            abort(500, 'Tham số không hợp lệ');
        }

        $user = $this->staffUser($request, $targetUserId);

        $devices = UserDevice::query()
            ->select([
                'v2_user_device.id',
                'v2_user_device.user_id',
                'v2_user_device.subscription_id',
                'v2_user_device.uuid',
                'v2_user_device.status',
                'v2_user_device.hwid',
                'v2_user_device.user_agent',
                'v2_user_device.first_ip',
                'v2_user_device.last_ip',
                'v2_user_device.first_seen_at',
                'v2_user_device.last_seen_at',
                'v2_user_device.created_at',
                'v2_user_device.updated_at',
                'plans.name as plan_name',
                DB::raw("(SELECT COUNT(*) FROM v2_user_device AS user_devices WHERE user_devices.subscription_id = v2_user_device.subscription_id AND user_devices.status = 'bound') AS user_device_count")
            ])
            ->leftJoin('v2_user_subscription as subscriptions', 'subscriptions.id', '=', 'v2_user_device.subscription_id')
            ->leftJoin('v2_plan as plans', 'plans.id', '=', 'subscriptions.plan_id')
            ->where('v2_user_device.user_id', $user->id)
            ->orderBy('v2_user_device.last_seen_at', 'DESC')
            ->orderBy('v2_user_device.id', 'DESC')
            ->get();
        $devices = (new UserDeviceService())->withOnlineState($devices);

        return response([
            'data' => $devices
        ]);
    }

    public function ban(Request $request)
    {
        if (!$this->isHwidEnabled()) {
            abort(404);
        }

        $deviceId = $request->input('id');
        if (!$deviceId || !is_numeric($deviceId)) {
            abort(500, 'Thiết bị không tồn tại');
        }

        $device = UserDevice::query()
            ->join('v2_user', 'v2_user.id', '=', 'v2_user_device.user_id')
            ->where('v2_user.invite_user_id', $request->user['id'])
            ->where('v2_user.is_admin', 0)
            ->where('v2_user.is_staff', 0)
            ->where('v2_user_device.id', $deviceId)
            ->select('v2_user_device.*')
            ->first();
        if (!$device) {
            abort(500, 'Thiết bị không tồn tại');
        }

        return response([
            'data' => (new UserDeviceService())->ban($device)
        ]);
    }

    private function staffUser(Request $request, $targetUserId)
    {
        $user = User::where('id', $targetUserId)
            ->where('invite_user_id', $request->user['id'])
            ->where('is_admin', 0)
            ->where('is_staff', 0)
            ->first();
        if (!$user) {
            abort(500, 'Người dùng không tồn tại');
        }

        return $user;
    }

    private function isHwidEnabled()
    {
        return (int)config('zicboard.device_hwid_enable', 1) === 1;
    }
}
