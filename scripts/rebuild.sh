#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[rebuild] Installing dependencies"
npm install

echo "[rebuild] Building production bundle"
npm run build

echo "[rebuild] Done. Output is in dist/"
