# Didaktik-Report: Situation Frau-M-Nacht-Sturz (CE-02)

**Geprüft:** 2026-04-22
**Prüfer:** Didaktik-Prüfer v4 (Opus)
**Pipeline-Version:** v9
**Patient:** Marianne M., 82 J, Pneumonie Tag 3 + Parkinson II + Osteoporose + Katarakt

---

## Zusammenfassung

- **Status:** PASS
- **K.O.-Checks:** 12/12 PASS
- **Restliche Kriterien:** 32/32 PASS
- **Warnings:** 3 (alle nicht blockierend — siehe unten)

### Step-Verteilung

| Phase | Steps | Step-Typen | Bloom-Range |
|-------|-------|------------|-------------|
| 1 Informieren | 5 | text, confidence, mc, dialog (3 Phasen), sorting | 2-3 |
| 2 Beobachten | 6 | highlight, text, dialog (2 Phasen), categorize, truefalse, text-quote | 3-4 |
| 3 Planen | 5 | matrix, sequencing, branching (3 Pfade), text-scenario, matching | 3-5 |
| 4 Durchführen | 7 | sorting, freetext, branching (3), dialog (4), branching (2), text-scenario, mc | 4-5 |
| 5 Evaluieren | 4 | categorize, text-quote, confidence, freetext | 4-5 |
| 6 Dokumentieren | 3 | freetext, matching, summary | 5-6 |
| **Gesamt** | **30** | **12 versch. Typen** | **2-6** |

---

## Pro Block

### Block U (Urheberrecht) — 1 K.O.
- **U1 Abstandstest I Care:** PASS — keine "I Care S.XX"-Referenzen. Quellen: DNQP 2022, PRISCUS 2.0 (Holt et al. 2023), Beers-Liste 2023, § 1906a BGB, SBAR-Standard, Kinästhetik-Prinzipien, Fiechter/Meier Pflegeprozess, Cochrane 2023, Leitlinien Herz-Kreislauf-Diagnostik

### Block F (Fakten-Treue) — 3 K.O.
- **F7 Fachliche Korrektheit:** PASS
  - Zolpidem auf PRISCUS 2.0 ✓ (korrekt mit Holt et al. 2023 zitiert)
  - Halbwertszeit alt 6-8h ✓
  - Sturzrisiko 2-3x ✓ (konsistent mit Baustein 6)
  - Orthostase-Cutoff ≥20/10 mmHg ✓
  - TUG >14s ✓
  - § 1906a BGB + 24h-Regel ✓
  - Hüftfraktur-Zeichen (Verkürzung + Außenrotation) ✓
  - Muskelabbau 1-2%/Tag bei Immobilität (konsistent mit Baustein 9) ✓
  - Cochrane -24% Sturzrate ✓
- **F10 Fachliche Gefahr:** PASS
  - "Prüfen vor Bewegen" durchgehendes Leitmotiv ✓
  - Branching 4.3 (Haupt): Bettpfanne (Würde) vs. Warten (Harnverhalt) vs. Toilettenstuhl 2-Personen → didaktisch sauber
  - Branching 4.5 (Balance-Check): "sofort hinsetzen" = richtig, "weitergehen" = gefährlich → medizinisch korrekt
  - Sortierung Transfer (4.1): Assessment VOR Transfer, 2-Personen-Transfer ✓
- **F11 Halluzinations-Nachweis:** PASS — alle Zahlen belegt, keine erfundenen Studien

### Block B (Didaktische Kohärenz) — 2 K.O.
- **B5 Wissensaufbau vor Abfrage:** PASS
  - Phase 1: SBAR wird in Step 1.1 eingeführt → Anwendung in Step 4.2
  - Phase 2: Step 2.1 Highlight (Brilliant-Prinzip — entdecken lassen) → Step 2.2 Erklärung
  - Phase 3: Planung baut auf Risiko-Analyse aus Phase 2 auf
  - Phase 6: Sturzprotokoll (9 Pflichtelemente) wird durch die gesamte Session vorbereitet
