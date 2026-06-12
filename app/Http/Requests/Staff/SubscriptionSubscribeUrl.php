<?php

namespace App\Http\Requests\Staff;

use Illuminate\Foundation\Http\FormRequest;

class SubscriptionSubscribeUrl extends FormRequest
{
    public function rules()
    {
        return [
            'target_user_id' => 'required|integer',
            'subscription_id' => 'required|integer'
        ];
    }
}
