<?php

namespace App\Http\Controllers\V1\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\UserCreate;
use App\Http\Requests\Manager\UserPasswordUpdate;
use App\Http\Requests\Manager\UserResetSecurity;
use App\Http\Requests\Manager\UserSearch;
use App\Models\Plan;
use App\Models\User;
use App\Models\UserSubscription;
use App\Services\AuthService;
use App\Services\Manager\ManagerAccessService;
use App\Services\Manager\ManagerAuditService;
use App\Services\SubscriptionService;
use App\Services\UserDeviceService;
use App\Utils\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    private $access;
    private $audit;

    public function __construct(ManagerAccessService $access, ManagerAuditService $audit)
    {
        $this->access = $access;
        $this->audit = $audit;
    }

    public function search(UserSearch $request)
    {
        $manager = $this->access->currentManager($request);
        $rawKeyword = trim((string)($request->input('id') ?: $request->input('keyword') ?: $request->input('email')));
        $query = $this->access->manageableUsersQuery();

        if ($request->filled('id') || preg_match('/^\d+$/', $rawKeyword)) {
            $query->where('id', (int)$rawKeyword);
        } else {
            if (strlen($rawKeyword) < 5) {
                abort(500, 'Search keyword must be at least 5 characters');
            }
            $query->where('email', 'like', '%' . $rawKeyword . '%')
                ->orderByRaw('CASE WHEN email = ? THEN 0 WHEN email LIKE ? THEN 1 ELSE 2 END', [$rawKeyword, $rawKeyword . '%'])
                ->orderBy('email', 'ASC');
        }

        $users = $query->limit(10)->get(['id', 'email', 'plan_id', 'banned', 'created_at']);
        foreach ($users as $user) {
            $this->access->attachManageToken($manager, $user);
        }


        return response([
            'data' => $users
        ]);
    }

    public function create(UserCreate $request)
    {
        $manager = $this->access->currentManager($request);
        $email = trim((string)$request->input('email'));
        if (User::where('email', $email)->exists()) {
            abort(500, 'Email already exists');
        }

        $plan = Plan::find($request->input('plan_id'));
        if (!$plan) {
            abort(500, 'Plan does not exist');
        }

        $subscription = null;
        DB::beginTransaction();
        try {
            $user = User::create([
                'email' => $email,
                'password' => password_hash($request->input('password'), PASSWORD_DEFAULT),
                'password_algo' => null,
                'uuid' => Helper::guid(true),
                'token' => Helper::guid(),
                'plan_id' => $plan->id,
                'group_id' => $plan->group_id,
                'transfer_enable' => $plan->transfer_enable * 1073741824,
                'device_limit' => $plan->device_limit,
                'speed_limit' => $plan->speed_limit,
                'u' => 0,
                'd' => 0,
                'expired_at' => $request->has('expired_at') ? $request->input('expired_at') : null,
                'is_admin' => 0,
                'is_staff' => 0,
                'is_manager' => 0
            ]);
            if (!$user) {
                throw new \Exception('Create user failed');
            }

            $subscriptionService = new SubscriptionService();
            $subscription = $subscriptionService->getPrimaryForUser($user);
            if (!$subscription) {
                throw new \Exception('Create subscription failed');
            }
            $subscriptionService->syncUserSummary($subscription);
            (new UserDeviceService())->ensureWaitingSlot($subscription);
            $user->refresh();
            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            abort(500, $e->getMessage());
        }

        $this->audit->record($request, 'user.create', [
            'manager_id' => $manager->id,
            'manager_email' => $manager->email,
            'target_user_id' => $user->id,
            'target_email' => $user->email,
            'subscription_id' => $subscription ? $subscription->id : null,
            'plan_id' => $user->plan_id,
            'expired_at' => $user->expired_at,
            'changes' => [
                'user' => ['from' => null, 'to' => $this->userSummary($user, $manager)],
                'subscription_id' => ['from' => null, 'to' => $subscription ? $subscription->id : null],
                'plan_id' => ['from' => null, 'to' => $user->plan_id],
                'expired_at' => ['from' => null, 'to' => $user->expired_at]
            ]
        ]);

        return response([
            'data' => $this->userSummary($user, $manager)
        ]);
    }

    public function detail(Request $request)
    {
        $manager = $this->access->currentManager($request);
        $targetUserId = $request->input('target_user_id', $request->input('id'));
        $user = $this->access->findManageableUser($targetUserId);
        $this->access->assertManageToken($request, $manager, $user);
        $this->access->attachManageToken($manager, $user);

        $subscriptionService = new SubscriptionService();
        $primary = $subscriptionService->getPrimaryForUser($user);
        if ($primary) {
            $subscriptionService->applyToUser($user, $primary);
        }

        $plans = Plan::get()->keyBy('id');
        $subscriptions = UserSubscription::where('user_id', $user->id)
            ->orderBy('status', 'ASC')
            ->orderBy('updated_at', 'DESC')
            ->orderBy('id', 'DESC')
            ->get();
        foreach ($subscriptions as $subscription) {
            $plan = $subscription->plan_id && isset($plans[$subscription->plan_id]) ? $plans[$subscription->plan_id] : null;
            $subscription->plan_name = $plan ? $plan->name : null;
            $subscription->makeHidden(['token', 'uuid']);
        }

        if ($user->plan_id && isset($plans[$user->plan_id])) {
            $user->plan_name = $plans[$user->plan_id]->name;
        }
        $user->subscriptions = $subscriptions;


        return response([
            'data' => $this->hideUserSecrets($user)
        ]);
    }

    public function updatePassword(UserPasswordUpdate $request)
    {
        $manager = $this->access->currentManager($request);
        $user = $this->access->findManageableUserFromRequest($request, $manager, $request->input('target_user_id'));

        $user->password = password_hash($request->input('password'), PASSWORD_DEFAULT);
        $user->password_algo = null;
        if (!$user->save()) {
            abort(500, 'Update password failed');
        }
        (new AuthService($user))->removeAllSession();

        $this->audit->record($request, 'user.update_password', [
            'manager_id' => $manager->id,
            'manager_email' => $manager->email,
            'target_user_id' => $user->id,
            'target_email' => $user->email,
            'changes' => [
                'password' => ['from' => '[redacted]', 'to' => '[changed]']
            ]
        ]);

        return response([
            'data' => true
        ]);
    }

    public function resetSecurity(UserResetSecurity $request)
    {
        $manager = $this->access->currentManager($request);
        $targetUser = $this->access->findManageableUserFromRequest($request, $manager, $request->input('target_user_id'));

        $subscriptionService = new SubscriptionService();
        $subscription = $request->input('subscription_id')
            ? $subscriptionService->getForUser($targetUser, $request->input('subscription_id'))
            : $subscriptionService->getPrimaryForUser($targetUser);
        if (!$subscription) {
            abort(500, 'Subscription does not exist');
        }

        $before = $this->audit->snapshot($subscription, ['token', 'uuid']);
        $primarySubscription = $subscriptionService->getPrimaryForUser($targetUser);
        $isPrimarySubscription = $primarySubscription && (int)$primarySubscription->id === (int)$subscription->id;

        $subscription->uuid = Helper::guid(true);
        $subscription->token = Helper::guid();
        if (!$subscription->save()) {
            abort(500, 'Reset subscription failed');
        }
        if ($isPrimarySubscription) {
            $subscriptionService->syncUserSummary($subscription);
        }
        (new UserDeviceService())->resetSubscription($subscription);

        $this->audit->record($request, 'subscription.reset_security', [
            'manager_id' => $manager->id,
            'manager_email' => $manager->email,
            'target_user_id' => $targetUser->id,
            'target_email' => $targetUser->email,
            'subscription_id' => $subscription->id,
            'changes' => $this->audit->changes($before, $this->audit->snapshot($subscription, ['token', 'uuid']), ['token', 'uuid'])
        ]);

        return response([
            'data' => [
                'success' => true,
                'subscription_id' => $subscription->id
            ]
        ]);
    }

    private function userSummary(User $user, User $manager)
    {
        return [
            'id' => $user->id,
            'email' => $user->email,
            'plan_id' => $user->plan_id,
            'banned' => (int)$user->banned,
            'created_at' => $user->created_at,
            'manage_token' => $this->access->manageToken($manager, $user)
        ];
    }

    private function hideUserSecrets(User $user)
    {
        $user->makeHidden([
            'password',
            'password_algo',
            'password_salt',
            'token',
            'uuid',
            'subscription'
        ]);

        return $user;
    }
}