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
        $keyword = trim((string)($request->input('keyword') ?: $request->input('email')));
        if (strlen($keyword) < 5) {
            abort(500, 'Search keyword must be at least 5 characters');
        }

        $users = $this->access->manageableUsersQuery()
            ->where('email', 'like', '%' . $keyword . '%')
            ->orderByRaw('CASE WHEN email = ? THEN 0 WHEN email LIKE ? THEN 1 ELSE 2 END', [$keyword, $keyword . '%'])
            ->orderBy('email', 'ASC')
            ->limit(10)
            ->get(['id', 'email', 'plan_id', 'banned', 'created_at']);
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

        $user = User::create([
            'email' => $email,
            'password' => password_hash($request->input('password'), PASSWORD_DEFAULT),
            'password_algo' => null,
            'uuid' => Helper::guid(true),
            'token' => Helper::guid(),
            'is_admin' => 0,
            'is_staff' => 0,
            'is_manager' => 0
        ]);
        if (!$user) {
            abort(500, 'Create user failed');
        }

        $this->audit->record($request, 'user.create', [
            'manager_id' => $manager->id,
            'manager_email' => $manager->email,
            'target_user_id' => $user->id,
            'target_email' => $user->email
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
            'target_email' => $user->email
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
            'subscription_id' => $subscription->id
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