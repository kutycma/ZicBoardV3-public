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
if [ "$(uname -s)" != "Linux" ] || ! command -v systemctl >/dev/null 2>&1; then
  echo "ZicBoard core requires Linux with systemd."
  exit 1
fi
if [ "$(id -u)" -ne 0 ]; then
  echo "Run update.sh as root so zicboard-core can be updated safely."
  exit 1
fi
if ! command -v curl >/dev/null 2>&1; then
  echo "curl is required for the zicboard-core health check."
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
CORE_TIMER_WAS_ACTIVE=0
CORE_TIMER_WAS_PRESENT=0
CORE_TIMER_PAUSED=0
if [ -e "/etc/systemd/system/zicboard-core-health.timer" ]; then
  CORE_TIMER_WAS_PRESENT=1
fi

resume_core_health_timer() {
  if [ "$CORE_TIMER_PAUSED" != "1" ]; then
    return 0
  fi
  if [ "$CORE_TIMER_WAS_ACTIVE" = "1" ]; then
    systemctl start zicboard-core-health.timer || true
  else
    systemctl stop zicboard-core-health.timer || true
    if [ "$CORE_TIMER_WAS_PRESENT" = "0" ]; then
      systemctl disable zicboard-core-health.timer || true
    fi
  fi
}

restore_core_health_timer_state() {
  if [ "$CORE_TIMER_WAS_ACTIVE" = "1" ]; then
    systemctl start zicboard-core-health.timer || true
  else
    systemctl stop zicboard-core-health.timer || true
    if [ "$CORE_TIMER_WAS_PRESENT" = "0" ]; then
      systemctl disable zicboard-core-health.timer || true
    fi
  fi
}
trap resume_core_health_timer EXIT

BACKUP_WATCH_PATHS=(
  "public"
  "app/Payments"
)

CLEAN_EXCLUDES=(
  "public/"
  "app/Payments/"
  "app/Http/Controllers/V1/Guest/ServerController.php"
  "storage/"
  "bootstrap/cache/"
  "config/theme/"
  ".zicboard/"
  ".env"
  ".env.backup"
  "bin/zicboard-core*"
)

REQUIRED_RELEASE_FILES=(
  "scripts/runtime-permissions.sh"
  "scripts/core-service.sh"
  "scripts/core-health.sh"
)

