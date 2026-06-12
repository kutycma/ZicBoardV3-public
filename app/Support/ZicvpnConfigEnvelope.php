<?php

declare(strict_types=1);

namespace App\Support;

use RuntimeException;

/**
 * Tạo phong bì cấu hình mã hóa "ZICV1" mà app ZicVPN giải mã được.
 *
 * Định dạng (toàn bộ base64url):
 *   MAGIC "ZICV1"(5B) | version(1B)=1 | salt(16B) | nonce(12B) | ciphertext | tag(16B)
 *
 * - key        = HKDF-SHA256(ikm = token (UTF-8), salt = salt, info = "zicvpn-config-v1", len = 32)
 * - ciphertext = AES-256-GCM(key, nonce, plaintext, aad = "ZICV1")
 *
 * Phải khớp byte-for-byte với ConfigCryptoService phía app (ZicVPN).
 *
 * Add-only: lớp thuần PHP, không phụ thuộc framework, không sửa logic subscribe cũ.
 */
final class ZicvpnConfigEnvelope
{
    private const MAGIC = 'ZICV1';
    private const VERSION = 1;
    private const SALT_LEN = 16;
    private const NONCE_LEN = 12;
    private const TAG_LEN = 16;
    private const HKDF_INFO = 'zicvpn-config-v1';
    private const AAD = 'ZICV1';
    private const CIPHER = 'aes-256-gcm';

    /**
     * Bọc một chuỗi plaintext (nội dung subscribe gốc) thành chuỗi base64url
     * của phong bì ZICV1.
     *
     * @param string $plaintext Nội dung subscribe gốc (Xray JSON / Mihomo YAML / base64 sub).
     * @param string $token     Token subscribe, dùng làm IKM dẫn khóa.
     */
    public static function seal(string $plaintext, string $token): string
    {
        if ($token === '') {
            throw new RuntimeException('ZICV1: token rỗng.');
        }
        if (!function_exists('hash_hkdf')) {
            throw new RuntimeException('ZICV1: cần PHP hỗ trợ hash_hkdf (>= 7.1.2).');
        }
        if (!in_array(self::CIPHER, openssl_get_cipher_methods(), true)) {
            throw new RuntimeException('ZICV1: OpenSSL không hỗ trợ aes-256-gcm.');
        }

        $salt = random_bytes(self::SALT_LEN);
        $nonce = random_bytes(self::NONCE_LEN);

        return self::sealWith($plaintext, $token, $salt, $nonce);
    }

    /**
     * Bọc phong bì với salt/nonce cho trước. Dùng cho self-test / đối chiếu
     * test vector cố định. Production luôn dùng seal() (salt/nonce ngẫu nhiên).
     */
    public static function sealWith(string $plaintext, string $token, string $salt, string $nonce): string
    {
        if ($token === '') {
            throw new RuntimeException('ZICV1: token rỗng.');
        }
        if (strlen($salt) !== self::SALT_LEN) {
            throw new RuntimeException('ZICV1: salt phải đúng ' . self::SALT_LEN . ' byte.');
        }
        if (strlen($nonce) !== self::NONCE_LEN) {
            throw new RuntimeException('ZICV1: nonce phải đúng ' . self::NONCE_LEN . ' byte.');
        }

        // HKDF-SHA256: ikm = $token, salt = $salt, info = HKDF_INFO, len = 32.
        $key = hash_hkdf('sha256', $token, 32, self::HKDF_INFO, $salt);
        if ($key === false || strlen($key) !== 32) {
            throw new RuntimeException('ZICV1: HKDF thất bại.');
        }

        $tag = '';
        $ciphertext = openssl_encrypt(
            $plaintext,
            self::CIPHER,
            $key,
            OPENSSL_RAW_DATA,
            $nonce,
            $tag,
            self::AAD,
            self::TAG_LEN
        );
        if ($ciphertext === false || strlen($tag) !== self::TAG_LEN) {
            throw new RuntimeException('ZICV1: mã hóa AES-256-GCM thất bại.');
        }

        $envelope = self::MAGIC
            . chr(self::VERSION)
            . $salt
            . $nonce
            . $ciphertext
            . $tag;

        return self::base64UrlEncode($envelope);
    }

    /**
     * Giải mã (chỉ dùng để self-test phía backend, không bắt buộc cho production).
     */
    public static function open(string $payloadBase64Url, string $token): string
    {
        $bytes = self::base64UrlDecode($payloadBase64Url);
        $minLen = strlen(self::MAGIC) + 1 + self::SALT_LEN + self::NONCE_LEN + self::TAG_LEN;
        if ($bytes === null || strlen($bytes) < $minLen) {
            throw new RuntimeException('ZICV1: phong bì không hợp lệ.');
        }
        if (substr($bytes, 0, strlen(self::MAGIC)) !== self::MAGIC) {
            throw new RuntimeException('ZICV1: sai MAGIC.');
        }
        if (ord($bytes[strlen(self::MAGIC)]) !== self::VERSION) {
            throw new RuntimeException('ZICV1: sai version.');
        }

        $offset = strlen(self::MAGIC) + 1;
        $salt = substr($bytes, $offset, self::SALT_LEN);
        $offset += self::SALT_LEN;
        $nonce = substr($bytes, $offset, self::NONCE_LEN);
        $offset += self::NONCE_LEN;
        $rest = substr($bytes, $offset);
        $ciphertext = substr($rest, 0, strlen($rest) - self::TAG_LEN);
        $tag = substr($rest, strlen($rest) - self::TAG_LEN);

        $key = hash_hkdf('sha256', $token, 32, self::HKDF_INFO, $salt);
        $plaintext = openssl_decrypt(
            $ciphertext,
            self::CIPHER,
            $key,
            OPENSSL_RAW_DATA,
            $nonce,
            $tag,
            self::AAD
        );
        if ($plaintext === false) {
            throw new RuntimeException('ZICV1: giải mã thất bại (sai token hoặc dữ liệu hỏng).');
        }
        return $plaintext;
    }

    private static function base64UrlEncode(string $bin): string
    {
        // Giữ padding '='; app dùng base64Url.decode (chấp nhận '-_' và padding).
        return strtr(base64_encode($bin), '+/', '-_');
    }

    private static function base64UrlDecode(string $value): ?string
    {
        $std = strtr($value, '-_', '+/');
        $mod = strlen($std) % 4;
        if ($mod > 0) {
            $std .= str_repeat('=', 4 - $mod);
        }
        $decoded = base64_decode($std, true);
        return $decoded === false ? null : $decoded;
    }
}
