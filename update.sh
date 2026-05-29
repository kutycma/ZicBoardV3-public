#!/bin/bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

if [ ! -d ".git" ]; then
  echo "Vui lòng triển khai bằng Git và chạy script này từ thư mục gốc dự án."
  exit 1
fi

if ! command -v git >/dev/null 2>&1; then
  echo "Git chưa được cài đặt."
  exit 1
fi

echo "Đang cập nhật ZicBoard bằng git pull --ff-only..."
git pull --ff-only

if command -v composer >/dev/null 2>&1; then
  COMPOSER_CMD="composer"
else
  echo "Composer chưa được cài đặt hoặc không có trong PATH."
  exit 1
fi

if [ ! -f "composer.lock" ]; then
  echo "Thiếu composer.lock. Gói thương mại phải được phát hành với bộ thư viện phụ thuộc đã khóa phiên bản."
  exit 1
fi

echo "Đang cài các thư viện PHP từ composer.lock..."
$COMPOSER_CMD install --no-dev --optimize-autoloader --no-interaction

if [ -f "artisan" ]; then
  php artisan zicboard:update
fi

echo "Đang chuẩn bị các thư mục vận hành..."
mkdir -p storage bootstrap/cache config/theme public/theme bin .zicboard/core
chmod -R 775 storage bootstrap/cache config/theme public/theme bin .zicboard || true

echo "Đang cập nhật zicboard-core nếu cần..."
php scripts/core-installer.php update

if [ "$(uname -s)" = "Linux" ] && command -v systemctl >/dev/null 2>&1; then
  if systemctl list-unit-files | grep -q '^zicboard-core\.service'; then
    systemctl restart zicboard-core
    if ! php scripts/core-installer.php health; then
      echo "Kiểm tra tình trạng hoạt động của core thất bại sau cập nhật, đang khôi phục file chạy..."
      php scripts/core-installer.php rollback
      systemctl restart zicboard-core
      php scripts/core-installer.php health
    fi
  else
    echo "Chưa cài zicboard-core.service; bỏ qua bước khởi động lại dịch vụ."
  fi
fi

if [ -f "webman.php" ]; then
  echo "Đang khởi động lại dịch vụ Webman..."
  php -c cli-php.ini webman.php stop || true
  php -c cli-php.ini webman.php start -d
fi

if [ "$(id -u)" -eq 0 ]; then
  if getent passwd www >/dev/null 2>&1; then
    chown -R www:www storage bootstrap/cache config/theme public/theme .zicboard
  elif getent passwd www-data >/dev/null 2>&1; then
    chown -R www-data:www-data storage bootstrap/cache config/theme public/theme .zicboard
  fi
fi

echo "Cập nhật hoàn tất."
