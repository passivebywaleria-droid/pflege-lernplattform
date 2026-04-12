# CONTENT-QUALITÄT — Verbindliche Regeln für alle LEs

**Erstellt:** 2026-04-03
**Status:** Verbindlich. Überstimmt alle anderen Content-Specs bei Widerspruch.
**Gilt für:** Didaktik-Regisseur, Content-Generator, Didaktik-Prüfer, manuelle Edits.
**Konsolidiert:** eroeffnungsstrategien.md, content-textregeln.md, le-erlebnis-konzept.md, text-varianten.md, dialog-varianten.md, mc-varianten.md, abschluss-varianten.md, ADAPTIVER-THEMENBOGEN.md, VISION.md

---

## TEIL 1: SESSION-OPENER (Pflicht, K.O.-Kriterium)

### Regel O1: Kein Selfrating als Opener

Selfrating ("Schätze dich ein") ist als Session-Opener **VERBOTEN**. VISION.md: "Selbsteinschätzung ist wertlos."

### Regel O2: Jede Session startet anders

Kein Opener-Typ darf in derselben LE zweimal vorkommen. Pool mit 18 Strategien:

| Kat. | # | Strategie | Passt für | B1-tauglich |
|------|---|-----------|-----------|-------------|
| A | 1 | Advance Organizer (Fahrplan) | Komplexe Themen, S1 | Ja |
| A | 2 | Problemorientiert (POL) | Krankheitsbilder, S2-S3 | Bedingt |
| A | 3 | Sokratische Gegenfrage | Vertiefung, Praxiserfahrene | Nein |
| A | 4 | Predict-Observe-Explain | Pathophysiologie | Ja |
| B | 5 | Brilliant (Problem first) | Visuell-haptisch, S1 | Ja |
| B | 6 | Duolingo (Do before Learn) | Fachbegriffe, Fakten | Ja |
| B | 7 | AMBOSS (Klinische Vignette) | Krankheitsbilder | Bedingt |
| C | 8 | Fallarbeit (Kaiser) | Transfer S3, Prüfung | Nein |
| C | 9 | Perspektivwechsel | Psychosoziales, Empathie | Bedingt |
| C | 10 | Dilemmadiskussion | Ethik, Autonomie | Nein |
| D | 11 | Boss-Vorschau | Motivation, längere LEs | Ja |
| D | 12 | Mystery/Rätsel | Diagnostik, Patho | Ja |
| D | 13 | Tutorial-Cutscene | Neuer Block, emotionale Themen | Ja |
| E | 14 | Curiosity Gap | Mythen, Wow-Fakten | Ja |
| E | 15 | Vorwissen aktivieren | S2-S3, Wiederholung | Ja |
| E | 16 | Productive Failure | Berechnungen, S2 | Nein |
| E | 17 | Anticipation Guide (Alltagsmythen) | Fehlvorstellungen aufdecken | Ja |
| F | 18 | In Medias Res | Notfälle, klinische Krisen | Bedingt |

### Regel O3: Session-Nummer bestimmt Opener-Typ

| Session | Erlaubt | Verboten |
|---------|---------|----------|
| S1 | Alltagsmythen-Swipe, Story-Dialog, Curiosity Gap, Advance Organizer | Fachtest, Selfrating |
| S2 | Story-Fortsetzung, Recall (1 leichte Frage), POL, Brilliant | Test über neuen S2-Stoff |
| S3 | Prüfungs-MC (über S1+S2), neuer Patient, Fallarbeit | Test über neuen S3-Stoff |
| S4-S7 | Alle Typen passend zu Bloom + Inhalt | Selfrating, Wiederholung von S1-Opener |
| S8 | Prüfungssimulation, Boss-Vorschau, In Medias Res | Selfrating |

### Regel O4: Kein Fachwissen vor Erklärung

Der erste Step einer Session darf **KEIN spezifisches Fachwissen voraussetzen**.

❌ "RA betrifft immer symmetrisch beide Seiten" → Stimmt/Stimmt nicht
✅ "Gelenkschmerzen kommen immer von Verschleiß" → Stimmt/Stimmt nicht

### Regel O5: Anticipation Guide = Alltagsmythen

Anticipation-Swipes am Session-Start verwenden **verbreitete Fehlannahmen**, nicht Lehrbuch-Fakten.

---

## TEIL 2: TEXT-REGELN (Pflicht)

### Regel T1: Satzlänge

