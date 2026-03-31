#!/bin/bash
# Recherche-Loop — Wissenschaftliches Rohmaterial für alle CEs
# Iteriert über alle LEs in recherche-prd.json
# Stoppt bei Exa-Credit-Erschöpfung → wartet auf neuen Key
#
# Usage: bash ralph/recherche-loop.sh [max-iterations]
# Default: 60 Iterationen (genug für alle ~55 LEs)

set -e

# Erlaubt Start aus einer laufenden Claude-Session heraus
unset CLAUDECODE

MAX_ITERATIONS=${1:-60}
ITERATION=0
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PRD_FILE="$PROJECT_DIR/ralph/recherche-prd.json"
PROGRESS_FILE="$PROJECT_DIR/ralph/recherche-progress.txt"

echo "=== Recherche-Loop — Wissenschaftliches Rohmaterial ==="
echo "Projekt: $PROJECT_DIR"
echo "Max Iterationen: $MAX_ITERATIONS"
echo ""

# Prüfe ob I Care PDFs vorhanden sind
ICARE_DIR="$PROJECT_DIR/recherche/icare"
PDF_COUNT=$(find "$ICARE_DIR" -name "*.pdf" 2>/dev/null | wc -l | tr -d ' ')
if [ "$PDF_COUNT" -eq 0 ]; then
  echo "⚠️  WARNUNG: Keine I Care PDFs in $ICARE_DIR gefunden!"
  echo "   Lege die PDFs dort ab für bessere Quellenqualität."
  echo "   Loop startet trotzdem — nutzt nur Exa AI."
  echo ""
fi

# Prüfe ob Exa API Keys vorhanden sind
ENV_FILE="$PROJECT_DIR/.env.local"
if ! grep -q "EXA_API_KEY" "$ENV_FILE" 2>/dev/null; then
  echo "⚠️  WARNUNG: Keine Exa API Keys in .env.local!"
  echo "   Ohne Exa kann nur I Care als Quelle genutzt werden."
  echo ""
fi

# Progress-Datei initialisieren falls nicht vorhanden
if [ ! -f "$PROGRESS_FILE" ]; then
  echo "# Recherche-Loop Progress" > "$PROGRESS_FILE"
  echo "# Append-only. Jede Iteration schreibt Learnings ans Ende." >> "$PROGRESS_FILE"
  echo "" >> "$PROGRESS_FILE"
fi

cd "$PROJECT_DIR"

while [ $ITERATION -lt $MAX_ITERATIONS ]; do
  ITERATION=$((ITERATION + 1))

  # Prüfe ob noch Stories offen sind
  REMAINING=$(python3 -c "
import json
with open('$PRD_FILE') as f:
    data = json.load(f)
count = sum(1 for s in data['stories'] if not s['passes'])
print(count)
" 2>/dev/null || echo "0")

  if [ "$REMAINING" -eq 0 ]; then
    echo ""
    echo "=== ALLE LEs RECHERCHIERT! ==="
    echo "Iterationen: $ITERATION"

    # Zusammenfassung
    echo ""
    echo "--- Zusammenfassung ---"
    python3 -c "
import json
with open('$PRD_FILE') as f:
    data = json.load(f)
total_fakten = sum(s.get('faktenCount', 0) for s in data['stories'])
total_quellen = sum(s.get('quellenCount', 0) for s in data['stories'])
print(f'Stories: {len(data[\"stories\"])}')
print(f'Fakten gesamt: {total_fakten}')
print(f'Quellen gesamt: {total_quellen}')
" 2>/dev/null

    # Exa-Kosten
    if [ -f "$PROJECT_DIR/ralph/exa-usage.log" ]; then
      echo ""
      EXA_REQUESTS=$(wc -l < "$PROJECT_DIR/ralph/exa-usage.log" | tr -d ' ')
      echo "Exa-Requests: $EXA_REQUESTS"
      echo "Exa-Kosten: $(grep -oP '\$[\d.]+' "$PROJECT_DIR/ralph/exa-usage.log" | awk -F'$' '{sum += $2} END {printf "$%.2f\n", sum}')"
    fi

    exit 0
  fi

  # Nächste offene Story anzeigen
  NEXT_STORY=$(python3 -c "
import json
with open('$PRD_FILE') as f:
    data = json.load(f)
for s in data['stories']:
    if not s['passes']:
        print(f'{s[\"id\"]}: {s[\"title\"]}')
        break
" 2>/dev/null)

  echo ""
  echo "--- Iteration $ITERATION / $MAX_ITERATIONS ---"
  echo "Verbleibend: $REMAINING LEs"
  echo "Nächste: $NEXT_STORY"
  echo ""

  # Claude Code mit dem Recherche-Prompt starten
  cat ralph/RECHERCHE-PROMPT.md | claude --print --dangerously-skip-permissions

  # Prüfe ob Exa-Credits erschöpft sind
  if [ -f "$PROJECT_DIR/ralph/exa-usage.log" ]; then
    LAST_LINE=$(tail -1 "$PROJECT_DIR/ralph/exa-usage.log" 2>/dev/null || echo "")
    if echo "$LAST_LINE" | grep -q "CREDITS_EXHAUSTED"; then
      echo ""
      echo "======================================="
      echo "  EXA API CREDITS ERSCHÖPFT!"
      echo ""
      echo "  Nächste Schritte:"
      echo "  1. https://dashboard.exa.ai → Credits aufladen"
      echo "  2. Neuen Key in .env.local eintragen:"
      echo "     EXA_API_KEY_1=neuer-key"
      echo "  3. Loop neu starten:"
      echo "     bash ralph/recherche-loop.sh"
      echo "======================================="
      echo ""
      echo "$(date): PAUSE — Exa Credits erschöpft bei Iteration $ITERATION" >> "$PROGRESS_FILE"
      exit 2
    fi
  fi

  echo "Iteration $ITERATION abgeschlossen."
done

echo ""
echo "=== Max Iterationen erreicht ($MAX_ITERATIONS) ==="
REMAINING=$(python3 -c "
import json
with open('$PRD_FILE') as f:
    data = json.load(f)
count = sum(1 for s in data['stories'] if not s['passes'])
print(count)
" 2>/dev/null || echo "?")
echo "Verbleibende LEs: $REMAINING"
