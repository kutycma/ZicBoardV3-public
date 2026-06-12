<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class DeviceUnbind extends FormRequest
{
    public function rules()
    {
        return [
            'id' => 'required|integer',
            'target_user_id' => 'required|integer',
            'manage_token' => 'required|string'
        ];
    }
}