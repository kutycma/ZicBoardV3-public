<?php

namespace App\Services\Core;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use RuntimeException;

class CoreRpcClient
{
    const DEFAULT_TIMEOUT = 3.0;
    const SCHEMA_VERSION = 1;

    private $client;
    private $endpoint;
    private $secret;
    private CoreConfig $config;

    public function __construct(Client $client = null, CoreConfig $config = null)
    {
        $this->config = $config ?: CoreConfig::fromRuntime();
        $this->endpoint = $this->config->rpcUrl();
        $this->secret = $this->config->rpcSecret();
        $this->client = $client ?: new Client([
            'timeout' => $this->config->timeout(),
            'http_errors' => false,
        ]);
    }

    public function call(string $method, array $payload = [])
    {
        $this->assertRpcReady();

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
        $timestamp = (string)time();
        $headers['X-ZicBoard-Timestamp'] = $timestamp;
        $headers['X-ZicBoard-Signature'] = hash_hmac('sha256', $timestamp . "\n" . $body, $this->secret);

        try {
            $response = $this->client->post($this->endpoint, [
                'headers' => $headers,
                'body' => $body,
            ]);
        } catch (GuzzleException $e) {
            \Log::warning('Core RPC unreachable: ' . $e->getMessage());
            throw new CoreRpcException(CoreRpcException::UNREACHABLE, 'Unable to connect to zicboard-core RPC', $e);
        }

        $responseBody = (string)$response->getBody();
        $decoded = json_decode($responseBody, true);
        if (!is_array($decoded)) {
            throw new CoreRpcException(CoreRpcException::ERROR, 'Invalid core RPC response');
        }

        if (($decoded['status'] ?? null) !== 'ok') {
            $error = $decoded['error'] ?? [];
            $code = $error['code'] ?? 'core_rpc_error';
            $message = $error['message'] ?? 'Core RPC request failed';
            $mappedCode = $this->mapErrorCode((string)$code, (string)$message);
            if ($mappedCode === CoreRpcException::UNAUTHORIZED || $mappedCode === CoreRpcException::LICENSE_INACTIVE) {
                \Log::warning('Core RPC rejected request: ' . $mappedCode . ' ' . $message);
            }
            throw new CoreRpcException($mappedCode, (string)$message);
        }

        return $decoded['data'] ?? null;
    }

    public function health(): array
    {
        try {
            $response = $this->client->get($this->config->healthUrl());
        } catch (GuzzleException $e) {
            throw new CoreRpcException(CoreRpcException::UNREACHABLE, 'Unable to connect to zicboard-core health endpoint', $e);
        }

        $data = json_decode((string)$response->getBody(), true);
        if (!is_array($data)) {
            throw new CoreRpcException(CoreRpcException::ERROR, 'Invalid core health response');
        }

        return $data;
    }

    public function verifyCoreIntegrity(): void
    {
        $data = $this->health();

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

    private function assertRpcReady(): void
    {
        try {
            $this->config->validateForRpc();
        } catch (CoreRpcException $e) {
            \Log::warning('Core RPC configuration error: ' . $e->getMessage());
            throw $e;
        }
    }

    private function mapErrorCode(string $code, string $message): string
    {
        $lowerMessage = strtolower($message);
        if ($code === 'unauthorized' || strpos($lowerMessage, 'signature') !== false || strpos($lowerMessage, 'timestamp') !== false) {
            return CoreRpcException::UNAUTHORIZED;
        }
        if ($code === 'license_required' || strpos($lowerMessage, 'license') !== false && strpos($lowerMessage, 'required') !== false) {
            return CoreRpcException::LICENSE_INACTIVE;
        }
        return $code !== '' ? $code : CoreRpcException::ERROR;
    }
}
