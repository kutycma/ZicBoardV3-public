<?php

namespace App\Http\Controllers\V1\Admin\Server;

use App\Http\Controllers\Controller;
use App\Models\ServerZicnode;
use App\Services\Core\ProtectedFeatureService;
use Illuminate\Http\Request;

class ZicnodeController extends Controller
{
    public function save(Request $request)
    {
        $params = $request->validate([
            'group_id' => 'required',
            'route_id' => 'nullable|array',
            'name' => 'required',
            'parent_id' => 'nullable|integer',
            'host' => 'required',
            'listen_ip' => 'nullable',
            'port' => 'required',
            'server_port' => 'required',
            'protocol' => 'required|in:shadowsocks,vmess,vless,trojan,tuic,hysteria2,anytls',
            'tls' => 'required|in:0,1,2',
            'tls_settings' => 'nullable|array',
            'flow' => 'nullable|in:xtls-rprx-vision',
            'network' => 'required|in:tcp,ws,grpc,http,httpupgrade,xhttp',
            'network_settings' => 'nullable|array',
            'encryption' => 'nullable',
            'encryption_settings' => 'nullable|array',
            'disable_sni' => 'required|in:0,1',
            'udp_relay_mode' => 'nullable',
            'zero_rtt_handshake' => 'required|in:0,1',
            'congestion_control' => 'nullable',
            'cipher' => 'nullable',
            'up_mbps' => 'nullable|numeric',
            'down_mbps' => 'nullable|numeric',
            'obfs' => 'nullable',
            'obfs_password' => 'nullable',
            'padding_scheme' => 'nullable',
            'tags' => 'nullable|array',
            'rate' => 'required',
            'show' => 'nullable|in:0,1',
            'sort' => 'nullable'
        ]);

        $server = null;
        if ($request->input('id')) {
            $server = ServerZicnode::find($request->input('id'));
            if (!$server) {
                abort(500, 'Máy chủ không tồn tại');
            }
            $params = $this->preserveTlsSecrets($params, $server);
            $params = $this->dropStaleAutoCert($params, $server);
        }

        $params = ProtectedFeatureService::sanitizeZicnodeTlsSettings($params);
        $params = (new ProtectedFeatureService())->prepareServerParams('zicnode', $params);

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

        if (!ServerZicnode::create($params)) {
            abort(500, 'Tạo thất bại');
        }
        return response([
            'data' => true
        ]);
    }

    private function preserveTlsSecrets(array $params, ServerZicnode $server): array
    {
        $tlsSettingsKey = 'tls' . '_settings';
        $tlsMode = (int)($params['tls'] ?? $server->getAttribute('tls') ?? 0);
        $secretKeys = [];

        $existing = $server->getAttribute($tlsSettingsKey);
        if (!is_array($existing)) {
            return $params;
        }

        $incoming = isset($params[$tlsSettingsKey]) && is_array($params[$tlsSettingsKey])
            ? $params[$tlsSettingsKey]
            : [];

        if ($tlsMode === 2) {
            $secretKeys = ['private' . '_key', 'ech' . '_key'];
        } elseif ($tlsMode === 1) {
            $secretKeys = ['auto_cert'];
            $certMode = $this->normalizedCertMode($incoming['cert_mode'] ?? $existing['cert_mode'] ?? '');
            if ($certMode === 'dns') {
                $secretKeys[] = 'dns' . '_env';
            }
        }

        foreach ($secretKeys as $key) {
            $incomingEmpty = !array_key_exists($key, $incoming)
                || $incoming[$key] === ''
                || $incoming[$key] === null
                || (is_array($incoming[$key]) && !$incoming[$key]);
            if (
                array_key_exists($key, $existing)
                && $incomingEmpty
            ) {
                $incoming[$key] = $existing[$key];
            }
        }

        $params[$tlsSettingsKey] = $incoming;
        return $params;
    }

    private function dropStaleAutoCert(array $params, ServerZicnode $server): array
    {
        $tlsSettingsKey = 'tls' . '_settings';
        $existing = $server->getAttribute($tlsSettingsKey);
        $incoming = isset($params[$tlsSettingsKey]) && is_array($params[$tlsSettingsKey])
            ? $params[$tlsSettingsKey]
            : [];

        if ((int)($params['tls'] ?? $server->getAttribute('tls') ?? 0) !== 1) {
            unset($incoming['auto_cert']);
            $params[$tlsSettingsKey] = $incoming;
            return $params;
        }

        if (!is_array($existing) || empty($incoming['auto_cert'] ?? $existing['auto_cert'] ?? null)) {
            return $params;
        }

        if (!$this->autoCertContextChanged($params, $server, $incoming, $existing)) {
            return $params;
        }

        unset($incoming['auto_cert']);
        $params[$tlsSettingsKey] = $incoming;
        return $params;
    }

    private function autoCertContextChanged(array $params, ServerZicnode $server, array $incoming, array $existing): bool
    {
        if ((int)($params['tls'] ?? $server->getAttribute('tls')) !== (int)$server->getAttribute('tls')) {
            return true;
        }

        if ($this->effectiveCertTarget($params, $server, $incoming) !== $this->effectiveCertTarget([], $server, $existing)) {
            return true;
        }

        if ($this->normalizedCertMode($incoming['cert_mode'] ?? '') !== $this->normalizedCertMode($existing['cert_mode'] ?? '')) {
            return true;
        }

        foreach (['cert_file', 'key_file'] as $key) {
            if ($this->normalizedScalar($incoming[$key] ?? '') !== $this->normalizedScalar($existing[$key] ?? '')) {
                return true;
            }
        }

        return false;
    }

    private function effectiveCertTarget(array $params, ServerZicnode $server, array $tlsSettings): string
    {
        $serverName = $this->firstServerName($tlsSettings);
        if ($serverName !== '') {
            return strtolower($serverName);
        }
        return strtolower($this->normalizedScalar($params['host'] ?? $server->getAttribute('host')));
    }

    private function firstServerName(array $tlsSettings): string
    {
        if (!empty($tlsSettings['server_names']) && is_array($tlsSettings['server_names'])) {
            foreach ($tlsSettings['server_names'] as $serverName) {
                $serverName = $this->normalizedScalar($serverName);
                if ($serverName !== '') {
                    return $serverName;
                }
            }
        }
        return $this->normalizedScalar($tlsSettings['server_name'] ?? $tlsSettings['serverName'] ?? '');
    }

    private function normalizedCertMode($value): string
    {
        $mode = strtolower($this->normalizedScalar($value));
        return $mode === '' ? 'auto' : $mode;
    }

    private function normalizedScalar($value): string
    {
        if (is_array($value)) {
            return trim(json_encode($value, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
        }
        return trim((string)$value);
    }

    public function drop(Request $request)
    {
        $server = ServerZicnode::find($request->input('id'));
        if (!$server) {
            abort(500, 'Node không tồn tại');
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

        $server = ServerZicnode::find($request->input('id'));
        if (!$server) {
            abort(500, 'Máy chủ không tồn tại');
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
        $server = ServerZicnode::find($request->input('id'));
        if (!$server) {
            abort(500, 'Máy chủ không tồn tại');
        }
        $server->show = 0;
        if (!ServerZicnode::create($server->toArray())) {
            abort(500, 'Sao chép thất bại');
        }

        return response([
            'data' => true
        ]);
    }
}
