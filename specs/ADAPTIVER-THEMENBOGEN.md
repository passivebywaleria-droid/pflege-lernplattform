# Adaptiver Themenblock-Bogen — Spec

**Erstellt:** 2026-03-31
**Status:** Genehmigt (Gründerin-Gespräch)
**Betrifft:** Didaktik-Regisseur, Content-Generator, Lern-Engine

---

## Problem

Die Steps haben keine didaktische Struktur. Inhalte werden nacheinander "erwähnt" statt durch einen Spannungsbogen geführt: einführen → erklären → vertiefen → anwenden. Das Ergebnis fühlt sich flach und repetitiv an.

## Lösung

Jeder **Themenblock** innerhalb einer Session folgt einem wissenschaftlich fundierten **Phasen-Bogen**. Die Anzahl der Phasen ist **adaptiv** — abhängig davon ob der Schüler das Thema versteht oder nicht.

---

## 1. Phasen-Modell (11 Phasen + Brücke)

### Pflicht-Phasen (immer, jeder Themenblock)

| # | Phase | Funktion | ARCS | Lerntheorie |
|---|---|---|---|---|
| 1 | **SZENE** | Emotionaler Einstieg, Neugier wecken | Attention + Relevance | Keller ARCS |
| 2 | **ERKLÄRUNG** | Kernwissen vermitteln | — | Reigeluth Elaboration (einfachste Version) |
| 3 | **CHECKPOINT** | Verständnis messen (MC + Zeit + Confidence) | — | Bloom Mastery Learning (formativ) |
| 9 | **ANWENDUNG** | Wissen in neuem Kontext nutzen | Confidence | Bloom Mastery (summativ) |
| 10 | **REFLEXION** | Eigene Haltung, Transfer | Satisfaction | Elaboration (Selbstregulation) |

### Adaptive Phasen (bei Score B/C nach Checkpoint)

| # | Phase | Wann | Funktion |
|---|---|---|---|
| 4 | **ANDERS ERKLÄRT** | Score B (richtig aber unsicher) oder Score C (falsch) | Anderer Blickwinkel: Analogie, Vergleich, Bild, Tabelle |
| 5 | **STORYTELLING** | Score C (falsch) | "Stell dir vor..." — Geschichte die im Kopf bleibt, Konsequenzen zeigen |

### Themenabhängige Phasen (je nach Kompetenzbereich)

| # | Phase | Wann einsetzen | Funktion |
|---|---|---|---|
| 6 | **PRAXIS-DIALOG** | KB I, KB III — pflegerische/interprofessionelle Themen | Gespräch mit Praxisanleiterin, Dozentin, Arzt |
| 7 | **PATIENTEN-PERSPEKTIVE** | KB I, KB II, KB IV — wenn Patient betroffen | Wie erlebt der Patient das? Was fühlt/denkt er? |
| 8 | **ANGEHÖRIGEN-BERATUNG** | KB II — Kommunikation/Beratung | "Die Tochter fragt: Was kann ich tun?" |

### Querschnitts-Phase (bei pflegerischen Themen)

| # | Phase | Wann einsetzen | Funktion |
|---|---|---|---|
| 9b | **PFLEGEPLANUNG** | CE 05 + alle LEs mit Pflegesituationen | Pflegeprozess üben: Problem → Ziel → Maßnahme → Evaluation |

### Brücken-Phase (dynamisch, basierend auf Schüler-Fortschritt)

| # | Phase | Wann einsetzen | Funktion |
|---|---|---|---|
| 0 | **BRÜCKE** | Vor Phase 1 (Szene) — wenn thematische Verbindung zu anderer LE existiert | Vorwissen aktivieren, Kontext schaffen, Ausblick geben |

#### Drei Brücken-Typen

| Typ | Richtung | Bedingung | Beispiel |
|---|---|---|---|
| **Rückblick** | ← Vergangene LE | Nur wenn Schüler die verknüpfte LE abgeschlossen hat | "In LE-03 hast du gelernt was Vitalzeichen sind. Heute siehst du warum sie bei Herzinsuffizienz entscheidend sind." |
| **Ausblick** | → Kommende LE | Immer möglich (macht neugierig) | "Wie du das einem Patienten in einfacher Sprache erklärst — das üben wir in LE-07." |
| **Querverbindung** | ↔ Parallele LE | Nur wenn verknüpfte LE abgeschlossen hat | "Die Medikamente die du in LE-12 kennengelernt hast — die spielen auch bei diesem Krankheitsbild eine Rolle." |

#### Dynamische Logik in der Engine

```
VOR jedem Themenblock:
  1. Engine prüft: Gibt es Interleaving-LEs im Rohmaterial (Abschnitt D)?
  2. Für jede verknüpfte LE:
     a. Hat der Schüler diese LE abgeschlossen? → Rückblick/Querverbindung möglich
     b. Liegt die LE noch vor ihm? → Ausblick möglich
  3. Max 1 Brücke pro Themenblock (nicht überladen)
  4. Nicht in jedem Themenblock — nur wo es inhaltlich passt
```

