# Pflege-Lernplattform Redesign

## Projekt-Kontext
Redesign einer Pflege-Lernplattform für Pflegeschüler:innen.
Mobile-First, iOS-Frame als primäres Viewport.

## Aktive Richtung
**V1 Konservativ** (shadcn-nah) ist die gewählte Hauptrichtung.
V2 Editorial existiert als Alternative, wird gerade nicht weiterverfolgt.

## Farbsystem (final)
ChatGPT-inspirierte Palette, geschlechtsneutral, warm:
- **Accent (Primary):** `#218C71` — gedämpftes Teal
- **Background:** `#F8F5F0` — warmer Off-White (Linen-Stil)
- **Card BG:** `#FFFFFF`
- **Success:** `#3E5A6A` — Slate-Blue
- **Text:** `#1A1815` / `#4E4740` / `#8A8278`
- **Border:** `rgba(33,140,113,0.14)`
- **Mastery-Skala:** `['#A09890', '#D4AE88', '#B8A894', '#3E5A6A', '#218C71']`

Linen-Hintergrund (heller) wurde favorisiert. Kein Grün, kein Rosa.

## Wichtige Constraints
- **--lern-\* CSS-Tokens nicht umbenennen** — nur Werte ändern. Sie sind das Theme-System.
- Mobile-First, 390×780 iOS-Frame
- Warm, cozy, einladend (Tone)
- Inter als Sans, Fraunces optional für Editorial-Treatments

## Step-Typen — KOMPLETT (40+ implementiert)

### Basis-10 in `steps-cgpt.jsx`
1. Text/Info · 2. Multiple Choice · 3. Selbsteinschätzung · 4. Karteikarte ·
5. Feedback · 6. Reihenfolge (alt) · 7. Reflektion · 8. Video · 9. Zuordnen (alt) · 10. Phase-Abschluss

### Neue Steps in `steps-extra-1.jsx` (14)
**Quiz:** TrueFalse, FillIn, Slider, Hotspot, Swipe, ErrorSpot
**Sort:** Sorting (drag-and-drop mit Finger ✓), Categorize, Comparison-Tabelle, Matrix (2 Achsen), TableFillIn, WordOrder
**Mark:** Highlight (im Text markieren), LabelImage

### Neue Steps in `steps-extra-2.jsx` (18)
**Connect:** Memory, ConceptMap, Timeline, Diagram (Entscheidungsbaum), Reveal
**Talk:** Dialog, ChatSim (KI-Patient), Speech (Aussprache), Cloze, Freetext (KI-bewertet), Branching
**Calc:** Calculation (Pflegerechnen), Estimation, Timer (Zeitdruck)
**Special:** Crossword, CrowdPoll, ImageInteraction (Vorher/Nachher), CarePlan (Multi-Phase)

### Galerie
- `Step-Typen Komplett.html` — alle 30+ in DesignCanvas, 8 Sektionen
- StepShell + MiniStepHeader sind shared Helpers in `steps-extra-1.jsx`

## App-Struktur
- **CE-Übersicht** → Liste von Situationen + Themen
- **Thema-Detail** → Bausteine eines Themas
- **Situation-Lernseite** → Sticky-Header (Patient + 6-Phasen-Progress) + Step-Renderer

## 6 Phasen (Pflege-Spirale)
Informieren → Planen → Entscheiden → Durchführen → Kontrollieren → Reflektieren

## Mastery-Stufen
not-started → attempted → familiar → proficient → mastered (5 Stufen)

## Wichtige Dateien
- **`Step-Typen Komplett.html`** ⭐ — aktueller Stand: ALLE Step-Typen Gallery (30+)
- `Step-Typen ChatGPT.html` — älter, nur Basis-10
- `Pflege Redesign.html` — V1+V2 Flow mit Light/Dark
- `V1 Farben.html`, `V1 Farben App-Refs.html` — Farb-Explorationen
- `steps-cgpt.jsx` — Basis-10 Step-Typen (ChatGPT-Palette)
- `steps-extra-1.jsx` — Quiz/Sort/Mark (14 neue) + StepShell + MiniStepHeader Helper
- `steps-extra-2.jsx` — Connect/Talk/Calc/Special (18 neue)
- `v1-conservative.jsx`, `v2-editorial.jsx` — Flow-Komponenten
- `shared.jsx` — Tokens, PhasenBar, MasteryPill, PhotoPlaceholder, StatusSpacer
- `palettes.jsx`, `palettes-apps.jsx` — Palette-Definitionen
- `design-canvas.jsx`, `ios-frame.jsx` — Starter-Komponenten

## Wichtige Pattern-Notes
- **DCSection filtert nur direkte DCArtboard-Children** — Wrapper-Komponenten
  werden weggefiltert. Lösung: ABoard inline als Funktionsaufruf im JSX,
  z.B. `{ABoard({id, label, comp})}` statt `<ABoard ... />`.
- Alle Step-Komponenten nutzen `StepShell` + `MiniStepHeader` (aus extra-1).
- Drag-and-Drop in StepSorting: pointer events + setPointerCapture, andere
  Karten verschieben sich per `transform: translateY()` mit Transition.

## Offene nächste Schritte
- [ ] **Wissensbausteine** — Sub-Einheiten innerhalb eines Themas
      (Baustein-Karte mit Step-Anzahl/Mastery, Baustein-Intro mit Lernzielen,
      Baustein-Abschluss mit Mastery-Update). User hat danach gefragt — noch
      nicht gebaut. Live-Repo hat das Konzept als „Bausteine eines Themas".
- [ ] Step-Typen in den V1-Flow (CE → Thema → Situation) integrieren
- [ ] Dark Mode für alle 30+ Step-Typen
- [ ] CE-Übersicht und Thema-Detail in ChatGPT-Palette aktualisieren
- [ ] Animationen / Übergänge zwischen Steps
- [ ] Hotspot-, Diagramm-, Vorher/Nachher-Steps haben SVG-Platzhalter — bei Bedarf
      durch echte Bilder ersetzen

## Letzte Sitzung — Zusammenfassung
- Vom Live-Repo `passivebywaleria-droid/pflege-lernplattform` 40+ Step-Typen
  identifiziert (vorher nur 10 implementiert). 30+ neu gebaut.
- StepSorting: Pfeil-Buttons → Drag-and-Drop mit Finger (Pointer Events).
- Galerie-Bug gefixt: ABoard-JSX-Wrapper → inline Funktionsaufruf
  (DCSection filtert sonst alles weg).

## Wiederaufnahme im neuen Chat
Sag z.B.: *„Lies CLAUDE.md. Bau die Wissensbausteine — Karten in der
Thema-Detail-Übersicht, Baustein-Intro mit Lernzielen, Baustein-Abschluss."*
