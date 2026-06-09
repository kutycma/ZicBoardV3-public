<?php

namespace App\Services\Server;

use App\Services\LegacyTlsSettingsService;
use App\Utils\Helper;

class NodeConfigBuilder
{
    public function build(string $nodeType, $nodeInfo, array $baseConfig, array $routes = null): array
    {
        $nodeType = LegacyTlsSettingsService::normalizeType($nodeType);
        $response = $this->buildNodeConfig($nodeType, $nodeInfo);
        $response = LegacyTlsSettingsService::attachToUniProxyResponse($nodeType, $nodeInfo, $response);
        $response['base_config'] = $baseConfig;
        if ($routes !== null) {
            $response['routes'] = $routes;
        }
        return $response;
    }

    private function buildNodeConfig(string $nodeType, $nodeInfo): array
    {
        switch ($nodeType) {
            case 'shadowsocks':
                return $this->shadowsocks($nodeInfo);
            case 'vmess':
                return $this->vmess($nodeInfo);
            case 'vless':
                return $this->vless($nodeInfo);
            case 'trojan':
                return $this->trojan($nodeInfo);
            case 'tuic':
                return $this->tuic($nodeInfo);
            case 'hysteria':
                return $this->hysteria($nodeInfo);
            case 'zicnode':
                return $this->zicnode($nodeInfo);
            default:
                return [];
        }
    }

    private function shadowsocks($nodeInfo): array
    {
        $response = [
            'server_port' => $nodeInfo->server_port,
            'cipher' => $nodeInfo->cipher,
            'obfs' => $nodeInfo->obfs,
            'obfs_settings' => $nodeInfo->obfs_settings,
        ];
        if ($nodeInfo->cipher === '2022-blake3-aes-128-gcm') {
            $response['server_key'] = Helper::getServerKey($nodeInfo->created_at, 16);
        }
        if ($nodeInfo->cipher === '2022-blake3-aes-256-gcm') {
            $response['server_key'] = Helper::getServerKey($nodeInfo->created_at, 32);
        }
        return $response;
    }

    private function vmess($nodeInfo): array
    {
        return [
            'server_port' => $nodeInfo->server_port,
            'network' => $nodeInfo->network,
            'networkSettings' => $nodeInfo->networkSettings,
            'tls' => $nodeInfo->tls,
        ];
    }

    private function vless($nodeInfo): array
    {
        $response = [
            'server_port' => $nodeInfo->server_port,
            'network' => $nodeInfo->network,
            'networkSettings' => $nodeInfo->network_settings,
            'tls' => $nodeInfo->tls,
            'flow' => $nodeInfo->flow,
        ];
        if ((int)$nodeInfo->tls === 1) {
            $response['tls_settings'] = $nodeInfo->tls_settings;
        }
        return $response;
    }

    private function trojan($nodeInfo): array
    {
        return [
            'host' => $nodeInfo->host,
            'network' => $nodeInfo->network,
            'networkSettings' => $nodeInfo->network_settings,
            'server_port' => $nodeInfo->server_port,
            'server_name' => $nodeInfo->server_name,
        ];
    }

    private function tuic($nodeInfo): array
    {
        return [
            'server_port' => $nodeInfo->server_port,
            'server_name' => $nodeInfo->server_name,
            'congestion_control' => $nodeInfo->congestion_control,
            'zero_rtt_handshake' => $nodeInfo->zero_rtt_handshake ? true : false,
        ];
    }

    private function hysteria($nodeInfo): array
    {
        $response = [
            'version' => $nodeInfo->version,
            'host' => $nodeInfo->host,
            'server_port' => $nodeInfo->server_port,
            'server_name' => $nodeInfo->server_name,
            'up_mbps' => $nodeInfo->up_mbps,
            'down_mbps' => $nodeInfo->down_mbps,
        ];
        if ($nodeInfo->version == 1) {
            $response['obfs'] = $nodeInfo->obfs_password ?? null;
        } elseif ($nodeInfo->version == 2) {
            $response['ignore_client_bandwidth'] = $nodeInfo->up_mbps == 0 && $nodeInfo->down_mbps == 0;
            $response['obfs'] = $nodeInfo->obfs ?? null;
            $response['obfs-password'] = $nodeInfo->obfs_password ?? null;
        }
        return $response;
    }

    private function zicnode($nodeInfo): array
    {
        $node = $nodeInfo->toArray();
        foreach (['network_settings', 'tls_settings', 'encryption_settings', 'warp_settings'] as $field) {
            $node[$field] = $this->jsonObjectRoot($node[$field] ?? null);
        }
        if (empty($node['listen_ip'])) {
            $node['listen_ip'] = '0.0.0.0';
        }
        return $node;
    }

    private function jsonObjectRoot($value)
    {
        if ($value instanceof \stdClass) {
            return $value;
        }
        if ($value === null || $value === '' || $value === false) {
            return (object)[];
        }
        if (is_string($value)) {
            $decoded = json_decode($value, true);
            return json_last_error() === JSON_ERROR_NONE ? $this->jsonObjectRoot($decoded) : (object)[];
        }
        if (is_array($value)) {
            if (!$value) {
                return (object)[];
            }
            return array_keys($value) === range(0, count($value) - 1) ? (object)$value : $value;
        }
        return (object)[];
    }
}
