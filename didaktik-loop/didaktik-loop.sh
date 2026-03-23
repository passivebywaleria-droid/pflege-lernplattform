#!/bin/bash
# Didaktik-Loop — Erstellt Sessionplaene fuer alle 20 Lektionen
# Jede Iteration: 1 Lektion → Sessionplan → Pruefung → ggf. Korrektur

set -e

# Erlaubt Start aus einer laufenden Claude-Session heraus
unset CLAUDECODE

MAX_ITERATIONS=${1:-25}
ITERATION=0
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "=== Didaktik-Loop ==="
echo "Projekt: $PROJECT_DIR"
echo "Max Iterationen: $MAX_ITERATIONS"
echo ""

cd "$PROJECT_DIR"

while [ $ITERATION -lt $MAX_ITERATIONS ]; do
  ITERATION=$((ITERATION + 1))

  # Pruefe ob noch Lektionen offen sind
  REMAINING=$(grep -c '"passes": false' didaktik-loop/prd.json 2>/dev/null || echo "0")

  if [ "$REMAINING" -eq 0 ]; then
    echo ""
    echo "=== ALLE 20 SESSIONPLAENE FERTIG! ==="
    echo "Iterationen benoetigt: $ITERATION"
    echo "$(date): LOOP ABGESCHLOSSEN nach $ITERATION Iterationen" >> didaktik-loop/progress.txt
    exit 0
  fi

  echo ""
  echo "--- Iteration $ITERATION / $MAX_ITERATIONS ---"
  echo "Verbleibende Lektionen: $REMAINING"
  echo ""

  # Claude Code mit dem Prompt starten
  cat didaktik-loop/PROMPT.md | claude --print --dangerously-skip-permissions

  echo "$(date): Iteration $ITERATION abgeschlossen" >> didaktik-loop/progress.txt
  echo "Iteration $ITERATION abgeschlossen."
done

echo ""
echo "=== Max Iterationen erreicht ($MAX_ITERATIONS) ==="
REMAINING=$(grep -c '"passes": false' didaktik-loop/prd.json 2>/dev/null || echo "0")
echo "Verbleibende Lektionen: $REMAINING"
