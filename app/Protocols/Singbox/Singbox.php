<?php
namespace App\Protocols\Singbox;

use App\Utils\Helper;

class Singbox
{
    public $flag = 'sing';
    private $servers;
    private $user;
    private $config;
    private $clientVersion;

    public function __construct($user, $servers, array $options = null)
    {
        $this->user = $user;
        $this->servers = $servers;
        $this->clientVersion = trim((string)($options['version'] ?? ''));
    }

    public function handle()
    {
        $appName = config('zicboard.app_name', 'ZicBoard');
        $this->config = $this->loadConfig();
        $proxies = $this->buildProxies();
        $outbounds = $this->addProxies($proxies);
        $this->config['outbounds'] = $outbounds;
        $user = $this->user;

        return response(json_encode($this->config, JSON_UNESCAPED_SLASHES), 200)
            ->header('Content-Type', 'application/json')
            ->header('subscription-userinfo', "upload={$user['u']}; download={$user['d']}; total={$user['transfer_enable']}; expire={$user['expired_at']}")
            ->header('profile-update-interval', '24')
            ->header('Profile-Title', 'base64:' . base64_encode($appName))
            ->header('Content-Disposition', 'attachment; filename="' . $appName . '"');
    }

    protected function loadConfig()
    {
        $defaultConfig = base_path('resources/rules/default.sing-box.json');
        $customConfig = base_path('resources/rules/custom.sing-box.json');
        $jsonData = file_exists($customConfig) ? file_get_contents($customConfig) : file_get_contents($defaultConfig);

        return json_decode($jsonData, true);
    }

    protected function buildProxies()
    {
        $proxies = [];
    
        foreach ($this->servers as $item) {
            if (in_array($item['type'], ['zicnode', 'v2node'])) {
                $item['type'] = $item['protocol'];
            }
            switch ($item['type']) {
                case 'shadowsocks':
                    $ssConfig = $this->buildShadowsocks($this->user['uuid'], $item);
                    $proxies[] = $ssConfig;
                    break;
                case 'trojan':
                    $trojanConfig = $this->buildTrojan($this->user['uuid'], $item);
                    $proxies[] = $trojanConfig;
                    break;
                case 'vmess':
                    $vmessConfig = $this->buildVmess($this->user['uuid'], $item);
                    $proxies[] = $vmessConfig;
                    break;
                case 'vless':
                    $vlessConfig = $this->buildVless($this->user['uuid'], $item);
                    $proxies[] = $vlessConfig;
                    break;
                case 'tuic':
                    $tuicConfig = $this->buildTuic($this->user['uuid'], $item);
                    $proxies[] = $tuicConfig;
                    break;
                case 'anytls':
                    $anytlsConfig = $this->buildAnyTLS($this->user['uuid'], $item);
                    $proxies[] = $anytlsConfig;
                    break;
                case 'hysteria':
                    $hysteriaConfig = $this->buildHysteria($this->user['uuid'], $item, $this->user);
                    $proxies[] = $hysteriaConfig;
                    break;
                case 'hysteria2':
                    $hysteria2Config = $this->buildHysteria2($this->user['uuid'], $item);
                    $proxies[] = $hysteria2Config;
                    break;
            }
        }
    
        return $proxies;
    }

    protected function addProxies($proxies)
    {
        foreach ($this->config['outbounds'] as &$outbound) {
            if (($outbound['type'] === 'selector' && $outbound['tag'] === 'Chọn node') || ($outbound['type'] === 'urltest' && $outbound['tag'] === 'Tự động chọn') || ($outbound['type'] === 'selector' && strpos($outbound['tag'], '#') === 0 )) {
                array_push($outbound['outbounds'], ...array_column($proxies, 'tag'));
            }
        }
        unset($outbound);
        $outbounds = array_merge($this->config['outbounds'], $proxies);
        return $outbounds;
    }

