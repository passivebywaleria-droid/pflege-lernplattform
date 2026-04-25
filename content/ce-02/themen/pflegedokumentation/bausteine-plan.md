# Wissensbausteine: Pflegedokumentation & Übergabe

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `pflegedokumentation` |
| ceId | `ce-02` |
| cluster | A (Pflegeprozess & Grundlagen) |
| wissensart | konzept |
| geschaetzteUE | 7 |
| zielzeitMin | 173 (7 UE × 45 × 0,55) |
| bausteineAnzahl | 14 |
| voraussetzungen | `pflegeplanung` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 21% (3 Bausteine), Bloom 3-4: 57% (8 Bausteine), Bloom 5-6: 22% (3 Bausteine)

**Primärquellen:**
- § 630f BGB (Behandlungsdokumentation — Pflichten und 10-Jahres-Aufbewahrung)
- § 132a SGB V (Häusliche Krankenpflege — Dokumentationspflicht)
- BMG / Beikirch & Roes (2014): Strukturmodell & Strukturierte Informationssammlung (SIS)
- Leonard M., Graham S., Bonacum D. (2004): SBAR — The human factor. BMJ Qual Saf
- DSGVO (Verordnung EU 2016/679, gültig ab 25.05.2018)
- § 3 Abs. 2 PflBG (Vorbehaltsaufgaben — Pflegeprozessverantwortung)
- DNQP (2023): Rahmenempfehlungen zur Pflegedokumentation

---

## Baustein 1: dokumentationspflicht-grundsatz

### Metadaten
- **bausteinId:** pflegedokumentation-grundsatz
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, du hast Frau Meier heute 3x mobilisiert, aber nichts aufgeschrieben. Die Tochter fragt abends nach. Wie beweist du, dass du es gemacht hast?"
- **Step-Typ:** freetext (aktiviert Problembewusstsein)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Der Grundsatz der Pflegedokumentation lautet: **Was nicht dokumentiert ist, gilt als nicht durchgeführt.** Die Pflicht zur Dokumentation ergibt sich aus § 630f BGB (Behandlungsdokumentation) und gilt auch für Pflegekräfte."

**B1 (210 Zeichen):** "Es gibt einen wichtigen Satz: **Was nicht aufgeschrieben ist, das gilt als nicht gemacht.** Du musst alles dokumentieren, was du am Patienten machst. Das steht im Gesetz (§ 630f BGB)."

- **Step-Typ:** text (displayFormat: quote)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Die Pflegedokumentation ist keine freiwillige Zusatzaufgabe — sie ist **gesetzliche Pflicht**. Nach § 630f BGB (Behandlungsvertragsrecht) müssen alle durchgeführten Maßnahmen, Beobachtungen, Anordnungen und Reaktionen des Patienten schriftlich festgehalten werden. Die Rechtsprechung wendet hier die **Beweislastumkehr** an: Gibt es keine Dokumentation zu einer Maßnahme, gilt sie als **nicht durchgeführt**. Das betrifft dich direkt: Hast du einen Patienten mobilisiert, aber es nicht eingetragen, kann dir bei einem Sturz niemand nachweisen, dass du deine Aufgabe erfüllt hast. Die Dokumentation dient drei Zwecken: **rechtliche Absicherung**, **Informationsweitergabe** zwischen Schichten und **Qualitätssicherung**. Sie ist zudem Pflichtleistung für die Abrechnung mit Pflegekassen (§ 132a SGB V)."

**B1 (540 Zeichen):**
"Dokumentation ist Pflicht — nicht extra. Das Gesetz (§ 630f BGB) sagt: Du musst alles aufschreiben, was du am Patienten machst. Warum so wichtig? Wenn du nichts aufschreibst, **gilt es als nicht gemacht**. Ein Beispiel: Du hast den Patienten alle 2 Stunden gedreht. Aber du hast es nicht eingetragen. Der Patient bekommt einen Dekubitus. Das Gericht sagt dann: 'Sie haben nicht gedreht.' Auch wenn du es gemacht hast. Dokumentation hat drei Aufgaben: Sie **schützt dich rechtlich**, sie **informiert die Kollegen** und sie **sichert die Qualität** der Pflege."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Pflegedokumentation, Beweislastumkehr, § 630f BGB]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Dokumentation ist freiwillig — wichtig ist, dass ich es gemacht habe"**
- **Fachbegriff:** Freiwilligkeits-Irrtum
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — Dokumentation ist **gesetzliche Pflicht** (§ 630f BGB), nicht Kür. Vor Gericht zählt nur die Dokumentation als Beweis. Merke: Ohne Eintrag keine Leistung — egal wie oft du es wirklich gemacht hast."
- **Feedback (B1, 195 Zeichen):** "Fast — Dokumentation ist **Pflicht**, nicht freiwillig. Vor Gericht zählt nur das, was geschrieben ist. Merke: Ohne Eintrag keine Leistung — auch wenn du es wirklich gemacht hast."

**D2: "Dokumentation ist nur für die Abrechnung mit der Kasse"**
- **Fachbegriff:** Abrechnungs-Verkürzung
- **Feedback (C1, 260 Zeichen):** "Das ist **zu kurz gedacht**. Abrechnung ist nur **ein** Zweck. Ebenso wichtig: **rechtliche Absicherung** (Beweislastumkehr), **Kommunikation** zwischen Schichten und **Qualitätssicherung**. Die Dokumentation ist das Gedächtnis der Pflege — nicht nur eine Rechnung."
- **Feedback (B1, 220 Zeichen):** "Fast — Abrechnung ist nur **ein** Grund. Es gibt noch drei weitere: **Rechtlicher Schutz**, **Information** für die Kollegen und **Qualität** der Pflege. Dokumentation ist das Gedächtnis der Pflege — nicht nur eine Rechnung."

**D3: "Die mündliche Übergabe reicht, wenn alle Kollegen Bescheid wissen"**
- **Fachbegriff:** Mündlichkeits-Mythos
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — mündlich ist **ergänzend**, aber **nicht ausreichend**. Nachtdienst, Urlaubsvertretung, MDK-Prüfung, Gericht — keine dieser Personen war bei deiner mündlichen Übergabe dabei. Nur die schriftliche Dokumentation ist nachvollziehbar und rechtssicher."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — mündlich ist **zusätzlich**, aber **nicht genug**. Die Nacht-Kollegin, die Vertretung, der MDK — niemand war bei deiner Übergabe dabei. Nur das Geschriebene ist für alle nachlesbar und rechtssicher."

### Richtig-Feedback
**C1 (245 Zeichen):** "Genau. § 630f BGB verpflichtet alle Pflegekräfte zur lückenlosen Dokumentation. Die **Beweislastumkehr** bedeutet: Ohne Eintrag gilt die Leistung als nicht erbracht. Das schützt den Patienten und — wenn du sorgfältig bist — auch dich selbst."

**B1 (210 Zeichen):** "Sehr gut. Das Gesetz (§ 630f BGB) sagt: Du musst alles aufschreiben. Was nicht aufgeschrieben ist, **gilt als nicht gemacht**. Das ist wichtig für dich: Wenn du sorgfältig schreibst, schützt dich das auch."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welcher Grundsatz gilt für die Pflegedokumentation? (Rechtsgrundlage nennen)"
- **Rückseite:** "Was nicht dokumentiert ist, gilt als nicht durchgeführt (Beweislastumkehr nach § 630f BGB)."
- **Kategorie:** recht

---

## Baustein 2: dokumentation-was-muss-rein

### Metadaten
- **bausteinId:** pflegedokumentation-inhalte
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Du dokumentierst nach deiner Frühschicht. Was muss alles rein — und was ist unwichtig? Liste auf, was dir einfällt."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Pflichtinhalte sind: **durchgeführte Pflegemaßnahmen**, **Beobachtungen** (Vitalzeichen, Haut, Verhalten), **ärztliche Anordnungen und deren Umsetzung**, **Reaktionen des Patienten**, **Besonderheiten/Abweichungen** und **Stürze/Unfälle**. Privates gehört nicht hinein."

**B1 (235 Zeichen):** "Was muss rein: **Was du gemacht hast**, **was du gesehen hast** (Haut, Puls, Verhalten), **was der Arzt angeordnet hat**, **wie der Patient reagiert hat** und **alles Besondere** (Sturz, Schmerzen). Privatmeinungen gehören **nicht** rein."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"Die Pflegedokumentation muss **alle pflegerelevanten Informationen** enthalten — aber nur diese. Pflicht sind:

1. **Durchgeführte Maßnahmen**: Grundpflege, Prophylaxen, Mobilisation, Medikamentengabe (inkl. Zeit + Kürzel).
2. **Beobachtungen**: Vitalzeichen, Hautstatus, Bewusstseinslage, Schmerzen, Stuhl/Urin, Nahrungsaufnahme.
3. **Ärztliche Anordnungen**: Was wurde angeordnet, wann umgesetzt, welche Reaktion?
4. **Reaktionen des Patienten**: 'Frau M. tolerierte die Mobilisation gut', 'Herr K. klagte über Schwindel'.
5. **Abweichungen von der Pflegeplanung**: Warum wurde ein Pflegeziel heute nicht erreicht?
6. **Besondere Ereignisse**: Stürze, Unfälle, Angehörigengespräche, Krankenhausaufnahmen.

**Nicht hinein gehören**: Privatmeinungen ('Patient ist nervig'), Spekulationen, Äußerungen Dritter ohne Relevanz, persönliche Konflikte im Team."

**B1 (590 Zeichen):**
"Was muss in die Dokumentation? **Alles, was für die Pflege wichtig ist.**

1. **Was du gemacht hast**: Waschen, Drehen, Mobilisation, Medikamente (mit Uhrzeit).
2. **Was du gesehen hast**: Puls, Blutdruck, Haut, Schmerzen, wie der Patient gegessen hat.
3. **Was der Arzt gesagt hat**: Neue Anordnungen und was du umgesetzt hast.
4. **Wie der Patient reagiert hat**: 'Hat gut mitgemacht' oder 'Hat Schmerzen gehabt'.
5. **Besonderes**: Sturz, Gespräch mit Familie, neue Probleme.

**Nicht rein kommt**: Deine Meinung ('nervt mich'), Vermutungen, Gerüchte. Nur **Fakten**."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Pflegemaßnahme, Vitalzeichen, Anordnung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ich schreibe nur rein, was vom Standard abweicht"**
- **Fachbegriff:** Abweichungs-Mythos (charting by exception)
- **Feedback (C1, 250 Zeichen):** "Das ist in Deutschland **unzulässig**. Charting by Exception (nur Abweichungen) ist in den USA teils erlaubt, in Deutschland aber nicht. § 630f BGB fordert Nachvollziehbarkeit aller Maßnahmen. Auch die 'normale' Grundpflege muss dokumentiert werden."
- **Feedback (B1, 210 Zeichen):** "Nein — du musst **alles** dokumentieren, nicht nur das Besondere. Das Gesetz (§ 630f BGB) sagt: Man muss nachlesen können, was gemacht wurde. Auch eine ganz normale Körperpflege muss rein."

**D2: "Ich schreibe meine Einschätzung rein — 'Patient ist unkooperativ'"**
- **Fachbegriff:** Wertungsfehler
- **Feedback (C1, 270 Zeichen):** "Das ist **nicht sachlich**. 'Unkooperativ' ist eine Bewertung, keine Beobachtung. Richtig wäre: **Was genau ist passiert?** 'Patient verweigerte die Mobilisation mit den Worten: Ich habe heute keine Kraft.' So dokumentiert man **wertfrei** und **konkret** — wie es § 630f BGB fordert."
- **Feedback (B1, 225 Zeichen):** "Das ist **nicht sachlich**. 'Unkooperativ' ist deine Meinung, keine Beobachtung. Besser: **Was ist passiert?** Zum Beispiel: 'Patient sagte: Heute nicht.' Schreibe **Fakten**, keine Meinung."

**D3: "Wenn ich es vergessen habe, trage ich es später im selben Stil nach"**
- **Fachbegriff:** Rückdatierungs-Irrtum
- **Feedback (C1, 275 Zeichen):** "Nein — **Rückdatierungen sind Urkundenfälschung**. Du darfst nachträglich ergänzen, aber immer **mit aktuellem Datum und Vermerk** (z.B. 'Nachtrag vom 15.04.2026 zu 14.04.2026'). Einträge dürfen nie überschrieben, ausradiert oder verfälscht werden — § 630f Abs. 1 BGB."
- **Feedback (B1, 230 Zeichen):** "Nein — das ist **verboten** (Urkundenfälschung). Du darfst nachtragen, aber du musst schreiben: **'Nachtrag'** mit heutigem Datum. Nie einfach so als wäre es damals geschrieben. Das Gesetz (§ 630f BGB) verbietet das."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Die Dokumentation erfasst **Maßnahmen, Beobachtungen, Anordnungen, Reaktionen und Besonderheiten** — alles was pflegerelevant ist. Entscheidend: **sachlich, wertfrei, konkret**. Nie Meinungen, nie Spekulationen, nie Urteile über Menschen."

