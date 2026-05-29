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
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
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

    if (!config("theme.{$renderParams['theme']}")) {
        $themeService = new ThemeService($renderParams['theme']);
        $themeService->init();
    }

    $themeConfig = config('theme.' . config('zicboard.frontend_theme', 'EZ-Zic')) ?: [];
    if ($staff) {
        $themeConfig['background_url'] = $staff->background_url;
        $themeConfig['custom_html'] = $staff->custom_html;
        $renderParams['title'] = $staff->title ?: $renderParams['title'];
        $renderParams['logo'] = $staff->logo ?: $renderParams['logo'];
        $renderParams['description'] = $staff->description ?: $renderParams['description'];
    }

    $renderParams['theme_config'] = $themeConfig;
    return view('theme::' . config('zicboard.frontend_theme', 'EZ-Zic') . '.dashboard', $renderParams);
});

//TODO:: tương thích
$staffPath = config('zicboard.staff_path', 'webctv');

Route::get('/' . $staffPath . '/login', function () use ($staffPath) {
    return view('staff', [
        'title' => 'Staff Panel',
        'staff_path' => $staffPath,
        'entry' => 'login'
    ]);
});

Route::get('/' . $staffPath, function () use ($staffPath) {
    return view('staff', [
        'title' => 'Staff Panel',
        'staff_path' => $staffPath,
        'entry' => 'dashboard'
    ]);
});

Route::get('/' . $staffPath . '/', function () use ($staffPath) {
    return view('staff', [
        'title' => 'Staff Panel',
        'staff_path' => $staffPath,
        'entry' => 'dashboard'
    ]);
});

Route::get('/' . config('zicboard.secure_path', config('zicboard.frontend_admin_path', hash('crc32b', config('app.key')))), function () {
    return view('admin', [
        'title' => config('zicboard.app_name', 'ZicBoard'),
        'theme_sidebar' => config('zicboard.frontend_theme_sidebar', 'light'),
        'theme_header' => config('zicboard.frontend_theme_header', 'dark'),
        'theme_color' => config('zicboard.frontend_theme_color', 'default'),
        'background_url' => config('zicboard.frontend_background_url'),
        'version' => config('app.version'),
        'logo' => config('zicboard.logo'),
        'secure_path' => config('zicboard.secure_path', config('zicboard.frontend_admin_path', hash('crc32b', config('app.key'))))
    ]);
});

if (!empty(config('zicboard.subscribe_path'))) {
    Route::get(config('zicboard.subscribe_path'), 'V1\\Client\\ClientController@subscribe')->middleware(['client', 'commercial.license']);
}
