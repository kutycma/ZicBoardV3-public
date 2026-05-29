<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class MailSend extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'type' => 'required|in:1,2,3,4',
            'subject' => 'required',
            'content' => 'required',
            'receiver' => 'array'
        ];
    }

    public function messages()
    {
        return [
            'type.required' => 'Loại gửi không được để trống',
            'type.in' => 'Loại gửi sai định dạng',
            'subject.required' => 'Chủ đềkhông được để trống',
            'content.required' => 'Nội dungkhông được để trống',
            'receiver.array' => 'Người nhậnsai định dạng'
        ];
    }
}
