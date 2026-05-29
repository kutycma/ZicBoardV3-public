<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class GiftcardGenerate extends FormRequest
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
            'type' => 'required|in:1,2,3,4,5',
            'value' => ['required_if:type,1,2,3,5', 'nullable', 'integer'],
            'plan_id' => ['required_if:type,5', 'nullable','integer'],
            'started_at' => 'required|integer',
            'ended_at' => 'required|integer',
            'limit_use' => 'nullable|integer',
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
            'value.required' => 'Giá trịkhông được để trống',
            'value.integer' => 'Giá trịsai định dạng',
            'plan_id.required' => 'Gói đăng kýkhông được để trống',
            'started_at.required' => 'Thời gian bắt đầukhông được để trống',
            'started_at.integer' => 'Thời gian bắt đầusai định dạng',
            'ended_at.required' => 'Thời gian kết thúckhông được để trống',
            'ended_at.integer' => 'Thời gian kết thúcsai định dạng',
            'limit_use.integer' => 'Số lần sử dụng tối đasai định dạng'
        ];
    }
}
