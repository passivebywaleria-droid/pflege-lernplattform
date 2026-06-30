#!/usr/bin/env bash
# Carovia — Deploy auf Hetzner (DE, DSGVO).
# Laeuft von UEBERALL: das Skript findet den Projektordner selbst.
# Aufruf:  bash /Users/macminiwaleria/Desktop/Moneymaker/pflege-lernplattform/scripts/deploy-hetzner.sh
set -euo pipefail

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HOST="root@178.105.176.161"
KEY="$HOME/.ssh/hetzner_key"
RSH="ssh -i $KEY -o BatchMode=yes"
LIVE="https://178-105-176-161.nip.io/de"

cd "$REPO"
echo "→ Projektordner: $REPO"

echo "→ 1/3  messages/ hochladen …"
rsync -az -e "$RSH" messages/ "$HOST:/opt/pflege/messages/"

echo "→ 2/3  src/ hochladen …"
rsync -az --exclude='.next' --exclude='node_modules' -e "$RSH" src/ "$HOST:/opt/pflege/src/"

echo "→ 3/3  Build + Neustart auf dem Server (dauert ein paar Minuten) …"
ssh -i "$KEY" "$HOST" 'cd /opt/pflege/deploy && docker compose --env-file .env up -d --build app'

echo "→ Prüfe, ob die neue Version live ist …"
sleep 3
if curl -fsS -m 25 "$LIVE" | grep -q "Carovia"; then
  echo "✅ LIVE: $LIVE  (Carovia erkannt)"
else
  echo "⚠️  Deploy lief durch, aber 'Carovia' ist noch nicht in der Live-Antwort —"
  echo "    der Build braucht evtl. noch 1–2 Minuten. Dann einfach $LIVE neu laden."
fi
