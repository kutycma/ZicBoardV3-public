<?php

namespace App\Utils;
use App\Models\Staff;
use App\Services\HappSubscribeCacheService;
use App\Services\Core\ProtectedFeatureService;
use App\Models\User;
use App\Models\UserSubscription;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Http\Request;

class Helper
{
    public static function likeContains($value): string
    {
        return '%' . str_replace(['\\', '%', '_'], ['\\\\', '\\%', '\\_'], (string)$value) . '%';
    }

    public static function normalizeWebconDomain($domain): string
    {
        $domain = trim((string)$domain);
        if ($domain === '') {
            return '';
        }

        $url = preg_match('/^[a-z][a-z0-9+.-]*:\/\//i', $domain) ? $domain : 'https://' . $domain;
        $parts = parse_url($url);
        if (is_array($parts) && !empty($parts['host'])) {
            $host = strtolower($parts['host']);
            return isset($parts['port']) ? $host . ':' . $parts['port'] : $host;
        }

        $domain = preg_replace('/[\/?#].*$/', '', $domain);
        return strtolower($domain ?: '');
    }

    public static function activeWebcon(?Request $request = null)
    {
        if (!$request || !Schema::hasTable('v2_staff')) {
            return null;
        }

        $hosts = array_values(array_unique(array_filter([
            self::normalizeWebconDomain($request->getHost()),
            self::normalizeWebconDomain($request->getHttpHost()),
        ])));
        if (!$hosts) {
            return null;
        }

        return Staff::where('status', 1)->get()->first(function ($staff) use ($hosts) {
            return in_array(self::normalizeWebconDomain($staff->domain), $hosts, true);
        });
    }

    public static function webconSiteName($staff): string
    {
        $title = $staff ? trim((string)$staff->title) : '';
        return $title !== '' ? $title : (string)config('zicboard.app_name', 'ZicBoard');
    }

    public static function requestOrigin(?Request $request = null): string
    {
        return $request ? rtrim($request->getSchemeAndHttpHost(), '/') : '';
    }

    private static function sourceSubscribeUrl(): string
    {
        $configPath = config_path('zicboard.php');
        if (is_string($configPath) && is_file($configPath)) {
            $sourceConfig = include $configPath;
            if (is_array($sourceConfig) && array_key_exists('subscribe_url', $sourceConfig)) {
                return trim((string)$sourceConfig['subscribe_url']);
            }
        }

        return trim((string)config('zicboard.subscribe_url', ''));
    }

    private static function sourceAppUrl(): string
    {
        $configPath = config_path('zicboard.php');
        if (is_string($configPath) && is_file($configPath)) {
            $sourceConfig = include $configPath;
            if (is_array($sourceConfig) && array_key_exists('app_url', $sourceConfig)) {
                return trim((string)$sourceConfig['app_url']);
            }
        }

        return trim((string)config('zicboard.app_url', ''));
    }

    private static function useSharedWebconSubscribeUrl(): bool
    {
        return (int)config('zicboard.webcon_shared_subscribe_url_enable', 0) === 1;
    }

    public static function applyWebconRuntimeConfig(?Request $request = null): void
    {
        $staff = self::activeWebcon($request);
        if (!$staff) {
            return;
        }

        $siteName = self::webconSiteName($staff);
        $origin = self::requestOrigin($request);
        $runtimeConfig = [
            'zicboard.app_name' => $siteName,
            'zicboard.happ_profile_title' => $siteName,
            'zicboard.app_url' => $origin ?: config('zicboard.app_url'),
        ];

        $sourceSubscribeUrl = self::sourceSubscribeUrl();
        if (self::useSharedWebconSubscribeUrl() && $sourceSubscribeUrl === '') {
            $sourceSubscribeUrl = self::sourceAppUrl();
        }

        $runtimeConfig['zicboard.subscribe_url'] = self::useSharedWebconSubscribeUrl()
            ? $sourceSubscribeUrl
            : ($origin ?: $sourceSubscribeUrl);

        config($runtimeConfig);
    }

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

    public static function getSubscribeUrl($token, $request = null)
    {
        $result = self::getSubscribeUrlDetail($token, $request);
        return $result['url'];
    }

    public static function canExposeSubscribeUrl($plan, $request = null)
    {
        if (!$plan || (int)($plan->allow_subscribe_url ?? 1) === 1) {
            return true;
        }

        return self::isSubscribeUrlAllowedUserAgent($request);
    }

