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

REMOTE="${ZICBOARD_UPDATE_REMOTE:-origin}"
BRANCH="${ZICBOARD_UPDATE_BRANCH:-$(git rev-parse --abbrev-ref HEAD)}"
if [ "$BRANCH" = "HEAD" ] || [ -z "$BRANCH" ]; then
  BRANCH="master"
fi
TARGET="${REMOTE}/${BRANCH}"

echo "Dang cap nhat ZicBoard tu ${TARGET} va xoa moi thay doi local khong nam trong .gitignore..."
git fetch "$REMOTE" --prune
if ! git rev-parse --verify "$TARGET" >/dev/null 2>&1; then
  echo "Khong tim thay nhanh remote: ${TARGET}"
  exit 1
fi
git reset --hard "$TARGET"
git clean -fd

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
  PHP_MAJOR="$(php -r 'echo PHP_MAJOR_VERSION;' 2>/dev/null || echo 0)"
  case "$PHP_MAJOR" in
    ''|*[!0-9]*) PHP_MAJOR=0 ;;
  esac

  if [ "$PHP_MAJOR" -lt 8 ]; then
    echo "Bo qua Webman: PHP CLI hien tai la ${PHP_MAJOR}, Webman chi bat khi PHP >= 8."
  else
    WEBMAN_READY="$(php -r '$autoload = getcwd() . "/vendor/autoload.php"; if (!is_file($autoload)) { echo "0"; exit; } require $autoload; echo (class_exists("Adapterman\\Adapterman") && class_exists("Workerman\\Worker")) ? "1" : "0";' 2>/dev/null || echo 0)"
    if [ "$WEBMAN_READY" = "1" ]; then
      echo "Đang khởi động lại dịch vụ Webman..."
      php -c cli-php.ini webman.php stop || true
      php -c cli-php.ini webman.php start -d
    else
      echo "Bo qua Webman: thieu Adapterman/Workerman trong vendor."
    fi
  fi
fi

if [ "$(id -u)" -eq 0 ]; then
  if getent passwd www >/dev/null 2>&1; then
    chown -R www:www storage bootstrap/cache config/theme public/theme .zicboard
  elif getent passwd www-data >/dev/null 2>&1; then
    chown -R www-data:www-data storage bootstrap/cache config/theme public/theme .zicboard
  fi
fi

echo "Cập nhật hoàn tất."
