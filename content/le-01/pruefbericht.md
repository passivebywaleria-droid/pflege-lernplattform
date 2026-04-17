# Prüfbericht LE-01 — Personen- und situationsorientiert professionell pflegen

> KI-Prüfer (Opus) | M5-Prüfung | 2026-04-12 (Revision 2)
> Prüfung gegen 28 semantische Kriterien (7 K.O.)
> Rohmaterial: content/le-01/rohmaterial.md (F01-F44)
> Curriculum: specs/curriculum-55-le-struktur.md (LE-01, CE01+CE03, KB V.1, Drittel 1)

---

## Gesamturteil: PASS (26/28 bestanden, 2 Hinweise)

| Metrik | Wert |
|--------|------|
| Geprüfte Dateien | 12 (artikel.ts, glossar.ts, karteikarten.ts, steps-s1-s6.ts, fallverlaeufe.ts, praxis.ts, pruefungsfall.ts) |
| Geprüfte Steps (gesamt) | 66 Steps + 9 Artikel-Kapitel + 25 Glossar + 38 Karteikarten + 1 ExamCase |
| Rohmaterial-Fakten | F01-F44 (44 Fakten), alle mit Quellenangabe |
| K.O.-Kriterien bestanden | 7/7 |
| Nicht-K.O.-Kriterien bestanden | 19/21 |
| Hinweise (nicht blockierend) | 2 (I1, Tag-Fehler) |

---

## Script-Report (Stufe 1 -- bereits gelaufen)

Die 38 automatischen Checks (Schema, Zähler, Format, Diversity-Counts, Tags, Pflichtfelder) sind laut Pipeline-Status bestanden. Dieser Prüfbericht deckt ausschließlich die 28 semantischen Kriterien (Stufe 2) ab.

---

## K.O.-Check (Stufe 2)

| Kriterium | Urteil | Anmerkung |
|-----------|--------|-----------|
| F7 Fachliche Korrektheit | **PASS** | 15 Fakten-Stichproben gegen Rohmaterial geprüft, alle korrekt (siehe Detail) |
| F10 Fachliche Gefahr | **PASS** | Kein Step enthält gefährliche Handlungsanweisungen |
| F11 Halluzinations-Nachweis | **PASS** | Alle Prozentzahlen und Fakten mit [I Care Pflege S.xx] belegt; Transfer-Steps korrekt als [Transfer] markiert |
| B5 Wissensaufbau vor Abfrage | **PASS** | Alle 6 Pfade: Erklärung kommt vor Test |
| B6 Curriculum-Abdeckung | **PASS** | CE01+CE03, KB V.1, Drittel 1, Bloom B1-B3, Anlage 1 -- alles abgedeckt |
| I7 Sandwich-Prinzip | **PASS** | Feedback bei falschen Antworten folgt Muster: Anerkennung/Verständnis -> Korrektur -> Ermutigung |
| P6 Schüler-Perspektive | **PASS** | Dialog-Optionen: User spricht als Schüler (fragt, zeigt Verständnis, ist unsicher). Nie als Mentor. |

---

## Detail-Ergebnisse (28 Kriterien)

### Block F -- Fakten-Treue (3 Kriterien, alle K.O.)

#### F7: Fachliche Korrektheit -- PASS

15 Fakten-Stichproben gegen Rohmaterial geprüft:

