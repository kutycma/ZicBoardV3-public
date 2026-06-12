<?php

declare(strict_types=1);

namespace App\Http\Controllers\V1\Client;

use App\Http\Controllers\Controller;
use App\Support\ZicvpnConfigEnvelope;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

/**
 * Endpoint MỚI (add-only): trả về subscribe đã mã hóa thành phong bì ZICV1.
 *
 * Nguyên tắc cô lập (Requirement 12):
 *  - KHÔNG sửa ClientController::subscribe hiện có.
 *  - Gọi lại logic subscribe cũ theo kiểu CHỈ-ĐỌC để lấy plaintext, rồi bọc mã hóa.
 *  - Giữ nguyên header subscription-userinfo (chỉ lộ traffic/expiry, không lộ IP).
 *  - Endpoint cũ (client/subscribe) giữ nguyên đường dẫn/tham số/định dạng/hành vi.
 *
 * Route: GET /api/v3/client/zicvpn/sub?token=...&flag=zicvpn&core=xray|mihomo
 * Middleware: 'client' (giống endpoint subscribe cũ — token query, không login),
 *             middleware này đã resolve token -> $request->user.
 */
class ZicvpnEncryptedSubscribeController extends Controller
{
    public function sub(Request $request): SymfonyResponse
    {
        $token = (string)$request->query('token', '');
        if ($token === '') {
            // Middleware 'client' thường đã chặn thiếu token; guard phòng hờ.
            return response('token is required', 400);
        }

        // Gọi lại CHÍNH logic subscribe hiện có (chỉ-đọc) để dựng plaintext + header.
        $result = $this->callExistingSubscribe($request);

        // subscribe() trả null khi user không khả dụng (hết hạn/ban) -> giữ nguyên hành vi.
        if ($result === null) {
            return response('', 200);
        }

        // Chuẩn hóa kết quả về [plaintext, subscription-userinfo].
        $plaintext = '';
        $userInfo = null;

        if ($result instanceof SymfonyResponse) {
            $status = $result->getStatusCode();
            // Nếu logic cũ trả lỗi (vd token sai) -> chuyển nguyên trạng, không mã hóa.
            if ($status < 200 || $status >= 300) {
                return $result;
            }
            $plaintext = (string)$result->getContent();
            $userInfo = $result->headers->get('subscription-userinfo');
        } else {
            // Đa số protocol trả chuỗi body và phát header qua header().
            $plaintext = (string)$result;
        }

        // Các protocol cũ phát header subscription-userinfo qua hàm header();
        // đọc lại từ danh sách header đã phát để giữ nguyên trên phản hồi mã hóa.
        if ($userInfo === null) {
            $userInfo = $this->readEmittedHeader('subscription-userinfo');
        }

        // Bọc plaintext thành phong bì ZICV1 (khóa dẫn từ token).
        $sealed = ZicvpnConfigEnvelope::seal($plaintext, $token);

        $response = response($sealed, 200)
            ->header('Content-Type', 'text/plain; charset=utf-8')
            ->header('X-Zicvpn-Enc', 'ZICV1');

        if ($userInfo !== null && $userInfo !== '') {
            $response->header('subscription-userinfo', $userInfo);
        }

        return $response;
    }

    /**
     * Tái dùng logic subscribe hiện có (CHỈ-ĐỌC).
     *
     * Đây là điểm DUY NHẤT nối với code cũ; giữ nó là một lời gọi mỏng để không
     * lặp lại/đổi hành vi logic subscribe gốc. $request đã mang token/flag/core
     * và $request->user do middleware 'client' set.
     *
     * @return SymfonyResponse|string|null
     */
    private function callExistingSubscribe(Request $request)
    {
        return (new ClientController())->subscribe($request);
    }

    /**
     * Đọc lại giá trị một header đã được phát qua hàm header() (pattern V2Board).
     */
    private function readEmittedHeader(string $name): ?string
    {
        if (!function_exists('headers_list')) {
            return null;
        }
        $needle = strtolower($name) . ':';
        foreach (headers_list() as $line) {
            if (stripos($line, $needle) === 0) {
                return trim(substr($line, strlen($needle)));
            }
        }
        return null;
    }
}
