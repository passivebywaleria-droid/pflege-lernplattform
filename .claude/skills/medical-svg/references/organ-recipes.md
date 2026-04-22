# Organ-Rezepte — Bewährte SVG-Muster

Erprobte Pfad-Patterns und Layout-Regeln für anatomische Illustrationen.

## Universelle Regeln

### Aufbau einer Organ-SVG

```
1. Titel + Untertitel (Latein)          y: 20-50
2. Schnittebene-Angabe                  y: 50-60 (klein, grau)
3. Organ-Körper (Hauptgruppe)           y: 80-600
   ├── Äußere Kontur / Kapsel
   ├── Innere Strukturen (Schicht für Schicht)
   ├── Gefäße (Arterien rot, Venen blau)
   ├── Beschriftungslinien + Labels
   └── Flusspfeile (gestrichelt)
4. Legende                              y: 620-680
5. Quellenangabe                        y: 690 (10px, grau)
```

### Leader Lines (Beschriftungslinien)

```json
{
  "type": "group", "children": [
    {"type": "line", "x1": 280, "y1": 360, "x2": 350, "y2": 360,
     "style": {"stroke": "#78716c", "strokeWidth": 0.8}},
    {"type": "circle", "cx": 280, "cy": 360, "r": 2,
     "style": {"fill": "#78716c"}},
    {"type": "text", "x": 355, "y": 356, "text": "Linke Kammer",
     "style": {"fontSize": 12, "fontWeight": 600, "fill": "#1d1d1f"}},
    {"type": "text", "x": 355, "y": 370, "text": "Ventriculus sinister",
     "style": {"fontSize": 10, "fill": "#78716c", "fontStyle": "italic"}}
  ]
}
```

### Flusspfeile

```json
{
  "type": "path",
  "d": "M 130,90 C 130,70 160,50 180,50",
  "style": {
    "fill": "none", "stroke": "#5A8A9A", "strokeWidth": 1.5,
    "strokeDasharray": "6,3", "opacity": 0.6,
    "markerEnd": "url(#arrow-venous)"
  }
}
```

### Pfeil-Marker (in Defs)

```json
{
  "markers": [
    {"id": "arrow-venous", "markerWidth": 8, "markerHeight": 6, "refX": 7, "refY": 3,
     "orient": "auto", "pathD": "M0 0 L8 3 L0 6 Z", "style": {"fill": "#5A8A9A"}},
    {"id": "arrow-arterial", "markerWidth": 8, "markerHeight": 6, "refX": 7, "refY": 3,
     "orient": "auto", "pathD": "M0 0 L8 3 L0 6 Z", "style": {"fill": "#C96B5C"}}
  ]
}
```

---

## Herz (Cor)

### Bewährte Proportionen (Frontalschnitt, 400×700)
- Vorhöfe: y 120-250, Kammern: y 260-460
- Rechtes Herz: x 60-210, Linkes Herz: x 220-370
- Septum: x 210-220 (leicht nach rechts gewölbt)
- LV-Wand: 13px Stroke, RV-Wand: 4px Stroke (3:1)
- Gefäße: y 50-120 (oben), Apex: y 460

### Struktur-Checkliste
- [ ] 4 Kammern (RA, RV, LA, LV) mit korrekter Wanddicke
- [ ] 4 Klappen (TK 3 Segel, MK 2 Segel, PK 3 Taschen, AK 3 Taschen)
- [ ] Septum interventriculare (mit Wölbung nach rechts)
- [ ] Papillarmuskeln (3 in RV, 2 in LV)
- [ ] Chordae tendineae (Sehnenfäden)
- [ ] 5 große Gefäße (V. cava sup/inf, Aorta, Tr. pulmonalis, Vv. pulmonales)
- [ ] Koronararterien (LAD, RCA, LCx) optional bei Detail-Version
- [ ] Blutfluss-Pfeile (venös blau, arteriell rot)
- [ ] O₂-arm / O₂-reich Badges

---

## Wirbelsäule (Columna vertebralis)

### Bewährte Proportionen (Lateralansicht, 400×800)
- HWS (C1-C7): y 80-220, klein, lordotisch
- BWS (Th1-Th12): y 220-480, mittel, kyphotisch
- LWS (L1-L5): y 480-620, groß, lordotisch
- Kreuzbein: y 620-710, verschmolzen
- Steißbein: y 710-750, klein

