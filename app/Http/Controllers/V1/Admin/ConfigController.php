<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ConfigSave;
use App\Jobs\SendEmailJob;
use App\Services\SubscriptionService;
use App\Services\TelegramService;
use App\Services\UserDeviceService;
use App\Utils\Dict;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;

class ConfigController extends Controller
{
    private const PRESERVED_CONFIG_KEYS = [
        'frontend_admin_path',
        'cors_allowed_origins',
        'server_log_enable',
        'server_v2ray_domain',
        'server_v2ray_protocol',
        'stripe_pk_live',
        'zicnode_install_script_url',
    ];

    public function getEmailTemplate()
    {
        $path = resource_path('views/mail/');
        $files = array_map(function ($item) use ($path) {
            return str_replace($path, '', $item);
        }, glob($path . '*'));

        return response([
            'data' => $files
        ]);
    }

    public function getThemeTemplate()
    {
        $path = public_path('theme/');
        $files = array_map(function ($item) use ($path) {
            return str_replace($path, '', $item);
        }, glob($path . '*'));

        return response([
            'data' => $files
        ]);
    }

    public function testSendMail(Request $request)
    {
        $obj = new SendEmailJob([
            'email' => $request->user['email'],
            'subject' => 'This is zicboard test email',
            'template_name' => 'notify',
            'template_value' => [
                'name' => config('zicboard.app_name', 'ZicBoard'),
                'content' => 'This is zicboard test email',
                'url' => config('zicboard.app_url')
            ]
        ]);

        return response([
            'data' => true,
            'log' => $obj->handle()
        ]);
    }

    public function setTelegramWebhook(Request $request)
    {
        $telegramBotToken = trim((string)$request->input('telegram_bot_token', ''));
        $hookUrl = secure_url('/api/v3/guest/telegram/webhook?access_token=' . md5($telegramBotToken));
        $telegramService = new TelegramService($telegramBotToken);
        $telegramService->getMe();
        $telegramService->setWebhook($hookUrl);

        return response([
            'data' => true
        ]);
    }

    public function fetch(Request $request)
    {
        $key = $request->input('key');
        $data = $this->configPayload();

        if ($key && isset($data[$key])) {
            return response([
                'data' => [
                    $key => $data[$key]
                ]
            ]);
        }

        return response([
            'data' => $data
        ]);
    }

    public function save(ConfigSave $request)
    {
        $config = $this->writableConfig();

        foreach ($request->validated() as $key => $value) {
            if (array_key_exists($key, ConfigSave::RULES)) {
                $config[$key] = $this->normalizeConfigValue($key, $value);
            }
        }

        $export = var_export($config, true);
        if (!File::put(config_path('zicboard.php'), "<?php\n\nreturn {$export};\n")) {
            abort(500, 'Chỉnh sửa thất bại');
        }

        if (function_exists('opcache_reset')) {
            if (opcache_reset() === false) {
                abort(500, 'Xóa cache thất bại, vui lòng gỡ hoặc kiểm tra cấu hình opcache');
            }
        }

        Artisan::call('config:cache');

        try {
            Artisan::call('horizon:terminate');
        } catch (\Throwable $e) {
        }

        if ((int)($config['multiple_subscription_enable'] ?? 1) === 0) {
            (new SubscriptionService())->enforceSingleSubscriptionMode();
        }

        if (Cache::has('WEBMANPID')) {
            $pid = Cache::get('WEBMANPID');
            Cache::forget('WEBMANPID');

            if (function_exists('posix_kill')) {
                return response([
                    'data' => posix_kill($pid, 15)
                ]);
            }
        }

        return response([
            'data' => true
        ]);
    }

    private function configPayload()
    {
        $deviceService = new UserDeviceService();

        return [
            'ticket' => $this->ticketConfig(),
            'deposit' => $this->depositConfig(),
            'invite' => $this->inviteConfig(),
            'site' => $this->siteConfig(),
            'subscribe' => $this->subscribeConfig($deviceService),
            'frontend' => $this->frontendConfig(),
            'server' => $this->serverConfig(),
            'email' => $this->emailConfig(),
            'telegram' => $this->telegramConfig(),
            'app' => $this->appConfig(),
            'safe' => $this->safeConfig(),
        ];
    }

    private function ticketConfig()
    {
        return [
            'ticket_status' => config('zicboard.ticket_status', 0)
        ];
    }

    private function depositConfig()
    {
        return [
            'deposit_bounus' => config('zicboard.deposit_bounus', [])
        ];
    }

