<?php

namespace App\Payments;

use App\Models\Order;

/** VPBank FCM gateway: verification only; activation stays in the payment controller. */
class FCM_vpbank
{
    private const BANK_BIN = '970432';

    protected $config;

    public function __construct($config)
    {
        $this->config = $config;
    }

    public function form()
    {
        $fields = [
            'account_no' => ['Số tài khoản nhận', 'Số tài khoản đầy đủ, chỉ gồm chữ số; ví dụ 22928081994.', ''],
            'account_name' => ['Tên chủ tài khoản', 'Tên người nhận để quản trị viên đối chiếu, ví dụ NGUYEN VAN QUANG; không ghi vào QR.', ''],
            'content_prefix' => ['Tiền tố chuyển khoản', 'Bắt buộc 2–10 ký tự A-Z hoặc 0-9; tự chuyển thành chữ hoa. Ví dụ ZBV tạo mã ZBV1234 cho đơn 1234.', ''],
            'webhook_secret' => ['Khóa HMAC webhook', 'Dán secret của route vpb-gateway, dài ≥ 32 ký tự. Tải lại trang admin trước khi sửa cổng; giữ bí mật khóa.', ''],
            'allowed_accounts' => ['Tài khoản webhook được phép', 'Tùy chọn: các số tài khoản hoặc dạng che như XXXXXX1994, cách nhau bằng dấu phẩy. So khớp chính xác (không phân biệt hoa/thường); để trống để bỏ kiểm tra.', ''],
        ];
        $form = [];
        foreach ($fields as $key => $field) {
            $form[$key] = ['label' => $field[0], 'description' => $field[1], 'type' => 'input'];
        }
        return $form;
    }

    private function prefix()
    {
        $prefix = strtoupper(trim((string) ($this->config['content_prefix'] ?? '')));
        if (!preg_match('/\A[A-Z0-9]{2,10}\z/', $prefix)) {
            throw new \InvalidArgumentException('Tiền tố chuyển khoản phải gồm 2–10 ký tự A-Z hoặc 0-9.');
        }
        return $prefix;
    }

    private function amount($minor)
    {
        if (!is_numeric($minor) || $minor <= 0 || $minor > PHP_INT_MAX - 99) {
            throw new \InvalidArgumentException('Số tiền phải là số dương hợp lệ.');
        }
        return (string) intdiv((int) $minor + 99, 100);
    }

    private function field($tag, $value)
    {
        if (strlen($value) > 99) throw new \InvalidArgumentException('Trường VietQR quá dài.');
        return $tag . sprintf('%02d', strlen($value)) . $value;
    }

    public function pay($order)
    {
        $bin = self::BANK_BIN;
        $account = trim((string) ($this->config['account_no'] ?? ''));
        $id = (string) ($order['order_id'] ?? '');
        if (!preg_match('/\A[0-9]{6}\z/', $bin) || !preg_match('/\A[0-9]{1,30}\z/', $account)
            || !preg_match('/\A[1-9][0-9]{0,9}\z/', $id)) {
            throw new \InvalidArgumentException('BIN, số tài khoản hoặc mã đơn không hợp lệ.');
        }
        // User OrderController already includes handling_amount in this value.
        $amount = $this->amount($order['total_amount']);
        $beneficiary = $this->field('00', $bin) . $this->field('01', $account);
        $merchant = $this->field('00', 'A000000727') . $this->field('01', $beneficiary) . $this->field('02', 'QRIBFTTA');
        $payload = $this->field('00', '01') . $this->field('01', '12') . $this->field('38', $merchant)
            . $this->field('53', '704') . $this->field('54', $amount) . $this->field('58', 'VN')
            . $this->field('62', $this->field('08', $this->prefix() . $id)) . '6304';
        $crc = 0xFFFF;
        foreach (unpack('C*', $payload) as $byte) {
            $crc ^= $byte << 8;
            for ($i = 0; $i < 8; $i++) {
                $crc = (($crc << 1) ^ (($crc & 0x8000) ? 0x1021 : 0)) & 0xFFFF;
            }
        }
        return ['type' => 0, 'data' => $payload . sprintf('%04X', $crc)];
    }

    public function notify($params)
    {
        // Laravel's request bound by Http Kernel, including under Adapterman (start.php).
        $request = request();
        $raw = $request->getContent();
        $timestamp = (string) $request->header('X-VPG-Timestamp', '');
        $signature = (string) $request->header('X-VPG-Signature', '');
        $secret = (string) ($this->config['webhook_secret'] ?? '');
        if (strlen($secret) < 32 || !preg_match('/\A[0-9]{1,12}\z/', $timestamp)
            || abs(time() - (int) $timestamp) > 300
            || !hash_equals('sha256=' . hash_hmac('sha256', $timestamp . '.' . $raw, $secret), $signature)) {
            return false;
        }
        $event = json_decode($raw, true);
        if (!is_array($event) || ($event['type'] ?? null) !== 'transaction.matched'
            || ($event['simulated'] ?? null) !== false) return false;
        $tx = $event['transaction'] ?? null;
        if (!is_array($tx) || ($tx['direction'] ?? null) !== 'in' || ($tx['currency'] ?? null) !== 'VND'
            || !is_string($tx['uid'] ?? null) || trim($tx['uid']) === '') return false;
        try {
            $prefix = $this->prefix();
        } catch (\InvalidArgumentException $e) {
            return false;
        }
        if (!is_string($tx['code'] ?? null)
            || !preg_match('/\A' . preg_quote($prefix, '/') . '([1-9][0-9]{0,9})\z/', $tx['code'], $match)) return false;
        $allowed = array_filter(array_map('trim', explode(',', strtoupper((string) ($this->config['allowed_accounts'] ?? '')))), 'strlen');
        if ($allowed && (!is_string($tx['account'] ?? null) || !in_array(strtoupper(trim($tx['account'])), $allowed, true))) return false;
        $order = Order::find($match[1]);
        if (!$order) return false;
        // Prevent a callback for this route from activating an order using a different payment.
        if (isset($this->config['id']) && (string) $order->payment_id !== (string) $this->config['id']) return false;
        if (!in_array((int) $order->status, [0, 1, 3], true)) return false;
        try {
            $due = $this->amount($order->total_amount + ($order->handling_amount ?? 0));
        } catch (\InvalidArgumentException $e) {
            return false;
        }
        if (!is_int($tx['amount'] ?? null) || $tx['amount'] < (int) $due) return false;
        return ['trade_no' => $order->trade_no, 'callback_no' => $tx['uid']];
    }
}
