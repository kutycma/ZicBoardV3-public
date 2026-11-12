# Hướng Dẫn Cài ZicBoard Free Edition Setup Trên aaPanel

Tài liệu này dành cho người dùng ZicBoard Free Edition (panel 3.2.0, core 0.3.0). Không cần mua, nhập key hay kích hoạt. Installer tải core từ GitHub Releases chính thức của kutycma/ZicBoardV3-public và kiểm tra checksum, chữ ký.

Nguồn tham khảo aaPanel chính thức:

- https://www.aapanel.com/docs/guide/quickstart.html
- https://www.aapanel.com/new/download.html

## 1. Yêu Cầu Trước Khi Cài

Chuẩn bị:

- VPS mới, khuyến nghị Ubuntu 22.04 64-bit.
- RAM tối thiểu 2 GB. Nếu ít hơn, Composer có thể lỗi thiếu RAM.
- Quyền root SSH.
- Domain đã trỏ A record về IP VPS, ví dụ `panel.example.com`.
- Repo public chính thức: https://github.com/kutycma/ZicBoardV3-public.
- VPS phải truy cập HTTPS outbound tới GitHub Releases và máy chủ tải asset của GitHub.

Port nên mở:

```text
80      HTTP
443     HTTPS
22      SSH, có thể đổi port nếu muốn
31750   aaPanel, tùy port aaPanel in ra sau khi cài
```

Không mở port `18080` ra internet. Đây là cổng local của `zicboard-core`.

## 2. Cài aaPanel

SSH vào VPS:

```bash
ssh root@YOUR_SERVER_IP
```

Cập nhật hệ thống:

```bash
apt update && apt upgrade -y
apt install -y curl wget git unzip ca-certificates
```

Cài aaPanel bằng lệnh official:

```bash
URL=https://www.aapanel.com/script/install_panel_en.sh && if [ -f /usr/bin/curl ];then curl -ksSO "$URL" ;else wget --no-check-certificate -O install_panel_en.sh "$URL";fi;bash install_panel_en.sh forum
```

Khi hỏi:

```text
Do you want to install aaPanel to the /www directory now?(y/n):
```

Nhập:

```text
y
```

Sau khi cài xong, aaPanel sẽ in ra URL đăng nhập, username và password. Lưu lại thông tin này.

Nếu quên thông tin đăng nhập:

```bash
bt default
```

Nếu cần đổi mật khẩu aaPanel:

```bash
bt 5
```

## 3. Cài Web Stack Trong aaPanel

Đăng nhập aaPanel, vào `App Store`, cài:

- Nginx 1.22 hoặc mới hơn;
- MySQL 5.7 hoặc MySQL 8.0;
- **PHP 7.4** hoặc **PHP 8.1** (Khuyến nghị PHP 8.1, nhưng PHP 7.4 hoàn toàn tương thích và được hỗ trợ);
- Redis;
- phpMyAdmin, tùy chọn;
- Supervisor Manager, khuyến nghị để chạy queue.

> [!NOTE]
> Các hướng dẫn dưới đây sử dụng PHP 8.1 (`81`). Nếu bạn sử dụng **PHP 7.4**, hãy thay thế tất cả ký tự `81` thành `74` (Ví dụ: từ `php/81` thành `php/74`).

Trong `App Store -> PHP 8.1 (hoặc 7.4) -> Install extensions`, bật:

```text
fileinfo
redis
opcache
intl
mbstring
mysqli
pdo_mysql
curl
openssl
sodium
zip
bcmath
exif
gd
pcntl
```

Nếu extension `pcntl` không có trong giao diện aaPanel thì bỏ qua trước, nhưng Horizon queue có thể cần cấu hình thêm.

Trong `PHP 8.1 (hoặc 7.4) -> Disabled functions`, nếu có các function sau thì gỡ khỏi danh sách disabled:

```text
proc_open
proc_get_status
putenv
shell_exec
exec
pcntl_signal
pcntl_alarm
pcntl_fork
```

Restart PHP sau khi chỉnh extension hoặc disabled functions.

## 4. Cấu Hình PHP CLI Và Composer

SSH vào server, kiểm tra PHP:

```bash
php -v
```

Nếu PHP CLI chưa khớp với phiên bản PHP của aaPanel bạn muốn dùng:

* **Đối với PHP 8.1**:
  ```bash
  ln -sf /www/server/php/81/bin/php /usr/bin/php
  ```
* **Đối với PHP 7.4**:
  ```bash
  ln -sf /www/server/php/74/bin/php /usr/bin/php
  ```

Kiểm tra lại phiên bản hoạt động:
```bash
php -v
```

Cài Composer:

```bash
php -r "copy('https://getcomposer.org/composer-stable.phar', 'composer.phar');"
mv composer.phar /usr/local/bin/composer
chmod +x /usr/local/bin/composer
composer --version
```

