# Muster-LE Spezifikation — Vorlage für alle 55 Lerneinheiten

**Erstellt:** 2026-03-23
**Status:** Verbindlich — alle LEs werden nach diesem Muster gebaut
**Fertig-Kriterium:** CE 05 komplett (16 LEs, 40 UE) → dann Pilottest

---

## 1. Session-Struktur (3 × 30 Min pro LE)

```
Session 1: Einstieg (Bloom 1-3)
Session 2: Vertiefung (Bloom 2-4)
Session 3: Transfer & Prüfung (Bloom 4-6)
```

Jede Session folgt diesem Ablauf:

```
┌─────────────────────────────────────────────────┐
│  1. Offene Reflexion (KI-Feedback via Nebius)   │
│  2. Leitfall-Einstieg (Patient kennenlernen)    │
│  3. Erklären → Üben → Testen (Goldene Regel)   │
│     ↕ Modus wechselt alle ~3 Min               │
│     ↕ Illustrationen inline                     │
│     ↕ Fachbegriff-Tooltips + Übersetzung        │
│     ↕ "Wusstest du?" optional einblendbar       │
│  4. Rückbezug auf Anfangs-Reflexion             │
│  5. Ergebnis-Screen (vollständig)               │
└─────────────────────────────────────────────────┘
```

---

## 2. Einstieg — Offene Reflexion mit KI

### Kein Selfrating-Slider
Der Slider wurde entfernt — er hat keine Konsequenz und bringt dem Schüler nichts.

### So funktioniert die Reflexion

**Schüler sieht:**
- Offene Frage: "Was weißt du bereits über [Thema]? Schreib deine Gedanken auf."
- Textarea mit Placeholder (z.B. "Meine ersten Gedanken zu Rheuma...")
- "Absenden"-Button

**Nach Absenden:**
- API-Call an Nebius (Llama 3.3 70B)
- Ladeanimation (2-3 Sekunden)
- KI antwortet im Sandwich-Prinzip (2-3 Sätze):
  - Aufgreifen was der Schüler geschrieben hat
  - Bestätigen was richtig ist
  - Neugier wecken auf das was kommt

**System-Prompt pro LE (Beispiel RA):**
```
Du bist ein Pflege-Tutor. Der Schüler beginnt eine Lektion über
Rheumatoide Arthritis. Er hat gerade seine ersten Gedanken zum
Thema aufgeschrieben. Antworte in 2-3 Sätzen:
1. Greife auf was er geschrieben hat (zitiere ein Stichwort)
2. Bestätige was richtig ist oder ermutige wenn wenig kam
3. Mache neugierig auf die Lektion
Ton: Freundlich, professionell, nicht herablassend. Kein Emoji.
Sprache: Deutsch, klare Sätze.
```

**Offline-Fallback:**
Wenn kein Internet → Schüler schreibt trotzdem → Antwort wird gespeichert → KI antwortet sobald wieder online: "Ich habe deine Gedanken von vorhin gelesen — [Antwort]"

### Antwort des Schülers wird gespeichert
Die Reflexion wird in der DB gespeichert für:
- Rückbezug am Session-Ende
- Lernfortschritts-Analyse (wie verändert sich die Sprache über Wochen?)
- Lehrer-Dashboard (was wissen die Schüler bereits?)

---

## 3. Session-Ende — Rückbezug + Ergebnis

### Rückbezug auf Anfangs-Reflexion
Am Ende jeder Session zeigt die Plattform automatisch:

```
┌─────────────────────────────────────────────────┐
│  Am Anfang hast du geschrieben:                 │
│  "Rheuma ist wenn die Gelenke wehtun,           │
│   meine Oma hat das"                            │
│                                                 │
│  Jetzt weißt du:                                │
│  RA ist eine Autoimmunerkrankung bei der das     │
│  Immunsystem die Gelenkinnenhaut angreift.      │
│  Der Pannus zerstört Knorpel und Knochen.       │
│  Dein Wissen hat sich verändert!                │
└─────────────────────────────────────────────────┘
```

Die "Jetzt weißt du"-Zusammenfassung ist pro LE vordefiniert (nicht KI-generiert), damit sie fachlich korrekt ist.

### Ergebnis-Screen (vollständig)

