# Recherche: Prüfungsreife-Indikator für Pflegeschüler

Datum: 2026-03-21 | Status: Abgeschlossen

---

## 1. Wie berechnen AMBOSS & Lecturio Exam Readiness?

### AMBOSS (medizinische Staatsexamina, USA)
- **Methode**: Kalibrierung gegen eine Referenzkohorte (Nutzer innerhalb 2 Wochen vor echtem Examen)
- **Modell**: Linear Mixed Effects Model mit globalen + nutzerspezifischen Parametern
- **Output**: 3-stelliger Score + Perzentil-Ranking
- **Genauigkeit**: 95 % Treffsicherheit, Abweichung ±7–10 Punkte vom echten Ergebnis
- **Kernerkenntnis**: Performance wird *relativ zur Peer-Gruppe* gemessen, nicht absolut

### Lecturio (Nursing / NCLEX-RN)
- **Methode**: Adaptive Quizzes + Learning Paths + kontinuierliches Topic-Monitoring
- **Output**: Score, Peer-Vergleich, geschätzte Bestehenswahrscheinlichkeit
- **Schwellen**: Durchschnittlicher Testtaker: 44 % (zwischen "low" und "borderline readiness")
- **Kernerkenntnis**: Topic-Level-Gaps werden identifiziert und wiederholt abgefragt

### ATI / HESI (Nursing-Spezifika, USA)
- ATI Comprehensive Predictor: Bestehensgrenze typisch **70–75 %**
- HESI Exit Exam Score ≥850: NCLEX-RN-Bestehensrate **96,3 %**; Score ≥900: **97,3 %**
- Kaplan CAT (Erster Versuch bestanden) → **91 %+** Chance auf NCLEX-Bestehen
- Klinisches Urteilsvermögen (CJE-RN): ≥84 % → **99 %** Bestehenschance

---

## 2. Relevante Metriken für unseren Readiness-Score

### Primärmetriken (hohe Gewichtung)
| Metrik | Warum wichtig | Gewicht (Vorschlag) |
|--------|--------------|---------------------|
| **Fallbasierte Quiz-Genauigkeit** | Examen ist fallbasiert (PflAPrV §14) | 30 % |
| **Bloom-Level-Abdeckung (Stufe 3+)** | NCLEX/Staatsexamen testet Apply + Analyze | 25 % |
| **Kursabdeckung je CE** | Vollständigkeit verhindert blinde Flecken | 20 % |
| **Spaced-Repetition-Retentionsrate** | Langzeiterinnerung entscheidend | 15 % |
| **Multiple-Choice-Genauigkeit** | Basiswissen-Proxy | 10 % |

### Sekundärmetriken (Qualitäts-Flags)
- Anzahl der Lernwiederholungen pro Thema (Tiefe)
- Zeitstabilität: War Performance konsistent oder nur kurz vor Prüfung hoch?
- Fehleranalyse: Systematische Fehler in bestimmten CEs
- Erste-Versuch-Genauigkeit (first attempt accuracy) vs. nach Wiederholung

---

## 3. Mindestschwellen — Was ist valide?

### Empfehlung für unsere Plattform (konservativ)

```
GRÜN  = "Prüfungsreif"       → ≥80 % aller CEs, davon ≥60 % auf Bloom 3+, Retention ≥85 %
GELB  = "Fast bereit"         → 65–79 % aller CEs ODER Bloom 3+ < 60 %
ROT   = "Nicht bereit"        → <65 % in ≥1 CE ODER Abdeckung <70 %
```

**Begründung:**
- HESI-Forschung: 85 %+ → sehr hohe Bestehensrate; 75–80 % = akzeptabler Schwellwert
- Bloom 3+ (Apply) ist das Minimum für fallbasiertes Staatsexamen (analog NCLEX-Struktur)
- Retentionsrate ≥85 % entspricht FSRS-Default (Spaced Repetition Standard)
- Konservativere Schwelle bewusst gewählt, um falsche Sicherheit zu vermeiden (siehe Punkt 8)

---

## 4. Gewichtung: Fallstudien vs. Multiple Choice

### Forschungslage
- Deutsche Pflegeprüfung ist **kompetenzorientiert und fallbasiert** (PflAPrV §14, §26, §27)
- NCLEX-Forschung: Klinisches Urteilsvermögen (Higher-Order Bloom) ist stärker prädiktiv als MC-Recall
- Anki/Spaced-Repetition-Studie (2025): Schüler mit überdurchschnittlichen Mature Cards → 71,5 % vs. 60 % bei unterdurchschnittlichen

