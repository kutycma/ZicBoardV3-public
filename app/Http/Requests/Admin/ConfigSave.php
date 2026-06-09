<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ConfigSave extends FormRequest
{
    const RULES = [
        // deposit
        'deposit_bounus' => [
            'nullable',
            'array',
        ],
        // invite & commission
        'ticket_status' => 'in:0,1,2',
        'invite_force' => 'in:0,1',
        'invite_commission' => 'integer',
        'invite_gen_limit' => 'integer',
        'invite_never_expire' => 'in:0,1',
        'commission_first_time_enable' => 'in:0,1',
        'commission_auto_check_enable' => 'in:0,1',
        'commission_withdraw_limit' => 'nullable|numeric',
        'commission_withdraw_method' => 'nullable|array',
        'withdraw_close_enable' => 'in:0,1',
        'commission_distribution_enable' => 'in:0,1',
        'commission_distribution_l1' => 'nullable|numeric',
        'commission_distribution_l2' => 'nullable|numeric',
        'commission_distribution_l3' => 'nullable|numeric',
        // site
        'logo' => 'nullable|url',
        'force_https' => 'in:0,1',
        'stop_register' => 'in:0,1',
        'app_name' => '',
        'app_description' => '',
        'app_url' => 'nullable|url',
        'subscribe_url' => 'nullable',
        'webcon_shared_subscribe_url_enable' => 'in:0,1',
        'subscribe_path' => 'nullable|regex:/^\\//',
        'try_out_enable' => 'in:0,1',
        'try_out_plan_id' => 'integer',
        'try_out_hour' => 'numeric',
        'tos_url' => 'nullable|url',
        'currency' => '',
        'currency_symbol' => '',
        // subscribe
        'multiple_subscription_enable' => 'in:0,1',
        'plan_change_enable' => 'in:0,1',
        'device_hwid_enable' => 'in:0,1',
        'happ_subscribe_encrypt_enable' => 'in:0,1',
        'happ_profile_title' => 'nullable|string',
        'happ_hide_settings_enable' => 'in:0,1',
        'happ_announce_enable' => 'in:0,1',
        'happ_provider_id' => 'nullable|string',
        'happ_color_profile' => 'nullable|string',
        'happ_ping_type' => 'nullable|in:proxy,proxy-head,tcp,icmp',
        'happ_check_url' => 'nullable|url',
        'change_sni_enable' => 'in:0,1',
        'reset_traffic_method' => 'in:0,1,2,3,4',
        'surplus_enable' => 'in:0,1',
        'allow_new_period' => 'in:0,1',
        'new_order_event_id' => 'in:0,1',
        'renew_order_event_id' => 'in:0,1',
        'change_order_event_id' => 'in:0,1',
        'show_info_to_server_enable' => 'in:0,1',
        'show_subscribe_method' => 'in:0,1,2',
        'show_subscribe_expire' => 'nullable|integer',
        'subscribe_url_ua_enable' => 'in:0,1',
        'subscribe_url_allowed_ua' => 'nullable|string',
        // server
        'server_api_url' => 'nullable|string',
        'server_token' => 'nullable|min:16',
        'server_pull_interval' => 'integer',
        'server_push_interval' => 'integer',
        'device_limit_mode' => 'in:0,1',
        'server_node_report_min_traffic' => 'integer',
        'server_device_online_min_traffic' => 'integer',
        'zicnode_auto_tls_enable' => 'in:0,1',
        'zicnode_auto_tls_dns_provider' => 'nullable|string',
        'zicnode_auto_tls_dns_env' => 'nullable|string',
        'zicnode_auto_tls_self_fallback' => 'in:0,1',
        // frontend
        'frontend_theme' => '',
        'frontend_theme_sidebar' => 'nullable|in:dark,light',
        'frontend_theme_header' => 'nullable|in:dark,light',
        'frontend_theme_color' => 'nullable|in:default,darkblue,black,green',
        'frontend_background_url' => 'nullable|url',
        // email
        'email_template' => '',
        'email_host' => '',
        'email_port' => '',
        'email_username' => '',
        'email_password' => '',
        'email_encryption' => '',
        'email_from_address' => '',
        // telegram
        'telegram_bot_enable' => 'in:0,1',
        'telegram_bot_token' => '',
        'telegram_discuss_id' => '',
        'telegram_channel_id' => '',
        'telegram_discuss_link' => 'nullable|url',
        // app
        'windows_version' => '',
        'windows_download_url' => '',
        'macos_version' => '',
        'macos_download_url' => '',
        'android_version' => '',
        'android_download_url' => '',
        // safe
        'email_whitelist_enable' => 'in:0,1',
        'email_whitelist_suffix' => 'nullable|array',
        'email_gmail_limit_enable' => 'in:0,1',
        'recaptcha_enable' => 'in:0,1',
        'recaptcha_key' => '',
        'recaptcha_site_key' => '',
        'email_verify' => 'in:0,1',
        'safe_mode_enable' => 'in:0,1',
        'register_limit_by_ip_enable' => 'in:0,1',
        'register_limit_count' => 'integer',
        'register_limit_expire' => 'integer',
        'secure_path' => 'min:8|regex:/^[\w-]*$/',
        'staff_path' => 'min:5|regex:/^[\w-]*$/',
        'password_limit_enable' => 'in:0,1',
        'password_limit_count' => 'integer',
        'password_limit_expire' => 'integer',
    ];

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = self::RULES;

        $rules['deposit_bounus'][] = function ($attribute, $value, $fail) {
            if (!is_array($value)) {
                return;
            }

            foreach ($value as $tier) {
                if (!preg_match('/^\d+(\.\d+)?:\d+(\.\d+)?$/', $tier)) {
                    if ($tier == '') {
                        continue;
                    }
                    $fail('Thưởng nạp tiền không đúng định dạng, phải theo dạng số tiền nạp:số tiền thưởng');
                }
            }
        };

        return $rules;
    }

    public function messages()
    {
        return [
            'app_url.url' => 'URL website không đúng định dạng, phải có http(s)://',
            'subscribe_url.url' => 'URL đăng ký không đúng định dạng, phải có http(s)://',
            'subscribe_path.regex' => 'Đường dẫn đăng ký phải bắt đầu bằng /',
            'server_token.min' => 'Khóa liên lạc phải dài hơn 16 ký tự',
            'tos_url.url' => 'URL điều khoản dịch vụ không đúng định dạng, phải có http(s)://',
            'telegram_discuss_link.url' => 'Địa chỉ nhóm Telegram phải là URL, phải có http(s)://',
            'logo.url' => 'LOGO URL không đúng định dạng, phải có http(s)://',
            'secure_path.min' => 'Đường dẫn admin tối thiểu 8 ký tự',
            'secure_path.regex' => 'Đường dẫn admin chỉ được gồm chữ cái, số, gạch dưới hoặc gạch ngang',
        ];
    }
}