| # | Stelle | Fakt im Content | Rohmaterial-Referenz | Korrekt? |
|---|--------|----------------|---------------------|----------|
| 1 | steps-s1, timeline ev-01 | "~500 v. Chr. in Indien" | F01: "Ca. 500 v. Chr. werden in Indien Pflegefachkräfte erstmals als Berufsgruppe erwähnt" | Ja |
| 2 | steps-s1, timeline ev-04 | "1903 Agnes Karll, dreijährige Ausbildung, erste Berufsorganisation" | F03 | Ja |
| 3 | artikel.ts, kap-01 | "Florence Nightingale ab 1845, Kaiserswerther Diakonie, 1859 Notes on Nursing, 1860 erste Schwesternschule Englands" | F02 | Ja |
| 4 | artikel.ts, kap-02 | "ICN-Definition Pflege: eigenverantwortliche Versorgung und Betreuung" | F06 | Ja |
| 5 | artikel.ts, kap-02 | "3,4 Mio pflegebedürftig, 1,76 Mio von Angehörigen, 2 von 3 Frauen" | F12 | Ja |
| 6 | artikel.ts, kap-02 | "§ 4 PflBG: 3 vorbehaltene Tätigkeiten" | F10 | Ja |
| 7 | artikel.ts, kap-04 | "Pflegekammern: Pflichtmitgliedschaft, 2020 drei Kammern (RLP, SH, NI)" | F19 | Ja |
| 8 | steps-s3, truefalse | "PflBG trat 1. Januar 2020 in Kraft" | F21 | Ja |
| 9 | steps-s3, truefalse | "Theoretischer Unterricht 2100 Stunden, Praxis mind. 2500 Stunden" | F22 | Ja |
| 10 | steps-s5, text stepbystep | "6 Schritte nach Fiechter und Meier" -- alle 6 korrekt benannt | F32 | Ja |
| 11 | artikel.ts, kap-06 | "Handlungskompetenz: Fachkompetenz, Personale Kompetenz, Sozialkompetenz (KMK 2011)" | F28 | Ja |
| 12 | artikel.ts, kap-08 | "ICN-Ethikkodex 1953, 4 Prinzipien nach Beauchamp/Childress" | F37, F40 | Ja |
| 13 | steps-s6, timer | "4-6-8-Atemtechnik: 4 Sek. einatmen, 6 Sek. halten, 8 Sek. ausatmen" | F43 | Ja |
| 14 | artikel.ts, kap-09 | "Eisenhower-Methode: 4 Kategorien" | F42 | Ja |
| 15 | fallverlaeufe.ts, le01-fall01-st01-02 | "300 Std. berufspädagogische Zusatzqualifikation" | Glossar G23 / [I Care Pflege S.37] | Ja |

**Ergebnis F7: 15/15 korrekt. PASS.**

#### F10: Fachliche Gefahr -- PASS

- Ethik-Dialog Herr Bauer (Dialyse-Abbruch): Korrekt als ethisches Dilemma dargestellt. Kein Feedback empfiehlt den Therapieabbruch. Alle Feedbacks betonen: Autonomie respektieren UND palliative Begleitung.
- Branching-Step Herr R. (steps-s4): Korrekte Darstellung des Autonomie-Prinzips. Feedback bei "falsch" erklärt warum.
- 4-6-8-Atemtechnik (steps-s6): Korrekt als Entspannungsmethode. Keine medizinischen Kontraindikationen suggeriert.
- chatSim Fatma K. (praxis.ts): Pflegeanamnese-Simulation ohne gefährliche Empfehlungen.

**Ergebnis F10: PASS.**

#### F11: Halluzinations-Nachweis -- PASS

- Alle Fakten-Steps haben `quellen`-Feld mit konkreten Seitenangaben ([I Care Pflege S.xx]).
- Transfer-markierte Steps (Reflexionen, Szenarien, Analogien) sind korrekt als [Transfer] gekennzeichnet und enthalten keine erfundenen Fakten oder Statistiken.
- Keine Prozentzahlen ohne Quellenbeleg gefunden.
- Keine Eselsbrücken gefunden (laut Pipeline-Regeln F5/F6 verboten).
- Kein Mehrabian-Mythos oder ähnliche bekannte Halluzinationsmuster.

**Ergebnis F11: PASS.**

---

### Block B -- Didaktische Kohärenz (2 Kriterien, beide K.O.)

#### B5: Wissensaufbau vor Abfrage -- PASS

Alle 6 Sessions folgen dem Muster: Einstieg -> Erklärung -> Test -> Reflexion.

| Session | Einstieg | Erste Erklärung | Erster Test |
|---------|----------|----------------|-------------|
| S1 Geschichte | crowdPoll (Step 1) | timeline (Step 2) | matching (Step 4) |
| S2 Profession | crowdPoll (Step 1) | text scenario (Step 2) | comparison (Step 3) |
| S3 Berufspolitik | crowdPoll (Step 1) | flipcard (Step 2) | mc (Step 4) |
| S4 Kompetenz/Ethik | crowdPoll (Step 1) | text analogy (Step 2) | categorize (Step 3) |
| S5 Pflegeprozess | crowdPoll (Step 1) | text stepbystep (Step 2) | sequencing (Step 3) |
| S6 Selbstpflege | crowdPoll (Step 1) | text checklist (Step 2) | swipe (Step 3) |

Kein einziger Test-Step testet Wissen, das nicht vorher erklärt wurde.

**Ergebnis B5: PASS.**

#### B6: Curriculum-Abdeckung -- PASS

Prüfung gegen `specs/curriculum-55-le-struktur.md`, Zeile 46:
- **LE-01**: "Personen- und situationsorientiert professionell pflegen" | 40 UE | CE01+CE03 | KB V.1 | Persönlichkeitsprinzip | Anlage 1

