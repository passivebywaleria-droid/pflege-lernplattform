# Wissensbausteine: Pflegeplanung

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `pflegeplanung` |
| ceId | `ce-02` |
| cluster | A (Pflegeprozess & Planung) |
| wissensart | konzept |
| geschaetzteUE | 8 |
| zielzeitMin | 198 (8 UE × 45 × 0,55) |
| bausteineAnzahl | 15 |
| voraussetzungen | `pflegeprozess` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 3: 6 Bausteine (40%), Bloom 4: 7 Bausteine (47%), Bloom 5: 2 Bausteine (13%)

**Primärquellen:**
- NANDA International (NANDA-I, 2021): Pflegediagnosen — Definitionen und Klassifikation 2021-2023
- Orem D.E. (1971/2001): Self-Care Deficit Nursing Theory
- Krohwinkel M. (1993): Rehabilitierende Prozesspflege — AEDL/ABEDL-Modell
- Roper N., Logan W., Tierney A.J. (1980): The Elements of Nursing — Activities of Living
- Doran G.T. (1981): There's a S.M.A.R.T. way to write management's goals and objectives
- § 4 PflBG (Pflegeberufegesetz) — Vorbehaltene Tätigkeiten

---

## Baustein 1: pesr-schema

### Metadaten
- **bausteinId:** pflegeplanung-pesr-schema
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** NANDA-I 2021, Krohwinkel 1993

### Stufe 1 — Denkfrage
- **Frage:** "Du schreibst eine Pflegediagnose. Was muss drinstehen, damit eine andere Pflegefachperson genau versteht: Was ist das Problem? Warum? Woran erkennt man es? Was kann der Patient noch selbst?"
- **Step-Typ:** freetext (aktiviert Vorwissen, Bloom 3)

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Das PESR-Schema strukturiert Pflegediagnosen in Deutschland: **P**roblem (Was?), **Ä**tiologie (Warum?), **S**ymptome (Woran erkennbar?), **R**essourcen (Was kann der Patient noch?). Es erweitert das amerikanische PES-Schema um R."

**B1 (210 Zeichen):** "Das PESR-Schema hat vier Teile: **P** = Problem (was ist das Pflegeproblem?), **Ä** = Ursache (warum?), **S** = Zeichen (woran siehst du es?), **R** = Ressourcen (was schafft der Patient noch selbst?). R kommt aus Deutschland."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Das **PESR-Schema** ist die in Deutschland gebräuchliche Form der Pflegediagnosen-Dokumentation. Es baut auf dem amerikanischen PES-Format auf und ergänzt es um die **Ressourcenperspektive** — wichtig für rehabilitierende Pflege nach Krohwinkel.

**P — Problem:** Was ist das Pflegeproblem? Formuliert als Pflegediagnose (z.B. 'Beeinträchtigte Mobilität').
**Ä — Ätiologie:** Was hat das Problem verursacht oder hält es aufrecht? (z.B. 'aufgrund von Schmerzen nach Hüft-OP').
**S — Symptome:** Woran erkennt man das Problem? Beobachtbare Zeichen (z.B. 'erkennbar an: Patient dreht sich nicht selbstständig, grimassiert beim Hochziehen').
**R — Ressourcen:** Was kann der Patient noch? (z.B. 'Ressource: kann beide Arme gezielt einsetzen').

Die Ressource ist kein optionaler Zusatz — sie ist die Grundlage für die Zielformulierung. (Krohwinkel 1993, NANDA-I 2021)"

**B1 (545 Zeichen):**
"Das **PESR-Schema** hilft dir, eine Pflegediagnose vollständig zu schreiben.

**P — Problem**: Was ist das Pflegeproblem? Zum Beispiel: 'Beeinträchtigte Mobilität'.
**Ä — Ursache**: Warum? Zum Beispiel: 'wegen Schmerzen nach einer Hüft-OP'.
**S — Symptome**: Woran siehst du es? Zum Beispiel: 'Patient dreht sich nicht alleine im Bett, er grimassiert beim Aufstehen'.
**R — Ressourcen**: Was schafft der Patient noch selbst? Zum Beispiel: 'Er kann beide Arme benutzen'.

Das R ist wichtig. Denn was der Patient noch kann, ist die Basis für das Pflegeziel. Das ist typisch für Deutschland — in Amerika gibt es nur PES, kein R. (Krohwinkel 1993)"

- **Erklärungs-Step:** stepType `reveal` (4 Felder aufdecken, PESR-Karten)
- **Glossar-Begriffe:** [PESR, Pflegediagnose, Ätiologie, Ressource]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "S (Symptome) und P (Problem) sind dasselbe — beides beschreibt was der Patient hat"**
- **Fachbegriff:** P-S-Verwechslung
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — **P** ist die diagnostische Aussage: 'Was ist das Pflegeproblem?' (z.B. Beeinträchtigte Mobilität). **S** sind die Beweise: 'Woran erkenne ich es?' — beobachtbare Zeichen, Messwerte, Äußerungen. P ist die Schlussfolgerung, S sind die Belege dafür."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — **P** ist das Pflegeproblem (deine Aussage: 'Was ist das Problem?'). **S** sind die Zeichen: 'Woran sehe ich, dass es stimmt?' P ist die Schlussfolgerung. S ist der Beweis. Merke: P = Diagnose, S = Zeichen."

**D2: "Die Ressource (R) ist optional — nur bei Rehab-Patienten nötig"**
- **Fachbegriff:** Ressourcen-Unterschätzung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Ressourcen sind immer Pflichtbestandteil im PESR-Schema, nicht nur in der Reha. Grund: Die Ressource bestimmt das Pflegeziel. Ohne zu wissen was der Patient noch kann, lässt sich kein realistisches Ziel formulieren. Merke: Ressource = Grundlage für das Ziel."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Ressourcen gehören immer dazu. Warum? Weil das Pflegeziel davon abhängt, was der Patient noch selbst schafft. Ohne R kein realistisches Ziel. Merke: Ressourcen sind kein Extra — sie sind der Ausgangspunkt für das Ziel."

**D3: "Das PESR-Schema kommt direkt aus der NANDA-I-Klassifikation"**
- **Fachbegriff:** PESR-NANDA-Herkunftsfehler
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — das **PES-Schema** (ohne R) kommt aus der NANDA-I-Tradition (USA). Das **PESR-Schema** ist eine deutsche Weiterentwicklung, geprägt durch das AEDL-Modell von Monika Krohwinkel (1993). NANDA-I kennt Ressourcen als eigenen Diagnosetyp, aber das R im Schema ist deutsche Praxis."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — PES (ohne R) kommt aus Amerika (NANDA-I). Das **R** für Ressourcen ist eine deutsche Ergänzung. Monika Krohwinkel hat in Deutschland das Modell entwickelt, das Ressourcen des Patienten in den Mittelpunkt stellt. Merke: PESR = Deutschland, PES = USA."

### Richtig-Feedback
**C1 (255 Zeichen):** "Genau. PESR: Problem (Was ist das Pflegeproblem?), Ätiologie (Was ist die Ursache?), Symptome (Woran erkennbar?), Ressourcen (Was kann der Patient noch?). Das R ist deutsche Ergänzung zum amerikanischen PES — und Grundlage für die Zielformulierung."

**B1 (220 Zeichen):** "Sehr gut. PESR: Problem (Pflegeproblem), Ätiologie (Ursache), Symptome (Zeichen), Ressourcen (was der Patient noch kann). Das R kommt aus Deutschland und ist die Basis für das Ziel."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wofür stehen die Buchstaben PESR in einer Pflegediagnose?"
- **Rückseite:** "P = Problem, Ä/E = Ätiologie/Ursache, S = Symptome/Zeichen, R = Ressourcen des Patienten."
- **Kategorie:** fachbegriff

---

## Baustein 2: pes-vs-pesr

### Metadaten
- **bausteinId:** pflegeplanung-pes-vs-pesr
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** NANDA-I 2021, Krohwinkel 1993

### Stufe 1 — Denkfrage
- **Frage:** "Warum könnte es wichtig sein, bei einer Pflegediagnose nicht nur Problem, Ursache und Symptom zu nennen — sondern auch was der Patient noch selbst kann?"
- **Step-Typ:** freetext (Bloom 4, analysieren)

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "**PES** (amerikanischer NANDA-I-Standard): Problem, Ätiologie, Symptome — beschreibt den Defizit. **PESR** (deutsche Erweiterung): + Ressourcen — beschreibt was der Patient noch kann. PESR ist rehabilitativ und patientenzentriert. Beide sind klinisch gültig."

**B1 (215 Zeichen):** "**PES** (USA): Problem, Ursache, Symptome. Beschreibt was der Patient nicht kann. **PESR** (Deutschland): + Ressourcen — beschreibt was der Patient noch schafft. PESR schaut nicht nur auf Defizite, sondern auch auf Stärken."

- **Step-Typ:** comparison (PES vs. PESR nebeneinander)

### Stufe 3 — Erklärung

**C1 (690 Zeichen):**
"Das **PES-Schema** entstammt der nordamerikanischen Pflegediagnostik (NANDA-I). Es beschreibt ein Pflegeproblem vollständig aus der Defizitperspektive: Was ist falsch (P), warum (Ä), woran erkennbar (S).

Das **PESR-Schema** erweitert PES durch die **R**essource — ein Kerngedanke des deutschen Pflegeverständnisses. Monika Krohwinkel (1993) formulierte: Rehabilitierende Pflege bedeutet, Menschen zu fördern, was sie noch können, und zu kompensieren, was sie nicht mehr können.

**Praktische Konsequenz:**
- PES-Denken: 'Herr K. kann nicht alleine aufstehen' → Pflege übernimmt.
- PESR-Denken: 'Herr K. kann nicht alleine aufstehen (P/Ä/S), aber er kann sich am Bettgitter halten (R)' → Pflege fördert die vorhandene Fähigkeit.

PESR ist in deutschsprachigen Einrichtungen Standard. Wer PESR versteht, dokumentiert nicht nur, sondern fördert. (Krohwinkel 1993, NANDA-I 2021)"

**B1 (560 Zeichen):**
"**PES** kommt aus Amerika (NANDA-I). Es beschreibt: Was ist das Problem (P), warum (Ä), woran sieht man es (S). Fertig. Gut — aber es fragt nicht: Was kann der Patient noch?

**PESR** kommt aus Deutschland. Monika Krohwinkel hat es geprägt: Pflege soll fördern, was der Patient noch kann — nicht nur übernehmen, was er nicht mehr kann.

**Beispiel:**
- PES: 'Herr K. kann nicht alleine aufstehen.'
- PESR: 'Herr K. kann nicht alleine aufstehen — aber er kann sich am Bettgitter festhalten.'

Der PESR-Ansatz macht einen Unterschied: Die Pflege hilft Herrn K., sich selbst aufzustellen (mit Halt), statt alles für ihn zu tun. Das stärkt ihn.

In Deutschland arbeiten wir mit PESR. (Krohwinkel 1993)"

- **Erklärungs-Step:** stepType `comparison` (PES vs. PESR mit Beispiel-Patient)
- **Glossar-Begriffe:** [PES-Schema, PESR-Schema, NANDA-I, rehabilitierende Pflege]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "PES ist veraltet — in Deutschland darf man es nicht mehr verwenden"**
- **Fachbegriff:** PES-Verbots-Mythos
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — PES ist kein veraltetes oder verbotenes Format. Es ist der internationale NANDA-I-Standard und wird weltweit angewendet. In Deutschland wird PESR bevorzugt, weil es den rehabilitativen Ansatz besser abbildet. Verboten ist PES nirgends."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — PES ist nicht verboten. Es ist der internationale Standard (NANDA-I) und wird überall auf der Welt benutzt. In Deutschland bevorzugen wir PESR, weil es besser zeigt, was der Patient noch kann. Aber PES ist nicht falsch."

**D2: "Das R (Ressourcen) wird erst am Ende der Pflege eingetragen, wenn der Patient sich verbessert hat"**
- **Fachbegriff:** Ressourcen-Timing-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Ressourcen werden am **Anfang** der Pflegediagnose dokumentiert, nicht am Ende. Sie beschreiben, was der Patient **jetzt** noch kann — das ist die Ausgangslage für die Zielformulierung. Die Ressource verändert sich im Verlauf (Evaluation), aber sie wird von Beginn an erfasst."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Ressourcen notierst du **am Anfang**, wenn du die Pflegediagnose schreibst. Du schreibst auf: was kann der Patient jetzt noch? Das ist die Basis für das Ziel. Im Verlauf kann sich die Ressource verändern — dann aktualisierst du."

**D3: "PESR und PES unterscheiden sich nur in einem Buchstaben — inhaltlich ist es dasselbe"**
- **Fachbegriff:** PES-PESR-Gleichsetzung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — der Unterschied ist nicht nur formal, sondern **konzeptionell**. PES dokumentiert ein Defizit. PESR fügt die Stärkenperspektive hinzu und verändert damit die Pflegeplanung: Ressourcen-orientierte Pflege fördert aktiv, was der Patient noch kann — das ist ein anderer Pflegeansatz als Übernahme."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — der Unterschied ist nicht nur ein Buchstabe. PESR verändert, wie du pflegst. PES = du dokumentierst das Defizit. PESR = du dokumentierst auch die Stärken und planst dann: Wie fördere ich, was der Patient noch schafft? Das ist ein anderer Denkansatz."

### Richtig-Feedback
**C1 (265 Zeichen):** "Genau. PES (NANDA-I) beschreibt das Defizit: Problem, Ätiologie, Symptome. PESR ergänzt die Ressource — deutsches Pflegeverständnis nach Krohwinkel: Fördere was der Patient noch kann, kompensiere was er nicht mehr kann. PESR ist in Deutschland Standard."

**B1 (230 Zeichen):** "Sehr gut. PES = Defizit dokumentieren (USA, NANDA-I). PESR = Stärken mitdenken (Deutschland, Krohwinkel). Das R verändert die Pflege: nicht nur übernehmen, sondern fördern was der Patient noch selbst kann."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der inhaltliche Unterschied zwischen PES und PESR?"
- **Rückseite:** "PES dokumentiert das Defizit (Problem/Ätiologie/Symptome). PESR ergänzt Ressourcen (was der Patient noch kann) — rehabilitativer Ansatz nach Krohwinkel."
- **Kategorie:** konzept

---

## Baustein 3: nanda-i-pflegediagnosen

### Metadaten
- **bausteinId:** pflegeplanung-nanda-i-diagnosen
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** NANDA-I 2021

### Stufe 1 — Denkfrage
- **Frage:** "Was ist der Unterschied: 'Herr M. hat das Risiko, zu stürzen' — 'Herr M. ist gestürzt und hat jetzt Angst' — 'Frau K. möchte mehr über gesunde Ernährung wissen'? Sind das verschiedene Arten von Pflegeproblemen?"
- **Step-Typ:** freetext (Bloom 3)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "NANDA-I unterscheidet **3 Arten von Pflegediagnosen**: (1) Aktuelle Diagnose — Problem besteht jetzt. (2) Risikodiagnose — Problem existiert noch nicht, aber Risikofaktoren sind vorhanden. (3) Gesundheitspflege-Diagnose — Patient möchte seinen Gesundheitszustand verbessern."

**B1 (215 Zeichen):** "Es gibt **3 Arten von Pflegediagnosen** (NANDA-I): (1) Aktuelle Diagnose — das Problem ist jetzt da. (2) Risikodiagnose — das Problem ist noch nicht da, aber gefährlich. (3) Gesundheitsdiagnose — der Patient will gesünder werden."

- **Step-Typ:** comparison (3 Typen nebeneinander mit Beispielen)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die **NANDA-I-Klassifikation** (NANDA International, 2021) strukturiert Pflegediagnosen in drei Typen:

**1. Aktuelle Pflegediagnose**
Das Problem besteht jetzt und ist durch Symptome (definierte Merkmale) nachweisbar.
Beispiel: 'Beeinträchtigte Mobilität, bedingt durch Schmerzen (Ätiologie), erkennbar an: Patient dreht sich nicht im Bett, grimassiert (S).'

**2. Risikodiagnose**
Das Problem besteht noch nicht, aber Risikofaktoren machen es wahrscheinlich.
→ Kein S-Anteil im PES/PESR (es gibt noch keine Symptome).
Beispiel: 'Sturzrisiko, bedingt durch Schwindel bei Lagewechsel.'

**3. Gesundheitspflege-Diagnose (Wellness-Diagnose)**
Der Patient ist motiviert, seinen Gesundheitszustand in einem spezifischen Bereich zu verbessern.
Beispiel: 'Bereitschaft, die Selbstpflege zu verbessern' (Patient will mehr selbst waschen).
→ Wird in der Praxis am seltensten dokumentiert. (NANDA-I 2021)"

**B1 (560 Zeichen):**
"NANDA-I (2021) unterscheidet drei Arten von Pflegediagnosen:

**1. Aktuelle Diagnose**
Das Problem ist jetzt da. Du kannst es sehen oder messen.
Beispiel: 'Herr M. kann sich nicht alleine im Bett umdrehen, weil er Schmerzen hat.' Du siehst: er bewegt sich nicht, er grimassiert.

**2. Risikodiagnose**
Das Problem gibt es noch nicht — aber es könnte kommen.
Beispiel: 'Sturzrisiko wegen Schwindel.' Noch kein Sturz passiert, aber die Gefahr ist da.
→ Kein Symptom-Teil im Schema, weil das Problem noch nicht da ist.

**3. Gesundheitsdiagnose**
Der Patient will etwas verbessern.
Beispiel: 'Frau K. will mehr selbst essen lernen.' Kein Defizit — ein Wunsch.
→ Im Alltag am seltensten. (NANDA-I 2021)"

- **Erklärungs-Step:** stepType `reveal` (3 Diagnosetypen mit Beispiel-Karten)
- **Glossar-Begriffe:** [NANDA-I, aktuelle Pflegediagnose, Risikodiagnose, Gesundheitsdiagnose]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Risikodiagnosen braucht man nicht — erst wenn das Problem da ist, handelt man"**
- **Fachbegriff:** Reaktiv-Denk-Fehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Risikodiagnosen sind die Grundlage für **Prophylaxen**. Ein Sturz ist oft vermeidbar, wenn das Risiko frühzeitig erkannt und Maßnahmen eingeleitet werden. Reaktive Pflege (nach dem Sturz) ist schlechte Pflege. Prävention beginnt mit der Risikodiagnose."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — eine Risikodiagnose ist die Grundlage für Vorbeugung. Wenn du ein Sturzrisiko dokumentierst, kannst du handeln bevor der Sturz passiert. Warten bis der Sturz passiert ist = zu spät. Merke: Risikodiagnose = Prävention starten."

**D2: "Eine Risikodiagnose hat auch Symptome — die zukünftigen Symptome die kommen könnten"**
- **Fachbegriff:** Risikodiagnose-Symptom-Fehler
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — Risikodiagnosen haben **keine Symptome (S)**, weil das Problem noch nicht eingetreten ist. Es gibt noch nichts zu beobachten. Im Schema: P + Ä + R — kein S. Was vorhanden sind, sind **Risikofaktoren** (das ist die Ätiologie bei Risikodiagnosen)."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — eine Risikodiagnose hat kein S (Symptome). Das Problem ist noch nicht da, also gibt es nichts zu sehen. Im Schema bleibt S leer. Was es gibt: Risikofaktoren — das ist die Ätiologie. Merke: Risikodiagnose = P + Ä + R, kein S."

**D3: "Gesundheitsdiagnosen sind nur für gesunde Menschen — in der Pflege braucht man sie nicht"**
- **Fachbegriff:** Wellness-Diagnose-Ablehnung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Gesundheits-/Wellness-Diagnosen können auch bei kranken oder eingeschränkten Patienten gestellt werden. Wenn ein Patient motiviert ist, seine Selbstpflegefähigkeit zu verbessern, ist das eine Gesundheitsdiagnose — egal ob er sonst krank ist oder nicht. Motivation ist ein Pflegethema."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — eine Gesundheitsdiagnose kann auch bei kranken Patienten gestellt werden. Wenn ein Patient sagt 'Ich will mehr selbst machen', ist das eine Gesundheitsdiagnose — egal was seine Hauptdiagnose ist. Motivation gehört in die Pflegeplanung."

### Richtig-Feedback
**C1 (265 Zeichen):** "Genau. Die 3 NANDA-I-Diagnosetypen: Aktuelle Diagnose (Problem jetzt, mit S), Risikodiagnose (Problem droht, kein S, nur Risikofaktoren), Gesundheitsdiagnose (Patient will Verbesserung). In der Praxis am häufigsten: aktuelle + Risikodiagnosen."

**B1 (230 Zeichen):** "Sehr gut. 3 Typen: (1) Aktuelle Diagnose — Problem ist da, du siehst es. (2) Risikodiagnose — Problem droht, kein S. (3) Gesundheitsdiagnose — Patient will sich verbessern. Im Alltag am meisten: aktuell und Risiko."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 3 Arten von Pflegediagnosen unterscheidet NANDA-I?"
- **Rückseite:** "(1) Aktuelle Diagnose (Problem vorhanden, Symptome sichtbar), (2) Risikodiagnose (Risikofaktoren, noch keine Symptome), (3) Gesundheitsdiagnose (Patient möchte Gesundheitsverhalten verbessern). (NANDA-I 2021)"
- **Kategorie:** klassifikation

---

## Baustein 4: smart-ziele

### Metadaten
- **bausteinId:** pflegeplanung-smart-ziele
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** Doran 1981

### Stufe 1 — Denkfrage
- **Frage:** "Was ist der Unterschied zwischen diesen zwei Zielen: (a) 'Herr K. soll mehr trinken' — (b) 'Herr K. trinkt bis Freitag 1500 ml pro Tag selbstständig'?"
- **Step-Typ:** freetext (Bloom 3)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Das SMART-Prinzip macht Pflegeziele messbar und überprüfbar: **S**pezifisch (Was genau?), **M**essbar (Wie viel? Wie oft?), **A**chievable/Erreichbar (realistisch für diesen Patienten?), **R**ealistisch (mit vorhandenen Ressourcen?), **T**erminiert (bis wann?)."

**B1 (215 Zeichen):** "SMART macht Pflegeziele klar: **S** = genau formulieren, **M** = messbar (Zahl, Zeit), **A** = erreichbar (für diesen Patienten), **R** = realistisch (mit echten Mitteln), **T** = Termin (bis wann?). Ziele ohne SMART sind nicht überprüfbar."

- **Step-Typ:** text (displayFormat: acronym — SMART-Tabelle)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Das **SMART-Prinzip** stammt aus dem Management (Doran, 1981) und wurde in die Pflege übernommen. Ein Pflegeziel ohne SMART-Kriterien ist keine Arbeitsgrundlage — es ist ein Wunsch.

**S — Spezifisch:** Nicht 'mehr trinken', sondern 'Herr K. trinkt Wasser und Tee'.
**M — Messbar:** Nicht 'viel trinken', sondern '1500 ml pro Tag'. Menge, Häufigkeit oder Beobachtungskriterium angeben.
**A — Achievable (Erreichbar):** Das Ziel muss für **diesen Patienten** mit seinen Ressourcen erreichbar sein. Ein Patient mit Dysphagie und 1500 ml/Tag als Schluckziel ist unrealistisch.
**R — Realistisch:** Mit vorhandenen Pflegeleistungen und Zeit erreichbar — nicht utopisch.
**T — Terminiert:** Bis wann gilt das Ziel? '...bis Freitag', '...innerhalb von 3 Tagen', '...bis zur Entlassung'.

