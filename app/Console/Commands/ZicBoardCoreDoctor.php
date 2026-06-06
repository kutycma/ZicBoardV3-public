<?php

namespace App\Console\Commands;

use App\Services\Core\CoreConfig;
use App\Services\Core\CoreRpcClient;
use App\Services\Core\CoreRpcException;
use Illuminate\Console\Command;

class ZicBoardCoreDoctor extends Command
{
    protected $signature = 'zicboard:core:doctor';

    protected $description = 'Check ZicBoard panel-to-core RPC configuration, connectivity, integrity, and license status';

    private bool $hasError = false;

    public function handle()
    {
        $envPath = CoreConfig::envPath();
        $coreEnvPath = CoreConfig::coreEnvPath();
        $env = CoreConfig::readEnvFile($envPath);
        $coreEnv = CoreConfig::readEnvFile($coreEnvPath);

        $this->checkEnvFiles($envPath, $coreEnvPath, $env, $coreEnv);
        $this->checkConfigCache($env, $coreEnv);

        $config = CoreConfig::fromRuntime();
        $this->checkResolvedConfig($config);

        $client = new CoreRpcClient(null, $config);
        $this->checkHealth($client);
        $this->checkIntegrity($client);
        $this->checkSignedRpcAndLicense($client);

        if ($this->hasError) {
            $this->error('Core doctor found errors. Run php artisan zicboard:core:sync, restart zicboard-core/PHP-FPM, then run this command again.');
            return 1;
        }

        $this->info('Core doctor passed.');
        return 0;
    }

    private function checkEnvFiles(string $envPath, string $coreEnvPath, array $env, array $coreEnv): void
    {
        $envSecret = CoreConfig::normalizeSecret($env['ZICBOARD_CORE_RPC_SECRET'] ?? '');
        $coreEnvSecret = CoreConfig::normalizeSecret($coreEnv['ZICBOARD_CORE_RPC_SECRET'] ?? '');

        $this->record(is_file($envPath), '.env', 'exists at ' . $envPath, 'Missing .env file');
        $this->record($envSecret === '' || CoreConfig::isValidSecret($envSecret), '.env secret', 'configured length=' . strlen($envSecret), 'Invalid ZICBOARD_CORE_RPC_SECRET in .env');

        if (is_file($coreEnvPath)) {
            $this->record(true, 'core.env', 'exists at ' . $coreEnvPath, '');
            $this->record($coreEnvSecret === '' || CoreConfig::isValidSecret($coreEnvSecret), 'core.env secret', 'configured length=' . strlen($coreEnvSecret), 'Invalid ZICBOARD_CORE_RPC_SECRET in core.env');
        } else {
            $this->warn('[WARN] core.env - missing at ' . $coreEnvPath . '; sync can recreate it if .env has a valid secret');
        }

        if ($envSecret === '' && $coreEnvSecret === '') {
            $this->fail(CoreRpcException::SECRET_MISSING, 'ZICBOARD_CORE_RPC_SECRET is missing from both .env and core.env');
            return;
        }

        if (CoreConfig::isValidSecret($envSecret) && CoreConfig::isValidSecret($coreEnvSecret) && !hash_equals($envSecret, $coreEnvSecret)) {
            $this->fail(CoreRpcException::SECRET_MISMATCH, '.env and .zicboard/core/core.env contain different RPC secrets');
        }
    }

    private function checkConfigCache(array $env, array $coreEnv): void
    {
        if (!app()->configurationIsCached()) {
            $this->ok('config cache', 'not cached');
            return;
        }

        $targetSecret = CoreConfig::normalizeSecret($coreEnv['ZICBOARD_CORE_RPC_SECRET'] ?? '')
            ?: CoreConfig::normalizeSecret($env['ZICBOARD_CORE_RPC_SECRET'] ?? '');
        $cachedCore = CoreConfig::cachedCoreConfig();
        $cachedSecret = CoreConfig::normalizeSecret($cachedCore['rpc_secret'] ?? '');

        if ($targetSecret !== '' && ($cachedSecret === '' || !hash_equals($cachedSecret, $targetSecret))) {
            $this->fail('config cache', 'bootstrap/cache/config.php has a stale or empty core.rpc_secret');
            return;
        }

        $this->ok('config cache', 'cached core.rpc_secret length=' . strlen($cachedSecret));
    }

    private function checkResolvedConfig(CoreConfig $config): void
    {
        $sources = $config->sources();
        $this->ok('resolved rpc url', $config->rpcUrl() . ' source=' . ($sources['rpc_url'] ?? 'unknown'));
        $this->ok('resolved rpc secret', 'length=' . strlen($config->rpcSecret()) . ' source=' . ($sources['rpc_secret'] ?? 'unknown'));

        try {
            $config->validateForRpc();
            $this->ok('rpc config', 'secret and local RPC URL are valid');
        } catch (CoreRpcException $e) {
            $this->fail($e->getCoreCode(), $e->getMessage());
        }
    }

    private function checkHealth(CoreRpcClient $client): void
    {
        try {
            $health = $client->health();
            $status = (string)($health['status'] ?? 'unknown');
            if (!in_array($status, ['ok', 'degraded'], true)) {
                $this->fail('core_health_failed', 'unexpected health status=' . $status);
                return;
            }
            $this->ok('core.health', 'status=' . $status . ' protected=' . (empty($health['protected_features_enabled']) ? 'false' : 'true'));
        } catch (CoreRpcException $e) {
            $this->fail($e->getCoreCode(), $e->getMessage());
        } catch (\Throwable $e) {
            $this->fail(CoreRpcException::UNREACHABLE, $e->getMessage());
        }
    }

    private function checkIntegrity(CoreRpcClient $client): void
    {
        try {
            $client->verifyCoreIntegrity();
            $this->ok('core.integrity', 'running core hash matches installed state when state exists');
        } catch (CoreRpcException $e) {
            $this->fail($e->getCoreCode(), $e->getMessage());
        } catch (\Throwable $e) {
            $this->fail('core_integrity_failed', $e->getMessage());
        }
    }

    private function checkSignedRpcAndLicense(CoreRpcClient $client): void
    {
        try {
            $status = $client->call('license.status');
            if (!is_array($status)) {
                $this->fail(CoreRpcException::ERROR, 'license.status returned invalid data');
                return;
            }

            $active = !empty($status['active']) && !empty($status['protected_features_enabled']) && (string)($status['status'] ?? '') === 'active';
            if (!$active) {
                $this->fail(CoreRpcException::LICENSE_INACTIVE, 'license.status is not active for protected features');
                return;
            }

            $detail = 'status=active protected=true';
            if (!empty($status['license_id'])) {
                $detail .= ' license_id=' . $status['license_id'];
            }
            $this->ok('rpc.license_status', $detail);
        } catch (CoreRpcException $e) {
            $this->fail($e->getCoreCode(), $e->getMessage());
        } catch (\Throwable $e) {
            $this->fail(CoreRpcException::ERROR, $e->getMessage());
        }
    }

    private function record(bool $ok, string $name, string $okMessage, string $errorMessage): void
    {
        if ($ok) {
            $this->ok($name, $okMessage);
            return;
        }
        $this->fail($name, $errorMessage);
    }

    private function ok(string $name, string $message): void
    {
        $this->info('[OK] ' . $name . ' - ' . $message);
    }

    private function fail(string $name, string $message): void
    {
        $this->hasError = true;
        $this->error('[ERROR] ' . $name . ' - ' . $message);
    }
}
