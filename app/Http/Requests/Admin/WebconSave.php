<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class WebconSave extends FormRequest
{
    public function rules()
    {
        return [
            'email' => 'required|email',
            'domain' => 'required',
            'plan_id' => 'nullable',
            'plan_ids' => 'nullable',
            'title' => 'nullable',
            'description' => 'nullable',
            'logo' => 'nullable|url',
            'background_url' => 'nullable|url',
            'custom_html' => 'nullable'
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Email admin webcon cannot be empty',
            'email.email' => 'Email admin webcon is invalid',
            'domain.required' => 'Webcon domain cannot be empty',
            'logo.url' => 'Logo must be a valid URL',
            'background_url.url' => 'Background image must be a valid URL'
        ];
    }
}
