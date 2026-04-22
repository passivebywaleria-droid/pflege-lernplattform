---
name: medical-svg
description: Medizinische SVG-Illustrationen für Pflege-Lernplattformen. Anatomie (Organe, Systeme), Pflegeprozesse (Flowcharts), Geräte-Schemata. Trigger bei Anatomie-Bildern, Organ-Diagrammen, Pflegeprozess-Visualisierungen.
---

# Medical SVG — Medizinische Illustrationen

Erstellt **anatomisch korrekte**, **lernoptimierte** SVG-Illustrationen für die Pflegeausbildung.

## Wann diesen Skill nutzen

- Anatomie-Illustration (Organe, Systeme, Querschnitte)
- Pflegeprozess-Flowchart (Entscheidungsbäume, Handlungsabläufe)
- Geräte-Schema (Infusionspumpe, Katheter, Verbandtechnik)
- Vergleichsdiagramme (gesund vs. krank, vorher vs. nachher)
- Beschriftete Lernbilder mit Hover/Klick-Bereichen

## Design-Prinzipien

### 1. Anatomische Korrektheit zuerst

- Proportionen müssen stimmen (z.B. LV-Wand 3× dicker als RV)
- Strukturzahlen korrekt (C1-C7, Th1-Th12, L1-L5)
- Fachbegriffe DE + Latein immer zusammen
- Quelle: I Care Anatomie Physiologie (Thieme 2020)

### 2. B1-optimiert

- Klare Labels in einfacher Sprache + Fachbegriff
- Große Schrift (min. 12px für Labels, 14px für Haupttext)
- Farbcodierung statt nur Text (O₂-arm = blau, O₂-reich = rot)
- Legende immer sichtbar

### 3. Plattform-Farbpalette (Pflicht)

```
Primär:        #C4877F  (Dusty Rose)
Erfolg:        #6B8F71  (Sage Green)
Warnung:       #D4956A  (Warm Orange)
Fehler:        #C96B5C  (Muted Red)
Info:          #9B7EA6  (Soft Purple)
Sekundär:      #8AABB5  (Steel Blue)
Hintergrund:   #fafaf9  (Warm White)
Border:        #E5DFD6  (Warm Gray)
Text:          #1d1d1f  (Near Black)
Text-Light:    #78716c  (Warm Gray)

Anatomie-spezifisch:
O₂-arm:        #5A8A9A → #8AABB5 → #B8D4DD  (Blautöne)
O₂-reich:      #C96B5C → #D4A09A → #E8B5AF  (Rottöne)
Knochen:       #E8DCC8 → #D4C4A8  (Beige)
Muskel:        #D4956A → #E8B5A0  (Warm)
Nerven:        #D4956A  (Gelb-Orange)
Knorpel:       #8AABB5  (Blaugrau)
Klappen/Ventil:#6B8F71  (Grün)
Organ-Kontur:  #78716c  (Warm Gray)
```

### 4. Mobile-First

- ViewBox für Smartphone: 400×700 (Hochformat, Anatomie)
- ViewBox für Prozesse: 700×500 (Querformat)
- Touch-Targets min. 44×44px für interaktive Bereiche
- Text nie unter 11px

## Workflow

### Schritt 1: Kategorie bestimmen

| Kategorie | ViewBox | Stil | Template |
|-----------|---------|------|----------|
| **Organ-Querschnitt** | 400×700 | Lehrbuch, detailliert | `references/organ-template.md` |
| **Körpersystem** | 400×800 | Lateral/Frontal, beschriftet | `references/system-template.md` |
| **Pflegeprozess** | 700×500 | Flowchart, Entscheidungen | `references/process-template.md` |
| **Vergleich** | 700×400 | Split-View, vorher/nachher | `references/compare-template.md` |
| **Geräte-Schema** | 400×500 | Technisch, beschriftet | `references/device-template.md` |

### Schritt 2: JSON-Spec erstellen

Nutze die Spec-Struktur aus `references/spec.md`. Erweiterte medizinische Felder:

