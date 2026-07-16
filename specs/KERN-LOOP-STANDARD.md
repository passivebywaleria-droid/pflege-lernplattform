# KERN-LOOP-STANDARD — Der rote Faden

> **Status:** Entwurf für Waleria (2026-07-16). Nach Freigabe ist dieses Dokument
> verbindlich für JEDE Arbeit an Steps, Situationen und Feedback.
> **Demo:** Vorher/Nachher klickbar → https://claude.ai/code/artifact/92f4cb3d-4052-48fe-9903-1ab333cf574f

---

## Das eine Prinzip

> **Ein Step = eine Aufgabe. Alles andere ist on-demand.**

Der Schüler sieht pro Screen genau das, was er für DIESE eine Aufgabe braucht:
die Frage, die Interaktion, sonst nichts. Wissen, Erklärungen, Meta-Infos,
Vertiefung — alles existiert weiter, aber hinter EINEM konsistenten Mechanismus
(Sheet von unten / Chip zum Antippen), nie gleichzeitig auf der Bildfläche.

Messlatte: **Der größte Text auf dem Screen ist immer der Inhalt** (Frage bzw.
Patient-Aussage) — nie ein Label, nie Chrome.

---

## 1. Die Step-Anatomie (jeder Step-Typ folgt ihr)

```
┌──────────────────────────────────┐
│ ← ▓▓▓▓▓░░░░░░░░░ 7/17        ⓘ 🌐│  ← EINE Meta-Zeile (Header)
│                                  │
│ (Szene, 1-2 Zeilen, kursiv)      │  ← nur wenn die Szene sich ändert
│                                  │
│ Atmet er noch?                   │  ← FRAGE: größter Text, direkt
│                                  │     über der Interaktion
│ ○ Option A                       │
│ ○ Option B                       │  ← INTERAKTION: nackt, ohne
│ ○ Option C                       │     Erklärungen, ohne Labels
│                                  │
│ 🗒 Spickzettel                    │  ← TIEFE on-demand (Option A):
│                                  │     ein Chip, ein Mechanismus
│ [        Prüfen        ]         │  ← EINE Aktion, sticky unten
└──────────────────────────────────┘
```

### Was WEGFÄLLT (ersatzlos oder verschoben)

