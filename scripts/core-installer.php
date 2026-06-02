#!/usr/bin/env php
<?php

if (PHP_SAPI !== 'cli') {
    fwrite(STDERR, "This script must be run from CLI.\n");
    exit(1);
}

$root = dirname(__DIR__);
$action = $argv[1] ?? 'install';

try {
    switch ($action) {
        case 'install':
        case 'update':
            installOrUpdateCore($root, $action);
            break;
        case 'health':
            healthCheck($root);
            break;
        case 'status':
            printStatus($root);
            break;
        case 'rollback':
            rollbackCore($root);
            break;
        default:
            throw new RuntimeException("Unknown action: {$action}");
    }
} catch (Throwable $e) {
    fwrite(STDERR, "[core-installer] " . $e->getMessage() . "\n");
    exit(1);
}

function installOrUpdateCore(string $root, string $action): void
{
    $manifest = readManifest($root);
    $target = detectTarget();
    if (!in_array($target, $manifest['supported_targets'] ?? [], true)) {
        throw new RuntimeException("Unsupported core target: {$target}");
    }

    $endpoint = (string)($manifest['core_download_endpoint'] ?? '');
    if ($endpoint === '' || strpos($endpoint, 'license.zicboard.example') !== false) {
        throw new RuntimeException('core_download_endpoint is not configured in manifest.json');
    }
    if (stripos($endpoint, 'https://') !== 0) {
        throw new RuntimeException('core_download_endpoint must use HTTPS');
    }

    $runtimeDir = $root . DIRECTORY_SEPARATOR . '.zicboard' . DIRECTORY_SEPARATOR . 'core';
    ensureDir($runtimeDir);
    ensureDir($root . DIRECTORY_SEPARATOR . 'bin');

    $statePath = $runtimeDir . DIRECTORY_SEPARATOR . 'state.json';
    $state = readJsonFile($statePath, []);
    if (empty($state['install_id'])) {
        $state['install_id'] = generateUuid();
    }
    $previousCoreState = coreStateSnapshot($state);

    $env = readEnvFile($root . DIRECTORY_SEPARATOR . '.env');
    $licenseKey = getenv('ZICBOARD_LICENSE_KEY') ?: ($env['ZICBOARD_LICENSE_KEY'] ?? '');
    if ($licenseKey === '') {
        throw new RuntimeException('ZICBOARD_LICENSE_KEY is not configured in .env or environment');
    }

    $request = [
        'action' => $action,
        'license_key' => $licenseKey,
        'install_id' => $state['install_id'],
        'machine_fingerprint' => machineFingerprint(),
        'panel_version' => $manifest['panel_version'] ?? '',
        'required_core_version' => $manifest['required_core_version'] ?? '',
        'target' => $target,
        'current_core_version' => $state['core_version'] ?? null,
    ];

    $download = postJson($endpoint, $request);
    if (empty($download['download_url'])) {
        throw new RuntimeException('License server response is missing download_url');
    }
    if (stripos((string)$download['download_url'], 'https://') !== 0) {
        throw new RuntimeException('Core download URL must use HTTPS');
    }
    if (empty($download['sha256'])) {
        throw new RuntimeException('License server response is missing sha256');
    }
    $pinnedPublicKey = trim((string)($manifest['release_public_key'] ?? ''));
    if ($pinnedPublicKey === '') {
        throw new RuntimeException('release_public_key is not configured in manifest.json');
    }
    if (!empty($download['public_key']) && !hash_equals($pinnedPublicKey, (string)$download['public_key'])) {
        throw new RuntimeException('License server public key does not match manifest.json');
    }

    $tmpPath = $runtimeDir . DIRECTORY_SEPARATOR . 'zicboard-core.tmp';
    $binaryPath = $root . DIRECTORY_SEPARATOR . 'bin' . DIRECTORY_SEPARATOR . 'zicboard-core';
    downloadFile((string)$download['download_url'], $tmpPath);

    $actualHash = hash_file('sha256', $tmpPath);
    if (!hash_equals(strtolower((string)$download['sha256']), strtolower($actualHash))) {
        @unlink($tmpPath);
        throw new RuntimeException('Downloaded core checksum does not match manifest response');
    }

    verifySignature($manifest, $download, $actualHash);

    $backupPath = null;
    if (is_file($binaryPath)) {
        $backupPath = $runtimeDir . DIRECTORY_SEPARATOR . 'zicboard-core.' . date('YmdHis') . '.bak';
        if (!rename($binaryPath, $backupPath)) {
            @unlink($tmpPath);
            throw new RuntimeException('Unable to create core backup before replacement');
        }
    }

    if (!rename($tmpPath, $binaryPath)) {
        if ($backupPath && is_file($backupPath)) {
            @rename($backupPath, $binaryPath);
        }
        throw new RuntimeException('Unable to move downloaded core into bin/');
    }
    @chmod($binaryPath, 0755);

    $state['target'] = $target;
    $state['core_version'] = $download['version'] ?? ($manifest['required_core_version'] ?? null);
    $state['core_sha256'] = $actualHash;
    $state['updated_at'] = gmdate('c');
    if ($backupPath) {
        $state['last_core_backup'] = $backupPath;
        $state['last_core_state'] = $previousCoreState;
    } else {
        unset($state['last_core_backup']);
        unset($state['last_core_state']);
    }
    if (!empty($download['activation_id'])) {
        $state['activation_id'] = $download['activation_id'];
    }
    writeJsonFile($statePath, $state);
    writeCoreEnvironment($root, $runtimeDir, $manifest, $download, $licenseKey, $state, $target);

    echo "Installed zicboard-core {$state['core_version']} for {$target}.\n";
}