| Level | Max Wörter/Satz |
|-------|----------------|
| C1 | 20 |
| B1 | 15 |

### Regel T2: Verbotene Füllsätze

Ersatzlos streichen: "Bevor wir einsteigen...", "In dieser Session lernst du...", "Lass uns gemeinsam...", "Erinnerst du dich an...?", "Jetzt wird es spannend!", "Schauen wir uns das mal genauer an", "Wie du vielleicht schon weißt..."

### Regel T3: Keine Doppel-Erklärungen

Ein Fachbegriff = eine Erklärung. Nicht zwei Formulierungen desselben.

### Regel T4: Selbstverständliches weglassen

Nicht schreiben was der Schüler weiß oder die UI zeigt. Keine Swipe-Anweisungen, keine "Lies aufmerksam".

### Regel T5: Body-Länge

| Step-Typ | Max Sätze C1 | Max Sätze B1 |
|----------|-------------|-------------|
| text | 5 | 7 |
| mc, truefalse, swipe, fillin, confidence | 3 | 4 |
| dialog, branching, freetext | 3 | 4 |
| matching, sorting, categorize, sequencing | 2 | 3 |
| memory, crossword, hotspot, timer | 2 | 3 |

### Regel T6: Feedback-Knappheit

Richtig: Max 2 Sätze (Bestätigung + Merkregel). Falsch: Max 3 Sätze (Anerkennung + Korrektur + Ermutigung). Keine Synonym-Ketten, kein übertriebenes Lob.

---

## TEIL 3: FORMAT-VIELFALT (Pflicht, K.O.-Kriterium)

### Regel F1: displayFormat-Varianten im Text-Step

Jede Session mit 20+ Steps MUSS mindestens 3 verschiedene displayFormat-Varianten nutzen:

| displayFormat | Beschreibung | Wann |
|---------------|-------------|------|
| `"mnemonic"` | Eselsbrücke/Akronym visuell | Aufzählungen, Reihenfolgen |
| `"analogy"` | Alltags-Vergleich (Split: Bekannt ↔ Neu) | Abstrakte Konzepte, B1 |
| `"beforeafter"` | Vorher/Nachher-Kontrast | Therapiewirkung, Gelenkveränderung |
| `"procontra"` | Pro/Contra-Karte | Ethik, Therapieentscheidungen |
| `"quote"` | Zitat + Kontext | Pflegetheoretiker, Patienten |
| `"news"` | Nachrichtenmeldung | Statistiken, Studienergebnisse |
| `"diary"` | Tagebuch-Eintrag (Ich-Perspektive) | Patientenperspektive, Empathie |
| `"glossary"` | Glossar-Deep-Dive | Zentrale Fachbegriffe |

### Regel F2: Aufgaben-Cap

Max 3 gleiche Fragetypen am Stück. Danach automatischer Formatwechsel.

### Regel F3: Modus-Wechsel

Alle ~3 Minuten (ca. alle 3-4 Steps) Wechsel zwischen den 8 Erlebnis-Modi:
Story, Challenge, Puzzle, Entdecker, Sortierstation, Schreibtisch, Praxis-Sim, Checkpoint.

### Regel F4: Step-Typ-Diversität pro Session

Eine Session mit 22 Steps MUSS mindestens 8 verschiedene stepTypes verwenden. Nie mehr als 4× denselben stepType pro Session.

---

## TEIL 4: GLOSSAR & FACHBEGRIFFE (Pflicht, K.O.-Kriterium)

### Regel G1: Alle Fachbegriffe im Glossar

JEDER Pflegefachbegriff der im Step-Text vorkommt MUSS im LE-Glossar definiert sein. Nicht nur die 22 aus dem Rohmaterial — alle.

### Regel G2: B1-Alltagswörter im Glossar

Für B1-Schüler werden auch schwierige Alltagswörter markiert (nicht nur Fachbegriffe):
- Körperteile (Steißbein, Ferse, Schulterblatt)
- Pflegemittel (Waschlappen, Rollator, Katheter)
- Emotionen (ängstlich, erschöpft, verzweifelt)
- Pflegetätigkeiten (lagern, mobilisieren, dokumentieren)
- Medizinische Alltagswörter (Entzündung, Schwellung, Untersuchung)

Quelle: `content/_b1-pflegedeutsch.md` (~200 Wörter)

### Regel G3: Muttersprache-Auswahl statt alle Sprachen

Der Schüler wählt beim Onboarding seine Muttersprache. Im Glossar-Tooltip wird NUR diese eine Übersetzung angezeigt — nicht alle gleichzeitig.

