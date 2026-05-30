<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserDeviceDrop;
use App\Http\Requests\Admin\UserDeviceFetch;
use App\Http\Requests\Admin\UserDeviceReset;
use App\Models\User;
use App\Models\UserDevice;
use App\Services\UserDeviceService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class UserDeviceController extends Controller
{
    public function fetch(UserDeviceFetch $request)
    {
        $current = max(1, (int)$request->input('current', 1));
        $pageSize = max(10, min((int)$request->input('pageSize', 15), 100));

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
                'users.email as user_email',
                'subscriptions.plan_id as user_plan_id',
                'subscriptions.device_limit as user_device_limit',
                'plans.name as plan_name',
                DB::raw("(SELECT COUNT(*) FROM v2_user_device AS user_devices WHERE user_devices.subscription_id = v2_user_device.subscription_id AND user_devices.status = 'bound') AS user_device_count")
            ])
            ->leftJoin('v2_user as users', 'users.id', '=', 'v2_user_device.user_id')
            ->leftJoin('v2_user_subscription as subscriptions', 'subscriptions.id', '=', 'v2_user_device.subscription_id')
            ->leftJoin('v2_plan as plans', 'plans.id', '=', 'subscriptions.plan_id');

        $this->applyFilters($request, $devices);

        $total = (clone $devices)->count('v2_user_device.id');
        $res = $devices->orderBy('v2_user_device.last_seen_at', 'DESC')
            ->orderBy('v2_user_device.id', 'DESC')
            ->forPage($current, $pageSize)
            ->get();
        $res = (new UserDeviceService())->withOnlineState($res);

        return response([
            'data' => $res,
            'total' => $total
        ]);
    }

    public function drop(UserDeviceDrop $request)
    {
        $device = UserDevice::find($request->input('id'));
        if (!$device) {
            abort(500, 'Thiết bị không tồn tại');
        }

        return response([
            'data' => (new UserDeviceService())->unbind($device)
        ]);
    }

    public function ban(UserDeviceDrop $request)
    {
        $device = UserDevice::find($request->input('id'));
        if (!$device) {
            abort(500, 'Thiết bị không tồn tại');
        }

        return response([
            'data' => (new UserDeviceService())->ban($device)
        ]);
    }

    public function resetUser(UserDeviceReset $request)
    {
        $user = User::find($request->input('user_id'));
        if (!$user) {
            abort(500, 'Người dùng không tồn tại');
        }

        return response([
            'data' => (new UserDeviceService())->resetUser($user)
        ]);
    }

    private function applyFilters(UserDeviceFetch $request, Builder $devices)
    {
        foreach ($request->input('filter', []) ?: [] as $filter) {
            $column = $this->filterColumn($filter['key']);
            if (!$column) {
                continue;
            }

            $condition = $filter['condition'] === '=' ? '=' : 'like';
            $value = $condition === '=' ? $filter['value'] : "%{$filter['value']}%";
            $devices->where($column, $condition, $value);
        }
    }

    private function filterColumn($key)
    {
        switch ($key) {
            case 'user_id':
                return 'v2_user_device.user_id';
            case 'subscription_id':
                return 'v2_user_device.subscription_id';
            case 'email':
                return 'users.email';
            case 'hwid':
                return 'v2_user_device.hwid';
            case 'last_ip':
                return 'v2_user_device.last_ip';
            default:
                return null;
        }
    }
}