    protected function buildShadowsocks($password, $server)
    {
        if (strpos($server['cipher'], '2022-blake3') !== false) {
            $length = $server['cipher'] === '2022-blake3-aes-128-gcm' ? 16 : 32;
            $serverKey = Helper::getServerKey($server['created_at'], $length);
            $userKey = Helper::uuidToBase64($password, $length);
            $password = "{$serverKey}:{$userKey}";
        }
        $array = [];
        $array['tag'] = $server['name'];
        $array['type'] = 'shadowsocks';
        $array['server'] = $server['host'];
        $array['server_port'] = $server['port'];
        $array['method'] = $server['cipher'];
        $array['password'] = $password;
        $array['domain_resolver'] = 'local';
        if (isset($server['obfs']) && $server['obfs'] === 'http') {
            $array['plugin'] = 'obfs-local';
            $plugin_opts_parts = [];
            $plugin_opts_parts[] = "obfs=" . $server['obfs'];
            if (isset($server['obfs-host'])) {
                $plugin_opts_parts[] = "obfs-host=" . $server['obfs-host'];
            }
            if (isset($server['obfs-path'])) {
                $plugin_opts_parts[] = "path=" . $server['obfs-path'];
            }
            $array['plugin_opts'] = implode(';', $plugin_opts_parts);
        } else if ((($server['network'] ?? null) == 'http') && isset($server['network_settings']['Host'])) {
            $array['plugin'] = 'obfs-local';
            $plugin_opts_parts = [];
            $plugin_opts_parts[] = "obfs=http";
            $networkSettings = $server['network_settings'];
            $plugin_opts_parts[] = "obfs-host=" . $networkSettings['Host'];
            $plugin_opts_parts[] = "path=" . ($networkSettings['path'] ?? '/');

            $array['plugin_opts'] = implode(';', $plugin_opts_parts);
        }
        return $array;
    }


    protected function buildVmess($uuid, $server)
    {
        $array = [];
        $array['tag'] = $server['name'];
        $array['type'] = 'vmess';
        $array['server'] = $server['host'];
        $array['server_port'] = $server['port'];
        $array['uuid'] = $uuid;
        $array['security'] = 'auto';
        $array['alter_id'] = 0;
        $array['transport']= [];
        $array['domain_resolver'] = 'local';

        if ($server['tls']) {
            $tlsConfig = [];
            $tlsConfig['enabled'] = true;
            $tlsSettings = $server['tls_settings'] ?? $server['tlsSettings'] ?? [];
            $tlsSettings = is_array($tlsSettings) ? $tlsSettings : [];
            $names = Helper::resolveTlsClientNames($server, $tlsSettings);
            $tlsConfig['insecure'] = filter_var($tlsSettings['allow_insecure'] ?? ($tlsSettings['allowInsecure'] ?? false), FILTER_VALIDATE_BOOLEAN);
            $tlsConfig['server_name'] = $names['sni'];
            $this->applyTlsTrust($tlsConfig, $server, $tlsSettings);
            if (!empty($tlsSettings['ech'])) {
                if ($tlsSettings['ech'] === 'cloudflare') {
                    $tlsConfig['ech'] = [
                        'enabled' => true,
                        'query_server_name' => 'cloudflare-ech.com'
                    ];
                } elseif ($tlsSettings['ech'] === 'custom' && !empty($tlsSettings['ech_config'])) {
                    $tlsConfig['ech'] = [
                        'enabled' => true,
                        'config' => is_array($tlsSettings['ech_config']) ? $tlsSettings['ech_config'] : [$tlsSettings['ech_config']]
                    ];
                }
            }
            $array['tls'] = $tlsConfig;
        }
        if ($server['network'] === 'tcp') {
            $tcpSettings = $server['networkSettings'] ?? ($server['network_settings'] ?? []);
            if (isset($tcpSettings['header']['type']) && $tcpSettings['header']['type'] == 'http') $array['transport']['type'] = $tcpSettings['header']['type'];
            if (isset($tcpSettings['header']['request']['headers']['Host'])) $array['transport']['host'] = $tcpSettings['header']['request']['headers']['Host'];
            if (isset($tcpSettings['header']['request']['path'][0])) $array['transport']['path'] = $tcpSettings['header']['request']['path'][0];
        }
        if ($server['network'] === 'ws') {
            $array['transport']['type'] ='ws';
            $wsSettings = $server['networkSettings'] ?? ($server['network_settings'] ?? []);
            $array['transport']['path'] = $wsSettings['path'] ?? '/';
            if (isset($wsSettings['headers']['Host']) && !empty($wsSettings['headers']['Host'])) $array['transport']['headers'] = ['Host' => array($wsSettings['headers']['Host'])];
            $array['transport']['max_early_data'] = 2048;
            $array['transport']['early_data_header_name'] = 'Sec-WebSocket-Protocol';
        }
        if ($server['network'] === 'grpc') {
            $array['transport']['type'] ='grpc';
            $grpcSettings = $server['networkSettings'] ?? ($server['network_settings'] ?? []);
            if (isset($grpcSettings['serviceName'])) $array['transport']['service_name'] = $grpcSettings['serviceName'];
        }

        return $array;
    }