function healthCheck(string $root): void
{
    $url = getenv('ZICBOARD_CORE_HEALTH_URL') ?: 'http://127.0.0.1:18080/health';
    $lastError = 'no response';
    $deadline = time() + 45;
    $lastRpcAttempt = 0;
    $state = readJsonFile($root . DIRECTORY_SEPARATOR . '.zicboard' . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'state.json', []);
    $expectedHash = strtolower(trim((string)($state['core_sha256'] ?? '')));

    do {
        $context = stream_context_create([
            'http' => [
                'timeout' => 3,
                'ignore_errors' => true,
            ],
        ]);
        $body = @file_get_contents($url, false, $context);
        if ($body !== false) {
            $decoded = json_decode($body, true);
            if (is_array($decoded) && in_array(($decoded['status'] ?? null), ['ok', 'degraded'], true)) {
                $runningHash = strtolower(trim((string)($decoded['core_sha256'] ?? '')));
                if ($expectedHash !== '' && $runningHash !== '' && !hash_equals($expectedHash, $runningHash)) {
                    throw new RuntimeException('Core health check failed: running core checksum does not match installed artifact');
                }

                $license = $decoded['license'] ?? $decoded;
                if (!empty($license['protected_features_enabled'])) {
                    finishCoreHealthCheck($root);
                    return;
                }

                if (time() - $lastRpcAttempt >= 5) {
                    $lastRpcAttempt = time();
                    try {
                        $rpcStatus = coreRpcCall($root, 'license.refresh');
                        if (is_array($rpcStatus) && !empty($rpcStatus['protected_features_enabled'])) {
                            finishCoreHealthCheck($root);
                            return;
                        }
                        $license = is_array($rpcStatus) ? $rpcStatus : $license;
                    } catch (Throwable $e) {
                        $lastError = $e->getMessage();
                        sleep(2);
                        continue;
                    }
                }

                $lastError = 'license is not active for protected features: ' . ($license['error'] ?? $license['status'] ?? 'unknown');
            } else {
                $lastError = 'invalid response';
            }
        }
        sleep(2);
    } while (time() < $deadline);

    throw new RuntimeException('Core health check failed: ' . $lastError);
}

function assertCoreCanEncryptHappSubscribe(string $root): void
{
    $result = coreRpcCall($root, 'subscription.happ_encrypt', [
        'url' => 'https://example.com/api/v3/client/subscribe?token=health-check',
    ]);
    if (!is_array($result) || empty($result['url']) || !is_string($result['url'])) {
        throw new RuntimeException('Core health check failed: subscription.happ_encrypt returned no encrypted URL');
    }
}

function finishCoreHealthCheck(string $root): void
{
    try {
        assertCoreCanEncryptHappSubscribe($root);
        echo "Core health check passed.\n";
        return;
    } catch (Throwable $e) {
        if (!shouldWarnOnlyForHappHealthFailure($e)) {
            throw $e;
        }
        echo "Core health check passed with warning: Happ encrypted subscription check failed: " . $e->getMessage() . "\n";
    }
}