| Prüfpunkt | Ergebnis |
|-----------|----------|
| CE01 abgedeckt? | Ja -- Professionell pflegen: Geschichte, Definitionen, Berufspolitik, PflBG, Kompetenz, Pflegeprozess, Ethik |
| CE03 abgedeckt? | Ja -- Reflexion (Lina, Markus), Selbstwahrnehmung (Selbstpflege), Kommunikation (Fatma) |
| KB V.1 (Pflegewissenschaft / berufsethische Werthaltungen)? | Ja -- Alle Steps tragen `kompetenzbereich: "KB-V.1"` |
| Ausbildungsdrittel 1 -> Bloom B1-B3? | Ja -- Kein B4/B5/B6 in irgendeinem Step |
| Anlage 1 PflAPrV? | Ja -- Theoretische Inhalte |
| Zeitrichtwert 40 UE? | Ja -- In METADATA korrekt |
| Keine Fremd-Themen? | Ja -- Keine Inhalte die zu LE-02/03/04 oder anderen LEs gehören. Pflegeprozess als Einführung (Vertiefung in LE-05) korrekt abgegrenzt. Kap. 14 (Vitalparameter) korrekt ausgeschlossen. |
| 8 Lernziel-IDs aus Rohmaterial? | Ja -- Alle referenziert in Steps |

**Ergebnis B6: PASS.**

---

### Block I -- Textqualität + Ton (7 Kriterien)

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| I1 | C1-Satzlänge (<=20 Wörter) | **HINWEIS** | Mehrheitlich eingehalten. Vereinzelt Sätze mit 22-25 Wörtern in Artikel-Blöcken (z.B. ICN-Definition, kap-02). Nicht systematisch, kein FAIL, aber verbesserungswürdig. |
| I2 | Keine Füllsätze | PASS | Kein "Bevor wir...", "Lass uns...", "In dieser Session..." gefunden. |
| I3 | Keine Doppel-Erklärungen | PASS | Pflegeprozess wird in Artikel, Steps und Fall behandelt -- aber mit jeweils anderer Perspektive (Theorie -> Übung -> Anwendung). Didaktisch gewollte Wiederholung. |
| I4 | Body-Länge | PASS | Text-Steps max 5 Sätze, Quiz max 3. Stichprobe 15 Steps: alle eingehalten. |
| I5 | Feedback-Knappheit | PASS | Richtig-Feedback max 2 Sätze, Falsch max 3. Eingehalten. |
| I6 | Kein Selbstverständliches | PASS | Keine UI-Hinweise im Body ("Klicke auf..."). Anweisungen stehen im `fragetext`. |
| I7 | Sandwich-Prinzip (K.O.) | **PASS** | Stichprobe 15 Falsch-Feedbacks: Alle folgen dem Muster Anerkennung -> Korrektur -> Ermutigung. Beispiele: "Dein Gedanke zeigt X - aber Y" / "Richtig in der Sache - aber der Ton..." / "Deine Sorge zeigt Fürsorge, aber..." Kein einziges "Das ist falsch." als Einstieg. |

---

### Block L -- B1-Qualität (5 Kriterien)

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| L2 | B1-Satzlänge (<=15 Wörter) | PASS | B1-Texte durchgehend mit kurzen Sätzen. Stichprobe 10 Steps: Sätze 8-15 Wörter. |
| L4 | B1-Konstruktionen | PASS | Kein Passiv+Modal, keine Partizipialkonstruktionen, keine Genitivketten, kein Konjunktiv I in B1-Texten. |
| L5 | B1-Wortschatz | PASS | Keine verbotenen Wörter (evaluieren, eruieren, adäquat, insuffizient, Compliance, Assessment) in B1-Texten gefunden. |
| L6 | B1-Komposita | PASS | Lange Komposita aufgelöst: "Pflege-Berufe-Gesetz", "Praxis-Anleiterin", "Disziplinarverfahren (= Bestrafungsverfahren)". |
| L7 | B1-Fachbegriff-Einführung | PASS | Jeder Fachbegriff bei Erstnennung mit Klammer-Erklärung: "Profession (= gehobener Beruf)", "Professionalisierung (= Weg zur Profession)", "Disziplin (= Fachrichtung)". Max 3 neue pro Step eingehalten. |

---

