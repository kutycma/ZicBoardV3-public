<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class KnowledgeSave extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'category' => 'required',
            'language' => 'required',
            'title' => 'required',
            'body' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Tiêu đềkhông được để trống',
            'category.required' => 'Danh mụckhông được để trống',
            'body.required' => 'Nội dungkhông được để trống',
            'language.required' => 'Ngôn ngữkhông được để trống'
        ];
    }
}