    public static function isSubscribeUrlAllowedUserAgent($request = null): bool
    {
        if ((int)config('zicboard.subscribe_url_ua_enable', 0) !== 1 || !$request) {
            return false;
        }

        if ($request instanceof Request) {
            $userAgent = trim((string)$request->header('User-Agent', ''));
        } else {
            $userAgent = trim((string)($_SERVER['HTTP_USER_AGENT'] ?? ''));
        }
        if ($userAgent === '') {
            return false;
        }

        $allowedUserAgents = preg_split('/\r\n|\r|\n/', (string)config('zicboard.subscribe_url_allowed_ua', ''));
        if (!is_array($allowedUserAgents)) {
            return false;
        }

        foreach ($allowedUserAgents as $allowedUserAgent) {
            $allowedUserAgent = trim((string)$allowedUserAgent);
            if ($allowedUserAgent !== '' && stripos($userAgent, $allowedUserAgent) !== false) {
                return true;
            }
        }

        return false;
    }

    public static function getSubscribeUrlDetail($token, $request = null)
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

        $url = self::rawSubscribeUrl($subscription->token, self::isSubscribeUrlAllowedUserAgent($request), $request);
        if ($url === null) {
            return [
                'url' => null,
                'error' => 'missing_subscription',
                'protected' => false
            ];
        }