function shouldWarnOnlyForHappHealthFailure(Throwable $e): bool
{
    $strict = strtolower(trim((string)(getenv('ZICBOARD_CORE_STRICT_HAPP_HEALTH') ?: '')));
    if (in_array($strict, ['1', 'true', 'yes', 'on'], true)) {
        return false;
    }

    $message = strtolower($e->getMessage());
    foreach ([
        'happ api',
        'unable to connect to happ',
        'missing encrypted url',
        'subscription.happ_encrypt returned no encrypted url',
    ] as $needle) {
        if (strpos($message, $needle) !== false) {
            return true;
        }
    }
    return false;
}

function coreRpcCall(string $root, string $method, array $payload = [])
{
    $env = array_merge(
        readEnvFile($root . DIRECTORY_SEPARATOR . '.env'),
        readEnvFile($root . DIRECTORY_SEPARATOR . '.zicboard' . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'core.env')
    );
    $secret = getenv('ZICBOARD_CORE_RPC_SECRET') ?: ($env['ZICBOARD_CORE_RPC_SECRET'] ?? '');
    if ($secret === '') {
        throw new RuntimeException('ZICBOARD_CORE_RPC_SECRET is not configured');
    }

    $url = getenv('ZICBOARD_CORE_RPC_URL') ?: ($env['ZICBOARD_CORE_RPC_URL'] ?? 'http://127.0.0.1:18080/rpc');
    if (stripos((string)$url, 'http://127.0.0.1:') !== 0 && stripos((string)$url, 'http://localhost:') !== 0) {
        throw new RuntimeException('ZICBOARD_CORE_RPC_URL must point to localhost');
    }

    $body = json_encode([
        'request_id' => bin2hex(random_bytes(16)),
        'schema_version' => 1,
        'method' => $method,
        'payload' => (object)$payload,
    ], JSON_UNESCAPED_SLASHES);
    if ($body === false) {
        throw new RuntimeException('Unable to encode core RPC request');
    }

    $timestamp = (string)time();
    $headers = [
        'Content-Type: application/json',
        'X-ZicBoard-Timestamp: ' . $timestamp,
        'X-ZicBoard-Signature: ' . hash_hmac('sha256', $timestamp . "\n" . $body, $secret),
    ];
    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'timeout' => 10,
            'ignore_errors' => true,
            'header' => implode("\r\n", $headers),
            'content' => $body,
        ],
    ]);
    $response = @file_get_contents((string)$url, false, $context);
    if ($response === false) {
        throw new RuntimeException('core RPC request failed');
    }
    $decoded = json_decode($response, true);
    if (!is_array($decoded)) {
        throw new RuntimeException('core RPC returned invalid JSON');
    }
    if (($decoded['status'] ?? null) !== 'ok') {
        $error = is_array($decoded['error'] ?? null) ? $decoded['error'] : [];
        $message = $error['message'] ?? $error['code'] ?? 'core RPC request failed';
        throw new RuntimeException((string)$message);
    }
    return $decoded['data'] ?? null;
}

