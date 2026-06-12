<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class SubscriptionSubscribeUrl extends FormRequest
{
    public function rules()
    {
        return [
            'target_user_id' => 'required|integer',
            'manage_token' => 'required|string',
            'subscription_id' => 'required|integer'
        ];
    }
}