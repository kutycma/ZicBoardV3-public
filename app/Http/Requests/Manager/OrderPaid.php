<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class OrderPaid extends FormRequest
{
    public function rules()
    {
        return [
            'trade_no' => 'required|string|max:64'
        ];
    }
}