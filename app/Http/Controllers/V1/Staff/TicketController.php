<?php

namespace App\Http\Controllers\V1\Staff;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use App\Models\TicketMessage;
use App\Services\TicketService;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    public function fetch(Request $request)
    {
        $staffUserId = $request->user['id'];

        if ($request->input('id')) {
            $ticket = Ticket::where('id', $request->input('id'))
                ->whereHas('user', function ($query) use ($staffUserId) {
                    $query->where('invite_user_id', $staffUserId);
                })
                ->first();

            if (!$ticket) {
                abort(500, 'Ticket không tồn tại hoặc bạn không có quyền truy cập');
            }

            $ticket['message'] = TicketMessage::where('ticket_id', $ticket->id)->get();
            for ($i = 0; $i < count($ticket['message']); $i++) {
                $ticket['message'][$i]['is_me'] = $ticket['message'][$i]['user_id'] !== $ticket->user_id;
            }

            return response([
                'data' => $ticket
            ]);
        }

        $current = max(1, (int)$request->input('current', $request->input('page', 1)));
        $pageSize = max(10, (int)$request->input('pageSize', $request->input('limit', 10)));
        $model = Ticket::orderBy('created_at', 'DESC')
            ->whereHas('user', function ($query) use ($staffUserId) {
                $query->where('invite_user_id', $staffUserId);
            });

        if ($request->input('status') !== null) {
            $model->where('status', $request->input('status'));
        }

        $total = $model->count();
        $res = $model->forPage($current, $pageSize)->get();

        return response([
            'data' => $res,
            'total' => $total
        ]);
    }

    public function reply(Request $request)
    {
        if (empty($request->input('id'))) {
            abort(500, 'Tham số không hợp lệ');
        }
        if (empty($request->input('message'))) {
            abort(500, 'Tin nhắn không được để trống');
        }

        $ticket = Ticket::where('id', $request->input('id'))
            ->whereHas('user', function ($query) use ($request) {
                $query->where('invite_user_id', $request->user['id']);
            })
            ->first();

        if (!$ticket) {
            abort(500, 'Ticket không tồn tại hoặc bạn không có quyền truy cập');
        }

        (new TicketService())->replyByAdmin(
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
            abort(500, 'Tham số không hợp lệ');
        }

        $ticket = Ticket::where('id', $request->input('id'))
            ->whereHas('user', function ($query) use ($request) {
                $query->where('invite_user_id', $request->user['id']);
            })
            ->first();

        if (!$ticket) {
            abort(500, 'Ticket không tồn tại hoặc bạn không có quyền truy cập');
        }

        $ticket->status = 1;
        if (!$ticket->save()) {
            abort(500, 'Đóng thất bại');
        }

        return response([
            'data' => true
        ]);
    }
}
