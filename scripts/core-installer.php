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

    $source = rtrim((string)($manifest['core_release_source'] ?? ''), '/');
    if ($source !== 'https://github.com/kutycma/ZicBoardV3-public/releases/download') {
        throw new RuntimeException('Unexpected core_release_source');
    }
    $version = (string)($manifest['required_core_version'] ?? '');
    if (!preg_match('/^\d+\.\d+\.\d+$/D', $version)) {
        throw new RuntimeException('Invalid required_core_version');
    }
    $assetUrl = $source . '/core-v' . $version . '/zicboard-core-' . $target;

    $runtimeDir = $root . DIRECTORY_SEPARATOR . '.zicboard' . DIRECTORY_SEPARATOR . 'core';
    foreach ([
        $root . DIRECTORY_SEPARATOR . '.env',
        $root . DIRECTORY_SEPARATOR . '.zicboard',
        $runtimeDir,
        $runtimeDir . DIRECTORY_SEPARATOR . 'runtime',
        $runtimeDir . DIRECTORY_SEPARATOR . 'core.env',
        $runtimeDir . DIRECTORY_SEPARATOR . 'state.json',
        $root . DIRECTORY_SEPARATOR . 'bin',
        $root . DIRECTORY_SEPARATOR . 'bin' . DIRECTORY_SEPARATOR . 'zicboard-core',
    ] as $protectedPath) {
        rejectSymlink($protectedPath);
    }
    ensureDir($runtimeDir);
    ensureDir($root . DIRECTORY_SEPARATOR . 'bin');

    $statePath = $runtimeDir . DIRECTORY_SEPARATOR . 'state.json';
    $state = readJsonFile($statePath, []);
    if (empty($state['install_id'])) {
        $state['install_id'] = generateUuid();
    }
    $previousState = $state;
    $previousEnvironment = is_file($runtimeDir . '/core.env') ? (string)file_get_contents($runtimeDir . '/core.env') : null;
    $previousCoreState = coreStateSnapshot($state);

    $download = [
        'version' => $version,
        'download_url' => $assetUrl,
        'sha256' => trim(downloadReleaseText($assetUrl . '.sha256', $runtimeDir)),
        'signature' => trim(downloadReleaseText($assetUrl . '.sig', $runtimeDir)),
    ];
    if (!preg_match('/^[a-f0-9]{64}$/D', $download['sha256'])) {
        throw new RuntimeException('Release checksum must be lowercase SHA256 hex');
    }
    $tmpPath = $runtimeDir . DIRECTORY_SEPARATOR . 'zicboard-core.tmp';
    $binaryPath = $root . DIRECTORY_SEPARATOR . 'bin' . DIRECTORY_SEPARATOR . 'zicboard-core';
    rejectSymlink($tmpPath);
    downloadFile((string)$download['download_url'], $tmpPath);

    $actualHash = hash_file('sha256', $tmpPath);
    if (!hash_equals(strtolower((string)$download['sha256']), strtolower($actualHash))) {
        @unlink($tmpPath);
        throw new RuntimeException('Downloaded core checksum does not match manifest response');
    }

    verifySignature($manifest, $download, $actualHash);

    $backupPath = null;
    if (is_link($binaryPath)) {
        throw new RuntimeException('Refusing to replace symlinked zicboard-core binary');
    }
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
        if ($previousEnvironment !== null) {
            rejectSymlink($backupPath . '.env');
            if (file_put_contents($backupPath . '.env', $previousEnvironment, LOCK_EX) === false) {
                @rename($binaryPath, $tmpPath);
                @rename($backupPath, $binaryPath);
                throw new RuntimeException('Unable to preserve rollback core environment');
            }
            @chmod($backupPath . '.env', 0600);
        }
        $state['last_core_backup'] = $backupPath;
        $state['last_core_state'] = $previousCoreState;
    } else {
        unset($state['last_core_backup']);
        unset($state['last_core_state']);
    }
    unset($state['activation_id']);
    try {
        writeJsonFile($statePath, $state);
        writeCoreEnvironment($root, $runtimeDir, $manifest, $state, $target);
    } catch (Throwable $e) {
        if (is_file($binaryPath)) {
            @rename($binaryPath, $runtimeDir . DIRECTORY_SEPARATOR . 'zicboard-core.failed.' . date('YmdHis'));
        }
        if ($backupPath && is_file($backupPath)) {
            @rename($backupPath, $binaryPath);
        }
        if (!$backupPath) {
            @unlink($binaryPath);
        }
        try {
            writeJsonFile($statePath, $previousState);
        } catch (Throwable $rollbackError) {
            // The caller keeps its own backup; never hide the original failure.
        }
        throw $e;
    }

    echo "Installed zicboard-core {$state['core_version']} for {$target}.\n";
}

