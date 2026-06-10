<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use App\Models\TicketMessage;
use App\Models\User;
use App\Services\TicketService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TicketController extends Controller
{
    private const WITHDRAW_TICKET_LEVEL = 3;
    private const COMMISSION_CONFIRM_PREFIX = 'admin đã xác nhận chuyển ';
    private const COMMISSION_CONFIRM_SUFFIX = ' vnd tiền hoa hồng';

    public function fetch(Request $request)
    {
        if ($request->input('id')) {
            $ticket = Ticket::where('id', $request->input('id'))
                ->first();
            if (!$ticket) {
                abort(500, 'Ticket không tồn tại');
            }

            $ticket['message'] = $this->getMessagesWithSender($ticket);
            if ((int)$ticket->level === self::WITHDRAW_TICKET_LEVEL) {
                $ticket['withdraw_amount'] = $this->getWithdrawAmount($ticket);
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
            if ((int)$ticket->level !== self::WITHDRAW_TICKET_LEVEL) {
                abort(500, 'Ticket này không phải yêu cầu rút hoa hồng');
            }
            if ($this->hasCommissionConfirmed($ticket)) {
                abort(500, 'Hoa hồng của ticket này đã được xác nhận');
            }

            $amount = $this->getWithdrawAmount($ticket);
            if (!$amount) {
                abort(500, 'Ticket này không có số tiền rút hợp lệ');
            }

            $user = User::where('id', $ticket->user_id)
                ->lockForUpdate()
                ->first();
            if (!$user) {
                abort(500, 'Người dùng không tồn tại');
            }
            if ((int)$user->commission_balance < $amount) {
                abort(500, 'Hoa hồng hiện tại không đủ để xác nhận số tiền rút');
            }

            $amountLabel = number_format($amount / 100, 0, '.', ',');
            $message = self::COMMISSION_CONFIRM_PREFIX . $amountLabel . self::COMMISSION_CONFIRM_SUFFIX;

            $user->commission_balance = (int)$user->commission_balance - $amount;
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

    private function getMessagesWithSender(Ticket $ticket)
    {
        $messages = TicketMessage::where('ticket_id', $ticket->id)
            ->orderBy('id', 'ASC')
            ->get();
        $emails = User::whereIn('id', $messages->pluck('user_id')->filter()->unique()->values())
            ->pluck('email', 'id');

        foreach ($messages as $message) {
            $message['is_me'] = $message->user_id !== $ticket->user_id;
            $message['user_email'] = $emails[$message->user_id] ?? null;
        }

        return $messages;
    }

    private function getWithdrawAmount(Ticket $ticket): ?int
    {
        if ((int)$ticket->level !== self::WITHDRAW_TICKET_LEVEL) {
            return null;
        }

        $message = TicketMessage::where('ticket_id', $ticket->id)
            ->where('user_id', $ticket->user_id)
            ->orderBy('id', 'ASC')
            ->value('message');

        return $this->parseWithdrawAmount($message);
    }

    private function parseWithdrawAmount(?string $message): ?int
    {
        if (!$message) {
            return null;
        }
        if (!preg_match('/^[^:\r\n]+:\s*([0-9][0-9,.]*)\s*VND\b/im', $message, $matches)) {
            return null;
        }

        $amountText = preg_replace('/[^0-9]/', '', $matches[1]);
        if ($amountText === '') {
            return null;
        }

        $amount = (int)$amountText * 100;
        return $amount > 0 ? $amount : null;
    }

    private function hasCommissionConfirmed(Ticket $ticket): bool
    {
        return TicketMessage::where('ticket_id', $ticket->id)
            ->where('user_id', '!=', $ticket->user_id)
            ->where('message', 'like', self::COMMISSION_CONFIRM_PREFIX . '%' . self::COMMISSION_CONFIRM_SUFFIX)
            ->exists();
    }
}