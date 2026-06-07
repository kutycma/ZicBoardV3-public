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
CURRENT_HEAD="$(git rev-parse --verify HEAD)"
DATABASE_CHANGED=0
UPDATE_BACKUP_DIR=""
UPDATE_BACKUP_COUNT=0
UPDATE_CONFLICT_BACKUP_COUNT=0

BACKUP_WATCH_PATHS=(
  "public"
  "app/Payments"
)

CLEAN_EXCLUDES=(
  "public/"
  "app/Payments/"
  "storage/"
  "bootstrap/cache/"
  "config/theme/"
  ".zicboard/"
  ".env"
  ".env.backup"
  "bin/zicboard-core*"
)

ensure_update_backup_dir() {
  if [ -z "$UPDATE_BACKUP_DIR" ]; then
    UPDATE_BACKUP_DIR=".zicboard/update-backups/$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$UPDATE_BACKUP_DIR"
  fi
}

backup_existing_path() {
  local path="$1"
  local reason="$2"
  local destination

  path="${path#./}"
  if [ ! -e "$path" ] && [ ! -L "$path" ]; then
    return 0
  fi

  ensure_update_backup_dir
  destination="${UPDATE_BACKUP_DIR}/${path}"
  mkdir -p "$(dirname "$destination")"
  cp -a -- "$path" "$destination"
  UPDATE_BACKUP_COUNT=$((UPDATE_BACKUP_COUNT + 1))
  echo "Da backup ${reason}: ${path} -> ${destination}"
}

backup_modified_tracked_preserved_paths() {
  local path

  while IFS= read -r path; do
    [ -n "$path" ] || continue
    backup_existing_path "$path" "file tracked da bi sua"
  done < <(
    {
      git diff --name-only -- "${BACKUP_WATCH_PATHS[@]}"
      git diff --cached --name-only -- "${BACKUP_WATCH_PATHS[@]}"
    } | sort -u
  )
}

backup_incoming_tracked_conflicts() {
  local path

  while IFS= read -r path; do
    [ -n "$path" ] || continue
    if [ ! -e "$path" ] && [ ! -L "$path" ]; then
      continue
    fi
    if git ls-files --error-unmatch -- "$path" >/dev/null 2>&1; then
      continue
    fi

    backup_existing_path "$path" "file user trung path voi release moi"
    UPDATE_CONFLICT_BACKUP_COUNT=$((UPDATE_CONFLICT_BACKUP_COUNT + 1))
    rm -rf -- "$path"
  done < <(git ls-tree -r --name-only "$TARGET" -- "${BACKUP_WATCH_PATHS[@]}" | sort -u)
}

backup_preserved_paths_before_reset() {
  backup_modified_tracked_preserved_paths
  backup_incoming_tracked_conflicts

  if [ "$UPDATE_BACKUP_COUNT" -gt 0 ]; then
    echo "Da backup ${UPDATE_BACKUP_COUNT} file/thuc muc user truoc khi reset release vao: ${UPDATE_BACKUP_DIR}"
    if [ "$UPDATE_CONFLICT_BACKUP_COUNT" -gt 0 ]; then
      echo "Co ${UPDATE_CONFLICT_BACKUP_COUNT} file/thuc muc user trung path voi release moi; da backup va path chinh se theo ban release."
    fi
  fi
}

clean_untracked_code_paths() {
  local clean_args=(clean -fd)
  local exclude

  for exclude in "${CLEAN_EXCLUDES[@]}"; do
    clean_args+=("-e" "$exclude")
  done

  git "${clean_args[@]}"
}

echo "Dang cap nhat ZicBoard tu ${TARGET}; file release da track se theo ban update, file user tu them trong public/ va app/Payments/ se duoc giu neu khong trung path release."
git fetch "$REMOTE" --prune
if ! git rev-parse --verify "$TARGET" >/dev/null 2>&1; then
  echo "Khong tim thay nhanh remote: ${TARGET}"
  exit 1
fi

if [ "${ZICBOARD_UPDATE_FORCE_DB:-0}" = "1" ]; then
  DATABASE_CHANGED=1
  echo "ZICBOARD_UPDATE_FORCE_DB=1, se chay cap nhat database."
elif git diff --quiet "$CURRENT_HEAD" "$TARGET" -- database; then
  echo "Khong phat hien thay doi trong database/, bo qua cap nhat database."
else
  DATABASE_CHANGED=1
  echo "Phat hien thay doi trong database/, se chay cap nhat database."
fi

backup_preserved_paths_before_reset
git reset --hard "$TARGET"
clean_untracked_code_paths

bash scripts/runtime-permissions.sh prepare

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
run_composer install --no-dev --optimize-autoloader --no-interaction

if [ -f "artisan" ]; then
  if [ "$DATABASE_CHANGED" = "1" ]; then
    php artisan zicboard:update
  else
    php artisan zicboard:update --skip-database
  fi
fi

echo "Đang chuẩn bị các thư mục vận hành..."
bash scripts/runtime-permissions.sh prepare

echo "Đang cập nhật zicboard-core nếu cần..."
php scripts/core-installer.php update
php artisan zicboard:core:sync

restart_core_service_with_health() {
  local rollback_message="$1"
  if systemctl restart zicboard-core && php scripts/core-installer.php health; then
    php artisan zicboard:core:doctor
    return 0
  fi

  echo "$rollback_message"
  php scripts/core-installer.php rollback
  systemctl restart zicboard-core
  php scripts/core-installer.php health
  php artisan zicboard:core:doctor
}

if [ "$(uname -s)" = "Linux" ] && command -v systemctl >/dev/null 2>&1; then
  if [ "$(id -u)" -eq 0 ]; then
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
    restart_core_service_with_health "Core service restart or health check failed after update, rolling back core binary..."
  elif systemctl list-unit-files | grep -q '^zicboard-core\.service'; then
    restart_core_service_with_health "Kiem tra trang thai core that bai sau cap nhat, dang khoi phuc file chay..."
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

bash scripts/runtime-permissions.sh finalize

echo "Cập nhật hoàn tất."
