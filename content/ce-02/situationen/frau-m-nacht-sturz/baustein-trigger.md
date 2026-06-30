# Baustein-Trigger: Frau M. — Nächtlicher Sturz

**situationId:** ls-frau-m-nacht-sturz
**Thema:** sturz-prophylaxe (+ verknüpfte Themen)
**Trigger-Anzahl:** 10 (Pflicht: min 3 — erfüllt)

---

## Prinzip

Ein Baustein wird **getriggert**, wenn:
1. Der Schüler einen Step falsch beantwortet, der das Baustein-Wissen voraussetzt
2. ODER der Schüler eine Neugier-Frage ohne Vorwissen bekommt (Brilliant-Prinzip)
3. ODER in einem Dialog-Step ein Begriff auftaucht, der ohne Erklärung nicht verstanden werden kann

**Welche Stufe erscheint?** Bestimmt der Sequencer anhand des Schülerprofils (C1 → Stufe 1, B2 → Stufe 2, B1 → Stufe 3). Du als Dozentin legst nur fest **DASS** ein Baustein erscheint — nicht welche Stufe.

---

## Trigger-Tabelle

| # | Phase & Step | Trigger-Bedingung | Baustein-ID | Empfohlene Stufe | Didaktischer Zweck |
|---|--------------|-------------------|-------------|------------------|---------------------|
| T-01 | Phase 2, Step 2.1 `beob-01-medis-sichten` | Highlight-Step: Schüler markiert Zolpidem NICHT (oder nur 1 von 3 Wirkstoffen) | **sturz-prophylaxe-medikamente** | Stufe 2–3 | Kernwissen: Polypharmazie + PRISCUS-2.0-Liste + typische Sturz-Medikamente |
| T-02 | Phase 2, Step 2.1 `beob-01-medis-sichten` | Brilliant-Frage ohne Vorwissen (Neugier) — ALLE Schüler bekommen Erklär-Follow-up in Step 2.2 bereits als Inline-Kontent | **sturz-prophylaxe-medikamente** | Stufe 1 (Denkfrage) | Nur bei C1+Vorerfahrung: offene Frage vor dem Erklär-Step 2.2 |
| T-03 | Phase 2, Step 2.4 `beob-04-risikofaktoren-katz` | Intrinsische Risikofaktoren nicht vollständig erkannt (< 80 % richtig) | **sturz-prophylaxe-risiken-intrinsisch** | Stufe 2–3 | Klassifikation intrinsisch vs. extrinsisch festigen |
| T-04 | Phase 2, Step 2.4 `beob-04-risikofaktoren-katz` | Extrinsische Risikofaktoren nicht vollständig erkannt (< 80 % richtig) | **sturz-prophylaxe-risiken-extrinsisch** | Stufe 2–3 | Umgebungsblick trainieren (Bett-Höhe, Boden, Licht) |
| T-05 | Phase 2, keine spezifische Step — adaptiv | Sequencer erkennt: Schüler hat das Assessment-Thema in keiner früheren Situation gesehen | **sturz-prophylaxe-assessment** | Stufe 2 | Klinische Einschätzung vs. Screening-Tools — keine Tinetti-Pflicht |
| T-06 | Phase 3, Step 3.2 `plan-02-umgebung-anpassen` | Sequencing falsch (≥ 2 Karten in falscher Reihenfolge) | **sturz-prophylaxe-umgebung** | Stufe 2 | Umgebungsanpassung Rhythmus: Bett → Licht → Weg → Klingel → Socken |
| T-07 | Phase 3, Step 3.3 `plan-03-fixierung-nein` | Pfad A gewählt ("Bettgitter hoch") | **sturz-prophylaxe-fixierung** | Stufe 3 (voll) | Rechtliche Aspekte + Evidenz: Bettgitter erhöhen Verletzungsrisiko. BGB § 1831. **K.O.-Wissen.** |
| T-07b | Phase 3, Step 3.3 `plan-03-fixierung-nein` | Pfad C gewählt ("frag den Arzt morgen") | **sturz-prophylaxe-fixierung** | Stufe 2 (Hinweis) | Kürzer als T-07 — der Schüler ist auf dem richtigen Weg, braucht nur rechtlichen Kontext |
| T-08 | Phase 3, Step 3.4 `plan-04-angst-adressieren` | Nach Zitat Z4 — IMMER triggern (Brilliant-ähnlich) | **sturz-prophylaxe-post-fall** | Stufe 2–3 | Post-Fall-Syndrom verstehen: Teufelskreis Angst → Immobilität → Muskelabbau |
| T-09 | Phase 3, Step 3.5 `plan-05-interprof-team` | Matching falsch (< 80 % richtig) | **sturz-prophylaxe-team** | Stufe 2 | Interprofessionelle Rollen klären (wer macht Medikamentenreview? wer Hilfsmittel?) |
| T-10 | Phase 4, Step 4.3 `dur-03-mobilisation-hauptbranching` | Pfad B oder C gewählt (Bettpfanne / warten bis morgen) | **sturz-prophylaxe-sofortmassnahmen** | Stufe 2–3 | Würdevolle Sofortmaßnahmen: Priorität Sicherheit + Würde + akutes Bedürfnis |
| T-11 | Phase 4, Step 4.7 `dur-07-hueftprotektor-option` | Antwort A oder B gewählt (Generalisierung) | **sturz-prophylaxe-hueftprotektoren** | Stufe 1–2 | Differenzierte Indikation: nicht flächendeckend, Compliance-Problem |
| T-12 | Phase 5, Step 5.2 `eval-02-patientensicht` | Wenn T-08 in Phase 3 NICHT getriggert wurde | **sturz-prophylaxe-post-fall** | Stufe 3 | Back-up-Trigger: spätestens hier wird Post-Fall erklärt |
| T-13 | Phase 6, Step 6.1 `dok-01-sturzprotokoll-frei` | Freetext-KI-Feedback erkennt: < 6 von 9 Pflicht-Elementen genannt | **sturz-prophylaxe-dokumentation** | Stufe 2–3 | Sturzprotokoll-Struktur klären, danach erneuter Schreibversuch |