function healthCheck(string $root): void
{
    $url = 'http://127.0.0.1:18080/health';
    $lastError = 'no response';
    $deadline = time() + 45;
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
        $httpStatus = httpStatusFromHeaders($http_response_header ?? []);
        if ($body !== false && $httpStatus === 200) {
            $decoded = json_decode($body, true);
            if (is_array($decoded)
                && in_array(($decoded['status'] ?? null), ['ok', 'degraded'], true)
                && (int)($decoded['schema_version'] ?? 0) === 1) {
                try {
                    $build = coreRpcCall($root, 'build.info');
                    $runningHash = strtolower(trim((string)($build['core_sha256'] ?? '')));
                    $runningVersion = (string)($build['version'] ?? '');
                    if (($runningHash === '' && ($runningVersion === '' || version_compare($runningVersion, '0.2.7', '>=')))
                        || ($runningHash !== '' && $expectedHash !== '' && !hash_equals($expectedHash, $runningHash))) {
                        throw new RuntimeException('running core checksum does not match installed artifact');
                    }
                    echo "Core health check passed.\n";
                    return;
                } catch (Throwable $e) {
                    $lastError = $e->getMessage();
                }
            } else {
                $lastError = 'invalid core health response';
            }
        } else {
            $lastError = $httpStatus > 0 ? "core health returned HTTP {$httpStatus}" : 'core health did not respond';
        }
        sleep(2);
    } while (time() < $deadline);

    throw new RuntimeException('Core health check failed: ' . $lastError);
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

    $url = 'http://127.0.0.1:18080/rpc';

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
    if (is_file($backupPath . '.env')) {
        $envPath = dirname($statePath) . DIRECTORY_SEPARATOR . 'core.env';
        rejectSymlink($envPath);
        rejectSymlink($backupPath . '.env');
        if (!copy($backupPath . '.env', $envPath)) {
            throw new RuntimeException('Unable to restore previous core environment');
        }
        @chmod($envPath, 0600);
    }
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

