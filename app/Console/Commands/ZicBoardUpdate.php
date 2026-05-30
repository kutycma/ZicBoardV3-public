<?php

namespace App\Console\Commands;

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
    protected $signature = 'zicboard:update';

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
        $file = \File::get(base_path() . '/database/update.sql');
        if (!$file) {
            abort(500, 'File cập nhật database không tồn tại');
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
        $this->info('Importing database updates, please wait...');
        foreach ($sql as $item) {
            $item = trim($item);
            if (!$item) continue;
            try {
                DB::statement($item);
            } catch (\Exception $e) {
                if ($this->isIgnorableSqlError($e)) {
                    continue;
                }
                $this->error('SQL execution error: ' . $e->getMessage());
            }
        }
        $this->repairSubscriptionMigration();
        \Artisan::call('horizon:terminate');
        $this->info('Update completed. Queue workers were restarted, no further action is required.');
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
        $this->repairWebconSchema();
        if (!Schema::hasTable('v2_user_subscription')) {
            return;
        }

        $this->repairSubscriptionSniSchema();
        $this->repairSubscriptionUserNoteSchema();
        $this->insertMissingSubscriptions();
        $this->migrateLegacySniToSubscriptions();
        $this->repairOrdersSubscriptionSchema();
        $this->repairDevicesSubscriptionSchema();
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

    private function insertMissingSubscriptions()
    {
        $this->runRepairStatement("
            INSERT IGNORE INTO `v2_user_subscription` (
                `user_id`, `plan_id`, `group_id`, `speed_limit`, `device_limit`, `t`, `u`, `d`,
                `transfer_enable`, `expired_at`, `auto_renewal`, `remind_expire`, `remind_traffic`,
                `token`, `uuid`, `status`, `remarks`, `created_at`, `updated_at`
            )
            SELECT
                `id`, `plan_id`, `group_id`, `speed_limit`, `device_limit`, `t`, `u`, `d`,
                `transfer_enable`, `expired_at`, COALESCE(`auto_renewal`, 0), COALESCE(`remind_expire`, 1), COALESCE(`remind_traffic`, 1),
                `token`, `uuid`, 'active', 'Migrated from legacy user subscription fields',
                `created_at`, `updated_at`
            FROM `v2_user`
            WHERE (
                `plan_id` IS NOT NULL
                OR `transfer_enable` > 0
                OR EXISTS (
                    SELECT 1 FROM `v2_user_device` AS devices WHERE devices.user_id = `v2_user`.`id`
                )
            )
                AND NOT EXISTS (
                    SELECT 1 FROM `v2_user_subscription` AS subscriptions
                    WHERE subscriptions.user_id = `v2_user`.`id`
                        OR subscriptions.token = `v2_user`.`token`
                        OR subscriptions.uuid = `v2_user`.`uuid`
                )
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
                AND users.token = subscriptions.token
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
            LEFT JOIN `v2_user_subscription` AS subscriptions
                ON subscriptions.user_id = orders.user_id
                AND subscriptions.token = (SELECT users.token FROM `v2_user` AS users WHERE users.id = orders.user_id)
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
        $this->ensureIndex('v2_user_device', 'v2_user_device_subscription_id_index', 'ADD KEY `v2_user_device_subscription_id_index` (`subscription_id`)');

        $this->runRepairStatement("
            UPDATE `v2_user_device` AS devices
            INNER JOIN `v2_user_subscription` AS subscriptions ON subscriptions.user_id = devices.user_id
            SET devices.subscription_id = subscriptions.id
            WHERE devices.subscription_id IS NULL
        ");

        if ($this->indexExists('v2_user_device', 'v2_user_device_user_hwid_unique')) {
            $this->runRepairStatement('ALTER TABLE `v2_user_device` DROP INDEX `v2_user_device_user_hwid_unique`');
        }

        $this->ensureIndex('v2_user_device', 'v2_user_device_subscription_hwid_unique', 'ADD UNIQUE KEY `v2_user_device_subscription_hwid_unique` (`subscription_id`,`hwid_hash`)');
        $this->ensureForeignKey('v2_user_device', 'v2_user_device_subscription_id_foreign', 'ADD CONSTRAINT `v2_user_device_subscription_id_foreign` FOREIGN KEY (`subscription_id`) REFERENCES `v2_user_subscription` (`id`) ON DELETE CASCADE');

        if (!$this->columnHasNulls('v2_user_device', 'subscription_id')) {
            $this->runRepairStatement('ALTER TABLE `v2_user_device` MODIFY `subscription_id` int(11) NOT NULL');
        }
    }

    private function repairStatsSubscriptionSchema()
    {
        if (!Schema::hasTable('v2_stat_user')) {
            return;
        }

        $this->ensureColumn('v2_stat_user', 'subscription_id', 'ADD `subscription_id` int(11) NULL AFTER `user_id`');

        $this->runRepairStatement("
            UPDATE `v2_stat_user` AS stats
            INNER JOIN `v2_user_subscription` AS subscriptions ON subscriptions.user_id = stats.user_id
            SET stats.subscription_id = subscriptions.id
            WHERE stats.subscription_id IS NULL
        ");

        if ($this->indexExists('v2_stat_user', 'server_rate_user_id_record_at')) {
            $this->runRepairStatement('ALTER TABLE `v2_stat_user` DROP INDEX `server_rate_user_id_record_at`');
        }

        $this->ensureIndex('v2_stat_user', 'server_rate_subscription_id_record_at', 'ADD UNIQUE KEY `server_rate_subscription_id_record_at` (`server_rate`,`subscription_id`,`record_at`)');
        $this->ensureIndex('v2_stat_user', 'subscription_id', 'ADD KEY `subscription_id` (`subscription_id`)');
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
        try {
            DB::statement($sql);
        } catch (\Exception $e) {
            if (!$this->isIgnorableSqlError($e)) {
                $this->warn('Could not complete schema repair step: ' . $e->getMessage());
            }
        }
    }
}
