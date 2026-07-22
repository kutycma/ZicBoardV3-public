#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CORE_USER="zicboard-core"
CORE_GROUP="zicboard-core"
CORE_DIR="${ROOT_DIR}/.zicboard/core"
RUNTIME_DIR="${CORE_DIR}/runtime"
BINARY_PATH="${ROOT_DIR}/bin/zicboard-core"
HEALTH_HELPER="/usr/local/libexec/zicboard-core-health"

if [ "$(uname -s)" != "Linux" ] || ! command -v systemctl >/dev/null 2>&1; then
  echo "ZicBoard core requires Linux with systemd."
  exit 1
fi
if [ "$(id -u)" -ne 0 ]; then
  echo "Run this command as root so ZicBoard can manage zicboard-core.service."
  exit 1
fi
for command_name in curl getent groupadd useradd usermod install readlink stat cut tr grep; do
  if ! command -v "$command_name" >/dev/null 2>&1; then
    echo "$command_name is required for the hardened zicboard-core service."
    exit 1
  fi
done
if [ ! -f "$CORE_DIR/core.env" ]; then
  echo "Missing required core environment file: $CORE_DIR/core.env"
  exit 1
fi
if [ ! -f "$BINARY_PATH" ] || [ -L "$BINARY_PATH" ]; then
  echo "zicboard-core must be a regular non-symlink file: $BINARY_PATH"
  exit 1
fi
for protected_path in "$ROOT_DIR/.zicboard" "$CORE_DIR" "$RUNTIME_DIR" "$CORE_DIR/core.env" "$CORE_DIR/state.json" "$CORE_DIR/entitlement.json" "$CORE_DIR/entitlement.json.blocked" "$RUNTIME_DIR/entitlement.json" "$RUNTIME_DIR/entitlement.json.blocked"; do
  if [ -L "$protected_path" ]; then
    echo "Refusing to follow symlink in core trust boundary: $protected_path"
    exit 1
  fi
done
ensure_core_account() {
  local nologin_shell
  nologin_shell="$(command -v nologin 2>/dev/null || true)"
  [ -n "$nologin_shell" ] || nologin_shell="/usr/sbin/nologin"

  if getent passwd "$CORE_USER" >/dev/null 2>&1 && [ "$(id -u "$CORE_USER")" -eq 0 ]; then
    echo "Refusing to use $CORE_USER because it resolves to UID 0."
    exit 1
  fi
  if ! getent group "$CORE_GROUP" >/dev/null 2>&1; then
    groupadd --system "$CORE_GROUP"
  fi
  if [ "$(getent group "$CORE_GROUP" | cut -d: -f3)" = "0" ]; then
    echo "Refusing to use $CORE_GROUP because it resolves to GID 0."
    exit 1
  fi
  if ! getent passwd "$CORE_USER" >/dev/null 2>&1; then
    useradd --system --gid "$CORE_GROUP" --home-dir /nonexistent --shell "$nologin_shell" --no-create-home "$CORE_USER"
  else
    usermod --shell "$nologin_shell" "$CORE_USER"
    if id -Gn "$CORE_USER" | tr ' ' '\n' | grep -qx root; then
      echo "Refusing to use $CORE_USER while it belongs to the root group."
      exit 1
    fi
  fi
}