Nếu Composer chạy chậm hoặc lỗi memory, khi cài ZicBoard có thể dùng:

```bash
export COMPOSER_MEMORY_LIMIT=-1
```

## 5. Tạo Website Và Database Trong aaPanel

Trong aaPanel:

1. Vào `Website`.
2. Chọn `Add site`.
3. Nhập domain, ví dụ `panel.example.com`.
4. Chọn PHP 8.1.
5. Tạo database MySQL kèm website.

Ghi lại thông tin database:

```text
Database name
Database username
Database password
```

Ví dụ đường dẫn site:

```text
/www/wwwroot/panel.example.com
```

## 6. Tải Source ZicBoard Public

SSH vào server:

```bash
cd /www/wwwroot
```

Nếu aaPanel đã tạo sẵn thư mục domain, backup thư mục đó:

```bash
mv panel.example.com panel.example.com.default.$(date +%Y%m%d%H%M%S)
```

Clone repo public:

```bash
git clone https://github.com/kutycma/ZicBoardV3-public.git panel.example.com
cd panel.example.com
```

Nếu nhận file zip:

```bash
mkdir -p /www/wwwroot/panel.example.com
unzip zicboard-public.zip -d /www/wwwroot/panel.example.com
cd /www/wwwroot/panel.example.com
```

Trong thư mục ZicBoard phải có các file:

```text
artisan
composer.json
composer.lock
install.sh
update.sh
manifest.json
public/
```

Không cần có `core/` hoặc `license-server/`.

## 7. Chạy Cài Đặt ZicBoard

Chạy bằng root để installer tự tạo systemd service cho core:

```bash
cd /www/wwwroot/panel.example.com
bash install.sh
```

Installer sẽ:

- cài đúng PHP dependency đã khóa trong `composer.lock`;
- tạo thư mục runtime;
- chạy trình cài đặt ZicBoard;
- yêu cầu nhập database;
- tải core từ GitHub Releases chính thức (tag `core-v0.3.0`);
- tải `bin/zicboard-core`;
- verify checksum và chữ ký;
- tạo `zicboard-core.service`;
- tạo health timer tự kiểm tra core mỗi phút;
- health check core.

Sau khi cài, tất cả tính năng đều được bật miễn phí. Core service cần hoạt động để phục vụ các thao tác sử dụng core.

Khi trình cài hỏi database, nhập:

```text
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=<database name đã tạo>
DB_USERNAME=<database username đã tạo>
DB_PASSWORD=<database password đã tạo>
```


Sau khi cài xong:

```bash
cd /www/wwwroot/panel.example.com
bash scripts/runtime-permissions.sh finalize
bash scripts/core-service.sh
systemctl restart zicboard-core
```

## 8. Cấu Hình Website Root Là `public/`

Đây là bước quan trọng nhất.

Trong aaPanel:

1. Vào `Website`.
2. Chọn site ZicBoard.
3. Vào `Site directory`.
4. Đặt `Running directory` là:

```text
/public
```

Nếu aaPanel yêu cầu đường dẫn đầy đủ:

```text
/www/wwwroot/panel.example.com/public
```

Không trỏ website vào thư mục root `/www/wwwroot/panel.example.com`, vì như vậy có nguy cơ lộ `.env`, `storage/`, `bin/` và file cấu hình.

## 9. Cấu Hình URL Rewrite

Trong aaPanel:

1. Vào site ZicBoard.
2. Chọn `URL rewrite`.
3. Chọn Laravel nếu có template sẵn.

Nếu cần nhập thủ công:

```nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}

location ~ /\.(?!well-known).* {
    deny all;
}
```

Restart Nginx sau khi lưu.

## 10. Bật SSL

Trong aaPanel:

1. Vào `Website -> SSL`.
2. Chọn Let's Encrypt.
3. Issue certificate.
4. Bật force HTTPS.

Cập nhật `APP_URL`:

```bash
cd /www/wwwroot/panel.example.com
sed -i 's|^APP_URL=.*|APP_URL=https://panel.example.com|' .env
php artisan config:clear
```

## 11. Cài Cron Scheduler

Trong aaPanel:

1. Vào `Cron`.
2. Add task.
3. Type: `Shell Script`.
4. Cycle: mỗi 1 phút.
5. Script:

```bash
# Thay /81/ bằng /74/ nếu sử dụng PHP 7.4
cd /www/wwwroot/panel.example.com && /www/server/php/81/bin/php artisan schedule:run >> /dev/null 2>&1
```

Lưu và chạy thử một lần.

## 12. Cài Queue Horizon

Nếu có Supervisor Manager:

```text
Name: zicboard-horizon
Run user: www
Run directory: /www/wwwroot/panel.example.com
Start command: /www/server/php/81/bin/php artisan horizon (Thay /81/ bằng /74/ nếu sử dụng PHP 7.4)
Processes: 1
Auto start: yes
```