        return self::happProtectedSubscribeUrl($url);
    }

    private static function rawSubscribeUrl($token, bool $forceDirect = false, $request = null)
    {
        $submethod = $forceDirect ? 0 : (int)config('zicboard.show_subscribe_method', 0);
        $path = config('zicboard.subscribe_path', '/api/v3/client/subscribe');
        if (empty($path)) {
            $path = '/api/v3/client/subscribe';
        } 
        $webconOrigin = !self::useSharedWebconSubscribeUrl() && $request instanceof Request && self::activeWebcon($request)
            ? self::requestOrigin($request)
            : '';
        $sourceSubscribeUrl = self::sourceSubscribeUrl();
        if (self::useSharedWebconSubscribeUrl() && $sourceSubscribeUrl === '') {
            $sourceSubscribeUrl = self::sourceAppUrl();
        }

        $subscribeUrls = array_values(array_filter(array_map('trim', explode(',', $sourceSubscribeUrl)), function ($url) {
            return $url !== '';
        }));
        $subscribeUrl = $webconOrigin ?: ($subscribeUrls ? $subscribeUrls[rand(0, count($subscribeUrls) - 1)] : '');
        $subscribeUrl = rtrim(trim((string)$subscribeUrl), '/');
        switch ($submethod) {
            case 0:
                $path = "{$path}?token={$token}";
                if ($subscribeUrl) return $subscribeUrl . $path;
                return url($path);
                break;
            case 1:
                $newtoken = Cache::get("otp_{$token}");
                if ($newtoken && !Cache::has("otpn_{$newtoken}")) {
                    Cache::forget("otp_{$token}");
                    $newtoken = null;
                }

                for ($attempt = 0; !$newtoken && $attempt < 3; $attempt++) {
                    $candidate = self::base64EncodeUrlSafe(random_bytes(24));
                    if (Cache::add("otp_{$token}", $candidate, 86400)) {
                        Cache::put("otpn_{$candidate}", $token, 86400);
                        $newtoken = $candidate;
                        break;
                    }

                    $cachedToken = Cache::get("otp_{$token}");
                    if ($cachedToken && Cache::has("otpn_{$cachedToken}")) {
                        $newtoken = $cachedToken;
                        break;
                    }
                    if ($cachedToken) {
                        Cache::forget("otp_{$token}");
                    }
                }
                if (!$newtoken) {
                    return null;
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

    private static function cleanUriParams(array $params): array
    {
        $result = [];
        foreach ($params as $key => $value) {
            if ($value === null) {
                continue;
            }
            if (is_string($value) && $value === '') {
                continue;
            }
            if (is_array($value) && $value === []) {
                continue;
            }
            $result[$key] = $value;
        }
        return $result;
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

    private static function normalizeTlsSettingsValue($settings): array
    {
        if ($settings instanceof \stdClass) {
            $settings = json_decode(json_encode($settings), true);
        }
        if (is_string($settings)) {
            $decoded = json_decode($settings, true);
            $settings = json_last_error() === JSON_ERROR_NONE ? $decoded : [];
        }
        return is_array($settings) ? $settings : [];
    }

    private static function firstScalarValue($value): string
    {
        if ($value instanceof \stdClass) {
            $value = json_decode(json_encode($value), true);
        }
        if (is_array($value)) {
            foreach ($value as $item) {
                $scalar = self::firstScalarValue($item);
                if ($scalar !== '') {
                    return $scalar;
                }
            }
            return '';
        }
        if (!is_scalar($value)) {
            return '';
        }
        return trim((string)$value);
    }

    private static function firstTlsScalar(array $settings, array $keys, string $default = ''): string
    {
        foreach ($keys as $key) {
            if (!array_key_exists($key, $settings)) {
                continue;
            }
            $value = self::firstScalarValue($settings[$key]);
            if ($value !== '') {
                return $value;
            }
        }
        return $default;
    }

    private static function connectionHostName($host): string
    {
        $host = trim((string)$host);
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
        return trim($host);
    }

    private static function tlsClientNames(array $server, array $tlsSettings): array
    {
        $tlsSettings = self::normalizeTlsSettingsValue($tlsSettings);
        $autoCert = self::autoCertMetadata($tlsSettings);
        $sni = self::firstTlsScalar($tlsSettings, ['server_names', 'serverNames']);
        if ($sni === '') {
            $sni = self::firstScalarValue($server['server_names'] ?? ($server['serverNames'] ?? ''));
        }
        if ($sni === '') {
            $sni = self::firstTlsScalar($tlsSettings, ['server_name', 'serverName']);
        }
        if ($sni === '') {
            $sni = self::firstScalarValue($server['server_name'] ?? ($server['serverName'] ?? ''));
        }
        if ($sni === '' && !empty($autoCert['target'])) {
            $sni = self::firstScalarValue($autoCert['target']);
        }
        if ($sni === '') {
            $sni = self::connectionHostName($server['host'] ?? '');
        }

        $verifyName = self::firstTlsScalar($tlsSettings, ['verifyPeerCertByName', 'verify_peer_cert_by_name', 'peer', 'vcn']);
        if ($verifyName === '') {
            $verifyName = $sni;
        }

        return [
            'sni' => $sni,
            'verify_name' => $verifyName,
        ];
    }

    public static function resolveTlsClientNames(array $server, array $tlsSettings): array
    {
        return self::tlsClientNames($server, $tlsSettings);
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

    public static function resolveTlsClientTrust(array $server, array $tlsSettings): array
    {
        $tlsSettings = self::normalizeTlsSettingsValue($tlsSettings);
        $names = self::tlsClientNames($server, $tlsSettings);
        $manualPin = self::firstTlsScalar($tlsSettings, ['pinnedPeerCertSha256', 'pinned_peer_cert_sha256', 'certSha256', 'pcs']);
        $certSha256Hex = self::normalizeCertSha256Hex($manualPin);
        $certSha256 = $certSha256Hex !== '' ? self::hexToColonSha256($certSha256Hex) : '';
        $publicKeySha256 = self::normalizePublicKeySha256(self::firstTlsScalar($tlsSettings, [
            'certificate_public_key_sha256',
            'publicKeySha256',
            'public_key_sha256',
        ]));

        $autoCert = self::autoCertMetadata($tlsSettings);
        $trustedAutoCert = self::isTrustedAutoCert($autoCert);
        if ($certSha256 === '' && $trustedAutoCert) {
            $certSha256Hex = self::normalizeCertSha256Hex($autoCert['sha256_hex'] ?? '');
            if ($certSha256Hex === '') {
                $certSha256Hex = self::normalizeCertSha256Hex($autoCert['sha256'] ?? '');
            }
            if ($certSha256Hex !== '') {
                $certSha256 = self::hexToColonSha256($certSha256Hex);
            }
        }
        if ($publicKeySha256 === '' && $trustedAutoCert) {
            $publicKeySha256 = self::normalizePublicKeySha256($autoCert['public_key_sha256'] ?? '');
        }

        $needsLegacyInsecureAutoCert = $trustedAutoCert && self::autoCertNeedsLegacyInsecure($autoCert);
        $isSelfSignedAutoCert = $trustedAutoCert && self::isSelfSignedAutoCert($autoCert);
        $isAcmeAutoCert = $trustedAutoCert && self::isAcmeAutoCert($autoCert);

        return [
            'sni' => $names['sni'],
            'verify_name' => $names['verify_name'],
            'has_cert_pin' => $certSha256 !== '',
            'has_public_key_pin' => $publicKeySha256 !== '',
            'cert_sha256' => $certSha256,
            'cert_sha256_hex' => $certSha256Hex,
            'public_key_sha256' => $publicKeySha256,
            'is_auto_cert' => $autoCert !== [],
            'is_self_signed_auto_cert' => $isSelfSignedAutoCert,
            'is_acme_auto_cert' => $isAcmeAutoCert,
            'allow_legacy_insecure_fallback' => $needsLegacyInsecureAutoCert && $certSha256 === '' && $publicKeySha256 === '',
            'requires_modern_pin' => $needsLegacyInsecureAutoCert,
            'suppress_insecure' => self::shouldSuppressLegacyInsecure($tlsSettings),
            'needs_legacy_insecure' => $needsLegacyInsecureAutoCert,
        ];
    }

    private static function addTlsPinParams(array &$config, array $tlsSettings, string $defaultVerifyName = '', string $connectionHost = ''): bool
    {
        $trust = self::resolveTlsClientTrust(['host' => $connectionHost], $tlsSettings);
        $pinned = $trust['cert_sha256'];
        if ($trust['public_key_sha256'] !== '') {
            $config['certificate_public_key_sha256'] = $trust['public_key_sha256'];
            $config['publicKeySha256'] = $trust['public_key_sha256'];
            $config['pks'] = $trust['public_key_sha256'];
        }
        if ($pinned !== '') {
            $config['pinnedPeerCertSha256'] = $pinned;
            $config['pcs'] = $pinned;
        }

        $verifyName = self::firstTlsScalar($tlsSettings, ['verifyPeerCertByName', 'verify_peer_cert_by_name', 'peer', 'vcn']);
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

        return $pinned !== '' || $trust['public_key_sha256'] !== '';
    }

    private static function addHappTlsClientTrustParams(array &$config, array $tlsSettings, string $defaultVerifyName = '', string $connectionHost = ''): bool
    {
        $hasPinnedCert = self::addTlsClientTrustParams($config, $tlsSettings, $defaultVerifyName, $connectionHost);
        if (!empty($config['pinnedPeerCertSha256'])) {
            $config['certSha256'] = $config['pinnedPeerCertSha256'];
        }
        if (!empty($config['certificate_public_key_sha256'])) {
            $config['publicKeySha256'] = $config['certificate_public_key_sha256'];
        }
        if (!empty($config['verifyPeerCertByName'])) {
            $config['peer'] = $config['verifyPeerCertByName'];
        }
        return $hasPinnedCert;
    }

    private static function addTlsClientTrustParams(array &$config, array $tlsSettings, string $defaultVerifyName = '', string $connectionHost = ''): bool
    {
        $trust = self::resolveTlsClientTrust(['host' => $connectionHost], $tlsSettings);
        if (($trust['has_cert_pin'] || $trust['has_public_key_pin']) && empty($tlsSettings['verifyPeerCertByName']) && empty($tlsSettings['verify_peer_cert_by_name']) && empty($tlsSettings['peer']) && empty($tlsSettings['vcn'])) {
            $autoCert = self::autoCertMetadata($tlsSettings);
            $tlsSettings['verifyPeerCertByName'] = self::autoCertVerifyName($autoCert, $defaultVerifyName, $connectionHost);
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
        return in_array($source, ['acme_dns', 'acme_http', 'acme_ip'], true) && !self::isSuspiciousAcmeAutoCert($autoCert);
    }

    private static function autoCertNeedsLegacyInsecure(array $autoCert): bool
    {
        return self::isSelfSignedAutoCert($autoCert) || self::isSuspiciousAcmeAutoCert($autoCert);
    }

    private static function isSuspiciousAcmeAutoCert(array $autoCert): bool
    {
        if (!self::isAcmeAutoCert($autoCert)) {
            return false;
        }
        $notAfter = (int)($autoCert['not_after'] ?? 0);
        return $notAfter > 0 && $notAfter > time() + 400 * 86400;
    }

    public static function needsLegacyInsecureForUri(array $tlsSettings): bool
    {
        $autoCert = self::autoCertMetadata($tlsSettings);
        if (!$autoCert || strtolower(trim((string)($autoCert['status'] ?? ''))) === 'error') {
            return false;
        }
        return self::autoCertNeedsLegacyInsecure($autoCert);
    }

    private static function autoCertMetadata(array $tlsSettings): array
    {
        $autoCert = $tlsSettings['auto_cert'] ?? [];
        return is_array($autoCert) ? $autoCert : [];
    }

    private static function normalizeCertSha256Hex($value): string
    {
        $value = strtolower(preg_replace('/[^a-fA-F0-9]/', '', (string)$value));
        return preg_match('/^[a-f0-9]{64}$/', $value) ? $value : '';
    }

    private static function hexToColonSha256(string $hex): string
    {
        return strtoupper(implode(':', str_split($hex, 2)));
    }

    private static function normalizePublicKeySha256($value): string
    {
        $value = trim((string)$value);
        if ($value === '') {
            return '';
        }
        $decoded = base64_decode($value, true);
        if ($decoded === false || strlen($decoded) !== 32) {
            return '';
        }
        return base64_encode($decoded);
    }

    private static function isSelfSignedAutoCert(array $autoCert): bool
    {
        $source = strtolower(trim((string)($autoCert['source'] ?? '')));
        $mode = strtolower(trim((string)($autoCert['mode'] ?? '')));
        return in_array($source, ['self', 'self_signed', 'fallback_self', 'self_fallback'], true)
            || in_array($mode, ['self', 'self_signed'], true);
    }

    private static function isAcmeAutoCert(array $autoCert): bool
    {
        $source = strtolower(trim((string)($autoCert['source'] ?? '')));
        return in_array($source, ['acme_dns', 'acme_http', 'acme_ip'], true);
    }

    private static function isTrustedAutoCert(array $autoCert): bool
    {
        if (!$autoCert || strtolower(trim((string)($autoCert['status'] ?? ''))) === 'error') {
            return false;
        }

        $source = strtolower(trim((string)($autoCert['source'] ?? '')));
        return in_array($source, ['acme_dns', 'acme_http', 'acme_ip', 'self', 'self_signed', 'fallback_self', 'self_fallback'], true);
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
            $tlsSettings = self::normalizeTlsSettingsValue($server['tls_settings'] ?? ($server['tlsSettings'] ?? []));
            $names = self::tlsClientNames($server, $tlsSettings);
            $config['sni'] = $names['sni'];
            if (self::boolish(self::firstTlsSetting($tlsSettings, ['allow_insecure', 'allowInsecure'], 0)) || self::needsLegacyInsecureForUri($tlsSettings)) {
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
    public static function buildHappVmessUri($uuid, $server)
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
            $tlsSettings = self::normalizeTlsSettingsValue($server['tls_settings'] ?? ($server['tlsSettings'] ?? []));
            $names = self::tlsClientNames($server, $tlsSettings);
            $config['sni'] = $names['sni'];
            $config['peer'] = $names['verify_name'];
            $hasPin = self::addHappTlsClientTrustParams($config, $tlsSettings, $names['verify_name'], (string)($server['host'] ?? ''));
            if (!$hasPin && (self::boolish(self::firstTlsSetting($tlsSettings, ['allow_insecure', 'allowInsecure'], 0)) || self::needsLegacyInsecureForUri($tlsSettings))) {
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

        return "vmess://" . base64_encode(json_encode($config, JSON_UNESCAPED_SLASHES)) . "\r\n";
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
            if ((int)($server['tls'] ?? 0) !== 2 && (self::boolish(self::firstTlsSetting($tlsSettings, ['allow_insecure', 'allowInsecure'], 0)) || self::needsLegacyInsecureForUri($tlsSettings))) {
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

    public static function buildHappVlessUri($uuid, $server)
    {
        if (in_array(($server['type'] ?? null), ['zicnode', 'v2node']) && isset($server['protocol'])) {
            $server['type'] = $server['protocol'];
        }

        $name = self::encodeURIComponent($server['name']);
        $tlsSettings = $server['tls_settings'] ?? ($server['tlsSettings'] ?? []);
        $tlsSettings = is_array($tlsSettings) ? $tlsSettings : [];
        $network = (string)($server['network'] ?? 'tcp');
        $server['network'] = $network;
        $tls = (int)($server['tls'] ?? 0);

        $config = [
            'type' => $network,
            'encryption' => 'none',
        ];

        $protectedEncryption = (new ProtectedFeatureService())->protectedEncryption($server);
        if ($protectedEncryption) {
            $config['encryption'] = $protectedEncryption;
        }

        if ($tls !== 0) {
            $config['security'] = $tls === 2 ? 'reality' : 'tls';
            if (!empty($server['flow'])) {
                $config['flow'] = $server['flow'];
            }
            $config['fp'] = self::firstTlsSetting($tlsSettings, ['fingerprint'], 'chrome');

            $sni = trim((string)self::firstTlsSetting($tlsSettings, ['server_name', 'serverName'], ''));
            if ($sni !== '') {
                $config['sni'] = $sni;
            }

            if ($tls === 2) {
                $config['pbk'] = self::firstTlsSetting($tlsSettings, ['public_key', 'publicKey', 'pbk'], '');
                $config['sid'] = self::firstTlsSetting($tlsSettings, ['short_id', 'shortId', 'sid'], '');
            } else {
                self::addHappTlsClientTrustParams($config, $tlsSettings, $sni, (string)($server['host'] ?? ''));
            }

            $spiderX = self::firstTlsSetting($tlsSettings, ['spider_x', 'spiderX', 'spx'], '');
            if ($tls === 2 && $spiderX !== '') {
                $config['spx'] = $spiderX;
            }

            if (!empty($tlsSettings['ech'])) {
                if ($tlsSettings['ech'] === 'cloudflare') {
                    $config['ech'] = 'cloudflare-ech.com+https://doh.pub/dns-query';
                } elseif ($tlsSettings['ech'] === 'custom' && !empty($tlsSettings['ech_config'])) {
                    $config['ech'] = is_array($tlsSettings['ech_config']) ? $tlsSettings['ech_config'][0] : $tlsSettings['ech_config'];
                }
            }
        }

        $networkConfig = [];
        if ($network === 'tcp') {
            $networkConfig['headerType'] = 'none';
        }
        self::configureNetworkSettings($server, $networkConfig);
        foreach ($networkConfig as $key => $value) {
            $config[$key] = $value;
        }

        if ($tls === 2) {
            $config['xtls'] = 2;
        }

        $query = http_build_query(self::cleanUriParams($config), '', '&', PHP_QUERY_RFC3986);
        return "vless://{$uuid}@" . self::formatHost($server['host']) . ":{$server['port']}?{$query}#{$name}\r\n";
    }

    public static function buildHappTrojanUri($password, $server)
    {
        $tlsSettings = self::normalizeTlsSettingsValue($server['tls_settings'] ?? ($server['tlsSettings'] ?? []));
        $network = (string)($server['network'] ?? 'tcp');
        $server['network'] = $network;
        $names = self::tlsClientNames($server, $tlsSettings);
        $sni = $names['sni'];
        $verifyName = $names['verify_name'];
        $tlsEnabled = !array_key_exists('tls', $server) || (int)$server['tls'] !== 0;

        $config = [
            'type' => $network,
        ];
        if ($tlsEnabled) {
            $config['security'] = 'tls';
            $config['sni'] = $sni;
            $config['peer'] = $verifyName;
            $config['fp'] = self::firstTlsScalar($tlsSettings, ['fingerprint'], 'chrome');
            $alpn = self::firstTlsScalar($tlsSettings, ['alpn'], '');
            if ($alpn !== '') {
                $config['alpn'] = $alpn;
            }
            self::addHappTlsClientTrustParams($config, $tlsSettings, $verifyName, (string)($server['host'] ?? ''));
        }

        self::configureNetworkSettings($server, $config);
        if (!empty($tlsSettings['ech'])) {
            if ($tlsSettings['ech'] === 'cloudflare') {
                $config['ech'] = 'cloudflare-ech.com+https://doh.pub/dns-query';
            } elseif ($tlsSettings['ech'] === 'custom' && !empty($tlsSettings['ech_config'])) {
                $config['ech'] = is_array($tlsSettings['ech_config']) ? $tlsSettings['ech_config'][0] : $tlsSettings['ech_config'];
            }
        }

        $query = http_build_query(self::cleanUriParams($config), '', '&', PHP_QUERY_RFC3986);
        return "trojan://{$password}@" . self::formatHost($server['host']) . ":{$server['port']}?{$query}#" . rawurlencode($server['name']) . "\r\n";
    }

    public static function buildShadowrocketTrojanUri($password, $server)
    {
        $tlsSettings = self::normalizeTlsSettingsValue($server['tls_settings'] ?? ($server['tlsSettings'] ?? []));
        $network = (string)($server['network'] ?? 'tcp');
        $server['network'] = $network;
        $names = self::tlsClientNames($server, $tlsSettings);
        $sni = $names['sni'];
        $verifyName = $names['verify_name'];
        $tlsEnabled = !array_key_exists('tls', $server) || (int)$server['tls'] !== 0;
        $config = [
            'type' => $network,
        ];
        if ($tlsEnabled) {
            $config = ['security' => 'tls'] + $config;
            $config['sni'] = $sni;
            $config['peer'] = $verifyName;
            $fingerprint = self::firstTlsScalar($tlsSettings, ['fingerprint'], '');
            if ($fingerprint !== '') {
                $config['fp'] = $fingerprint;
            }
            $alpn = self::firstTlsScalar($tlsSettings, ['alpn'], '');
            if ($alpn !== '') {
                $config['alpn'] = $alpn;
            }
            $allowInsecure = self::boolish($server['allow_insecure'] ?? ($server['allowInsecure'] ?? self::firstTlsSetting($tlsSettings, ['allow_insecure', 'allowInsecure'], 0)));
            if ($allowInsecure || self::needsLegacyInsecureForUri($tlsSettings)) {
                $config['allowInsecure'] = 1;
            }
        }

        self::configureNetworkSettings($server, $config);
        $query = http_build_query(self::cleanUriParams($config), '', '&', PHP_QUERY_RFC3986);
        return "trojan://{$password}@" . self::formatHost($server['host']) . ":{$server['port']}?{$query}#". rawurlencode($server['name']) . "\r\n";
    }

    public static function buildTrojanUri($password, $server)
    {
        $tlsSettings = self::normalizeTlsSettingsValue($server['tls_settings'] ?? ($server['tlsSettings'] ?? []));
        $network = (string)($server['network'] ?? 'tcp');
        $server['network'] = $network;
        $names = self::tlsClientNames($server, $tlsSettings);
        $sni = $names['sni'];
        $verifyName = $names['verify_name'];
        $tlsEnabled = !array_key_exists('tls', $server) || (int)$server['tls'] !== 0;
        $config = [
            'type'=> $network,
        ];
        if ($tlsEnabled) {
            $config = ['security' => 'tls'] + $config;
            $config['sni'] = $sni;
            $config['peer'] = $verifyName;
            $config['fp'] = self::firstTlsScalar($tlsSettings, ['fingerprint'], 'chrome');
            $alpn = self::firstTlsScalar($tlsSettings, ['alpn'], '');
            if ($alpn !== '') {
                $config['alpn'] = $alpn;
            }
        }
        if ($tlsEnabled && (self::boolish($server['allow_insecure'] ?? self::firstTlsSetting($tlsSettings, ['allow_insecure', 'allowInsecure'], 0)) || self::needsLegacyInsecureForUri($tlsSettings))) {
            $config['allowInsecure'] = 1;
        }

        self::configureNetworkSettings($server, $config);
        if (!empty($tlsSettings['ech'])) {
            if ($tlsSettings['ech'] === 'cloudflare') {
                $config['ech'] = 'cloudflare-ech.com+https://doh.pub/dns-query';
            } elseif ($tlsSettings['ech'] === 'custom' && !empty($tlsSettings['ech_config'])) {
                $config['ech'] = is_array($tlsSettings['ech_config']) ? $tlsSettings['ech_config'][0] : $tlsSettings['ech_config'];
            }
        }
        $query = http_build_query(self::cleanUriParams($config), '', '&', PHP_QUERY_RFC3986);
        return "trojan://{$password}@" . self::formatHost($server['host']) . ":{$server['port']}?{$query}#". rawurlencode($server['name']) . "\r\n";
    }

    public static function buildHysteriaUri($password, $server)
    {
        $remote = self::formatHost($server['host']);
        $name = self::encodeURIComponent($server['name']);

        $parts = explode(",", $server['port']);
        $firstPort = strpos($parts[0], '-') !== false ? explode('-', $parts[0])[0] : $parts[0];

        $tlsSettings = self::normalizeTlsSettingsValue($server['tls_settings'] ?? ($server['tlsSettings'] ?? []));
        $names = self::tlsClientNames($server, $tlsSettings);
        $config = ($server['version'] ?? null) == 2
            ? ['sni' => $names['sni']]
            : [
                'protocol' => 'udp',
                'auth' => $password,
                'peer' => $names['verify_name'],
                'upmbps' => $server['down_mbps'],
                'downmbps' => $server['up_mbps'],
            ];
        if (self::boolish($server['insecure'] ?? self::firstTlsSetting($tlsSettings, ['allow_insecure', 'allowInsecure'], 0)) || self::needsLegacyInsecureForUri($tlsSettings)) {
            $config['insecure'] = 1;
        }

        if (isset($server['obfs']) && isset($server['obfs_password'])) {
            $config['obfs'] = $server['obfs'];
            if (($server['version'] ?? null) == 2) {
                $config['obfs-password'] = $server['obfs_password'];
            } else {
                $config['obfsParam'] = $server['obfs_password'];
            }
        }
        if (count($parts) !== 1 || strpos($parts[0], '-') !== false) {
            $config['mport'] = $server['mport'] ?? $server['port'];
        }
        $query = http_build_query(self::cleanUriParams($config), '', '&', PHP_QUERY_RFC3986);
        $uri = ($server['version'] ?? null) == 2
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
        $tlsSettings = self::normalizeTlsSettingsValue($server['tls_settings'] ?? ($server['tlsSettings'] ?? []));
        $names = self::tlsClientNames($server, $tlsSettings);
        $config = ['sni' => $names['sni']];
        if (self::boolish($server['insecure'] ?? self::firstTlsSetting($tlsSettings, ['allow_insecure', 'allowInsecure'], 0)) || self::needsLegacyInsecureForUri($tlsSettings)) {
            $config['insecure'] = 1;
        }

        if (isset($server['obfs']) && isset($server['obfs_password'])) {
            $config['obfs'] = $server['obfs'];
            $config['obfs-password'] = $server['obfs_password'];
        }
        if (count($parts) !== 1 || strpos($parts[0], '-') !== false) {
            $config['mport'] = $server['mport'] ?? $server['port'];
        }
        $query = http_build_query(self::cleanUriParams($config), '', '&', PHP_QUERY_RFC3986);
        $uri = "hysteria2://{$password}@{$remote}:{$firstPort}/?{$query}";
        return "{$uri}#{$name}\r\n";
    }

    public static function buildHappHysteria2Uri($password, $server)
    {
        $remote = self::formatHost($server['host']);
        $name = self::encodeURIComponent($server['name']);

        $parts = explode(",", $server['port']);
        $firstPort = strpos($parts[0], '-') !== false ? explode('-', $parts[0])[0] : $parts[0];
        $tlsSettings = self::normalizeTlsSettingsValue($server['tls_settings'] ?? ($server['tlsSettings'] ?? []));
        $names = self::tlsClientNames($server, $tlsSettings);
        $config = [
            'sni' => $names['sni'],
            'peer' => $names['verify_name'],
        ];
        $hasPin = self::addHappTlsClientTrustParams($config, $tlsSettings, $names['verify_name'], (string)($server['host'] ?? ''));
        if (!$hasPin && (self::boolish($server['insecure'] ?? self::firstTlsSetting($tlsSettings, ['allow_insecure', 'allowInsecure'], 0)) || self::needsLegacyInsecureForUri($tlsSettings))) {
            $config['insecure'] = 1;
        }

        if (isset($server['obfs']) && isset($server['obfs_password'])) {
            $config['obfs'] = $server['obfs'];
            $config['obfs-password'] = $server['obfs_password'];
        }
        if (count($parts) !== 1 || strpos($parts[0], '-') !== false) {
            $config['mport'] = $server['mport'] ?? $server['port'];
        }
        $query = http_build_query(self::cleanUriParams($config), '', '&', PHP_QUERY_RFC3986);
        $uri = "hy2://{$password}@{$remote}:{$firstPort}/?{$query}";
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
        if (self::boolish($server['insecure'] ?? ($tlsSettings['allow_insecure'] ?? 0))) {
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
        if (self::boolish($server['insecure'] ?? ($tlsSettings['allow_insecure'] ?? 0))) {
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
