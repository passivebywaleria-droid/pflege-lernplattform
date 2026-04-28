# Pflege-Review (Plan): ls-petrov-schlaganfall

**Geprüft:** 2026-04-26
**Modus:** plan (retrospektive Doppelprüfung — Code-Review bereits PASS)
**Files:** 8 (patient-plan.md, baustein-trigger.md, phase-informieren/-beobachten/-planen/-durchfuehren/-evaluieren/-dokumentieren.md)
**Step-Anzahl Plan:** 38 (26 Kern + 12 Optional), 4 Branchings, 5 Freitext

## Findings

### patient-plan — Akute Situation (Anamnese)

#### F-01 (NIEDRIG): "i.v.-Lyse innerhalb von 3 Stunden"
- **Stelle:** patient-plan.md, Z. 42
- **Problem:** Lyse-Zeitfenster ist 4,5 h (rt-PA, AWMF S3-021-023). 3 h ist veraltet (alte ECASS-Grenze).
- **Empfehlung:** "innerhalb des Lyse-Zeitfensters (≤ 4,5 h nach Symptombeginn)" — präziser, aktueller. Cave: Pflege initiiert keine Lyse — das ist ärztlich. Wird im Text korrekt nicht der Pflegekraft zugeschrieben.
- **Standard-Verweis:** AWMF S3 Schlaganfall 021-023.

### phase-informieren — info-04 (Dialog)

#### F-02 (MITTEL): Dialog-Option C "zu viel sprachlich" diffus
- **Stelle:** phase-informieren.md, Z. 46
- **Problem:** "Können Sie mir sagen, wie es Ihnen heute geht?" wird als sprachlich zu viel kritisiert. Bei Broca-Aphasie ist das Sprachverständnis aber erhalten — das Problem ist die offene W-Frage, nicht die Satzlänge.
- **Empfehlung:** Feedback präzisieren: "Offene W-Fragen sind bei Broca-Aphasie ungeeignet — er versteht die Frage, kann aber motorisch nicht antworten. Besser: Ja/Nein-Frage."
- **Standard-Verweis:** Kommunikation im GW (Aphasie-Kapitel); Broca = expressive Aphasie, Verständnis weitgehend erhalten.

### phase-beobachten — beob-04 (Lunge)

#### F-03 (HOCH): Stethoskop-Auskultation als Pflegeaufgabe deklariert
- **Stelle:** phase-beobachten.md, Z. 34 ("Stethoskop: Atemgeräusche beidseits vergleichen — Pflegefachkräfte hören auf grobe Auffälligkeiten") und Z. 80–82 (B1: "Du hörst mit dem Stethoskop").
- **Problem:** Auskultation der Lunge ist in DE Bestandteil der ärztlichen Untersuchung. Pflegefachkräfte führen Atembeobachtung (Frequenz, Tiefe, Rhythmus, Geräusche von außen, Husten/Sekret) durch — Stethoskop-Auskultation ist nicht im Vorbehaltsaufgaben-Katalog (§ 4 PflBG) und nicht im I-Care-Standard für 1. AD vorgesehen. Für einen Schüler im **1. Ausbildungsdrittel** ist das fachlich überschritten.
- **Empfehlung:** Schritt 3 streichen oder umformulieren: "Atemgeräusche von außen wahrnehmen (Rasseln, Pfeifen, Brodeln hörbar?) — Auskultation mit Stethoskop ist ärztliche Aufgabe bzw. erfordert spezielle Schulung." In Step 5.1 + B1 entsprechend anpassen.
- **Standard-Verweis:** § 4 PflBG; I Care Pflege Kap. Atmung; AWMF S3 Schlaganfall.

#### F-04 (MITTEL): TrueFalse-Aussage 4 zu absolut formuliert
- **Stelle:** phase-beobachten.md, Z. 35 (Aussage 4: "BVK-Wechsel nach 14 Tagen fällig" → falsch markiert)
- **Problem:** Die Aussage ist nicht eindeutig falsch — der Wechsel-Zeitpunkt richtet sich nach Material/Anordnung, KRINKO 2015 verlangt KEIN starres 14-Tage-Wechselintervall, sondern Re-Evaluation der Indikation. "Fällig" suggeriert Routine-Wechsel, was KRINKO gerade widerlegt.
- **Empfehlung:** Aussage umformulieren: "Den BVK regelmäßig nach festem 14-Tage-Intervall wechseln, unabhängig von der Indikation." → klar falsch (KRINKO: Indikation täglich prüfen, frühestmögliche Entfernung).
- **Standard-Verweis:** KRINKO 2015 (Prävention katheter-assoziierter HWI).

