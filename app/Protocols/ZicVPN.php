<?php

namespace App\Protocols;

use App\Utils\Helper;

class ZicVPN
{
    public $flag = 'zicvpn';
    private $servers;
    private $user;

    public function __construct($user, $servers)
    {
        $this->user = $user;
        $this->servers = $servers;
    }

    public function handle()
    {
        $core = $this->requestedCore();

        if (in_array($core, ['mihomo', 'clash', 'clashmeta', 'clash-meta', 'meta'], true)) {
            return $this->handleMihomo();
        }

        return $this->handleXray();
    }

    private function handleXray()
    {
        $this->setCommonHeaders('xray');
        header('content-type: text/plain; charset=utf-8');

        $uri = '';
        $uuid = $this->userValue('uuid');
        foreach ($this->servers as $server) {
            $uri .= Helper::buildUri($uuid, $this->normalizeServer($server));
        }

        return base64_encode($uri);
    }

    private function handleMihomo()
    {
        $this->setCommonHeaders('mihomo');
        header('content-type: application/json; charset=utf-8');

        $proxies = [];
        $proxyNames = [];
        $seenNames = [];

        foreach ($this->servers as $server) {
            $server = $this->normalizeServer($server);
            $proxy = $this->buildMihomoProxy($server);
            if (!$proxy || empty($proxy['name'])) {
                continue;
            }

            $proxy['name'] = $this->uniqueProxyName((string)$proxy['name'], $seenNames);
            $proxies[] = $proxy;
            $proxyNames[] = $proxy['name'];
        }

        $config = [
            'mixed-port' => 7890,
            'allow-lan' => false,
            'mode' => 'rule',
            'log-level' => 'warning',
            'ipv6' => false,
            'profile' => [
                'store-selected' => true,
                'store-fake-ip' => true,
            ],
            'dns' => [
                'enable' => true,
                'ipv6' => false,
                'enhanced-mode' => 'fake-ip',
                'fake-ip-range' => '198.18.0.1/16',
                'nameserver' => [
                    '1.1.1.1',
                    '8.8.8.8',
                ],
            ],
            'proxies' => $proxies,
            'proxy-groups' => [
                [
                    'name' => 'ZicVPN',
                    'type' => 'select',
                    'proxies' => $proxyNames,
                ],
                [
                    'name' => 'ZicVPN Auto',
                    'type' => 'url-test',
                    'proxies' => $proxyNames,
                    'url' => 'http://www.gstatic.com/generate_204',
                    'interval' => 300,
                ],
            ],
            'rules' => [
                'MATCH,ZicVPN',
            ],
            'zicvpn' => [
                'core' => 'mihomo',
                'generated_at' => time(),
            ],
        ];

        return json_encode($config, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    }

    private function buildMihomoProxy(array $server)
    {
        $uuid = $this->userValue('uuid');

        switch ($server['type'] ?? null) {
            case 'shadowsocks':
                return ClashMeta::buildShadowsocks($uuid, $server);
            case 'vmess':
                return ClashMeta::buildVmess($uuid, $server);
            case 'vless':
                return ClashMeta::buildVless($uuid, $server);
            case 'trojan':
                return ClashMeta::buildTrojan($uuid, $server);
            case 'tuic':
                return ClashMeta::buildTuic($uuid, $server);
            case 'anytls':
                return ClashMeta::buildAnyTLS($uuid, $server);
            case 'hysteria':
                return ClashMeta::buildHysteria($uuid, $server);
            case 'hysteria2':
                $server['version'] = 2;
                return ClashMeta::buildHysteria($uuid, $server);
        }

        return null;
    }

    private function normalizeServer($server): array
    {
        $server = is_array($server) ? $server : (array)$server;

        if (isset($server['network_settings']) && is_string($server['network_settings'])) {
            $decoded = json_decode($server['network_settings'], true);
            $server['network_settings'] = json_last_error() === JSON_ERROR_NONE ? $decoded : [];
        }
        if (isset($server['networkSettings']) && is_string($server['networkSettings'])) {
            $decoded = json_decode($server['networkSettings'], true);
            $server['networkSettings'] = json_last_error() === JSON_ERROR_NONE ? $decoded : [];
        }
        if (isset($server['tls_settings']) && is_string($server['tls_settings'])) {
            $decoded = json_decode($server['tls_settings'], true);
            $server['tls_settings'] = json_last_error() === JSON_ERROR_NONE ? $decoded : [];
        }
        if (isset($server['tlsSettings']) && is_string($server['tlsSettings'])) {
            $decoded = json_decode($server['tlsSettings'], true);
            $server['tlsSettings'] = json_last_error() === JSON_ERROR_NONE ? $decoded : [];
        }

        if (in_array(($server['type'] ?? null), ['zicnode', 'v2node'], true) && isset($server['protocol'])) {
            $server['type'] = $server['protocol'];
        }

        $server['type'] = strtolower((string)($server['type'] ?? ''));
        $server['network'] = strtolower((string)($server['network'] ?? 'tcp'));
        $server['tls'] = (int)($server['tls'] ?? 0);
        $server['network_settings'] = $server['network_settings'] ?? ($server['networkSettings'] ?? []);
        $server['tls_settings'] = $server['tls_settings'] ?? ($server['tlsSettings'] ?? []);

        return $server;
    }

    private function uniqueProxyName(string $name, array &$seenNames): string
    {
        $name = trim($name) !== '' ? trim($name) : 'ZicVPN Node';
        $baseName = $name;
        $index = 2;

        while (isset($seenNames[$name])) {
            $name = "{$baseName} {$index}";
            $index++;
        }

        $seenNames[$name] = true;
        return $name;
    }

    private function requestedCore(): string
    {
        $core = request()->input('core', request()->input('engine', 'xray'));
        $core = strtolower(trim((string)$core));

        return $core !== '' ? $core : 'xray';
    }

    private function setCommonHeaders(string $core): void
    {
        $appName = config('zicboard.app_name', 'ZicBoard');
        $upload = $this->userValue('u', 0);
        $download = $this->userValue('d', 0);
        $total = $this->userValue('transfer_enable', 0);
        $expire = $this->userValue('expired_at', 0);

        header("subscription-userinfo: upload={$upload}; download={$download}; total={$total}; expire={$expire}");
        header('profile-update-interval: 24');
        header("content-disposition: attachment; filename*=UTF-8''" . rawurlencode("{$appName}-ZicVPN-{$core}"));
        header('x-zicvpn-core: ' . $core);
    }

    private function userValue(string $key, $default = ''): string
    {
        if (is_array($this->user)) {
            return (string)($this->user[$key] ?? $default);
        }

        if ($this->user instanceof \ArrayAccess && isset($this->user[$key])) {
            return (string)$this->user[$key];
        }

        if (is_object($this->user) && isset($this->user->{$key})) {
            return (string)$this->user->{$key};
        }

        return (string)$default;
    }
}