function printStatus(string $root): void
{
    $statePath = $root . DIRECTORY_SEPARATOR . '.zicboard' . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'state.json';
    echo json_encode(readJsonFile($statePath, []), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n";
}

function rollbackCore(string $root): void
{
    $statePath = $root . DIRECTORY_SEPARATOR . '.zicboard' . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'state.json';
    $state = readJsonFile($statePath, []);
    $backupPath = $state['last_core_backup'] ?? '';
    $previousCoreState = is_array($state['last_core_state'] ?? null) ? $state['last_core_state'] : [];
    if ($backupPath === '' || !is_file($backupPath)) {
        throw new RuntimeException('No previous core backup is available for rollback');
    }

    $binaryPath = $root . DIRECTORY_SEPARATOR . 'bin' . DIRECTORY_SEPARATOR . 'zicboard-core';
    if (is_file($binaryPath)) {
        $failedPath = dirname($backupPath) . DIRECTORY_SEPARATOR . 'zicboard-core.failed.' . date('YmdHis');
        if (!rename($binaryPath, $failedPath)) {
            throw new RuntimeException('Unable to save failed core binary before rollback');
        }
        $state['failed_core_backup'] = $failedPath;
    }

    if (!rename($backupPath, $binaryPath)) {
        throw new RuntimeException('Unable to restore previous core binary');
    }
    @chmod($binaryPath, 0755);
    if ($previousCoreState) {
        restoreCoreState($state, $previousCoreState);
    } elseif (is_file($binaryPath)) {
        $state['core_sha256'] = hash_file('sha256', $binaryPath);
    }
    unset($state['last_core_backup']);
    unset($state['last_core_state']);
    $state['rolled_back_at'] = gmdate('c');
    writeJsonFile($statePath, $state);
    echo "Rolled back zicboard-core to previous binary.\n";
}

function coreStateSnapshot(array $state): array
{
    $snapshot = [];
    foreach (['target', 'core_version', 'core_sha256', 'activation_id', 'updated_at'] as $key) {
        if (array_key_exists($key, $state)) {
            $snapshot[$key] = $state[$key];
        }
    }
    return $snapshot;
}

function restoreCoreState(array &$state, array $snapshot): void
{
    foreach (['target', 'core_version', 'core_sha256', 'activation_id', 'updated_at'] as $key) {
        if (array_key_exists($key, $snapshot)) {
            $state[$key] = $snapshot[$key];
        } else {
            unset($state[$key]);
        }
    }
}

function readManifest(string $root): array
{
    $path = $root . DIRECTORY_SEPARATOR . 'manifest.json';
    if (!is_file($path)) {
        throw new RuntimeException('manifest.json not found');
    }
    $data = readJsonFile($path, null);
    if (!is_array($data)) {
        throw new RuntimeException('manifest.json is invalid');
    }
    return $data;
}

function detectTarget(): string
{
    $os = strtolower(PHP_OS_FAMILY);
    if ($os !== 'linux') {
        throw new RuntimeException("Only Linux core targets are supported by this installer, detected {$os}");
    }

    $machine = strtolower(php_uname('m'));
    if (in_array($machine, ['x86_64', 'amd64'], true)) {
        return 'linux-amd64';
    }
    if (in_array($machine, ['aarch64', 'arm64'], true)) {
        return 'linux-arm64';
    }
    throw new RuntimeException("Unsupported CPU architecture: {$machine}");
}

function postJson(string $url, array $payload): array
{
    $body = json_encode($payload, JSON_UNESCAPED_SLASHES);
    if ($body === false) {
        throw new RuntimeException('Unable to encode license request');
    }

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 20,
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_SSL_VERIFYHOST => 2,
            CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        ]);
        if (defined('CURLOPT_PROTOCOLS') && defined('CURLPROTO_HTTPS')) {
            curl_setopt($ch, CURLOPT_PROTOCOLS, CURLPROTO_HTTPS);
        }
        $response = curl_exec($ch);
        $error = curl_error($ch);
        $status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if ($response === false) {
            throw new RuntimeException('License server request failed: ' . $error);
        }
        if ($status < 200 || $status >= 300) {
            throw new RuntimeException("License server returned HTTP {$status}: " . responseErrorMessage((string)$response));
        }
    } else {
        $context = stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/json\r\n",
                'content' => $body,
                'timeout' => 20,
                'ignore_errors' => true,
            ],
            'ssl' => [
                'verify_peer' => true,
                'verify_peer_name' => true,
            ],
        ]);
        $response = @file_get_contents($url, false, $context);
        if ($response === false) {
            throw new RuntimeException('License server request failed');
        }
        $status = httpStatusFromHeaders($http_response_header ?? []);
        if ($status !== 0 && ($status < 200 || $status >= 300)) {
            throw new RuntimeException("License server returned HTTP {$status}: " . responseErrorMessage((string)$response));
        }
    }

    $decoded = json_decode($response, true);
    if (!is_array($decoded)) {
        throw new RuntimeException('License server returned invalid JSON');
    }
    return $decoded;
}

function httpStatusFromHeaders(array $headers): int
{
    foreach ($headers as $header) {
        if (preg_match('#^HTTP/[0-9.]+\s+([0-9]+)#i', (string)$header, $matches)) {
            return (int)$matches[1];
        }
    }
    return 0;
}

function responseErrorMessage(string $body): string
{
    $decoded = json_decode($body, true);
    if (is_array($decoded)) {
        foreach (['message', 'error'] as $key) {
            if (!empty($decoded[$key]) && is_string($decoded[$key])) {
                return $decoded[$key];
            }
        }
    }
    $text = trim(preg_replace('/\s+/', ' ', $body) ?? '');
    if ($text === '') {
        return 'empty response';
    }
    return strlen($text) > 240 ? substr($text, 0, 240) : $text;
}