### phase-planen — plan-04 (Priorisierung)

#### F-05 (MITTEL): Priorisierung 1 = Kathetercheck vor Pneumonieprophylaxe widersprüchlich zu Phase 2
- **Stelle:** phase-planen.md, Z. 33; vs. phase-beobachten.md Step 2.7 (Aspiration/Pneumonie = HOCH, Katheter-HWI = MITTEL)
- **Problem:** In Phase 2 wurde "Aspiration/Pneumonie = HOCH, Katheter-HWI = MITTEL" als richtige Antwort markiert. In Phase 3 wird Kathetercheck als Schritt 1 priorisiert ("Sicherheit zuerst"). Cross-Step-Inkonsistenz: gleicher Schüler bekommt in Phase 2 "Pneumonie zuerst" als richtig, in Phase 3 "Katheter zuerst" als richtig.
- **Empfehlung:** Begründung schärfen: Kathetercheck ist 1-Min-Schnellprüfung (Beutel-Position, Urinfarbe) → das bricht nicht die Risikopriorisierung. ODER Reihenfolge ändern: Atemübungen + Lagerung zuerst, dann Kathetercheck. Distinktion "Risiko-Priorität" vs. "zeitliche Workflow-Priorität" explizit machen.
- **Standard-Verweis:** Pflegeprozess (Fiechter/Meier).

### phase-durchfuehren — dur-09 (Mobilisation Bettkante)

#### F-06 (HOCH): Schellong-Test fehlt komplett
- **Stelle:** phase-durchfuehren.md, Z. 74 (dur-09)
- **Problem:** Bei 5 Tagen Bettlägerigkeit + Antihypertensiva (Ramipril) + erstem Aufsetzen ist orthostatische Dysregulation hochrelevant. Phase Mobilisation springt von "Ankündigen → Drehen → Sitzen 8 Min" — RR-Messung liegen/sitzen (Schellong-Prinzip) fehlt. Pseudo-Empathie-Risiko: "Daumen hoch nach 8 Minuten" suggeriert Erfolg ohne Vitalzeichen-Sicherung. Bei Schlaganfall + Hypertonie-Vorgeschichte besonders relevant.
- **Empfehlung:** Phase 2 (Aufsetzen) ergänzen: RR liegen messen → aufsetzen → ≥ 1 Min sitzen → RR sitzen messen → bei Stabilität weitere Vertikalisierung. Pulsmessung. Schwindel-Abfrage VOR der 8-Min-Beobachtung. Standard-Verweis im Feedback: Schellong / Frühmobilisation DGG 2022 fordert Vitalzeichen-Monitoring.
- **Standard-Verweis:** DGG 2022 S1-Leitlinie Frühmobilisation; DNQP Mobilität 2020.

#### F-07 (MITTEL): "Hand an Schulterblatt" anatomisch unscharf
- **Stelle:** phase-durchfuehren.md, Z. 39 + B1 Z. 116
- **Problem:** "Hand an Schulterblatt" als Drehgriff ist im Bobath-Konzept nicht der Standard-Griff. Bobath-konforme Drehung nutzt Beckenkamm + Schultergürtel-Begleitung (nicht Druck aufs Skapula). Formulierung "deine Hand liegt an seinem Schulterblatt" könnte als Hebelpunkt missverstanden werden.
- **Empfehlung:** "Schultergürtel begleiten (vorne, am Akromion)" oder "Schulter nach vorne führen" statt "an Schulterblatt". Merkhilfe anpassen.
- **Standard-Verweis:** Bobath B. 1990 Adult Hemiplegia; I Care Mobilisation.

