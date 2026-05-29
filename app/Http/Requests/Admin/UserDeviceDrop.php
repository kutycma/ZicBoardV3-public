<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class UserDeviceDrop extends FormRequest
{
    public function rules()
    {
        return [
            'id' => 'required|integer'
        ];
    }
}
