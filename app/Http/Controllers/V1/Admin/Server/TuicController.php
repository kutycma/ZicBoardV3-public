<?php

namespace App\Http\Controllers\V1\Admin\Server;

use App\Http\Controllers\Controller;
use App\Support\ServerLoadIps;
use App\Models\ServerTuic;
use App\Services\LegacyTlsSettingsService;
use Illuminate\Http\Request;

class TuicController extends Controller
{
    public function save(Request $request)
    {
        $params = $request->validate([
            'show' => '',
            'name' => 'required',
            'group_id' => 'required|array',
            'route_id' => 'nullable|array',
            'parent_id' => 'nullable|integer',
            'host' => 'required',
            'port' => 'required',
            'server_port' => 'required',
            'tags' => 'nullable|array',
            'load_ips' => 'nullable|array',
            'rate' => 'required|numeric',
            'server_name' => 'nullable',
            'tls_settings' => 'nullable|array',
            'insecure' => 'required|in:0,1',
            'disable_sni' => 'required|in:0,1',
            'udp_relay_mode' => 'nullable',
            'zero_rtt_handshake' => 'required|in:0,1',
            'congestion_control' => 'nullable'
        ]);
        $params = ServerLoadIps::apply($params);

        if ($request->input('id')) {
            $server = ServerTuic::find($request->input('id'));
            if (!$server) {
                abort(500, 'Máy chủ không tồn tại');
            }
            $params = LegacyTlsSettingsService::prepareParamsForSave('tuic', $params, $server);
            try {
                $server->update($params);
            } catch (\Exception $e) {
                abort(500, 'Lưu thất bại');
            }
            return response([
                'data' => true
            ]);
        }

        $params = LegacyTlsSettingsService::prepareParamsForSave('tuic', $params);
        if (!ServerTuic::create($params)) {
            abort(500, 'Tạo thất bại');
        }

        return response([
            'data' => true
        ]);
    }

    public function drop(Request $request)
    {
        if ($request->input('id')) {
            $server = ServerTuic::find($request->input('id'));
            if (!$server) {
                abort(500, 'ID node không tồn tại');
            }
        }
        return response([
            'data' => $server->delete()
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'show' => 'in:0,1'
        ], [
            'show.in' => 'Trạng thái hiển thịkhông đúng định dạng'
        ]);
        $params = $request->only([
            'show',
        ]);

        $server = ServerTuic::find($request->input('id'));

        if (!$server) {
            abort(500, 'Máy chủ này không tồn tại');
        }
        try {
            $server->update($params);
        } catch (\Exception $e) {
            abort(500, 'Lưu thất bại');
        }

        return response([
            'data' => true
        ]);
    }

    public function copy(Request $request)
    {
        $server = ServerTuic::find($request->input('id'));
        $server->show = 0;
        if (!$server) {
            abort(500, 'Máy chủ không tồn tại');
        }
        if (!ServerTuic::create($server->toArray())) {
            abort(500, 'Sao chép thất bại');
        }

        return response([
            'data' => true
        ]);
    }
}