    protected function buildVless($password, $server)
    {
        $array = [
            "type" => "vless",
            "tag" => $server['name'],
            "server" => $server['host'],
            "server_port" => $server['port'],
            "uuid" => $password,
            "domain_resolver" => "local",
            "packet_encoding" => "xudp"
        ];

        $tlsSettings = $server['tls_settings'] ?? [];

        if ($server['tls']) {
            $tlsConfig = [];
            $tlsConfig['enabled'] = true;
            $array['flow'] = !empty($server['flow']) ? $server['flow'] : "";
            $tlsSettings = $server['tls_settings'] ?? [];
            if ($server['tls_settings']) {
                $tlsConfig['insecure'] = ($tlsSettings['allow_insecure'] ?? 0) == 1 ? true : false;
                $tlsConfig['server_name'] = $tlsSettings['server_name'] ?? null;
                if ($server['tls'] == 2) {
                    $tlsConfig['reality'] = [
                        'enabled' => true,
                        'public_key' => $tlsSettings['public_key'],
                        'short_id' => $tlsSettings['short_id']
                    ];
                }
                $this->applyTlsTrust($tlsConfig, $server, $tlsSettings);
                $fingerprints = $tlsSettings['fingerprint'] ?? 'chrome';
                $tlsConfig['utls'] = [
                    "enabled" => true,
                    "fingerprint" => $fingerprints
                ];
                if (!empty($tlsSettings['ech'])) {
                    if ($tlsSettings['ech'] === 'cloudflare') {
                        $tlsConfig['ech'] = [
                            'enabled' => true,
                            'query_server_name' => 'cloudflare-ech.com'
                        ];
                    } elseif ($tlsSettings['ech'] === 'custom' && !empty($tlsSettings['ech_config'])) {
                        $tlsConfig['ech'] = [
                            'enabled' => true,
                            'config' => is_array($tlsSettings['ech_config']) ? $tlsSettings['ech_config'] : [$tlsSettings['ech_config']]
                        ];
                    }
                }
            }
            $array['tls'] = $tlsConfig;
        }

        if ($server['network'] === 'tcp') {
            $tcpSettings = $server['network_settings'];
            if (isset($tcpSettings['header']['type']) && $tcpSettings['header']['type'] == 'http') $array['transport']['type'] = $tcpSettings['header']['type'];
            if (isset($tcpSettings['header']['request']['headers']['Host'])) $array['transport']['host'] = $tcpSettings['header']['request']['headers']['Host'];
            if (isset($tcpSettings['header']['request']['path'][0])) $array['transport']['path'] = $tcpSettings['header']['request']['path'][0];
        }
        if ($server['network'] === 'ws') {
            $array['transport']['type'] ='ws';
            if ($server['network_settings']) {
                $wsSettings = $server['network_settings'];
                if (isset($wsSettings['path']) && !empty($wsSettings['path'])) $array['transport']['path'] = $wsSettings['path'];
                if (isset($wsSettings['headers']['Host']) && !empty($wsSettings['headers']['Host'])) $array['transport']['headers'] = ['Host' => array($wsSettings['headers']['Host'])];
                $array['transport']['max_early_data'] = 2048;
                $array['transport']['early_data_header_name'] = 'Sec-WebSocket-Protocol';
            }
        }
        if ($server['network'] === 'grpc') {
            $array['transport']['type'] ='grpc';
            if ($server['network_settings']) {
                $grpcSettings = $server['network_settings'];
                if (isset($grpcSettings['serviceName'])) $array['transport']['service_name'] = $grpcSettings['serviceName'];
            }
        }

        return $array;
    }

