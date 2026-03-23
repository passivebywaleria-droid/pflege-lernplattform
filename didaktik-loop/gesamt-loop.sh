#!/bin/bash
# ═══════════════════════════════════════════════════════════════
# Gesamt-Loop — 9 Rollen, 1 Lektion pro Iteration
# ═══════════════════════════════════════════════════════════════
#
# Ablauf pro Iteration:
#   1. Fach-Rechercheur    → rohmaterial.md
#   2. Leitfall-Autor      → leitfall.md
#   3. Didaktik-Regisseur  → sessionplan.md
#   4. Gamification-Design → gamification.md
#   5. Content-Generator   → steps-s2.ts + steps-s3.ts
#   6. B1-Übersetzer       → contentB1 in allen Steps
#   7. Didaktik-Prüfer     → sessionplan-prüfung.md (PASS/FAIL)
#   8. Fachliche Prüferin  → fachliche-prüfung.md (PASS/FAIL)
#   9. TSC-Check           → npx tsc --noEmit
#
# Bei FAIL: Zurück zu Schritt 5 (max 3 Versuche)
# Bei PASS: Nächste Lektion
#
# Usage: ./didaktik-loop/gesamt-loop.sh [max_iterations]

set -e

# Erlaubt Start aus einer laufenden Claude-Session heraus
unset CLAUDECODE

MAX_ITERATIONS=${1:-25}
ITERATION=0
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PROGRESS_FILE="$PROJECT_DIR/didaktik-loop/progress.txt"
PRD_FILE="$PROJECT_DIR/didaktik-loop/prd.json"

echo "═══════════════════════════════════════════════════"
echo "  Gesamt-Loop — 9 Rollen Content-Pipeline"
echo "═══════════════════════════════════════════════════"
echo "Projekt: $PROJECT_DIR"
echo "Max Iterationen: $MAX_ITERATIONS"
echo ""

cd "$PROJECT_DIR"

while [ $ITERATION -lt $MAX_ITERATIONS ]; do
  ITERATION=$((ITERATION + 1))

  # Prüfe ob noch Lektionen offen sind
  REMAINING=$(grep -c '"passes": false' "$PRD_FILE" 2>/dev/null || echo "0")

  if [ "$REMAINING" -eq 0 ]; then
    echo ""
    echo "═══════════════════════════════════════════════════"
    echo "  ALLE 20 LEKTIONEN FERTIG!"
    echo "  Iterationen benötigt: $ITERATION"
    echo "═══════════════════════════════════════════════════"
    echo "$(date): LOOP ABGESCHLOSSEN nach $ITERATION Iterationen" >> "$PROGRESS_FILE"
    exit 0
  fi

  echo ""
  echo "─── Iteration $ITERATION / $MAX_ITERATIONS ───"
  echo "Verbleibende Lektionen: $REMAINING"
  echo ""

  # ═══════════════════════════════════════════════════
  # Claude Code mit dem Gesamt-Prompt starten
  # ═══════════════════════════════════════════════════
  cat didaktik-loop/GESAMT-PROMPT.md | claude --print --dangerously-skip-permissions

  # ═══════════════════════════════════════════════════
  # TSC-Check (Rolle 9)
  # ═══════════════════════════════════════════════════
  echo ""
  echo "=== TSC-Check ==="
  if npx tsc --noEmit 2>&1; then
    echo "✅ TypeScript: PASS"
    echo "$(date): Iteration $ITERATION — TSC PASS" >> "$PROGRESS_FILE"
  else
    echo "❌ TypeScript: FAIL"
    echo "$(date): Iteration $ITERATION — TSC FAIL" >> "$PROGRESS_FILE"
    echo "Nächste Iteration wird TSC-Fehler fixen..."
  fi

  echo ""
  echo "Iteration $ITERATION abgeschlossen."
  echo "$(date): Iteration $ITERATION done (Remaining: $((REMAINING - 1)))" >> "$PROGRESS_FILE"
done

echo ""
echo "═══════════════════════════════════════════════════"
echo "  Max Iterationen erreicht ($MAX_ITERATIONS)"
echo "═══════════════════════════════════════════════════"
REMAINING=$(grep -c '"passes": false' "$PRD_FILE" 2>/dev/null || echo "0")
echo "Verbleibende Lektionen: $REMAINING"
