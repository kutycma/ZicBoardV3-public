<?php

namespace App\Services;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

class ThemeService
{
    private $path;
    private $theme;

    public function __construct($theme)
    {
        $this->theme = $this->normalizeThemeName($theme);
        $this->path = $path = public_path('theme/');
    }

    public function init()
    {
        $themeConfigFile = $this->themeConfigPath();
        if (!File::exists($themeConfigFile)) abort(500, "{$this->theme}Giao diện không tồn tại");
        $themeConfig = json_decode(File::get($themeConfigFile), true);
        if (!is_array($themeConfig) || !isset($themeConfig['configs']) || !is_array($themeConfig['configs'])) abort(500, "{$this->theme}File cấu hình giao diện không hợp lệ");
        $configs = $themeConfig['configs'];
        $data = [];
        foreach ($configs as $config) {
            $data[$config['field_name']] = isset($config['default_value']) ? $config['default_value'] : '';
        }

        $data = var_export($data, 1);
        try {
            if (!File::put(base_path() . "/config/theme/{$this->theme}.php", "<?php\n return $data ;")) {
                abort(500, "{$this->theme}Khởi tạo thất bại");
            }
        } catch (\Exception $e) {
            abort(500, 'Vui lòng kiểm tra quyền thư mục ZicBoard');
        }

        try {
            if (File::exists(base_path() . "/config/theme/{$this->theme}.php")) {
                $loadedConfig = include(base_path() . "/config/theme/{$this->theme}.php");
                config(["theme.{$this->theme}" => $loadedConfig]);
            }
            Artisan::call('config:cache');
        } catch (\Exception $e) {
            abort(500, "{$this->theme}Khởi tạo thất bại: " . $e->getMessage());
        }
    }

    private function normalizeThemeName($theme)
    {
        $theme = (string)$theme;
        if (!preg_match('/^[A-Za-z0-9._-]+$/', $theme)) {
            abort(500, 'Tên giao diện không hợp lệ');
        }

        return $theme;
    }

    private function themeConfigPath()
    {
        $root = realpath($this->path);
        $themePath = realpath($this->path . $this->theme);
        if (!$root || !$themePath || strpos($themePath, $root . DIRECTORY_SEPARATOR) !== 0) {
            abort(500, 'Giao diện không tồn tại');
        }

        return $themePath . DIRECTORY_SEPARATOR . 'config.json';
    }
}
