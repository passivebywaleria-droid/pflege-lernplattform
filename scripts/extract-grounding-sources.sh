#!/usr/bin/env bash
# extract-grounding-sources.sh — Re-extrahiert die lokalen Lehrbuch-PDFs im
# LESEREIHENFOLGE-Modus (pdftotext OHNE -layout) als verbatim-matchbare
# Grounding-Quellen für den Zitat-Verifizierer (Roadmap Phase 1).
#
# WARUM: Die bestehenden recherche/*-index/ wurden mit -layout extrahiert →
# 2-/3-spaltige Lehrbuch-Layouts verschränken die Sätze + Silbentrennung an
# Zeilenenden. Verbatim-Zitate scheitern dann. Lesereihenfolge-Extraktion liefert
# zusammenhängende Sätze (bewiesen: Pflege heute "freiheitsentziehende Maßnahmen
# benötigen grundsätzlich einen richterlichen Beschluss…" matcht sauber).
#
# Ausgabe: recherche/<quelle>-volltext/<quelle>.txt (gitignored, lokal)
# Urheberrecht: interne Fakten-Verifikation, kurze Verbatim-Zitate im beleg-Feld.
#
# Usage: bash scripts/extract-grounding-sources.sh

set -euo pipefail
cd "$(dirname "$0")/.."

extract() { # <pdf> <slug>
  local pdf="$1" slug="$2"
  [ -f "$pdf" ] || { echo "  ÜBERSPRUNGEN (PDF fehlt): $pdf"; return; }
  mkdir -p "recherche/$slug-volltext"
  pdftotext "$pdf" "recherche/$slug-volltext/$slug.txt" 2>/dev/null || true
  printf "  %-18s %8s Woerter\n" "$slug" "$(wc -w < "recherche/$slug-volltext/$slug.txt" | tr -d ' ')"
}

echo "Grounding-Quellen (Lesereihenfolge):"
extract "recherche/icare/pflegeheute-7nbsped-3437182315-9783437182310_compress.pdf" "pflege-heute"
# Weitere Lehrbuch-PDFs hier ergänzen, sobald als Grounding-Quelle gebraucht:
# extract "recherche/icare/icare-pflege.pdf" "icare-pflege"
# extract "recherche/icare/anatomie.pdf" "anatomie"

echo "Verifizieren:  npx tsx scripts/zitat-verifizierer.ts --check-file specs/ce-XX/kernfakten/<thema>.md"
