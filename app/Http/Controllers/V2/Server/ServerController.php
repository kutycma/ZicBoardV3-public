<?php

namespace App\Http\Controllers\V2\Server;

use App\Http\Controllers\Controller;
use App\Services\ServerService;
use App\Services\Core\ProtectedFeatureService;
use App\Services\Server\NodeConfigBuilder;
use App\Support\ServerLoadIpOnline;
use Illuminate\Http\Request;

class ServerController extends Controller
{
    private $nodeInfo;
    private $nodeId;
    private $serverService;

    public function __construct(Request $request)
    {
        $token = $request->input('token');

        // token trống (nghiệp vụ lỗi, không ném exception)
        if (empty($token)) {
            response()->json([
                'status' => 'Thất bại',
                'message' => 'Thiếu token'
            ], 200)->send();
            exit;
        }

        // token lỗi
        if (!hash_equals((string)config('zicboard.server_token'), (string)$token)) {
            response()->json([
                'status' => 'Thất bại',
                'message' => 'Token không hợp lệ'
            ], 200)->send();
            exit;
        }

        $this->nodeId = $request->input('node_id');
        $this->serverService = new ServerService();
        $this->nodeInfo = $this->serverService->getServer($this->nodeId, "zicnode");

        // Node không tồn tại
        if (!$this->nodeInfo) {
            response()->json([
                'status' => 'Thất bại',
                'message' => 'Máy chủ không tồn tại'
            ], 200)->send();
            exit;
        }
    }

    // Backend lấy cấu hình
    public function config(Request $request)
    {
        ServerLoadIpOnline::recordSeen($request, $this->nodeInfo, 'zicnode');

        $routes = $this->nodeInfo['route_id']
            ? $this->serverService->getRoutes($this->nodeInfo['route_id'])->toArray()
            : null;
        $baseConfig = [
            'panel' => 'zicboard',
            'node_type' => 'zicnode',
            'push_interval' => (int)config('zicboard.server_push_interval', 60),
            'pull_interval' => (int)config('zicboard.server_pull_interval', 60),
            'node_report_min_traffic' => (int)config('zicboard.server_node_report_min_traffic', 0),
            'device_online_min_traffic' => (int)config('zicboard.server_device_online_min_traffic', 0)
        ];

        $server = $this->nodeInfo->toArray();
        $server['type'] = 'zicnode';
        if (ProtectedFeatureService::serverUsesProtected($server)) {
            $response = (new ProtectedFeatureService())->nodeConfig(
                'zicnode',
                $this->nodeInfo->toArray(),
                $baseConfig,
                $routes
            );
        } else {
            $response = (new NodeConfigBuilder())->build('zicnode', $this->nodeInfo, $baseConfig, $routes);
        }

        $rsp = json_encode($response);
        $eTag = sha1($rsp);

        // Không dùng abort(304) để tránh nhánh exception
        if ($request->header('If-None-Match') === $eTag) {
            return response('', 304)->header('ETag', "\"{$eTag}\"");
        }

        return response($response)->header('ETag', "\"{$eTag}\"");
    }
}