    private function inviteConfig()
    {
        return [
            'invite_force' => (int)config('zicboard.invite_force', 0),
            'invite_commission' => config('zicboard.invite_commission', 10),
            'invite_gen_limit' => config('zicboard.invite_gen_limit', 5),
            'invite_never_expire' => config('zicboard.invite_never_expire', 0),
            'commission_first_time_enable' => config('zicboard.commission_first_time_enable', 1),
            'commission_auto_check_enable' => config('zicboard.commission_auto_check_enable', 1),
            'commission_withdraw_limit' => config('zicboard.commission_withdraw_limit', 100),
            'commission_withdraw_method' => config('zicboard.commission_withdraw_method', Dict::WITHDRAW_METHOD_WHITELIST_DEFAULT),
            'withdraw_close_enable' => config('zicboard.withdraw_close_enable', 0),
            'commission_distribution_enable' => config('zicboard.commission_distribution_enable', 0),
            'commission_distribution_l1' => config('zicboard.commission_distribution_l1'),
            'commission_distribution_l2' => config('zicboard.commission_distribution_l2'),
            'commission_distribution_l3' => config('zicboard.commission_distribution_l3')
        ];
    }

    private function siteConfig()
    {
        return [
            'logo' => config('zicboard.logo'),
            'force_https' => (int)config('zicboard.force_https', 0),
            'stop_register' => (int)config('zicboard.stop_register', 0),
            'billing_info_enable' => (int)config('zicboard.billing_info_enable', 0),
            'app_name' => config('zicboard.app_name', 'ZicBoard'),
            'app_description' => config('zicboard.app_description', 'Nền tảng quản lý dịch vụ'),
            'app_url' => config('zicboard.app_url'),
            'subscribe_url' => config('zicboard.subscribe_url'),
            'webcon_shared_subscribe_url_enable' => (int)config('zicboard.webcon_shared_subscribe_url_enable', 0),
            'subscribe_path' => config('zicboard.subscribe_path'),
            'try_out_plan_id' => (int)config('zicboard.try_out_plan_id', 0),
            'try_out_hour' => (int)config('zicboard.try_out_hour', 1),
            'tos_url' => config('zicboard.tos_url'),
            'currency' => config('zicboard.currency', 'VND'),
            'currency_symbol' => config('zicboard.currency_symbol', 'VND'),
        ];
    }

    private function subscribeConfig(UserDeviceService $deviceService)
    {
        return [
            'multiple_subscription_enable' => (int)config('zicboard.multiple_subscription_enable', 1),
            'plan_change_enable' => (int)config('zicboard.plan_change_enable', 1),
            'device_hwid_enable' => (int)config('zicboard.device_hwid_enable', 0),
            'device_hwid_mode' => $deviceService->hwidMode(),
            'device_hwid_available' => $deviceService->isDeviceTrackingAvailable() ? 1 : 0,
            'happ_subscribe_encrypt_enable' => (int)config('zicboard.happ_subscribe_encrypt_enable', config('zicboard.device_hwid_enable', 0)),
            'happ_profile_title' => config('zicboard.happ_profile_title', ''),
            'happ_hide_settings_enable' => (int)config('zicboard.happ_hide_settings_enable', 1),
            'happ_announce_enable' => (int)config('zicboard.happ_announce_enable', 1),
            'happ_provider_id' => config('zicboard.happ_provider_id', ''),
            'happ_color_profile' => config('zicboard.happ_color_profile', ''),
            'happ_ping_type' => config('zicboard.happ_ping_type', 'proxy-head'),
            'happ_check_url' => config('zicboard.happ_check_url', 'https://cp.cloudflare.com/generate_204'),
            'change_sni_enable' => (int)config('zicboard.change_sni_enable', 1),
            'reset_traffic_method' => (int)config('zicboard.reset_traffic_method', 0),
            'surplus_enable' => (int)config('zicboard.surplus_enable', 1),
            'allow_new_period' => (int)config('zicboard.allow_new_period', 0),
            'new_order_event_id' => (int)config('zicboard.new_order_event_id', 0),
            'renew_order_event_id' => (int)config('zicboard.renew_order_event_id', 0),
            'change_order_event_id' => (int)config('zicboard.change_order_event_id', 0),
            'show_info_to_server_enable' => (int)config('zicboard.show_info_to_server_enable', 0),
            'show_subscribe_method' => (int)config('zicboard.show_subscribe_method', 0),
            'show_subscribe_expire' => (int)config('zicboard.show_subscribe_expire', 5),
            'subscribe_url_ua_enable' => (int)config('zicboard.subscribe_url_ua_enable', 0),
            'subscribe_url_allowed_ua' => config('zicboard.subscribe_url_allowed_ua', ''),
        ];
    }

    private function normalizeConfigValue($key, $value)
    {
        if ($key !== 'subscribe_url_allowed_ua') {
            return $value;
        }

        $lines = preg_split('/\r\n|\r|\n/', (string)$value);
        $lines = array_values(array_filter(array_map('trim', is_array($lines) ? $lines : []), function ($line) {
            return $line !== '';
        }));

        return $lines ? implode("\n", $lines) : '';
    }

