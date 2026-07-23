#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

RUNTIME_DIRS=(
  "storage"
  "bootstrap/cache"
  "config/theme"
  "public/theme"
)

PRIVATE_FILES=(
  ".env"
)

usage() {
  echo "Usage: $0 [prepare|finalize]"
}

is_root() {
  [ "$(id -u)" -eq 0 ]
}

user_exists() {
  getent passwd "$1" >/dev/null 2>&1
}

group_exists() {
  getent group "$1" >/dev/null 2>&1
}

stat_owner() {
  stat -c '%U' "$1" 2>/dev/null || true
}

stat_group() {
  stat -c '%G' "$1" 2>/dev/null || true
}

resolve_web_user() {
  if [ -n "${ZICBOARD_WEB_USER:-}" ] && [ "$ZICBOARD_WEB_USER" != "root" ] && user_exists "$ZICBOARD_WEB_USER"; then
    printf '%s' "$ZICBOARD_WEB_USER"
    return
  fi

  if [ -e "storage" ]; then
    local owner
    owner="$(stat_owner storage)"
    if [ -n "$owner" ] && [ "$owner" != "UNKNOWN" ] && [ "$owner" != "root" ] && user_exists "$owner"; then
      printf '%s' "$owner"
      return
    fi
  fi

  if user_exists www; then
    printf 'www'
    return
  fi
  if user_exists www-data; then
    printf 'www-data'
    return
  fi

  printf ''
}

resolve_web_group() {
  local user="$1"

  if [ -n "${ZICBOARD_WEB_GROUP:-}" ] && [ "$ZICBOARD_WEB_GROUP" != "root" ] && group_exists "$ZICBOARD_WEB_GROUP"; then
    printf '%s' "$ZICBOARD_WEB_GROUP"
    return
  fi

  if [ -e "storage" ]; then
    local group
    group="$(stat_group storage)"
    if [ -n "$group" ] && [ "$group" != "UNKNOWN" ] && [ "$group" != "root" ] && group_exists "$group"; then
      printf '%s' "$group"
      return
    fi
  fi

  if [ -n "$user" ] && group_exists "$user"; then
    printf '%s' "$user"
    return
  fi
  if group_exists www; then
    printf 'www'
    return
  fi
  if group_exists www-data; then
    printf 'www-data'
    return
  fi

  printf ''
}

safe_chown_runtime() {
  if ! is_root; then
    return
  fi

  local user group owner
  user="$(resolve_web_user)"
  group="$(resolve_web_group "$user")"
  if [ -z "$user" ] || [ -z "$group" ]; then
    echo "[runtime-permissions] WARN: web user/group not found; skipping chown. Set ZICBOARD_WEB_USER and ZICBOARD_WEB_GROUP if needed."
    return
  fi

  owner="${user}:${group}"
  for path in "${RUNTIME_DIRS[@]}"; do
    [ -e "$path" ] || continue
    chown -R "$owner" "$path" || echo "[runtime-permissions] WARN: unable to chown $path"
  done

  for path in "${PRIVATE_FILES[@]}"; do
    [ -e "$path" ] || continue
    chown "$owner" "$path" || echo "[runtime-permissions] WARN: unable to chown $path"
  done
}

create_runtime_dirs() {
  mkdir -p storage bootstrap/cache config/theme public/theme
}

chmod_runtime_dirs() {
  for path in "${RUNTIME_DIRS[@]}"; do
    [ -e "$path" ] || continue
    find "$path" -type d -exec chmod 775 {} + 2>/dev/null || echo "[runtime-permissions] WARN: unable to chmod directories under $path"
  done
}

chmod_runtime_files() {
  for path in "${RUNTIME_DIRS[@]}"; do
    [ -e "$path" ] || continue
    find "$path" -type f -exec chmod 664 {} + 2>/dev/null || echo "[runtime-permissions] WARN: unable to chmod files under $path"
  done


}

chmod_private_files() {
  for path in "${PRIVATE_FILES[@]}"; do
    [ -f "$path" ] || continue
    chmod 600 "$path" || echo "[runtime-permissions] WARN: unable to chmod $path"
  done


}

apply_runtime_permissions() {
  create_runtime_dirs
  safe_chown_runtime
  chmod_runtime_dirs
  chmod_runtime_files
  chmod_private_files
}

# Panel 3.1.65 loads this new finalizer after its old updater rewrites the root service.
core_service_is_hardened() {
  local unit="/etc/systemd/system/zicboard-core.service"

  [ -f "$unit" ] \
    && grep -Fqx 'User=zicboard-core' "$unit" \
    && grep -Fqx 'Group=zicboard-core' "$unit" \
    && grep -Fqx 'NoNewPrivileges=true' "$unit" \
    && grep -Fqx 'ProtectSystem=full' "$unit" \
    && grep -Fqx "ExecStart=${ROOT_DIR}/bin/zicboard-core -listen 127.0.0.1:18080" "$unit" \
    && [ -x "/usr/local/libexec/zicboard-core-health" ] \
    && [ -f "/etc/systemd/system/zicboard-core-health.timer" ] \
    && systemctl is-enabled --quiet zicboard-core-health.timer \
    && systemctl is-active --quiet zicboard-core-health.timer
}

