<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserFetch;
use App\Http\Requests\Admin\UserGenerate;
use App\Http\Requests\Admin\UserSendMail;
use App\Http\Requests\Admin\UserUpdate;
use App\Jobs\SendEmailJob;
use App\Models\InviteCode;
use App\Models\Ticket;
use App\Models\Order;
use App\Models\Plan;
use App\Models\TicketMessage;
use App\Models\User;
use App\Models\UserDevice;
use App\Models\UserSubscription;
use App\Services\AuthService;
use App\Services\SubscriptionService;
use App\Services\UserDeviceService;
use App\Utils\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class UserController extends Controller
{
    public function resetSecret(Request $request)
    {
        $user = User::find($request->input('id'));
        if (!$user) abort(500, 'Người dùng không tồn tại');
        $subscriptionService = new SubscriptionService();
        $subscription = $subscriptionService->getPrimaryForUser($user);
        if ($subscription) {
            $subscription->token = Helper::guid();
            $subscription->uuid = Helper::guid(true);
            $subscription->save();
            (new UserDeviceService())->resetSubscription($subscription);
            return response([
                'data' => $subscriptionService->syncUserSummary($subscription)
            ]);
        }
        $user->token = Helper::guid();
        $user->uuid = Helper::guid(true);
        return response([
            'data' => $user->save()
        ]);
    }

    private function filter(Request $request, $builder)
    {
        $filters = $request->input('filter');
        if ($filters) {
            foreach ($filters as $k => $filter) {
                if ($filter['condition'] === 'Tương đối') {
                    $filter['condition'] = 'like';
                    $filter['value'] = "%{$filter['value']}%";
                }
                if ($filter['key'] === 'd' || $filter['key'] === 'transfer_enable') {
                    $filter['value'] = $filter['value'] * 1073741824;
                }
                if ($filter['key'] === 'invite_by_email') {
                    $user = User::where('email', $filter['condition'], $filter['value'])->first();
                    $inviteUserId = isset($user->id) ? $user->id : 0;
                    $builder->where('invite_user_id', $inviteUserId);
                    unset($filters[$k]);
                    continue;
                }
                if ($filter['key'] === 'plan_id' && $filter['value'] == 'null') {
                    $builder->whereNull('plan_id');
                    continue;
                }
                $builder->where($filter['key'], $filter['condition'], $filter['value']);
            }
        }
    }

    public function fetch(UserFetch $request)
    {
        $current = $request->input('current') ? $request->input('current') : 1;
        $pageSize = $request->input('pageSize') >= 10 ? $request->input('pageSize') : 10;
        $sortType = in_array($request->input('sort_type'), ['ASC', 'DESC']) ? $request->input('sort_type') : 'DESC';
        $sort = $request->input('sort') ? $request->input('sort') : 'created_at';
        $userModel = User::select(
            DB::raw('*'),
            DB::raw('(u+d) as total_used')
        )
            ->orderBy($sort, $sortType);
        $this->filter($request, $userModel);
        $total = $userModel->count();
        $res = $userModel->forPage($current, $pageSize)
            ->get();
        $plans = Plan::get()->keyBy('id');
        $subscriptionService = new SubscriptionService();
        $subscriptionsByUser = $this->primarySubscriptionsByUser($res);
        $subscriptionIds = $subscriptionsByUser->values()->pluck('id')->map(function ($id) {
            return (int)$id;
        })->filter()->values()->all();
        $deviceCountsBySubscription = $this->deviceStatusCountsBySubscription($subscriptionIds);
        $onlineDeviceCountsBySubscription = $this->onlineDeviceCountsBySubscription($subscriptionIds);

        $aliveCacheKeys = [];
        $aliveCacheKeyByUser = [];
        foreach ($res as $user) {
            $subscription = $subscriptionsByUser->get($user->id);
            $cacheKey = $subscription
                ? 'ALIVE_IP_SUBSCRIPTION_' . $subscription->id
                : 'ALIVE_IP_USER_' . $user->id;
            $aliveCacheKeys[] = $cacheKey;
            $aliveCacheKeyByUser[(int)$user->id] = $cacheKey;
        }
        $aliveCache = $aliveCacheKeys ? Cache::many(array_values(array_unique($aliveCacheKeys))) : [];

        foreach ($res as $user) {
            $subscription = $subscriptionsByUser->get($user->id);
            if ($subscription) {
                $subscriptionService->applyToUser($user, $subscription);
            }

            if ($user->plan_id && isset($plans[$user->plan_id])) {
                $user->plan_name = $plans[$user->plan_id]->name;
            }

            $subscriptionId = $subscription ? (int)$subscription->id : null;
            $deviceCounts = $subscriptionId ? ($deviceCountsBySubscription[$subscriptionId] ?? []) : [];
            $user->device_bound_count = (int)($deviceCounts[UserDeviceService::STATUS_BOUND] ?? 0);
            $user->device_pending_count = (int)($deviceCounts[UserDeviceService::STATUS_PENDING] ?? 0);
            $user->device_banned_count = (int)($deviceCounts[UserDeviceService::STATUS_BANNED] ?? 0);
            $user->device_online_count = $subscriptionId ? (int)($onlineDeviceCountsBySubscription[$subscriptionId] ?? 0) : 0;

            $aliveCacheKey = $aliveCacheKeyByUser[(int)$user->id] ?? null;
            $alive = $this->aliveSummary($aliveCacheKey ? ($aliveCache[$aliveCacheKey] ?? null) : null);
            $user->alive_ip = $alive['alive_ip'];
            $user->ips = $alive['ips'];
            $subscribeToken = $subscription ? $subscription->token : $user->token;
            $user->subscribe_url = Helper::getSubscribeUrl($subscribeToken, $request);
            $user->makeHidden(['subscription']);
        }
        return response([
            'data' => $res,
            'total' => $total
        ]);
    }

    private function primarySubscriptionsByUser($users)
    {
        if (!$users || $users->isEmpty()) {
            return collect();
        }

        $usersById = $users->keyBy('id');
        $subscriptions = UserSubscription::whereIn('user_id', $usersById->keys()->all())
            ->where('status', SubscriptionService::STATUS_ACTIVE)
            ->get();

        return $subscriptions->groupBy('user_id')->map(function ($items, $userId) use ($usersById) {
            $user = $usersById->get($userId);
            $userToken = (string)($user->token ?? '');

            return $items->sort(function ($a, $b) use ($userToken) {
                $aPriority = $userToken !== '' && (string)$a->token === $userToken ? 0 : 1;
                $bPriority = $userToken !== '' && (string)$b->token === $userToken ? 0 : 1;
                if ($aPriority !== $bPriority) {
                    return $aPriority <=> $bPriority;
                }

                $updatedCompare = (int)$b->updated_at <=> (int)$a->updated_at;
                if ($updatedCompare !== 0) {
                    return $updatedCompare;
                }

                return (int)$b->id <=> (int)$a->id;
            })->first();
        });
    }

    private function deviceStatusCountsBySubscription(array $subscriptionIds): array
    {
        if (!$subscriptionIds) {
            return [];
        }

        $rows = UserDevice::whereIn('subscription_id', $subscriptionIds)
            ->select(['subscription_id', 'status', DB::raw('COUNT(*) as total')])
            ->groupBy('subscription_id', 'status')
            ->get();
        $result = [];
        foreach ($rows as $row) {
            $subscriptionId = (int)$row->subscription_id;
            $status = (string)$row->status;
            if (!isset($result[$subscriptionId])) {
                $result[$subscriptionId] = [];
            }
            $result[$subscriptionId][$status] = (int)$row->total;
        }

        return $result;
    }

    private function onlineDeviceCountsBySubscription(array $subscriptionIds): array
    {
        if (!$subscriptionIds) {
            return [];
        }

        $devices = UserDevice::whereIn('subscription_id', $subscriptionIds)
            ->where('status', UserDeviceService::STATUS_BOUND)
            ->select(['id', 'subscription_id'])
            ->get();
        if ($devices->isEmpty()) {
            return [];
        }

        (new UserDeviceService())->withOnlineState($devices);
        $result = [];
        foreach ($devices as $device) {
            if (empty($device->is_online)) {
                continue;
            }

            $subscriptionId = (int)$device->subscription_id;
            if (!isset($result[$subscriptionId])) {
                $result[$subscriptionId] = 0;
            }
            $result[$subscriptionId]++;
        }

        return $result;
    }

    private function aliveSummary($ipsArray): array
    {
        if (!is_array($ipsArray)) {
            return [
                'alive_ip' => 0,
                'ips' => ''
            ];
        }

        $ips = [];
        foreach ($ipsArray as $nodeTypeId => $data) {
            if ($nodeTypeId === 'alive_ip' || !is_array($data) || !isset($data['aliveips']) || !is_array($data['aliveips'])) {
                continue;
            }

            foreach ($data['aliveips'] as $ipNodeId) {
                $ip = explode('_', (string)$ipNodeId)[0];
                if ($ip !== '') {
                    $ips[] = $ip . '_' . $nodeTypeId;
                }
            }
        }

        return [
            'alive_ip' => (int)($ipsArray['alive_ip'] ?? 0),
            'ips' => implode(', ', $ips)
        ];
    }

    public function getUserInfoById(Request $request)
    {
        if (empty($request->input('id'))) {
            abort(500, 'tham số lỗi');
        }
        $user = User::find($request->input('id'));
        if ($user->invite_user_id) {
            $user['invite_user'] = User::find($user->invite_user_id);
        }
        return response([
            'data' => $user
        ]);
    }

    public function update(UserUpdate $request)
    {
        $params = $request->validated();
        $billingFields = [
            'billing_phone',
            'billing_address'
        ];
        foreach ($billingFields as $billingField) {
            if (array_key_exists($billingField, $params)) {
                $value = trim((string)($params[$billingField] ?? ''));
                $params[$billingField] = $value === '' ? null : $value;
            }
        }
        $user = User::find($request->input('id'));
        if (!$user) {
            abort(500, 'Người dùng không tồn tại');
        }
        if (User::where('email', $params['email'])->first() && $user->email !== $params['email']) {
            abort(500, 'Email đã được sử dụng');
        }
        $roleChanged = false;
        foreach (['is_admin', 'is_staff', 'is_manager'] as $roleKey) {
            if (array_key_exists($roleKey, $params) && (int)$user->{$roleKey} !== (int)$params[$roleKey]) {
                $roleChanged = true;
                break;
            }
        }
        $shouldRemoveSessions = $roleChanged || (isset($params['banned']) && (int)$params['banned'] === 1);
        if (isset($params['password'])) {
            $params['password'] = password_hash($params['password'], PASSWORD_DEFAULT);
            $params['password_algo'] = NULL;
        } else {
            unset($params['password']);
        }
        if (isset($params['plan_id'])) {
            $plan = Plan::find($params['plan_id']);
            if (!$plan) {
                abort(500, 'Gói đăng ký không tồn tại');
            }
            $params['group_id'] = $plan->group_id;
        } else {
            $params['group_id'] = null;
        }
        if ($request->input('invite_user_email')) {
            $inviteUser = User::where('email', $request->input('invite_user_email'))->first();
            if ($inviteUser) {
                $params['invite_user_id'] = $inviteUser->id;
            }
        } else {
            $params['invite_user_id'] = null;
        }

        try {
            $user->update($params);
            if ($shouldRemoveSessions) {
                (new AuthService($user))->removeAllSession();
            }
            if (isset($params['plan_id']) && $params['plan_id']) {
                $subscriptionService = new SubscriptionService();
                $subscription = $subscriptionService->getPrimaryForUser($user);
                if ($subscription) {
                    $subscription->update([
                        'plan_id' => $params['plan_id'],
                        'group_id' => $params['group_id'],
                        'speed_limit' => $params['speed_limit'] ?? $subscription->speed_limit,
                        'device_limit' => $params['device_limit'] ?? $subscription->device_limit,
                        'transfer_enable' => $params['transfer_enable'] ?? $subscription->transfer_enable,
                        'u' => $params['u'] ?? $subscription->u,
                        'd' => $params['d'] ?? $subscription->d,
                        'expired_at' => $params['expired_at'] ?? $subscription->expired_at
                    ]);
                    $subscriptionService->syncUserSummary($subscription);
                    (new UserDeviceService())->ensureWaitingSlot($subscription);
                }
            }
        } catch (\Exception $e) {
            abort(500, 'Lưu thất bại');
        }
        return response([
            'data' => true
        ]);
    }

    public function dumpCSV(Request $request)
    {
        $userModel = User::orderBy('id', 'asc');
        $this->filter($request, $userModel);
        $res = $userModel->get();
        $plan = Plan::get();
        for ($i = 0; $i < count($res); $i++) {
            for ($k = 0; $k < count($plan); $k++) {
                if ($plan[$k]['id'] == $res[$i]['plan_id']) {
                    $res[$i]['plan_name'] = $plan[$k]['name'];
                }
            }
        }

        $data = "Email,Số dư,Hoa hồng giới thiệu,Tổng dung lượng,Giới hạn thiết bị,Dung lượng còn lại,Gói hết hạnThời gian,Gói đăng ký,Liên kết đăng ký\r\n";
        foreach($res as $user) {
            $expireDate = $user['expired_at'] === NULL ? 'Không giới hạn thời hạn' : date('Y-m-d H:i:s', $user['expired_at']);
            $balance = $user['balance'] / 100;
            $commissionBalance = $user['commission_balance'] / 100;
            $transferEnable = $user['transfer_enable'] ? $user['transfer_enable'] / 1073741824 : 0;
            $deviceLimit = $user['devce_limit'] ? $user['devce_limit'] : NULL;
            $notUseFlow = (($user['transfer_enable'] - ($user['u'] + $user['d'])) / 1073741824) ?? 0;
            $planName = $user['plan_name'] ?? 'Chưa có gói';
            $subscribeUrl =  Helper::getSubscribeUrl($user['token'], $request);
            $data .= "{$user['email']},{$balance},{$commissionBalance},{$transferEnable}, {$deviceLimit}, {$notUseFlow},{$expireDate},{$planName},{$subscribeUrl}\r\n";

        }
        echo "\xEF\xBB\xBF" . $data;
    }

    public function generate(UserGenerate $request)
    {
        if ($request->input('email_prefix')) {
            if ($request->input('plan_id')) {
                $plan = Plan::find($request->input('plan_id'));
                if (!$plan) {
                    abort(500, 'Gói đăng ký không tồn tại');
                }
            }
            $user = [
                'email' => $request->input('email_prefix') . '@' . $request->input('email_suffix'),
                'plan_id' => isset($plan->id) ? $plan->id : NULL,
                'group_id' => isset($plan->group_id) ? $plan->group_id : NULL,
                'transfer_enable' => isset($plan->transfer_enable) ? $plan->transfer_enable * 1073741824 : 0,
                'device_limit' => isset($plan->device_limit) ? $plan->device_limit : NULL,
                'expired_at' => $request->input('expired_at') ?? NULL,
                'uuid' => Helper::guid(true),
                'token' => Helper::guid()
            ];
            if (User::where('email', $user['email'])->first()) {
                abort(500, 'Email đã tồn tại trong hệ thống');
            }
            $user['password'] = password_hash($request->input('password') ?? $user['email'], PASSWORD_DEFAULT);
            $createdUser = User::create($user);
            if (!$createdUser) {
                abort(500, 'Tạo thất bại');
            }
            $subscription = (new SubscriptionService())->getPrimaryForUser($createdUser);
            if ($subscription) {
                (new UserDeviceService())->ensureWaitingSlot($subscription);
            }
            return response([
                'data' => true
            ]);
        }
        if ($request->input('generate_count')) {
            $this->multiGenerate($request);
        }
    }

    private function multiGenerate(Request $request)
    {
        if ($request->input('plan_id')) {
            $plan = Plan::find($request->input('plan_id'));
            if (!$plan) {
                abort(500, 'Gói đăng ký không tồn tại');
            }
        }
        $users = [];
        for ($i = 0;$i < $request->input('generate_count');$i++) {
            $user = [
                'email' => Helper::randomChar(6) . '@' . $request->input('email_suffix'),
                'plan_id' => isset($plan->id) ? $plan->id : NULL,
                'group_id' => isset($plan->group_id) ? $plan->group_id : NULL,
                'transfer_enable' => isset($plan->transfer_enable) ? $plan->transfer_enable * 1073741824 : 0,
                'device_limit' => isset($plan->device_limit) ? $plan->device_limit : NULL,
                'expired_at' => $request->input('expired_at') ?? NULL,
                'uuid' => Helper::guid(true),
                'token' => Helper::guid(),
                'created_at' => time(),
                'updated_at' => time()
            ];
            $user['password'] = password_hash($request->input('password') ?? $user['email'], PASSWORD_DEFAULT);
            array_push($users, $user);
        }
        DB::beginTransaction();
        if (!User::insert($users)) {
            DB::rollBack();
            abort(500, 'Tạo thất bại');
        }
        DB::commit();
        $data = "Tài khoản,Mật khẩu,Thời gian hết hạn,UUID,Thời gian tạo,Liên kết đăng ký\r\n";
        foreach($users as $user) {
            $expireDate = $user['expired_at'] === NULL ? 'Không giới hạn thời hạn' : date('Y-m-d H:i:s', $user['expired_at']);
            $createDate = date('Y-m-d H:i:s', $user['created_at']);
            $password = $request->input('password') ?? $user['email'];
            $createdUser = User::where('email', $user['email'])->first();
            $subscription = $createdUser ? (new SubscriptionService())->getPrimaryForUser($createdUser) : null;
            if ($subscription) {
                (new UserDeviceService())->ensureWaitingSlot($subscription);
            }
            $subscribeUrl = Helper::getSubscribeUrl($subscription ? $subscription->token : $user['token'], $request);
            $data .= "{$user['email']},{$password},{$expireDate},{$user['uuid']},{$createDate},{$subscribeUrl}\r\n";
        }
        echo $data;
    }

    public function sendMail(UserSendMail $request)
    {
        $sortType = in_array($request->input('sort_type'), ['ASC', 'DESC']) ? $request->input('sort_type') : 'DESC';
        $sort = $request->input('sort') ? $request->input('sort') : 'created_at';
        $builder = User::orderBy($sort, $sortType);
        $this->filter($request, $builder);
        foreach ($builder->cursor() as $user) {
            SendEmailJob::dispatch([
                'email' => $user->email,
                'subject' => $request->input('subject'),
                'template_name' => 'notify',
                'template_value' => [
                    'name' => config('zicboard.app_name', 'ZicBoard'),
                    'url' => config('zicboard.app_url'),
                    'content' => $request->input('content')
                ]
            ], 'send_email_mass');
        }

        return response([
            'data' => true
        ]);
    }

    public function ban(Request $request)
    {
        $sortType = in_array($request->input('sort_type'), ['ASC', 'DESC']) ? $request->input('sort_type') : 'DESC';
        $sort = $request->input('sort') ? $request->input('sort') : 'created_at';
        $builder = User::orderBy($sort, $sortType);
        $this->filter($request, $builder);
        try {
            $builder->each(function ($user){
                $authService = new AuthService($user);
                $authService->removeAllSession();
            });
            $builder->update([
                'banned' => 1
            ]);
        } catch (\Exception $e) {
            abort(500, 'Xử lý thất bại');
        }

        return response([
            'data' => true
        ]);
    }

    public function allDel(Request $request)
    {
        $sortType = in_array($request->input('sort_type'), ['ASC', 'DESC']) ? $request->input('sort_type') : 'DESC';
        $sort = $request->input('sort') ? $request->input('sort') : 'created_at';
        $builder = User::orderBy($sort, $sortType);
        $this->filter($request, $builder);

        DB::beginTransaction();
        try {
            $builder->each(function ($user){
                $authService = new AuthService($user);
                $authService->removeAllSession();
                Order::where('user_id', $user->id)->delete();
                InviteCode::where('user_id', $user->id)->delete();
                $tickets = Ticket::where('user_id', $user->id)->get();
                foreach($tickets as $ticket) {
                    TicketMessage::where('ticket_id', $ticket->id)->delete();
                }
                Ticket::where('user_id', $user->id)->delete();
                User::where('invite_user_id', $user->id)->update(['invite_user_id' => null]);
            });
            $builder->delete();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            abort(500, 'Xóa hàng loạt thông tin người dùng thất bại');
        }  

        return response([
            'data' => true
        ]);
    }

    public function delUser(Request $request)
    {
        $user = User::find($request->input('id'));
        if (!$user) {
            abort(500, 'Người dùng không tồn tại');
        }
        DB::beginTransaction();
        try {
            $authService = new AuthService($user);
            $authService->removeAllSession();
            Order::where('user_id', $request->input('id'))->delete();
            User::where('invite_user_id', $request->input('id'))->update(['invite_user_id' => null]);
            InviteCode::where('user_id', $request->input('id'))->delete();
            
            $tickets = Ticket::where('user_id', $request->input('id'))->get();
            foreach($tickets as $ticket) {
                TicketMessage::where('ticket_id', $ticket->id)->delete();
            }
            Ticket::where('user_id', $request->input('id'))->delete();
    
            $user->delete();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            abort(500, 'Xóa người dùng thất bại');
        }

        return response([
            'data' => true
        ]);
    }
}
