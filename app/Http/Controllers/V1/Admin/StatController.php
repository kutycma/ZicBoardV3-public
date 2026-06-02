<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\CommissionLog;
use App\Models\Order;
use App\Models\ServerHysteria;
use App\Models\ServerTuic;
use App\Models\ServerShadowsocks;
use App\Models\ServerTrojan;
use App\Models\ServerVmess;
use App\Models\ServerVless;
use App\Models\ServerAnytls;
use App\Models\ServerZicnode;
use App\Models\Stat;
use App\Models\StatServer;
use App\Models\StatUser;
use App\Models\Ticket;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StatController extends Controller
{
    public function getOverride(Request $request)
    {
        $todayStart = strtotime(date('Y-m-d'));
        $now = time();

        return [
            'data' => [
                'online_user' => User::where('t','>=', time() - 600)
                    ->count(),
                'month_income' => Order::where('created_at', '>=', strtotime(date('Y-m-1')))
                    ->where('created_at', '<', $now)
                    ->whereNotIn('status', [0, 2])
                    ->sum('total_amount'),
                'month_register_total' => User::where('created_at', '>=', strtotime(date('Y-m-1')))
                    ->where('created_at', '<', $now)
                    ->count(),
                'day_register_total' => User::where('created_at', '>=', $todayStart)
                    ->where('created_at', '<', $now)
                    ->count(),
                'ticket_pending_total' => Ticket::where('status', 0)
                    ->where('reply_status', 0)
                    ->count(),
                'commission_pending_total' => Order::where('commission_status', 0)
                    ->where('invite_user_id', '!=', NULL)
                    ->whereNotIn('status', [0, 2])
                    ->where('commission_balance', '>', 0)
                    ->count(),
                'day_income' => Order::where('created_at', '>=', $todayStart)
                    ->where('created_at', '<', $now)
                    ->whereNotIn('status', [0, 2])
                    ->sum('total_amount'),
                'day_order_total' => Order::where('created_at', '>=', $todayStart)
                    ->where('created_at', '<', $now)
                    ->count(),
                'day_paid_order_total' => Order::where('paid_at', '>=', $todayStart)
                    ->where('paid_at', '<', $now)
                    ->whereNotIn('status', [0, 2])
                    ->count(),
                'day_paid_income' => Order::where('paid_at', '>=', $todayStart)
                    ->where('paid_at', '<', $now)
                    ->whereNotIn('status', [0, 2])
                    ->sum('total_amount'),
                'day_commission_payout' => CommissionLog::where('created_at', '>=', $todayStart)
                    ->where('created_at', '<', $now)
                    ->sum('get_amount'),
                'day_commission_count' => CommissionLog::where('created_at', '>=', $todayStart)
                    ->where('created_at', '<', $now)
                    ->count(),
                'last_month_income' => Order::where('created_at', '>=', strtotime('-1 month', strtotime(date('Y-m-1'))))
                    ->where('created_at', '<', strtotime(date('Y-m-1')))
                    ->whereNotIn('status', [0, 2])
                    ->sum('total_amount'),
                'commission_month_payout' => CommissionLog::where('created_at', '>=', strtotime(date('Y-m-1')))
                    ->where('created_at', '<', $now)
                    ->sum('get_amount'),
                'commission_last_month_payout' => CommissionLog::where('created_at', '>=', strtotime('-1 month', strtotime(date('Y-m-1'))))
                    ->where('created_at', '<', strtotime(date('Y-m-1')))
                    ->sum('get_amount'),
            ]
        ];
    }

    public function getOrder(Request $request)
    {
        $todayStart = strtotime(date('Y-m-d'));
        $startAt = strtotime('-30 day', $todayStart);
        $now = time();
        $statistics = Stat::where('record_type', 'd')
            ->where('record_at', '>=', $startAt)
            ->where('record_at', '<', $todayStart)
            ->orderBy('record_at', 'ASC')
            ->get()
            ->keyBy(function ($statistic) {
                return date('Y-m-d', $statistic['record_at']);
            });

        $series = [
            ['type' => 'register_count', 'field' => 'register_count', 'amount' => false],
            ['type' => 'order_count', 'field' => 'order_count', 'amount' => false],
            ['type' => 'paid_count', 'field' => 'paid_count', 'amount' => false],
            ['type' => 'paid_total', 'field' => 'paid_total', 'amount' => true],
            ['type' => 'commission_count', 'field' => 'commission_count', 'amount' => false],
            ['type' => 'commission_total', 'field' => 'commission_total', 'amount' => true],
        ];

        $result = [];

        for ($cursor = $startAt; $cursor <= $todayStart; $cursor = strtotime('+1 day', $cursor)) {
            $dateKey = date('Y-m-d', $cursor);
            $date = date('m-d', $cursor);
            $statistic = $cursor === $todayStart
                ? $this->buildLiveDailyStat($todayStart, $now)
                : $this->normalizeDailyStat($statistics->get($dateKey));

            foreach ($series as $item) {
                $value = $statistic[$item['field']] ?? 0;
                $result[] = [
                    'type' => $item['type'],
                    'date' => $date,
                    'value' => $item['amount'] ? $value / 100 : $value
                ];
            }
        }

        return [
            'data' => $result
        ];
    }

    private function buildLiveDailyStat($startAt, $endAt)
    {
        return [
            'register_count' => User::where('created_at', '>=', $startAt)
                ->where('created_at', '<', $endAt)
                ->count(),
            'order_count' => Order::where('created_at', '>=', $startAt)
                ->where('created_at', '<', $endAt)
                ->count(),
            'paid_count' => Order::where('paid_at', '>=', $startAt)
                ->where('paid_at', '<', $endAt)
                ->whereNotIn('status', [0, 2])
                ->count(),
            'paid_total' => Order::where('paid_at', '>=', $startAt)
                ->where('paid_at', '<', $endAt)
                ->whereNotIn('status', [0, 2])
                ->sum('total_amount'),
            'commission_count' => CommissionLog::where('created_at', '>=', $startAt)
                ->where('created_at', '<', $endAt)
                ->count(),
            'commission_total' => CommissionLog::where('created_at', '>=', $startAt)
                ->where('created_at', '<', $endAt)
                ->sum('get_amount'),
        ];
    }

    private function normalizeDailyStat($statistic)
    {
        if (!$statistic) {
            $statistic = [];
        }

        return [
            'register_count' => $statistic['register_count'] ?? 0,
            'order_count' => $statistic['order_count'] ?? 0,
            'paid_count' => $statistic['paid_count'] ?? 0,
            'paid_total' => $statistic['paid_total'] ?? 0,
            'commission_count' => $statistic['commission_count'] ?? 0,
            'commission_total' => $statistic['commission_total'] ?? 0,
        ];
    }

    public function getServerLastRank()
    {
        $servers = [
            'shadowsocks' => ServerShadowsocks::where('parent_id', null)->get()->toArray(),
            'v2ray' => ServerVmess::where('parent_id', null)->get()->toArray(),
            'trojan' => ServerTrojan::where('parent_id', null)->get()->toArray(),
            'vmess' => ServerVmess::where('parent_id', null)->get()->toArray(),
            'vless' => ServerVless::where('parent_id', null)->get()->toArray(),
            'tuic' => ServerTuic::where('parent_id', null)->get()->toArray(),
            'hysteria'=> ServerHysteria::where('parent_id', null)->get()->toArray(),
            'anytls' => ServerAnytls::where('parent_id', null)->get()->toArray(),
            'zicnode' => ServerZicnode::where('parent_id', null)->get()->toArray(),
            'v2node' => ServerZicnode::where('parent_id', null)->get()->toArray()
        ];
        $startAt = strtotime('-1 day', strtotime(date('Y-m-d')));
        $endAt = strtotime(date('Y-m-d'));
        $statistics = StatServer::select([
            'server_id',
            'server_type',
            'u',
            'd',
            DB::raw('(u+d) as total')
        ])
            ->where('record_at', '>=', $startAt)
            ->where('record_at', '<', $endAt)
            ->where('record_type', 'd')
            ->limit(15)
            ->orderBy('total', 'DESC')
            ->get()
            ->toArray();
        foreach ($statistics as $k => $v) {
            foreach ($servers[$v['server_type']] as $server) {
                if ($server['id'] === $v['server_id']) {
                    $statistics[$k]['server_name'] = $server['name'];
                }
            }
            $statistics[$k]['total'] = $statistics[$k]['total'] / 1073741824;
        }
        array_multisort(array_column($statistics, 'total'), SORT_DESC, $statistics);
        return [
            'data' => $statistics
        ];
    }

    public function getServerTodayRank()
    {
        $servers = [
            'shadowsocks' => ServerShadowsocks::where('parent_id', null)->get()->toArray(),
            'v2ray' => ServerVmess::where('parent_id', null)->get()->toArray(),
            'trojan' => ServerTrojan::where('parent_id', null)->get()->toArray(),
            'vmess' => ServerVmess::where('parent_id', null)->get()->toArray(),
            'vless' => ServerVless::where('parent_id', null)->get()->toArray(),
            'tuic' => ServerTuic::where('parent_id', null)->get()->toArray(),
            'hysteria'=> ServerHysteria::where('parent_id', null)->get()->toArray(),
            'anytls' => ServerAnytls::where('parent_id', null)->get()->toArray(),
            'zicnode' => ServerZicnode::where('parent_id', null)->get()->toArray(),
            'v2node' => ServerZicnode::where('parent_id', null)->get()->toArray()
        ];
        $startAt = strtotime(date('Y-m-d'));
        $endAt = time();
        $statistics = StatServer::select([
            'server_id',
            'server_type',
            'u',
            'd',
            DB::raw('(u+d) as total')
        ])
            ->where('record_at', '>=', $startAt)
            ->where('record_at', '<', $endAt)
            ->where('record_type', 'd')
            ->limit(15)
            ->orderBy('total', 'DESC')
            ->get()
            ->toArray();
        foreach ($statistics as $k => $v) {
            foreach ($servers[$v['server_type']] as $server) {
                if ($server['id'] === $v['server_id']) {
                    $statistics[$k]['server_name'] = $server['name'];
                }
            }
            $statistics[$k]['total'] = $statistics[$k]['total'] / 1073741824;
        }
        array_multisort(array_column($statistics, 'total'), SORT_DESC, $statistics);
        return [
            'data' => $statistics
        ];
    }

    public function getUserTodayRank()
    {
        $startAt = strtotime(date('Y-m-d'));
        $endAt = time();
        $statistics = StatUser::select([
            'user_id',
            'server_rate',
            'u',
            'd',
            DB::raw('(u+d) as total')
        ])
            ->where('record_at', '>=', $startAt)
            ->where('record_at', '<', $endAt)
            ->where('record_type', 'd')
            ->limit(30)
            ->orderBy('total', 'DESC')
            ->get()
            ->toArray();
        $data = [];
        $idIndexMap = [];
        foreach ($statistics as $k => $v) {
            $id = $statistics[$k]['user_id'];
            $user = User::where('id', $id)->first();
            $statistics[$k]['email'] = empty($user) ? "null" : $user['email'];
            $statistics[$k]['total'] = $statistics[$k]['total'] * $statistics[$k]['server_rate'] / 1073741824;
            if (isset($idIndexMap[$id])) {
                $index = $idIndexMap[$id];
                $data[$index]['total'] += $statistics[$k]['total'];
            } else {
                unset($statistics[$k]['server_rate']);
                $data[] = $statistics[$k];
                $idIndexMap[$id] = count($data) - 1;
            }
        }
        array_multisort(array_column($data, 'total'), SORT_DESC, $data);
        return [
            'data' => array_slice($data, 0, 15)
        ];
    }

    public function getUserLastRank()
    {
        $startAt = strtotime('-1 day', strtotime(date('Y-m-d')));
        $endAt = strtotime(date('Y-m-d'));
        $statistics = StatUser::select([
            'user_id',
            'server_rate',
            'u',
            'd',
            DB::raw('(u+d) as total')
        ])
            ->where('record_at', '>=', $startAt)
            ->where('record_at', '<', $endAt)
            ->where('record_type', 'd')
            ->limit(30)
            ->orderBy('total', 'DESC')
            ->get()
            ->toArray();
        $data = [];
        $idIndexMap = [];
        foreach ($statistics as $k => $v) {
            $id = $statistics[$k]['user_id'];
            $user = User::where('id', $id)->first();
            $statistics[$k]['email'] = empty($user) ? "null" : $user['email'];
            $statistics[$k]['total'] = $statistics[$k]['total'] * $statistics[$k]['server_rate'] / 1073741824;
            if (isset($idIndexMap[$id])) {

                $index = $idIndexMap[$id];
                $data[$index]['total'] += $statistics[$k]['total'];
            } else {
                unset($statistics[$k]['server_rate']);
                $data[] = $statistics[$k];
                $idIndexMap[$id] = count($data) - 1;
            }
        }
        array_multisort(array_column($data, 'total'), SORT_DESC, $data);
        return [
            'data' => array_slice($data, 0, 15)
        ];
    }

    public function getStatUser(Request $request)
    {
        $request->validate([
            'user_id' => 'required|integer'
        ]);
        $current = $request->input('current') ? $request->input('current') : 1;
        $pageSize = $request->input('pageSize') >= 10 ? $request->input('pageSize') : 10;
        $builder = StatUser::orderBy('record_at', 'DESC')->where('user_id', $request->input('user_id'));

        $total = $builder->count();
        $records = $builder->forPage($current, $pageSize)
            ->get();
        return [
            'data' => $records,
            'total' => $total
        ];
    }

}
