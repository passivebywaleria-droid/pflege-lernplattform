# Anatomie-Farbpalette

Konsistente Farbzuordnung für alle medizinischen SVGs.
Abgeleitet von der Plattform-Palette (Dusty Rose), angepasst an anatomische Konventionen.

## Gewebe-Farben

| Gewebe | Fill (hell) | Fill (mittel) | Stroke | Beispiel |
|--------|-------------|---------------|--------|----------|
| **Arterielles Blut** (O₂-reich) | `#E8B5AF` | `#D4A09A` | `#C96B5C` | Linkes Herz, Arterien |
| **Venöses Blut** (O₂-arm) | `#B8D4DD` | `#A3C5D2` | `#5A8A9A` | Rechtes Herz, Venen |
| **Knochen** | `#E8DCC8` | `#D4C4A8` | `#A89880` | Wirbelkörper, Rippen |
| **Knorpel** | `#C8D8E0` | `#8AABB5` | `#6A8B95` | Bandscheiben, Gelenkknorpel |
| **Muskulatur** | `#E8B5A0` | `#D4956A` | `#B07A47` | Myokard, Skelettmuskel |
| **Nervengewebe** | `#F5E0B0` | `#D4B56A` | `#B09040` | Rückenmark, Nerven |
| **Bindegewebe** | `#E5DFD6` | `#C8BFB0` | `#A89880` | Faszien, Sehnen |
| **Klappen / Ventile** | `#C8E0C8` | `#6B8F71` | `#4A6B50` | Herzklappen, Venenklappen |
| **Schleimhaut** | `#F0C8C0` | `#E0A898` | `#C08878` | Magen, Darm, Atemwege |
| **Lungengewebe** | `#D1E7DD` | `#A8D0B8` | `#6B8F71` | Alveolen, Bronchien |
| **Fettgewebe** | `#F5E8C8` | `#E8D4A0` | `#C8B480` | Subkutis, Nierenfett |
| **Haut (Epidermis)** | `#F5E0D0` | `#E8CDB8` | `#C8A888` | Hautoberfläche |
| **Haut (Dermis)** | `#F0D0B8` | `#D8B898` | `#B89878` | Lederhaut |
| **Organ-Kapsel** | `#E0D8D0` | `#C8BFB0` | `#A89880` | Nierenkapsel, Leberkapsel |

## Funktions-Farben

| Funktion | Farbe | Verwendung |
|----------|-------|------------|
| **Blutfluss venös** | `#5A8A9A` | Pfeile, Flusslinie (O₂-arm) |
| **Blutfluss arteriell** | `#C96B5C` | Pfeile, Flusslinie (O₂-reich) |
| **Nervenleitung** | `#D4B56A` | Impulspfeile, Signallinien |
| **Lymphe** | `#A8D0B8` | Lymphgefäße, Lymphknoten |
| **Beschriftungslinie** | `#78716c` | Leader Lines zu Labels |
| **Maßlinie** | `#a8a29e` | Dimensionen (mm-Angaben) |

## Label-Farben

| Element | Farbe | Größe |
|---------|-------|-------|
| **Haupttitel** | `#C4877F` | 18-22px, bold |
| **Untertitel (Latein)** | `#78716c` | 12-14px, italic |
| **Struktur-Label** | `#1d1d1f` | 12-14px, semibold |
| **Latein-Label** | `#78716c` | 10-12px, italic |
| **Maßangabe** | `#a8a29e` | 10px |
| **Legende-Text** | `#44403c` | 11-13px |

## Hintergrund & Container

| Element | Farbe |
|---------|-------|
| SVG-Hintergrund | `#fafaf9` |
| Legende-Box | `#fff` mit `#E5DFD6` Border |
| Info-Badge | Fill aus Gewebe-Farbe (hell), Stroke aus Gewebe-Farbe (dunkel) |
| Schnittfläche | `#faf5f0` (leicht getönt) |

## Gradient-Rezepte

### Knochen-Gradient
```json
{"type": "linear", "id": "bone-grad", "x1": 0, "y1": 0, "x2": 0.3, "y2": 1,
 "stops": [{"offset": 0, "color": "#E8DCC8"}, {"offset": 1, "color": "#D4C4A8"}]}
```

### Muskel-Gradient
```json
{"type": "linear", "id": "muscle-grad", "x1": 0, "y1": 0, "x2": 1, "y2": 0,
 "stops": [{"offset": 0, "color": "#E8B5A0"}, {"offset": 1, "color": "#D4956A"}]}
```

### Blut-Gradient (arteriell)
```json
{"type": "linear", "id": "blood-art-grad", "x1": 0, "y1": 0, "x2": 0, "y2": 1,
 "stops": [{"offset": 0, "color": "#E8B5AF"}, {"offset": 1, "color": "#D4A09A"}]}
```

### Blut-Gradient (venös)
```json
{"type": "linear", "id": "blood-ven-grad", "x1": 0, "y1": 0, "x2": 0, "y2": 1,
 "stops": [{"offset": 0, "color": "#B8D4DD"}, {"offset": 1, "color": "#A3C5D2"}]}
```

## Regeln

1. **Nie Rot für Venen, nie Blau für Arterien** — anatomische Konvention beachten
2. **Gleiche Struktur = gleiche Farbe** über alle SVGs hinweg
3. **Kontrast**: Stroke immer dunkler als Fill (mindestens 2 Stufen)
4. **Transparenz**: Nur für Überlagerungen (z.B. Perikard über Herz), opacity 0.3-0.5
5. **Keine Neon-Farben** — alles muted/warm, passend zu Dusty Rose Palette
