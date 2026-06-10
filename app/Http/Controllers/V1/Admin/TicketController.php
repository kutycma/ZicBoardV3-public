<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use App\Models\TicketMessage;
use App\Models\User;
use App\Services\TicketService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class TicketController extends Controller
{
    public function fetch(Request $request)
    {
        if ($request->input('id')) {
            $ticket = Ticket::where('id', $request->input('id'))
                ->first();
            if (!$ticket) {
                abort(500, 'Ticket không tồn tại');
            }
            $ticket['message'] = TicketMessage::where('ticket_id', $ticket->id)->get();
            for ($i = 0; $i < count($ticket['message']); $i++) {
                if ($ticket['message'][$i]['user_id'] !== $ticket->user_id) {
                    $ticket['message'][$i]['is_me'] = true;
                } else {
                    $ticket['message'][$i]['is_me'] = false;
                }
            }
            return response([
                'data' => $ticket
            ]);
        }
        $current = $request->input('current') ? $request->input('current') : 1;
        $pageSize = $request->input('pageSize') >= 10 ? $request->input('pageSize') : 10;
        $model = Ticket::orderBy('updated_at', 'DESC');
        if ($request->input('status') !== NULL) {
            $model->where('status', $request->input('status'));
        }
        if ($request->input('reply_status') !== NULL) {
            $model->whereIn('reply_status', $request->input('reply_status'));
        }
        if ($request->input('email') !== NULL) {
            $user = User::where('email', $request->input('email'))->first();
            if ($user) $model->where('user_id', $user->id);
        }
        $total = $model->count();
        $res = $model->forPage($current, $pageSize)
            ->get();
        return response([
            'data' => $res,
            'total' => $total
        ]);
    }

    public function reply(Request $request)
    {
        if (empty($request->input('id'))) {
            abort(500, 'tham số lỗi');
        }
        if (empty($request->input('message'))) {
            abort(500, 'Tin nhắn không được để trống');
        }
        $ticketService = new TicketService();
        $ticketService->replyByAdmin(
            $request->input('id'),
            $request->input('message'),
            $request->user['id']
        );
        return response([
            'data' => true
        ]);
    }

    public function close(Request $request)
    {
        if (empty($request->input('id'))) {
            abort(500, 'tham số lỗi');
        }
        $ticket = Ticket::where('id', $request->input('id'))
            ->first();
        if (!$ticket) {
            abort(500, 'Ticket không tồn tại');
        }
        $ticket->status = 1;
        if (!$ticket->save()) {
            abort(500, 'Đóng thất bại');
        }
        return response([
            'data' => true
        ]);
    }

    public function confirmCommission(Request $request)
    {
        if (empty($request->input('id'))) {
            abort(500, 'tham số lỗi');
        }

        $adminUserId = $request->user['id'] ?? 0;
        $result = DB::transaction(function () use ($request, $adminUserId) {
            $ticket = Ticket::where('id', $request->input('id'))
                ->lockForUpdate()
                ->first();
            if (!$ticket) {
                abort(500, 'Ticket không tồn tại');
            }

            $user = User::where('id', $ticket->user_id)
                ->lockForUpdate()
                ->first();
            if (!$user) {
                abort(500, 'Người dùng không tồn tại');
            }

            $amount = (int)$user->commission_balance;
            if ($amount <= 0) {
                abort(500, 'Người dùng không còn hoa hồng để xác nhận');
            }

            $amountLabel = number_format($amount / 100, 0, '.', ',');
            $message = "admin đã xác nhận chuyển {$amountLabel} vnd tiền hoa hồng";

            $user->commission_balance = 0;
            $ticketMessage = TicketMessage::create([
                'user_id' => $adminUserId,
                'ticket_id' => $ticket->id,
                'message' => $message
            ]);
            $ticket->status = 0;
            $ticket->reply_status = 1;
            $ticket->touch();

            if (!$ticketMessage || !$user->save() || !$ticket->save()) {
                abort(500, 'Xác nhận hoa hồng thất bại');
            }

            return [
                'amount' => $amount,
                'message' => $message
            ];
        });

        return response([
            'data' => $result
        ]);
    }
}