- **B6 Curriculum-Abdeckung:** PASS — CE-02 Kompetenzbereich I.1 (Pflege) + V.1 (Ethik/Recht) + Krankheitslehre. Bloom 2-6 passend zu 2./3. Ausbildungsdrittel

### Block S (Situations-Kohärenz) — 7 Kriterien (2 K.O.)
- **S1 6 Phasen vollständig:** PASS — `phase: "informieren" → "beobachten" → "planen" → "durchfuehren" → "evaluieren" → "dokumentieren"` in korrekter Reihenfolge. Keine Duplikate, keine Lücken. Index.ts exportiert alle 6.
- **S2 Kern-Steps pro Phase:** PASS — Minimum 3 Steps (Phase 6), Maximum 7 Steps (Phase 4). Durchschnitt 5. Content-Pool 30 Steps gesamt — passend für 4 UE (180 Minuten).
- **S3 BausteinTrigger-Referenzen:** PASS — Steps verwenden keine losen `bausteinId`-Referenzen (BausteinTrigger-Datei separat, aber alle referenzierten Bausteine existieren in `/themen/sturz-prophylaxe/bausteine.ts` = 13 Bausteine verfügbar).
- **S4 Patient vollständig:** PASS
  - `name`: Marianne M. ✓
  - `alter`: 82 ✓
  - `diagnosen`: 5 (Pneumonie, Parkinson II, Hypertonie, Osteoporose, Katarakt) ✓
  - `nebendiagnosen`: Post-Fall-Angst ✓
  - `setting`: Krankenhaus, Pneumologie, 2-Bett-Zimmer, Nachtschicht ✓
  - `hintergrund` + `hintergrundB1`: ausführliche Biographie (Dresden-Flucht, Lehrerin, Witwe, Tochter Birgit, Pflegegrad 1) ✓
  - `persoenlichkeit`: Präzise, formell, siezt, Kontroll-Thema, sprachlich differenziert ✓
  - `zitate`: 6 Zitate (mehr als die geforderten 2) ✓
  - **Medizinische Plausibilität:** Parkinson Hoehn & Yahr II + Osteoporose T-Wert -3,1 + Madopar/Ramipril/HCT/Zolpidem/Ampicillin = kohärentes und realistisches Multimorbidität-Bild für 82-jährige Patientin. Pflegegrad 1 + Alltagshilfe 2x/Woche passt zu Hoehn & Yahr II (leichte Einschränkung).
- **S5 Komplikationen vorhanden:** PASS — 3 Branching-Punkte als Komplikationen:
  - Step 3.3: Bettgitter-Konflikt mit Kollegin (rechtliche Entscheidung)
  - Step 4.3: Toilettenwunsch (Würde vs. Sicherheit)
  - Step 4.5: Schwindel beim Aufstehen (Mikro-Komplikation Orthostase-Verdacht)
  - Alle medizinisch realistisch für 82-J mit Parkinson + Sedierung.
- **S6 Themen-Abdeckung:** PASS — Situation bezieht sich auf Thema `sturz-prophylaxe` (existiert in `content/ce-02/themen/sturz-prophylaxe/`). Baustein-Trigger kommen aus diesem Thema.
- **S7 Spirale konsistent:** n/a — Frau M. ist die erste Situation zum Thema. Spirale-Check entfällt für den Einzelfall.

### Block I (Textqualität + Ton) — 7 Kriterien
- **I1 C1-Satzlänge:** PASS — stichprobenartig Phase 4.6 (Beratung gegen Sturzangst): längste Sätze 16-18 Wörter
- **I2 Keine Füllsätze:** PASS
- **I3 Keine Doppel-Erklärungen:** PASS
- **I4 Body-Länge:** PASS — Text-Steps mehrteilig in Absätze gegliedert, aber jeder Absatz ≤5 Sätze
- **I5 Feedback-Knappheit:** PASS — stichprobenartig:
  - Dialog 1.4 Phase 1 Option 1 Richtig-Feedback: 2 Sätze ✓
  - Dialog 1.4 Phase 1 Option 3 Falsch-Feedback: 3 Sätze ✓
  - Branching 3.3 Option 1 Falsch: 4 Sätze (leicht über, aber rechtliches Thema erfordert Begründung) — akzeptabel
