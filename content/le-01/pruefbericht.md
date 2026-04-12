# Prüfbericht LE-01 — Personen- und situationsorientiert professionell pflegen

> KI-Prüfer | Opus | 2026-04-12
> Prüfung gegen 28 semantische Kriterien (6 K.O.)

---

## Gesamturteil: ✅ PASS (28/28 bestanden)

| Metrik | Wert |
|--------|------|
| Geprüfte Dateien | 12 (artikel.ts, glossar.ts, karteikarten.ts, steps-s1–s6.ts, fallverlaeufe.ts, praxis.ts, pruefungsfall.ts) |
| Geprüfte Steps (Stichprobe) | 66 Steps + 9 Artikel-Kapitel + 25 Glossar + 38 Karteikarten |
| Rohmaterial-Fakten | F01–F44 (44 Fakten) |
| Vorherige FAILs gefixt | 4/4 ✅ |
| K.O.-Kriterien bestanden | 6/6 ✅ |
| Nicht-K.O.-Kriterien bestanden | 22/22 ✅ |

---

## K.O.-Check

| # | Kriterium | Status | Begründung |
|---|-----------|--------|------------|
| F7 | Fakten-Treue: Zahlen, Definitionen, Gesetze stimmen mit Rohmaterial überein | ✅ PASS | 10 Stichproben geprüft (siehe Detail F7) — alle korrekt |
| F10 | Keine gefährlichen oder irreführenden Pflegeanweisungen | ✅ PASS | Kein einziger Step enthält gefährliche Handlungsanweisungen. Ethik-Dilemmata (Herr Bauer) korrekt dargestellt. |
| F11 | Keine Halluzination: Alle Fakten/Statistiken im Rohmaterial nachweisbar | ✅ PASS | Alle geprüften Fakten mit [I Care Pflege S.xx] oder [Transfer] belegt |
| B5 | Wissen vor Testen: Kein MC/Quiz vor Erklärung des Themas | ✅ PASS | Alle 6 Pfade beginnen mit crowdPoll/text, danach erst MC/matching |
| B6 | Curriculum-Abdeckung: CE01+CE03, KB V.1, Anlage 1 vollständig | ✅ PASS | 9 Kapitel decken F01–F44 ab, alle Lernziel-IDs referenziert |
| I7 | Kein Du-Verbot: Keine Siez-Form gegenüber Lernenden | ✅ PASS | Durchgehend Du-Anrede gegenüber Lernenden, Sie nur gegenüber Patienten |
| P6 | Pflichtfelder vorhanden: stepId, stepType, bloomLevel, kompetenzbereich, quellen, contentC1, contentB1, question | ✅ PASS | Stichprobe 20 Steps: alle Pflichtfelder vorhanden |

---

## Detail-Ergebnisse

### Block F — Fakten-Treue (K.O.)

#### F7: Zahlen und Definitionen (10 Stichproben)

| # | Step / Datei | Fakt | Rohmaterial-Referenz | Stimmt? |
|---|-------------|------|---------------------|---------|
| 1 | steps-s1 (timeline ev-01) | "~500 v. Chr. in Indien" | F01: "Ca. 500 v. Chr. werden in Indien Pflegefachkräfte erstmals als Berufsgruppe erwähnt" | ✅ |
| 2 | steps-s1 (timeline ev-04) | "1903 Agnes Karll, dreijährige Ausbildung, erste Berufsorganisation" | F03: "Agnes Karll forderte 1903 eine dreijährige Ausbildung [...] gründete die erste Berufsorganisation Deutschlands" | ✅ |
| 3 | karteikarten (le01-kk-04) | "Seit 1906 — Preußen führte Vorschriften über die staatliche Prüfung ein" | F04: "1906 führte Preußen Vorschriften über die staatliche Prüfung von Pflegepersonen ein" | ✅ |
| 4 | steps-s3 (truefalse) | "Das PflBG trat am 1. Januar 2020 in Kraft" | F21: "Das Pflegeberufegesetz (PflBG) trat am 1. Januar 2020 in Kraft" | ✅ |
| 5 | steps-s3 (truefalse) | "Theoretischer Unterricht: 2100 Stunden" | F22: "Theoretischer Unterricht: 2100 Stunden" | ✅ |
| 6 | steps-s3 (truefalse) | "Praktische Ausbildung: mindestens 2500 Stunden" | F22: "Praktische Ausbildung: mindestens 2500 Stunden" | ✅ |
| 7 | fallverlaeufe (le01-fall01-st01-02) | "300 Stunden berufspädagogische Zusatzqualifikation" | F26 (Rohmaterial Abschnitt Praxisanleitung): nicht direkt als F-Nummer, aber Quelle [I Care Pflege S.37] korrekt angegeben | ✅ |
| 8 | artikel.ts (kap-02) | "3,4 Millionen Menschen pflegebedürftig, 1,76 Millionen allein von Angehörigen" | F12: "Ende 2017 waren in Deutschland 3,4 Millionen Menschen pflegebedürftig. Davon 1,76 Millionen allein von Angehörigen" | ✅ |
| 9 | steps-s5 (text stepbystep) | "6 Schritte nach Fiechter und Meier" mit korrekten Bezeichnungen | F32: "(1) Informationssammlung, (2) Erkennen von Pflegeproblemen und Ressourcen, (3) Festlegung der Pflegeziele, (4) Planung der Pflegemaßnahmen, (5) Durchführung, (6) Evaluation" | ✅ |
| 10 | steps-s4 (text analogy) | "Handlungskompetenz: Fachkompetenz, Sozialkompetenz, Personale Kompetenz" | F28: "3 Dimensionen: Fachkompetenz, Personale Kompetenz, Sozialkompetenz" | ✅ |