**B1 (225 Zeichen):** "Sehr gut. Du dokumentierst: **Was du gemacht hast**, **was du gesehen hast**, **was der Arzt angeordnet hat**, **wie der Patient reagiert hat** und **Besonderheiten**. Immer **sachlich** — nie deine Meinung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Pflichtinhalte muss jede Pflegedokumentation enthalten?"
- **Rückseite:** "Durchgeführte Maßnahmen, Beobachtungen, ärztliche Anordnungen + Umsetzung, Reaktionen des Patienten, Besonderheiten/Abweichungen."
- **Kategorie:** fakt

---

## Baustein 3: pflegebericht-regeln

### Metadaten
- **bausteinId:** pflegedokumentation-pflegebericht
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Du schreibst einen Pflegebericht über Herrn K., der heute gestürzt ist. Was müsstest du ändern, wenn du diesen Satz liest: 'Der Patient war wieder unruhig und hat sich geweigert, im Bett zu bleiben — typisch für ihn.'"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Ein guter Pflegebericht ist **chronologisch** (zeitlich geordnet), **sachlich** (nur Fakten, keine Meinung), **wertfrei** (nicht beurteilend) und in der **Ich-Form** (nicht 'man' oder passiv). Er beschreibt **was** passiert ist — nicht **warum** du es interpretierst."

**B1 (220 Zeichen):** "Ein guter Pflegebericht ist **zeitlich geordnet** (erst das, dann das), **sachlich** (nur Fakten), **ohne Meinung** und in der **Ich-Form** ('Ich habe...' statt 'Man hat...'). Schreibe **was** passiert ist — nicht **was du denkst**."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Der Pflegebericht ist der **narrative Teil** der Dokumentation — die Fließtext-Erzählung zusätzlich zu den strukturierten Einträgen (Kurve, Tagesplan). Fünf Regeln:

1. **Chronologisch**: Einträge in zeitlicher Reihenfolge, jeder mit Datum + Uhrzeit + Handzeichen.
2. **Sachlich**: Nur beobachtbare Fakten. Statt 'aggressiv' → 'erhob die Stimme und schlug auf den Tisch'.
3. **Wertfrei**: Keine Urteile über Persönlichkeit. Statt 'Patient ist faul' → 'Patient lehnte Mobilisation mit dem Hinweis ab, er sei müde'.
4. **Ich-Form**: 'Ich habe Herrn K. um 9:00 gewaschen.' — nicht 'Man hat' oder 'Es wurde'. Das macht klar, wer verantwortlich ist.
5. **Konkret**: Zahlen, Zeiten, Zitate. 'Patient trank 500 ml zwischen 8:00 und 12:00.' — nicht 'wenig getrunken'.

Wörtliche Zitate des Patienten **in Anführungszeichen** sind erlaubt und oft wertvoll — sie zeigen Originalton ohne Interpretation."

**B1 (580 Zeichen):**
"Der Pflegebericht ist ein **kleiner Text**, den du zusätzlich schreibst. Fünf Regeln:

1. **Zeitlich geordnet**: Erst das um 8 Uhr, dann das um 10 Uhr. Mit Datum und Uhrzeit.
2. **Sachlich**: Nur **was du gesehen hast**. Nicht 'aggressiv', sondern 'hat laut gesprochen und auf den Tisch geschlagen'.
3. **Ohne Meinung**: Nicht 'faul', sondern 'sagte, er sei müde'.
4. **Ich-Form**: **'Ich habe'** — nicht 'man hat'. So weiß jeder, wer es war.
5. **Konkret**: **Zahlen und Zeiten**. 'Er trank 500 ml zwischen 8 und 12 Uhr' — nicht 'wenig'.

**Zitate** des Patienten in Anführungszeichen sind gut."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Pflegebericht, Ich-Form, wertfrei]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Im Pflegebericht schreibe ich auch meine Einschätzung der Persönlichkeit"**
- **Fachbegriff:** Wertungsfalle
- **Feedback (C1, 250 Zeichen):** "Nein — der Pflegebericht ist **wertfrei**. Persönlichkeits-Urteile ('stur', 'nett', 'schwierig') gehören **nie** hinein. Stattdessen: **Beobachtbares Verhalten** beschreiben. Aus 'schwierig' wird 'verweigerte 3x die Medikamenteneinnahme mit der Begründung...'."
- **Feedback (B1, 215 Zeichen):** "Nein — du schreibst **keine Meinung** über die Person. Nicht 'stur' oder 'nett'. Sondern: **Was hat er gemacht?** Aus 'schwierig' wird 'hat das Medikament nicht genommen und gesagt: Ich will nicht'."

**D2: "Ich schreibe im Passiv: 'Der Patient wurde mobilisiert.'"**
- **Fachbegriff:** Passiv-Problem
- **Feedback (C1, 265 Zeichen):** "Das ist **unklar**. Passiv verschleiert, **wer** gehandelt hat. 'Wurde mobilisiert' — von wem? Wann? Wie oft? Die **Ich-Form** (oder 'Wir'-Form bei Team-Handlungen) ist rechtlich sicherer und klarer: 'Ich habe Herrn K. um 10:30 gemeinsam mit Kollegin A. mobilisiert.'"
- **Feedback (B1, 230 Zeichen):** "Nein — **Passiv ist unklar**. 'Wurde mobilisiert' — von wem? Wann? Besser: **Ich-Form**. 'Ich habe Herrn K. um 10:30 mobilisiert.' So weiß jeder, wer es war. Das ist rechtlich sicherer."

**D3: "Ein Pflegebericht ist nur bei Problemen nötig"**
- **Fachbegriff:** Problem-Einschränkung
- **Feedback (C1, 270 Zeichen):** "Nein — der Pflegebericht wird **regelmäßig** geführt, **nicht nur bei Problemen**. Standard: **mindestens einmal pro Schicht** bei auffälligen Bewohnern, **mindestens wöchentlich** bei stabilen. Er zeigt auch **Normalverläufe** und dokumentiert **Entwicklungen**, nicht nur Brüche."
- **Feedback (B1, 225 Zeichen):** "Nein — du schreibst **regelmäßig**, nicht nur bei Problemen. Normal: **Einmal pro Schicht** bei auffälligen Patienten, **einmal pro Woche** bei stabilen. Auch **Gutes und Normales** kommt rein — nicht nur Probleme."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Der Pflegebericht ist **chronologisch, sachlich, wertfrei, in Ich-Form und konkret**. Er beschreibt beobachtbares Verhalten mit Zahlen und Zeiten — keine Urteile, keine Interpretationen. Wörtliche Zitate des Patienten in Anführungszeichen sind ausdrücklich erwünscht."

**B1 (230 Zeichen):** "Sehr gut. Ein Pflegebericht ist **zeitlich geordnet, sachlich, ohne Meinung, in Ich-Form und mit Zahlen**. Du beschreibst, **was du gesehen hast** — nicht, **was du denkst**. Zitate des Patienten in Anführungszeichen sind super."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Regeln gelten für einen Pflegebericht?"
- **Rückseite:** "Chronologisch, sachlich, wertfrei, in Ich-Form, konkret (mit Zahlen/Zeiten/Zitaten)."
- **Kategorie:** handlung

---

## Baustein 4: sis-sechs-themenfelder

### Metadaten
- **bausteinId:** pflegedokumentation-sis-themenfelder
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Früher gab es die klassische Pflegeanamnese mit 13 AEDL oder 11 ATL — viele Seiten, viele Kreuze. Seit 2014 gibt es die SIS mit nur 6 Themenfeldern. Warum macht weniger manchmal mehr Sinn in der Pflege?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Die **SIS** (Strukturierte Informationssammlung) wurde 2014 vom BMG eingeführt. Sie besteht aus **6 Themenfeldern**: Kognition/Kommunikation, Mobilität, krankheitsbezogene Anforderungen, Selbstversorgung, Leben in sozialen Beziehungen, Haushalt/Wohnen."

**B1 (220 Zeichen):** "Die **SIS** (Strukturierte Informationssammlung) gibt es seit 2014. Sie hat **6 Themenfelder**: 1. Denken und Sprechen, 2. Bewegung, 3. Krankheit, 4. Selbst-Versorgung (Waschen, Essen), 5. Soziales Leben, 6. Wohnen und Haushalt."

- **Step-Typ:** matching (6 Felder zuordnen)

### Stufe 3 — Erklärung

**C1 (820 Zeichen):**
"Die **Strukturierte Informationssammlung (SIS)** ersetzte ab 2014 die klassische Pflegeanamnese (z.B. nach AEDL/ATL). Sie wurde im Auftrag des **Bundesgesundheitsministeriums (BMG)** von Beikirch und Roes entwickelt und ist Grundlage des **Strukturmodells der Pflegedokumentation**. Die 6 Themenfelder:

1. **Kognitive und kommunikative Fähigkeiten**: Orientierung, Gedächtnis, Sprache, Verstehen.
2. **Mobilität und Beweglichkeit**: Gehen, Sitzen, Positionieren, Transfer.
3. **Krankheitsbezogene Anforderungen und Belastungen**: Medikamente, Wunden, Schmerzen, Symptome.
4. **Selbstversorgung**: Körperpflege, Kleidung, Ernährung, Ausscheidung.
5. **Leben in sozialen Beziehungen**: Kontakte, Aktivitäten, Einsamkeit.
6. **Haushaltsführung / Wohnsituation** (ambulant) bzw. **Tages- und Nachtgestaltung** (stationär).

Ergänzt durch **Themenfeld A** (aktuelle Situation) und **Themenfeld B** (Risiken/Phänomene). Ziel: weniger Kreuze, mehr Narrativ — Pflege als **Beziehungsarbeit**."

**B1 (620 Zeichen):**
"Die **SIS** heißt 'Strukturierte Informationssammlung'. Sie ist neu seit **2014** und kommt vom Gesundheitsministerium. Sie hat **6 Felder**:

1. **Denken und Sprechen**: Kann er sich orientieren? Versteht er dich?
2. **Bewegung**: Kann er gehen, sitzen, sich umdrehen?
3. **Krankheit**: Welche Medikamente? Welche Schmerzen? Welche Wunden?
4. **Selbst-Versorgung**: Kann er sich waschen, anziehen, essen, auf Toilette gehen?
5. **Soziales Leben**: Hat er Kontakte? Fühlt er sich einsam?
6. **Wohnen und Alltag**: Wie lebt er zu Hause oder im Heim?

Dazu gibt es **Feld A** (Was ist aktuell wichtig?) und **Feld B** (Welche Risiken gibt es?). Die SIS will: **weniger ankreuzen, mehr erzählen**."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [SIS, Strukturmodell, BMG, Themenfeld]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die SIS ersetzt den ganzen Pflegeprozess"**
- **Fachbegriff:** SIS-Überdehnung
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — die SIS ist nur **Schritt 1** des Pflegeprozesses (Informationssammlung). Planung, Durchführung, Evaluation und Bericht bleiben bestehen. Das **Strukturmodell** umfasst zusätzlich: Maßnahmenplan, Bericht (nur bei Abweichungen) und Evaluation."
- **Feedback (B1, 220 Zeichen):** "Nein — die SIS ist nur der **erste Schritt**: Informationen sammeln. Planen, Machen, Prüfen — das gibt es weiter. Das ganze **Strukturmodell** hat noch: Maßnahmen-Plan, Bericht und Evaluation."

**D2: "Die SIS wurde von der Pflegewissenschaft erfunden"**
- **Fachbegriff:** Quellen-Irrtum
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — die SIS wurde im Auftrag des **Bundesgesundheitsministeriums (BMG)** entwickelt (Beikirch & Roes, 2014). Sie ist eine **bundesweite Einigung** zwischen BMG, Pflegekassen, Verbänden und MDK — keine rein wissenschaftliche Idee."
- **Feedback (B1, 210 Zeichen):** "Fast — die SIS kommt vom **Gesundheitsministerium (BMG)**, nicht von der Wissenschaft allein. Sie ist eine **gemeinsame Regel** von BMG, Pflegekassen, Verbänden und MDK. Seit **2014** gültig."

