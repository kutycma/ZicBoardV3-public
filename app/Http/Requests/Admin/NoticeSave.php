<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class NoticeSave extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'content' => 'required',
            'img_url' => 'nullable|url',
            'tags' => 'nullable|array'
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Tiêu đềkhông được để trống',
            'content.required' => 'Nội dungkhông được để trống',
            'img_url.url' => 'URL ảnhkhông đúng định dạng',
            'tags.array' => 'Nhãnkhông đúng định dạng'
        ];
    }
}
