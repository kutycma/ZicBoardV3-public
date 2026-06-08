<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class MigrateV2bZicToZicBoard extends Command
{
    protected $signature = 'zicboard:migrate-v2b-zic
        {--dry-run : Chi kiem tra va in ke hoach, khong sua database}
        {--skip-stats : Bo qua migrate bang thong ke v2_stat_user}';

    protected $description = 'Migrate database da import tu v2b-zic sang schema ZicBoardV3';

    private $dryRun = false;
    private $currentStep = 'startup';
    private $warnings = [];

    public function handle()
    {
        $this->dryRun = (bool)$this->option('dry-run');

        try {
            DB::connection()->getPdo();
            $this->configureDatabaseSession();
        } catch (\Throwable $e) {
            $this->error('Khong ket noi duoc database hien tai.');
            $this->line('Cach fix: kiem tra DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD trong file .env.');
            $this->line('Loi goc: ' . $e->getMessage());
            return 1;
        }

        $this->info('Migrating v2b-zic data to ZicBoardV3 schema.');
        $this->line('Database: ' . DB::getDatabaseName());
        if ($this->dryRun) {
            $this->warn('DRY RUN: command chi kiem tra, khong ghi database.');
        }

        try {
            $this->currentStep = 'preflight';
            $this->preflight();
            $this->printDatabaseSummary('Trang thai truoc migrate');

            if ($this->dryRun) {
                $this->printDryRunPlan();
                $this->printWarnings();
                return 0;
            }

            $this->runStep('Sua schema staff/webcon', function () {
                $this->repairWebconSchema();
            });

            $this->runStep('Sua schema runtime hien tai', function () {
                $this->repairCurrentRuntimeSchema();
            });

            $this->runStep('Sua schema subscription', function () {
                $this->repairSubscriptionSchema();
            });

            $this->runStep('Tao subscription tu du lieu user v2b-zic', function () {
                $this->insertMissingSubscriptions();
                $this->repairLegacyUnlimitedExpiredAt();
                $this->migrateLegacySniToSubscriptions();
            });

            $this->runStep('Gan subscription_id cho order', function () {
                $this->repairOrdersSubscriptionSchema();
            });

            $this->runStep('Sua schema va gan subscription_id cho device', function () {
                $this->repairDevicesSubscriptionSchema();
            });

            if (!$this->option('skip-stats')) {
                $this->runStep('Sua schema va gan subscription_id cho thong ke user', function () {
                    $this->repairStatsSubscriptionSchema();
                });
            } else {
                $this->warn('Da bo qua v2_stat_user theo option --skip-stats.');
            }

            $this->runStep('Chuyen v2_server_v2node sang v2_server_zicnode', function () {
                $this->repairServerCompatSchema();
            });

            $this->printDatabaseSummary('Trang thai sau migrate');
            $this->printWarnings();
            $this->info('Migration completed. Co the chay lai command nay neu can, command duoc viet theo huong idempotent.');
            return 0;
        } catch (\Throwable $e) {
            $this->renderFailure($e);
            return 1;
        }
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
                $this->warn('Khong set duoc timeout database: ' . $e->getMessage());
            }
        }
    }

    private function preflight()
    {
        $this->requireTable('v2_user');
        $this->requireColumns('v2_user', [
            'id',
            'email',
            'plan_id',
            'group_id',
            'speed_limit',
            'device_limit',
            't',
            'u',
            'd',
            'transfer_enable',
            'expired_at',
            'auto_renewal',
            'remind_expire',
            'remind_traffic',
            'token',
            'uuid',
            'created_at',
            'updated_at',
        ]);

        $this->abortIfBlankValues('v2_user', 'token');
        $this->abortIfBlankValues('v2_user', 'uuid');
        $this->abortIfDuplicateValues('v2_user', 'token');
        $this->abortIfDuplicateValues('v2_user', 'uuid');

        if (Schema::hasTable('v2_order')) {
            $this->warnIfOrphans('v2_order', 'user_id', 'v2_user', 'id', 'Co order khong tim thay user, order do se khong gan duoc subscription_id.');
        }

        if (Schema::hasTable('v2_stat_user')) {
            $this->warnIfOrphans('v2_stat_user', 'user_id', 'v2_user', 'id', 'Co thong ke user khong tim thay user, row do se giu subscription_id = NULL.');
        }

        if (Schema::hasTable('v2_user_device')) {
            $this->warnIfOrphans('v2_user_device', 'user_id', 'v2_user', 'id', 'Co device khong tim thay user, device do se khong gan duoc subscription_id.');
        }

        $candidates = $this->legacySubscriptionCandidateCount();
        if ($candidates === 0) {
            $this->warnings[] = 'Khong tim thay user nao co plan/traffic/device de tao subscription. Neu database co khach hang that, hay kiem tra lai dump v2b-zic da import dung chua.';
        }
    }

    private function printDryRunPlan()
    {
        $this->info('Preflight OK. Khi chay that, command se lam cac viec sau:');
        $this->line('1. Tao/sua v2_staff, v2_happ_subscribe_cache, v2_user_subscription, v2_user_device, v2_stat_user neu thieu.');
        $this->line('2. Tao subscription chinh cho moi user v2b-zic tu plan_id, token, uuid, traffic, expired_at.');
        $this->line('3. Chuyen name_sni/network_settings tu v2_user sang v2_user_subscription neu co.');
        $this->line('4. Bo sung cac cot runtime hien tai cho plan/payment/order/trojan neu dump cu thieu.');
        $this->line('5. Gan subscription_id cho v2_order, v2_user_device, v2_stat_user.');
        $this->line('6. Tao v2_server_zicnode va copy node tu v2_server_v2node neu co.');
        $this->line('7. Chuan hoa config ZicNode va device binding de chay muot voi ZicBoardV3 hien tai.');
        $this->line('Chay that: php artisan zicboard:migrate-v2b-zic');
    }

    private function printDatabaseSummary($title)
    {
        $this->line('');
        $this->info($title . ':');
        $this->line('- users: ' . $this->countRowsIfExists('v2_user'));
        $this->line('- legacy subscription candidates: ' . $this->legacySubscriptionCandidateCount());
        $this->line('- subscriptions: ' . $this->countRowsIfExists('v2_user_subscription'));
        $this->line('- orders: ' . $this->countRowsIfExists('v2_order') . ', missing subscription_id: ' . $this->countMissingSubscription('v2_order'));
        $this->line('- devices: ' . $this->countRowsIfExists('v2_user_device') . ', missing subscription_id: ' . $this->countMissingSubscription('v2_user_device'));
        $this->line('- stat_user: ' . $this->countRowsIfExists('v2_stat_user') . ', missing subscription_id: ' . $this->countMissingSubscription('v2_stat_user'));
        $this->line('- v2node: ' . $this->countRowsIfExists('v2_server_v2node') . ', zicnode: ' . $this->countRowsIfExists('v2_server_zicnode'));
        $missingZicnodeTotal = $this->missingCopiedZicnodeTotal();
        if ($missingZicnodeTotal > 0) {
            $missingZicnodeIds = $this->missingCopiedZicnodeIds();
            $suffix = $missingZicnodeTotal > count($missingZicnodeIds)
                ? ' (chi liet ke 50 ID dau, lenh copy van copy toan bo row hop le)'
                : '';
            $this->warn('- con ' . $missingZicnodeTotal . ' v2node ID chua co trong zicnode: ' . implode(', ', $missingZicnodeIds) . $suffix);
        }
        $this->printZicnodeCompatibilitySummary();
        $this->line('');
    }

    private function runStep($label, $callback)
    {
        $this->currentStep = $label;
        $this->line('> ' . $label);
        $callback();
        $this->info('  OK');
    }

    private function repairWebconSchema()
    {
        if (!Schema::hasTable('v2_staff')) {
            DB::statement("
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
                    `created_at` int(11) NOT NULL DEFAULT '0',
                    `updated_at` int(11) NOT NULL DEFAULT '0',
                    PRIMARY KEY (`id`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
            ");
            return;
        }

        $this->ensureColumn('v2_staff', 'status', "ADD `status` tinyint(1) NOT NULL DEFAULT '1' AFTER `id`");
        $this->ensureColumn('v2_staff', 'user_id', "ADD `user_id` int(11) NOT NULL DEFAULT '0' AFTER `status`");
        $this->ensureColumn('v2_staff', 'domain', "ADD `domain` varchar(255) NOT NULL DEFAULT '' AFTER `user_id`");
        $this->ensureColumn('v2_staff', 'plan_id', "ADD `plan_id` JSON DEFAULT NULL AFTER `domain`");
        $this->ensureColumn('v2_staff', 'title', "ADD `title` varchar(255) DEFAULT NULL AFTER `plan_id`");
        $this->ensureColumn('v2_staff', 'description', "ADD `description` varchar(255) DEFAULT NULL AFTER `title`");
        $this->ensureColumn('v2_staff', 'logo', "ADD `logo` varchar(255) DEFAULT NULL AFTER `description`");
        $this->ensureColumn('v2_staff', 'background_url', "ADD `background_url` varchar(255) DEFAULT NULL AFTER `logo`");
        $this->ensureColumn('v2_staff', 'custom_html', "ADD `custom_html` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL AFTER `background_url`");
        $this->ensureColumn('v2_staff', 'created_at', "ADD `created_at` int(11) NOT NULL DEFAULT '0'");
        $this->ensureColumn('v2_staff', 'updated_at', "ADD `updated_at` int(11) NOT NULL DEFAULT '0'");
        DB::statement('ALTER TABLE `v2_staff` MODIFY `custom_html` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL');

        if (Schema::hasColumn('v2_user', 'is_staff')) {
            DB::statement("
                UPDATE `v2_user` AS users
                INNER JOIN `v2_staff` AS staff ON staff.user_id = users.id
                SET users.is_staff = 1
                WHERE staff.status = 1
            ");
        }
    }

    private function repairCurrentRuntimeSchema()
    {
        $this->repairHappSubscribeCacheSchema();
        $this->repairPlanRuntimeSchema();
        $this->repairPaymentRuntimeSchema();
    }

    private function repairHappSubscribeCacheSchema()
    {
        if (!Schema::hasTable('v2_happ_subscribe_cache')) {
            DB::statement("
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

        $this->ensureColumn('v2_happ_subscribe_cache', 'cache_key', "ADD `cache_key` varchar(96) NOT NULL DEFAULT ''" . $this->afterColumn('v2_happ_subscribe_cache', 'id'));
        $this->ensureColumn('v2_happ_subscribe_cache', 'encrypted_url', 'ADD `encrypted_url` text NOT NULL' . $this->afterColumn('v2_happ_subscribe_cache', 'cache_key'));
        $this->ensureColumn('v2_happ_subscribe_cache', 'expires_at', "ADD `expires_at` int(11) NOT NULL DEFAULT '0'" . $this->afterColumn('v2_happ_subscribe_cache', 'encrypted_url'));
        $this->ensureColumn('v2_happ_subscribe_cache', 'stale_until', "ADD `stale_until` int(11) NOT NULL DEFAULT '0'" . $this->afterColumn('v2_happ_subscribe_cache', 'expires_at'));
        $this->ensureColumn('v2_happ_subscribe_cache', 'created_at', "ADD `created_at` int(11) NOT NULL DEFAULT '0'" . $this->afterColumn('v2_happ_subscribe_cache', 'stale_until'));
        $this->ensureColumn('v2_happ_subscribe_cache', 'updated_at', "ADD `updated_at` int(11) NOT NULL DEFAULT '0'" . $this->afterColumn('v2_happ_subscribe_cache', 'created_at'));

        if (Schema::hasColumn('v2_happ_subscribe_cache', 'cache_key')) {
            DB::statement("
                UPDATE `v2_happ_subscribe_cache`
                SET `cache_key` = CONCAT('legacy-', `id`)
                WHERE TRIM(COALESCE(`cache_key`, '')) = ''
            ");
        }

        $this->ensureIndex('v2_happ_subscribe_cache', 'v2_happ_subscribe_cache_key_unique', 'ADD UNIQUE KEY `v2_happ_subscribe_cache_key_unique` (`cache_key`)');
        $this->ensureIndex('v2_happ_subscribe_cache', 'v2_happ_subscribe_cache_expires_at_index', 'ADD KEY `v2_happ_subscribe_cache_expires_at_index` (`expires_at`)');
        $this->ensureIndex('v2_happ_subscribe_cache', 'v2_happ_subscribe_cache_stale_until_index', 'ADD KEY `v2_happ_subscribe_cache_stale_until_index` (`stale_until`)');
    }

    private function repairPlanRuntimeSchema()
    {
        if (!Schema::hasTable('v2_plan')) {
            return;
        }

        $this->ensureColumn('v2_plan', 'allow_subscribe_url', "ADD `allow_subscribe_url` tinyint(1) NOT NULL DEFAULT '1'" . $this->afterColumn('v2_plan', 'renew'));
    }

    private function repairPaymentRuntimeSchema()
    {
        if (!Schema::hasTable('v2_payment')) {
            DB::statement("
                CREATE TABLE `v2_payment` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `uuid` char(32) NOT NULL,
                    `payment` varchar(16) NOT NULL,
                    `name` varchar(255) NOT NULL,
                    `icon` varchar(255) DEFAULT NULL,
                    `config` text NOT NULL,
                    `notify_domain` varchar(128) DEFAULT NULL,
                    `handling_fee_fixed` int(11) DEFAULT NULL,
                    `handling_fee_percent` decimal(5,2) DEFAULT NULL,
                    `enable` tinyint(1) NOT NULL DEFAULT '0',
                    `sort` int(11) DEFAULT NULL,
                    `created_at` int(11) NOT NULL DEFAULT '0',
                    `updated_at` int(11) NOT NULL DEFAULT '0',
                    PRIMARY KEY (`id`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
            ");
            return;
        }

        $this->ensureColumn('v2_payment', 'uuid', "ADD `uuid` char(32) NOT NULL DEFAULT ''" . $this->afterColumn('v2_payment', 'id'));
        $this->ensureColumn('v2_payment', 'icon', 'ADD `icon` varchar(255) DEFAULT NULL' . $this->afterColumn('v2_payment', 'name'));
        $this->ensureColumn('v2_payment', 'notify_domain', 'ADD `notify_domain` varchar(128) DEFAULT NULL' . $this->afterColumn('v2_payment', 'config'));
        $this->ensureColumn('v2_payment', 'handling_fee_fixed', 'ADD `handling_fee_fixed` int(11) DEFAULT NULL' . $this->afterColumn('v2_payment', 'notify_domain'));
        $this->ensureColumn('v2_payment', 'handling_fee_percent', 'ADD `handling_fee_percent` decimal(5,2) DEFAULT NULL' . $this->afterColumn('v2_payment', 'handling_fee_fixed'));

        if (Schema::hasColumn('v2_payment', 'uuid')) {
            DB::statement("
                UPDATE `v2_payment`
                SET `uuid` = SUBSTRING(REPLACE(UUID(), '-', ''), 1, 8)
                WHERE TRIM(COALESCE(`uuid`, '')) = ''
            ");
        }
    }

    private function repairSubscriptionSchema()
    {
        if (!Schema::hasTable('v2_user_subscription')) {
            DB::statement("
                CREATE TABLE `v2_user_subscription` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `user_id` int(11) NOT NULL,
                    `plan_id` int(11) DEFAULT NULL,
                    `group_id` int(11) DEFAULT NULL,
                    `speed_limit` int(11) DEFAULT NULL,
                    `device_limit` int(11) DEFAULT NULL,
                    `t` int(11) NOT NULL DEFAULT '0',
                    `u` bigint(20) NOT NULL DEFAULT '0',
                    `d` bigint(20) NOT NULL DEFAULT '0',
                    `transfer_enable` bigint(20) NOT NULL DEFAULT '0',
                    `expired_at` bigint(20) DEFAULT '0',
                    `auto_renewal` tinyint(4) NOT NULL DEFAULT '0',
                    `remind_expire` tinyint(4) NOT NULL DEFAULT '1',
                    `remind_traffic` tinyint(4) NOT NULL DEFAULT '1',
                    `token` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
                    `uuid` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
                    `status` varchar(16) NOT NULL DEFAULT 'active',
                    `origin_order_id` int(11) DEFAULT NULL,
                    `last_order_id` int(11) DEFAULT NULL,
                    `name_sni` varchar(255) DEFAULT NULL,
                    `network_settings` varchar(255) DEFAULT NULL,
                    `remarks` text,
                    `user_note` varchar(255) DEFAULT NULL,
                    `created_at` int(11) NOT NULL DEFAULT '0',
                    `updated_at` int(11) NOT NULL DEFAULT '0',
                    PRIMARY KEY (`id`),
                    UNIQUE KEY `v2_user_subscription_token_unique` (`token`),
                    UNIQUE KEY `v2_user_subscription_uuid_unique` (`uuid`),
                    KEY `v2_user_subscription_user_id_index` (`user_id`),
                    KEY `v2_user_subscription_plan_id_index` (`plan_id`),
                    KEY `v2_user_subscription_group_id_index` (`group_id`),
                    KEY `v2_user_subscription_status_index` (`status`),
                    KEY `v2_user_subscription_user_status_index` (`user_id`,`status`),
                    KEY `v2_user_subscription_status_user_index` (`status`,`user_id`),
                    CONSTRAINT `v2_user_subscription_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `v2_user` (`id`) ON DELETE CASCADE
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
            ");
            $this->alignSubscriptionUserColumnCollations();
            return;
        }

        $this->ensureColumn('v2_user_subscription', 'user_id', "ADD `user_id` int(11) NOT NULL DEFAULT '0' AFTER `id`");
        $this->ensureColumn('v2_user_subscription', 'plan_id', "ADD `plan_id` int(11) DEFAULT NULL AFTER `user_id`");
        $this->ensureColumn('v2_user_subscription', 'group_id', "ADD `group_id` int(11) DEFAULT NULL AFTER `plan_id`");
        $this->ensureColumn('v2_user_subscription', 'speed_limit', "ADD `speed_limit` int(11) DEFAULT NULL AFTER `group_id`");
        $this->ensureColumn('v2_user_subscription', 'device_limit', "ADD `device_limit` int(11) DEFAULT NULL AFTER `speed_limit`");
        $this->ensureColumn('v2_user_subscription', 't', "ADD `t` int(11) NOT NULL DEFAULT '0' AFTER `device_limit`");
        $this->ensureColumn('v2_user_subscription', 'u', "ADD `u` bigint(20) NOT NULL DEFAULT '0' AFTER `t`");
        $this->ensureColumn('v2_user_subscription', 'd', "ADD `d` bigint(20) NOT NULL DEFAULT '0' AFTER `u`");
        $this->ensureColumn('v2_user_subscription', 'transfer_enable', "ADD `transfer_enable` bigint(20) NOT NULL DEFAULT '0' AFTER `d`");
        $this->ensureColumn('v2_user_subscription', 'expired_at', "ADD `expired_at` bigint(20) DEFAULT '0' AFTER `transfer_enable`");
        $this->ensureColumn('v2_user_subscription', 'auto_renewal', "ADD `auto_renewal` tinyint(4) NOT NULL DEFAULT '0' AFTER `expired_at`");
        $this->ensureColumn('v2_user_subscription', 'remind_expire', "ADD `remind_expire` tinyint(4) NOT NULL DEFAULT '1' AFTER `auto_renewal`");
        $this->ensureColumn('v2_user_subscription', 'remind_traffic', "ADD `remind_traffic` tinyint(4) NOT NULL DEFAULT '1' AFTER `remind_expire`");
        $this->ensureColumn('v2_user_subscription', 'token', "ADD `token` char(32) NOT NULL DEFAULT '' AFTER `remind_traffic`");
        $this->ensureColumn('v2_user_subscription', 'uuid', "ADD `uuid` varchar(36) NOT NULL DEFAULT '' AFTER `token`");
        $this->ensureColumn('v2_user_subscription', 'status', "ADD `status` varchar(16) NOT NULL DEFAULT 'active' AFTER `uuid`");
        $this->ensureColumn('v2_user_subscription', 'origin_order_id', "ADD `origin_order_id` int(11) DEFAULT NULL AFTER `status`");
        $this->ensureColumn('v2_user_subscription', 'last_order_id', "ADD `last_order_id` int(11) DEFAULT NULL AFTER `origin_order_id`");
        $this->ensureColumn('v2_user_subscription', 'name_sni', "ADD `name_sni` varchar(255) DEFAULT NULL AFTER `last_order_id`");
        $this->ensureColumn('v2_user_subscription', 'network_settings', "ADD `network_settings` varchar(255) DEFAULT NULL AFTER `name_sni`");
        $this->ensureColumn('v2_user_subscription', 'remarks', "ADD `remarks` text AFTER `network_settings`");
        $this->ensureColumn('v2_user_subscription', 'user_note', "ADD `user_note` varchar(255) DEFAULT NULL AFTER `remarks`");
        $this->ensureColumn('v2_user_subscription', 'created_at', "ADD `created_at` int(11) NOT NULL DEFAULT '0'");
        $this->ensureColumn('v2_user_subscription', 'updated_at', "ADD `updated_at` int(11) NOT NULL DEFAULT '0'");

        $this->alignSubscriptionUserColumnCollations();

        $this->abortIfBlankValues('v2_user_subscription', 'token');
        $this->abortIfBlankValues('v2_user_subscription', 'uuid');
        $this->abortIfDuplicateValues('v2_user_subscription', 'token');
        $this->abortIfDuplicateValues('v2_user_subscription', 'uuid');
        $this->ensureIndex('v2_user_subscription', 'v2_user_subscription_token_unique', 'ADD UNIQUE KEY `v2_user_subscription_token_unique` (`token`)');
        $this->ensureIndex('v2_user_subscription', 'v2_user_subscription_uuid_unique', 'ADD UNIQUE KEY `v2_user_subscription_uuid_unique` (`uuid`)');
        $this->ensureIndex('v2_user_subscription', 'v2_user_subscription_user_id_index', 'ADD KEY `v2_user_subscription_user_id_index` (`user_id`)');
        $this->ensureIndex('v2_user_subscription', 'v2_user_subscription_plan_id_index', 'ADD KEY `v2_user_subscription_plan_id_index` (`plan_id`)');
        $this->ensureIndex('v2_user_subscription', 'v2_user_subscription_group_id_index', 'ADD KEY `v2_user_subscription_group_id_index` (`group_id`)');
        $this->ensureIndex('v2_user_subscription', 'v2_user_subscription_status_index', 'ADD KEY `v2_user_subscription_status_index` (`status`)');
        $this->ensureIndex('v2_user_subscription', 'v2_user_subscription_user_status_index', 'ADD KEY `v2_user_subscription_user_status_index` (`user_id`,`status`)');
        $this->ensureIndex('v2_user_subscription', 'v2_user_subscription_status_user_index', 'ADD KEY `v2_user_subscription_status_user_index` (`status`,`user_id`)');

        if ($this->countInvalidReferences('v2_user_subscription', 'user_id', 'v2_user', 'id') > 0) {
            throw new \RuntimeException('v2_user_subscription co user_id khong ton tai trong v2_user, khong the them foreign key.');
        }
        $this->ensureForeignKey('v2_user_subscription', 'v2_user_subscription_user_id_foreign', 'ADD CONSTRAINT `v2_user_subscription_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `v2_user` (`id`) ON DELETE CASCADE');
    }

    private function insertMissingSubscriptions()
    {
        $targetColumns = [
            'user_id',
            'plan_id',
            'group_id',
            'speed_limit',
            'device_limit',
            't',
            'u',
            'd',
            'transfer_enable',
            'expired_at',
            'auto_renewal',
            'remind_expire',
            'remind_traffic',
            'token',
            'uuid',
            'status',
            'remarks',
            'created_at',
            'updated_at',
        ];

        $selectColumns = [
            'users.`id`',
            'users.`plan_id`',
            'users.`group_id`',
            'users.`speed_limit`',
            'users.`device_limit`',
            'COALESCE(users.`t`, 0)',
            'COALESCE(users.`u`, 0)',
            'COALESCE(users.`d`, 0)',
            'COALESCE(users.`transfer_enable`, 0)',
            'NULLIF(COALESCE(users.`expired_at`, 0), 0)',
            'COALESCE(users.`auto_renewal`, 0)',
            'COALESCE(users.`remind_expire`, 1)',
            'COALESCE(users.`remind_traffic`, 1)',
            'users.`token`',
            'users.`uuid`',
            "'active'",
            Schema::hasColumn('v2_user', 'remarks') ? "COALESCE(users.`remarks`, 'Migrated from v2b-zic legacy user fields')" : "'Migrated from v2b-zic legacy user fields'",
            'COALESCE(users.`created_at`, UNIX_TIMESTAMP())',
            'COALESCE(users.`updated_at`, UNIX_TIMESTAMP())',
        ];

        if (Schema::hasColumn('v2_user', 'name_sni') && Schema::hasColumn('v2_user_subscription', 'name_sni')) {
            $targetColumns[] = 'name_sni';
            $selectColumns[] = 'users.`name_sni`';
        }

        if (Schema::hasColumn('v2_user', 'network_settings') && Schema::hasColumn('v2_user_subscription', 'network_settings')) {
            $targetColumns[] = 'network_settings';
            $selectColumns[] = 'users.`network_settings`';
        }

        $deviceExistsClause = Schema::hasTable('v2_user_device')
            ? " OR EXISTS (SELECT 1 FROM `v2_user_device` AS devices WHERE devices.user_id = users.id)"
            : '';

        $targetSql = '`' . implode('`, `', $targetColumns) . '`';
        $selectSql = implode(",\n                ", $selectColumns);

        DB::statement("
            INSERT IGNORE INTO `v2_user_subscription` ({$targetSql})
            SELECT
                {$selectSql}
            FROM `v2_user` AS users
            LEFT JOIN `v2_user_subscription` AS existing_subscriptions
                ON existing_subscriptions.user_id = users.id
            WHERE (
                users.`plan_id` IS NOT NULL
                OR COALESCE(users.`transfer_enable`, 0) > 0
                {$deviceExistsClause}
            )
                AND existing_subscriptions.id IS NULL
        ");
    }

    private function repairLegacyUnlimitedExpiredAt()
    {
        $subscriptionRows = 0;
        if (Schema::hasTable('v2_user_subscription') && Schema::hasColumn('v2_user_subscription', 'expired_at')) {
            $subscriptionRows = DB::table('v2_user_subscription')
                ->where('expired_at', 0)
                ->update(['expired_at' => null]);
        }

        $userRows = 0;
        if (Schema::hasTable('v2_user') && Schema::hasColumn('v2_user', 'expired_at')) {
            $userRows = DB::table('v2_user')
                ->where('expired_at', 0)
                ->update(['expired_at' => null]);
        }

        $this->line("  Legacy unlimited expired_at repaired; subscriptions={$subscriptionRows}, users={$userRows}.");
    }

    private function migrateLegacySniToSubscriptions()
    {
        if (!Schema::hasColumn('v2_user', 'name_sni') ||
            !Schema::hasColumn('v2_user', 'network_settings') ||
            !Schema::hasColumn('v2_user_subscription', 'name_sni') ||
            !Schema::hasColumn('v2_user_subscription', 'network_settings')) {
            return;
        }

        DB::statement("
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

        $this->ensureColumn('v2_order', 'coupon_id', 'ADD `coupon_id` int(11) DEFAULT NULL' . $this->afterColumn('v2_order', 'plan_id'));
        $this->ensureColumn('v2_order', 'payment_id', 'ADD `payment_id` int(11) DEFAULT NULL' . $this->afterColumn('v2_order', 'coupon_id'));
        $this->ensureColumn('v2_order', 'callback_no', 'ADD `callback_no` varchar(255) DEFAULT NULL' . $this->afterColumn('v2_order', 'trade_no'));
        $this->ensureColumn('v2_order', 'handling_amount', 'ADD `handling_amount` int(11) DEFAULT NULL' . $this->afterColumn('v2_order', 'total_amount'));
        $this->ensureColumn('v2_order', 'discount_amount', 'ADD `discount_amount` int(11) DEFAULT NULL' . $this->afterColumn('v2_order', 'handling_amount'));
        $this->ensureColumn('v2_order', 'surplus_amount', 'ADD `surplus_amount` int(11) DEFAULT NULL' . $this->afterColumn('v2_order', 'discount_amount'));
        $this->ensureColumn('v2_order', 'refund_amount', 'ADD `refund_amount` int(11) DEFAULT NULL' . $this->afterColumn('v2_order', 'surplus_amount'));
        $this->ensureColumn('v2_order', 'balance_amount', 'ADD `balance_amount` int(11) DEFAULT NULL' . $this->afterColumn('v2_order', 'refund_amount'));
        $this->ensureColumn('v2_order', 'surplus_order_ids', 'ADD `surplus_order_ids` text' . $this->afterColumn('v2_order', 'balance_amount'));
        $this->ensureColumn('v2_order', 'commission_status', "ADD `commission_status` tinyint(1) NOT NULL DEFAULT '0'" . $this->afterColumn('v2_order', 'status'));
        $this->ensureColumn('v2_order', 'commission_balance', "ADD `commission_balance` int(11) NOT NULL DEFAULT '0'" . $this->afterColumn('v2_order', 'commission_status'));
        $this->ensureColumn('v2_order', 'actual_commission_balance', 'ADD `actual_commission_balance` int(11) DEFAULT NULL' . $this->afterColumn('v2_order', 'commission_balance'));
        $this->ensureColumn('v2_order', 'paid_at', 'ADD `paid_at` int(11) DEFAULT NULL' . $this->afterColumn('v2_order', 'actual_commission_balance'));
        $this->ensureColumn('v2_order', 'subscription_id', 'ADD `subscription_id` int(11) NULL' . $this->afterColumn('v2_order', 'user_id'));

        if (Schema::hasColumn('v2_order', 'user_id')) {
            $this->ensureIndex('v2_order', 'idx_user', 'ADD INDEX `idx_user` (`user_id`)');
        }
        if (Schema::hasColumn('v2_order', 'user_id') && Schema::hasColumn('v2_order', 'status')) {
            $this->ensureIndex('v2_order', 'idx_user_status', 'ADD INDEX `idx_user_status` (`user_id`, `status`)');
        }
        if (Schema::hasColumn('v2_order', 'subscription_id')) {
            $this->ensureIndex('v2_order', 'idx_subscription', 'ADD INDEX `idx_subscription` (`subscription_id`)');
        }

        $conditions = ['orders.subscription_id IS NULL'];
        if (Schema::hasColumn('v2_order', 'plan_id')) {
            $conditions[] = 'orders.plan_id > 0';
        }
        if (Schema::hasColumn('v2_order', 'period')) {
            $conditions[] = "orders.period <> 'deposit'";
        }

        DB::statement("
            UPDATE `v2_order` AS orders
            INNER JOIN (
                SELECT user_id, MIN(id) AS id
                FROM `v2_user_subscription`
                GROUP BY user_id
            ) AS subscriptions ON subscriptions.user_id = orders.user_id
            SET orders.subscription_id = subscriptions.id
            WHERE " . implode(' AND ', $conditions) . "
        ");

        $aggregateWhere = [];
        if (Schema::hasColumn('v2_order', 'plan_id')) {
            $aggregateWhere[] = 'plan_id > 0';
        }
        if (Schema::hasColumn('v2_order', 'period')) {
            $aggregateWhere[] = "period <> 'deposit'";
        }
        if (Schema::hasColumn('v2_order', 'status')) {
            $aggregateWhere[] = 'status = 3';
        }
        $aggregateWhereSql = $aggregateWhere ? 'WHERE ' . implode(' AND ', $aggregateWhere) : '';

        DB::statement("
            UPDATE `v2_user_subscription` AS subscriptions
            INNER JOIN (
                SELECT user_id, MIN(id) AS origin_order_id, MAX(id) AS last_order_id
                FROM `v2_order`
                {$aggregateWhereSql}
                GROUP BY user_id
            ) AS orders ON orders.user_id = subscriptions.user_id
            SET subscriptions.origin_order_id = COALESCE(subscriptions.origin_order_id, orders.origin_order_id),
                subscriptions.last_order_id = COALESCE(subscriptions.last_order_id, orders.last_order_id)
        ");
    }

    private function repairDevicesSubscriptionSchema()
    {
        if (!Schema::hasTable('v2_user_device')) {
            DB::statement("
                CREATE TABLE `v2_user_device` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `user_id` int(11) NOT NULL,
                    `subscription_id` int(11) NOT NULL,
                    `uuid` char(36) NOT NULL,
                    `hwid_hash` char(64) DEFAULT NULL,
                    `hwid` varchar(255) DEFAULT NULL,
                    `status` varchar(16) NOT NULL DEFAULT 'pending',
                    `user_agent` varchar(255) DEFAULT NULL,
                    `first_ip` varchar(128) DEFAULT NULL,
                    `last_ip` varchar(128) DEFAULT NULL,
                    `first_seen_at` int(11) DEFAULT NULL,
                    `last_seen_at` int(11) DEFAULT NULL,
                    `u` bigint(20) NOT NULL DEFAULT '0',
                    `d` bigint(20) NOT NULL DEFAULT '0',
                    `t` int(11) DEFAULT NULL,
                    `created_at` int(11) NOT NULL DEFAULT '0',
                    `updated_at` int(11) NOT NULL DEFAULT '0',
                    PRIMARY KEY (`id`),
                    UNIQUE KEY `v2_user_device_uuid_unique` (`uuid`),
                    UNIQUE KEY `v2_user_device_subscription_hwid_unique` (`subscription_id`,`hwid_hash`),
                    KEY `v2_user_device_user_id_index` (`user_id`),
                    KEY `v2_user_device_subscription_id_index` (`subscription_id`),
                    KEY `v2_user_device_status_index` (`status`),
                    KEY `v2_user_device_last_seen_index` (`last_seen_at`),
                    CONSTRAINT `v2_user_device_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `v2_user` (`id`) ON DELETE CASCADE,
                    CONSTRAINT `v2_user_device_subscription_id_foreign` FOREIGN KEY (`subscription_id`) REFERENCES `v2_user_subscription` (`id`) ON DELETE CASCADE
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
            ");
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

        DB::statement("UPDATE `v2_user_device` SET `uuid` = UUID() WHERE `uuid` IS NULL OR `uuid` = ''");

        DB::statement("
            UPDATE `v2_user_device` AS devices
            INNER JOIN (
                SELECT user_id, MIN(id) AS id
                FROM `v2_user_subscription`
                GROUP BY user_id
            ) AS subscriptions ON subscriptions.user_id = devices.user_id
            SET devices.subscription_id = subscriptions.id
            WHERE devices.subscription_id IS NULL
        ");

        $this->normalizeLegacyDeviceBindings();

        $this->abortIfDuplicateValues('v2_user_device', 'uuid');
        $this->abortIfDuplicateDeviceBindings();

        if ($this->indexExists('v2_user_device', 'v2_user_device_user_hwid_unique')) {
            DB::statement('ALTER TABLE `v2_user_device` DROP INDEX `v2_user_device_user_hwid_unique`');
        }

        $this->ensureIndex('v2_user_device', 'v2_user_device_uuid_unique', 'ADD UNIQUE KEY `v2_user_device_uuid_unique` (`uuid`)');
        $this->ensureIndex('v2_user_device', 'v2_user_device_user_id_index', 'ADD KEY `v2_user_device_user_id_index` (`user_id`)');
        $this->ensureIndex('v2_user_device', 'v2_user_device_subscription_id_index', 'ADD KEY `v2_user_device_subscription_id_index` (`subscription_id`)');
        $this->ensureIndex('v2_user_device', 'v2_user_device_status_index', 'ADD KEY `v2_user_device_status_index` (`status`)');
        $this->ensureIndex('v2_user_device', 'v2_user_device_last_seen_index', 'ADD KEY `v2_user_device_last_seen_index` (`last_seen_at`)');
        $this->ensureIndex('v2_user_device', 'v2_user_device_subscription_hwid_unique', 'ADD UNIQUE KEY `v2_user_device_subscription_hwid_unique` (`subscription_id`,`hwid_hash`)');

        if ($this->countInvalidReferences('v2_user_device', 'user_id', 'v2_user', 'id') > 0) {
            throw new \RuntimeException('v2_user_device co user_id khong ton tai trong v2_user, khong the them foreign key user.');
        }
        if ($this->countInvalidReferences('v2_user_device', 'subscription_id', 'v2_user_subscription', 'id') > 0) {
            throw new \RuntimeException('v2_user_device co subscription_id khong ton tai trong v2_user_subscription.');
        }

        $this->ensureForeignKey('v2_user_device', 'v2_user_device_user_id_foreign', 'ADD CONSTRAINT `v2_user_device_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `v2_user` (`id`) ON DELETE CASCADE');
        $this->ensureForeignKey('v2_user_device', 'v2_user_device_subscription_id_foreign', 'ADD CONSTRAINT `v2_user_device_subscription_id_foreign` FOREIGN KEY (`subscription_id`) REFERENCES `v2_user_subscription` (`id`) ON DELETE CASCADE');

        if (!$this->columnHasNulls('v2_user_device', 'subscription_id')) {
            DB::statement('ALTER TABLE `v2_user_device` MODIFY `subscription_id` int(11) NOT NULL');
        }
        if (!$this->columnHasNulls('v2_user_device', 'uuid')) {
            DB::statement('ALTER TABLE `v2_user_device` MODIFY `uuid` char(36) NOT NULL');
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
                DB::statement("ALTER TABLE `v2_user_device` MODIFY `{$column}` {$definition}");
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

        DB::statement("
            UPDATE `v2_user_device`
            SET `hwid_hash` = NULL
            WHERE TRIM(COALESCE(`hwid_hash`, '')) = ''
        ");

        DB::statement("
            UPDATE `v2_user_device`
            SET `status` = 'bound'
            WHERE `hwid_hash` IS NOT NULL
                AND TRIM(`hwid_hash`) <> ''
                AND (`status` IS NULL OR TRIM(`status`) = '' OR `status` = 'pending')
        ");

        DB::statement("
            UPDATE `v2_user_device`
            SET `status` = 'pending'
            WHERE (`hwid_hash` IS NULL OR TRIM(`hwid_hash`) = '')
                AND (`status` IS NULL OR TRIM(`status`) = '' OR `status` <> 'pending')
        ");
    }

    private function repairStatsSubscriptionSchema()
    {
        if (!Schema::hasTable('v2_stat_user')) {
            DB::statement("
                CREATE TABLE `v2_stat_user` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `user_id` int(11) NOT NULL,
                    `subscription_id` int(11) DEFAULT NULL,
                    `server_rate` decimal(10,2) NOT NULL,
                    `u` bigint(20) NOT NULL,
                    `d` bigint(20) NOT NULL,
                    `record_type` char(2) NOT NULL,
                    `record_at` int(11) NOT NULL,
                    `created_at` int(11) NOT NULL DEFAULT '0',
                    `updated_at` int(11) NOT NULL DEFAULT '0',
                    PRIMARY KEY (`id`),
                    UNIQUE KEY `server_rate_subscription_id_record_at` (`server_rate`,`subscription_id`,`record_at`),
                    KEY `user_id` (`user_id`),
                    KEY `subscription_id` (`subscription_id`),
                    KEY `record_at` (`record_at`),
                    KEY `server_rate` (`server_rate`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
            ");
            return;
        }

        $this->ensureColumn('v2_stat_user', 'subscription_id', 'ADD `subscription_id` int(11) NULL AFTER `user_id`');

        DB::statement("
            UPDATE `v2_stat_user` AS stats
            INNER JOIN (
                SELECT user_id, MIN(id) AS id
                FROM `v2_user_subscription`
                GROUP BY user_id
            ) AS subscriptions ON subscriptions.user_id = stats.user_id
            SET stats.subscription_id = subscriptions.id
            WHERE stats.subscription_id IS NULL
        ");

        $this->abortIfDuplicateStatRows();

        if ($this->indexExists('v2_stat_user', 'server_rate_user_id_record_at')) {
            DB::statement('ALTER TABLE `v2_stat_user` DROP INDEX `server_rate_user_id_record_at`');
        }

        $this->ensureIndex('v2_stat_user', 'server_rate_subscription_id_record_at', 'ADD UNIQUE KEY `server_rate_subscription_id_record_at` (`server_rate`,`subscription_id`,`record_at`)');
        $this->ensureIndex('v2_stat_user', 'user_id', 'ADD KEY `user_id` (`user_id`)');
        $this->ensureIndex('v2_stat_user', 'subscription_id', 'ADD KEY `subscription_id` (`subscription_id`)');
        $this->ensureIndex('v2_stat_user', 'record_at', 'ADD KEY `record_at` (`record_at`)');
        $this->ensureIndex('v2_stat_user', 'server_rate', 'ADD KEY `server_rate` (`server_rate`)');
    }

    private function repairServerCompatSchema()
    {
        if (Schema::hasTable('v2_server_route') && Schema::hasColumn('v2_server_route', 'action_value')) {
            DB::statement('ALTER TABLE `v2_server_route` MODIFY `action_value` text DEFAULT NULL');
        }

        $this->repairTrojanRuntimeSchema();
        $this->repairLegacyTlsSettingsSchema();
        $this->repairServerRateSchema();

        if (Schema::hasTable('v2_server_vless')) {
            $this->ensureColumn('v2_server_vless', 'encryption', "ADD `encryption` varchar(64) DEFAULT NULL AFTER `network_settings`");
            $this->ensureColumn('v2_server_vless', 'encryption_settings', "ADD `encryption_settings` text AFTER `encryption`");
        }

        $this->ensureZicnodeTable();
        $this->copyV2nodeToZicnode();
        $this->repairZicnodeNodeCompatibility();
    }

    private function repairTrojanRuntimeSchema()
    {
        if (!Schema::hasTable('v2_server_trojan')) {
            return;
        }

        $this->ensureColumn('v2_server_trojan', 'network', "ADD `network` varchar(11) DEFAULT NULL" . $this->afterColumn('v2_server_trojan', 'server_port'));
        $this->ensureColumn('v2_server_trojan', 'network_settings', 'ADD `network_settings` text' . $this->afterColumn('v2_server_trojan', 'network'));

        if (Schema::hasColumn('v2_server_trojan', 'network')) {
            DB::statement("
                UPDATE `v2_server_trojan`
                SET `network` = 'tcp'
                WHERE TRIM(COALESCE(`network`, '')) = ''
            ");
        }
    }

    private function repairLegacyTlsSettingsSchema()
    {
        $columns = [
            'v2_server_trojan' => ['network_settings', 'ADD `tls_settings` text' . $this->afterColumn('v2_server_trojan', 'network_settings')],
            'v2_server_hysteria' => ['server_name', 'ADD `tls_settings` text' . $this->afterColumn('v2_server_hysteria', 'server_name')],
            'v2_server_tuic' => ['server_name', 'ADD `tls_settings` text' . $this->afterColumn('v2_server_tuic', 'server_name')],
            'v2_server_anytls' => ['server_name', 'ADD `tls_settings` text' . $this->afterColumn('v2_server_anytls', 'server_name')],
        ];

        foreach ($columns as $table => $definition) {
            if (!Schema::hasTable($table)) {
                continue;
            }
            $this->ensureColumn($table, 'tls_settings', $definition[1]);
        }
    }

    private function repairServerRateSchema()
    {
        $tables = [
            'v2_server',
            'v2_server_v2ray',
            'v2_server_vmess',
            'v2_server_vless',
            'v2_server_trojan',
            'v2_server_shadowsocks',
            'v2_server_hysteria',
            'v2_server_tuic',
            'v2_server_anytls',
            'v2_server_zicnode',
            'v2_server_v2node',
        ];

        foreach ($tables as $table) {
            if (!Schema::hasTable($table) || !Schema::hasColumn($table, 'rate')) {
                continue;
            }

            DB::statement("
                UPDATE `{$table}`
                SET `rate` = '1.00'
                WHERE TRIM(COALESCE(CAST(`rate` AS CHAR), '')) = ''
                    OR TRIM(COALESCE(CAST(`rate` AS CHAR), '')) NOT REGEXP '^-?[0-9]+(\\\\.[0-9]+)?\$'
            ");
            DB::statement("ALTER TABLE `{$table}` MODIFY `rate` decimal(10,2) NOT NULL DEFAULT '1.00'");
        }
    }
    private function ensureZicnodeTable()
    {
        if (!Schema::hasTable('v2_server_zicnode')) {
            DB::statement("
                CREATE TABLE `v2_server_zicnode` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `group_id` varchar(255) NOT NULL,
                    `route_id` varchar(255) DEFAULT NULL,
                    `name` varchar(255) NOT NULL,
                    `parent_id` int(11) DEFAULT NULL,
                    `host` varchar(255) NOT NULL,
                    `listen_ip` varchar(255) NOT NULL DEFAULT '0.0.0.0',
                    `port` varchar(11) NOT NULL,
                    `server_port` int(11) NOT NULL,
                    `tags` varchar(255) DEFAULT NULL,
                    `rate` decimal(10,2) NOT NULL DEFAULT '1.00',
                    `show` tinyint(1) NOT NULL DEFAULT '0',
                    `sort` int(11) DEFAULT NULL,
                    `protocol` varchar(24) NOT NULL,
                    `tls` tinyint(1) NOT NULL,
                    `tls_settings` text,
                    `flow` varchar(64) DEFAULT NULL,
                    `network` varchar(11) NOT NULL,
                    `network_settings` text,
                    `encryption` varchar(64) DEFAULT NULL,
                    `encryption_settings` text,
                    `disable_sni` tinyint(1) NOT NULL DEFAULT '0',
                    `udp_relay_mode` varchar(64) DEFAULT NULL,
                    `zero_rtt_handshake` tinyint(1) NOT NULL DEFAULT '0',
                    `congestion_control` varchar(64) DEFAULT NULL,
                    `cipher` varchar(64) DEFAULT NULL,
                    `up_mbps` int(11) NOT NULL,
                    `down_mbps` int(11) NOT NULL,
                    `obfs` varchar(64) DEFAULT NULL,
                    `obfs_password` varchar(255) DEFAULT NULL,
                    `padding_scheme` text,
                    `created_at` int(11) NOT NULL,
                    `updated_at` int(11) NOT NULL,
                    PRIMARY KEY (`id`)
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
            ");
            return;
        }

        $columns = $this->zicnodeColumns();
        foreach ($columns as $column => $definition) {
            $this->ensureColumn('v2_server_zicnode', $column, $definition);
        }
    }

    private function copyV2nodeToZicnode()
    {
        if (!Schema::hasTable('v2_server_v2node')) {
            return;
        }
        if (!Schema::hasColumn('v2_server_v2node', 'id')) {
            $this->warnings[] = 'v2_server_v2node thieu cot id nen khong copy duoc node legacy sang zicnode.';
            return;
        }

        $columns = array_merge(['id'], array_keys($this->zicnodeColumns()));
        $columnSql = '`' . implode('`, `', $columns) . '`';
        $selectColumns = [];
        foreach ($columns as $column) {
            $selectColumns[] = Schema::hasColumn('v2_server_v2node', $column)
                ? "`{$column}`"
                : $this->zicnodeDefaultExpression($column) . " AS `{$column}`";
        }

        DB::statement("
            INSERT IGNORE INTO `v2_server_zicnode` ({$columnSql})
            SELECT " . implode(', ', $selectColumns) . "
            FROM `v2_server_v2node`
        ");
    }

    private function zicnodeColumns()
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
            'rate' => "ADD `rate` decimal(10,2) NOT NULL DEFAULT '1.00' AFTER `tags`",
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
            'rate' => "'1.00'",
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

    private function repairZicnodeNodeCompatibility()
    {
        if (!Schema::hasTable('v2_server_zicnode')) {
            return;
        }

        foreach (['network_settings', 'tls_settings', 'encryption_settings'] as $column) {
            if (!Schema::hasColumn('v2_server_zicnode', $column)) {
                continue;
            }

            $nonEmptyArrayCount = $this->countZicnodeJsonArrayRoots($column);
            if ($nonEmptyArrayCount > 0) {
                $this->warnings[] = "v2_server_zicnode.{$column} co {$nonEmptyArrayCount} gia tri JSON array khong rong. Command chi tu sua [] rong thanh {}, hay kiem tra tay cac row nay.";
            }

            DB::statement("
                UPDATE `v2_server_zicnode`
                SET `{$column}` = '{}'
                WHERE TRIM(COALESCE(`{$column}`, '')) = ''
                    OR TRIM(COALESCE(`{$column}`, '')) = '[]'
                    OR TRIM(COALESCE(`{$column}`, '')) = 'null'
            ");
        }

        if (Schema::hasColumn('v2_server_zicnode', 'listen_ip')) {
            DB::statement("
                UPDATE `v2_server_zicnode`
                SET `listen_ip` = '0.0.0.0'
                WHERE TRIM(COALESCE(`listen_ip`, '')) = ''
            ");
        }

        if (Schema::hasColumn('v2_server_zicnode', 'network')) {
            DB::statement("
                UPDATE `v2_server_zicnode`
                SET `network` = 'tcp'
                WHERE TRIM(COALESCE(`network`, '')) = ''
                    OR `network` NOT IN ('tcp', 'ws', 'grpc', 'http', 'httpupgrade', 'xhttp', 'splithttp')
            ");
        }
    }

    private function ensureColumn($table, $column, $definition)
    {
        if (!Schema::hasTable($table) || Schema::hasColumn($table, $column)) {
            return;
        }

        DB::statement("ALTER TABLE `{$table}` {$definition}");
    }

    private function afterColumn($table, $column)
    {
        return Schema::hasTable($table) && Schema::hasColumn($table, $column)
            ? " AFTER `{$column}`"
            : '';
    }

    private function ensureIndex($table, $index, $definition)
    {
        if (!Schema::hasTable($table) || $this->indexExists($table, $index)) {
            return;
        }

        DB::statement("ALTER TABLE `{$table}` {$definition}");
    }

    private function ensureForeignKey($table, $name, $definition)
    {
        if (!Schema::hasTable($table) || $this->foreignKeyExists($table, $name)) {
            return;
        }

        DB::statement("ALTER TABLE `{$table}` {$definition}");
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

        DB::statement("
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
            throw new \RuntimeException("Ten charset/collation khong hop le: {$name}");
        }

        return $name;
    }

    private function requireTable($table)
    {
        if (!Schema::hasTable($table)) {
            throw new \RuntimeException("Thieu bang {$table}.");
        }
    }

    private function requireColumns($table, array $columns)
    {
        $this->requireTable($table);
        $missing = [];
        foreach ($columns as $column) {
            if (!Schema::hasColumn($table, $column)) {
                $missing[] = $column;
            }
        }

        if ($missing) {
            throw new \RuntimeException("Bang {$table} thieu cot: " . implode(', ', $missing));
        }
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
        return DB::table($table)
            ->whereNull($column)
            ->limit(1)
            ->exists();
    }

    private function countRowsIfExists($table)
    {
        if (!Schema::hasTable($table)) {
            return 'missing';
        }

        return (string)DB::table($table)->count();
    }

    private function countMissingSubscription($table)
    {
        if (!Schema::hasTable($table) || !Schema::hasColumn($table, 'subscription_id')) {
            return 'missing column';
        }

        return (string)DB::table($table)->whereNull('subscription_id')->count();
    }

    private function missingCopiedZicnodeTotal()
    {
        if (!Schema::hasTable('v2_server_v2node') || !Schema::hasTable('v2_server_zicnode')) {
            return 0;
        }

        return DB::table('v2_server_v2node as legacy')
            ->leftJoin('v2_server_zicnode as active', 'legacy.id', '=', 'active.id')
            ->whereNull('active.id')
            ->count();
    }

    private function missingCopiedZicnodeIds($limit = 50)
    {
        if (!Schema::hasTable('v2_server_v2node') || !Schema::hasTable('v2_server_zicnode')) {
            return [];
        }

        return DB::table('v2_server_v2node as legacy')
            ->leftJoin('v2_server_zicnode as active', 'legacy.id', '=', 'active.id')
            ->whereNull('active.id')
            ->orderBy('legacy.id')
            ->limit($limit)
            ->pluck('legacy.id')
            ->map(function ($id) {
                return (int)$id;
            })
            ->all();
    }

    private function printZicnodeCompatibilitySummary()
    {
        if (!Schema::hasTable('v2_server_zicnode')) {
            return;
        }

        $issues = [];
        foreach (['network_settings', 'tls_settings', 'encryption_settings'] as $column) {
            if (!Schema::hasColumn('v2_server_zicnode', $column)) {
                continue;
            }

            $blankCount = $this->countZicnodeBlankJsonValues($column);
            $arrayCount = $this->countZicnodeJsonArrayRoots($column);
            if ($blankCount > 0 || $arrayCount > 0) {
                $issues[] = "{$column}: empty/[]/null={$blankCount}, array_root_non_empty={$arrayCount}";
            }
        }

        if (Schema::hasColumn('v2_server_zicnode', 'listen_ip')) {
            $missingListenIp = DB::table('v2_server_zicnode')
                ->whereRaw("TRIM(COALESCE(`listen_ip`, '')) = ''")
                ->count();
            if ($missingListenIp > 0) {
                $issues[] = "listen_ip_empty={$missingListenIp}";
            }
        }

        $badNetworkCount = $this->countZicnodeBadNetworks();
        if ($badNetworkCount > 0) {
            $issues[] = "unsupported_network={$badNetworkCount}";
        }

        if ($issues) {
            $this->line('- zicnode config can repair: ' . implode('; ', $issues));
        } else {
            $this->line('- zicnode config compatibility: OK');
        }
    }

    private function countZicnodeBlankJsonValues($column)
    {
        if (!Schema::hasTable('v2_server_zicnode') || !Schema::hasColumn('v2_server_zicnode', $column)) {
            return 0;
        }

        return DB::table('v2_server_zicnode')
            ->whereRaw("
                TRIM(COALESCE(`{$column}`, '')) = ''
                OR TRIM(COALESCE(`{$column}`, '')) = '[]'
                OR TRIM(COALESCE(`{$column}`, '')) = 'null'
            ")
            ->count();
    }

    private function countZicnodeJsonArrayRoots($column)
    {
        if (!Schema::hasTable('v2_server_zicnode') || !Schema::hasColumn('v2_server_zicnode', $column)) {
            return 0;
        }

        return DB::table('v2_server_zicnode')
            ->whereRaw("TRIM(COALESCE(`{$column}`, '')) LIKE '[%'")
            ->whereRaw("TRIM(COALESCE(`{$column}`, '')) <> '[]'")
            ->count();
    }

    private function countZicnodeBadNetworks()
    {
        if (!Schema::hasTable('v2_server_zicnode') || !Schema::hasColumn('v2_server_zicnode', 'network')) {
            return 0;
        }

        return DB::table('v2_server_zicnode')
            ->whereRaw("TRIM(COALESCE(`network`, '')) = ''")
            ->orWhereNotIn('network', ['tcp', 'ws', 'grpc', 'http', 'httpupgrade', 'xhttp', 'splithttp'])
            ->count();
    }

    private function legacySubscriptionCandidateCount()
    {
        if (!Schema::hasTable('v2_user') ||
            !Schema::hasColumn('v2_user', 'plan_id') ||
            !Schema::hasColumn('v2_user', 'transfer_enable')) {
            return 0;
        }

        $deviceExistsClause = Schema::hasTable('v2_user_device')
            ? " OR EXISTS (SELECT 1 FROM `v2_user_device` AS devices WHERE devices.user_id = users.id)"
            : '';

        $row = DB::selectOne("
            SELECT COUNT(*) AS total
            FROM `v2_user` AS users
            WHERE users.`plan_id` IS NOT NULL
                OR COALESCE(users.`transfer_enable`, 0) > 0
                {$deviceExistsClause}
        ");

        return (int)$row->total;
    }

    private function abortIfBlankValues($table, $column)
    {
        if (!Schema::hasTable($table) || !Schema::hasColumn($table, $column)) {
            return;
        }

        $count = DB::table($table)
            ->where(function ($query) use ($column) {
                $query->whereNull($column)->orWhere($column, '');
            })
            ->count();

        if ($count > 0) {
            throw new \RuntimeException("Bang {$table} co {$count} dong bi thieu {$column}.");
        }
    }

    private function abortIfDuplicateValues($table, $column)
    {
        if (!Schema::hasTable($table) || !Schema::hasColumn($table, $column)) {
            return;
        }

        $rows = DB::select("
            SELECT `{$column}` AS value, COUNT(*) AS total
            FROM `{$table}`
            WHERE `{$column}` IS NOT NULL AND `{$column}` <> ''
            GROUP BY `{$column}`
            HAVING COUNT(*) > 1
            LIMIT 5
        ");

        if (!$rows) {
            return;
        }

        $samples = [];
        foreach ($rows as $row) {
            $samples[] = "{$row->value} ({$row->total})";
        }

        throw new \RuntimeException("Bang {$table} bi trung {$column}: " . implode(', ', $samples));
    }

    private function abortIfDuplicateDeviceBindings()
    {
        if (!Schema::hasTable('v2_user_device') ||
            !Schema::hasColumn('v2_user_device', 'subscription_id') ||
            !Schema::hasColumn('v2_user_device', 'hwid_hash')) {
            return;
        }

        $rows = DB::select("
            SELECT subscription_id, hwid_hash, COUNT(*) AS total
            FROM `v2_user_device`
            WHERE subscription_id IS NOT NULL
                AND hwid_hash IS NOT NULL
                AND TRIM(hwid_hash) <> ''
            GROUP BY subscription_id, hwid_hash
            HAVING COUNT(*) > 1
            LIMIT 5
        ");

        if (!$rows) {
            return;
        }

        $samples = [];
        foreach ($rows as $row) {
            $samples[] = "subscription_id={$row->subscription_id}, hwid_hash={$row->hwid_hash}, total={$row->total}";
        }

        throw new \RuntimeException('v2_user_device bi trung binding: ' . implode(' | ', $samples));
    }

    private function abortIfDuplicateStatRows()
    {
        if (!Schema::hasTable('v2_stat_user') ||
            !Schema::hasColumn('v2_stat_user', 'subscription_id')) {
            return;
        }

        $rows = DB::select("
            SELECT server_rate, subscription_id, record_at, COUNT(*) AS total
            FROM `v2_stat_user`
            WHERE subscription_id IS NOT NULL
            GROUP BY server_rate, subscription_id, record_at
            HAVING COUNT(*) > 1
            LIMIT 5
        ");

        if (!$rows) {
            return;
        }

        $samples = [];
        foreach ($rows as $row) {
            $samples[] = "server_rate={$row->server_rate}, subscription_id={$row->subscription_id}, record_at={$row->record_at}, total={$row->total}";
        }

        throw new \RuntimeException('v2_stat_user bi trung key thong ke moi: ' . implode(' | ', $samples));
    }

    private function countInvalidReferences($table, $column, $refTable, $refColumn)
    {
        if (!Schema::hasTable($table) ||
            !Schema::hasTable($refTable) ||
            !Schema::hasColumn($table, $column) ||
            !Schema::hasColumn($refTable, $refColumn)) {
            return 0;
        }

        $row = DB::selectOne("
            SELECT COUNT(*) AS total
            FROM `{$table}` AS source
            LEFT JOIN `{$refTable}` AS target ON target.`{$refColumn}` = source.`{$column}`
            WHERE source.`{$column}` IS NOT NULL
                AND target.`{$refColumn}` IS NULL
        ");

        return (int)$row->total;
    }

    private function warnIfOrphans($table, $column, $refTable, $refColumn, $message)
    {
        $count = $this->countInvalidReferences($table, $column, $refTable, $refColumn);
        if ($count > 0) {
            $this->warnings[] = $message . " So dong: {$count}.";
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

    private function renderFailure(\Throwable $e)
    {
        $this->error('Migration failed at step: ' . $this->currentStep);
        $this->error($e->getMessage());
        $this->line('');
        $this->line('Cach fix goi y:');

        $message = $e->getMessage();
        if (strpos($message, 'Thieu bang v2_user') !== false) {
            $this->line('- Import dump database v2b-zic vao database ZicBoard truoc, sau do chay lai command.');
        } elseif (strpos($message, 'thieu cot') !== false) {
            $this->line('- Dump v2b-zic dang qua cu hoac import thieu schema. Hay update v2b-zic cu len ban moi nhat roi export lai database.');
            $this->line('- Neu anh da sua schema rieng, bo sung cot bi thieu bang ALTER TABLE roi chay lai command.');
        } elseif (strpos($message, 'bi trung token') !== false || strpos($message, 'bi trung uuid') !== false) {
            $this->line('- Tim dong trung: SELECT token, COUNT(*) FROM v2_user GROUP BY token HAVING COUNT(*) > 1;');
            $this->line('- Hoac: SELECT uuid, COUNT(*) FROM v2_user GROUP BY uuid HAVING COUNT(*) > 1;');
            $this->line('- Sua token/uuid cho moi user thanh gia tri duy nhat, sau do chay lai command.');
        } elseif (strpos($message, 'bi thieu token') !== false || strpos($message, 'bi thieu uuid') !== false) {
            $this->line('- Tao token/uuid cho cac user bi thieu truoc khi migrate. Khong nen de trong vi link sub va license phu thuoc vao hai gia tri nay.');
        } elseif (strpos($message, 'Illegal mix of collations') !== false) {
            $this->line('- Schema legacy va schema moi dang khac collation. Hay cap nhat code moi roi chay lai command, command se tu can collation cua v2_user_subscription theo v2_user.');
            $this->line('- Neu can sua tay tren database, hay de token/uuid/name_sni/network_settings/remarks cua v2_user_subscription cung charset/collation voi cac cot tuong ung trong v2_user.');
        } elseif (strpos($message, 'v2_user_device bi trung binding') !== false) {
            $this->line('- Xoa hoac gop cac dong device trung cung subscription_id + hwid_hash, sau do chay lai command.');
            $this->line('- Neu khong can lich su device cu, co the truncate v2_user_device truoc khi chay lai.');
        } elseif (strpos($message, 'v2_stat_user bi trung') !== false) {
            $this->line('- Gop cac dong thong ke trung hoac chay lai voi --skip-stats neu khong can giu thong ke cu.');
        } elseif (strpos($message, 'foreign key') !== false || strpos($message, 'khong ton tai') !== false) {
            $this->line('- Co du lieu mo coi. Kiem tra cac bang bao loi xem user_id/subscription_id co ton tai trong bang dich khong.');
            $this->line('- Sua hoac xoa cac dong mo coi, sau do chay lai command.');
        } else {
            $this->line('- Doc loi goc o tren, sua schema/data tuong ung roi chay lai command.');
            $this->line('- Neu loi xay ra khi them index unique, hay kiem tra du lieu trung trong bang lien quan.');
        }
    }
}