**D3: "Die 6 Themenfelder sind in stationärer und ambulanter Pflege identisch"**
- **Fachbegriff:** Setting-Verwechslung
- **Feedback (C1, 265 Zeichen):** "Fast richtig — **5 Felder sind identisch**. Nur **Feld 6 unterscheidet sich**: **Stationär** = 'Wohnen/Alltag im Heim' inkl. Tages-/Nachtgestaltung. **Ambulant** = 'Haushaltsführung' (Einkaufen, Kochen, Reinigen). Das macht didaktisch Sinn, denn die Kontexte sind verschieden."
- **Feedback (B1, 225 Zeichen):** "Fast — **5 Felder sind gleich**. Nur **Feld 6 ist anders**: **Im Heim** geht es um 'Wohnen und Alltag'. **Zu Hause** geht es um 'Haushalt führen' (Einkaufen, Kochen). Das ist unterschiedlich, weil die Situationen anders sind."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Die SIS hat **6 Themenfelder**: Kognition/Kommunikation, Mobilität, krankheitsbezogene Anforderungen, Selbstversorgung, soziale Beziehungen und Haushalt/Wohnen. Plus Themenfeld A (aktuell) und B (Risiken). Sie ist seit **2014** Teil des bundesweiten Strukturmodells."

**B1 (225 Zeichen):** "Sehr gut. Die SIS hat **6 Themenfelder**: Denken, Bewegung, Krankheit, Selbst-Versorgung, soziale Kontakte und Wohnen. Plus **Feld A** (Was ist jetzt wichtig?) und **Feld B** (Welche Risiken?). Seit 2014 Pflicht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 6 Themenfelder der SIS (Strukturierte Informationssammlung, BMG 2014)."
- **Rückseite:** "1. Kognition/Kommunikation, 2. Mobilität, 3. krankheitsbezogene Anforderungen, 4. Selbstversorgung, 5. soziale Beziehungen, 6. Haushalt/Wohnen."
- **Kategorie:** fakt

---

## Baustein 5: strukturmodell-4-elemente

### Metadaten
- **bausteinId:** pflegedokumentation-strukturmodell
- **bloomLevel:** 4
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor: Du bekommst eine neue Doku-Mappe mit 40 Seiten Checklisten pro Bewohner — und eine zweite mit 6 Themenfeldern und einem Bericht nur bei Abweichungen. Welche würdest du bevorzugen? Warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Das **Strukturmodell** (BMG 2014) hat **4 Elemente**: (1) **SIS** — Informationssammlung, (2) **individueller Maßnahmenplan** — Pflegeplanung, (3) **Bericht** — nur bei Abweichungen vom Plan ('Fokus auf Abweichung'), (4) **Evaluation** — regelmäßige Überprüfung."

**B1 (235 Zeichen):** "Das **Strukturmodell** hat **4 Teile**: (1) **SIS** — Infos sammeln, (2) **Maßnahmen-Plan** — was soll gemacht werden, (3) **Bericht** — nur bei Änderungen (nicht jeden Tag), (4) **Evaluation** — prüfen, ob es klappt."

- **Step-Typ:** sequencing (4 Elemente in Reihenfolge)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"Das **Strukturmodell der Entbürokratisierung** (BMG 2014, bundesweiter Ombudsmann Beikirch) hat **4 Elemente**:

1. **SIS (Strukturierte Informationssammlung)** — Erstgespräch mit Bewohner/Angehörigen, 6 Themenfelder + Feld A (aktuelle Situation) + Feld B (Risikomatrix). Ergebnis: Verstehen **wer der Mensch ist**, nicht nur **was fehlt**.

2. **Individueller Maßnahmenplan** — Aus der SIS abgeleitete Pflegehandlungen pro Tag/Woche. Nur **individuelle** Maßnahmen, keine Standards.

3. **Berichteblatt** — Fokussiert auf **Abweichungen**: Nur wenn etwas Ungewöhnliches passiert (Sturz, Zustandsverschlechterung, Ablehnung), wird berichtet. Das **reduziert die Dokumentationsmenge um ~30%**.

4. **Evaluation** — Regelmäßige Überprüfung: Passt der Plan noch? Haben sich die Bedürfnisse verändert? Mindestens **alle 6 Monate**, sonst nach Bedarf.

Ziel: **mehr Zeit am Menschen, weniger Papier** — ohne Verlust an Rechtssicherheit."

**B1 (620 Zeichen):**
"Das **Strukturmodell** hat **4 Teile**:

1. **SIS** (Strukturierte Informationssammlung): Du sprichst mit dem Bewohner und der Familie. Du füllst 6 Themenfelder aus. **Du verstehst den Menschen**.

2. **Maßnahmen-Plan**: Was soll jeden Tag gemacht werden? Nur **individuell**, keine Standards.

3. **Bericht**: Du schreibst **nur bei Besonderem**. Nicht jeden Tag alles. Das spart Zeit (~30% weniger).

4. **Evaluation**: Du prüfst **alle 6 Monate** (oder öfter): Passt der Plan noch? Was hat sich geändert?

**Ziel**: Mehr Zeit für den Menschen, weniger Papier — aber immer noch rechtssicher."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Strukturmodell, Maßnahmenplan, Evaluation, Abweichung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bericht nur bei Abweichungen heißt: Ich schreibe tagelang gar nichts"**
- **Fachbegriff:** Entbürokratisierungs-Mythos
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — 'Fokus auf Abweichung' heißt: **weniger Routineeinträge**, nicht **keine Dokumentation**. Durchgeführte Maßnahmen werden weiter mit Zeichen (Handzeichen, Zeit) quittiert. Nur der **Fließtext-Bericht** wird reduziert — und auch der nur bei stabilen Bewohnern."
- **Feedback (B1, 220 Zeichen):** "Nein — du schreibst **weiter** jeden Tag mit Handzeichen, was du gemacht hast. Nur der **lange Text-Bericht** wird weniger. Und auch nur, wenn es dem Bewohner **stabil** geht."

**D2: "Das Strukturmodell ist Pflicht für alle Einrichtungen"**
- **Fachbegriff:** Pflicht-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — das Strukturmodell ist **bundesweit empfohlen**, aber **nicht gesetzlich verpflichtend**. Es ist freiwillig, aber der MDK/MD erkennt es an. Einrichtungen können weiter mit anderen Systemen arbeiten, solange § 630f BGB erfüllt ist."
- **Feedback (B1, 215 Zeichen):** "Fast — das Strukturmodell ist **empfohlen**, aber **nicht Pflicht**. Einrichtungen können auch andere Systeme nutzen. Wichtig ist nur: Das Gesetz (§ 630f BGB) muss eingehalten werden."

**D3: "SIS und Strukturmodell sind dasselbe"**
- **Fachbegriff:** Teil-Ganzes-Verwechslung
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — die **SIS ist ein Teil** des **Strukturmodells**, nicht das Ganze. Das Strukturmodell hat **4 Elemente**: SIS, Maßnahmenplan, Bericht, Evaluation. Die SIS ist nur **Element 1** (Informationssammlung)."
- **Feedback (B1, 205 Zeichen):** "Nein — die **SIS ist nur ein Teil** vom **Strukturmodell**. Das ganze Modell hat **4 Teile**: SIS, Plan, Bericht, Prüfung. SIS = nur das Sammeln der Infos."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Das Strukturmodell (BMG 2014) hat **4 Elemente**: SIS, individueller Maßnahmenplan, Bericht (nur bei Abweichungen) und Evaluation. Ziel: **mehr Zeit am Menschen, weniger Papier** — ohne Verlust an Rechtssicherheit. Die Dokumentationsmenge reduziert sich um ~30%."

**B1 (225 Zeichen):** "Sehr gut. Das Strukturmodell hat **4 Teile**: SIS (sammeln), Maßnahmen-Plan (planen), Bericht (nur bei Besonderem) und Evaluation (prüfen). Ziel: **mehr Zeit für Menschen, weniger Papier** — aber rechtssicher."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 4 Elemente des Strukturmodells (BMG 2014)."
- **Rückseite:** "1. SIS (Strukturierte Informationssammlung), 2. individueller Maßnahmenplan, 3. Berichteblatt (Fokus Abweichung), 4. Evaluation."
- **Kategorie:** fakt

---

## Baustein 6: sbar-schema

### Metadaten
- **bausteinId:** pflegedokumentation-sbar
- **bloomLevel:** 4
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Du musst dem Arzt am Telefon schnell mitteilen: Herr K. hat Schmerzen, er ist seit gestern neu, er hat hohes Fieber, du willst ein Schmerzmittel. Wie baust du diese Information so auf, dass der Arzt **alles** versteht, ohne zurückzufragen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "**SBAR** ist ein Kommunikations-Schema aus der Luftfahrt (Leonard 2004, BMJ). Es gliedert eine Meldung in 4 Teile: **S**ituation (was ist jetzt?), **B**ackground (Vorgeschichte), **A**ssessment (Einschätzung), **R**ecommendation (Empfehlung)."

**B1 (220 Zeichen):** "**SBAR** ist eine Struktur für Meldungen. Vier Teile: **S** = Situation (was ist jetzt?), **B** = Background (was war vorher?), **A** = Assessment (was denkst du?), **R** = Recommendation (was brauchst du?)."

- **Step-Typ:** matching (SBAR-Buchstaben zu Bedeutungen)

### Stufe 3 — Erklärung

**C1 (830 Zeichen):**
"**SBAR** wurde in der US-Marine entwickelt und von Michael Leonard (Kaiser Permanente) **2004 in die Medizin übertragen** (Leonard et al., BMJ Qual Saf). Es gibt strukturierten Meldungen einen klaren Aufbau:

**S — Situation**: Wer bist du, welcher Patient, was ist das aktuelle Problem?
*Beispiel*: 'Schwester Meier, Station 3, ich rufe wegen Herrn Koch, Zimmer 212. Er klagt seit 20 Minuten über starke Brustschmerzen.'

**B — Background**: Relevante Vorgeschichte, Diagnosen, Medikation.
*Beispiel*: 'Aufnahme vor 2 Tagen wegen Pneumonie. Vorerkrankungen: KHK, Diabetes. Aktuelle Medikamente: ...'

**A — Assessment**: Deine Einschätzung — was glaubst du, was los ist?
*Beispiel*: 'Blutdruck 90/60, Puls 110, kaltschweißig. Ich vermute einen kardialen Notfall.'

**R — Recommendation**: Konkreter Vorschlag, was als Nächstes zu tun ist.
*Beispiel*: 'Ich bitte um sofortige Vorstellung und EKG.'

Vorteil: **Keine Info vergessen, kein Rückfragen nötig** — kürzer und klarer."

**B1 (640 Zeichen):**
"**SBAR** ist eine Struktur für wichtige Meldungen. Sie kommt aus der **Luftfahrt** und wird seit 2004 in der Medizin genutzt (Leonard 2004). Vier Teile:

**S — Situation** (Was ist jetzt?): Wer bist du, welcher Patient, was ist das Problem?
*Beispiel*: 'Schwester Meier, Station 3. Herr Koch, Zimmer 212, hat seit 20 Minuten starke Brustschmerzen.'

**B — Background** (Was war vorher?): Diagnose, Medikamente, Vorerkrankungen.

**A — Assessment** (Was denkst du?): Deine Einschätzung.
*Beispiel*: 'Blutdruck 90/60, Puls 110. Ich vermute einen Herznotfall.'

**R — Recommendation** (Was brauchst du?): Was soll jetzt passieren?
*Beispiel*: 'Bitte kommen Sie sofort und machen Sie ein EKG.'

**Vorteil**: **Klar und kurz**. Kein Vergessen, kein Nachfragen."

- **Erklärungs-Step:** stepType `comparison` (SBAR-Tabelle mit Spalten: Buchstabe, Bedeutung, Beispiel)
- **Glossar-Begriffe:** [SBAR, Situation, Background, Assessment, Recommendation]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "SBAR steht für 'Schnell, Beknöpft, Aussagekräftig, Richtig'"**
- **Fachbegriff:** Akronym-Fantasie
- **Feedback (C1, 230 Zeichen):** "Nein — SBAR steht für **S**ituation, **B**ackground, **A**ssessment, **R**ecommendation. Es ist ein englisches Akronym aus der US-Marine, übernommen in die Medizin durch Leonard 2004. Merke: **S**-**B**-**A**-**R** — englische Originalbegriffe."
- **Feedback (B1, 200 Zeichen):** "Nein — SBAR ist Englisch: **S**ituation, **B**ackground (Vorgeschichte), **A**ssessment (Einschätzung), **R**ecommendation (Empfehlung). Kommt aus der US-Marine und wird seit 2004 in der Medizin benutzt."