**Konsequenz für Gewichtung:**
- Fallbasierte Aufgaben (Bloom 3+) zählen **2–3x** mehr als reine MC-Wissensfragen
- Praktische Simulationen (wenn vorhanden) haben höchste Gewichtung

---

## 5. Prädiktive Validität — Kann Plattformperformance Prüfungserfolg vorhersagen?

### Evidenzlage (international)
- Kaplan CAT: 91 %+ Bestehenschance bei erstem Bestehen → **starke prädiktive Validität**
- CJE-RN bei ≥84 %: 99 % Bestehensrate → **sehr starke prädiktive Validität**
- HESI: 20+ Jahre konsistente Forschung, breit belegt
- AMBOSS Score Predictor: 95 % Genauigkeit (±7–10 Punkte)

### Für Deutschland / PflBG spezifisch
- Direkte Studien zur Plattformvorhersage des deutschen Pflegestaatsexamens: **nicht vorhanden** (Forschungslücke)
- Übertragbarkeit der NCLEX-Daten: **hoch** (beide fallbasiert, kompetenzorientiert, Bloom 3+)
- **Empfehlung**: Nach Pilotphase eigene Daten erheben; Abschneiden auf Plattform vs. echte Examensnote korrelieren

---

## 6. Schriftlich / Mündlich / Praktisch — unterschiedliche Readiness-Typen

### Struktur der deutschen Pflegeabschlussprüfung (PflAPrV)
- **3 Schriftliche Klausuren** à 120 min (fallbasiert, 3 aufeinanderfolgende Tage)
  - Tag 1: Kompetenzschwerpunkte I.1, II.1, I.5, I.6 + Kontext IV
  - Tag 2: Kompetenzschwerpunkte I.2, II.2, V.1
  - Tag 3: Kompetenzschwerpunkte I.3, I.4, III.2, II.3
- **Mündliche Prüfung**: 30–45 min, vorbereiteter Fallvortrag, ≥2 Fachprüfer
- **Praktische Prüfung**: Reale Pflegesituation, Kommunikation + Handlungskompetenz

### Readiness je Prüfungstyp

| Prüfungstyp | Messbar auf Plattform? | Proxy-Metrik |
|-------------|----------------------|--------------|
| Schriftlich | Ja (gut) | Quiz-Genauigkeit, Fallaufgaben, Bloom-Level |
| Mündlich | Teilweise | Freitextantworten, KI-Feedback, Erklärqualität |
| Praktisch | Schlecht | Selbsteinschätzung, Checklisten (keine objektive Messung möglich) |

**Empfehlung**: Plattform-Readiness-Score bezieht sich primär auf **schriftliche Prüfung**. Mündliche Readiness via KI-Feedback (Sandwich-Prinzip) als separater Indikator. Praktische Readiness = ehrliche Disclaimer: "Nicht vollständig messbar."

---

## 7. Granularität: Per-CE, Per-Tag oder Gesamt?

### Empfehlung: Dreistufiges Modell

```
Ebene 1 — Per CE (Kompetenzschwerpunkt)
  → Detailansicht: Wo genau sind Lücken?
  → Für Schüler: "CE I.2 noch auf Gelb — 3 Themen fehlen"

Ebene 2 — Per Prüfungstag (Tag 1 / Tag 2 / Tag 3)
  → Aggregation nach PflAPrV-Mapping der CEs auf Prüfungstage
  → Für Schüler: "Tag 2 ist ROT — priorisiere jetzt"

Ebene 3 — Gesamtreadiness (Ampel für Dashboard)
  → Konservative Aggregation: schwächste Ebene 2 bestimmt Gesamtstatus
  → NICHT Durchschnitt (verhindert Kompensationseffekt)
```

**Warum schwächste statt Durchschnitt?**
Prüfung muss in ALLEN drei Teilen mindestens "ausreichend" sein. Ein guter Tag kompensiert keinen schlechten Tag.

---

## 8. Falsche Sicherheit vermeiden (Anti-Overconfidence)