function downloadFile(string $url, string $destination, int $redirects = 0): void
{
    if (stripos($url, 'https://') !== 0 || $redirects > 5) {
        throw new RuntimeException('Downloads require HTTPS with at most five redirects');
    }
    $maxBytes = (int)(getenv('ZICBOARD_CORE_MAX_BYTES') ?: 104857600);
    if ($maxBytes <= 0) {
        $maxBytes = 104857600;
    }
    $context = stream_context_create([
        'http' => [
            'timeout' => 60,
            'follow_location' => 0,
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
    if (in_array($status, [301, 302, 303, 307, 308], true)) {
        fclose($input);
        foreach ($http_response_header ?? [] as $header) {
            if (stripos($header, 'Location:') === 0) {
                downloadFile(trim(substr($header, 9)), $destination, $redirects + 1);
                return;
            }
        }
        throw new RuntimeException('Release redirect is missing Location');
    }
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

function writeCoreEnvironment(string $root, string $runtimeDir, array $manifest, array $state, string $target): void
{
    $env = readEnvFile($root . DIRECTORY_SEPARATOR . '.env');
    $coreEnv = readEnvFile($runtimeDir . DIRECTORY_SEPARATOR . 'core.env');
    $rpcSecret = validRpcSecret($coreEnv['ZICBOARD_CORE_RPC_SECRET'] ?? '')
        ? $coreEnv['ZICBOARD_CORE_RPC_SECRET']
        : ($env['ZICBOARD_CORE_RPC_SECRET'] ?? '');
    if (!validRpcSecret($rpcSecret)) {
        $rpcSecret = bin2hex(random_bytes(32));
    }
    upsertEnvValue($root . DIRECTORY_SEPARATOR . '.env', 'ZICBOARD_CORE_RPC_SECRET', $rpcSecret);
    $refreshInterval = trim((string)($env['ZICBOARD_CORE_REFRESH_INTERVAL'] ?? '15m'));
    if ($refreshInterval === '') {
        $refreshInterval = '15m';
    }
    // Keep legacy settings inert for safe rollback to a licensed core/panel.
    $values = array_merge($coreEnv, [
        'ZICBOARD_CORE_RPC_SECRET' => $rpcSecret,
        'ZICBOARD_CORE_LISTEN' => '127.0.0.1:18080',
        'ZICBOARD_INSTALL_ID' => $state['install_id'],
        'ZICBOARD_PANEL_VERSION' => (string)($manifest['panel_version'] ?? ''),
        'ZICBOARD_CORE_TARGET' => $target,
        'ZICBOARD_CORE_REFRESH_INTERVAL' => $refreshInterval,
    ]);
    $lines = [];
    foreach ($values as $key => $value) {
        $lines[] = $key . '=' . str_replace(["\r", "\n"], '', (string)$value);
    }
    $coreEnvPath = $runtimeDir . DIRECTORY_SEPARATOR . 'core.env';
    rejectSymlink($coreEnvPath);
    $coreEnvTmp = $coreEnvPath . '.tmp';
    rejectSymlink($coreEnvTmp);
    if (file_put_contents($coreEnvTmp, implode("\n", $lines) . "\n", LOCK_EX) === false || !rename($coreEnvTmp, $coreEnvPath)) {
        @unlink($coreEnvTmp);
        throw new RuntimeException('Unable to write core.env');
    }
    @chmod($coreEnvPath, 0600);
}

function upsertEnvValue(string $path, string $key, string $value): void
{
    rejectSymlink($path);
    if (!is_file($path)) {
        if (file_put_contents($path, "{$key}={$value}\n", LOCK_EX) === false) {
            throw new RuntimeException("Unable to write environment file: {$path}");
        }
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
    if (file_put_contents($path, implode("\n", $lines) . "\n", LOCK_EX) === false) {
        throw new RuntimeException("Unable to write environment file: {$path}");
    }
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
    rejectSymlink($path);
    $encoded = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n";
    $tmp = $path . '.tmp';
    rejectSymlink($tmp);
    if (file_put_contents($tmp, $encoded, LOCK_EX) === false || !rename($tmp, $path)) {
        @unlink($tmp);
        throw new RuntimeException("Unable to write JSON state: {$path}");
    }
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

function validRpcSecret(string $secret): bool
{
    return strlen(trim($secret)) >= 32 && !preg_match('/[\r\n]/', $secret);
}

function rejectSymlink(string $path): void
{
    if (is_link($path)) {
        throw new RuntimeException("Refusing to follow symlink in core trust boundary: {$path}");
    }
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

function downloadReleaseText(string $url, string $runtimeDir): string
{
    $path = $runtimeDir . DIRECTORY_SEPARATOR . 'release-metadata.tmp';
    rejectSymlink($path);
    try {
        downloadFile($url, $path);
        if (filesize($path) > 1024) {
            throw new RuntimeException('Release metadata exceeds allowed size');
        }
        return (string)file_get_contents($path);
    } finally {
        @unlink($path);
    }
}