#### Regeln für Brücken-Content

- **Rückblick:** Nie testen, nur aktivieren. "Erinnerst du dich?" nicht "Was war nochmal...?"
- **Ausblick:** Kurz, macht neugierig, verspricht nichts Konkretes. Max 2 Sätze.
- **Querverbindung:** Erklärt den Zusammenhang, nicht das Thema der anderen LE.
- **Kein Brücken-Step wenn die verknüpfte LE nicht abgeschlossen ist** (bei Rückblick/Querverbindung)
- **Step-Typ:** `text` (kurz, 2-3 Sätze) oder `dialog` (Leitfall-Figur erinnert sich)

---

## 2. Phasen-Zuordnung nach Kompetenzbereich

Der Regisseur wählt die optionalen Phasen anhand der KB-Zuordnung aus dem Rohmaterial (Abschnitt H):

```
KB I   (Pflegeprozess)              → Phase 6 (Praxis-Dialog) + Phase 7 (Patient) + Phase 9b (Pflegeplanung)
KB II  (Kommunikation/Beratung)     → Phase 7 (Patient) + Phase 8 (Angehörige)
KB III (Intra-/Interprofessionell)  → Phase 6 (Dialog mit Arzt/Team)
KB IV  (Recht/Ethik)               → Phase 7 (Patient) + Phase 5 (Story: Konsequenzen)
KB V   (Professionsentwicklung)    → Phase 10 erweitert (tiefere Reflexion)
```

---

## 3. Checkpoint-Scoring (Phase 3)

Der Checkpoint ist ein **sichtbarer** Step ("Kurzer Check!") — MC mit Zeitmessung und optionaler Confidence-Abfrage.

### Score-Berechnung

| Signal | Score A (verstanden) | Score B (unsicher) | Score C (nicht verstanden) |
|---|---|---|---|
| Antwort | Richtig | Richtig | Falsch |
| Antwortzeit | < 10 Sek | > 15 Sek | Egal |
| Confidence | "Sicher" | "Unsicher" | Egal |
| Bedingung | 2 von 3 erfüllt | 1 von 3 erfüllt | Falsch = immer C |

### Adaptive Reaktion nach Score

```
Score A (verstanden + schnell + sicher):
  → Skip Phase 4-8
  → Direkt zu Phase 9 (Anwendung) + Phase 10 (Reflexion)
  → Gesparte Zeit → Vertiefungs-Pool der Session

Score B (richtig aber unsicher/langsam):
  → Phase 4 (Anders erklärt) — 1 zusätzlicher Erklär-Ansatz
  → Dann Phase 9 (Anwendung) + Phase 10 (Reflexion)

Score C (falsch):
  → Voller Bogen: Phase 4 + 5 + themenabhängige Phasen (6/7/8)
  → Bei 2x falsch im selben Thema: Perspektivwechsel (Patienten-Sicht)
  → Engine merkt sich: "Dieses Thema = Schwäche" → Wiederholungs-Pool
  → Bei 3x falsch: Markierung für Lehrer + KI-Tutor-Chat öffnet sich
```

---

## 4. Session-Ebene: Zeit-Management

### Zeitbudget pro Session: 30 Minuten

```
Schüler A (schnell, Score A):         Schüler B (langsam, Score C):
├─ Thema 1: 5 Min (5 Steps)          ├─ Thema 1: 15 Min (9 Steps, voller Bogen)
├─ Thema 2: 5 Min (5 Steps)          ├─ Thema 2: 12 Min (7 Steps)
├─ Thema 3: 5 Min (5 Steps)          └─ Checkpoint: 3 Min
├─ Vertiefung: 8 Min                 → Thema 3 verschiebt sich in nächste Session
├─ Wiederholung: 5 Min
└─ Checkpoint: 2 Min

Beide: 30 Min aktive Lernzeit ✓
Beide: Lernzeit dokumentiert ✓
Unterschied: Tiefe + Breite
```

### Was passiert mit gesparter/fehlender Zeit?

| Situation | Reaktion |
|---|---|
| Zeit übrig + alles verstanden | Vertiefungs-Steps aus Pool ODER Schwächen-Wiederholung früherer Themen |
| Zeit knapp + Themen offen | Nur Pflicht-Phasen (1→2→3→9→10), restliche Themen in nächste Session |
| Session überzogen | Weicher Abschluss: "Du hast heute viel geschafft! Den Rest machen wir morgen." |

---

## 5. LE-Ebene: Fortschritt + Abschluss

### Nach jeder Session