### Bekannte Risiken
- Dunning-Kruger-Effekt: Schwache Lernende überschätzen sich systematisch
- KI-Nutzung verstärkt Overconfidence (Studie 2025: alle Nutzer überschätzen Leistung)
- Wiederholungseffekt: Richtiges Antworten durch Erinnerung an Plattform-Quizze ≠ echtes Verstehen

### Konkrete Gegenmaßnahmen für unsere Plattform

1. **Konservative Schwellen**: Grün erst bei ≥80 % (nicht 70 %)
2. **First-Attempt-Tracking**: Nur erste Antwortversuche zählen für Readiness-Score (keine Lernhilfe-Boosts)
3. **Zeitliche Konsistenz**: Readiness bleibt nur grün, wenn in den letzten 14 Tagen konsistent geübt
4. **Kompensationsverbot**: Gesamtampel = schlechtester Prüfungstag (kein Mittelwert)
5. **Expliziter Disclaimer**: "Plattformperformance ≠ Garantie. Praktische Prüfung und mündlicher Vortrag nicht messbar."
6. **Warnhinweis bei langer Lernpause**: Retention fällt nach >7 Tagen ohne Übung
7. **Bloom-Gate**: Grün nur wenn Bloom-3+-Anteil ≥60 % (verhindert reines Auswendiglernen)
8. **Lehreransicht**: Lehrer sehen Rohmetriken (kein aggregiertes "Grün"), können eigene Einschätzung einbringen

---

## Implementierungsempfehlung (Zusammenfassung)

```
Readiness-Score = f(
  fallbasierte_genauigkeit × 0.30,
  bloom3plus_anteil       × 0.25,
  ce_abdeckung            × 0.20,
  retention_rate          × 0.15,
  mc_genauigkeit          × 0.10
)

GRÜN  wenn: alle drei Prüfungstag-Scores ≥80 % UND Bloom3+ ≥60 % UND Retention ≥85 %
GELB  wenn: ein Prüfungstag 65–79 % ODER Bloom3+ 45–59 %
ROT   wenn: ein Prüfungstag <65 % ODER Abdeckung <70 % in einer CE
```

---

## Quellen

- [AMBOSS Score Predictor Accuracy](https://blog.amboss.com/us/how-accurate-is-the-amboss-usmle-score-predictor)
- [AMBOSS Step 2 CK Score Calculation](https://blog.amboss.com/us/amboss-step-2-ck-self-assessment-how-the-score-is-calculated)
- [Lecturio Nursing — NCLEX Readiness](https://www.lecturio.com/nursing/)
- [Kaplan Predictive Validity CAT](https://kaplan.com/institutions-educators/higher-education/nursing-schools/nclex-success-prep)
- [HESI Exit Exam Validity Research](https://accreditation.marin.edu/sites/default/files/IIA8-03_HESIExamRsrch.pdf)
- [Wolters Kluwer — Predictive Exams & NCLEX](https://www.wolterskluwer.com/en/expert-insights/predictive-exams-impact-on-nclex-success)
- [ATI Comprehensive Predictor Passing Score](https://www.naxlex.com/blog/what-is-the-passing-score-for-the-ati-comprehensive-predictor-exam/)
- [Spaced Repetition & Anki — Exam Performance (PMC 2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12357012/)
- [FSRS Spaced Repetition Algorithm](https://domenic.me/fsrs/)
- [Bloom's Taxonomy in Nursing Education (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4511057/)
- [NCLEX uses Bloom's Taxonomy for Critical Thinking](https://neethusacademy.com/how-the-nclex-uses-blooms-taxonomy-for-critical-thinking-questions/)
- [PflAPrV — Ausbildungs- und Prüfungsverordnung](https://www.gesetze-im-internet.de/pflaprv/BJNR157200018.html)
- [Generalistische Examensprüfung — Ablauf](https://www.easysoft.de/blog/generalistische-examenspruefung-in-der-pflege-darauf-muessen-pflegeschulen-achten/)
- [Kompetenzorientierte schriftliche Prüfungen (NEKSA)](https://www.pflege-ndz.de/files/content-asset/publikationen/BR_Neksa_2.pdf.pdf)
- [Dunning-Kruger & AI Overconfidence (2025)](https://neurosciencenews.com/ai-dunning-kruger-trap-29869/)
- [Predictive Validity Nursing Admissions — Meta-Analysis](https://pubmed.ncbi.nlm.nih.gov/21420045/)
