#!/usr/bin/env bash
# fetch-leitlinien.sh — Lädt frei verfügbare amtliche Leitlinien/Empfehlungen als
# zusätzliche Grounding-Primärquellen (hohe Latte, QUALITAETSSTANDARD-GROUNDING.md R4).
# Quelle wird damit reproduzierbar; PDFs/Extrakte liegen gitignored unter recherche/.
#
# Urheberrecht: AWMF-Leitlinien + RKI/KRINKO-Empfehlungen sind frei veröffentlichte,
# amtliche/öffentliche Dokumente. Nutzung intern zur Fakten-Verifikation (kurze
# Verbatim-Zitate im beleg-Feld). Extraktion: pdftotext Lesereihenfolge (NICHT -layout).
#
# Voraussetzung: curl + pdftotext (brew install poppler)
# Usage: bash scripts/fetch-leitlinien.sh

set -euo pipefail
cd "$(dirname "$0")/.."
PDFDIR="recherche/leitlinien"
TXTDIR="recherche/leitlinien-volltext"
mkdir -p "$PDFDIR" "$TXTDIR"

# url:slug — frei verfügbare Leitlinien/Empfehlungen
get() { # <url> <slug>
  curl -sL -A "Mozilla/5.0" -o "$PDFDIR/$2.pdf" "$1"
  pdftotext "$PDFDIR/$2.pdf" "$TXTDIR/$2.txt" 2>/dev/null || true
  printf "  %-32s %8s Woerter\n" "$2" "$(wc -w < "$TXTDIR/$2.txt" | tr -d ' ')"
}

get "https://register.awmf.org/assets/guidelines/003-001l_S3_Prophylaxe-venoese-Thromboembolie-VTE_2026-04.pdf" "awmf-vte-prophylaxe"
get "https://edoc.rki.de/bitstream/handle/176904/260/220QQ8Itoi1ME.pdf?sequence=1&isAllowed=y" "rki-krinko-harnwegsinfektion"
# Weitere frei verfügbare Quellen hier ergänzen (siehe specs/QUELLEN-EINKAUFSLISTE-2026-06-10.md Abschnitt A/B):
# get "<DGE D-A-CH Referenzwerte>" "dge-referenzwerte"
# get "<ESPEN/DGEM Klinische Ernaehrung>" "espen-klinische-ernaehrung"
# get "<EPUAP-NPIAP Quick Reference Dekubitus>" "epuap-dekubitus-quickref"
# get "<IDDSI Framework>" "iddsi-framework"

echo "Verifizieren: npx tsx scripts/zitat-verifizierer.ts \"leitlinien-volltext/<slug>.txt\" \"<zitat>\""