- Welche Themen geschafft vs. geplant?
- Welche Schwächen haben sich angehäuft?
- Nächste Session: Erst Schwächen-Recall, dann neue Themen

### Nach Zeitrichtwert erreicht (z.B. 40h für LE-01)

```
≥85% Themen verstanden (Score A/B):
  → LE "bestanden"
  → Restschwächen → Wiederholungs-Pool (Spaced Repetition in späteren LEs)

60-84% verstanden:
  → LE "teilweise bestanden"
  → Plattform bietet Nacharbeit-Sessions an (Extra-Zeit, nur Schwächen)
  → Schüler kann freiwillig weitermachen
  → Lehrer wird informiert

<60% verstanden:
  → LE "nicht bestanden"
  → Lehrer wird AKTIV benachrichtigt
  → Empfehlung: "Dieses Thema sollte im Präsenzunterricht behandelt werden"
  → Plattform sperrt NICHT — Schüler darf immer weiterlernen
```

### Lernzeit-Dokumentation

- Aktive Minuten pro Thema (nicht nur "eingeloggt")
- Regelzeit vs. Nacharbeit getrennt dokumentiert
- PDF-Export für Schule/Prüfungszulassung

---

## 6. Querschnittsthema: Pflegeprozess

### Problem

Der Pflegeprozess wird in CE 01 LE 02 einmal erklärt, dann vorausgesetzt. Viele Schüler können ihn nicht anwenden weil er nie systematisch geübt wird.

### Lösung: Step-Typ `careplan`

Ein wiederverwendbarer Step-Typ der in jeder LE mit Pflegesituationen eingesetzt wird:

```
Struktur (immer gleich):
1. Problem erkennen    → "Was ist das Pflegeproblem?"
2. Ziel formulieren    → "Was soll erreicht werden?"
3. Maßnahme planen     → "Welche Maßnahme wählst du?"
4. Durchführung        → (im Leitfall-Kontext)
5. Evaluation          → "Hat es gewirkt? Was änderst du?"
```

### Bloom-Progression über die Ausbildung

| Phase | Bloom | Beispiel |
|---|---|---|
| Frühe LEs (1. Drittel) | B2 | "Ordne zu: Welcher Schritt ist das?" |
| Mittlere LEs (2. Drittel) | B3-B4 | "Formuliere Problem + Ziel für diesen Patienten" |
| Späte LEs (3. Drittel) | B5-B6 | "Erstelle vollständige Pflegeplanung, priorisiere, evaluiere" |

### Einsatz-Regel für den Regisseur

- CE 05 (Krankheitsbilder): **Immer** Phase 9b (Pflegeplanung) einbauen
- CE 01-04 (Grundlagen): Wenn pflegerische Situation im Leitfall vorkommt
- CE 06-11: Wenn KB I im Rohmaterial gelistet ist
- Mindestens **1x pro Session** in pflegerischen LEs

---

## 7. Verbindungen zwischen LEs (Brücken)

### Drei Typen

| Typ | Wann | Beispiel |
|---|---|---|
| **Rückblick** | Ab LE-02+, nur wenn verknüpfte LE abgeschlossen | "In LE-01 hast du gelernt dass Pflege mehr ist als Körperpflege. Heute: Kommunikation." |
| **Ausblick** | Ende eines Themenblocks | "Wie du das dem Patienten erklärst — das üben wir in LE-07." |
| **Querverbindung** | Mitten im Themenblock | "Die Vitalzeichen aus LE-03 — hier siehst du warum sie bei Herzinsuffizienz wichtig sind." |

### Technisch: Dynamisch basierend auf Schüler-Fortschritt

- Engine prüft: Hat der Schüler die verknüpfte LE abgeschlossen?
- Ja → Brücken-Step wird angezeigt
- Nein → Brücken-Step wird übersprungen
- Datenquelle: Rohmaterial Abschnitt D (Interleaving — listet verwandte LEs)

---

## 8. Wissenschaftliche Fundierung

| Modell | Autor/Jahr | Was es belegt | Unsere Umsetzung |
|---|---|---|---|
| **Mastery Learning** | Bloom 1968, Guskey 2007 | Meistern vor Weitergehen, Effektstärke 0.59 | Score A/B/C + adaptive Phasen |
| **Zone of Proximal Development** | Vygotsky 1978 | Lernen in der Zone zwischen "kann ich" und "überfordert" | Checkpoint misst ZPD, Scaffolding wird angepasst |
| **Elaboration Theory** | Reigeluth 1979 | Einfach → Komplex in konzentrischen Kreisen | Phasen-Bogen: Szene → Erklärung → Vertiefung → Transfer |
| **ARCS-Modell** | Keller 1987 | Motivation = Attention + Relevance + Confidence + Satisfaction | Jeder Themenblock deckt alle 4 Säulen ab |
| **Adaptive Scaffolding (LLM)** | arxiv 2025 | KI-basiertes dynamisches Scaffolding > statische Systeme | Score-basierte Phase-Auswahl |

