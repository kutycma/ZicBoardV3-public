<?php

namespace App\Console\Commands;

use App\Services\SubscriptionService;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ZicBoardUpdate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'zicboard:update {--force-sql : Force database update SQL even when database/update.sql is unchanged}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update ZicBoard';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        \Artisan::call('config:clear');
        \Artisan::call('route:clear');
        \Artisan::call('view:clear');
        \Artisan::call('config:cache');
        DB::connection()->getPdo();
        $this->configureDatabaseSession();
        $file = \File::get(base_path() . '/database/update.sql');
        if (!$file) {
            abort(500, 'File cập nhật database không tồn tại');
        }
        $sqlChecksum = hash('sha256', $file);
        $this->ensureUpdateHistoryTable();

        if ($this->shouldSkipSqlUpdates($sqlChecksum)) {
            $this->info('database/update.sql has not changed; skipping database update SQL.');
            $this->repairSubscriptionMigration();
            $this->repairZicnodeNodeCompatibility();
            $this->repairSingleSubscriptionMode();
            \Artisan::call('horizon:terminate');
            $this->info('Update completed. Queue workers were restarted, no further action is required.');
            return;
        }

        $file = preg_replace(
            '/DELIMITER\s+\$\$.*?DROP PROCEDURE IF EXISTS `path-2022-03-29`;\s*/is',
            '',
            $file
        );
        $sql = str_replace(["\r\n", "\r", "\n"], " ", $file);
        $sql = preg_split("/;/", $sql);
        if (!is_array($sql)) {
            abort(500, 'File cập nhật database không đúng định dạng');
        }
        $statements = array_values(array_filter(array_map('trim', $sql), function ($item) {
            return $item !== '';
        }));
        $totalStatements = count($statements);
        $hasSqlErrors = false;

        $this->info("Importing database updates ({$totalStatements} statements), please wait...");
        foreach ($statements as $index => $item) {
            $this->line(sprintf('[database %d/%d] %s', $index + 1, $totalStatements, $this->summarizeSql($item)));
            try {
                DB::statement($item);
            } catch (\Exception $e) {
                if ($this->isIgnorableSqlError($e)) {
                    continue;
                }
                $hasSqlErrors = true;
                $this->error(sprintf('SQL execution error at statement %d/%d: %s', $index + 1, $totalStatements, $e->getMessage()));
            }
        }
        $this->repairSubscriptionMigration();
        $this->repairZicnodeNodeCompatibility();
        $this->repairSingleSubscriptionMode();
        if ($hasSqlErrors) {
            $this->warn('Database update SQL had errors; checksum was not saved so the update can retry next time.');
        } else {
            $this->rememberSqlChecksum($sqlChecksum);
        }
        \Artisan::call('horizon:terminate');
        $this->info('Update completed. Queue workers were restarted, no further action is required.');
    }

    private function configureDatabaseSession()
    {
        foreach ([
            'SET SESSION lock_wait_timeout = 30',
            'SET SESSION innodb_lock_wait_timeout = 30',
        ] as $statement) {
            try {
                DB::statement($statement);
            } catch (\Exception $e) {
                $this->warn('Could not set database timeout: ' . $e->getMessage());
            }
        }
    }

    private function repairSingleSubscriptionMode()
    {
        if ((int)config('zicboard.multiple_subscription_enable', 1) === 1) {
            return;
        }

        $affected = (new SubscriptionService())->enforceSingleSubscriptionMode();
        if ($affected > 0) {
            $this->info("Single subscription mode repaired; disabled extra active subscriptions: {$affected}.");
        }
    }

    private function ensureUpdateHistoryTable()
    {
        if (Schema::hasTable('v2_update_history')) {
            return;
        }

        DB::statement("
            CREATE TABLE IF NOT EXISTS `v2_update_history` (
                `name` varchar(128) NOT NULL,
                `checksum` char(64) NOT NULL,
                `executed_at` int(11) NOT NULL DEFAULT '0',
                PRIMARY KEY (`name`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
        ");
    }

    private function shouldSkipSqlUpdates($checksum)
    {
        if ($this->option('force-sql')) {
            $this->warn('Forcing database update SQL because --force-sql was provided.');
            return false;
        }

        $history = DB::table('v2_update_history')
            ->where('name', 'database/update.sql')
            ->first();

        return $history && hash_equals((string)$history->checksum, $checksum);
    }

    private function rememberSqlChecksum($checksum)
    {
        DB::table('v2_update_history')->updateOrInsert(
            ['name' => 'database/update.sql'],
            [
                'checksum' => $checksum,
                'executed_at' => time(),
            ]
        );
    }

    private function isIgnorableSqlError(\Exception $e)
    {
        $message = $e->getMessage();
        $patterns = [
            'Base table or view already exists',
            'Base table or view not found',
            'Table already exists',
            'Duplicate column name',
            'Duplicate key name',
            'Duplicate entry',
            'Multiple primary key defined',
            'Duplicate foreign key constraint name',
            'Column not found',
            'Unknown column',
            "doesn't exist",
            "Can't DROP",
            'check that column/key exists',
            "Key column",
            'Undeclared variable',
            'does not exist',
        ];

        foreach ($patterns as $pattern) {
            if (strpos($message, $pattern) !== false) {
                return true;
            }
        }

        return false;
    }

    private function repairSubscriptionMigration()
    {
        $this->info('Repairing subscription migration schema/data...');
        $this->line('[repair] staff/webcon schema');
        $this->repairWebconSchema();
        $this->line('[repair] Happ subscribe cache schema');
        $this->repairHappSubscribeCacheSchema();
        if (!Schema::hasTable('v2_user_subscription')) {
            $this->warn('[repair] v2_user_subscription table not found, skipping subscription repairs.');
            return;
        }

        $this->line('[repair] subscription SNI schema');
        $this->repairSubscriptionSniSchema();
        $this->line('[repair] subscription user note schema');
        $this->repairSubscriptionUserNoteSchema();
        $this->line('[repair] subscription lookup indexes');
        $this->ensureIndex('v2_user_subscription', 'v2_user_subscription_user_id_index', 'ADD KEY `v2_user_subscription_user_id_index` (`user_id`)');
        $this->ensureIndex('v2_user_subscription', 'v2_user_subscription_status_index', 'ADD KEY `v2_user_subscription_status_index` (`status`)');
        $this->ensureIndex('v2_user_subscription', 'v2_user_subscription_user_status_index', 'ADD KEY `v2_user_subscription_user_status_index` (`user_id`,`status`)');
        $this->ensureIndex('v2_user_subscription', 'v2_user_subscription_status_user_index', 'ADD KEY `v2_user_subscription_status_user_index` (`status`,`user_id`)');
        $this->ensureIndex('v2_user_device', 'v2_user_device_user_id_index', 'ADD KEY `v2_user_device_user_id_index` (`user_id`)');
        $this->line('[repair] subscription text column collations');
        $this->alignSubscriptionUserColumnCollations();
        $this->line('[repair] missing subscriptions');
        $this->insertMissingSubscriptions();
        $this->line('[repair] legacy SNI data');
        $this->migrateLegacySniToSubscriptions();
        $this->line('[repair] order subscription links');
        $this->repairOrdersSubscriptionSchema();
        $this->line('[repair] device subscription links');
        $this->repairDevicesSubscriptionSchema();
        $this->line('[repair] stat user subscription links');
        $this->repairStatsSubscriptionSchema();
    }

    private function repairWebconSchema()
    {
        if (!Schema::hasTable('v2_staff')) {
            $this->runRepairStatement("
                CREATE TABLE `v2_staff` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `status` tinyint(1) NOT NULL DEFAULT '1',
                    `user_id` int(11) NOT NULL,
                    `domain` varchar(255) NOT NULL,
                    `plan_id` JSON DEFAULT NULL,
                    `title` varchar(255) DEFAULT NULL,
                    `description` varchar(255) DEFAULT NULL,
                    `logo` varchar(255) DEFAULT NULL,
                    `background_url` varchar(255) DEFAULT NULL,
                    `custom_html` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                    `created_at` int(11) NOT NULL,
                    `updated_at` int(11) NOT NULL,
                    PRIMARY KEY (`id`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8
            ");
            return;
        }

        $this->ensureColumn('v2_staff', 'status', "ADD `status` tinyint(1) NOT NULL DEFAULT '1' AFTER `id`");
        $this->ensureColumn('v2_staff', 'user_id', "ADD `user_id` int(11) NOT NULL AFTER `status`");
        $this->ensureColumn('v2_staff', 'domain', "ADD `domain` varchar(255) NOT NULL AFTER `user_id`");
        $this->ensureColumn('v2_staff', 'plan_id', "ADD `plan_id` JSON DEFAULT NULL AFTER `domain`");
        $this->ensureColumn('v2_staff', 'title', "ADD `title` varchar(255) DEFAULT NULL AFTER `plan_id`");
        $this->ensureColumn('v2_staff', 'description', "ADD `description` varchar(255) DEFAULT NULL AFTER `title`");
        $this->ensureColumn('v2_staff', 'logo', "ADD `logo` varchar(255) DEFAULT NULL AFTER `description`");
        $this->ensureColumn('v2_staff', 'background_url', "ADD `background_url` varchar(255) DEFAULT NULL AFTER `logo`");
        $this->ensureColumn('v2_staff', 'custom_html', "ADD `custom_html` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL AFTER `background_url`");
        $this->ensureColumn('v2_staff', 'created_at', "ADD `created_at` int(11) NOT NULL");
        $this->ensureColumn('v2_staff', 'updated_at', "ADD `updated_at` int(11) NOT NULL");
        $this->runRepairStatement('ALTER TABLE `v2_staff` MODIFY `custom_html` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL');
    }

    private function repairSubscriptionSniSchema()
    {
        $this->ensureColumn('v2_user_subscription', 'name_sni', "ADD `name_sni` varchar(255) DEFAULT NULL AFTER `last_order_id`");
        $this->ensureColumn('v2_user_subscription', 'network_settings', "ADD `network_settings` varchar(255) DEFAULT NULL AFTER `name_sni`");
    }

    private function repairSubscriptionUserNoteSchema()
    {
        $this->ensureColumn('v2_user_subscription', 'user_note', "ADD `user_note` varchar(255) DEFAULT NULL AFTER `remarks`");
    }

    private function repairHappSubscribeCacheSchema()
    {
        if (!Schema::hasTable('v2_happ_subscribe_cache')) {
            $this->runRepairStatement("
                CREATE TABLE `v2_happ_subscribe_cache` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `cache_key` varchar(96) NOT NULL,
                    `encrypted_url` text NOT NULL,
                    `expires_at` int(11) NOT NULL,
                    `stale_until` int(11) NOT NULL,
                    `created_at` int(11) NOT NULL,
                    `updated_at` int(11) NOT NULL,
                    PRIMARY KEY (`id`),
                    UNIQUE KEY `v2_happ_subscribe_cache_key_unique` (`cache_key`),
                    KEY `v2_happ_subscribe_cache_expires_at_index` (`expires_at`),
                    KEY `v2_happ_subscribe_cache_stale_until_index` (`stale_until`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
            ");
            return;
        }

        $this->ensureColumn('v2_happ_subscribe_cache', 'cache_key', "ADD `cache_key` varchar(96) NOT NULL AFTER `id`");
        $this->ensureColumn('v2_happ_subscribe_cache', 'encrypted_url', "ADD `encrypted_url` text NOT NULL AFTER `cache_key`");
        $this->ensureColumn('v2_happ_subscribe_cache', 'expires_at', "ADD `expires_at` int(11) NOT NULL AFTER `encrypted_url`");
        $this->ensureColumn('v2_happ_subscribe_cache', 'stale_until', "ADD `stale_until` int(11) NOT NULL AFTER `expires_at`");
        $this->ensureColumn('v2_happ_subscribe_cache', 'created_at', "ADD `created_at` int(11) NOT NULL AFTER `stale_until`");
        $this->ensureColumn('v2_happ_subscribe_cache', 'updated_at', "ADD `updated_at` int(11) NOT NULL AFTER `created_at`");
        $this->ensureIndex('v2_happ_subscribe_cache', 'v2_happ_subscribe_cache_key_unique', 'ADD UNIQUE KEY `v2_happ_subscribe_cache_key_unique` (`cache_key`)');
        $this->ensureIndex('v2_happ_subscribe_cache', 'v2_happ_subscribe_cache_expires_at_index', 'ADD KEY `v2_happ_subscribe_cache_expires_at_index` (`expires_at`)');
        $this->ensureIndex('v2_happ_subscribe_cache', 'v2_happ_subscribe_cache_stale_until_index', 'ADD KEY `v2_happ_subscribe_cache_stale_until_index` (`stale_until`)');
    }

    private function insertMissingSubscriptions()
    {
        $this->runRepairStatement("
            INSERT IGNORE INTO `v2_user_subscription` (
                `user_id`, `plan_id`, `group_id`, `speed_limit`, `device_limit`, `t`, `u`, `d`,
                `transfer_enable`, `expired_at`, `auto_renewal`, `remind_expire`, `remind_traffic`,
                `token`, `uuid`, `status`, `remarks`, `created_at`, `updated_at`
            )
            SELECT
                users.`id`, users.`plan_id`, users.`group_id`, users.`speed_limit`, users.`device_limit`, users.`t`, users.`u`, users.`d`,
                users.`transfer_enable`, users.`expired_at`, COALESCE(users.`auto_renewal`, 0), COALESCE(users.`remind_expire`, 1), COALESCE(users.`remind_traffic`, 1),
                users.`token`, users.`uuid`, 'active', 'Migrated from legacy user subscription fields',
                users.`created_at`, users.`updated_at`
            FROM `v2_user` AS users
            LEFT JOIN `v2_user_subscription` AS existing_subscriptions
                ON existing_subscriptions.user_id = users.`id`
            WHERE (
                users.`plan_id` IS NOT NULL
                OR users.`transfer_enable` > 0
                OR EXISTS (
                    SELECT 1 FROM `v2_user_device` AS devices WHERE devices.user_id = users.`id`
                )
            )
                AND existing_subscriptions.id IS NULL
        ");
    }

    private function migrateLegacySniToSubscriptions()
    {
        if (!Schema::hasTable('v2_user') ||
            !Schema::hasColumn('v2_user', 'name_sni') ||
            !Schema::hasColumn('v2_user', 'network_settings') ||
            !Schema::hasColumn('v2_user_subscription', 'name_sni') ||
            !Schema::hasColumn('v2_user_subscription', 'network_settings')) {
            return;
        }

        $this->runRepairStatement("
            UPDATE `v2_user_subscription` AS subscriptions
            INNER JOIN `v2_user` AS users
                ON users.id = subscriptions.user_id
            SET subscriptions.name_sni = COALESCE(subscriptions.name_sni, users.name_sni),
                subscriptions.network_settings = COALESCE(subscriptions.network_settings, users.network_settings)
            WHERE users.name_sni IS NOT NULL
                OR users.network_settings IS NOT NULL
        ");
    }

    private function repairOrdersSubscriptionSchema()
    {
        if (!Schema::hasTable('v2_order')) {
            return;
        }

        $this->ensureColumn('v2_order', 'subscription_id', 'ADD `subscription_id` int(11) NULL AFTER `user_id`');
        $this->ensureIndex('v2_order', 'idx_subscription', 'ADD INDEX `idx_subscription` (`subscription_id`)');

        $this->runRepairStatement("
            UPDATE `v2_order` AS orders
            LEFT JOIN (
                SELECT user_id, MIN(id) AS id
                FROM `v2_user_subscription`
                GROUP BY user_id
            ) AS subscriptions ON subscriptions.user_id = orders.user_id
            SET orders.subscription_id = subscriptions.id
            WHERE orders.plan_id > 0
                AND orders.subscription_id IS NULL
        ");
    }

    private function repairDevicesSubscriptionSchema()
    {
        if (!Schema::hasTable('v2_user_device')) {
            return;
        }

        $this->ensureColumn('v2_user_device', 'subscription_id', 'ADD `subscription_id` int(11) NULL AFTER `user_id`');
        $this->ensureColumn('v2_user_device', 'uuid', 'ADD `uuid` char(36) DEFAULT NULL AFTER `subscription_id`');
        $this->ensureColumn('v2_user_device', 'hwid_hash', 'ADD `hwid_hash` char(64) DEFAULT NULL AFTER `uuid`');
        $this->ensureColumn('v2_user_device', 'hwid', 'ADD `hwid` varchar(255) DEFAULT NULL AFTER `hwid_hash`');
        $this->ensureColumn('v2_user_device', 'status', "ADD `status` varchar(16) NOT NULL DEFAULT 'pending' AFTER `hwid`");
        $this->ensureColumn('v2_user_device', 'user_agent', 'ADD `user_agent` varchar(255) DEFAULT NULL AFTER `status`');
        $this->ensureColumn('v2_user_device', 'first_ip', 'ADD `first_ip` varchar(128) DEFAULT NULL AFTER `user_agent`');
        $this->ensureColumn('v2_user_device', 'last_ip', 'ADD `last_ip` varchar(128) DEFAULT NULL AFTER `first_ip`');
        $this->ensureColumn('v2_user_device', 'first_seen_at', 'ADD `first_seen_at` int(11) DEFAULT NULL AFTER `last_ip`');
        $this->ensureColumn('v2_user_device', 'last_seen_at', 'ADD `last_seen_at` int(11) DEFAULT NULL AFTER `first_seen_at`');
        $this->ensureColumn('v2_user_device', 'u', "ADD `u` bigint(20) NOT NULL DEFAULT '0' AFTER `last_seen_at`");
        $this->ensureColumn('v2_user_device', 'd', "ADD `d` bigint(20) NOT NULL DEFAULT '0' AFTER `u`");
        $this->ensureColumn('v2_user_device', 't', 'ADD `t` int(11) DEFAULT NULL AFTER `d`');
        $this->ensureColumn('v2_user_device', 'created_at', "ADD `created_at` int(11) NOT NULL DEFAULT '0'");
        $this->ensureColumn('v2_user_device', 'updated_at', "ADD `updated_at` int(11) NOT NULL DEFAULT '0'");
        $this->repairDevicePendingSlotColumns();

        $this->ensureIndex('v2_user_device', 'v2_user_device_subscription_id_index', 'ADD KEY `v2_user_device_subscription_id_index` (`subscription_id`)');

        $this->runRepairStatement("
            UPDATE `v2_user_device` AS devices
            INNER JOIN (
                SELECT user_id, MIN(id) AS id
                FROM `v2_user_subscription`
                GROUP BY user_id
            ) AS subscriptions ON subscriptions.user_id = devices.user_id
            SET devices.subscription_id = subscriptions.id
            WHERE devices.subscription_id IS NULL
        ");

        $this->runRepairStatement("UPDATE `v2_user_device` SET `uuid` = UUID() WHERE `uuid` IS NULL OR `uuid` = ''");
        $this->normalizeLegacyDeviceBindings();

        if ($this->indexExists('v2_user_device', 'v2_user_device_user_hwid_unique')) {
            $this->runRepairStatement('ALTER TABLE `v2_user_device` DROP INDEX `v2_user_device_user_hwid_unique`');
        }

        $this->ensureIndex('v2_user_device', 'v2_user_device_uuid_unique', 'ADD UNIQUE KEY `v2_user_device_uuid_unique` (`uuid`)');
        $this->ensureIndex('v2_user_device', 'v2_user_device_status_index', 'ADD KEY `v2_user_device_status_index` (`status`)');
        $this->ensureIndex('v2_user_device', 'v2_user_device_last_seen_index', 'ADD KEY `v2_user_device_last_seen_index` (`last_seen_at`)');
        $this->ensureIndex('v2_user_device', 'v2_user_device_subscription_hwid_unique', 'ADD UNIQUE KEY `v2_user_device_subscription_hwid_unique` (`subscription_id`,`hwid_hash`)');
        $this->ensureForeignKey('v2_user_device', 'v2_user_device_subscription_id_foreign', 'ADD CONSTRAINT `v2_user_device_subscription_id_foreign` FOREIGN KEY (`subscription_id`) REFERENCES `v2_user_subscription` (`id`) ON DELETE CASCADE');

        if (!$this->columnHasNulls('v2_user_device', 'subscription_id')) {
            $this->runRepairStatement('ALTER TABLE `v2_user_device` MODIFY `subscription_id` int(11) NOT NULL');
        }
        if (!$this->columnHasNulls('v2_user_device', 'uuid')) {
            $this->runRepairStatement('ALTER TABLE `v2_user_device` MODIFY `uuid` char(36) NOT NULL');
        }
    }

    private function repairDevicePendingSlotColumns()
    {
        if (!Schema::hasTable('v2_user_device')) {
            return;
        }

        $definitions = [
            'hwid_hash' => 'char(64) DEFAULT NULL',
            'hwid' => 'varchar(255) DEFAULT NULL',
            'user_agent' => 'varchar(255) DEFAULT NULL',
            'first_ip' => 'varchar(128) DEFAULT NULL',
            'last_ip' => 'varchar(128) DEFAULT NULL',
            'first_seen_at' => 'int(11) DEFAULT NULL',
            'last_seen_at' => 'int(11) DEFAULT NULL',
            'u' => "bigint(20) NOT NULL DEFAULT '0'",
            'd' => "bigint(20) NOT NULL DEFAULT '0'",
            't' => 'int(11) DEFAULT NULL',
        ];

        foreach ($definitions as $column => $definition) {
            if (Schema::hasColumn('v2_user_device', $column)) {
                $this->runRepairStatement("ALTER TABLE `v2_user_device` MODIFY `{$column}` {$definition}");
            }
        }
    }

    private function normalizeLegacyDeviceBindings()
    {
        if (!Schema::hasTable('v2_user_device') ||
            !Schema::hasColumn('v2_user_device', 'hwid_hash') ||
            !Schema::hasColumn('v2_user_device', 'status')) {
            return;
        }

        $this->runRepairStatement("
            UPDATE `v2_user_device`
            SET `hwid_hash` = NULL
            WHERE TRIM(COALESCE(`hwid_hash`, '')) = ''
        ");

        $this->runRepairStatement("
            UPDATE `v2_user_device`
            SET `status` = 'bound'
            WHERE `hwid_hash` IS NOT NULL
                AND TRIM(`hwid_hash`) <> ''
                AND (`status` IS NULL OR TRIM(`status`) = '' OR `status` = 'pending')
        ");

        $this->runRepairStatement("
            UPDATE `v2_user_device`
            SET `status` = 'pending'
            WHERE (`hwid_hash` IS NULL OR TRIM(`hwid_hash`) = '')
                AND (`status` IS NULL OR TRIM(`status`) = '' OR `status` <> 'pending')
        ");
    }

    private function repairStatsSubscriptionSchema()
    {
        if (!Schema::hasTable('v2_stat_user')) {
            return;
        }

        $this->ensureColumn('v2_stat_user', 'subscription_id', 'ADD `subscription_id` int(11) NULL AFTER `user_id`');

        $this->runRepairStatement("
            UPDATE `v2_stat_user` AS stats
            INNER JOIN (
                SELECT user_id, MIN(id) AS id
                FROM `v2_user_subscription`
                GROUP BY user_id
            ) AS subscriptions ON subscriptions.user_id = stats.user_id
            SET stats.subscription_id = subscriptions.id
            WHERE stats.subscription_id IS NULL
        ");

        if ($this->indexExists('v2_stat_user', 'server_rate_user_id_record_at')) {
            $this->runRepairStatement('ALTER TABLE `v2_stat_user` DROP INDEX `server_rate_user_id_record_at`');
        }

        $this->ensureIndex('v2_stat_user', 'server_rate_subscription_id_record_at', 'ADD UNIQUE KEY `server_rate_subscription_id_record_at` (`server_rate`,`subscription_id`,`record_at`)');
        $this->ensureIndex('v2_stat_user', 'subscription_id', 'ADD KEY `subscription_id` (`subscription_id`)');
    }

    private function repairZicnodeNodeCompatibility()
    {
        $this->ensureZicnodeCompatTable();
        $this->copyLegacyV2nodeToZicnode();

        if (!Schema::hasTable('v2_server_zicnode')) {
            return;
        }

        $this->line('[repair] zicnode node compatibility');
        $this->ensureColumn('v2_server_zicnode', 'listen_ip', "ADD `listen_ip` varchar(255) NOT NULL DEFAULT '0.0.0.0' AFTER `host`");
        $this->ensureColumn('v2_server_zicnode', 'network_settings', "ADD `network_settings` text AFTER `network`");
        $this->ensureColumn('v2_server_zicnode', 'tls_settings', "ADD `tls_settings` text AFTER `tls`");
        $this->ensureColumn('v2_server_zicnode', 'encryption_settings', "ADD `encryption_settings` text AFTER `encryption`");

        foreach (['network_settings', 'tls_settings', 'encryption_settings'] as $column) {
            if (!Schema::hasColumn('v2_server_zicnode', $column)) {
                continue;
            }
            $nonEmptyArrayCount = $this->countZicnodeJsonArrayRoots($column);
            if ($nonEmptyArrayCount > 0) {
                $this->warn("zicnode {$column} has {$nonEmptyArrayCount} non-empty JSON array root values; empty arrays will be repaired, but non-empty arrays should be reviewed manually.");
            }
            $this->runRepairStatement("
                UPDATE `v2_server_zicnode`
                SET `{$column}` = '{}'
                WHERE TRIM(COALESCE(`{$column}`, '')) = ''
                    OR TRIM(COALESCE(`{$column}`, '')) = '[]'
                    OR TRIM(COALESCE(`{$column}`, '')) = 'null'
            ");
        }

        if (Schema::hasColumn('v2_server_zicnode', 'listen_ip')) {
            $this->runRepairStatement("
                UPDATE `v2_server_zicnode`
                SET `listen_ip` = '0.0.0.0'
                WHERE TRIM(COALESCE(`listen_ip`, '')) = ''
            ");
        }

        if (Schema::hasColumn('v2_server_zicnode', 'network')) {
            $this->runRepairStatement("
                UPDATE `v2_server_zicnode`
                SET `network` = 'tcp'
                WHERE TRIM(COALESCE(`network`, '')) = ''
                    OR `network` NOT IN ('tcp', 'ws', 'grpc', 'http', 'httpupgrade', 'xhttp', 'splithttp')
            ");
        }
    }

    private function countZicnodeJsonArrayRoots($column)
    {
        return DB::table('v2_server_zicnode')
            ->whereRaw("TRIM(COALESCE(`{$column}`, '')) LIKE '[%'")
            ->whereRaw("TRIM(COALESCE(`{$column}`, '')) <> '[]'")
            ->count();
    }

    private function ensureZicnodeCompatTable()
    {
        if (!Schema::hasTable('v2_server_zicnode')) {
            $this->runRepairStatement("
                CREATE TABLE IF NOT EXISTS `v2_server_zicnode` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `group_id` varchar(255) NOT NULL DEFAULT '',
                    `route_id` varchar(255) DEFAULT NULL,
                    `name` varchar(255) NOT NULL DEFAULT '',
                    `parent_id` int(11) DEFAULT NULL,
                    `host` varchar(255) NOT NULL DEFAULT '',
                    `listen_ip` varchar(255) NOT NULL DEFAULT '0.0.0.0',
                    `port` varchar(11) NOT NULL DEFAULT '',
                    `server_port` int(11) NOT NULL DEFAULT '0',
                    `tags` varchar(255) DEFAULT NULL,
                    `rate` varchar(11) NOT NULL DEFAULT '1',
                    `show` tinyint(1) NOT NULL DEFAULT '0',
                    `sort` int(11) DEFAULT NULL,
                    `protocol` varchar(24) NOT NULL DEFAULT 'vless',
                    `tls` tinyint(1) NOT NULL DEFAULT '0',
                    `tls_settings` text,
                    `flow` varchar(64) DEFAULT NULL,
                    `network` varchar(11) NOT NULL DEFAULT 'tcp',
                    `network_settings` text,
                    `encryption` varchar(64) DEFAULT NULL,
                    `encryption_settings` text,
                    `disable_sni` tinyint(1) NOT NULL DEFAULT '0',
                    `udp_relay_mode` varchar(64) DEFAULT NULL,
                    `zero_rtt_handshake` tinyint(1) NOT NULL DEFAULT '0',
                    `congestion_control` varchar(64) DEFAULT NULL,
                    `cipher` varchar(64) DEFAULT NULL,
                    `up_mbps` int(11) NOT NULL DEFAULT '0',
                    `down_mbps` int(11) NOT NULL DEFAULT '0',
                    `obfs` varchar(64) DEFAULT NULL,
                    `obfs_password` varchar(255) DEFAULT NULL,
                    `padding_scheme` text,
                    `created_at` int(11) NOT NULL DEFAULT '0',
                    `updated_at` int(11) NOT NULL DEFAULT '0',
                    PRIMARY KEY (`id`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
            ");
        }

        foreach ($this->zicnodeColumnDefinitions() as $column => $definition) {
            $this->ensureColumn('v2_server_zicnode', $column, $definition);
        }
    }

    private function copyLegacyV2nodeToZicnode()
    {
        if (!Schema::hasTable('v2_server_v2node') || !Schema::hasTable('v2_server_zicnode') || !Schema::hasColumn('v2_server_v2node', 'id')) {
            return;
        }

        $columns = array_merge(['id'], array_keys($this->zicnodeColumnDefinitions()));
        $insertColumns = '`' . implode('`, `', $columns) . '`';
        $selectColumns = [];
        foreach ($columns as $column) {
            $selectColumns[] = Schema::hasColumn('v2_server_v2node', $column)
                ? "`{$column}`"
                : $this->zicnodeDefaultExpression($column) . " AS `{$column}`";
        }

        $this->runRepairStatement("
            INSERT IGNORE INTO `v2_server_zicnode` ({$insertColumns})
            SELECT " . implode(', ', $selectColumns) . "
            FROM `v2_server_v2node`
        ");
    }

    private function zicnodeColumnDefinitions()
    {
        return [
            'group_id' => "ADD `group_id` varchar(255) NOT NULL DEFAULT '' AFTER `id`",
            'route_id' => "ADD `route_id` varchar(255) DEFAULT NULL AFTER `group_id`",
            'name' => "ADD `name` varchar(255) NOT NULL DEFAULT '' AFTER `route_id`",
            'parent_id' => "ADD `parent_id` int(11) DEFAULT NULL AFTER `name`",
            'host' => "ADD `host` varchar(255) NOT NULL DEFAULT '' AFTER `parent_id`",
            'listen_ip' => "ADD `listen_ip` varchar(255) NOT NULL DEFAULT '0.0.0.0' AFTER `host`",
            'port' => "ADD `port` varchar(11) NOT NULL DEFAULT '' AFTER `listen_ip`",
            'server_port' => "ADD `server_port` int(11) NOT NULL DEFAULT '0' AFTER `port`",
            'tags' => "ADD `tags` varchar(255) DEFAULT NULL AFTER `server_port`",
            'rate' => "ADD `rate` varchar(11) NOT NULL DEFAULT '1' AFTER `tags`",
            'show' => "ADD `show` tinyint(1) NOT NULL DEFAULT '0' AFTER `rate`",
            'sort' => "ADD `sort` int(11) DEFAULT NULL AFTER `show`",
            'protocol' => "ADD `protocol` varchar(24) NOT NULL DEFAULT 'vless' AFTER `sort`",
            'tls' => "ADD `tls` tinyint(1) NOT NULL DEFAULT '0' AFTER `protocol`",
            'tls_settings' => "ADD `tls_settings` text AFTER `tls`",
            'flow' => "ADD `flow` varchar(64) DEFAULT NULL AFTER `tls_settings`",
            'network' => "ADD `network` varchar(11) NOT NULL DEFAULT 'tcp' AFTER `flow`",
            'network_settings' => "ADD `network_settings` text AFTER `network`",
            'encryption' => "ADD `encryption` varchar(64) DEFAULT NULL AFTER `network_settings`",
            'encryption_settings' => "ADD `encryption_settings` text AFTER `encryption`",
            'disable_sni' => "ADD `disable_sni` tinyint(1) NOT NULL DEFAULT '0' AFTER `encryption_settings`",
            'udp_relay_mode' => "ADD `udp_relay_mode` varchar(64) DEFAULT NULL AFTER `disable_sni`",
            'zero_rtt_handshake' => "ADD `zero_rtt_handshake` tinyint(1) NOT NULL DEFAULT '0' AFTER `udp_relay_mode`",
            'congestion_control' => "ADD `congestion_control` varchar(64) DEFAULT NULL AFTER `zero_rtt_handshake`",
            'cipher' => "ADD `cipher` varchar(64) DEFAULT NULL AFTER `congestion_control`",
            'up_mbps' => "ADD `up_mbps` int(11) NOT NULL DEFAULT '0' AFTER `cipher`",
            'down_mbps' => "ADD `down_mbps` int(11) NOT NULL DEFAULT '0' AFTER `up_mbps`",
            'obfs' => "ADD `obfs` varchar(64) DEFAULT NULL AFTER `down_mbps`",
            'obfs_password' => "ADD `obfs_password` varchar(255) DEFAULT NULL AFTER `obfs`",
            'padding_scheme' => "ADD `padding_scheme` text AFTER `obfs_password`",
            'created_at' => "ADD `created_at` int(11) NOT NULL DEFAULT '0'",
            'updated_at' => "ADD `updated_at` int(11) NOT NULL DEFAULT '0'",
        ];
    }

    private function zicnodeDefaultExpression($column)
    {
        $defaults = [
            'group_id' => "''",
            'name' => "''",
            'host' => "''",
            'listen_ip' => "'0.0.0.0'",
            'port' => "''",
            'server_port' => '0',
            'rate' => "'1'",
            'show' => '0',
            'protocol' => "'vless'",
            'tls' => '0',
            'tls_settings' => "'{}'",
            'network' => "'tcp'",
            'network_settings' => "'{}'",
            'encryption_settings' => "'{}'",
            'disable_sni' => '0',
            'zero_rtt_handshake' => '0',
            'up_mbps' => '0',
            'down_mbps' => '0',
            'created_at' => '0',
            'updated_at' => '0',
        ];

        return $defaults[$column] ?? 'NULL';
    }

    private function ensureColumn($table, $column, $definition)
    {
        if (!Schema::hasTable($table) || Schema::hasColumn($table, $column)) {
            return;
        }

        $this->runRepairStatement("ALTER TABLE `{$table}` {$definition}");
    }

    private function ensureIndex($table, $index, $definition)
    {
        if (!Schema::hasTable($table) || $this->indexExists($table, $index)) {
            return;
        }

        $this->runRepairStatement("ALTER TABLE `{$table}` {$definition}");
    }

    private function ensureForeignKey($table, $name, $definition)
    {
        if (!Schema::hasTable($table) || $this->foreignKeyExists($table, $name)) {
            return;
        }

        $this->runRepairStatement("ALTER TABLE `{$table}` {$definition}");
    }

    private function alignSubscriptionUserColumnCollations()
    {
        foreach (['token', 'uuid', 'name_sni', 'network_settings', 'remarks'] as $column) {
            $this->alignStringColumnCollation('v2_user_subscription', $column, 'v2_user', $column);
        }
    }

    private function alignStringColumnCollation($targetTable, $targetColumn, $sourceTable, $sourceColumn)
    {
        $source = $this->columnMetadata($sourceTable, $sourceColumn);
        $target = $this->columnMetadata($targetTable, $targetColumn);

        if (!$source || !$target ||
            !$source->character_set_name || !$source->collation_name ||
            !$target->character_set_name || !$target->collation_name) {
            return;
        }

        if ($source->character_set_name === $target->character_set_name &&
            $source->collation_name === $target->collation_name) {
            return;
        }

        $charset = $this->safeSqlName($source->character_set_name);
        $collation = $this->safeSqlName($source->collation_name);
        $nullable = $target->is_nullable === 'YES' ? 'NULL' : 'NOT NULL';
        $default = $target->column_default === null
            ? ''
            : ' DEFAULT ' . DB::connection()->getPdo()->quote((string)$target->column_default);

        $this->runRepairStatement("
            ALTER TABLE `{$targetTable}`
            MODIFY `{$targetColumn}` {$target->column_type}
                CHARACTER SET {$charset}
                COLLATE {$collation}
                {$nullable}{$default}
        ");
    }

    private function columnMetadata($table, $column)
    {
        return DB::selectOne("
            SELECT
                COLUMN_TYPE AS column_type,
                CHARACTER_SET_NAME AS character_set_name,
                COLLATION_NAME AS collation_name,
                IS_NULLABLE AS is_nullable,
                COLUMN_DEFAULT AS column_default
            FROM information_schema.COLUMNS
            WHERE TABLE_SCHEMA = ?
                AND TABLE_NAME = ?
                AND COLUMN_NAME = ?
            LIMIT 1
        ", [DB::getDatabaseName(), $table, $column]);
    }

    private function safeSqlName($name)
    {
        if (!preg_match('/^[A-Za-z0-9_]+$/', $name)) {
            throw new \RuntimeException("Invalid charset/collation name: {$name}");
        }

        return $name;
    }

    private function indexExists($table, $index)
    {
        return DB::table('information_schema.statistics')
            ->where('table_schema', DB::getDatabaseName())
            ->where('table_name', $table)
            ->where('index_name', $index)
            ->exists();
    }

    private function foreignKeyExists($table, $name)
    {
        return DB::table('information_schema.table_constraints')
            ->where('table_schema', DB::getDatabaseName())
            ->where('table_name', $table)
            ->where('constraint_name', $name)
            ->where('constraint_type', 'FOREIGN KEY')
            ->exists();
    }

    private function columnHasNulls($table, $column)
    {
        $row = DB::table($table)
            ->whereNull($column)
            ->limit(1)
            ->first();

        return $row !== null;
    }

    private function runRepairStatement($sql)
    {
        $this->line('[repair SQL] ' . $this->summarizeSql($sql));
        try {
            DB::statement($sql);
        } catch (\Exception $e) {
            if (!$this->isIgnorableSqlError($e)) {
                $this->warn('Could not complete schema repair step: ' . $e->getMessage());
            }
        }
    }

    private function summarizeSql($sql)
    {
        $summary = preg_replace('/\s+/', ' ', trim($sql));
        if (strlen($summary) > 160) {
            return substr($summary, 0, 157) . '...';
        }

        return $summary;
    }
}
