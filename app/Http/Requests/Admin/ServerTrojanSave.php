<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ServerTrojanSave extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'show' => '',
            'name' => 'required',
            'group_id' => 'required|array',
            'route_id' => 'nullable|array',
            'parent_id' => 'nullable|integer',
            'host' => 'required',
            'port' => 'required',
            'server_port' => 'required',
            'network' => 'required',
            'network_settings' => 'nullable',
            'allow_insecure' => 'nullable|in:0,1',
            'server_name' => 'nullable',
            'tags' => 'nullable|array',
            'rate' => 'required|numeric'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Tên nodekhông được để trống',
            'group_id.required' => 'Nhóm quyềnkhông được để trống',
            'group_id.array' => 'Nhóm quyềnkhông đúng định dạng',
            'route_id.array' => 'Nhóm routekhông đúng định dạng',
            'parent_id.integer' => 'Node chakhông đúng định dạng',
            'host.required' => 'Địa chỉ nodekhông được để trống',
            'port.required' => 'Cổng kết nốikhông được để trống',
            'server_port.required' => 'BackendCổng dịch vụkhông được để trống',
            'allow_insecure.in' => 'Cho phép không bảo mậtkhông đúng định dạng',
            'tags.array' => 'Nhãnkhông đúng định dạng',
            'rate.required' => 'Hệ sốkhông được để trống',
            'rate.numeric' => 'Hệ sốkhông đúng định dạng'
        ];
    }
}
