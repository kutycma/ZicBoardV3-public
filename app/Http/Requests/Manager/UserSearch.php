<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class UserSearch extends FormRequest
{
    public function rules()
    {
        return [
            'keyword' => 'required_without:email|string|min:5|max:255',
            'email' => 'required_without:keyword|string|min:5|max:255'
        ];
    }
}