<?php

namespace App\Utils;

class CacheKey
{
    const KEYS = [
        'EMAIL_VERIFY_CODE' => 'Email verification code',
        'LAST_SEND_EMAIL_VERIFY_TIMESTAMP' => 'Last email verification send time',
        'SERVER_VMESS_ONLINE_USER' => 'VMess online users',
        'SERVER_VMESS_LAST_CHECK_AT' => 'VMess last check time',
        'SERVER_VMESS_LAST_PUSH_AT' => 'VMess last push time',
        'SERVER_TROJAN_ONLINE_USER' => 'Trojan online users',
        'SERVER_TROJAN_LAST_CHECK_AT' => 'Trojan last check time',
        'SERVER_TROJAN_LAST_PUSH_AT' => 'Trojan last push time',
        'SERVER_SHADOWSOCKS_ONLINE_USER' => 'Shadowsocks online users',
        'SERVER_SHADOWSOCKS_LAST_CHECK_AT' => 'Shadowsocks last check time',
        'SERVER_SHADOWSOCKS_LAST_PUSH_AT' => 'Shadowsocks last push time',
        'SERVER_HYSTERIA_ONLINE_USER' => 'Hysteria online users',
        'SERVER_HYSTERIA_LAST_CHECK_AT' => 'Hysteria last check time',
        'SERVER_HYSTERIA_LAST_PUSH_AT' => 'Hysteria last push time',
        'SERVER_TUIC_ONLINE_USER' => 'TUIC online users',
        'SERVER_TUIC_LAST_CHECK_AT' => 'TUIC last check time',
        'SERVER_TUIC_LAST_PUSH_AT' => 'TUIC last push time',
        'SERVER_VLESS_ONLINE_USER' => 'VLESS online users',
        'SERVER_VLESS_LAST_CHECK_AT' => 'VLESS last check time',
        'SERVER_VLESS_LAST_PUSH_AT' => 'VLESS last push time',
        'SERVER_ANYTLS_ONLINE_USER' => 'AnyTLS online users',
        'SERVER_ANYTLS_LAST_CHECK_AT' => 'AnyTLS last check time',
        'SERVER_ANYTLS_LAST_PUSH_AT' => 'AnyTLS last push time',
        'SERVER_ZICNODE_ONLINE_USER' => 'ZicNode online users',
        'SERVER_ZICNODE_LAST_CHECK_AT' => 'ZicNode last check time',
        'SERVER_ZICNODE_LAST_PUSH_AT' => 'ZicNode last push time',
        'SERVER_V2NODE_ONLINE_USER' => 'Legacy v2node online users',
        'SERVER_V2NODE_LAST_CHECK_AT' => 'Legacy v2node last check time',
        'SERVER_V2NODE_LAST_PUSH_AT' => 'Legacy v2node last push time',
        'TEMP_TOKEN' => 'Temporary token',
        'LAST_SEND_EMAIL_REMIND_TRAFFIC' => 'Last traffic reminder email send time',
        'SCHEDULE_LAST_CHECK_AT' => 'Schedule last check time',
        'REGISTER_IP_RATE_LIMIT' => 'Register IP rate limit',
        'LAST_SEND_LOGIN_WITH_MAIL_LINK_TIMESTAMP' => 'Last mail login link send time',
        'PASSWORD_ERROR_LIMIT' => 'Password error limit',
        'USER_SESSIONS' => 'User sessions',
        'FORGET_REQUEST_LIMIT' => 'Password reset request limit'
    ];

    public static function get(string $key, $uniqueValue)
    {
        if (!in_array($key, array_keys(self::KEYS))) {
            abort(500, 'Khóa không nằm trong danh sách cache key');
        }
        return $key . '_' . $uniqueValue;
    }
}
