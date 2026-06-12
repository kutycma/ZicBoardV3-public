<?php

namespace App\Http\Controllers\V1\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\DeviceBan;
use App\Http\Requests\Manager\DeviceFetch;
use App\Http\Requests\Manager\DeviceUnbind;
use App\Models\Plan;
use App\Models\UserDevice;
use App\Models\UserSubscription;
use App\Services\Manager\ManagerAccessService;
use App\Services\Manager\ManagerAuditService;
use App\Services\UserDeviceService;

class UserDeviceController extends Controller
{
    private $access;
    private $audit;

    public function __construct(ManagerAccessService $access, ManagerAuditService $audit)
    {
        $this->access = $access;
        $this->audit = $audit;
    }

    public function fetch(DeviceFetch $request)
    {
        $manager = $this->access->currentManager($request);
        $user = $this->access->findManageableUserFromRequest($request, $manager, $request->input('target_user_id'));
        $devices = UserDevice::where('user_id', $user->id)
            ->orderBy('id', 'DESC')
            ->get();

        (new UserDeviceService())->withOnlineState($devices);

        $subscriptions = UserSubscription::whereIn('id', $devices->pluck('subscription_id')->filter()->unique()->all())
            ->get()
            ->keyBy('id');
        $plans = Plan::whereIn('id', $subscriptions->pluck('plan_id')->filter()->unique()->all())
            ->get()
            ->keyBy('id');

        foreach ($devices as $device) {
            $subscription = $subscriptions->get($device->subscription_id);
            $plan = $subscription && $subscription->plan_id ? $plans->get($subscription->plan_id) : null;
            $device->plan_name = $plan ? $plan->name : null;
            $device->makeHidden(['uuid', 'hwid_hash']);
        }

        return response([
            'data' => $devices
        ]);
    }

    public function unbind(DeviceUnbind $request)
    {
        $manager = $this->access->currentManager($request);
        $targetUser = $this->access->findManageableUserFromRequest($request, $manager, $request->input('target_user_id'));
        $device = $this->access->findManageableDevice($request->input('id'));
        if ((int)$device->user_id !== (int)$targetUser->id) {
            abort(403, 'Device does not belong to selected user');
        }

        if (!(new UserDeviceService())->unbind($device)) {
            abort(500, 'Unbind device failed');
        }

        $this->audit->record($request, 'device.unbind', [
            'manager_id' => $manager->id,
            'manager_email' => $manager->email,
            'target_user_id' => $targetUser->id,
            'target_email' => $targetUser->email,
            'device_id' => $device->id,
            'subscription_id' => $device->subscription_id
        ]);

        return response([
            'data' => true
        ]);
    }

    public function ban(DeviceBan $request)
    {
        $manager = $this->access->currentManager($request);
        $targetUser = $this->access->findManageableUserFromRequest($request, $manager, $request->input('target_user_id'));
        $device = $this->access->findManageableDevice($request->input('id'));
        if ((int)$device->user_id !== (int)$targetUser->id) {
            abort(403, 'Device does not belong to selected user');
        }

        if (!(new UserDeviceService())->ban($device)) {
            abort(500, 'Ban device failed');
        }

        $this->audit->record($request, 'device.ban', [
            'manager_id' => $manager->id,
            'manager_email' => $manager->email,
            'target_user_id' => $targetUser->id,
            'target_email' => $targetUser->email,
            'device_id' => $device->id,
            'subscription_id' => $device->subscription_id
        ]);

        return response([
            'data' => true
        ]);
    }
}