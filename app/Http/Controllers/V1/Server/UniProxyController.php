<?php

namespace App\Http\Controllers\V1\Server;

use App\Http\Controllers\Controller;
use App\Services\HappSubscribeCacheService;
use App\Services\LegacyTlsSettingsService;
use App\Services\ServerService;
use App\Services\Core\ProtectedFeatureService;
use App\Services\Server\NodeConfigBuilder;
use App\Services\UserDeviceService;
use App\Services\UserService;
use App\Utils\CacheKey;
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
            $response = LegacyTlsSettingsService::attachToUniProxyResponse($this->nodeType, $this->nodeInfo, $response);
            return $this->etaggedResponse($request, $response);
        }

        $response = (new NodeConfigBuilder())->build(
            $this->nodeType,
            $this->nodeInfo,
            $this->baseConfig(),
            $this->nodeRoutes()
        );
        return $this->etaggedResponse($request, $response);
    }

    public function certReport(Request $request)
    {
        if (!LegacyTlsSettingsService::supportsCertReport($this->nodeType) || !LegacyTlsSettingsService::nodeUsesNormalTls($this->nodeType, $this->nodeInfo)) {
            abort(500, 'Cert report chỉ hỗ trợ node TLS legacy: vmess, vless, trojan, hysteria, tuic, anytls hoặc zicnode TLS thường');
        }

        $data = $request->json()->all();
        if (empty($data)) {
            $data = $request->all();
        }
        if (!is_array($data)) {
            return response(['error' => 'Invalid cert report'], 400);
        }

        $tlsSettings = LegacyTlsSettingsService::settingsFromServer($this->nodeType, $this->nodeInfo);
        $previous = is_array($tlsSettings['auto_cert'] ?? null) ? $tlsSettings['auto_cert'] : [];
        $sha256Hex = $this->normalizeCertSha256Hex($data['sha256_hex'] ?? '');
        if ($sha256Hex === '') {
            $sha256Hex = $this->normalizeCertSha256Hex($data['sha256'] ?? '');
        }
        $sha256 = $this->normalizeCertSha256Colon($data['sha256'] ?? '');
        if ($sha256 === '' && $sha256Hex !== '') {
            $sha256 = $this->hexToColonSha256($sha256Hex);
        }

        $autoCert = [
            'status' => $this->limitedCertReportString($data['status'] ?? 'ok', 32),
            'target' => $this->limitedCertReportString($data['target'] ?? '', 255),
            'mode' => $this->limitedCertReportString($data['mode'] ?? '', 32),
            'source' => $this->limitedCertReportString($data['source'] ?? '', 32),
            'sha256' => $sha256,
            'sha256_hex' => $sha256Hex,
            'public_key_sha256' => $this->normalizePublicKeySha256($data['public_key_sha256'] ?? ''),
            'not_after' => (int)($data['not_after'] ?? 0),
        ];
        if (!empty($data['error'])) {
            $autoCert['error'] = $this->limitedCertReportString($data['error'], 500);
        }
        if ($autoCert['status'] === '') {
            $autoCert['status'] = 'ok';
        }
        if ($autoCert['not_after'] <= 0) {
            unset($autoCert['not_after']);
        }

        $changed = $this->certReportChanged($previous, $autoCert);
        if ($changed) {
            $autoCert['updated_at'] = time();
            $tlsSettings['auto_cert'] = array_filter($autoCert, function ($value) {
                return $value !== null && $value !== '';
            });
            $this->nodeInfo->update([
                LegacyTlsSettingsService::fieldName($this->nodeType) => $tlsSettings,
            ]);
            (new HappSubscribeCacheService())->flushAll();
        }

        return response([
            'data' => true,
            'changed' => $changed,
        ]);
    }

    private function baseConfig()
    {
        return [
            'panel' => 'zicboard',
            'node_type' => $this->nodeType,
            'push_interval' => (int)config('zicboard.server_push_interval', 60),
            'pull_interval' => (int)config('zicboard.server_pull_interval', 60),
            'node_report_min_traffic' => (int)config('zicboard.server_node_report_min_traffic', 0),
            'device_online_min_traffic' => (int)config('zicboard.server_device_online_min_traffic', 0),
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

    private function limitedCertReportString($value, int $limit): string
    {
        $value = trim((string)$value);
        return strlen($value) > $limit ? substr($value, 0, $limit) : $value;
    }

    private function normalizeCertSha256Hex($value): string
    {
        $value = strtolower(preg_replace('/[^a-fA-F0-9]/', '', (string)$value));
        return preg_match('/^[a-f0-9]{64}$/', $value) ? $value : '';
    }

    private function normalizeCertSha256Colon($value): string
    {
        $hex = $this->normalizeCertSha256Hex($value);
        return $hex === '' ? '' : $this->hexToColonSha256($hex);
    }

    private function hexToColonSha256(string $hex): string
    {
        return strtoupper(implode(':', str_split($hex, 2)));
    }

    private function normalizePublicKeySha256($value): string
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

    private function certReportChanged(array $previous, array $next): bool
    {
        foreach (['status', 'target', 'mode', 'source', 'sha256', 'sha256_hex', 'public_key_sha256', 'not_after', 'error'] as $key) {
            $old = $previous[$key] ?? null;
            $new = $next[$key] ?? null;
            if ((string)$old !== (string)$new) {
                return true;
            }
        }
        return false;
    }
}
