<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Services\ThemeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Validation\Rule;

class ThemeController extends Controller
{
    private $themes;
    private $path;
    private $legacyThemeFieldMap = [
        'site_name' => 'SITE_CONFIG.siteName',
        'logo' => 'SITE_CONFIG.logo',
        'background_url' => 'AUTH_LAYOUT_CONFIG.splitLayout.leftContent.backgroundImage',
        'primary_color' => 'DEFAULT_CONFIG.primaryColor',
        'enable_landing_page' => 'DEFAULT_CONFIG.enableLandingPage',
        'show_logo' => 'SITE_CONFIG.showLogo',
        'show_online_devices_limit' => 'DASHBOARD_CONFIG.showOnlineDevicesLimit',
        'show_download_card' => 'CLIENT_CONFIG.showDownloadCard',
        'default_language' => 'DEFAULT_CONFIG.defaultLanguage',
        'custom_html' => 'CUSTOMER_SERVICE_CONFIG.customHtml',
        'ios_link' => 'CLIENT_CONFIG.clientLinks.ios',
        'android_link' => 'CLIENT_CONFIG.clientLinks.android',
        'macos_link' => 'CLIENT_CONFIG.clientLinks.macos',
        'windows_link' => 'CLIENT_CONFIG.clientLinks.windows'
    ];

    public function __construct()
    {
        $this->path = $path = public_path('theme/');
        $root = realpath($path);
        $this->themes = [];

        foreach (glob($path . '*', GLOB_ONLYDIR) ?: [] as $item) {
            $realPath = realpath($item);
            $name = basename($item);
            if (
                !$root ||
                !$realPath ||
                strpos($realPath, $root . DIRECTORY_SEPARATOR) !== 0 ||
                !preg_match('/^[A-Za-z0-9._-]+$/', $name)
            ) {
                continue;
            }
            $this->themes[] = $name;
        }
    }

    public function getThemes()
    {
        $themeConfigs = [];
        foreach ($this->themes as $theme) {
            $themeConfigFile = $this->path . "{$theme}/config.json";
            if (!File::exists($themeConfigFile)) continue;
            $themeConfig = json_decode(File::get($themeConfigFile), true);
            if (!is_array($themeConfig) || !isset($themeConfig['configs']) || !is_array($themeConfig['configs'])) continue;
            $themeConfigs[$theme] = $themeConfig;
            if (config("theme.{$theme}")) continue;
            $themeService = new ThemeService($theme);
            $themeService->init();
        }
        return response([
            'data' => [
                'themes' => $themeConfigs,
                'active' => config('zicboard.frontend_theme', 'EZ-Zic')
            ]
        ]);
    }

    public function getThemeConfig(Request $request)
    {
        $payload = $request->validate([
            'name' => ['required', Rule::in($this->themes)]
        ]);
        $themeConfig = $this->readThemeConfig($payload['name']);
        $defaults = $this->getThemeDefaults($themeConfig);
        $themeService = new ThemeService($payload['name']);
        $saved = $themeService->savedConfig();

        return response([
            'data' => $this->mergeLegacyThemeConfig($defaults, $saved)
        ]);
    }

    public function saveThemeConfig(Request $request)
    {
        $payload = $request->validate([
            'name' => ['required', Rule::in($this->themes)],
            'config' => 'required'
        ]);
        $decodedConfig = base64_decode($payload['config'], true);
        if ($decodedConfig === false) abort(400, 'tham số không hợp lệ');

        $payload['config'] = json_decode($decodedConfig, true);
        if (!is_array($payload['config']) || json_last_error() !== JSON_ERROR_NONE) abort(400, 'tham số không hợp lệ');
        $themeConfig = $this->readThemeConfig($payload['name']);
        $validateFields = array_column($themeConfig['configs'], 'field_name');
        $defaults = $this->getThemeDefaults($themeConfig);
        $themeService = new ThemeService($payload['name']);
        $current = $themeService->savedConfig();
        $config = [];
        foreach ($validateFields as $validateField) {
            if (array_key_exists($validateField, $payload['config'])) {
                $config[$validateField] = $payload['config'][$validateField];
                continue;
            }

            if (array_key_exists($validateField, $current)) {
                $config[$validateField] = $current[$validateField];
                continue;
            }

            $config[$validateField] = $defaults[$validateField] ?? '';
        }

        File::ensureDirectoryExists(base_path() . '/config/theme/');

        $data = var_export($config, 1);
        if (!File::put(base_path() . "/config/theme/{$payload['name']}.php", "<?php\n return $data ;")) {
            abort(500, 'Chỉnh sửa thất bại');
        }

        config(["theme.{$payload['name']}" => $config]);

        if (function_exists('opcache_reset')) {
            if (opcache_reset() === false) {
                abort(500, 'Xóa cache thất bại, vui lòng gỡ hoặc kiểm tra cấu hình opcache');
            }
        }

        try {
            Artisan::call('config:cache');
//            sleep(2);
        } catch (\Exception $e) {
            abort(500, 'Lưu thất bại');
        }

        if (Cache::has('WEBMANPID')) {
            $pid = Cache::get('WEBMANPID');
            Cache::forget('WEBMANPID');

            if (function_exists('posix_kill')) {
                posix_kill($pid, 15);
            }
        }

        return response([
            'data' => $config
        ]);
    }

    private function readThemeConfig($theme)
    {
        $themeConfigFile = public_path("theme/{$theme}/config.json");
        if (!File::exists($themeConfigFile)) abort(500, 'Giao diện không tồn tại');

        $themeConfig = json_decode(File::get($themeConfigFile), true);
        if (!is_array($themeConfig) || !isset($themeConfig['configs']) || !is_array($themeConfig['configs'])) abort(500, 'File cấu hình giao diện không hợp lệ');

        return $themeConfig;
    }

    private function getThemeDefaults(array $themeConfig)
    {
        $defaults = [];
        foreach ($themeConfig['configs'] as $config) {
            if (!isset($config['field_name'])) continue;
            $defaults[$config['field_name']] = $config['default_value'] ?? '';
        }

        return $defaults;
    }

    private function mergeLegacyThemeConfig(array $defaults, array $saved)
    {
        $merged = array_merge($defaults, $saved);

        foreach ($this->legacyThemeFieldMap as $legacyField => $newField) {
            if (!array_key_exists($legacyField, $saved) || array_key_exists($newField, $saved)) continue;
            $merged[$newField] = $this->normalizeLegacyThemeValue($legacyField, $saved[$legacyField]);
        }

        if (
            array_key_exists('telegram_group_link', $saved) &&
            !array_key_exists('MORE_PAGE_CONFIG.customCards', $saved) &&
            array_key_exists('MORE_PAGE_CONFIG.customCards', $merged)
        ) {
            $cards = json_decode($merged['MORE_PAGE_CONFIG.customCards'], true);
            if (is_array($cards) && isset($cards[0]) && is_array($cards[0])) {
                $cards[0]['url'] = $saved['telegram_group_link'];
                $merged['MORE_PAGE_CONFIG.customCards'] = json_encode($cards, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
            }
        }

        return $merged;
    }

    private function normalizeLegacyThemeValue($field, $value)
    {
        $booleanFields = [
            'enable_landing_page',
            'show_logo',
            'show_online_devices_limit',
            'show_download_card'
        ];

        if (in_array($field, $booleanFields, true)) {
            return in_array((string)$value, ['1', 'true'], true) ? 'true' : 'false';
        }

        return $value;
    }
}
