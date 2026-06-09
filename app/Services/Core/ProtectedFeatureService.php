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
        return ProtectedFeaturePolicy::serverUsesProtected($server);
    }

    public static function paramsUseProtected(string $type, array $params)
    {
        return ProtectedFeaturePolicy::paramsUseProtected($type, $params);
    }

    public function prepareServerParams(string $type, array $params)
    {
        if ($type === 'zicnode') {
            $params = self::normalizeZicnodeConfigShape($params, false);
        }
        if (!self::paramsUseProtected($type, $params)) {
            return $params;
        }
        $this->ensureEnabled();
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
        $this->ensureEnabled();
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
        $this->ensureEnabled();
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
        $this->ensureEnabled();
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
        $this->ensureEnabled();
        $result = (new CoreRpcClient())->call('device.node_ids', [
            'device_ids' => array_values(array_map('intval', $deviceIds)),
        ]);
        return is_array($result['node_user_ids'] ?? null) ? $result['node_user_ids'] : [];
    }

    public function resolveVirtualDeviceIds(array $nodeUserIds)
    {
        $this->ensureEnabled();
        $result = (new CoreRpcClient())->call('device.resolve_virtual_ids', [
            'node_user_ids' => array_values($nodeUserIds),
        ]);
        return is_array($result['device_ids'] ?? null) ? $result['device_ids'] : [];
    }

    public function translateTraffic(array $data, array $virtualSubscriptionIdMap)
    {
        $this->ensureEnabled();
        $result = (new CoreRpcClient())->call('device.map_traffic', [
            'data' => $data,
            'virtual_subscription_id_map' => $virtualSubscriptionIdMap,
        ]);
        return is_array($result['data'] ?? null) ? $result['data'] : [];
    }

    public function translateAlive(array $data, array $virtualSubscriptionIdMap)
    {
        $this->ensureEnabled();
        $result = (new CoreRpcClient())->call('device.map_alive', [
            'data' => $data,
            'virtual_subscription_id_map' => $virtualSubscriptionIdMap,
        ]);
        return is_array($result['data'] ?? null) ? $result['data'] : [];
    }

    public function mapOnlineDevices(array $data, string $nodeType, int $nodeId): array
    {
        $this->ensureEnabled();
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
        $blocked = ['private' . '_key', 'ech' . '_key', 'dns' . '_env', 'token', 'account_id', 'device_id'];
        return self::redactRecursive($server, $blocked);
    }

    public static function sanitizeZicnodeTlsSettings(array $config, bool $emptyAsObject = false): array
    {
        $tlsMode = self::effectiveZicnodeTlsMode($config);
        $settings = self::tlsSettingsRootToArray($config['tls_settings'] ?? []);
        if ($tlsMode !== (int)($config['tls'] ?? 0)) {
            $config['tls'] = $tlsMode;
        }

        if ($tlsMode === 0) {
            $config['tls_settings'] = $emptyAsObject ? (object)[] : [];
            return $config;
        }

        unset($settings['cert_email'], $settings['acme_email']);
        if (array_key_exists('allowInsecure', $settings) && !array_key_exists('allow_insecure', $settings)) {
            $settings['allow_insecure'] = $settings['allowInsecure'];
        }
        unset($settings['allowInsecure']);
        if (array_key_exists('allow_insecure', $settings)) {
            $settings['allow_insecure'] = self::boolish($settings['allow_insecure']) ? 1 : 0;
        }

        $realityKeys = [
            'dest',
            'server_port',
            'xver',
            'private' . '_key',
            'public' . '_key',
            'short_id',
            'ech',
            'ech_server_name',
            'ech' . '_key',
            'ech_config',
        ];
        $normalTlsKeys = [
            'cert_mode',
            'provider',
            'dns_env',
            'cert_file',
            'key_file',
            'reject_unknown_sni',
            'auto_cert',
            'allow_insecure',
        ];

        if ($tlsMode === 1) {
            foreach ($realityKeys as $key) {
                unset($settings[$key]);
            }
        } elseif ($tlsMode === 2) {
            foreach ($normalTlsKeys as $key) {
                unset($settings[$key]);
            }
        }

        foreach ($settings as $key => $value) {
            if ($value === '' || $value === null || (is_array($value) && !$value)) {
                unset($settings[$key]);
            }
        }

        $config['tls_settings'] = $settings ?: ($emptyAsObject ? (object)[] : []);
        return $config;
    }

    private static function effectiveZicnodeTlsMode(array $config): int
    {
        return self::normalizeZicnodeTlsModeForProtocol($config['protocol'] ?? '', (int)($config['tls'] ?? 0));
    }

    private static function normalizeZicnodeTlsModeForProtocol($protocol, int $tlsMode): int
    {
        $protocol = strtolower(trim((string)$protocol));
        if ($protocol === '') {
            return $tlsMode;
        }
        if ($protocol === 'shadowsocks') {
            return 0;
        }
        if ($tlsMode === 2) {
            return in_array($protocol, ['vless', 'anytls'], true) ? 2 : 1;
        }
        if (self::zicnodeProtocolUsesNormalTls($protocol)) {
            return 1;
        }
        return $tlsMode;
    }

    private static function zicnodeProtocolUsesNormalTls($protocol): bool
    {
        return in_array(strtolower(trim((string)$protocol)), ['trojan', 'hysteria', 'hysteria2', 'tuic', 'anytls'], true);
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
        foreach (['network_settings', 'tls_settings', 'encryption_settings', 'warp_settings'] as $field) {
            if (array_key_exists($field, $config)) {
                $config[$field] = self::jsonObjectRoot($config[$field]);
            } else {
                $config[$field] = (object)[];
            }
        }

        $config['warp_settings'] = self::sanitizeZicnodeWarpSettings($config['warp_settings'], true);

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

        return self::sanitizeZicnodeTlsSettings($config, true);
    }

    private static function sanitizeZicnodeWarpSettings($value, bool $emptyAsObject = false)
    {
        $settings = self::tlsSettingsRootToArray($value);
        if (!self::boolish($settings['enable'] ?? false)) {
            return $emptyAsObject ? (object)[] : [];
        }

        $settings['enable'] = true;
        $mode = strtolower(trim((string)($settings['mode'] ?? 'auto')));
        $settings['mode'] = in_array($mode, ['auto', 'manual'], true) ? $mode : 'auto';

        $failPolicy = strtolower(trim((string)($settings['fail_policy'] ?? 'direct')));
        $settings['fail_policy'] = in_array($failPolicy, ['direct', 'block'], true) ? $failPolicy : 'direct';

        $mtu = (int)($settings['mtu'] ?? 1280);
        $settings['mtu'] = $mtu > 0 ? $mtu : 1280;

        $domainStrategy = trim((string)($settings['domain_strategy'] ?? 'ForceIPv4v6'));
        $settings['domain_strategy'] = $domainStrategy !== '' ? $domainStrategy : 'ForceIPv4v6';

        foreach (['addresses', 'reserved'] as $key) {
            if (isset($settings[$key]) && is_string($settings[$key])) {
                $settings[$key] = array_values(array_filter(array_map('trim', explode(',', $settings[$key])), 'strlen'));
            }
        }

        foreach ($settings as $key => $child) {
            if ($child === '' || $child === null || (is_array($child) && !$child)) {
                unset($settings[$key]);
            }
        }

        return $settings ?: ($emptyAsObject ? (object)[] : []);
    }

    private static function tlsSettingsRootToArray($value): array
    {
        if ($value instanceof \stdClass) {
            $value = json_decode(json_encode($value), true);
        }

        if (is_string($value)) {
            $decoded = json_decode($value, true);
            $value = json_last_error() === JSON_ERROR_NONE ? $decoded : [];
        }

        if (!is_array($value) || self::isListArray($value)) {
            return [];
        }

        return $value;
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