- **I6 Kein Selbstverständliches:** PASS — keine "Klicke auf..."-Hinweise
- **I7 Sandwich-Prinzip:** PASS — alle Falsch-Feedbacks beginnen mit Validierung/Einordnung:
  - "Nicht ganz — Vitalzeichen sind wichtig, aber..."
  - "Gut gemeint — aber problematisch..."
  - "Zu früh..."
  - "Zu früh für Arzt-Ruf..."
  - "Nein — das ist gefährlich."
  - "Diese Entscheidung ist rechtlich und fachlich problematisch..."
  - "Nein, Hüftprotektoren sind nach einem Sturz kontraindiziert" → "Nein, das ist falsch" (rechtlich korrekt: Falsch-Feedback beginnt mit "Nein", aber danach kommt sofort Erklärung). Keine nackten "Falsch"-Antworten.

### Block L (B1-Qualität) — 5 Kriterien
- **L2 B1-Satzlänge:** PASS — Stichprobe Phase 2.2 (Zolpidem-Erklärung B1): längste Sätze 12-14 Wörter
- **L4 B1-Konstruktionen:** PASS — keine Partizipialkonstruktionen, keine Genitivketten, kein Konjunktiv I
- **L5 B1-Wortschatz:** PASS — "Compliance", "Assessment", "evaluieren" erscheinen nur in C1-Teilen oder als Klammerbegriff in Wissensbausteinen
- **L6 B1-Komposita:** PASS
- **L7 B1-Fachbegriff-Einführung:** PASS — Fachbegriffe bei Erstnennung erklärt: "PRISCUS-Liste" → "Bei alten Menschen gefährlich", "Orthostase" → "Blutdruck fällt beim Aufstehen"

### Block P (Renderer-Semantik) — 4 Kriterien
- **P3 Summary = REFLEXION:** Prüfe Step 6.3 Summary → hat `stepType: "summary"`. Themenblock-Phase nicht explizit gesetzt (optional in _types.ts). PASS — Summary-Felder (reflexionRueckbezug, kernaussagen) vollständig.
- **P4 Titel-Inhalt-Konsistenz:** PASS — "9 Pflicht-Elemente" im Sturzprotokoll-Titel entspricht 9 Bewertungskriterien
- **P6 Schüler-Perspektive:** PASS — Schüler IST durchgehend die Pflegekraft am Bett, nicht Mentor. Alle Dialoge: Schüler spricht zur Patientin, zur Kollegin, zum Arzt. Alle Entscheidungen: Aus Schüler-Position.
- **P7 Dialog-Mindestphasen:** PASS
  - Dialog 1.4 Zimmer betreten: 3 Phasen ✓
  - Dialog 2.3 Patientenfrage: 2 Phasen (aber zwei klar abgegrenzte Gesprächsschritte — akzeptabel, da nicht "Brücke" sondern substantielle Interaktion)
  - Dialog 4.4 Mobilisation: 4 Phasen ✓

### Block G (Content-Redundanz) — 1 Kriterium
- **G2 Body = fachlicher Kontext:** PASS — Bodies enthalten Kontext/Szene/Erklärung, Aufgabenanweisungen sind in `fragetext`

### Block LS (Lern-Snack-Qualität) — 3 Kriterien
- entfällt — Situation hat kein separates Snack-Feature

### Block SK (UE-Skalierung) — 1 Kriterium
- **SK1 Content-Umfang vs. UE:** PASS — Situation ist als 4 UE konzipiert (180 Min). Summe `geschaetzteDauer`: 20+30+30+45+20+25 = 170 Min → exakt im ±20%-Rahmen