    protected function buildTrojan($password, $server) 
    {
        $array = [];
        $array['tag'] = $server['name'];
        $array['type'] = 'trojan';
        $array['server'] = $server['host'];
        $array['server_port'] = $server['port'];
        $array['password'] = $password;
        $array['domain_resolver'] = 'local';

        $tlsSettings = $server['tls_settings'] ?? [];
        $tlsConfig = [
            'enabled' => true,
            'insecure' => ($server['allow_insecure'] ?? ($tlsSettings['allow_insecure'] ?? 0)) == 1 ? true : false,
            'server_name' => $server['server_name'] ?? ($tlsSettings['server_name'] ?? '')
        ];
        $this->applyTlsTrust($tlsConfig, $server, $tlsSettings);
        if (!empty($tlsSettings['ech'])) {
            if ($tlsSettings['ech'] === 'cloudflare') {
                $tlsConfig['ech'] = [
                    'enabled' => true,
                    'query_server_name' => 'cloudflare-ech.com'
                ];
            } elseif ($tlsSettings['ech'] === 'custom' && !empty($tlsSettings['ech_config'])) {
                $tlsConfig['ech'] = [
                    'enabled' => true,
                    'config' => is_array($tlsSettings['ech_config']) ? $tlsSettings['ech_config'] : [$tlsSettings['ech_config']]
                ];
            }
        }
        $array['tls'] = $tlsConfig;

        if(isset($server['network']) && in_array($server['network'], ["grpc", "ws"])){
            $array['transport']['type'] = $server['network'];
            // cấu hình grpc
            if($server['network'] === "grpc" && isset($server['network_settings']['serviceName'])) {
                $array['transport']['service_name'] = $server['network_settings']['serviceName'];
            }
            // cấu hình ws
            if($server['network'] === "ws") {
                if(isset($server['network_settings']['path'])) {
                    $array['transport']['path'] = $server['network_settings']['path'] ?? '/';
                }
                if(isset($server['network_settings']['headers']['Host'])){
                    $array['transport']['headers'] = ['Host' => array($server['network_settings']['headers']['Host'])];
                }
                $array['transport']['max_early_data'] = 2048;
                $array['transport']['early_data_header_name'] = 'Sec-WebSocket-Protocol';
            }
        };

        return $array;
    }

    protected function buildTuic($password, $server)
    {
        $array = [];
        $array['tag'] = $server['name'];
        $array['type'] = 'tuic';
        $array['server'] = $server['host'];
        $array['server_port'] = $server['port'];
        $array['uuid'] = $password;
        $array['password'] = $password;
        $array['congestion_control'] = $server['congestion_control'] ?? 'cubic';
        $array['udp_relay_mode'] = $server['udp_relay_mode'] ?? 'native';
        $array['zero_rtt_handshake'] = $server['zero_rtt_handshake'] ? true : false;
        $array['domain_resolver'] = 'local';

        $tlsSettings = $server['tls_settings'] ?? [];
        $array['tls'] = [
            'enabled' => true,
            'insecure' => ($server['insecure'] ?? ($tlsSettings['allow_insecure'] ?? 0)) == 1 ? true : false,
            'alpn' => ['h3'],
            'disable_sni' => $server['disable_sni'] ? true : false,
        ];
        $array['tls']['server_name'] = $server['server_name'] ?? ($tlsSettings['server_name'] ?? '');
        $this->applyTlsTrust($array['tls'], $server, $tlsSettings);

        return $array;
    }

