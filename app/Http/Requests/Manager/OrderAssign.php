<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class OrderAssign extends FormRequest
{
    public function rules()
    {
        return [
            'plan_id' => 'required|integer',
            'target_user_id' => 'required|integer',
            'manage_token' => 'required|string',
            'email' => 'required|string|regex:/^[^\s@]+@[^\s@]+$/',
            'period' => 'required|in:month_price,quarter_price,half_year_price,year_price,two_year_price,three_year_price,onetime_price,reset_price',
            'subscription_id' => 'nullable|integer',
            'coupon_code' => 'nullable|string|max:255'
        ];
    }
}