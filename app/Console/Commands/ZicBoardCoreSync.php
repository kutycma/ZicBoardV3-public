<?php

namespace App\Console\Commands;

use App\Services\Core\CoreConfig;
use Illuminate\Console\Command;

class ZicBoardCoreSync extends Command
{
    protected $signature = 'zicboard:core:sync';

    protected $description = 'Synchronize ZicBoard core RPC configuration between .env and .zicboard/core/core.env';

    public function handle()
    {
        $envPath = CoreConfig::envPath();
        $coreEnvPath = CoreConfig::coreEnvPath();
        $env = CoreConfig::readEnvFile($envPath);
        $coreEnv = CoreConfig::readEnvFile($coreEnvPath);

        $envSecret = CoreConfig::normalizeSecret($env['ZICBOARD_CORE_RPC_SECRET'] ?? '');
        $coreEnvSecret = CoreConfig::normalizeSecret($coreEnv['ZICBOARD_CORE_RPC_SECRET'] ?? '');

        $targetSecret = '';
        $targetSource = '';
        if (CoreConfig::isValidSecret($coreEnvSecret)) {
            $targetSecret = $coreEnvSecret;
            $targetSource = '.zicboard/core/core.env';
        } elseif (CoreConfig::isValidSecret($envSecret)) {
            $targetSecret = $envSecret;
            $targetSource = '.env';
        } else {
            $targetSecret = CoreConfig::generateSecret();
            $targetSource = 'generated';
            $this->warn('No valid core RPC secret was found; generated a new 64-character secret. Restart zicboard-core after this command if it was already running.');
        }

        if (CoreConfig::isValidSecret($envSecret) && CoreConfig::isValidSecret($coreEnvSecret) && !hash_equals($envSecret, $coreEnvSecret)) {
            $this->warn('core_rpc_secret_mismatch: .env and .zicboard/core/core.env use different secrets; using core.env as the runtime source of truth.');
        }

        $changed = false;
        if (!hash_equals($envSecret, $targetSecret)) {
            CoreConfig::upsertEnvValue($envPath, 'ZICBOARD_CORE_RPC_SECRET', $targetSecret);
            $changed = true;
            $this->info('Updated .env ZICBOARD_CORE_RPC_SECRET from ' . $targetSource . '.');
        }

        if (!hash_equals($coreEnvSecret, $targetSecret)) {
            CoreConfig::upsertEnvValue($coreEnvPath, 'ZICBOARD_CORE_RPC_SECRET', $targetSecret);
            $changed = true;
            $this->info('Updated .zicboard/core/core.env ZICBOARD_CORE_RPC_SECRET from ' . $targetSource . '.');
        }

        if ($this->configCacheIsStale($targetSecret) || $changed) {
            \Artisan::call('config:clear');
            $this->info('Laravel configuration cache cleared.');
        }

        $this->info('Core RPC secret synchronized.');
        return 0;
    }

    private function configCacheIsStale(string $targetSecret): bool
    {
        if (!app()->configurationIsCached()) {
            return false;
        }

        $cachedCore = CoreConfig::cachedCoreConfig();
        $cachedSecret = CoreConfig::normalizeSecret($cachedCore['rpc_secret'] ?? '');
        return $cachedSecret === '' || !hash_equals($cachedSecret, $targetSecret);
    }
}
