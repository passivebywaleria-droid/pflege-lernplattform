#!/usr/bin/env bash
# fetch-dnqp-standards.sh — Lädt die frei veröffentlichten DNQP-Expertenstandard-
# Auszüge und extrahiert den Volltext für die Quellenbindung der Kernfakten
# (Roadmap Phase 1). Quelle wird damit REPRODUZIERBAR — die PDFs/Extrakte selbst
# liegen unter recherche/ (gitignored), dieses Skript ist die getrackte Anleitung.
#
# Quelle:      https://www.dnqp.de/expertenstandards-und-auditinstrumente/
# Urheberrecht: Frei zugängliche Auszüge (Leseproben) des DNQP. Nutzung NUR intern
#              zur Fakten-Verifikation (kurze Verbatim-Zitate im beleg-Feld),
#              KEINE wörtliche Wiedergabe längerer Passagen im App-Content.
# Extraktion:  pdftotext OHNE -layout (Lesereihenfolge) — sonst verschränken die
#              3-spaltigen Standardkriterien-Tabellen die Zitate.
#
# Voraussetzung: curl + pdftotext (brew install poppler)
# Usage:         bash scripts/fetch-dnqp-standards.sh

set -euo pipefail
cd "$(dirname "$0")/.."
PDFDIR="recherche/dnqp-standards"
TXTDIR="recherche/dnqp-standards-index"
mkdir -p "$PDFDIR" "$TXTDIR"
BASE="https://www.dnqp.de/fileadmin/HSOS/Homepages/DNQP/Dateien/Expertenstandards"

# pfad:slug — neueste Aktualisierung je Standard
STANDARDS="
Sturzprophylaxe/Sturz_2Akt_Auszug.pdf:sturzprophylaxe
Dekubitusprophylaxe/Dekubitus_2Akt_Auszug.pdf:dekubitusprophylaxe
Ernaehrungsmanagement/Ernaehrung_Akt_Auszug.pdf:ernaehrungsmanagement
Kontinenzfoerderung/Kontinenz_Akt2024_Auszug.pdf:kontinenzfoerderung
Hautintegritaet/Haut_AV_Auszug.pdf:hautintegritaet
Mundgesundheit/Mund_AV_Auszug.pdf:mundgesundheit
Schmerzmanagement/Schmerz-Akt2020_Auszug.pdf:schmerzmanagement
Chronische_Wunden/cWunden_2Akt_Auszug.pdf:chronische-wunden
Demenz/Demenz_AV_Auszug.pdf:demenz-beziehungsgestaltung
Entlassungsmanagement/Entlassung_2Akt_Auszug.pdf:entlassungsmanagement
"

for entry in $STANDARDS; do
  path="${entry%%:*}"; slug="${entry##*:}"
  curl -sL -A "Mozilla/5.0" -o "$PDFDIR/$slug.pdf" "$BASE/$path"
  pdftotext "$PDFDIR/$slug.pdf" "$TXTDIR/$slug.txt" 2>/dev/null || true
  printf "  %-28s %6s Woerter\n" "$slug" "$(wc -w < "$TXTDIR/$slug.txt" | tr -d ' ')"
done

echo "Fertig. Verifizieren:  npx tsx scripts/zitat-verifizierer.ts \"dnqp-standards-index/sturzprophylaxe.txt\" \"<zitat>\""