---

## Trigger-Verteilung pro Phase (Soll-Ist)

| Phase | Trigger | Bausteine |
|-------|---------|-----------|
| 1 Informieren | 0 | — |
| 2 Beobachten | 3–4 | medikamente, risiken-intrinsisch, risiken-extrinsisch, (assessment) |
| 3 Planen | 4 | umgebung, fixierung (2× Pfadvarianten), post-fall, team |
| 4 Durchführen | 2 | sofortmassnahmen, hueftprotektoren |
| 5 Evaluieren | 1 (Back-up) | post-fall (falls nicht in P3) |
| 6 Dokumentieren | 1 | dokumentation |
| **SUMME** | **11 (10 einzigartige Bausteine)** | 10 von 13 Bausteinen des Themas |

**Nicht getriggert in dieser Situation:**
- `sturz-prophylaxe-sturz-definition` (B1, Baustein 1) — gilt als Grundwissen, wird in Phase 1 Übergabe implizit verwendet
- `sturz-prophylaxe-training` (Baustein 5) — nicht relevant im Akut-Setting, gehört zur 2. Situation (Langzeit-Pflege)

→ **2 Bausteine werden in anderen Situationen triggern** (LS-Kovac und LS-Bauer), was das Wiederverwendungs-Prinzip erfüllt.

---

## Sequencer-Regeln (für adaptive Engine)

### Stufen-Wahl basierend auf Schülerprofil

```
IF Schüler.sprache === "C1" AND Schüler.vorerfahrung === "hoch":
  Stufe = 1 (Denkfrage)
ELIF Schüler.sprache === "B2" OR Schüler.vorerfahrung === "mittel":
  Stufe = 2 (Hinweis)
ELSE:
  Stufe = 3 (Erklärung + B1 + Glossar + TTS)
```

### Trigger-Deduplizierung

- Wenn ein Baustein in dieser Situation **einmal getriggert** wurde (egal welche Stufe), nicht nochmal triggern — außer es ist explizit ein **Back-up-Trigger** (T-12).
- Beispiel: T-03 und T-04 triggern verschiedene Bausteine, aber T-07 und T-07b triggern denselben — der zweite Trigger wird unterdrückt, wenn der erste schon lief.

### Kombinierte Pfade

- T-01 / T-02 sind alternative Pfade für denselben Baustein. Wenn C1 → T-02 (Denkfrage) zuerst, danach Erklär-Step 2.2. Wenn B1 → direkt T-01 (Stufe 3).

---

## Karteikarten-Trigger (FSRS)

Zusätzlich zum Baustein-Trigger werden beim Abschluss der Situation **Karteikarten** in das FSRS-System geladen. Karten-IDs folgen den Baustein-IDs:

- `fk-sturz-medikamente` (Zolpidem + PRISCUS)
- `fk-sturz-fixierung` (Rechtliche Grundlage § 1831 BGB)
- `fk-sturz-post-fall` (Teufelskreis)
- `fk-sturz-assessment` (Klinische Einschätzung, keine Tinetti-Pflicht)
- `fk-sturz-umgebung` (5-Punkte-Umgebungscheck)
- `fk-sturz-dokumentation` (9 Pflicht-Elemente Sturzprotokoll)

→ Alle 6 Karten werden am Ende Phase 6 in den FSRS-Stapel aufgenommen, Erstintervall laut FSRS-Default.

---

## Qualitäts-Check

- [x] Min 3 Baustein-Trigger → 10 einzigartige + 1 Back-up erfüllt
- [x] Trigger verteilt über mehrere Phasen (Phase 2–6)
- [x] Pfad-abhängige Trigger in Branching-Steps vorhanden (T-07/T-07b, T-10)
- [x] Back-up-Trigger für kritisches Wissen (T-12 Post-Fall)
- [x] Stufenwahl adaptiv (C1 / B2 / B1)
- [x] Keine Baustein-Duplizierung innerhalb derselben Situation
- [x] Verknüpft zu 10 der 13 Bausteine → hohe Wiederverwendung im Thema