### Regel G4: Unterstützte Sprachen (Priorität)

| Prio | Sprache | Code | Status |
|------|---------|------|--------|
| 1 | Türkisch | tr | Vorhanden |
| 2 | Arabisch | ar | Vorhanden |
| 3 | Englisch | en | NEU — Brückensprache |
| 4 | Vietnamesisch | vi | NEU |
| 5 | Tagalog/Filipino | tl | NEU |
| 6 | Bosnisch/Kroatisch/Serbisch | bs | NEU |
| 7 | Ukrainisch | uk | NEU |
| 8 | Rumänisch | ro | NEU |

Quelle: `recherche/paedagogik/ERGEBNIS.md` + `recherche/wettbewerb/ERGEBNIS.md`

### Regel G5: Vorsilben/Nachsilben erklären

Beim ersten Vorkommen eines Fachbegriffs mit medizinischen Vor-/Nachsilben wird die Wortzerlegung erklärt:
- hyper- = zu viel, hypo- = zu wenig
- -itis = Entzündung, -ose = Zustand/Erkrankung
- tachy- = schnell, brady- = langsam

Quelle: `content/_b1-pflegedeutsch.md` Zeile 264-282

### Regel G6: Fachvokabular 7× in verschiedenen Kontexten

Jeder zentrale Fachbegriff muss innerhalb einer LE mindestens 7× in verschiedenen Kontexten begegnet werden (Wortschatz-Erwerbsforschung).

Quelle: `recherche/paedagogik/ERGEBNIS.md` Zeile 414

---

## TEIL 5: SESSION-ABSCHLUSS (Pflicht)

### Regel A1: 2-3 Abschluss-Formate pro Session

Nie nur XP-Screen. Kombination aus 3 Kategorien:

1. **Inhaltlich** (Reflexion/Transfer): Key-Takeaways, Feynman-Prompt, Exit Ticket, Ein-Satz-Zusammenfassung
2. **Repetition** (Festigen): Schwächen-Review, Karteikarten-Ernte, Vorschau-Brücke
3. **Motivational** (Feiern): XP-Screen, Badge, Tagesstatistik, Ermutigungs-Feedback

### Regel A2: Session-Typ bestimmt Abschluss

| Session-Typ | Empfohlene Formate |
|---|---|
| S1 (Einstieg) | Key-Takeaway-Karten + Karteikarten-Ernte + XP-Screen |
| S2 (Vertiefung) | Schwächen-Review + Exit Ticket + Ermutigungs-Feedback |
| S3 (Transfer) | Rückblick Einstiegs-Problem + Feynman-Prompt + Vorher/Nachher |
| S8 (Prüfung) | Prüfungsreife-Indikator + Schwächen-Review + Badge |

### Regel A3: Rückblick auf Einstiegs-Problem (Brilliant)

Wenn die Session mit einem Brilliant-Moment startet (Problem das der Schüler nicht lösen kann), MUSS am Session-Ende exakt dasselbe Problem nochmal kommen — jetzt kann er es lösen.

---

## TEIL 6: ADAPTIVE ENGINE (Pflicht für Engine-Logik)

### Regel E1: Checkpoint-Scoring mit Konsequenz

Score A (≥85%): Phasen überspringen → direkt zu ANWENDUNG.
Score B (60-84%): Standard-Ablauf.
Score C (<60%): Voller Bogen inkl. ANDERS ERKLÄRT + STORYTELLING.

### Regel E2: Fehler = später in anderem Format nochmal

Falsche Antwort → gleicher Inhalt kommt später in ANDEREM stepType. Der Schüler merkt nicht dass es Fehler-Wiederholung ist.

### Regel E3: Interleaving ab Session 2

Ab S2: 20-30% Fragen aus ANDEREN LEs einstreuen (+30% Langzeitretention).

### Regel E4: Antwortzeit als Signal

| Kombination | Bedeutung | Aktion |
|------------|-----------|--------|
| Schnell + richtig | WEISS es | Höhere Stufe |
| Langsam + richtig | Unsicher | Gleiche Stufe nochmal |
| Schnell + falsch | Geraten | Grundlegend erklären |
| Langsam + falsch | Kämpft | Einfachere Erklärung + Hilfe |

### Regel E5: B1-Satzanfänge bei offenen Fragen

B1-Schüler bekommen bei Freetext-Steps Satzanfänge als Hilfe:
- "Der Patient hat...", "Die Pflegekraft sollte...", "Das Ziel ist..."