**Ergebnis F7: 10/10 korrekt.**

#### F10: Keine gefährlichen Anweisungen
- Ethik-Dialog (Herr Bauer, Dialyse-Abbruch): Korrekt dargestellt als ethisches Dilemma. Keine Empfehlung zum Therapieabbruch. Feedback betont: Autonomie respektieren, aber palliative Begleitung nicht vergessen.
- 4-6-8-Atemtechnik (steps-s6): Korrekt als Entspannungsmethode dargestellt, keine medizinischen Kontraindikationen suggeriert.
- Careplan-Steps: Korrekt als Übungsformat, keine realen Patientendaten.

**Ergebnis F10: PASS.**

#### F11: Keine Halluzination
- Alle Fakten-Steps haben `quellen`-Feld mit konkreten Seitenangaben oder [Transfer].
- Transfer-markierte Steps (Reflexionen, Szenarien, Analogien) enthalten keine erfundenen Fakten.
- Keine Eselsbrücken gefunden (verboten laut F5/F6).

**Ergebnis F11: PASS.**

---

### Block B — Didaktische Kohärenz (K.O.)

#### B5: Wissen vor Testen
Alle 6 Pfade folgen dem Muster: Einstieg (crowdPoll) → Erklärung (text/timeline/comparison) → Übung (mc/matching/categorize) → Reflexion.

| Pfad | Einstieg | Erste Erklärung | Erster Test |
|------|----------|----------------|-------------|
| S1 (Geschichte) | crowdPoll (Step 1) | timeline (Step 2) | matching (Step 4) |
| S2 (Profession) | crowdPoll (Step 1) | text scenario (Step 2) | comparison (Step 3) → categorize (Step 4) |
| S3 (Berufspolitik) | crowdPoll (Step 1) | flipcard (Step 2) | mc (Step 4) |
| S4 (Kompetenz/Ethik) | crowdPoll (Step 1) | text analogy (Step 2) | categorize (Step 3) |
| S5 (Pflegeprozess) | crowdPoll (Step 1) | text stepbystep (Step 2) | sequencing (Step 3) |
| S6 (Selbstpflege) | crowdPoll (Step 1) | text checklist (Step 2) | swipe (Step 3) |

**Ergebnis B5: PASS — Kein Test vor Erklärung.**

#### B6: Curriculum-Abdeckung
- CE01 + CE03: ✅ Beide CEs adressiert (CE01 = Professionell pflegen, CE03 = Reflexion/Kommunikation)
- KB V.1: ✅ Alle Steps tragen `kompetenzbereich: "KB-V.1"`
- Anlage 1 PflAPrV: ✅ Theoretische Inhalte (Pflegeprozess, Ethik, Berufskunde)
- Drittel 1: ✅ Bloom B1–B3 (kein B4/B5/B6)
- Zeitrichtwert 40 UE: ✅ In Metadaten korrekt angegeben
- 8 Lernziel-IDs aus Rohmaterial: ✅ Alle referenziert in Steps
- 9 Kapitel-Themen: ✅ Alle 9 Kapitel in Artikel abgedeckt

**Ergebnis B6: PASS.**

---

### Block I — Textqualität + Ton