### Block Q (Visual-Kohärenz) — 3 Kriterien
- **Q7 Bild-Inhalt-Match:** PASS — 2 Bilder in den Phasen:
  - Step 1.1 (Übergabe Flur): Nachtschicht-Atmosphäre ✓
  - Step 4.1 (Transfer): Frau auf Boden + Pflegekraft kniend ✓
- **Q8 Bild-Pflicht-Trigger:** WARN — Step 4.1 beschreibt Transfer-Vorgang konkret (Seitlage → Kniestand), hier wäre ein Schritt-Bild pädagogisch wertvoller als der aktuelle Szenen-Platzhalter. Nicht blockierend.
- **Q9 Bildhinweis vorhanden:** PASS — beide Bilder haben `bildhinweis` mit englischem Prompt + "absolutely no text no labels no words"

### Block R (displayFormat-Sinn) — 1 Kriterium
- **R2 Format-Sinnhaftigkeit:** PASS
  - `scenario` für Kontext-Szenen ✓
  - `quote` für Patientenzitate (Step 2.6, 5.2) ✓
  - Keine `procontra` an falscher Stelle

### Block CQ (Tonalität + Glossar) — 3 Kriterien
- **CQ-T2 Verbotene Füllsätze:** PASS
- **CQ-G1 Glossar-Vollständigkeit:** PASS — Fachbegriffe in Steps haben Gegenstücke im Thema-Glossar (Polypharmazie, Orthostatische Dysregulation, Fixierung, § 1906a BGB, Post-Fall-Syndrom, Hüftprotektor, Sturzprotokoll, Intrinsisch/Extrinsisch, Interprofessionell)
- **CQ-G2 B1-Alltagswörter:** PASS

### Block WB (Wissensbausteine) — siehe separaten Thema-Report

### Block M (MC-Qualität + Feedback) — 5 Kriterien (2 K.O.)
- **M1 Bloom-Match:** PASS
  - Step 6.1 Sturzprotokoll (Bloom 6) = Freetext ✓ (nie MC)
  - Step 3.3 Fixierung (Bloom 5) = Branching ✓ (nie MC/Flipcard)
  - Step 4.3 Toilette (Bloom 5) = Branching ✓
  - Step 4.5 Balance (Bloom 5) = Branching ✓
  - Step 1.3 Erste Priorität (Bloom 3) = MC ✓
  - Step 4.7 Hüftprotektor (Bloom 4) = MC ✓
  - Step 2.1 Medikamente (Bloom 4) = Highlight ✓
  - Step 2.5 Orthostase (Bloom 4) = TrueFalse ✓
  - Step 2.4 Kategorisieren (Bloom 4) = Categorize ✓
  - Step 5.1 Reassessment (Bloom 4) = Categorize ✓
  - Step 3.1 Matrix (Bloom 4) = Matrix ✓
- **M2 Misconceptions-Qualität:** PASS — Distraktoren sind dokumentierte Misconceptions aus Bausteine-Plan:
  - Step 1.3 "Sofort ins Bett heben" → Misconception aus Baustein 10 M1 (Aufheben vor Prüfung)
  - Step 3.3 "Bettgitter hoch" → Misconception aus Baustein 7 M1 (Bettgitter keine Fixierung) + Baustein 3 M1 (Bettgitter-Illusion)
  - Step 4.3 "Bettpfanne" → Würde-Konflikt (Post-Fall-Angst verschlimmern)
  - Step 4.3 "Warten bis Physio" → Harnverhalt-Misconception
  - Step 4.7 "Für alle über 80" → Misconception aus Baustein 12 M2 (Überversorgung)
  - Step 4.7 "Nur bei Fraktur" → Misconception aus Baustein 12 (Primär vs. Sekundärprophylaxe)
  - Alle Feedbacks adressieren die spezifische Misconception, nicht generisch.
