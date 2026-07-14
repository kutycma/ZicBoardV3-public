<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class OrderUpdate extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'commission_status' => 'required|in:1,3'
        ];
    }

    public function messages()
    {
        return [
            'commission_status.required' => 'Commission status is required',
            'commission_status.in' => 'Commission status is invalid'
        ];
    }
}
