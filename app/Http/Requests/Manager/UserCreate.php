<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class UserCreate extends FormRequest
{
    public function rules()
    {
        return [
            'email' => 'required|string|regex:/^[^\s@]+@[^\s@]+$/',
            'password' => 'required|min:8'
        ];
    }
}