```
┌─────────────────────────────────────────────────┐
│  Session 1 abgeschlossen!                       │
│                                                 │
│  ⚡ 85 XP verdient                              │
│  🎯 12/15 richtig (80%)                         │
│  🔥 Streak: 5                                    │
│                                                 │
│  ✅ Stärken:                                     │
│     - Definition RA                              │
│     - Symmetrischer Befall                       │
│                                                 │
│  🔄 Wiederholen:                                 │
│     - Pathomechanismus (Pannus)                  │
│     - Zytokine (TNF-α, IL-1, IL-6)             │
│     → Als Karteikarten gespeichert              │
│                                                 │
│  📋 Empfehlung:                                  │
│     "Session 2 morgen — Diagnose und Labor"      │
│                                                 │
│  [Karteikarten üben]  [Weiter zu Session 2]     │
└─────────────────────────────────────────────────┘
```

**Schwache Themen** werden automatisch als Karteikarten gespeichert (Spaced Repetition).

---

## 4. Step-Typen — Vollständige Liste

### Bestehende (15)
| Typ | Beschreibung | Drag & Drop? |
|-----|-------------|-------------|
| `text` | Erklärtext mit Illustration, Highlight, Fun Fact | — |
| `mc` | Multiple Choice (1 richtig, Erklärung bei jeder Antwort) | — |
| `matching` | Paare zuordnen | ✅ Finger-Drag |
| `sorting` | Reihenfolge bringen | ✅ Finger-Drag |
| `branching` | Entscheidungsbaum (Fallbeispiel) | — |
| `freetext` | Offene Antwort (KI-Bewertung oder Musterantwort) | — |
| `fillin` | 1 Lücke im Satz ausfüllen | — |
| `truefalse` | Wahr/Falsch-Karten (Swipe) | ✅ Swipe |
| `timer` | Schnellrunde unter Zeitdruck | — |
| `memory` | Paare aufdecken | — |
| `crossword` | Kreuzworträtsel mit Fachbegriffen | — |
| `categorize` | In Gruppen sortieren | ✅ Finger-Drag |
| `highlight` | Fehler im Text markieren | — |
| `dialog` | Patienten-Dialog (Leitfall) | — |
| `selfrating` | ❌ ENTFERNT — kein Selfrating mehr |

### Neue Step-Typen (7)
| Typ | Beschreibung | Drag & Drop? |
|-----|-------------|-------------|
| `reflection` | Offene Reflexion + KI-Feedback (Nebius) | — |
| `hotspot` | Auf Bild tippen (z.B. Gelenke markieren) | — |
| `confidence` | Wahr/Falsch + "Wie sicher bist du?" | — |
| `cloze` | Lückentext mit mehreren Lücken | ✅ Wörter ziehen |
| `sequencing` | Bildbasierte Reihenfolge (Drag & Drop) | ✅ Finger-Drag |
| `slider` | Schätzfragen / Berechnungen mit Slider | — |
| `summary` | Rückbezug + Ergebnis-Screen | — |

**Gesamt: 21 Step-Typen**

### Drag & Drop überall wo es passt
`sorting`, `matching`, `categorize`, `cloze`, `sequencing` — alle mit echtem Finger-Drag (@dnd-kit). Kein reines Antippen.

---

## 5. Fachbegriff-Tooltips + Übersetzung

### Fachbegriff-Tooltip (Bottom-Sheet)
Jedes markierte Fachwort im Text ist tippbar. Bei Tap → Bottom-Sheet von unten:

```
┌─────────────────────────────────────────────────┐
│  Pannus                                    🔊   │
│  ─────────────────────────────────────────────   │
│  Aggressives Granulationsgewebe, das bei RA     │
│  von der entzündeten Synovialmembran in den     │
│  Gelenkspalt wächst und Knorpel sowie Knochen   │
│  zerstört.                                       │
│                                                  │
│  🇹🇷 Pannus (Türkçe: agresif granülasyon dokusu)│
│  🇸🇦 بانوس (نسيج حبيبي عدواني)                │
│                                                  │
│  [Illustration: Pannus-Detail wenn vorhanden]    │
│                                                  │
│  🔊 Aussprache anhören                           │
└─────────────────────────────────────────────────┘
```

