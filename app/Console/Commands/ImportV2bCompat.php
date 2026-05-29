<?php

namespace App\Console\Commands;

use App\Models\Staff;
use App\Models\User;
use App\Services\SubscriptionService;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ImportV2bCompat extends Command
{
    protected $signature = 'zicboard:import-v2b-compat {--source= : Source database connection name} {--dry-run : Preview changes without writing}';
    protected $description = 'Import v2b-zic webcon staff and legacy user SNI data into ZicBoardV3';

    public function handle()
    {
        $sourceName = $this->option('source') ?: config('database.default');
        $dryRun = (bool)$this->option('dry-run');

        try {
            DB::connection($sourceName)->getPdo();
        } catch (\Exception $e) {
            $this->error("Cannot connect to source connection [{$sourceName}]: {$e->getMessage()}");
            return 1;
        }

        $this->info('Source connection: ' . $sourceName);
        if ($dryRun) {
            $this->warn('Dry run enabled, no data will be written.');
        }

        $this->importStaff($sourceName, $dryRun);
        $this->importLegacySni($sourceName, $dryRun);

        $this->info('Import completed.');
        return 0;
    }

    private function importStaff($sourceName, $dryRun)
    {
        if (!Schema::connection($sourceName)->hasTable('v2_staff') ||
            !Schema::connection($sourceName)->hasTable('v2_user')) {
            $this->warn('Skipping webcon import: source v2_staff or v2_user table is missing.');
            return;
        }

        $source = DB::connection($sourceName);
        $staffs = $source->table('v2_staff')->get();
        $imported = 0;
        $skipped = 0;

        foreach ($staffs as $staff) {
            $sourceUser = $source->table('v2_user')->where('id', $staff->user_id)->first();
            $targetUser = $sourceUser ? User::where('email', $sourceUser->email)->first() : null;
            if (!$targetUser) {
                $skipped++;
                continue;
            }

            if (!$dryRun) {
                Staff::updateOrCreate([
                    'domain' => $staff->domain
                ], [
                    'status' => $staff->status,
                    'user_id' => $targetUser->id,
                    'plan_id' => $this->decodePlanIds($staff->plan_id ?? null),
                    'title' => $staff->title ?? null,
                    'description' => $staff->description ?? null,
                    'logo' => $staff->logo ?? null,
                    'background_url' => $staff->background_url ?? null,
                    'custom_html' => $staff->custom_html ?? null,
                    'created_at' => $staff->created_at ?? time(),
                    'updated_at' => $staff->updated_at ?? time(),
                ]);

                if (!(int)$targetUser->is_staff) {
                    $targetUser->is_staff = 1;
                    $targetUser->save();
                }
            }

            $imported++;
        }

        $this->info("Webcon staff import: {$imported} matched, {$skipped} skipped.");
    }

    private function importLegacySni($sourceName, $dryRun)
    {
        if (!Schema::connection($sourceName)->hasTable('v2_user') ||
            !Schema::connection($sourceName)->hasColumn('v2_user', 'name_sni') ||
            !Schema::connection($sourceName)->hasColumn('v2_user', 'network_settings') ||
            !Schema::hasColumn('v2_user_subscription', 'name_sni') ||
            !Schema::hasColumn('v2_user_subscription', 'network_settings')) {
            $this->warn('Skipping legacy SNI import: required source or target columns are missing.');
            return;
        }

        $sourceUsers = DB::connection($sourceName)
            ->table('v2_user')
            ->where(function ($query) {
                $query->whereNotNull('name_sni')->orWhereNotNull('network_settings');
            })
            ->get();

        $subscriptionService = new SubscriptionService();
        $imported = 0;
        $skipped = 0;

        foreach ($sourceUsers as $sourceUser) {
            $targetUser = User::where('email', $sourceUser->email)->first();
            if (!$targetUser) {
                $skipped++;
                continue;
            }

            $subscription = $subscriptionService->getPrimaryForUser($targetUser);
            if (!$subscription) {
                $skipped++;
                continue;
            }

            if (!$dryRun) {
                $subscription->name_sni = $sourceUser->name_sni;
                $subscription->network_settings = $sourceUser->network_settings;
                $subscription->save();
            }

            $imported++;
        }

        $this->info("Legacy SNI import: {$imported} matched, {$skipped} skipped.");
    }

    private function decodePlanIds($value)
    {
        if (is_array($value)) {
            return array_map('intval', $value);
        }

        $decoded = json_decode((string)$value, true);
        if (!is_array($decoded)) {
            return [];
        }

        return array_map('intval', $decoded);
    }
}
