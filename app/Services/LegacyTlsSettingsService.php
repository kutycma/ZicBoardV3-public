<?php

namespace App\Services;

class LegacyTlsSettingsService
{
    private const TLS_NODE_TYPES = ['zicnode', 'vmess', 'vless', 'trojan', 'hysteria', 'tuic', 'anytls'];
    private const ALWAYS_TLS_NODE_TYPES = ['trojan', 'hysteria', 'tuic', 'anytls'];

    public static function normalizeType($type): string
    {
        $type = strtolower(trim((string)$type));
        if ($type === 'v2ray') return 'vmess';
        if ($type === 'v2node') return 'zicnode';
        if ($type === 'hysteria2') return 'hysteria';
        return $type;
    }

    public static function supportsCertReport($type): bool
    {
        return in_array(self::normalizeType($type), self::TLS_NODE_TYPES, true);
    }

    public static function fieldName($type): string
    {
        return self::normalizeType($type) === 'vmess' ? 'tlsSettings' : 'tls_settings';
    }

    public static function nodeUsesNormalTls($type, $server): bool
    {
        $type = self::normalizeType($type);
        if (in_array($type, self::ALWAYS_TLS_NODE_TYPES, true)) {
            return true;
        }
        if (in_array($type, ['zicnode', 'vmess', 'vless'], true)) {
            return (int)self::value($server, 'tls', 0) === 1;
        }
        return false;
    }

    public static function settingsFromServer($type, $server): array
    {
        $field = self::fieldName($type);
        $settings = self::toObjectArray(self::value($server, $field, null));
        if (!$settings) {
            $fallbackField = $field === 'tlsSettings' ? 'tls_settings' : 'tlsSettings';
            $settings = self::toObjectArray(self::value($server, $fallbackField, null));
        }
        return $settings;
    }

    public static function attachToUniProxyResponse($type, $server, array $response): array
    {
        if (!self::nodeUsesNormalTls($type, $server)) {
            return $response;
        }

        $type = self::normalizeType($type);
        $settings = self::withGlobalAutoDefaults($type, $server, self::settingsFromServer($type, $server));
        $settings = self::normalizeForStorage($settings);

        if ($type === 'vmess') {
            $response['tlsSettings'] = $settings ?: (object)[];
        } else {
            $response['tls_settings'] = $settings ?: (object)[];
        }

        return $response;
    }

    public static function prepareParamsForSave($type, array $params, $server = null): array
    {
        $field = self::fieldName($type);
        $fieldPresent = array_key_exists($field, $params);
        if (array_key_exists($field, $params)) {
            $params[$field] = self::normalizeForStorage($params[$field]);
        }

        if ($server === null) {
            return $params;
        }

        if (!$fieldPresent) {
            return $params;
        }

        $existing = self::settingsFromServer($type, $server);
        if (!$existing) {
            return $params;
        }

        $incoming = self::toObjectArray($params[$field] ?? []);
        if (self::incomingEmpty($incoming, 'auto_cert') && !empty($existing['auto_cert']) && !self::autoCertContextChanged($type, $params, $server, $incoming, $existing)) {
            $incoming['auto_cert'] = $existing['auto_cert'];
        }

        $certMode = self::normalizedCertMode($incoming['cert_mode'] ?? $existing['cert_mode'] ?? '');
        if ($certMode === 'dns' && self::incomingEmpty($incoming, 'dns_env') && !empty($existing['dns_env'])) {
            $incoming['dns_env'] = $existing['dns_env'];
        }

        $params[$field] = self::normalizeForStorage($incoming);
        return $params;
    }

