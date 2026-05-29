<?php

namespace App\Plugins\Telegram\Commands;

use App\Models\User;
use App\Plugins\Telegram\Telegram;

class GetLatestUrl extends Telegram {
    public $command = '/getlatesturl';
    public $description = 'Lấy địa chỉ website mới nhất';

    public function handle($message, $match = []) {
        $telegramService = $this->telegramService;
        $text = sprintf(
            "%s có URL mới nhất là: %s",
            config('zicboard.app_name', 'ZicBoard'),
            config('zicboard.app_url')
        );
        $telegramService->sendMessage($message->chat_id, $text, 'markdown');
    }
}