#### F-08 (MITTEL): "Husten anregen" bei Aspiration didaktisch unscharf
- **Stelle:** phase-durchfuehren.md Z. 53 (Pfad B) + B1 Z. 144
- **Problem:** "Bitte ihn zu husten wenn er kann" ist okay, aber die Reihenfolge nach AWMF/DGN Aspirationsereignis ist: Stop → vornüber neigen lassen (nicht 90° aufrecht!) → eigenen Hustenstoß abwarten → bei Bedarf absaugen → Auskultation/SpO2. "90° aufsetzen" beim akuten Verschlucken kann Bolus tiefer Richtung Trachea führen.
- **Empfehlung:** Pfad B umformulieren: "Stoppen, leicht nach vorne neigen lassen, husten lassen, dann Oberkörper hochlagern und beobachten."
- **Standard-Verweis:** DGG/DGN 2020 Neurogene Dysphagie; AWMF S3 Schlaganfall.

### phase-evaluieren — eval-03 (Slider Kraftprozent)

#### F-09 (NIEDRIG): Slider "Kraftprozent rechte Extremität" pflegerisch nicht messbar
- **Stelle:** phase-evaluieren.md, Z. 36
- **Problem:** Pflegerisch wird Kraft mit MRC-Skala 0-5 (Janda) bewertet, nicht in Prozent. Frage suggeriert Pseudo-Quantifizierbarkeit.
- **Empfehlung:** Slider-Frage neu rahmen: "Schätze auf der MRC-Skala 0-5..." oder Slider-Frage komplett ersetzen durch Reflexionsfrage zur Neuroplastizität (kein Schätz-Item).

### phase-dokumentieren — dok-01 (Pflegebericht)

#### F-10 (NIEDRIG): B1-Textrahmen nimmt zu viel vorweg
- **Stelle:** phase-dokumentieren.md, Z. 62–70
- **Problem:** Der "optionale Textrahmen" ist faktisch eine fertige Musterlösung. B1-Schüler kopiert statt formuliert — Lerneffekt für Bloom-6 (Erstellen) ist beeinträchtigt.
- **Empfehlung:** Textrahmen auf Skelett reduzieren ("07:15: Status: ___", "09:05: Frühstück — Ereignis: ___") statt Volltext.

## Cross-Step-Probleme

- **Risiko-Priorisierung Phase 2 vs. Maßnahmen-Priorisierung Phase 3** — siehe F-05.
- **Auskultation als Pflege-Aufgabe** zieht sich durch Phase 2 (beob-04), Phase 5 (eval-01: "Auskultationsbefund stabil"), Phase 6 SBAR — siehe F-03.
- **Schellong fehlt durchgängig** — weder in Vorbereitung Phase 4 noch in Evaluation Phase 5 thematisiert. Siehe F-06.
- Patient-Daten (Alter 58, Tag 5, BVK seit Tag 1, Hemiparese rechts, Dysphagie Grad 2, IDDSI Level 2) **konsistent** durch alle Phasen ✓.
- Anrede "du" durchgehend ✓. Echte Umlaute ✓. Primärquellen vorhanden ✓.

## Zusammenfassung

- **2 Findings HOCH** (F-03 Auskultation, F-06 Schellong fehlt)
- **5 Findings MITTEL** (F-02, F-04, F-05, F-07, F-08)
- **3 Findings NIEDRIG** (F-01, F-09, F-10)

**Allgemeine Beobachtungen:** Sehr starker Plan — Standards-Bezug exzellent (Bobath, DNQP Mobilität, IDDSI, GUSS, KRINKO, AWMF S3, SBAR), Patient-Bio tief, Komplikationen realistisch, Branching-Pfade plausibel, Sandwich-Feedback durchgängig, Aphasie-Kommunikation didaktisch sauber. Keine Pseudo-Empathie-Sprache ("indirektes Licht" o.ä.) gefunden. FAST-Schema ist hier **nicht erforderlich** (Tag 5 post-Event, nicht Akutphase) — korrekt nicht aufgeführt. Time-is-brain-Logik wird durch Neuroplastizitäts-Step (eval-03) sinnvoll abgebildet. Lyse-Initiierung wird korrekt als ärztlich behandelt. Hauptprobleme: (1) Auskultation kompetenzüberschreitend für 1. AD, (2) Schellong-Test bei Erstmobilisation fehlt — beide K.O.-relevant.

**K.O.-Verdikt: FAIL** (≥1 HOCH ungelöst — F-03 + F-06).