    public static function withGlobalAutoDefaults($type, $server, array $settings): array
    {
        if (!self::nodeUsesNormalTls($type, $server)) {
            return $settings;
        }

        if ((int)config('zicboard.zicnode_auto_tls_enable', 1) !== 1) {
            return $settings;
        }

        $certMode = strtolower(trim((string)($settings['cert_mode'] ?? '')));
        if ($certMode !== '') {
            return $settings;
        }

        $settings['cert_mode'] = 'auto';
        $provider = trim((string)config('zicboard.zicnode_auto_tls_dns_provider', ''));
        $dnsEnv = trim((string)config('zicboard.zicnode_auto_tls_dns_env', ''));
        if ($provider !== '') {
            $settings['provider'] = $provider;
        }
        if ($dnsEnv !== '') {
            $settings['dns_env'] = $dnsEnv;
        }
        $settings['self_fallback'] = (int)config('zicboard.zicnode_auto_tls_self_fallback', 1) === 1;

        return $settings;
    }

    public static function toObjectArray($value): array
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

    public static function normalizeForStorage($settings): array
    {
        $settings = self::toObjectArray($settings);
        foreach ($settings as $key => $value) {
            if ($value === '' || $value === null || (is_array($value) && !$value)) {
                unset($settings[$key]);
            }
        }
        return $settings;
    }

    private static function value($source, string $key, $default = null)
    {
        if (is_array($source)) {
            return array_key_exists($key, $source) ? $source[$key] : $default;
        }
        if (is_object($source)) {
            if (method_exists($source, 'getAttribute')) {
                $value = $source->getAttribute($key);
                return $value === null ? $default : $value;
            }
            return property_exists($source, $key) ? $source->{$key} : $default;
        }
        return $default;
    }

    private static function incomingEmpty(array $incoming, string $key): bool
    {
        return !array_key_exists($key, $incoming)
            || $incoming[$key] === ''
            || $incoming[$key] === null
            || (is_array($incoming[$key]) && !$incoming[$key]);
    }

    private static function isListArray(array $value): bool
    {
        if (function_exists('array_is_list')) {
            return array_is_list($value);
        }

        if ($value === []) {
            return true;
        }

        return array_keys($value) === range(0, count($value) - 1);
    }

    private static function autoCertContextChanged($type, array $params, $server, array $incoming, array $existing): bool
    {
        $type = self::normalizeType($type);
        if (in_array($type, ['zicnode', 'vmess', 'vless'], true)) {
            if ((int)($params['tls'] ?? self::value($server, 'tls', 0)) !== 1) {
                return true;
            }
        }

        if (self::effectiveCertTarget($params, $server, $incoming) !== self::effectiveCertTarget([], $server, $existing)) {
            return true;
        }

        if (self::normalizedCertMode($incoming['cert_mode'] ?? '') !== self::normalizedCertMode($existing['cert_mode'] ?? '')) {
            return true;
        }

        foreach (['cert_file', 'key_file'] as $key) {
            if (self::normalizedScalar($incoming[$key] ?? '') !== self::normalizedScalar($existing[$key] ?? '')) {
                return true;
            }
        }

        return false;
    }

    private static function effectiveCertTarget(array $params, $server, array $tlsSettings): string
    {
        $serverName = self::firstServerName($tlsSettings);
        if ($serverName !== '') {
            return strtolower($serverName);
        }
        $topLevelSni = self::normalizedScalar($params['server_name'] ?? self::value($server, 'server_name', ''));
        if ($topLevelSni !== '') {
            return strtolower($topLevelSni);
        }
        return strtolower(self::normalizedScalar($params['host'] ?? self::value($server, 'host', '')));
    }

    private static function firstServerName(array $tlsSettings): string
    {
        foreach (['server_names', 'serverNames'] as $key) {
            if (!empty($tlsSettings[$key]) && is_array($tlsSettings[$key])) {
                foreach ($tlsSettings[$key] as $serverName) {
                    $serverName = self::normalizedScalar($serverName);
                    if ($serverName !== '') {
                        return $serverName;
                    }
                }
            }
        }
        return self::normalizedScalar($tlsSettings['server_name'] ?? $tlsSettings['serverName'] ?? '');
    }

    private static function normalizedCertMode($value): string
    {
        $mode = strtolower(self::normalizedScalar($value));
        return $mode === '' ? 'auto' : $mode;
    }

    private static function normalizedScalar($value): string
    {
        if (is_array($value)) {
            return trim(json_encode($value, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
        }
        return trim((string)$value);
    }
}
