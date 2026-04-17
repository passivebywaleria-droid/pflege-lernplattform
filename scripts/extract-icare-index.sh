#!/bin/bash
# Extrahiert alle I Care Pflege Kapitel als .md-Dateien
# Quelle: I Care Pflege (Thieme, 2020), 2. Auflage
# Zweck: Dozentin-Agent kann Kapitel direkt lesen statt pdftotext

PDF="recherche/icare/Icare Pflege.pdf"
OUT="recherche/icare-index"

mkdir -p "$OUT"

extract() {
  local kap="$1"
  local title="$2"
  local start="$3"
  local end="$4"
  local file="$OUT/kap-${kap}.md"

  echo "Extrahiere Kap. $kap: $title (S. $start-$end)..."

  {
    echo "# Kapitel $kap: $title"
    echo ""
    echo "> Quelle: I Care Pflege (Thieme, 2020), S. $start-$end"
    echo "> Automatisch extrahiert — Formatierung kann abweichen"
    echo ""
    echo "---"
    echo ""
    pdftotext -f "$start" -l "$end" "$PDF" - 2>/dev/null
  } > "$file"

  local lines=$(wc -l < "$file")
  echo "  -> $file ($lines Zeilen)"
}

# Teil 1: Grundlagen des Pflegeberufs (Kap. 1-8)
extract "01" "Professionelle Pflege" 20 33
extract "02" "Ausbildung und Beruf konkret" 34 77
extract "03" "Pflege als Prozess gestalten" 78 99
extract "04" "Pflegewissenschaft" 100 115
extract "05" "Pflegetheorien und Pflegemodelle" 116 135
extract "06" "Das deutsche Sozial- und Gesundheitssystem" 136 169
extract "07" "Rechtliche Grundlagen der Pflege" 170 189
extract "08" "Qualitaets- und Fehlermanagement" 190 209

# Teil 2: Mit Menschen arbeiten (Kap. 9-12)
extract "09" "Grundlagen der Entwicklung und Psychologie" 210 247
extract "10" "Mit Menschen kommunizieren" 248 265
extract "11" "Mit Menschen zusammenarbeiten" 266 279
extract "12" "Ethisch handeln" 280 295

# Teil 3: Pflegebasismassnnahmen (Kap. 13-23)
extract "13" "Hygiene" 296 317
extract "14" "Wahrnehmen und Beobachten" 318 341
extract "15" "Mobilisation Positionierung und Schlaf" 342 369
extract "16" "Koerperpflege und Bekleidung" 370 391
extract "17" "Prophylaxen" 392 441
extract "18" "Ernaehrung" 442 477
extract "19" "Ausscheidung" 478 509
extract "20" "Medikamentenmanagement" 510 529
extract "21" "Schmerzmanagement" 530 549
extract "22" "Informieren Schulen Anleiten und Beraten" 550 557
extract "23" "Notfallsituationen" 558 589

# Teil 4: Pflegetechniken (Kap. 24-31)
extract "24" "Injektionen und Blutentnahme" 590 609
extract "25" "Gefaesszugaenge Infusionen und Transfusionen" 610 637
extract "26" "Punktionen und Biopsien" 638 645
extract "27" "Sonden und Drainagen" 646 665
extract "28" "Wundmanagement" 666 691
extract "29" "Verbandtechniken" 692 703
extract "30" "Pflege bei Fieber" 704 711
extract "31" "Wickel und Auflagen" 712 719

# Teil 5: Menschen in unterschiedlichen Settings pflegen (Kap. 32-43)
extract "32" "Die 4 Handlungsfelder der Pflege" 720 733
extract "33" "Pflege von Menschen im Krankenhaus Kinder und alte Menschen" 734 741
extract "34" "Pflege von Menschen im haeuslichen Umfeld" 742 751
extract "35" "Pflege von Menschen in stationaeren Langzeiteinrichtungen" 752 759
extract "36" "Grundlagen der Pflege von Menschen mit geistiger Behinderung" 760 769
extract "37" "Pflege von chronisch kranken und multimorbiden Menschen" 770 779
extract "38" "Pflege von Menschen mit malignen Tumoren" 780 799
extract "39" "Pflege von Menschen in der perioperativen Phase" 800 813
extract "40" "Pflege von Menschen auf der Intensivstation" 814 831
extract "41" "Pflege des sterbenden Menschen" 832 847
extract "42" "Pflege von Menschen unterschiedlicher Kulturen" 848 857
extract "43" "Pflege bei Schwangerschaft Geburt und Wochenbett" 858 880

echo ""
echo "=== Fertig! ==="
echo "$(ls $OUT/*.md | wc -l) Kapitel extrahiert nach $OUT/"
echo ""
echo "Kapitel-Index:"
for f in $OUT/kap-*.md; do
  lines=$(wc -l < "$f")
  head -1 "$f" | sed "s/# //" | xargs -I{} echo "  $f ($lines Zeilen) — {}"
done