### Block P -- Renderer-Semantik (4 Kriterien)

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| P3 | Summary = REFLEXION | PASS | Keine `stepType: "summary"` Steps vorhanden. Alle Reflexions-Steps haben `themenblockPhase: "REFLEXION"` korrekt gesetzt (15 Instanzen geprüft). |
| P4 | Titel-Inhalt-Konsistenz | PASS | "6 Schritte" im Titel -> 6 Schritte im Content. "3 Dimensionen" -> 3 Dimensionen. "4 Kategorien" -> 4 Kategorien. |
| P6 | Schüler-Perspektive (K.O.) | **PASS** | Dialog-Options geprüft (3 Dialoge, 9 Phasen): User spricht IMMER als Schüler. "Sprich mit der Stationsleitung" (empfehlend, nicht anweisend), "Herr Bauer, das verstehe ich" (empathisch fragend), "Frau K., ich bin Pflegeschülerin" (Rolle klar). Nie als Mentor/Lehrer. |
| P7 | Dialog-Mindestphasen | PASS | Alle 3 Dialoge (Sarah, Herr Bauer, Fatma K.) haben jeweils 3 dialogPhases mit sinnvollem Szenenverlauf. |

---

### Block G -- Content-Redundanz (1 Kriterium)

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| G2 | Body = fachlicher Kontext | PASS | Body enthält Kontext/Erklärung. Keine Aufgabenanweisungen ("Fülle die Lücken") im Body. Anweisungen stehen korrekt im `fragetext`. |

---

### Block Q -- Visual-Kohärenz (3 Kriterien)

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| Q7 | Bild-Inhalt-Match | PASS | bildhinweis "Kreislauf mit 6 Schritten" bei stepbystep Pflegeprozess -- korrekt (cycle für Regelkreis). "Drei-Bein-Hocker" bei Handlungskompetenz-Analogie -- korrekt. |
| Q8 | Bild-Pflicht-Trigger | PASS | LE-01 hat keinen klinischen Schwerpunkt (keine Anatomie, keine Wundstadien, keine Geräte). Kein Step beschreibt visuell zwingende Inhalte ohne Bild. |
| Q9 | Bildhinweis vorhanden | PASS | Alle Steps mit bildhinweis haben auch bildkategorie. Kein imageUrl vorhanden (Bilder noch nicht generiert), daher Q9 nicht anwendbar -- aber bildhinweis als Vorbereitung korrekt gesetzt. |

---

### Block R -- displayFormat-Sinn (1 Kriterium)

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| R2 | Format-Sinnhaftigkeit | PASS | "scenario" bei Fallszenen, "analogy" bei Drei-Bein-Hocker-Vergleich, "procontra" bei Pflegekammer-Debatte, "stepbystep" bei 6-Schritte-Prozess, "checklist" bei Belastungsfaktoren, "diary" bei Tagebucheinträgen, "interview" bei Interview-Format, "quote" bei Zitat -- alle semantisch korrekt. |

---

### Block CQ -- Tonalität + Glossar (3 Kriterien)

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| CQ-T2 | Verbotene Füllsätze | PASS | Keine semantischen Varianten von "Bevor wir einsteigen...", "In dieser Session..." gefunden. Einstiege sind direkt: "Pflege gab es schon immer" / "Der Pflegeprozess ist das zentrale Werkzeug". |
| CQ-G1 | Glossar-Vollständigkeit | PASS | Stichprobe 10 Fachbegriffe aus Steps: "Profession" (G01), "Pflegeprozess" (G07), "Vorbehaltene Tätigkeiten" (G05), "ICN" (G06), "Pflegeanamnese" (G09), "Fiechter und Meier" (G08), "Pflegekammer" (G19), "Handlungskompetenz" (G16), "Eisenhower-Methode" (G24), "PMR" (G25) -- alle im Glossar. |
| CQ-G2 | B1-Alltagswörter | PASS | Schwierige Alltagswörter in B1-Texten erklärt: "Nächstenliebe", "Bürokratie (= Verwaltung)", "Pflichtmitgliedschaft". |

---

## Zusammenfassung

| Kategorie | Kriterien | K.O. | Bestanden | Nicht bestanden |
|-----------|-----------|------|-----------|-----------------|
| Fakten-Treue (F) | 3 | 3 | 3 | 0 |
| Didaktische Kohärenz (B) | 2 | 2 | 2 | 0 |
| Textqualität (I) | 7 | 1 | 6 + 1 Hinweis | 0 |
| B1-Qualität (L) | 5 | 0 | 5 | 0 |
| Renderer-Semantik (P) | 4 | 1 | 4 | 0 |
| Content-Redundanz (G) | 1 | 0 | 1 | 0 |
| Visual-Kohärenz (Q) | 3 | 0 | 3 | 0 |
| displayFormat (R) | 1 | 0 | 1 | 0 |
| Tonalität + Glossar (CQ) | 3 | 0 | 3 | 0 |
| **Gesamt** | **28** | **7** | **26 PASS + 2 Hinweise** | **0** |

