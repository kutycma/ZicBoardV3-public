<?php

namespace App\Http\Controllers\V1\Admin\Server;

use App\Http\Controllers\Controller;
use App\Support\ServerLoadIps;
use App\Http\Requests\Admin\ServerVmessSave;
use App\Http\Requests\Admin\ServerVmessUpdate;
use App\Models\ServerVmess;
use App\Services\LegacyTlsSettingsService;
use Illuminate\Http\Request;

class VmessController extends Controller
{
    public function save(ServerVmessSave $request)
    {
        $params = ServerLoadIps::apply($request->validated());

        if ($request->input('id')) {
            $server = ServerVmess::find($request->input('id'));
            if (!$server) {
                abort(500, 'Máy chủ không tồn tại');
            }
            $params = LegacyTlsSettingsService::prepareParamsForSave('vmess', $params, $server);
            try {
                $server->update($params);
            } catch (\Exception $e) {
                abort(500, 'Lưu thất bại');
            }
            return response([
                'data' => true
            ]);
        }

        $params = LegacyTlsSettingsService::prepareParamsForSave('vmess', $params);
        if (!ServerVmess::create($params)) {
            abort(500, 'Tạo thất bại');
        }

        return response([
            'data' => true
        ]);
    }

    public function drop(Request $request)
    {
        if ($request->input('id')) {
            $server = ServerVmess::find($request->input('id'));
            if (!$server) {
                abort(500, 'ID node không tồn tại');
            }
        }
        return response([
            'data' => $server->delete()
        ]);
    }

    public function update(ServerVmessUpdate $request)
    {
        $params = $request->only([
            'show',
            'check',
        ]);

        $server = ServerVmess::find($request->input('id'));

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
        $server = ServerVmess::find($request->input('id'));
        if (!$server) {
            abort(500, 'Máy chủ không tồn tại');
        }
        $server->show = 0;
        $server->check = 0;
        if (!ServerVmess::create($server->toArray())) {
            abort(500, 'Sao chép thất bại');
        }

        return response([
            'data' => true
        ]);
    }
}
