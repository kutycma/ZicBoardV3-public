<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserDeviceDrop;
use App\Http\Requests\Admin\UserDeviceFetch;
use App\Http\Requests\Admin\UserDeviceReset;
use App\Models\User;
use App\Models\UserDevice;
use App\Services\UserDeviceService;
use App\Utils\Helper;
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
                'v2_user_device.u as device_upload',
                'v2_user_device.d as device_download',
                'v2_user_device.t as device_traffic_updated_at',
                'v2_user_device.created_at',
                'v2_user_device.updated_at',
                'users.email as user_email',
                'subscriptions.plan_id as user_plan_id',
                'subscriptions.device_limit as user_device_limit',
                'plans.name as plan_name',
                DB::raw('(COALESCE(v2_user_device.u, 0) + COALESCE(v2_user_device.d, 0)) AS device_used_traffic'),
                DB::raw("(SELECT COUNT(*) FROM v2_user_device AS user_devices WHERE user_devices.subscription_id = v2_user_device.subscription_id AND user_devices.status = 'bound') AS user_device_count")
            ])
            ->leftJoin('v2_user as users', 'users.id', '=', 'v2_user_device.user_id')
            ->leftJoin('v2_user_subscription as subscriptions', 'subscriptions.id', '=', 'v2_user_device.subscription_id')
            ->leftJoin('v2_plan as plans', 'plans.id', '=', 'subscriptions.plan_id');

        $this->applyFilters($request, $devices);

        $deviceService = new UserDeviceService();
        $nodeFilter = $this->onlineNodeFilter($request);
        if ($nodeFilter) {
            $candidateIds = (clone $devices)
                ->select('v2_user_device.id')
                ->orderBy('v2_user_device.last_seen_at', 'DESC')
                ->orderBy('v2_user_device.id', 'DESC')
                ->pluck('v2_user_device.id')
                ->map(function ($id) {
                    return (int)$id;
                })
                ->all();
            $matchedIds = $deviceService->filterOnlineDeviceIdsByNode(
                $candidateIds,
                $nodeFilter['node_type'],
                $nodeFilter['node_id'],
                $nodeFilter['online_ip'] ?? null
            );
            $total = count($matchedIds);
            $pageIds = array_slice($matchedIds, ($current - 1) * $pageSize, $pageSize);
            $res = $pageIds
                ? (clone $devices)
                    ->whereIn('v2_user_device.id', $pageIds)
                    ->orderBy('v2_user_device.last_seen_at', 'DESC')
                    ->orderBy('v2_user_device.id', 'DESC')
                    ->get()
                : collect();
        } else {
            $total = (clone $devices)->count('v2_user_device.id');
            $res = $devices->orderBy('v2_user_device.last_seen_at', 'DESC')
                ->orderBy('v2_user_device.id', 'DESC')
                ->forPage($current, $pageSize)
                ->get();
        }

        $res = $deviceService->withOnlineState($res);

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
            $value = $condition === '=' ? $filter['value'] : Helper::likeContains($filter['value']);
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
            case 'user_agent':
                return 'v2_user_device.user_agent';
            default:
                return null;
        }
    }

    private function onlineNodeFilter(UserDeviceFetch $request)
    {
        $nodeType = null;
        $nodeId = null;
        $onlineIp = null;

        foreach ($request->input('filter', []) ?: [] as $filter) {
            $key = $filter['key'] ?? '';
            $value = trim((string)($filter['value'] ?? ''));
            if ($value === '') {
                continue;
            }

            if ($key === 'node') {
                $parsed = $this->parseNodeValue($value);
                $nodeType = $parsed['node_type'] ?? $nodeType;
                $nodeId = $parsed['node_id'] ?? $nodeId;
            } elseif ($key === 'node_type') {
                $nodeType = $value;
            } elseif ($key === 'node_id') {
                $id = (int)$value;
                if ($id > 0) {
                    $nodeId = $id;
                }
            } elseif ($key === 'online_ip') {
                $onlineIp = $value;
            }
        }

        if ($nodeType === null && $nodeId === null && $onlineIp === null) {
            return null;
        }

        return [
            'node_type' => $nodeType,
            'node_id' => $nodeId,
            'online_ip' => $onlineIp
        ];
    }

    private function parseNodeValue(string $value): array
    {
        if (preg_match('/^([a-zA-Z0-9_-]+)[:#](\d+)$/', $value, $matches)) {
            return [
                'node_type' => $matches[1],
                'node_id' => (int)$matches[2]
            ];
        }

        if (preg_match('/^\d+$/', $value)) {
            return [
                'node_type' => null,
                'node_id' => (int)$value
            ];
        }

        return [
            'node_type' => $value,
            'node_id' => null
        ];
    }
}
