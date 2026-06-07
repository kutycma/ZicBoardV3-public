#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

RUNTIME_DIRS=(
  "storage"
  "bootstrap/cache"
  "config/theme"
  "public/theme"
  "bin"
  ".zicboard"
)

PRIVATE_FILES=(
  ".env"
  ".zicboard/core/core.env"
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
  mkdir -p storage bootstrap/cache config/theme public/theme bin .zicboard/core
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

  if [ -f "bin/zicboard-core" ]; then
    chmod 755 bin/zicboard-core || echo "[runtime-permissions] WARN: unable to chmod bin/zicboard-core"
  fi
}

chmod_private_files() {
  for path in "${PRIVATE_FILES[@]}"; do
    [ -f "$path" ] || continue
    chmod 600 "$path" || echo "[runtime-permissions] WARN: unable to chmod $path"
  done

  if [ -d ".zicboard/core" ]; then
    find .zicboard/core -maxdepth 1 -type f -name '*.json' -exec chmod 600 {} + 2>/dev/null || echo "[runtime-permissions] WARN: unable to chmod .zicboard/core/*.json"
  fi
}

apply_runtime_permissions() {
  create_runtime_dirs
  safe_chown_runtime
  chmod_runtime_dirs
  chmod_runtime_files
  chmod_private_files
}

phase="${1:-finalize}"
case "$phase" in
  prepare|finalize)
    apply_runtime_permissions
    ;;
  *)
    usage
    exit 2
    ;;
esac

echo "[runtime-permissions] ${phase} complete."
