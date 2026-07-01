<?php

namespace App\Http\Requests\Passport;

use Illuminate\Foundation\Http\FormRequest;

class AuthRegister extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'email' => 'required|string|regex:/^[^\s@]+@[^\s@]+$/',
            'password' => 'required|min:8'
        ];

        if ((int)config('zicboard.billing_info_enable', 0)) {
            $rules['billing_phone'] = ['nullable', 'string', 'max:32', 'regex:/^[0-9\\s+\\-().]*$/'];
            $rules['billing_address'] = 'nullable|string|max:255';
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'email.required' => __('Email can not be empty'),
            'email.regex' => __('Email format is incorrect'),
            'password.required' => __('Password can not be empty'),
            'password.min' => __('Password must be greater than 8 digits'),
            'billing_phone.regex' => __('Incorrect phone number format'),
            'billing_phone.max' => __('Phone number is too long'),
            'billing_address.max' => __('Address is too long')
        ];
    }
}