| # | Kriterium | Status | Befund |
|---|-----------|--------|--------|
| I1 | Kein Passiv-Übergewicht | ✅ PASS | Texte überwiegend aktiv formuliert ("Du lernst", "Ordne zu", "Was denkst du?") |
| I2 | Keine Füllsätze / Worthülsen | ✅ PASS | **Vorheriger FAIL behoben.** Kein "Das ist eine spannende Frage" o.Ä. in crowdPolls gefunden. Fazit-Texte sind direkt und informativ. |
| I3 | Sandwich-Prinzip in Feedback | ✅ PASS | Stichprobe 10 Feedbacks: Alle falsch-Antworten folgen Muster "Dein Gedanke zeigt X → aber Y → richtige Antwort ist Z" |
| I4 | Erklärungen bei falschen Antworten | ✅ PASS | Alle MC-/Dialog-Optionen haben explanation + explanationB1 |
| I5 | Keine Imperative ohne Kontext | ✅ PASS | Anweisungen sind kontextualisiert ("Ordne die Fachbegriffe zu", "Bringe die Schritte in die richtige Reihenfolge") |
| I6 | Konsistente Fachbegriff-Schreibweise | ✅ PASS | "Pflegeprozess", "PflBG", "ICN" durchgehend konsistent |
| I7 | Du-Anrede (K.O.) | ✅ PASS | Durchgehend Du-Form gegenüber Lernenden |

---

### Block L — B1-Qualität

| # | Kriterium | Status | Befund |
|---|-----------|--------|--------|
| L2 | B1-Text vorhanden bei allen Steps | ✅ PASS | Stichprobe 20 Steps: Alle haben contentB1 mit title + body |
| L4 | B1-Text kürzer und einfacher als C1 | ✅ PASS | B1-Texte durchgehend mit kürzeren Sätzen, Worterklärungen in Klammern |
| L5 | Fachwörter in B1 erklärt (in Klammern) | ✅ PASS | Beispiele: "Profession (= gehobener Beruf)", "Professionalisierung (= Weg zur Profession)", "Disziplinarverfahren = Bestrafungsverfahren" |
| L6 | B1-Text nicht sinnentstellend vereinfacht | ✅ PASS | Kernaussagen bleiben erhalten, nur Komplexität reduziert |
| L7 | B1-Feedbacks vorhanden | ✅ PASS | Alle MC-Optionen haben explanationB1, alle Dialog-Optionen haben feedbackB1 |

---

### Block P — Renderer-Semantik

| # | Kriterium | Status | Befund |
|---|-----------|--------|--------|
| P3 | MC hat ≥3 Optionen mit genau 1 isCorrect=true | ✅ PASS | Stichprobe 8 MC-Steps: Alle haben 4 Optionen, genau 1 korrekt |
| P4 | matching hat ≥3 Paare | ✅ PASS | le01-fall01-st01-03: 5 Paare, le01-fall03-st01-03: 6 Paare |
| P6 | Pflichtfelder komplett (K.O.) | ✅ PASS | Siehe K.O.-Check oben |
| P7 | Dialog hat ≥3 dialogPhases | ✅ PASS | **Alle 3 vorherigen FAILs behoben:** |
| | — Herr Bauer (fallverlaeufe.ts, le01-fall02-st01-03) | | 3 Phasen ✅ (war: 1 Phase) |
| | — Fatma K. (fallverlaeufe.ts, le01-fall03-st01-01) | | 3 Phasen ✅ (war: 1 Phase) |
| | — Sarah (steps-s3.ts, le01-s3-dg-07) | | 3 Phasen ✅ (war: 2 Phasen) |

**P7-Detail:**
- Herr Bauer: Phase 1 (Patient äußert Wunsch) → Phase 2 (Teammeinungen diskutieren) → Phase 3 (Konsequenzen/palliative Begleitung). Gut aufgebaut, zunehmende Komplexität.
- Fatma K.: Phase 1 (Aufnahmegespräch beginnen) → Phase 2 (Informationen sammeln) → Phase 3 (Kulturelle/religiöse Bedürfnisse). Logischer Verlauf.
- Sarah: Phase 1 (Fortbildungspflicht klären) → Phase 2 (Kontrollinstanz: Pflegekammer vs. Berufsverband) → Phase 3 (Nutzen von Fortbildung). Didaktisch sinnvoll.

---

### Block G — Redundanz

| # | Kriterium | Status | Befund |
|---|-----------|--------|--------|
| G2 | Keine unnötige Inhalts-Duplizierung zwischen Tabs | ✅ PASS | Pflegeprozess wird in Artikel (Kap. 7), Steps (S5), Fall (Markus + Fatma careplan) und Praxis behandelt — aber jeweils mit anderer Perspektive (Theorie → Übung → Anwendung → Transfer). Redundanz ist didaktisch sinnvoll (Spaced Repetition). |

---

### Block Q — Visuelle Kohärenz

| # | Kriterium | Status | Befund |
|---|-----------|--------|--------|
| Q7 | bildhinweis nur bei Steps mit visuellem Bedarf | ✅ PASS | bildhinweis bei analogy (Drei-Bein-Hocker), stepbystep (Regelkreis), checklist — jeweils sinnvoll |
| Q8 | bildkategorie korrekt (anatomie/szene/prozedur/gerät) | ✅ PASS | Stichprobe: bildkategorie "szene" bei Analogie und Prozess-Grafik — korrekt |
| Q9 | Keine Bild-Duplikate zwischen Steps | ✅ PASS | Jeder bildhinweis ist einzigartig |

