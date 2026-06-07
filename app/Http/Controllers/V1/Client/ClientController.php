<?php

namespace App\Http\Controllers\V1\Client;

use App\Http\Controllers\Controller;
use App\Protocols\General;
use App\Protocols\Happ;
use App\Protocols\Singbox\Singbox;
use App\Protocols\Singbox\SingboxOld;
use App\Protocols\ClashMeta;
use App\Services\ServerService;
use App\Services\UserService;
use App\Services\UserDeviceService;
use App\Services\Core\ProtectedFeatureService;
use App\Utils\Helper;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function subscribe(Request $request)
    {
        $requestFlag = (string)$request->input('flag', '');
        $userAgent = (string)($_SERVER['HTTP_USER_AGENT'] ?? '');
        $flag = $requestFlag !== '' ? $requestFlag : $userAgent;
        $flag = strtolower($flag);
        $requestFlag = strtolower($requestFlag);
        $userAgent = strtolower($userAgent);
        $user = $request->user;
        $subscription = $request->input('subscription') ?: $request->subscription;
        $customSni = null;
        if ((int)config('zicboard.change_sni_enable', 1)) {
            $customSni = $request->input('sni');
            if ($customSni === null && $subscription) {
                $customSni = is_array($subscription)
                    ? ($subscription['network_settings'] ?? null)
                    : ($subscription->network_settings ?? null);
            }
        }
        // account not expired and is not banned.
        $userService = new UserService();
        if ($userService->isAvailable($user)) {
            $deviceLimitExceeded = $this->isDeviceLimitExceeded($request);
            if ($deviceLimitExceeded) {
                $servers = $this->deviceLimitExceededServers($request);
            } else {
                $serverService = new ServerService();
                $servers = $serverService->getAvailableServers($user);
                if ($this->usesProtectedFeature($servers)) {
                    (new ProtectedFeatureService())->ensureEnabled();
                }
                $this->applyCustomSni($servers, $customSni);
            }
            if ($this->isHappClient($requestFlag, $userAgent)) {
                $class = new Happ($user, $servers);
                return $class->handle();
            }
            if (!$deviceLimitExceeded) {
                $this->setSubscribeInfoToServers($servers, $user);
            }
            if($flag) {
                if (strpos($flag, 'sing') === false) {
                    foreach (array_reverse(glob(app_path('Protocols') . '/*.php')) as $file) {
                        $file = 'App\\Protocols\\' . basename($file, '.php');
                        $class = new $file($user, $servers);
                        if (strpos($flag, $class->flag) !== false) {
                            return $class->handle();
                        }
                    }
                }
                if (strpos($flag, 'sing') !== false) {
                    $version = null;
                    if (preg_match('/sing-box\s+([0-9.]+)/i', $flag, $matches)) {
                        $version = $matches[1];
                    }
                    if (!is_null($version) && $version >= '1.12.0') {
                        $class = new Singbox($user, $servers);
                    } else {
                        $class = new SingboxOld($user, $servers);
                    }
                    return $class->handle();
                }
            }
            $class = new General($user, $servers);
            return $class->handle();
        }
    }

    private function isDeviceLimitExceeded(Request $request): bool
    {
        return (bool)$request->attributes->get(UserDeviceService::REQUEST_DEVICE_LIMIT_EXCEEDED, false);
    }

    private function deviceLimitExceededServers(Request $request): array
    {
        $attemptNumber = max(1, (int)$request->attributes->get(UserDeviceService::REQUEST_DEVICE_ATTEMPT_NUMBER, 1));
        $deviceLimit = max(0, (int)$request->attributes->get(UserDeviceService::REQUEST_DEVICE_LIMIT, 0));

        return [
            $this->deviceLimitExceededServer("Đây là thiết bị thứ {$attemptNumber}", 1),
            $this->deviceLimitExceededServer("Tối đa {$deviceLimit} thiết bị", 2)
        ];
    }

    private function deviceLimitExceededServer(string $name, int $id): array
    {
        return [
            'id' => $id,
            'name' => $name,
            'type' => 'shadowsocks',
            'host' => '127.0.0.1',
            'port' => 9,
            'cipher' => 'aes-128-gcm',
            'network' => 'tcp',
            'obfs' => null,
            'network_settings' => [],
            'tls' => 0,
            'last_check_at' => time(),
            'is_online' => 1,
            'cache_key' => 'device-limit-exceeded-' . $id
        ];
    }

    private function isHappClient(string $flag, string $userAgent): bool
    {
        return strpos($flag, 'happ') !== false || strpos($userAgent, 'happ') !== false;
    }

    private function usesProtectedFeature(array $servers)
    {
        foreach ($servers as $server) {
            if (ProtectedFeatureService::serverUsesProtected($server)) {
                return true;
            }
        }
        return false;
    }

    private function applyCustomSni(&$servers, $customSni)
    {
        if ($customSni === null || trim((string)$customSni) === '') {
            return;
        }

        $customSni = trim((string)$customSni);
        foreach ($servers as &$server) {
            $type = $server['type'] ?? null;

            if ($type === 'shadowsocks' && (($server['obfs'] ?? null) === 'http')) {
                $server['obfs-host'] = $customSni;
                if (isset($server['network_settings']['Host'])) {
                    $server['network_settings']['Host'] = $customSni;
                }
            }

            if ($type === 'vmess') {
                $this->setArrayValue($server, ['tlsSettings', 'serverName'], $customSni);
                $this->setArrayValue($server, ['tls_settings', 'server_name'], $customSni);
                if (($server['network'] ?? null) === 'ws') {
                    $this->setArrayValue($server, ['networkSettings', 'headers', 'Host'], $customSni);
                    $this->setArrayValue($server, ['network_settings', 'headers', 'Host'], $customSni);
                }
            }

            if (in_array($type, ['vless', 'zicnode'])) {
                $this->setArrayValue($server, ['tls_settings', 'server_name'], $customSni);
                $this->setArrayValue($server, ['tlsSettings', 'serverName'], $customSni);
                if (($server['network'] ?? null) === 'ws') {
                    $this->setArrayValue($server, ['network_settings', 'headers', 'Host'], $customSni);
                    $this->setArrayValue($server, ['networkSettings', 'headers', 'Host'], $customSni);
                }
            }

            if ($type === 'trojan') {
                if (array_key_exists('server_name', $server)) {
                    $server['server_name'] = $customSni;
                }
                $this->setArrayValue($server, ['tls_settings', 'server_name'], $customSni);
                if (($server['network'] ?? null) === 'ws') {
                    $this->setArrayValue($server, ['network_settings', 'headers', 'Host'], $customSni);
                    $this->setArrayValue($server, ['networkSettings', 'headers', 'Host'], $customSni);
                }
            }

            if (in_array($type, ['hysteria', 'tuic', 'anytls'])) {
                if (array_key_exists('server_name', $server)) {
                    $server['server_name'] = $customSni;
                }
                $this->setArrayValue($server, ['tls_settings', 'server_name'], $customSni);
            }
        }
        unset($server);
    }

    private function setArrayValue(&$array, array $path, $value)
    {
        $target = &$array;
        foreach ($path as $index => $key) {
            if (!is_array($target) || !array_key_exists($key, $target)) {
                return;
            }
            if ($index === count($path) - 1) {
                $target[$key] = $value;
                return;
            }
            $target = &$target[$key];
        }
    }

    private function setSubscribeInfoToServers(&$servers, $user)
    {
        if (!isset($servers[0])) return;
        if (!(int)config('zicboard.show_info_to_server_enable', 0)) return;
        $useTraffic = $user['u'] + $user['d'];
        $totalTraffic = $user['transfer_enable'];
        $remainingTraffic = Helper::trafficConvert($totalTraffic - $useTraffic);
        $expiredDate = $user['expired_at'] ? date('Y-m-d', $user['expired_at']) : 'Không giới hạn thời hạn';
        $userService = new UserService();
        $resetDay = $userService->getResetDay($user);
        array_unshift($servers, array_merge($servers[0], [
            'name' => "Gói hết hạn:{$expiredDate}",
        ]));
        if ($resetDay) {
            array_unshift($servers, array_merge($servers[0], [
                'name' => "Còn lại đến lần reset tiếp theo:{$resetDay} ngày",
            ]));
        }
        array_unshift($servers, array_merge($servers[0], [
            'name' => "Dung lượng còn lại:{$remainingTraffic}",
        ]));
    }
}