ensure_update_backup_dir() {
  if [ -z "$UPDATE_BACKUP_DIR" ]; then
    UPDATE_BACKUP_DIR=".zicboard/update-backups/$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$UPDATE_BACKUP_DIR"
    chown root:root .zicboard .zicboard/update-backups "$UPDATE_BACKUP_DIR"
    chmod 0755 .zicboard
    chmod 0700 .zicboard/update-backups "$UPDATE_BACKUP_DIR"
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

CORE_RUNTIME_BACKUP_DIR=""
CORE_UNIT_BACKUP_DIR=""
CORE_BINARY_BACKUP_PATH=""
CORE_RUNTIME_PATHS=(
  ".zicboard/core/core.env"
  ".zicboard/core/state.json"
  ".zicboard/core/entitlement.json"
  ".zicboard/core/entitlement.json.blocked"
  ".zicboard/core/runtime/entitlement.json"
  ".zicboard/core/runtime/entitlement.json.blocked"
)
CORE_ROLLBACK_PATHS=(
  ".zicboard/core/state.json"
  ".zicboard/core/entitlement.json"
  ".zicboard/core/entitlement.json.blocked"
  ".zicboard/core/runtime/entitlement.json"
  ".zicboard/core/runtime/entitlement.json.blocked"
)
CORE_UNIT_PATHS=(
  "/etc/systemd/system/zicboard-core.service"
  "/etc/systemd/system/zicboard-core-health.service"
  "/etc/systemd/system/zicboard-core-health.timer"
  "/usr/local/libexec/zicboard-core-health"
)

assert_core_trust_paths_are_not_symlinks() {
  local path
  for path in \
    ".zicboard" \
    ".zicboard/core" \
    ".zicboard/core/core.env" \
    ".zicboard/core/state.json" \
    ".zicboard/core/entitlement.json" \
    ".zicboard/core/entitlement.json.blocked" \
    ".zicboard/core/runtime" \
    ".zicboard/core/runtime/entitlement.json" \
    ".zicboard/core/runtime/entitlement.json.blocked" \
    "bin/zicboard-core"; do
    if [ -L "$path" ]; then
      echo "Refusing to update through symlink in core trust boundary: $path"
      exit 1
    fi
  done
}
backup_core_binary() {
  ensure_update_backup_dir
  local source="bin/zicboard-core"
  local destination="${UPDATE_BACKUP_DIR}/core-binary/zicboard-core"
  mkdir -p "$(dirname "$destination")"
  CORE_BINARY_BACKUP_PATH="$destination"
  if [ -f "$source" ] && [ ! -L "$source" ]; then
    cp -a -- "$source" "$destination"
  else
    : >"${destination}.missing"
  fi
}

restore_core_binary() {
  [ -n "$CORE_BINARY_BACKUP_PATH" ] || return 0
  local destination="bin/zicboard-core"
  if [ -e "$CORE_BINARY_BACKUP_PATH" ]; then
    rm -f -- "$destination"
    cp -a -- "$CORE_BINARY_BACKUP_PATH" "$destination"
  elif [ -f "${CORE_BINARY_BACKUP_PATH}.missing" ]; then
    rm -f -- "$destination"
  else
    return 1
  fi
}
backup_core_runtime_state() {
  ensure_update_backup_dir
  CORE_RUNTIME_BACKUP_DIR="${UPDATE_BACKUP_DIR}/core-runtime"
  mkdir -p "$CORE_RUNTIME_BACKUP_DIR"
  local path destination
  for path in "${CORE_RUNTIME_PATHS[@]}"; do
    destination="${CORE_RUNTIME_BACKUP_DIR}/${path}"
    mkdir -p "$(dirname "$destination")"
    if [ -e "$path" ]; then
      cp -a -- "$path" "$destination"
    else
      : >"${destination}.missing"
    fi
  done
}

restore_core_runtime_state() {
  [ -n "$CORE_RUNTIME_BACKUP_DIR" ] || return 0
  local path source
  for path in "${CORE_RUNTIME_PATHS[@]}"; do
    source="${CORE_RUNTIME_BACKUP_DIR}/${path}"
    if [ -e "$source" ]; then
      mkdir -p "$(dirname "$path")"
      cp -a -- "$source" "$path"
    elif [ -f "${source}.missing" ]; then
      rm -f -- "$path"
    fi
  done
}

restore_core_health_rollback_state() {
  [ -n "$CORE_RUNTIME_BACKUP_DIR" ] || return 0
  local path source
  for path in "${CORE_ROLLBACK_PATHS[@]}"; do
    source="${CORE_RUNTIME_BACKUP_DIR}/${path}"
    if [ -e "$source" ]; then
      mkdir -p "$(dirname "$path")"
      cp -a -- "$source" "$path"
    elif [ -f "${source}.missing" ]; then
      rm -f -- "$path"
    fi
  done
}
backup_core_units() {
  ensure_update_backup_dir
  CORE_UNIT_BACKUP_DIR="${UPDATE_BACKUP_DIR}/systemd"
  mkdir -p "$CORE_UNIT_BACKUP_DIR"
  local path name
  for path in "${CORE_UNIT_PATHS[@]}"; do
    name="$(basename "$path")"
    if [ -e "$path" ]; then
      cp -a -- "$path" "${CORE_UNIT_BACKUP_DIR}/${name}"
    else
      : >"${CORE_UNIT_BACKUP_DIR}/${name}.missing"
    fi
  done
}

restore_core_units() {
  [ -n "$CORE_UNIT_BACKUP_DIR" ] || return 0
  local path name source
  for path in "${CORE_UNIT_PATHS[@]}"; do
    name="$(basename "$path")"
    source="${CORE_UNIT_BACKUP_DIR}/${name}"
    if [ -e "$source" ]; then
      cp -a -- "$source" "$path"
    elif [ -f "${source}.missing" ]; then
      rm -f -- "$path"
    fi
  done
  systemctl daemon-reload
}

harden_rollback_core_files() {
  [ -d ".zicboard" ] && { chown root:root .zicboard || true; chmod 0755 .zicboard || true; }
  [ -d ".zicboard/core" ] && { chown root:root .zicboard/core || true; chmod 0750 .zicboard/core || true; }
  [ -f ".zicboard/core/core.env" ] && { chown root:root .zicboard/core/core.env || true; chmod 0600 .zicboard/core/core.env || true; }
  [ -f ".zicboard/core/state.json" ] && { chown root:root .zicboard/core/state.json || true; chmod 0600 .zicboard/core/state.json || true; }
  for path in .zicboard/core/entitlement.json .zicboard/core/entitlement.json.blocked .zicboard/core/runtime/entitlement.json .zicboard/core/runtime/entitlement.json.blocked; do
    [ -f "$path" ] || continue
    chown root:root "$path" || true
    chmod 0600 "$path" || true
  done
  [ -f "bin/zicboard-core" ] && { chown root:root bin/zicboard-core || true; chmod 0755 bin/zicboard-core || true; }
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

assert_target_contains_required_files() {
  local path
  local missing=0

  for path in "${REQUIRED_RELEASE_FILES[@]}"; do
    if ! git cat-file -e "${TARGET}:${path}" 2>/dev/null; then
      echo "Ban release ${TARGET} thieu file bat buoc: ${path}"
      missing=1
    fi
  done

  if [ "$missing" -ne 0 ]; then
    echo "Dung update truoc khi reset code. Hay dong bo lai repo public de bao gom cac file bat buoc roi chay lai update.sh."
    exit 1
  fi
}

echo "Dang cap nhat ZicBoard tu ${TARGET}; file release da track se theo ban update, file user tu them trong public/ va app/Payments/ se duoc giu neu khong trung path release."
git -c core.hooksPath=/dev/null fetch "$REMOTE" --prune
if ! git rev-parse --verify "$TARGET" >/dev/null 2>&1; then
  echo "Khong tim thay nhanh remote: ${TARGET}"
  exit 1
fi
assert_target_contains_required_files
assert_core_trust_paths_are_not_symlinks

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
if systemctl is-active --quiet zicboard-core-health.timer; then
  CORE_TIMER_WAS_ACTIVE=1
  CORE_TIMER_PAUSED=1
  systemctl stop zicboard-core-health.timer
fi
assert_core_trust_paths_are_not_symlinks
backup_core_runtime_state
backup_core_units
backup_core_binary
if ! php scripts/core-installer.php update; then
  php scripts/core-installer.php rollback || true
  restore_core_binary || true
  restore_core_runtime_state || true
  harden_rollback_core_files
  echo "Core installer failed; previous binary and runtime state were restored."
  exit 1
fi
if ! php artisan zicboard:core:sync; then
  php scripts/core-installer.php rollback || true
  restore_core_binary || true
  restore_core_runtime_state || true
  harden_rollback_core_files
  echo "Core RPC synchronization failed; previous binary and core state were restored."
  exit 1
fi

restart_core_service_with_health() {
  local rollback_message="$1"
  if systemctl restart zicboard-core \
    && systemctl is-active --quiet zicboard-core \
    && systemctl is-active --quiet zicboard-core-health.timer \
    && php scripts/core-installer.php health \
    && php artisan zicboard:core:doctor; then
    return 0
  fi

  echo "$rollback_message"
  php scripts/core-installer.php rollback || true
  restore_core_binary || true
  restore_core_health_rollback_state || true
  if ! bash scripts/core-service.sh; then
    echo "Rollback service migration failed; refusing to report update success."
    return 1
  fi
  if ! systemctl restart zicboard-core || ! systemctl is-active --quiet zicboard-core; then
    echo "Rollback core restart failed; refusing to report update success."
    return 1
  fi
  if ! php scripts/core-installer.php health || ! php artisan zicboard:core:doctor; then
    echo "Rollback validation failed; refusing to report update success."
    return 1
  fi
  return 1
}

if ! bash scripts/core-service.sh; then
  echo "Core service migration failed, restoring the previous binary, runtime state, and systemd units..."
  php scripts/core-installer.php rollback || true
  restore_core_binary || true
  restore_core_runtime_state || true
  restore_core_units || true
  harden_rollback_core_files
  restore_core_health_timer_state
  systemctl restart zicboard-core || true
  exit 1
fi
if ! restart_core_service_with_health "Core service restart or health check failed after update, rolling back core binary..."; then
  echo "Core binary was rolled back; update is reported as failed."
  exit 1
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
