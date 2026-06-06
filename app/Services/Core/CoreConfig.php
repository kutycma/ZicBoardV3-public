<?php

namespace App\Services\Core;

class CoreConfig
{
    public const DEFAULT_RPC_URL = 'http://127.0.0.1:18080/rpc';
    public const DEFAULT_HEALTH_URL = 'http://127.0.0.1:18080/health';
    public const DEFAULT_TIMEOUT = 3.0;
    public const MIN_SECRET_LENGTH = 32;

    private string $rpcUrl;
    private string $rpcSecret;
    private float $timeout;
    private array $sources;

    public function __construct(string $rpcUrl, string $rpcSecret, float $timeout, array $sources = [])
    {
        $this->rpcUrl = rtrim(trim($rpcUrl), '/');
        $this->rpcSecret = self::normalizeSecret($rpcSecret);
        $this->timeout = $timeout > 0 ? $timeout : self::DEFAULT_TIMEOUT;
        $this->sources = $sources;
    }

    public static function fromRuntime(): self
    {
        $env = self::readEnvFile(self::envPath());
        $coreEnv = self::readEnvFile(self::coreEnvPath());

        [$rpcUrl, $urlSource] = self::resolveRpcUrl($env, $coreEnv);
        [$rpcSecret, $secretSource] = self::resolveRpcSecret($env, $coreEnv);

        return new self($rpcUrl, $rpcSecret, (float)config('core.timeout', self::DEFAULT_TIMEOUT), [
            'rpc_url' => $urlSource,
            'rpc_secret' => $secretSource,
        ]);
    }

    public function rpcUrl(): string
    {
        return $this->rpcUrl !== '' ? $this->rpcUrl : self::DEFAULT_RPC_URL;
    }

    public function healthUrl(): string
    {
        return self::deriveHealthUrl($this->rpcUrl());
    }

    public function rpcSecret(): string
    {
        return $this->rpcSecret;
    }

    public function timeout(): float
    {
        return $this->timeout;
    }

    public function sources(): array
    {
        return $this->sources;
    }

    public function validateForRpc(): void
    {
        if ($this->rpcSecret === '') {
            throw new CoreRpcException(
                CoreRpcException::SECRET_MISSING,
                'ZICBOARD_CORE_RPC_SECRET is not configured in Laravel config, .env, or .zicboard/core/core.env'
            );
        }

        if (!self::isValidSecret($this->rpcSecret)) {
            throw new CoreRpcException(
                CoreRpcException::SECRET_INVALID,
                'ZICBOARD_CORE_RPC_SECRET must be at least ' . self::MIN_SECRET_LENGTH . ' characters and contain no line breaks'
            );
        }

        if (!self::isLocalRpcUrl($this->rpcUrl())) {
            throw new CoreRpcException(
                CoreRpcException::URL_NOT_LOCAL,
                'ZICBOARD_CORE_RPC_URL must point to localhost to avoid leaking the RPC secret'
            );
        }
    }

    public static function envPath(): string
    {
        return base_path('.env');
    }

    public static function coreEnvPath(): string
    {
        return base_path('.zicboard/core/core.env');
    }

    public static function readEnvFile(string $path): array
    {
        if (!is_file($path) || !is_readable($path)) {
            return [];
        }

        $lines = file($path, FILE_IGNORE_NEW_LINES);
        if ($lines === false) {
            return [];
        }

        $values = [];
        foreach ($lines as $line) {
            $line = trim((string)$line);
            if ($line === '' || strpos($line, '#') === 0) {
                continue;
            }
            if (strpos($line, 'export ') === 0) {
                $line = trim(substr($line, 7));
            }
            $separator = strpos($line, '=');
            if ($separator === false) {
                continue;
            }
            $key = trim(substr($line, 0, $separator));
            if (!preg_match('/^[A-Z0-9_]+$/', $key)) {
                continue;
            }
            $values[$key] = self::parseEnvValue(substr($line, $separator + 1));
        }

        return $values;
    }

    public static function upsertEnvValue(string $path, string $key, string $value): void
    {
        $dir = dirname($path);
        if (!is_dir($dir) && !mkdir($dir, 0775, true) && !is_dir($dir)) {
            throw new \RuntimeException('Unable to create directory: ' . $dir);
        }

        $lines = is_file($path) ? file($path, FILE_IGNORE_NEW_LINES) : [];
        if ($lines === false) {
            throw new \RuntimeException('Unable to read env file: ' . $path);
        }

        $updated = false;
        foreach ($lines as $index => $line) {
            if (strpos((string)$line, $key . '=') === 0) {
                $lines[$index] = $key . '=' . self::sanitizeEnvValue($value);
                $updated = true;
                break;
            }
        }
        if (!$updated) {
            $lines[] = $key . '=' . self::sanitizeEnvValue($value);
        }

        $content = implode("\n", $lines) . "\n";
        if (file_put_contents($path, $content) === false) {
            throw new \RuntimeException('Unable to write env file: ' . $path);
        }
    }

    public static function normalizeSecret($secret): string
    {
        return trim((string)$secret);
    }