### Quellen

- Bloom, B.S. (1968). Learning for Mastery. UCLA Evaluation Comment.
- Guskey, T.R. (2007). Closing Achievement Gaps: Revisiting Benjamin S. Bloom's Learning for Mastery.
- Vygotsky, L.S. (1978). Mind in Society. Harvard University Press.
- Reigeluth, C.M. (1979). In Search of a Better Way to Organize Instruction: The Elaboration Theory.
- Keller, J.M. (1987). Development and use of the ARCS model of instructional design. Journal of Instructional Development.
- Wang et al. (2025). A Theory of Adaptive Scaffolding for LLM-Based Pedagogical Agents. arxiv.

---

## 9. Zusammenfassung: Ein Themenblock durchgespielt

### Beispiel: "Vorbehaltene Tätigkeiten" (LE-02, KB I + KB IV)

```
Phase 0 — BRÜCKE (text, nur wenn LE-01 abgeschlossen):
  "In LE-01 hast du gelernt was professionelle Pflege bedeutet.
  Aber was genau darfst du als Azubi eigentlich tun — und was nicht?"

Phase 1 — SZENE (dialog):
  Praxisanleiterin Lisa: "Heute darfst du den Verband wechseln —
  aber den Katheter lege ich. Weißt du warum?"

Phase 2 — ERKLÄRUNG (text):
  Was sind vorbehaltene Tätigkeiten? §4 PflBG.
  Warum gibt es sie? Patientensicherheit.

Phase 3 — CHECKPOINT (mc + Zeitmessung):
  "Welche dieser Tätigkeiten ist vorbehalten?"
  A) Blutdruck messen  B) Katheter legen  C) Betten machen  D) Essen anreichen

  ┌─ Score A → direkt zu Phase 9
  ├─ Score B → Phase 4, dann Phase 9
  └─ Score C → Phase 4 + 5 + 6 + 7

Phase 4 — ANDERS ERKLÄRT (comparison):
  Vergleichstabelle: Was darf wer?
  Pflegefachperson | Pflegehelferin | Azubi im 1. Jahr | Azubi im 3. Jahr

Phase 5 — STORYTELLING (text, narrativ):
  "Stell dir vor: Ein Azubi legt eigenmächtig einen Katheter.
  Der Patient bekommt eine Harnwegsinfektion. Wer haftet?
  Was passiert mit dem Azubi? Was passiert mit der Schule?"

Phase 6 — PRAXIS-DIALOG (dialog):
  Dozentin Frau Weber: "Was machst du wenn ein Arzt dich bittet,
  eine Infusion anzuhängen — und du weißt, das darfst du noch nicht?"

Phase 7 — PATIENTEN-PERSPEKTIVE (text/branching):
  "Herr Schneider sagt: 'Können Sie mir nicht schnell die Spritze geben?
  Die andere Schwester macht das auch immer.' Was antwortest du?"

Phase 9 — ANWENDUNG (branching):
  Neuer Kontext: Nachtschicht, Notfall, Katheter muss raus.
  Ärztin nicht erreichbar. Was tust du?

Phase 10 — REFLEXION (reflection):
  "Warum ist diese Regel wichtig — auch wenn es manchmal nervt
  und du das Gefühl hast, du könntest es schon?"
```

### Bei Score A: Schüler sieht Phase 0, 1, 2, 3, 9, 10 = 6 Steps (~6 Min)
### Bei Score C: Schüler sieht alle Phasen = 10 Steps (~14 Min)
### Brücke erscheint nur wenn LE-01 abgeschlossen — sonst Start bei Phase 1

---

## 10. Spaced Repetition — Nie wieder vergessen

### Das Problem: Die Vergessenskurve (Ebbinghaus 1885)

```
Nach Lernen:     100% behalten
Nach 20 Min:      58% behalten
Nach 1 Tag:       34% behalten
Nach 1 Woche:     25% behalten
Nach 1 Monat:     21% behalten
Nach 3 Monaten:   ~10% behalten
```

Ein Schüler der Dekubitus am Montag verstanden hat, weiß am Freitag nur noch 25%.
Nach 3 Monaten quasi nichts — obwohl er es zum Zeitpunkt des Lernens verstanden hat.

### Die Lösung: 1-3-7-14-30 Intervalle (J-Methode)

Belegt durch Cepeda et al. 2006 (Meta-Analyse, 184 Studien, 317 Experimente):
Spaced Repetition schlägt Massed Practice um **10-30%**.

Pflege-spezifische Studie (PMC 2024, randomisiert, Anästhesie-Pflege):
- Spaced Learning: **79% Retention** nach 4 Wochen
- Normaler Unterricht: **48% Retention** nach 4 Wochen