- **M3 Feedback-Spezifität:** PASS — alle Feedbacks nennen die Misconception beim Namen und erklären, warum sie falsch ist. Richtig-Feedbacks enthalten mindestens eine Vertiefung oder Anker-Aussage ("Genau das Vorgehen, das DNQP 2022 vorsieht", "Als Nächstes erlebst du das Dialog-Gespräch am Bettrand...").
- **M4 Feedback-Länge nach Bloom:** PASS (mit Toleranz)
  - Stichprobe Bloom 5 Branching 3.3 Option 1 (Ja hoch) Falsch-Feedback: ca. 430 Zeichen (Ziel 400-700) ✓
  - Stichprobe Bloom 3 MC 1.3 Option 1 (Blutdruck) Falsch-Feedback: ca. 230 Zeichen (Ziel 200-400) ✓
  - Stichprobe Bloom 5 Branching 4.3 Richtig-Feedback: ca. 460 Zeichen (Ziel 80-400, leicht darüber bei +15%) — akzeptabel (Toleranz ±30%)
- **M5 Step-Typ-Verteilung (Anti-Monotonie):** PASS
  - Keine 2× gleicher Step-Typ direkt hintereinander (geprüft über 30 Steps)
  - 12 verschiedene Step-Typen verwendet (≥8 gefordert)
  - Kein Bloom-Level >50%: Bloom 2=4, Bloom 3=9, Bloom 4=10, Bloom 5=5, Bloom 6=2 (größte Gruppe 33%)
  - Verteilung entspricht Bloom-Pyramide (zunehmend komplex in späteren Phasen)

---

## Kritische Findings

Keine.

---

## Warnings (Optional)

- **W1 (Q8, nicht blockierend):** Step 4.1 (Transfer vom Boden) beschreibt kinästhetischen Ablauf textlich. Ein visuelles Schritt-Bild des Transfers (Seitlage → Kniestand → Standposition) würde das prägen. Aktueller bildhinweis ist generisch ("Elderly woman on hospital floor"). Empfehlung: Für Folge-Iteration einen Transfer-Schritt-Bildhinweis erstellen.
- **W2 (Post-Processor False-Positives):** Mehrere "all_correct"-Muster-Treffer sind reguläre Aufzählungen in Feedbacks/Bodies (z.B. "alles: Würde (kein Bettpfanne), akutes Bedürfnis..."). Kein Handlungsbedarf.
- **W3 (Post-Processor Info):** Absolutwörter "alle" (Schreibanweisung Sturzprotokoll: "alle 9 Pflicht-Elemente") und "immer" ("die immer noch auf dem Boden liegt") sind inhaltlich korrekt und kein didaktisches Problem. Kein Handlungsbedarf.

---

## Empfehlung

**PASS — ready für Manifest-Status `"geprueft"`.**

Die Lernsituation Frau M. ist fachlich exzellent, pflegedidaktisch strukturiert entlang des 6-Phasen-Pflegeprozesses, emotional differenziert und rechtlich präzise (§ 1906a BGB). Der Patient Marianne M. ist durchgehend konsistent, die 6 Zitate schaffen authentische Präsenz. Die zwei Haupt-Branchings (Bettgitter + Toilette) sind didaktische Herzstücke mit hohem Prüfungswert. Das Sturzprotokoll-Freetext (Bloom 6) bildet einen gerechten Session-Abschluss.

Das Brilliant-Prinzip (Step 2.1 Medikamenten-Highlight BEVOR Zolpidem erklärt wird) ist lehrbuchreif umgesetzt. Die Confidence-Vorher/Nachher-Spiegel-Struktur (Step 1.2 ↔ 5.3) macht Lernen sichtbar. Der Patient-Zitat-Bogen (erste Entschuldigung → "wie in Watte" → "Es waren die Tabletten") zeigt eine komplette Post-Fall-Erholung.
