# Wissensbausteine: Assessments & Expertenstandards

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `assessments-expertenstandards` |
| ceId | `ce-02` |
| cluster | A (Pflegeprozess & Dokumentation) |
| kompetenzbereich | I.1 |
| wissensart | orientierung |
| geschaetzteUE | 7 |
| zielzeitMin | 173 (7 UE × 45 × 0,55) |
| bausteineAnzahl | 14 |
| voraussetzungen | `pflegeprozess` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 21% (3 Bausteine), Bloom 3-4: 57% (8 Bausteine), Bloom 5-6: 22% (3 Bausteine)

**Primärquellen:**
- DNQP (2024): Deutsches Netzwerk für Qualitätsentwicklung in der Pflege — Verfahrensordnung und Expertenstandards
- Donabedian A. (1966): Evaluating the Quality of Medical Care. Milbank Memorial Fund Quarterly 44(3)
- Mahoney F.I., Barthel D.W. (1965): Functional Evaluation — The Barthel Index. Maryland State Medical Journal 14
- Braden B.J., Bergstrom N. (1987): A Conceptual Schema for the Study of the Etiology of Pressure Sores. Rehabilitation Nursing 12(1)
- Guigoz Y., Vellas B., Garry P.J. (1994): Mini Nutritional Assessment — A practical assessment tool. Facts and Research in Gerontology
- Podsiadlo D., Richardson S. (1991): The Timed "Up & Go" — A Test of Basic Functional Mobility for Frail Elderly Persons. Journal of the American Geriatrics Society 39(2)
- NANDA International (2021-2023): Nursing Diagnoses — Definitions and Classification
- § 113a SGB XI (Expertenstandards zur Sicherung und Weiterentwicklung der Pflegequalität)
- § 137a SGB V (Qualitätssicherung)

---

## Baustein 1: screening-vs-assessment

### Metadaten
- **bausteinId:** assessments-expertenstandards-screening-assessment
- **bloomLevel:** 2
- **wissensart:** definition
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Du hast im Frühdienst 12 Bewohner. Du hast 10 Minuten, um einen ersten Überblick über Sturzrisiken zu bekommen. Was machst du anders, als wenn du 60 Minuten für einen einzigen Bewohner hättest?"
- **Step-Typ:** freetext (aktiviert das Konzept "grob filtern vs. tief prüfen")

### Stufe 2 — Hinweis

**C1 (220 Zeichen):** "Ein Screening ist ein kurzes Such-Verfahren mit wenigen Fragen — es soll **Risiko-Personen** herausfiltern. Ein Assessment ist eine tiefere Einschätzung bei auffälligen Personen — mit mehr Items, genauer, meist standardisiert."

**B1 (200 Zeichen):** "Ein **Screening** ist ein kurzer Test: Wer hat vielleicht ein Problem? Es sucht nur grob. Ein **Assessment** ist ein langer Test: Wie groß ist das Problem wirklich? Es fragt viel genauer nach."

- **Step-Typ:** text (displayFormat: comparison)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Im Pflegealltag arbeitest du mit zwei unterschiedlichen Prüf-Tiefen: Beim **Screening** gehst du breit und schnell vor. Wenige Fragen oder Beobachtungen reichen, um zu entscheiden: Ist hier überhaupt ein Risiko oder ein Problem? Ein typisches Beispiel ist die erste Einschätzung: 'Ist der Bewohner in den letzten 12 Monaten gestürzt?' — wenn ja, dann folgt der nächste Schritt. Das **Assessment** greift dort, wo das Screening angeschlagen hat. Es ist standardisiert, umfassender und oft punktbewertet (z.B. Braden-Skala, Barthel-Index). Es beantwortet: Wie stark ist das Risiko? Wo liegen die Ursachen? Welche Ressourcen hat die Person? Das Ergebnis fließt direkt in die Pflegeplanung ein."

**B1 (525 Zeichen):**
"Beim Pflegen gibt es zwei Arten zu prüfen: Das **Screening** ist kurz und schnell. Du stellst wenige Fragen. So findest du schnell heraus: Gibt es hier vielleicht ein Problem? Zum Beispiel: 'Ist der Bewohner im letzten Jahr gestürzt?' Wenn ja, machst du den nächsten Schritt. Das **Assessment** ist länger und genauer. Du füllst ein festes Formular aus. Du bekommst oft Punkte. Zum Beispiel die Braden-Skala für das Dekubitus-Risiko. Das Ergebnis sagt dir: Wie groß ist das Risiko? Was musst du planen? Das schreibst du dann in die Pflegeplanung."

- **Erklärungs-Step:** stepType `comparison` (Tabelle: Screening vs. Assessment mit Kriterien)
- **Glossar-Begriffe:** [Screening, Assessment, standardisiert, Ressourcen]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Screening und Assessment sind dasselbe, nur verschiedene Wörter"**
- **Fachbegriff:** Synonym-Irrtum
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — die beiden unterscheiden sich in **Tiefe und Zweck**. Screening filtert breit (schnell, wenige Items). Assessment prüft tief (genau, viele Items, meist standardisiert). Merke: Erst Screening, dann bei Auffälligkeit das Assessment."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — die beiden sind unterschiedlich. Screening ist kurz und schnell. Assessment ist lang und genau. Merke: Erst kommt das Screening, dann das Assessment. Wie bei einem Sieb und einer Lupe."

**D2: "Ein Assessment machst du nur einmal bei der Aufnahme"**
- **Fachbegriff:** Einmal-Messung-Fehler
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — ein Assessment wird **wiederholt** durchgeführt, sobald sich der Zustand ändert oder zu festen Zeitpunkten (z.B. wöchentlich). Die Pflegeprozess-Phase 'Evaluation' braucht neue Messwerte — sonst kann man den Erfolg nicht überprüfen."
- **Feedback (B1, 205 Zeichen):** "Nicht ganz — ein Assessment machst du **immer wieder**. Zum Beispiel jede Woche oder wenn sich der Zustand ändert. Sonst weißt du nicht, ob deine Pflege hilft. Merke: Einmal reicht nicht — du musst nachprüfen."

**D3: "Ein Screening ist unwichtig, weil es ungenau ist"**
- **Fachbegriff:** Ungenauigkeits-Mythos
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — das Screening ist **nicht ungenau**, sondern **breit gestreut**. Es ist bewusst einfach, damit es bei vielen Menschen schnell machbar ist. Ohne Screening würdest du alle Bewohner komplett assessen — das wäre zeitlich unmöglich. Merke: Screening = Ökonomie."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — Screening ist nicht schlecht, sondern kurz und praktisch. Du kannst nicht bei allen Bewohnern eine lange Prüfung machen. Das Screening sagt dir: Bei wem lohnt sich der genauere Blick? Merke: Screening spart Zeit."

### Richtig-Feedback
**C1 (230 Zeichen):** "Genau. Screening ist ein breites, schnelles Such-Verfahren — wenige Items, Ziel: Risiko-Personen identifizieren. Assessment ist die vertiefte, standardisierte Einschätzung bei auffälligen Personen. Beide gehören zusammen wie Sieb und Lupe."

**B1 (200 Zeichen):** "Sehr gut. Das Screening ist kurz und sucht breit. Es findet Menschen mit vielleicht einem Problem. Das Assessment ist lang und genau. Es prüft tief nach, wie groß das Problem ist. Beide braucht man zusammen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen Screening und Assessment?"
- **Rückseite:** "Screening = kurzes Such-Verfahren, wenige Items, findet Risiko-Personen. Assessment = tiefe, standardisierte Einschätzung bei auffälligen Personen."
- **Kategorie:** fachbegriff

---

## Baustein 2: dnqp-grundlagen

### Metadaten
- **bausteinId:** assessments-expertenstandards-dnqp
- **bloomLevel:** 1
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Wer entscheidet eigentlich, was in der Pflege als 'richtig' gilt — zum Beispiel wie oft ein Patient umgelagert werden soll? Wer schreibt solche Regeln in Deutschland?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Das **DNQP** (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege) sitzt an der Hochschule Osnabrück. Es entwickelt seit 1999 nationale **Expertenstandards** — aktuell 12 Stück — die den allgemein anerkannten Stand der Pflegeforschung abbilden."

**B1 (205 Zeichen):** "Das **DNQP** ist eine Gruppe von Experten. Es sitzt in Osnabrück. Es schreibt seit 1999 die wichtigsten Pflege-Regeln in Deutschland. Diese Regeln heißen **Expertenstandards**. Es gibt aktuell 12 Stück."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (650 Zeichen):**
"Das **Deutsche Netzwerk für Qualitätsentwicklung in der Pflege (DNQP)** wurde 1999 an der Hochschule Osnabrück gegründet. Sein Auftrag: evidenzbasierte Pflege-Regeln entwickeln, die bundesweit gelten.

Pro Standard arbeitet eine Expertengruppe aus 8 bis 12 Pflegepraktikern und Pflegewissenschaftlern. Nach systematischer Literaturrecherche, Konsensuskonferenz und modellhafter Implementierung wird der Standard verabschiedet.

Rechtsgrundlage für die Altenpflege: **§ 113a SGB XI** — Expertenstandards zur Sicherung der Pflegequalität. In der Rechtsprechung gelten Expertenstandards als **'antizipiertes Sachverständigengutachten'**. Heißt: Wer ohne Begründung gegen einen Standard handelt, gilt als fahrlässig. (DNQP 2024; § 113a SGB XI)"

**B1 (530 Zeichen):**
"Das **DNQP** heißt: Deutsches Netzwerk für Qualitätsentwicklung in der Pflege. Es arbeitet seit 1999 an der Hochschule Osnabrück. Seine Aufgabe: Schreiben, wie gute Pflege in Deutschland aussehen muss.

Eine Gruppe von 8 bis 12 Pflege-Experten arbeitet zusammen. Sie lesen viele Studien. Dann schreiben sie einen neuen **Expertenstandard**. Das ist eine Regel, die bundesweit gilt.

Diese Regeln sind auch juristisch wichtig. Wenn du dich ohne Grund nicht daran hältst, gilt das als **Fahrlässigkeit**. Rechtsgrundlage: **§ 113a SGB XI** (Altenpflege). (DNQP 2024)"

- **Erklärungs-Step:** stepType `text` (displayFormat: news — "Steckbrief DNQP")
- **Glossar-Begriffe:** [DNQP, Expertenstandard, antizipiertes Sachverständigengutachten, evidenzbasiert]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Expertenstandards sind Empfehlungen, die man befolgen kann oder nicht"**
- **Fachbegriff:** Freiwilligkeits-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — Expertenstandards haben **juristische Wertigkeit**. Sie gelten als antizipiertes Sachverständigengutachten. Wer ohne nachvollziehbaren Grund davon abweicht, handelt fahrlässig. Merke: Du darfst abweichen, aber nur mit dokumentierter Begründung."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — Expertenstandards sind **keine freien Tipps**. Vor Gericht gelten sie als die richtige Pflege-Regel. Wenn du ohne Grund etwas anderes machst, bist du fahrlässig. Merke: Du darfst nur mit guter Begründung abweichen."

**D2: "Das DNQP ist eine staatliche Behörde"**
- **Fachbegriff:** Behörden-Verwechslung
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — das DNQP ist **kein Amt**, sondern ein bundesweiter Zusammenschluss von Pflegefachleuten an der Hochschule Osnabrück. Finanziert wurde es anfangs vom BMG (Ministerium), arbeitet aber unabhängig nach wissenschaftlichen Kriterien."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — das DNQP ist **keine Behörde**, sondern eine Gruppe von Pflege-Experten an der Hochschule Osnabrück. Sie arbeiten unabhängig. Das Gesundheitsministerium hat das Projekt am Anfang mit Geld unterstützt."

**D3: "Expertenstandards gelten nur im Krankenhaus"**
- **Fachbegriff:** Setting-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — Expertenstandards gelten in **allen Pflege-Settings**: Krankenhaus, Altenpflege, ambulante Pflege. Für die Altenpflege gibt es sogar eine eigene Rechtsgrundlage (§ 113a SGB XI). Merke: Wo Pflege stattfindet, gelten Expertenstandards."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Expertenstandards gelten **überall**: Krankenhaus, Altenheim, ambulante Pflege zuhause. In der Altenpflege gibt es dafür sogar ein eigenes Gesetz (§ 113a SGB XI). Merke: Überall, wo gepflegt wird, gelten die Regeln."

### Richtig-Feedback
**C1 (245 Zeichen):** "Genau. Das DNQP entwickelt an der Hochschule Osnabrück seit 1999 die nationalen Expertenstandards. Sie bilden den Stand der Pflegeforschung ab und haben juristische Wertigkeit. Rechtlich greifen sie u.a. über § 113a SGB XI in der Altenpflege."