    public static function isValidSecret($secret): bool
    {
        $secret = self::normalizeSecret($secret);
        return strlen($secret) >= self::MIN_SECRET_LENGTH && !preg_match('/[\r\n]/', $secret);
    }

    public static function generateSecret(): string
    {
        return bin2hex(random_bytes(32));
    }

    public static function deriveHealthUrl(string $rpcUrl): string
    {
        $rpcUrl = trim($rpcUrl);
        if ($rpcUrl === '') {
            return self::DEFAULT_HEALTH_URL;
        }
        if (substr($rpcUrl, -4) === '/rpc') {
            return substr($rpcUrl, 0, -4) . '/health';
        }
        return rtrim($rpcUrl, '/') . '/health';
    }

    public static function isLocalRpcUrl(string $rpcUrl): bool
    {
        $parts = parse_url($rpcUrl);
        if (!is_array($parts) || strtolower((string)($parts['scheme'] ?? '')) !== 'http') {
            return false;
        }
        $host = strtolower(trim((string)($parts['host'] ?? '')));
        return in_array($host, ['127.0.0.1', 'localhost', '::1'], true);
    }

    public static function cachedCoreConfig(): array
    {
        $path = app()->getCachedConfigPath();
        if (!is_file($path)) {
            return [];
        }
        $config = require $path;
        return is_array($config['core'] ?? null) ? $config['core'] : [];
    }

    private static function resolveRpcSecret(array $env, array $coreEnv): array
    {
        $configSecret = self::normalizeSecret(config('core.rpc_secret', ''));
        $coreEnvSecret = self::normalizeSecret($coreEnv['ZICBOARD_CORE_RPC_SECRET'] ?? '');
        if ($configSecret !== '' && $coreEnvSecret !== '' && !hash_equals($configSecret, $coreEnvSecret)) {
            return [$coreEnvSecret, 'core_env_mismatch_override'];
        }
        if ($configSecret !== '') {
            return [$configSecret, 'laravel_config'];
        }

        if ($coreEnvSecret !== '') {
            return [$coreEnvSecret, 'core_env'];
        }

        $envSecret = self::normalizeSecret($env['ZICBOARD_CORE_RPC_SECRET'] ?? '');
        if ($envSecret !== '') {
            return [$envSecret, 'env_file'];
        }

        $runtimeEnvSecret = self::normalizeSecret(getenv('ZICBOARD_CORE_RPC_SECRET') ?: '');
        if ($runtimeEnvSecret !== '') {
            return [$runtimeEnvSecret, 'process_env'];
        }

        return ['', 'missing'];
    }

    private static function resolveRpcUrl(array $env, array $coreEnv): array
    {
        $configUrl = trim((string)config('core.rpc_url', ''));
        if ($configUrl !== '' && $configUrl !== self::DEFAULT_RPC_URL) {
            return [$configUrl, 'laravel_config'];
        }

        $envUrl = trim((string)($env['ZICBOARD_CORE_RPC_URL'] ?? ''));
        if ($envUrl !== '') {
            return [$envUrl, 'env_file'];
        }

        $coreEnvUrl = trim((string)($coreEnv['ZICBOARD_CORE_RPC_URL'] ?? ''));
        if ($coreEnvUrl !== '') {
            return [$coreEnvUrl, 'core_env'];
        }

        $listen = trim((string)($coreEnv['ZICBOARD_CORE_LISTEN'] ?? ''));
        if ($listen !== '') {
            return [self::deriveRpcUrlFromListen($listen), 'core_env_listen'];
        }

        if ($configUrl !== '') {
            return [$configUrl, 'laravel_config_default'];
        }

        return [self::DEFAULT_RPC_URL, 'default'];
    }

    private static function deriveRpcUrlFromListen(string $listen): string
    {
        $listen = trim($listen);
        if (stripos($listen, 'http://') === 0) {
            return rtrim($listen, '/') . '/rpc';
        }

        $host = '127.0.0.1';
        $port = '18080';
        if (preg_match('/^\[([^\]]+)\]:(\d+)$/', $listen, $matches)) {
            $host = $matches[1];
            $port = $matches[2];
        } elseif (preg_match('/^([^:]+):(\d+)$/', $listen, $matches)) {
            $host = $matches[1];
            $port = $matches[2];
        } elseif (preg_match('/^:(\d+)$/', $listen, $matches)) {
            $port = $matches[1];
        }

        if (in_array($host, ['', '0.0.0.0', '::'], true)) {
            $host = '127.0.0.1';
        }
        if ($host === '::1') {
            $host = '[::1]';
        }

        return 'http://' . $host . ':' . $port . '/rpc';
    }

    private static function parseEnvValue(string $value): string
    {
        $value = trim($value);
        if (strlen($value) >= 2) {
            $first = $value[0];
            $last = $value[strlen($value) - 1];
            if (($first === '"' && $last === '"') || ($first === "'" && $last === "'")) {
                $value = substr($value, 1, -1);
            }
        }
        return $value;
    }

    private static function sanitizeEnvValue(string $value): string
    {
        return str_replace(["\r", "\n"], '', $value);
    }
}
