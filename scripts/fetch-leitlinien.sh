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
get "https://achpccg.com/wp-content/uploads/2024/10/Nut-in-Clin-Prac-2020-da-Silva-ASPEN-Consensus-Recommendations-for-Refeeding-Syndrome.pdf" "aspen-refeeding"
get "https://www.csap.cam.ac.uk/media/uploads/files/1/leonard-2004-standardised-communication.pdf" "sbar-leonard-2004"
get "https://www.nhshighland.scot.nhs.uk/media/ap4fvgob/complete_iddsi_framework_detailed_definitions_july_2019.pdf" "iddsi-framework"
get "https://nzwcs.org.nz/images/1Resources/Quick_Ref_2019_PI_Guidelines.pdf" "epuap-dekubitus-2019"
get "https://www.dge.de/fileadmin/dok/wissenschaft/referenzwerte/Erlaeuterungen_2021.pdf" "dge-referenzwerte-erlaeuterungen"
get "https://ernaehrungs-umschau.de/fileadmin/Ernaehrungs-Umschau/pdfs/pfd_2009/06_09/EU06_346_353.qxd.pdf" "dge-dach-referenzwerte"

# Amtliche Gesetzestexte (gesetze-im-internet.de, HTML -> txt via textutil/macOS).
# Belegen Pflegedokumentation: § 630f BGB (Dokumentationspflicht/Pflichtinhalte/eDoku-Aenderbarkeit),
# § 267 StGB (Urkundenfaelschung), § 203 StGB (Schweigepflicht).
getlaw() { # <url> <slug>
  curl -sL -A "Mozilla/5.0" -o "$PDFDIR/$2.html" "$1"
  if command -v textutil >/dev/null 2>&1; then
    textutil -convert txt -encoding UTF-8 -output "$TXTDIR/$2.txt" "$PDFDIR/$2.html" 2>/dev/null || true
  else
    # Fallback ohne macOS: grobe HTML->txt-Reinigung
    sed -e 's/<[^>]*>//g' "$PDFDIR/$2.html" > "$TXTDIR/$2.txt"
  fi
  printf "  %-32s %8s Woerter\n" "$2" "$(wc -w < "$TXTDIR/$2.txt" | tr -d ' ')"
}
getlaw "https://www.gesetze-im-internet.de/bgb/__630f.html" "bgb-630f"
getlaw "https://www.gesetze-im-internet.de/stgb/__267.html" "stgb-267"
getlaw "https://www.gesetze-im-internet.de/stgb/__203.html" "stgb-203"

# DGSM S3-Leitlinie Insomnie bei Erwachsenen 2025 (AWMF 063-003) — belegt schlaf F-10
# (Alkohol kein Schlafmittel) + F-12 (KVT-I/nichtmedikamentoes als Erstlinie vor Medikation).
get "https://register.awmf.org/assets/guidelines/063-003l_S3_Insomnie-bei-Erwachsenen_2025-04.pdf" "dgsm-insomnie-2025"
# DGEM S3-Leitlinie Heimenterale/-parenterale Ernaehrung 2024 (AWMF 073-021) — belegt
# enterale-ernaehrung F-09 (Routine-Spuelmenge 20-40 mL nach Medikamentengabe).
get "https://register.awmf.org/assets/guidelines/073-021l_S3_Heimenterale-heimparenterale-Ernaehrung__2024-05.pdf" "dgem-heimenterale-2024"

# WHO Guideline Sugars intake for adults and children 2015 — belegt ernaehrungsgrundlagen
# (freie Zucker <10 %, konditional <5 % der Energiezufuhr). Bitstream-API, da
# iris.who.int/bitstream/handle/... HTTP 500 liefert.
get "https://iris.who.int/server/api/core/bitstreams/4be74f01-de93-4596-bbd1-02a97afb1221/content" "who-zucker-2015"
# AWMF S1 Neurogene Dysphagie 030-111 (Stand 2020, formal abgelaufen 2025-03 — letzte
# publizierte Fassung; Nachfolger noch nicht erschienen). Belegt Dysphagie-Claims in
# essen-anreichen/ernaehrung.
get "https://register.awmf.org/assets/guidelines/030-111l_Neurogene-Dysphagie_2025-03_abgelaufen.pdf" "awmf-dysphagie"
# Pflege-Charta (BMBFSFJ) — Charta der Rechte hilfe- und pflegebeduerftiger Menschen,
# Artikel 1-8 (Selbstbestimmung, Privatheit etc.).
get "https://www.bmbfsfj.bund.de/resource/blob/93450/be474bfdb4016bbbca9bf87b4cb9264b/charta-der-rechte-hilfe-und-pflegebeduerftiger-menschen-data.pdf" "pflege-charta"
# § 1827 BGB (Patientenverfuegung, frueher § 1901a) — belegt essen-anreichen F-09.
getlaw "https://www.gesetze-im-internet.de/bgb/__1827.html" "bgb-1827"
# § 1831 BGB (FeM/Unterbringung, frueher § 1906) — belegt positionierung F-12 + sturz F-08.
getlaw "https://www.gesetze-im-internet.de/bgb/__1831.html" "bgb-1831"
# Weitere frei verfügbare Quellen hier ergänzen (siehe specs/QUELLEN-EINKAUFSLISTE-2026-06-10.md Abschnitt A/B):
# get "<DGE D-A-CH Referenzwerte>" "dge-referenzwerte"
# get "<ESPEN/DGEM Klinische Ernaehrung>" "espen-klinische-ernaehrung"
# get "<EPUAP-NPIAP Quick Reference Dekubitus>" "epuap-dekubitus-quickref"
# get "<IDDSI Framework>" "iddsi-framework"

echo "Verifizieren: npx tsx scripts/zitat-verifizierer.ts \"leitlinien-volltext/<slug>.txt\" \"<zitat>\""