Nếu không dùng Supervisor Manager, tạo systemd service:

```bash
# Nhớ thay thế /81/ bằng /74/ trong đường dẫn ExecStart dưới đây nếu bạn dùng PHP 7.4
cat >/etc/systemd/system/zicboard-horizon.service <<'EOF'
[Unit]
Description=ZicBoard Horizon Queue
After=network.target redis.service

[Service]
Type=simple
User=www
Group=www
WorkingDirectory=/www/wwwroot/panel.example.com
ExecStart=/www/server/php/81/bin/php artisan horizon
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable --now zicboard-horizon
```

## 13. Kiểm Tra Sau Khi Cài

Kiểm tra core:

```bash
systemctl status zicboard-core --no-pager
systemctl status zicboard-core-health.timer --no-pager
curl http://127.0.0.1:18080/health
bin/zicboard-core status
php scripts/core-installer.php status
```

Kết quả `/health` phải có `status` là `ok` hoặc `degraded` và `schema_version=1`.
Trạng thái core và tính năng kiểm tra bằng RPC đã xác thực:

```bash
php artisan zicboard:core:doctor
```

Kiểm tra web:

```bash
curl -I https://panel.example.com
tail -n 100 storage/logs/laravel.log
```

Kiểm tra scheduler và queue:

```bash
systemctl status zicboard-horizon --no-pager
```

Nếu dùng Supervisor Manager, kiểm tra trạng thái trong aaPanel.

## 14. Cập Nhật ZicBoard

Backup database, .env và cấu hình trước khi update. Bản 3.1.x phải chạy update.sh trước hạn tắt server cũ; xem [thông báo chuyển đổi](THONG-BAO-FREE-EDITION.md).

Sau đó chạy:

```bash
cd /www/wwwroot/panel.example.com
bash update.sh
```

Script update sẽ:

- kéo code mới bằng `git pull --ff-only`;
- cài dependency;
- chạy update command;
- tải core mới nếu version yêu cầu thay đổi;
- verify chữ ký;
- restart core;
- rollback core nếu health check lỗi.

Sau update:

```bash
php artisan config:clear
php artisan cache:clear
systemctl restart zicboard-horizon || true
```

## 15. Lỗi Thường Gặp

### PHP command not found

```bash
ln -sf /www/server/php/81/bin/php /usr/bin/php
php -v
```

### Composer báo thiếu extension

Bật extension thiếu trong aaPanel `PHP 8.1 -> Install extensions`, restart PHP rồi chạy lại:

```bash
composer install --no-dev --optimize-autoloader
```

### Composer command not found

Installer không tự tải `composer.phar`. Cài Composer trước rồi chạy lại:

```bash
php -r "copy('https://getcomposer.org/composer-stable.phar', 'composer.phar');"
mv composer.phar /usr/local/bin/composer
chmod +x /usr/local/bin/composer
composer --version
```

### Thiếu composer.lock

Bản public bắt buộc phải có `composer.lock`. Nếu thiếu file này, dừng cài đặt và tải lại gói public chính thức có dependency đã khóa. Không tự resolve dependency trực tiếp trên máy khách.

### Không tải được core hoặc core không chạy

Kiểm tra kết nối HTTPS tới GitHub Releases, kiến trúc máy (amd64/arm64), dung lượng đĩa và log:

```bash
php scripts/core-installer.php status
curl http://127.0.0.1:18080/health
journalctl -u zicboard-core -n 100 --no-pager
```

Không bỏ qua kiểm tra chữ ký/checksum. Chỉ tải binary từ GitHub Releases chính thức. Không cần reset activation khi chuyển VPS; sao lưu cấu hình và database trước khi chuyển.

### Website báo 500

```bash
tail -n 200 storage/logs/laravel.log
cd /www/wwwroot/panel.example.com
bash scripts/runtime-permissions.sh finalize
bash scripts/core-service.sh
systemctl restart zicboard-core
php artisan config:clear
php artisan cache:clear
```

### Truy cập thấy danh sách file hoặc lỗi 403

Kiểm tra lại `Running directory`. Phải là `/public`.

## 16. Checklist Bàn Giao

Sau khi cài xong cần đạt:

- Domain chạy HTTPS.
- Web root trỏ vào `public/`.
- `.env` không truy cập được qua trình duyệt.
- `bin/`, `storage/`, `.zicboard/` không truy cập được qua trình duyệt.
- `zicboard-core.service` đang running.
- `zicboard-core-health.timer` đang active và kiểm tra mỗi phút.
- `/health` local trả JSON hợp lệ với `status=ok|degraded`; `zicboard:core:doctor` pass.
- Cron scheduler chạy mỗi phút.
- Horizon queue đang chạy.
- Database đã backup.
- Core tải từ nguồn chính thức, checksum và chữ ký hợp lệ.
