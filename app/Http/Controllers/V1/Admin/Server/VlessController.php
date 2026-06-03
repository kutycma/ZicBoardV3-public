<?php

namespace App\Http\Controllers\V1\Admin\Server;

use App\Http\Controllers\Controller;
use App\Models\ServerVless;
use App\Services\Core\ProtectedFeatureService;
use Illuminate\Http\Request;

class VlessController extends Controller
{
    public function save(Request $request)
    {
        $params = $request->validate([
            'group_id' => 'required',
            'route_id' => 'nullable|array',
            'name' => 'required',
            'parent_id' => 'nullable|integer',
            'host' => 'required',
            'port' => 'required',
            'server_port' => 'required',
            'tls' => 'required|in:0,1,2',
            'tls_settings' => 'nullable|array',
            'flow' => 'nullable|in:xtls-rprx-vision',
            'network' => 'required',
            'network_settings' => 'nullable|array',
            'encryption' => 'nullable',
            'encryption_settings' => 'nullable|array',
            'tags' => 'nullable|array',
            'rate' => 'required',
            'show' => 'nullable|in:0,1',
            'sort' => 'nullable'
        ]);

        $server = null;
        if ($request->input('id')) {
            $server = ServerVless::find($request->input('id'));
            if (!$server) {
                abort(500, 'Máy chủ không tồn tại');
            }
            $params = $this->preserveTlsSecrets($params, $server);
        }

        $params = (new ProtectedFeatureService())->prepareServerParams('vless', $params);
        if ($params['network'] != 'tcp') {
            $params['flow'] = null;
        }
        if ($params['network'] == 'xhttp' && !ProtectedFeatureService::paramsUseProtected('vless', $params) && isset($params['network_settings'])) {
            $ns = $params['network_settings'];
            if (isset($ns['extra']) && is_array($ns['extra'])) {
                $extra = $ns['extra'];
                if (isset($extra['noGRPCHeader'])) {
                    $extra['noGRPCHeader'] = filter_var($extra['noGRPCHeader'], FILTER_VALIDATE_BOOLEAN);
                }
                if (isset($extra['noSSEHeader'])) {
                    $extra['noSSEHeader'] = filter_var($extra['noSSEHeader'], FILTER_VALIDATE_BOOLEAN);
                }
                if (isset($extra['scMaxBufferedPosts'])) {
                    $extra['scMaxBufferedPosts'] = (int)$extra['scMaxBufferedPosts'];
                }
                if (isset($extra['xmux']) && is_array($extra['xmux'])) {
                    $xmux = $extra['xmux'];
                    if (isset($xmux['hKeepAlivePeriod'])) {
                        $xmux['hKeepAlivePeriod'] = (int)$xmux['hKeepAlivePeriod'];
                    }
                    $extra['xmux'] = $xmux;
                }
                if (isset($extra['downloadSettings']) && is_array($extra['downloadSettings'])) {
                    $downloadSettings = $extra['downloadSettings'];
                    if (isset($downloadSettings['port'])) {
                        $downloadSettings['port'] = (int)$downloadSettings['port'];
                    }
                    $extra['downloadSettings'] = $downloadSettings;
                }
                $ns['extra'] = $extra;
            }
            $params['network_settings'] = $ns;
        }
        if ($server) {
            try {
                $server->update($params);
            } catch (\Exception $e) {
                abort(500, 'Lưu thất bại');
            }
            return response([
                'data' => true
            ]);
        }

        if (!ServerVless::create($params)) {
            abort(500, 'Tạo thất bại');
        }

        return response([
            'data' => true
        ]);
    }

    private function preserveTlsSecrets(array $params, ServerVless $server): array
    {
        $tlsSettingsKey = 'tls' . '_settings';
        $secretKeys = ['private' . '_key', 'ech' . '_key'];

        $existing = $server->getAttribute($tlsSettingsKey);
        if (!is_array($existing)) {
            return $params;
        }

        $incoming = isset($params[$tlsSettingsKey]) && is_array($params[$tlsSettingsKey])
            ? $params[$tlsSettingsKey]
            : [];

        foreach ($secretKeys as $key) {
            if (
                array_key_exists($key, $existing)
                && (!array_key_exists($key, $incoming) || $incoming[$key] === '' || $incoming[$key] === null)
            ) {
                $incoming[$key] = $existing[$key];
            }
        }

        $params[$tlsSettingsKey] = $incoming;
        return $params;
    }

    public function drop(Request $request)
    {
        if ($request->input('id')) {
            $server = ServerVless::find($request->input('id'));
            if (!$server) {
                abort(500, 'ID node không tồn tại');
            }
        }
        return response([
            'data' => $server->delete()
        ]);
    }

    public function update(Request $request)
    {
        $params = $request->validate([
            'show' => 'nullable|in:0,1',
        ]);

        $server = ServerVless::find($request->input('id'));

        if (!$server) {
            abort(500, 'Máy chủ này không tồn tại');
        }
        try {
            $server->update($params);
        } catch (\Exception $e) {
            abort(500, 'Lưu thất bại');
        }

        return response([
            'data' => true
        ]);
    }

    public function copy(Request $request)
    {
        $server = ServerVless::find($request->input('id'));
        $server->show = 0;
        if (!$server) {
            abort(500, 'Máy chủ không tồn tại');
        }
        if (!ServerVless::create($server->toArray())) {
            abort(500, 'Sao chép thất bại');
        }

        return response([
            'data' => true
        ]);
    }
}
