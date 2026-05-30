<?php

namespace App\Http\Controllers\V1\Server;

use App\Http\Controllers\Controller;
use App\Services\ServerService;
use App\Services\Core\ProtectedFeatureService;
use App\Services\UserDeviceService;
use App\Services\UserService;
use App\Utils\CacheKey;
use App\Utils\Helper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use MessagePack\Packer;

class UniProxyController extends Controller
{
    private $nodeType;
    private $nodeInfo;
    private $nodeId;
    private $serverService;

    public function __construct(Request $request)
    {
        $token = $request->input('token');
        if (empty($token)) {
            abort(500, 'Thiếu token');
        }
        if (!hash_equals((string)config('zicboard.server_token'), (string)$token)) {
            abort(500, 'Token không hợp lệ');
        }
        $this->nodeType = $request->input('node_type');
        if ($this->nodeType === 'v2ray') $this->nodeType = 'vmess';
        if ($this->nodeType === 'hysteria2') $this->nodeType = 'hysteria';
        if ($this->nodeType === 'v2node') $this->nodeType = 'zicnode';
        $this->nodeId = $request->input('node_id');
        $this->serverService = new ServerService();
        $this->nodeInfo = $this->serverService->getServer($this->nodeId, $this->nodeType);
        if (!$this->nodeInfo) abort(500, 'Máy chủ không tồn tại');
        if ($this->usesProtectedFeature()) {
            (new ProtectedFeatureService())->ensureEnabled();
        }
    }

    private function usesProtectedFeature()
    {
        $server = $this->nodeInfo->toArray();
        $server['type'] = $this->nodeType;
        return ProtectedFeatureService::serverUsesProtected($server);
    }

    // Backend lấy người dùng
    public function user(Request $request)
    {
        ini_set('memory_limit', -1);
        Cache::put(CacheKey::get('SERVER_' . strtoupper($this->nodeType) . '_LAST_CHECK_AT', $this->nodeInfo->id), time(), 3600);
        $users = $this->serverService->getAvailableUsers($this->nodeInfo->group_id)
            ->map(function ($user) {
                return array_filter($user->toArray(), function ($v) {
                    return !is_null($v);
                });
            })->toArray();

        $response['users'] = $users;
        if (strpos($request->header('X-Response-Format'), 'msgpack') !== false) {
            $packer = new Packer();
            $response = $packer->pack($response);
            $eTag = sha1($response);
            if (strpos($request->header('If-None-Match'), $eTag) !== false) {
                abort(304);
            }

            return response($response, 200, ['Content-Type' => 'application/x-msgpack'])->header('ETag', "\"{$eTag}\"");
        } else {
            $eTag = sha1(json_encode($response));
            if (strpos($request->header('If-None-Match'), $eTag) !== false) {
                abort(304);
            }

            return response($response)->header('ETag', "\"{$eTag}\"");
        }
    }

    // Backend gửi dữ liệu
    public function push(Request $request)
    {
        $data = $request->json()->all();
        if (empty($data)) {
            $data = $_POST;
        }
        if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
            // JSON decoding error
            return response([
                'error' => 'Invalid traffic data'
            ], 400);
        }
        Cache::put(CacheKey::get('SERVER_' . strtoupper($this->nodeType) . '_ONLINE_USER', $this->nodeInfo->id), count($data), 3600);
        Cache::put(CacheKey::get('SERVER_' . strtoupper($this->nodeType) . '_LAST_PUSH_AT', $this->nodeInfo->id), time(), 3600);
        $userService = new UserService();
        $userService->trafficFetch($this->nodeInfo->toArray(), $this->nodeType, $data);