Empfehlung: Beide HOCH-Findings vor Code-Generierung beheben (Auskultation entfernen/umformulieren, Schellong in Mobilisationsphase einbauen). Nach Korrektur: PASS realistisch erreichbar — alle MITTEL/NIEDRIG sind feinjustierbar und nicht patientengefährdend.

## Code-seitige Fixes — 2026-04-26 (zweiter Durchlauf)

Alle 10 Plan-Findings im Code überprüft und ggf. nachgeschärft (Plan-Findings F-01/F-03/F-06 waren bereits im Code-Review-Fix-Lauf 2026-04-26 erledigt; verbleibend F-02/F-04/F-05/F-07/F-08/F-09/F-10).

| F | Severity | Fix im Code |
|---|----------|-------------|
| F-01 | NIEDRIG | Bereits erledigt: patient.ts Z. 28 — "innerhalb des 4,5-h-Zeitfensters (konkret: ca. 3 h post-Symptombeginn)" |
| F-02 | MITTEL | Bereits erledigt: phase-informieren.ts info-04 Score-1-Feedback Z. 246 erklärt offene Frage + Broca-Verständnis erhalten + Ja/Nein-Empfehlung |
| F-03 | HOCH | Bereits erledigt: phase-beobachten.ts beob-04 — Auskultation als ärztlich markiert, pflegerische Atembeobachtung etabliert (Frequenz, Tiefe, hörbare Geräusche ohne Stethoskop, Hautfarbe) |
| F-04 | MITTEL | Heute gefixt: phase-beobachten.ts beob-05 Aussage 4 — neu: "Routinemäßiger Wechsel nach festem 14-Tage-Intervall, unabhängig von der Indikation" → klar falsch (KRINKO 2015 fordert kein starres Intervall, sondern täglichen Indikations-Check) |
| F-05 | MITTEL | Bereits erledigt durch Code-F-14-Fix: phase-planen.ts plan-04 — OKHL 30° + Atembeobachtung an Pos 1 (ABCDE-Logik), Kathetercheck Pos 2; konsistent zu phase-beobachten.ts beob-07 Risikomatrix (Aspiration/Pneumonie HOCH-Sofort, CAUTI MITTEL-Sofort) |
| F-06 | HOCH | Bereits erledigt: phase-durchfuehren.ts dur-09 — RR liegen 138/82, RR sitzen 132/80, Puls 76/84, aktive Schwindel-Abfrage über Kopfschüttel-Signal vereinbart; DGG 2022 Frühmobilisation referenziert |
| F-07 | MITTEL | Heute gefixt: phase-durchfuehren.ts dur-03 — Bobath-Drehgriff präzisiert: "Schultergürtel begleiten (Richtung Akromion, nicht aufs Schulterblatt drücken)" + Becken-Kamm; "Patient bewegt selbst, du sicherst" ergänzt |
| F-08 | MITTEL | Heute gefixt: phase-durchfuehren.ts dur-06 Score-3-Option: 90° aufrecht + Kopf leicht nach vorne; Anti-Pattern "vornüber neigen" explizit ausgeschlossen für Bett/Hemiparese-Setting; Vorbeugen gilt für stabile sitzende/stehende Patienten |
| F-09 | NIEDRIG | Heute gefixt: phase-evaluieren.ts eval-03 Slider neu gerahmt — fragt jetzt "Anteil aller Patienten mit Gehfähigkeit nach Reha (60-80 %)"; pflegerische Kraft-Beurteilung über MRC-Skala 0-5 (Janda) explizit erklärt — kein Pseudo-Prozent für Einzelmuskel mehr |
| F-10 | NIEDRIG | Plan-Issue: betrifft Pflegebericht-Textrahmen im Plan-Markdown, im Code (freetext-Step) gibt es keinen vorgegebenen Volltext-Rahmen — nur Anforderungs-Hint via systemPrompt → Code automatisch konform |

**TypeScript:** PASS  
**K.O.-Verdikt nach Fixes: PASS**  
Alle HOCH-Findings (F-03, F-06) sind im Code adressiert; alle MITTEL/NIEDRIG sind durch konkrete Code-Edits oder bereits durch den Code-F-XX-Fix-Lauf erledigt.
