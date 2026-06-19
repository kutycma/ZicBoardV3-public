<?php

namespace App\Http\Controllers\V1\Admin\Server;

use App\Http\Controllers\Controller;
use App\Support\ServerLoadIps;
use App\Models\ServerAnytls;
use App\Services\LegacyTlsSettingsService;
use App\Services\Core\ProtectedFeatureService;
use Illuminate\Http\Request;

class AnyTLSController extends Controller
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
            'padding_scheme' => 'nullable',
        ]);
        $params = ServerLoadIps::apply($params);

        $params = (new ProtectedFeatureService())->prepareServerParams('anytls', $params);

        if ($request->input('id')) {
            $server = ServerAnytls::find($request->input('id'));
            if (!$server) {
                abort(500, 'Máy chủ không tồn tại');
            }
            $params = LegacyTlsSettingsService::prepareParamsForSave('anytls', $params, $server);
            try {
                $server->update($params);
            } catch (\Exception $e) {
                abort(500, 'Lưu thất bại');
            }
            return response([
                'data' => true
            ]);
        }

        $params = LegacyTlsSettingsService::prepareParamsForSave('anytls', $params);
        if (!ServerAnytls::create($params)) {
            abort(500, 'Tạo thất bại');
        }

        return response([
            'data' => true
        ]);
    }

    public function drop(Request $request)
    {
        if ($request->input('id')) {
            $server = ServerAnytls::find($request->input('id'));
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

        $server = ServerAnytls::find($request->input('id'));

        if (!$server) {
            abort(500, 'Máy chủ này không tồn tại');
        }
        if ((int)($params['show'] ?? 0) === 1) {
            (new ProtectedFeatureService())->ensureEnabled();
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
        $server = ServerAnytls::find($request->input('id'));
        $server->show = 0;
        if (!$server) {
            abort(500, 'Máy chủ không tồn tại');
        }
        if (!ServerAnytls::create($server->toArray())) {
            abort(500, 'Sao chép thất bại');
        }

        return response([
            'data' => true
        ]);
    }
}