### Übersetzung
- Die Übersetzung zeigt sich automatisch in der Sprache des Schüler-Profils
- Türkisch: DeepL Pro
- Arabisch: Claude 3.5
- Übersetzungen werden beim Content-Erstellen vorgeneriert (nicht live)

### Welche Wörter werden markiert?
- Alle Einträge aus dem Glossar der jeweiligen LE
- Im Text farblich hervorgehoben (z.B. unterstrichen oder leicht eingefärbt)
- Erster Auftritt pro Session → kurze Einblendung "Tipp: Tippe auf markierte Wörter für Erklärungen"

---

## 6. "Wusstest du?" / Nice to Know

### Optionales Element in Text-Steps
Nicht als eigener Step, sondern als ausklappbares Element:

```
┌─────────────────────────────────────────────────┐
│  [Text-Step: Was ist RA?]                       │
│                                                  │
│  Die Rheumatoide Arthritis ist eine chronische   │
│  Autoimmunerkrankung...                          │
│                                                  │
│  💡 Wusstest du?                          [▼]    │
│  ┌─────────────────────────────────────────┐     │
│  │ RA betrifft weltweit ca. 0,5-1% der    │     │
│  │ Bevölkerung. Frauen sind 3x häufiger   │     │
│  │ betroffen als Männer.                   │     │
│  └─────────────────────────────────────────┘     │
└─────────────────────────────────────────────────┘
```

- Standardmäßig eingeklappt
- Schüler kann öffnen oder ignorieren
- Zählt nicht für XP (kein Prüfungsstoff, nur Bereicherung)
- 1-3 pro Session, nicht mehr

---

## 7. Gamification — Duolingo-Stil, professionell

### Was der Schüler sieht

**Während der Session:**
- Progress-Bar (oben, wie bisher)
- XP-Counter ("+10 XP" Animation bei richtiger Antwort)
- Streak-Badge ab 3 richtig hintereinander (🔥 3)
- Herzen-System: 5 Herzen, bei Fehler -1 Herz
  - 0 Herzen → Session pausiert, Wiederholungsmodus
  - Herzen regenerieren nach 30 Min oder durch Karteikarten üben

**Am Session-Ende:**
- Confetti-Animation (dezent, nicht kindlich)
- XP-Zusammenfassung
- Streak-Tages-Counter ("Tag 5 in Folge!")

### Was es NICHT gibt
- Keine Rangliste gegen andere Schüler (erst in Lehrer-Modus/Kahoot-Modus)
- Keine Sounds (optional in Einstellungen aktivierbar)
- Keine animierten Maskottchen
- Keine übertriebenen Emoji-Explosionen

### Design-Prinzip
Professionell wie AMBOSS, motivierend wie Duolingo. Die Gamification unterstützt das Lernen, sie dominiert es nicht.

---

## 8. B1 / C1 — Sprachlevel-Toggle

### So funktioniert es

**Immer sichtbar:** Ein Toggle-Button oben rechts:
```
[Fachsprache]  ←→  [Einfache Sprache]
```

**Fachsprache (C1) — Standard:**
- Vollständige Fachterminologie
- Verschachtelte Sätze möglich
- Nebensätze, Konjunktiv, Passiv

**Einfache Sprache (B1):**
- Gleiche Fachbegriffe (die müssen gelernt werden!)
- Kürzere Sätze (max. 15 Wörter)
- Kein Konjunktiv, wenig Passiv
- Hauptsatz-Struktur
- Mehr Glossar-Markierungen
- Erklärung direkt nach dem Fachbegriff in Klammern

**Beispiel:**

C1:
> "Die Rheumatoide Arthritis ist eine chronisch-entzündliche Systemerkrankung, die primär die Synovialmembran der peripheren Gelenke betrifft und unbehandelt zu progredienter Gelenkdestruktion führt."

B1:
> "Die Rheumatoide Arthritis ist eine Krankheit. Das Immunsystem greift die Gelenke an. Die Gelenkinnenhaut (Synovialmembran) entzündet sich. Ohne Behandlung werden die Gelenke zerstört."

**Beide Versionen enthalten:** Synovialmembran, Rheumatoide Arthritis, Immunsystem — die Fachbegriffe bleiben immer.

---

## 9. Vorlesefunktion (TTS)

### Lautsprecher-Icon bei jedem Text-Step