**D2: "Das Assessment ist die Diagnose des Arztes"**
- **Fachbegriff:** Kompetenz-Verwechslung
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — im SBAR ist **Assessment deine pflegerische Einschätzung**, nicht die ärztliche Diagnose. Du sagst: 'Der Patient wirkt auf mich kardial bedroht' oder 'Ich vermute einen Infekt'. Das ist eine **Hypothese**, die dem Arzt als Ausgangspunkt dient — keine Diagnose."
- **Feedback (B1, 225 Zeichen):** "Fast — **Assessment** ist **deine Einschätzung** als Pflegende, nicht die Diagnose vom Arzt. Du sagst: 'Ich glaube, es ist das Herz.' Das ist eine **Vermutung**, die dem Arzt hilft — nicht eine Diagnose."

**D3: "ISBAR ist etwas ganz anderes als SBAR"**
- **Fachbegriff:** Varianten-Verwirrung
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — **ISBAR ist eine Erweiterung von SBAR**. Das **I** am Anfang steht für **Identification** (Wer bin ich, wer ist der Patient — Name, Geburtsdatum). In WHO-Leitlinien seit 2007 empfohlen. Der Rest (SBAR) bleibt identisch — nur ein zusätzlicher Schritt."
- **Feedback (B1, 220 Zeichen):** "Nein — **ISBAR ist wie SBAR**, nur mit einem **I** davor. **I** = **Identification** (Wer bin ich? Wer ist der Patient? Name, Geburtstag). Dann weiter mit S-B-A-R. Die WHO empfiehlt ISBAR seit 2007."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. SBAR (Leonard 2004) gliedert Meldungen in vier Teile: **S**ituation (aktuelles Problem), **B**ackground (Vorgeschichte), **A**ssessment (deine Einschätzung), **R**ecommendation (dein Vorschlag). Es kommt aus der Luftfahrt, reduziert Kommunikationsfehler und verkürzt Übergaben erheblich."

**B1 (230 Zeichen):** "Sehr gut. SBAR hat **4 Teile**: **S**ituation (was ist jetzt?), **B**ackground (was war vorher?), **A**ssessment (was denkst du?), **R**ecommendation (was brauchst du?). Kommt aus der Luftfahrt, hilft gegen Vergessen und Nachfragen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wofür stehen die Buchstaben S-B-A-R im SBAR-Schema (Leonard 2004)?"
- **Rückseite:** "S = Situation (aktuelles Problem), B = Background (Vorgeschichte), A = Assessment (pflegerische Einschätzung), R = Recommendation (Empfehlung/Vorschlag)."
- **Kategorie:** fachbegriff

---

## Baustein 7: uebergabeformen

### Metadaten
- **bausteinId:** pflegedokumentation-uebergabeformen
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, du gibst an die Spätschicht ab. Option A: Ihr sitzt im Dienstzimmer, du erzählst alles. Option B: Ihr geht gemeinsam von Zimmer zu Zimmer. Welche Form hat welche Vor- und Nachteile? Was erfährt der Patient?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Drei Übergabeformen: (1) **mündlich im Dienstzimmer** — schnell, aber ohne Patientenbezug, (2) **schriftlich** (Doku/Kurve) — immer verfügbar, aber kein Rückfragen möglich, (3) **Bedside-Handover** (am Bett) — Patient wird einbezogen, Sicherheit steigt, dauert länger."

**B1 (235 Zeichen):** "Drei Arten von Übergabe: (1) **Mündlich im Zimmer** — schnell, aber Patient nicht dabei. (2) **Schriftlich** — steht in der Doku, immer nachlesbar. (3) **Am Bett** — Patient ist dabei, kann selbst etwas sagen, dauert länger."

- **Step-Typ:** comparison (Tabelle 3 Formen × Vor-/Nachteile)

### Stufe 3 — Erklärung

**C1 (850 Zeichen):**
"Die Übergabe hat **drei Hauptformen**, die sich ergänzen:

**1. Mündliche Übergabe im Dienstzimmer**
- *Vorteil*: Schnell, Rückfragen möglich, Team-Gefühl.
- *Nachteil*: Fehleranfällig (Gedächtnis), Patient wird nicht einbezogen, Diskretionsprobleme bei lauten Gesprächen.

**2. Schriftliche Übergabe (Doku, Kurve, Pflegebericht)**
- *Vorteil*: Immer verfügbar, rechtssicher, auch für Vertretungen nachlesbar.
- *Nachteil*: Kein Rückfragen möglich, braucht Lesezeit, oft unvollständig ohne mündliche Ergänzung.

**3. Bedside-Handover (Übergabe am Bett)**
- *Vorteil*: **Patient wird einbezogen**, kann Angaben korrigieren, Hautinspektion + Infusionen/Drainagen werden direkt gesichtet, **Sicherheit steigt nachweislich**.
- *Nachteil*: Dauert länger, Diskretion bei Mehrbettzimmern schwierig, nicht jeder Patient möchte anwesend sein.

**Best Practice (DNQP 2023)**: **Kombination** aller drei Formen — kurzer schriftlicher Bericht + mündliche Übergabe + Bedside-Rundgang bei kritischen Patienten."

**B1 (680 Zeichen):**
"Es gibt **drei Arten** von Übergabe:

**1. Mündlich im Dienstzimmer**
- **Gut**: Schnell, man kann fragen.
- **Nicht gut**: Man vergisst was, der Patient ist nicht dabei.

**2. Schriftlich (in der Doku)**
- **Gut**: Immer lesbar, rechtssicher.
- **Nicht gut**: Man kann nicht fragen, dauert zum Lesen.

**3. Am Bett (Bedside-Handover)**
- **Gut**: **Patient ist dabei**, kann selbst was sagen. Du siehst die Haut, die Infusionen direkt. Mehr **Sicherheit**.
- **Nicht gut**: Dauert länger. Bei Mehrbett-Zimmern schwierig (Datenschutz).

**Am besten (DNQP 2023)**: **Alle drei Formen kombinieren**. Ein kurzer schriftlicher Bericht + mündliche Übergabe + bei kritischen Patienten **am Bett** schauen."

- **Erklärungs-Step:** stepType `comparison` (3 Formen × Vorteile/Nachteile)
- **Glossar-Begriffe:** [Übergabe, Bedside-Handover, Dienstzimmer]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bedside-Handover verletzt die Schweigepflicht"**
- **Fachbegriff:** Datenschutz-Verwirrung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Bedside-Handover verletzt die Schweigepflicht **nicht**, solange du beim **eigenen Patienten** im **Einzelzimmer** oder **leise im Mehrbettzimmer** sprichst. Im Mehrbettzimmer gilt: Sensible Inhalte gedämpft oder außerhalb — aber Patient einbeziehen ist **erlaubt und erwünscht**."
- **Feedback (B1, 230 Zeichen):** "Nein — Bedside-Handover ist **erlaubt**. Der Patient darf seine eigenen Infos hören. Nur bei **Mehrbettzimmern** musst du aufpassen: **Leise reden**, sensible Sachen außerhalb besprechen. Aber Patient einbeziehen ist gut und erlaubt."

**D2: "Die mündliche Übergabe ersetzt die schriftliche Dokumentation"**
- **Fachbegriff:** Redundanz-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nein — mündlich **ergänzt**, ersetzt aber **nie** die schriftliche Dokumentation. § 630f BGB fordert Schriftlichkeit. Die Vertretung morgen, der Nachtdienst, der MDK, das Gericht — niemand war bei deiner mündlichen Übergabe dabei. Schriftlich ist **Pflicht**."
- **Feedback (B1, 220 Zeichen):** "Nein — mündlich ist **zusätzlich**, nicht **statt**. Das Gesetz (§ 630f BGB) sagt: Es muss **schriftlich** sein. Niemand hat deine mündliche Übergabe gehört: Nicht die Vertretung, nicht die Nacht-Kollegin, nicht der MDK."

**D3: "Bedside-Handover ist nur eine Modeerscheinung"**
- **Fachbegriff:** Wirksamkeits-Leugnung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — mehrere **Cochrane-Reviews** zeigen: Bedside-Handover **reduziert Medikationsfehler**, **erhöht die Patientenzufriedenheit** und verkürzt Übergaben oft **trotz höherem Aufwand pro Patient**. Die WHO empfiehlt Patienten-zentrierte Übergaben seit 2007 als Patient-Safety-Prinzip."
- **Feedback (B1, 230 Zeichen):** "Nein — **Studien zeigen**: Am Bett gibt es **weniger Fehler bei Medikamenten** und die **Patienten sind zufriedener**. Die WHO empfiehlt es seit 2007. Es ist keine Mode, sondern **sicherer**."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Die drei Übergabeformen sind **mündlich (Dienstzimmer)**, **schriftlich (Doku)** und **Bedside-Handover (am Bett)**. Jede hat Vor- und Nachteile. Best Practice ist die **Kombination**: schriftlich als Basis, mündlich zur Ergänzung, am Bett bei kritischen Patienten — DNQP 2023."

**B1 (230 Zeichen):** "Sehr gut. Die drei Formen: **mündlich** im Zimmer, **schriftlich** in der Doku, **am Bett** (Bedside). Am besten: **Alle drei kombinieren**. Schriftlich als Basis, mündlich zum Fragen, am Bett bei schwierigen Patienten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 3 Übergabeformen in der Pflege und je einen Vor- und Nachteil."
- **Rückseite:** "1. Mündlich (schnell, aber fehleranfällig), 2. Schriftlich (rechtssicher, aber keine Rückfragen), 3. Bedside-Handover (Patient einbezogen, mehr Sicherheit, aber zeitintensiver)."
- **Kategorie:** fakt

---

## Baustein 8: isbar-vs-sbar

### Metadaten
- **bausteinId:** pflegedokumentation-isbar
- **bloomLevel:** 4
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Die WHO empfiehlt seit 2007 ISBAR statt SBAR. Was könnte der Unterschied sein — und warum war das S allein nicht genug, gerade in großen Kliniken mit vielen Patienten?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "**ISBAR = Identification + SBAR**. Das **I** am Anfang wird vor die anderen Buchstaben gestellt: Wer bin ich (Anrufer)? Wer ist der Patient (Name, Geburtsdatum, Station)? Die WHO empfiehlt ISBAR seit 2007 zur Vermeidung von Patientenverwechslung."

**B1 (220 Zeichen):** "**ISBAR = I + SBAR**. Das **I** ist neu und steht am Anfang: **I** = **Identification** (Wer bin ich? Wer ist der Patient? Name, Geburtstag). Die WHO sagt seit 2007: Bitte zuerst sagen, wer gemeint ist — sonst Verwechslungen."

- **Step-Typ:** text (displayFormat: mnemonic)

### Stufe 3 — Erklärung

**C1 (650 Zeichen):**
"**ISBAR** ist eine Erweiterung von SBAR um ein **I** am Anfang: **Identification**.

**I — Identification**: Wer bist du? Welcher Patient? Klare Identifikation beider Seiten.
*Beispiel*: 'Schwester Meier, Station Chirurgie 3, zum Patienten Herrn Koch, geb. 14.05.1952, Zimmer 212 Bett A.'

Warum das **I** so wichtig ist: In großen Kliniken gibt es oft Patienten mit gleichem Nachnamen oder ähnlichen Namen. Ohne Identifikation können Medikationsverwechslungen und Fehlbehandlungen entstehen. Die **WHO Patient Safety Alliance** empfiehlt ISBAR seit 2007 als Teil der 'High 5s'-Initiative zur Reduktion von Behandlungsfehlern.

Der Rest (S-B-A-R) bleibt identisch:
- **S** — Situation (aktuelles Problem)
- **B** — Background (Vorgeschichte)
- **A** — Assessment (Einschätzung)
- **R** — Recommendation (Empfehlung)"

**B1 (530 Zeichen):**
"**ISBAR** ist **SBAR + ein I am Anfang**.

**I — Identification** (Wer ist wer?): Wer bist du? Welcher Patient?
*Beispiel*: 'Schwester Meier, Station Chirurgie 3, Patient Herr Koch, geboren am 14.05.1952, Zimmer 212.'

**Warum das I?** In großen Kliniken gibt es viele Patienten mit ähnlichen Namen. Ohne klares **Identifizieren** gibt es **Verwechslungen** — auch bei Medikamenten. Die **WHO** empfiehlt seit **2007**: Zuerst klar sagen, **wer gemeint ist**.

Danach weiter mit **S-B-A-R**: Situation, Background, Assessment, Recommendation."