function downloadFile(string $url, string $destination): void
{
    $maxBytes = (int)(getenv('ZICBOARD_CORE_MAX_BYTES') ?: 104857600);
    if ($maxBytes <= 0) {
        $maxBytes = 104857600;
    }
    $context = stream_context_create([
        'http' => [
            'timeout' => 60,
            'ignore_errors' => true,
        ],
        'ssl' => [
            'verify_peer' => true,
            'verify_peer_name' => true,
        ],
    ]);
    $input = @fopen($url, 'rb', false, $context);
    if (!$input) {
        throw new RuntimeException('Unable to open core download URL');
    }
    $status = httpStatusFromHeaders($http_response_header ?? []);
    if ($status !== 0 && ($status < 200 || $status >= 300)) {
        $body = (string)stream_get_contents($input, 1048576);
        fclose($input);
        throw new RuntimeException("Core download returned HTTP {$status}: " . responseErrorMessage($body));
    }
    $output = @fopen($destination, 'wb');
    if (!$output) {
        fclose($input);
        throw new RuntimeException('Unable to write core download file');
    }

    $bytes = 0;
    while (!feof($input)) {
        $chunk = fread($input, 1048576);
        if ($chunk === false) {
            fclose($input);
            fclose($output);
            @unlink($destination);
            throw new RuntimeException('Unable to read core download stream');
        }
        $bytes += strlen($chunk);
        if ($bytes > $maxBytes) {
            fclose($input);
            fclose($output);
            @unlink($destination);
            throw new RuntimeException('Core download exceeds allowed size');
        }
        if ($chunk !== '' && fwrite($output, $chunk) !== strlen($chunk)) {
            fclose($input);
            fclose($output);
            @unlink($destination);
            throw new RuntimeException('Unable to write full core download file');
        }
    }

    fclose($input);
    fclose($output);
}

function verifySignature(array $manifest, array $download, string $sha256): void
{
    // V-04 hardening: always require signed binaries regardless of manifest.
    // Never trust the allow_unsigned_core field from a user-editable file.
    $signature = (string)($download['signature'] ?? '');
    $publicKey = trim((string)($manifest['release_public_key'] ?? ''));

    if ($signature === '' || $publicKey === '') {
        throw new RuntimeException('Core signature or release_public_key is missing');
    }
    $signatureBytes = base64_decode($signature, true);
    if ($signatureBytes === false) {
        throw new RuntimeException('Core signature is not valid base64');
    }
    if (strlen($signatureBytes) !== 64) {
        throw new RuntimeException('Core signature must be a 64-byte Ed25519 signature');
    }
    $publicKeyBytes = base64_decode($publicKey, true);
    if ($publicKeyBytes === false) {
        throw new RuntimeException('release_public_key is not valid base64');
    }
    if (strlen($publicKeyBytes) !== 32) {
        throw new RuntimeException('release_public_key must be a 32-byte Ed25519 public key');
    }
    if (!function_exists('sodium_crypto_sign_verify_detached')) {
        $autoload = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';
        if (is_file($autoload)) {
            require_once $autoload;
        }
    }
    if (function_exists('sodium_crypto_sign_verify_detached')) {
        $valid = sodium_crypto_sign_verify_detached($signatureBytes, $sha256, $publicKeyBytes);
    } elseif (class_exists('ParagonIE_Sodium_Compat')) {
        $valid = \ParagonIE_Sodium_Compat::crypto_sign_verify_detached($signatureBytes, $sha256, $publicKeyBytes);
    } else {
        throw new RuntimeException('Sodium extension or sodium_compat is required to verify core signature');
    }
    if (!$valid) {
        throw new RuntimeException('Core signature verification failed');
    }
}

