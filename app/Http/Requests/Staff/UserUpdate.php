<?php

namespace App\Http\Requests\Staff;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdate extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'required|integer',
            'password' => 'nullable',
            'banned' => 'nullable|in:0,1'
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Emailkhông được để trống',
            'email.regex' => 'Emailkhông đúng định dạng',
            'transfer_enable.numeric' => 'Dung lượngkhông đúng định dạng',
            'device_limit.integer' => 'Giới hạn thiết bịkhông đúng định dạng',
            'expired_at.integer' => 'Thời gian hết hạnkhông đúng định dạng',
            'banned.required' => 'CóKhóakhông được để trống',
            'banned.in' => 'CóKhóakhông đúng định dạng',
            'plan_id.integer' => 'Gói đăng kýkhông đúng định dạng',
            'commission_rate.integer' => 'Tỷ lệ hoàn hoa hồng giới thiệukhông đúng định dạng',
            'commission_rate.nullable' => 'Tỷ lệ hoàn hoa hồng giới thiệukhông đúng định dạng',
            'commission_rate.min' => 'Tỷ lệ hoàn hoa hồng giới thiệutối thiểu là 0',
            'commission_rate.max' => 'Tỷ lệ hoàn hoa hồng giới thiệutối đa là 100',
            'discount.integer' => 'Tỷ lệ giảm giá riêngkhông đúng định dạng',
            'discount.nullable' => 'Tỷ lệ giảm giá riêngkhông đúng định dạng',
            'discount.min' => 'Tỷ lệ giảm giá riêngtối thiểu là 0',
            'discount.max' => 'Tỷ lệ giảm giá riêngtối đa là 100',
            'u.integer' => 'Dung lượng tải lên không đúng định dạng',
            'd.integer' => 'Dung lượng tải xuống không đúng định dạng',
            'balance.integer' => 'Số dưkhông đúng định dạng',
            'commission_balance.integer' => 'Hoa hồngkhông đúng định dạng'
        ];
    }
}