restore_legacy_core_units() {
  local backup_dir="$1"
  local path name source

  for path in \
    /etc/systemd/system/zicboard-core.service \
    /etc/systemd/system/zicboard-core-health.service \
    /etc/systemd/system/zicboard-core-health.timer \
    /usr/local/libexec/zicboard-core-health; do
    name="$(basename "$path")"
    source="${backup_dir}/${name}"
    if [ -e "$source" ]; then
      cp -a -- "$source" "$path"
    elif [ -f "${source}.missing" ]; then
      rm -f -- "$path"
    fi
  done
  systemctl daemon-reload
}

migrate_legacy_core_service() {
  if [ "$(uname -s)" != "Linux" ] || ! command -v systemctl >/dev/null 2>&1; then
    return
  fi
  if [ ! -f "${ROOT_DIR}/bin/zicboard-core" ] || [ ! -f "${ROOT_DIR}/.zicboard/core/core.env" ]; then
    return
  fi
  if ! grep -Fqx "ZICBOARD_CORE_ENTITLEMENT_PATH=${ROOT_DIR}/.zicboard/core/runtime/entitlement.json" "${ROOT_DIR}/.zicboard/core/core.env"; then
    return
  fi
  if core_service_is_hardened; then
    return
  fi
  if ! is_root; then
    echo "[runtime-permissions] Core service migration requires root. Run: sudo bash update.sh"
    return 1
  fi
  for required in bash php cp basename mktemp; do
    if ! command -v "$required" >/dev/null 2>&1; then
      echo "[runtime-permissions] Missing command required for core service migration: $required"
      return 1
    fi
  done
  if [ ! -f "${ROOT_DIR}/scripts/core-service.sh" ] || [ ! -f "${ROOT_DIR}/scripts/core-installer.php" ] || [ ! -f "${ROOT_DIR}/artisan" ]; then
    echo "[runtime-permissions] Hardened core migration files are missing."
    return 1
  fi

  local backup_dir path name
  local service_was_active=0
  local timer_was_active=0
  local timer_was_enabled=0
  backup_dir="$(mktemp -d /tmp/zicboard-core-service.XXXXXX)"
  chmod 0700 "$backup_dir"
  for path in \
    /etc/systemd/system/zicboard-core.service \
    /etc/systemd/system/zicboard-core-health.service \
    /etc/systemd/system/zicboard-core-health.timer \
    /usr/local/libexec/zicboard-core-health; do
    name="$(basename "$path")"
    if [ -e "$path" ]; then
      cp -a -- "$path" "${backup_dir}/${name}"
    else
      : >"${backup_dir}/${name}.missing"
    fi
  done
  systemctl is-active --quiet zicboard-core && service_was_active=1
  systemctl is-active --quiet zicboard-core-health.timer && timer_was_active=1
  systemctl is-enabled --quiet zicboard-core-health.timer && timer_was_enabled=1

  echo "[runtime-permissions] Migrating legacy core service to the hardened service..."
  if bash "${ROOT_DIR}/scripts/core-service.sh" \
    && systemctl restart zicboard-core \
    && systemctl is-active --quiet zicboard-core \
    && php "${ROOT_DIR}/scripts/core-installer.php" health \
    && php "${ROOT_DIR}/artisan" zicboard:core:doctor \
    && core_service_is_hardened; then
    rm -rf -- "$backup_dir"
    echo "[runtime-permissions] Hardened core service migration complete."
    return
  fi

  echo "[runtime-permissions] Core service migration failed; restoring previous systemd units."
  restore_legacy_core_units "$backup_dir" || true
  if [ "$timer_was_enabled" = "1" ]; then
    systemctl enable zicboard-core-health.timer || true
  else
    systemctl disable zicboard-core-health.timer || true
  fi
  if [ "$timer_was_active" = "1" ]; then
    systemctl start zicboard-core-health.timer || true
  else
    systemctl stop zicboard-core-health.timer || true
  fi
  if [ "$service_was_active" = "1" ]; then
    systemctl restart zicboard-core || true
  else
    systemctl stop zicboard-core || true
  fi
  rm -rf -- "$backup_dir"
  return 1
}

phase="${1:-finalize}"
case "$phase" in
  prepare)
    apply_runtime_permissions
    ;;
  finalize)
    apply_runtime_permissions
    migrate_legacy_core_service
    ;;
  *)
    usage
    exit 2
    ;;
esac

echo "[runtime-permissions] ${phase} complete."