```json
{
  "canvas": {"width": 400, "height": 700, "viewBox": "0 0 400 700", "background": "#fafaf9"},
  "metadata": {
    "title": "Herz — Frontalschnitt",
    "titleLatin": "Cor — Sectio coronalis",
    "organ": "herz",
    "system": "herz-kreislauf",
    "source": "I Care Anatomie Physiologie, Thieme 2020, S. 234-241",
    "b1Level": true
  },
  "defs": { ... },
  "elements": [ ... ],
  "labels": [
    {
      "id": "lv",
      "name": "Linke Kammer",
      "latin": "Ventriculus sinister",
      "b1": "Die linke Herzkammer pumpt Blut in den Körper.",
      "detail": "Dickste Wand (~13mm), erzeugt systemischen Blutdruck.",
      "leaderLine": {"from": [320, 360], "to": [420, 360]}
    }
  ]
}
```

### Schritt 3: SVG bauen

```bash
python3 <SKILL_DIR>/../svg-precision/scripts/svg_cli.py build spec.json out.svg
python3 <SKILL_DIR>/../svg-precision/scripts/svg_cli.py validate out.svg
```

### Schritt 4: Validieren

Medizinische Checkliste (manuell):
- [ ] Anatomische Proportionen korrekt?
- [ ] Alle Strukturen beschriftet (DE + Latein)?
- [ ] Farbcodierung konsistent mit Palette?
- [ ] B1-tauglich (einfache Sprache in Labels)?
- [ ] Mobile-lesbar (keine Schrift < 11px)?
- [ ] Legende vorhanden?
- [ ] Quelle angegeben in Metadata?

## Anatomie-Bibliothek (Pfade)

### Verfügbar:
- `public/images/content/svg/herz-querschnitt.svg` — Frontalschnitt, 14 Strukturen
- `public/images/content/svg/wirbelsaeule-lateral.svg` — 24 Wirbel, 4 Krümmungen

### Geplant (nach LE-Bedarf):
- Lunge (Bronchialbaum + Alveolen)
- Niere (Nephron-Detail)
- Gehirn (Sagittalschnitt)
- Haut (Schichtaufbau + Dekubitus-Stadien)
- Verdauungstrakt (Übersicht)
- Bewegungsapparat (Gelenk-Schema)

## Pflegeprozess-Diagramme

Für Pflegeprozesse nutze den Sketch-Renderer (rough.js) für einen warmen, einladenden Look:

```bash
node <SKILL_DIR>/../excalidraw-sketch/scripts/render.mjs spec.json output-dir/
```

### Prozess-Typen:
- **Entscheidungsbaum**: Diamond für Ja/Nein, Rechteck für Maßnahmen
- **Handlungsablauf**: Sequenziell, nummeriert, mit Zeitangaben
- **Pflegeplanung**: ABEDL → Problem → Ziel → Maßnahme → Evaluation

## Interaktive Variante (D3.js)

Für Lern-Engine Steps vom Typ `labelImage` oder `diagram`:

```html
<!-- Standalone HTML mit D3.js für klickbare Anatomie -->
<script src="https://d3js.org/d3.v7.min.js"></script>
```

Nutze `references/d3-anatomy-template.html` als Basis.

### Interaktive Features:
- Hover → Struktur-Highlight + Kurzinfo-Tooltip
- Klick → Detail-Panel mit Erklärung (DE + Latein + B1)
- Reset bei Hintergrund-Klick
- Touch-optimiert (44px Mindestgröße)

## Referenzen

- `references/spec.md` — JSON-Schema (erweitert svg-precision)
- `references/anatomy-palette.md` — Farbpalette nach Gewebetyp
- `references/organ-recipes.md` — Bewährte Pfad-Muster für Organe
- `references/process-templates.md` — Pflegeprozess-Flowchart-Vorlagen
- `../svg-precision/` — Build + Validate CLI
- `../excalidraw-sketch/` — Sketch-Renderer für Prozessdiagramme
- `../d3-viz/` — D3.js-Patterns für Interaktivität

## Qualitätsregeln

1. **Niemals erfinden** — Nur zeichnen was anatomisch belegt ist
2. **Quelle angeben** — Jedes Bild hat eine Quellenangabe in Metadata
3. **Konsistente Palette** — Immer die Plattform-Farben nutzen
4. **Dual-Label** — Jede Struktur: Deutsch + Latein
5. **B1-Erklärung** — Jedes Label hat eine einfache Erklärung
6. **Mobile zuerst** — Hochformat, große Touch-Targets
7. **Legende Pflicht** — Farbcodierung immer erklärt
8. **Wiederverwendbar** — SVG-IDs stabil für CSS/JS-Targeting
