<?php

namespace App\Http\Controllers\V1\Manager;

use App\Http\Controllers\Controller;
use App\Models\Log as LogModel;
use App\Services\Manager\ManagerAccessService;
use App\Services\Manager\ManagerAuditService;
use Illuminate\Http\Request;

class AuditController extends Controller
{
    private $access;
    private $audit;

    public function __construct(ManagerAccessService $access, ManagerAuditService $audit)
    {
        $this->access = $access;
        $this->audit = $audit;
    }

    public function fetch(Request $request)
    {
        $manager = $this->access->currentManager($request);
        $current = max(1, (int)$request->input('page', $request->input('current', 1)));
        $pageSize = min(100, max(10, (int)$request->input('limit', $request->input('pageSize', 10))));

        $builder = LogModel::where('title', 'like', 'manager.%')
            ->orderBy('created_at', 'DESC');

        $managerId = (int)$request->input('manager_id', 0);
        if ((int)$manager->is_admin !== 1) {
            $managerId = (int)$manager->id;
        }
        if ($managerId > 0) {
            $this->whereContextNumber($builder, 'manager_id', $managerId);
        }
        if ($request->filled('target_user_id')) {
            $this->whereContextNumber($builder, 'target_user_id', (int)$request->input('target_user_id'));
        }
        if ($request->filled('action')) {
            $action = (string)$request->input('action');
            $builder->where('title', strpos($action, 'manager.') === 0 ? $action : 'manager.' . $action);
        }
        if ($request->filled('start_date')) {
            $start = strtotime((string)$request->input('start_date'));
            if ($start) {
                $builder->where('created_at', '>=', $start);
            }
        }
        if ($request->filled('end_date')) {
            $end = strtotime((string)$request->input('end_date') . ' 23:59:59');
            if ($end) {
                $builder->where('created_at', '<=', $end);
            }
        }

        $total = $builder->count();
        $logs = $builder->forPage($current, $pageSize)->get();
        $logs->transform(function ($log) {
            $log->data = $this->decodeJson($log->data);
            $log->context = $this->decodeJson($log->context);
            $log->action = preg_replace('/^manager\./', '', (string)$log->title);
            return $log;
        });

        $this->audit->record($request, 'audit.fetch', [
            'manager_id' => $manager->id,
            'manager_email' => $manager->email,
            'requested_manager_id' => $request->input('manager_id'),
            'effective_manager_id' => $managerId ?: null,
            'result_count' => $logs->count()
        ]);

        return response([
            'data' => $logs,
            'total' => $total,
            'current' => $current,
            'pageSize' => $pageSize
        ]);
    }

    private function whereContextNumber($builder, $key, $value)
    {
        $needle = '"' . $key . '":' . (int)$value;
        $builder->where(function ($query) use ($needle) {
            $query->where('context', 'like', '%' . $needle . ',%')
                ->orWhere('context', 'like', '%' . $needle . '}%');
        });
    }

    private function decodeJson($value)
    {
        $decoded = json_decode((string)$value, true);
        return is_array($decoded) ? $decoded : [];
    }
}