| Review | Zeitpunkt | Dauer | Format | Inhalt |
|---|---|---|---|---|
| **Micro** | +1 Tag | 3-5 Min | Flipcards | Kernbegriffe der letzten Session |
| **Mini** | +3 Tage | 5-8 Min | MC + Kurzfall | Anderer Kontext als beim Erstlernen |
| **Session** | +7 Tage | 10-15 Min | Schwächen-Fokus | Nur Score B/C Themen wiederholen |
| **LE-Review** | +14 Tage | 15-20 Min | Querschnitt | Alle Themen der LE, Prüfungsformat |
| **Langzeit** | +30 Tage | 10 Min | Schnelltest | Nur Kernkonzepte, zeitbegrenzt |
| **Semester** | +90 Tage | 15 Min | Prüfungssimulation | Prüfungsreife-Check |

### Wie Reviews in den Wochenplan fließen

```
Woche 1:  LE-01 Sessions 1-4 (Erstlernen)
Woche 2:  LE-02 Sessions 1-4 + LE-01 Micro+Mini Reviews
Woche 3:  LE-03 Sessions 1-4 + LE-01 Session-Review + LE-02 Micro+Mini
Woche 4:  LE-04 Sessions 1-4 + LE-01 LE-Review + LE-02 Session-Review + LE-03 Micro+Mini
Woche 5:  LE-05 Sessions 1-4 + LE-01 Langzeit + LE-02 LE-Review + ...
```

**Jeder Tag hat max 2 Slots:**
1. **Neues Lernen** (20-25 Min) — aktueller Themenblock mit Phasen-Bogen
2. **Review** (5-10 Min) — automatisch geplant aus dem Review-Scheduler

### Review-Typen und Step-Formate

| Review-Typ | Erlaubte Step-Typen | Nicht erlaubt | Warum |
|---|---|---|---|
| Micro (+1d) | flipcard, swipe, confidence | text, freetext | Schnelles Abrufen, nicht nochmal lesen |
| Mini (+3d) | mc, truefalse, fillin, dialog | text, sorting | Aktiver Recall in neuem Kontext |
| Session (+7d) | mc, branching, cloze, matching | text | Nur Schwächen, anspruchsvoller |
| LE-Review (+14d) | mc, careplan, branching, freetext | flipcard | Prüfungsnah, Transfer |
| Langzeit (+30d) | timer-mc, branching, careplan | flipcard, text | Zeitdruck, Prüfungssimulation |
| Semester (+90d) | Prüfungsformat der Schule | alles andere | Echte Prüfungsvorbereitung |

### Adaptiver Review-Scheduler

```
NACH jedem Review:
  Score A (schnell + richtig):
    → Intervall VERDOPPELN (z.B. +7d → +14d)
    → Thema wird seltener wiederholt

  Score B (richtig aber langsam):
    → Intervall BEIBEHALTEN
    → Beim nächsten Review: anderen Kontext verwenden

  Score C (falsch):
    → Intervall ZURÜCKSETZEN auf +1d
    → Thema wandert zurück in den Micro-Review-Pool
    → Engine merkt: "Dieses Thema sitzt noch nicht"
```

### Review-Zeit ist TEIL des Zeitrichtwerts

```
LE-01: Zeitrichtwert 40h
├─ Erstlernen: 30h (Sessions 1-8, Themenblöcke mit Phasen-Bogen)
├─ Reviews: 10h (über 3 Monate verteilt)
│   ├─ 8x Micro-Review (à 5 Min) = 40 Min
│   ├─ 4x Mini-Review (à 8 Min) = 32 Min
│   ├─ 4x Session-Review (à 15 Min) = 60 Min
│   ├─ 2x LE-Review (à 20 Min) = 40 Min
│   ├─ 1x Langzeit-Review (10 Min)
│   └─ Rest: Schwächen-Nacharbeit
└─ Alles dokumentiert als aktive Lernzeit ✓
```

### VISION.md-Alignment: Freitag = Wiederholungstag

VISION.md fordert bereits:
> "Freitag = Wiederholungstag (Spaced Repetition der ganzen Woche)"

Der Review-Scheduler setzt das um:
- **Mo-Do:** Neues Lernen + Micro/Mini-Reviews aus vergangenen Wochen
- **Fr:** Keine neuen Themen. Nur Session-Reviews + LE-Reviews + Schwächen

---

## 11. LLM-basiertes Adaptive Scaffolding

### Wissenschaftliche Grundlage

Basierend auf dem Inquizzitor-Framework (Cohn et al., Stanford 2025) und dem
EDF-Framework (Evidence-Decision-Feedback, arxiv 2026).

**Kernergebnis:** KI-Bewertung erreicht κ=0.94 (Inter-Rater-Reliabilität) —
besser als menschliche Bewerter. 104 Schüler, 3.413 KI-Interaktionen, 4.03/5 Enjoyment.

