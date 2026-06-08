<?php

namespace App\Http\Controllers\V1\User;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use App\Models\User;
use App\Services\PlanService;
use App\Services\SubscriptionService;
use App\Utils\Helper;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    public function fetch(Request $request)
    {
        $user = User::find($request->user['id']);
        $staff = Helper::activeWebcon($request);
        $staffPlanIds = $staff ? ($staff->plan_id ?: []) : [];
        $isWebcon = $staff && !empty($staffPlanIds);

        if ($request->input('id')) {
            $plan = Plan::where('id', $request->input('id'))->first();
            if (!$plan) {
                abort(500, __('Subscription plan does not exist'));
            }

            if ($isWebcon) {
                if (!in_array((int)$plan->id, $staffPlanIds)) {
                    abort(500, __('Subscription plan does not exist'));
                }
                return response([
                    'data' => $plan
                ]);
            }

            $renewableSubscription = (new SubscriptionService())->getRenewableForPlan($user, (int)$plan->id);
            if ((!$plan->show && !$plan->renew) || (!$plan->show && !$renewableSubscription)) {
                abort(500, __('Subscription plan does not exist'));
            }
            return response([
                'data' => $plan
            ]);
        }

        $counts = PlanService::countActiveUsers();
        $plans = $isWebcon
            ? Plan::whereIn('id', $staffPlanIds)->orderBy('sort', 'ASC')->get()
            : Plan::where('show', 1)->orderBy('sort', 'ASC')->get();

        if ($isWebcon) {
            $plans->transform(function ($plan) {
                $plan->show = 1;
                return $plan;
            });
        }

        foreach ($plans as $k => $v) {
            if ($plans[$k]->capacity_limit === NULL) continue;
            if (!isset($counts[$plans[$k]->id])) continue;
            $plans[$k]->capacity_limit = $plans[$k]->capacity_limit - $counts[$plans[$k]->id]->count;
        }
        return response([
            'data' => $plans
        ]);
    }

}