migrate_core_runtime() {
  install -d -o root -g root -m 0755 "$ROOT_DIR/.zicboard"
  if [ -d "$ROOT_DIR/.zicboard/update-backups" ]; then
    chown -R root:root "$ROOT_DIR/.zicboard/update-backups"
    find "$ROOT_DIR/.zicboard/update-backups" -type d -exec chmod 0700 {} + 2>/dev/null || true
    find "$ROOT_DIR/.zicboard/update-backups" -type f -exec chmod 0600 {} + 2>/dev/null || true
  fi
  install -d -o root -g "$CORE_GROUP" -m 0750 "$CORE_DIR"
  install -d -o "$CORE_USER" -g "$CORE_GROUP" -m 0700 "$RUNTIME_DIR"

  if [ -f "$CORE_DIR/entitlement.json" ] && [ ! -f "$RUNTIME_DIR/entitlement.json" ]; then
    mv "$CORE_DIR/entitlement.json" "$RUNTIME_DIR/entitlement.json"
  fi
  if [ -f "$CORE_DIR/entitlement.json.blocked" ] && [ ! -f "$RUNTIME_DIR/entitlement.json.blocked" ]; then
    mv "$CORE_DIR/entitlement.json.blocked" "$RUNTIME_DIR/entitlement.json.blocked"
  fi

  find "$RUNTIME_DIR" -maxdepth 1 -type f \( -name 'entitlement.json' -o -name 'entitlement.json.blocked' -o -name 'entitlement.json.tmp' \) \
    -exec chown "$CORE_USER:$CORE_GROUP" {} + -exec chmod 0600 {} + 2>/dev/null || true
  for legacy_state in "$CORE_DIR/entitlement.json" "$CORE_DIR/entitlement.json.blocked"; do
    if [ -f "$legacy_state" ]; then
      chown root:root "$legacy_state"
      chmod 0600 "$legacy_state"
    fi
  done

  chown "root:$CORE_GROUP" "$CORE_DIR/core.env"
  chmod 0640 "$CORE_DIR/core.env"
  if [ -f "$CORE_DIR/state.json" ]; then
    chown root:root "$CORE_DIR/state.json"
    chmod 0640 "$CORE_DIR/state.json"
  fi
  find "$CORE_DIR" -maxdepth 1 -type f \( -name 'zicboard-core.*.bak' -o -name 'zicboard-core.failed.*' \) \
    -exec chown root:root {} + -exec chmod 0600 {} + 2>/dev/null || true

  install -d -o root -g root -m 0755 "$ROOT_DIR/bin"
  chown root:root "$BINARY_PATH"
  chmod 0755 "$BINARY_PATH"
}

verify_core_permissions() {
  local actual
  actual="$(stat -c '%U:%G:%a' "$BINARY_PATH")"
  [ "$actual" = "root:root:755" ] || { echo "Unexpected binary ownership/mode: $actual"; exit 1; }
  actual="$(stat -c '%U:%G:%a' "$CORE_DIR/core.env")"
  [ "$actual" = "root:${CORE_GROUP}:640" ] || { echo "Unexpected core.env ownership/mode: $actual"; exit 1; }
  actual="$(stat -c '%U:%G:%a' "$CORE_DIR")"
  [ "$actual" = "root:${CORE_GROUP}:750" ] || { echo "Unexpected core directory ownership/mode: $actual"; exit 1; }
  actual="$(stat -c '%U:%G:%a' "$RUNTIME_DIR")"
  [ "$actual" = "${CORE_USER}:${CORE_GROUP}:700" ] || { echo "Unexpected runtime directory ownership/mode: $actual"; exit 1; }
}

install_health_helper() {
  install -d -o root -g root -m 0755 /usr/local/libexec
  install -o root -g root -m 0755 "$ROOT_DIR/scripts/core-health.sh" "$HEALTH_HELPER"
}

write_units() {
  cat >/etc/systemd/system/zicboard-core.service <<EOF
[Unit]
Description=ZicBoard Core
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=${CORE_USER}
Group=${CORE_GROUP}
SupplementaryGroups=
UMask=0077
WorkingDirectory=${ROOT_DIR}
EnvironmentFile=${CORE_DIR}/core.env
ExecStart=${BINARY_PATH} -listen 127.0.0.1:18080
Restart=always
RestartSec=2
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=full
CapabilityBoundingSet=

[Install]
WantedBy=multi-user.target
EOF

  cat >/etc/systemd/system/zicboard-core-health.service <<EOF
[Unit]
Description=Check and recover ZicBoard Core
After=zicboard-core.service

[Service]
Type=oneshot
ExecStart=${HEALTH_HELPER} ${ROOT_DIR}
EOF

  cat >/etc/systemd/system/zicboard-core-health.timer <<EOF
[Unit]
Description=Check ZicBoard Core every minute

[Timer]
OnBootSec=1min
OnUnitActiveSec=1min
AccuracySec=10s
Persistent=true
Unit=zicboard-core-health.service

[Install]
WantedBy=timers.target
EOF
}

ensure_core_account
migrate_core_runtime
verify_core_permissions
install_health_helper
write_units
if command -v systemd-analyze >/dev/null 2>&1; then
  systemd-analyze verify /etc/systemd/system/zicboard-core.service /etc/systemd/system/zicboard-core-health.service /etc/systemd/system/zicboard-core-health.timer >/dev/null
fi
systemctl daemon-reload
systemctl enable zicboard-core
systemctl enable --now zicboard-core-health.timer