### Drei-Modul-Architektur (adaptiert für Pflege-Lernplattform)

```
┌─────────────────────────────────────────────────────────┐
│  MODUL 1: EVIDENCE (Bewertung)                          │
│                                                         │
│  Input: Schüler-Antwort + Antwortzeit + Confidence      │
│  Methode: LLM bewertet mit Rubrik (Chain-of-thought)    │
│  Output: Score A/B/C + Fehlertyp-Analyse                │
│                                                         │
│  Fehlertypen (aus VISION.md):                           │
│  - Sprachproblem: Versteht die Frage nicht              │
│  - Begriffsproblem: Kennt den Fachbegriff nicht         │
│  - Konzeptproblem: Verwechselt zwei Konzepte            │
│  - Geraten: Zu schnell für echtes Wissen                │
│                                                         │
│  → Jeder Fehlertyp triggert andere Scaffolding-Strategie│
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  MODUL 2: DECISION (Strategie-Wahl)                     │
│                                                         │
│  Input: Score + Fehlertyp + Schüler-Profil              │
│  Drei Konstrukte (aus Inquizzitor):                     │
│                                                         │
│  ZPD-Platzierung:                                       │
│    "Wo steht der Schüler gerade?"                       │
│    → Bestimmt Schwierigkeitsgrad der nächsten Phase     │
│                                                         │
│  Self-Efficacy:                                         │
│    "Wie sicher fühlt er sich?"                           │
│    → Bestimmt Ton (mehr/weniger Ermutigung)             │
│    → Sandwich-Prinzip aus VISION.md                     │
│                                                         │
│  Goal-Setting:                                          │
│    "Was ist der nächste konkrete Schritt?"               │
│    → Bestimmt welche Phase als nächstes kommt           │
│                                                         │
│  Output: Nächste Phase + Scaffolding-Level              │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│  MODUL 3: FEEDBACK (Scaffolding-Spektrum)               │
│                                                         │
│  Kein starres "Level 1/2/3" — sondern Spektrum:         │
│                                                         │
│  ◄── Viel Hilfe ─────────────────── Wenig Hilfe ──►    │
│                                                         │
│  Sprachproblem erkannt:                                 │
│    → Frage in einfacherer Sprache nochmal stellen       │
│    → Glossar einblenden (DE/AR/TR)                      │
│    → Vorlesefunktion aktivieren                         │
│                                                         │
│  Begriffsproblem erkannt:                               │
│    → Begriff erklären + Bild zeigen + vorlesen          │
│    → Dann nochmal fragen                                │
│                                                         │
│  Konzeptproblem erkannt:                                │
│    → Vergleichstabelle (Phase 4: ANDERS ERKLÄRT)        │
│    → Beide Konzepte nebeneinander zeigen                │
│                                                         │
│  Geraten erkannt:                                       │
│    → Thema nochmal von Grund auf (Phase 5: STORYTELLING)│
│    → Langsamer, Schritt für Schritt                     │
│                                                         │
│  Scaffolding wird ABGEBAUT wenn Self-Efficacy steigt:   │
│    Session 1: Volle Erklärung + Ermutigung              │
│    Session 3: Nur Hinweis + "Du weißt das schon"        │
│    Session 5: Nur Frage, keine Hilfe mehr               │
└─────────────────────────────────────────────────────────┘
```

### Integration mit Phasen-Bogen

```
Themenblock startet:
│
├─ Phase 1 (SZENE) + Phase 2 (ERKLÄRUNG) → immer
│
├─ Phase 3 (CHECKPOINT):
│   └─ MODUL 1 bewertet Antwort
│       ├─ Score A + Fehlertyp: keiner → MODUL 2: Skip zu Phase 9
│       ├─ Score B + Fehlertyp: Begriffsproblem → MODUL 2: Phase 4 (Vergleich)
│       └─ Score C + Fehlertyp: Konzeptproblem → MODUL 2: Phase 4+5+6
│
├─ Gewählte Phasen werden durchlaufen
│   └─ MODUL 3 steuert den Ton und die Hilfe-Intensität pro Phase
│
├─ Phase 9 (ANWENDUNG):
│   └─ MODUL 1 bewertet erneut
│       ├─ Verstanden → Phase 10 (Reflexion) → nächster Themenblock
│       └─ Immer noch falsch → MODUL 2: Alternative Strategie
│           ├─ Anderer Sinneskanal (Audio statt Text)
│           ├─ Analogie aus dem Alltag
│           └─ Nach 3x: Lehrer-Markierung + KI-Tutor-Chat
│
└─ Review-Scheduler: Thema + Score → Review-Intervall setzen
```

### Was die KI für jeden Schüler lernt (Schüler-Profil)