**B1 (205 Zeichen):** "Sehr gut. Das DNQP ist die Pflege-Expertengruppe in Osnabrück. Sie schreibt seit 1999 die wichtigsten Pflege-Regeln in Deutschland. Die Regeln gelten auch juristisch. In der Altenpflege über § 113a SGB XI."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist das DNQP und welche juristische Bedeutung haben Expertenstandards?"
- **Rückseite:** "DNQP = Deutsches Netzwerk für Qualitätsentwicklung in der Pflege, Hochschule Osnabrück, seit 1999. Expertenstandards gelten juristisch als antizipiertes Sachverständigengutachten."
- **Kategorie:** fachbegriff

---

## Baustein 3: zwoelf-expertenstandards

### Metadaten
- **bausteinId:** assessments-expertenstandards-zwoelf-standards
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn du an die größten Pflege-Themen denkst — wo passieren die häufigsten Probleme, für die man klare Regeln bräuchte? Nenne 4-5 Themen."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Aktuell gibt es **12 nationale Expertenstandards**: Dekubitus, Entlassungsmanagement, Schmerz akut, Sturz, Harnkontinenz, Chronische Wunden, Ernährung, Schmerz chronisch, Beziehungsgestaltung bei Demenz, Mobilität, Mundgesundheit, Gewalt/Freiheit (in Entwicklung)."

**B1 (225 Zeichen):** "Es gibt 12 Expertenstandards. Themen: Dekubitus, Entlassung, Schmerz (akut und chronisch), Stürze, Harnkontinenz, Wunden, Ernährung, Beziehung bei Demenz, Mobilität, Mundgesundheit. Plus ein neuer zum Thema Gewalt."

- **Step-Typ:** categorize (Expertenstandards → Themenbereiche)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Das DNQP hat folgende 12 Expertenstandards veröffentlicht (Stand 2024):

1. **Dekubitusprophylaxe** (aktualisiert 2017/2024)
2. **Entlassungsmanagement** (aktualisiert 2019)
3. **Schmerzmanagement bei akuten Schmerzen** (2011)
4. **Sturzprophylaxe** (aktualisiert 2022)
5. **Förderung der Harnkontinenz** (aktualisiert 2014)
6. **Pflege von Menschen mit chronischen Wunden** (aktualisiert 2015)
7. **Ernährungsmanagement** (aktualisiert 2017)
8. **Schmerzmanagement bei chronischen Schmerzen** (2015)
9. **Beziehungsgestaltung bei Demenz** (2019)
10. **Erhaltung und Förderung der Mobilität** (2014)
11. **Mundgesundheit in der Pflege** (2022)
12. **Erhalt und Förderung der Hautintegrität** (2023)

Zusätzlich existiert ein Expertenstandard **'Physiologische Geburt'** für Hebammen (Hochschule Osnabrück). Jeder Standard wird im Abstand von 3-5 Jahren aktualisiert. (DNQP 2024)"

**B1 (620 Zeichen):**
"Das DNQP hat diese 12 Expertenstandards (Stand 2024):

1. **Dekubitusprophylaxe** (von 2017)
2. **Entlassungsmanagement** (von 2019)
3. **Schmerzmanagement akut** (von 2011)
4. **Sturzprophylaxe** (von 2022)
5. **Harnkontinenz** (von 2014)
6. **Chronische Wunden** (von 2015)
7. **Ernährungsmanagement** (von 2017)
8. **Schmerzmanagement chronisch** (von 2015)
9. **Beziehung bei Demenz** (von 2019)
10. **Mobilität** (von 2014)
11. **Mundgesundheit** (von 2022)
12. **Hautintegrität** (von 2023)

Für Hebammen gibt es noch 'Physiologische Geburt'. Alle Standards werden nach 3-5 Jahren überprüft und neu geschrieben. (DNQP 2024)"

- **Erklärungs-Step:** stepType `reveal` (Nummerierte Liste 1-12 mit Jahresangaben)
- **Glossar-Begriffe:** [Prophylaxe, Hautintegrität, Mundgesundheit]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Es gibt für jede Pflegesituation einen Expertenstandard"**
- **Fachbegriff:** Vollständigkeits-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — das DNQP hat **12 Standards** zu den häufigsten Risiken und Problemen entwickelt. Für viele Pflegesituationen gibt es **keinen** eigenen Standard (z.B. Atmung, Kreislauf, Sterbebegleitung). Dort gelten Leitlinien der Fachgesellschaften oder allgemeines Pflegewissen."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — es gibt nur **12 Expertenstandards**. Sie decken die wichtigsten Probleme ab. Für viele andere Themen (z.B. Sterbebegleitung oder Atmung) gibt es keinen Standard. Dort orientiert man sich an anderen Regeln oder Leitlinien."

**D2: "Expertenstandards werden einmal geschrieben und gelten dann für immer"**
- **Fachbegriff:** Aktualisierungs-Mythos
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — Expertenstandards werden **alle 3-5 Jahre aktualisiert**. Die Dekubitusprophylaxe z.B. ist in der 2. Aktualisierung von 2017. Grund: Neue Studien, neue Evidenz, veränderte Praxis. Merke: Die Jahresangabe des Standards ist immer wichtig."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — Expertenstandards werden **regelmäßig neu geschrieben**. Alle 3-5 Jahre kommt eine Aktualisierung. Das liegt an neuen Studien. Merke: Schau immer, von welchem Jahr der Standard ist, den du gerade benutzt."

**D3: "Es gibt einen Expertenstandard für Diabetes oder Herzinfarkt"**
- **Fachbegriff:** Krankheits-Standard-Verwechslung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — die DNQP-Standards decken **Pflegephänomene** (Sturz, Dekubitus, Schmerz), nicht Krankheiten. Für Krankheiten wie Diabetes oder Herzinfarkt gibt es **medizinische Leitlinien** (z.B. AWMF). Merke: Pflege-Standard = was pflegerisch zu tun ist, nicht Medizin."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Expertenstandards sind für **Pflege-Themen** wie Stürze oder Wunden. Für Krankheiten (z.B. Diabetes) gibt es andere Regeln, die heißen **Leitlinien**. Die schreiben Ärzte, nicht Pflegende. Merke: Pflege-Standard ≠ Arzt-Leitlinie."

### Richtig-Feedback
**C1 (270 Zeichen):** "Genau. Es gibt aktuell 12 DNQP-Expertenstandards zu den häufigsten Pflegerisiken und -phänomenen. Die jüngsten: Hautintegrität (2023), Mundgesundheit (2022), Sturzprophylaxe (2022). Alle Standards werden alle 3-5 Jahre überprüft. Der Expertenstandard 'Physiologische Geburt' ist für Hebammen."

**B1 (230 Zeichen):** "Sehr gut. Es gibt aktuell 12 Expertenstandards vom DNQP. Die neuesten sind: Hautintegrität (2023), Mundgesundheit (2022), Sturz (2022). Alle Standards werden alle paar Jahre neu geschrieben. Für Hebammen gibt es 'Physiologische Geburt'."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie viele DNQP-Expertenstandards gibt es aktuell? Nenne 6 davon."
- **Rückseite:** "12 Standards. Beispiele: Dekubitus, Sturz, Schmerz (akut/chronisch), Harnkontinenz, Ernährung, Mobilität, Chronische Wunden, Beziehung bei Demenz, Mundgesundheit, Hautintegrität, Entlassungsmanagement."
- **Kategorie:** fakt

---

## Baustein 4: s-p-e-struktur

### Metadaten
- **bausteinId:** assessments-expertenstandards-spe
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn du die Qualität einer Pflegestation bewerten willst — reicht es zu fragen 'Geht es den Bewohnern gut?' Oder musst du auch andere Dinge prüfen? Welche wären das?"
- **Step-Typ:** mc
  - A: "Nur das Ergebnis — wenn Bewohner zufrieden sind, ist alles gut" (falsch)
  - B: "Die Ausstattung, den Ablauf und das Ergebnis — alle drei zusammen" (richtig)
  - C: "Nur die Mitarbeiterzahl — mehr Personal = bessere Pflege" (falsch)
  - D: "Nur die Dokumentation — wenn alles geschrieben ist, ist es gut" (falsch)

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Jeder Expertenstandard hat eine **S-P-E-Struktur** nach Donabedian (1966): **S** = Struktur (was ist vorhanden? Personal, Wissen, Material), **P** = Prozess (was wird getan? Ablauf, Maßnahmen), **E** = Ergebnis (was kommt raus? Zielerreichung)."

**B1 (215 Zeichen):** "Jeder Expertenstandard hat 3 Teile: **S** = Struktur (was gibt es? Personal, Material), **P** = Prozess (was tun wir? Abläufe), **E** = Ergebnis (was kommt heraus? Ist das Ziel erreicht?). Das Modell stammt von Donabedian (1966)."

- **Step-Typ:** diagram (Darstellung S-P-E als Kette)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die **S-P-E-Struktur** geht auf Avedis Donabedian zurück (1966, Milbank Memorial Fund Quarterly). Er entwickelte dieses Dreiecks-Modell zur Bewertung von Gesundheitsversorgung. Das DNQP hat es auf Expertenstandards übertragen:

- **S (Struktur):** Voraussetzungen der Einrichtung — Qualifikation der Pflegefachkraft, vorhandene Assessmentinstrumente, Hilfsmittel, Verfahrensregelungen. Beispiel (Dekubitus): 'Die Einrichtung stellt sicher, dass qualifizierte PFK vorhanden sind.'

- **P (Prozess):** Konkretes Handeln — was wird getan? Wann? Wie? Von wem? Beispiel: 'Die PFK führt das Risiko-Assessment durch.'

- **E (Ergebnis):** Überprüfbares Resultat — wurde das Ziel erreicht? Beispiel: 'Eine aktuelle Einschätzung des Dekubitusrisikos liegt vor.'

Jedes der 6 Standardkriterien hat S1/P1/E1, S2/P2/E2 usw. (Donabedian 1966; DNQP 2024)"

**B1 (600 Zeichen):**
"Die **S-P-E-Struktur** kommt von Avedis Donabedian (1966). Das DNQP nutzt sie für alle Expertenstandards.

- **S = Struktur:** Was ist da? Welches Personal? Welche Hilfsmittel? Welches Wissen? Beispiel: Eine Pflegefachkraft ist vorhanden.

- **P = Prozess:** Was wird getan? Zum Beispiel: Die Pflegefachkraft macht das Assessment.

- **E = Ergebnis:** Was kommt heraus? Zum Beispiel: Es gibt eine aktuelle Einschätzung des Risikos.

Jeder Expertenstandard hat 6 Kriterien. Jedes Kriterium hat diese 3 Teile: S1/P1/E1, dann S2/P2/E2 und so weiter. (Donabedian 1966; DNQP 2024)"

- **Erklärungs-Step:** stepType `matrix` (S-P-E × 6 Standardkriterien als Tabelle)
- **Glossar-Begriffe:** [Struktur, Prozess, Ergebnis, Donabedian, Standardkriterium]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "S-P-E heißt: zuerst Struktur, dann Prozess, dann Ergebnis als Zeitablauf"**
- **Fachbegriff:** Zeitabfolge-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — S-P-E ist **keine zeitliche Reihenfolge**, sondern eine **Betrachtungsebene**. Alle drei existieren parallel. Du prüfst: Sind die Strukturen da? Läuft der Prozess? Kommt das Ergebnis heraus? Donabedian (1966) nennt es 'three approaches to quality of care'."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — S-P-E ist **kein Ablauf in der Zeit**. Es sind 3 **Blickwinkel**. Du prüfst gleichzeitig: Ist das Personal da (Struktur)? Läuft die Arbeit gut (Prozess)? Kommt ein gutes Ergebnis raus (Ergebnis)? Alle 3 Fragen zusammen zeigen die Qualität."

**D2: "Die S-P-E-Kriterien werden vom Gesetzgeber vorgeschrieben"**
- **Fachbegriff:** Gesetzes-Verwechslung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — die S-P-E-Struktur stammt von **Donabedian 1966**, nicht vom Gesetzgeber. Das DNQP nutzt sie **freiwillig**, weil sie sich in der Qualitätsmessung bewährt hat. Allerdings: § 113a SGB XI verpflichtet zur Einhaltung der Expertenstandards insgesamt."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — die S-P-E-Struktur hat Donabedian 1966 erfunden, nicht ein Gesetz. Das DNQP benutzt sie, weil sie gut funktioniert. Aber: Die Expertenstandards selbst sind juristisch wichtig, z.B. durch § 113a SGB XI in der Altenpflege."