    protected function buildAnyTLS($password, $server)
    {
        $array = [];
        $array['tag'] = $server['name'];
        $array['type'] = 'anytls';
        $array['server'] = $server['host'];
        $array['server_port'] = $server['port'];
        $array['password'] = $password;
        $array['domain_resolver'] = 'local';

        $tlsSettings = $server['tls_settings'] ?? [];
        $tlsConfig = [
            'enabled' => true,
            'insecure' => ($server['insecure'] ?? ($tlsSettings['allow_insecure'] ?? 0)) == 1 ? true : false,
            'alpn' => [
                'h2',
                'http/1.1',
            ],
            'server_name' => $server['server_name'] ?? ($tlsSettings['server_name'] ?? '')
        ];
        $this->applyTlsTrust($tlsConfig, $server, $tlsSettings);
        if ($server['tls_settings']) {
            if ($server['tls'] == 2) {
                $tlsConfig['reality'] = [
                    'enabled' => true,
                    'public_key' => $tlsSettings['public_key'],
                    'short_id' => $tlsSettings['short_id']
                ];
            }
            $tlsConfig['utls'] = [
                "enabled" => true,
                "fingerprint" => $tlsSettings['fingerprint'] ?? 'chrome'
            ];
        }
        $array['tls'] = $tlsConfig;

        if ($server['network'] === 'tcp') {
            $tcpSettings = $server['network_settings'];
            if (isset($tcpSettings['header']['type']) && $tcpSettings['header']['type'] == 'http') $array['transport']['type'] = $tcpSettings['header']['type'];
            if (isset($tcpSettings['header']['request']['headers']['Host'])) $array['transport']['host'] = $tcpSettings['header']['request']['headers']['Host'];
            if (isset($tcpSettings['header']['request']['path'][0])) $array['transport']['path'] = $tcpSettings['header']['request']['path'][0];
        }
        if ($server['network'] === 'ws') {
            $array['transport']['type'] ='ws';
            if ($server['network_settings']) {
                $wsSettings = $server['network_settings'];
                if (isset($wsSettings['path']) && !empty($wsSettings['path'])) $array['transport']['path'] = $wsSettings['path'];
                if (isset($wsSettings['headers']['Host']) && !empty($wsSettings['headers']['Host'])) $array['transport']['headers'] = ['Host' => array($wsSettings['headers']['Host'])];
                $array['transport']['max_early_data'] = 2048;
                $array['transport']['early_data_header_name'] = 'Sec-WebSocket-Protocol';
            }
        }
        if ($server['network'] === 'grpc') {
            $array['transport']['type'] ='grpc';
            if ($server['network_settings']) {
                $grpcSettings = $server['network_settings'];
                if (isset($grpcSettings['serviceName'])) $array['transport']['service_name'] = $grpcSettings['serviceName'];
            }
        }
        return $array;
    }

