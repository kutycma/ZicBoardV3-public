<?php

namespace App\Http\Controllers\V1\Guest;

use App\Http\Controllers\Controller;
use App\Models\Staff;
use App\Utils\Dict;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class CommController extends Controller
{
    public function config(Request $request)
    {
        $staff = $this->activeWebcon($request);

        return response([
            'data' => [
                'tos_url' => config('zicboard.tos_url'),
                'is_email_verify' => (int)config('zicboard.email_verify', 0) ? 1 : 0,
                'is_invite_force' => (int)config('zicboard.invite_force', 0) ? 1 : 0,
                'email_whitelist_suffix' => (int)config('zicboard.email_whitelist_enable', 0)
                    ? $this->getEmailSuffix()
                    : 0,
                'is_recaptcha' => (int)config('zicboard.recaptcha_enable', 0) ? 1 : 0,
                'recaptcha_site_key' => config('zicboard.recaptcha_site_key'),
                'app_description' => $staff && $staff->description ? $staff->description : config('zicboard.app_description'),
                'app_url' => config('zicboard.app_url'),
                'logo' => $staff && $staff->logo ? $staff->logo : config('zicboard.logo'),
            ]
        ]);
    }

    private function getEmailSuffix()
    {
        $suffix = config('zicboard.email_whitelist_suffix', Dict::EMAIL_WHITELIST_SUFFIX_DEFAULT);
        if (!is_array($suffix)) {
            return preg_split('/,/', $suffix);
        }
        return $suffix;
    }

    private function activeWebcon(Request $request)
    {
        if (!Schema::hasTable('v2_staff')) {
            return null;
        }

        return Staff::where('domain', $request->getHost())
            ->where('status', 1)
            ->first();
    }
}
