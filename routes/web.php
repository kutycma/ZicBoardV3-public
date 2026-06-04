<?php

use App\Models\Staff;
use App\Services\ThemeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| These routes render the Laravel-served shells and legacy subscribe entry.
| Application APIs are registered under /api/v3 by RouteServiceProvider.
|
*/

Route::get('/', function (Request $request) {
    $host = $request->getHost();
    $staff = Schema::hasTable('v2_staff')
        ? Staff::where('domain', $host)->where('status', 1)->first()
        : null;

    if (config('zicboard.app_url') && config('zicboard.safe_mode_enable', 0)) {
        if ($host !== parse_url(config('zicboard.app_url'))['host'] && !$staff) {
            abort(403);
        }
    }

    $renderParams = [
        'title' => config('zicboard.app_name', 'ZicBoard'),
        'theme' => config('zicboard.frontend_theme', 'EZ-Zic'),
        'version' => config('app.version'),
        'description' => config('zicboard.app_description', 'Nền tảng quản lý dịch vụ'),
        'logo' => config('zicboard.logo')
    ];

    $themeService = new ThemeService($renderParams['theme']);
    if (!config("theme.{$renderParams['theme']}")) {
        $themeService->init();
    }

    $themeConfig = $themeService->savedConfig();
    if ($staff) {
        if ($staff->title) {
            $renderParams['title'] = $staff->title;
            $themeConfig['SITE_CONFIG.siteName'] = $staff->title;
        }
        if ($staff->logo) {
            $renderParams['logo'] = $staff->logo;
            $themeConfig['SITE_CONFIG.logo'] = $staff->logo;
        }
        if ($staff->description) {
            $renderParams['description'] = $staff->description;
            $themeConfig['SITE_CONFIG.siteDescription'] = $staff->description;
        }
        if ($staff->background_url) {
            $themeConfig['background_url'] = $staff->background_url;
            $themeConfig['AUTH_LAYOUT_CONFIG.splitLayout.leftContent.backgroundImage'] = $staff->background_url;
        }
        if ($staff->custom_html) {
            $themeConfig['custom_html'] = $staff->custom_html;
            $themeConfig['CUSTOMER_SERVICE_CONFIG.customHtml'] = $staff->custom_html;
            $themeConfig['CUSTOMER_SERVICE_CONFIG.enabled'] = 'true';
            $themeConfig['CUSTOMER_SERVICE_CONFIG.type'] = 'other';
            $themeConfig['CUSTOMER_SERVICE_CONFIG.embedMode'] = 'page';
        }
    }

    $renderParams['theme_config'] = $themeConfig;

    return view('theme::' . config('zicboard.frontend_theme', 'EZ-Zic') . '.dashboard', $renderParams);
});

$staffPath = config('zicboard.staff_path', 'webctv');
$staffPanel = function ($entry) use ($staffPath) {
    return view('staff', [
        'title' => 'Staff Panel',
        'staff_path' => $staffPath,
        'entry' => $entry
    ]);
};

Route::get('/' . $staffPath . '/login', function () use ($staffPanel) {
    return $staffPanel('login');
});

Route::get('/' . $staffPath, function () use ($staffPanel) {
    return $staffPanel('dashboard');
});

Route::get('/' . $staffPath . '/', function () use ($staffPanel) {
    return $staffPanel('dashboard');
});

$securePath = config('zicboard.secure_path', config('zicboard.frontend_admin_path', hash('crc32b', config('app.key'))));

Route::get('/' . $securePath, function () use ($securePath) {
    return view('admin', [
        'title' => config('zicboard.app_name', 'ZicBoard'),
        'theme_sidebar' => config('zicboard.frontend_theme_sidebar', 'light'),
        'theme_header' => config('zicboard.frontend_theme_header', 'dark'),
        'theme_color' => config('zicboard.frontend_theme_color', 'default'),
        'background_url' => config('zicboard.frontend_background_url'),
        'version' => config('app.version'),
        'logo' => config('zicboard.logo'),
        'secure_path' => $securePath
    ]);
});

if (!empty(config('zicboard.subscribe_path'))) {
    Route::get(config('zicboard.subscribe_path'), 'V1\\Client\\ClientController@subscribe')->middleware(['client']);
}
