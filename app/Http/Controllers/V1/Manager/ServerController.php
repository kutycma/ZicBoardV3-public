<?php

namespace App\Http\Controllers\V1\Manager;

use App\Http\Controllers\Controller;
use App\Services\Manager\ManagerAccessService;
use App\Services\ServerService;
use Illuminate\Http\Request;

class ServerController extends Controller
{
    private $access;

    public function __construct(ManagerAccessService $access)
    {
        $this->access = $access;
    }

    /**
     * Read-only node status for managers.
     * Only nodes with show=1 are exposed, and only non-sensitive status fields
     * are whitelisted (server keys/secrets are never returned).
     */
    public function fetch(Request $request)
    {
        $this->access->currentManager($request);

        $servers = (new ServerService())->getAllServers();
        $data = [];
        foreach ($servers as $server) {
            if (empty($server['show'])) {
                continue;
            }
            $data[] = $this->presentServer($server);
        }

        return response([
            'data' => $data
        ]);
    }

    private function presentServer(array $server): array
    {
        $tags = $server['tags'] ?? [];
        if (is_string($tags)) {
            $decoded = json_decode($tags, true);
            $tags = is_array($decoded) ? $decoded : [];
        }

        return [
            'id' => (int)($server['id'] ?? 0),
            'type' => (string)($server['type'] ?? ''),
            'name' => $server['name'] ?? null,
            'tags' => array_values((array)$tags),
            'rate' => $server['rate'] ?? null,
            'host' => $server['host'] ?? null,
            'port' => $server['port'] ?? null,
            'parent_id' => $server['parent_id'] ?? null,
            'group_id' => $server['group_id'] ?? [],
            'show' => (int)($server['show'] ?? 0),
            'sort' => $server['sort'] ?? null,
            'online' => (int)($server['online'] ?? 0),
            'last_check_at' => $server['last_check_at'] ?? null,
            'last_push_at' => $server['last_push_at'] ?? null,
            'available_status' => (int)($server['available_status'] ?? 0)
        ];
    }
}