```typescript
interface SchuelerProfil {
  // Pro Thema
  themenScores: Record<string, {
    score: "A" | "B" | "C";
    fehlertyp?: "sprache" | "begriff" | "konzept" | "geraten";
    antwortzeit: number;
    confidence: number;
    versuche: number;
    letzterReview: Date;
    naechsterReview: Date; // Spaced Repetition
  }>;

  // Lern-Präferenzen (KI lernt über Zeit)
  praeferenzen: {
    lerntBesserMit: "bilder" | "text" | "analogien" | "audio";
    brauchtMehrZeit: boolean;
    reagiertAuf: "ermutigung" | "herausforderung" | "struktur";
    spracheErstsprache: "de" | "ar" | "tr";
  };

  // Fortschritt
  abgeschlosseneLEs: string[];
  aktuelleLE: string;
  schwaechen: string[]; // Themen-IDs im Wiederholungs-Pool
  gesamtLernzeit: Record<string, number>; // Minuten pro LE
}
```

### Scaffolding-Abbau über Zeit

Das System baut Hilfe schrittweise ab (Vygotsky: "Fading"):

```
Erste Begegnung mit Thema:
  → Volle Erklärung + Bild + Glossar + Ermutigung
  → "Das ist ein Dekubitus. Das bedeutet Druckgeschwür..."

Review nach 7 Tagen (wenn Score A):
  → Nur Frage, kein Vorlauf
  → "Welche Prophylaxe-Maßnahme hat Priorität?"

Review nach 30 Tagen (wenn wieder Score A):
  → Zeitdruck + komplexerer Fall
  → "Herr Müller, 3 Tage liegend, Grad 2 Steißbein. Maßnahme?"

Review nach 90 Tagen:
  → Prüfungsformat, keine Hilfe
  → Multiple Choice, 60 Sekunden, 5 Optionen
```

---

## 12. Quellen

| # | Quelle | Was belegt wird |
|---|---|---|
| 1 | Ebbinghaus, H. (1885). Memory: A Contribution to Experimental Psychology | Vergessenskurve: 66% Verlust in 24h |
| 2 | Pimsleur, P. (1967). A Memory Schedule. Modern Language Journal | Optimale Intervalle: exponentiell expandierend |
| 3 | Bloom, B.S. (1968). Learning for Mastery. UCLA Evaluation Comment | Mastery Learning: Meistern vor Weitergehen |
| 4 | Leitner, S. (1972). So lernt man lernen. Herder Verlag | Leitner-System: 5-Box Karteikarten-Rotation |
| 5 | Vygotsky, L.S. (1978). Mind in Society. Harvard University Press | ZPD + Scaffolding + Fading |
| 6 | Reigeluth, C.M. (1979). Elaboration Theory. Instructional Science | Einfach→Komplex in konzentrischen Kreisen |
| 7 | Keller, J.M. (1987). ARCS Model. Journal of Instructional Development | Motivation: Attention+Relevance+Confidence+Satisfaction |
| 8 | Cepeda, N.J. et al. (2006). Distributed Practice. Psychological Bulletin | Meta-Analyse 184 Studien: Spaced > Massed um 10-30% |
| 9 | Karpicke, J.D. & Roediger, H.L. (2008). Science | Retrieval Practice: 150% bessere Langzeit-Retention |
| 10 | Guskey, T.R. (2007). Closing Achievement Gaps | Mastery Learning Effektstärke 0.59 |
| 11 | PMC (2024). Spaced Learning Nurse Anesthesia Students | Pflege-Studie: 79% vs 48% Retention nach 4 Wochen |
| 12 | Cohn, C. et al. (Stanford 2025). Adaptive Scaffolding for LLM Agents | KI-Bewertung κ=0.94, 3-Modul-Framework |
| 13 | arxiv (2026). Evidence-Decision-Feedback Framework | EDF: Theory-driven Scaffolding für LLM Agents |

---

## 12b. 3-Säulen-Tag-System (Anatomie · Pflege · Krankheitslehre)

Jeder Step wird einer der 3 Säulen der Pflegeausbildung zugeordnet (wie I Care Thieme):

| Tag | Beschreibung | Typische Phasen |
|-----|-------------|-----------------|
| `anatomie` | Aufbau & Funktion von Organsystemen | ERKLÄRUNG, ANDERS_ERKLÄRT (bei A&P-Content) |
| `pflege` | Pflegerisches Handeln, Prophylaxen, Dokumentation | PRAXIS_DIALOG, ANWENDUNG, PFLEGEPLANUNG |
| `krankheitslehre` | Pathophysiologie, Symptome, Diagnostik, Therapie | CHECKPOINT, ANWENDUNG (bei Krankheitsbildern) |