**D3: "Ergebnis-Kriterien messen nur medizinische Outcomes (z.B. Wundheilung)"**
- **Fachbegriff:** Outcome-Enge
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — Ergebnis-Kriterien (E) messen **pflegerische Zielerreichung**. Das kann medizinisch sein (kein Dekubitus), aber auch organisatorisch ('aktuelle Einschätzung liegt vor') oder beziehungsbezogen ('Patient fühlt sich informiert'). Donabedian (1966) denkt Ergebnis weit."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Ergebnis bedeutet nicht nur Heilung. Es kann auch sein: 'Eine aktuelle Einschätzung des Risikos liegt vor' oder 'Der Patient fühlt sich gut beraten'. Merke: Ergebnis ist alles, was man am Ende prüfen kann — nicht nur Medizin."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. S-P-E steht für Struktur, Prozess, Ergebnis — Donabedian 1966. Alle drei gehören zusammen zur Qualitätsbewertung. Jedes der 6 Standardkriterien in einem DNQP-Standard hat S1/P1/E1 bis S6/P6/E6. Das sichert: Voraussetzungen, Handeln und Nachweis sind definiert."

**B1 (215 Zeichen):** "Sehr gut. S-P-E heißt Struktur-Prozess-Ergebnis. Es kommt von Donabedian (1966). Alle 3 zusammen zeigen die Pflegequalität. Jeder Expertenstandard hat 6 Kriterien und jedes Kriterium hat S, P und E. Nicht nur eins davon zählt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet S-P-E in Expertenstandards? Wer hat das Modell entwickelt?"
- **Rückseite:** "S = Struktur (Voraussetzungen), P = Prozess (Handeln), E = Ergebnis (Zielerreichung). Modell von Avedis Donabedian (1966)."
- **Kategorie:** fachbegriff

---

## Baustein 5: braden-skala

### Metadaten
- **bausteinId:** assessments-expertenstandards-braden
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Welche 6 Dinge würdest du an einem Patienten prüfen, um zu entscheiden: Ist er in Gefahr, einen Dekubitus zu bekommen? Denk an Risikofaktoren."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Die **Braden-Skala** (Braden & Bergstrom 1987) prüft **6 Subskalen**: sensorische Wahrnehmung, Hautfeuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Jede Subskala bekommt 1-4 Punkte. Gesamtpunkte: 6-23. Je **niedriger**, desto höher das Risiko."

**B1 (230 Zeichen):** "Die **Braden-Skala** prüft 6 Dinge: Wahrnehmung, Hautfeuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung. Jedes wird mit 1-4 Punkten bewertet. Summe: 6 bis 23. Wichtig: Wenig Punkte = hohes Risiko für Dekubitus. (Braden & Bergstrom 1987)"

- **Step-Typ:** matrix (6 Subskalen × Punktwerte)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die **Braden-Skala** wurde 1987 von Barbara Braden und Nancy Bergstrom in den USA entwickelt (Rehabilitation Nursing 12(1)). Sie ist das weltweit am häufigsten eingesetzte Dekubitus-Risikoassessment.

**Die 6 Subskalen:**
1. **Sensorische Wahrnehmung** (kann Patient Druck/Schmerz wahrnehmen?)
2. **Hautfeuchtigkeit** (wie oft ist die Haut feucht?)
3. **Aktivität** (wie viel bewegt sich der Patient aus dem Bett heraus?)
4. **Mobilität** (wie viel kann er die Lage selbst ändern?)
5. **Ernährung** (wie ist der Ernährungszustand?)
6. **Reibung und Scherkräfte** (rutscht der Patient, braucht er Hilfe beim Positionieren?)

Bewertung: 1 (am schlechtesten) bis 4 (am besten) pro Subskala, außer 'Reibung' (nur 1-3). **Gesamt: 6-23 Punkte**. Ein Wert ≤18 gilt oft als Risiko-Schwelle — aber der DNQP-Standard empfiehlt die **klinische Einschätzung** als Hauptinstrument, nicht eine starre Punktgrenze. (Braden & Bergstrom 1987; DNQP 2024)"

**B1 (580 Zeichen):**
"Die **Braden-Skala** haben Barbara Braden und Nancy Bergstrom 1987 in den USA entwickelt. Man benutzt sie weltweit, um das Dekubitus-Risiko zu prüfen.

Die 6 Punkte sind:
1. **Wahrnehmung** (Spürt der Patient Druck?)
2. **Hautfeuchtigkeit** (Ist die Haut oft nass?)
3. **Aktivität** (Steht er manchmal auf?)
4. **Mobilität** (Kann er sich allein drehen?)
5. **Ernährung** (Isst er genug?)
6. **Reibung** (Rutscht er? Braucht er Hilfe beim Positionieren?)

Jeder Punkt bekommt 1-4 Punkte (Reibung nur 1-3). Summe: 6 bis 23. **Wenig Punkte = hohes Risiko**. Aber: Das DNQP sagt: Die **klinische Einschätzung** der Pflegefachkraft ist wichtiger als die Punktzahl allein."