    private function frontendConfig()
    {
        return [
            'frontend_theme' => config('zicboard.frontend_theme', 'EZ-Zic'),
            'frontend_theme_sidebar' => config('zicboard.frontend_theme_sidebar', 'light'),
            'frontend_theme_header' => config('zicboard.frontend_theme_header', 'dark'),
            'frontend_theme_color' => config('zicboard.frontend_theme_color', 'default'),
            'frontend_background_url' => config('zicboard.frontend_background_url'),
        ];
    }

    private function serverConfig()
    {
        return [
            'server_api_url' => config('zicboard.server_api_url'),
            'server_token' => config('zicboard.server_token'),
            'server_pull_interval' => config('zicboard.server_pull_interval', 60),
            'server_push_interval' => config('zicboard.server_push_interval', 60),
            'server_node_report_min_traffic' => config('zicboard.server_node_report_min_traffic', 0),
            'server_device_online_min_traffic' => config('zicboard.server_device_online_min_traffic', 0),
            'device_limit_mode' => config('zicboard.device_limit_mode', 0),
            'zicnode_auto_tls_enable' => (int)config('zicboard.zicnode_auto_tls_enable', 1),
            'zicnode_auto_tls_dns_provider' => config('zicboard.zicnode_auto_tls_dns_provider', ''),
            'zicnode_auto_tls_dns_env' => config('zicboard.zicnode_auto_tls_dns_env', ''),
            'zicnode_auto_tls_self_fallback' => (int)config('zicboard.zicnode_auto_tls_self_fallback', 1),
        ];
    }

    private function emailConfig()
    {
        return [
            'email_template' => config('zicboard.email_template', 'default'),
            'email_host' => config('zicboard.email_host'),
            'email_port' => config('zicboard.email_port'),
            'email_username' => config('zicboard.email_username'),
            'email_password' => config('zicboard.email_password'),
            'email_encryption' => config('zicboard.email_encryption'),
            'email_from_address' => config('zicboard.email_from_address')
        ];
    }

    private function telegramConfig()
    {
        return [
            'telegram_bot_enable' => config('zicboard.telegram_bot_enable', 0),
            'telegram_bot_token' => config('zicboard.telegram_bot_token'),
            'telegram_discuss_link' => config('zicboard.telegram_discuss_link')
        ];
    }

    private function appConfig()
    {
        return [
            'windows_version' => config('zicboard.windows_version'),
            'windows_download_url' => config('zicboard.windows_download_url'),
            'macos_version' => config('zicboard.macos_version'),
            'macos_download_url' => config('zicboard.macos_download_url'),
            'android_version' => config('zicboard.android_version'),
            'android_download_url' => config('zicboard.android_download_url')
        ];
    }

    private function safeConfig()
    {
        return [
            'email_verify' => (int)config('zicboard.email_verify', 0),
            'safe_mode_enable' => (int)config('zicboard.safe_mode_enable', 0),
            'secure_path' => config('zicboard.secure_path', config('zicboard.frontend_admin_path', hash('crc32b', config('app.key')))),
            'staff_path' => config('zicboard.staff_path', 'webctv'),
            'manager_path' => config('zicboard.manager_path', 'manager'),
            'email_whitelist_enable' => (int)config('zicboard.email_whitelist_enable', 0),
            'email_whitelist_suffix' => config('zicboard.email_whitelist_suffix', Dict::EMAIL_WHITELIST_SUFFIX_DEFAULT),
            'email_gmail_limit_enable' => config('zicboard.email_gmail_limit_enable', 0),
            'recaptcha_enable' => (int)config('zicboard.recaptcha_enable', 0),
            'recaptcha_key' => config('zicboard.recaptcha_key'),
            'recaptcha_site_key' => config('zicboard.recaptcha_site_key'),
            'register_limit_by_ip_enable' => (int)config('zicboard.register_limit_by_ip_enable', 0),
            'register_limit_count' => config('zicboard.register_limit_count', 3),
            'register_limit_expire' => config('zicboard.register_limit_expire', 60),
            'password_limit_enable' => (int)config('zicboard.password_limit_enable', 1),
            'password_limit_count' => config('zicboard.password_limit_count', 5),
            'password_limit_expire' => config('zicboard.password_limit_expire', 60)
        ];
    }

    private function writableConfig()
    {
        $config = config('zicboard');
        if (!is_array($config)) {
            $config = [];
        }

        $allowedKeys = array_flip(array_merge(
            array_keys(ConfigSave::RULES),
            self::PRESERVED_CONFIG_KEYS
        ));

        return array_intersect_key($config, $allowedKeys);
    }
}
