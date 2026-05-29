<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CouponGenerate extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'generate_count' => 'nullable|integer|max:500',
            'name' => 'required',
            'type' => 'required|in:1,2',
            'value' => 'required|integer',
            'started_at' => 'required|integer',
            'ended_at' => 'required|integer',
            'limit_use' => 'nullable|integer',
            'limit_use_with_user' => 'nullable|integer',
            'limit_plan_ids' => 'nullable|array',
            'limit_period' => 'nullable|array',
            'code' => ''
        ];
    }

    public function messages()
    {
        return [
            'generate_count.integer' => 'Số lượng tạophải là số',
            'generate_count.max' => 'Số lượng tạotối đa là 500',
            'name.required' => 'Tênkhông được để trống',
            'type.required' => 'Loạikhông được để trống',
            'type.in' => 'Loạisai định dạng',
            'value.required' => 'Số tiền hoặc tỷ lệkhông được để trống',
            'value.integer' => 'Số tiền hoặc tỷ lệsai định dạng',
            'started_at.required' => 'Thời gian bắt đầukhông được để trống',
            'started_at.integer' => 'Thời gian bắt đầusai định dạng',
            'ended_at.required' => 'Thời gian kết thúckhông được để trống',
            'ended_at.integer' => 'Thời gian kết thúcsai định dạng',
            'limit_use.integer' => 'Số lần sử dụng tối đasai định dạng',
            'limit_use_with_user.integer' => 'Giới hạn số lần dùng của người dùngsai định dạng',
            'limit_plan_ids.array' => 'Gói chỉ địnhsai định dạng',
            'limit_period.array' => 'Chu kỳ chỉ địnhsai định dạng'
        ];
    }
}
