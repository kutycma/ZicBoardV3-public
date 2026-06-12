<?php

namespace App\Services\Manager;

use App\Models\Log as LogModel;
use App\Models\Order;
use App\Models\User;
use App\Services\TelegramService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ManagerAuditService
{
    private $secretKeys = [
        'password',
        'password_confirmation',
        'token',
        'uuid',
        'auth_data',
        'authorization',
        'coupon_code',
        'subscribe_url',
        'new_subscribe_url'
    ];

    public function record(Request $request, $action, array $context = [])
    {
        $now = time();
        $data = $this->sanitize($request->all());
        $context = $this->sanitize($context);

        try {
            LogModel::insert([
                'title' => 'manager.' . $action,
                'level' => 'INFO',
                'host' => $request->getSchemeAndHttpHost(),
                'uri' => $request->getRequestUri(),
                'method' => $request->getMethod(),
                'ip' => $request->getClientIp(),
                'data' => json_encode($data),
                'context' => json_encode($context),
                'created_at' => $now,
                'updated_at' => $now
            ]);
        } catch (\Throwable $e) {
            Log::channel('daily')->warning('manager audit failed: ' . $e->getMessage());
        }
    }

    public function notifyOrderPaid(Order $order, User $manager, User $targetUser)
    {
        try {
            $message = "Manager approved order\n"
                . "Manager: {$manager->email} (#{$manager->id})\n"
                . "User: {$targetUser->email} (#{$targetUser->id})\n"
                . "Trade No: {$order->trade_no}\n"
                . "Plan ID: {$order->plan_id}\n"
                . "Amount: {$order->total_amount}";
            (new TelegramService())->sendMessageWithAdmin($message);
        } catch (\Throwable $e) {
            Log::channel('daily')->warning('manager order telegram notification failed: ' . $e->getMessage());
        }
    }

    private function sanitize($value)
    {
        if (is_array($value)) {
            $result = [];
            foreach ($value as $key => $item) {
                if ($this->isSecretKey($key)) {
                    $result[$key] = '[redacted]';
                    continue;
                }
                $result[$key] = $this->sanitize($item);
            }
            return $result;
        }

        if (is_object($value)) {
            return '[object:' . get_class($value) . ']';
        }

        return $value;
    }

    private function isSecretKey($key)
    {
        $key = strtolower((string)$key);
        foreach ($this->secretKeys as $secretKey) {
            if ($key === $secretKey || strpos($key, $secretKey) !== false) {
                return true;
            }
        }
        return false;
    }
}