    protected function buildHysteria($password, $server, $user)
    {
        $parts = array_map('trim', explode(',', $server['port']));
        $portConfig = [];
        
        // Kiểm tra có phải cổng đơn hay không
        if (count($parts) === 1 && !str_contains($parts[0], '-')) {
            $port = (int)$parts[0];
        } else {
            // Xử lý nhiều cổng: bỏ cổng lẻ, chỉ giữ dải cổng
            foreach ($parts as $part) {
                if (str_contains($part, '-')) {
                    $portConfig[] = str_replace('-', ':', $part);
                }
            }
        }

        $tlsSettings = $server['tls_settings'] ?? [];
        $array = [
            'tag' => $server['name'],
            'server' => $server['host'],
            'domain_resolver' => 'local',
            'tls' => [
                'enabled' => true,
                'insecure' => ($server['insecure'] ?? ($tlsSettings['allow_insecure'] ?? 0)) ? true : false,
                'server_name' => $server['server_name'] ?? ($tlsSettings['server_name'] ?? '')
            ]
        ];
        $this->applyTlsTrust($array['tls'], $server, $tlsSettings);

        // Thiết lập cấu hình cổng
        if (isset($port)) {
            $array['server_port'] = $port;
        } else {
            $array['server_ports'] = $portConfig;
        }

        if (is_null($server['version']) || $server['version'] == 1) {
            $array['auth_str'] = $password;
            $array['type'] = 'hysteria';
            $array['up_mbps'] = $user->speed_limit ? min($server['down_mbps'], $user->speed_limit) : $server['down_mbps'];
            $array['down_mbps'] = $user->speed_limit ? min($server['up_mbps'], $user->speed_limit) : $server['up_mbps'];
            if (isset($server['obfs']) && isset($server['obfs_password'])) {
                $array['obfs'] = $server['obfs_password'];
            }

            $array['disable_mtu_discovery'] = true;

        } elseif ($server['version'] == 2) {
            $array['password'] = $password;
            $array['type'] = 'hysteria2';
            $array['password'] = $password;

            if (isset($server['obfs'])) {
                $array['obfs']['type'] = $server['obfs'];
                $array['obfs']['password'] = $server['obfs_password'];
            }
        }

        return $array;
    }

    protected function buildHysteria2($password, $server)
    {
        $parts = explode(",",$server['port']);
        $firstPart = $parts[0];
        if (strpos($firstPart, '-') !== false) {
            $range = explode('-', $firstPart);
            $firstPort = $range[0];
        } else {
            $firstPort = $firstPart;
        }
        $tlsSettings = $server['tls_settings'] ?? ($server['tlsSettings'] ?? []);
        $tlsSettings = is_array($tlsSettings) ? $tlsSettings : [];
        $names = Helper::resolveTlsClientNames($server, $tlsSettings);
        $array = [
            'server' => $server['host'],
            'server_port' => (int)$firstPort,
            'tls' => [
                'enabled' => true,
                'insecure' => filter_var($tlsSettings['allow_insecure'] ?? ($tlsSettings['allowInsecure'] ?? false), FILTER_VALIDATE_BOOLEAN),
                'server_name' => $names['sni']
            ],
            'domain_resolver' => 'local',
            'password' => $password,
            'tag' => $server['name'],
            'type' => 'hysteria2'
        ];
        $this->applyTlsTrust($array['tls'], $server, $tlsSettings);
        if (isset($server['obfs'])) {
            $array['obfs']['type'] = $server['obfs'];
            $array['obfs']['password'] = $server['obfs_password'];
        }
        return $array;
    }

    private function applyTlsTrust(array &$tlsConfig, array $server, array $tlsSettings): bool
    {
        if ((int)($server['tls'] ?? 1) === 2) {
            return false;
        }
        $trust = Helper::resolveTlsClientTrust($server, $tlsSettings);
        if (($tlsConfig['server_name'] ?? '') === '' && $trust['sni'] !== '') {
            $tlsConfig['server_name'] = $trust['sni'];
        }
        if (!$this->supportsCertificatePublicKeyPin()) {
            if (!empty($trust['suppress_insecure'])) {
                $tlsConfig['insecure'] = false;
                return true;
            }
            if (!empty($trust['needs_legacy_insecure'])) {
                $tlsConfig['insecure'] = true;
            }
            return false;
        }
        if (!empty($trust['suppress_insecure']) || $trust['public_key_sha256'] !== '') {
            $tlsConfig['insecure'] = false;
        }
        if ($trust['public_key_sha256'] === '') {
            if (empty($trust['suppress_insecure']) && !empty($trust['needs_legacy_insecure'])) {
                $tlsConfig['insecure'] = true;
            }
            return !empty($trust['suppress_insecure']);
        }
        $tlsConfig['certificate_public_key_sha256'] = [$trust['public_key_sha256']];
        return true;
    }

    private function supportsCertificatePublicKeyPin(): bool
    {
        return $this->clientVersion !== '' && version_compare($this->clientVersion, '1.13.0', '>=');
    }
}