```
┌─────────────────────────────────────────────────┐
│  Was ist RA?                              🔊    │
│  ─────────────────────────────────────────────   │
│  Die Rheumatoide Arthritis ist eine chronische   │
│  Autoimmunerkrankung...                          │
└─────────────────────────────────────────────────┘
```

- 🔊 Icon oben rechts im Text-Step
- Tap → Azure TTS (KatjaNeural) liest den gesamten Text vor
- Zweiter Tap → Stopp
- Geschwindigkeit anpassbar (0.75x / 1x / 1.25x)
- Im Glossar-Bottom-Sheet: Einzelnes Wort vorlesen (Aussprache)

### Technisch
- Azure Cognitive Services, KatjaNeural (deutsch, weiblich)
- 500.000 Zeichen/Monat kostenlos
- Audio wird gecached (nicht bei jedem Tap neu generiert)
- Offline: Vorab generierte Audio-Dateien für Fachbegriffe

---

## 10. KI-Chat — Fragen stellen

### Chat-Button (floating)

```
┌──────────────────────────────────────┐
│                                      │
│  [Lern-Content]                      │
│                                      │
│                                      │
│                              💬      │  ← Floating Action Button
└──────────────────────────────────────┘
```

### Bei Tap → Chat-Sheet von unten

```
┌─────────────────────────────────────────────────┐
│  Frag mich zum Thema!                     ✕     │
│  ─────────────────────────────────────────────   │
│                                                  │
│  🤖 Ich kann dir Fragen zu Rheumatoide          │
│     Arthritis beantworten. Was möchtest          │
│     du wissen?                                   │
│                                                  │
│  👤 Warum greift das Immunsystem die             │
│     eigenen Gelenke an?                          │
│                                                  │
│  🤖 Bei RA erkennen T-Zellen die                 │
│     Synovialmembran fälschlicherweise als        │
│     fremd. Warum genau das passiert, ist         │
│     noch nicht vollständig geklärt...            │
│                                                  │
│  [Deine Frage eingeben...]          [Senden]     │
└─────────────────────────────────────────────────┘
```

### Regeln
- **Nur Pflege-Kontext:** System-Prompt begrenzt auf Pflegeausbildung
- **Themenfokus:** KI leitet zurück wenn die Frage zu weit abschweift: "Gute Frage, aber lass uns erstmal bei RA bleiben. Dazu kommen wir in CE 07."
- **Nebius API:** Llama 3.3 70B, anonymisiert (keine User-ID, keine Namen)
- **Kontext:** KI kennt den aktuellen Step + LE-Inhalt + Glossar
- **Max. 5 Nachrichten pro Session** (damit Schüler nicht nur chattet statt lernt)
- **Offline:** "Ich bin gerade offline. Deine Frage wird gespeichert und ich antworte sobald du wieder online bist."

---

## 11. Illustrationen

### Inline im Text-Step

```
┌─────────────────────────────────────────────────┐
│  Was passiert im Gelenk?                  🔊    │
│  ─────────────────────────────────────────────   │
│                                                  │
│  Bei RA infiltrieren Immunzellen die             │
│  Synovialmembran. Es entsteht ein aggressives    │
│  Gewebe — der Pannus.                            │
│                                                  │
│  ┌───────────────────────────────────────┐       │
│  │  [Illustration: Gelenkquerschnitt     │       │
│  │   mit Pannusbildung]                  │       │
│  └───────────────────────────────────────┘       │
│                                                  │
│  Der Pannus wächst in den Gelenkspalt und        │
│  zerstört Knorpel und Knochen.                   │
└─────────────────────────────────────────────────┘
```

### Stil
- Medizinisches Lehrbuch-Diagramm
- Liniengrafik-Stil, elfenbeinfarbene Knochen, blaue Knorpel, rote Entzündung
- Flache Farben, sauber, minimalistisch, keine Textur, keine Beschriftungen
- Generiert mit KI (Prompt-Template siehe `specs/ILLUSTRATION-PROMPTS-LE03.md`)
- Gespeichert als WebP in `/public/images/ce-05/le-03/`

### Pro LE: 8-15 Illustrationen
- Jeder Text-Step der Anatomie/Pathologie erklärt → Illustration
- Vergleichsbilder (gesund vs. krank) wo möglich
- Detailvergrößerungen für Mikroebene (Zellen, Gewebe)

