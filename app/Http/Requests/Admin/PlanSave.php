<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class PlanSave extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'content' => '',
            'group_id' => 'required',
            'transfer_enable' => 'required',
            'device_limit' => 'nullable|integer',
            'month_price' => 'nullable|integer',
            'quarter_price' => 'nullable|integer',
            'half_year_price' => 'nullable|integer',
            'year_price' => 'nullable|integer',
            'two_year_price' => 'nullable|integer',
            'three_year_price' => 'nullable|integer',
            'onetime_price' => 'nullable|integer',
            'reset_price' => 'nullable|integer',
            'reset_traffic_method' => 'nullable|integer|in:0,1,2,3,4',
            'capacity_limit' => 'nullable|integer',
            'speed_limit' => 'nullable|integer',
            'allow_subscribe_url' => 'in:0,1'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'GóiTênkhông được để trống',
            'type.required' => 'GóiLoạikhông được để trống',
            'type.in' => 'GóiLoạisai định dạng',
            'group_id.required' => 'Nhóm quyềnkhông được để trống',
            'transfer_enable.required' => 'Dung lượngkhông được để trống',
            'device_limit.integer' => 'Giới hạn thiết bịsai định dạng',
            'month_price.integer' => 'Số tiền tháng sai định dạng',
            'quarter_price.integer' => 'Số tiền quý sai định dạng',
            'half_year_price.integer' => 'Số tiền nửa năm sai định dạng',
            'year_price.integer' => 'Số tiền năm sai định dạng',
            'two_year_price.integer' => 'Số tiền 2 năm sai định dạng',
            'three_year_price.integer' => 'Số tiền 3 năm sai định dạng',
            'onetime_price.integer' => 'Số tiền một lần không hợp lệ',
            'reset_price.integer' => 'Số tiền gói reset dung lượngkhông hợp lệ',
            'reset_traffic_method.integer' => 'Cách reset dung lượngsai định dạng',
            'reset_traffic_method.in' => 'Cách reset dung lượngsai định dạng',
            'capacity_limit.integer' => 'Giới hạn số người dùngsai định dạng',
            'speed_limit.integer' => 'Giới hạn tốc độsai định dạng'
        ];
    }
}
