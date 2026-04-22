# Pflegeprozess-Templates

Vorlagen für Flowcharts und Entscheidungsbäume in der Pflegeausbildung.
Nutze den **excalidraw-sketch Renderer** (rough.js) für den warmen Whiteboard-Look.

## Renderer-Aufruf

```bash
node .claude/skills/excalidraw-sketch/scripts/render.mjs spec.json output-dir/
```

## Template 1: Entscheidungsbaum (Pflegehandlung)

Beispiel: "Soll ich den Arzt informieren?"

```json
{
  "title": "Arztinformation bei Vitalzeichen",
  "width": 700,
  "height": 500,
  "background": "#fafaf9",
  "elements": [
    {"type": "rectangle", "id": "start", "x": 260, "y": 30, "width": 180, "height": 60,
     "fill": "#d1e7dd", "stroke": "#6B8F71", "rounded": true,
     "label": "Vitalzeichen messen"},

    {"type": "diamond", "id": "check", "x": 260, "y": 140, "width": 180, "height": 100,
     "fill": "#fef3c7", "stroke": "#D4956A",
     "label": "Werte normal?"},

    {"type": "rectangle", "id": "ok", "x": 480, "y": 160, "width": 160, "height": 60,
     "fill": "#d1e7dd", "stroke": "#6B8F71", "rounded": true,
     "label": "Dokumentieren"},

    {"type": "rectangle", "id": "arzt", "x": 60, "y": 160, "width": 160, "height": 60,
     "fill": "#fbe8e5", "stroke": "#C96B5C", "rounded": true,
     "label": "Arzt informieren"},

    {"type": "arrow", "from": "start", "to": "check"},
    {"type": "arrow", "from": "check", "to": "ok", "label": "Ja", "fromSide": "right", "toSide": "left"},
    {"type": "arrow", "from": "check", "to": "arzt", "label": "Nein", "fromSide": "left", "toSide": "right"}
  ]
}
```

## Template 2: Pflegeplanung (ABEDL-basiert)

```json
{
  "title": "Pflegeplanung Dekubitus",
  "width": 800,
  "height": 450,
  "background": "#fafaf9",
  "elements": [
    {"type": "rectangle", "id": "problem", "x": 40, "y": 60, "width": 160, "height": 80,
     "fill": "#fbe8e5", "stroke": "#C96B5C", "rounded": true,
     "label": "Problem", "annotation": "Dekubitus Grad II am Steißbein"},

    {"type": "rectangle", "id": "ziel", "x": 240, "y": 60, "width": 160, "height": 80,
     "fill": "#ddd6fe", "stroke": "#9B7EA6", "rounded": true,
     "label": "Ziel", "annotation": "Wundverkleinerung in 14 Tagen"},

    {"type": "rectangle", "id": "massnahme", "x": 440, "y": 60, "width": 160, "height": 80,
     "fill": "#d1e7dd", "stroke": "#6B8F71", "rounded": true,
     "label": "Maßnahme", "annotation": "2-stündliche Lagerung"},

    {"type": "rectangle", "id": "eval", "x": 640, "y": 60, "width": 160, "height": 80,
     "fill": "#e8f4f8", "stroke": "#5A8A9A", "rounded": true,
     "label": "Evaluation", "annotation": "Wundgröße messen alle 3 Tage"},

    {"type": "arrow", "from": "problem", "to": "ziel"},
    {"type": "arrow", "from": "ziel", "to": "massnahme"},
    {"type": "arrow", "from": "massnahme", "to": "eval"},
    {"type": "arrow", "from": "eval", "to": "problem", "label": "Anpassen",
     "fromSide": "bottom", "toSide": "bottom"}
  ]
}
```

## Template 3: Handlungsablauf (Step-by-Step)

Beispiel: Händedesinfektion

```json
{
  "title": "Händedesinfektion — 6 Schritte",
  "width": 800,
  "height": 350,
  "background": "#fafaf9",
  "elements": [
    {"type": "rectangle", "id": "s1", "x": 20, "y": 80, "width": 110, "height": 70,
     "fill": "#B8D4DD", "stroke": "#5A8A9A", "rounded": true,
     "label": "1. Handflächen", "fontSize": 13},
    {"type": "rectangle", "id": "s2", "x": 150, "y": 80, "width": 110, "height": 70,
     "fill": "#B8D4DD", "stroke": "#5A8A9A", "rounded": true,
     "label": "2. Handrücken", "fontSize": 13},
    {"type": "rectangle", "id": "s3", "x": 280, "y": 80, "width": 110, "height": 70,
     "fill": "#B8D4DD", "stroke": "#5A8A9A", "rounded": true,
     "label": "3. Fingerzwischen", "fontSize": 13},
    {"type": "rectangle", "id": "s4", "x": 410, "y": 80, "width": 110, "height": 70,
     "fill": "#B8D4DD", "stroke": "#5A8A9A", "rounded": true,
     "label": "4. Fingerkuppen", "fontSize": 13},
    {"type": "rectangle", "id": "s5", "x": 540, "y": 80, "width": 110, "height": 70,
     "fill": "#B8D4DD", "stroke": "#5A8A9A", "rounded": true,
     "label": "5. Daumen", "fontSize": 13},
    {"type": "rectangle", "id": "s6", "x": 670, "y": 80, "width": 110, "height": 70,
     "fill": "#d1e7dd", "stroke": "#6B8F71", "rounded": true,
     "label": "6. Handgelenke", "fontSize": 13},

    {"type": "arrow", "from": "s1", "to": "s2"},
    {"type": "arrow", "from": "s2", "to": "s3"},
    {"type": "arrow", "from": "s3", "to": "s4"},
    {"type": "arrow", "from": "s4", "to": "s5"},
    {"type": "arrow", "from": "s5", "to": "s6"},

    {"type": "text", "x": 400, "y": 200,
     "text": "Einwirkzeit: mind. 30 Sekunden",
     "fontSize": 15, "color": "#C96B5C"},
    {"type": "text", "x": 400, "y": 230,
     "text": "WHO-Methode, 5 Momente der Händehygiene",
     "fontSize": 12, "color": "#78716c"}
  ]
}
```

## Farb-Semantik für Prozesse

| Element | Farbe (Fill) | Bedeutung |
|---------|-------------|-----------|
| **Start / Ende** | `#d1e7dd` (Grün) | Beginn/Abschluss |
| **Entscheidung** | `#fef3c7` (Gelb) | Ja/Nein-Frage |
| **Maßnahme** | `#B8D4DD` (Blau) | Handlung durchführen |
| **Warnung** | `#fbe8e5` (Rosa) | Achtung, Risiko |
| **Info / Doku** | `#ddd6fe` (Lila) | Dokumentation |
| **Zone** | `#e8f4f8` / `#fbe8e5` | Gruppierung (sehr hell) |

## Regeln für Pflegeprozess-Diagramme

1. **Max 8 Knoten** pro Diagramm (sonst aufteilen)
2. **Entscheidungen immer als Raute** (Diamond)
3. **Ja/Nein beschriften** an den Pfeilen
4. **Farbe = Bedeutung** (nicht Dekoration)
5. **Lateinisch-frei** — Prozesse sind B1-deutsch, keine Fachlatein
6. **Zeitangaben** wo relevant (Einwirkzeit, Intervalle)
7. **Quelle** als Text-Element unten (Expertenstandard, Leitlinie)