| Element heute | Warum weg | Wohin |
|---|---|---|
| Kind-Label „MULTIPLE CHOICE" / „VERMUTUNG" über der Frage | Die Interaktion erklärt sich selbst — niemand muss den Fragetyp benennen | ersatzlos; „Vermutung" wird Teil der Frage („Was vermutest du …?") |
| „PFLEGE-WISSEN · CA. 1:23 MIN" Lese-Wand-Kopf | Lese-Steps entfallen mit Option A als eigene Screens | Wissen → Spickzettel-Chip |
| Patient-Zeile (Name · Alter + Setting) auf JEDEM Step | Wiederholt sich 17×; frisst 2 Zeilen über jedem Inhalt | Avatar bleibt klein in der Meta-Zeile (Tap → Patient-Modal, existiert schon); volle Zeile nur auf dem Phasen-Startscreen |
| Phasen-Label „ERKENNEN" in Caps | Meta-Information, trägt beim Lösen nichts | Phasen-Marker im Fortschrittsbalken (existiert); Phasenname nur an Etappen-Übergängen |
| Tipp-Zeile unter den Optionen („Mehrere Antworten möglich") | Streu-Text | In die Optionen-Ecke als Mini-Hinweis, nur bei multiSelect |
| Glossar-Links in Akzentfarbe + fett | Macht jeden zweiten Begriff zum Farb-Link — visuelles Rauschen | Fachbegriffe bleiben ÜBERALL antippbar (B1! — Waleria-Einwand 2026-07-16), aber ruhig: gepunktete Linie in Textfarbe statt Akzent-Link; Tap öffnet Glossar als Sheet von unten (derselbe On-demand-Mechanismus wie alles) |

### Struktur-Regeln

1. **Frage zuletzt vor der Interaktion.** Szene (falls nötig) → Frage → Optionen.
   Nie Frage → Szene → Optionen. Die Frage klebt an den Antworten.
2. **Szene nur bei Änderung.** Wenn der vorherige Step dieselbe Szene hatte,
   entfällt der Body komplett (die transition-Micro-Narration trägt den Faden).
3. **Ein Screen scrollt nicht** (Ziel). Wenn ein Step scrollen muss, ist er zu
   voll → Inhalt in Spickzettel verschieben oder Step teilen.
4. **Eine Aktion.** Genau ein Primär-Button, sticky unten. Nie zwei Wege gleichzeitig.

---

## 2. Die Feedback-Anatomie (nach jeder Antwort, jeder Step-Typ)

**Heute (das Überladene):** Erklärung unter JEDER der 3-4 Optionen + Sheet mit
Verdikt + Musterlösung + Ermutigung = drei Feedback-Orte gleichzeitig.

**Neu — EIN Ort (das Sheet), DREI Zeilen-Blöcke, immer dieselbe Reihenfolge:**

```
┌──────────────────────────────────┐
│ ✗ Nicht ganz.                    │  ① VERDIKT — 1 Zeile, ehrlich
│                                  │
│ Schnappatmung ist keine normale  │  ② WARUM — 2-3 Sätze, NUR:
│ Atmung — sie zeigt den Still-    │     warum deine Wahl nicht stimmt
│ stand an. Deshalb: sofort        │     + was stattdessen gilt
│ handeln, nicht lagern.           │
│                                  │
│ ✦ Erklär mir das anders          │  ③ TIEFE on-demand (ghost)
│ Warum die anderen nicht? ⌄       │     weitere Optionen-Erklärungen
│                                  │     eingeklappt
│ [        Weiter        ]         │  EINE Aktion
└──────────────────────────────────┘
```

- Im Optionen-Bereich wird nach dem Prüfen NUR markiert (richtig grün, gewählt
  amber) — **keine Erklärtexte mehr unter den Optionen.**
- Die Erklärungen der nicht gewählten Optionen: eingeklappt im Sheet
  („Warum die anderen nicht?"), Daten bleiben unverändert (explanation pro
  Option existiert weiter — nur die Präsentation ändert sich).
- Ermutigungs-Satz: nur bei falscher Antwort UND wenn er etwas Konkretes sagt
  (Antwortzeit-Befund) — kein generischer Zuspruch als Pflicht-Absatz.
- Richtig-Fall: Verdikt + 1 Satz Bestätigung des Warum. Kein Sheet-Roman.

---

## 3. Wissen on-demand — Option A (Waleria-Entscheidung 2026-07-16)

Umsetzung gemäß `specs/DESIGN-WISSEN-IN-STEPS.md`, Option A („Spickzettel-Chip"),
mit einer Schutzplanke aus der C-Diskussion:

- inlineWissen-Steps bekommen `praesentation: "amAnwendungsStep"` → kein eigener
  Screen; der Baustein hängt als **Spickzettel-Chip** am nächsten Antwort-Step
  derselben Phase. Sheet zeigt: Faustregel (fett, zuerst) → Kerntext → Spektrum
  (eingeklappt). Story-Aufhänger entfällt inline (die Situation IST die Story).
- **Schutzplanke (B1/Kämpfende):** Nach der ersten falschen Antwort am Anker-Step
  öffnet die Plattform den Spickzettel aktiv an („Schau kurz hier rein — dann
  versuch es nochmal."). Das ist zugleich das erste Adaptivitäts-Signal (Wette 2).
- Karteikarte wird auch erzeugt, wenn der Spickzettel nie geöffnet wurde
  (Begegnet-Regel: ja — Empfehlung aus dem Design-Doc).
- Pilot: Wagner + Ríos (Demo-Pfad), Default `eigenerStep` für alle anderen.
- Danach Pipeline-Sync (7 Stellen, Abschnitt 4.2 im Design-Doc).

---

## 4. Die geordnete Bauliste (nichts anderes, in dieser Reihenfolge)

| # | Baustein | Umfang | Zahlt ein auf |
|---|---|---|---|
| 1 | **Clean-Pass**: Kind-Label weg, Header auf 1 Meta-Zeile, Tipp-Zeile weg, Glossar-Beruhigung, Frage-Position | klein | „weniger auf der Bildfläche" |
| 2 | **Feedback-Anatomie**: Optionen-Erklärungen ins Sheet (eingeklappt), 3-Block-Sheet | mittel | „Antworten strukturieren" |
| 3 | **Option A**: Spickzettel-Chip + Sheet, `praesentation`-Feld, Wagner+Ríos | mittel | Walerias Kern-Idee |
| 4 | **Adaptivität v1** (Wette 2): falsch am Anker-Step → Spickzettel-Angebot; 2× schnell+richtig → Skip-Angebot | mittel | „Tutor wird spürbar" |
| 5 | Pipeline-Sync für Option A (7 Stellen) + Content-Batch Frage-Dopplung | mittel | Konsistenz |
| 6 | Geparkt bis Kern-Loop fertig: App-Gefühl-Paket, Wiedereinstieg-Hero, Sprech-Moment, Analytics | — | — |

**Definition of Done pro Baustein:** tsc + Tests + Build grün · Walkthrough-
Screenshots an Waleria · Deploy nur nach Freigabe.

---

## 5. Was dieses Dokument verbietet

- Neue UI-Elemente auf der Step-Bildfläche, die nicht Frage oder Interaktion sind.
- Einen zweiten Feedback-Ort.
- Einen zweiten On-demand-Mechanismus (alles öffnet als Sheet von unten).
- Arbeit an Baustein N+1, solange N nicht abgenommen ist.
