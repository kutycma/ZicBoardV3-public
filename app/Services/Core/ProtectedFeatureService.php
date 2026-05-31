<?php

namespace App\Services\Core;

class ProtectedFeatureService
{
    public function ensureEnabled()
    {
        (new ProtectedLicenseGate())->assertEnabled();
    }

    public static function serverUsesProtected($server)
    {
        $type = is_array($server) ? ($server['type'] ?? null) : ($server->type ?? null);
        if (in_array($type, ['zicnode', 'anytls'], true)) {
            return true;
        }
        if ($type !== 'vless') {
            return false;
        }

        $network = is_array($server) ? ($server['network'] ?? null) : ($server->network ?? null);
        $encryption = is_array($server) ? ($server['encryption'] ?? null) : ($server->encryption ?? null);
        $tlsMode = is_array($server) ? ($server['tls'] ?? 0) : ($server->tls ?? 0);
        $tls = is_array($server) ? ($server['tls_settings'] ?? []) : ($server->tls_settings ?? []);
        $tls = is_array($tls) ? $tls : [];

        return (int)$tlsMode === 2
            || $network === 'xhttp'
            || !empty($encryption)
            || !empty($tls['ech']);
    }

    public static function paramsUseProtected(string $type, array $params)
    {
        if (in_array($type, ['zicnode', 'anytls'], true)) {
            return true;
        }
        if ($type !== 'vless') {
            return false;
        }
        $tls = is_array($params['tls_settings'] ?? null) ? $params['tls_settings'] : [];
        return (int)($params['tls'] ?? 0) === 2
            || ($params['network'] ?? null) === 'xhttp'
            || !empty($params['encryption'])
            || !empty($tls['ech']);
    }

    public function prepareServerParams(string $type, array $params)
    {
        if (!self::paramsUseProtected($type, $params)) {
            return $params;
        }
        $result = (new CoreRpcClient())->call('server.prepare', [
            'type' => $type,
            'params' => $params,
        ]);
        return is_array($result) ? $result : $params;
    }

    public function nodeConfig(string $type, array $node, array $baseConfig, array $routes = null)
    {
        $payload = [
            'node_type' => $type,
            'node' => $node,
            'base_config' => $baseConfig,
        ];
        if ($routes !== null) {
            $payload['routes'] = $routes;
        }
        $result = (new CoreRpcClient())->call('node.config', $payload);
        return is_array($result) ? $result : [];
    }

    public function protectedEncryption(array $server)
    {
        if (empty($server['encryption']) || empty($server['encryption_settings']) || !is_array($server['encryption_settings'])) {
            return null;
        }
        $result = (new CoreRpcClient())->call('subscription.encryption', [
            'server' => $server,
        ]);
        return is_array($result) && !empty($result['value']) ? (string)$result['value'] : null;
    }

    public function happSubscribeUrl(string $url)
    {
        $this->ensureEnabled();

        $result = (new CoreRpcClient())->call('subscription.happ_encrypt', [
            'url' => $url,
        ]);
        return is_array($result) && !empty($result['url']) ? (string)$result['url'] : null;
    }

    public function nodeIdsForDeviceSlots(array $deviceIds)
    {
        $result = (new CoreRpcClient())->call('device.node_ids', [
            'device_ids' => array_values(array_map('intval', $deviceIds)),
        ]);
        return is_array($result['node_user_ids'] ?? null) ? $result['node_user_ids'] : [];
    }

    public function resolveVirtualDeviceIds(array $nodeUserIds)
    {
        $result = (new CoreRpcClient())->call('device.resolve_virtual_ids', [
            'node_user_ids' => array_values($nodeUserIds),
        ]);
        return is_array($result['device_ids'] ?? null) ? $result['device_ids'] : [];
    }

    public function translateTraffic(array $data, array $virtualSubscriptionIdMap)
    {
        $result = (new CoreRpcClient())->call('device.map_traffic', [
            'data' => $data,
            'virtual_subscription_id_map' => $virtualSubscriptionIdMap,
        ]);
        return is_array($result['data'] ?? null) ? $result['data'] : [];
    }

    public function translateAlive(array $data, array $virtualSubscriptionIdMap)
    {
        $result = (new CoreRpcClient())->call('device.map_alive', [
            'data' => $data,
            'virtual_subscription_id_map' => $virtualSubscriptionIdMap,
        ]);
        return is_array($result['data'] ?? null) ? $result['data'] : [];
    }

    public function mapOnlineDevices(array $data, string $nodeType, int $nodeId): array
    {
        $result = (new CoreRpcClient())->call('device.map_online_devices', [
            'data' => $data,
            'node_type' => $nodeType,
            'node_id' => $nodeId,
            'now' => time(),
        ]);
        return is_array($result['data'] ?? null) ? $result['data'] : [];
    }

    public static function redactServerSecrets(array $server)
    {
        $blocked = ['private' . '_key', 'ech' . '_key'];
        return self::redactRecursive($server, $blocked);
    }

    private static function redactRecursive(array $value, array $blocked)
    {
        foreach ($value as $key => $child) {
            if (in_array((string)$key, $blocked, true)) {
                unset($value[$key]);
                continue;
            }
            if (is_array($child)) {
                $value[$key] = self::redactRecursive($child, $blocked);
            }
        }
        return $value;
    }
}