Bestanden: 28/28 | Nicht bestanden: 0/28

---

## Hinweise (nicht blockierend, Verbesserungsvorschläge)

### Hinweis 1: I1 -- Vereinzelt lange C1-Sätze
**Befund:** In den Artikel-Blöcken gibt es vereinzelt Sätze mit 22-25 Wörtern (z.B. die ICN-Definition ist ein langer Satz). Dies ist kein systematisches Problem und bei Zitat-Wiedergaben schwer vermeidbar.
**Empfehlung:** Bei nächster Content-Iteration die 3-4 längsten Sätze in den Artikeln prüfen und ggf. aufteilen.

### Hinweis 2: Tag-Fehler in 9 Steps
**Befund:** 9 Steps in steps-s1.ts, steps-s2.ts, steps-s3.ts, steps-s4.ts, steps-s5.ts, steps-s6.ts tragen `tag: "krankheitslehre"` statt des korrekten `tag: "pflege"`. LE-01 hat keinen Krankheitslehre-Bezug. Die betroffenen Steps:
- steps-s1.ts: 1 Step (le01-s1-mc-05)
- steps-s2.ts: 2 Steps (le01-s2-tx-06, le01-s2-sw-09)
- steps-s3.ts: 1 Step (le01-s3-sl-09)
- steps-s4.ts: 2 Steps (le01-s4-rv-04, le01-s4-tx-09)
- steps-s5.ts: 2 Steps (le01-s5-ct-06, le01-s5-sw-12)
- steps-s6.ts: 1 Step (le01-s6-fl-05)

**Empfehlung:** Alle 9 Tags auf `"pflege"` ändern. Dies ist ein Script-Level-Fix, kein inhaltliches Problem.

---

## Korrekturen erforderlich

**Keine K.O.-Korrekturen erforderlich.** Alle 7 K.O.-Kriterien bestanden.

Die 2 Hinweise sind Verbesserungsvorschläge, keine Blocker für den Live-Gang.

---

## Statistik

| Datei | Steps/Einträge | Bloom-Spanne |
|-------|---------------|-------------|
| steps-s1.ts | 9 Steps | B1-B3 |
| steps-s2.ts | 11 Steps | B1-B3 |
| steps-s3.ts | 11 Steps | B1-B3 |
| steps-s4.ts | 11 Steps | B1-B3 |
| steps-s5.ts | 14 Steps | B1-B3 |
| steps-s6.ts | 10 Steps | B1-B3 |
| fallverlaeufe.ts | 3 Fälle (Lina 6, Markus 5, Fatma 5 Steps) | B1-B3 |
| praxis.ts | 4 Übungen | B2-B3 |
| pruefungsfall.ts | 1 ExamCase (Amara D., 6 Phasen) | B2-B3 |
| artikel.ts | 9 Kapitel (C1 + B1) | -- |
| glossar.ts | 25 Einträge | -- |
| karteikarten.ts | 38 Karten (66% prüfungsrelevant) | -- |

**Gesamt: 66 Steps + 9 Kapitel + 25 Glossar + 38 Karteikarten + 1 ExamCase**

---

## Qualitäts-Highlights

1. **Fakten-Treue**: Alle 15 geprüften Fakten stimmen 1:1 mit Rohmaterial (F01-F44) überein. Seitenangaben korrekt.
2. **Dialogführung**: 3 Dialoge mit je 3 Phasen und steigender Komplexität. Besonders Herr-Bauer-Dialog (Autonomie vs. Fürsorge) ist didaktisch hervorragend.
3. **Kulturelle Sensibilität**: Fatma K. mit Sprachbarriere und kulturellen Bedürfnissen wird respektvoll und lehrreich dargestellt.
4. **Transfer-Markierung**: Klare Trennung zwischen Fakten [I Care Pflege S.xx] und didaktischem Transfer [Transfer].
5. **B1-Qualität**: Durchgehend hochwertige B1-Texte mit Wort-Erklärungen in Klammern, ohne Sinnentstellung.
6. **Pfad-Diversität**: 6 Pfade mit 20+ verschiedenen Step-Typen.
7. **Sandwich-Prinzip**: Konsequent umgesetzt in allen Feedbacks -- nie demotivierend, immer ermutigend.
8. **Prüfungsfall**: Amara D. als 4. Patientin (nicht im Fall-Tab) deckt Alltagsrassismus + Ethik + Pflegeprozess ab -- innovativ und mutig.