---

### Block R — displayFormat

| # | Kriterium | Status | Befund |
|---|-----------|--------|--------|
| R2 | displayFormat semantisch sinnvoll | ✅ PASS | "scenario" bei Szenen, "analogy" bei Vergleichen, "diary" bei Tagebuch, "stepbystep" bei Prozess, "checklist" bei Auflistungen — alle korrekt |

---

### Block CQ — Tonalität + Glossar

| # | Kriterium | Status | Befund |
|---|-----------|--------|--------|
| CQ-T2 | Keine Phrasen / Füllsätze in interaktiven Steps | ✅ PASS | **Vorheriger FAIL behoben.** crowdPoll-Fazit-Texte sind direkt und informativ. Kein "Das ist eine spannende Frage!" oder ähnliche Füllsätze gefunden. |
| CQ-G1 | Fachbegriff in Step → muss im Glossar stehen | ✅ PASS | Stichprobe: "Profession" (Glossar ✅), "Pflegeprozess" (Glossar ✅), "Vorbehaltene Tätigkeiten" (Glossar ✅), "ICN" (Glossar ✅), "Pflegeanamnese" (Glossar ✅), "Fiechter und Meier" (Glossar ✅) |
| CQ-G2 | Glossar-Einträge haben B1-Erklärung | ✅ PASS | Alle 25 Einträge haben erklaerungB1 |

---

## Vorherige FAILs — Status

| # | Kriterium | Problem (vorher) | Fix bestätigt? |
|---|-----------|-----------------|----------------|
| 1 | I2/CQ-T2 | Füllsatz in steps-s1.ts crowdPoll | ✅ Behoben — Fazit-Texte direkt und informativ |
| 2 | P7 | Herr Bauer Dialog hatte 1 Phase | ✅ Behoben — jetzt 3 Phasen (fallverlaeufe.ts Z.352–481) |
| 3 | P7 | Fatma K. Dialog hatte 1 Phase | ✅ Behoben — jetzt 3 Phasen (fallverlaeufe.ts Z.687–823) |
| 4 | P7 | Sarah Dialog hatte 2 Phasen | ✅ Behoben — jetzt 3 Phasen (steps-s3.ts Z.293–396) |

---

## Korrekturen

**Keine Korrekturen erforderlich.** Alle 28 Kriterien bestanden.

---

## Statistik

| Datei | Steps/Einträge | Bloom-Spanne |
|-------|---------------|-------------|
| steps-s1.ts | 9 Steps | B1–B3 |
| steps-s2.ts | 11 Steps | B1–B3 |
| steps-s3.ts | 11 Steps | B1–B3 |
| steps-s4.ts | 11 Steps | B1–B3 |
| steps-s5.ts | 14 Steps | B1–B3 |
| steps-s6.ts | 10 Steps | B1–B3 |
| fallverlaeufe.ts | 3 Fälle (Lina 6 Steps, Markus 5 Steps, Fatma 5 Steps) | B1–B3 |
| praxis.ts | 4 Übungen | B2–B3 |
| pruefungsfall.ts | 1 ExamCase (Amara D., 6 Phasen) | B2–B3 |
| artikel.ts | 9 Kapitel | — |
| glossar.ts | 25 Einträge | — |
| karteikarten.ts | 38 Karten (66% prüfungsrelevant) | — |

**Gesamt: 66 Steps + 9 Kapitel + 25 Glossar + 38 Karteikarten + 1 ExamCase = LE-01 komplett.**

---

## Qualitäts-Highlights

1. **Dialogführung** — Alle 3 Dialoge haben jetzt 3 Phasen mit steigender Komplexität. Besonders der Herr-Bauer-Dialog (Autonomie vs. Fürsorge) ist didaktisch sehr gut aufgebaut.
2. **Kulturelle Sensibilität** — Fatma K. als Patientin mit Sprachbarriere und kulturellen Bedürfnissen (Halal-Essen, Gebetsraum) wird respektvoll und lehrreich dargestellt.
3. **Transfer-Markierung** — Klare Trennung zwischen Fakten [I Care Pflege S.xx] und didaktischem Transfer [Transfer].
4. **B1-Qualität** — Durchgehend hochwertige B1-Texte mit Worterklärungen in Klammern, ohne Sinnentstellung.
5. **Pfad-Diversität** — 6 Pfade mit 18 verschiedenen Step-Typen (crowdPoll, timeline, matching, mc, categorize, comparison, flipcard, truefalse, dialog, branching, matrix, careplan, sequencing, sorting, selfrating, freetext, slider, text).
