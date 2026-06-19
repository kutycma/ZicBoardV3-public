<?php

namespace App\Support;

use Illuminate\Validation\ValidationException;

class ServerLoadIps
{
    public static function apply(array $params): array
    {
        if (array_key_exists('load_ips', $params)) {
            $params['load_ips'] = self::normalize($params['load_ips']);
        }
        return $params;
    }

    public static function normalize($value): array
    {
        if ($value === null || $value === '' || $value === false) {
            return [];
        }

        if (is_string($value)) {
            $value = preg_split('/[,\r\n]+/', $value);
        }

        if (!is_array($value)) {
            throw ValidationException::withMessages([
                'load_ips' => 'Load IPs khong dung dinh dang.',
            ]);
        }

        $ips = [];
        $seen = [];
        foreach ($value as $ip) {
            if (is_array($ip) || is_object($ip)) {
                throw ValidationException::withMessages([
                    'load_ips' => 'Load IPs chi chap nhan danh sach IP.',
                ]);
            }

            $ip = trim((string)$ip);
            if ($ip === '') {
                continue;
            }

            if (filter_var($ip, FILTER_VALIDATE_IP) === false) {
                throw ValidationException::withMessages([
                    'load_ips' => "Load IP khong hop le: {$ip}",
                ]);
            }

            $key = strtolower($ip);
            if (isset($seen[$key])) {
                continue;
            }

            $seen[$key] = true;
            $ips[] = $ip;
        }

        if (count($ips) > 100) {
            throw ValidationException::withMessages([
                'load_ips' => 'Load IPs toi da 100 IP moi node.',
            ]);
        }

        return $ips;
    }
}