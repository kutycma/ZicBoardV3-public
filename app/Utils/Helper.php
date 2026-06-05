<?php

namespace App\Utils;
use App\Services\HappSubscribeCacheService;
use App\Services\Core\ProtectedFeatureService;
use App\Models\User;
use App\Models\UserSubscription;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class Helper
{
    public static function uuidToBase64($uuid, $length)
    {
        return base64_encode(substr($uuid, 0, $length));
    }

    public static function getServerKey($timestamp, $length)
    {
        return base64_encode(substr(md5($timestamp), 0, $length));
    }

    public static function guid($format = false)
    {
        if (function_exists('com_create_guid') === true) {
            return md5(trim(com_create_guid(), '{}'));
        }
        $data = openssl_random_pseudo_bytes(16);
        $data[6] = chr(ord($data[6]) & 0x0f | 0x40); // set version to 0100
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80); // set bits 6-7 to 10
        if ($format) {
            return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
        }
        return md5(vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4)) . '-' . time());
    }

    public static function generateOrderNo(): string
    {
        $randomChar = mt_rand(10000, 99999);
        return date('YmdHms') . substr(microtime(), 2, 6) . $randomChar;
    }

    public static function exchange($from, $to)
    {
        $result = file_get_contents('https://api.exchangerate.host/latest?symbols=' . $to . '&base=' . $from);
        $result = json_decode($result, true);
        return $result['rates'][$to];
    }

    public static function randomChar($len, $special = false)
    {
        $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        if ($special) {
            $chars .= '!@#$?|{/:%^&*()-_[]}<>=+,.';
        }
        
        $str = '';
        $max = strlen($chars) - 1;
        for ($i = 0; $i < $len; $i++) {
            $str .= $chars[random_int(0, $max)];
        }
        return $str;
    }

    public static function multiPasswordVerify($algo, $salt, $password, $hash)
    {
        switch($algo) {
            case 'md5': return md5($password) === $hash;
            case 'sha256': return hash('sha256', $password) === $hash;
            case 'md5salt': return md5($password . $salt) === $hash;
            default: return password_verify($password, $hash);
        }
    }

    public static function emailSuffixVerify($email, $suffixs)
    {
        $suffix = preg_split('/@/', $email)[1];
        if (!$suffix) return false;
        if (!is_array($suffixs)) {
            $suffixs = preg_split('/,/', $suffixs);
        }
        if (!in_array($suffix, $suffixs)) return false;
        return true;
    }

    public static function trafficConvert(int $byte)
    {
        $kb = 1024;
        $mb = 1048576;
        $gb = 1073741824;
        if ($byte > $gb) {
            return round($byte / $gb, 2) . ' GB';
        } else if ($byte > $mb) {
            return round($byte / $mb, 2) . ' MB';
        } else if ($byte > $kb) {
            return round($byte / $kb, 2) . ' KB';
        } else if ($byte < 0) {
            return 0;
        } else {
            return round($byte, 2) . ' B';
        }
    }

    public static function getSubscribeUrl($token)
    {
        $result = self::getSubscribeUrlDetail($token);
        return $result['url'];
    }

    public static function getSubscribeUrlDetail($token)
    {
        $token = (string)$token;
        if ($token === '') {
            return [
                'url' => null,
                'error' => 'missing_subscription',
                'protected' => false
            ];
        }

        $subscription = (new \App\Services\SubscriptionService())->findByToken($token);
        if (!$subscription) {
            return [
                'url' => null,
                'error' => 'missing_subscription',
                'protected' => false
            ];
        }

        $url = self::rawSubscribeUrl($subscription->token);
        if ($url === null) {
            return [
                'url' => null,
                'error' => 'missing_subscription',
                'protected' => false
            ];
        }

        return self::happProtectedSubscribeUrl($url);
    }

    private static function rawSubscribeUrl($token)
    {
        $submethod = (int)config('zicboard.show_subscribe_method', 0);
        $path = config('zicboard.subscribe_path', '/api/v3/client/subscribe');
        if (empty($path)) {
            $path = '/api/v3/client/subscribe';
        } 
        $subscribeUrls = explode(',', config('zicboard.subscribe_url'));
        $subscribeUrl = $subscribeUrls[rand(0, count($subscribeUrls) - 1)];
        switch ($submethod) {
            case 0:
                $path = "{$path}?token={$token}";
                if ($subscribeUrl) return $subscribeUrl . $path;
                return url($path);
                break;
            case 1:
                $newtoken = Cache::get("otp_{$token}");
                if (!$newtoken) {
                    $newtoken = self::base64EncodeUrlSafe(random_bytes(24));
                    $added = Cache::add("otp_{$token}", $newtoken, 86400);
                    if ($added) {
                        Cache::put("otpn_{$newtoken}", $token, 86400);
                    } else {
                        $newtoken = Cache::get("otp_{$token}");
                    }
                }
                $path = "{$path}?token={$newtoken}";
                if ($subscribeUrl) return $subscribeUrl . $path;
                return url($path);
                break;
            case 2:
                $timestep = (int)config('zicboard.show_subscribe_expire', 5) * 60;
                $counter = floor(time() / $timestep);
                $counterBytes = pack('N*', 0) . pack('N*', $counter);
                $hash = hash_hmac('sha1', $counterBytes, $token, false);
                $subscription = UserSubscription::where('token', $token)->select('id')->first();
                if (!$subscription) {
                    $user = User::where('token', $token)->select('id')->first();
                    $subscription = $user ? (new \App\Services\SubscriptionService())->getPrimaryForUser($user) : null;
                }
                if (!$subscription) {
                    return null;
                }
                $newtoken = self::base64EncodeUrlSafe("{$subscription->id}:{$hash}");

                $path = "{$path}?token={$newtoken}";
                if ($subscribeUrl) return $subscribeUrl . $path;
                return url($path);
                break;
        }
    }

    private static function happProtectedSubscribeUrl(string $url)
    {
        if (!self::isHappSubscribeEncryptEnabled()) {
            return [
                'url' => $url,
                'error' => null,
                'protected' => false
            ];
        }

        try {
            $protectedUrl = (new HappSubscribeCacheService())->get($url);
            if ($protectedUrl === null) {
                return [
                    'url' => null,
                    'error' => 'happ_unavailable',
                    'protected' => false
                ];
            }

            return [
                'url' => $protectedUrl,
                'error' => null,
                'protected' => true
            ];
        } catch (\Throwable $exception) {
            Log::warning('Failed to get cached Happ subscribe URL.', [
                'error' => $exception->getMessage(),
            ]);
            return [
                'url' => null,
                'error' => 'happ_unavailable',
                'protected' => false
            ];
        }
    }

    public static function randomPort($range) {
        $portRange = explode('-', $range);
        return rand($portRange[0], $portRange[1]);
    }

    public static function base64EncodeUrlSafe($data)
    {
        $encoded = base64_encode($data);
        return str_replace(['+', '/', '='], ['-', '_', ''], $encoded);
    }

    public static function base64DecodeUrlSafe($data)
    {
        $b64 = str_replace(['-', '_'], ['+', '/'], $data);
        $pad = 4 - (strlen($b64) % 4);
        if ($pad < 4) {
            $b64 .= str_repeat('=', $pad);
        }
        return base64_decode($b64);
    }

    public static function isHappSubscribeEncryptEnabled(): bool
    {
        $value = config('zicboard.happ_subscribe_encrypt_enable', null);
        if ($value === null) {
            $value = config('zicboard.device_hwid_enable', 0);
        }

        return (int)$value === 1;
    }

    public static function encodeURIComponent($str) {
        $revert = array('%21'=>'!', '%2A'=>'*', '%27'=>"'", '%28'=>'(', '%29'=>')');
        return strtr(rawurlencode($str), $revert);
    }

    public static function buildUri($uuid, $server)
    {
        if (in_array($server['type'], ['zicnode', 'v2node'])) {
            $server['type'] = $server['protocol'];
        } 
        $method = "build" . ucfirst($server['type']) . "Uri";

        if (method_exists(self::class, $method)) {
            return self::$method($uuid, $server);
        }

        return '';
    }

    public static function buildUriString($scheme, $auth, $server, $name, $params = [])
    {
        $host = self::formatHost($server['host']);
        $port = $server['port'];
        $query = http_build_query($params);

        return "{$scheme}://{$auth}@{$host}:{$port}?{$query}#{$name}\r\n";
    }

    private static function firstTlsSetting($settings, array $keys, $default = '')
    {
        if (!is_array($settings)) {
            return $default;
        }
        foreach ($keys as $key) {
            if (isset($settings[$key]) && $settings[$key] !== '') {
                return $settings[$key];
            }
        }
        return $default;
    }

    private static function boolish($value): bool
    {
        if (is_bool($value)) {
            return $value;
        }
        if (is_numeric($value)) {
            return (int)$value === 1;
        }
        return in_array(strtolower(trim((string)$value)), ['1', 'true', 'yes', 'on'], true);
    }

    private static function addTlsPinParams(array &$config, array $tlsSettings, string $defaultVerifyName = '', string $connectionHost = ''): bool
    {
        $pinned = trim((string)self::firstTlsSetting($tlsSettings, ['pinnedPeerCertSha256', 'pinned_peer_cert_sha256', 'pcs']));
        if ($pinned !== '') {
            $config['pinnedPeerCertSha256'] = $pinned;
            $config['pcs'] = $pinned;
        }

        $verifyName = trim((string)self::firstTlsSetting($tlsSettings, ['verifyPeerCertByName', 'verify_peer_cert_by_name', 'vcn']));
        $defaultVerifyName = trim($defaultVerifyName);
        $connectionHost = self::normalizeHostForCompare($connectionHost);
        if (
            $pinned !== ''
            && $defaultVerifyName !== ''
            && (
                $verifyName === ''
                || (
                    $connectionHost !== ''
                    && self::normalizeHostForCompare($verifyName) === $connectionHost
                    && self::normalizeHostForCompare($defaultVerifyName) !== $connectionHost
                )
            )
        ) {
            $verifyName = $defaultVerifyName;
        }
        if ($verifyName !== '') {
            $config['verifyPeerCertByName'] = $verifyName;
            $config['vcn'] = $verifyName;
        }

        return $pinned !== '';
    }

    private static function addTlsClientTrustParams(array &$config, array $tlsSettings, string $defaultVerifyName = '', string $connectionHost = ''): bool
    {
        $autoCert = self::autoCertMetadata($tlsSettings);
        if (self::isSelfSignedAutoCert($autoCert) && !empty($autoCert['sha256'])) {
            $tlsSettings['pinnedPeerCertSha256'] = $autoCert['sha256'];
            if (empty($tlsSettings['verifyPeerCertByName']) && empty($tlsSettings['verify_peer_cert_by_name']) && empty($tlsSettings['vcn'])) {
                $tlsSettings['verifyPeerCertByName'] = self::autoCertVerifyName($autoCert, $defaultVerifyName, $connectionHost);
            }
        }

        return self::addTlsPinParams($config, $tlsSettings, $defaultVerifyName, $connectionHost);
    }

    private static function shouldSuppressLegacyInsecure(array $tlsSettings): bool
    {
        $autoCert = self::autoCertMetadata($tlsSettings);
        if (!$autoCert) {
            return false;
        }
        if (strtolower(trim((string)($autoCert['status'] ?? ''))) === 'error') {
            return false;
        }
        $source = strtolower(trim((string)($autoCert['source'] ?? '')));
        return in_array($source, ['acme_dns', 'acme_http', 'acme_ip', 'self', 'self_signed', 'fallback_self', 'self_fallback'], true);
    }

    private static function autoCertMetadata(array $tlsSettings): array
    {
        $autoCert = $tlsSettings['auto_cert'] ?? [];
        return is_array($autoCert) ? $autoCert : [];
    }

    private static function isSelfSignedAutoCert(array $autoCert): bool
    {
        $source = strtolower(trim((string)($autoCert['source'] ?? '')));
        $mode = strtolower(trim((string)($autoCert['mode'] ?? '')));
        return in_array($source, ['self', 'self_signed', 'fallback_self', 'self_fallback'], true)
            || in_array($mode, ['self', 'self_signed'], true);
    }

    private static function autoCertVerifyName(array $autoCert, string $defaultVerifyName, string $connectionHost): string
    {
        $defaultVerifyName = trim($defaultVerifyName);
        if ($defaultVerifyName !== '') {
            return $defaultVerifyName;
        }
        $target = trim((string)($autoCert['target'] ?? ''));
        if ($target !== '') {
            return $target;
        }
        return trim($connectionHost);
    }

    private static function normalizeHostForCompare(string $host): string
    {
        $host = trim($host);
        if ($host === '') {
            return '';
        }
        if (($parsed = parse_url($host)) && !empty($parsed['host'])) {
            $host = $parsed['host'];
        }
        $host = trim($host, '[]');
        if (strpos($host, ':') !== false && substr_count($host, ':') === 1) {
            [$host] = explode(':', $host, 2);
        }
        return strtolower(trim($host));
    }

    public static function formatHost($host)
    {
        return filter_var($host, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6) ? "[$host]" : $host;
    }

    public static function buildShadowsocksUri($uuid, $server)
    {
        $cipher = $server['cipher'];
        if (strpos($cipher, '2022-blake3') !== false) {
            $length = $cipher === '2022-blake3-aes-128-gcm' ? 16 : 32;
            $serverKey = Helper::getServerKey($server['created_at'], $length);
            $userKey = Helper::uuidToBase64($uuid, $length);
            $password = "{$serverKey}:{$userKey}";
        } else {
            $password = $uuid;
        }
        $name = rawurlencode($server['name']);
        $str = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode("{$cipher}:{$password}"));
        $add = self::formatHost($server['host']);
        $uri = "ss://{$str}@{$add}:{$server['port']}";
        if ($server['obfs'] == 'http') {
            $uri .= "?plugin=obfs-local;obfs=http;obfs-host={$server['obfs-host']};path={$server['obfs-path']}";
        } else if ((($server['network'] ?? null) == 'http') && isset($server['network_settings']['Host'])) {
            $path = $server['network_settings']['path'] ?? '/';
            $uri .= "?plugin=obfs-local;obfs=tls;obfs-host={$server['network_settings']['Host']};path={$path}";
        }
        return $uri."#{$name}\r\n";
    }

    public static function buildVmessUri($uuid, $server)
    {
        $config = [
            "v" => "2",
            "ps" => $server['name'],
            "add" => self::formatHost($server['host']),
            "port" => (string)$server['port'],
            "id" => $uuid,
            "aid" => '0',
            "scy" => 'auto',
            "net" => $server['network'],
            "type" => 'none',
            "host" => '',
            "path" => '',
            "tls" => $server['tls'] ? "tls" : "",
            "fp" => 'chrome',
        ];

        if ($server['tls']) {
            $tlsSettings = $server['tls_settings'] ?? $server['tlsSettings'] ?? [];
            $sni = trim((string)self::firstTlsSetting($tlsSettings, ['server_name', 'serverName'], ''));
            $config['sni'] = $sni;
            $hasPinnedCert = self::addTlsClientTrustParams($config, $tlsSettings, $sni, (string)($server['host'] ?? ''));
            if (!$hasPinnedCert && !self::shouldSuppressLegacyInsecure($tlsSettings) && self::boolish(self::firstTlsSetting($tlsSettings, ['allow_insecure', 'allowInsecure'], 0))) {
                $config['allowInsecure'] = 1;
            }
        }
        
        $network = (string)$server['network'];
        $networkSettings = $server['networkSettings'] ?? ($server['network_settings'] ?? []);
    
        switch ($network) {
            case 'tcp':
                if (!empty($networkSettings['header']['type']) && $networkSettings['header']['type'] === 'http') {
                    $config['type'] = $networkSettings['header']['type'];
                    $config['host'] = $networkSettings['header']['request']['headers']['Host'][0] ?? null;
                    $config['path'] = $networkSettings['header']['request']['path'][0] ?? null;
                }
                break;
    
            case 'ws':
                $config['path'] = $networkSettings['path'] ?? null;
                $config['host'] = $networkSettings['headers']['Host'] ?? null;
                isset($networkSettings['security']) && $config['scy'] = $networkSettings['security'];
                break;
    
            case 'grpc':
                $config['path'] = $networkSettings['serviceName'] ?? null;
                break;

            case 'kcp':
                if (isset($networkSettings['seed'])) {
                    $config['path'] = $networkSettings['seed'];
                }
                $config['type'] = $networkSettings['header']['type'] ?? 'none';
                break;

            case 'httpupgrade':
                $config['path'] = $networkSettings['path'] ?? null;
                $config['host'] = $networkSettings['host'] ?? null;
                break;
            
            case 'xhttp':
                $config['path'] = $networkSettings['path'] ?? null;
                $config['host'] = $networkSettings['host'] ?? null;
                $config['mode'] = $networkSettings['mode'] ?? 'auto';
                $config['extra'] = isset($networkSettings['extra']) ? json_encode($networkSettings['extra'], JSON_UNESCAPED_SLASHES) : null;
                break;
        }

        return "vmess://" . base64_encode(json_encode($config)) . "\r\n";
    }

    public static function buildVlessUri($uuid, $server)
    {
        $name = self::encodeURIComponent($server['name']);
        $tlsSettings = $server['tls_settings'] ?? [];

        $config = [
            "type" => $server['network'],
            "encryption" => "none",
            "host" => "",
            "path" => "",
            "headerType" => "none",
            "quicSecurity" => "none",
            "serviceName" => "",
            "security" => $server['tls'] != 0 ? ($server['tls'] == 2 ? "reality" : "tls") : "",
            "flow" => $server['flow'],
            "fp" => $tlsSettings['fingerprint'] ?? 'chrome',
        ];

        if ($server['tls']) {
            $tlsSettings = $server['tls_settings'] ?? [];
            $sni = trim((string)self::firstTlsSetting($tlsSettings, ['server_name', 'serverName'], ''));
            $config['sni'] = $sni;
            $hasPinnedCert = self::addTlsClientTrustParams($config, $tlsSettings, $sni, (string)($server['host'] ?? ''));
            if (!$hasPinnedCert && !self::shouldSuppressLegacyInsecure($tlsSettings) && self::boolish(self::firstTlsSetting($tlsSettings, ['allow_insecure', 'allowInsecure'], 0))) {
                $config['insecure'] = 1;
            }
            if ($server['tls'] == 2) {
                $config['pbk'] = $tlsSettings['public_key'] ?? '';
                $config['sid'] = $tlsSettings['short_id'] ?? '';
            }
        }
        if (!empty($tlsSettings['ech'])) {
            if ($tlsSettings['ech'] === 'cloudflare') {
                $config['ech'] = 'cloudflare-ech.com+https://doh.pub/dns-query';
            } elseif ($tlsSettings['ech'] === 'custom' && !empty($tlsSettings['ech_config'])) {
                $config['ech'] = is_array($tlsSettings['ech_config']) ? $tlsSettings['ech_config'][0] : $tlsSettings['ech_config'];
            }
        }
        $protectedEncryption = (new ProtectedFeatureService())->protectedEncryption($server);
        if ($protectedEncryption) {
            $config['encryption'] = $protectedEncryption;
        }

        self::configureNetworkSettings($server, $config);

        return self::buildUriString('vless', $uuid, $server, $name, $config);
    }

    public static function buildTrojanUri($password, $server)
    {
        $tlsSettings = $server['tls_settings'] ?? [];
        $sni = trim((string)($server['server_name'] ?? ''));
        if ($sni === '') {
            $sni = trim((string)self::firstTlsSetting($tlsSettings, ['server_name', 'serverName'], ''));
        }
        $tlsEnabled = !array_key_exists('tls', $server) || (int)$server['tls'] !== 0;
        $config = [
            'type'=> $server['network'],
            'peer' => $sni,
            'sni' => $sni,
        ];
        if ($tlsEnabled) {
            $config = ['security' => 'tls'] + $config;
        }
        $hasPinnedCert = $tlsEnabled
            ? self::addTlsClientTrustParams($config, $tlsSettings, $sni, (string)($server['host'] ?? ''))
            : false;
        if ($tlsEnabled && !$hasPinnedCert && !self::shouldSuppressLegacyInsecure($tlsSettings) && self::boolish($server['allow_insecure'] ?? self::firstTlsSetting($tlsSettings, ['allow_insecure', 'allowInsecure'], 0))) {
            $config['allowInsecure'] = 1;
        }

        if(isset($server['network']) && in_array($server['network'], ["grpc", "ws"])){
            if($server['network'] === "grpc" && isset($server['network_settings']['serviceName'])) {
                $config['serviceName'] = $server['network_settings']['serviceName'];
            }
            if($server['network'] === "ws") {
                if(isset($server['network_settings']['path'])) {
                    $config['path'] = $server['network_settings']['path'];
                }
                if(isset($server['network_settings']['headers']['Host'])) {
                    $config['host'] = $server['network_settings']['headers']['Host'];
                }
            }
        }
        if (!empty($tlsSettings['ech'])) {
            if ($tlsSettings['ech'] === 'cloudflare') {
                $config['ech'] = 'cloudflare-ech.com+https://doh.pub/dns-query';
            } elseif ($tlsSettings['ech'] === 'custom' && !empty($tlsSettings['ech_config'])) {
                $config['ech'] = is_array($tlsSettings['ech_config']) ? $tlsSettings['ech_config'][0] : $tlsSettings['ech_config'];
            }
        }
        $query = http_build_query($config);
        return "trojan://{$password}@" . self::formatHost($server['host']) . ":{$server['port']}?{$query}#". rawurlencode($server['name']) . "\r\n";
    }

    public static function buildHysteriaUri($password, $server)
    {
        $remote = self::formatHost($server['host']);
        $name = self::encodeURIComponent($server['name']);

        $parts = explode(",", $server['port']);
        $firstPort = strpos($parts[0], '-') !== false ? explode('-', $parts[0])[0] : $parts[0];

        $tlsSettings = $server['tls_settings'] ?? [];
        $sni = $server['server_name'] ?? ($tlsSettings['server_name'] ?? '');
        $config = $server['version'] == 2
            ? ['sni' => $sni]
            : [
                'protocol' => 'udp',
                'auth' => $password,
                'peer' => $sni,
                'upmbps' => $server['down_mbps'],
                'downmbps' => $server['up_mbps'],
            ];
        $hasPinnedCert = self::addTlsClientTrustParams($config, $tlsSettings, (string)$sni, (string)($server['host'] ?? ''));
        if (!$hasPinnedCert && !self::shouldSuppressLegacyInsecure($tlsSettings) && self::boolish($server['insecure'] ?? self::firstTlsSetting($tlsSettings, ['allow_insecure', 'allowInsecure'], 0))) {
            $config['insecure'] = 1;
        }

        if (isset($server['obfs']) && isset($server['obfs_password'])) {
            $config['obfs'] = $server['obfs'];
            if ($server['version'] == 2) {
                $config['obfs-password'] = $server['obfs_password'];
            } else {
                $config['obfsParam'] = $server['obfs_password'];
            }
        }
        if (count($parts) !== 1 || strpos($parts[0], '-') !== false) {
            $config['mport'] = $server['mport'];
        }
        $query = http_build_query($config);
        $uri = $server['version'] == 2
            ? "hysteria2://{$password}@{$remote}:{$firstPort}/?{$query}"
            : "hysteria://{$remote}:{$firstPort}/?{$query}";
        return "{$uri}#{$name}\r\n";
    }

    public static function buildHysteria2Uri($password, $server)
    {
        $remote = self::formatHost($server['host']);
        $name = self::encodeURIComponent($server['name']);

        $parts = explode(",", $server['port']);
        $firstPort = strpos($parts[0], '-') !== false ? explode('-', $parts[0])[0] : $parts[0];
        $tlsSettings = $server['tls_settings'] ?? [];
        $sni = $tlsSettings['server_name'] ?? ($server['server_name'] ?? '');
        $config = ['sni' => $sni];
        $hasPinnedCert = self::addTlsClientTrustParams($config, $tlsSettings, (string)$sni, (string)($server['host'] ?? ''));
        if (!$hasPinnedCert && !self::shouldSuppressLegacyInsecure($tlsSettings) && self::boolish($tlsSettings['allow_insecure'] ?? 0)) {
            $config['insecure'] = 1;
        }

        if (isset($server['obfs']) && isset($server['obfs_password'])) {
            $config['obfs'] = $server['obfs'];
            $config['obfs-password'] = $server['obfs_password'];
        }
        if (count($parts) !== 1 || strpos($parts[0], '-') !== false) {
            $config['mport'] = $server['mport'];
        }
        $query = http_build_query($config);
        $uri = "hysteria2://{$password}@{$remote}:{$firstPort}/?{$query}";
        return "{$uri}#{$name}\r\n";
    }

    public static function buildTuicUri($password, $server)
    {
        $tlsSettings = $server['tls_settings'] ?? [];
        $sni = $server['server_name'] ?? ($tlsSettings['server_name'] ?? '');
        $config = [
            'sni' => $sni,
            'alpn'=> 'h3',
            'congestion_control' => $server['congestion_control'],
            'disable_sni' => $server['disable_sni'],
            'udp_relay_mode' => $server['udp_relay_mode'],
        ];
        $hasPinnedCert = self::addTlsClientTrustParams($config, $tlsSettings, (string)$sni, (string)($server['host'] ?? ''));
        if (!$hasPinnedCert && !self::shouldSuppressLegacyInsecure($tlsSettings) && self::boolish($server['insecure'] ?? ($tlsSettings['allow_insecure'] ?? 0))) {
            $config['allow_insecure'] = 1;
        }

        $remote = self::formatHost($server['host']);
        $port = $server['port'];
        $name = self::encodeURIComponent($server['name']);

        $query = http_build_query($config);
        return "tuic://{$password}:{$password}@{$remote}:{$port}?{$query}#{$name}\r\n";
    }

    public static function buildAnytlsUri($password, $server)
    {
        $tlsSettings = $server['tls_settings'] ?? [];
        $config = [
            'type' => $server['network'] ?? 'tcp',
            'fp' => $tlsSettings['fingerprint'] ?? 'chrome',
        ];
        $sni = '';
        if (isset($server['server_name']) || isset($tlsSettings['server_name'])) {
            $sni = $server['server_name'] ?? ($tlsSettings['server_name'] ?? '');
            $config['sni'] = $sni;
        }
        $hasPinnedCert = self::addTlsClientTrustParams($config, $tlsSettings, (string)$sni, (string)($server['host'] ?? ''));
        if (!$hasPinnedCert && !self::shouldSuppressLegacyInsecure($tlsSettings) && self::boolish($server['insecure'] ?? ($tlsSettings['allow_insecure'] ?? 0))) {
            $config['insecure'] = 1;
        }
        if (isset($server['tls']) && $server['tls'] == 2) {
            $config['security'] = 'reality';
            $config['pbk'] = $tlsSettings['public_key'] ?? '';
            $config['sid'] = $tlsSettings['short_id'] ?? '';
        }
        $remote = self::formatHost($server['host']);
        $port = $server['port'];
        $name = self::encodeURIComponent($server['name']);
        if (isset($server['network']) && isset($server['network_settings'])) {
            self::configureNetworkSettings($server, $config);
        }
        $query = http_build_query($config);
        return "anytls://{$password}@{$remote}:{$port}/?{$query}#{$name}\r\n";
    }

    public static function configureNetworkSettings($server, &$config)
    {
        $network = $server['network'];
        $settings = $server['network_settings'] ?? ($server['networkSettings'] ?? []);

        switch ($network) {
            case 'tcp':
                self::configureTcpSettings($settings, $config);
                break;
            case 'ws':
                self::configureWsSettings($settings, $config);
                break;
            case 'grpc':
                self::configureGrpcSettings($settings, $config);
                break;
            case 'kcp':
                self::configureKcpSettings($settings, $config);
                break;
            case 'httpupgrade':
                self::configureHttpupgradeSettings($settings, $config);
                break;
            case 'xhttp':
                self::configureXhttpSettings($settings, $config);
                break;
        }
    }

    public static function configureTcpSettings($settings, &$config)
    {
        $header = $settings['header'] ?? [];
        if (isset($header['type']) && $header['type'] === 'http') {
            $config['headerType'] = 'http';
            $config['host'] = $header['request']['headers']['Host'][0] ?? '';
            $config['path'] = $header['request']['path'][0] ?? '';
        }
    }

    public static function configureWsSettings($settings, &$config)
    {
        $config['path'] = $settings['path'] ?? '';
        $config['host'] = $settings['headers']['Host'] ?? '';
    }

    public static function configureGrpcSettings($settings, &$config)
    {
        $config['serviceName'] = $settings['serviceName'] ?? '';
    }

    public static function configureKcpSettings($settings, &$config)
    {
        $config['headerType'] = $settings['header']['type'] ?? 'none';
        if (isset($settings['seed'])) {
            $config['seed'] = $settings['seed'];
        }
    }

    public static function configureHttpupgradeSettings($settings, &$config)
    {
        $config['path'] = $settings['path'] ?? '';
        $config['host'] = $settings['host'] ?? '';
    }

    public static function configureXhttpSettings($settings, &$config)
    {
        $config['path'] = $settings['path'] ?? '';
        $config['host'] = $settings['host'] ?? '';
        $config['mode'] = $settings['mode'] ?? 'auto';
        $config['extra'] = isset($settings['extra']) ? json_encode($settings['extra'], JSON_UNESCAPED_SLASHES) : null;
    }
}