---

## 11b. Lernziel-Tracking (KompetenzRegister)

### Jeder Step hat ein `lernziel`-Feld

Das `lernziel`-Feld verknüpft jeden Step mit dem KompetenzRegister der Lern-Engine. Damit wird Kompetenz nicht pro Step, sondern pro **Konzept** gemessen (z.B. "RA-Definition" statt "Step 4").

### Namenskonvention
```
{ceId}-{leId}-{topic}
```

**Beispiele:**
- `ce05-le03-ra-definition` — Was ist RA, Merkmale, Abgrenzung
- `ce05-le03-ra-ursachen` — Gene, Rauchen, Risikofaktoren
- `ce05-le03-kommunikation` — Gesprächsführung, Empathie
- `ce05-le04-ra-symptome` — Morgensteifigkeit, Schwellung, Schmerz

### Wie viele Lernziele pro LE?
- Typischerweise **5-8 Lernziel-IDs** pro LE
- Topics orientieren sich an der 12-Punkte-Struktur
- Dialog-/Kommunikations-Steps → `kommunikation`
- Checkpoint-/Summary-Steps → dominantes Topic der Session

### 5-Stufen-Kompetenz-Tracking
```
unbekannt → versucht → vertraut → sicher → gemeistert
```

Der AdaptiveSequencer nutzt die Kompetenz-Daten um:
- Gemeisterte Quiz-Steps zu überspringen
- Bei niedrigem Kompetenz-Level zusätzliche Hilfe-Steps einzufügen
- Die Schwierigkeit dynamisch anzupassen

### Pipeline-Integration
1. **Fach-Rechercheur** (rohmaterial.md): Definiert Lernziel-IDs + Mapping
2. **Didaktik-Regisseur** (sessionplan.md): Spalte "Lernziel" in der Step-Tabelle
3. **Content-Generator** (steps-s2/s3.ts): `lernziel`-Feld in jedem Step-Objekt
4. **Didaktik-Prüfer**: Kriterien H1-H3 prüfen Vollständigkeit und Konsistenz

---

## 12. Fortschritt speichern

### Exakter Step + alle Antworten

```
Gespeichert wird:
- Aktuelle LE + Session + Step-Nummer
- Alle bisherigen Antworten (richtig/falsch + gewählte Option)
- XP-Stand
- Herzen-Stand
- Streak-Stand
- Reflexions-Text (Anfang)
- Zeitstempel
```

### Beim nächsten Öffnen

```
┌─────────────────────────────────────────────────┐
│  Willkommen zurück!                              │
│                                                  │
│  Du warst bei:                                   │
│  CE 05 · LE 03 · Session 2 · Step 14/23         │
│                                                  │
│  [Weitermachen]     [Von vorn beginnen]           │
└─────────────────────────────────────────────────┘
```

### Technisch
- MVP: localStorage / IndexedDB (Dexie.js)
- Später: Sync mit PostgreSQL bei Verbindung
- Offline-Daten werden bei Reconnect automatisch synchronisiert

---

## 13. Dashboard — Vollständig

### Schüler-Dashboard

```
┌─────────────────────────────────────────────────┐
│  Hallo Sarah!                          🔥 12    │
│  ─────────────────────────────────────────────   │
│                                                  │
│  📊 Kompetenz-Radar                              │
│  [Kreisdiagramm: CE 01-05 mit Fortschritt]       │
│                                                  │
│  📅 Diese Woche                                   │
│  Mo ██░  Di ████  Mi ██  Do ████  Fr █  Sa ░  So│
│  18 Min  31 Min  12 Min  25 Min ...              │
│                                                  │
│  🎯 Lernpfad CE 05                               │
│  ✅ LE 01 — Grundlagen (92%)                      │
│  ✅ LE 02 — Anatomie (85%)                        │
│  ▶️ LE 03 — RA: Definition (Step 14/23)          │
│  🔒 LE 04 — RA: Symptome                         │
│  🔒 LE 05 — RA: Diagnose                         │
│  ...                                              │
│                                                  │
│  🔄 Wiederholen                                   │
│  ⚠️ Pathomechanismus — vor 5 Tagen (schwach)      │
│  ✅ Symmetrischer Befall — gestern (stark)         │
│                                                  │
│  👥 Klasse PfK-24a                                │
│  1. Lena K. — 18 Sessions                        │
│  2. Tom B. — 16 Sessions                         │
│  3. Sarah M. (Du) — 14 Sessions                  │
│                                                  │
│  🏆 Streak: 12 Tage                               │
└─────────────────────────────────────────────────┘
```

