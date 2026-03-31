#!/bin/bash
# Exa AI Client — Wissenschaftliche Quellenrecherche
# Key-Rotation: Key 1 → Key 2 → STOP
# Domain-Whitelist: NUR wissenschaftliche Quellen
#
# Usage: bash ralph/exa-client.sh "Suchbegriff" [maxResults]
# Output: JSON auf stdout, Status auf stderr
# Exit-Codes: 0=OK, 1=Fehler, 2=CREDITS_EXHAUSTED (beide Keys leer)

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
USAGE_LOG="$PROJECT_DIR/ralph/exa-usage.log"
ENV_FILE="$PROJECT_DIR/.env.local"

# --- Keys aus .env.local laden ---
if [ ! -f "$ENV_FILE" ]; then
  echo "FEHLER: $ENV_FILE nicht gefunden" >&2
  exit 1
fi

KEY_1=$(grep "^EXA_API_KEY_1=" "$ENV_FILE" | cut -d'=' -f2)
KEY_2=$(grep "^EXA_API_KEY_2=" "$ENV_FILE" | cut -d'=' -f2)

if [ -z "$KEY_1" ] && [ -z "$KEY_2" ]; then
  echo "FEHLER: Keine Exa API Keys in .env.local" >&2
  exit 1
fi

# --- Parameter ---
QUERY="${1:?Fehler: Suchbegriff als 1. Argument erforderlich}"
MAX_RESULTS="${2:-5}"

# --- Domain-Whitelist (NUR wissenschaftliche Quellen) ---
DOMAINS='["awmf.org","register.awmf.org","dnqp.de","pubmed.ncbi.nlm.nih.gov","ncbi.nlm.nih.gov","cochrane.org","link.springer.com","thieme-connect.com","rki.de","who.int","dgrh.de","dgppn.de","dgkj.de","deg-online.de"]'

# --- Request-Funktion ---
exa_search() {
  local api_key="$1"
  local key_label="$2"

  local response
  response=$(curl -s -w "\n%{http_code}" -X POST "https://api.exa.ai/search" \
    -H "Content-Type: application/json" \
    -H "x-api-key: $api_key" \
    -d "{
      \"query\": \"$QUERY\",
      \"numResults\": $MAX_RESULTS,
      \"type\": \"auto\",
      \"includeDomains\": $DOMAINS,
      \"contents\": {
        \"text\": {
          \"maxCharacters\": 1000
        }
      }
    }" 2>/dev/null)

  local http_code
  http_code=$(echo "$response" | tail -1)
  local body
  body=$(echo "$response" | sed '$d')

  # Credit-Check
  if echo "$body" | grep -q "NO_MORE_CREDITS"; then
    echo "[$key_label] Credits erschoepft" >&2
    return 1
  fi

  # HTTP-Fehler
  if [ "$http_code" != "200" ]; then
    echo "[$key_label] HTTP-Fehler: $http_code" >&2
    return 1
  fi

  # Kosten loggen
  local cost
  cost=$(echo "$body" | python3 -c "import sys,json; print(json.load(sys.stdin).get('costDollars',{}).get('total','?'))" 2>/dev/null || echo "?")
  local result_count
  result_count=$(echo "$body" | python3 -c "import sys,json; print(len(json.load(sys.stdin).get('results',[])))" 2>/dev/null || echo "0")

  echo "$(date '+%Y-%m-%d %H:%M:%S') | $key_label | \$$cost | $result_count Treffer | $QUERY" >> "$USAGE_LOG"
  echo "[$key_label] $result_count Treffer, Kosten: \$$cost" >&2

  # JSON auf stdout
  echo "$body"
  return 0
}

# --- Key-Rotation ---
if [ -n "$KEY_1" ]; then
  if exa_search "$KEY_1" "KEY-1"; then
    exit 0
  fi
fi

echo "Key 1 fehlgeschlagen, versuche Key 2..." >&2

if [ -n "$KEY_2" ]; then
  if exa_search "$KEY_2" "KEY-2"; then
    exit 0
  fi
fi

echo "" >&2
echo "=======================================" >&2
echo "  BEIDE EXA API KEYS ERSCHOEPFT!" >&2
echo "  Neuen Key in .env.local eintragen:" >&2
echo "  EXA_API_KEY_1=neuer-key-hier" >&2
echo "  Dashboard: https://dashboard.exa.ai" >&2
echo "=======================================" >&2
exit 2
