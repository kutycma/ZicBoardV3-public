<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UserFetch extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'filter.*.key' => 'required|in:id,email,transfer_enable,device_limit,d,expired_at,uuid,token,invite_by_email,invite_user_id,plan_id,banned,remarks,is_admin',
            'filter.*.condition' => 'required|in:>,<,=,>=,<=,Tương đối,!=',
            'filter.*.value' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'filter.*.key.required' => 'Khóa lọckhông được để trống',
            'filter.*.key.in' => 'Khóa lọctham số không hợp lệ',
            'filter.*.condition.required' => 'Điều kiện lọckhông được để trống',
            'filter.*.condition.in' => 'Điều kiện lọctham số không hợp lệ',
            'filter.*.value.required' => 'Giá trị lọckhông được để trống'
        ];
    }
}