Nur ein SMART-Ziel kann bei der Evaluation bewertet werden: Wurde es erreicht? Wenn ja, nächstes Ziel. Wenn nein, Plan anpassen. (Doran 1981)"

**B1 (560 Zeichen):**
"SMART macht Pflegeziele überprüfbar. Ohne SMART kannst du nicht sagen, ob das Ziel erreicht wurde.

**S** — Genau: Nicht 'trinken', sondern 'Wasser und Tee trinken'.
**M** — Messbar: Nicht 'viel', sondern '1500 ml täglich'.
**A** — Erreichbar: Ist das Ziel für diesen Patienten realistisch? (Ein Patient der kaum schlucken kann, schafft vielleicht nur 800 ml.)
**R** — Realistisch: Haben wir die Zeit und die Mittel dafür?
**T** — Termin: Bis wann? 'Bis Freitag', 'bis zur Entlassung', 'nach 3 Tagen'.

Warum ist SMART wichtig? Bei der Evaluation fragst du: Wurde das Ziel erreicht? Ohne Termin und Zahl kannst du das nicht beurteilen. (Doran 1981)"

- **Erklärungs-Step:** stepType `reveal` (SMART-Buchstaben einzeln aufdecken mit Beispiel)
- **Glossar-Begriffe:** [SMART-Ziel, Evaluation, Terminierung, Messbarkeit]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "SMART-Ziele sind zu starr — in der Pflege ist alles individuell, deshalb braucht man keine Zahlen"**
- **Fachbegriff:** SMART-Starr-Mythos
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — SMART ist gerade deshalb wichtig, weil es **individuell** ist. Das Ziel '1500 ml täglich' für Herrn K. ist sein individuelles Ziel, nicht für alle. SMART macht Ziele prüfbar, nicht gleichgeschaltet. Ohne messbare Kriterien kannst du nicht erkennen, ob du geholfen hast."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — SMART ist individuell: '1500 ml täglich' ist das Ziel für Herrn K., nicht für alle Patienten. SMART macht das Ziel genau für diesen Menschen überprüfbar. Ohne Zahlen weißt du nicht, ob du geholfen hast. Merke: SMART = messbar und individuell."

**D2: "Ein Ziel ohne Termin ist auch gut — Pflege ist nicht so planbar"**
- **Fachbegriff:** Termin-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — der Termin (T) ist der Auslöser für die Evaluation. Ohne Termin weiß niemand, wann das Ziel bewertet wird. Das Ziel bleibt ewig offen, wird nie überprüft, der Plan nie angepasst. Merke: Kein Termin = keine Evaluation = kein Lerneffekt für die Pflegeplanung."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — ohne Termin weiß niemand, wann man schaut ob das Ziel erreicht wurde. Das Ziel bleibt für immer offen. Dann wird der Pflegeplan nie angepasst. Merke: Der Termin macht die Evaluation erst möglich. Kein T = keine Überprüfung."

**D3: "R (Realistisch) und A (Achievable) bedeuten dasselbe — eine Abkürzung reicht"**
- **Fachbegriff:** R-A-Gleichsetzung
- **Feedback (C1, 260 Zeichen):** "Fast — in der Praxis werden A und R oft ähnlich interpretiert. In der Originalfassung (Doran 1981) meint **A** die Erreichbarkeit für den Patienten (individuell), **R** die Durchführbarkeit mit vorhandenen Ressourcen (Zeit, Personal, Hilfsmittel). Beide Fragen sind hilfreich."
- **Feedback (B1, 230 Zeichen):** "Fast — A und R sind ähnlich. A fragt: Schafft der Patient das? R fragt: Haben wir die Mittel dafür? Beide Fragen sind sinnvoll. In der Praxis prüft man beides gemeinsam — kann der Patient es, und haben wir die Ressourcen?"

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. SMART: Spezifisch (Was genau?), Messbar (Wie viel/oft?), Achievable (für diesen Patienten erreichbar?), Realistisch (mit vorhandenen Mitteln?), Terminiert (bis wann?). Nur ein SMART-Ziel kann bei der Evaluation bewertet werden."

**B1 (225 Zeichen):** "Sehr gut. SMART: S = genau, M = messbar (Zahl), A = erreichbar (für diesen Patienten), R = realistisch (mit unseren Mitteln), T = Termin (bis wann?). Nur SMART-Ziele kann man bei der Evaluation wirklich überprüfen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet SMART bei Pflegezielen?"
- **Rückseite:** "S = Spezifisch, M = Messbar, A = Achievable/Erreichbar, R = Realistisch, T = Terminiert (bis wann?). (Doran 1981)"
- **Kategorie:** handlung

---

## Baustein 5: zielhierarchie

### Metadaten
- **bausteinId:** pflegeplanung-zielhierarchie
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** Krohwinkel 1993

### Stufe 1 — Denkfrage
- **Frage:** "Frau S. hat einen Schlaganfall und kann nicht sprechen. Das Fernziel: 'Frau S. kommuniziert wieder selbstständig'. Was müsste sie zuerst erreichen — und davor?"
- **Step-Typ:** freetext (Bloom 3)

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Pflegeziele werden in **3 Hierarchieebenen** eingeteilt: **Nahziel** (in Stunden bis Tagen, kurzfristig erreichbar), **Teilziel** (in Tagen bis Wochen, Zwischenschritt), **Fernziel** (in Wochen bis Monaten, langfristiger Endzustand)."

**B1 (210 Zeichen):** "Es gibt **3 Ziel-Stufen**: **Nahziel** (heute bis morgen), **Teilziel** (diese Woche), **Fernziel** (in Wochen oder Monaten). Sie bauen aufeinander auf: Nahziel → Teilziel → Fernziel."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (660 Zeichen):**
"Die **Zielhierarchie** gliedert Pflegeziele nach Zeitraum und Komplexität:

**Nahziel:** Kurzfristig, erreichbar innerhalb von Stunden bis maximal 2-3 Tagen. Beschreibt den nächsten konkreten Schritt.
Beispiel: 'Frau S. zeigt heute auf Bildkarten, wenn sie Durst hat.'

**Teilziel:** Mittelfristig, erreichbar in Tagen bis 2-3 Wochen. Zwischenschritt auf dem Weg zum Fernziel.
Beispiel: 'Frau S. benutzt nach 1 Woche eine Kommunikationstafel mit 10 Begriffen.'

**Fernziel:** Langfristig, erreichbar in Wochen bis Monaten. Beschreibt den angestrebten Endzustand.
Beispiel: 'Frau S. kommuniziert nach 3 Monaten ihre Grundbedürfnisse mündlich.'

Die Hierarchie ist wichtig, weil Patienten Motivation brauchen: Das Nahziel ist erreichbar, gibt Erfolgserlebnisse und macht den Weg zum Fernziel greifbar. (Krohwinkel 1993)"

**B1 (530 Zeichen):**
"**3 Ziel-Stufen** in der Pflege:

**Nahziel** — für heute oder morgen. Ein kleiner, konkreter Schritt.
Beispiel: 'Frau S. zeigt heute auf eine Karte, wenn sie Durst hat.'

**Teilziel** — für diese Woche. Ein Schritt weiter.
Beispiel: 'Nach einer Woche benutzt Frau S. eine Kommunikationstafel.'

**Fernziel** — für Wochen oder Monate. Das große Ziel.
Beispiel: 'Nach 3 Monaten kann Frau S. ihre Bedürfnisse wieder mündlich sagen.'

Warum diese Aufteilung? Der Patient braucht Erfolgserlebnisse. Das Nahziel ist erreichbar und zeigt: Es geht vorwärts. Das motiviert. Das Fernziel gibt die Richtung."

