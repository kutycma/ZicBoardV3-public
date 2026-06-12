<?php

namespace App\Services\Manager;

use App\Models\Order;
use App\Models\User;
use App\Models\UserDevice;
use Illuminate\Http\Request;

class ManagerAccessService
{
    public function currentManager(Request $request)
    {
        $actor = $request->input('user', []);
        $managerId = is_array($actor) ? (int)($actor['id'] ?? 0) : 0;
        if ($managerId <= 0) {
            abort(403, 'Manager session is invalid or expired');
        }

        $manager = User::where('id', $managerId)
            ->where('is_manager', 1)
            ->first();
        if (!$manager) {
            abort(403, 'Manager session is invalid or expired');
        }

        return $manager;
    }

    public function manageableUsersQuery()
    {
        return User::where('is_admin', 0)
            ->where('is_staff', 0)
            ->where('is_manager', 0);
    }

    public function manageToken(User $manager, User $targetUser)
    {
        return hash_hmac(
            'sha256',
            implode('|', [(int)$manager->id, (int)$targetUser->id, (string)$targetUser->email]),
            (string)config('app.key')
        );
    }

    public function attachManageToken(User $manager, User $targetUser)
    {
        $targetUser->setAttribute('manage_token', $this->manageToken($manager, $targetUser));
        return $targetUser;
    }

    public function assertManageToken(Request $request, User $manager, User $targetUser)
    {
        $provided = (string)$request->input('manage_token', '');
        if ($provided === '' || !hash_equals($this->manageToken($manager, $targetUser), $provided)) {
            abort(403, 'Target user must be selected from search');
        }

        return $targetUser;
    }

    public function findManageableUserFromRequest(Request $request, User $manager, $userId = null)
    {
        $targetUser = $this->findManageableUser($userId ?: $request->input('target_user_id', $request->input('id')));
        $this->assertManageToken($request, $manager, $targetUser);

        return $targetUser;
    }

    public function findManageableUser($userId)
    {
        $userId = (int)$userId;
        if ($userId <= 0) {
            abort(500, 'Target user is required');
        }

        $user = $this->manageableUsersQuery()
            ->where('id', $userId)
            ->first();
        if (!$user) {
            abort(403, 'Target user is not manageable');
        }

        return $user;
    }

    public function findManageableUserByEmail($email)
    {
        $email = trim((string)$email);
        if ($email === '') {
            abort(500, 'Target email is required');
        }

        $user = $this->manageableUsersQuery()
            ->where('email', $email)
            ->first();
        if (!$user) {
            abort(403, 'Target user is not manageable');
        }

        return $user;
    }

    public function assertManageableUser(User $user)
    {
        if ((int)$user->is_admin === 1 || (int)$user->is_staff === 1 || (int)$user->is_manager === 1) {
            abort(403, 'Target user is not manageable');
        }

        return $user;
    }

    public function findManageableDevice($deviceId)
    {
        $deviceId = (int)$deviceId;
        if ($deviceId <= 0) {
            abort(500, 'Device is required');
        }

        $device = UserDevice::where('id', $deviceId)->first();
        if (!$device) {
            abort(500, 'Device does not exist');
        }

        $this->findManageableUser($device->user_id);

        return $device;
    }

    public function findManagerOrder($managerId, $tradeNo, $lockForUpdate = false)
    {
        $tradeNo = trim((string)$tradeNo);
        if ($tradeNo === '') {
            abort(500, 'Order trade no is required');
        }

        $query = Order::where('trade_no', $tradeNo)
            ->where('manager_id', (int)$managerId);
        if ($lockForUpdate) {
            $query->lockForUpdate();
        }

        $order = $query->first();
        if (!$order) {
            abort(500, 'Order does not exist');
        }

        $this->findManageableUser($order->user_id);

        return $order;
    }
}