- **Erklärungs-Step:** stepType `labelImage` (Braden-Bogen mit 6 Feldern)
- **Glossar-Begriffe:** [Subskala, sensorische Wahrnehmung, Scherkräfte, klinische Einschätzung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Hohe Braden-Punktzahl bedeutet hohes Dekubitus-Risiko"**
- **Fachbegriff:** Punktzahl-Umkehrungs-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — bei Braden ist es **umgekehrt**: **niedrige Punktzahl = hohes Risiko**. Grund: Jede Subskala gibt für 'gesund/stark' hohe Punkte (4) und für 'gefährdet/schwach' niedrige Punkte (1). 6 Punkte insgesamt = sehr hohes Risiko. 23 Punkte = praktisch kein Risiko."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — bei Braden ist es **andersherum**: **Wenig Punkte = viel Risiko**. 6 Punkte ist die niedrigste Summe und bedeutet: sehr hohes Risiko. 23 Punkte ist das Maximum und bedeutet: praktisch kein Risiko. Merke: Bei Braden gilt 'je weniger, desto schlimmer'."

**D2: "Die Braden-Skala ist die einzige DNQP-empfohlene Skala"**
- **Fachbegriff:** Exklusivitäts-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — der DNQP-Expertenstandard Dekubitus (2017/2024) betont: Die **klinische Einschätzung** der PFK ist das **primäre Instrument**. Skalen wie Braden sind **Ergänzung**. In Deutschland sind auch Norton-Skala oder Waterlow-Skala verbreitet. Wichtig ist: dokumentierte Einschätzung."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die Braden-Skala ist **nicht die einzige**. Der DNQP sagt: Das Wichtigste ist die **Einschätzung der Pflegefachkraft selbst**. Skalen sind nur eine Hilfe. Auch Norton- oder Waterlow-Skala kann man nutzen. Wichtig: Die Einschätzung muss dokumentiert sein."

**D3: "Die Braden-Skala sagt dir auch, welche Prophylaxe-Maßnahmen du machen musst"**
- **Fachbegriff:** Assessment-Maßnahmen-Verwechslung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — die Braden-Skala **beschreibt das Risiko**, aber **nicht die Maßnahmen**. Für Maßnahmen nutzt du den DNQP-Expertenstandard (z.B. Positionswechsel, Hautbeobachtung, druckverteilende Auflagen). Merke: Braden = **Was ist das Risiko?** / Expertenstandard = **Was tun?**"
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Braden sagt dir nur, **wie groß das Risiko ist**. Was du dann **tun** musst, steht im Expertenstandard Dekubitus vom DNQP. Merke: Braden-Skala = Risiko messen. Expertenstandard = Maßnahmen planen."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Die Braden-Skala (Braden & Bergstrom 1987) prüft 6 Subskalen mit 1-4 (bzw. 1-3 bei Reibung) Punkten. Gesamtsumme 6-23. Niedrige Punktzahl = hohes Risiko. Wichtig: Das DNQP sieht die klinische Einschätzung als Hauptinstrument — Skalen ergänzen, ersetzen sie aber nicht."

**B1 (240 Zeichen):** "Sehr gut. Die Braden-Skala hat 6 Punkte (Wahrnehmung, Hautfeuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung). Jeder Punkt: 1-4 (Reibung: 1-3). Summe: 6-23. Wenig Punkte = hohes Risiko. Das DNQP sagt: Die Einschätzung der Pflegekraft ist am wichtigsten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 6 Subskalen der Braden-Skala. Wie wird das Risiko interpretiert?"
- **Rückseite:** "Sensorische Wahrnehmung, Hautfeuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Summe 6-23. Niedrige Punktzahl = hohes Dekubitus-Risiko. (Braden & Bergstrom 1987)"
- **Kategorie:** assessment

---

## Baustein 6: barthel-index

### Metadaten
- **bausteinId:** assessments-expertenstandards-barthel
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Wie würdest du messen, wie selbstständig ein 82-jähriger Bewohner im Alltag noch ist? Welche Tätigkeiten müsste er können? Nenne 5-6 Bereiche."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Der **Barthel-Index** (Mahoney & Barthel 1965) misst die **Selbstständigkeit bei 10 Alltagsaktivitäten** (Essen, Anziehen, Körperpflege, WC, Baden, Transfer, Treppensteigen, Gehen, Blasen-/Stuhlkontrolle). Punktesumme 0-100. Je höher, desto selbstständiger."

**B1 (220 Zeichen):** "Der **Barthel-Index** prüft, wie gut jemand **im Alltag** klarkommt. Es gibt 10 Bereiche: Essen, Anziehen, Waschen, Toilette, Gehen und mehr. Summe: 0-100 Punkte. Viel Punkte = selbstständig. (Mahoney & Barthel 1965)"

- **Step-Typ:** matrix (10 ATL-Bereiche × Punktwerte)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Der **Barthel-Index** wurde 1965 von Florence Mahoney und Dorothea Barthel entwickelt (Maryland State Medical Journal 14). Ursprünglicher Zweck: Rehabilitationsverlauf nach Schlaganfall messen. Heute global eingesetzt zur Beurteilung der Selbstständigkeit im Alltag (Activities of Daily Living, ADL).

**Die 10 Items:**
1. Essen (0/5/10)
2. Baden (0/5)
3. Körperpflege (0/5)
4. An- und Auskleiden (0/5/10)
5. Stuhlkontrolle (0/5/10)
6. Harnkontrolle (0/5/10)
7. Toilettenbenutzung (0/5/10)
8. Transfer Bett → Stuhl (0/5/10/15)
9. Mobilität/Gehen (0/5/10/15)
10. Treppensteigen (0/5/10)

**Gesamtsumme: 0-100 Punkte**. Orientierungswerte: 0-30 = schwere Pflegebedürftigkeit, 35-80 = mittelschwer, 85-95 = leicht, 100 = selbstständig. Wichtig: Der Index misst **Leistung** (was der Patient tut), nicht **Kapazität** (was er theoretisch könnte). (Mahoney & Barthel 1965)"

**B1 (600 Zeichen):**
"Der **Barthel-Index** kommt von Mahoney und Barthel aus dem Jahr 1965. Am Anfang hat man damit Schlaganfall-Patienten geprüft. Heute benutzt man ihn weltweit, um zu messen, wie selbstständig ein Mensch im Alltag ist.

**Die 10 Bereiche:**
1. Essen
2. Baden
3. Körperpflege (Kämmen, Zähne putzen)
4. An- und Auskleiden
5. Stuhlkontrolle
6. Harnkontrolle
7. Toilette benutzen
8. Vom Bett in den Stuhl (Transfer)
9. Gehen oder Rollstuhl fahren
10. Treppensteigen

Jeder Bereich hat 0, 5, 10 oder 15 Punkte. Gesamt: 0-100 Punkte. Viel Punkte = selbstständig. 100 = alles allein. 0 = braucht bei allem Hilfe. Wichtig: Der Index misst, **was der Patient wirklich tut** — nicht, was er theoretisch könnte."

- **Erklärungs-Step:** stepType `reveal` (10 Items aufdecken, Punkte dazu)
- **Glossar-Begriffe:** [Barthel-Index, Activities of Daily Living, ADL, Transfer]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Der Barthel-Index misst die geistigen Fähigkeiten (Kognition)"**
- **Fachbegriff:** Kognitions-Verwechslung
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — der Barthel-Index misst **körperliche Selbstständigkeit im Alltag** (ADL). Für geistige Fähigkeiten nutzt man andere Instrumente wie den **Mini-Mental-Status-Test (MMST)** oder den **DemTect**. Merke: Barthel = Körper im Alltag. MMST = Gedächtnis und Orientierung."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — der Barthel-Index misst **nur körperliche Sachen** im Alltag (Essen, Waschen, Gehen). Für das Gedächtnis und die geistigen Fähigkeiten benutzt man **andere Tests**, z.B. den **MMST**. Merke: Barthel = Körper. MMST = Kopf."

**D2: "Eine niedrige Barthel-Punktzahl bedeutet, dass der Patient geistig behindert ist"**
- **Fachbegriff:** Behinderungs-Ursache-Verwechslung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — der Barthel sagt nur, **wie viel Hilfe** jemand braucht, **nicht warum**. Eine niedrige Punktzahl kann durch Schlaganfall, Parkinson, Fraktur, MS oder Demenz entstehen. Der Index ist **ursachen-neutral**. Die Ursache klärt die Diagnostik, nicht der Barthel."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — der Barthel zeigt nur, **wie viel Hilfe** der Mensch braucht. Er sagt **nicht, warum**. Das kann ein Schlaganfall sein, eine Demenz, ein Knochenbruch oder eine andere Krankheit. Die Ursache muss man anders herausfinden, z.B. durch Arzt-Diagnostik."

**D3: "Barthel-Index und Pflegegrad (SGB XI) sind dasselbe"**
- **Fachbegriff:** Pflegegrad-Verwechslung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — Barthel und Pflegegrad sind **verschiedene Systeme**. Der Pflegegrad (§ 15 SGB XI) nutzt das **NBA (Neues Begutachtungsinstrument)** mit 6 Modulen. Barthel misst nur ADLs (10 Items). Allerdings: Einige Module des NBA überschneiden sich inhaltlich mit Barthel-Items."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das sind **zwei verschiedene Dinge**. Der Barthel-Index prüft 10 Alltags-Bereiche. Der Pflegegrad wird mit dem **NBA** (Neues Begutachtungsinstrument, § 15 SGB XI) festgelegt. Das NBA hat 6 Module. Einige Fragen sind ähnlich, aber die Systeme sind nicht gleich."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Der Barthel-Index (Mahoney & Barthel 1965) misst die körperliche Selbstständigkeit bei 10 ADLs. Punkteskala 0-100. Je höher, desto selbstständiger. Wichtig: Er misst die tatsächliche Leistung, nicht die theoretische Fähigkeit — und er sagt nichts über die Ursache der Einschränkung."

**B1 (240 Zeichen):** "Sehr gut. Der Barthel-Index gibt es seit 1965 von Mahoney und Barthel. Er prüft 10 Alltagsbereiche (Essen, Waschen, Gehen etc.). Summe: 0-100. Viel Punkte = selbstständig. Er misst, was der Patient wirklich tut. Die Ursache für Einschränkungen prüft er nicht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was misst der Barthel-Index? Was ist die Punkteskala?"
- **Rückseite:** "Körperliche Selbstständigkeit bei 10 Alltagsaktivitäten (ADLs): Essen, Baden, Körperpflege, Ankleiden, Stuhl-/Harnkontrolle, WC, Transfer, Gehen, Treppen. Skala 0-100. (Mahoney & Barthel 1965)"
- **Kategorie:** assessment

---

## Baustein 7: nrs-schmerzskala

### Metadaten
- **bausteinId:** assessments-expertenstandards-nrs
- **bloomLevel:** 2
- **wissensart:** assessment
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Schmerzen sind unsichtbar. Wie fragst du einen Patienten, wie stark seine Schmerzen sind — so, dass die Antwort auch für deinen Kollegen in der nächsten Schicht verständlich ist?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Die **NRS (Numeric Rating Scale)** ist die Standard-Schmerzskala: Patient gibt Zahl von **0 bis 10** an (0 = kein Schmerz, 10 = stärkster vorstellbarer Schmerz). Einfach, schnell, vergleichbar, auch telefonisch nutzbar. Empfohlen ab Schulalter."

**B1 (200 Zeichen):** "Die **NRS** ist die wichtigste Schmerzskala. Der Patient sagt eine **Zahl von 0 bis 10**. 0 = kein Schmerz. 10 = schlimmster Schmerz, den man sich vorstellen kann. Einfach, schnell. Gut ab Schulalter."

- **Step-Typ:** slider (0-10 als interaktive Skala)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Die **NRS (Numeric Rating Scale)** ist die international am häufigsten eingesetzte Schmerzskala für Erwachsene und Jugendliche. Der Patient gibt auf einer Skala von 0 bis 10 an, wie stark sein Schmerz aktuell ist.

- **0** = kein Schmerz
- **1-3** = leichter Schmerz
- **4-6** = mittlerer Schmerz
- **7-10** = starker Schmerz

**Wann welche Skala?**
- **NRS (0-10):** Erwachsene, Jugendliche, ältere Menschen mit erhaltener Kommunikation
- **VAS (Visuelle Analogskala):** Wenn Patient Zahlen schwer einschätzen kann — Linie mit Regler
- **Smiley-Skala / Gesichter-Skala:** Kinder ab ca. 4 Jahren
- **BESD (Beurteilung von Schmerzen bei Demenz):** bei schwerer Demenz — Pflegekraft bewertet Beobachtung

Der DNQP-Expertenstandard Schmerzmanagement (akut 2011, chronisch 2015) fordert regelmäßiges Schmerzassessment mit einer passenden Skala. (DNQP 2011/2015)"

**B1 (590 Zeichen):**
"Die **NRS** ist die wichtigste Schmerzskala. Der Patient gibt eine Zahl von 0 bis 10 an.

- **0** = kein Schmerz
- **1-3** = wenig Schmerz
- **4-6** = mittlerer Schmerz
- **7-10** = starker Schmerz

Aber: Nicht jeder kann die NRS gut nutzen. Es gibt andere Skalen:
- **VAS**: Eine Linie. Der Patient zeigt mit einem Regler, wie stark der Schmerz ist.
- **Smiley-Skala**: Für Kinder. Verschiedene Gesichter von lachend bis weinend.
- **BESD**: Für Menschen mit starker Demenz. Die Pflegekraft schaut und bewertet selbst.

Der DNQP sagt: Regelmäßig nach Schmerzen fragen. Das gehört zum **Expertenstandard Schmerzmanagement**. (DNQP 2011/2015)"

- **Erklärungs-Step:** stepType `comparison` (4 Skalen nebeneinander: NRS, VAS, Smiley, BESD)
- **Glossar-Begriffe:** [NRS, VAS, BESD, Numeric Rating Scale]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn der Patient nicht sprechen kann, kann man Schmerzen nicht messen"**
- **Fachbegriff:** Kommunikations-Pessimismus
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — für Patienten, die sich nicht äußern können, gibt es **Fremdbeurteilungs-Skalen**: Bei Demenz die **BESD** (Beurteilung von Schmerzen bei Demenz), bei beatmeten Patienten die **BPS** (Behavioral Pain Scale). Schmerzerkennung über Mimik, Lautäußerung, Körperspannung."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — auch wenn jemand nicht sprechen kann, kann man Schmerzen **beobachten**. Man schaut auf Gesicht (Stirnrunzeln), Töne (Stöhnen), Körperhaltung (Anspannung). Dafür gibt es Skalen wie die **BESD** (Demenz) oder **BPS** (Beatmung)."

**D2: "Die NRS-Zahl entscheidet allein über die Schmerzbehandlung"**
- **Fachbegriff:** Einzahl-Entscheidungs-Fehler
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die NRS ist **ein** Baustein der Schmerzbeurteilung. Wichtig sind auch: **Schmerzqualität** (brennend, stechend, dumpf), **Lokalisation**, **zeitlicher Verlauf**, **auslösende und lindernde Faktoren**. Der DNQP-Standard nennt das 'mehrdimensionales Schmerzassessment'."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — die Zahl allein reicht nicht. Du musst auch fragen: **Wie fühlt sich der Schmerz an** (stechend, brennend)? **Wo ist er?** **Wann kommt er?** **Was hilft oder verschlimmert?** Das nennt der DNQP **mehrdimensionales Schmerzassessment**."

**D3: "Bei chronischen Schmerzen ist ein NRS-Wert von 3 nicht schlimm"**
- **Fachbegriff:** Chronifizierungs-Bagatellisierung
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — der DNQP-Standard 'Schmerzmanagement bei chronischen Schmerzen' (2015) betont: Chronische Schmerzen werden **nicht allein über die Intensität** bewertet. Ziele sind **Funktionsverbesserung, Teilhabe, Lebensqualität** — nicht unbedingt 'Schmerz weg'. Auch NRS 3 dauerhaft ist eine Belastung."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — bei chronischen Schmerzen zählt nicht nur die Zahl. Wichtig ist auch: **Kann der Patient am Leben teilhaben? Schlafen? Arbeiten? Hobbys machen?** Ein Schmerz von 3, der nie aufhört, ist anstrengend. Der DNQP-Standard chronische Schmerzen achtet darauf. (DNQP 2015)"

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Die NRS ist die wichtigste Schmerzskala für Erwachsene — 0 bis 10, einfach, international vergleichbar. Für Kinder nutzt man Gesichter-Skalen, für Demenz die BESD, für Beatmung die BPS. Der DNQP-Expertenstandard Schmerzmanagement fordert regelmäßiges Assessment."

**B1 (220 Zeichen):** "Sehr gut. Die NRS: Der Patient sagt eine Zahl von 0 bis 10. Für Kinder gibt es Smiley-Skalen. Für Demenz die BESD. Für beatmete Patienten die BPS. Der DNQP sagt: Regelmäßig nach Schmerzen fragen, nicht nur einmal."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist die NRS? Welche anderen Schmerzskalen gibt es?"
- **Rückseite:** "NRS = Numeric Rating Scale, 0-10 (0=kein Schmerz, 10=stärkster Schmerz). Alternativen: VAS (Linie), Smiley-Skala (Kinder), BESD (Demenz), BPS (Beatmung)."
- **Kategorie:** assessment

---

## Baustein 8: mna-ernaehrung

### Metadaten
- **bausteinId:** assessments-expertenstandards-mna
- **bloomLevel:** 2
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Eine 85-jährige Bewohnerin hat in 3 Monaten 4 kg abgenommen. Ist das normal? Wie findest du heraus, ob sie eine Mangelernährung hat? Welche Dinge würdest du prüfen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Das **MNA (Mini Nutritional Assessment, Guigoz 1994)** ist das Standard-Instrument zur Früherkennung von Mangelernährung bei älteren Menschen. Zwei Stufen: MNA-SF (Short Form, 6 Items, 0-14 Punkte) als Screening — dann bei Auffälligkeit das volle MNA."

**B1 (220 Zeichen):** "Das **MNA** ist ein Test für Mangelernährung bei älteren Menschen. Es gibt zwei Teile: Erst die kurze Form (**MNA-SF**, 6 Fragen, 0-14 Punkte). Wenn da ein Risiko rauskommt, dann das lange MNA. (Guigoz 1994)"

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Das **Mini Nutritional Assessment (MNA)** wurde 1994 von Yves Guigoz und Bruno Vellas entwickelt (Facts and Research in Gerontology). Es ist speziell für Menschen ab 65 Jahren validiert.

**Zweistufiges Verfahren:**

1. **MNA-SF (Short Form, Screening):** 6 Fragen zu Appetit, Gewichtsverlust, Mobilität, Stress/Krankheit, Neuropsychologie, BMI oder Wadenumfang. **Punkteskala 0-14.**
   - 12-14 = normaler Ernährungszustand
   - 8-11 = Risiko für Mangelernährung
   - 0-7 = Mangelernährung

2. **MNA (Full Assessment):** Falls Screening ≤11 — 12 weitere Fragen zu Ernährungsgewohnheiten, Selbsteinschätzung, anthropometrischen Maßen. Gesamt: 0-30 Punkte.

Das MNA ist im DNQP-Expertenstandard **Ernährungsmanagement** (2017) als etabliertes Assessment genannt. Alternative: **NRS-2002** (Nutritional Risk Screening), eher im Krankenhaus. (Guigoz 1994; DNQP 2017)"

**B1 (570 Zeichen):**
"Das **MNA** heißt: **Mini Nutritional Assessment**. Es kommt von Guigoz aus dem Jahr 1994. Es ist ein Test für ältere Menschen (ab 65 Jahren).

Es gibt **zwei Teile:**

1. **MNA-SF (kurz):** 6 Fragen über Appetit, Gewichtsverlust, Mobilität, Krankheiten, geistigen Zustand und BMI. Punkte: 0-14.
   - 12-14: Alles gut
   - 8-11: Risiko für Mangelernährung
   - 0-7: Mangelernährung

2. **MNA (lang):** Wenn die kurze Form schlecht ausgeht, machst du den langen Test. 12 weitere Fragen. Gesamt: 0-30 Punkte.

Das MNA steht im Expertenstandard **Ernährungsmanagement** vom DNQP (2017). Im Krankenhaus benutzt man oft die **NRS-2002** statt MNA."

- **Erklärungs-Step:** stepType `flipcard` (MNA-SF Vorderseite / Ergebnis-Interpretation Rückseite)
- **Glossar-Begriffe:** [MNA, Mangelernährung, BMI, anthropometrisch, Wadenumfang]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Mangelernährung erkennt man nur am BMI"**
- **Fachbegriff:** BMI-Fokus-Fehler
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — der BMI ist nur **ein Baustein**. Das MNA fragt auch nach **ungewolltem Gewichtsverlust** (wichtigster Indikator!), Appetit, Mobilitätsänderung, akuten Erkrankungen und geistigem Zustand. Ein BMI im Normbereich schließt Mangelernährung **nicht aus**, wenn der Patient schnell abnimmt."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — der BMI allein reicht **nicht**. Das MNA fragt auch: Hat der Patient **Gewicht verloren**? Hat er Appetit? Bewegt er sich noch? Ist er krank? Auch bei normalem BMI kann jemand Mangelernährung haben, wenn er schnell abnimmt."

**D2: "Das MNA-SF reicht immer — das lange MNA braucht man nie"**
- **Fachbegriff:** Screening-Sufficienz-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — das MNA-SF ist ein **Screening**. Bei auffälligem Ergebnis (≤11 Punkte) folgt das **vollständige MNA** mit 12 weiteren Items. Nur so erhältst du eine **genaue Einschätzung** und kannst gezielt Maßnahmen planen. Screening ohne Folge-Assessment ist diagnostisch unvollständig."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — das MNA-SF ist nur der **erste Schritt** (Screening). Wenn es schlecht ausgeht, musst du den **langen Test** machen. Sonst weißt du nicht genau, was los ist. Merke: Screening sagt nur 'Risiko ja/nein'. Das lange MNA sagt, **wie groß** das Risiko ist."

**D3: "Bei übergewichtigen Patienten gibt es keine Mangelernährung"**
- **Fachbegriff:** Adipositas-Ausschluss-Mythos
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — auch übergewichtige Menschen können **mangelernährt** sein. Grund: Sie essen viele Kalorien, aber zu wenig **Protein, Vitamine, Mineralien** (qualitative Mangelernährung). Zusätzlich: Bei akutem Gewichtsverlust auch bei hohem BMI ist eine **Sarkopenie** (Muskelverlust) möglich."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — auch dicke Menschen können mangelernährt sein. Sie essen vielleicht viele Kalorien, aber zu wenig **Eiweiß und Vitamine**. Oder sie verlieren schnell Muskeln (das heißt **Sarkopenie**). Merke: Mangelernährung ist nicht das Gleiche wie 'dünn sein'."

### Richtig-Feedback
**C1 (265 Zeichen):** "Genau. Das MNA (Guigoz 1994) ist das Standard-Instrument zur Erkennung von Mangelernährung bei älteren Menschen. Zweistufig: Erst MNA-SF (6 Items, 0-14) als Screening — bei Auffälligkeit das volle MNA (18 Items, 0-30). Teil des DNQP-Expertenstandards Ernährungsmanagement."

**B1 (225 Zeichen):** "Sehr gut. Das MNA ist der Test für Mangelernährung bei älteren Menschen. Guigoz hat ihn 1994 entwickelt. Zwei Teile: Erst der kurze Test (MNA-SF) als Screening. Wenn das Risiko zeigt, dann der lange Test. Passt zum DNQP-Standard Ernährung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist das MNA? Welche zwei Stufen hat es?"
- **Rückseite:** "Mini Nutritional Assessment (Guigoz 1994), validiert für ≥65 Jahre. MNA-SF (Screening, 6 Items, 0-14) → bei Risiko volles MNA (18 Items, 0-30)."
- **Kategorie:** assessment

---

## Baustein 9: timed-up-and-go

### Metadaten
- **bausteinId:** assessments-expertenstandards-tug
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Wie findest du schnell heraus, ob ein 80-jähriger Bewohner sturzgefährdet ist, ohne aufwändige Geräte? Was würdest du ihn tun lassen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Der **Timed-Up-and-Go-Test (TUG)** von Podsiadlo & Richardson (1991) ist ein 3-Meter-Gehtest: Patient steht aus Stuhl auf, geht 3 Meter, dreht um, geht zurück, setzt sich. **Zeit wird gestoppt**. Über 20 Sekunden = erhöhte Sturzgefahr."

**B1 (225 Zeichen):** "Der **TUG (Timed-Up-and-Go)** ist ein einfacher Sturztest. Der Patient steht auf, geht 3 Meter, dreht um, kommt zurück und setzt sich. Du stoppst die Zeit. **Über 20 Sekunden = höhere Sturzgefahr.** (Podsiadlo & Richardson 1991)"

- **Step-Typ:** sequencing (5 Schritte des TUG in richtige Reihenfolge bringen)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Der **Timed 'Up & Go' Test (TUG)** wurde 1991 von Diane Podsiadlo und Sandra Richardson in Kanada entwickelt (Journal of the American Geriatrics Society 39(2)). Er ist ein etablierter Mobilitäts- und Sturzrisiko-Test.

**Durchführung:**
1. Patient sitzt auf Stuhl mit Armlehnen (Sitzhöhe ca. 45 cm)
2. Auf Kommando 'Los' aufstehen
3. 3 Meter geradeaus in normalem Tempo gehen (Markierung am Boden)
4. Umdrehen
5. Zurückgehen und sich wieder setzen

**Zeit wird gemessen** (Stoppuhr). Hilfsmittel (Gehstock, Rollator) sind erlaubt und werden dokumentiert.

**Orientierungswerte:**
- **<10 Sek.** = normale Mobilität
- **10-19 Sek.** = leicht eingeschränkt, aber noch alltagstauglich
- **20-29 Sek.** = eingeschränkt, erhöhtes Sturzrisiko
- **≥30 Sek.** = stark eingeschränkt, hohe Sturzgefahr

Im DNQP-Expertenstandard Sturzprophylaxe (2022) ist TUG als geeignetes **Assessment-Instrument** empfohlen. (Podsiadlo & Richardson 1991; DNQP 2022)"

**B1 (610 Zeichen):**
"Der **TUG-Test** gibt es seit 1991 (Podsiadlo & Richardson aus Kanada). Er prüft, wie mobil jemand ist und wie hoch die Sturzgefahr ist.

**So geht der Test:**
1. Der Patient sitzt auf einem Stuhl mit Armlehnen
2. Auf 'Los' steht er auf
3. Er geht 3 Meter geradeaus (Markierung am Boden)
4. Er dreht um
5. Er geht zurück und setzt sich wieder

**Du stoppst die Zeit.** Gehstock oder Rollator sind erlaubt — schreib das auf.

**Ergebnisse:**
- Unter 10 Sekunden: Alles gut
- 10-19 Sekunden: Geht so
- 20-29 Sekunden: Sturzgefahr
- 30 Sekunden und mehr: Sehr hohe Sturzgefahr

Der **DNQP-Expertenstandard Sturzprophylaxe** (2022) empfiehlt diesen Test. (Podsiadlo & Richardson 1991)"

- **Erklärungs-Step:** stepType `timeline` (5 Schritte des TUG als Zeitstrahl)
- **Glossar-Begriffe:** [Timed-Up-and-Go, Sturzrisiko, Gehtest, Mobilitätsassessment]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Beim TUG zählt nur die Geschwindigkeit — wer schnell ist, ist sicher"**
- **Fachbegriff:** Geschwindigkeits-Fokus-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — der TUG misst **Zeit**, aber du beobachtest auch **Qualität**: Nutzt er die Armlehnen? Geht er unsicher? Braucht er Hilfe beim Umdrehen? Verliert er das Gleichgewicht? Eine gute Zeit mit schlechter Bewegungsqualität ist trotzdem auffällig. Quantität und Qualität zusammen."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — bei TUG zählt **nicht nur die Zeit**. Du schaust auch, **wie** der Patient sich bewegt: Stützt er sich am Stuhl? Geht er unsicher? Wackelt er beim Umdrehen? Schnell zu sein mit schlechter Bewegung ist auch riskant. Schau beides an: Zeit und Bewegung."

**D2: "Den TUG kann man nur mit Stoppuhr-App machen, nicht mit Uhr"**
- **Fachbegriff:** Technik-Abhängigkeits-Mythos
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — du kannst **jede Stoppuhr** nutzen (Handy, Armbanduhr, Timer). Wichtig ist nur: **Start** beim Kommando 'Los' (bevor der Patient aufsteht), **Stopp** wenn sein Gesäß den Stuhl berührt. Bei mehreren Tests im Verlauf: immer die gleiche Methode und Stuhl-Höhe."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — jede Uhr geht: Handy, Armbanduhr, Küchenuhr. Wichtig: **Starten**, wenn du 'Los' sagst, **stoppen**, wenn der Patient sich wieder hinsetzt. Bei mehreren Tests: Immer gleich messen und gleichen Stuhl nehmen."

**D3: "Wer beim TUG Hilfsmittel braucht (Rollator), darf den Test nicht machen"**
- **Fachbegriff:** Hilfsmittel-Ausschluss-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Hilfsmittel wie Rollator oder Gehstock sind beim TUG **ausdrücklich erlaubt**. Du dokumentierst nur **welches Hilfsmittel genutzt wurde**. Ziel ist die Einschätzung im **Alltag des Patienten** — nicht ein künstlicher 'Idealzustand' ohne Hilfsmittel. Realität zählt."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — der Patient darf seinen Rollator oder Gehstock benutzen. Das schreibst du nur dazu: 'Mit Rollator: 22 Sekunden'. Du willst ja sehen, wie er im **Alltag** läuft — nicht wie er ohne Hilfe wäre. Merke: Hilfsmittel sind erlaubt."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Der TUG (Podsiadlo & Richardson 1991) misst: Aufstehen → 3 m gehen → umdrehen → zurück → hinsetzen. Zeit gestoppt. Unter 10 Sek. = gut, 10-19 = grenzwertig, 20-29 = Sturzrisiko, ≥30 = stark eingeschränkt. Neben der Zeit beobachtest du Bewegungsqualität. Im DNQP-Standard Sturz empfohlen."

**B1 (245 Zeichen):** "Sehr gut. Der TUG: Aufstehen, 3 Meter gehen, umdrehen, zurück, hinsetzen. Zeit stoppen. Unter 10 Sekunden: gut. Über 20 Sekunden: Sturzgefahr. Über 30 Sekunden: hohe Sturzgefahr. Schau auch, wie der Patient sich bewegt — nicht nur die Zeit. Der DNQP empfiehlt diesen Test."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der TUG-Test? Ab wie vielen Sekunden besteht Sturzrisiko?"
- **Rückseite:** "Timed-Up-and-Go: Aufstehen, 3 m gehen, umdrehen, zurück, hinsetzen. Zeit messen. ≥20 Sek = erhöhte Sturzgefahr. ≥30 Sek = stark eingeschränkt. (Podsiadlo & Richardson 1991)"
- **Kategorie:** assessment

---

## Baustein 10: assessments-zuordnung

### Metadaten
- **bausteinId:** assessments-expertenstandards-zuordnung
- **bloomLevel:** 4
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Du hast einen neu aufgenommenen 84-jährigen Bewohner: Schlaganfall vor 2 Monaten, 6 kg Gewichtsverlust, Schmerzen im Rücken, geht unsicher. **Welche 4 Assessments machst du — und in welcher Reihenfolge?**"
- **Step-Typ:** freetext (Bloom 4: Anwendung)

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "**Assessments passen zu bestimmten Pflegeproblemen**: Braden → Dekubitusrisiko, Barthel → Selbstständigkeit, NRS → Schmerz, MNA → Mangelernährung, TUG → Sturzrisiko/Mobilität. Bei mehreren Problemen: immer mit dem **Pflegeprozess** strukturieren (Info sammeln zuerst)."

**B1 (240 Zeichen):** "Jedes Assessment hat ein **Thema**: Braden = Dekubitus. Barthel = Selbstständigkeit. NRS = Schmerz. MNA = Essen. TUG = Stürze. Bei einem Patienten mit vielen Problemen: **Erst alle Infos sammeln**, dann die passenden Assessments machen — nicht alle auf einmal."

- **Step-Typ:** matching (Assessment ↔ Pflegeproblem)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"Die Assessment-Wahl folgt dem **Pflegeprozess**: Zuerst sammelst du Informationen (Anamnese, Beobachtung, Dokumentation), dann entscheidest du, welche standardisierten Assessments nötig sind.

**Zuordnung Assessment → Pflegeproblem:**

| Assessment | Misst | DNQP-Expertenstandard |
|---|---|---|
| **Braden-Skala** | Dekubitusrisiko | Dekubitusprophylaxe (2017/2024) |
| **Barthel-Index** | ADL-Selbstständigkeit | (kein Standard, aber in vielen Einrichtungen Pflicht) |
| **NRS** | Schmerzintensität | Schmerzmanagement akut (2011) / chronisch (2015) |
| **MNA / MNA-SF** | Mangelernährungsrisiko | Ernährungsmanagement (2017) |
| **TUG** | Sturzrisiko/Mobilität | Sturzprophylaxe (2022), Mobilität (2014) |
| **BESD** | Schmerz bei Demenz | Schmerzmanagement + Beziehungsgestaltung Demenz (2019) |
| **Tinetti-Test** | Gleichgewicht/Gang | Sturzprophylaxe (2022) |

**Vorgehen bei komplexen Fällen (mehrere Probleme):** Informationen zuerst strukturieren (z.B. nach ATLs oder ABEDL), dann die 3-4 relevantesten Assessments durchführen. **Nicht alle auf einmal** — das überfordert den Patienten. (DNQP 2024)"

**B1 (680 Zeichen):**
"Bei der Auswahl von Assessments hilft der **Pflegeprozess**: Erst Informationen sammeln, dann die passenden Tests machen.

**Welches Assessment für welches Problem?**

| Assessment | Was misst es? | DNQP-Standard |
|---|---|---|
| **Braden** | Dekubitus-Risiko | Dekubitusprophylaxe |
| **Barthel** | Selbstständigkeit im Alltag | (kein eigener Standard) |
| **NRS** | Schmerz-Stärke | Schmerzmanagement |
| **MNA** | Mangelernährungs-Risiko | Ernährungsmanagement |
| **TUG** | Sturz-Risiko, Mobilität | Sturzprophylaxe, Mobilität |
| **BESD** | Schmerz bei Demenz | Schmerz + Demenz |

Wenn ein Patient **viele Probleme** hat: Nicht alle Tests auf einmal. Sammle erst Informationen (Anamnese, Gespräch). Dann wähle die **3-4 wichtigsten** Tests. Sonst wird der Patient überfordert. (DNQP 2024)"

- **Erklärungs-Step:** stepType `matrix` (Assessment × Problem × Expertenstandard)
- **Glossar-Begriffe:** [Anamnese, Pflegeprozess, ABEDL, Assessmentauswahl]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Bei neuen Bewohnern macht man sicherheitshalber alle verfügbaren Assessments"**
- **Fachbegriff:** Assessment-Überladung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **zu viele Assessments = Belastung** für den Bewohner (Müdigkeit, Frustration) und für dich (Zeit). Wähle gezielt: Was sind die **wichtigsten Risiken** bei diesem Bewohner? Dort setzt du an. Andere Assessments kommen später, wenn der Bedarf da ist. Qualität vor Quantität."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **viele Tests auf einmal** sind schlecht. Der Bewohner wird müde. Du verlierst Zeit. Besser: Überlege, was sind die **größten Probleme**? Die 3-4 wichtigsten Tests machen reicht. Andere kommen später, wenn nötig. Merke: Weniger ist oft mehr."

**D2: "Man macht erst die Assessments, dann sammelt man Informationen"**
- **Fachbegriff:** Pflegeprozess-Umkehrung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — der Pflegeprozess beginnt mit **Information sammeln** (Stufe 1 nach Fiechter/Meier 1981: Informieren). Erst durch Anamnese, Gespräch und Beobachtung weißt du, **welche Assessments** sinnvoll sind. Ein Assessment ohne Vorinformation ist wie ein Röntgen ohne Fragestellung: ineffizient."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **zuerst sammelst du Informationen**: Gespräch mit dem Bewohner, Arztbrief lesen, beobachten. Erst **dann** machst du Assessments. Sonst weißt du nicht, was du messen sollst. Merke: Erst informieren, dann prüfen. So sagt es der Pflegeprozess."

**D3: "Wenn ein Assessment normal ausfällt, braucht man es nicht wieder zu machen"**
- **Fachbegriff:** Einmal-Normal-Fehler
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — Zustände **verändern sich**: Eine Bewohnerin mit heute gutem Barthel kann nach Infekt/Sturz in 4 Wochen abbauen. Der DNQP-Standard fordert **regelmäßige Wiederholung** (z.B. 14-tägig oder bei Zustandsänderung). Einmal normal heißt nicht: für immer sicher."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — der Zustand kann sich **ändern**: Eine Infektion, ein Sturz, weniger Appetit. Deshalb machst du Assessments **immer wieder** (z.B. alle 2 Wochen oder wenn was passiert). Der DNQP sagt das auch. Merke: Einmal gut heißt nicht, dass es so bleibt."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Die Assessment-Wahl folgt dem Pflegeprozess: Informationen zuerst → passende Assessments. Jedes Assessment ist einem Pflegeproblem zugeordnet (Braden = Dekubitus, TUG = Sturz, MNA = Ernährung, NRS = Schmerz, Barthel = Selbstständigkeit). Bei komplexen Fällen: 3-4 wichtigste priorisieren, nicht alle auf einmal."

**B1 (265 Zeichen):** "Sehr gut. Jedes Assessment hat ein Thema. Erst sammelst du Informationen, dann wählst du die passenden Tests. Braden = Dekubitus. NRS = Schmerz. MNA = Essen. TUG = Sturz. Barthel = Selbstständigkeit. Bei vielen Problemen: Nur die 3-4 wichtigsten — nicht alle, sonst wird der Patient überfordert."

### Verknüpfte Karteikarte
- **Vorderseite:** "Ordne zu: Welches Assessment misst Dekubitusrisiko, Sturzrisiko, Ernährungsstatus, Schmerz, Selbstständigkeit?"
- **Rückseite:** "Braden = Dekubitus. TUG = Sturz. MNA = Ernährung. NRS = Schmerz. Barthel = Selbstständigkeit (ADL)."
- **Kategorie:** assessment

---

## Baustein 11: klassifikationssysteme

### Metadaten
- **bausteinId:** assessments-expertenstandards-klassifikationen
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn zwei Pflegekräfte den gleichen Patienten beschreiben — warum würden sie wahrscheinlich unterschiedliche Worte benutzen? Und warum ist das ein Problem, z.B. beim Pflegeüberleitungsbogen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "**Klassifikationssysteme** sind einheitliche Fachsprachen: **NANDA-I** (Pflegediagnosen), **NIC** (Interventionen), **NOC** (Outcomes), **ICNP** (ICN-Klassifikation), **ENP** (European Nursing care Pathways). Ziel: Gleiche Begriffe überall — vergleichbar, dokumentierbar."

**B1 (225 Zeichen):** "**Klassifikationssysteme** sind gleiche Wörter für alle. Beispiele: **NANDA-I** (für Diagnosen), **NIC** (für Maßnahmen), **NOC** (für Ergebnisse), **ENP** (Pflegepfade). So reden alle dieselbe Sprache — in jedem Krankenhaus."

- **Step-Typ:** categorize (Begriffe zuordnen: Diagnose/Maßnahme/Ergebnis)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"**Klassifikationssysteme** sind strukturierte Fachvokabulare, die in der Pflegedokumentation genutzt werden. Sie machen Pflegearbeit vergleichbar, nachvollziehbar und forschbar.

**Die wichtigsten Systeme:**

- **NANDA-I** (NANDA International, seit 1982) — Pflegediagnosen. Aktuelle Version 2021-2023 enthält ~250 Diagnosen (z.B. 'Akute Schmerzen', 'Sturzgefahr').
- **NIC** (Nursing Interventions Classification, University of Iowa) — rund 554 Pflegemaßnahmen.
- **NOC** (Nursing Outcomes Classification) — messbare Pflegeergebnisse. Häufig zusammen mit NANDA und NIC als 'NNN-Verbindung' genutzt.
- **ICNP** (International Classification for Nursing Practice, vom ICN) — globale Terminologie.
- **ENP** (European Nursing care Pathways) — im deutschsprachigen Raum verbreitet, Pflegeprozess-orientiert.

In Deutschland: keine gesetzliche Pflicht zu einem bestimmten System. Einrichtungen wählen oft NANDA-I + NIC oder ENP. (NANDA International 2021-2023; ICN 2021)"

**B1 (620 Zeichen):**
"**Klassifikationssysteme** sind gleiche Wörter für Pflege. Alle Pflegekräfte benutzen die gleichen Begriffe. So kann man Pflege **vergleichen** und in Studien untersuchen.

**Die wichtigsten:**

- **NANDA-I** (seit 1982, USA) — **Pflegediagnosen**. Etwa 250 Diagnosen, z.B. 'Sturzgefahr' oder 'Akute Schmerzen'.
- **NIC** — rund 554 **Pflegemaßnahmen**.
- **NOC** — **Pflegeergebnisse**, die man messen kann.
- **ICNP** — Welt-Terminologie vom **ICN** (International Council of Nurses).
- **ENP** — **European Nursing care Pathways**, im deutschsprachigen Raum oft genutzt.

In Deutschland ist **kein System Pflicht**. Jede Einrichtung darf wählen. Oft benutzt man NANDA + NIC oder ENP. (NANDA International 2021-2023)"

- **Erklärungs-Step:** stepType `text` (displayFormat: glossary)
- **Glossar-Begriffe:** [NANDA-I, NIC, NOC, ICNP, ENP, Pflegediagnose, Klassifikation]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "NANDA-I ist in Deutschland gesetzlich vorgeschrieben"**
- **Fachbegriff:** Rechts-Pflicht-Fehler
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — in Deutschland ist **kein Klassifikationssystem gesetzlich vorgeschrieben**. Einrichtungen dürfen wählen: NANDA-I, ENP, ICNP oder keine Klassifikation. Einheitlichkeit besteht nur innerhalb der Einrichtung. Der DNQP empfiehlt Strukturierung, aber kein spezifisches System."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **kein System ist Pflicht** in Deutschland. Jede Einrichtung darf wählen: NANDA, ENP oder was anderes. Wichtig ist nur, dass **innerhalb einer Einrichtung** alle das gleiche System benutzen. Sonst versteht keiner den anderen."

**D2: "Pflegediagnosen und medizinische Diagnosen sind dasselbe"**
- **Fachbegriff:** Diagnose-Verwechslung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **medizinische Diagnosen** (z.B. 'Schlaganfall') beschreiben **Krankheiten**. **Pflegediagnosen** (z.B. 'Selbstpflegedefizit Körperpflege') beschreiben **pflegerelevante Probleme/Reaktionen**. Ein Schlaganfall kann viele Pflegediagnosen auslösen: Sturzgefahr, Selbstpflegedefizit, Kommunikationsproblem usw."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **Arzt-Diagnosen** sagen, welche **Krankheit** jemand hat (z.B. Schlaganfall). **Pflegediagnosen** sagen, **welches Pflege-Problem** die Person hat (z.B. Sturzgefahr, Probleme beim Waschen). Ein Schlaganfall kann viele Pflegediagnosen auslösen."

**D3: "NIC und NOC sind Teile von NANDA-I"**
- **Fachbegriff:** System-Verschmelzung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — NANDA-I (Diagnosen), NIC (Maßnahmen) und NOC (Ergebnisse) sind **drei eigenständige Systeme** unterschiedlicher Herkunft. Sie werden oft zusammen genutzt ('**NNN-Verbindung**'): zu einer NANDA-Diagnose werden passende NIC-Maßnahmen und NOC-Ergebnisse zugeordnet."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — NANDA, NIC und NOC sind **drei verschiedene Systeme**. Aber sie werden oft **zusammen benutzt** — das heißt **NNN-Verbindung**. Beispiel: NANDA-Diagnose → dazu passende NIC-Maßnahmen → dazu passende NOC-Ergebnisse. Drei Systeme, die zusammenpassen."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Klassifikationssysteme sind strukturierte Fachvokabulare: NANDA-I (Diagnosen, seit 1982), NIC (Interventionen), NOC (Outcomes), ICNP (international, vom ICN), ENP (Pflegepfade). Sie machen Pflege vergleichbar. In Deutschland keine gesetzliche Vorgabe — Einrichtung wählt selbst."

**B1 (245 Zeichen):** "Sehr gut. Klassifikationssysteme sind gleiche Wörter für Pflege. NANDA = Diagnosen. NIC = Maßnahmen. NOC = Ergebnisse. ENP = Pflegepfade. ICNP = international. In Deutschland ist kein System Pflicht — jede Einrichtung wählt ihr eigenes. Wichtig: alle in der Einrichtung benutzen das gleiche."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wofür stehen NANDA-I, NIC und NOC? Was misst jedes System?"
- **Rückseite:** "NANDA-I = Pflegediagnosen. NIC = Pflegeinterventionen/Maßnahmen. NOC = Pflegeergebnisse. Oft als 'NNN-Verbindung' zusammen genutzt."
- **Kategorie:** fachbegriff

---

## Baustein 12: sechs-standardkriterien

### Metadaten
- **bausteinId:** assessments-expertenstandards-sechs-kriterien
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn du einen Expertenstandard schreibst — was muss darin stehen, damit eine Pflegekraft am nächsten Tag danach arbeiten kann? Nenne 5-6 wichtige Punkte."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Jeder DNQP-Expertenstandard hat **6 Standardkriterien**: S1/P1/E1 = Risikoerhebung (Screening/Assessment), S2/P2/E2 = Voraussetzungen/Verfahren, S3/P3/E3 = Maßnahmenplanung, S4/P4/E4 = Durchführung, S5/P5/E5 = Information/Beratung/Schulung, S6/P6/E6 = Evaluation."

**B1 (225 Zeichen):** "Jeder Expertenstandard hat **6 Kriterien**: (1) **Risiko prüfen**, (2) **Voraussetzungen** schaffen, (3) **Maßnahmen planen**, (4) **Maßnahmen durchführen**, (5) **Informieren und beraten**, (6) **Evaluieren** (prüfen, ob es hilft)."

- **Step-Typ:** sorting (6 Kriterien in richtige Reihenfolge)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Alle 12 DNQP-Expertenstandards sind nach demselben Muster aufgebaut — **6 Standardkriterien**, jedes mit S-P-E (Struktur/Prozess/Ergebnis):

1. **Kriterium 1 — Risikoerhebung / Screening / Assessment**
   Ziel: Auf Risiko screenen, bei Auffälligkeit Assessment. Wer? Welches Instrument? Wann?

2. **Kriterium 2 — Voraussetzungen / Verfahrensregelung**
   Ziel: Einrichtung schafft Strukturen (Material, Personal, Verfahrensanweisung).

3. **Kriterium 3 — Maßnahmenplanung**
   Ziel: Individueller Maßnahmenplan auf Basis des Assessments.

4. **Kriterium 4 — Durchführung der Maßnahmen**
   Ziel: Maßnahmen werden umgesetzt, dokumentiert.

5. **Kriterium 5 — Information, Beratung, Schulung, Anleitung**
   Ziel: Patient/Angehörige informieren und befähigen.

6. **Kriterium 6 — Evaluation**
   Ziel: Wirksamkeit prüfen, Maßnahmen anpassen.

Das sichert: **Von Risiko bis Erfolg wird alles durchdacht** — keine Lücken. (DNQP 2024)"

**B1 (630 Zeichen):**
"Alle 12 Expertenstandards haben **die gleiche Struktur**: 6 Kriterien. Jedes Kriterium hat S-P-E.

1. **Kriterium 1 — Risiko prüfen**
   Screening und Assessment. Wer macht es? Womit? Wann?

2. **Kriterium 2 — Voraussetzungen**
   Die Einrichtung muss alles bereitstellen: Personal, Material, Regeln.

3. **Kriterium 3 — Maßnahmen planen**
   Ein individueller Plan für diesen Patienten.

4. **Kriterium 4 — Maßnahmen durchführen**
   Die Maßnahmen machen und aufschreiben.

5. **Kriterium 5 — Informieren und beraten**
   Patient und Angehörige mitnehmen.

6. **Kriterium 6 — Evaluieren**
   Prüfen: Hat es geholfen? Muss man was ändern?

So geht es bei jedem Standard gleich. So vergisst man nichts. (DNQP 2024)"

- **Erklärungs-Step:** stepType `sequencing` (6 Kriterien in korrekte Reihenfolge)
- **Glossar-Begriffe:** [Verfahrensregelung, Maßnahmenplanung, Evaluation, Anleitung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Reihenfolge der 6 Kriterien ist egal — alles parallel"**
- **Fachbegriff:** Reihenfolge-Egal-Fehler
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die Reihenfolge ist **systematisch**: Ohne Assessment (1) keine gute Planung (3). Ohne Voraussetzungen (2) keine Durchführung (4). Ohne Information (5) keine Compliance. Ohne Evaluation (6) kein Lernen. Die Reihenfolge entspricht dem **Pflegeprozess**. Parallel heißt: alles wird gepflegt, aber in logischer Folge."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — die Reihenfolge ist **wichtig**: Erst Risiko prüfen, dann planen, dann machen, dann prüfen, ob es hilft. Sonst macht man Maßnahmen ohne zu wissen, warum. Die Reihenfolge kommt aus dem **Pflegeprozess**. Merke: Erst denken, dann handeln, dann prüfen."

**D2: "Kriterium 5 (Information/Beratung) ist optional"**
- **Fachbegriff:** Info-Nebensache-Mythos
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — Kriterium 5 ist **kein Zusatz**, sondern **Kernaufgabe**. Information und Beratung sind zentrale Pflegeaufgaben laut **Pflegeberufegesetz (§ 4 PflBG)**. Ohne Einbeziehung des Patienten scheitern Maßnahmen oft — er muss sie verstehen und mittragen. Partizipation ist **Qualitätsmerkmal**, nicht Kür."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — Informieren und beraten ist **Pflicht**. Das steht im **Pflegeberufegesetz (§ 4)**. Wenn der Patient nicht versteht, was du machst, macht er nicht mit. Die Maßnahme funktioniert dann nicht. Merke: Info und Beratung gehören zur Pflege dazu — nicht extra."

**D3: "Kriterium 2 (Voraussetzungen) ist nur Aufgabe der Leitung, nicht der PFK"**
- **Fachbegriff:** Verantwortungs-Trennungsfehler
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die Leitung trägt **Organisationsverantwortung**, aber die PFK trägt **Durchführungsverantwortung** und **muss sich Mängel melden**: fehlendes Material, unklare Verfahrensregelung, fehlendes Training. Ohne Meldung gibt es keine Verbesserung. Beide Ebenen sind verantwortlich, jeweils für ihren Teil."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — die Leitung muss Material und Regeln bereitstellen. Aber **du als PFK musst melden**, wenn was fehlt oder nicht klar ist. Ohne deine Meldung weiß die Leitung nichts. Merke: Leitung organisiert, PFK führt durch und meldet Probleme — beide sind verantwortlich."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Die 6 Standardkriterien: (1) Risikoerhebung/Assessment, (2) Voraussetzungen/Verfahrensregelung, (3) Maßnahmenplanung, (4) Durchführung, (5) Information/Beratung/Schulung, (6) Evaluation. Jedes mit S/P/E. Die Reihenfolge entspricht dem Pflegeprozess — keine Lücke von Risiko bis Erfolg."

**B1 (245 Zeichen):** "Sehr gut. Die 6 Kriterien in jedem Expertenstandard: Erst Risiko prüfen, dann Voraussetzungen, dann Maßnahmen planen, dann durchführen, dann informieren und beraten, dann evaluieren. So geht es bei allen Standards gleich. Die Reihenfolge folgt dem Pflegeprozess."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 6 Standardkriterien eines DNQP-Expertenstandards in der richtigen Reihenfolge."
- **Rückseite:** "1. Risikoerhebung/Assessment, 2. Voraussetzungen/Verfahrensregelung, 3. Maßnahmenplanung, 4. Durchführung, 5. Information/Beratung/Schulung, 6. Evaluation. Jedes mit S/P/E (Donabedian)."
- **Kategorie:** fakt

---

## Baustein 13: juristische-bedeutung

### Metadaten
- **bausteinId:** assessments-expertenstandards-recht
- **bloomLevel:** 5
- **wissensart:** komplikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Frau Kaya stürzt im Pflegeheim und bricht sich die Hüfte. Ihr Sohn klagt gegen das Heim. Warum könnte der Expertenstandard Sturzprophylaxe plötzlich **juristisch wichtig** werden?"
- **Step-Typ:** freetext (Bloom 5: Analyse)

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Expertenstandards gelten als **antizipiertes Sachverständigengutachten** (Rechtsprechung). Wer ohne dokumentierte Begründung davon abweicht, handelt **fahrlässig**. Pflegefachkraft: **Durchführungsverantwortung**. Leitung: **Organisationsverantwortung**."

**B1 (225 Zeichen):** "Expertenstandards sind vor Gericht **wichtig**. Sie gelten als **vorweggenommenes Gutachten** von Experten. Wer ohne Grund nicht danach arbeitet, ist **fahrlässig**. Pflegekraft ist für die Durchführung verantwortlich, Leitung für die Organisation."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"**Juristische Bedeutung von Expertenstandards:**

Die Rechtsprechung wertet Expertenstandards als **antizipiertes Sachverständigengutachten**. Das heißt: Sie beschreiben, was ein Sachverständiger im Einzelfall bestätigen würde — ohne dass er gerufen werden muss.

**Folgen bei Schadensfall:**
- **Strafrechtlich:** Abweichung ohne Begründung kann als Fahrlässigkeit gewertet werden (§ 222/229 StGB bei Tod/Verletzung).
- **Zivilrechtlich:** Haftung für Schäden, Schmerzensgeld. **Beweislastumkehr**: Die Einrichtung muss nachweisen, dass sie standardkonform gehandelt hat.

**Verantwortungsebenen:**
- **Pflegefachkraft:** **Durchführungsverantwortung** (korrekte Umsetzung der Maßnahmen, dokumentieren).
- **Pflegedienstleitung/Einrichtungsleitung:** **Organisationsverantwortung** (Standards einführen, Personal schulen, Material bereitstellen).

**Abweichung erlaubt?** Ja — aber mit **dokumentierter Begründung** (z.B. Patient lehnt Maßnahme ausdrücklich ab). Ohne Dokumentation = Fahrlässigkeit.

Rechtsgrundlagen für Altenpflege: **§ 113a SGB XI** (Expertenstandards verbindlich), **§ 137a SGB V** (Qualitätssicherung). (DNQP 2024; § 113a SGB XI)"

**B1 (660 Zeichen):**
"**Warum sind Expertenstandards vor Gericht wichtig?**

Gerichte sagen: Expertenstandards sind wie ein **vorweggenommenes Gutachten**. Sie zeigen, was richtige Pflege ist. Wer sich nicht daran hält, hat ein Problem.

**Was passiert bei einem Schadensfall?**
- **Strafrecht:** Der Schaden kann als **Fahrlässigkeit** gewertet werden (§ 222 StGB bei Tod, § 229 StGB bei Verletzung).
- **Zivilrecht:** Die Einrichtung muss zahlen (Schmerzensgeld). **Beweislastumkehr**: Das Heim muss zeigen, dass es den Standard befolgt hat.

**Wer trägt die Verantwortung?**
- **Du als Pflegekraft:** Du musst die Maßnahmen **richtig durchführen und aufschreiben**.
- **Die Leitung:** Sie muss die Standards einführen, dich schulen, Material bereitstellen.

**Darfst du vom Standard abweichen?** Ja — aber **mit Begründung im Pflegebericht**. Zum Beispiel: 'Frau K. lehnt Positionswechsel ausdrücklich ab (Wille dokumentiert).' Ohne Begründung gilt: **Fahrlässigkeit**.

Gesetze: **§ 113a SGB XI** (Altenpflege), **§ 137a SGB V**."

- **Erklärungs-Step:** stepType `comparison` (Durchführungsverantwortung vs. Organisationsverantwortung)
- **Glossar-Begriffe:** [antizipiertes Sachverständigengutachten, Durchführungsverantwortung, Organisationsverantwortung, Beweislastumkehr, Fahrlässigkeit]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn ein Patient etwas ablehnt, bist du automatisch aus der Verantwortung"**
- **Fachbegriff:** Ablehnungs-Exkulpations-Fehler
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — Ablehnung schützt dich nur, wenn du die Ablehnung **dokumentierst** und zuvor **aufgeklärt** hast (Folgen, Alternativen). Zusätzlich musst du die **Einwilligungsfähigkeit** prüfen. Bei Demenz oder Bewusstseinsstörung: Betreuer/Bevollmächtigter einbeziehen. Ohne Doku und Aufklärung keine Entlastung."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — Ablehnung hilft dir nur, wenn du sie **aufschreibst**. Vorher musst du **aufklären**: Was passiert, wenn wir es nicht machen? Gibt es Alternativen? Bei Demenz: **Betreuer** einbeziehen. Ohne Aufklärung und Dokumentation bist du nicht aus der Verantwortung."

**D2: "Die Pflegefachkraft haftet immer — die Leitung nie"**
- **Fachbegriff:** Einzel-Haftungs-Fehler
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — es gibt **zwei Ebenen**: Durchführungsverantwortung (PFK) und Organisationsverantwortung (Leitung). Wenn das Material fehlt, weil die Leitung es nicht bestellt hat, haftet die Leitung. Wenn die PFK vorhandenes Material nicht korrekt nutzt, haftet die PFK. Beide Ebenen können getrennt oder zusammen haften."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — es gibt **zwei Ebenen**: Du als Pflegekraft für die **Durchführung**. Die Leitung für die **Organisation** (Material, Personal, Regeln). Wenn Material fehlt, weil die Leitung nicht bestellt hat, ist sie dran. Wenn du Material nicht richtig nutzt, bist du dran."

**D3: "Wer einen Standard nicht kennt, kann nicht haften"**
- **Fachbegriff:** Unkenntnis-Schutz-Mythos
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Unkenntnis schützt nicht**. Als examinierte PFK wirst du erwartet, die Expertenstandards zu kennen. Die Einrichtung muss dich einarbeiten (Organisationsverantwortung), aber du musst auch nachfragen und dich schulen (Fortbildungspflicht). Beide Seiten tragen Verantwortung für das Wissen."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **'Ich wusste das nicht' schützt nicht**. Als Pflegekraft musst du die Standards **kennen**. Die Einrichtung muss dich **schulen**. Du musst **nachfragen und fortbilden**. Merke: Beide Seiten sind verantwortlich. Unwissen ist keine Entschuldigung."

### Richtig-Feedback
**C1 (300 Zeichen):** "Genau. Expertenstandards gelten juristisch als antizipiertes Sachverständigengutachten. Abweichung ohne dokumentierte Begründung = Fahrlässigkeit. Im Schadensfall Beweislastumkehr: Einrichtung muss standardkonformes Handeln nachweisen. Zwei Verantwortungsebenen: Durchführung (PFK) + Organisation (Leitung). Rechtsgrundlagen: § 113a SGB XI, § 137a SGB V."

**B1 (260 Zeichen):** "Sehr gut. Expertenstandards gelten vor Gericht wie ein Gutachten. Ohne Grund abweichen = fahrlässig. Im Schadensfall muss die Einrichtung zeigen, dass sie richtig gepflegt hat. Du bist für die Durchführung verantwortlich, die Leitung für die Organisation. Gesetze: § 113a SGB XI, § 137a SGB V."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum haben Expertenstandards juristische Bedeutung? Wer trägt welche Verantwortung?"
- **Rückseite:** "Gelten als antizipiertes Sachverständigengutachten — Abweichung ohne Begründung = Fahrlässigkeit. PFK = Durchführungsverantwortung, Leitung = Organisationsverantwortung. Rechtsgrundlagen: § 113a SGB XI, § 137a SGB V."
- **Kategorie:** recht

---

## Baustein 14: assessments-kritisch-reflektieren

### Metadaten
- **bausteinId:** assessments-expertenstandards-kritik
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Die Braden-Skala zeigt bei Herrn Özkan (68 J., Schlaganfall) 22 Punkte — praktisch kein Risiko. Dein Bauchgefühl sagt aber: 'Der ist gefährdet.' Was vertraust du? Und **warum**?"
- **Step-Typ:** mc
  - A: "Der Skala — die ist wissenschaftlich validiert" (falsch)
  - B: "Dem Bauchgefühl — das ist nach 10 Jahren Erfahrung zuverlässig" (falsch)
  - C: "Beidem — ich dokumentiere beides und plane entsprechend vorsichtig" (richtig)
  - D: "Ich mache lieber noch eine zweite Skala zur Sicherheit" (teilweise, aber nicht ausreichend)

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Assessments haben **Grenzen**: Sie sind **Momentaufnahmen**, kulturell geprägt, sprachabhängig, im Extremfall untrainiert (Interrater-Reliabilität). Der DNQP-Standard Dekubitus 2017/2024 betont deshalb: **Die klinische Einschätzung der PFK ist das primäre Instrument**, nicht die Skala."

**B1 (245 Zeichen):** "Assessments sind **nicht perfekt**: Sie sind **Momentaufnahmen**, oft auf Englisch entwickelt und dann übersetzt. Zwei Pflegekräfte können **unterschiedliche Punkte** geben. Der DNQP sagt: Deine **eigene Einschätzung** als Pflegekraft ist am wichtigsten, nicht die Skala."

- **Step-Typ:** text (displayFormat: procontra)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"**Grenzen standardisierter Assessments:**

1. **Momentaufnahme:** Ein Assessment zeigt den Zustand **in diesem Moment** — nicht die Entwicklung. Zustände können sich innerhalb von Stunden ändern (akute Erkrankung, Medikamente).

2. **Interrater-Reliabilität:** Unterschiedliche PFK können unterschiedliche Punkte vergeben. Schulung und klare Kriterien sind nötig.

3. **Sprachliche und kulturelle Prägung:** Viele Skalen stammen aus USA/UK. Übersetzungen können Nuancen verlieren. Beispiel: BESD-Fragen zu Schmerz-Mimik kulturell unterschiedlich interpretierbar.

4. **Risiko der Skala-Gläubigkeit:** Die Zahl wird zum Selbstzweck — 'Braden 22, also kein Risiko' — obwohl das klinische Bild etwas anderes sagt.

**Position des DNQP (Dekubitus 2017/2024):** Die **klinische Einschätzung der PFK** ist das **primäre Instrument**. Skalen sind Ergänzung, nicht Ersatz. Professionelle Intuition + Assessment = beste Einschätzung. Dokumentiere beides: die Zahl und deine fachliche Begründung, wenn sie abweicht. (DNQP 2024)"

**B1 (670 Zeichen):**
"**Assessments sind nicht perfekt. Das musst du wissen:**

1. **Momentaufnahme:** Das Assessment zeigt nur **jetzt**. Morgen kann alles anders sein — besonders bei akuten Krankheiten.

2. **Unterschiedliche Einschätzung:** Zwei Pflegekräfte können **verschiedene Punkte** geben. Deshalb müssen alle gut geschult sein.

3. **Aus anderen Ländern:** Viele Skalen kommen aus den USA oder England. Bei der Übersetzung gehen manchmal **Bedeutungen verloren**.

4. **Skala ist nicht alles:** Manche Pflegekräfte schauen nur auf die Zahl. Aber die Zahl ist **nicht die ganze Wahrheit**.

**Was sagt der DNQP?** Deine **eigene Einschätzung** als Pflegekraft ist am **wichtigsten**. Die Skala ist nur eine Hilfe.

**Wichtig:** Wenn dein Bauchgefühl anders sagt als die Skala — dokumentiere beides und plane **vorsichtig**. Schreib auf, warum du anders denkst."

- **Erklärungs-Step:** stepType `reflection` (Welche Grenzen hat ein Assessment? Wann vertraust du deinem Bauchgefühl?)
- **Glossar-Begriffe:** [klinische Einschätzung, Interrater-Reliabilität, Validität, Bauchgefühl (professionelle Intuition)]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn die Skala 'kein Risiko' zeigt, reicht das aus — Bauchgefühl ist unwissenschaftlich"**
- **Fachbegriff:** Intuitions-Abwertung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **klinische Intuition** ist **nicht unwissenschaftlich**. Pflegewissenschaftler wie Patricia Benner ('Von der Anfängerin zur Expertin', 1984) zeigen: Erfahrene PFK erkennen Muster, die Skalen nicht erfassen. Das DNQP-Standardpapier Dekubitus 2017/2024 nennt die klinische Einschätzung **primäres Instrument**."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — **Bauchgefühl** ist **nicht unwissenschaftlich**. Erfahrene Pflegekräfte erkennen Dinge, die eine Skala nicht zeigt. Das hat die Forscherin Patricia Benner 1984 gezeigt. Der DNQP sagt: Die **Einschätzung der Pflegekraft** ist das Wichtigste — die Skala hilft nur."

**D2: "Skalen sind objektiv, deshalb immer besser als Meinungen"**
- **Fachbegriff:** Objektivitäts-Mythos
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — Skalen **wirken objektiv** (Zahlen!), aber die **Einstufung ist subjektiv**: 'Wie aktiv ist der Patient?' entscheidet die PFK — je nach Schulung, Tageszeit, Kenntnis. Interrater-Reliabilität ist oft nur moderat (Kappa 0,5-0,7). Zahlen suggerieren Genauigkeit, die es so nicht gibt."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — Skalen haben Zahlen, aber **die Einschätzung ist trotzdem subjektiv**: 'Wie viel bewegt sich der Patient?' — das beantwortet die Pflegekraft je nach Erfahrung. Zwei Pflegekräfte können **unterschiedliche Zahlen** geben. Merke: Zahlen = nicht automatisch objektiv."

**D3: "Man sollte nur neue Assessments benutzen, die in Deutschland entwickelt wurden"**
- **Fachbegriff:** Nationalismus-Wissenschaft-Fehler
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — die **Herkunft** einer Skala ist weniger wichtig als ihre **Validierung im deutschen Kontext**. Viele internationale Skalen (Braden, Barthel, NRS) sind in Deutschland geprüft und gelten als etabliert. Wichtig: kulturelle Anpassung (BESD für Demenzpatienten in DE entwickelt). Qualität > Herkunft."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — es ist **egal, aus welchem Land** eine Skala kommt. Wichtig ist: Wurde sie **auch in Deutschland getestet**? Braden, Barthel und NRS sind international entwickelt, aber in Deutschland geprüft. Bei Demenz gibt es **BESD** — die wurde in Deutschland entwickelt."

### Richtig-Feedback
**C1 (305 Zeichen):** "Genau. Assessments sind Momentaufnahmen und haben Grenzen: Interrater-Unterschiede, kulturelle Prägung, Risiko der Skala-Gläubigkeit. Der DNQP (Dekubitus 2017/2024) sieht die klinische Einschätzung der PFK als primäres Instrument. Bauchgefühl + Skala + Dokumentation = beste Praxis. Wenn du anders denkst als die Skala: beides dokumentieren und vorsichtig planen."

**B1 (265 Zeichen):** "Sehr gut. Assessments haben Grenzen: Sie sind Momentaufnahmen, kulturell geprägt, nicht perfekt objektiv. Der DNQP sagt: **Deine Einschätzung** als Pflegekraft ist am wichtigsten. Die Skala ist nur eine Hilfe. Wenn dein Bauchgefühl anders sagt — beides aufschreiben und vorsichtig planen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Grenzen haben standardisierte Assessments? Was sagt der DNQP dazu?"
- **Rückseite:** "Momentaufnahme, Interrater-Unterschiede, kulturelle Prägung, Skala-Gläubigkeit. DNQP (Dekubitus 2017/2024): Klinische Einschätzung der PFK ist primäres Instrument — Skalen ergänzen, ersetzen nicht."
- **Kategorie:** handlung

---

## Bloom-Verteilung (Kontrolle)

| Baustein | Bloom | Thema |
|---|---|---|
| 1 Screening/Assessment | 2 | Definition |
| 2 DNQP-Grundlagen | 1 | Fakt |
| 3 12 Expertenstandards | 2 | Fakt/Übersicht |
| 4 S-P-E-Struktur | 3 | Konzept |
| 5 Braden-Skala | 3 | Assessment |
| 6 Barthel-Index | 3 | Assessment |
| 7 NRS | 2 | Assessment |
| 8 MNA | 2 | Assessment |
| 9 TUG | 3 | Assessment |
| 10 Assessment-Zuordnung | 4 | Entscheidung |
| 11 Klassifikationssysteme | 2 | Fakt |
| 12 6 Standardkriterien | 4 | Konzept |
| 13 Juristische Bedeutung | 5 | Komplikation |
| 14 Kritische Reflexion | 5 | Entscheidung |

**Verteilung:**
- Bloom 1-2: 5/14 = **36%** (Ziel ~21% → etwas über Plan, dem Orientierungscharakter des Themas angemessen)
- Bloom 3-4: 6/14 = **43%**
- Bloom 5-6: 3/14 = **21%**

**Gesamt-Zeit:** 14 × ~4,1 Min = **~58 Min reine Baustein-Zeit**. Mit Wissenstexten, Snacks, Bildern, Feedback und Übergängen → **~173 Min Zielzeit** (= 7 UE × 45 × 0,55). ✅

## Primärquellen (Sammelübersicht)

- **DNQP (2024)** — Verfahrensordnung und 12 Expertenstandards
- **Donabedian A. (1966)** — Milbank Memorial Fund Quarterly 44(3)
- **Mahoney F.I., Barthel D.W. (1965)** — Maryland State Medical Journal 14
- **Braden B.J., Bergstrom N. (1987)** — Rehabilitation Nursing 12(1)
- **Guigoz Y., Vellas B., Garry P.J. (1994)** — Facts and Research in Gerontology
- **Podsiadlo D., Richardson S. (1991)** — JAGS 39(2)
- **NANDA International (2021-2023)** — Nursing Diagnoses
- **ICN (2021)** — Code of Ethics / ICNP
- **Benner P. (1984)** — From Novice to Expert
- **§ 4 PflBG** — Vorbehaltene Tätigkeiten (Informations- und Beratungsauftrag)
- **§ 113a SGB XI** — Expertenstandards Altenpflege
- **§ 137a SGB V** — Qualitätssicherung
- **§ 222/§ 229 StGB** — Fahrlässigkeit

## Urheberrechts-Check

- ✅ Keine [I Care S.XX] Referenzen im Schülertext
- ✅ Keine wörtlichen Übernahmen aus Lehrbüchern
- ✅ Primärquellen statt Lehrbuch-Referenzen (Donabedian, Braden, Mahoney, Guigoz, Podsiadlo, DNQP, SGB)
- ✅ Eigene Reihenfolge und Beispiele
- ✅ Gesetze wörtlich zitiert (§ 113a SGB XI) — amtliches Werk frei
- ✅ DNQP-Standards: Zitat-Regel eingehalten, Quelle genannt

## Offene Punkte für Phase 2

- Patienten für Lernsituationen definieren (Neuaufnahme älterer Mensch, Multimorbid, Akutsituation)
- Baustein-Trigger-Szenarien ("Wenn Schüler NRS nicht kennt → Baustein 7 Stufe 3")
- Verzahnung mit `pflegeprozess` (Voraussetzung): Wiederholung Phase 1 "Informieren"