- **Erklärungs-Step:** stepType `reveal` (3 Stufen mit Pfeil-Visualisierung)
- **Glossar-Begriffe:** [Nahziel, Teilziel, Fernziel, Zielhierarchie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Das Fernziel ist das wichtigste — deshalb plant man es zuerst und zuerst ausführlich"**
- **Fachbegriff:** Fernziel-Priorisierungs-Fehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — das Fernziel gibt die Richtung, aber die Pflege arbeitet täglich mit dem Nahziel. Das Nahziel ist das operative Instrument — es steht in der Maßnahmenplanung, wird täglich bewertet und angepasst. Fernziel ohne Nahziele ist Wunschdenken, keine Pflegeplanung."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das Fernziel zeigt wo die Reise hingeht. Aber der Alltag in der Pflege arbeitet mit dem Nahziel. Das Nahziel steht in den Maßnahmen, wird täglich geschaut: Erreicht? Wenn ja, nächstes Nahziel. Das Fernziel allein reicht nicht."

**D2: "Nahziele sind unwichtig — man dokumentiert nur das Fernziel"**
- **Fachbegriff:** Nahziel-Unterschätzung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — Nahziele sind die tägliche Arbeitsgrundlage. Ohne Nahziel weiß das Team nicht was heute konkret zu tun ist. Die Pflegemaßnahmen sind auf das Nahziel ausgerichtet. Ein Fernziel allein reicht nicht — er ist zu abstrakt für die tägliche Arbeit."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Nahziele sind das was du heute brauchst. Sie sagen: Was machen wir jetzt? Das Fernziel ist zu weit weg für die tägliche Pflege. Nahziel = konkret und machbar heute. Das braucht das Team für die Arbeit."

**D3: "Wenn das Nahziel nicht erreicht wird, ist der Patient gescheitert"**
- **Fachbegriff:** Versagens-Attribution
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — wenn ein Nahziel nicht erreicht wird, ist das eine **Information**, keine Niederlage. Die Evaluation zeigt: Das Ziel war zu hoch, oder die Maßnahmen passen nicht, oder es braucht mehr Zeit. Die Reaktion: Ziel anpassen oder Maßnahme ändern — nicht Schuld zuweisen."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — ein nicht erreichtes Nahziel ist keine Niederlage. Es ist ein Signal: Das Ziel war zu hoch, oder die Maßnahmen passen nicht. Die richtige Reaktion: Ziel anpassen oder Maßnahme ändern. Niemals dem Patienten die Schuld geben."

### Richtig-Feedback
**C1 (255 Zeichen):** "Genau. Die 3 Zielebenen: Nahziel (Stunden bis Tage, nächster Schritt), Teilziel (Tage bis Wochen, Zwischenstand), Fernziel (Wochen bis Monate, Endzustand). Sie bauen aufeinander auf. Nahziele geben Erfolgserlebnisse auf dem Weg zum Fernziel."

**B1 (220 Zeichen):** "Sehr gut. Nahziel (heute/morgen), Teilziel (diese Woche), Fernziel (in Monaten). Sie bauen aufeinander auf. Das Nahziel ist das wichtigste für den Alltag — es zeigt was heute konkret zu tun ist."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 3 Hierarchieebenen unterscheidet die Pflegezielformulierung?"
- **Rückseite:** "Nahziel (Stunden bis Tage), Teilziel (Tage bis Wochen), Fernziel (Wochen bis Monate). Bauen aufeinander auf."
- **Kategorie:** konzept

---

## Baustein 6: pflegemassnahmen-5w

### Metadaten
- **bausteinId:** pflegeplanung-pflegemassnahmen-5w
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** § 4 PflBG

### Stufe 1 — Denkfrage
- **Frage:** "Im Pflegeplan steht: 'Patient trinken lassen'. Was weiß die Nachtschicht daraus? Was fehlt für eine klar umsetzbare Maßnahme?"
- **Step-Typ:** freetext (Bloom 3)

### Stufe 2 — Hinweis

**C1 (225 Zeichen):** "Pflegemaßnahmen brauchen 5 Angaben: **Wer** führt durch? **Wann** (Uhrzeit, Häufigkeit)? **Wie** (Methode, Technik)? **Wie oft** (täglich, alle 2 Stunden)? **Womit** (Material, Hilfsmittel)? Nur so kann jede Schicht die Maßnahme korrekt ausführen."

**B1 (205 Zeichen):** "Eine Pflegemaßnahme muss 5 Fragen beantworten: **Wer** macht es? **Wann**? **Wie** (welche Methode)? **Wie oft**? **Womit** (welches Hilfsmittel)? Erst dann ist die Maßnahme vollständig und für jede Schicht umsetzbar."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Eine **Pflegemaßnahme** ist nur dann handlungsleitend, wenn alle 5 W-Fragen beantwortet sind:

**Wer** — Welche Berufsgruppe, welche Qualifikation ist zuständig? PflegeFF, Pflegehilfe, Therapeut?
**Wann** — Zu welcher Uhrzeit oder in welchem Rhythmus? '08:00 Uhr', 'vor jeder Mahlzeit', 'alle 2 Stunden'.
**Wie** — Welche Technik oder Methode? 'Basale Stimulation®', 'nach Bobath', 'mit angedickter Flüssigkeit (Stufe 2)'.
**Wie oft** — Häufigkeit pro Tag, pro Schicht, pro Woche.
**Womit** — Welches Hilfsmittel oder Material? 'Trinkgefäß mit Schnabelaufsatz', 'Lagerungsrolle', 'Einmalhandschuhe'.

**Beispiel vollständige Maßnahme:** 'Pflegehilfe bietet Herrn K. täglich 3× (08:00, 12:00, 18:00 Uhr) 300 ml Wasser oder Tee mit einem Schnabelbecher an und dokumentiert die Trinkmenge auf dem Trinkprotokoll.'

Vollständige Maßnahmen sichern Kontinuität auch bei Schichtwechsel."

**B1 (545 Zeichen):**
"Eine Pflegemaßnahme muss 5 Fragen beantworten:

**Wer** — Wer macht es? Pflegefachperson, Pflegehilfe, Ergotherapeutin?
**Wann** — Um wie viel Uhr? Oder wann im Tagesablauf? 'Vor dem Frühstück', '08:00 Uhr'.
**Wie** — Wie genau? Welche Methode? 'Mit angedickter Flüssigkeit', 'nach Bobath'.
**Wie oft** — Wie oft am Tag oder in der Woche?
**Womit** — Mit welchem Hilfsmittel? 'Schnabelbecher', 'Lagerungsrolle'.

**Beispiel:** 'Pflegehilfe bietet Herrn K. täglich 3× (8, 12, 18 Uhr) 300 ml Tee mit Schnabelbecher an.'

So kann jede Schicht die Maßnahme ausführen — auch wenn die Kollegin im Urlaub ist."

- **Erklärungs-Step:** stepType `reveal` (5 W-Karten aufdecken + Vollbeispiel)
- **Glossar-Begriffe:** [Pflegemaßnahme, Kontinuität, Schichtübergabe]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Im Pflegeplan schreibt man nur das Ziel — die Maßnahmen entscheidet jede Schicht selbst"**
- **Fachbegriff:** Maßnahmen-Autonomie-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — die Pflegeplanung ist ein verbindliches Dokument. Maßnahmen müssen dokumentiert sein, damit alle Schichten konsistent arbeiten. Jede Schicht selbst entscheiden zu lassen führt zu unterschiedlicher, nicht abgestimmter Pflege — das ist eine Patientensicherheitsfrage."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — der Pflegeplan ist verbindlich. Wenn jede Schicht selbst entscheidet, macht jede etwas anderes. Das schadet dem Patienten. Maßnahmen müssen schriftlich stehen — das ist Patientensicherheit."

**D2: "Das 'Womit' ist nicht wichtig — das Material ist immer dasselbe"**
- **Fachbegriff:** Material-Unterschätzung
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — das Hilfsmittel (Womit) ist oft entscheidend. Ein Schlucktraining mit normalem Glas vs. mit Schnabelbecher vs. mit angedickte Flüssigkeit macht einen erheblichen Unterschied bei Dysphagierisiko. Die falsche Technik kann zur Aspiration führen."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — das Hilfsmittel ist wichtig. Zum Beispiel: bei Schluckproblemen braucht man einen Schnabelbecher oder andickte Flüssigkeit. Das falsche Hilfsmittel kann gefährlich werden. Deshalb steht das 'Womit' im Pflegeplan."

**D3: "Das 'Wer' ist egal — jede Pflegeperson darf jede Maßnahme ausführen"**
- **Fachbegriff:** Qualifikations-Nivellierung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — die Pflegeplanung ist eine **vorbehaltene Tätigkeit** (§ 4 PflBG). Außerdem gibt es Maßnahmen die nur für bestimmte Qualifikationen geeignet sind: Wundversorgung, Medikamentengabe oder Katheterismus dürfen nicht von unqualifiziertem Personal ausgeführt werden."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — nicht jede Maßnahme darf jede Person ausführen. Die Pflegeplanung ist nur für Pflegefachpersonen. Und manche Maßnahmen (Wundversorgung, Medikamente) darf nur ausgebildetes Personal ausführen. Deshalb steht das 'Wer' im Plan."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Die 5 W-Fragen: Wer (Qualifikation), Wann (Uhrzeit/Rhythmus), Wie (Methode/Technik), Wie oft (Häufigkeit), Womit (Hilfsmittel). Nur vollständige Maßnahmen sind handlungsleitend für alle Schichten und sichern Kontinuität."

**B1 (225 Zeichen):** "Sehr gut. Die 5 W: Wer, Wann, Wie, Wie oft, Womit. Erst wenn alle 5 Fragen beantwortet sind, ist die Maßnahme vollständig. Dann kann jede Schicht sie korrekt ausführen — auch ohne Rückfragen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 W-Fragen muss eine vollständige Pflegemaßnahme beantworten?"
- **Rückseite:** "Wer (führt durch?), Wann (Uhrzeit/Rhythmus?), Wie (Methode/Technik?), Wie oft (Häufigkeit?), Womit (Hilfsmittel/Material?)."
- **Kategorie:** handlung

---

## B7 — med-vs-pflegediagnose

- **Bloom-Stufe:** B4 (Analysieren)
- **themaId:** pflegeplanung
- **Lernziel:** Du kannst den Unterschied zwischen medizinischer Diagnose und Pflegediagnose erklären und begründen, warum beide parallel notwendig sind.
- **Primärquellen:** (NANDA-I, 2021), (§ 4 PflBG)
- **Schlüsselkonzept:** Medizinische Diagnose = stabile Krankheitsdefinition (Arzt), Pflegediagnose = täglich verändernde Reaktion des Patienten (Pflegefachperson)

### Stufe 1 — Denkfrage

**C1 (200 Zeichen):**
"Ein Patient hat die Diagnose 'Herzinsuffizienz'. Der Arzt weiß das. Was weiß die Pflege noch **nicht**, wenn sie nur diese Diagnose kennt?"

**B1 (170 Zeichen):**
"Ein Patient hat 'Herzinsuffizienz'. Das sagt der Arzt. Was fehlt dir als Pflegeperson noch, damit du planen kannst?"

- **Hinweis (C1, 160 Zeichen):** "Überlege: Was verändert sich bei diesem Patienten täglich? Was kann er heute, was konnte er gestern nicht?"
- **Hinweis (B1, 140 Zeichen):** "Denke daran: Wie schläft er? Wie atmet er gerade? Ist er ängstlich? Das steht nicht in der Diagnose."
- **Step-Typ:** text (displayFormat: paragraph)

### Stufe 2 — Erklärtext

**C1 (520 Zeichen):**
"Medizinische Diagnosen und Pflegediagnosen beantworten verschiedene Fragen:

**Medizinische Diagnose (Arzt):** Welche Krankheit liegt vor? — 'Herzinsuffizienz Grad III (NYHA)'. Diese Diagnose bleibt stabil, bis der Befund sich ändert.

**Pflegediagnose (Pflegefachperson):** Wie reagiert **dieser Patient** heute auf seine Krankheit? — 'Eingeschränkte Aktivitätstoleranz, bedingt durch Dyspnoe und Erschöpfung'. Diese Reaktion verändert sich täglich, manchmal stündlich.

Beide Perspektiven sind notwendig — sie ergänzen einander (NANDA-I, 2021)."

**B1 (430 Zeichen):**
"Der Arzt stellt eine Diagnose: 'Herzinsuffizienz'. Das ist die Krankheit — sie bleibt meistens gleich.

Die Pflege fragt: Was macht diese Krankheit **heute** mit dem Patienten? Kann er aufstehen? Schläft er schlecht? Hat er Angst? Das nennt man Pflegediagnose.

Beispiel Pflegediagnose: 'Eingeschränkte Aktivitätstoleranz wegen Atemnot und Erschöpfung.'

Das ändert sich täglich. Deshalb schreibt die Pflege täglich neu (NANDA-I, 2021)."

- **Step-Typ:** text (displayFormat: comparison-table)
- **Glossar-Begriffe:** [Pflegediagnose, medizinische Diagnose, NANDA-I, Aktivitätstoleranz]
- **TTS-relevant:** nein

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"**Medizinische Diagnose** und **Pflegediagnose** sind zwei verschiedene fachliche Perspektiven auf denselben Patienten.

**Medizinische Diagnose:** Stellt der Arzt. Sie beschreibt die Krankheit ('Herzinsuffizienz', 'Diabetes mellitus Typ 2'). Sie ist meist stabil — bis ein neuer Befund vorliegt.

**Pflegediagnose (NANDA-I):** Stellt die Pflegefachperson. Sie beschreibt die **menschliche Reaktion** des Patienten auf die Krankheit — und diese verändert sich täglich: Heute Atemnot, morgen Angst vor dem Schlafen, übermorgen Erschöpfung nach der Körperpflege.

Pflegediagnosen nach NANDA-I folgen dem PÄS-Format: **P**roblem (Was ist das Problem?) — **Ä**tiologie (Warum?) — **S**ymptome (Woran erkennst du es?).

Nur wer beide Perspektiven kennt, kann vollständig pflegen (NANDA-I, 2021; § 4 PflBG)."

**B1 (550 Zeichen):**
"**Medizinische Diagnose** = Arzt sagt: 'Diese Krankheit hast du.' Sie bleibt meistens gleich.

**Pflegediagnose** = Pflegefachperson sagt: 'So reagierst du heute auf deine Krankheit.' Das ändert sich täglich.

Beispiel Patient mit Herzinsuffizienz:
- Arzt: 'Herzinsuffizienz Grad III'
- Pflege heute: 'Eingeschränkte Aktivitätstoleranz — Atemnot beim Aufstehen'
- Pflege morgen: 'Angst und Schlafstörung durch Atemnot nachts'

Pflegediagnosen nach NANDA-I haben 3 Teile: Problem + warum (Ursache) + Zeichen. Beide Diagnosen braucht man (NANDA-I, 2021)."

- **Erklärungs-Step:** stepType `reveal` (Arzt-Karte vs. Pflege-Karte aufdecken + PÄS-Format)
- **Glossar-Begriffe:** [Pflegediagnose, NANDA-I, PÄS-Format, menschliche Reaktion, Ätiologie]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Pflegediagnose und medizinische Diagnose sind dasselbe — nur mit anderen Worten"**
- **Fachbegriff:** Diagnose-Gleichsetzungsfehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — sie haben unterschiedliche Perspektiven. Die medizinische Diagnose beschreibt die Krankheit, die Pflegediagnose beschreibt die menschliche Reaktion des Patienten darauf. Dieselbe Krankheit kann bei zwei Patienten zu völlig verschiedenen Pflegediagnosen führen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — das sind zwei verschiedene Dinge. Die ärztliche Diagnose beschreibt die Krankheit. Die Pflegediagnose beschreibt, wie der Patient reagiert. Zwei Patienten mit derselben Krankheit können sehr unterschiedliche Pflegediagnosen haben."

**D2: "Wenn der Arzt eine Diagnose stellt, braucht die Pflege keine eigene Diagnose"**
- **Fachbegriff:** Delegations-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — Pflegediagnosen sind eine eigenständige fachliche Leistung der Pflegefachperson (§ 4 PflBG). Die ärztliche Diagnose sagt, was die Krankheit ist. Die Pflegediagnose sagt, wie der Patient heute damit umgeht und was er braucht. Das kann der Arzt nicht für die Pflege beurteilen."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — die Pflegediagnose ist Aufgabe der Pflegeperson, nicht des Arztes (§ 4 PflBG). Der Arzt sagt, was die Krankheit ist. Die Pflege sagt, was der Patient heute braucht. Das sind zwei verschiedene Fachurteile — beide notwendig."

**D3: "Pflegediagnosen bleiben wie medizinische Diagnosen wochenlang gleich"**
- **Fachbegriff:** Statik-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — Pflegediagnosen müssen regelmäßig evaluiert werden, mindestens einmal pro Dienst. Die Reaktion des Patienten auf seine Krankheit verändert sich täglich: Heute Atemnot, morgen Ödeme, übermorgen Angst. Ein unveränderter Pflegeplan nach 3 Tagen ist meistens veraltet."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Pflegediagnosen ändern sich täglich. Die Reaktion des Patienten ist heute anders als morgen. Deshalb muss die Pflege regelmäßig evaluieren und den Plan anpassen. Ein Plan der 3 Tage lang unverändert bleibt, ist meist nicht mehr aktuell."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Die medizinische Diagnose (Arzt) beschreibt die stabile Krankheit. Die Pflegediagnose (Pflegefachperson) beschreibt die täglich wechselnde menschliche Reaktion des Patienten. Beide Perspektiven sind notwendig und ergänzen einander (NANDA-I, 2021)."

**B1 (225 Zeichen):** "Sehr gut. Arzt = Krankheit (stabil). Pflege = Reaktion des Patienten (täglich verändernd). Zum Beispiel: Herzinsuffizienz bleibt, aber Atemnot, Angst und Erschöpfung wechseln täglich. Deshalb braucht die Pflege ihre eigenen Diagnosen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen medizinischer Diagnose und Pflegediagnose?"
- **Rückseite:** "Medizinische Diagnose (Arzt): beschreibt die Krankheit — stabil. Pflegediagnose (Pflegefachperson): beschreibt die menschliche Reaktion des Patienten — verändert sich täglich."
- **Kategorie:** konzept

---

## B8 — vorbehaltene-taetigkeit-planung

- **Bloom-Stufe:** B3 (Anwenden)
- **themaId:** pflegeplanung
- **Lernziel:** Du weißt, dass die Pflegeplanung eine vorbehaltene Tätigkeit nach § 4 PflBG ist, und kannst begründen, warum nur Pflegefachpersonen planen dürfen.
- **Primärquellen:** (§ 4 PflBG)
- **Schlüsselkonzept:** Planung, Steuerung und Evaluation des Pflegeprozesses sind ausschließlich Pflegefachpersonen vorbehalten — nicht delegierbar an Pflegehilfskräfte

### Stufe 1 — Denkfrage

**C1 (200 Zeichen):**
"Eine Pflegehilfe arbeitet seit 10 Jahren auf der Station. Sie kennt alle Patienten. Darf sie die Pflegeplanung für eine neue Patientin eigenständig erstellen? Begründe."

**B1 (170 Zeichen):**
"Eine Pflegehilfe ist sehr erfahren. Darf sie den Pflegeplan selbst schreiben? Was meinst du — und warum?"

- **Hinweis (C1, 160 Zeichen):** "Überlege: Welche Aufgaben sind im Pflegeberufegesetz nur für Pflegefachpersonen vorgesehen? Was bedeutet 'vorbehaltene Tätigkeit'?"
- **Hinweis (B1, 140 Zeichen):** "Denke an das Gesetz: Manche Aufgaben darf nur ausgebildetes Pflegepersonal übernehmen. Was sagt das Gesetz zur Pflegeplanung?"
- **Step-Typ:** text (displayFormat: paragraph)

### Stufe 2 — Erklärtext

**C1 (520 Zeichen):**
"Das **Pflegeberufegesetz (§ 4 PflBG)** definiert drei vorbehaltene Tätigkeiten, die ausschließlich Pflegefachpersonen ausführen dürfen:

1. **Erheben** des Pflegebedarfs (Assessment)
2. **Planen, Organisieren, Steuern** des Pflegeprozesses
3. **Evaluieren** der Pflege

Die Pflegehilfe darf die Pflegemaßnahmen **durchführen** — aber nicht planen oder bewerten. Auch 10 Jahre Berufserfahrung ändern das nicht: Es ist eine gesetzliche Regelung zum Schutz der Patienten.

Die Pflegefachperson trägt die Verantwortung und kann Aufgaben delegieren — aber die Planung bleibt bei ihr (§ 4 PflBG)."

**B1 (430 Zeichen):**
"Das Gesetz (§ 4 PflBG) sagt: Nur Pflegefachpersonen dürfen den Pflegeplan erstellen.

Was darf nur die Pflegefachperson?
- Den Pflegebedarf einschätzen
- Den Pflegeplan schreiben und steuern
- Die Pflege bewerten (Evaluation)

Was darf die Pflegehilfe?
- Die geplanten Maßnahmen durchführen

Das gilt immer — auch wenn die Pflegehilfe sehr erfahren ist. Erfahrung ersetzt keine Ausbildung und keine gesetzliche Berechtigung (§ 4 PflBG)."

- **Step-Typ:** text (displayFormat: checklist)
- **Glossar-Begriffe:** [vorbehaltene Tätigkeit, PflBG, Pflegefachperson, Delegation]
- **TTS-relevant:** nein

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"**Vorbehaltene Tätigkeiten** nach § 4 PflBG sind Aufgaben, die so fachlich anspruchsvoll sind, dass der Gesetzgeber sie ausschließlich Pflegefachpersonen vorbehält — unabhängig von Erfahrung oder Einrichtung.

Die drei vorbehaltenen Tätigkeiten:
**1. Erheben des Pflegebedarfs** — systematisches Assessment (z.B. mit standardisierten Skalen wie der Braden-Skala)
**2. Planen, Organisieren, Steuern** — Pflegeprozess-Steuerung inklusive Pflegediagnosen und Maßnahmenplanung
**3. Evaluieren** — Beurteilen ob die Pflege gewirkt hat, Anpassen des Plans

**Warum nicht delegierbar?** Weil Fehler in der Planung direkt die Patientensicherheit gefährden. Wer plant, trägt die fachliche Verantwortung — und diese Verantwortung kann nur tragen, wer eine entsprechende Ausbildung hat.

Pflegehilfen können nach Anweisung handeln — sie können aber die Anweisung nicht selbst erstellen (§ 4 PflBG)."

**B1 (550 Zeichen):**
"§ 4 PflBG sagt klar: Diese Aufgaben darf nur die Pflegefachperson:

**1. Einschätzen** — Wie viel und welche Pflege braucht der Patient?
**2. Planen** — Was wird gemacht? Wann? Von wem? Wie?
**3. Bewerten** — Hat die Pflege geholfen? Was muss geändert werden?

Das nennt man **vorbehaltene Tätigkeiten**. Sie sind dem Gesetz nach reserviert für Personen mit abgeschlossener Pflegeausbildung.

Eine Pflegehilfe — auch eine sehr erfahrene — darf die Maßnahmen durchführen, aber nicht den Plan erstellen. Warum? Weil die Planung Verantwortung für die Patientensicherheit bedeutet (§ 4 PflBG)."

- **Erklärungs-Step:** stepType `reveal` (3 vorbehaltene Tätigkeiten aufdecken + Beispiel Pflegehilfe)
- **Glossar-Begriffe:** [vorbehaltene Tätigkeit, § 4 PflBG, Delegation, Pflegehilfe, Pflegefachperson]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Erfahrene Pflegehilfen dürfen selbst planen — Erfahrung zählt mehr als der Abschluss"**
- **Fachbegriff:** Erfahrungs-Kompetenz-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — § 4 PflBG ist eine gesetzliche Regelung, kein Ermessensspielraum. Erfahrung ist wertvoll, aber sie ersetzt keine Ausbildung und keine gesetzliche Berechtigung. Die Planung bleibt vorbehaltene Tätigkeit — auch nach 20 Jahren Berufserfahrung als Pflegehilfe."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das Gesetz (§ 4 PflBG) gilt für alle. Auch mit viel Erfahrung darf die Pflegehilfe nicht planen. Erfahrung ist wichtig — aber sie macht aus der Pflegehilfe keine Pflegefachperson. Die Planung ist und bleibt Aufgabe der Fachperson."

**D2: "Die Pflegefachperson kann die Pflegeplanung vollständig an die Pflegehilfe delegieren"**
- **Fachbegriff:** Delegations-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — vorbehaltene Tätigkeiten sind per Definition nicht delegierbar. Die Pflegefachperson kann Maßnahmen delegieren — aber nicht die Planung selbst. Wenn sie die Planung delegiert, verletzt sie § 4 PflBG und trägt trotzdem die Verantwortung für mögliche Schäden."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — 'vorbehalten' bedeutet: diese Aufgabe kann nicht weitergegeben werden. Die Pflegefachperson kann Pflegehilfen anweisen Maßnahmen durchzuführen. Aber den Plan erstellen muss sie selbst. Das ist Gesetz (§ 4 PflBG)."

**D3: "Vorbehaltene Tätigkeiten sind nur eine Empfehlung — in der Praxis macht jeder was er kann"**
- **Fachbegriff:** Gesetzlichkeits-Relativierung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — § 4 PflBG ist verbindliches Bundesrecht, keine Empfehlung. Wird dagegen verstoßen, drohen rechtliche Konsequenzen — für die Pflegehilfe, die plant, und für die Pflegefachperson, die das zulässt. In der Praxis passiert es leider, aber es bleibt ein Rechtsverstoß."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — das Pflegeberufegesetz ist ein Bundesgesetz. Es gilt immer. Wenn die Pflegehilfe trotzdem plant, ist das ein Rechtsverstoß — auch wenn es in manchen Einrichtungen so gemacht wird. 'In der Praxis üblich' bedeutet nicht 'erlaubt'."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Die Pflegeplanung ist eine vorbehaltene Tätigkeit nach § 4 PflBG. Nur Pflegefachpersonen dürfen einschätzen, planen, steuern und evaluieren — unabhängig von Erfahrung. Erfahrung ist wertvoll, ersetzt aber weder Ausbildung noch gesetzliche Berechtigung."

**B1 (225 Zeichen):** "Sehr gut. § 4 PflBG sagt: Nur Pflegefachpersonen dürfen den Pflegeplan erstellen. Das gilt immer — auch für sehr erfahrene Pflegehilfen. Planung bedeutet Verantwortung, und Verantwortung braucht eine abgeschlossene Ausbildung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 3 vorbehaltenen Tätigkeiten dürfen nur Pflegefachpersonen ausführen (§ 4 PflBG)?"
- **Rückseite:** "1. Pflegebedarf erheben (Assessment), 2. Pflegeprozess planen, steuern, organisieren, 3. Pflege evaluieren."
- **Kategorie:** recht

---

## B9 — pflegemodell-orem

- **Bloom-Stufe:** B4 (Analysieren)
- **themaId:** pflegeplanung
- **Lernziel:** Du kannst die Selbstpflegedefizit-Theorie nach Orem erklären und die drei Pflegesysteme (Wholly/Partly/Supportive-Educative Compensatory) einem Patientenbeispiel zuordnen.
- **Primärquellen:** (Orem, Self-Care Deficit Theory, 1971)
- **Schlüsselkonzept:** Pflege ist notwendig, wenn der Patient ein Selbstpflegedefizit hat — die Pflegefachperson gleicht die Lücke zwischen Selbstpflegefähigkeit und Selbstpflegeanforderung aus

### Stufe 1 — Denkfrage

**C1 (200 Zeichen):**
"Ein Patient nach Schlaganfall kann sich nicht mehr waschen. Ein anderer Patient nach OP kann sich selbst waschen, braucht aber jemanden der ihm erklärt wie er die Wunde trocken hält. Was unterscheidet die Pflege bei diesen beiden?"

**B1 (170 Zeichen):**
"Ein Patient kann sich gar nicht mehr selbst pflegen. Ein anderer braucht nur Erklärungen. Wie unterscheidet sich deine Aufgabe als Pflegeperson?"

- **Hinweis (C1, 160 Zeichen):** "Überlege: Was kann der Patient selbst? Was kann er nicht? Welche Lücke muss die Pflege füllen? Das ist der Kern von Orems Theorie."
- **Hinweis (B1, 140 Zeichen):** "Denke daran: Pflege hilft dort, wo der Patient nicht mehr selbst kann. Wie viel Hilfe braucht jeder der beiden Patienten?"
- **Step-Typ:** text (displayFormat: paragraph)

### Stufe 2 — Erklärtext

**C1 (520 Zeichen):**
"Dorothea Orem entwickelte die **Selbstpflegedefizit-Theorie** (1971): Pflege ist dann notwendig, wenn ein Mensch ein **Selbstpflegedefizit** hat — wenn seine Fähigkeit zur Selbstpflege geringer ist als die Anforderungen an ihn.

Orem beschreibt **drei Pflegesysteme:**

**1. Wholly Compensatory (vollständig kompensierend):** Patient kann sich gar nicht selbst pflegen — Pflege übernimmt alles.
**2. Partly Compensatory (teilweise kompensierend):** Patient kann manches selbst — Pflege ergänzt das Fehlende.
**3. Supportive-Educative (unterstützend-anleitend):** Patient kann sich selbst pflegen — braucht aber Anleitung oder Wissen (Orem, 1971)."

**B1 (430 Zeichen):**
"Dorothea Orem hat eine wichtige Idee entwickelt (1971): Pflege ist notwendig, wenn jemand sich nicht mehr selbst helfen kann.

Sie nennt das **Selbstpflegedefizit** — die Lücke zwischen dem was jemand kann und dem was er braucht.

Es gibt 3 Stufen von Pflege:
**1. Vollständig übernehmend** — der Patient kann gar nichts selbst.
**2. Teilweise übernehmend** — der Patient kann manches, die Pflege ergänzt.
**3. Anleitend** — der Patient kann alles, braucht aber Erklärungen.

So wählt die Pflege wie viel sie übernimmt (Orem, 1971)."

- **Step-Typ:** text (displayFormat: comparison-table)
- **Glossar-Begriffe:** [Selbstpflegedefizit, Selbstpflegedefizit-Theorie, Pflegesystem, Orem]
- **TTS-relevant:** nein

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"**Dorothea Orem (1971)** formulierte die Selbstpflegedefizit-Theorie als Grundlage für professionelle Pflege. Kernaussage: Pflege ist eine menschliche Dienstleistung, die nur dann notwendig ist, wenn ein **Selbstpflegedefizit** besteht.

**Selbstpflegedefizit** = Selbstpflegeanforderung übersteigt die Selbstpflegekompetenz.

Die drei Pflegesysteme nach Orem:
**1. Wholly Compensatory System:** Pflege übernimmt alles — Patient ist passiv (z.B. komatöser Patient, Intensivpflege).
**2. Partly Compensatory System:** Patient und Pflege teilen sich Aufgaben — Patient tut was er kann (z.B. wäscht Gesicht selbst, Pflege wäscht Rücken).
**3. Supportive-Educative System:** Patient führt Selbstpflege durch — Pflege berät, lehrt, leitet an (z.B. Diabetesschulung, Wundversorgung zu Hause).

Das Pflegesystem wählt die Pflegefachperson je nach Assessment — und passt es täglich an (Orem, Self-Care Deficit Theory, 1971)."

**B1 (550 Zeichen):**
"**Dorothea Orem** (1971) hat beschrieben, warum Menschen Pflege brauchen: weil sie manchmal nicht mehr für sich selbst sorgen können.

Das nennt sie **Selbstpflegedefizit**: Was jemand braucht ist größer als das was er selbst kann.

Die 3 Pflegesysteme:
**1. Völlig übernehmend** — Patient kann nichts. Pflege macht alles.
   → Beispiel: Patient nach Schlaganfall, vollständig pflegebedürftig.
**2. Teilweise übernehmend** — Patient kann manches. Pflege hilft wo nötig.
   → Beispiel: Patient wäscht Hände selbst, Pflege hilft beim Rücken.
**3. Anleitend** — Patient kann alles, braucht aber Erklärungen.
   → Beispiel: Patient lernt Wundversorgung für zu Hause.

Die Pflegefachperson wählt das richtige System nach Einschätzung (Orem, 1971)."

- **Erklärungs-Step:** stepType `reveal` (3 Orem-Systeme als Karten mit Beispiel aufdecken)
- **Glossar-Begriffe:** [Selbstpflegedefizit, Wholly Compensatory, Partly Compensatory, Supportive-Educative, Orem]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Nach Orem soll Pflege immer alles übernehmen — das ist professionell"**
- **Fachbegriff:** Überversorgungsirrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Orem betont das Gegenteil: Pflege übernimmt nur was notwendig ist. Wenn ein Patient sich selbst waschen kann, soll er das tun — Pflege fördert Selbstpflegekompetenz, sie ersetzt sie nicht. Alles zu übernehmen würde die Selbstständigkeit des Patienten untergraben."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Orem sagt: Pflege hilft nur dort, wo es nötig ist. Wenn der Patient etwas selbst kann, soll er es selbst machen. Das ist gut für ihn — es erhält seine Selbstständigkeit. Alles abnehmen ist nicht professionell, es schadet dem Patienten."

**D2: "Das Pflegesystem bleibt beim selben Patienten immer gleich"**
- **Fachbegriff:** Statik-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — das Pflegesystem verändert sich mit dem Zustand des Patienten. Ein Patient kann nach einer OP zunächst 'Wholly Compensatory' brauchen — und nach einer Woche schon 'Partly Compensatory'. Das System muss regelmäßig neu eingeschätzt und angepasst werden."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — das Pflegesystem ändert sich. Ein Patient braucht nach der OP vielleicht alles. Eine Woche später kann er schon manches selbst. Die Pflegeperson muss regelmäßig einschätzen: Wie viel Hilfe braucht er gerade noch?"

**D3: "Orems Theorie gilt nur für körperliche Pflege — nicht für psychische Aspekte"**
- **Fachbegriff:** Reduktions-Fehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Orem beschreibt Selbstpflege umfassend: auch Umgang mit Diagnosen, Therapien verstehen, soziale Teilhabe. Das Supportive-Educative System zielt genau auf Aufklärung und Befähigung ab — das geht weit über körperliche Pflege hinaus."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Orem meint nicht nur Waschen und Essen. Selbstpflege bedeutet auch: mit der Krankheit umgehen, Medikamente kennen, Hilfe holen. Das anleitende Pflegesystem hilft genau dabei."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Orem beschreibt drei Pflegesysteme: Wholly Compensatory (Pflege übernimmt alles), Partly Compensatory (Pflege ergänzt), Supportive-Educative (Pflege berät und lehrt). Das System richtet sich nach dem Selbstpflegedefizit des Patienten und verändert sich täglich."

**B1 (225 Zeichen):** "Sehr gut. Orem hat 3 Stufen: Pflege macht alles / Pflege hilft wo nötig / Pflege erklärt nur. Welche Stufe die richtige ist, hängt davon ab was der Patient noch selbst kann — und das ändert sich."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist das Selbstpflegedefizit nach Orem, und welche 3 Pflegesysteme gibt es?"
- **Rückseite:** "Selbstpflegedefizit = Anforderung > Kompetenz. 3 Systeme: 1. Wholly Compensatory (Pflege übernimmt alles), 2. Partly Compensatory (Pflege ergänzt), 3. Supportive-Educative (Pflege berät/lehrt). (Orem, 1971)"
- **Kategorie:** konzept

---

## B10 — pflegemodell-krohwinkel

- **Bloom-Stufe:** B4 (Analysieren)
- **themaId:** pflegeplanung
- **Lernziel:** Du kannst die 13 ABEDLs nach Krohwinkel benennen und an einem Patientenbeispiel anwenden.
- **Primärquellen:** (Krohwinkel, 1993 ABEDL)
- **Schlüsselkonzept:** 13 Aktivitäten, Beziehungen und Existenzielle Erfahrungen des Lebens (ABEDLs) — strukturieren Pflegeassessment und -planung ganzheitlich

### Stufe 1 — Denkfrage

**C1 (200 Zeichen):**
"Eine ältere Frau kommt nach einem Sturz ins Krankenhaus. Sie ist körperlich noch fit — aber sie schläft kaum, isst wenig und sagt: 'Ich hab niemanden mehr.' Wie strukturierst du deine Pflegeplanung für sie?"

**B1 (170 Zeichen):**
"Eine Patientin ist nach einem Sturz im Krankenhaus. Sie ist körperlich okay, aber schläft schlecht und fühlt sich einsam. Was berücksichtigst du bei der Pflegeplanung?"

- **Hinweis (C1, 160 Zeichen):** "Überlege: Was gehört alles zum Leben — nicht nur der Körper. Wie würde ein Modell aussehen, das auch Schlaf, Beziehungen und Sinn erfasst?"
- **Hinweis (B1, 140 Zeichen):** "Denke nicht nur an körperliche Pflege. Was braucht ein Mensch noch — außer Essen, Trinken und Schlafen?"
- **Step-Typ:** text (displayFormat: paragraph)

### Stufe 2 — Erklärtext

**C1 (520 Zeichen):**
"Monika Krohwinkel entwickelte 1993 das ABEDL-Modell: **Aktivitäten und existenzielle Erfahrungen des Lebens**.

Die **13 ABEDLs** strukturieren das Pflegeassessment ganzheitlich — körperlich, psychisch und sozial:

1. Kommunizieren, 2. Sich bewegen, 3. Vitale Funktionen aufrechterhalten, 4. Sich pflegen, 5. Essen und Trinken, 6. Ausscheiden, 7. Sich kleiden, 8. Ruhen und Schlafen, 9. Beschäftigen und Entspannen, 10. Die eigene Sexualität leben, 11. Für eine sichere Umgebung sorgen, 12. Soziale Bereiche des Lebens sichern, 13. Mit existenziellen Erfahrungen umgehen (Krohwinkel, 1993)."

**B1 (430 Zeichen):**
"Monika Krohwinkel hat 1993 beschrieben: Menschen haben 13 wichtige Lebensbereiche.

Diese 13 Bereiche heißen **ABEDLs**:
1. Kommunizieren
2. Sich bewegen
3. Atmung und Kreislauf
4. Sich pflegen
5. Essen und Trinken
6. Ausscheiden
7. Sich kleiden
8. Ruhen und Schlafen
9. Beschäftigen und Entspannen
10. Sexualität
11. Sichere Umgebung
12. Soziale Kontakte
13. Sinn und existenzielle Erfahrungen

Die Pflege schaut bei jedem dieser 13 Bereiche: Gibt es ein Problem? Was kann der Patient selbst? (Krohwinkel, 1993)"

- **Step-Typ:** text (displayFormat: numbered-list)
- **Glossar-Begriffe:** [ABEDL, Krohwinkel, ganzheitliche Pflege, existenzielle Erfahrungen]
- **TTS-relevant:** nein

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"**Monika Krohwinkel (1993)** entwickelte das ABEDL-Modell als umfassendes Pflegekonzept. Das Kürzel steht für: **A**ktivitäten, **B**eziehungen und **E**xistenzielle **E**rfahrungen **d**es **L**ebens.

Die 13 ABEDLs erfassen den Menschen ganzheitlich — körperlich, psychisch, sozial und spirituell:

**Körperlich:** Sich bewegen, Vitale Funktionen, Sich pflegen, Essen/Trinken, Ausscheiden, Sich kleiden, Ruhen/Schlafen
**Psycho-sozial:** Kommunizieren, Beschäftigen/Entspannen, Sexualität leben, Soziale Bereiche sichern
**Existenziell:** Für sichere Umgebung sorgen, Mit existenziellen Erfahrungen des Lebens umgehen (Sterben, Verlust, Sinn)

**Ressourcen und Probleme:** Bei jeder ABEDL werden Ressourcen (was kann die Person?) und Probleme (was kann sie nicht?) erfasst. Das macht Krohwinkel zu einem ressourcenorientierten Modell.

In der Praxis: Das ABEDL-Modell ist in Deutschland das am weitesten verbreitete Pflegemodell in der stationären Altenpflege (Krohwinkel, 1993 ABEDL)."

**B1 (550 Zeichen):**
"**Monika Krohwinkel (1993)** hat gezeigt: Menschen brauchen mehr als nur körperliche Pflege.

**ABEDL** steht für: Aktivitäten, Beziehungen und Existenzielle Erfahrungen des Lebens.

Die 13 ABEDLs — vereinfacht:
**Körper:** Bewegen, Atmen, Waschen, Essen, Trinken, Ausscheiden, Schlafen, Anziehen
**Soziales:** Reden, Kontakte pflegen, Freizeit gestalten
**Sinn:** Sexualität, sichere Umgebung, Sterben und Verlust

Bei jeder ABEDL fragt die Pflegeperson:
- Was kann der Patient noch selbst? (Ressource)
- Wobei braucht er Hilfe? (Problem)

Das macht die Pflege **ganzheitlich** (Krohwinkel, 1993)."

- **Erklärungs-Step:** stepType `matching` (13 ABEDLs den 3 Kategorien Körper/Soziales/Sinn zuordnen)
- **Glossar-Begriffe:** [ABEDL, Krohwinkel, ganzheitliche Pflege, Ressourcen, existenzielle Erfahrungen, Pflegemodell]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "ABEDL und ATL (Aktivitäten des täglichen Lebens) sind dasselbe"**
- **Fachbegriff:** Modell-Verwechslung
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — ABEDLs und ATLs ähneln sich, stammen aber aus verschiedenen Modellen. ATL (12 Aktivitäten) stammt von Roper, Logan und Tierney. ABEDLs (13) stammen von Krohwinkel und ergänzen die Aktivitäten um Beziehungen und existenzielle Erfahrungen — das ist ein wesentlicher Unterschied."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — ABEDLs (Krohwinkel) und ATLs (Roper/Logan/Tierney) sind ähnlich aber nicht gleich. ABEDLs haben 13 Bereiche und enthalten auch Beziehungen und Sinnfragen. ATLs haben 12 Bereiche. Beide sind Pflegemodelle — aber von verschiedenen Autorinnen."

**D2: "Das ABEDL-Modell ist rein körperlich orientiert"**
- **Fachbegriff:** Reduktions-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — das ist gerade das Besondere am ABEDL-Modell: Es geht bewusst über körperliche Aktivitäten hinaus. Beziehungen (soziale Kontakte, Sexualität) und existenzielle Erfahrungen (Sterben, Verlust, Sinn) sind explizit Teil des Modells."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Krohwinkel hat das Modell gerade deshalb entwickelt, weil Pflege mehr ist als Körperpflege. Auch Beziehungen, Freizeitgestaltung und Sinnfragen gehören dazu. Das ist der ganzheitliche Ansatz."

**D3: "Bei der Pflegeplanung nach ABEDLs schaut man nur auf Probleme, nicht auf Stärken"**
- **Fachbegriff:** Defizit-Fokus-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — das ABEDL-Modell ist ausdrücklich ressourcenorientiert. Bei jeder ABEDL werden sowohl Probleme als auch Ressourcen erfasst: Was kann die Person noch? Was macht sie selbst? Ressourcen sind der Ausgangspunkt — Defizite werden nur dort bearbeitet, wo sie wirklich bestehen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Krohwinkel schaut bei jedem Bereich auf beides: Was kann der Patient noch selbst? Und wobei braucht er Hilfe? Die Ressourcen (Stärken) sind genauso wichtig wie die Probleme. Das ist der ressourcenorientierte Ansatz."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Die 13 ABEDLs nach Krohwinkel erfassen den Menschen ganzheitlich — körperlich, psycho-sozial und existenziell. Bei jeder ABEDL werden Ressourcen und Probleme erfasst. Das ABEDL-Modell ist in der deutschen Altenpflege weit verbreitet (Krohwinkel, 1993)."

**B1 (225 Zeichen):** "Sehr gut. 13 ABEDLs nach Krohwinkel — Körper, Soziales, Sinn. Bei jedem Bereich: Was kann der Patient noch (Ressource)? Wo braucht er Hilfe (Problem)? Das ist ganzheitliche Pflege."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wofür steht ABEDL und von wem stammt das Modell?"
- **Rückseite:** "ABEDL = Aktivitäten, Beziehungen und Existenzielle Erfahrungen des Lebens. 13 Bereiche. Entwickelt von Monika Krohwinkel (1993). Ganzheitlich: körperlich + psycho-sozial + existenziell."
- **Kategorie:** konzept

---

## B11 — pflegemodell-roper-logan-tierney

- **Bloom-Stufe:** B4 (Analysieren)
- **themaId:** pflegeplanung
- **Lernziel:** Du kannst die 12 Lebensaktivitäten nach Roper/Logan/Tierney benennen und das Abhängigkeits-Unabhängigkeits-Kontinuum erklären.
- **Primärquellen:** (Roper/Logan/Tierney, 1980)
- **Schlüsselkonzept:** 12 Lebensaktivitäten (Activities of Living) auf einem Kontinuum zwischen Abhängigkeit und Unabhängigkeit — Pflege fördert Unabhängigkeit

### Stufe 1 — Denkfrage

**C1 (200 Zeichen):**
"Ein Patient kann nach einer Hüft-OP heute noch nicht alleine laufen, schafft es aber, selbst zu essen und zu trinken. Wie hilft das dir bei der Pflegeplanung? Was nützt dir das Wissen über sein Kontinuum?"

**B1 (170 Zeichen):**
"Ein Patient kann nach einer OP nicht alleine laufen, aber selbst essen. Warum ist es wichtig, das genau zu wissen? Was ändert das an deiner Planung?"

- **Hinweis (C1, 160 Zeichen):** "Überlege: Wenn du weißt was jemand noch kann, weißt du auch was du nicht übernehmen musst. Pflege soll Unabhängigkeit fördern — nicht ersetzen."
- **Hinweis (B1, 140 Zeichen):** "Denke daran: Was der Patient selbst kann, soll er selbst tun. Du hilfst nur dort, wo er wirklich Hilfe braucht."
- **Step-Typ:** text (displayFormat: paragraph)

### Stufe 2 — Erklärtext

**C1 (520 Zeichen):**
"Nancy Roper, Winifred Logan und Alison Tierney entwickelten 1980 ein Pflegemodell auf Basis von **12 Lebensaktivitäten (Activities of Living)**:

1. Wach sein und schlafen, 2. Kommunizieren, 3. Atmen, 4. Essen und Trinken, 5. Ausscheiden, 6. Sich sauber halten und kleiden, 7. Körpertemperatur regulieren, 8. Sich bewegen, 9. Arbeiten und Spielen, 10. Sexualität ausdrücken, 11. Schlafen, 12. Sterben

Jede Aktivität liegt auf einem **Abhängigkeits-Unabhängigkeits-Kontinuum**: 0% Unabhängigkeit (vollständig abhängig) bis 100% Unabhängigkeit. Ziel der Pflege: den Patienten auf dem Kontinuum Richtung Unabhängigkeit bewegen (Roper/Logan/Tierney, 1980)."

**B1 (430 Zeichen):**
"Roper, Logan und Tierney (1980) haben 12 Lebensaktivitäten beschrieben — Dinge die jeder Mensch braucht:

1. Schlafen/Wach sein, 2. Sprechen und Verstehen, 3. Atmen, 4. Essen, 5. Trinken, 6. Ausscheiden, 7. Waschen/Kleiden, 8. Temperatur halten, 9. Sich bewegen, 10. Arbeiten und Freizeit, 11. Sexualität, 12. Sterben

Für jede dieser Aktivitäten gilt: Wie selbständig ist der Patient? Ganz allein? Mit etwas Hilfe? Gar nicht ohne Hilfe?

Das nennen sie das **Kontinuum** von Abhängigkeit bis Unabhängigkeit (Roper/Logan/Tierney, 1980)."

- **Step-Typ:** text (displayFormat: numbered-list)
- **Glossar-Begriffe:** [Lebensaktivitäten, ATL, Kontinuum, Abhängigkeit, Unabhängigkeit, Roper/Logan/Tierney]
- **TTS-relevant:** nein

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"**Roper, Logan und Tierney (1980)** entwickelten ein Pflegemodell, das auf zwei Kernideen basiert:

**1. Die 12 Lebensaktivitäten (Activities of Living / ATLs):**
Atmen, Essen und Trinken, Ausscheiden, Körperpflege, Sich kleiden, Körpertemperatur regulieren, Sich bewegen, Arbeiten und Spielen, Sexualität ausdrücken, Schlafen, Sterben, Kommunizieren.

**2. Das Abhängigkeits-Unabhängigkeits-Kontinuum:**
Jede Lebensaktivität liegt auf einem Spektrum von vollständiger Abhängigkeit (0%) bis vollständiger Unabhängigkeit (100%). Der gleiche Patient kann bei 'Essen' 90% unabhängig sein, bei 'Sich bewegen' aber nur 20%.

**Ziel der Pflege:** Den Patienten bei jeder Lebensaktivität so weit wie möglich Richtung Unabhängigkeit zu bewegen — oder eine würdevolle Abhängigkeit zu ermöglichen (z.B. beim Sterben).

Das Modell ist in der UK-Pflege sehr verbreitet und beeinflusst die deutschsprachige Pflegetheorie (Roper/Logan/Tierney, 1980)."

**B1 (550 Zeichen):**
"**Roper, Logan und Tierney (1980)** haben gezeigt: Jeder Mensch hat 12 wichtige Aktivitäten im Leben.

Die 12 ATLs (Lebensaktivitäten) — verkürzt:
Atmen, Essen, Trinken, Ausscheiden, Waschen, Anziehen, Temperatur halten, Bewegen, Schlafen, Sexualität, Arbeiten/Freizeit, Sterben, Kommunizieren.

Für jede Aktivität gibt es ein **Kontinuum**: von 'kann es alleine' bis 'braucht für alles Hilfe'.

Beispiel Patient nach Hüft-OP:
- Essen: 90% selbständig ✓
- Sich bewegen: 20% selbständig — hier braucht er Unterstützung

Die Pflege hilft genau da, wo er auf dem Kontinuum schwach ist (Roper/Logan/Tierney, 1980)."

- **Erklärungs-Step:** stepType `matching` (Patientenbeispiele dem richtigen Kontinuum-Punkt zuordnen)
- **Glossar-Begriffe:** [ATL, Lebensaktivitäten, Kontinuum, Abhängigkeit, Unabhängigkeit, Roper/Logan/Tierney, Pflegemodell]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "ATL (Roper) und ABEDL (Krohwinkel) sind dasselbe Modell"**
- **Fachbegriff:** Modell-Verwechslung
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — beide Modelle ähneln sich, sind aber eigenständig. ATLs (12 Aktivitäten, Roper/Logan/Tierney, 1980) stammen aus Großbritannien und betonen das Abhängigkeits-Unabhängigkeits-Kontinuum. ABEDLs (13 Bereiche, Krohwinkel, 1993) kommen aus Deutschland und betonen zusätzlich Beziehungen und existenzielle Erfahrungen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — ähnlich aber nicht gleich. ATLs (Roper, 1980): 12 Aktivitäten, britisches Modell, mit Kontinuum. ABEDLs (Krohwinkel, 1993): 13 Bereiche, deutsches Modell, mit Beziehungen und Sinn. Beide sind Pflegemodelle — aber von verschiedenen Autorinnen."

**D2: "Das Ziel der Pflege nach Roper ist immer vollständige Unabhängigkeit"**
- **Fachbegriff:** Ziel-Absolutismus
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — das Ziel ist, den Patienten so weit wie möglich Richtung Unabhängigkeit zu begleiten. Aber bei manchen Patienten (z.B. schwer demenziell erkrankte Menschen, Sterbende) ist Unabhängigkeit nicht das Ziel — dann geht es um würdevolle und geborgene Abhängigkeit."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Roper sagt: so unabhängig wie möglich. Aber das ist nicht immer 100%. Bei schwer kranken oder sterbenden Menschen kann die Pflege auch bedeuten: liebevolle Abhängigkeit ermöglichen — nicht Unabhängigkeit erzwingen."

**D3: "Das Kontinuum gilt für alle Aktivitäten gleich — ein Patient ist entweder abhängig oder nicht"**
- **Fachbegriff:** Pauschal-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — der Patient hat für jede der 12 Lebensaktivitäten einen eigenen Kontinuum-Punkt. Er kann beim Essen 90% unabhängig sein, beim Bewegen aber nur 20%. Die Pflegeplanung muss jede Aktivität einzeln einschätzen — pauschale Beurteilungen führen zu Over- oder Undercare."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das Kontinuum gilt für jede Aktivität separat. Ein Patient kann beim Essen fast selbständig sein, aber beim Gehen völlig auf Hilfe angewiesen. Deshalb schaut die Pflege bei jeder der 12 Aktivitäten einzeln: Wie viel kann er gerade selbst?"

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Roper/Logan/Tierney (1980) beschreiben 12 Lebensaktivitäten (ATLs), jede auf einem Kontinuum von Abhängigkeit bis Unabhängigkeit. Ziel der Pflege ist es, den Patienten bei jeder Aktivität so weit wie möglich Richtung Unabhängigkeit zu begleiten."

**B1 (225 Zeichen):** "Sehr gut. 12 Lebensaktivitäten (ATLs) nach Roper (1980), jede auf einem Kontinuum von abhängig bis unabhängig. Die Pflege hilft genau da, wo der Patient auf dem Kontinuum noch Unterstützung braucht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist das Abhängigkeits-Unabhängigkeits-Kontinuum nach Roper/Logan/Tierney?"
- **Rückseite:** "Jede der 12 Lebensaktivitäten liegt auf einem Spektrum von völliger Abhängigkeit bis völliger Unabhängigkeit. Die Pflege fördert maximal mögliche Unabhängigkeit — aber respektiert würdevolle Abhängigkeit wo nötig. (Roper/Logan/Tierney, 1980)"
- **Kategorie:** konzept

---

## B12 — pflegeplan-aktualisieren

- **Bloom-Stufe:** B4 (Analysieren)
- **themaId:** pflegeplanung
- **Lernziel:** Du kannst begründen, warum der Pflegeplan mindestens einmal pro Dienst evaluiert werden muss, und erkennst wann eine sofortige Aktualisierung notwendig ist.
- **Primärquellen:** (NANDA-I, 2021), (§ 4 PflBG)
- **Schlüsselkonzept:** Pflegeplan ist kein statisches Dokument — Evaluation mindestens 1× pro Dienst, sofortige Anpassung bei Veränderungen

### Stufe 1 — Denkfrage

**C1 (200 Zeichen):**
"Frau Klein liegt seit 5 Tagen auf deiner Station. Ihr Pflegeplan wurde am Aufnahmetag geschrieben und seitdem nicht verändert. Was könnten die Folgen sein?"

**B1 (170 Zeichen):**
"Ein Pflegeplan wurde vor 5 Tagen geschrieben und nicht mehr geändert. Was könnte schiefgehen?"

- **Hinweis (C1, 160 Zeichen):** "Überlege: Was kann sich bei einem Patienten innerhalb von 5 Tagen alles verändern? Zustand, Fähigkeiten, Medikamente, Ziele — was davon steht im Plan?"
- **Hinweis (B1, 140 Zeichen):** "Denke daran: Patienten verändern sich täglich. Was gestern stimmte, kann heute schon überholt sein."
- **Step-Typ:** text (displayFormat: paragraph)

### Stufe 2 — Erklärtext

**C1 (520 Zeichen):**
"Ein Pflegeplan ist kein Dokument das einmal geschrieben und dann abgeheftet wird. Er muss **regelmäßig evaluiert und aktualisiert** werden.

**Wann muss evaluiert werden?**
- Mindestens **einmal pro Dienst** (jede Schicht)
- Sofort bei Veränderungen: neues Symptom, Sturz, Medikamentenänderung, Zustandsverschlechterung oder -verbesserung
- Nach Arztvisiten wenn neue Anordnungen vorliegen

**Warum?** Weil der Zustand des Patienten sich täglich — manchmal stündlich — verändert. Ein veralteter Pflegeplan gefährdet die Patientensicherheit und erfüllt nicht die dokumentarische Sorgfaltspflicht (§ 4 PflBG; NANDA-I, 2021)."

**B1 (430 Zeichen):**
"Der Pflegeplan muss regelmäßig überprüft werden — nicht nur einmal am Anfang.

**Wie oft?**
- Mindestens **1× pro Dienst** (also jede Schicht)
- Sofort wenn sich etwas ändert: Sturz, neues Symptom, schlechterer oder besserer Zustand

**Warum ist das wichtig?**
Weil sich Patienten verändern. Was heute noch stimmt, kann morgen schon überholt sein. Ein veralteter Plan bedeutet falsche Pflege — das ist eine Frage der Patientensicherheit.

Ein guter Pflegeplan lebt — er passt sich dem Patienten an (§ 4 PflBG)."

- **Step-Typ:** text (displayFormat: checklist)
- **Glossar-Begriffe:** [Evaluation, Pflegeplan, Sorgfaltspflicht, Patientensicherheit, Aktualisierung]
- **TTS-relevant:** nein

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"**Evaluation** ist der letzte und zugleich erste Schritt des Pflegeprozesses — denn nach der Evaluation folgt eine neue Planung. Ein Pflegeplan der nicht evaluiert wird, ist rechtlich und fachlich mangelhaft.

**Frequenz:**
- Mindestens **einmal pro Dienst** — das ist die Mindestanforderung
- Bei instabilen Patienten: häufiger (z.B. alle 2 Stunden)
- Sofort bei: Sturz, Schmerzzunahme, Bewusstseinsveränderung, neuer Diagnose, Verlegung, Medikamentenänderung

**Was wird evaluiert?**
- Sind die Pflegeziele erreicht? Teilweise? Gar nicht?
- Hat die Pflegemaßnahme gewirkt?
- Muss das Ziel angepasst werden (realistischer/ehrgeiziger)?
- Muss die Pflegediagnose angepasst werden?

**Dokumentation:** Jede Evaluation muss im Pflegebericht dokumentiert werden — mit Datum, Uhrzeit und Kürzel.

Ein nicht evaluierter Pflegeplan gefährdet die Patientensicherheit und verletzt die Dokumentationspflicht (§ 4 PflBG; NANDA-I, 2021)."

**B1 (550 Zeichen):**
"Der Pflegeplan muss **regelmäßig überprüft** werden — das nennt man Evaluation.

**Wie oft?**
- Mindestens **einmal pro Dienst**
- Sofort wenn sich etwas ändert: Sturz, Schmerzen, besserer oder schlechterer Zustand

**Was frage ich bei der Evaluation?**
- Hat die Maßnahme geholfen?
- Ist das Ziel erreicht?
- Muss etwas geändert werden?

**Und dann?**
- Plan anpassen wenn nötig
- Alles dokumentieren mit Datum und Kürzel

Ein Pflegeplan der 5 Tage unverändert bleibt, stimmt meist nicht mehr. Veraltete Pläne bedeuten falsche Pflege — das schadet dem Patienten (§ 4 PflBG)."

- **Erklärungs-Step:** stepType `reveal` (Evaluations-Checkliste aufdecken: Wann, Was, Wie dokumentieren)
- **Glossar-Begriffe:** [Evaluation, Pflegebericht, Dokumentationspflicht, Patientensicherheit, Pflegeprozess]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Wenn sich der Zustand des Patienten nicht verändert, muss der Pflegeplan nicht aktualisiert werden"**
- **Fachbegriff:** Statik-Rechtfertigungsfehler
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — auch wenn der Zustand scheinbar gleich bleibt, muss die Evaluation stattfinden und dokumentiert werden. 'Keine Veränderung' ist selbst eine Beobachtung die dokumentiert werden muss. Nur so ist belegt, dass die Pflege den Patienten beobachtet hat."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — auch wenn alles gleich bleibt, muss das dokumentiert werden. 'Keine Veränderung' ist eine Beobachtung — und die muss schriftlich stehen. Nur dann ist belegt, dass die Pflegeperson den Patienten wirklich beobachtet hat."

**D2: "Der Pflegeplan wird nur beim Aufnahmegespräch und bei der Entlassung aktualisiert"**
- **Fachbegriff:** Intervall-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — die Evaluation findet mindestens einmal pro Dienst statt, nicht nur bei Aufnahme und Entlassung. Pflegeziele können sich täglich verschieben. Ein Patient der am Montag Sturzangst hatte, könnte am Mittwoch schon sicher mit Rollator gehen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — der Pflegeplan muss jede Schicht überprüft werden, nicht nur beim Einzug und bei der Entlassung. Was am Montag stimmt, kann am Mittwoch schon überholt sein. Deshalb: mindestens einmal pro Dienst evaluieren."

**D3: "Die Evaluation macht nur der Arzt — die Pflege führt nur aus"**
- **Fachbegriff:** Delegations-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — die Evaluation des Pflegeplans ist eine vorbehaltene Tätigkeit der Pflegefachperson (§ 4 PflBG). Der Arzt evaluiert seine medizinische Therapie. Die Pflegefachperson evaluiert den Pflegeprozess — das sind zwei eigenständige Verantwortlichkeiten."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die Evaluation ist Aufgabe der Pflegefachperson, nicht des Arztes. Der Arzt bewertet die medizinische Behandlung. Die Pflege bewertet den Pflegeplan — das ist ihre eigene Verantwortung (§ 4 PflBG)."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Ein Pflegeplan muss mindestens einmal pro Dienst evaluiert werden — sofort bei Zustandsveränderungen. Evaluation ist eine vorbehaltene Tätigkeit der Pflegefachperson. Jede Evaluation wird mit Datum, Uhrzeit und Kürzel dokumentiert (§ 4 PflBG)."

**B1 (225 Zeichen):** "Sehr gut. Mindestens 1× pro Dienst evaluieren — sofort bei Veränderungen. Evaluation ist Aufgabe der Pflegefachperson. Immer dokumentieren: Datum, Uhrzeit, Kürzel. Ein veralteter Plan gefährdet Patienten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie oft muss ein Pflegeplan evaluiert werden, und was löst eine sofortige Aktualisierung aus?"
- **Rückseite:** "Mindestens 1× pro Dienst. Sofortige Aktualisierung bei: Sturz, neuem Symptom, Zustandsveränderung, Medikamentenänderung, neuer ärztlicher Anordnung. Jede Evaluation dokumentieren."
- **Kategorie:** handlung

---

## B13 — pflegeplan-schreiben-praxis

- **Bloom-Stufe:** B5 (Beurteilen)
- **themaId:** pflegeplanung
- **Lernziel:** Du kannst Pflegeziele und -maßnahmen patientenzentriert, konkret und messbar formulieren — und erkennst schwammige Formulierungen sofort.
- **Primärquellen:** (NANDA-I, 2021), (§ 4 PflBG)
- **Schlüsselkonzept:** Gute Pflegeplanung ist konkret, messbar, patientenzentriert — „Patient mobilisiert sich täglich mit Rollator 50 m bis Freitag" statt „Mobilisation verbessern"

### Stufe 1 — Denkfrage

**C1 (200 Zeichen):**
"Zwei Pflegeziele: (A) 'Mobilisation verbessern.' — (B) 'Herr Wagner geht bis Freitag täglich 2× mit Rollator 50 m auf dem Flur.' Welches Ziel ist besser — und warum genau?"

**B1 (170 Zeichen):**
"(A) 'Mobilisation verbessern.' — (B) 'Herr Wagner läuft bis Freitag täglich 2× 50 m mit Rollator.' Welches Ziel ist besser? Warum?"

- **Hinweis (C1, 160 Zeichen):** "Überlege: Woran erkenne ich am Freitag, ob das Ziel (A) erreicht wurde? Und woran bei (B)? Was ist überprüfbar?"
- **Hinweis (B1, 140 Zeichen):** "Denke daran: Ein Ziel muss messbar sein. Wie messe ich 'verbessern'? Wie messe ich '50 m'?"
- **Step-Typ:** text (displayFormat: comparison-table)

### Stufe 2 — Erklärtext

**C1 (520 Zeichen):**
"Pflegeziele und Pflegemaßnahmen müssen **konkret, messbar und patientenzentriert** sein. Das ist kein Stilprinzip — es ist eine Grundlage für Evaluation und Patientensicherheit.

**Schwammig vs. konkret:**
| Schwammig | Konkret und messbar |
|-----------|---------------------|
| Mobilisation verbessern | Herr W. geht 2× täglich 50 m mit Rollator bis Freitag |
| Flüssigkeit fördern | Patient trinkt bis 20:00 Uhr 1.500 ml (dokumentiert) |
| Schmerzen lindern | NRS ≤ 3/10 nach Maßnahme |

**Warum patientenzentriert?** Das Ziel muss aus Sicht des Patienten formuliert sein — was er erreicht, nicht was die Pflege tut (NANDA-I, 2021)."

**B1 (430 Zeichen):**
"Pflegeziele müssen konkret und messbar sein — sonst kann niemand prüfen ob sie erreicht wurden.

**Schlecht:** 'Mobilisation verbessern.'
→ Woran erkennst du ob das erreicht wurde?

**Gut:** 'Herr Wagner geht täglich 2× 50 m mit Rollator bis Freitag.'
→ Messbar: 50 m. Zeitlich: bis Freitag. Person: Herr Wagner.

Das nennt man **patientenzentrierte Formulierung**: Das Ziel beschreibt was der Patient erreicht — nicht was du tust.

Schwammige Ziele führen zu schwammiger Pflege (NANDA-I, 2021)."

- **Step-Typ:** text (displayFormat: comparison-table)
- **Glossar-Begriffe:** [Pflegeziel, messbar, patientenzentriert, SMART-Kriterien, Evaluation]
- **TTS-relevant:** nein

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"**Patientenzentrierte, messbare Pflegeziele** folgen dem **SMART-Prinzip:**
- **S**pezifisch — Was genau soll erreicht werden?
- **M**essbar — Woran erkenne ich, dass es erreicht wurde?
- **A**kzeptabel — Ist das Ziel realistisch für diesen Patienten?
- **R**ealistisch — Ist es machbar in der vorhandenen Zeit/mit vorhandenen Ressourcen?
- **T**erminiert — Bis wann soll es erreicht sein?

**Patientenzentriert** bedeutet: Das Subjekt des Satzes ist der Patient — nicht die Pflegeperson.
- Nicht: 'Die Pflege mobilisiert täglich.' → Das ist eine Maßnahme, kein Ziel.
- Ja: 'Herr Wagner geht bis Freitag 2× täglich 50 m mit Rollator.'

**Häufige Fehler:**
1. Ziel = Maßnahme (Verwechslung)
2. Kein Zeitrahmen ('irgendwann')
3. Nicht messbar ('besser', 'mehr', 'weniger')
4. Zu allgemein ('Wohlbefinden steigern')

Konkrete Ziele ermöglichen Evaluation — schwammige Ziele verhindern sie (NANDA-I, 2021; § 4 PflBG)."

**B1 (550 Zeichen):**
"Ein gutes Pflegeziel ist **SMART**:
- **S**pezifisch: Was genau?
- **M**essbar: Woran siehst du es?
- **A**kzeptabel: Realistisch für den Patienten?
- **R**ealistisch: Wirklich machbar?
- **T**erminiert: Bis wann?

Das Ziel beschreibt immer was **der Patient** erreicht — nicht was du tust.

**Schlecht (Maßnahme als Ziel):** 'Die Pflege hilft täglich bei der Mobilisation.'
**Gut (patientenzentriertes Ziel):** 'Herr Wagner läuft bis Freitag 2× täglich 50 m mit Rollator.'

Häufige Fehler:
- Kein Datum ('irgendwann')
- Nicht messbar ('besser fühlen')
- Zu vage ('Mobilisation verbessern')

SMART = prüfbar = gute Pflege (NANDA-I, 2021)."

- **Erklärungs-Step:** stepType `reveal` (SMART-Kriterien aufdecken + Vergleich schwammig vs. konkret)
- **Glossar-Begriffe:** [SMART, Pflegeziel, patientenzentriert, messbar, Evaluation, Maßnahme]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "'Die Pflege mobilisiert täglich' ist ein gutes Pflegeziel"**
- **Fachbegriff:** Maßnahme-Ziel-Verwechslung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — 'Die Pflege mobilisiert täglich' ist eine Pflegemaßnahme, kein Pflegeziel. Ein Ziel beschreibt was der Patient erreicht, nicht was die Pflege tut. Richtig wäre: 'Herr Wagner geht bis Freitag täglich 2× 50 m mit Rollator.' Das ist ein patientenzentriertes, messbares Ziel."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das ist eine Maßnahme, kein Ziel. Maßnahmen sagen was du tust. Ziele sagen was der Patient erreicht. Richtig: 'Herr Wagner geht bis Freitag täglich 2× 50 m.' Jetzt steht der Patient im Mittelpunkt — nicht die Pflegeperson."

**D2: "Allgemeine Ziele wie 'Wohlbefinden steigern' sind gut, weil sie flexibel sind"**
- **Fachbegriff:** Vaguheits-Irrtum
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — 'Wohlbefinden steigern' ist nicht evaluierbar. Am Ende des Dienstes: Wurde das Ziel erreicht? Woran erkennst du es? Flexibilität in Zielen führt zu mangelnder Verbindlichkeit — und damit zu inkonsistenter Pflege. Konkrete Ziele sind besser."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — 'Wohlbefinden steigern' klingt gut, aber es ist nicht messbar. Woran siehst du ob es besser geworden ist? Ohne messbare Ziele kann die Pflege nicht evaluiert werden. Konkreter ist besser: 'Patient schläft bis Freitag 6 Stunden durch (Pflegebericht).'"

**D3: "Pflegeziele werden von der Pflegefachperson allein festgelegt — der Patient wird nicht gefragt"**
- **Fachbegriff:** Paternalismus-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — patientenzentrierte Pflege bedeutet auch, dass der Patient bei der Zielformulierung einbezogen wird. Ein Ziel das der Patient nicht akzeptiert, wird nicht erreicht. 'Realistisch' im SMART-Prinzip schließt ein: Ist dieses Ziel aus Sicht des Patienten erreichbar und gewollt?"
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — patientenzentriert bedeutet: der Patient wird gefragt. Ein Ziel das er nicht will, wird er nicht verfolgen. Deshalb ist 'Akzeptabel' im SMART-Prinzip so wichtig. Ziele gemeinsam mit dem Patienten festlegen — das funktioniert besser."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Pflegeziele müssen SMART sein: spezifisch, messbar, akzeptabel, realistisch, terminiert. Das Subjekt ist der Patient ('Herr Wagner geht...'), nicht die Pflege. Konkrete Ziele ermöglichen Evaluation — schwammige Ziele verhindern sie (NANDA-I, 2021)."

**B1 (225 Zeichen):** "Sehr gut. SMART-Ziele: spezifisch, messbar, akzeptabel, realistisch, terminiert. Der Patient steht im Mittelpunkt. 'Herr Wagner geht 50 m bis Freitag' ist gut. 'Mobilisation verbessern' ist zu schwammig."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wofür steht das SMART-Prinzip bei Pflegezielen?"
- **Rückseite:** "S = Spezifisch, M = Messbar, A = Akzeptabel (realistisch für den Patienten), R = Realistisch (machbar), T = Terminiert (Zeitrahmen). Pflegeziele sind patientenzentriert: das Subjekt ist immer der Patient."
- **Kategorie:** handlung

---

## B14 — ressourcen-orientiert

- **Bloom-Stufe:** B4 (Analysieren)
- **themaId:** pflegeplanung
- **Lernziel:** Du kannst bei einem Patientenbeispiel Ressourcen (Rest-Fähigkeiten) identifizieren und erklären, warum ressourcenorientierte Pflege sowohl fachlich als auch ethisch überlegen ist.
- **Primärquellen:** (Krohwinkel, 1993 ABEDL), (NANDA-I, 2021)
- **Schlüsselkonzept:** Ressourcenorientierung = was kann der Patient noch selbst? Defizitorientierung = was kann er nicht? Gute Pflege beginnt mit Ressourcen — nicht mit Defiziten

### Stufe 1 — Denkfrage

**C1 (200 Zeichen):**
"Zwei Pflegepersonen beschreiben Herrn K. nach Schlaganfall. Pflegeperson A: 'Er kann nicht laufen, nicht selbst essen, braucht Hilfe beim Waschen.' Pflegeperson B: 'Er kann mit Hilfe sitzen, die rechte Hand bewegen und verstehen was man ihm sagt.' Was unterscheidet diese beiden Beschreibungen?"

**B1 (170 Zeichen):**
"Pflegeperson A sagt: 'Herr K. kann nicht laufen und nicht allein essen.' Pflegeperson B sagt: 'Herr K. kann sitzen und seine Hand etwas bewegen.' Was ist der Unterschied?"

- **Hinweis (C1, 160 Zeichen):** "Überlege: Welche Beschreibung hilft dir mehr bei der Planung? Wo beginnt du bei der Planung — bei dem was fehlt oder bei dem was noch da ist?"
- **Hinweis (B1, 140 Zeichen):** "Denke daran: Wer von dem ausgeht was noch da ist, weiß auch wo er ansetzen kann. Was bedeutet das für die Pflege?"
- **Step-Typ:** text (displayFormat: paragraph)

### Stufe 2 — Erklärtext

**C1 (520 Zeichen):**
"**Ressourcenorientierte Pflege** geht von dem aus, was der Patient noch kann — nicht von dem, was er nicht mehr kann.

**Defizitorientiert:** 'Herr K. kann nicht laufen, nicht selbst essen, nicht waschen.' → Führt zu Überversorgung und Abhängigkeit.

**Ressourcenorientiert:** 'Herr K. kann mit Unterstützung sitzen, die rechte Hand führen, Anweisungen folgen.' → Pflege setzt bei vorhandenen Fähigkeiten an — und baut sie aus.

**Warum besser?** Ressourcenorientierung erhält Autonomie, fördert Rehabilitation und beugt dem Verlust von Fähigkeiten vor. Außerdem: Es ist ethisch — der Patient bleibt Subjekt, nicht Objekt (Krohwinkel, 1993; NANDA-I, 2021)."

**B1 (430 Zeichen):**
"Ressourcenorientierte Pflege bedeutet: Ich schaue zuerst auf das, was der Patient **noch kann** — nicht auf das was er nicht mehr kann.

**Defizit-Blick:** 'Er kann nicht laufen, nicht essen, nicht waschen.'
**Ressourcen-Blick:** 'Er kann sitzen, die Hand etwas bewegen, Anweisungen verstehen.'

Der Ressourcen-Blick hilft mehr — weil er zeigt wo Pflege ansetzen kann.

Außerdem: Wer nur auf Defizite schaut, macht zu viel für den Patienten. Das macht ihn passiv. Ressourcen erhalten heißt: Selbstständigkeit erhalten (Krohwinkel, 1993)."

- **Step-Typ:** text (displayFormat: comparison-table)
- **Glossar-Begriffe:** [Ressource, Ressourcenorientierung, Defizitorientierung, Autonomie, Rehabilitation]
- **TTS-relevant:** nein

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"**Ressourcenorientierung** ist ein Grundprinzip professioneller Pflege — verankert in Krohwinkels ABEDL-Modell (1993) und dem NANDA-I-System (2021).

**Ressource** = eine Fähigkeit, Kraft oder Unterstützung die der Patient hat oder nutzen kann.
- Körperlich: 'Kann mit Rollator 10 m gehen'
- Kognitiv: 'Versteht Anweisungen, erinnert sich an Tagesablauf'
- Sozial: 'Hat täglichen Besuch der Tochter'
- Emotional: 'Motiviert, wieder heimzugehen'

**Warum Ressourcen zuerst?**
1. **Fachlich:** Pflege die auf vorhandenen Fähigkeiten aufbaut, ist effektiver als Kompensation.
2. **Ethisch:** Der Patient bleibt Subjekt — er tut was er kann, bekommt Hilfe wo er sie braucht.
3. **Präventiv:** Ressourcen die nicht genutzt werden, verkümmern — 'use it or lose it'.
4. **Rechtlich:** Überversorgung ist Sorgfaltspflichtverletzung.

**Ressourcen im Pflegeplan:** Bei jeder ABEDL/ATL werden Ressourcen und Probleme dokumentiert — Ressourcen zuerst (Krohwinkel, 1993 ABEDL; NANDA-I, 2021)."

**B1 (550 Zeichen):**
"**Ressourcen** sind das, was der Patient noch kann.

Ressourcen können sein:
- **Körperlich:** 'Kann mit Rollator 10 m gehen'
- **Kognitiv:** 'Versteht Anweisungen'
- **Sozial:** 'Tochter kommt täglich'
- **Emotional:** 'Möchte wieder heimgehen'

**Warum Ressourcen so wichtig?**
1. Was ich selbst kann, will ich auch selbst tun — das erhält meine Selbstständigkeit.
2. Was nicht genutzt wird, geht verloren ('use it or lose it').
3. Zu viel helfen macht abhängig — das ist das Gegenteil von guter Pflege.

Deshalb: Ressourcen zuerst benennen — dann schauen wo Hilfe nötig ist (Krohwinkel, 1993)."

- **Erklärungs-Step:** stepType `reveal` (Ressourcen-Kategorien aufdecken + Vergleich Defizit vs. Ressource am Fallbeispiel)
- **Glossar-Begriffe:** [Ressource, Ressourcenorientierung, Autonomie, Rehabilitation, Überversorgung, use it or lose it]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Ressourcenorientierung bedeutet, dass die Pflege weniger tut — das ist Vernachlässigung"**
- **Fachbegriff:** Vernachlässigungs-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Ressourcenorientierung ist kein Rückzug, sondern eine Neuausrichtung. Die Pflege übernimmt was der Patient wirklich nicht kann — und fördert gezielt was er kann. Das erfordert mehr Planung und Aufmerksamkeit als einfach alles zu übernehmen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Ressourcenorientierung bedeutet nicht weniger Pflege. Es bedeutet: Ich helfe gezielt dort wo Hilfe nötig ist. Ich fördere was der Patient selbst kann. Das ist anspruchsvoller als alles zu übernehmen — es braucht Planung."

**D2: "Wenn der Patient sagt er will Hilfe, muss die Pflege alles für ihn übernehmen"**
- **Fachbegriff:** Wunsch-Übererfüllungs-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — der Wunsch des Patienten ist wichtig und wird respektiert. Aber professionelle Pflege erklärt auch warum Eigenaktivität gut ist. Ein Patient der keine Motivation hat, braucht Anleitung und Motivationsarbeit — nicht Überversorgung, die seine Fähigkeiten abbaut."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — der Wunsch des Patienten zählt, aber Pflege erklärt auch: 'Wenn du das selbst machst, bleibst du stärker.' Das ist kein Ignorieren des Wunsches — das ist professionelle Beratung. Zu viel abnehmen schadet langfristig."

**D3: "Ressourcen sind nur körperliche Fähigkeiten"**
- **Fachbegriff:** Reduktions-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — Ressourcen umfassen körperliche, kognitive, soziale und emotionale Fähigkeiten. Auch 'hat motivierende Tochter', 'spricht offen über Ängste' oder 'erinnert sich an Medikamentenzeiten' sind Ressourcen die bei der Pflegeplanung berücksichtigt werden."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Ressourcen sind nicht nur körperlich. Auch: 'Versteht Erklärungen', 'Familie unterstützt ihn', 'ist motiviert heimzugehen' — das sind Ressourcen. Die Pflege schaut auf alle Bereiche des Lebens."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Ressourcenorientierung bedeutet: zuerst erfassen was der Patient noch kann — körperlich, kognitiv, sozial, emotional. Pflege setzt bei Ressourcen an und ergänzt nur wo nötig. Das erhält Autonomie, fördert Rehabilitation und verhindert Überversorgung."

**B1 (225 Zeichen):** "Sehr gut. Ressourcen zuerst — was kann der Patient noch? Körperlich, kognitiv, sozial. Dann erst: Wo braucht er Hilfe? Pflege die Ressourcen erhält, hält den Patienten aktiv und selbstständig."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist ressourcenorientierte Pflege, und welche 4 Ressourcen-Kategorien gibt es?"
- **Rückseite:** "Ressourcenorientiert = zuerst erfassen was der Patient noch kann. Kategorien: körperlich, kognitiv, sozial, emotional. Ressourcen in der Pflegeplanung zuerst dokumentieren — dann Defizite. (Krohwinkel, 1993)"
- **Kategorie:** konzept

---

## B15 — partizipative-planung

- **Bloom-Stufe:** B5 (Beurteilen)
- **themaId:** pflegeplanung
- **Lernziel:** Du kannst die Prinzipien der partizipativen Pflegeplanung (Shared Decision Making) erläutern und Situationen beurteilen, in denen Patientenbeteiligung besonders wichtig oder besonders schwierig ist.
- **Primärquellen:** (NANDA-I, 2021), (§ 4 PflBG)
- **Schlüsselkonzept:** Shared Decision Making (SDM) — Patient und Pflegefachperson planen gemeinsam. Patient ist Experte seines eigenen Lebens — Pflege ist Expertin der Fachlichkeit.

### Stufe 1 — Denkfrage

**C1 (200 Zeichen):**
"Frau Yilmaz (72) soll nach dem Pflegeplan täglich um 07:00 Uhr aufstehen und geduscht werden. Sie sagt: 'Ich bin mein ganzes Leben nie vor 09:00 Uhr aufgestanden.' Was machst du?"

**B1 (170 Zeichen):**
"Der Pflegeplan sagt: 07:00 Uhr aufstehen und duschen. Die Patientin sagt: 'Ich stehe nie vor 09:00 auf.' Was machst du?"

- **Hinweis (C1, 160 Zeichen):** "Überlege: Wer kennt das Leben der Patientin am besten — du oder sie? Was passiert wenn du den Plan trotzdem durchsetzt?"
- **Hinweis (B1, 140 Zeichen):** "Denke daran: Die Patientin ist die Expertin ihres eigenen Lebens. Was bedeutet das für deine Planung?"
- **Step-Typ:** text (displayFormat: paragraph)

### Stufe 2 — Erklärtext

**C1 (520 Zeichen):**
"**Partizipative Pflegeplanung** bedeutet: Der Patient wird aktiv in die Erstellung und Anpassung des Pflegeplans einbezogen. Das nennt man auch **Shared Decision Making (SDM)**.

**Warum?**
- Der Patient ist der Experte seines eigenen Lebens — er kennt seine Gewohnheiten, Werte und Grenzen.
- Pflege die gegen den Willen des Patienten geplant wird, wird oft nicht akzeptiert und scheitert.
- Beteiligung fördert Eigenverantwortung und Motivation.

**Wie?**
- Ziele gemeinsam formulieren
- Präferenzen erfragen ('Wann stehen Sie gerne auf?')
- Informieren und erklären, dann gemeinsam entscheiden (NANDA-I, 2021)."

**B1 (430 Zeichen):**
"**Partizipativ** bedeutet: Du planst nicht alleine — du planst mit dem Patienten zusammen.

Das nennt man **Shared Decision Making** — gemeinsam entscheiden.

**Warum ist das wichtig?**
- Die Patientin kennt sich selbst am besten.
- Ein Plan den sie nicht will, wird sie nicht einhalten.
- Beteiligung macht Patienten aktiver und motivierter.

**Wie geht das?**
- Fragen: 'Was ist Ihnen bei der Pflege besonders wichtig?'
- Informieren und erklären
- Gemeinsam entscheiden was sinnvoll ist

Du bist Expertin der Pflege — sie ist Expertin ihres Lebens (NANDA-I, 2021)."

- **Step-Typ:** text (displayFormat: paragraph)
- **Glossar-Begriffe:** [partizipativ, Shared Decision Making, Patientenautonomie, Einbeziehung, SDM]
- **TTS-relevant:** nein

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"**Shared Decision Making (SDM)** ist in der professionellen Pflege kein optionaler Bonus — es ist ein ethisches und rechtliches Gebot (Patientenautonomie, § 4 PflBG).

**Zwei Expertisen kommen zusammen:**
- Patient = Experte des eigenen Lebens (Werte, Gewohnheiten, Präferenzen, Lebensziele)
- Pflegefachperson = Expertin der Pflege (Fachwissen, Risiken, Interventionsmöglichkeiten)

**SDM-Schritte in der Pflegeplanung:**
1. Informieren: 'Ich erkläre, welche Pflegemaßnahmen sinnvoll sind — und warum.'
2. Präferenzen erfragen: 'Was ist Ihnen dabei wichtig? Was möchten Sie auf keinen Fall?'
3. Gemeinsam entscheiden: Plan, der Fachlichkeit und Patientenwünsche verbindet.
4. Dokumentieren: Patientenpräferenzen im Pflegeplan schriftlich festhalten.

**Schwierige Situationen für SDM:**
- Demenziell erkrankte Patienten: Mutmaßlicher Wille und gesetzliche Vertretung
- Patienten im Wachkoma: Vorsorgevollmacht und Patientenverfügung prüfen
- Minderjährige: Eltern einbeziehen aber Präferenzen des Kindes berücksichtigen

Kein Patientenwille — keine partizipative Planung, aber trotzdem Pflicht den mutmaßlichen Willen zu berücksichtigen (NANDA-I, 2021)."

**B1 (550 Zeichen):**
"**Shared Decision Making (SDM)** — gemeinsam entscheiden — ist ein wichtiges Prinzip in der Pflege.

Du bist Expertin für Pflege. Die Patientin ist Expertin für ihr Leben.

**In 4 Schritten:**
1. Erkläre: 'Diese Maßnahmen würde ich empfehlen — weil...'
2. Frage: 'Was ist Ihnen wichtig? Was möchten Sie nicht?'
3. Entscheidet gemeinsam was am besten passt.
4. Schreibe die Präferenzen in den Pflegeplan.

**Beispiel:** Frau Yilmaz schläft bis 09:00. Im Plan steht 07:00. Lösung: Plan auf 09:00 anpassen — denn ein Plan den sie ablehnt, wird nicht funktionieren.

Patientenrechte bedeuten: Ihr Wille zählt (NANDA-I, 2021)."

- **Erklärungs-Step:** stepType `branching` (Fallbeispiel: Patient lehnt Maßnahme ab — was tust du? → 3 Optionen mit Konsequenzen)
- **Glossar-Begriffe:** [Shared Decision Making, SDM, Patientenautonomie, partizipativ, mutmaßlicher Wille, Patientenverfügung]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Die Pflegefachperson weiß am besten was gut für den Patienten ist — der Patient soll folgen"**
- **Fachbegriff:** Paternalismus-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — das nennt man Paternalismus: für jemanden entscheiden weil man meint es besser zu wissen. In der modernen Pflege gilt Patientenautonomie. Die Pflegefachperson hat Fachkompetenz — aber der Patient hat Lebenskompetenz. Gute Pflege verbindet beides."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die Pflegeperson kennt die Pflege besser. Aber der Patient kennt sein Leben besser. Wenn du allein entscheidest, nennst du das Paternalismus. Gute Pflege fragt zuerst — und entscheidet dann gemeinsam."

**D2: "Partizipative Planung ist zeitaufwendig — in der Praxis bleibt dafür keine Zeit"**
- **Fachbegriff:** Ressourcen-Resignation
- **Feedback (C1, 265 Zeichen):** "Das ist ein verständlicher Gedanke — aber eine Kurzinvestition am Anfang spart Zeit danach. Ein Plan den der Patient nicht akzeptiert führt zu Konflikten, Ablehnung von Maßnahmen und schlechtem Therapieerfolg. Partizipation muss nicht lange dauern — auch 2 Minuten Nachfragen helfen."
- **Feedback (B1, 240 Zeichen):** "Das verstehe ich — aber: Ein Plan den der Patient ablehnt, kostet noch mehr Zeit. Konflikte, Verweigerung, schlechter Verlauf. 2 Minuten nachfragen am Anfang spart Stunden danach. Partizipation geht auch schnell."

**D3: "Wenn der Patient sehr krank oder verwirrt ist, entfällt Shared Decision Making"**
- **Fachbegriff:** Einschränkungs-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — auch bei eingeschränkter Entscheidungsfähigkeit bleibt die Pflicht, den mutmaßlichen Willen zu berücksichtigen. Gibt es eine Patientenverfügung? Wer hat Vorsorgevollmacht? Was wäre der Wille der Person gewesen? SDM bedeutet nicht immer direktes Gespräch — manchmal ist es Recherche."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — auch wenn jemand verwirrt ist, hat er Rechte. Gibt es eine Patientenverfügung? Hat jemand Vollmacht? Was würde er wollen, wenn er klar denken könnte? Das sind die Fragen. SDM endet nicht bei Verwirrtheit."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Shared Decision Making: Patient und Pflegefachperson bringen je ihre Expertise ein. Der Patient ist Experte seines Lebens, die Pflegefachperson ist Expertin der Pflege. Gemeinsam entstehen Pläne die akzeptiert werden — und deshalb funktionieren (NANDA-I, 2021)."

**B1 (225 Zeichen):** "Sehr gut. SDM = gemeinsam entscheiden. Patient kennt sein Leben — du kennst die Pflege. Zusammen entscheidet ihr was am besten passt. Ein Plan der gemeinsam gemacht wurde, wird auch eingehalten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet Shared Decision Making (SDM) in der Pflegeplanung?"
- **Rückseite:** "Patient und Pflegefachperson planen gemeinsam. Patient = Experte seines Lebens. Pflegefachperson = Expertin der Pflege. Schritte: Informieren → Präferenzen erfragen → gemeinsam entscheiden → dokumentieren."
- **Kategorie:** konzept

---

## Baustein 7: med-vs-pflegediagnose

### Metadaten
- **bausteinId:** pflegeplanung-med-vs-pflegediagnose
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 6 Min
- **quelleFakten:** NANDA-I 2021, § 4 PflBG

### Stufe 1 — Denkfrage
- **Frage:** "Eine Patientin hat die ärztliche Diagnose 'Herzinsuffizienz'. Du planst die Pflege. Welche Probleme siehst du als Pflegefachperson — die der Arzt vielleicht nicht dokumentiert?"
- **Step-Typ:** freetext (aktiviert klinisches Denken, Bloom 4)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Ärztliche Diagnose: Krankheit, relativ stabil. Pflegediagnose: **Reaktion des Menschen** auf die Krankheit — täglich veränderlich. Beispiel: 'Herzinsuffizienz' (Arzt) vs. 'Beeinträchtigte körperliche Aktivität aufgrund von Belastungsdyspnoe' (Pflege)."

**B1 (215 Zeichen):** "Der Arzt schreibt: 'Herzinsuffizienz'. Das ist die Krankheit. Du schreibst: 'Patientin wird beim Waschen kurzatmig und braucht Pausen'. Das ist das Pflegeproblem — was du jeden Tag siehst und veränderst."

- **Step-Typ:** text (displayFormat: comparison)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"**Medizinische Diagnose vs. Pflegediagnose** — zwei verschiedene Perspektiven auf dieselbe Person.

**Medizinische Diagnose (Arzt):**
- Benennt die Krankheit (Herzinsuffizienz, Pneumonie, Diabetes mellitus Typ 2)
- Ist relativ stabil — ändert sich selten innerhalb eines Tages
- Leitet Therapie (Medikamente, Operationen, Interventionen)
- Rechtlich: nur Ärzte dürfen medizinische Diagnosen stellen

**Pflegediagnose (Pflegefachperson):**
- Benennt die **Reaktion** des Menschen auf Krankheit, Behandlung oder Lebenssituation
- Ändert sich täglich — manchmal stündlich
- Leitet Pflege (Lagerung, Mobilisation, Kommunikation, Beratung)
- Rechtlich: Pflegefachpersonen stellen Pflegediagnosen autonom (§ 4 PflBG)

Derselbe Patient mit 'Herzinsuffizienz' kann als Pflegediagnosen haben:
- 'Beeinträchtigte körperliche Aktivität' (weil Dyspnoe bei Belastung)
- 'Angst' (weil Atemnot Angst auslöst)
- 'Flüssigkeitsüberschuss' (weil Ödeme sichtbar)

Alle drei können gleichzeitig bestehen — und alle drei ändern sich täglich (NANDA-I, 2021)."

**B1 (540 Zeichen):**
"**Arzt und Pflegefachperson** haben verschiedene Aufgaben — deshalb schreiben sie verschiedene Diagnosen.

**Arzt schreibt:** 'Herzinsuffizienz'. Das ist die Krankheit. Sie ändert sich selten.
**Du schreibst:** Was du bei der Patientin jeden Tag siehst und tust.

Drei Beispiele für dieselbe Patientin:
- 'Beim Waschen wird sie kurzatmig' → Pflegeziel: selbstständig waschen mit Pausen
- 'Sie hat Angst vor dem Schlafen wegen Atemnot' → Pflegeziel: ruhig schlafen können
- 'Beide Beine sind geschwollen' → Pflegeziel: Hochlagerung + Gewicht täglich messen

Der Arzt behandelt die Krankheit. Du begleitest den Alltag. Beide sind notwendig (NANDA-I, 2021)."

- **Erklärungs-Step:** stepType `matching` (Medizinische Diagnosen → passende Pflegediagnosen zuordnen, 4 Paare)
- **Glossar-Begriffe:** [Medizinische Diagnose, Pflegediagnose, Reaktion, NANDA-I, Belastungsdyspnoe]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Pflegediagnosen sind dasselbe wie medizinische Diagnosen — beide beschreiben Krankheiten"**
- **Fachbegriff:** Diagnose-Gleichsetzungs-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Pflegediagnosen beschreiben keine Krankheiten, sondern menschliche Reaktionen auf Krankheiten. Beispiel: 'Herzinsuffizienz' ist eine medizinische Diagnose. 'Angst aufgrund von Belastungsdyspnoe' ist eine Pflegediagnose — derselbe Patient, aber eine andere Perspektive (NANDA-I, 2021)."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — der Arzt schreibt die Krankheit. Du schreibst was der Patient wegen der Krankheit im Alltag nicht schafft. 'Herzinsuffizienz' = Arzt. 'Patientin wird beim Waschen kurzatmig' = Pflege. Beides ist wichtig — aber es ist nicht dasselbe."

**D2: "Pflegediagnosen darf nur der Arzt stellen — die Pflegefachperson führt nur aus"**
- **Fachbegriff:** Kompetenz-Irrtum
- **Feedback (C1, 265 Zeichen):** "Falsch — Pflegediagnosen sind eine vorbehaltene Tätigkeit der Pflegefachperson (§ 4 PflBG). Der Arzt stellt medizinische Diagnosen. Die Pflegefachperson stellt Pflegediagnosen autonom. Das ist keine Grauzone — es ist Gesetz."
- **Feedback (B1, 240 Zeichen):** "Falsch — Pflegediagnosen stellt die Pflegefachperson selbst. Das Gesetz sagt es so (§ 4 PflBG). Der Arzt darf das sogar nicht für dich übernehmen — das ist deine Aufgabe. Du beobachtest, du bewertest, du planst."

**D3: "Eine Pflegediagnose ändert sich nicht — sie gilt für die ganze Behandlungsdauer"**
- **Fachbegriff:** Stagnations-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — Pflegediagnosen sind dynamisch. Sie spiegeln die aktuelle Reaktion des Patienten wider — und die ändert sich täglich. Was heute noch zutrifft, kann morgen schon überholt sein. Deshalb muss der Pflegeplan regelmäßig überprüft und aktualisiert werden."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Pflegediagnosen ändern sich. Was heute stimmt, kann morgen anders sein. Beispiel: Heute 'Angst wegen Atemnot'. Nach 2 Tagen mit gutem Schlaf vielleicht nicht mehr. Deshalb prüfst du den Plan regelmäßig — und passt ihn an."

### Richtig-Feedback
**C1 (255 Zeichen):** "Genau. Ärztliche Diagnose = Krankheit (stabil). Pflegediagnose = Reaktion des Menschen auf Krankheit (täglich veränderlich). Pflegediagnosen stellt die Pflegefachperson autonom — nicht der Arzt. Das ist eine vorbehaltene Tätigkeit nach § 4 PflBG."

**B1 (220 Zeichen):** "Sehr gut. Der Arzt schreibt die Krankheit. Du schreibst was der Patient deswegen im Alltag nicht schafft. Das ändert sich jeden Tag. Und das darfst du selbst entscheiden — das ist deine Aufgabe nach Gesetz."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen medizinischer Diagnose und Pflegediagnose?"
- **Rückseite:** "Medizinische Diagnose = Krankheit (Arzt, relativ stabil). Pflegediagnose = Reaktion des Menschen auf Krankheit (Pflegefachperson autonom, täglich veränderlich). Beispiel: 'Herzinsuffizienz' (Arzt) vs. 'Beeinträchtigte Aktivität wegen Dyspnoe' (Pflege). Rechtsgrundlage: § 4 PflBG."
- **Kategorie:** konzept

---

## Baustein 8: vorbehaltene-taetigkeit-planung

### Metadaten
- **bausteinId:** pflegeplanung-vorbehaltene-taetigkeit
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** § 4 PflBG

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor: Eine Krankenpflegehelferin fragt dich, ob sie den Pflegeplan für Herrn Fischer schreiben darf — sie hat 10 Jahre Erfahrung. Was antwortest du?"
- **Step-Typ:** freetext (aktiviert rechtliches Denken, Bloom 3)

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Die Planung, Steuerung und Evaluation des Pflegeprozesses ist eine **vorbehaltene Tätigkeit** der Pflegefachperson (§ 4 Abs. 2 PflBG). Hilfskräfte und Auszubildende dürfen keine Pflegepläne selbstständig erstellen — unabhängig von ihrer Erfahrung."

**B1 (210 Zeichen):** "Nur Pflegefachpersonen dürfen den Pflegeplan schreiben — das sagt das Gesetz (§ 4 PflBG). Hilfskräfte dürfen pflegen und unterstützen — aber sie dürfen nicht selbstständig planen. Erfahrung ändert daran nichts."

- **Step-Typ:** text (displayFormat: highlight)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"**Vorbehaltene Tätigkeiten** sind Aufgaben, die per Gesetz nur examinierten Pflegefachpersonen vorbehalten sind.

§ 4 Abs. 2 PflBG definiert drei vorbehaltene Tätigkeiten:
1. **Erheben** des Pflegestatus: Pflegeanamnese, Assessment, Pflegediagnose
2. **Planen** der Pflege: Pflegeziele setzen, Maßnahmen auswählen, Pflegeplan schreiben
3. **Steuern und Evaluieren** des Pflegeprozesses: Wirksamkeit prüfen, Plan anpassen

**Was das in der Praxis bedeutet:**
- Pflegehelfer, Schüler im 1. Ausbildungsjahr und Hilfskräfte dürfen Pflege **durchführen** — aber nicht selbstständig planen
- Die Planung liegt immer bei der examinierten Pflegefachperson
- Auch wenn jemand 20 Jahre Erfahrung als Helfer hat: kein Examen = keine Planungsverantwortung
- Die Pflegefachperson trägt die Verantwortung — auch wenn andere durchführen

Dies ist keine Frage des Vertrauens oder der Erfahrung. Es ist gesetzliche Kompetenzregelung (§ 4 PflBG)."

**B1 (545 Zeichen):**
"Das Gesetz sagt: Nur **Pflegefachpersonen** dürfen den Pflegeplan schreiben (§ 4 PflBG).

**Was Pflegefachpersonen allein dürfen:**
1. Den Pflegezustand einschätzen (was braucht der Patient?)
2. Den Pflegeplan schreiben (Ziele + Maßnahmen)
3. Prüfen ob die Pflege gewirkt hat

**Was Pflegehelfer dürfen:**
- Pflegemaßnahmen durchführen, die im Plan stehen
- Beobachtungen melden
- Aber nicht: selbst planen

Das gilt auch wenn der Helfer 20 Jahre Erfahrung hat. Denn die Verantwortung liegt beim Examen — nicht bei der Erfahrung. Du als Pflegefachperson bist verantwortlich — auch für das was andere durchführen."

- **Erklärungs-Step:** stepType `sorting` (3 Tätigkeiten sortieren: vorbehaltene Tätigkeit vs. delegierbar)
- **Glossar-Begriffe:** [Vorbehaltene Tätigkeit, § 4 PflBG, Pflegeberufegesetz, Delegation, Pflegehelfer]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Eine erfahrene Pflegehelferin darf den Pflegeplan schreiben — sie kennt die Patienten besser als neue Pflegefachpersonen"**
- **Fachbegriff:** Erfahrungs-Kompetenz-Irrtum
- **Feedback (C1, 270 Zeichen):** "Das klingt verständlich — aber es ist gesetzlich falsch. § 4 PflBG bindet die Planungskompetenz an das Examen, nicht an die Erfahrung. Erfahrung ist wertvoll und kann in die Planung einfließen — aber die Pflegefachperson muss die Entscheidung treffen und unterschreiben."
- **Feedback (B1, 245 Zeichen):** "Ich verstehe den Gedanken — aber das Gesetz sagt: kein Examen, keine Planungsverantwortung. Punkt. Die Helferin kann dir viel erzählen, du kannst es einbeziehen — aber du schreibst den Plan. Du trägst die Verantwortung."

**D2: "Pflegefachpersonen im 1. Ausbildungsjahr dürfen schon selbstständig Pflegepläne schreiben"**
- **Fachbegriff:** Ausbildungs-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — Auszubildende dürfen unter Anleitung und Aufsicht an der Planung mitwirken, aber nicht selbstständig planen. Vorbehaltene Tätigkeiten gelten für examinierte Pflegefachpersonen — das Examen ist die Voraussetzung, nicht der Ausbildungsbeginn."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Auszubildende lernen wie man plant, aber dürfen es noch nicht allein. Erst nach dem Examen ist es deine Aufgabe allein. Während der Ausbildung bist du unter Aufsicht — die Pflegefachperson ist verantwortlich."

**D3: "Delegation bedeutet: Wenn ich die Aufgabe weitergebe, bin ich nicht mehr verantwortlich"**
- **Fachbegriff:** Delegations-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — Delegation überträgt die Durchführungsverantwortung, aber nicht die Anordnungsverantwortung. Die Pflegefachperson bleibt verantwortlich dafür, dass die delegierte Maßnahme richtig ausgewählt wurde und die ausführende Person kompetent genug ist."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — auch wenn du delegierst, bist du nicht raus. Du bleibst verantwortlich dafür, dass du die richtige Aufgabe an die richtige Person gegeben hast. Wenn etwas schief geht, fragst du dich: War diese Person geeignet? Hatte sie die nötige Kompetenz?"

### Richtig-Feedback
**C1 (250 Zeichen):** "Richtig. Pflegeplanung ist eine vorbehaltene Tätigkeit nach § 4 Abs. 2 PflBG. Nur examinierte Pflegefachpersonen dürfen Pflegepläne selbstständig erstellen — unabhängig von Erfahrung, Dienstalter oder Betriebszugehörigkeit anderer Berufsgruppen."

**B1 (215 Zeichen):** "Genau. Das Gesetz ist klar: Pflegeplanung = vorbehaltene Tätigkeit. Nur du als Pflegefachperson darfst das selbstständig machen. Erfahrung zählt — aber das Examen entscheidet wer die Verantwortung trägt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum darf eine Pflegehelferin keinen Pflegeplan selbstständig schreiben?"
- **Rückseite:** "Pflegeplanung ist eine vorbehaltene Tätigkeit nach § 4 Abs. 2 PflBG. Nur examinierte Pflegefachpersonen dürfen planen, steuern und evaluieren — unabhängig von Erfahrung. Delegation überträgt Durchführung, aber nicht Planungsverantwortung."
- **Kategorie:** konzept

---

## Baustein 9: pflegemodell-orem

### Metadaten
- **bausteinId:** pflegeplanung-pflegemodell-orem
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 6 Min
- **quelleFakten:** Orem 1971

### Stufe 1 — Denkfrage
- **Frage:** "Herr Schulz kann sich seit seinem Schlaganfall nicht mehr alleine waschen. Was braucht er: Jemand der das für ihn tut — oder Unterstützung damit er es wieder selbst lernt? Was wäre besser für ihn — und warum?"
- **Step-Typ:** freetext (aktiviert Vorwissen, Bloom 4)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Dorothea Orem (1971) entwickelte die **Selbstpflegedefizit-Theorie**: Pflege ist nur dann notwendig, wenn der Mensch sein Selbstpflegesoll nicht selbst erfüllen kann. Pflege kompensiert nur das Defizit — und fördert Rückkehr zur Selbstpflege wo möglich."

**B1 (215 Zeichen):** "Orem (1971) sagt: Menschen sollen sich so weit wie möglich selbst versorgen. Pflege tritt nur ein, wenn jemand das nicht mehr allein schafft. Und Pflege hilft ihm, so viel wie möglich selbst zurückzugewinnen."

- **Step-Typ:** text (displayFormat: highlight)

### Stufe 3 — Erklärung

**C1 (690 Zeichen):**
"Dorothea Orems **Selbstpflegedefizit-Theorie** (1971) ist ein grundlegendes Pflegemodell mit drei Kernelementen:

**1. Selbstpflege (Self-Care):**
Alle Aktivitäten, die ein Mensch unternimmt um seine Gesundheit und sein Wohlbefinden aufrechtzuerhalten (Essen, Trinken, Waschen, Bewegen).

**2. Selbstpflegesoll (Self-Care Demand):**
Was jemand tun müsste um sein Wohlbefinden zu sichern. Steigt bei Krankheit oder Behandlung an.

**3. Selbstpflegedefizit:**
Wenn der Mensch sein Selbstpflegesoll nicht mehr selbst erfüllen kann — dann ist Pflege notwendig.

**Die drei Pflegesysteme nach Orem:**
- **Kompensatorisch:** Pflege übernimmt vollständig (Koma, vollständige Lähmung)
- **Teilweise kompensatorisch:** Pflege ergänzt was fehlt (Hemiplegie)
- **Unterstützend-erzieherisch:** Pflege lehrt und motiviert (Diabetes-Schulung)

Orems Modell betont: Pflege ist nicht Fürsorge ohne Ende — sie fördert Unabhängigkeit (Orem, 1971)."

**B1 (545 Zeichen):**
"Orem (1971) hat drei Fragen:

**Frage 1:** Was sollte der Patient selbst tun können? (= Selbstpflegesoll)
**Frage 2:** Was schafft er davon noch? (= Selbstpflege-Fähigkeit)
**Frage 3:** Was fehlt? Das ist das **Selbstpflegedefizit** — und genau das übernimmst du.

Drei Wege wie du hilfst:
- **Vollständig übernehmen:** Du machst alles (z.B. Bewusstloser Patient)
- **Teilweise helfen:** Du machst was er nicht schafft, er macht den Rest
- **Anleiten:** Du erklärst und übst mit ihm — er lernt es selbst wieder

Das Ziel von Orem ist immer: So viel Selbstständigkeit wie möglich. Pflege ist kein Ersatz — sie ist eine Brücke zurück zur Selbstpflege (Orem, 1971)."

- **Erklärungs-Step:** stepType `matching` (Patientensituationen → Orem-Pflegesystem zuordnen: kompensatorisch / teilweise kompensatorisch / unterstützend-erzieherisch)
- **Glossar-Begriffe:** [Selbstpflege, Selbstpflegedefizit, Selbstpflegesoll, kompensatorisch, Orem]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Pflege nach Orem bedeutet: Der Patient soll möglichst alles selbst machen — Pflege greift nur im Notfall ein"**
- **Fachbegriff:** Rückzugs-Irrtum
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — Orem sagt nicht 'nur im Notfall'. Sie sagt: Pflege übernimmt genau das Defizit. Wenn jemand 80 % selbst kann, übernimmt Pflege die 20 %. Das ist kein Notfall-Modell — es ist ein Präzisionsmodell: genau das richtige Maß an Unterstützung (Orem, 1971)."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Orem sagt nicht: 'Lass ihn kämpfen bis er nicht mehr kann'. Sie sagt: Was er nicht schafft, machst du. Genau diesen Teil. Nicht mehr, nicht weniger. Das Ziel ist Balance — nicht Rückzug der Pflege."

**D2: "Wenn ein Patient langfristig pflegebedürftig ist, entfällt das Ziel der Selbstständigkeit"**
- **Fachbegriff:** Chronizitäts-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — auch bei chronischer Pflegebedürftigkeit gilt das Prinzip der Ressourcenorientierung. Selbst wenn jemand nie wieder vollständig unabhängig wird, kann Pflege Teilfähigkeiten fördern, Würde und Kontrolle erhalten. Orem gilt auch in der Langzeitpflege."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — auch im Pflegeheim gibt es Selbstständigkeit zu fördern. Vielleicht nicht alles — aber vielleicht das Waschen des Gesichts. Oder das Essen. Orem sagt: Finde heraus was jemand noch kann — und fördere genau das."

**D3: "Orems Modell ist veraltet und wird in der modernen Pflege nicht mehr angewendet"**
- **Fachbegriff:** Modernisierungs-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — Orems Grundprinzip (Pflege kompensiert Defizite und fördert Selbstständigkeit) ist nach wie vor in vielen Pflegemodellen und Curricula verankert. Die Selbstpflegedefizit-Theorie ist eine Grundlage für ressourcenorientiertes Denken in der Pflege (Orem, 1971)."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Orem ist alt (1971), aber das Grundprinzip ist modern: Was kann der Patient noch selbst? Was muss ich übernehmen? Was kann ich fördern? Das denkst du bei jedem Patienten — das ist Orem in der Praxis."

### Richtig-Feedback
**C1 (250 Zeichen):** "Genau. Orem (1971): Pflege tritt ein wenn das Selbstpflegedefizit entsteht — und übernimmt genau diesen Teil. Drei Pflegesysteme: kompensatorisch (vollständig), teilweise kompensatorisch (ergänzend), unterstützend-erzieherisch (anleitend). Ziel: Selbstständigkeit fördern."

**B1 (215 Zeichen):** "Sehr gut. Orem sagt: Was jemand nicht schafft, übernimmst du. Nicht mehr. Und du förderst was noch geht. Drei Stufen: Alles machen / Teilweise helfen / Anleiten. Immer mit dem Ziel: so viel Selbstständigkeit wie möglich."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist das Selbstpflegedefizit nach Orem (1971)?"
- **Rückseite:** "Wenn der Mensch sein Selbstpflegesoll (was er tun müsste) nicht mehr selbst erfüllen kann. Pflege schließt genau diese Lücke. Drei Pflegesysteme: kompensatorisch / teilweise kompensatorisch / unterstützend-erzieherisch. Ziel: Selbstständigkeit maximieren."
- **Kategorie:** konzept

---

## Baustein 10: pflegemodell-krohwinkel

### Metadaten
- **bausteinId:** pflegeplanung-pflegemodell-krohwinkel
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 6 Min
- **quelleFakten:** Krohwinkel 1993

### Stufe 1 — Denkfrage
- **Frage:** "Stelle dir vor: Ein Pflegeplan soll alle wichtigen Lebensbereiche eines Patienten abdecken. Welche Bereiche würdest du spontan aufzählen — was braucht ein Mensch täglich?"
- **Step-Typ:** freetext (aktiviert Vorwissen, Bloom 4)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Monika Krohwinkel (1993) entwickelte das **ABEDL-Modell** mit 13 Aktivitäten, Beziehungen und existenziellen Erfahrungen des Lebens. Es ist das meistgenutzte Pflegemodell in Deutschland — Grundlage der Pflegedokumentation in vielen Einrichtungen."

**B1 (215 Zeichen):** "Krohwinkel (1993) hat 13 Lebensbereiche beschrieben die für jeden Menschen wichtig sind — die ABEDLs. Sie sind die Basis für viele Pflegepläne in Deutschland. Jede ABEDL kann ein Pflegeproblem werden."

- **Step-Typ:** text (displayFormat: list)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Das **ABEDL-Modell** nach Krohwinkel (1993) strukturiert Pflege in 13 Bereiche:

1. Kommunizieren können
2. Sich bewegen können
3. Vitale Funktionen aufrechterhalten können
4. Sich pflegen können
5. Essen und Trinken können
6. Ausscheiden können
7. Sich kleiden können
8. Ruhen, Schlafen, Entspannen können
9. Sich beschäftigen, lernen, sich entwickeln können
10. Die eigene Sexualität leben können
11. Für eine sichere und fördernde Umgebung sorgen können
12. Soziale Bereiche des Lebens sichern können
13. Mit existenziellen Erfahrungen des Lebens umgehen können

**In der Praxis:**
- Jede ABEDL wird beurteilt: Kann der Patient das selbstständig?
- Wenn nicht: Pflegediagnose → Pflegeziel → Maßnahmen
- Die Ressourcen des Patienten werden ABEDL-spezifisch erfasst (R im PESR)
- Krohwinkels Modell integriert den PESR — ABEDL und PESR gehören zusammen

Vorteil: Ganzheitlich — kein Lebensbereich wird vergessen (Krohwinkel, 1993)."

**B1 (545 Zeichen):**
"Krohwinkel (1993) sagt: Ein Mensch hat 13 Lebensbereiche die in der Pflege alle wichtig sind.

Die 13 ABEDLs — abgekürzt:
1. Kommunizieren
2. Sich bewegen
3. Atmen und Kreislauf (Vitalfunktionen)
4. Sich pflegen (Waschen, Zähne)
5. Essen und Trinken
6. Ausscheiden (Toilette)
7. Sich kleiden
8. Schlafen und Erholen
9. Lernen und sich beschäftigen
10. Sexualität leben
11. Sichere Umgebung
12. Soziale Kontakte
13. Mit dem Leben umgehen (Krankheit, Tod, Verlust)

Bei jedem Patienten prüfst du alle 13: Kann er das? Was fehlt? Was kann er noch? Daraus entstehen Pflegediagnosen und Pflegeziele (Krohwinkel, 1993)."

- **Erklärungs-Step:** stepType `sorting` (8 der 13 ABEDLs in die richtige Kategorie einordnen: körperlich / psychosozial / existenziell)
- **Glossar-Begriffe:** [ABEDL, Krohwinkel, Lebensaktivität, ganzheitlich, Pflegemodell]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "ABEDLs betreffen nur körperliche Aktivitäten — psychische Aspekte gehören nicht dazu"**
- **Fachbegriff:** Körper-Fokus-Irrtum
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — das ABEDL-Modell ist ausdrücklich ganzheitlich. 'Soziale Bereiche sichern können' und 'Mit existenziellen Erfahrungen umgehen können' sind eigene ABEDLs. Krohwinkel wollte keine rein körperliche Pflege — sie wollte den ganzen Menschen erfassen (Krohwinkel, 1993)."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Krohwinkel hat auch ABEDLs für soziale Kontakte und den Umgang mit Krankheit und Tod. Es geht nicht nur ums Waschen und Essen. Die Seele, die Beziehungen, das Leben — alles gehört dazu."

**D2: "Das ABEDL-Modell muss für jeden Patienten vollständig ausgefüllt werden — alle 13 ABEDLs"**
- **Fachbegriff:** Vollständigkeits-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — alle 13 ABEDLs werden eingeschätzt, aber es werden nur Pflegediagnosen gestellt, wo tatsächlich ein Problem oder Risiko besteht. Ein Patient nach Knie-OP braucht keine Pflegediagnose für 'Kommunizieren' wenn er problemlos kommunizieren kann."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — du schaust dir alle 13 an. Aber du schreibst nur Pflegediagnosen für die Bereiche wo tatsächlich etwas fehlt. Wo alles funktioniert, brauchst du keinen Plan. Nur wo Probleme oder Risiken sind."

**D3: "AEDL und ABEDL sind dasselbe — Krohwinkel hat den Begriff nur umbenannt"**
- **Fachbegriff:** Modell-Verwechslung
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — AEDL (Aktivitäten und existenzielle Erfahrungen des Lebens) war Krohwinkels früheres Modell mit 12 Bereichen. ABEDL (1993) ergänzt das B für 'Beziehungen' — also Interaktion und Kommunikation als eigenständige Dimension. Es ist eine inhaltliche Erweiterung."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Krohwinkel hat ihr Modell weiterentwickelt. Das B steht für Beziehungen — soziale Kontakte sind also extra aufgeführt. Das alte Modell hieß AEDL, das neuere ABEDL. Das B macht den Unterschied."

### Richtig-Feedback
**C1 (250 Zeichen):** "Genau. Das ABEDL-Modell (Krohwinkel, 1993) umfasst 13 Lebensbereiche: körperlich, psychosozial und existenziell. Es ist ganzheitlich — alle 13 werden eingeschätzt, Pflegediagnosen nur wo Probleme oder Risiken bestehen. Häufigstes Pflegemodell in Deutschland."

**B1 (215 Zeichen):** "Sehr gut. Krohwinkel hat 13 ABEDLs — von Atmen bis zum Umgang mit dem Tod. Alle werden angeschaut. Pflegediagnosen schreibst du nur wo etwas fehlt oder riskant ist. Ganzheitlich — Körper, Seele, Beziehungen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wofür steht ABEDL und wie viele gibt es nach Krohwinkel (1993)?"
- **Rückseite:** "Aktivitäten, Beziehungen und existenzielle Erfahrungen des Lebens. 13 Bereiche — von Kommunizieren über Schlafen bis zum Umgang mit existenziellen Erfahrungen (Krankheit, Verlust, Tod). Ganzheitliches Pflegemodell, Standard in Deutschland."
- **Kategorie:** konzept

---

## Baustein 11: pflegemodell-roper-logan-tierney

### Metadaten
- **bausteinId:** pflegeplanung-pflegemodell-rlt
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** Roper/Logan/Tierney 1980

### Stufe 1 — Denkfrage
- **Frage:** "Du hast jetzt Orem und Krohwinkel kennengelernt. Was glaubst du: Welches Pflegemodell aus dem englischsprachigen Raum könnte ähnlich aufgebaut sein wie die ABEDLs — aber aus Großbritannien?"
- **Step-Typ:** freetext (aktiviert Transfers, Bloom 4)

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Nancy Roper, Winifred Logan und Alison Tierney (1980) entwickelten das **Activities of Living (AL)-Modell** mit 12 Lebensaktivitäten. Es ist das meistgenutzte Pflegemodell in Großbritannien — und war Vorbild für Krohwinkels ABEDL."

**B1 (210 Zeichen):** "Roper, Logan und Tierney (1980) haben 12 Lebensaktivitäten beschrieben — ähnlich wie Krohwinkels ABEDLs, aber aus Großbritannien. Sie waren vor Krohwinkel da und haben ihr Modell beeinflusst."

- **Step-Typ:** text (displayFormat: comparison)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Das **Activities of Living (AL)-Modell** nach Roper/Logan/Tierney (1980) beschreibt 12 Lebensaktivitäten:

1. Für eine sichere Umgebung sorgen
2. Kommunizieren
3. Atmen
4. Essen und Trinken
5. Ausscheiden
6. Persönliche Reinigung und Kleidung
7. Körpertemperatur regulieren
8. Mobilisieren
9. Arbeiten und Spielen
10. Sexualität ausdrücken
11. Schlafen
12. Sterben (als Lebensaktivität — einzigartig im RLT-Modell)

**Kernkonzept:** Jeder Mensch bewegt sich auf einem **Abhängigkeit-Unabhängigkeits-Kontinuum** — von völlig abhängig (Neugeborenes) bis völlig unabhängig. Pflege verschiebt diesen Punkt.

**Vergleich mit ABEDL:**
- RLT: 12 Aktivitäten, Kontinuum-Modell, britischer Standard
- ABEDL: 13 Bereiche, ergänzt um Beziehungen und existenzielle Erfahrungen, deutscher Standard

Beide Modelle betonen: Pflege analysiert Aktivitäten — und fördert Unabhängigkeit (Roper/Logan/Tierney, 1980)."

**B1 (545 Zeichen):**
"Roper, Logan und Tierney (1980) — drei Pflegerinnen aus Großbritannien — haben 12 Lebensaktivitäten aufgelistet.

Die 12 AL:
1. Sichere Umgebung
2. Kommunizieren
3. Atmen
4. Essen und Trinken
5. Ausscheiden
6. Sich waschen und kleiden
7. Körpertemperatur regulieren
8. Sich bewegen
9. Arbeiten und spielen
10. Sexualität
11. Schlafen
12. **Sterben** (das ist besonders — Tod als Lebensaktivität)

**Wichtig:** Roper/Logan/Tierney sagen: Jeder Mensch liegt auf einem Streifen zwischen 'alles selbst' und 'braucht alles'. Pflege schiebt ihn Richtung Selbstständigkeit — soweit möglich (Roper/Logan/Tierney, 1980)."

- **Erklärungs-Step:** stepType `matching` (RLT-Aktivitäten ↔ ABEDL-Bereiche vergleichen: Gemeinsamkeiten / Unterschiede finden, 4 Paare)
- **Glossar-Begriffe:** [Activities of Living, AL, Roper Logan Tierney, Abhängigkeits-Kontinuum, britisches Pflegemodell]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Das RLT-Modell und das ABEDL-Modell sind identisch — nur die Namen unterscheiden sich"**
- **Fachbegriff:** Modell-Gleichsetzungs-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — beide Modelle haben Ähnlichkeiten (Lebensaktivitäten, Unabhängigkeitsorientierung), aber unterscheiden sich inhaltlich. RLT hat 12 AL ohne eigenständige Beziehungsdimension. ABEDL hat 13 Bereiche mit expliziten Beziehungen. Beide sind eigenständige Modelle (Krohwinkel, 1993)."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — ähnlich ja, gleich nein. RLT hat 12, ABEDL hat 13. Das B in ABEDL (Beziehungen) gibt es bei RLT nicht so. Außerdem: RLT kommt aus Großbritannien, ABEDL ist für Deutschland angepasst."

**D2: "Das RLT-Modell wird in Deutschland genauso häufig verwendet wie das ABEDL-Modell"**
- **Fachbegriff:** Verbreitungs-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — in Deutschland dominiert das ABEDL-Modell nach Krohwinkel. RLT ist vor allem im britischen und internationalen Kontext verbreitet. In deutschen Pflegedokumentationssystemen ist ABEDL Standard. RLT ist Referenzmodell für Vergleiche und akademische Diskussion."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — in Deutschland nutzt man hauptsächlich ABEDL. RLT kommt aus Großbritannien und wird dort genutzt. Du wirst im deutschen Pflegealltag ABEDL begegnen — RLT lernst du zum Vergleich und Verständnis."

**D3: "Das Sterben als Lebensaktivität im RLT-Modell bedeutet Sterbehilfe"**
- **Fachbegriff:** Sterbehilfe-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nein — 'Sterben' als Lebensaktivität bei Roper/Logan/Tierney bedeutet: Pflege begleitet Menschen beim Sterben und hilft ihnen, würdevoll zu sterben. Es ist keine Sterbehilfe, sondern Palliativpflege und Sterbebegleitung — eine eigenständige Pflegeaufgabe (Roper/Logan/Tierney, 1980)."
- **Feedback (B1, 230 Zeichen):** "Nein — das bedeutet keine Sterbehilfe. Es bedeutet: Sterben ist Teil des Lebens, und Pflege begleitet auch diesen Moment. Würdevoll sterben können — das ist eine Pflegeaufgabe. Das nennt man Sterbebegleitung oder Palliativpflege."

### Richtig-Feedback
**C1 (250 Zeichen):** "Genau. RLT (1980): 12 Activities of Living, Abhängigkeits-Unabhängigkeits-Kontinuum. Pflege verschiebt diesen Punkt Richtung Unabhängigkeit. Besonderes Merkmal: 'Sterben' als eigenständige Aktivität. Einfluss auf Krohwinkels ABEDL nachweisbar."

**B1 (215 Zeichen):** "Sehr gut. 12 Lebensaktivitäten, britischer Standard. Besonders: Sterben gehört dazu. Jeder liegt auf einem Streifen von 'alles selbst' bis 'braucht alles'. Pflege schiebt ihn soweit wie möglich Richtung Selbstständigkeit."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist das Kernkonzept des RLT-Modells (Roper/Logan/Tierney, 1980)?"
- **Rückseite:** "12 Activities of Living. Jeder Mensch bewegt sich auf einem Abhängigkeits-Unabhängigkeits-Kontinuum. Pflege verschiebt diesen Punkt. Besonderes Merkmal: 'Sterben' als Lebensaktivität. Britischer Standard, Vorbild für Krohwinkels ABEDL."
- **Kategorie:** konzept

---

## Baustein 12: pflegeplan-aktualisieren

### Metadaten
- **bausteinId:** pflegeplanung-pflegeplan-aktualisieren
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** NANDA-I 2021, Krohwinkel 1993

### Stufe 1 — Denkfrage
- **Frage:** "Du hast am Montag einen Pflegeplan für Frau Schmidt geschrieben. Am Donnerstag liegt er unverändert da. Frau Schmidt hat sich verbessert — aber im Plan steht noch das gleiche. Was ist das Problem?"
- **Step-Typ:** freetext (aktiviert Problemverständnis, Bloom 4)

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Ein Pflegeplan der nicht aktualisiert wird, spiegelt nicht die aktuelle Situation des Patienten. Evaluation ist die letzte Phase des Pflegeprozesses — und sie muss mindestens **einmal pro Dienst** stattfinden."

**B1 (210 Zeichen):** "Ein Pflegeplan muss aktuell sein. Was vor 3 Tagen stimmte, stimmt heute vielleicht nicht mehr. Deshalb prüfst du den Plan mindestens einmal pro Dienst — und änderst ihn wenn sich etwas verändert hat."

- **Step-Typ:** text (displayFormat: highlight)

### Stufe 3 — Erklärung

**C1 (685 Zeichen):**
"**Pflegeplan-Evaluation** ist keine optionale Zusatzaufgabe — sie ist Phase 5 des Pflegeprozesses.

**Wann wird evaluiert?**
- Mindestens **1× pro Dienst** (Früh-, Spät-, Nachtdienst)
- Bei jeder wesentlichen Veränderung des Patientenzustands
- Nach jeder Pflegemaßnahme deren Wirksamkeit in Frage steht
- Beim Übergang in eine neue Versorgungssituation (Entlassung, Verlegung)

**Was wird evaluiert?**
- Wurde das Pflegeziel erreicht? (Vollständig, teilweise, gar nicht)
- Hat die Maßnahme gewirkt?
- Hat sich das Problem verändert (besser, gleich, schlechter)?
- Müssen Ziel oder Maßnahmen angepasst werden?

**Konsequenzen:**
- Ziel erreicht → Pflegediagnose abschließen, neue setzen falls nötig
- Ziel teilweise erreicht → Maßnahmen anpassen, Zeitrahmen verlängern
- Ziel nicht erreicht → Ursache suchen, Strategie wechseln

Ein nicht aktualisierter Plan ist keine neutrale Situation — er ist ein Fehler in der Pflegedokumentation (NANDA-I, 2021)."

**B1 (540 Zeichen):**
"Der Pflegeplan muss immer aktuell sein. Deshalb evaluierst du ihn mindestens **einmal pro Dienst**.

**Was du prüfst:**
- Hat die Maßnahme gewirkt?
- Hat der Patient sein Pflegeziel erreicht?
- Hat sich sein Zustand verändert?

**Was du dann tust:**
- Ziel erreicht → Pflegediagnose abschließen. Neue wenn nötig.
- Teilweise erreicht → Maßnahme anpassen oder Zeit verlängern
- Nicht erreicht → Warum? Andere Strategie überlegen

**Beispiel:**
Montag: 'Frau Schmidt kann mit Hilfe aufstehen'. Donnerstag: Sie steht allein auf. Plan muss sich ändern — jetzt ist es 'selbstständig aufstehen mit Überwachung'. Ein alter Plan lügt (NANDA-I, 2021)."

- **Erklärungs-Step:** stepType `branching` (Fallbeispiel: Patientenzustand hat sich verändert — drei Optionen was du mit dem Plan machst — Konsequenzen)
- **Glossar-Begriffe:** [Evaluation, Pflegeprozess Phase 5, Zielanpassung, Pflegedokumentation]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Ein Pflegeplan muss nur aktualisiert werden wenn sich der Zustand des Patienten deutlich verschlechtert"**
- **Fachbegriff:** Verschlechterungs-Bias
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — Aktualisierung ist auch notwendig wenn sich der Patient verbessert. Ein erreichtes Pflegeziel bedeutet: neue Pflegediagnose, neues Ziel. Wer nur bei Verschlechterung aktualisiert, dokumentiert keine Verbesserungen — und das ist kein vollständiger Pflegeprozess."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — auch Verbesserung verändert den Plan. Wenn Frau Schmidt plötzlich alleine aufsteht, musst du das dokumentieren und das Ziel anpassen. Verbesserung ohne Plananpassung ist genauso falsch wie ignorierte Verschlechterung."

**D2: "Evaluation heißt: schauen ob die Pflegemaßnahmen durchgeführt wurden — nicht ob sie gewirkt haben"**
- **Fachbegriff:** Prozess-Ergebnis-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — Evaluation prüft nicht nur ob Maßnahmen durchgeführt wurden (Prozessqualität), sondern ob sie gewirkt haben (Ergebnisqualität). Beide Fragen gehören dazu: 'Wurde die Lagerung gemacht?' UND 'Hat die Lagerung das Dekubitusrisiko reduziert?'"
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — zwei Fragen gehören zur Evaluation: 'Haben wir die Maßnahme gemacht?' und 'Hat sie etwas gebracht?'. Beides ist wichtig. Gemacht aber nicht gewirkt → andere Strategie. Nicht gemacht → warum nicht?"

**D3: "Wenn ein Pflegeziel nicht erreicht wurde, muss der Zeitrahmen verlängert werden"**
- **Fachbegriff:** Zeitrahmen-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht zwingend — manchmal ist der Zeitrahmen unrealistisch, manchmal aber ist die Strategie falsch. Bevor der Zeitrahmen verlängert wird, muss die Ursache analysiert werden: Warum wurde das Ziel nicht erreicht? War das Ziel realistisch? War die Maßnahme geeignet?"
- **Feedback (B1, 230 Zeichen):** "Nicht immer — manchmal ist das Ziel nicht erreicht weil die Maßnahme falsch war. Bevor du mehr Zeit gibst, frag dich: Warum hat es nicht geklappt? War das Ziel realistisch? War die Methode die richtige? Dann entscheidest du ob mehr Zeit hilft oder eine neue Idee nötig ist."

### Richtig-Feedback
**C1 (250 Zeichen):** "Genau. Evaluation ist Phase 5 des Pflegeprozesses — mindestens 1× pro Dienst. Sie prüft Prozess- UND Ergebnisqualität. Konsequenzen: Ziel erreicht → abschließen, teilweise → anpassen, nicht erreicht → Ursache analysieren, Strategie wechseln (NANDA-I, 2021)."

**B1 (215 Zeichen):** "Sehr gut. Mindestens einmal pro Dienst: Hat die Maßnahme gewirkt? Hat sich etwas verändert? Dann Plan anpassen. Ziel erreicht → abhaken und neues setzen. Nicht erreicht → Ursache suchen und anderen Weg finden."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie oft muss der Pflegeplan mindestens evaluiert werden — und was wird dabei geprüft?"
- **Rückseite:** "Mindestens 1× pro Dienst. Geprüft wird: (1) Wurde die Maßnahme durchgeführt? (2) Hat sie gewirkt? (3) Ist das Ziel erreicht? Konsequenzen: Ziel erreicht → abschließen. Teilweise → anpassen. Nicht erreicht → Ursache suchen, Strategie wechseln."
- **Kategorie:** handlung

---

## Baustein 13: pflegeplan-schreiben-praxis

### Metadaten
- **bausteinId:** pflegeplanung-pflegeplan-schreiben-praxis
- **bloomLevel:** 5
- **wissensart:** konzept
- **zeitBudget:** 7 Min
- **quelleFakten:** NANDA-I 2021, Doran 1981 (SMART)

### Stufe 1 — Denkfrage
- **Frage:** "Zwei Pflegeziele für dieselbe Patientin: (A) 'Frau Yilmaz soll sich besser fühlen.' (B) 'Frau Yilmaz steht bis Freitag mit Hilfe einer Pflegeperson auf und belastet beide Beine für 5 Sekunden.' Welches ist ein gutes Pflegeziel — und warum?"
- **Step-Typ:** mc (vergleichende Bewertung, Bloom 5)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Ein gutes Pflegeziel ist **patientenzentriert, konkret und messbar** (SMART: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert). 'Besser fühlen' ist nicht messbar. '5 Sekunden belasten bis Freitag' ist messbar, terminiert und konkret."

**B1 (215 Zeichen):** "Ein gutes Pflegeziel hat 3 Merkmale: (1) Es beschreibt den Patienten, nicht die Pflegeperson. (2) Man kann nachher prüfen ob es erreicht wurde. (3) Es hat eine Zeitangabe. 'Besser fühlen' schafft das nicht — 'steht bis Freitag auf' schon."

- **Step-Typ:** text (displayFormat: comparison)

### Stufe 3 — Erklärung

**C1 (695 Zeichen):**
"Ein professionell formuliertes Pflegeziel hat fünf SMART-Kriterien (Doran, 1981):

**S — Spezifisch:** Was genau soll der Patient können? Nicht 'mobiler werden', sondern 'selbstständig vom Bett zum Stuhl wechseln'.
**M — Messbar:** Woran erkennt man die Zielerreichung? Grad der Selbstständigkeit, Schmerzskala (0-10), Distanz in Metern.
**A — Attraktiv (=Patientenrelevant):** Ist das Ziel für den Patienten bedeutsam? Ein Ziel das der Patient nicht will, wird er nicht verfolgen.
**R — Realistisch:** Kann der Patient das tatsächlich erreichen? Zu hoch gesetzt = Frustration. Zu niedrig = kein Fortschritt.
**T — Terminiert:** Bis wann? 'Bis Freitag', 'nach 3 Wochen', 'bei nächster Visite'.

**Formulierungsregel:**
- Patient steht im Mittelpunkt: 'Frau Yilmaz...' — nicht 'Wir werden...' oder 'Pflege führt durch...'
- Aktiv formulieren: 'steht auf' — nicht 'wird aufgestellt'
- Beobachtbar: jede Pflegeperson kann prüfen ob das Ziel erreicht ist

Pflegeziele die nicht SMART sind, können nicht evaluiert werden — und damit schlägt Phase 5 des Pflegeprozesses fehl (NANDA-I, 2021)."

**B1 (540 Zeichen):**
"Ein gutes Pflegeziel folgt dem **SMART-Prinzip** (Doran, 1981):

S = Spezifisch: Was genau?
M = Messbar: Woran erkennt man es?
A = Attraktiv: Will der Patient das überhaupt?
R = Realistisch: Ist es möglich?
T = Terminiert: Bis wann?

**Schlecht:** 'Herr Fischer soll mobiler werden.' (nicht messbar, keine Zeit)
**Gut:** 'Herr Fischer geht bis Donnerstag mit Rollator 10 Meter auf dem Flur.' (messbar, terminiert, konkret)

**Wichtig:** Das Ziel beschreibt immer den Patienten — nicht was du tust. 'Herr Fischer geht' — nicht 'Wir begleiten Herrn Fischer'. Du bist im Plan, er ist im Ziel (NANDA-I, 2021)."

- **Erklärungs-Step:** stepType `freetext` (Eigenes Pflegeziel für einen Patienten formulieren — KI bewertet auf SMART-Kriterien)
- **Glossar-Begriffe:** [SMART-Ziel, patientenzentriert, messbar, Zielformulierung, Pflegeziel]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Pflegeziele beschreiben was die Pflegeperson tut — z.B. 'Wir lagern Herrn Müller alle 2 Stunden'"**
- **Fachbegriff:** Maßnahmen-Ziel-Verwechslung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — 'Wir lagern alle 2 Stunden' ist eine Pflegemaßnahme, kein Pflegeziel. Das Pflegeziel beschreibt immer den Zustand des Patienten: 'Herr Müller hat bis Freitag keine neuen Druckstellen.' Die Maßnahme ist der Weg zum Ziel — nicht das Ziel selbst."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — was du tust ist eine Maßnahme. Das Ziel beschreibt den Patienten: Was soll er können, haben oder nicht haben? 'Herr Müller hat keine neuen Druckstellen' — das ist ein Ziel. 'Wir lagern ihn' ist der Weg dahin."

**D2: "Ein Pflegeziel ist gut wenn es ambitioniert ist — auch wenn es für den Patienten schwer erreichbar ist"**
- **Fachbegriff:** Überforderungs-Bias
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — das R in SMART steht für Realistisch. Ein unerreichbares Ziel frustriert den Patienten und macht Evaluation sinnlos. Gute Pflegeziele sind herausfordernd aber erreichbar — angepasst an die tatsächlichen Fähigkeiten und Ressourcen des Patienten."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — zu hoch gesteckte Ziele frustrieren. Das Ziel muss machbar sein. Wenn jemand nach einem Schlaganfall 3 Tage alt ist, wird er nicht bis Freitag alleine gehen. Realistisch bedeutet: passend zur echten Situation des Patienten."

**D3: "Wenn ein Ziel nicht messbar ist, kann man es trotzdem verwenden — wichtig ist die Intention"**
- **Fachbegriff:** Intentions-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — nicht messbare Ziele können nicht evaluiert werden. Wie soll ich prüfen ob 'sich besser fühlen' erreicht ist? Ohne Messbarkeit bleibt die Evaluation subjektiv. Das M in SMART ist kein Bonus-Kriterium — es ist die Grundlage für Phase 5 des Pflegeprozesses."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — wenn du das Ziel nicht messen kannst, weißt du nie ob du fertig bist. 'Besser fühlen' — wann ist das genug? Ohne Messbarkeit kannst du nicht evaluieren. Und ohne Evaluation ist der Pflegeprozess nicht vollständig."

### Richtig-Feedback
**C1 (250 Zeichen):** "Genau. SMART-Pflegeziele (Doran, 1981): Spezifisch, Messbar, Attraktiv (patientenrelevant), Realistisch, Terminiert. Pflegeziele beschreiben den Patientenzustand — aktiv, beobachtbar, in der Ich-Perspektive des Patienten formuliert (NANDA-I, 2021)."

**B1 (215 Zeichen):** "Sehr gut. SMART: konkret, messbar, für den Patienten wichtig, realistisch, mit Zeitangabe. Das Ziel beschreibt den Patienten — nicht was du tust. Und es muss so klar sein dass jede Pflegeperson prüfen kann ob es erreicht wurde."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet SMART bei der Pflegezielformulierung?"
- **Rückseite:** "S = Spezifisch, M = Messbar, A = Attraktiv (patientenrelevant), R = Realistisch, T = Terminiert. Pflegeziele beschreiben immer den Patienten (aktiv), nicht die Pflegemaßnahme. Beispiel: 'Herr Fischer geht bis Donnerstag 10 Meter mit Rollator.'"
- **Kategorie:** handlung

---

## Baustein 14: ressourcen-orientiert

### Metadaten
- **bausteinId:** pflegeplanung-ressourcen-orientiert
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** Krohwinkel 1993, NANDA-I 2021

### Stufe 1 — Denkfrage
- **Frage:** "Frau Nowak, 82 Jahre, Schlaganfall vor 4 Wochen. Sie kann den rechten Arm nicht mehr heben. Aber: Sie schreibt mit links, dreht sich im Bett alleine, kennt alle ihre Medikamente auswendig und witzelt mit dem Pflegepersonal. Was davon ist für die Pflege wichtig — und warum?"
- **Step-Typ:** freetext (Ressourcen erkennen, Bloom 4)

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Ressourcenorientierte Pflege bedeutet: Nicht nur das **Defizit** erfassen — sondern auch was der Patient noch kann, will und weiß. Diese Rest-Fähigkeiten sind die Basis für realistische Pflegeziele und für die Förderung von Selbstständigkeit."

**B1 (210 Zeichen):** "Ressourcen sind alles was der Patient noch kann — körperlich, geistig, sozial. Nicht nur Probleme erfassen, sondern auch Stärken. Denn Pflegeziele bauen immer auf das auf was noch geht — nicht auf das was fehlt."

- **Step-Typ:** text (displayFormat: highlight)

### Stufe 3 — Erklärung

**C1 (690 Zeichen):**
"**Ressourcenorientierte Pflegeplanung** ist ein Grundprinzip der deutschen Pflege — verankert im R des PESR-Schemas und im ABEDL-Modell.

**Drei Arten von Ressourcen:**
1. **Körperliche Ressourcen:** Was kann der Patient physisch noch? (Arm heben, drehen, schlucken, stehen)
2. **Kognitive Ressourcen:** Was weiß und denkt er noch? (Medikamente kennen, orientiert sein, Probleme benennen)
3. **Soziale Ressourcen:** Wen hat er? (Familie, Freunde, Pflegenetzwerk, Gemeinde)

**Warum Ressourcen erfassen?**
- Pflegeziele müssen auf vorhandenen Fähigkeiten aufbauen — sonst sind sie unrealistisch
- Ressourcen zeigen wo Selbstständigkeit möglich ist — und verhindern Übernahme von Aufgaben die der Patient selbst erledigen kann
- Ressourcen sind motivierend: 'Sie können das schon — das bauen wir aus'
- Ohne Ressourcenerfassung entstehen defizitorientierte Pläne die den Patienten klein machen

Rehabilitierende Pflege nach Krohwinkel (1993): Stärken stärken — nicht nur Schwächen kompensieren."

**B1 (540 Zeichen):**
"Ressourcen = was der Patient noch kann.

**Drei Kategorien:**
1. **Körperlich:** Bewegt er sich? Schafft er selbst zu essen? Kann er schlucken?
2. **Geistig:** Kennt er seine Medikamente? Ist er orientiert? Kann er Probleme benennen?
3. **Sozial:** Hat er Familie? Freunde? Wer unterstützt ihn zuhause?

**Warum ist das wichtig?**
- Pflegeziele bauen immer auf Ressourcen auf: 'Sie können schon X — als Nächstes schaffen Sie Y'
- Ressourcen verhindern dass du Aufgaben übernimmst die der Patient selbst erledigen kann
- Ressourcen motivieren — jemanden auf seine Stärken hinweisen hilft

Krohwinkel (1993) sagt: Rehabilitierende Pflege stärkt Stärken — nicht nur Schwächen auffangen."

- **Erklärungs-Step:** stepType `sorting` (Fallangaben sortieren: Defizit / körperliche Ressource / kognitive Ressource / soziale Ressource)
- **Glossar-Begriffe:** [Ressource, Ressourcenorientierung, rehabilitierende Pflege, Defizit, Rest-Fähigkeit]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Ressourcen sind optional — im Pflegeplan muss man nur die Probleme dokumentieren"**
- **Fachbegriff:** Defizit-Fokus-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — im PESR-Schema ist das R für Ressourcen Pflichtbestandteil einer Pflegediagnose, nicht optional. Ohne Ressourcenerfassung fehlt die Grundlage für das Pflegeziel. Ein reiner Defizitplan widerspricht dem Prinzip der rehabilitierenden Pflege (Krohwinkel, 1993)."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — das R im PESR steht für Ressourcen. Das gehört dazu. Wenn du nur Probleme aufschreibst, weißt du nicht worauf du aufbauen kannst. Ressourcen sind nicht Bonus — sie sind die Grundlage für realistische Pflegeziele."

**D2: "Wenn ein Patient sehr krank ist, hat er keine Ressourcen mehr"**
- **Fachbegriff:** Ressourcen-Blindheit
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — selbst schwer kranke Menschen haben Ressourcen. Ein dementer Patient der nicht mehr sprechen kann, erkennt vielleicht vertraute Gesichter (soziale Ressource). Ein gelähmter Patient atmet selbstständig. Ressourcen zu übersehen bedeutet Pflege zu übernehmen die der Patient selbst könnte."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — auch wenn jemand sehr krank ist, gibt es Ressourcen. Vielleicht kann er nicht sprechen — aber er erkennt seine Tochter. Vielleicht kann er den rechten Arm nicht heben — aber mit links schreibt er noch. Ressourcen sind immer da, wenn man genau schaut."

**D3: "Ressourcen zu betonen ist unrealistisch — schwer kranke Patienten wollen keine falsche Hoffnung"**
- **Fachbegriff:** Hoffnungs-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — Ressourcenorientierung ist keine falsche Hoffnung, sondern realistische Stärkenerfassung. Unterschied: 'Sie werden wieder laufen' (falsche Hoffnung) vs. 'Sie können noch den linken Arm einsetzen — das nutzen wir' (Ressourcenorientierung). Ehrlich und motivierend zugleich."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Ressourcen zu nennen heißt nicht: 'Du wirst wieder gesund'. Es heißt: 'Das kannst du noch — das nutzen wir'. Das ist ehrlich. Und es hilft. Denn wer seine eigenen Stärken sieht, glaubt eher daran dass er vorankommen kann."

### Richtig-Feedback
**C1 (250 Zeichen):** "Genau. Ressourcenorientierte Pflege erfasst drei Kategorien: körperlich, kognitiv, sozial. Sie sind Pflichtbestandteil (R im PESR) und Grundlage für Pflegeziele. Rehabilitierende Pflege nach Krohwinkel (1993): Stärken stärken — nicht nur Schwächen kompensieren."

**B1 (215 Zeichen):** "Sehr gut. Ressourcen = was der Patient noch kann. Körperlich, geistig, sozial. Das R im PESR ist Pflicht. Pflegeziele bauen auf Ressourcen auf. Wer Ressourcen übersieht, übernimmt Aufgaben die der Patient selbst erledigen könnte."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was sind Ressourcen in der Pflegeplanung — und welche drei Kategorien gibt es?"
- **Rückseite:** "Ressourcen = Rest-Fähigkeiten des Patienten. Drei Kategorien: (1) körperlich (was kann er physisch?), (2) kognitiv (was weiß und denkt er?), (3) sozial (wen hat er?). Pflichtbestandteil im PESR-Schema (R). Grundlage für Pflegeziele. Rehabilitierende Pflege nach Krohwinkel (1993)."
- **Kategorie:** konzept

---

## Baustein 15: partizipative-planung

### Metadaten
- **bausteinId:** pflegeplanung-partizipative-planung
- **bloomLevel:** 5
- **wissensart:** konzept
- **zeitBudget:** 7 Min
- **quelleFakten:** Elwyn SDM 2012, NANDA-I 2021

### Stufe 1 — Denkfrage
- **Frage:** "Du planst für Herrn Okafor eine Mobilisation um 07:00 Uhr. Er sagt: 'Ich schlafe nie vor 24:00, ich brauche morgens mehr Zeit.' Was tust du?"
- **Step-Typ:** branching (3 Optionen mit Konsequenzen, Bloom 5)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Partizipative Planung bedeutet: Patienten und Bezugspersonen werden aktiv in die Pflegeplanung einbezogen. Grundlage ist das **Shared Decision Making (SDM)** nach Elwyn (2012): Pflegefachperson und Patient bringen je ihre Expertise ein — und entscheiden gemeinsam."

**B1 (215 Zeichen):** "Partizipativ = gemeinsam. Du planst nicht für den Patienten — du planst mit ihm. Er kennt sein Leben, du kennst die Pflege. Zusammen entsteht ein Plan der wirklich funktioniert — weil der Patient dahintersteht."

- **Step-Typ:** text (displayFormat: highlight)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"**Partizipative Pflegeplanung** nach dem SDM-Modell (Elwyn, 2012) hat vier Schritte:

**Schritt 1 — Informieren:**
'Ich würde für Sie folgende Maßnahmen empfehlen — und zwar weil...' Fachwissen der Pflegefachperson transparent machen.

**Schritt 2 — Präferenzen erfragen:**
'Was ist Ihnen wichtig? Was möchten Sie auf keinen Fall? Welche Maßnahmen passen zu Ihrem Alltag?' Lebenswissen des Patienten einbeziehen.

**Schritt 3 — Gemeinsam entscheiden:**
Fachwissen + Lebenswissen = Plan der realistisch UND akzeptiert ist. Kompromisse möglich, aber begründet dokumentiert.

**Schritt 4 — Dokumentieren:**
Präferenzen und gemeinsame Entscheidung im Pflegeplan festhalten — damit alle Pflegepersonen wissen was vereinbart wurde.

**Sonderfälle:**
- Demenziell erkrankt: mutmaßlichen Willen und gesetzliche Vertretung einbeziehen
- Kinder: Eltern einbeziehen, aber Präferenzen des Kindes berücksichtigen
- Mindeststandard: auch wenn Vollteilhabe unmöglich ist — informieren und Wille berücksichtigen (Elwyn, 2012)."

**B1 (545 Zeichen):**
"Shared Decision Making (SDM) — gemeinsam entscheiden — in 4 Schritten:

1. **Erklären:** 'Das würde ich empfehlen — weil...'
2. **Fragen:** 'Was ist Ihnen wichtig? Was möchten Sie nicht?'
3. **Gemeinsam entscheiden:** Dein Fachwissen + sein Lebenswissen = guter Plan
4. **Dokumentieren:** Vereinbarung in den Plan schreiben

**Warum?**
- Ein Plan den der Patient mitgemacht hat, wird er einhalten
- Ein Plan den du alleine geschrieben hast, kann scheitern weil er nicht zu seinem Leben passt

**Beispiel:** Herr Okafor schläft bis 09:00. Plan auf 09:00 anpassen — nicht auf 07:00 bestehen. Das ist kein Nachgeben — das ist kluges Planen (Elwyn, 2012)."

- **Erklärungs-Step:** stepType `branching` (Fallbeispiel: Patient lehnt Maßnahme ab — drei Optionen mit Konsequenzen)
- **Glossar-Begriffe:** [Shared Decision Making, SDM, Patientenautonomie, partizipativ, mutmaßlicher Wille, Patientenverfügung]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Die Pflegefachperson weiß am besten was gut für den Patienten ist — der Patient soll folgen"**
- **Fachbegriff:** Paternalismus-Irrtum
- **Feedback (C1, 270 Zeichen):** "Das nennt man Paternalismus: für jemanden entscheiden weil man meint es besser zu wissen. In der modernen Pflege gilt Patientenautonomie. Die Pflegefachperson hat Fachkompetenz — aber der Patient hat Lebenskompetenz. Gute Pflege verbindet beides — deshalb SDM (Elwyn, 2012)."
- **Feedback (B1, 245 Zeichen):** "Das klingt fürsorglich — aber es ist Paternalismus: du entscheidest für jemanden ohne zu fragen. Die Pflegeperson kennt die Pflege. Der Patient kennt sein Leben. Wenn du allein entscheidest, machst du Fehler die du nicht siehst. Deshalb fragst du zuerst."

**D2: "Partizipative Planung ist zeitaufwendig — in der Praxis bleibt dafür keine Zeit"**
- **Fachbegriff:** Ressourcen-Resignation
- **Feedback (C1, 260 Zeichen):** "Ein verständlicher Gedanke — aber eine Kurzinvestition am Anfang spart Zeit danach. Ein Plan den der Patient nicht akzeptiert führt zu Ablehnung, Konflikten und schlechtem Therapieerfolg. 2 Minuten nachfragen zu Beginn spart Stunden an Korrekturaufwand danach (Elwyn, 2012)."
- **Feedback (B1, 235 Zeichen):** "Ich verstehe den Gedanken — aber: Ein Plan den der Patient ablehnt kostet noch mehr Zeit. Konflikte, Verweigerung, schlechter Verlauf. 2 Minuten fragen am Anfang spart Stunden danach. Partizipation geht auch schnell."

**D3: "Wenn der Patient verwirrt oder demenziell erkrankt ist, entfällt Shared Decision Making"**
- **Fachbegriff:** Einschränkungs-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — auch bei eingeschränkter Entscheidungsfähigkeit bleibt die Pflicht, den mutmaßlichen Willen zu berücksichtigen. Gibt es eine Patientenverfügung? Wer hat Vorsorgevollmacht? Was würde die Person wollen? SDM bedeutet nicht immer direktes Gespräch — manchmal ist es Recherche (Elwyn, 2012)."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — auch wenn jemand verwirrt ist, hat er Rechte. Gibt es eine Patientenverfügung? Hat jemand Vollmacht? Was würde er wollen wenn er klar denken könnte? Das sind die Fragen. SDM endet nicht bei Verwirrtheit."

### Richtig-Feedback
**C1 (255 Zeichen):** "Genau. SDM nach Elwyn (2012): 4 Schritte — Informieren, Präferenzen erfragen, gemeinsam entscheiden, dokumentieren. Patient ist Experte seines Lebens, Pflegefachperson Expertin der Pflege. Gemeinsame Pläne werden akzeptiert — und deshalb eingehalten."

**B1 (220 Zeichen):** "Sehr gut. SDM = gemeinsam entscheiden. 4 Schritte: Erklären → Fragen → gemeinsam entscheiden → dokumentieren. Patient kennt sein Leben, du kennst die Pflege. Ein Plan der zusammen gemacht wurde, wird auch eingehalten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet Shared Decision Making (SDM) nach Elwyn (2012) in der Pflegeplanung?"
- **Rückseite:** "Patient und Pflegefachperson planen gemeinsam. 4 Schritte: Informieren → Präferenzen erfragen → gemeinsam entscheiden → dokumentieren. Patient = Experte seines Lebens. Pflegefachperson = Expertin der Pflege. Auch bei eingeschränkter Einwilligungsfähigkeit gilt: mutmaßlichen Willen berücksichtigen."
- **Kategorie:** konzept