        return response([
            'data' => true
        ]);
    }

    // Backend lấy dữ liệu online
    public function alivelist(Request $request)
    {
        $alive = Cache::remember('ALIVE_LIST', 60, function () {
            $userService = new UserService();
            $users = $userService->getDeviceLimitedUsers();

            if ($users->isEmpty()) {
                return [];
            }

            $keys = [];
            $idMap = [];
            foreach ($users as $user) {
                $key = 'ALIVE_IP_SUBSCRIPTION_' . $user->id;
                $keys[] = $key;
                $idMap[$key] = $user->id;
            }

            $results = Cache::many($keys);
            $alive = [];
            foreach ($results as $key => $data) {
                if (is_array($data) && isset($data['alive_ip'])) {
                    $alive[$idMap[$key]] = $data['alive_ip'];
                }
            }
            return $alive;
        });
        return response()->json(['alive' => (object)$alive]);
    }

    // Backend gửi dữ liệu online
    public function alive(Request $request)
    {
        $data = $request->json()->all();
        if (empty($data)) {
            $data = $_POST;
        }
        if (!is_array($data)) {
            return response([
                'error' => 'Invalid online data format'
            ], 400);
        }
        $deviceService = new UserDeviceService();
        $deviceService->recordOnlineDevicesFromNodeAlive($data, $this->nodeType, (int)$this->nodeInfo->id);
        $data = $deviceService->translateNodeAliveData($data);
        $updateAt = time();
        $cacheKeys = array_map(function ($uid) {
            return 'ALIVE_IP_SUBSCRIPTION_' . $uid;
        }, array_keys($data));

        $cachedData = Cache::many($cacheKeys);
        $updates = [];

        foreach ($data as $uid => $ips) {
            if (!is_numeric($uid) || !is_array($ips)) {
                continue; // Bỏ qua dữ liệu không hợp lệ
            }
            $key = 'ALIVE_IP_SUBSCRIPTION_' . $uid;
            $ips_array = $cachedData[$key] ?? [];

            // Cập nhật dữ liệu node
            $ips_array[$this->nodeType . $this->nodeId] = ['aliveips' => $ips, 'lastupdateAt' => $updateAt];
            // Dọn dữ liệu hết hạn
            foreach ($ips_array as $nodetypeid => $oldips) {
                if ($nodetypeid !== 'alive_ip' && is_array($oldips) && ($updateAt - ($oldips['lastupdateAt'] ?? 0) > 100)) {
                    unset($ips_array[$nodetypeid]);
                }
            }

            // Tính số IP hoạt động
            $count = 0;
            if (config('zicboard.device_limit_mode', 0) == 1) {
                $ipmap = [];
                foreach ($ips_array as $nodetypeid => $newdata) {
                    if ($nodetypeid !== 'alive_ip' && is_array($newdata) && isset($newdata['aliveips'])) {
                        foreach ($newdata['aliveips'] as $ip_NodeId) {
                            $ip = explode("_", $ip_NodeId)[0];
                            $ipmap[$ip] = 1;
                        }
                    }
                }
                $count = count($ipmap);
            } else {
                foreach ($ips_array as $nodetypeid => $newdata) {
                    if ($nodetypeid !== 'alive_ip' && is_array($newdata) && isset($newdata['aliveips'])) {
                        $count += count($newdata['aliveips']);
                    }
                }
            }
            $ips_array['alive_ip'] = $count;

            $updates[$key] = $ips_array;
        }

        // Cập nhật cache hàng loạt
        foreach ($updates as $key => $value) {
            Cache::put($key, $value, 120);
        }

        return response([
            'data' => true
        ]);
    }

    // Backend lấy cấu hình
    public function config(Request $request)
    {
        if ($this->usesProtectedFeature()) {
            $response = (new ProtectedFeatureService())->nodeConfig(
                $this->nodeType,
                $this->nodeInfo->toArray(),
                $this->baseConfig(),
                $this->nodeRoutes()
            );
            return $this->etaggedResponse($request, $response);
        }

        switch ($this->nodeType) {
            case 'shadowsocks':
                $response = [
                    'server_port' => $this->nodeInfo->server_port,
                    'cipher' => $this->nodeInfo->cipher,
                    'obfs' => $this->nodeInfo->obfs,
                    'obfs_settings' => $this->nodeInfo->obfs_settings
                ];

                if ($this->nodeInfo->cipher === '2022-blake3-aes-128-gcm') {
                    $response['server_key'] = Helper::getServerKey($this->nodeInfo->created_at, 16);
                }
                if ($this->nodeInfo->cipher === '2022-blake3-aes-256-gcm') {
                    $response['server_key'] = Helper::getServerKey($this->nodeInfo->created_at, 32);
                }
                break;
            case 'vmess':
                $response = [
                    'server_port' => $this->nodeInfo->server_port,
                    'network' => $this->nodeInfo->network,
                    'networkSettings' => $this->nodeInfo->networkSettings,
                    'tls' => $this->nodeInfo->tls
                ];
                break;
            case 'vless':
                $response = [
                    'server_port' => $this->nodeInfo->server_port,
                    'network' => $this->nodeInfo->network,
                    'networkSettings' => $this->nodeInfo->network_settings,
                    'tls' => $this->nodeInfo->tls,
                    'flow' => $this->nodeInfo->flow
                ];
                if ((int)$this->nodeInfo->tls === 1) {
                    $response['tls_settings'] = $this->nodeInfo->tls_settings;
                }
                break;
            case 'trojan':
                $response = [
                    'host' => $this->nodeInfo->host,
                    'network' => $this->nodeInfo->network,
                    'networkSettings' => $this->nodeInfo->network_settings,
                    'server_port' => $this->nodeInfo->server_port,
                    'server_name' => $this->nodeInfo->server_name,
                ];
                break;
            case 'tuic':
                $response = [
                    'server_port' => $this->nodeInfo->server_port,
                    'server_name' => $this->nodeInfo->server_name,
                    'congestion_control' => $this->nodeInfo->congestion_control,
                    'zero_rtt_handshake' => $this->nodeInfo->zero_rtt_handshake ? true : false,
                ];
                break;
            case 'hysteria':
                $response = [
                    'version' => $this->nodeInfo->version,
                    'host' => $this->nodeInfo->host,
                    'server_port' => $this->nodeInfo->server_port,
                    'server_name' => $this->nodeInfo->server_name,
                    'up_mbps' => $this->nodeInfo->up_mbps,
                    'down_mbps' => $this->nodeInfo->down_mbps
                ];
                if ($this->nodeInfo->version == 1) {
                    $response['obfs'] = $this->nodeInfo->obfs_password ?? null;
                } elseif ($this->nodeInfo->version == 2) {
                    if ($this->nodeInfo->up_mbps == 0 && $this->nodeInfo->down_mbps == 0) {
                        $response['ignore_client_bandwidth'] = true;
                    } else {
                        $response['ignore_client_bandwidth'] = false;
                    }
                    $response['obfs'] = $this->nodeInfo->obfs ?? null;
                    $response['obfs-password'] = $this->nodeInfo->obfs_password ?? null;
                }
                break;
        }
        $response['base_config'] = $this->baseConfig();
        $routes = $this->nodeRoutes();
        if ($routes !== null) {
            $response['routes'] = $routes;
        }
        return $this->etaggedResponse($request, $response);
    }

    private function baseConfig()
    {
        return [
            'panel' => 'zicboard',
            'node_type' => $this->nodeType,
            'push_interval' => (int)config('zicboard.server_push_interval', 60),
            'pull_interval' => (int)config('zicboard.server_pull_interval', 60)
        ];
    }

    private function nodeRoutes()
    {
        if (!$this->nodeInfo['route_id']) {
            return null;
        }
        return $this->serverService->getRoutes($this->nodeInfo['route_id'])->toArray();
    }

    private function etaggedResponse(Request $request, array $response)
    {
        $eTag = sha1(json_encode($response));
        if (strpos($request->header('If-None-Match'), $eTag) !== false) {
            abort(304);
        }

        return response($response)->header('ETag', "\"{$eTag}\"");
    }
}
