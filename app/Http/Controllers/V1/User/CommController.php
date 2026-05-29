<?php

namespace App\Http\Controllers\V1\User;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Utils\Dict;
use Illuminate\Http\Request;

class CommController extends Controller
{
    public function config()
    {
        return response([
            'data' => [
                'is_telegram' => (int)config('zicboard.telegram_bot_enable', 0),
                'telegram_discuss_link' => config('zicboard.telegram_discuss_link'),
                'stripe_pk' => config('zicboard.stripe_pk_live'),
                'withdraw_methods' => config('zicboard.commission_withdraw_method', Dict::WITHDRAW_METHOD_WHITELIST_DEFAULT),
                'withdraw_close' => (int)config('zicboard.withdraw_close_enable', 0),
                'currency' => config('zicboard.currency', 'VND'),
                'currency_symbol' => config('zicboard.currency_symbol', 'VND'),
                'device_hwid_enable' => (int)config('zicboard.device_hwid_enable', 1),
                'change_sni_enable' => (int)config('zicboard.change_sni_enable', 1),
                'commission_distribution_enable' => (int)config('zicboard.commission_distribution_enable', 0),
                'commission_distribution_l1' => config('zicboard.commission_distribution_l1'),
                'commission_distribution_l2' => config('zicboard.commission_distribution_l2'),
                'commission_distribution_l3' => config('zicboard.commission_distribution_l3')
            ]
        ]);
    }

    public function getStripePublicKey(Request $request)
    {
        $payment = Payment::where('id', $request->input('id'))
            ->where('payment', 'StripeCredit')
            ->first();
        if (!$payment) abort(500, 'Phương thức thanh toán không tồn tại');
        return response([
            'data' => $payment->config['stripe_pk_live']
        ]);
    }
}
