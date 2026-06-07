#!/bin/bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

if [ ! -f "artisan" ] || [ ! -f "composer.json" ]; then
  echo "Vui lòng chạy install.sh từ thư mục gốc của ZicBoard."
  exit 1
fi

if ! command -v php >/dev/null 2>&1; then
  echo "PHP chưa được cài đặt hoặc không có trong PATH."
  exit 1
fi

if command -v composer >/dev/null 2>&1; then
  COMPOSER_BIN="$(command -v composer)"
else
  echo "Composer chưa được cài đặt hoặc không có trong PATH."
  exit 1
fi

run_composer() {
  export COMPOSER_ALLOW_SUPERUSER=1
  local first_line
  first_line="$(head -n 1 "$COMPOSER_BIN" 2>/dev/null || true)"
  if printf '%s' "$first_line" | grep -qi 'php'; then
    php -d error_reporting="E_ALL & ~E_DEPRECATED & ~E_USER_DEPRECATED" "$COMPOSER_BIN" "$@"
  else
    "$COMPOSER_BIN" "$@"
  fi
}

if [ ! -f "composer.lock" ]; then
  echo "Thiếu composer.lock. Gói thương mại phải được phát hành với bộ thư viện phụ thuộc đã khóa phiên bản."
  exit 1
fi

echo "Đang cài các thư viện PHP từ composer.lock..."
bash scripts/runtime-permissions.sh prepare
run_composer install --no-dev --optimize-autoloader --no-interaction

echo "Đang chuẩn bị các thư mục cần quyền ghi..."
bash scripts/runtime-permissions.sh prepare

if [ ! -f ".env" ]; then
  echo "Đang chạy trình cài đặt ứng dụng ZicBoard..."
  php artisan zicboard:install
fi

if ! grep -q '^ZICBOARD_CORE_RPC_SECRET=' .env || grep -q '^ZICBOARD_CORE_RPC_SECRET=$' .env; then
  CORE_SECRET="$(php -r 'echo bin2hex(random_bytes(32));')"
  if grep -q '^ZICBOARD_CORE_RPC_SECRET=' .env; then
    sed -i "s|^ZICBOARD_CORE_RPC_SECRET=.*|ZICBOARD_CORE_RPC_SECRET=${CORE_SECRET}|" .env
  else
    printf '\nZICBOARD_CORE_RPC_SECRET=%s\n' "$CORE_SECRET" >> .env
  fi
else
  CORE_SECRET="$(grep '^ZICBOARD_CORE_RPC_SECRET=' .env | tail -n1 | cut -d= -f2-)"
fi

if ! grep -Eq '^ZICBOARD_LICENSE_KEY=.+' .env; then
  printf 'Nhập license key ZicBoard: '
  read -r LICENSE_KEY
  if [ -z "$LICENSE_KEY" ]; then
    echo "Bắt buộc nhập license key."
    exit 1
  fi
  if grep -q '^ZICBOARD_LICENSE_KEY=' .env; then
    sed -i "s|^ZICBOARD_LICENSE_KEY=.*|ZICBOARD_LICENSE_KEY=${LICENSE_KEY}|" .env
  else
    printf '\nZICBOARD_LICENSE_KEY=%s\n' "$LICENSE_KEY" >> .env
  fi
fi

echo "Đang cài zicboard-core..."
php scripts/core-installer.php install
php artisan zicboard:core:sync

if [ "$(uname -s)" = "Linux" ] && command -v systemctl >/dev/null 2>&1 && [ "$(id -u)" -eq 0 ]; then
  cat >/etc/systemd/system/zicboard-core.service <<EOF
[Unit]
Description=ZicBoard Core
After=network.target

[Service]
Type=simple
WorkingDirectory=${ROOT_DIR}
EnvironmentFile=-${ROOT_DIR}/.zicboard/core/core.env
ExecStart=${ROOT_DIR}/bin/zicboard-core -listen \${ZICBOARD_CORE_LISTEN}
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF
  systemctl daemon-reload
  systemctl enable zicboard-core
  systemctl restart zicboard-core
  php scripts/core-installer.php health
  php artisan zicboard:core:doctor
  bash scripts/runtime-permissions.sh finalize
else
  bash scripts/runtime-permissions.sh finalize
  echo "Bỏ qua cấu hình systemd. Hãy khởi động bin/zicboard-core thủ công hoặc cài dịch vụ bằng quyền root trên Linux."
fi

echo "Cài đặt hoàn tất."
