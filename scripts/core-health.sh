#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="${1:-}"
SERVICE_NAME="zicboard-core"
if [ -z "$ROOT_DIR" ]; then
  echo "zicboard-core health helper requires the application root" >&2
  exit 2
fi

SYSTEMCTL_BIN="$(command -v systemctl)"
CURL_BIN="$(command -v curl)"
READLINK_BIN="$(command -v readlink)"
EXPECTED_BINARY="$($READLINK_BIN -f "$ROOT_DIR/bin/zicboard-core" 2>/dev/null || true)"

recover_core() {
  echo "[zicboard-core-health] $1; restarting $SERVICE_NAME" >&2
  "$SYSTEMCTL_BIN" restart "$SERVICE_NAME"
}

if ! "$SYSTEMCTL_BIN" is-active --quiet "$SERVICE_NAME"; then
  recover_core "service is not active"
  exit $?
fi

MAIN_PID="$($SYSTEMCTL_BIN show --property MainPID --value "$SERVICE_NAME" 2>/dev/null || true)"
case "$MAIN_PID" in
  ''|*[!0-9]*|0|1)
    recover_core "service MainPID is invalid"
    exit $?
    ;;
esac

RUNNING_BINARY="$($READLINK_BIN -f "/proc/$MAIN_PID/exe" 2>/dev/null || true)"
RUNNING_BINARY="${RUNNING_BINARY% (deleted)}"
if [ -z "$EXPECTED_BINARY" ] || [ "$RUNNING_BINARY" != "$EXPECTED_BINARY" ]; then
  recover_core "service executable does not match the installed core"
  exit $?
fi

PAYLOAD="$($CURL_BIN --fail --silent --show-error --max-time 3 http://127.0.0.1:18080/health 2>/dev/null || true)"
COMPACT_PAYLOAD="$(printf '%s' "$PAYLOAD" | tr -d '\r\n\t ')"
case "$COMPACT_PAYLOAD" in
  *'"schema_version":1'*'"status":"ok"'*|*'"status":"ok"'*'"schema_version":1'*|*'"schema_version":1'*'"status":"degraded"'*|*'"status":"degraded"'*'"schema_version":1'*)
    exit 0
    ;;
  *)
    recover_core "health endpoint did not return valid core JSON"
    ;;
esac