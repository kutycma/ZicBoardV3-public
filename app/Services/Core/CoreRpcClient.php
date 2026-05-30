<?php

namespace App\Services\Core;

use GuzzleHttp\Client;
use RuntimeException;

class CoreRpcClient
{
    const DEFAULT_TIMEOUT = 3.0;
    const SCHEMA_VERSION = 1;

    private $client;
    private $endpoint;
    private $secret;

    public function __construct(Client $client = null)
    {
        $this->endpoint = rtrim((string)config('core.rpc_url', env('ZICBOARD_CORE_RPC_URL', 'http://127.0.0.1:18080/rpc')), '/');
        $this->secret = (string)config('core.rpc_secret', env('ZICBOARD_CORE_RPC_SECRET', ''));
        $this->client = $client ?: new Client([
            'timeout' => (float)config('core.timeout', self::DEFAULT_TIMEOUT),
            'http_errors' => false,
        ]);
    }

    public function call(string $method, array $payload = [])
    {
        $requestId = bin2hex(random_bytes(16));
        $body = json_encode([
            'request_id' => $requestId,
            'schema_version' => self::SCHEMA_VERSION,
            'method' => $method,
            'payload' => (object)$payload,
        ], JSON_UNESCAPED_SLASHES);

        if ($body === false) {
            throw new RuntimeException('Unable to encode core RPC request');
        }

        $headers = [
            'Content-Type' => 'application/json',
        ];
        if ($this->secret !== '') {
            $timestamp = (string)time();
            $headers['X-ZicBoard-Timestamp'] = $timestamp;
            $headers['X-ZicBoard-Signature'] = hash_hmac('sha256', $timestamp . "\n" . $body, $this->secret);
        }

        $response = $this->client->post($this->endpoint, [
            'headers' => $headers,
            'body' => $body,
        ]);

        $responseBody = (string)$response->getBody();
        $decoded = json_decode($responseBody, true);
        if (!is_array($decoded)) {
            throw new RuntimeException('Invalid core RPC response');
        }

        if (($decoded['status'] ?? null) !== 'ok') {
            $error = $decoded['error'] ?? [];
            $code = $error['code'] ?? 'core_rpc_error';
            $message = $error['message'] ?? 'Core RPC request failed';
            throw new RuntimeException($code . ': ' . $message);
        }

        return $decoded['data'] ?? null;
    }

    public function verifyCoreIntegrity(): void
    {
        $healthUrl = preg_replace('#/rpc$#', '/health', $this->endpoint);
        $response = $this->client->get($healthUrl);
        $data = json_decode((string)$response->getBody(), true);

        $runningHash = strtolower(trim((string)($data['core_sha256'] ?? '')));
        if ($runningHash === '') {
            throw new RuntimeException('Core health response is invalid');
        }

        $statePath = base_path('.zicboard/core/state.json');
        if (!is_file($statePath)) {
            return;
        }

        $state = json_decode((string)file_get_contents($statePath), true);
        $expectedHash = strtolower(trim((string)($state['core_sha256'] ?? '')));
        if ($expectedHash === '') {
            return;
        }

        if (!hash_equals($expectedHash, $runningHash)) {
            throw new RuntimeException('Core binary integrity verification failed');
        }
    }
}