---

## 14. Umsetzung — Schicht für Schicht

### Runde 1: Struktur + Kern-Features
- [ ] LE-Ablauf: Reflexion → Content → Rückbezug → Ergebnis
- [ ] 7 neue Step-Typen (reflection, hotspot, confidence, cloze, sequencing, slider, summary)
- [ ] Drag & Drop für sorting, matching, categorize, cloze, sequencing
- [ ] Illustrationen inline in Text-Steps
- [ ] Fachbegriff-Tooltips (Bottom-Sheet mit Erklärung + Übersetzung)
- [ ] "Wusstest du?" als ausklappbares Element
- [ ] Selfrating entfernen

### Runde 2: KI + Audio + Gamification
- [ ] KI-Reflexion (Nebius API-Call + Offline-Fallback)
- [ ] KI-Chat (Floating Button + themenbegrenzt)
- [ ] TTS (Azure KatjaNeural + Glossar-Aussprache)
- [ ] Gamification (Herzen + Streak + Confetti + XP-Animation)
- [ ] B1/C1-Toggle

### Runde 3: Persistenz + Dashboard
- [ ] Fortschritt speichern (Step-genau + Antworten)
- [ ] "Weitermachen wo du warst"
- [ ] Karteikarten aus Schwächen generieren
- [ ] Dashboard (Kompetenz-Radar, Wochenaktivität, Klassenvergleich, Streak)
- [ ] Spaced Repetition Empfehlungen

### Fertig-Kriterium
**CE 05 komplett (16 LEs, 40 UE, alle 3 Runden) → Pilottest mit einer Schule**

---

## 15. Zusammenfassung aller Entscheidungen

| # | Thema | Entscheidung |
|---|-------|-------------|
| 1 | Einstieg | Offene Reflexion mit KI-Feedback (kein Selfrating) |
| 2 | KI-Antwort-Stil | Sandwich: 2-3 Sätze, aufgreifen + bestätigen + neugierig machen |
| 3 | Session-Ende | Rückbezug auf Anfangs-Reflexion + Ergebnis-Screen |
| 4 | Illustrationen | Inline im Text-Step |
| 5 | KI offline | Antwort speichern, KI antwortet sobald wieder online |
| 6 | Gamification | Duolingo-Stil, professionell (Herzen, Streak, XP, Confetti) |
| 7 | B1/C1 | Toggle, Fachbegriffe immer da, B1 = einfachere Sätze |
| 8 | TTS | Lautsprecher-Icon bei jedem Text-Step (Azure KatjaNeural) |
| 9 | Bilder-Hosting | Statisch im Repo, später CDN |
| 10 | Ergebnis-Screen | Vollständig: Score + Stärken/Schwächen + Karteikarten + Empfehlung |
| 11 | Session-Ende Detail | Rückbezug auf Anfangs-Reflexion (automatisch) |
| 12 | Offline-Reflexion | Speichern, KI antwortet sobald wieder online |
| 13 | KI-Chat Umfang | Gesamte Pflegeausbildung, aber leitet zurück zum aktuellen Thema |
| 14 | Drag & Drop | Überall wo es passt (sorting, matching, categorize, cloze, sequencing) |
| 15 | Fortschritt | Exakter Step + alle Antworten gespeichert |
| 16 | Fachbegriff-Tooltip | Bottom-Sheet: Erklärung + Übersetzung + Aussprache + Bild |
| 17 | "Wusstest du?" | Optional ausklappbar in Text-Steps, 1-3 pro Session |
| 18 | Dashboard | Vollständig (Lernpfad, Radar, Woche, Klasse, Streak, Wiederholung) |
| 19 | Umsetzung | Schicht für Schicht (3 Runden) |
| 20 | Fertig-Kriterium | CE 05 komplett (16 LEs, 40 UE) → dann Pilottest |
