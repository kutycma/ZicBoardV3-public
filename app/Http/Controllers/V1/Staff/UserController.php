<?php

namespace App\Http\Controllers\V1\Staff;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserSendMail;
use App\Http\Requests\Staff\UserUpdate;
use App\Jobs\SendEmailJob;
use App\Models\Plan;
use App\Models\User;
use App\Models\UserSubscription;
use App\Services\SubscriptionService;
use App\Services\UserDeviceService;
use App\Utils\Helper;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUserInfoById(Request $request)
    {
        if (empty($request->input('id'))) {
            abort(500, 'Tham số không hợp lệ');
        }

        $user = User::where('is_admin', 0)
            ->where('is_staff', 0)
            ->where('invite_user_id', $request->user['id'])
            ->where('id', $request->input('id'))
            ->first();

        if (!$user) {
            abort(500, 'Người dùng không tồn tại');
        }

        $subscriptionService = new SubscriptionService();
        $subscription = $subscriptionService->getPrimaryForUser($user);
        if ($subscription) {
            $subscriptionService->applyToUser($user, $subscription);
        }

        $plans = Plan::get()->keyBy('id');
        $subscriptions = UserSubscription::where('user_id', $user->id)
            ->orderBy('status', 'ASC')
            ->orderBy('updated_at', 'DESC')
            ->orderBy('id', 'DESC')
            ->get();
        foreach ($subscriptions as $item) {
            $plan = $item->plan_id && isset($plans[$item->plan_id]) ? $plans[$item->plan_id] : null;
            $item->plan_name = $plan ? $plan->name : null;
            if ($this->canExposeSubscribeUrl($item, $plans)) {
                $item->subscribe_url = Helper::getSubscribeUrl($item->token, $request);
                $item->subscribe_url_hidden = false;
            } else {
                $item->subscribe_url = '';
                $item->subscribe_url_error = 'subscribe_url_disabled';
                $item->subscribe_url_hidden = true;
            }
            $item->makeHidden(['token', 'uuid']);
        }
        $user->subscriptions = $subscriptions;
        $user->makeHidden(['token', 'uuid', 'subscription']);

        return response([
            'data' => $user
        ]);
    }

    public function update(UserUpdate $request)
    {
        $params = $request->validated();
        $user = User::where('id', $request->input('id'))
            ->where('invite_user_id', $request->user['id'])
            ->where('is_admin', 0)
            ->where('is_staff', 0)
            ->first();

        if (!$user) {
            abort(500, 'Người dùng không tồn tại');
        }

        $update = [];
        if (isset($params['password'])) {
            if (trim((string)$params['password']) !== '') {
                $update['password'] = password_hash($params['password'], PASSWORD_DEFAULT);
                $update['password_algo'] = null;
            }
        }
        if (array_key_exists('banned', $params)) {
            $update['banned'] = (int)$params['banned'];
        }

        if (!$update) {
            abort(500, 'Không có dữ liệu cần cập nhật');
        }
        try {
            $user->update($update);
        } catch (\Exception $e) {
            abort(500, 'Lưu thất bại');
        }

        return response([
            'data' => true
        ]);
    }

    public function sendMail(UserSendMail $request)
    {
        $sortType = in_array($request->input('sort_type'), ['ASC', 'DESC']) ? $request->input('sort_type') : 'DESC';
        $sort = in_array($request->input('sort'), ['id', 'email', 'created_at', 'expired_at']) ? $request->input('sort') : 'created_at';
        $builder = User::orderBy($sort, $sortType);
        $this->filter($request, $builder);
        $users = $builder->get();

        foreach ($users as $user) {
            SendEmailJob::dispatch([
                'email' => $user->email,
                'subject' => $request->input('subject'),
                'template_name' => 'notify',
                'template_value' => [
                    'name' => config('zicboard.app_name', 'ZicBoard'),
                    'url' => config('zicboard.app_url'),
                    'content' => $request->input('content')
                ]
            ]);
        }

        return response([
            'data' => true
        ]);
    }

    public function ban(Request $request)
    {
        $targetUserId = $request->input('target_user_id', $request->input('id'));
        if (!$targetUserId) {
            abort(500, 'Tham số không hợp lệ');
        }

        $user = User::where('id', $targetUserId)
            ->where('invite_user_id', $request->user['id'])
            ->where('is_admin', 0)
            ->where('is_staff', 0)
            ->first();
        if (!$user) {
            abort(500, 'Người dùng không tồn tại');
        }

        try {
            $user->update(['banned' => 1]);
        } catch (\Exception $e) {
            abort(500, 'Xử lý thất bại');
        }

        return response([
            'data' => true
        ]);
    }

    public function resetSecurity(Request $request)
    {
        $targetUser = User::where('id', $request->input('target_user_id'))
            ->where('invite_user_id', $request->user['id'])
            ->where('is_admin', 0)
            ->where('is_staff', 0)
            ->first();

        if (!$targetUser) {
            return response()->json(['message' => 'You do not have permission'], 403);
        }

        $subscriptionService = new SubscriptionService();
        $subscription = $request->input('subscription_id')
            ? $subscriptionService->getForUser($targetUser, $request->input('subscription_id'))
            : $subscriptionService->getPrimaryForUser($targetUser);
        if (!$subscription) {
            abort(500, 'Gói đăng ký không tồn tại');
        }
        $primarySubscription = $subscriptionService->getPrimaryForUser($targetUser);
        $isPrimarySubscription = $primarySubscription && (int)$primarySubscription->id === (int)$subscription->id;

        $subscription->uuid = Helper::guid(true);
        $subscription->token = Helper::guid();
        if (!$subscription->save()) {
            abort(500, 'Đặt lại thất bại');
        }
        if ($isPrimarySubscription) {
            $subscriptionService->syncUserSummary($subscription);
        }
        (new UserDeviceService())->resetSubscription($subscription);

        $responseData = [
            'success' => true
        ];
        if ($this->canExposeSubscribeUrl($subscription)) {
            $responseData['new_subscribe_url'] = Helper::getSubscribeUrl($subscription->token, $request);
            $responseData['subscribe_url_hidden'] = false;
        } else {
            $responseData['subscribe_url_hidden'] = true;
        }

        return response()->json([
            'data' => $responseData
        ]);
    }

    private function canExposeSubscribeUrl(UserSubscription $subscription, $plans = null)
    {
        $plan = $subscription->relationLoaded('plan') ? $subscription->plan : null;
        if (!$plan && $subscription->plan_id) {
            $plan = $plans && isset($plans[$subscription->plan_id])
                ? $plans[$subscription->plan_id]
                : Plan::find($subscription->plan_id);
        }
        return !$plan || (int)($plan->allow_subscribe_url ?? 1) === 1;
    }

    private function filter(Request $request, $builder)
    {
        $builder->where('invite_user_id', $request->user['id'])
            ->where('is_admin', 0)
            ->where('is_staff', 0);

        $allowedKeys = ['id', 'email', 'plan_id', 'banned', 'created_at', 'expired_at'];
        foreach ($request->input('filter', []) ?: [] as $filter) {
            if (empty($filter['key']) || empty($filter['condition']) || $filter['value'] === null) {
                continue;
            }
            if (!in_array($filter['key'], $allowedKeys)) {
                continue;
            }

            switch ($filter['condition']) {
                case '~':
                case 'like':
                    $builder->where($filter['key'], 'LIKE', "%{$filter['value']}%");
                    break;
                case '=':
                case '>=':
                case '<=':
                case '>':
                case '<':
                    $builder->where($filter['key'], $filter['condition'], $filter['value']);
                    break;
            }
        }
    }
}
