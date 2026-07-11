<?php

namespace App\Console\Commands;

use App\Utils\Helper;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class MigrateDvsteamToZicBoard extends Command
{
    protected $signature = 'zicboard:migrate-dvsteam
        {--dry-run : Chi kiem tra va in ke hoach, khong sua database}
        {--skip-stats : Bo qua migrate du lieu v2_stat_user}';

    protected $description = 'Migrate database DVSteam/Aiko da import sang schema ZicBoardV3';

    private const SERVER_TABLES = [
        'v2_server_shadowsocks',
        'v2_server_vmess',
        'v2_server_vless',
        'v2_server_trojan',
        'v2_server_hysteria',
    ];

    private const PRICE_FIELDS = [
        'one_day_price',
        'week_price',
        'month_price',
        'two_month_price',
        'quarter_price',
        'half_year_price',
        'year_price',
        'two_year_price',
        'three_year_price',
        'onetime_price',
        'reset_price',
    ];

    private $dryRun = false;
    private $currentStep = 'startup';
    private $warnings = [];

    public function handle()
    {
        $this->dryRun = (bool)$this->option('dry-run');

        try {
            DB::connection()->getPdo();
        } catch (\Throwable $e) {
            $this->error('Khong ket noi duoc database hien tai.');
            $this->line('Cach fix: kiem tra DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD trong file .env.');
            $this->line('Loi goc: ' . $e->getMessage());
            return 1;
        }

        $this->info('Migrating DVSteam/Aiko data to ZicBoardV3 schema.');
        $this->line('Database: ' . DB::getDatabaseName());
        $this->warn('Hay backup database truoc khi chay migrate that.');
        if ($this->dryRun) {
            $this->warn('DRY RUN: command chi kiem tra, khong ghi database.');
        }

        try {
            $this->currentStep = 'preflight';
            $this->preflight();
            $this->printSourceSummary();

            if ($this->dryRun) {
                $this->callOrFail('zicboard:migrate-v2b-zic', $this->baseOptions(true));
                $this->printDryRunPlan();
                $this->printWarnings();
                return 0;
            }

            $this->callOrFail('zicboard:migrate-v2b-zic', $this->baseOptions(false));

            $this->runStep('Chuyen field node DVSteam sang ZicBoard', function () {
                $this->migrateLegacyServerFields();
            });

            $this->callOrFail('zicboard:update', $this->updateOptions());

            $this->runStep('Tao webcon tu staff_url', function () {
                $this->migrateStaffWebcons();
            });

            $this->runStep('Chuyen SNI user sang subscription', function () {
                $this->migrateLegacySni();
            });

            $this->printPostSummary();
            $this->printWarnings();
            $this->info('DVSteam migration completed. Command co the chay lai neu buoc truoc bi gian doan.');
            return 0;
        } catch (\Throwable $e) {
            $this->error('Migration failed tai buoc: ' . $this->currentStep);
            $this->line('Loi goc: ' . $e->getMessage());
            return 1;
        }
    }

    private function preflight()
    {
        $this->requireTable('v2_user');
        $this->requireTable('v2_plan');
        $this->requireTable('v2_plan_staff');
        $this->requireTable('v2_sni');
        $this->requireTable('v2_order');

        $this->requireColumns('v2_user', ['id', 'is_staff', 'staff_url', 'custom_price', 'sni', 'plan_id', 'transfer_enable', 'expired_at', 'token', 'uuid', 'created_at', 'updated_at']);
        $this->requireColumns('v2_plan', array_merge(['id', 'show'], self::PRICE_FIELDS));
        $this->requireColumns('v2_plan_staff', array_merge(['plan_id', 'user_id', 'show'], self::PRICE_FIELDS));
        $this->requireColumns('v2_sni', ['label', 'value']);
        $this->requireColumns('v2_order', ['user_id', 'plan_id', 'period', 'status']);

        $this->abortIfDuplicateWebconDomains();
        $this->collectWarnings();
    }

    private function collectWarnings()
    {
        $staffWithoutDomain = DB::table('v2_user')
            ->where('is_staff', 1)
            ->where(function ($query) {
                $query->whereNull('staff_url')->orWhereRaw("TRIM(`staff_url`) = ''");
            })
            ->count();
        if ($staffWithoutDomain > 0) {
            $this->warnings[] = "Co {$staffWithoutDomain} staff khong co staff_url; command se khong tao webcon cho cac user nay.";
        }

        $customOverrides = $this->countCustomPriceOverrides();
        if ($customOverrides > 0) {
            $this->warnings[] = "Co {$customOverrides} plan staff co gia rieng; theo lua chon migrate, webcon se dung gia plan goc.";
        }

        $weekOrders = DB::table('v2_order')->where('period', 'week_price')->count();
        if ($weekOrders > 0) {
            $this->warnings[] = "Co {$weekOrders} order week_price; giu lich su nhung bo qua khi tinh hoan tien/chuyen goi.";
        }

        $orphanOrders = $this->countOrphans('v2_order');
        if ($orphanOrders > 0) {
            $this->warnings[] = "Co {$orphanOrders} order khong con user; giu lai voi subscription_id = NULL.";
        }

        $orphanStats = $this->countOrphans('v2_stat_user');
        if ($orphanStats > 0) {
            $this->warnings[] = "Co {$orphanStats} stat_user khong con user; giu lai voi subscription_id = NULL.";
        }

        $scopedRows = $this->countLegacyScopedRows();
        if ($scopedRows > 0) {
            $this->warnings[] = "Co {$scopedRows} row loc theo staff cua Aiko; du lieu duoc giu nhung ZicBoardV3 khong port logic loc nay.";
        }

        $appleIdRows = $this->countAppleIdRows();
        if ($appleIdRows > 0) {
            $this->warnings[] = "Co {$appleIdRows} user/plan co du lieu AppleID; cot legacy duoc giu nhung tinh nang khong duoc port.";
        }
    }

    private function printSourceSummary()
    {
        $this->line('');
        $this->info('Trang thai DVSteam truoc migrate:');
        $this->line('- users: ' . $this->countRows('v2_user'));
        $this->line('- subscription candidates: ' . $this->countSubscriptionCandidates());
        $this->line('- staff co domain: ' . $this->sourceStaffUsers()->count());
        $this->line('- plan_staff: ' . $this->countRows('v2_plan_staff') . ', dang hien thi: ' . DB::table('v2_plan_staff')->where('show', 1)->count());
        $this->line('- custom price overrides bo qua: ' . $this->countCustomPriceOverrides());
        $this->line('- user co SNI: ' . DB::table('v2_user')->whereNotNull('sni')->whereRaw("TRIM(`sni`) <> ''")->count());
        $this->line('- orders: ' . $this->countRows('v2_order') . ', orphan: ' . $this->countOrphans('v2_order'));
        $this->line('- order two_month_price: ' . DB::table('v2_order')->where('period', 'two_month_price')->count() . ', week_price: ' . DB::table('v2_order')->where('period', 'week_price')->count());
        $this->line('- stat_user: ' . $this->countRows('v2_stat_user') . ', orphan: ' . $this->countOrphans('v2_stat_user'));
        $this->line('- legacy nodes: ' . $this->countLegacyNodes() . ', report enabled: ' . $this->countLegacyReportEnabled());
        $this->line('');
    }

    private function printDryRunPlan()
    {
        $this->info('Preflight OK. Khi chay that, command se:');
        $this->line('1. Goi zicboard:migrate-v2b-zic de tao subscription va gan order/stat.');
        $this->line('2. Chuyen ips -> load_ips va report -> check cho node legacy.');
        $this->line('3. Goi zicboard:update de dua schema ve ZicBoardV3 hien tai.');
        $this->line('4. Tao webcon tu staff_url, chi gan ID plan goc dang hien thi.');
        $this->line('5. Chuyen v2_user.sni sang subscription va giu nguyen bang/cot Aiko.');
        $this->line('Chay that: php artisan zicboard:migrate-dvsteam');
    }

    private function baseOptions($dryRun)
    {
        $options = [];
        if ($dryRun) {
            $options['--dry-run'] = true;
        }
        if ($this->option('skip-stats')) {
            $options['--skip-stats'] = true;
        }
        return $options;
    }

    private function updateOptions()
    {
        return $this->option('skip-stats') ? ['--skip-stats' => true] : [];
    }

    private function callOrFail($command, array $options)
    {
        $this->currentStep = $command;
        $status = $this->call($command, $options);
        if ((int)$status !== 0) {
            throw new \RuntimeException("Command {$command} tra ve exit code {$status}.");
        }
    }

    private function runStep($label, $callback)
    {
        $this->currentStep = $label;
        $this->line('> ' . $label);
        $callback();
        $this->info('  OK');
    }

    private function migrateLegacyServerFields()
    {
        $copiedIps = 0;
        $enabledChecks = 0;

        foreach (self::SERVER_TABLES as $table) {
            if (!Schema::hasTable($table)) {
                continue;
            }

            if (Schema::hasColumn($table, 'ips')) {
                if (!Schema::hasColumn($table, 'load_ips')) {
                    $after = Schema::hasColumn($table, 'tags') ? ' AFTER `tags`' : '';
                    DB::statement("ALTER TABLE `{$table}` ADD `load_ips` text DEFAULT NULL{$after}");
                }
                $copiedIps += DB::affectingStatement("
                    UPDATE `{$table}`
                    SET `load_ips` = `ips`
                    WHERE TRIM(COALESCE(`ips`, '')) NOT IN ('', '[]', 'null')
                        AND TRIM(COALESCE(`load_ips`, '')) IN ('', '[]', 'null')
                ");
            }

            if (Schema::hasColumn($table, 'report') && !Schema::hasColumn($table, 'check')) {
                $after = Schema::hasColumn($table, 'show') ? ' AFTER `show`' : '';
                DB::statement("ALTER TABLE `{$table}` ADD `check` tinyint(1) NOT NULL DEFAULT '0'{$after}");
                $enabledChecks += DB::affectingStatement("
                    UPDATE `{$table}`
                    SET `check` = CASE WHEN `report` = 1 THEN 1 ELSE 0 END
                ");
            }
        }

        $this->line("  load_ips copied={$copiedIps}, node checks mapped={$enabledChecks}.");
    }

    private function migrateStaffWebcons()
    {
        $created = 0;
        $updated = 0;
        $disabled = 0;

        foreach ($this->sourceStaffUsers() as $source) {
            $domain = Helper::normalizeWebconDomain($source->staff_url);
            $planIds = $this->staffPlanIds((int)$source->id);
            $existing = DB::table('v2_staff')->where('user_id', $source->id)->first();
            if (!$existing) {
                $existing = DB::table('v2_staff')->where('domain', $domain)->first();
            }

            $data = [
                'user_id' => (int)$source->id,
                'domain' => $domain,
                'plan_id' => json_encode($planIds),
                'updated_at' => time(),
            ];

            if ($existing) {
                DB::table('v2_staff')->where('id', $existing->id)->update($data);
                $updated++;
                continue;
            }

            $data['status'] = $planIds ? 1 : 0;
            $data['created_at'] = (int)($source->created_at ?: time());
            DB::table('v2_staff')->insert($data);
            $created++;
            if (!$planIds) {
                $disabled++;
            }
        }

        $this->line("  webcon created={$created}, updated={$updated}, disabled_no_plan={$disabled}.");
    }

    private function staffPlanIds($staffUserId)
    {
        // ponytail: custom prices collapse to existing base plan IDs by product decision.
        return DB::table('v2_plan_staff as staff_plans')
            ->join('v2_plan as plans', 'plans.id', '=', 'staff_plans.plan_id')
            ->where('staff_plans.user_id', $staffUserId)
            ->where('staff_plans.show', 1)
            ->pluck('staff_plans.plan_id')
            ->map(function ($id) {
                return (int)$id;
            })
            ->unique()
            ->sort()
            ->values()
            ->all();
    }

    private function migrateLegacySni()
    {
        if (!Schema::hasColumn('v2_user_subscription', 'name_sni') ||
            !Schema::hasColumn('v2_user_subscription', 'network_settings')) {
            throw new \RuntimeException('v2_user_subscription thieu cot SNI sau khi chay zicboard:update.');
        }

        $affected = DB::affectingStatement("
            UPDATE `v2_user_subscription` AS subscriptions
            INNER JOIN `v2_user` AS users ON users.id = subscriptions.user_id
            LEFT JOIN `v2_sni` AS catalog ON catalog.value = users.sni
            SET subscriptions.network_settings = CASE
                    WHEN TRIM(COALESCE(subscriptions.network_settings, '')) = '' THEN users.sni
                    ELSE subscriptions.network_settings
                END,
                subscriptions.name_sni = CASE
                    WHEN TRIM(COALESCE(subscriptions.name_sni, '')) = ''
                        THEN COALESCE(NULLIF(TRIM(catalog.label), ''), users.sni)
                    ELSE subscriptions.name_sni
                END
            WHERE TRIM(COALESCE(users.sni, '')) <> ''
                AND (
                    TRIM(COALESCE(subscriptions.network_settings, '')) = ''
                    OR TRIM(COALESCE(subscriptions.name_sni, '')) = ''
                )
        ");

        $this->line("  subscriptions updated={$affected}.");
    }

    private function printPostSummary()
    {
        $this->line('');
        $this->info('Trang thai sau migrate:');
        $this->line('- users: ' . $this->countRows('v2_user'));
        $this->line('- subscriptions: ' . $this->countRows('v2_user_subscription'));
        $this->line('- webcon: ' . $this->countRows('v2_staff'));
        $this->line('- SNI mapped: ' . $this->countMappedSni());
        $this->line('- orders linked: ' . $this->countLinked('v2_order') . ', missing subscription_id: ' . $this->countMissingSubscription('v2_order'));
        $this->line('- stat_user linked: ' . $this->countLinked('v2_stat_user') . ', missing subscription_id: ' . $this->countMissingSubscription('v2_stat_user'));
        $this->line('- node check enabled: ' . $this->countCurrentChecks());
        $this->line('- expired_at = 0: users=' . $this->countExpiredZero('v2_user') . ', subscriptions=' . $this->countExpiredZero('v2_user_subscription'));
        $this->line('');
    }

    private function sourceStaffUsers()
    {
        return DB::table('v2_user')
            ->where('is_staff', 1)
            ->whereNotNull('staff_url')
            ->whereRaw("TRIM(`staff_url`) <> ''")
            ->orderBy('id')
            ->get();
    }

    private function abortIfDuplicateWebconDomains()
    {
        $domains = [];
        foreach ($this->sourceStaffUsers() as $staff) {
            $domain = Helper::normalizeWebconDomain($staff->staff_url);
            if ($domain === '') {
                throw new \RuntimeException("Staff ID {$staff->id} co staff_url khong hop le.");
            }
            if (isset($domains[$domain])) {
                throw new \RuntimeException("Trung webcon domain {$domain} giua staff ID {$domains[$domain]} va {$staff->id}.");
            }
            $domains[$domain] = $staff->id;
        }
    }

    private function countCustomPriceOverrides()
    {
        $conditions = [];
        foreach (self::PRICE_FIELDS as $column) {
            $conditions[] = "NOT (staff_plans.`{$column}` <=> plans.`{$column}`)";
        }

        return DB::table('v2_plan_staff as staff_plans')
            ->join('v2_plan as plans', 'plans.id', '=', 'staff_plans.plan_id')
            ->whereRaw('(' . implode(' OR ', $conditions) . ')')
            ->count();
    }

    private function countSubscriptionCandidates()
    {
        return DB::table('v2_user')
            ->where(function ($query) {
                $query->whereNotNull('plan_id')->orWhere('transfer_enable', '>', 0);
            })
            ->count();
    }

    private function countLegacyNodes()
    {
        $count = 0;
        foreach (self::SERVER_TABLES as $table) {
            $count += $this->countRows($table);
        }
        return $count;
    }

    private function countLegacyReportEnabled()
    {
        $count = 0;
        foreach (self::SERVER_TABLES as $table) {
            if (Schema::hasTable($table) && Schema::hasColumn($table, 'report')) {
                $count += DB::table($table)->where('report', 1)->count();
            }
        }
        return $count;
    }

    private function countCurrentChecks()
    {
        $count = 0;
        foreach (self::SERVER_TABLES as $table) {
            if (Schema::hasTable($table) && Schema::hasColumn($table, 'check')) {
                $count += DB::table($table)->where('check', 1)->count();
            }
        }
        return $count;
    }

    private function countLegacyScopedRows()
    {
        $columns = [
            'v2_coupon' => 'limit_staff_urls',
            'v2_knowledge' => 'staff_urls',
            'v2_notice' => 'staff_urls',
            'v2_payment' => 'staff_urls',
        ];
        $count = 0;
        foreach ($columns as $table => $column) {
            if (!Schema::hasTable($table) || !Schema::hasColumn($table, $column)) {
                continue;
            }
            $count += DB::table($table)
                ->whereNotNull($column)
                ->whereRaw("TRIM(`{$column}`) NOT IN ('', '[]', 'null')")
                ->count();
        }
        return $count;
    }

    private function countAppleIdRows()
    {
        $count = 0;
        foreach (['v2_user', 'v2_plan'] as $table) {
            if (!Schema::hasTable($table) || !Schema::hasColumn($table, 'appleid_limit')) {
                continue;
            }
            $query = DB::table($table)->whereNotNull('appleid_limit');
            if (Schema::hasColumn($table, 'appleid_url')) {
                $query->orWhere(function ($nested) {
                    $nested->whereNotNull('appleid_url')->whereRaw("TRIM(`appleid_url`) <> ''");
                });
            }
            $count += $query->count();
        }
        return $count;
    }

    private function countOrphans($table)
    {
        if (!Schema::hasTable($table) || !Schema::hasColumn($table, 'user_id')) {
            return 0;
        }

        return DB::table($table . ' as source')
            ->leftJoin('v2_user as users', 'users.id', '=', 'source.user_id')
            ->whereNotNull('source.user_id')
            ->whereNull('users.id')
            ->count();
    }

    private function countMappedSni()
    {
        if (!Schema::hasTable('v2_user_subscription') || !Schema::hasColumn('v2_user', 'sni')) {
            return 0;
        }

        return DB::table('v2_user_subscription as subscriptions')
            ->join('v2_user as users', 'users.id', '=', 'subscriptions.user_id')
            ->whereNotNull('users.sni')
            ->whereRaw("TRIM(`users`.`sni`) <> ''")
            ->whereRaw('BINARY subscriptions.network_settings = BINARY users.sni')
            ->count();
    }

    private function countLinked($table)
    {
        if (!Schema::hasTable($table) || !Schema::hasColumn($table, 'subscription_id')) {
            return 0;
        }
        return DB::table($table)->whereNotNull('subscription_id')->count();
    }

    private function countMissingSubscription($table)
    {
        if (!Schema::hasTable($table) || !Schema::hasColumn($table, 'subscription_id')) {
            return 0;
        }
        return DB::table($table)->whereNull('subscription_id')->count();
    }

    private function countExpiredZero($table)
    {
        if (!Schema::hasTable($table) || !Schema::hasColumn($table, 'expired_at')) {
            return 0;
        }
        return DB::table($table)->where('expired_at', 0)->count();
    }

    private function countRows($table)
    {
        return Schema::hasTable($table) ? DB::table($table)->count() : 0;
    }

    private function requireTable($table)
    {
        if (!Schema::hasTable($table)) {
            throw new \RuntimeException("Thieu bang {$table}; day khong phai dump DVSteam/Aiko day du.");
        }
    }

    private function requireColumns($table, array $columns)
    {
        foreach ($columns as $column) {
            if (!Schema::hasColumn($table, $column)) {
                throw new \RuntimeException("Thieu cot {$table}.{$column}; dump DVSteam/Aiko khong dung phien ban ho tro.");
            }
        }
    }

    private function printWarnings()
    {
        if (!$this->warnings) {
            return;
        }
        $this->warn('Canh bao:');
        foreach ($this->warnings as $warning) {
            $this->line('- ' . $warning);
        }
    }
}