### Wirbel-Pattern (ein Wirbelkörper)
```json
{
  "type": "group", "children": [
    {"type": "rect", "x": 150, "y": 100, "width": 50, "height": 18, "rx": 4,
     "style": {"fill": "url(#bone-grad)", "stroke": "#A89880", "strokeWidth": 1.2}},
    {"type": "rect", "x": 155, "y": 119, "width": 40, "height": 4, "rx": 2,
     "style": {"fill": "#C4877F", "stroke": "none", "opacity": 0.7}}
  ]
}
```
- Wirbelkörper = abgerundetes Rechteck (Knochen-Gradient)
- Bandscheibe = flaches Rechteck darunter (Dusty Rose, niedrigere Opacity)
- Dornfortsatz = Kreis + Linie nach hinten (posterior)

### Struktur-Checkliste
- [ ] 7+12+5 = 24 einzelne Wirbel + Kreuzbein + Steißbein
- [ ] 23 Bandscheiben (nicht zwischen C1/C2!)
- [ ] 4 Krümmungen (Lordose HWS, Kyphose BWS, Lordose LWS, Kyphose Sakral)
- [ ] S-Kurve sichtbar
- [ ] Farbcodierte Abschnitte mit Klammern/Labels
- [ ] Besondere Wirbel markiert (C1 Atlas, C2 Axis/Dens, C7 Prominens)

---

## Lunge (Pulmo)

### Empfohlene Ansicht: Frontal, 400×600
- Rechte Lunge: 3 Lappen (Ober-, Mittel-, Unterlappen)
- Linke Lunge: 2 Lappen (Ober-, Unterlappen) + Incisura cardiaca
- Trachea zentral oben, Bifurkation bei Carina
- Hauptbronchien → Lappenbronchien → Segmentbronchien

### Struktur-Checkliste
- [ ] Trachea (Knorpelspangen sichtbar)
- [ ] Carina (Bifurkation)
- [ ] Rechter Hauptbronchus (steiler, kürzer, weiter)
- [ ] Linker Hauptbronchus (flacher, länger, enger)
- [ ] 3 Lappen rechts, 2 Lappen links
- [ ] Fissuren (Fissura obliqua bds., Fissura horizontalis rechts)
- [ ] Incisura cardiaca (links unten)
- [ ] Lungenhilus (Gefäße + Bronchien)
- [ ] A./V. pulmonalis am Hilus

---

## Niere (Ren)

### Empfohlene Ansicht: Frontalschnitt, 400×500
- Äußere Kontur bohnenförmig
- Rinde (Cortex) außen, Mark (Medulla) innen
- Nierenpyramiden (8-18) mit Markstrahlen
- Nierenbecken (Pelvis renalis) zentral
- Ureter nach unten

### Struktur-Checkliste
- [ ] Nierenkapsel (dünne Konturlinie)
- [ ] Cortex renalis (Rinde, heller)
- [ ] Medulla renalis (Mark, dunkler, Pyramiden)
- [ ] Papillae renales (Spitzen der Pyramiden)
- [ ] Calices minores/majores
- [ ] Pelvis renalis (Nierenbecken)
- [ ] Hilus renalis (A./V. renalis, Ureter)
- [ ] Nephron-Detail (optional, als Inset)

---

## Haut (Cutis) — Schichtaufbau

### Empfohlene Ansicht: Querschnitt-Block, 400×500
- Epidermis oben (dünn, mehrschichtig)
- Dermis mitte (dick, Bindegewebe)
- Subcutis unten (Fettgewebe)
- Hautanhangsgebilde (Haare, Drüsen, Rezeptoren)

### Besonders wichtig für Pflege:
- Dekubitus-Stadien als Overlay oder separate 4er-Reihe
- Wundheilung-Phasen
- Injektionsstellen (i.c., s.c., i.m.)

---

## Legende-Pattern

```json
{
  "type": "group", "id": "legende", "children": [
    {"type": "rect", "x": 20, "y": 620, "width": 360, "height": 60, "rx": 8,
     "style": {"fill": "#fff", "stroke": "#E5DFD6", "strokeWidth": 1}},
    {"type": "circle", "cx": 40, "cy": 640, "r": 5,
     "style": {"fill": "#5A8A9A"}},
    {"type": "text", "x": 52, "y": 644, "text": "O₂-armes Blut",
     "style": {"fontSize": 11, "fill": "#44403c"}},
    {"type": "circle", "cx": 40, "cy": 660, "r": 5,
     "style": {"fill": "#C96B5C"}},
    {"type": "text", "x": 52, "y": 664, "text": "O₂-reiches Blut",
     "style": {"fontSize": 11, "fill": "#44403c"}}
  ]
}
```

## Quelle-Pattern

```json
{"type": "text", "x": 200, "y": 695, "text": "Quelle: I Care Anatomie Physiologie, Thieme 2020",
 "anchor": "middle", "style": {"fontSize": 9, "fill": "#a8a29e"}}
```
