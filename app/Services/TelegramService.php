<?php
namespace App\Services;

use App\Jobs\SendTelegramJob;
use App\Models\User;
use \Curl\Curl;
use Illuminate\Support\Facades\Log;

class TelegramService {
    protected $api;

    public function __construct($token = '')
    {
        $explicitToken = trim((string)$token);
        $configToken = trim((string)config('zicboard.telegram_bot_token', ''));
        $botToken = $explicitToken !== '' ? $explicitToken : $configToken;

        $this->api = 'https://api.telegram.org/bot' . $botToken . '/';
    }

    public function sendMessage(int $chatId, string $text, string $parseMode = '')
    {
        if ($parseMode === 'markdown') {
            $text = str_replace('_', '\_', $text);
        }
        $this->request('sendMessage', [
            'chat_id' => $chatId,
            'text' => $text,
            'parse_mode' => $parseMode
        ]);
    }

    public function approveChatJoinRequest(int $chatId, int $userId)
    {
        $this->request('approveChatJoinRequest', [
            'chat_id' => $chatId,
            'user_id' => $userId
        ]);
    }

    public function declineChatJoinRequest(int $chatId, int $userId)
    {
        $this->request('declineChatJoinRequest', [
            'chat_id' => $chatId,
            'user_id' => $userId
        ]);
    }

    public function getMe()
    {
        return $this->request('getMe');
    }

    public function setWebhook(string $url)
    {
        $commands = $this->discoverCommands(base_path('app/Plugins/Telegram/Commands'));
        $this->setMyCommands($commands);
        return $this->request('setWebhook', [
            'url' => $url
        ]);
    }

    public function discoverCommands(string $directory): array
    {
        $commands = [];

        foreach (glob($directory . '/*.php') as $file) {
            $className = 'App\\Plugins\\Telegram\\Commands\\' . basename($file, '.php');

            if (!class_exists($className)) {
                require_once $file;
            }

            if (!class_exists($className)) {
                continue;
            }

            try {
                $ref = new \ReflectionClass($className);

                if (
                    $ref->hasProperty('command') &&
                    $ref->hasProperty('description')
                ) {
                    $commandProp = $ref->getProperty('command');
                    $descProp = $ref->getProperty('description');

                    $command = $commandProp->isStatic()
                        ? $commandProp->getValue()
                        : $ref->newInstanceWithoutConstructor()->command;

                    $description = $descProp->isStatic()
                        ? $descProp->getValue()
                        : $ref->newInstanceWithoutConstructor()->description;

                    $commands[] = [
                        'command' => $command,
                        'description' => $description,
                    ];
                }
            } catch (\ReflectionException $e) {
                continue;
            }
        }
        return $commands;
    }
    
    public function setMyCommands(array $commands)
    {
        $this->request('setMyCommands', [
            'commands' => json_encode($commands),
        ]);
    }

    private function request(string $method, array $params = [])
    {
        $curl = new Curl();
        $curl->get($this->api . $method . '?' . http_build_query($params));
        $response = $curl->response;
        $httpStatusCode = $curl->httpStatusCode ?? null;
        $curlErrorCode = $curl->errorCode ?? null;
        $curlErrorMessage = $curl->errorMessage ?? null;
        $curl->close();

        if (!isset($response->ok)) {
            Log::warning('telegram api request failed: invalid response', [
                'method' => $method,
                'http_status' => $httpStatusCode,
                'curl_error_code' => $curlErrorCode,
                'curl_error_message' => $curlErrorMessage,
            ]);
            abort(500, 'Telegram request failed');
        }

        if (!$response->ok) {
            Log::warning('telegram api request failed', [
                'method' => $method,
                'http_status' => $httpStatusCode,
                'telegram_description' => $response->description ?? null,
            ]);
            abort(500, 'Telegram error: ' . ($response->description ?? 'unknown error'));
        }

        return $response;
    }

    public function sendMessageWithAdmin($message, $isStaff = false)
    {
        if (!(int)config('zicboard.telegram_bot_enable', 0)) {
            Log::warning('telegram admin notification skipped: bot is disabled');
            return;
        }

        if (trim((string)config('zicboard.telegram_bot_token', '')) === '') {
            Log::warning('telegram admin notification skipped: bot token is not configured');
            return;
        }

        $users = User::where(function ($query) use ($isStaff) {
            $query->where('is_admin', 1);
            if ($isStaff) {
                $query->orWhere('is_staff', 1);
            }
        })
            ->whereNotNull('telegram_id')
            ->get();

        if ($users->isEmpty()) {
            Log::warning('telegram admin notification skipped: no recipients with telegram_id', [
                'include_staff' => (bool)$isStaff,
            ]);
            return;
        }

        foreach ($users as $user) {
            SendTelegramJob::dispatch((int)$user->telegram_id, (string)$message);
        }
    }
}