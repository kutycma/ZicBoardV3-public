<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class OrderAssign extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'plan_id' => 'required',
            'email' => 'required',
            'total_amount' => 'required',
            'period' => 'required|in:month_price,quarter_price,half_year_price,year_price,two_year_price,three_year_price,onetime_price,reset_price',
            'subscription_id' => 'nullable|integer'
        ];
    }

    public function messages()
    {
        return [
            'plan_id.required' => 'Gói đăng kýkhông được để trống',
            'email.required' => 'Emailkhông được để trống',
            'total_amount.required' => 'Số tiền thanh toán không được để trống',
            'period.required' => 'Chu kỳ góikhông được để trống',
            'period.in' => 'Chu kỳ góisai định dạng'
        ];
    }
}
