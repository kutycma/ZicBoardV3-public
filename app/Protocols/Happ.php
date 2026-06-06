<?php

namespace App\Protocols;

use App\Services\UserDeviceService;
use App\Services\UserService;
use App\Utils\Helper;

class Happ
{
    public $flag = 'happ';
    private $servers;
    private $user;

    public function __construct($user, $servers)
    {
        $this->user = $user;
        $this->servers = $servers;
    }

    public function handle()
    {
        $user = $this->user;
        $profileTitle = $this->profileTitle();
        $headers = [
            'Content-Type' => 'text/plain; charset=utf-8',
            'profile-title' => $profileTitle,
            'subscription-userinfo' => "upload={$user['u']}; download={$user['d']}; total={$user['transfer_enable']}; expire={$user['expired_at']}",
            'profile-update-interval' => '24',
            'ping-type' => $this->pingType(),
            'check-url-via-proxy' => $this->checkUrlViaProxy(),
            'Content-Disposition' => 'attachment; filename="' . str_replace('"', '', $profileTitle) . '"',
        ];
        if ((new UserDeviceService())->isStrictHwidMode()) {
            $headers['subscription-always-hwid-enable'] = '1';
        }

        $body = implode("\n", array_filter(array_merge(
            $this->directives(),
            [$this->buildServersUri()]
        ), function ($line) {
            return trim((string)$line) !== '';
        }));

        return response(trim($body) . "\n", 200, $headers);
    }

    private function buildServersUri()
    {
        $uris = [];
        foreach ($this->servers as $server) {
            $type = strtolower((string)($server['type'] ?? ''));
            if (in_array($type, ['zicnode', 'v2node']) && isset($server['protocol'])) {
                $type = strtolower((string)$server['protocol']);
            }

            $uri = '';
            if ($type === 'vless') {
                $uri = Helper::buildHappVlessUri($this->user['uuid'], $server);
            } elseif ($type === 'trojan') {
                $uri = Helper::buildHappTrojanUri($this->user['uuid'], $server);
            } else {
                $uri = Helper::buildUri($this->user['uuid'], $server);
            }

            $uri = $this->normalizeAppUri($type, $uri);
            if ($uri !== '') {
                $uris[] = $uri;
            }
        }

        return implode("\n", $uris);
    }

    private function normalizeAppUri(string $type, string $uri): string
    {
        $uri = trim($uri);
        if ($uri === '') {
            return '';
        }

        if ($type === 'shadowsocks' || strpos($uri, 'ss://') === 0) {
            return $this->injectQueryParams($uri, [
                'uot' => 'true',
                'udp' => '1',
            ]);
        }

        if ($type === 'hysteria2' || strpos($uri, 'hysteria2://') === 0) {
            return preg_replace('/^hysteria2:\/\//', 'hy2://', $uri);
        }

        return $uri;
    }

    private function injectQueryParams(string $uri, array $params): string
    {
        $hashPos = strpos($uri, '#');
        $fragment = $hashPos !== false ? substr($uri, $hashPos) : '';
        $uriPart = $hashPos !== false ? substr($uri, 0, $hashPos) : $uri;
        $separator = strpos($uriPart, '?') === false ? '?' : '&';

        return $uriPart . $separator . http_build_query($params, '', '&', PHP_QUERY_RFC3986) . $fragment;
    }

    private function directives(): array
    {
        $directives = [];
        if ((int)config('zicboard.happ_hide_settings_enable', 1) === 1) {
            $directives[] = '#hide-settings: 1';
        }
        $directives[] = '#x-updated: ' . time();

        $providerId = trim((string)config('zicboard.happ_provider_id', ''));
        if ($providerId !== '') {
            $directives[] = '#providerid ' . $providerId;
        }

        if ((int)config('zicboard.happ_announce_enable', 1) === 1) {
            $directives[] = '#announce: base64:' . base64_encode($this->announceText());
        }

        $colorProfile = $this->colorProfile();
        if ($colorProfile !== '') {
            $directives[] = '#color-profile: ' . $colorProfile;
        }

        return $directives;
    }

    private function announceText(): string
    {
        $user = $this->user;
        $used = round(((float)($user['u'] ?? 0) + (float)($user['d'] ?? 0)) / 1073741824, 2);
        $total = round((float)($user['transfer_enable'] ?? 0) / 1073741824, 2);
        $expiredAt = $user['expired_at'] ?? null;
        $expiredDate = $expiredAt ? date('Y-m-d', (int)$expiredAt) : 'Never';
        $resetDay = (new UserService())->getResetDay($user);
        $resetText = ($resetDay !== null && $resetDay > 0) ? " | Reset: {$resetDay} days" : '';

        return "ID: {$user['id']} | Used: {$used}GB / {$total}GB | Expire: {$expiredDate}{$resetText}";
    }

    private function profileTitle(): string
    {
        $title = trim((string)config('zicboard.happ_profile_title', ''));
        if ($title !== '') {
            return $title;
        }
        return (string)config('zicboard.app_name', 'ZicBoard');
    }

    private function pingType(): string
    {
        $type = trim((string)config('zicboard.happ_ping_type', 'proxy-head'));
        return in_array($type, ['proxy', 'proxy-head', 'tcp', 'icmp'], true) ? $type : 'proxy-head';
    }

    private function checkUrlViaProxy(): string
    {
        $url = trim((string)config('zicboard.happ_check_url', ''));
        return $url !== '' ? $url : 'https://cp.cloudflare.com/generate_204';
    }

    private function colorProfile(): string
    {
        $value = trim((string)config('zicboard.happ_color_profile', ''));
        if ($value === '') {
            return '';
        }

        $decoded = json_decode($value, true);
        if (!is_array($decoded)) {
            return '';
        }

        return json_encode($decoded, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    }
}
