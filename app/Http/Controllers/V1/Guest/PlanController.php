<?php

namespace App\Http\Controllers\V1\Guest;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use App\Services\PlanService;

class PlanController extends Controller
{
    private const PRICE_FIELDS = [
        'month_price',
        'quarter_price',
        'half_year_price',
        'year_price',
        'two_year_price',
        'three_year_price',
        'onetime_price'
    ];

    public function fetch()
    {
        $counts = PlanService::countActiveUsers();
        $plans = Plan::where('show', 1)->orderBy('sort', 'ASC')->get();

        $data = $plans->map(function ($plan) use ($counts) {
            $capacityLimit = $plan->capacity_limit;
            if ($capacityLimit !== null && isset($counts[$plan->id])) {
                $capacityLimit = max(0, (int)$capacityLimit - (int)$counts[$plan->id]->count);
            }

            $prices = [];
            foreach (self::PRICE_FIELDS as $field) {
                $prices[$field] = $plan->{$field} === null ? null : (int)$plan->{$field};
            }

            return [
                'id' => (int)$plan->id,
                'name' => $plan->name,
                'content' => $plan->content,
                'transfer_enable' => (int)$plan->transfer_enable,
                'device_limit' => $plan->device_limit === null ? null : (int)$plan->device_limit,
                'speed_limit' => $plan->speed_limit === null ? null : (int)$plan->speed_limit,
                'capacity_limit' => $capacityLimit === null ? null : (int)$capacityLimit,
                'prices' => $prices
            ];
        })->values();

        return response([
            'data' => $data
        ]);
    }
}
