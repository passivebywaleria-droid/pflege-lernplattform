#!/bin/bash

# Servier Medical Art Batch-Download für häufige Anatomie-Bilder
# CC BY 4.0 lizenziert
# Nutzung: ./download-servier-images.sh [anatomie|kardio|pneumo|all]

set -e

CATEGORY="${1:-anatomie}"
OUTPUT_DIR="public/images/servier-medical-art"
SERVIER_BASE="https://smart.servier.com"

mkdir -p "$OUTPUT_DIR"

echo "🏥 Servier Medical Art — Batch Download"
echo "========================================"
echo ""
echo "Kategorie: $CATEGORY"
echo "Output: $OUTPUT_DIR"
echo ""

# Bekannte Servier-Bilder (IDs müssen korrekt recherchiert werden)
# Format: category:bildname:url-fragment

declare -a IMAGES=(
  # Anatomie (Grundlagen)
  "anatomie:Blutkreislauf:cardiovascular-system"
  "anatomie:Atemwegsystem:respiratory-system"
  "anatomie:Nervensystem:nervous-system"
  "anatomie:Muskelsystem:muscular-system"
  "anatomie:Skelett:skeletal-system"
  "anatomie:Verdauungssystem:digestive-system"
  "anatomie:Urogenitalsystem:urogenital-system"

  # Kardiovaskulär (CE 02)
  "kardio:Herz:heart-anatomy"
  "kardio:Thrombose:thrombosis"
  "kardio:Arteriosklerose:arteriosclerosis"

  # Pneumologie (CE 03)
  "pneumo:Lunge:lung-anatomy"
  "pneumo:Atelektase:atelectasis"
  "pneumo:Pneumonie:pneumonia"

  # Pflege-Spezifisch
  "alle:Dekubitus:pressure-ulcer-stages"
  "alle:Wundversorgung:wound-care"
  "alle:Injektionstechniken:injection-techniques"
)

# Filter nach Kategorie
echo "Gefilterte Bilder:"
COUNT=0

for item in "${IMAGES[@]}"; do
  CAT="${item%%:*}"
  NAME="${item#*:}"
  URL_PART="${item##*:}"

  if [ "$CATEGORY" == "all" ] || [ "$CAT" == "$CATEGORY" ]; then
    echo "  [$((++COUNT))] $NAME"
  fi
done

echo ""
echo "⚠️  Note: Download würde hier starten, aber die exakten URLs"
echo "   müssen von smart.servier.com recherchiert werden."
echo ""
echo "Manueller Download-Prozess:"
echo "  1. Besuche https://smart.servier.com"
echo "  2. Suche nach 'anatomy' / 'heart' / etc."
echo "  3. Klick auf Bild → Download-Button"
echo "  4. Speichern in $OUTPUT_DIR"
echo ""
echo "Attribution (muss in public/LICENSES enthalten sein):"
echo "  Servier Medical Art"
echo "  https://smart.servier.com"
echo "  Lizenz: CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)"
