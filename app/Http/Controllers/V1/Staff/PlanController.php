<?php

namespace App\Http\Controllers\V1\Staff;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use App\Models\Staff;
use App\Models\UserSubscription;
use App\Services\SubscriptionService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PlanController extends Controller
{
    public function fetch(Request $request)
    {
        $staff = Staff::where('user_id', $request->user['id'])->where('status', 1)->first();
        if (!$staff) {
            abort(500, 'Nhân viên không tồn tại');
        }

        $staffPlanIds = $staff->plan_id ?: [];
        $counts = UserSubscription::select(
                'v2_user_subscription.plan_id',
                DB::raw('count(*) as count')
            )
            ->join('v2_user', 'v2_user.id', '=', 'v2_user_subscription.user_id')
            ->where('v2_user.invite_user_id', $request->user['id'])
            ->whereNotNull('v2_user_subscription.plan_id')
            ->where('v2_user_subscription.status', SubscriptionService::STATUS_ACTIVE)
            ->where(function ($query) {
                $query->where('v2_user_subscription.expired_at', '>=', time())
                    ->orWhereNull('v2_user_subscription.expired_at');
            })
            ->groupBy('v2_user_subscription.plan_id')
            ->get()
            ->keyBy('plan_id');
        $plans = Plan::when(!empty($staffPlanIds), function ($query) use ($staffPlanIds) {
                $query->whereIn('id', $staffPlanIds);
            })
            ->orderBy('sort', 'ASC')
            ->get();

        foreach ($plans as $plan) {
            $plan->count = 0;
            foreach ($counts as $count) {
                if ((int)$plan->id === (int)$count->plan_id) {
                    $plan->count = $count->count;
                    break;
                }
            }
        }

        return response([
            'data' => $plans
        ]);
    }
}
