<?php

namespace App\Http\Requests\Admin;

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
            'email' => 'required|string|regex:/^[^\s@]+@[^\s@]+$/',
            'password' => 'nullable|min:8',
            'transfer_enable' => 'numeric',
            'device_limit' => 'nullable|integer',
            'expired_at' => 'nullable|integer',
            'banned' => 'required|in:0,1',
            'plan_id' => 'nullable|integer',
            'commission_rate' => 'nullable|integer|min:0|max:100',
            'discount' => 'nullable|integer|min:0|max:100',
            'is_admin' => 'required|in:0,1',
            'is_staff' => 'required|in:0,1',
            'is_manager' => 'required|in:0,1',
            'u' => 'integer',
            'd' => 'integer',
            'balance' => 'integer',
            'commission_type' => 'integer',
            'commission_balance' => 'integer',
            'remarks' => 'nullable',
            'speed_limit' => 'nullable|integer'
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
            'is_admin.required' => 'CóQuản trị viênkhông được để trống',
            'is_admin.in' => 'CóQuản trị viênkhông đúng định dạng',
            'is_staff.required' => 'CóNhân viênkhông được để trống',
            'is_staff.in' => 'CóNhân viênkhông đúng định dạng',
            'is_manager.required' => 'Manager khong duoc de trong',
            'is_manager.in' => 'Manager khong dung dinh dang',
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
            'commission_balance.integer' => 'Hoa hồngkhông đúng định dạng',
            'password.min' => 'Mật khẩu tối thiểu 8 ký tự',
            'speed_limit.integer' => 'Giới hạn tốc độkhông đúng định dạng'
        ];
    }
}