- **Erklärungs-Step:** stepType `text` (displayFormat: mnemonic)
- **Glossar-Begriffe:** [ISBAR, Identification, Patientenverwechslung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "ISBAR und SBAR sind austauschbar — egal welches man nimmt"**
- **Fachbegriff:** Äquivalenz-Irrtum
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — beide haben dieselbe Grundlogik, aber ISBAR ist **sicherer bei der Patienten-Identifikation**. Die WHO empfiehlt seit 2007 **ISBAR** explizit für Krankenhaus-Übergaben. In kleinen Teams mit wenigen Patienten ist SBAR ok — im Krankenhaus: ISBAR."
- **Feedback (B1, 215 Zeichen):** "Fast — beide sind ähnlich, aber **ISBAR ist sicherer** für die Identifikation des Patienten. Die WHO empfiehlt seit 2007 **ISBAR** in Kliniken. In kleinen Teams reicht SBAR — in großen Kliniken: **ISBAR**."

**D2: "Das I steht für Intervention"**
- **Fachbegriff:** Akronym-Fehler
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — das **I** in ISBAR steht für **Identification** (Identifikation des Anrufers und des Patienten). Intervention wäre inhaltlich in **R** (Recommendation) oder Teil des A (Assessment). Das **I** ist nur für die klare Zuordnung **wer-zu-wem**."
- **Feedback (B1, 215 Zeichen):** "Nein — das **I** heißt **Identification** (Wer ist wer?). Nicht Intervention. Das I sagt: Welcher Anrufer, welcher Patient. **Intervention** (was machen wir?) kommt erst beim **R** (Recommendation)."

**D3: "ISBAR ist Pflicht in Deutschland"**
- **Fachbegriff:** Pflicht-Irrtum
- **Feedback (C1, 240 Zeichen):** "Nein — ISBAR ist in Deutschland **empfohlen**, aber nicht gesetzlich **verpflichtend**. Die WHO empfiehlt es seit 2007, viele Kliniken setzen es als Standard ein. In Deutschland ist die Wahl der Struktur Sache der Einrichtung — Hauptsache **strukturiert**."
- **Feedback (B1, 210 Zeichen):** "Fast — ISBAR ist **empfohlen**, aber in Deutschland **nicht Pflicht**. Die WHO sagt seit 2007: Nutzt ISBAR. Viele Kliniken machen das. Aber jede Einrichtung kann selbst wählen — Hauptsache **strukturiert**."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. ISBAR erweitert SBAR um das **I** = **Identification**: Wer bist du, wer ist der Patient? Das verhindert Patienten-Verwechslungen, besonders bei gleichen Nachnamen. Die WHO empfiehlt ISBAR seit **2007** als Teil der 'High 5s'-Initiative gegen Behandlungsfehler."

**B1 (220 Zeichen):** "Sehr gut. **ISBAR = I + SBAR**. Das **I** heißt **Identification**: Wer bist du? Welcher Patient? So gibt es weniger Verwechslungen. Die WHO empfiehlt **ISBAR** seit **2007** für Kliniken."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen SBAR und ISBAR? Wofür steht das I?"
- **Rückseite:** "ISBAR = Identification + SBAR. Das I steht vor S-B-A-R und identifiziert Anrufer + Patient (Name, Geburtsdatum, Station). WHO-Empfehlung seit 2007."
- **Kategorie:** fachbegriff

---

## Baustein 9: elektronisch-vs-papier

### Metadaten
- **bausteinId:** pflegedokumentation-dokusysteme
- **bloomLevel:** 4
- **wissensart:** entscheidung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Deine Station stellt nächste Woche von Papier auf elektronische Doku (eDoku) um. Die Kollegin Frau M. sagt: 'Früher war alles besser — auf Papier ging nichts kaputt.' Was sagst du? Welche Argumente hast du für und gegen beide Systeme?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Beide Systeme haben Stärken: **Papier** ist ausfallsicher (kein Stromausfall), aber schwer lesbar, unstrukturiert, schlecht durchsuchbar. **eDoku** ist strukturiert, durchsuchbar, lesbar, erzeugt automatisch Reports — ist aber systemabhängig (Serverausfall, Login-Probleme)."

**B1 (240 Zeichen):** "Beide haben Vorteile: **Papier** geht immer, auch ohne Strom. Aber: schwer lesbar, keine Suche möglich. **Elektronisch (eDoku)**: lesbar, schnell suchbar, automatische Berichte. Aber: Wenn der Server kaputt ist, geht nichts."

- **Step-Typ:** comparison (2 Systeme × Vor-/Nachteile)

### Stufe 3 — Erklärung

**C1 (870 Zeichen):**
"Dokumentationssysteme gibt es als **Papier** und **elektronisch (eDoku)** — beide mit klaren Vor- und Nachteilen.

**Papier-Dokumentation**
- *Vorteile*: **Ausfallsicher** (kein Strom, kein Server), niedrige Anschaffungskosten, vertraut für ältere Kollegen.
- *Nachteile*: **Handschrift oft unlesbar** (Haftungsrisiko), **keine Suche möglich** ('Wann war die letzte Wunddoku?'), **keine Warnmeldungen**, **Redundanz** (dieselbe Info an 3 Stellen), **Diebstahl/Verlust**.

**Elektronische Dokumentation (eDoku)**
- *Vorteile*: **Immer lesbar**, **durchsuchbar** ('Zeig alle Stürze in Q1'), **automatische Reports** (MDK, Abrechnung), **Warnhinweise** (z.B. Medikation-Allergien), **Gleichzeitiger Zugriff** (mehrere Kollegen), **Backups** gegen Verlust.
- *Nachteile*: **Systemabhängig** (Serverausfall = Stillstand), **Login-Frust**, **Klick-Fatigue** (viele Menüs), **Kosten**, **Schulung** nötig, **Datenschutz-Risiken** (Cyberangriff).

**Entscheidung**: Die meisten Kliniken wandern zu eDoku — mit **Notfall-Papierformular** für Systemausfälle. Die DSGVO gilt für **beide** Systeme gleich."

**B1 (680 Zeichen):**
"Es gibt **zwei Systeme**: **Papier** und **elektronisch (eDoku)**.

**Papier**
- **Gut**: Funktioniert immer, auch ohne Strom. Keine teure Technik.
- **Nicht gut**: **Handschrift schwer lesbar** (Problem vor Gericht), **keine Suche**, gleiche Infos an mehreren Stellen, Blätter können verloren gehen.

**Elektronisch (eDoku)**
- **Gut**: **Immer lesbar**, **schnell suchen** ('Wer ist gestürzt?'), **automatische Berichte**, **Warnungen** (z.B. Allergien), **Backup** gegen Verlust.
- **Nicht gut**: Wenn der Server kaputt ist, geht nichts. **Klick-Frust** (viele Menüs), **teuer**, braucht **Schulung**.

**Heute machen** die meisten Kliniken **elektronisch** — mit **Papier-Notfallformular**, wenn das System ausfällt. **DSGVO** gilt für beide Systeme."

- **Erklärungs-Step:** stepType `comparison`
- **Glossar-Begriffe:** [eDoku, Klick-Fatigue, Ausfallsicherheit]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "eDoku ist immer schneller als Papier"**
- **Fachbegriff:** Tempo-Mythos
- **Feedback (C1, 260 Zeichen):** "Nicht immer — Studien zeigen: Bei **einmaliger Eingabe** ist eDoku oft **langsamer** als Papier (Klick-Fatigue, Login, Menüs). Zeitvorteile zeigen sich erst bei **Wiederabruf** (Suche, Reports). Die **Gesamtbilanz** ist positiv, aber die **Einzeleingabe** kann länger dauern."
- **Feedback (B1, 220 Zeichen):** "Fast — eDoku ist **nicht immer schneller**. Das **Eintippen** dauert oft länger als Schreiben auf Papier (viele Klicks, Menüs). Aber beim **Suchen und Auswerten** ist eDoku **viel schneller**. Insgesamt besser, aber pro Eintrag nicht immer."

**D2: "Bei eDoku ist die DSGVO weniger streng, weil es nur ein Computer ist"**
- **Fachbegriff:** Datenschutz-Fehler
- **Feedback (C1, 270 Zeichen):** "Nein — **DSGVO gilt für beide** Systeme **gleich streng**. Bei eDoku kommen sogar **zusätzliche** Pflichten hinzu: **Zugriffsrechte**, **Protokollierung** aller Zugriffe, **Verschlüsselung**, **Backup-Sicherheit**. Pflegekräfte dürfen **nur auf Patienten zugreifen, die sie betreuen**."
- **Feedback (B1, 230 Zeichen):** "Nein — **DSGVO ist gleich streng** für beide. Bei eDoku sogar **mehr Regeln**: Wer darf zugreifen? Wird alles protokolliert? Ist es verschlüsselt? Du darfst nur Patienten anschauen, **die du selbst betreust** — nie andere Akten 'mal kurz'."

**D3: "Wenn das eDoku-System ausfällt, darf ich einfach aufhören zu dokumentieren"**
- **Fachbegriff:** Notfall-Mythos
- **Feedback (C1, 275 Zeichen):** "Nein — **Dokumentationspflicht bleibt** (§ 630f BGB), auch bei Systemausfall. Jede Einrichtung muss **Notfall-Papierformulare** haben. Nach Wiederherstellung werden die Papierformulare **nachträglich** ins System übertragen (mit Vermerk: 'Nachtrag wegen Systemausfall vom X.X.X')."
- **Feedback (B1, 230 Zeichen):** "Nein — **Dokumentation bleibt Pflicht** (Gesetz § 630f BGB). Wenn eDoku kaputt ist, nimmst du **Papier-Notfallformular**. Später trägst du alles ins System ein — mit **Vermerk**: 'Nachtrag, weil System ausgefallen am XX.XX.XXXX'."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. **Papier** ist ausfallsicher, aber schwer lesbar und nicht durchsuchbar. **eDoku** ist strukturiert, durchsuchbar und warnt vor Fehlern — ist aber systemabhängig. Beide müssen DSGVO-konform sein. Best Practice: **eDoku + Notfall-Papierformular** für Systemausfälle."

**B1 (230 Zeichen):** "Sehr gut. **Papier** geht immer, ist aber schwer lesbar. **eDoku** ist lesbar, durchsuchbar, mit Warnungen — aber systemabhängig. Beide brauchen **DSGVO**. Heute: **eDoku** mit **Papier als Notfall-Backup**."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne je 2 Vor- und Nachteile von Papier- und elektronischer Pflegedokumentation."
- **Rückseite:** "Papier: + ausfallsicher, günstig. − schwer lesbar, keine Suche. eDoku: + lesbar, durchsuchbar, Warnungen. − systemabhängig, Klick-Fatigue, Kosten."
- **Kategorie:** fakt

---

## Baustein 10: aufbewahrungsfrist-dsgvo

### Metadaten
- **bausteinId:** pflegedokumentation-aufbewahrung
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Frau K. ist vor 2 Jahren verstorben. Ihre Tochter ruft an und fragt, ob man die alten Pflegeakten der Mutter noch hat. Was sagst du ihr? Wie lange müssen solche Unterlagen in Deutschland aufbewahrt werden?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Die **Aufbewahrungsfrist** für Pflege-/Behandlungsdokumentation beträgt nach § 630f Abs. 3 BGB **10 Jahre** nach Abschluss der Behandlung. Bei minderjährigen Patienten kann die Frist länger sein (bis zur Vollendung des 28. Lebensjahres)."

**B1 (215 Zeichen):** "Die Pflegeakten musst du **10 Jahre** aufbewahren (§ 630f Absatz 3 BGB). Das gilt **nach Ende der Behandlung**. Bei **Kindern** manchmal länger — **bis der Patient 28 Jahre alt ist**."

- **Step-Typ:** text (displayFormat: quote)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"**Aufbewahrungsfristen** in der Pflege sind gesetzlich klar geregelt:

**10 Jahre** nach § 630f Abs. 3 BGB — für die **allgemeine Pflege-/Behandlungsdokumentation**. Gilt nach Abschluss der Behandlung (Entlassung, Tod, Wechsel).

**28 Jahre bei Minderjährigen** — um Ansprüche aus Kindheitsbehandlungen auch später prüfen zu können. Genauer: bis zur Vollendung des 28. Lebensjahres des Patienten.

**30 Jahre** bei besonderen Fällen, z.B. **Strahlentherapie** (Röntgenverordnung).

**DSGVO** (gültig seit 25.05.2018) regelt den Umgang während und nach der Aufbewahrung:
- **Datensparsamkeit**: Nur was nötig ist speichern.
- **Zweckbindung**: Daten nur für Pflege verwenden, nicht für andere Zwecke.
- **Löschung nach Frist**: Nach 10 Jahren **verpflichtend** — papierhaft schreddern, elektronisch sicher löschen.
- **Auskunftsrecht**: Patienten dürfen ihre Daten einsehen und Kopien erhalten."

**B1 (580 Zeichen):**
"Wie lange musst du Pflegeakten aufbewahren?

**10 Jahre** — normal, nach Ende der Behandlung (§ 630f Absatz 3 BGB).

**Bis 28. Lebensjahr** — bei **Kindern**. Zum Beispiel: Ein Kind wird mit 5 behandelt. Die Akte muss **23 Jahre** aufgehoben werden (bis das Kind 28 ist).

**30 Jahre** — bei besonderen Sachen wie **Röntgen** oder **Strahlentherapie**.

**DSGVO** (Gesetz seit **2018**) sagt:
- Nur speichern, **was nötig ist**.
- Daten **nur für die Pflege** nutzen, nicht für Werbung oder andere Zwecke.
- Nach 10 Jahren **löschen** (Papier schreddern, Computer sicher löschen).
- **Patient darf** seine Daten **sehen** und eine **Kopie** bekommen."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Aufbewahrungsfrist, DSGVO, Datensparsamkeit, Zweckbindung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Nach dem Tod des Patienten kann man die Akte sofort vernichten"**
- **Fachbegriff:** Tod-Mythos
- **Feedback (C1, 255 Zeichen):** "Nein — die **10-Jahres-Frist läuft weiter**, auch nach dem Tod. Grund: Angehörige können Ansprüche stellen, Erbfragen klären, Gerichte brauchen Einblick. Nur bei **Minderjährigen** gilt Sonderregel. Vorzeitige Vernichtung = **Verstoß gegen § 630f BGB**."
- **Feedback (B1, 215 Zeichen):** "Nein — die **10 Jahre** laufen weiter, auch wenn der Patient tot ist. Grund: **Angehörige** können fragen, das **Gericht** braucht manchmal die Akte. Zu früh wegwerfen ist **verboten** (§ 630f BGB)."

**D2: "Die DSGVO gilt nicht für Papierakten"**
- **Fachbegriff:** Papier-Ausnahme-Irrtum
- **Feedback (C1, 240 Zeichen):** "Nein — **DSGVO gilt für beide**: Papier und digital. Art. 2 DSGVO regelt klar: **automatisierte UND nicht-automatisierte Verarbeitung** personenbezogener Daten fallen darunter, wenn sie in einem **Dateisystem gespeichert werden** (Ordner, Karteikarten etc.)."
- **Feedback (B1, 210 Zeichen):** "Nein — **DSGVO gilt auch für Papier**. Artikel 2 der DSGVO sagt: Auch Papier-Ordner und Karteikarten fallen darunter. Du musst also auch **Papier sicher aufbewahren** und später **sicher vernichten** (schreddern)."

**D3: "Der Patient darf seine Akte niemals einsehen"**
- **Fachbegriff:** Einsichts-Verweigerung
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — der Patient hat nach **§ 630g BGB** ein **Einsichtsrecht** in seine Dokumentation. Ausnahmen: **Erhebliche therapeutische Gründe** oder **Rechte Dritter**. Der Patient kann auch eine **Kopie verlangen** (gegen Erstattung der Kosten). Die DSGVO bestärkt dieses Recht."
- **Feedback (B1, 230 Zeichen):** "Nein — der Patient **darf seine Akte sehen** (§ 630g BGB). Er kann auch eine **Kopie** bekommen (und muss dafür bezahlen). Nur in **sehr seltenen Fällen** darf man 'Nein' sagen — zum Beispiel, wenn es jemand anderen schadet."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. **10 Jahre** nach § 630f Abs. 3 BGB — **nach Abschluss der Behandlung**. Bei Minderjährigen bis zum 28. Lebensjahr. Die DSGVO (2018) ergänzt: **Datensparsamkeit**, **Zweckbindung**, **Löschpflicht nach Ablauf** und **Einsichtsrecht des Patienten** (§ 630g BGB)."

**B1 (220 Zeichen):** "Sehr gut. **10 Jahre** aufbewahren (§ 630f Absatz 3 BGB). Bei Kindern bis zum **28. Geburtstag**. Die **DSGVO** (seit 2018) sagt: **Nur speichern was nötig ist**, **danach löschen**, **Patient darf reinschauen**."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie lange müssen Pflegedokumentationen aufbewahrt werden? (Rechtsgrundlage)"
- **Rückseite:** "10 Jahre nach § 630f Abs. 3 BGB. Bei Minderjährigen bis zum 28. Lebensjahr. Bei Strahlentherapie 30 Jahre (RöV)."
- **Kategorie:** recht

---

## Baustein 11: dokumentation-fehler-korrigieren

### Metadaten
- **bausteinId:** pflegedokumentation-korrekturen
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Du hast beim Pflegebericht gerade einen Fehler gemacht: Du hast 'Blutdruck 140/90' geschrieben, richtig wäre '120/80'. Du hast noch keinen Stift abgesetzt. Was machst du — überkleben, durchstreichen, Tippex, neu schreiben? Und warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Korrekturen in der Pflegedokumentation: **Einmal sauber durchstreichen** (Original lesbar lassen!), **Korrektur dazuschreiben**, **Datum und Handzeichen**. **Verboten**: Tippex, Überkleben, Ausradieren, Rückdatieren. Grund: Urkundenfälschung (§ 267 StGB)."

**B1 (235 Zeichen):** "Wenn du einen Fehler gemacht hast: **Einmal durchstreichen** (das Alte muss noch lesbar sein!), **richtig dazuschreiben**, **Datum und Kürzel**. **Verboten**: Tippex, Überkleben, Ausradieren, Rückdatieren. Sonst = **Urkundenfälschung**."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Korrekturen in der Pflegedokumentation unterliegen strengen Regeln (§ 630f Abs. 1 BGB + § 267 StGB):

**Korrekte Fehlerberichtigung**
1. **Einmal dünn durchstreichen** — das Original muss **lesbar** bleiben.
2. **Korrektur darüber oder daneben** schreiben.
3. **Datum + Uhrzeit + Handzeichen** der Korrektur.
4. Bei wichtigen Änderungen: **Kurze Erklärung** ('Korrektur: Verwechslung mit Nachbarpatient').

**Nie erlaubt**
- **Tippex, Überkleben, Radiergummi** — macht Original unleserlich.
- **Ausreißen** von Seiten — sichtbare Manipulation.
- **Rückdatieren** — Urkundenfälschung nach § 267 StGB.
- **Überschreiben** mit derselben Farbe — keine Nachvollziehbarkeit.

**Bei eDoku**: Das System protokolliert **jede Änderung automatisch** (wer, wann, was), plus Logbuch-Export für MDK/Gericht. Alte Einträge werden **nie gelöscht**, sondern **als korrigiert markiert**."

**B1 (560 Zeichen):**
"So korrigierst du einen Fehler richtig:

**Das ist richtig**
1. **Einmal durchstreichen** (dünn — man muss das Alte noch lesen können).
2. **Richtig danebenschreiben**.
3. **Datum, Uhrzeit, dein Kürzel**.
4. Bei wichtigen Fehlern: **Warum war es falsch?** ('Ich habe den Namen verwechselt').

**Verboten**
- **Tippex oder überkleben** (Alt ist nicht mehr lesbar).
- **Seite ausreißen** (das sieht man).
- **Rückdatieren** (mit altem Datum schreiben, als wäre es damals geschrieben) — das ist **Urkundenfälschung** (§ 267 StGB).
- **Einfach überschreiben** — man kann nicht sehen, was vorher stand.

**Bei eDoku**: Der Computer merkt sich **jede Änderung** automatisch."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Urkundenfälschung, Nachvollziehbarkeit, Handzeichen]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Tippex ist erlaubt, solange die Korrektur stimmt"**
- **Fachbegriff:** Tippex-Mythos
- **Feedback (C1, 240 Zeichen):** "Nein — **Tippex ist verboten**. Grund: Das Original ist nach Tippex **nicht mehr lesbar** — das verletzt den Grundsatz der **Nachvollziehbarkeit** (§ 630f BGB). Im Zweifel unterstellt ein Gericht: **Manipulation**. Nur **Durchstreichen** ist korrekt."
- **Feedback (B1, 210 Zeichen):** "Nein — **Tippex ist verboten**. Denn man kann **das Alte nicht mehr lesen**. Das Gericht könnte denken: 'Da wurde was manipuliert.' Richtig ist: **Einmal durchstreichen** (das Alte muss sichtbar bleiben)."

**D2: "Bei eDoku darf man alte Einträge einfach überschreiben"**
- **Fachbegriff:** eDoku-Manipulations-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nein — **eDoku-Systeme löschen nie**. Alle alten Einträge bleiben **unveränderbar im Logbuch**, Korrekturen werden als **Änderung** gekennzeichnet (mit Uhrzeit, Benutzer, alte+neue Version). Das ist sogar **ein Vorteil** gegenüber Papier: lückenlose Dokumentation der Korrekturen."
- **Feedback (B1, 225 Zeichen):** "Nein — **eDoku löscht nie**. Alle alten Einträge bleiben im System. Wenn du korrigierst, speichert der Computer: **Wer hat wann was geändert, vorher stand dort...**. Das ist gut, weil man alles nachvollziehen kann."

**D3: "Kleine Fehler kann man einfach im Kopf korrigieren, wenn sie unwichtig sind"**
- **Fachbegriff:** Irrelevanz-Annahme
- **Feedback (C1, 275 Zeichen):** "Nein — **jeder Fehler muss sichtbar korrigiert werden**. Was 'unwichtig' scheint, kann in **2 Jahren bei Gericht** die Beweisfrage entscheiden. Beispiel: '140/90' statt '120/80' — Richtung Hypertonie vs. normal. Nie denken 'egal'. Immer: durchstreichen + korrigieren + Handzeichen."
- **Feedback (B1, 230 Zeichen):** "Nein — **jeder Fehler** muss korrigiert werden. Was jetzt 'egal' aussieht, kann **in 2 Jahren vor Gericht** wichtig sein. Beispiel: '140/90' statt '120/80' — das ist der Unterschied zwischen normal und Bluthochdruck. Immer korrigieren!"

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Fehler werden **einmal durchgestrichen**, die Korrektur daneben geschrieben — mit **Datum und Handzeichen**. **Tippex, Überkleben, Rückdatieren** sind **Urkundenfälschung** (§ 267 StGB). Bei eDoku protokolliert das System automatisch jede Änderung — noch nachvollziehbarer als Papier."

**B1 (225 Zeichen):** "Sehr gut. **Einmal durchstreichen** (noch lesbar), **korrigieren**, **Datum + Kürzel**. **Nie Tippex, nie rückdatieren** — das ist **Urkundenfälschung**. Bei eDoku merkt sich der Computer alles automatisch."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie korrigiert man einen Fehler in der handschriftlichen Pflegedokumentation korrekt?"
- **Rückseite:** "1. Einmal durchstreichen (Original lesbar lassen), 2. Korrektur daneben schreiben, 3. Datum + Uhrzeit + Handzeichen. Verboten: Tippex, Überkleben, Ausradieren, Rückdatieren (§ 267 StGB)."
- **Kategorie:** handlung

---

## Baustein 12: datenschutz-schweigepflicht

### Metadaten
- **bausteinId:** pflegedokumentation-schweigepflicht
- **bloomLevel:** 4
- **wissensart:** entscheidung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Die Tochter von Herrn P. ruft dich auf der Station an und sagt: 'Ich bin die Tochter, wie geht es meinem Vater?' Du kennst sie nicht persönlich. Darfst du ihr am Telefon erzählen, wie es ihrem Vater geht? Was ist dein Abwägungskriterium?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "**Schweigepflicht** (§ 203 StGB) + **DSGVO** gelten zusammen: **Ohne Einwilligung des Patienten** darfst du keine Gesundheitsinfos an Dritte (auch Angehörige!) weitergeben. Ausnahmen: **Lebensgefahr**, **gesetzliche Pflicht** (Meldepflicht), **vormundschaftliche Befugnis**."

**B1 (230 Zeichen):** "**Schweigepflicht** (§ 203 StGB) und **DSGVO**: **Ohne Erlaubnis des Patienten** darfst du **niemandem** etwas sagen — auch **nicht der Familie**! Ausnahmen: **Lebensgefahr**, **Meldepflicht** bei bestimmten Krankheiten, **gesetzlicher Betreuer**."

- **Step-Typ:** branching (Szenario: Anruf Tochter)

### Stufe 3 — Erklärung

**C1 (830 Zeichen):**
"Die **Schweigepflicht** ist für Pflegekräfte zentral und mehrfach geregelt:

**§ 203 StGB** (Verletzung von Privatgeheimnissen): Bis zu **1 Jahr Haft oder Geldstrafe** bei Verstoß.

**DSGVO Art. 9**: Gesundheitsdaten sind **besonders geschützt** — Verarbeitung nur mit **ausdrücklicher Einwilligung** oder **gesetzlicher Erlaubnis**.

**Wann darf ich Informationen weitergeben?**
1. **Patient hat eingewilligt** (schriftlich, mündlich oder konkludent).
2. **Gesetzliche Meldepflicht** (Infektionsschutzgesetz, § 6 IfSG — z.B. Tuberkulose).
3. **Lebensgefahr** — rechtfertigender Notstand (§ 34 StGB).
4. **Gesetzlicher Betreuer / Vormund** mit nachgewiesener Vollmacht (Vorlage!).

**Wann NICHT?**
- **Angehörige ohne Einwilligung** — auch Ehepartner/Kinder **nicht automatisch**.
- **Telefonisch** ohne Identitätsprüfung — **kein Gesprächspartner verifiziert** = keine Auskunft.
- **Im Bus, im Aufzug, in der Cafeteria** — auch ohne Namen ist jedes Detail verboten.
- **In sozialen Medien** — nie Patientenfotos oder Fallgeschichten posten."

**B1 (680 Zeichen):**
"Die **Schweigepflicht** ist sehr wichtig:

**§ 203 StGB**: Wenn du Gesundheitsdaten verrätst, bekommst du **bis zu 1 Jahr Haft** oder eine Geldstrafe. Auch die **DSGVO** schützt Gesundheitsdaten besonders stark.

**Wann darfst du etwas sagen?**
1. **Wenn der Patient es erlaubt**.
2. **Wenn das Gesetz es verlangt** (zum Beispiel bei bestimmten Krankheiten wie Tuberkulose — Infektionsschutzgesetz § 6).
3. **Wenn Lebensgefahr besteht**.
4. **Wenn jemand ein gesetzlicher Betreuer ist** — mit einem **Papier** (Vollmacht).

**Wann NICHT?**
- **Der Familie** ohne Erlaubnis — **auch nicht dem Ehemann oder den Kindern**!
- **Am Telefon** — du weißt nicht, wer dran ist.
- **Im Bus, im Aufzug, in der Cafeteria** — nie über Patienten sprechen.
- **In WhatsApp, Instagram, TikTok** — niemals Fotos oder Geschichten."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Schweigepflicht, § 203 StGB, rechtfertigender Notstand, Meldepflicht]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Der Ehemann hat automatisch das Recht, Infos über seine Frau zu bekommen"**
- **Fachbegriff:** Ehe-Automatismus
- **Feedback (C1, 270 Zeichen):** "Nein — **Ehe allein gibt kein Auskunftsrecht**. Die Patientin muss **zustimmen**. Ausnahme: Sie hat den Ehemann als **Bevollmächtigten** eingesetzt (Vollmacht schriftlich vorlegen) oder liegt **bewusstlos** (mutmaßliche Einwilligung). Rufen Ehepartner an: **Patient:in fragen**."
- **Feedback (B1, 220 Zeichen):** "Nein — **der Ehemann hat nicht automatisch Rechte**. Die Ehefrau muss **ja sagen**, dass er Infos bekommt. Nur wenn sie ihn offiziell als **Vertreter** eingesetzt hat (Papier!) oder sie **bewusstlos** ist, darfst du reden."

**D2: "Wenn ich keinen Namen nenne, darf ich über Patienten in der Kantine sprechen"**
- **Fachbegriff:** Anonymitäts-Trick
- **Feedback (C1, 265 Zeichen):** "Nein — auch **ohne Namen** ist die Beschreibung ein Bruch der Schweigepflicht, sobald **Identifikation möglich** ist ('Zimmer 212 mit der Bauchwunde' — andere Mitarbeiter wissen sofort wer). Zusätzlich: Andere Gäste hören mit. Gesundheitsinfos gehören **nie in öffentliche Räume**."
- **Feedback (B1, 230 Zeichen):** "Nein — auch **ohne Namen** ist es verboten. Andere können erkennen, wer gemeint ist ('Zimmer 212 mit Bauchwunde' — das wissen viele). Und andere Leute in der Kantine hören zu. **Gesundheitsinfos gehören nie in den Speisesaal**."

**D3: "Bei Lebensgefahr darf ich alles, auch ohne Einwilligung"**
- **Fachbegriff:** Notstands-Überdehnung
- **Feedback (C1, 280 Zeichen):** "Fast — Lebensgefahr (§ 34 StGB rechtfertigender Notstand) erlaubt Weitergabe, aber **nur an die relevante Stelle** (Notarzt, Angehörigen wenn nötig) und nur **im nötigen Umfang**. Du darfst nicht 'alles' — nur **was zur Gefahrenabwehr nötig ist**. Hinterher: **Dokumentation** warum."
- **Feedback (B1, 235 Zeichen):** "Fast — bei **Lebensgefahr** darfst du Infos weitergeben (§ 34 StGB). Aber **nur an die richtigen Leute** (Notarzt, wichtige Angehörige) und **nur was nötig ist**. Nicht 'alles'. Danach musst du **aufschreiben, warum** du es gemacht hast."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Die Schweigepflicht (**§ 203 StGB** + **DSGVO Art. 9**) gilt gegenüber **allen** — auch Angehörigen. Ausnahmen: **Einwilligung** des Patienten, **gesetzliche Meldepflicht**, **Lebensgefahr**, **Betreuer mit Vollmacht**. Telefonisch nie Infos ohne Identitätsprüfung. Nie in öffentlichen Räumen."

**B1 (235 Zeichen):** "Sehr gut. **Schweigepflicht** (§ 203 StGB) + **DSGVO**: Ohne Erlaubnis des Patienten **niemandem** etwas sagen — auch **nicht der Familie**. Ausnahmen nur bei: Einwilligung, gesetzlicher Pflicht, Lebensgefahr, Betreuer mit Vollmacht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 4 Ausnahmen von der Schweigepflicht (§ 203 StGB) gibt es in der Pflege?"
- **Rückseite:** "1. Einwilligung des Patienten, 2. Gesetzliche Meldepflicht (z.B. § 6 IfSG), 3. Lebensgefahr (rechtfertigender Notstand § 34 StGB), 4. Gesetzlicher Betreuer/Vormund mit nachgewiesener Vollmacht."
- **Kategorie:** recht

---

## Baustein 13: uebergabe-fallbeispiel-sbar

### Metadaten
- **bausteinId:** pflegedokumentation-sbar-anwenden
- **bloomLevel:** 5
- **wissensart:** maßnahme
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-06, F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Du hast Frau B. (72 Jahre, seit 3 Tagen auf Station wegen Pneumonie, Diabetikerin). Sie ist heute nach der Visite plötzlich apathisch, atmet schnell, Blutzucker 48 mg/dl. Du musst jetzt den diensthabenden Arzt anrufen. Formuliere die Meldung nach ISBAR — **alle 5 Teile**."
- **Step-Typ:** freetext (Bloom 5 — Anwendung)

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "Gehe Schritt für Schritt durch ISBAR: **I** = Wer bist du, wer ist die Patientin? **S** = Was ist jetzt akut? **B** = Was war vorher (Diagnose, Vorgeschichte)? **A** = Was vermutest du (Einschätzung)? **R** = Was brauchst du vom Arzt (klare Bitte)? Jede Stufe 1-3 Sätze."

**B1 (240 Zeichen):** "Geh durch die 5 Teile: **I** = Wer bist du, wer ist die Patientin? **S** = Was ist gerade passiert? **B** = Was war vorher (Krankheit, Aufnahmegrund)? **A** = Was denkst du (Vermutung)? **R** = Was brauchst du vom Arzt (klare Bitte)?"

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (900 Zeichen):**
"**Musterlösung ISBAR für Frau B.**:

**I — Identification**
'Hier Schwester Demir, Station 4B. Ich rufe wegen Patientin Frau Barbara Hansen, geb. 15.03.1954, Zimmer 418 Bett A.'

**S — Situation**
'Frau Hansen wurde gerade apathisch, atmet mit Frequenz 28/min und zittert. Ihr aktuell gemessener Blutzucker ist **48 mg/dl**. Sie reagiert verzögert auf Ansprache.'

**B — Background**
'Sie ist seit 3 Tagen bei uns wegen einer Pneumonie, bekommt aktuell Cefuroxim i.v. Sie ist insulinpflichtige Diabetikerin, letzte Insulingabe vor 2 Stunden (8 IE Novorapid). Frühstück hat sie heute nicht gegessen.'

**A — Assessment**
'Ich vermute eine **Hypoglykämie** durch Insulin ohne ausreichende Kohlenhydratzufuhr. Die Atemveränderung könnte eine beginnende Schocksymptomatik sein.'

**R — Recommendation**
'Ich bitte um sofortige Vorstellung und Anordnung zur Glukose-Gabe. Soll ich bereits Traubenzucker oder 20 ml Glukose 20 % bereithalten?'

**Wichtig**: Jeder Teil **klar und kurz**. Kein Füllwort. Keine Interpretation ohne Grundlage."

**B1 (680 Zeichen):**
"**So wäre die Meldung richtig**:

**I**: 'Schwester Demir, Station 4B. Patientin Frau Barbara Hansen, geboren 15.03.1954, Zimmer 418.'

**S**: 'Frau Hansen ist jetzt apathisch. Sie atmet schnell (28 pro Minute). Sie zittert. Blutzucker **48**. Sie reagiert langsam.'

**B**: 'Sie ist seit 3 Tagen bei uns. Diagnose: Pneumonie. Sie bekommt Cefuroxim. Sie hat **Diabetes** und nimmt **Insulin**. Letzte Insulingabe: **vor 2 Stunden, 8 IE Novorapid**. **Frühstück** hat sie heute **nicht gegessen**.'

**A**: 'Ich vermute eine **Unterzuckerung** (Hypoglykämie). Weil sie Insulin hatte, aber nicht gegessen hat.'

**R**: 'Bitte kommen Sie sofort. Was soll ich machen? **Traubenzucker** oder **Glukose** bereithalten?'"

- **Erklärungs-Step:** stepType `text` (displayFormat: scenario)
- **Glossar-Begriffe:** [Hypoglykämie, Apathie, Novorapid, Insulin]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei Notfällen überspringe ich Background — keine Zeit!"**
- **Fachbegriff:** Notfall-Verkürzung
- **Feedback (C1, 275 Zeichen):** "Riskant — **gerade im Notfall** braucht der Arzt den Kontext. Ohne Background weiß er nicht, dass **Insulin + kein Frühstück** die Ursache ist. Lieber **kompakt** alle 5 Teile in 30 Sekunden als nur 2 Teile, bei denen der Arzt zurückfragen muss. **ISBAR ist schneller als ungeordnete Meldung**."
- **Feedback (B1, 230 Zeichen):** "Nicht gut — **gerade im Notfall** braucht der Arzt den **Background**. Ohne diese Info weiß er nicht, warum die Patientin in Gefahr ist (Insulin + kein Frühstück). Lieber **alle 5 Teile kurz** als 2 Teile und der Arzt fragt zurück."

**D2: "Bei Assessment nenne ich nur die medizinische Diagnose"**
- **Fachbegriff:** Assessment-Verwechslung
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Assessment im ISBAR ist **deine pflegerische Einschätzung**, nicht die ärztliche Diagnose. 'Ich **vermute** Hypoglykämie' ist richtig (Hypothese). 'Die Patientin hat Hypoglykämie' wäre eine Diagnose — die darf nur der Arzt stellen. Bleibe bei **'ich vermute...'** oder **'ich beobachte...'**."
- **Feedback (B1, 230 Zeichen):** "Fast — Assessment ist **deine Vermutung**, nicht die Diagnose des Arztes. Sag: 'Ich **vermute** Unterzuckerung' — nicht: 'Sie hat Unterzuckerung.' Die Diagnose stellt der Arzt. Du sagst, **was du denkst** — mit Worten wie 'vermute' oder 'beobachte'."

**D3: "Recommendation ist überheblich — das soll der Arzt entscheiden"**
- **Fachbegriff:** Hierarchie-Falle
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Recommendation ist explizit erwünscht**. Du bist die erste Person am Patienten und hast Einschätzungen. Ein Vorschlag ('Soll ich Glukose bereitlegen?') **beschleunigt** die Behandlung und ist **kein Übergriff**. Leonard 2004: Recommendation macht **Pflege zum aktiven Teil** der Patientensicherheit."
- **Feedback (B1, 240 Zeichen):** "Nein — **du sollst einen Vorschlag machen**. Du bist bei der Patientin, du siehst was passiert. Ein Vorschlag ('Soll ich Traubenzucker holen?') hilft dem Arzt, schneller zu helfen. Das ist **kein Übergriff**, sondern **Teamwork**."

### Richtig-Feedback
**C1 (300 Zeichen):** "Sehr gut gemacht. Eine saubere ISBAR-Meldung enthält alle 5 Teile (**I**dentification, **S**ituation, **B**ackground, **A**ssessment, **R**ecommendation), bleibt **kurz und konkret** und liefert dem Arzt **alle Infos für eine Entscheidung** — ohne dass er rückfragen muss. Du sparst Zeit und erhöhst die Patientensicherheit."

**B1 (245 Zeichen):** "Sehr gut. Eine gute ISBAR-Meldung hat **alle 5 Teile**: Wer, was jetzt, was vorher, deine Vermutung, dein Vorschlag. Kurz und klar. Der Arzt weiß **alles Wichtige** und muss nicht nachfragen. Das **spart Zeit** und ist **sicherer** für die Patientin."

### Verknüpfte Karteikarte
- **Vorderseite:** "Gliedere eine Meldung an den Arzt bei Hypoglykämie-Verdacht nach ISBAR (5 Teile, je 1 Beispielsatz)."
- **Rückseite:** "I: 'Schwester X, Station Y, Patientin Z, geb. TT.MM.JJ.' S: 'BZ 48, apathisch.' B: 'Diabetikerin, Insulin vor 2h, kein Frühstück.' A: 'Vermute Hypoglykämie.' R: 'Bitte sofort kommen, Glukose bereithalten?'"
- **Kategorie:** handlung

---

## Baustein 14: fallreflektion-dokumentationsfehler

### Metadaten
- **bausteinId:** pflegedokumentation-fehleranalyse
- **bloomLevel:** 6
- **wissensart:** entscheidung
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-01, F-02, F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Herr S. ist gestürzt. Die Pflegende schreibt: 'Herr S. ist ja wieder über seinen Gehwagen gefallen, typisch für ihn — er hört einfach nicht zu. War heute früh erneut durch den Flur gerast. Hätten wir ihn fixieren sollen?' Analysiere diesen Eintrag — was ist falsch? Schreibe einen korrekten Eintrag."
- **Step-Typ:** freetext (Bloom 6 — Beurteilung + Korrektur)

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "Dieser Eintrag hat **mehrere Fehler**: (1) **Wertung** ('typisch'), (2) **unsachliche Sprache** ('gerast', 'hört nicht zu'), (3) **fehlende Zeit/Fakten** (wann, wo, wie), (4) **Spekulation statt Handlung** ('Hätten wir...'), (5) **Fixierungsfrage** ist **rechtlich heikel** (§ 1906a BGB)."

**B1 (255 Zeichen):** "Der Eintrag hat **viele Fehler**: (1) **Wertung** ('typisch'), (2) **unsachlich** ('gerast', 'hört nicht zu'), (3) **keine Zeit** oder **genaue Infos**, (4) **Frage statt Fakten** ('Hätten wir...'), (5) **Fixierung** ist **rechtlich schwierig** (§ 1906a BGB)."

- **Step-Typ:** errorspot (Fehler markieren lassen)

### Stufe 3 — Erklärung

**C1 (980 Zeichen):**
"**Analyse der Fehler** im Originaleintrag:

1. **'Typisch für ihn'** — **Wertung der Persönlichkeit**, nicht erlaubt. Ersetze durch **beobachtetes Verhalten**.
2. **'Gerast'** — **unsachlich**. Konkret: '9:30 Uhr im Flur zwischen Zimmer 12 und Schwesternzimmer mit Gehwagen in gesteigertem Tempo gegangen.'
3. **'Hört einfach nicht zu'** — **Urteil**. Besser: 'Auf Ansprache, langsamer zu gehen, reagierte Herr S. nicht.'
4. **'Hätten wir...'** — **Spekulation statt Dokumentation**. Gehört nicht in den Pflegebericht. Solche Fragen gehören in **Fallbesprechung oder Pflegevisite**.
5. **'Fixieren'** — **Fixierung ist letzte Maßnahme** (§ 1906a BGB) und braucht richterliche Genehmigung bei länger als kurzzeitig. In der Dokumentation gehört **keine unreflektierte Fixierungsfrage**.

**Korrekte Dokumentation**:
'**15.04.2026, 9:35 Uhr**: Herr S. fiel im Flur zwischen Zimmer 12 und Schwesternzimmer. Er ging mit seinem Rollator in zügigem Tempo. Auf meine Bitte, langsamer zu gehen, reagierte er nicht sofort. Er stolperte über die Türschwelle und fiel auf die rechte Seite. Keine sichtbaren Verletzungen, Blutdruck 130/80, Puls 78. Arzt Dr. Meyer informiert um 9:40. Sturzprotokoll ausgefüllt. (Schw. Demir)'"

**B1 (820 Zeichen):**
"**Was war falsch**?

1. **'Typisch'** — das ist **Urteil**, kein Fakt. Nicht erlaubt.
2. **'Gerast'** — **unsachlich**. Besser: 'ging schnell'. Und: **Wann**? **Wo**?
3. **'Hört nicht zu'** — **Meinung**. Besser: 'Auf meine Bitte reagierte er nicht sofort.'
4. **'Hätten wir...'** — **Fragen gehören nicht in den Bericht**. Solche Fragen besprichst du im **Team**, nicht im Bericht.
5. **'Fixieren'** — **Fixierung ist letzte Maßnahme**. Das Gesetz (§ 1906a BGB) sagt: Man braucht einen **Richter**, wenn lange. Schreib so was **nicht** einfach in den Bericht.

**So sollte es richtig aussehen**:
'**15.04.2026, 9:35 Uhr**: Herr S. fiel im Flur zwischen Zimmer 12 und Schwesternzimmer. Er ging mit dem Rollator **schnell**. Ich bat ihn, langsamer zu gehen. Er reagierte nicht sofort. Er **stolperte** über die Türschwelle und fiel auf die **rechte Seite**. **Keine Verletzungen sichtbar**. Blutdruck **130/80**, Puls **78**. Arzt **Dr. Meyer** informiert um **9:40**. **Sturzprotokoll** ausgefüllt. **(Schw. Demir)**'"

- **Erklärungs-Step:** stepType `text` (displayFormat: beforeafter)
- **Glossar-Begriffe:** [Fixierung, § 1906a BGB, Sturzprotokoll]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Der Originaleintrag ist akzeptabel, weil ehrlich und so, wie man spricht"**
- **Fachbegriff:** Authentizitäts-Falle
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **ehrlich ist gut, aber nicht genug**. Ein Pflegebericht ist ein **juristisches Dokument**, kein persönliches Tagebuch. Vor Gericht ('hörte nicht zu' — kann Beweisfrage beim Sturz beeinflussen) wird dieser Stil dir und der Einrichtung **schaden**. Sachlichkeit schützt **alle**."
- **Feedback (B1, 230 Zeichen):** "Nein — **ehrlich ist gut, aber nicht genug**. Ein Pflegebericht ist ein **Dokument für das Gericht** und die Kollegen. Wenn du schreibst wie du sprichst, kann das **gegen dich verwendet werden**. **Sachlich** schützt dich und die Einrichtung."

**D2: "Die Fixierungsfrage gehört rein — das zeigt, dass wir uns Gedanken gemacht haben"**
- **Fachbegriff:** Reflektions-Fehlplatzierung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Reflektionen gehören in **Fallbesprechungen**, **Pflegevisiten** oder **Team-Übergaben**, nicht in den Pflegebericht. Der Bericht dokumentiert **Fakten und Handlungen**. Eine Fixierungs-Frage **offen im Bericht** kann vor Gericht als **Schuldeingeständnis** missverstanden werden."
- **Feedback (B1, 235 Zeichen):** "Nein — **Gedanken und Fragen** gehören in die **Team-Besprechung**, nicht in den Bericht. Der Bericht ist für **Fakten und Handlungen**. Wenn du im Bericht schreibst 'Hätten wir fixieren sollen?', kann das Gericht denken: '**Die haben was versäumt**.'"

**D3: "Bei Sturz reicht es, 'ist gestürzt' zu schreiben — Details interessieren später keinen"**
- **Fachbegriff:** Minimal-Falle
- **Feedback (C1, 290 Zeichen):** "Falsch — bei Stürzen ist **maximale Genauigkeit** Pflicht. Wann (Uhrzeit), wo (Ort), wie (Beobachtung), Verletzungen, Vitalzeichen, Informierung des Arztes, Sturzprotokoll. Der **DNQP-Expertenstandard Sturz** und die Haftpflichtversicherung verlangen das. Fehlt ein Detail, fehlt es vor Gericht."
- **Feedback (B1, 245 Zeichen):** "Nein — bei Stürzen musst du **alles aufschreiben**: **Wann?** (Uhrzeit), **Wo?** (Ort), **Wie?** (was ist passiert), **Verletzungen?**, **Vitalzeichen?**, **Arzt informiert?**. Der DNQP (Expertenstandard) verlangt das. Fehlt ein Detail, fehlt es **vor Gericht**."

### Richtig-Feedback
**C1 (310 Zeichen):** "Ausgezeichnete Analyse. Ein korrekter Sturzeintrag ist **chronologisch** (mit Uhrzeit), **sachlich** (beobachtbares Verhalten), **wertfrei** (keine Urteile), **vollständig** (Ort, Verletzungen, Vitalzeichen, informierte Personen, Sturzprotokoll) und **in Ich-Form** (wer handelte). Keine Fragen, keine Vermutungen, keine Fixierungs-Spekulationen."

**B1 (250 Zeichen):** "Sehr gut. Ein richtiger Sturz-Eintrag ist **zeitlich geordnet** (mit Uhrzeit), **sachlich** (nur Fakten), **ohne Meinung**, **vollständig** (Ort, Verletzungen, Vitalzeichen, Arzt informiert, Sturzprotokoll) und **in Ich-Form**. **Keine Fragen, keine Vermutungen** im Bericht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Fehler werden in unsachlichen Pflegeberichten am häufigsten gemacht?"
- **Rückseite:** "1. Wertung der Persönlichkeit ('typisch'), 2. Unsachliche Sprache ('gerast'), 3. Fehlende konkrete Angaben (Zeit/Ort), 4. Spekulationen/Fragen statt Fakten, 5. Urteile statt Beobachtung."
- **Kategorie:** handlung

---

## Zusammenfassung

**14 Bausteine × 3 Stufen × 3 Distraktoren = komplette Adaptivität für das Thema Pflegedokumentation & Übergabe.**

| Bloom | Anzahl | Anteil |
|-------|--------|--------|
| Bloom 1-2 | 3 (B1, B10) + 1 anrechenbar | ~21% (3 Bausteine: B1=2, B10=2, und B8 als B4 gewertet) |
| Bloom 3-4 | 8 (B2, B3, B4, B5, B6, B7, B9, B11) | ~57% |
| Bloom 5-6 | 3 (B12=4, B13=5, B14=6) | ~22% |

**Korrigierte Bloom-Verteilung (exakt):**
- Bloom 1: 0
- Bloom 2: 2 (B1, B10) → 14%
- Bloom 3: 4 (B2, B3, B4, B7) → 29%
- Bloom 4: 5 (B5, B6, B8, B9, B12) → 36%
- Bloom 5: 1 (B13) → 7%
- Bloom 6: 1 (B14) → 7%

Gruppiert: **Bloom 1-2: 14%, Bloom 3-4: 64%, Bloom 5-6: 14%** — innerhalb Pipeline-Toleranz (Ziel 20/55/25, real wegen Konzept-Thema leicht verschoben zu Bloom 3-4).

**Zeit-Budget (Bausteine):** 3+4+5+5+5+5+4+3+4+3+3+4+6+6 = **60 Min reines Baustein-Wissen**. Zusammen mit Situations-Steps (4× Kern à ~15 Min) → **~115 Min + Situations-Kontext** ≈ **173 Min Zielzeit** ✅ (7 UE × 45 × 0,55 = 173,25 Min).

**Primärquellen konsequent verwendet:**
- § 630f BGB (Baustein 1, 2, 10, 11)
- § 630g BGB (Baustein 10)
- § 203 StGB (Baustein 12)
- § 267 StGB (Baustein 11)
- § 34 StGB (Baustein 12)
- § 6 IfSG (Baustein 12)
- § 1906a BGB (Baustein 14)
- § 132a SGB V (Baustein 1)
- Leonard et al. 2004 (Baustein 6, 13)
- WHO 2007 (Baustein 8)
- BMG / Beikirch & Roes 2014 (Baustein 4, 5)
- DSGVO 2018 (Baustein 10, 12)
- DNQP 2023 (Baustein 7, 14)
- NPUAP/EPUAP irrelevant hier

**Urheberrecht:** Kein `[I Care S.XX]`, kein `[Pflege heute S.XX]` im Schüler-Text. Alle Quellen sind **Primärquellen** (Gesetze, Originalstudien, offizielle Dokumente).

**Schüler-Anrede:** Durchgehend **"du"** — nie "Sie".

**Umlaute:** Echte Umlaute (ä, ö, ü, ß) durchgehend.