**Integration in den Phasen-Bogen:**
- **Erstnennung-LE** (Organsystem wird erstmals eingeführt): S1-S2 haben ≥40% `anatomie`-Steps
- **Auffrischungs-LE** (Organsystem kommt wieder vor): S1 Steps 1-3 sind A&P-Auffrischung
- **Jede Session** enthält alle 3 Tags (kein Tag >60%, kein Tag <15%)
- Der Phasen-Bogen bestimmt die didaktische Struktur, der Tag die fachliche Zuordnung

**Themen-Übersichtsseite:** Schüler können gezielt "nur Anatomie" oder "nur Krankheitslehre" üben — quer über alle LEs.

---

## 13. Umsetzung: Was muss wo geändert werden?

| # | Datei | Änderung | Prio |
|---|---|---|---|
| 1 | `didaktik-regisseur.md` | V4 ersetzen durch Phasen-Bogen-Modell, KB-Zuordnung, Review-Planung | 1 |
| 2 | `content-generator.md` | Erzähl-Regeln pro Phase, Storytelling-Pflicht, Praxis-Dialog-Muster | 1 |
| 3 | `didaktik-pruefer.md` | Neue Kriterien: Phasen-Bogen, KB-Phasen, Review-Formate | 1 |
| 4 | `content/_types.ts` | `themenblockPhase` Feld, Step-Typ `careplan`, Review-Metadaten | 2 |
| 5 | `src/components/learn/step-careplan.tsx` | Neuer Renderer für Pflegeplanung | 2 |
| 6 | `src/app/[locale]/lernen/[leId]/page.tsx` | Checkpoint-Scoring + Phase-Skip-Logik | 2 |
| 7 | Review-Scheduler (neues Modul) | 1-3-7-14-30 Intervalle, adaptiv basierend auf Score | 3 |
| 8 | Zustand Store | Schüler-Profil: Scores, Fehlertypen, Präferenzen, Review-Queue | 3 |
| 9 | `content/content-loader.ts` | Brücken-Steps + Review-Steps dynamisch ein-/ausblenden | 3 |
| 10 | Schüler-Fortschritts-API | LEs, Themen-Scores, Review-History, Lernzeit | 3 |
| 11 | LLM-Integration (Nebius/Llama) | Evidence-Modul: Fehlertyp-Analyse per KI | 4 |
| 12 | LLM-Integration | Decision-Modul: Scaffolding-Strategie-Wahl | 4 |
| 13 | LLM-Integration | Feedback-Modul: Adaptiver Ton + Scaffolding-Abbau | 4 |
| 14 | Wochenplan-Generator | Review-Slots automatisch in Tages-/Wochenplan einbauen | 4 |
| 15 | Lehrer-Dashboard | Review-Fortschritt, Schwächen-Übersicht, Lernzeit-Export | 5 |
| 16 | `content/_types.ts` | `ContentTag` Type + `tag` Pflichtfeld + `Organsystem` auf LE-Ebene | 1 |
| 17 | Pipeline-Agenten | TAG1-TAG3 Kriterien in Prüfer, V10 Tag-Verteilung in Regisseur, 4c Zuordnung in Generator | 1 |
| 18 | `/lernen/themen/[tag]/page.tsx` | Themen-Übersichtsseite: Alle Sessions nach Tag filtern | 3 |

### Priorisierung

**Prio 1 — Content-Qualität (sofort, wirkt bei nächster Content-Generierung):**
- Regisseur: Phasen-Bogen als Kern-Struktur + Review-Sessions planen
- Generator: Erzähl-Regeln pro Phase + Storytelling + Praxis-Dialoge
- Prüfer: Neue Kriterien für Phasen-Bogen + Review-Formate

**Prio 2 — Engine-Grundlagen (Lern-Engine erweitern):**
- Checkpoint-Scoring (MC + Zeitmessung + Confidence → Score A/B/C)
- Phase-Skip-Logik (Score A → weniger Phasen, Score C → voller Bogen)
- Step-Typ `careplan` + Renderer

**Prio 3 — Spaced Repetition (Wiederholungs-System):**
- Review-Scheduler: 1-3-7-14-30 Intervalle
- Schüler-Profil im Zustand Store
- Review-Steps dynamisch generieren/einblenden
- Brücken-Steps basierend auf Fortschritt

**Prio 4 — LLM-Scaffolding (KI-gesteuerte Adaptivität):**
- Evidence-Modul: Fehlertyp-Erkennung (Sprache/Begriff/Konzept/Geraten)
- Decision-Modul: Scaffolding-Strategie basierend auf Fehlertyp + Profil
- Feedback-Modul: Adaptiver Ton, Scaffolding-Abbau über Zeit
- Wochenplan mit automatischen Review-Slots

**Prio 5 — Dashboard + Reporting:**
- Lehrer sieht Review-Fortschritt pro Schüler
- Schwächen-Übersicht pro Klasse
- Lernzeit-Export (PDF) inkl. Review-Zeit
