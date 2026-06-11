#!/usr/bin/env bash
# extract-buecher.sh — Extrahiert die Buch-PDFs aus ~/Downloads in Lesereihenfolge
# (pdftotext OHNE -layout) nach recherche/<slug>-volltext/<slug>.txt, damit der
# zitat-verifizierer verbatim matchen kann (gleiche Pipeline wie pflege-heute-volltext).
#
# Urheberrecht: Buecher liegen lokal vor (Gruenderin), Nutzung intern zur
# Fakten-Verifikation (kurze Verbatim-Zitate im Beleg-Feld). Volltexte sind
# gitignored (recherche/* Whitelist-Prinzip) — nie committen.
#
# Usage: bash scripts/extract-buecher.sh

set -euo pipefail
cd "$(dirname "$0")/.."
DL="$HOME/Downloads"

ex() { # <pdf-path> <slug>
  local out="recherche/$2-volltext"
  mkdir -p "$out"
  pdftotext "$1" "$out/$2.txt" 2>/dev/null || true
  printf "  %-44s %10s Woerter\n" "$2" "$(wc -w < "$out/$2.txt" | tr -d ' ')"
}

# Prioritaet 1 — loesen bestehende ⚠️ in specs/ce-02/kernfakten/ auf:
ex "$DL/dokumen.pub_gesundheits-und-kinderkrankenpflege-5-aktualisiertenbsped-3132415871-9783132415874.pdf" "kinderkrankenpflege"
ex "$DL/dokumen.pub_nanda-i-pflegediagnosen-definitionen-und-klassifikation-2018-2020-2nbsped-3897521407-9783897521407.pdf" "nanda-pflegediagnosen"
ex "$DL/dokumen.pub_expertenstandards-in-der-pflege-eine-gebrauchsanleitung-4-aufl-2020-978-3-662-59636-4-978-3-662-59637-1.pdf" "expertenstandards-gebrauchsanleitung"
ex "$DL/dokumen.pub_i-care-pflegeexamen-kompakt-9783132439405.pdf" "icare-examen-kompakt"
ex "$DL/dokumen.pub_checkliste-neonatologie-checklisten-medizin-6-aktualisiertenbsped-3132425559-9783132425552.pdf" "neonatologie-checkliste"
ex "$DL/dokumen.pub_prfungswissen-pflegefachfrau-pflegefachmann-fr-die-generalistische-pflegeausbildung-1nbsped-9783437286216-9783437096501.pdf" "pruefungswissen"

# Prioritaet 2 — Zweitquellen / spaetere CEs:
ex "$DL/dokumen.pub_kommunikation-im-gesundheitswesen-1-aufl-2019-978-3-662-59219-9-978-3-662-59220-5.pdf" "kommunikation-gesundheitswesen"
ex "$DL/dokumen.pub_chirurgie-fr-pflegeberufe-krankheitslehre-23-berarbeitetenbsped-9783132404373.pdf" "paetz-chirurgie"
ex "$DL/dokumen.pub_palliativmedizin-4-4nbsped-9783540298885-3540298886-9783540298892-3540298894.pdf" "palliativmedizin-aulbert"
ex "$DL/dokumen.pub_lernen-mit-85-komplexen-fallsituationen-ein-arbeitsbuch-fr-das-erlernen-der-przisen-pflegediagnostik-in-studium-und-praxis-9783991118435.pdf" "fallsituationen-85"
ex "$DL/1 Curriculum generalistische Pflegeausbildung PDF.pdf" "curriculum-generalistik"

echo "Fertig. Verifizieren: npx tsx scripts/zitat-verifizierer.ts \"<slug>-volltext/<slug>.txt\" \"<zitat>\""
