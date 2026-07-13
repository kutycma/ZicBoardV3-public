<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class OrderFetch extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'filter.*.key' => 'required|in:email,invite_user_email,trade_no,status,commission_status,user_id,invite_user_id,plan_id,callback_no,commission_balance',
            'filter.*.condition' => 'required|in:>,<,=,>=,<=,like,Tương đối,模糊,!=',
            'filter.*.value' => ''
        ];
    }

    public function messages()
    {
        return [
            'filter.*.key.required' => 'Khóa lọckhông được để trống',
            'filter.*.key.in' => 'Khóa lọctham số không hợp lệ',
            'filter.*.condition.required' => 'Điều kiện lọckhông được để trống',
            'filter.*.condition.in' => 'Điều kiện lọctham số không hợp lệ',
        ];
    }
}
