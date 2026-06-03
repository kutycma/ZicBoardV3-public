<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UserDeviceFetch extends FormRequest
{
    public function rules()
    {
        return [
            'current' => 'nullable|integer|min:1',
            'pageSize' => 'nullable|integer|min:10|max:100',
            'filter' => 'nullable|array',
            'filter.*.key' => 'required|in:user_id,subscription_id,email,hwid,last_ip,user_agent,node,node_type,node_id',
            'filter.*.condition' => 'required|in:=,like',
            'filter.*.value' => 'required'
        ];
    }
}
