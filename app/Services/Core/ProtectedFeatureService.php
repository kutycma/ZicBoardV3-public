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
        if ($type === 'zicnode') {
            $params = self::normalizeZicnodeConfigShape($params, false);
        }
        if (!self::paramsUseProtected($type, $params)) {
            return $params;
        }
        $result = (new CoreRpcClient())->call('server.prepare', [
            'type' => $type,
            'params' => $params,
        ]);
        if (!is_array($result)) {
            return $params;
        }
        return $type === 'zicnode'
            ? self::normalizeZicnodeConfigShape($result, false)
            : $result;
    }

    public function nodeConfig(string $type, array $node, array $baseConfig, array $routes = null)
    {
        if ($type === 'zicnode') {
            $node = self::normalizeZicnodeConfigShape($node, false);
        }
        $payload = [
            'node_type' => $type,
            'node' => $node,
            'base_config' => $baseConfig,
        ];
        if ($routes !== null) {
            $payload['routes'] = $routes;
        }
        if ($type === 'zicnode') {
            $payload['auto_tls'] = self::zicnodeAutoTLSConfig();
        }
        $result = (new CoreRpcClient())->call('node.config', $payload);
        if (!is_array($result)) {
            return [];
        }
        return $type === 'zicnode'
            ? self::normalizeZicnodeConfigShape($result, true)
            : $result;
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

    public function registerHwidDevice(array $subscription, $hwid, array $devices, array $request): array
    {
        $result = (new CoreRpcClient())->call('device.hwid_register', [
            'subscription' => $subscription,
            'hwid' => $hwid,
            'devices' => array_values($devices),
            'request' => $request,
        ]);
        return is_array($result) ? $result : [];
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
        $blocked = ['private' . '_key', 'ech' . '_key', 'dns' . '_env'];
        return self::redactRecursive($server, $blocked);
    }

    private static function zicnodeAutoTLSConfig(): array
    {
        $enabled = (int)config('zicboard.zicnode_auto_tls_enable', 1) === 1;
        if (!$enabled) {
            return ['enable' => false];
        }

        return [
            'enable' => true,
            'provider' => trim((string)config('zicboard.zicnode_auto_tls_dns_provider', '')),
            'dns_env' => trim((string)config('zicboard.zicnode_auto_tls_dns_env', '')),
            'self_fallback' => (int)config('zicboard.zicnode_auto_tls_self_fallback', 1) === 1,
        ];
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

    private static function normalizeZicnodeConfigShape(array $config, bool $forNodeResponse): array
    {
        foreach (['network_settings', 'tls_settings', 'encryption_settings'] as $field) {
            if (array_key_exists($field, $config)) {
                $config[$field] = self::jsonObjectRoot($config[$field]);
            } else {
                $config[$field] = (object)[];
            }
        }

        if (empty($config['listen_ip'])) {
            $config['listen_ip'] = '0.0.0.0';
        }

        if (empty($config['network']) || !in_array((string)$config['network'], ['tcp', 'ws', 'grpc', 'http', 'httpupgrade', 'xhttp', 'splithttp'], true)) {
            $config['network'] = 'tcp';
        }

        foreach (['server_port', 'tls', 'up_mbps', 'down_mbps'] as $field) {
            if (array_key_exists($field, $config) && $config[$field] !== null && $config[$field] !== '') {
                $config[$field] = (int)$config[$field];
            }
        }

        if (array_key_exists('zero_rtt_handshake', $config)) {
            $config['zero_rtt_handshake'] = $forNodeResponse
                ? self::boolish($config['zero_rtt_handshake'])
                : (int)self::boolish($config['zero_rtt_handshake']);
        }

        return $config;
    }

    private static function jsonObjectRoot($value)
    {
        if ($value instanceof \stdClass) {
            return $value;
        }

        if ($value === null || $value === '' || $value === false) {
            return (object)[];
        }

        if (is_string($value)) {
            $decoded = json_decode($value, true);
            if (json_last_error() === JSON_ERROR_NONE) {
                return self::jsonObjectRoot($decoded);
            }
            return (object)[];
        }

        if (is_array($value)) {
            if (!$value) {
                return (object)[];
            }
            return self::isListArray($value) ? (object)$value : $value;
        }

        return (object)[];
    }

    private static function isListArray(array $value): bool
    {
        if (!$value) {
            return true;
        }
        return array_keys($value) === range(0, count($value) - 1);
    }

    private static function boolish($value): bool
    {
        if (is_bool($value)) {
            return $value;
        }
        if (is_numeric($value)) {
            return (int)$value !== 0;
        }
        $value = strtolower(trim((string)$value));
        return in_array($value, ['1', 'true', 'yes', 'on'], true);
    }
}
