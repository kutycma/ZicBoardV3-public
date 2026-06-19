<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ServerVmessSave extends FormRequest
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
            'tls' => 'required',
            'tags' => 'nullable|array',
            'load_ips' => 'nullable|array',
            'rate' => 'required|numeric',
            'network' => 'required|in:tcp,kcp,ws,http,domainsocket,quic,grpc,httpupgrade,xhttp',
            'networkSettings' => 'nullable|array',
            'networkSettings.security' => 'nullable|in:auto,aes-128-gcm,chacha20-poly1305,none',
            'ruleSettings' => 'nullable|array',
            'tlsSettings' => 'nullable|array',
            'dnsSettings' => 'nullable|array'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Tên nodekhông được để trống',
            'group_id.required' => 'Nhóm quyềnkhông được để trống',
            'group_id.array' => 'Nhóm quyềnkhông đúng định dạng',
            'route_id.array' => 'Nhóm routekhông đúng định dạng',
            'parent_id.integer' => 'ID chakhông đúng định dạng',
            'host.required' => 'Địa chỉ nodekhông được để trống',
            'port.required' => 'Cổng kết nốikhông được để trống',
            'server_port.required' => 'BackendCổng dịch vụkhông được để trống',
            'tls.required' => 'TLSkhông được để trống',
            'tags.array' => 'Nhãnkhông đúng định dạng',
            'rate.required' => 'Hệ sốkhông được để trống',
            'rate.numeric' => 'Hệ sốkhông đúng định dạng',
            'network.required' => 'Giao thức truyền tảikhông được để trống',
            'network.in' => 'Giao thức truyền tảikhông đúng định dạng',
            'networkSettings.array' => 'Cấu hình giao thức truyền tải không hợp lệ',
            'networkSettings.security.in' => 'vmessLoại mã hóa chỉ có thể là: auto, aes-128-gcm, chacha20-poly1305, none',
            'ruleSettings.array' => 'Cấu hình rule không hợp lệ',
            'tlsSettings.array' => 'Cấu hình TLSkhông hợp lệ',
            'dnsSettings.array' => 'cấu hình DNSkhông hợp lệ'
        ];
    }
}
