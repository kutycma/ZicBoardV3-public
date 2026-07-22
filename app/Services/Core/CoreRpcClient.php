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

        if ($response->getStatusCode() < 200 || $response->getStatusCode() >= 300) {
            throw new CoreRpcException(CoreRpcException::ERROR, 'Invalid core RPC HTTP status');
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
            throw new CoreRpcException($mappedCode, $this->safeErrorMessage($mappedCode));
        }

        return $decoded['data'] ?? null;
    }

    public function health(): array
    {
        if (!CoreConfig::isLocalRpcUrl($this->config->rpcUrl())) {
            throw new CoreRpcException(CoreRpcException::URL_NOT_LOCAL, 'Core health endpoint must use the pinned local RPC endpoint');
        }
        try {
            $response = $this->client->get($this->config->healthUrl());
        } catch (GuzzleException $e) {
            throw new CoreRpcException(CoreRpcException::UNREACHABLE, 'Unable to connect to zicboard-core health endpoint', $e);
        }

        if ($response->getStatusCode() < 200 || $response->getStatusCode() >= 300) {
            throw new CoreRpcException(CoreRpcException::ERROR, 'Invalid core health HTTP status');
        }

        $data = json_decode((string)$response->getBody(), true);
        if (!is_array($data)) {
            throw new CoreRpcException(CoreRpcException::ERROR, 'Invalid core health response');
        }

        return $data;
    }

    public function verifyCoreIntegrity(): void
    {
        $health = $this->health();
        if (!in_array((string)($health['status'] ?? ''), ['ok', 'degraded'], true)) {
            throw new RuntimeException('Core health response is invalid');
        }

        $data = $this->call('build.info');
        $runningHash = strtolower(trim((string)($data['core_sha256'] ?? '')));
        if ($runningHash === '') {
            // Older rollback binaries predate build.info core hashing; keep rollback usable
            // while requiring the hash from all hardened cores.
            $version = (string)($data['version'] ?? '');
            if ($version === '' || version_compare($version, '0.2.7', '>=')) {
                throw new RuntimeException('Core build information is invalid');
            }
            return;
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

    private function safeErrorMessage(string $code): string
    {
        if (in_array($code, ['license_server_unreachable', 'license_server_timeout'], true)) {
            return 'ZicBoard license server is temporarily unavailable';
        }
        if (in_array($code, [
            'license_required',
            'license_inactive',
            'license_expired',
            'license_suspended',
            'license_revoked',
            CoreRpcException::LICENSE_INACTIVE,
        ], true)) {
            return 'ZicBoard license is not active';
        }
        if ($code === 'entitlement_invalid') {
            return 'ZicBoard license entitlement is invalid';
        }
        if ($code === CoreRpcException::UNAUTHORIZED) {
            return 'ZicBoard core authorization failed';
        }
        return 'ZicBoard core protected operation failed';
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
