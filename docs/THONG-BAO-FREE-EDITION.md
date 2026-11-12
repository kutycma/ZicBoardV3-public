# ZicBoard chuyển sang Free Edition

ZicBoard panel 3.2.0 và core 0.3.0 được sử dụng miễn phí, kể cả vận hành thương mại panel của bạn. Không cần mua, gia hạn, nhập license key hay kích hoạt. Tất cả tính năng được bật cho mọi người, bao gồm AnyTLS, Reality, xhttp, encryption, ECH, HWID/device mapping và mã hóa Happ.

Panel PHP, cấu hình, UI đã biên dịch và script dùng GPL-3.0; giữ nguyên thông báo MIT của Xiao V2Board. Core vẫn đóng mã nguồn và dùng giấy phép freeware riêng: chỉ tải từ GitHub Releases chính thức, không phân phối lại hoặc mirror. Xem [LICENSE](../LICENSE) và [LICENSE-CORE.md](../LICENSE-CORE.md).

## Khách hàng đang sử dụng bản cũ phải cập nhật

Server license cũ sẽ ngừng hoạt động vào **12/02/2027** (3 tháng sau ngày phát hành Free Edition). Các license đang active được gia hạn đến ngày tắt server để có thời gian chuyển đổi.

Trước thời hạn trên, sao lưu database, .env và cấu hình, rồi chạy trong thư mục panel:

```bash
bash update.sh
```

Script cập nhật panel và thay core cũ bằng core miễn phí từ [GitHub Releases chính thức](https://github.com/kutycma/ZicBoardV3-public/releases). Không cần nhập key. Chỉ chạy lệnh Artisan hoặc chép file PHP sẽ không hoàn tất chuyển đổi core.

Sau cập nhật, kiểm tra:

```bash
php scripts/core-installer.php status
php artisan zicboard:core:doctor
```

Nếu vẫn chạy panel 3.1.x/core 0.2.x khi server license tắt, các tính năng được bảo vệ của bản cũ sẽ ngừng hoạt động vì không thể làm mới quyền sử dụng. Hãy hoàn tất cập nhật và kiểm tra trước thời hạn; không chờ tới ngày tắt server.

## Chính sách đối với khoản thanh toán trước đây

ZicBoard không hoàn tiền cho các license đã mua trước đây. License đang active được tiếp tục gia hạn đến ngày tắt server license, và từ phiên bản 3.2.0 mọi tính năng đều được dùng miễn phí.