<?php

namespace App\Http\Controllers\V1\Manager;

use App\Http\Controllers\Controller;
use App\Models\Plan;

class PlanController extends Controller
{
    public function fetch()
    {
        $plans = Plan::orderBy('sort', 'ASC')
            ->orderBy('id', 'ASC')
            ->get([
                'id',
                'group_id',
                'name',
                'transfer_enable',
                'device_limit',
                'speed_limit',
                'month_price',
                'quarter_price',
                'half_year_price',
                'year_price',
                'two_year_price',
                'three_year_price',
                'onetime_price',
                'reset_price',
                'sort',
                'show',
                'renew'
            ]);

        return response([
            'data' => $plans
        ]);
    }
}