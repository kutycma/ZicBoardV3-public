<?php

namespace App\Services\Core;

class ProtectedFeaturePolicy
{
    public static function serverUsesProtected($server): bool
    {
        $type = self::value($server, 'type');
        return self::paramsUseProtected((string)$type, self::toArray($server));
    }

    public static function paramsUseProtected(string $type, array $params): bool
    {
        $type = strtolower(trim($type));
        if ($type === 'v2node') {
            $type = 'zicnode';
        }

        if ($type === 'anytls') {
            return true;
        }

        if (!in_array($type, ['vless', 'zicnode'], true)) {
            return false;
        }

        $protocol = strtolower(trim((string)($params['protocol'] ?? '')));
        if ($type === 'zicnode' && $protocol === 'anytls') {
            return true;
        }

        $tls = self::objectArray($params['tls_settings'] ?? []);
        $encryptionSettings = self::objectArray($params['encryption_settings'] ?? []);

        return (int)($params['tls'] ?? 0) === 2
            || ($params['network'] ?? null) === 'xhttp'
            || !empty($params['encryption'])
            || !empty($encryptionSettings)
            || !empty($tls['ech'])
            || !empty($tls['ech' . '_key'])
            || !empty($tls['private_key']);
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

    private static function toArray($value): array
    {
        if (is_array($value)) {
            return $value;
        }
        if (is_object($value)) {
            if (method_exists($value, 'toArray')) {
                return $value->toArray();
            }
            return json_decode(json_encode($value), true) ?: [];
        }
        return [];
    }

    private static function objectArray($value): array
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

    private static function isListArray(array $value): bool
    {
        if (!$value) {
            return true;
        }
        return array_keys($value) === range(0, count($value) - 1);
    }
}
