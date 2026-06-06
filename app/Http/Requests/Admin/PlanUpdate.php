<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class PlanUpdate extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'show' => 'in:0,1',
            'renew' => 'in:0,1',
            'allow_subscribe_url' => 'in:0,1',
            'allow_subscribe_url_ua' => 'in:0,1',
            'subscribe_url_allowed_ua' => 'nullable|string'
        ];
    }

    public function messages()
    {
        return [
            'show.in' => 'Trạng thái bánkhông đúng định dạng',
            'renew.in' => 'Trạng thái gia hạnkhông đúng định dạng'
        ];
    }
}
