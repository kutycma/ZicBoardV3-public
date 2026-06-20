<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ServerShadowsocksSave extends FormRequest
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
            'check' => 'nullable|in:0,1',
            'name' => 'required',
            'group_id' => 'required|array',
            'parent_id' => 'nullable|integer',
            'route_id' => 'nullable|array',
            'host' => 'required',
            'port' => 'required',
            'server_port' => 'required',
            'cipher' => 'required|in:aes-128-gcm,aes-192-gcm,aes-256-gcm,chacha20-ietf-poly1305,2022-blake3-aes-128-gcm,2022-blake3-aes-256-gcm',
            'obfs' => 'nullable|in:http',
            'obfs_settings' => 'nullable|array',
            'tags' => 'nullable|array',
            'load_ips' => 'nullable|array',
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
            'cipher.required' => 'Phương thức mã hóakhông được để trống',
            'tags.array' => 'Nhãnkhông đúng định dạng',
            'rate.required' => 'Hệ sốkhông được để trống',
            'rate.numeric' => 'Hệ sốkhông đúng định dạng',
            'obfs.in' => 'Obfs không đúng định dạng',
            'obfs_settings.array' => 'Cấu hình obfskhông đúng định dạng'
        ];
    }
}