Quelle: `content/_b1-pflegedeutsch.md` Sektion 7

### Regel E6: Redemittel in Dialog-Steps

Dialog-Steps nutzen die dokumentierten Redemittel-Muster aus der Pflegepraxis.

Quelle: `content/_b1-pflegedeutsch.md` Sektion 8 (10 Blöcke, Micucci/Würtz 2021)

---

## TEIL 7: 8 ERLEBNIS-MODI (Referenz)

| Modus | Gefühl | Step-Typen | Dauer |
|-------|--------|-----------|-------|
| **Story** | Netflix-Serie | dialog, branching | 3-5 min |
| **Challenge** | Quiz-Game | timer, mc (Streak), swipe | 2-3 min |
| **Puzzle** | Rätsel-Spiel | crossword, memory, fillin, cloze, matching | 3-5 min |
| **Entdecker** | Instagram-Carousel | text (Karten, nicht Block!) | 2-3 min |
| **Sortierstation** | Drag & Drop | sorting, categorize | 2-4 min |
| **Schreibtisch** | Mini-Prüfung | freetext (KI-Bewertung + Bloom-Badge) | 3-5 min |
| **Praxis-Sim** | Escape Room | branching (mehrstufig), hotspot | 4-6 min |
| **Checkpoint** | Fitness-Tracker | selfrating, summary | 2-3 min |

---

## TEIL 8: SESSION-RHYTHMUS (Referenz für 22-Step-Sessions)

### S1 Schema (Einstieg):

```
[Opener: Curiosity Gap / Anticipation / Story]    → 1-2 Steps
[Story: Leitfall kennenlernen]                     → 2-3 Steps
[Challenge: Brilliant-Fragen VOR Erklärung]        → 2-3 Steps
[Entdecker: Info-Karten (Antworten!)]              → 2-3 Steps
[Challenge: Verständnisfragen]                     → 2-3 Steps
[Puzzle: Fachbegriffe festigen]                    → 2-3 Steps
[Story: Neues Problem taucht auf]                  → 1-2 Steps
[Sortierstation / Schreibtisch]                    → 2-3 Steps
[Challenge: Speed-Review]                          → 1-2 Steps
[Abschluss: Key-Takeaways + XP]                   → 2-3 Steps
```

### Wechsel: ~11 Modus-Wechsel in 22 Steps = nie langweilig

---

## TEIL 9: CHECKLISTE (K.O.-Kriterien für Prüfer)

Jede generierte Session MUSS alle K.O.-Kriterien erfüllen:

- [ ] **O1**: Kein Selfrating als Opener
- [ ] **O2**: Opener-Typ kommt in dieser LE nicht doppelt vor
- [ ] **O4**: Erster Step setzt kein Fachwissen voraus
- [ ] **F2**: Nie mehr als 3× gleicher Fragetyp am Stück
- [ ] **F4**: Mindestens 8 verschiedene stepTypes pro Session
- [ ] **G1**: Alle Fachbegriffe im Step-Text haben Glossar-Eintrag
- [ ] **G2**: B1-relevante Alltagswörter sind markiert
- [ ] **T2**: Keine verbotenen Füllsätze
- [ ] **T5**: Body-Länge eingehalten
- [ ] **A1**: 2-3 verschiedene Abschluss-Formate (nicht nur XP)

---

## Quellen (konsolidiert)

- `specs/eroeffnungsstrategien.md` — 18 Opener-Strategien
- `specs/content-textregeln.md` — Text-Knappheit, Session-Einstiege
- `specs/le-erlebnis-konzept.md` — 8 Modi, Session-Rhythmus, Bloom
- `specs/text-varianten.md` — 22 Text-Formate, displayFormat
- `specs/dialog-varianten.md` — 25 Dialog-Formate
- `specs/mc-varianten.md` — 18 MC-Formate
- `specs/abschluss-varianten.md` — 16 Abschluss-Formate
- `specs/ADAPTIVER-THEMENBOGEN.md` — Phasen-Modell, Scoring
- `content/_b1-pflegedeutsch.md` — B1-Wortschatz, Redemittel
- `VISION.md` — Wahrheitsquelle

---

*Dieses Dokument ist die einzige Referenz für Content-Qualität. Die 7 Einzel-Specs bleiben als Detail-Nachschlagewerk, aber bei Widerspruch gilt CONTENT-QUALITAET.md.*
