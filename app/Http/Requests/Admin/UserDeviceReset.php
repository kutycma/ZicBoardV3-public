<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UserDeviceReset extends FormRequest
{
    public function rules()
    {
        return [
            'user_id' => 'required|integer'
        ];
    }
}
