<?php

namespace App\Http\Requests\Manager;

use Illuminate\Foundation\Http\FormRequest;

class UserSearch extends FormRequest
{
    public function rules()
    {
        return [
            'keyword' => 'required_without_all:email,id|string|max:255',
            'email' => 'required_without_all:keyword,id|string|max:255',
            'id' => 'required_without_all:keyword,email|integer'
        ];
    }
}