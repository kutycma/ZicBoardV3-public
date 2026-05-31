<?php

namespace App\Console\Commands;

use App\Services\HappSubscribeCacheService;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class PruneHappSubscribeCache extends Command
{
    protected $signature = 'happ-subscribe-cache:prune';
    protected $description = 'Prune expired Happ encrypted subscribe URL cache rows';

    public function handle()
    {
        if (!Schema::hasTable(HappSubscribeCacheService::TABLE)) {
            $this->info('Happ subscribe cache table does not exist.');
            return 0;
        }

        $deleted = DB::table(HappSubscribeCacheService::TABLE)
            ->where('stale_until', '<', time())
            ->delete();

        $this->info("Pruned {$deleted} Happ subscribe cache rows.");
        return 0;
    }
}
