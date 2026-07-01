<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdate extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'auto_renewal' => 'in:0,1',
            'remind_expire' => 'in:0,1',
            'remind_traffic' => 'in:0,1'
        ];

        if ((int)config('zicboard.billing_info_enable', 0)) {
            $rules['billing_name'] = 'nullable|string|max:128';
            $rules['billing_tax_code'] = ['nullable', 'string', 'max:32', 'regex:/^[0-9-]*$/'];
            $rules['billing_phone'] = ['nullable', 'string', 'max:32', 'regex:/^[0-9\\s+\\-().]*$/'];
            $rules['billing_address'] = 'nullable|string|max:255';
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'show.in' => __('Incorrect format of expiration reminder'),
            'renew.in' => __('Incorrect traffic alert format'),
            'billing_name.max' => __('Billing name is too long'),
            'billing_tax_code.regex' => __('Tax code format is incorrect'),
            'billing_tax_code.max' => __('Tax code is too long'),
            'billing_phone.regex' => __('Incorrect phone number format'),
            'billing_phone.max' => __('Phone number is too long'),
            'billing_address.max' => __('Address is too long')
        ];
    }
}