function writeCoreEnvironment(string $root, string $runtimeDir, array $manifest, array $download, string $licenseKey, array $state, string $target): void
{
    $env = readEnvFile($root . DIRECTORY_SEPARATOR . '.env');
    $rpcSecret = $env['ZICBOARD_CORE_RPC_SECRET'] ?? '';
    if ($rpcSecret === '') {
        $rpcSecret = bin2hex(random_bytes(32));
    }
    upsertEnvValue($root . DIRECTORY_SEPARATOR . '.env', 'ZICBOARD_CORE_RPC_SECRET', $rpcSecret);
    upsertEnvValue($root . DIRECTORY_SEPARATOR . '.env', 'ZICBOARD_LICENSE_KEY', $licenseKey);

    $licenseServerUrl = trim((string)($download['license_server_url'] ?? ''));
    if ($licenseServerUrl === '') {
        throw new RuntimeException('License server response is missing license_server_url');
    }
    if (stripos($licenseServerUrl, 'https://') !== 0) {
        throw new RuntimeException('License server URL must use HTTPS');
    }
    $refreshInterval = trim((string)($env['ZICBOARD_CORE_REFRESH_INTERVAL'] ?? '15m'));
    if ($refreshInterval === '') {
        $refreshInterval = '15m';
    }
    $values = [
        'ZICBOARD_CORE_RPC_SECRET' => $rpcSecret,
        'ZICBOARD_CORE_LISTEN' => '127.0.0.1:18080',
        'ZICBOARD_LICENSE_SERVER_URL' => $licenseServerUrl,
        'ZICBOARD_LICENSE_KEY' => $licenseKey,
        'ZICBOARD_INSTALL_ID' => $state['install_id'],
        'ZICBOARD_LICENSE_PUBLIC_KEY' => $manifest['release_public_key'],
        'ZICBOARD_CORE_ENTITLEMENT_PATH' => $runtimeDir . DIRECTORY_SEPARATOR . 'entitlement.json',
        'ZICBOARD_PANEL_VERSION' => (string)($manifest['panel_version'] ?? ''),
        'ZICBOARD_CORE_TARGET' => $target,
        'ZICBOARD_CORE_REFRESH_INTERVAL' => $refreshInterval,
    ];
    $lines = [];
    foreach ($values as $key => $value) {
        $lines[] = $key . '=' . str_replace(["\r", "\n"], '', (string)$value);
    }
    file_put_contents($runtimeDir . DIRECTORY_SEPARATOR . 'core.env', implode("\n", $lines) . "\n");
    @chmod($runtimeDir . DIRECTORY_SEPARATOR . 'core.env', 0600);
}

function upsertEnvValue(string $path, string $key, string $value): void
{
    if (!is_file($path)) {
        file_put_contents($path, "{$key}={$value}\n");
        return;
    }
    $lines = file($path, FILE_IGNORE_NEW_LINES);
    $updated = false;
    foreach ($lines as $index => $line) {
        if (strpos($line, $key . '=') === 0) {
            $lines[$index] = $key . '=' . str_replace(["\r", "\n"], '', $value);
            $updated = true;
        }
    }
    if (!$updated) {
        $lines[] = $key . '=' . str_replace(["\r", "\n"], '', $value);
    }
    file_put_contents($path, implode("\n", $lines) . "\n");
}

function readJsonFile(string $path, $default)
{
    if (!is_file($path)) {
        return $default;
    }
    $content = (string)file_get_contents($path);
    // Strip UTF-8 BOM if present (e.g. if written by PowerShell on Windows)
    if (strpos($content, "\xEF\xBB\xBF") === 0) {
        $content = substr($content, 3);
    }
    $decoded = json_decode($content, true);
    return $decoded === null ? $default : $decoded;
}

function writeJsonFile(string $path, array $data): void
{
    ensureDir(dirname($path));
    file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n");
}

function readEnvFile(string $path): array
{
    if (!is_file($path)) {
        return [];
    }
    $result = [];
    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#' || strpos($line, '=') === false) {
            continue;
        }
        [$key, $value] = explode('=', $line, 2);
        $result[trim($key)] = trim($value, " \t\n\r\0\x0B\"'");
    }
    return $result;
}

function ensureDir(string $path): void
{
    if (!is_dir($path) && !mkdir($path, 0775, true) && !is_dir($path)) {
        throw new RuntimeException("Unable to create directory: {$path}");
    }
}

function machineFingerprint(): string
{
    foreach (['/etc/machine-id', '/var/lib/dbus/machine-id'] as $path) {
        if (!is_file($path)) {
            continue;
        }
        $identity = trim((string)file_get_contents($path));
        if ($identity !== '') {
            return hash('sha256', $identity);
        }
    }
    throw new RuntimeException('Linux machine-id is unavailable');
}

function generateUuid(): string
{
    $data = random_bytes(16);
    $data[6] = chr((ord($data[6]) & 0x0f) | 0x40);
    $data[8] = chr((ord($data[8]) & 0x3f) | 0x80);
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}
