<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class PlanSort extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'plan_ids' => 'required|array'
        ];
    }

    public function messages()
    {
        return [
            'plan_ids.required' => 'Gói đăng kýIDkhông được để trống',
            'plan_ids.array' => 'Gói đăng kýIDsai định dạng'
        ];
    }
}
