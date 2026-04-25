# Wissensbausteine: Gesundheitskommunikation und Patientenberatung

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `patientenberatung` |
| ceId | `ce-04` |
| cluster | B (Gesundheitsförderung in der Praxis) |
| wissensart | handlung |
| kompetenzbereich | II.2 |
| geschaetzteUE | 13 |
| zielzeitMin | 322 (13 UE × 45 × 0,55) |
| bausteineAnzahl | 21 |
| voraussetzungen | `gesundheitsfoerderung-patienten` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 |

**Bloom-Verteilung:** B1-B2 = 5 (24%), B3-B4 = 11 (52%), B5-B6 = 5 (24%)

**Primärquellen:**
- Miller W.R./Rollnick S. (2023): Motivational Interviewing — Helping People Change and Grow (4. Aufl.)
- Elwyn G. et al. (2012): Shared Decision Making — A Model for Clinical Practice. J Gen Intern Med 27(10):1361-1367
- Sørensen K. et al. (2015): Health literacy in Europe — HLS-EU Consortium, European Journal of Public Health 25(6)
- Schaeffer D. et al. (2021): HLS-GER 2 — Gesundheitskompetenz der Bevölkerung in Deutschland
- § 20a SGB V (Primärprävention und Gesundheitsförderung in Lebenswelten)
- § 37a SGB XI (Pflegeberatung durch Pflegekassen)
- Digitale-Gesundheitsanwendungen-Verordnung (DiGAV 2020)
- Digitale-Versorgung-Gesetz (DVG 2019)
- Nationales Gesundheitsziel "Gesundheitskompetenz der Bevölkerung stärken" (2018)

---

## Baustein 1: information-beratung-schulung

### Metadaten
- **bausteinId:** patientenberatung-formate-unterschied
- **bloomLevel:** 2
- **wissensart:** definition
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient bekommt einen Flyer zu Diabetes in die Hand gedrückt. Ist das Information, Beratung oder Schulung? Begründe."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "Drei unterschiedliche Formate der Gesundheitskommunikation: **Information** = einseitige Weitergabe von Fakten (Flyer, Aushang). **Beratung** = dialogisch, individuell, entscheidungsorientiert. **Schulung** = strukturiert, wiederholbar, Kompetenzaufbau (z.B. Diabetes-Schulung nach DMP)."

**B1 (270 Zeichen):** "Drei verschiedene Dinge: **Information** heißt: Fakten weitergeben, zum Beispiel mit einem Flyer. **Beratung** heißt: Ein Gespräch zu zweit, individuell, hilft bei einer Entscheidung. **Schulung** heißt: Ein fester Kurs, der Fähigkeiten aufbaut — wie eine Diabetes-Schulung."

- **Step-Typ:** text (displayFormat: comparison — 3-Spalten-Vergleich)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Drei Formate der Gesundheitskommunikation, die in der Praxis oft verwechselt werden:

**Information** — einseitige Weitergabe von Fakten. Kein Dialog, keine Bewertung der Verstehensleistung. Medien: Flyer, Webseite, Aushang, Beipackzettel. Beispiel: Hygienemerkblatt an der Stationstür.

**Beratung** — dialogischer Prozess, individuell zugeschnitten, immer **entscheidungsorientiert**. Die beratene Person bleibt Entscheiderin. Setting: Einzelgespräch, 15-45 Minuten. Rechtlicher Rahmen in der Pflege: Pflegeberatung nach § 37a SGB XI.

**Schulung (Patientenedukation)** — strukturiertes, wiederholbares Programm mit Lernzielen und Kompetenz-Aufbau. Häufig Gruppenformat. Beispiel: Diabetes-Schulung nach Disease-Management-Programm (DMP), strukturierte Anleitung zur Selbstinjektion.

**Merksatz:** Information geht in eine Richtung, Beratung ist ein Dialog, Schulung baut Fähigkeiten auf. (§ 37a SGB XI)"

**B1 (650 Zeichen):**
"Drei Formate, die oft verwechselt werden:

**Information** — Fakten weitergeben, in eine Richtung. Kein Gespräch. Beispiele: Flyer, Aushang, Beipackzettel. Zum Beispiel: Hygiene-Plakat an der Tür.

**Beratung** — ein Gespräch zu zweit. Hilft bei einer Entscheidung. Die Person entscheidet selbst. Dauer: 15-45 Minuten. Gesetzliche Grundlage: § 37a SGB XI — Pflegeberatung.

**Schulung** — ein fester Kurs mit Lernzielen. Baut Fähigkeiten auf. Oft in Gruppen. Beispiel: Diabetes-Schulung. Die Leute lernen, sich selbst Insulin zu spritzen.

**Merkhilfe:** Information = eine Richtung. Beratung = Dialog. Schulung = Fähigkeiten aufbauen."

- **Erklärungs-Step:** stepType `comparison` (3 Spalten: Information, Beratung, Schulung)
- **Glossar-Begriffe:** [Gesundheitsberatung, Patientenedukation, DMP, Pflegeberatung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Beratung und Information sind im Grunde dasselbe"**
- **Fachbegriff:** Begriffs-Konfundierung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — der Kern-Unterschied liegt in der **Richtung**: Information ist einseitig (du gibst Fakten weiter), Beratung ist **dialogisch** (du hörst zu, fragst nach, richtest dich nach dem Gegenüber). Ein Flyer ist Information. Ein 20-Minuten-Gespräch über die Flyer-Inhalte ist Beratung. Merke: Dialog macht den Unterschied."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — der Unterschied ist: **Information** geht nur in eine Richtung. Du gibst Fakten weiter. **Beratung** ist ein **Gespräch**. Du hörst zu, fragst nach, gehst auf die Person ein. Ein Flyer = Information. Ein Gespräch über den Flyer = Beratung. Merke: Beratung ist Dialog."

**D2: "Patientenschulung darf nur von Ärzten durchgeführt werden"**
- **Fachbegriff:** Zuständigkeits-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — Patientenschulung gehört ausdrücklich zu den Vorbehaltsaufgaben der Pflegefachperson (§ 4 PflBG) und kann durch entsprechend qualifizierte Pflegende, Diabetesberater/innen, Physiotherapeut/innen u.a. durchgeführt werden. Ärzte sind an vielen Schulungen beteiligt — aber nicht exklusiv zuständig. Merke: Schulung ist multiprofessionell."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — Schulung machen auch Pflegefachpersonen. Im Pflegeberufegesetz (§ 4 PflBG) steht: Beratung und Schulung sind Aufgabe der Pflege. Ärzte sind oft dabei, aber nicht allein zuständig. Auch Diabetes-Beraterinnen und Physiotherapeuten schulen. Merke: Viele Berufe können schulen."

**D3: "Ein Aushang im Flur ist eine Form der Beratung"**
- **Fachbegriff:** Medium-Fehlattribution
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — ein Aushang ist **Information**, keine Beratung. Beratung braucht zwei Merkmale: **Dialog** (Rückfragen möglich) und **Individualisierung** (auf die konkrete Person zugeschnitten). Ein Aushang erfüllt beides nicht. Er ist ein wichtiges Medium — aber eben nicht Beratung. Merke: Kein Dialog, keine Beratung."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — ein Aushang ist **Information**. Für Beratung brauchst du zwei Dinge: ein **Gespräch** (mit Rückfragen) und etwas **Persönliches** (passt zu der einen Person). Ein Aushang kann das nicht. Er ist wichtig, aber nicht Beratung. Merke: Ohne Gespräch keine Beratung."

### Richtig-Feedback
**C1 (280 Zeichen):** "Sehr gut erkannt. Ein Flyer ist **Information** — einseitig, keine Individualisierung. Beratung wäre: 15-30 Minuten Gespräch, in dem du fragst, zuhörst, auf die konkrete Situation eingehst. Schulung wäre: strukturierter Kurs mit Lernzielen. Die drei Formate ergänzen sich, ersetzen sich aber nicht."

**B1 (245 Zeichen):** "Sehr gut. Ein Flyer ist **Information** — er gibt Fakten weiter, in eine Richtung. Für **Beratung** bräuchtest du ein Gespräch. Für eine **Schulung** einen festen Kurs mit Lernzielen. Drei Formate, drei Zwecke. Sie gehören zusammen, sind aber nicht dasselbe."

### Verknüpfte Karteikarte
- **Vorderseite:** "Worin unterscheiden sich Information, Beratung und Schulung?"
- **Rückseite:** "Information = einseitig, Fakten (Flyer). Beratung = Dialog, individuell, entscheidungsorientiert (§ 37a SGB XI). Schulung = strukturiert, Kompetenzaufbau (z.B. DMP)."
- **Kategorie:** fachbegriff

---

## Baustein 2: kommunikationsziele-beratung

### Metadaten
- **bausteinId:** patientenberatung-ziele
- **bloomLevel:** 2
- **wissensart:** konzept
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Was willst du eigentlich erreichen, wenn du einen Patienten berätst? Nenne 3 Ziele — in Stichworten."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (265 Zeichen):** "Beratung verfolgt vier Hauptziele: **Informieren** (Wissen vermitteln), **Entscheidungen unterstützen** (Optionen zeigen), **Handlungsfähigkeit stärken** (Empowerment) und **Selbstwirksamkeit fördern**. Nicht Ziel: Den Patienten überreden oder für ihn entscheiden."

**B1 (245 Zeichen):** "Beratung hat vier Ziele: **Informieren** (Wissen geben), **bei Entscheidungen helfen** (Möglichkeiten zeigen), **handlungsfähig machen** (Patient kann selbst handeln), **Selbstvertrauen stärken**. Nicht das Ziel: überreden oder für den Patienten entscheiden."

- **Step-Typ:** text (displayFormat: checklist — 4 Ziele + 1 Negativliste)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Beratung in der Pflege verfolgt vier aufeinander aufbauende Ziele:

1. **Informieren** — Wissen zur Situation, Erkrankung oder Versorgungsoption zugänglich machen.

2. **Entscheidungsfindung unterstützen** — Optionen mit Vor- und Nachteilen transparent darstellen. Die Entscheidung bleibt beim Patienten.

3. **Handlungsfähigkeit stärken (Empowerment)** — Der Patient erhält Werkzeuge, um selbst aktiv zu werden. Beispiel: Pflegeperson zeigt, wie Angehörige den Verbandwechsel zu Hause übernehmen können.

4. **Selbstwirksamkeit fördern** — Vertrauen in die eigene Handlungskompetenz aufbauen. Kleine Erfolge sichtbar machen ('Das haben Sie gut hinbekommen').

**Kein Ziel der Beratung:** Überreden, Entmündigen, Stellvertreter-Entscheidung treffen. Wer berät, bleibt Begleiter — nicht Entscheider. (§ 37a SGB XI)"

**B1 (640 Zeichen):**
"Beratung hat vier Ziele. Sie bauen aufeinander auf:

1. **Informieren** — Wissen geben, das der Patient für seine Situation braucht.

2. **Bei Entscheidungen helfen** — Du zeigst die Möglichkeiten. Der Patient entscheidet selbst.

3. **Handlungsfähig machen (Empowerment)** — Der Patient bekommt Werkzeuge, damit er selbst handeln kann. Zum Beispiel: Du zeigst, wie Angehörige den Verband wechseln.

4. **Selbstvertrauen stärken** — Der Patient soll sich zutrauen, selbst zu handeln. Zum Beispiel: 'Das haben Sie gut gemacht.'

**Kein Ziel:** Überreden. Für den Patienten entscheiden. Bestimmen, was er tun muss."

- **Erklärungs-Step:** stepType `reveal` (4 Ziele schrittweise)
- **Glossar-Begriffe:** [Empowerment, Selbstwirksamkeit, Entscheidungsfindung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ziel der Beratung ist, dass der Patient tut, was die Fachkraft für richtig hält"**
- **Fachbegriff:** Paternalismus
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — das wäre **Paternalismus**, nicht Beratung. In der modernen Pflegeberatung ist die Selbstbestimmung des Patienten zentral (§ 1 PflBG — 'Würde und Selbstbestimmung'). Deine Rolle: Optionen transparent machen, Wissen vermitteln, Rückfragen. Nicht: Die Entscheidung vorweg treffen. Merke: Du berätst — er entscheidet."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — das wäre **Bestimmen**, nicht Beratung. In der Pflege ist die **Selbstbestimmung** des Patienten wichtig (§ 1 PflBG). Deine Aufgabe: Möglichkeiten zeigen und erklären. Der Patient entscheidet selbst. Merke: Du berätst. Der Patient entscheidet."

**D2: "Die Beratung ist nach der reinen Wissensvermittlung abgeschlossen"**
- **Fachbegriff:** Informations-Reduktion
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — Wissensvermittlung ist nur **Ziel Nummer 1 von 4**. Die anderen drei — Entscheidungshilfe, Empowerment, Selbstwirksamkeit — gehen deutlich darüber hinaus. Wer nur informiert, hat den Patienten nicht beraten, sondern nur einen Vortrag gehalten. Merke: Information ist der Anfang, nicht das Ende."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — Wissen weitergeben ist nur **das erste Ziel** von vier. Danach kommt: bei der Entscheidung helfen, handlungsfähig machen und Selbstvertrauen stärken. Wer nur informiert, hat nur geredet — nicht beraten. Merke: Information ist nur der erste Schritt."

**D3: "Erfolgreiche Beratung misst sich daran, ob der Patient tut, was empfohlen wurde"**
- **Fachbegriff:** Compliance-Irrtum
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — das wäre reine **Compliance-Messung**. Erfolgreiche Beratung misst sich an der **informierten Entscheidung** des Patienten: Hat er alle relevanten Informationen bekommen? Hat er verstanden? Konnte er frei wählen? Die Entscheidung selbst — auch gegen die Empfehlung — ist sein Recht (Patientenrechte). Merke: Erfolg = verstandene Wahl, nicht Gehorsam."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — das wäre reine **Folgsamkeit**. Beratung ist erfolgreich, wenn der Patient **gut informiert** ist und **frei entscheidet**. Hat er alles verstanden? Konnte er selbst wählen? Auch wenn er sich gegen deine Empfehlung entscheidet — das ist sein Recht. Merke: Erfolg heißt: verstanden und frei gewählt."

### Richtig-Feedback
**C1 (270 Zeichen):** "Sehr gut. Beratung hat vier Ziele: Informieren, Entscheidungsfindung unterstützen, Handlungsfähigkeit stärken (Empowerment), Selbstwirksamkeit fördern. Kein Ziel ist Überzeugen oder Entscheiden-Statt. Die Selbstbestimmung bleibt beim Patienten (§ 1 PflBG, § 37a SGB XI)."

**B1 (240 Zeichen):** "Sehr gut. Beratung hat vier Ziele: Informieren, bei Entscheidungen helfen, handlungsfähig machen (Empowerment), Selbstvertrauen stärken. Kein Ziel ist: überreden oder für jemanden entscheiden. Der Patient entscheidet immer selbst."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 4 Ziele hat eine Beratung in der Pflege?"
- **Rückseite:** "(1) Informieren, (2) Entscheidungsfindung unterstützen, (3) Handlungsfähigkeit stärken (Empowerment), (4) Selbstwirksamkeit fördern."
- **Kategorie:** fakt

---

## Baustein 3: partizipative-beratung

### Metadaten
- **bausteinId:** patientenberatung-sdm-grundidee
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor: Ein Patient soll sich zwischen zwei Operationsverfahren entscheiden. Wer trifft die Entscheidung — der Arzt, der Patient, oder beide gemeinsam? Begründe."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "**Partizipative Entscheidungsfindung (Shared Decision Making, SDM)** bedeutet: Fachperson und Patient treffen medizinische Entscheidungen **gemeinsam**. Die Fachperson bringt Evidenz ein, der Patient seine Werte und Präferenzen. Beide sind Experten — für unterschiedliche Dinge."

**B1 (270 Zeichen):** "**Partizipative Beratung** (Shared Decision Making, SDM) heißt: Fachperson und Patient entscheiden **zusammen**. Die Fachperson weiß, was medizinisch möglich ist. Der Patient weiß, was für sein Leben wichtig ist. Beide sind Experten — jeder für etwas anderes."

- **Step-Typ:** text (displayFormat: procontra — Paternalismus vs. SDM)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"**Shared Decision Making (SDM)** — zu deutsch 'Partizipative Entscheidungsfindung' — ist ein Modell der Gesundheitskommunikation, das drei Ansätze ablöst:

- **Paternalistisch:** Fachperson entscheidet allein.
- **Informationsmodell:** Fachperson informiert, Patient entscheidet allein.
- **SDM:** Fachperson und Patient entscheiden **gemeinsam**.

**Kernidee:** Zwei Expertisen treffen sich. Die Fachperson ist Expertin für **Evidenz** (was ist medizinisch möglich, mit welchen Chancen und Risiken). Der Patient ist Experte für sein **Leben** (Werte, Ziele, Lebensumstände, Ängste).

**Voraussetzungen für SDM:**
- Zwei oder mehr gleichwertige Optionen existieren (andernfalls gibt es nichts zu entscheiden).
- Beide Seiten tauschen Informationen aus.
- Beide bringen eine Präferenz ein.
- Die Entscheidung wird bewusst gemeinsam getroffen.

**Einsatzbereiche:** Chronische Erkrankungen, Operationen mit Alternativen, Therapieoptionen, Impfentscheidungen. (Elwyn SDM, 2012)"

**B1 (650 Zeichen):**
"**Shared Decision Making (SDM)** heißt auf Deutsch 'Partizipative Entscheidungsfindung'. Es ersetzt zwei alte Modelle:

- **Alt 1 (paternalistisch):** Die Fachperson entscheidet allein.
- **Alt 2 (Information):** Die Fachperson informiert. Der Patient entscheidet allein.
- **Neu (SDM):** Beide entscheiden **zusammen**.

**Die Kernidee:** Zwei Experten treffen sich. Die Fachperson ist Expertin für **Medizin** (was ist möglich, mit welchen Chancen und Risiken). Der Patient ist Experte für **sein Leben** (was ist ihm wichtig, welche Ängste, welche Ziele).

**Was braucht SDM?**
- Mehrere Möglichkeiten zur Auswahl
- Beide Seiten tauschen Informationen aus
- Beide sagen, was sie bevorzugen
- Beide entscheiden zusammen

**Wann?** Bei chronischen Krankheiten, Operationen mit Alternativen, Impfungen."

- **Erklärungs-Step:** stepType `comparison` (Paternalistisch / Information / SDM)
- **Glossar-Begriffe:** [SDM, Partizipation, Evidenz, Präferenz]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "SDM bedeutet, dass die Fachperson am Ende sagt, was sie für richtig hält"**
- **Fachbegriff:** Pseudo-Partizipation
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — das wäre **Pseudo-Partizipation**. Echtes SDM heißt: Beide Seiten bringen ihre Expertise ein und entscheiden **gemeinsam**. Am Ende gibt es **eine** Entscheidung, die beide tragen. Wenn die Fachperson am Ende doch allein entscheidet, ist es kein SDM, sondern **paternalistisch verpackt**. Merke: Gemeinsam heißt gemeinsam."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — das wäre **Schein-Beteiligung**. Echtes SDM heißt: Beide entscheiden **zusammen**. Am Ende gibt es **eine** Entscheidung, die beide mittragen. Wenn die Fachperson am Ende allein entscheidet, ist es kein SDM. Merke: Gemeinsam heißt gemeinsam."

**D2: "SDM ist nur bei schweren Diagnosen sinnvoll"**
- **Fachbegriff:** Kontext-Verengung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — SDM ist **immer dann** sinnvoll, wenn zwei oder mehr gleichwertige Optionen bestehen. Das gilt bei schweren Diagnosen genauso wie bei scheinbar 'kleinen' Fragen — Verbandmaterial, Inkontinenzversorgung, Ernährungsform bei PEG-Sonde. Wo es eine Wahl gibt, passt SDM. Merke: SDM = Wahl-Situationen, nicht Schweregrad."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — SDM passt **immer**, wenn es mehr als eine Möglichkeit gibt. Auch bei 'kleinen' Fragen: Welcher Verband? Welche Sonde? Welche Ernährung? Wenn es eine Wahl gibt, passt SDM. Merke: SDM ist für alle Wahl-Fragen, nicht nur für schwere Diagnosen."

**D3: "Beim SDM muss der Patient alle medizinischen Studien kennen und verstehen"**
- **Fachbegriff:** Überforderungs-Irrtum
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — SDM verlangt **nicht**, dass der Patient zum Medizin-Profi wird. Die Fachperson hat die Aufgabe, Evidenz **verständlich aufzubereiten** — mit Entscheidungshilfen, Zahlen in natürlichen Häufigkeiten (nicht Prozent), visuellen Darstellungen. Der Patient bringt Werte ein, die Fachperson die Daten. Merke: Aufbereitung ist Pflicht der Fachperson."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — der Patient muss **nicht** alle Studien kennen. Die Fachperson muss die Informationen **einfach erklären** — mit Bildern, mit Zahlen in einfacher Form (nicht Prozent). Der Patient sagt, was ihm wichtig ist. Die Fachperson bringt die Daten. Merke: Aufbereitung ist Aufgabe der Fachperson."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. SDM (Shared Decision Making) heißt: Fachperson und Patient treffen die Entscheidung **gemeinsam**. Die Fachperson bringt Evidenz ein, der Patient seine Werte und Lebensumstände. Zwei Expertisen, eine gemeinsame Entscheidung. Voraussetzung: Mehr als eine Option. (Elwyn SDM, 2012)"

**B1 (250 Zeichen):** "Sehr gut. SDM heißt: Fachperson und Patient entscheiden **zusammen**. Die Fachperson weiß, was medizinisch möglich ist. Der Patient weiß, was ihm wichtig ist. Beide zusammen treffen die Entscheidung. Voraussetzung: Es gibt mehr als eine Möglichkeit."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Shared Decision Making (SDM)?"
- **Rückseite:** "Partizipative Entscheidungsfindung. Fachperson und Patient treffen medizinische Entscheidung gemeinsam. Fachperson bringt Evidenz, Patient seine Werte/Präferenzen (Elwyn 2012)."
- **Kategorie:** fachbegriff

---

## Baustein 4: sdm-3-talk-modell

### Metadaten
- **bausteinId:** patientenberatung-sdm-3talk
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn du ein Beratungsgespräch nach SDM strukturieren sollst — in welche Phasen würdest du es unterteilen? Skizziere einen Ablauf."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "Elwyn et al. (2012) beschreiben ein **3-Talk-Modell** für SDM: **Team Talk** (Entscheidung gemeinsam angehen, Optionen benennen), **Option Talk** (Optionen erklären, Chancen und Risiken), **Decision Talk** (Präferenzen erfragen, gemeinsam entscheiden)."

**B1 (265 Zeichen):** "Elwyn und Kollegen (2012) beschreiben drei Schritte im Beratungsgespräch: **Team Talk** (zusammen starten, Optionen nennen), **Option Talk** (Möglichkeiten erklären, Chancen und Risiken), **Decision Talk** (fragen, was wichtig ist, zusammen entscheiden)."

- **Step-Typ:** text (displayFormat: stepbystep — 3 Phasen)

### Stufe 3 — Erklärung

**C1 (800 Zeichen):**
"Elwyn und Kollegen veröffentlichten 2012 ein praxisnahes Modell zur Umsetzung von SDM im Gespräch. Drei Phasen:

**1. Team Talk (Team-Phase)** — Einleitung des SDM-Gesprächs.
- Signalisieren: 'Hier gibt es eine Wahl, und ich möchte sie mit Ihnen zusammen treffen.'
- Rollen klarstellen: 'Sie sind Experte für Ihr Leben, ich für die Medizin.'
- Unterstützung anbieten: 'Wir überlegen gemeinsam.'

**2. Option Talk (Optionen-Phase)** — Alternativen transparent darstellen.
- Alle relevanten Optionen nennen, inklusive 'Keine Behandlung'.
- Chancen und Risiken **ausgewogen** darstellen, in natürlichen Häufigkeiten ('15 von 100', nicht nur '15%').
- Entscheidungshilfen (Decision Aids) einsetzen — Broschüren, Videos, visuelle Darstellungen.
- Verständnis prüfen (Teach-Back).

**3. Decision Talk (Entscheidungs-Phase)** — Präferenzen klären und Entscheidung treffen.
- Nach Werten und Prioritäten fragen: 'Was ist Ihnen wichtig?'
- Entscheidung gemeinsam treffen — ggf. Zeit geben für Bedenkzeit.
- Entscheidung dokumentieren.

(Elwyn SDM, 2012 — J Gen Intern Med)"

**B1 (700 Zeichen):**
"Elwyn und sein Team haben 2012 ein Modell mit **3 Schritten** für die Beratung veröffentlicht:

**Schritt 1 — Team Talk (Team-Phase):** Zusammen starten.
- Sagen: 'Hier haben wir eine Wahl. Ich möchte sie mit Ihnen zusammen treffen.'
- Rollen klären: 'Sie kennen Ihr Leben. Ich kenne die Medizin.'
- Hilfe anbieten: 'Wir überlegen gemeinsam.'

**Schritt 2 — Option Talk (Möglichkeiten-Phase):** Alle Wege zeigen.
- Alle Möglichkeiten nennen — auch 'nichts tun'.
- Chancen und Risiken **fair** zeigen: '15 von 100', nicht nur '15%'.
- Hilfsmittel nutzen: Broschüren, Videos, Bilder.
- Nachfragen: 'Habe ich das gut erklärt?' (Teach-Back).

**Schritt 3 — Decision Talk (Entscheidungs-Phase):** Wählen und entscheiden.
- Fragen: 'Was ist Ihnen wichtig?'
- Gemeinsam entscheiden. Zeit geben, wenn nötig.
- Entscheidung aufschreiben.

(Elwyn SDM, 2012)"

- **Erklärungs-Step:** stepType `stepbystep` (3 Talk-Phasen mit Beispielsätzen)
- **Glossar-Begriffe:** [Team Talk, Option Talk, Decision Talk, Decision Aid, natürliche Häufigkeit]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Reihenfolge im SDM-3-Talk ist flexibel — man kann beliebig anfangen"**
- **Fachbegriff:** Ablauf-Willkür
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — die Reihenfolge **Team → Option → Decision** hat einen didaktischen Grund: Erst Rahmen schaffen, dann Inhalte transportieren, dann entscheiden. Wer mit Optionen startet, ohne den Rahmen zu klären, überfordert. Wer vor Option Talk zum Decision Talk springt, hat keine Basis. Merke: Reihenfolge ist kein Zufall."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — die Reihenfolge **Team → Option → Decision** ist wichtig. Erst klären: Wie arbeiten wir zusammen? Dann: Welche Möglichkeiten gibt es? Zum Schluss: Was entscheiden wir? Wer die Reihenfolge ändert, überfordert den Patienten. Merke: Reihenfolge ist kein Zufall."

**D2: "Im Option Talk nennt man nur die Option, die man selbst empfiehlt"**
- **Fachbegriff:** Selektive Optionen
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **alle relevanten Optionen** müssen genannt werden, inklusive 'keine Behandlung'. Nur dann kann der Patient frei wählen. Eine Vorauswahl durch die Fachperson ist versteckter Paternalismus. Die fachliche Empfehlung darf später geäußert werden — aber nicht durch Weglassen von Alternativen. Merke: Alle Optionen, keine Vorauswahl."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — du musst **alle Möglichkeiten** nennen. Auch 'nichts tun'. Nur dann kann der Patient frei wählen. Wenn du nur eine Option zeigst, bestimmst du versteckt. Deine Empfehlung kannst du später sagen — aber nie durch Weglassen. Merke: Alle Möglichkeiten, keine Vorauswahl."

**D3: "Decision Talk bedeutet, dass der Patient sofort entscheiden muss"**
- **Fachbegriff:** Zeitdruck-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — Decision Talk heißt nicht 'jetzt-sofort'. Gute Entscheidungen brauchen oft Bedenkzeit. 'Möchten Sie darüber noch mit Ihrer Familie sprechen?' ist eine typische Decision-Talk-Frage. Nur wenn es medizinisch eilig ist, wird die Entscheidung direkt getroffen. Merke: Zeit geben ist Teil von SDM."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — Decision Talk heißt nicht 'jetzt-sofort entscheiden'. Gute Entscheidungen brauchen oft Zeit. 'Möchten Sie mit Ihrer Familie darüber sprechen?' — das ist eine gute Frage. Nur bei Notfall muss es schnell gehen. Merke: Zeit geben gehört zur Beratung."

### Richtig-Feedback
**C1 (310 Zeichen):** "Sehr gut strukturiert. Das 3-Talk-Modell nach Elwyn (2012): **Team Talk** (Rahmen, Rollen, Unterstützung), **Option Talk** (alle Alternativen, Chancen/Risiken, Decision Aids, Teach-Back), **Decision Talk** (Präferenzen klären, gemeinsam entscheiden, Bedenkzeit geben). Praxiserprobt und wirksam (Elwyn SDM, 2012)."

**B1 (265 Zeichen):** "Sehr gut strukturiert. Das 3-Schritte-Modell nach Elwyn (2012): **Team Talk** (zusammen starten), **Option Talk** (alle Möglichkeiten zeigen), **Decision Talk** (Präferenzen klären, zusammen entscheiden, Zeit geben). Praktisch erprobt und hilft in echten Gesprächen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was sind die 3 Phasen des SDM-3-Talk-Modells (Elwyn 2012)?"
- **Rückseite:** "Team Talk (Rahmen setzen), Option Talk (Alternativen mit Chancen/Risiken), Decision Talk (Präferenzen, gemeinsame Entscheidung)."
- **Kategorie:** handlung

---

## Baustein 5: health-literacy-definition

### Metadaten
- **bausteinId:** patientenberatung-health-literacy
- **bloomLevel:** 1
- **wissensart:** definition
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Was bedeutet 'Gesundheitskompetenz'? Beschreibe den Begriff in eigenen Worten."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "**Gesundheitskompetenz (Health Literacy)** beschreibt die Fähigkeit, Gesundheitsinformationen **finden**, **verstehen**, **beurteilen** und **anwenden** zu können — um im Alltag gute Entscheidungen für die eigene Gesundheit zu treffen (Sørensen HLS-EU, 2015)."

**B1 (260 Zeichen):** "**Gesundheitskompetenz (Health Literacy)** heißt: Man kann Gesundheits-Informationen **finden**, **verstehen**, **bewerten** und **anwenden**. Also: Man versteht, was gesund ist — und kann damit im Alltag gute Entscheidungen treffen (Sørensen HLS-EU, 2015)."

- **Step-Typ:** text (displayFormat: quote — HLS-EU-Definition als Zitat)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"**Gesundheitskompetenz (Health Literacy)** ist ein Schlüsselbegriff in der Gesundheitsförderung. Die etablierte europäische Definition (HLS-EU-Konsortium) lautet:

> 'Gesundheitskompetenz basiert auf allgemeiner Literalität und umfasst das Wissen, die Motivation und die Kompetenzen, sich Gesundheitsinformationen zu beschaffen, sie zu verstehen, zu beurteilen und anzuwenden.'

**Vier Kernkompetenzen (HLS-EU-Modell):**
1. **Finden** — Zugang zu Gesundheitsinformationen (z.B. Beipackzettel lesen, Arztbesuch verstehen, Internetquellen finden).
2. **Verstehen** — Informationen entschlüsseln (Fachbegriffe, Statistiken).
3. **Beurteilen** — Informationen bewerten (verlässliche vs. unseriöse Quelle).
4. **Anwenden** — Informationen umsetzen (Medikament korrekt einnehmen, Lebensstil ändern).

**Drei Anwendungsfelder:** Gesundheitsversorgung (Krankheit), Prävention, Gesundheitsförderung im Alltag. (Sørensen HLS-EU, 2015)"

**B1 (620 Zeichen):**
"**Gesundheitskompetenz (Health Literacy)** ist ein wichtiger Begriff. Die Definition aus Europa (HLS-EU) sagt:

> 'Gesundheitskompetenz heißt: Das Wissen, die Motivation und die Fähigkeit, Gesundheitsinformationen **zu finden**, **zu verstehen**, **zu beurteilen** und **anzuwenden**.'

**Die 4 Kern-Fähigkeiten:**
1. **Finden** — Wo gibt es Informationen? (Beipackzettel, Arzt, Internet)
2. **Verstehen** — Was bedeutet das? (Fachwörter, Zahlen)
3. **Beurteilen** — Stimmt das? (gute Quelle oder nicht?)
4. **Anwenden** — Was mache ich damit? (Tablette richtig nehmen, Lebensstil ändern)

**Drei Bereiche:** Krankheit, Vorbeugung, Gesundheit im Alltag. (Sørensen HLS-EU, 2015)"

- **Erklärungs-Step:** stepType `diagram` (HLS-EU-Modell: 4×3-Matrix)
- **Glossar-Begriffe:** [Health Literacy, Gesundheitskompetenz, HLS-EU, Literalität]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Gesundheitskompetenz bedeutet einfach: Lesen und Schreiben können"**
- **Fachbegriff:** Literalitäts-Reduktion
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — Lesen und Schreiben sind zwar die **Basis** (allgemeine Literalität), aber Gesundheitskompetenz geht deutlich weiter: Informationen **verstehen**, **beurteilen** und **anwenden** gehören dazu. Ein Mensch kann perfekt lesen und trotzdem nicht erkennen, ob eine Quelle verlässlich ist. Merke: Mehr als Lesen und Schreiben."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — Lesen und Schreiben ist nur die **Grundlage**. Gesundheitskompetenz ist mehr: Informationen **verstehen**, **bewerten** und **anwenden**. Jemand kann gut lesen, aber nicht wissen, ob eine Internet-Seite stimmt. Merke: Mehr als nur Lesen und Schreiben."

**D2: "Gesundheitskompetenz ist angeboren — man hat sie oder nicht"**
- **Fachbegriff:** Statik-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — Gesundheitskompetenz ist **erlernbar und veränderbar**. Sie entwickelt sich durch Bildung, Erfahrung, Alter und soziales Umfeld. Auch Erwachsene können Gesundheitskompetenz aufbauen — etwa durch Schulungen, Beratung, verständliche Informationsmaterialien. Merke: Gesundheitskompetenz ist trainierbar."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — Gesundheitskompetenz kann man **lernen und verbessern**. Sie wächst durch Bildung, Erfahrungen und Alter. Auch Erwachsene können sie aufbauen — durch Schulungen, Beratung, einfache Informationen. Merke: Gesundheitskompetenz ist lernbar."

**D3: "Gesundheitskompetenz ist ein rein individuelles Problem"**
- **Fachbegriff:** Verantwortungs-Privatisierung
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — Gesundheitskompetenz ist **sowohl** individuell als auch **gesellschaftlich**. Wie verständlich sind Beipackzettel, Arztbriefe, Krankenkassen-Briefe? Das ist keine Schuld des Patienten, sondern Aufgabe des Systems. Nationales Gesundheitsziel 2018: 'Gesundheitskompetenz der Bevölkerung stärken'. Merke: Individuum UND System."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — Gesundheitskompetenz ist **beides**: persönlich und gesellschaftlich. Sind Beipackzettel und Arztbriefe einfach geschrieben? Das ist Aufgabe vom Gesundheitssystem, nicht Schuld vom Patienten. Seit 2018: 'Gesundheitskompetenz stärken' ist ein nationales Ziel. Merke: Person UND System."

### Richtig-Feedback
**C1 (280 Zeichen):** "Sehr gut. Gesundheitskompetenz (Health Literacy) umfasst nach HLS-EU vier Fähigkeiten: **Finden, Verstehen, Beurteilen, Anwenden** von Gesundheitsinformationen. Anwendung in drei Feldern: Versorgung, Prävention, Alltag. Erlernbar, nicht angeboren. (Sørensen HLS-EU, 2015)"

**B1 (240 Zeichen):** "Sehr gut. Gesundheitskompetenz (Health Literacy) heißt: vier Fähigkeiten — **Finden, Verstehen, Beurteilen, Anwenden** von Gesundheits-Informationen. In drei Bereichen: Krankheit, Vorbeugung, Alltag. Kann man lernen. (Sørensen HLS-EU, 2015)"

### Verknüpfte Karteikarte
- **Vorderseite:** "Was umfasst Gesundheitskompetenz (Health Literacy) nach HLS-EU?"
- **Rückseite:** "4 Fähigkeiten: Gesundheitsinformationen finden, verstehen, beurteilen, anwenden. In 3 Feldern: Versorgung, Prävention, Alltag (Sørensen 2015)."
- **Kategorie:** fachbegriff

---

## Baustein 6: hls-eu-43-prozent

### Metadaten
- **bausteinId:** patientenberatung-hls-eu-zahlen
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Wie viele Menschen in Deutschland haben deiner Einschätzung nach Schwierigkeiten, Gesundheitsinformationen zu verstehen? Schätze einen Prozentwert."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "Die **HLS-EU-Studie** (Sørensen 2015) zeigte: Rund **43% der Deutschen** haben eine **begrenzte** Gesundheitskompetenz — sie haben Schwierigkeiten, Gesundheitsinformationen zu verstehen, zu beurteilen oder anzuwenden. In der HLS-GER-2-Studie (2021) stieg der Wert auf 58%."

**B1 (270 Zeichen):** "Die **HLS-EU-Studie** (Sørensen 2015) hat gezeigt: Rund **43% der Menschen in Deutschland** haben Probleme mit Gesundheits-Informationen. Sie verstehen Beipackzettel nicht, können Quellen schwer bewerten. In einer neueren Studie (HLS-GER 2, 2021) waren es sogar 58%."

- **Step-Typ:** text (displayFormat: news — Zahlen als Statistik)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"Die HLS-EU-Studie (Health Literacy Survey Europe, Sørensen und Kollegen 2015) war die erste große Untersuchung zur Gesundheitskompetenz in Europa. Befragt wurden ca. 8.000 Menschen in 8 Ländern.

**Ergebnis für Deutschland (2013 erhobene Daten):**
- **43% der Deutschen** haben eine **begrenzte** (eingeschränkte oder inadäquate) Gesundheitskompetenz.
- Etwa **1 von 2** Personen kann Gesundheitsinformationen nicht sicher verstehen, beurteilen oder anwenden.

**Update HLS-GER 2 (Schaeffer und Kollegen 2021):**
- Der Wert ist **gestiegen** — auf **58,8%** der deutschen Bevölkerung.
- Besonders betroffen: Menschen mit niedriger Bildung, chronisch Kranke, ältere Menschen, Menschen mit Migrationshintergrund.

**Warum wichtig für die Pflege?** Fast jeder zweite Patient hat Schwierigkeiten, Beipackzettel, Arztbriefe oder Aufklärungsbögen zu verstehen. Verständliche Kommunikation ist keine Freundlichkeit — sie ist fachliche Notwendigkeit.

(Sørensen HLS-EU, 2015; Schaeffer HLS-GER 2, 2021)"

**B1 (670 Zeichen):**
"Die HLS-EU-Studie von Sørensen und Kollegen (2015) war die erste große Studie zur Gesundheits-Kompetenz in Europa. Untersucht wurden rund 8.000 Menschen in 8 Ländern.

**Ergebnis für Deutschland (Daten von 2013):**
- **43% der Menschen in Deutschland** haben eine **begrenzte** Gesundheits-Kompetenz.
- Ungefähr **1 von 2** Personen versteht Gesundheits-Informationen nicht sicher.

**Neue Studie — HLS-GER 2 (Schaeffer 2021):**
- Der Wert ist **höher** — jetzt **58,8%** der Deutschen.
- Besonders betroffen: Menschen mit wenig Schulbildung, chronisch Kranke, alte Menschen, Menschen mit Migrationshintergrund.

**Was heißt das für die Pflege?** Fast jeder zweite Patient versteht Beipackzettel und Arztbriefe nicht richtig. Einfach sprechen ist kein Extra — es ist Pflicht.

(Sørensen HLS-EU, 2015; Schaeffer HLS-GER 2, 2021)"

- **Erklärungs-Step:** stepType `matrix` (HLS-EU vs. HLS-GER 2 Vergleich)
- **Glossar-Begriffe:** [HLS-EU, HLS-GER 2, begrenzte Gesundheitskompetenz]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Nur eine kleine Minderheit in Deutschland hat Probleme mit Gesundheitsinformationen"**
- **Fachbegriff:** Problem-Minimierung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die Zahlen zeigen das Gegenteil: **43%** (HLS-EU 2015) bzw. **58,8%** (HLS-GER 2, 2021) der Deutschen haben eine begrenzte Gesundheitskompetenz. Das ist eine **Mehrheit**, keine Minderheit. Deswegen ist einfache Sprache in der Pflege keine Ausnahme, sondern Standard. Merke: Mehrheit, nicht Minderheit."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — es ist die **Mehrheit**. **43%** (2015) und sogar **58,8%** (2021) der Menschen in Deutschland haben Probleme mit Gesundheits-Informationen. Das ist mehr als jeder Zweite. Deshalb ist einfache Sprache in der Pflege normal, nicht Extra. Merke: Mehrheit hat Probleme."

**D2: "Begrenzte Gesundheitskompetenz betrifft nur Menschen mit Migrationshintergrund"**
- **Fachbegriff:** Ethnisierung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — begrenzte Gesundheitskompetenz zieht sich **quer durch alle Bevölkerungsgruppen**. Zwar gibt es einen Zusammenhang mit Bildung und Migrationshintergrund, aber auch viele deutschstämmige, formal gebildete Menschen haben Schwierigkeiten mit Beipackzetteln oder Arztbriefen. Merke: Kein Migrations-Thema — ein Gesellschafts-Thema."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — das Problem betrifft **alle** Gruppen in der Gesellschaft. Ja, Menschen mit Migrationshintergrund sind oft betroffen. Aber auch viele Deutsche mit guter Schulbildung verstehen Beipackzettel und Arztbriefe schlecht. Merke: Problem für alle, nicht nur für Migranten."

**D3: "Gesundheitskompetenz hat sich in Deutschland in den letzten Jahren deutlich verbessert"**
- **Fachbegriff:** Fortschritts-Illusion
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — die Vergleichsdaten zeigen das **Gegenteil**: Von 43% (HLS-EU 2015) auf 58,8% (HLS-GER 2, 2021) ist der Anteil mit begrenzter Gesundheitskompetenz **gestiegen**, nicht gesunken. Gründe werden diskutiert: Informationsflut in digitalen Medien, Komplexität des Systems, Pandemie-Folgen. Merke: Das Problem wächst."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — die Zahlen sind **schlechter** geworden. Von 43% (2015) auf 58,8% (2021). Der Anteil von Menschen mit begrenzter Gesundheits-Kompetenz ist **gestiegen**. Gründe: zu viele Informationen im Internet, kompliziertes System, Folgen der Pandemie. Merke: Problem wächst."

### Richtig-Feedback
**C1 (310 Zeichen):** "Sehr gut. Die HLS-EU-Studie (Sørensen 2015) zeigte: **43% der Deutschen** haben begrenzte Gesundheitskompetenz. In der Folgestudie HLS-GER 2 (Schaeffer 2021) stieg der Wert auf **58,8%**. Das heißt: Einfache Sprache, Teach-Back und verständliche Materialien sind keine Option, sondern Pflicht."

**B1 (275 Zeichen):** "Sehr gut. Die Sørensen-Studie (2015) zeigte: **43% der Deutschen** haben Probleme mit Gesundheits-Informationen. 2021 waren es sogar **58,8%**. Das heißt: Einfache Sprache ist wichtig — für mehr als jeden Zweiten. Es ist keine Ausnahme, sondern Pflicht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie viele Menschen in Deutschland haben begrenzte Gesundheitskompetenz? (HLS-EU / HLS-GER 2)"
- **Rückseite:** "HLS-EU 2015: 43%. HLS-GER 2, 2021: 58,8%. Der Wert ist gestiegen — mehr als jeder Zweite."
- **Kategorie:** fakt

---

## Baustein 7: niedrige-hl-erkennen

### Metadaten
- **bausteinId:** patientenberatung-hl-signale
- **bloomLevel:** 3
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Woran würdest du im Gespräch merken, dass ein Patient deine Erklärungen nicht wirklich versteht, obwohl er nickt? Sammle 3 mögliche Zeichen."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (285 Zeichen):** "Typische Signale für eingeschränkte Gesundheitskompetenz: Formulare unausgefüllt bringen, ausweichende Antworten ('das macht meine Tochter'), häufiges Nicken ohne Rückfragen, vergessene Termine, falsche Medikamenteneinnahme, sozialer Rückzug bei komplexen Informationen."

**B1 (270 Zeichen):** "Typische Zeichen: Patient bringt Formulare unausgefüllt. Er antwortet ausweichend ('das macht meine Tochter'). Er nickt oft, fragt aber nie nach. Er vergisst Termine. Er nimmt Medikamente falsch ein. Er zieht sich zurück, wenn es kompliziert wird."

- **Step-Typ:** text (displayFormat: checklist — 6 Warnzeichen)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Patienten mit begrenzter Gesundheitskompetenz verhalten sich selten offen ('Ich verstehe das nicht'). Viele schämen sich. Typische indirekte Signale im Alltag:

**Verhaltens-Signale:**
- Formulare werden **unausgefüllt** mitgebracht ('Ich habe meine Brille vergessen').
- Antworten sind **ausweichend**: 'Das macht meine Tochter', 'Der Doktor weiß das'.
- **Übermäßiges Nicken** ohne Rückfragen — Verständnis wird signalisiert, aber nicht überprüft.
- **Termine werden vergessen** oder falsch eingetragen.
- **Medikamente** werden unregelmäßig oder in falscher Dosis genommen.

**Kognitive Signale:**
- Fachbegriffe werden **nicht aktiv verwendet**, nur passiv wiederholt.
- **Einfache Rückfragen zum Gesagten** können nicht beantwortet werden.

**Soziale Signale:**
- **Rückzug** bei komplexen Informationen (Kopf senken, Themenwechsel).
- Angehörige werden **vorgeschoben** ('erklären Sie es lieber meiner Frau').

**Was tun?** Nicht konfrontieren — sondern einfache Sprache, Teach-Back, wiederholen, visualisieren, schriftliche Kurz-Zusammenfassung. Scham reduzieren: 'Viele Menschen fragen mich nochmal nach — das ist normal.' (Sørensen HLS-EU, 2015)"

**B1 (680 Zeichen):**
"Patienten mit niedriger Gesundheits-Kompetenz sagen selten: 'Ich verstehe das nicht.' Viele schämen sich. Darum musst du die **Zeichen** kennen:

**Verhalten:**
- Formulare kommen **leer** zurück ('Ich habe meine Brille vergessen').
- Antworten sind **ausweichend**: 'Das macht meine Tochter.'
- Der Patient **nickt viel**, fragt aber nie nach.
- **Termine** werden vergessen.
- **Medikamente** werden falsch eingenommen.

**Sprache:**
- Fachwörter werden **nicht selbst** benutzt, nur passiv wiederholt.
- Auf einfache Rückfragen kommt **keine klare Antwort**.

**Körper und Gefühl:**
- **Rückzug** bei schwierigen Themen (Kopf runter, Themenwechsel).
- **Angehörige** sollen es erklären ('Sagen Sie es lieber meiner Frau').

**Was tun?** Nicht konfrontieren. Stattdessen: einfache Sprache, Teach-Back, wiederholen, Bilder zeigen, kurze Zusammenfassung schriftlich. Scham wegnehmen: 'Viele Menschen fragen nochmal nach — das ist normal.'"

- **Erklärungs-Step:** stepType `categorize` (Verhaltens- / Kognitive / Soziale Signale)
- **Glossar-Begriffe:** [Teach-Back, Scham, Coping-Strategien]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn ein Patient nickt, hat er verstanden"**
- **Fachbegriff:** Nick-Fehlschluss
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — Nicken ist oft ein **Höflichkeitssignal**, keine Verständniskontrolle. Menschen mit begrenzter Gesundheitskompetenz nicken besonders häufig, um nicht als 'dumm' zu gelten. Verständnis prüfst du nur mit **Teach-Back** ('Können Sie mir in Ihren Worten sagen, wie Sie die Tablette nehmen?'). Merke: Nicken ≠ Verstehen."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — Nicken heißt oft nur: 'Ich bin höflich.' Es bedeutet nicht: 'Ich habe verstanden.' Besonders Menschen mit wenig Gesundheits-Kompetenz nicken, weil sie sich nicht 'dumm' zeigen wollen. Du prüfst Verständnis mit **Teach-Back**. Merke: Nicken ist nicht Verstehen."

**D2: "Ein Patient mit Hochschulabschluss hat sicher hohe Gesundheitskompetenz"**
- **Fachbegriff:** Bildungs-Gleichsetzung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **Bildungsgrad** und **Gesundheitskompetenz** korrelieren zwar positiv, sind aber **nicht identisch**. Auch Akademiker/innen können bei medizinischen Statistiken, Beipackzetteln oder Ultraschallbefunden überfordert sein — vor allem bei eigener Betroffenheit (emotionaler Stress reduziert Kompetenz). Merke: Bildung hilft, reicht aber nicht."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **Hochschul-Abschluss** und **Gesundheits-Kompetenz** sind **nicht dasselbe**. Auch Akademiker können Beipackzettel und Statistiken schwer verstehen. Vor allem, wenn sie selbst krank sind — Stress macht das Verstehen schwerer. Merke: Hohe Bildung = oft gut, aber nicht immer."

**D3: "Die beste Reaktion ist, den Patienten direkt darauf anzusprechen: 'Sie verstehen das nicht, oder?'"**
- **Fachbegriff:** Scham-Auslösung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — diese direkte Konfrontation **verstärkt Scham** und kann den Patienten zum Rückzug bewegen. Bessere Vorgehensweise: **Normalisieren** ('Das ist kompliziert, viele fragen nach — kann ich es Ihnen nochmal erklären?') und **Teach-Back** ('Wie würden Sie das Ihrer Tochter erklären?'). Merke: Nicht konfrontieren — normalisieren."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — direkt zu fragen 'Sie verstehen das nicht, oder?' macht **Scham**. Der Patient zieht sich zurück. Besser: **Normalisieren** ('Das ist kompliziert, viele fragen nochmal — soll ich es nochmal erklären?') und **Teach-Back** ('Wie würden Sie das Ihrer Tochter erklären?'). Merke: Nicht konfrontieren."

### Richtig-Feedback
**C1 (300 Zeichen):** "Sehr gut beobachtet. Typische Signale: unausgefüllte Formulare, ausweichende Antworten, übermäßiges Nicken, vergessene Termine, falsche Medikamenteneinnahme, Rückzug bei Komplexität, vorgeschobene Angehörige. Antwort der Fachperson: nicht konfrontieren, sondern normalisieren und Teach-Back einsetzen."

**B1 (260 Zeichen):** "Sehr gut beobachtet. Typische Zeichen: leere Formulare, ausweichende Antworten, viel Nicken ohne Rückfragen, vergessene Termine, falsche Medikamente, Rückzug bei schwierigen Themen, Angehörige werden vorgeschoben. Deine Antwort: nicht konfrontieren — Teach-Back nutzen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Woran erkennst du eine begrenzte Gesundheitskompetenz bei Patienten?"
- **Rückseite:** "Leere Formulare, ausweichende Antworten ('das macht meine Tochter'), viel Nicken ohne Rückfragen, vergessene Termine, falsche Medikamenteneinnahme, Rückzug bei Komplexität."
- **Kategorie:** assessment

---

## Baustein 8: teach-back-methode

### Metadaten
- **bausteinId:** patientenberatung-teachback
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Du hast einem Patienten gerade erklärt, wie er seine neue Salbe aufträgt. Wie stellst du sicher, dass er es **wirklich** verstanden hat — ohne ihn zu beschämen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "Die **Teach-Back-Methode** prüft Verständnis durch Aktivität: Der Patient erklärt in **eigenen Worten**, was er verstanden hat. Wichtig: Die Last liegt bei der Fachperson, nicht beim Patienten ('Ich möchte sicher sein, dass ich es gut erklärt habe — wie würden Sie es jemandem weitersagen?')."

**B1 (270 Zeichen):** "Die **Teach-Back-Methode** prüft, ob der Patient verstanden hat. Wie? Der Patient erklärt es **selbst** in eigenen Worten. Wichtig: Die Verantwortung liegt bei dir, nicht beim Patienten. Du sagst: 'Ich will sicher sein, dass ich es gut erklärt habe. Wie würden Sie es weitersagen?'"

- **Step-Typ:** text (displayFormat: stepbystep — 4 Schritte Teach-Back)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"Die **Teach-Back-Methode** (auch: 'Show-Me-Method', 'Close-the-Loop') ist die wirksamste Methode, Verständnis in der Patientenberatung zu überprüfen. Belegt durch zahlreiche Studien — von der WHO und dem nationalen Aktionsplan Gesundheitskompetenz empfohlen.

**Vier Schritte:**

1. **Erklären** — in einfacher Sprache, klar, fokussiert (nicht mehr als 3 Kernpunkte).
2. **Verantwortung verschieben** — nicht fragen: 'Haben Sie das verstanden?' (führt fast immer zu 'Ja'). Stattdessen: 'Ich möchte sicher sein, dass **ich** es gut erklärt habe — wie würden Sie es Ihrer Tochter erklären?'
3. **Zuhören** — Patient erklärt in eigenen Worten. Pausen aushalten.
4. **Nachjustieren** — Lücken freundlich schließen. Nicht: 'Falsch.' Sondern: 'Fast — hier ergänze ich noch einen Punkt…' Dann: erneut Teach-Back.

**Wann einsetzen?** Nach jeder wichtigen Information: Medikamenteneinnahme, Verbandwechsel, Insulin-Injektion, Vorbereitungen für Untersuchungen.

**Häufiger Fehler:** 'Alles klar?' oder 'Haben Sie verstanden?' — das ist **kein** Teach-Back. Teach-Back fordert immer eine **aktive Antwort in eigenen Worten**."

**B1 (680 Zeichen):**
"Die **Teach-Back-Methode** (auch: 'Zeigen-Sie-mir-Methode') ist die beste Methode, um zu prüfen, ob ein Patient verstanden hat. Viele Studien belegen das. Die WHO empfiehlt sie.

**Vier Schritte:**

1. **Erklären** — einfach, klar, höchstens 3 Kernpunkte.
2. **Verantwortung verschieben** — Frage nicht 'Haben Sie das verstanden?' (die Antwort ist fast immer 'Ja'). Stattdessen: 'Ich will sicher sein, dass **ich** es gut erklärt habe. Wie würden Sie es Ihrer Tochter erklären?'
3. **Zuhören** — der Patient erklärt in eigenen Worten. Pausen sind okay.
4. **Korrigieren** — Lücken freundlich schließen. Nicht 'Falsch.' Sondern: 'Fast — ich ergänze noch einen Punkt.' Dann: nochmal Teach-Back.

**Wann?** Nach jeder wichtigen Erklärung: Medikament, Verbandwechsel, Insulin, Untersuchung.

**Häufiger Fehler:** 'Alles klar?' ist **kein** Teach-Back. Teach-Back braucht immer **eine Antwort in eigenen Worten**."

- **Erklärungs-Step:** stepType `stepbystep` (4 Schritte mit Beispielsätzen)
- **Glossar-Begriffe:** [Teach-Back, Close-the-Loop, Show-Me-Method]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Frage 'Haben Sie das verstanden?' ist schon Teach-Back"**
- **Fachbegriff:** Ja-Falle
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — 'Haben Sie verstanden?' ist **keine** Teach-Back-Frage. Patienten antworten fast immer 'Ja' — aus Höflichkeit oder Scham. Teach-Back fordert eine **aktive Wiedergabe in eigenen Worten**: 'Wie würden Sie das Ihrer Tochter erklären?' Nur dann siehst du, ob es wirklich sitzt. Merke: Aktive Antwort, keine Ja/Nein-Frage."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — 'Haben Sie verstanden?' ist **kein** Teach-Back. Die meisten sagen 'Ja' — aus Höflichkeit oder Scham. Teach-Back heißt: Der Patient **erklärt es selbst** in eigenen Worten. 'Wie würden Sie es Ihrer Tochter sagen?' Merke: Aktive Antwort, keine Ja-Nein-Frage."

**D2: "Teach-Back ist Zeitverschwendung — man muss ohnehin alles nochmal erklären"**
- **Fachbegriff:** Effizienz-Irrtum
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — Teach-Back **spart** Zeit, es verbraucht sie nicht. Studien zeigen: Patienten ohne Teach-Back nehmen Medikamente häufiger falsch ein, kommen öfter wieder, erleben mehr Komplikationen. Jede Minute Teach-Back spart später Stunden an Nachbesserung. Merke: Teach-Back ist Investition, keine Verschwendung."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — Teach-Back **spart** Zeit. Studien zeigen: Ohne Teach-Back nehmen Patienten Medikamente öfter falsch. Sie kommen öfter wieder in die Klinik. Eine Minute Teach-Back spart später viele Stunden. Merke: Teach-Back ist keine Verschwendung — es ist eine Investition."

**D3: "Wenn der Patient Teach-Back falsch beantwortet, hat er nicht gut zugehört"**
- **Fachbegriff:** Schuldumkehr
- **Feedback (C1, 330 Zeichen):** "Nicht ganz — das Teach-Back-Prinzip liegt **genau umgekehrt**: Wenn der Patient falsch wiedergibt, hat die **Fachperson** nicht gut genug erklärt. Genau dafür ist die Methode da — die Verantwortung liegt beim Erklärenden, nicht beim Zuhörer. Du gehst in eine neue Erklärungs-Schleife, ohne den Patienten zu beschämen. Merke: Verantwortung bleibt bei dir."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — es ist **umgekehrt**: Wenn der Patient etwas Falsches sagt, heißt das: **Du** hast es nicht gut genug erklärt. Genau dafür ist Teach-Back da. Die Verantwortung liegt bei dir, nicht beim Patienten. Du erklärst es nochmal — ohne Scham. Merke: Verantwortung bleibt bei dir."

### Richtig-Feedback
**C1 (305 Zeichen):** "Sehr gut. Teach-Back prüft Verständnis durch aktive Wiedergabe: Der Patient erklärt in eigenen Worten. 4 Schritte: Erklären, Verantwortung verschieben ('Ich möchte sicher sein, dass ich gut erklärt habe'), Zuhören, Nachjustieren. Wirksam, WHO-empfohlen, reduziert Fehler bei Medikamenten und Selbstpflege."

**B1 (275 Zeichen):** "Sehr gut. Teach-Back prüft Verständnis — der Patient erklärt es **selbst** in eigenen Worten. 4 Schritte: Erklären, Verantwortung verschieben ('Ich will sicher sein, dass ich gut erklärt habe'), Zuhören, Nachjustieren. Die WHO empfiehlt es. Reduziert Fehler bei Medikamenten und Selbstpflege."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist die Teach-Back-Methode und wie funktioniert sie?"
- **Rückseite:** "Verständnisprüfung durch aktive Wiedergabe. 4 Schritte: Erklären → Verantwortung verschieben ('Ich möchte sicher sein, dass ich gut erklärt habe') → Zuhören → Nachjustieren. Nicht: 'Haben Sie verstanden?'"
- **Kategorie:** handlung

---

## Baustein 9: einfache-sprache-beratung

### Metadaten
- **bausteinId:** patientenberatung-einfache-sprache
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Übersetze diesen Satz für einen Patienten mit geringer Gesundheitskompetenz in einfache Sprache: 'Eine dekompensierte Herzinsuffizienz kann zu einer pulmonalen Stauung führen.'"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "**Einfache Sprache in der Beratung**: kurze Sätze (max 10-15 Wörter), **eine** Information pro Satz, **aktive Verben**, **Alltagswörter statt Fachbegriffe**, Fachbegriffe nur **mit Erklärung**, **konkrete Beispiele** statt Abstraktion, **kein Fachjargon** wie 'pulmonal' oder 'dekompensiert'."

**B1 (275 Zeichen):** "**Einfache Sprache** heißt: kurze Sätze (höchstens 10-15 Wörter), **eine Sache pro Satz**, **aktive Verben**, **Alltagswörter statt Fachwörter**. Fachwörter darfst du benutzen — aber **mit Erklärung**. Beispiele statt abstrakte Erklärungen. Kein Fachjargon wie 'pulmonal'."

- **Step-Typ:** text (displayFormat: beforeafter — Fachsprache vs. einfach)

### Stufe 3 — Erklärung

**C1 (800 Zeichen):**
"**Einfache Sprache** in der Beratung folgt Regeln, die sich international bewährt haben. Nicht zu verwechseln mit 'Leichter Sprache' (die hat strengere Regeln und dient Menschen mit kognitiver Beeinträchtigung).

**Kernregeln einfache Sprache in der Beratung:**

1. **Kurze Sätze** — maximal 10-15 Wörter. Ein Satz = eine Information.
2. **Aktive Verben** — 'Sie nehmen die Tablette' statt 'Die Tablette wird eingenommen'.
3. **Alltagswörter** — 'Herzschwäche' statt 'Herzinsuffizienz'. 'Wasser in der Lunge' statt 'pulmonale Stauung'. 'Ablagerung' statt 'Plaque'.
4. **Fachbegriffe nur mit Erklärung** — 'Diabetes, das heißt: zu viel Zucker im Blut'. Nie kommentarlos.
5. **Konkrete Beispiele** statt Abstraktion — 'eine Handvoll' statt '200 Gramm', 'ein Wasserglas' statt '250 ml'.
6. **Aktiv strukturieren** — Reihenfolge in zeitlicher Abfolge: 'Zuerst — dann — zum Schluss'.

**Anwendungsbeispiel:**

*Fachsprache:* 'Eine dekompensierte Herzinsuffizienz kann zu einer pulmonalen Stauung führen.'
*Einfache Sprache:* 'Ihr Herz schafft es gerade nicht. Dann sammelt sich Wasser in der Lunge. Deshalb ist Atmen schwer.'

(Nationaler Aktionsplan Gesundheitskompetenz, 2018)"

**B1 (690 Zeichen):**
"**Einfache Sprache** in der Beratung folgt Regeln. Wichtig: Nicht verwechseln mit **Leichter Sprache** — die hat strengere Regeln und ist für Menschen mit kognitiver Beeinträchtigung.

**Kern-Regeln:**

1. **Kurze Sätze** — höchstens 10-15 Wörter. Ein Satz = eine Information.
2. **Aktive Verben** — 'Sie nehmen die Tablette' statt 'Die Tablette wird eingenommen'.
3. **Alltags-Wörter** — 'Herzschwäche' statt 'Herzinsuffizienz'. 'Wasser in der Lunge' statt 'pulmonale Stauung'.
4. **Fachwörter nur mit Erklärung** — 'Diabetes, das heißt: zu viel Zucker im Blut'. Nie einfach so.
5. **Konkrete Beispiele** — 'eine Handvoll' statt '200 Gramm', 'ein Wasserglas' statt '250 Milliliter'.
6. **Klar strukturieren** — in der richtigen Reihenfolge: 'Zuerst — dann — zum Schluss'.

**Beispiel:**

*Fachsprache:* 'Eine dekompensierte Herzinsuffizienz kann zu einer pulmonalen Stauung führen.'
*Einfache Sprache:* 'Ihr Herz schafft es gerade nicht. Dann sammelt sich Wasser in der Lunge. Deshalb ist Atmen schwer.'"

- **Erklärungs-Step:** stepType `beforeafter` (Fachsprache → Einfache Sprache, 3-4 Beispielpaare)
- **Glossar-Begriffe:** [Einfache Sprache, Leichte Sprache, Fachjargon]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Einfache Sprache und Leichte Sprache sind dasselbe"**
- **Fachbegriff:** Sprach-Konfundierung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — beides sind **verschiedene Konzepte** mit eigenen Regeln. **Leichte Sprache** ist formal definiert (Netzwerk Leichte Sprache, Bundesvereinigung Lebenshilfe), hat strenge Regeln und wendet sich an Menschen mit kognitiver Beeinträchtigung. **Einfache Sprache** ist flexibler, alltagstauglicher und breiter einsetzbar. Merke: Ähnlich, nicht gleich."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — das sind **zwei verschiedene Konzepte**. **Leichte Sprache** hat strenge Regeln. Sie ist für Menschen mit kognitiver Beeinträchtigung. **Einfache Sprache** ist freier. Sie ist für alle, die einen Text gut verstehen sollen. Merke: Ähnlich, aber nicht gleich."

**D2: "Einfache Sprache ist respektlos — man behandelt Patienten wie Kinder"**
- **Fachbegriff:** Infantilisierungs-Vorwurf
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — das Gegenteil stimmt: Fachjargon schließt Patienten aus und macht sie abhängig. Einfache Sprache ist **respektvoll**, weil sie Verständnis ermöglicht und Augenhöhe schafft. Respektlos wird es, wenn man **herablassend** spricht ('Schatzi', 'wir gehen jetzt') — nicht, wenn man **klar** spricht. Merke: Klar ≠ herablassend."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — Fachjargon schließt Patienten aus. Einfache Sprache ist **respektvoll**. Sie hilft zum Verstehen. Respektlos ist nur, wenn du **herablassend** sprichst ('Schatzi', 'wir gehen jetzt'). Klar sprechen ist aber nicht herablassend. Merke: Klar = nicht kindisch."

**D3: "Einfache Sprache lohnt sich nur bei Patienten mit Migrationshintergrund"**
- **Fachbegriff:** Zielgruppen-Verengung
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — mehr als die Hälfte der Deutschen (HLS-GER 2, 2021: 58,8%) hat begrenzte Gesundheitskompetenz. Einfache Sprache hilft **allen** — insbesondere älteren Menschen, chronisch Kranken, Menschen mit niedrigem Bildungsabschluss, gestressten oder verängstigten Patienten (unabhängig vom Hintergrund). Merke: Einfache Sprache ist Standard, nicht Ausnahme."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — mehr als die Hälfte der Deutschen (58,8%) hat Probleme mit Gesundheits-Informationen. Einfache Sprache hilft **allen** — alten Menschen, chronisch Kranken, Menschen mit wenig Schulbildung, verängstigten Patienten. Merke: Einfache Sprache ist normal, nicht Ausnahme."

### Richtig-Feedback
**C1 (310 Zeichen):** "Sehr gut übersetzt. Einfache Sprache folgt 6 Regeln: kurze Sätze, aktive Verben, Alltagswörter, Fachbegriffe nur mit Erklärung, konkrete Beispiele, klare Struktur. Sie ist respektvoll (nicht infantilisierend) und hilft mehr als der Hälfte aller Patienten — nicht nur Menschen mit Migrationshintergrund."

**B1 (275 Zeichen):** "Sehr gut übersetzt. Einfache Sprache hat 6 Regeln: kurze Sätze, aktive Verben, Alltagswörter, Fachwörter nur mit Erklärung, konkrete Beispiele, klare Struktur. Es ist respektvoll (nicht wie mit Kindern). Hilft mehr als der Hälfte aller Patienten — nicht nur Migranten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 6 Regeln gelten für einfache Sprache in der Patientenberatung?"
- **Rückseite:** "(1) Kurze Sätze (10-15 Wörter), (2) aktive Verben, (3) Alltagswörter, (4) Fachbegriffe nur mit Erklärung, (5) konkrete Beispiele, (6) klare Struktur."
- **Kategorie:** handlung

---

## Baustein 10: kultursensible-beratung

### Metadaten
- **bausteinId:** patientenberatung-kultursensibel
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Ein muslimischer Patient lehnt eine Blutkonserve ab, weil sie 'unrein' sei. Wie reagierst du — und wo liegen deine Grenzen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "**Kultursensible Beratung** basiert auf drei Prinzipien: **Selbstreflexion** (eigene kulturelle Prägung erkennen), **Offenheit** (nicht bewerten, sondern fragen) und **Individualisierung** (keine Klischees — jede Person ist einzigartig). Kultur ist ein **Rahmen**, nicht ein Rezept."

**B1 (275 Zeichen):** "**Kultursensible Beratung** hat drei Prinzipien: **Selbstreflexion** (du weißt, dass du selbst eine Kultur hast). **Offenheit** (du bewertest nicht, du fragst). **Individualisierung** (keine Klischees — jeder Mensch ist anders). Kultur ist ein Rahmen, kein festes Rezept."

- **Step-Typ:** text (displayFormat: checklist — 3 Prinzipien)

### Stufe 3 — Erklärung

**C1 (800 Zeichen):**
"**Kultursensible Beratung** ist ein Grundprinzip moderner Pflege — anerkannt durch den ICN-Kodex und das Pflegeberufegesetz (§ 5 PflBG — Achtung der Persönlichkeit und Würde).

**Drei Kernprinzipien:**

1. **Selbstreflexion** — Erkennen, dass du selbst eine kulturelle Prägung hast. Deutsche Mehrheitskultur ist keine 'neutrale Norm', sondern **auch eine Kultur**. Eigene Annahmen hinterfragen: Warum finde ich diese Geste befremdlich? Was sind meine Tabus?

2. **Offenheit und Fragen statt Annehmen** — Nicht bewerten ('komisch, dass…'), sondern fragen ('Was ist Ihnen bei der Ernährung wichtig?', 'Gibt es etwas, das wir für Ihre Pflege beachten sollen?'). **Open-Ended Questions**.

3. **Individualisierung** — Klischees vermeiden. Zwei Patienten mit gleichem kulturellem Hintergrund können sehr unterschiedliche Werte haben. Nicht: 'Als Türkin müssen Sie ja…' Sondern: 'Wie ist es bei Ihnen?'

**Grenzen kultursensibler Pflege:**
- Religiöse/kulturelle Wünsche werden respektiert, **solange sie die Sicherheit nicht gefährden**.
- Bei Konflikten zwischen Kultur und Pflegeauftrag: **Ethikberatung** hinzuziehen, nicht alleine entscheiden.
- Kinderschutz und Gewaltschutz gehen **immer** vor (§ 8a SGB VIII).

(ICN Code of Ethics, 2021; § 5 PflBG)"

**B1 (720 Zeichen):**
"**Kultursensible Beratung** ist wichtig in der Pflege. Der Pflege-Beruf (§ 5 PflBG) und der internationale Pflegekodex (ICN 2021) fordern das.

**Drei Kern-Prinzipien:**

1. **Selbstreflexion** — Du weißt: **Du selbst hast eine Kultur**. Deutsch-sein ist nicht 'neutral'. Frage dich: Warum finde ich diese Geste komisch? Welche Regeln sind mir wichtig?

2. **Offenheit** — Nicht bewerten ('seltsam, dass…'). Stattdessen **fragen**: 'Was ist Ihnen beim Essen wichtig?' 'Gibt es etwas, das wir für Ihre Pflege beachten sollen?' Offene Fragen, nicht Ja/Nein-Fragen.

3. **Individualisierung** — **Keine Klischees**. Zwei Menschen aus dem gleichen Land können sehr verschieden sein. Nicht: 'Als Türkin müssen Sie sicher…' Sondern: 'Wie ist es bei Ihnen?'

**Grenzen kultursensibler Pflege:**
- Wünsche werden respektiert — **wenn die Sicherheit okay ist**.
- Bei Konflikten: **Ethikberatung** holen, nicht allein entscheiden.
- **Kinderschutz und Gewaltschutz** gehen **immer vor** (§ 8a SGB VIII).

(ICN 2021; § 5 PflBG)"

- **Erklärungs-Step:** stepType `reveal` (3 Prinzipien + Grenzen)
- **Glossar-Begriffe:** [Kultursensibilität, Selbstreflexion, Kulturalismus, Ethikberatung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Kultursensible Beratung heißt, alle kulturellen Wünsche zu erfüllen"**
- **Fachbegriff:** Kulturrelativismus
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — kultursensible Pflege respektiert Wünsche, **aber nicht grenzenlos**. Wenn Sicherheit, Kinderschutz oder Gewaltschutz betroffen sind, gilt professionelle und rechtliche Verantwortung (§ 8a SGB VIII, § 5 PflBG). Grenzfälle gehören in die **Ethikberatung**, nicht in die alleinige Entscheidung der Pflegeperson. Merke: Respekt mit Grenzen."
- **Feedback (B1, 285 Zeichen):** "Nicht ganz — du respektierst Wünsche, **aber nicht alles**. Wenn Sicherheit oder Kinderschutz in Gefahr sind, gilt das Gesetz (§ 8a SGB VIII). Schwierige Fälle gehen in die **Ethikberatung** — du entscheidest nicht allein. Merke: Respekt ja, aber mit Grenzen."

**D2: "Es gibt einen festen 'Kulturkatalog', den man lernen kann — was Türken wollen, was Araber wollen"**
- **Fachbegriff:** Kulturalismus
- **Feedback (C1, 330 Zeichen):** "Nicht ganz — solche 'Kultur-Kataloge' sind gefährlich. Sie **essentialisieren** Kultur und führen zu Klischees. Eine 70-jährige Türkin aus Anatolien und eine 30-jährige Deutsch-Türkin aus Berlin haben wenig gemeinsam. **Individualisierung** ist der Kern kultursensibler Beratung, nicht Katalog-Wissen. Merke: Fragen, nicht nachschlagen."
- **Feedback (B1, 295 Zeichen):** "Nicht ganz — solche Kultur-Listen sind **gefährlich**. Sie machen Klischees. Eine 70-jährige Türkin vom Dorf und eine 30-jährige Türkin aus Berlin sind sehr verschieden. Kultursensibel heißt: **Individuell fragen**, nicht in einem Buch nachschlagen. Merke: Fragen, nicht nachschlagen."

**D3: "Deutsche Patienten sind die 'normale' Gruppe — Kultursensibilität gilt nur für Migranten"**
- **Fachbegriff:** Normalitäts-Annahme
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — **deutsche Mehrheitskultur ist keine neutrale Norm**, sondern auch eine Kultur mit Werten, Tabus und Erwartungen. Kultursensibel heißt: die eigenen Prägungen erkennen (**Selbstreflexion**, erstes Prinzip). Erst wer sich selbst kulturell verortet, kann wirklich sensibel sein. Merke: Jeder hat Kultur — auch du."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — **deutsch sein ist auch eine Kultur**. Es ist nicht 'normal' und alles andere 'anders'. Kultursensibel heißt: deine eigene Kultur kennen (**Selbstreflexion**). Erst wenn du deine eigene Kultur siehst, kannst du wirklich sensibel sein. Merke: Jeder hat Kultur — auch du."

### Richtig-Feedback
**C1 (320 Zeichen):** "Sehr gut differenziert. Kultursensible Beratung basiert auf Selbstreflexion, Offenheit (offene Fragen statt Annahmen) und Individualisierung (keine Klischees). Grenzen: Sicherheit, Kinderschutz, Gewaltschutz gehen immer vor. Im konkreten Fall: Blutkonserve → Aufklärung, Alternativen prüfen, ggf. Ethikberatung."

**B1 (275 Zeichen):** "Sehr gut. Kultursensible Beratung hat drei Prinzipien: **Selbstreflexion** (eigene Kultur kennen), **Offenheit** (fragen statt annehmen), **Individualisierung** (keine Klischees). Grenzen: Sicherheit und Kinderschutz gehen immer vor. Bei Konflikten: Ethikberatung holen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 3 Prinzipien hat kultursensible Beratung — und wo sind die Grenzen?"
- **Rückseite:** "(1) Selbstreflexion, (2) Offenheit (offene Fragen), (3) Individualisierung (keine Klischees). Grenzen: Sicherheit, Kinderschutz, Gewaltschutz — immer Ethikberatung bei Konflikten. (ICN 2021, § 5 PflBG)"
- **Kategorie:** handlung

---

## Baustein 11: dolmetscher-einsatz

### Metadaten
- **bausteinId:** patientenberatung-dolmetscher
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Herr A. spricht kein Deutsch. Sein 12-jähriger Sohn ist da und könnte übersetzen. Darfst du ihn als Dolmetscher einsetzen? Warum / warum nicht?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "**Kinder dürfen nie als Dolmetscher eingesetzt werden** — und erwachsene Angehörige nur in klar begrenzten Fällen. Für Aufklärungen, Diagnosen und rechtlich relevante Gespräche braucht es **qualifizierte Dolmetschdienste** — persönlich oder per Video-/Telefonkonferenz."

**B1 (265 Zeichen):** "**Kinder dürfen nie dolmetschen**. Erwachsene Angehörige dürfen nur in einfachen Situationen übersetzen — nicht bei wichtigen Gesprächen. Für Aufklärungen, Diagnosen und rechtliche Themen brauchst du einen **professionellen Dolmetscher** — vor Ort, per Video oder Telefon."

- **Step-Typ:** text (displayFormat: procontra — Familie vs. Profi)

### Stufe 3 — Erklärung

**C1 (800 Zeichen):**
"**Kinder als Dolmetscher sind tabu** — egal wie gut ihr Deutsch ist. Das ist ein internationaler ethischer Konsens (WHO, Pflegekammern, Ärztekammern) und wird im nationalen Gesundheitsziel Gesundheitskompetenz (2018) ausdrücklich gefordert.

**Warum keine Kinder?**
- **Rollenumkehr** — Kinder übernehmen Erwachsenenverantwortung.
- **Belastung** — schwere Inhalte (Diagnose, Tod, Gewalt) sind für Kinder traumatisierend.
- **Schutz des Kindes** — Elternintimität wird verletzt.
- **Qualität** — medizinisches Vokabular fehlt, Fehlübersetzungen häufig.

**Erwachsene Angehörige — nur bei einfachen Inhalten** (z.B. alltägliche Pflegekoordination). **Nicht** bei:
- Aufklärung vor Eingriffen (rechtlich erforderlich: qualifizierte Übersetzung).
- Diagnose-Eröffnung, onkologischen Gesprächen, psychiatrischer Anamnese.
- Verdacht auf häusliche Gewalt, Missbrauch.
- Finanziellen/rechtlichen Fragen.

**Korrekte Dolmetscher-Nutzung:**
- **Qualifizierte Dolmetschdienste** (vor Ort, telefonisch, per Video — viele Kliniken haben 24/7-Zugang).
- **Direkte Anrede des Patienten** ('Ihr…'), Dolmetscher übersetzt.
- **Kurze Abschnitte** dolmetschen, Pausen einplanen.
- **Teach-Back auch mit Dolmetscher**.

Kostenübernahme: in vielen Bundesländern durch Krankenkassen bei medizinisch notwendiger Indikation; hausinterne Dienste nutzen. (Nationaler Aktionsplan Gesundheitskompetenz 2018)"

**B1 (720 Zeichen):**
"**Kinder dürfen nie dolmetschen** — auch wenn sie gut Deutsch können. Das ist eine klare Regel von WHO, Pflegekammern und Ärztekammern.

**Warum keine Kinder?**
- **Rollenumkehr** — das Kind wird zum Erwachsenen gemacht.
- **Belastung** — schlimme Nachrichten (Diagnose, Tod, Gewalt) machen Kindern Angst.
- **Schutz** — Eltern-Intimität wird verletzt.
- **Qualität** — das Kind kennt medizinische Wörter oft nicht.

**Erwachsene Familie — nur bei einfachen Themen** (zum Beispiel Alltags-Absprachen). **Nicht** bei:
- Aufklärung vor Operationen (hier braucht es rechtlich einen Profi).
- Diagnose-Gespräch, Krebs-Gespräch, Psychiatrie.
- Verdacht auf Gewalt in der Familie.
- Geld- oder Rechtsfragen.

**Wie richtig dolmetschen?**
- **Profi-Dolmetscher** nutzen — vor Ort, per Telefon oder Video. Viele Kliniken haben 24/7 Zugang.
- **Du sprichst den Patienten direkt an** ('Sie…'), der Dolmetscher übersetzt.
- **Kurze Stücke** dolmetschen, Pausen machen.
- **Teach-Back auch mit Dolmetscher** nutzen.

Kosten: In vielen Bundesländern zahlt die Krankenkasse — nutze die Hausdienste."

- **Erklärungs-Step:** stepType `checklist` (Regeln + Verbote)
- **Glossar-Begriffe:** [Ad-hoc-Dolmetscher, qualifizierter Dolmetscher, Teach-Back]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Kinder können dolmetschen, wenn sie sehr gut Deutsch sprechen"**
- **Fachbegriff:** Sprachkompetenz-Irrtum
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — Sprachkompetenz ist **nicht** das Kriterium. Kinder dürfen **nie** dolmetschen, auch bei perfektem Deutsch. Gründe: Rollenumkehr, Schutz des Kindes vor schweren Inhalten, Verletzung der Elternintimität, fehlendes Fachvokabular. Dies gilt rechtlich bei Aufklärungen sogar zwingend. Merke: Alter und Rolle, nicht Sprache."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — es geht **nicht um die Sprache**. Kinder dürfen **nie** dolmetschen, auch wenn sie perfekt Deutsch können. Gründe: Rollenumkehr, das Kind hört schwere Themen, Eltern-Intimität wird verletzt, Fachwörter fehlen. Bei Aufklärungen ist das sogar rechtlich wichtig. Merke: Alter, nicht Sprache."

**D2: "Erwachsene Angehörige dürfen immer dolmetschen"**
- **Fachbegriff:** Familien-Carte-blanche
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — erwachsene Angehörige sind **nur** bei einfachen Inhalten okay (Alltagspflege). Bei Aufklärung, Diagnose, psychiatrischer Anamnese oder Gewaltverdacht gilt: **qualifizierte Dolmetscher**. Grund: Interessenkonflikte, emotionale Betroffenheit, fehlendes medizinisches Vokabular, in Gewalt-Fällen sogar Gefährdung. Merke: Thema entscheidet."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — erwachsene Familie darf **nur bei einfachen Themen** dolmetschen. Bei Aufklärung, Diagnose, Psychiatrie oder Gewalt-Verdacht brauchst du einen **Profi**. Gründe: Familie ist emotional betroffen, Fachwörter fehlen, bei Gewalt sogar gefährlich. Merke: Das Thema entscheidet."

**D3: "Telefondolmetscher sind immer schlechter als persönliche Dolmetscher"**
- **Fachbegriff:** Modus-Vorurteil
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — Telefon- und Videodolmetschdienste sind inzwischen **Standard** in vielen Kliniken und **qualitativ gleichwertig**, oft sogar schneller verfügbar. Vorteile: 24/7-Zugang, große Sprachenvielfalt, oft günstiger. Wichtig ist die **Qualifikation** der Dolmetschenden, nicht das Medium. Merke: Modus ist egal, Qualifikation zählt."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — Telefon- und Video-Dolmetscher sind heute **Standard**. Sie sind **gleich gut** wie vor Ort. Oft sind sie sogar schneller da und decken mehr Sprachen ab. Wichtig ist die **Qualifikation** — nicht der Weg (Telefon, Video oder persönlich). Merke: Qualifikation zählt."

### Richtig-Feedback
**C1 (315 Zeichen):** "Sehr gut. Den 12-jährigen Sohn darfst du **nicht** als Dolmetscher einsetzen — egal wie gut sein Deutsch ist. Gründe: Rollenumkehr, Schutz des Kindes, fehlendes Fachvokabular. Korrekt: qualifizierten Dolmetschdienst anrufen (oft hausintern 24/7). Direkte Anrede des Patienten. Teach-Back auch mit Dolmetscher."

**B1 (270 Zeichen):** "Sehr gut. Du darfst den 12-jährigen Sohn **nicht** als Dolmetscher einsetzen — auch wenn er gut Deutsch kann. Gründe: Rollenumkehr, Schutz des Kindes, Fachwörter fehlen. Richtig: Profi-Dolmetscher anrufen (Hausdienst, 24/7). Den Patienten direkt ansprechen. Teach-Back nutzen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Dürfen Familienmitglieder als Dolmetscher eingesetzt werden?"
- **Rückseite:** "Kinder NIE. Erwachsene Angehörige nur bei einfachen Inhalten, nicht bei Aufklärung/Diagnose/Psychiatrie/Gewaltverdacht. Dort: qualifizierte Dolmetschdienste (vor Ort, Telefon, Video). Kostenübernahme via Krankenkassen möglich."
- **Kategorie:** recht

---

## Baustein 12: migration-gesundheit

### Metadaten
- **bausteinId:** patientenberatung-migration
- **bloomLevel:** 5
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Frau K., 42 Jahre, aus Syrien, seit 5 Jahren in Deutschland. Sie kommt mit chronischen Kopfschmerzen. Welche migrationsspezifischen Faktoren könntest du im Blick haben — und warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (300 Zeichen):** "Migration und Gesundheit stehen in komplexem Zusammenhang: **Healthy Migrant Effect** (Migranten sind initial oft gesünder), **Akkulturationsstress**, **Traumafolgen** (bei Fluchterfahrung), **eingeschränkter Versorgungszugang**, **Sprachbarrieren**, **kulturelle Unterschiede in Krankheitskonzepten**."

**B1 (285 Zeichen):** "Migration und Gesundheit hängen zusammen — aber kompliziert: **Healthy Migrant Effect** (Migranten sind oft gesünder am Anfang), **Stress durch Neu-Ankommen**, **Trauma** (nach Flucht), **schwerer Zugang zur Versorgung**, **Sprach-Barrieren**, **andere Ideen von Krankheit**."

- **Step-Typ:** text (displayFormat: checklist — 6 Faktoren)

### Stufe 3 — Erklärung

**C1 (820 Zeichen):**
"**Migration und Gesundheit** ist ein komplexes Feld — ohne einfache Antworten. Wichtige Konzepte:

**1. Healthy Migrant Effect** — Menschen, die migrieren, sind häufig zunächst **gesünder** als die Mehrheitsbevölkerung des Zuzugslandes (körperlich belastbarer, jünger). Nach einigen Jahren gleicht sich der Gesundheitsstatus an oder wird schlechter.

**2. Akkulturationsstress** — Der Prozess der Anpassung an ein neues Land ist belastend: Sprachlernen, Bürokratie, Arbeit, Identitätskonflikte. Langanhaltender Stress erhöht Risiken für Depression, kardiovaskuläre Erkrankungen, Schmerzstörungen.

**3. Traumafolgen** — Bei Fluchterfahrung: PTBS-Prävalenz erhöht (bis zu 40% bei Geflüchteten, Schätzungen variieren). Häufig somatisierte Beschwerden (Kopfschmerzen, Rückenschmerzen, Schlafstörungen).

**4. Versorgungszugang** — Sprachbarrieren, Unkenntnis des Systems, prekärer Status (Duldung, Asyl), Diskriminierungserfahrungen — all das reduziert Inanspruchnahme.

**5. Kulturelle Krankheitskonzepte** — Unterschiedliche Vorstellungen von Ursache, Therapie, Heilung (z.B. 'dem Körper Ruhe gönnen' vs. 'früh mobilisieren'). Erklärungsmodelle nach Kleinman: fragen, wie die Person ihre Beschwerden selbst erklärt.

**Konsequenz für Beratung:** Nie nur kulturelle Ursachen annehmen — immer auch Trauma, Akkulturationsstress und strukturelle Barrieren mitdenken.

(Kleinman, Explanatory Models; WHO Report on Health of Refugees and Migrants in the European Region 2018)"

**B1 (720 Zeichen):**
"**Migration und Gesundheit** ist ein komplexes Thema. Wichtige Ideen:

**1. Healthy Migrant Effect** — Menschen, die migrieren, sind am Anfang oft **gesünder** als der Durchschnitt. Sie sind jünger und belastbar. Nach einigen Jahren wird das oft schlechter.

**2. Stress durch Akkulturation** — Ankommen ist anstrengend: Sprache lernen, Ämter, Arbeit, Identitätsfragen. Langer Stress macht Depression wahrscheinlicher. Auch Herz-Kreislauf-Probleme und Schmerzen.

**3. Trauma** — Nach einer Flucht: **PTBS** ist häufiger (bei Geflüchteten bis zu 40%). Oft zeigt sich das als körperliche Beschwerden: Kopfschmerzen, Rückenschmerzen, Schlafprobleme.

**4. Zugang zur Versorgung** — Sprache, unbekanntes System, unsicherer Aufenthalt, Diskriminierung — das alles macht es schwer, Hilfe zu bekommen.

**5. Andere Ideen von Krankheit** — Andere Länder haben andere Vorstellungen. Zum Beispiel: 'Ruhe machen' oder 'früh bewegen'. Du kannst fragen: 'Was glauben Sie selbst: woher kommt das?'

**Für die Beratung:** Nie nur 'Kultur' als Ursache sehen. Immer auch an Trauma, Stress und Barrieren denken. (Kleinman Explanatory Models; WHO 2018)"

- **Erklärungs-Step:** stepType `conceptmap` (5 Faktoren mit Verbindungen)
- **Glossar-Begriffe:** [Healthy Migrant Effect, Akkulturationsstress, PTBS, Explanatory Model, Somatisierung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Migranten sind grundsätzlich kranker als die Aufnahme-Gesellschaft"**
- **Fachbegriff:** Vulnerabilitäts-Klischee
- **Feedback (C1, 330 Zeichen):** "Nicht ganz — der **Healthy Migrant Effect** zeigt: Migranten sind **initial oft gesünder** als die Mehrheitsbevölkerung (jünger, belastbarer). Erst nach Jahren gleicht sich der Gesundheitsstatus an oder wird schlechter — durch Akkulturationsstress, Diskriminierung, prekäre Lebenslagen. Merke: Gesundheit ist dynamisch, nicht statisch."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — **am Anfang** sind Migranten oft **gesünder** als der Durchschnitt (sie sind jünger, belastbar). Erst später wird es schlechter — durch Stress, Diskriminierung, schwere Lebenslage. Das heißt **Healthy Migrant Effect**. Merke: Gesundheit ändert sich — nicht statisch."

**D2: "Bei Kopfschmerzen von Migranten liegt fast immer eine kulturelle Ursache vor"**
- **Fachbegriff:** Kulturalisierung
- **Feedback (C1, 340 Zeichen):** "Nicht ganz — diese **Kulturalisierung** ist ein klassischer Fehler. Kopfschmerzen bei Migranten haben oft **Trauma-Hintergrund** (somatisierte PTBS), **Akkulturationsstress** oder reguläre medizinische Ursachen — nicht zuerst 'Kultur'. Diagnostik muss dieselbe Qualität haben wie bei jedem anderen Patienten. Merke: Kultur zuletzt — nicht zuerst."
- **Feedback (B1, 295 Zeichen):** "Nicht ganz — das ist ein **Fehler namens Kulturalisierung**. Kopfschmerzen können **Trauma**, **Stress** oder normale medizinische Ursachen haben — nicht zuerst 'Kultur'. Du untersuchst mit der gleichen Sorgfalt wie bei jedem anderen Patienten. Merke: Kultur zuletzt — nicht zuerst."

**D3: "PTBS ist bei Geflüchteten selten, weil die meisten nach der Ankunft ein besseres Leben haben"**
- **Fachbegriff:** Trauma-Unterschätzung
- **Feedback (C1, 335 Zeichen):** "Nicht ganz — die PTBS-Prävalenz bei Geflüchteten liegt in Schätzungen deutlich über dem Bevölkerungsschnitt (je nach Studie bis zu 40%). Auch 'ein besseres Leben' heilt Trauma nicht — Flashbacks, Schlafstörungen und Triggerreize bleiben unabhängig vom aktuellen Wohlbefinden. Viele somatisieren (zeigen körperliche Symptome). Merke: Trauma bleibt."
- **Feedback (B1, 295 Zeichen):** "Nicht ganz — PTBS ist bei Geflüchteten **häufig**. Je nach Studie bis zu **40%**. Auch wenn das Leben jetzt besser ist — das Trauma heilt nicht von allein. Oft zeigen sich körperliche Symptome: Kopfschmerzen, Rückenschmerzen, Schlafprobleme. Merke: Trauma bleibt."

### Richtig-Feedback
**C1 (335 Zeichen):** "Sehr gut analysiert. Bei Frau K. solltest du im Blick haben: Healthy-Migrant-Effect-Verlauf (5 Jahre hier → Angleichung möglich), Akkulturationsstress, potenzielle Traumafolgen aus Syrien (somatisierte PTBS — Kopfschmerzen als Leitsymptom), Versorgungszugang, Erklärungsmodell der Patientin (Kleinman: 'Was glauben Sie selbst?')."

**B1 (290 Zeichen):** "Sehr gut. Bei Frau K. denkst du an: Healthy Migrant Effect (nach 5 Jahren oft schlechter), **Stress durch Ankommen**, **mögliches Trauma** aus Syrien (Kopfschmerzen als körperliches Zeichen), **Zugang zum System**, **ihr eigenes Bild der Krankheit** ('Was glauben Sie selbst?')."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Faktoren verbinden Migration und Gesundheit?"
- **Rückseite:** "(1) Healthy Migrant Effect (initial gesünder), (2) Akkulturationsstress, (3) Traumafolgen (PTBS), (4) Versorgungszugang-Barrieren, (5) kulturelle Krankheitskonzepte (Kleinman Explanatory Models)."
- **Kategorie:** fachbegriff

---

## Baustein 13: mi-grundhaltung-spirit

### Metadaten
- **bausteinId:** patientenberatung-mi-spirit
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Was ist der Unterschied zwischen 'einen Patienten zum Aufhören zu bringen' und 'einen Patienten beim Aufhören zu begleiten'? Formuliere es in 2 Sätzen."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "**Motivational Interviewing (MI)** ist eine Beratungsmethode nach Miller/Rollnick. Kern ist die **Grundhaltung (MI-Spirit)** — vier Elemente: **Partnerschaft** (auf Augenhöhe), **Akzeptanz** (bedingungslos), **Mitgefühl** (Wohlergehen im Fokus), **Empowerment** (eigene Lösungen stärken)."

**B1 (275 Zeichen):** "**Motivational Interviewing (MI)** ist eine Beratungsmethode von Miller und Rollnick. Das Wichtigste ist die **Grundhaltung (MI-Spirit)** — mit 4 Teilen: **Partnerschaft** (auf Augenhöhe), **Akzeptanz** (ohne Bewertung), **Mitgefühl** (Wohl des Patienten), **Empowerment** (eigene Kraft)."

- **Step-Typ:** text (displayFormat: quote — Miller/Rollnick zitiert)

### Stufe 3 — Erklärung

**C1 (800 Zeichen):**
"**Motivational Interviewing (MI)** — Motivierende Gesprächsführung — wurde von **William Miller** und **Stephen Rollnick** entwickelt, zunächst in der Suchttherapie (1983). Heute in 4. Auflage (Miller/Rollnick 2023) und weit über Sucht hinaus angewendet: Diabetes, Adipositas, chronische Erkrankungen, Prävention.

**MI-Spirit — die Grundhaltung (4 Komponenten):**

1. **Partnerschaft (Partnership)** — Zusammenarbeit auf Augenhöhe. Die Fachperson ist **nicht der Experte für das Leben** des Patienten — der Patient ist es. Beide bringen etwas ein.

2. **Akzeptanz (Acceptance)** — vier Teile: absoluter Wert jedes Menschen, genaue Empathie, Autonomie-Anerkennung, Bestätigung (Affirmation).

3. **Mitgefühl (Compassion)** — die Bedürfnisse des Patienten stehen im Zentrum, nicht die Institution oder eigene Effizienz.

4. **Empowerment / Evocation** — Motivation kommt **aus dem Patienten**, nicht von außen. Deine Aufgabe: sie aufzurufen, nicht zu **installieren**.

**Der Fachbegriff 'Righting Reflex'** — der (schädliche) Reflex der Fachperson, Probleme reparieren zu wollen ('Sie müssen…'). MI arbeitet gegen diesen Reflex. Motivation lässt sich nicht 'draufgeben' — sie muss aufgerufen werden. (Miller/Rollnick MI, 2023 4. Aufl.)"

**B1 (700 Zeichen):**
"**Motivational Interviewing (MI)** — Motivierende Gesprächsführung — wurde von **William Miller** und **Stephen Rollnick** entwickelt. Anfangs für Sucht-Therapie (1983). Heute in vielen Bereichen: Diabetes, Gewicht, chronische Krankheiten, Vorbeugung. Vierte Auflage 2023.

**MI-Spirit — die Grundhaltung (4 Teile):**

1. **Partnerschaft** — Ihr arbeitet auf Augenhöhe. Die Fachperson ist **nicht der Experte für das Leben** vom Patienten. Der Patient ist das. Beide bringen etwas mit.

2. **Akzeptanz** — Vier Teile: jeder Mensch hat Wert, genaues Einfühlen, Autonomie akzeptieren, Bestätigung.

3. **Mitgefühl** — Die Bedürfnisse vom Patienten sind im Zentrum. Nicht die Klinik, nicht deine Effizienz.

4. **Empowerment** — Motivation kommt **aus dem Patienten**, nicht von dir. Deine Aufgabe: sie **aufrufen**, nicht **dazugeben**.

**Wichtiger Begriff 'Righting Reflex'** — der Reflex, Probleme für den Patienten zu **lösen** ('Sie müssen…'). MI arbeitet **gegen** diesen Reflex. Motivation kannst du nicht draufgeben. (Miller/Rollnick MI, 2023)"

- **Erklärungs-Step:** stepType `reveal` (4 Komponenten + Righting Reflex)
- **Glossar-Begriffe:** [MI-Spirit, Motivational Interviewing, Righting Reflex, Evocation, Autonomie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "MI ist eine Sammlung von Gesprächstricks, um Patienten zu Veränderung zu bewegen"**
- **Fachbegriff:** Technik-Reduktion
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — MI ist primär eine **Haltung (Spirit)**, nicht eine Sammlung von Tricks. Techniken (OARS) funktionieren nur im richtigen Geist: Partnerschaft, Akzeptanz, Mitgefühl, Empowerment. Wer Techniken ohne Spirit einsetzt, manipuliert — und das widerspricht MI ausdrücklich (Miller/Rollnick 2023). Merke: Spirit vor Technik."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — MI ist vor allem eine **Haltung**, keine Sammlung von Tricks. Die Techniken (OARS) funktionieren nur mit dem richtigen **Spirit**: Partnerschaft, Akzeptanz, Mitgefühl, Empowerment. Ohne Spirit wäre es **Manipulation** — das ist nicht MI. Merke: Spirit vor Technik."

**D2: "MI heißt, dem Patienten Argumente zu liefern, warum er sich ändern sollte"**
- **Fachbegriff:** Argumenten-Modell
- **Feedback (C1, 330 Zeichen):** "Nicht ganz — das ist genau **der gegenteilige Ansatz** zu MI. MI geht davon aus, dass Argumente **aus dem Patienten** kommen müssen, nicht von außen. Wenn du argumentierst, argumentiert der Patient dagegen — klassischer 'Sustain Talk'. Deine Aufgabe: 'Change Talk' aufrufen. Merke: Argumente nicht liefern, sondern hervorrufen."
- **Feedback (B1, 295 Zeichen):** "Nicht ganz — das ist genau das **Gegenteil** von MI. In MI kommen die Argumente **vom Patienten**. Wenn du argumentierst, widerspricht er — das heißt 'Sustain Talk'. Deine Aufgabe: Seine eigenen Gründe **aufrufen** (Change Talk). Merke: Gründe nicht liefern, sondern aufrufen."

**D3: "MI funktioniert nur in der Suchttherapie — in der somatischen Pflege ist es ungeeignet"**
- **Fachbegriff:** Kontext-Verengung
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — MI hat sich aus der Suchttherapie entwickelt, ist aber heute **weit darüber hinaus etabliert**: Diabetes-Beratung, Ernährungsberatung, Medikamenten-Adhärenz, chronische Schmerzen, Raucherentwöhnung. Überall, wo Verhaltensänderung ansteht, ist MI wirksam (Miller/Rollnick 2023). Merke: Nicht nur Sucht — alles, was Änderung braucht."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — MI hat in der **Sucht** angefangen, wird aber heute **überall** genutzt: Diabetes, Ernährung, Tabletten-Einnahme, chronische Schmerzen, Rauchen. Überall, wo es um **Verhaltens-Änderung** geht, hilft MI. Merke: Nicht nur Sucht — alles mit Änderung."

### Richtig-Feedback
**C1 (315 Zeichen):** "Sehr gut. Der Unterschied: 'Bringen' heißt Druck von außen (Righting Reflex) — Patient widerspricht. 'Begleiten' entspricht MI-Spirit: Partnerschaft, Akzeptanz, Mitgefühl, Empowerment. Motivation wird **aufgerufen**, nicht installiert. MI nach Miller/Rollnick (4. Aufl. 2023) ist weit über Sucht-Kontexte etabliert."

**B1 (270 Zeichen):** "Sehr gut. Der Unterschied: 'Bringen' heißt Druck von außen — der Patient macht zu. 'Begleiten' entspricht MI-Spirit: Partnerschaft, Akzeptanz, Mitgefühl, Empowerment. Motivation wird **aufgerufen**, nicht draufgegeben. MI von Miller/Rollnick hilft nicht nur bei Sucht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was sind die 4 Komponenten des MI-Spirit nach Miller/Rollnick?"
- **Rückseite:** "(1) Partnerschaft, (2) Akzeptanz (4 Aspekte), (3) Mitgefühl, (4) Empowerment/Evocation. Gegen den Righting Reflex. (Miller/Rollnick MI, 2023 4. Aufl.)"
- **Kategorie:** fachbegriff

---

## Baustein 14: mi-rule-prinzip

### Metadaten
- **bausteinId:** patientenberatung-mi-rule
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Was würdest du **nicht** tun, wenn ein Raucher sagt: 'Ich weiß, ich sollte aufhören, aber es ist halt meine einzige Entspannung'?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (285 Zeichen):** "**RULE** ist das Merkwort für vier MI-Grundprinzipien: **R**esist the righting reflex (Widerstand gegen Reparatur-Impuls), **U**nderstand the person's motivations (eigene Motive verstehen), **L**isten with empathy (empathisch zuhören), **E**mpower the person (Selbstwirksamkeit stärken)."

**B1 (270 Zeichen):** "**RULE** ist eine Merk-Hilfe für 4 Prinzipien in MI: **R** = dem Reparatur-Impuls **widerstehen**, **U** = die Motive vom Patienten **verstehen**, **L** = empathisch **zuhören**, **E** = den Patienten **stärken** (Empowerment). Vier Schritte, die eine gute Beratung ausmachen."

- **Step-Typ:** text (displayFormat: mnemonic — RULE Akronym)

### Stufe 3 — Erklärung

**C1 (810 Zeichen):**
"**RULE** ist ein Merkwort für vier Kern-Prinzipien aus dem Motivational Interviewing (Miller/Rollnick). Es verdichtet die MI-Haltung in vier praktische Leitlinien.

**R — Resist the Righting Reflex (Widerstehe dem Reparatur-Reflex)**
Der 'Righting Reflex' ist der automatische Impuls, Probleme für den Patienten zu lösen ('Sie müssen aufhören zu rauchen'). Er produziert **Widerstand** und **Sustain Talk** (Gegenargumente). Deine erste Aufgabe: nicht reagieren.

**U — Understand the person's motivations (Verstehe die Motive des Patienten)**
Warum tut die Person, was sie tut? Welche Werte, Ängste, Lebensumstände stehen dahinter? Nicht: 'Warum tust du etwas Schlechtes?' Sondern: 'Was bedeutet es dir?'

**L — Listen with empathy (Höre empathisch zu)**
Zuhören heißt: Aufmerksamkeit, Pausen aushalten, zusammenfassen (Summarize), Gefühle spiegeln (Reflect). Nicht unterbrechen, nicht bewerten. Empathie ist keine Sympathie — du musst nicht zustimmen, aber verstehen.

**E — Empower the person (Stärke den Patienten)**
Selbstwirksamkeit fördern: 'Was ist Ihnen in der Vergangenheit schon gelungen? Welche Ressourcen haben Sie?' Entscheidungsmacht bleibt beim Patienten.

**Anwendung:** RULE ist besonders nützlich, wenn du merkst, du rutschst in den Reparatur-Modus. Stopp — RULE durchgehen. (Miller/Rollnick MI, 2023 4. Aufl.)"

**B1 (720 Zeichen):**
"**RULE** ist ein Merk-Wort für vier Prinzipien aus MI (Miller/Rollnick).

**R — Resist the Righting Reflex: Wider-stehe dem Reparatur-Reflex.**
Der 'Righting Reflex' ist der Impuls, Probleme für den Patienten zu lösen ('Sie müssen aufhören zu rauchen'). Das macht **Widerstand**. Der Patient argumentiert dagegen. Erste Regel: **nicht reagieren**.

**U — Understand: Verstehe die Motive des Patienten.**
Warum tut er, was er tut? Welche Werte, Ängste, Lebens-Situationen? Nicht: 'Warum machst du etwas Schlechtes?' Sondern: 'Was bedeutet es dir?'

**L — Listen: Höre mit Empathie zu.**
Zuhören heißt: aufmerksam sein, Pausen aushalten, zusammenfassen, Gefühle spiegeln. Nicht unter-brechen, nicht bewerten. Empathie ist **nicht Zustimmung** — du musst nicht zustimmen, aber **verstehen**.

**E — Empower: Stärke den Patienten.**
'Was haben Sie schon geschafft? Welche Kraft haben Sie?' Die Entscheidung bleibt beim Patienten.

**Wann?** RULE hilft, wenn du merkst: Du rutschst in den Reparatur-Modus. Stopp — RULE durchgehen. (Miller/Rollnick MI, 2023)"

- **Erklärungs-Step:** stepType `stepbystep` (4 RULE-Prinzipien mit Beispiel-Sätzen)
- **Glossar-Begriffe:** [RULE, Righting Reflex, Empathie, Sustain Talk]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Das R in RULE steht für 'Raten' — dem Patienten gute Ratschläge geben"**
- **Fachbegriff:** Falsch-Dekodierung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — das R steht für **'Resist the righting reflex'** — also genau das **Gegenteil**: Ratschläge zurückhalten. Der Reparatur-Reflex ist der Impuls, Probleme für den Patienten zu lösen. MI arbeitet explizit **gegen** diesen Reflex, weil er Widerstand produziert. Merke: R = widerstehen, nicht raten."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — das R heißt **'Resist'** — also **widerstehen**. Es ist das **Gegenteil** von Raten. Der Reparatur-Reflex ist der Impuls, für den Patienten Probleme zu lösen. MI arbeitet **dagegen**, weil Rat-schläge Widerstand machen. Merke: R = wider-stehen, nicht Raten."

**D2: "Empathisches Zuhören heißt, dem Patienten zuzustimmen, dass er recht hat"**
- **Fachbegriff:** Empathie-Sympathie-Konfusion
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — Empathie und Sympathie sind **verschieden**. Empathie heißt: Ich **verstehe**, wie du die Welt siehst und fühlst — ohne zwingend derselben Meinung zu sein. Du kannst einem Patienten empathisch zuhören, ohne seiner Meinung zu sein, dass Rauchen 'ja sowieso egal' ist. Merke: Verstehen ≠ Zustimmen."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — Empathie und Sympathie sind **verschieden**. Empathie heißt: Ich **verstehe**, wie du fühlst und denkst — aber ich muss nicht **zustimmen**. Du kannst empathisch zuhören, ohne zu sagen 'Rauchen ist egal'. Merke: Verstehen ist **nicht** Zustimmen."

**D3: "RULE ist nur für die erste Sitzung gedacht — danach kann man normal beraten"**
- **Fachbegriff:** Einmal-Anwendung
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — RULE ist keine Initial-Technik, sondern eine **durchgehende Haltung**. In jedem Gespräch, in jeder Phase, solange du mit MI arbeitest. Auch nach 10 Sitzungen gilt: **Resist the righting reflex**. Der Reparatur-Impuls wird eher stärker, je länger du einen Patienten kennst. Merke: RULE ist dauerhaft."
- **Feedback (B1, 285 Zeichen):** "Nicht ganz — RULE ist keine Einmal-Sache. Es gilt **in jedem Gespräch**, auch nach 10 Sitzungen. Der Reparatur-Reflex wird sogar **stärker**, je länger du einen Patienten kennst. Also immer wieder **bewusst**: R — U — L — E. Merke: RULE ist dauerhaft."

### Richtig-Feedback
**C1 (335 Zeichen):** "Sehr gut. Was du **nicht** tust: 'Sie müssen aufhören, Rauchen ist ungesund!' (Righting Reflex → Sustain Talk). Stattdessen RULE anwenden: **R**esist (nicht belehren), **U**nderstand (was bedeutet die Zigarette als 'Entspannung'?), **L**isten (Gefühle spiegeln), **E**mpower (eigene Ressourcen). (Miller/Rollnick MI, 2023)"

**B1 (295 Zeichen):** "Sehr gut. Was du **nicht** tust: 'Sie müssen aufhören, Rauchen ist ungesund!' (Righting Reflex → der Patient macht zu). Stattdessen RULE: **R**esist (nicht belehren), **U**nderstand (was heißt die Zigarette als 'Entspannung'?), **L**isten (Gefühle spiegeln), **E**mpower (eigene Kraft)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wofür steht RULE im Motivational Interviewing?"
- **Rückseite:** "R = Resist the righting reflex (Reparatur-Impuls widerstehen), U = Understand motivations (Motive verstehen), L = Listen with empathy (empathisch zuhören), E = Empower (Patient stärken). (Miller/Rollnick 2023)"
- **Kategorie:** fachbegriff

---

## Baustein 15: mi-oars-techniken

### Metadaten
- **bausteinId:** patientenberatung-mi-oars
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-15]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient sagt: 'Ich schaffe es einfach nicht, weniger zu essen.' Formuliere **drei verschiedene** Reaktionen — und überlege, welche den Patienten am meisten öffnet."
- **Zugehörige Erwartung:** "z.B. offene Frage, bestätigende Aussage, spiegelnde Reflexion"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "**OARS** sind die vier Kern-Techniken des MI: **O**pen-ended questions (offene Fragen, die nicht mit Ja/Nein beantwortet werden können), **A**ffirmations (bestätigende Anerkennung echter Stärken), **R**eflections (Spiegelungen — gesagtes/empfundenes wiedergeben), **S**ummaries (Zusammenfassungen)."

**B1 (275 Zeichen):** "**OARS** sind die 4 Kern-Techniken in MI: **O** = **offene Fragen** (nicht Ja/Nein), **A** = **bestätigende Anerkennung** (echte Stärken loben), **R** = **Spiegelungen** (wiedergeben, was der Patient sagt oder fühlt), **S** = **Zusammenfassungen**. Vier Techniken, die Gespräche öffnen."

- **Step-Typ:** text (displayFormat: mnemonic — OARS Akronym mit Kernbeispielen)

### Stufe 3 — Erklärung

**C1 (850 Zeichen):**
"**OARS** — die vier Kern-Techniken in MI. Sie sind die **Umsetzung** des MI-Spirit im Gespräch.

**O — Open-ended questions (Offene Fragen)**
Fragen, die nicht mit Ja/Nein beantwortbar sind. Sie öffnen den Raum. Beispiele:
- 'Was bedeutet Ihnen Ihre Gesundheit?'
- 'Wie sieht ein guter Tag bei Ihnen aus?'
- 'Was würde sich ändern, wenn…?'

**A — Affirmations (Bestätigungen / Anerkennungen)**
Echte Stärken und Anstrengungen des Patienten benennen — nicht als Lob, sondern als Wahrnehmung. Nicht: 'Super, dass Sie gekommen sind!' Sondern: 'Dass Sie diesen Termin wahrnehmen, obwohl es Ihnen schwerfällt, zeigt, dass Ihnen Ihre Gesundheit wichtig ist.' Keine Floskeln, sondern spezifisch.

**R — Reflections (Spiegelungen)**
Die Kern-Technik. Du gibst zurück, was der Patient gesagt hat — in deinen Worten. Zwei Ebenen:
- **Einfache Reflexion**: Inhalt wiedergeben ('Sie finden es schwer, weniger zu essen.').
- **Komplexe Reflexion**: Gefühl oder Bedeutung hinzufügen ('Das Essen gibt Ihnen Trost, wenn der Alltag anstrengt.').

Reflexionen sind **nicht** Fragen — sie sind **Aussagen**. Sie öffnen und klären.

**S — Summaries (Zusammenfassungen)**
Gesagtes bündeln — am Ende eines Abschnitts oder des Gesprächs. Zeigt: Ich habe zugehört. Hilft dem Patienten, sich selbst zu hören. Enthält oft erstes **Change Talk**.

(Miller/Rollnick MI, 2023 4. Aufl.)"

**B1 (730 Zeichen):**
"**OARS** sind die 4 Kern-Techniken in MI. Sie setzen den MI-Spirit im Gespräch **um**.

**O — Open-ended questions (Offene Fragen)**
Fragen, die **nicht mit Ja/Nein** beantwortet werden. Sie **öffnen** das Gespräch. Beispiele:
- 'Was bedeutet Ihnen Ihre Gesundheit?'
- 'Wie sieht ein guter Tag bei Ihnen aus?'

**A — Affirmations (Bestätigungen)**
Echte Stärken **nennen** — nicht als Lob, sondern als **Beobachtung**. Nicht: 'Super, dass Sie da sind!' Sondern: 'Sie sind heute gekommen, obwohl es Ihnen schwerfällt — das zeigt, dass Ihnen Ihre Gesundheit wichtig ist.' Spezifisch, nicht Floskel.

**R — Reflections (Spiegelungen)**
Die wichtigste Technik. Du gibst zurück, was der Patient **sagt** — in deinen Worten. Zwei Stufen:
- **Einfach**: Inhalt wiedergeben ('Sie finden es schwer, weniger zu essen.').
- **Komplex**: Gefühl hinzu ('Das Essen gibt Ihnen Trost, wenn der Alltag anstrengt.').

Reflexionen sind **keine Fragen** — sie sind **Aussagen**. Sie öffnen und klären.

**S — Summaries (Zusammenfassungen)**
Das Gesagte **bündeln** — am Ende von einem Abschnitt oder Gespräch. Zeigt: Ich habe zugehört. Hilft dem Patienten, sich selbst zu hören. Oft kommt dabei **Change Talk**.

(Miller/Rollnick MI, 2023)"

- **Erklärungs-Step:** stepType `stepbystep` (4 OARS-Techniken mit je 2-3 Beispielen)
- **Glossar-Begriffe:** [OARS, offene Frage, Affirmation, Reflexion, Summary, Change Talk]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Reflexionen sind Fragen, die der Fachperson helfen, den Patienten zu verstehen"**
- **Fachbegriff:** Frage-Aussage-Verwechslung
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — Reflexionen sind **Aussagen**, keine Fragen. Der Unterschied: Sie enden **nicht mit Fragezeichen in der Stimme**, sondern bestätigen. Beispiel: 'Sie finden es schwer, weniger zu essen' (Aussage, senkende Intonation) — nicht 'Finden Sie es schwer, weniger zu essen?' (Frage). Merke: Reflexion = Aussage, nicht Frage."
- **Feedback (B1, 285 Zeichen):** "Nicht ganz — Reflexionen sind **Aussagen**, keine Fragen. Der Unterschied: Am Satzende geht deine Stimme **runter**, nicht hoch. Beispiel: 'Sie finden es schwer, weniger zu essen.' (Aussage) — nicht 'Finden Sie es schwer?' (Frage). Merke: Reflexion = Aussage, kein Fragezeichen."

**D2: "Affirmationen sind dasselbe wie Lob ('Super gemacht!')"**
- **Fachbegriff:** Lob-Affirmations-Verwechslung
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — Lob ('Super!', 'Toll!') ist **Werten** (Hierarchie: ich oben, du unten) und meist floskelhaft. Affirmation ist **Wahrnehmen** echter Stärken: 'Sie sind heute gekommen, obwohl es Ihnen schwerfällt — das zeigt Stärke.' Spezifisch, beobachtend, nicht wertend. Merke: Affirmation = Wahrnehmung, nicht Bewertung."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — Lob ('Super!') ist **Wertung** (ich oben, du unten) und oft nur Floskel. Affirmation ist **Wahrnehmung** von echten Stärken: 'Sie sind heute gekommen, obwohl es schwer war — das zeigt Kraft.' Spezifisch, **beobachtend**, nicht wertend. Merke: Affirmation = Wahrnehmung."

**D3: "Offene Fragen sind alle Fragen, die keine Ja/Nein-Antwort haben"**
- **Fachbegriff:** Formal-Offene-Fragen-Irrtum
- **Feedback (C1, 335 Zeichen):** "Nicht ganz — **grammatikalisch** offen reicht nicht. 'Warum nicht?' ist grammatikalisch offen, wirkt aber **geschlossen** (vorwurfsvoll). Echte offene Fragen **öffnen** den Gesprächsraum: 'Wie sieht das bei Ihnen aus?', 'Was ist Ihnen wichtig?'. Sie laden zum Erzählen ein, zwingen nicht zur Rechtfertigung. Merke: Öffnung = nicht nur Grammatik."
- **Feedback (B1, 300 Zeichen):** "Nicht ganz — **grammatisch** offen reicht nicht. 'Warum nicht?' ist offen, wirkt aber **geschlossen** (wie Vorwurf). Echte offene Fragen **öffnen** das Gespräch: 'Wie sieht das bei Ihnen aus?', 'Was ist Ihnen wichtig?'. Sie laden ein — ohne Rechtfertigung. Merke: Offen = öffnen, nicht nur Grammatik."

### Richtig-Feedback
**C1 (340 Zeichen):** "Sehr gut. Drei Reaktionen auf 'Ich schaffe es einfach nicht, weniger zu essen': **Offene Frage** ('Was macht es gerade schwer?'), **Affirmation** ('Dass Sie das hier ansprechen, zeigt, dass Sie das Thema ernst nehmen.'), **Reflexion** ('Essen ist gerade mehr als Nahrung für Sie.'). Die komplexe Reflexion öffnet oft am tiefsten. (Miller/Rollnick 2023)"

**B1 (295 Zeichen):** "Sehr gut. Drei Reaktionen: **Offene Frage** ('Was macht es gerade schwer?'), **Affirmation** ('Dass Sie das ansprechen, zeigt: Sie nehmen das Thema ernst.'), **Reflexion** ('Essen ist gerade mehr als Nahrung für Sie.'). Die **komplexe Reflexion** öffnet oft am meisten — sie trifft das Gefühl."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wofür steht OARS im Motivational Interviewing?"
- **Rückseite:** "O = Open-ended questions (offene Fragen), A = Affirmations (bestätigende Anerkennung), R = Reflections (Spiegelungen — einfach/komplex), S = Summaries (Zusammenfassungen). (Miller/Rollnick 2023)"
- **Kategorie:** fachbegriff

---

## Baustein 16: change-talk-erkennen

### Metadaten
- **bausteinId:** patientenberatung-change-talk
- **bloomLevel:** 5
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-16]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient sagt: 'Vielleicht könnte ich mal versuchen, abends keine Cola mehr zu trinken.' Wie interpretierst du diesen Satz — und warum ist er für MI wichtig?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (295 Zeichen):** "**Change Talk** sind Äußerungen des Patienten, die **in Richtung Veränderung** zeigen. Sechs Typen (DARN-CAT): **D**esire (Wunsch), **A**bility (Fähigkeit), **R**easons (Gründe), **N**eed (Bedürfnis), **C**ommitment (Festlegung), **A**ctivation, **T**aking steps. Je konkreter, desto näher zur Tat."

**B1 (280 Zeichen):** "**Change Talk** sind Sätze vom Patienten, die **in Richtung Veränderung** zeigen. Sechs Typen (DARN-CAT): **D**esire (Wunsch), **A**bility (können), **R**easons (Gründe), **N**eed (müssen), **C**ommitment (werde es tun), **A**ctivation, **T**aking steps (erste Schritte). Je konkreter, desto näher."

- **Step-Typ:** text (displayFormat: mnemonic — DARN-CAT Akronym + Beispielen)

### Stufe 3 — Erklärung

**C1 (870 Zeichen):**
"**Change Talk** ist das Kern-Konzept des Motivational Interviewing. Miller/Rollnick zeigten in zahlreichen Studien: **Mehr Change Talk im Gespräch → mehr tatsächliche Verhaltensänderung nach dem Gespräch**. Deine Aufgabe als Fachperson: Change Talk **erkennen**, **hervorrufen** und **stärken**.

**DARN-CAT — sechs Typen von Change Talk:**

**Vorbereitendes Change Talk (DARN):**
- **D**esire — Wunsch: 'Ich würde gerne weniger rauchen.' / 'Ich möchte mich fitter fühlen.'
- **A**bility — Fähigkeit: 'Ich könnte schon mal eine Woche ohne Cola auskommen.' / 'Ich habe früher mal Sport gemacht.'
- **R**easons — Gründe: 'Wenn ich nicht so viel wiege, tun mir die Knie weniger weh.'
- **N**eed — Bedürfnis/Notwendigkeit: 'Ich muss aufhören zu trinken, sonst verliere ich meinen Job.'

**Mobilisierendes Change Talk (CAT):**
- **C**ommitment — Festlegung: 'Ab Montag fange ich an.' / 'Ich werde das jetzt machen.'
- **A**ctivation — Aktivierung: 'Ich bin bereit…' / 'Ich werde versuchen…'
- **T**aking steps — erste Schritte: 'Ich habe letzte Woche schon zwei Tage ausgelassen.'

**Hierarchie:** DARN ist **vorbereitend** (Wunsch, Fähigkeit). CAT ist **mobilisierend** (Tat beginnt). CAT sagt die Verhaltensänderung stärker voraus als DARN.

**Gegenspieler — Sustain Talk:** Äußerungen gegen Veränderung ('Ich kann das nicht', 'Das bringt nichts'). Sustain Talk wird nicht bekämpft, sondern **reflektiert** und in Change Talk **überführt**.

(Miller/Rollnick MI, 2023 4. Aufl.)"

**B1 (760 Zeichen):**
"**Change Talk** ist das Kern-Konzept von MI. Miller/Rollnick haben in Studien gezeigt: **Mehr Change Talk im Gespräch → mehr Verhaltens-Änderung danach**. Deine Aufgabe: Change Talk **erkennen**, **aufrufen** und **stärken**.

**DARN-CAT — sechs Typen von Change Talk:**

**Vorbereitend (DARN):**
- **D**esire — Wunsch: 'Ich würde gerne weniger rauchen.'
- **A**bility — Können: 'Ich könnte eine Woche ohne Cola auskommen.'
- **R**easons — Gründe: 'Wenn ich abnehme, tun mir die Knie weniger weh.'
- **N**eed — Bedürfnis: 'Ich muss aufhören zu trinken, sonst verliere ich meinen Job.'

**Mobilisierend (CAT):**
- **C**ommitment — Festlegung: 'Ab Montag fange ich an.'
- **A**ctivation — Aktivierung: 'Ich bin bereit…'
- **T**aking steps — Erste Schritte: 'Ich habe letzte Woche schon zwei Tage ausgelassen.'

**Stufe:** DARN ist **vorbereitend** (Wunsch, Können). CAT ist **mobilisierend** (Tat beginnt). CAT zeigt: die Änderung kommt **näher**.

**Gegenteil — Sustain Talk:** Sätze **gegen** die Veränderung ('Ich kann das nicht', 'Bringt nichts'). Sustain Talk bekämpfst du **nicht**, sondern du **reflektierst** ihn und führst ihn zu Change Talk.

(Miller/Rollnick MI, 2023)"

- **Erklärungs-Step:** stepType `categorize` (Sätze in DARN / CAT / Sustain einsortieren)
- **Glossar-Begriffe:** [Change Talk, Sustain Talk, DARN-CAT, Commitment]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Change Talk ist jede Äußerung, die der Patient während der Beratung macht"**
- **Fachbegriff:** Change-Talk-Ausweitung
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — Change Talk sind **spezifisch** Äußerungen, die **in Richtung Veränderung** zeigen (DARN-CAT). Das Gegenteil ist **Sustain Talk** — Äußerungen, die die **aktuelle** Situation verteidigen ('Es ist halt meine einzige Entspannung'). Beides kommt in fast jedem Gespräch vor. Merke: Change Talk = Änderungs-Richtung."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — Change Talk sind **nur** Sätze, die **in Richtung Änderung** gehen (DARN-CAT). Das Gegenteil heißt **Sustain Talk** — Sätze, die die **jetzige** Situation verteidigen ('Das ist halt meine einzige Entspannung'). Beides kommt oft vor. Merke: Change Talk = Änderungs-Richtung."

**D2: "Je häufiger 'ich will' vorkommt, desto wahrscheinlicher ist die Verhaltensänderung"**
- **Fachbegriff:** Desire-Überschätzung
- **Feedback (C1, 330 Zeichen):** "Nicht ganz — **Desire** (Wunsch) ist **vorbereitendes** Change Talk. Der eigentliche Prädiktor ist **Commitment** ('Ich werde…', 'Ab Montag…') — mobilisierendes Change Talk (CAT). Ein Patient kann jahrelang sagen 'Ich will', ohne je etwas zu tun. Wenn er sagt 'Ich werde' + Zeitrahmen, steigt die Wahrscheinlichkeit deutlich. Merke: CAT schlägt DARN."
- **Feedback (B1, 295 Zeichen):** "Nicht ganz — **'Ich will'** ist **vorbereitend** (Desire in DARN). Wichtiger ist **Commitment** ('Ich werde…', 'Ab Montag…') — das ist **mobilisierend** (CAT). Jemand kann jahrelang 'Ich will' sagen, ohne was zu tun. Sagt er 'Ich werde' mit Zeitrahmen, steigt die Chance. Merke: CAT ist stärker als DARN."

**D3: "Sustain Talk sollte man aktiv widerlegen, damit der Patient seine Fehler einsieht"**
- **Fachbegriff:** Argumenten-Kampf
- **Feedback (C1, 340 Zeichen):** "Nicht ganz — **Sustain Talk widerlegen = klassischer Anti-MI-Fehler**. Wer Sustain Talk bekämpft, verstärkt ihn (der Patient muss seine Position verteidigen). Korrekt: Sustain Talk **reflektieren** ('Die Zigarette hilft Ihnen beim Runterkommen'), Ambivalenz **sichtbar machen**, dann nach Change Talk fragen. Merke: Nicht widerlegen — reflektieren."
- **Feedback (B1, 300 Zeichen):** "Nicht ganz — Sustain Talk **widerlegen** ist ein Fehler in MI. Wenn du kämpfst, wird der Patient seine Position **stärker** verteidigen. Besser: **spiegeln** ('Die Zigarette hilft Ihnen beim Runterkommen'), **Ambivalenz zeigen**, dann Change Talk **auf-rufen**. Merke: Nicht kämpfen — spiegeln."

### Richtig-Feedback
**C1 (340 Zeichen):** "Sehr gut erkannt. 'Vielleicht könnte ich mal versuchen, abends keine Cola mehr zu trinken' enthält **Ability** (könnte) und **Desire** (versuchen) — also **vorbereitendes Change Talk (DARN)**. Wichtig für dich: reflektieren, verstärken, nach Konkretisierung fragen ('Ab wann? Wie würden Sie das anstellen?') — um zu CAT zu kommen."

**B1 (295 Zeichen):** "Sehr gut. 'Vielleicht könnte ich mal versuchen…' enthält **Ability** (könnte) und **Desire** (versuchen) — also **vorbereitendes Change Talk (DARN)**. Wichtig: **reflektieren**, **verstärken**, nach **Konkretisierung** fragen ('Ab wann? Wie genau?') — so kommst du zu **CAT** (Commitment)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet DARN-CAT im Motivational Interviewing?"
- **Rückseite:** "Vorbereitendes Change Talk: Desire/Ability/Reasons/Need. Mobilisierendes Change Talk: Commitment/Activation/Taking steps. CAT prognostiziert Verhaltensänderung stärker als DARN. (Miller/Rollnick 2023)"
- **Kategorie:** fachbegriff

---

## Baustein 17: widerstand-rolling

### Metadaten
- **bausteinId:** patientenberatung-rolling-resistance
- **bloomLevel:** 5
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-17]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient sagt im Beratungsgespräch: 'Sie erzählen mir das Gleiche wie alle anderen. Das bringt doch eh nichts.' Was **tust** du in diesem Moment — und was **vermeidest** du?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "**Rolling with Resistance** (heute in MI-4. Aufl. als 'Discord' + 'Sustain Talk' differenziert): Widerstand nicht konfrontieren, sondern **umgehen** — spiegeln, validieren, Autonomie betonen, Fokus wechseln. Grundregel: **Widerstand ist Information**, kein Feind. Reparatur-Reflex abschalten."

**B1 (275 Zeichen):** "**Rolling with Resistance** heißt: Mit dem Widerstand **gehen**, nicht **dagegen**. Nicht konfrontieren, sondern **spiegeln**, **validieren**, **Autonomie betonen**, **Fokus ändern**. Die Grundregel: **Widerstand ist Information**, kein Feind. Du machst den Reparatur-Reflex aus."

- **Step-Typ:** text (displayFormat: procontra — Kampf vs. Rolling)

### Stufe 3 — Erklärung

**C1 (860 Zeichen):**
"**'Rolling with Resistance'** war lange ein zentrales MI-Prinzip. In der 4. Auflage (Miller/Rollnick 2023) wurde der Begriff **'Widerstand'** aufgegeben — weil er den Patienten pathologisiert. Stattdessen: **'Sustain Talk'** (Sätze gegen Veränderung) und **'Discord'** (Spannung in der Beziehung).

**Vier Strategien, um mit Widerstand umzugehen:**

1. **Spiegeln (Reflection)** — Sustain Talk zurückgeben, ohne zu diskutieren. Ziel: die Person hört sich selbst.
   - Patient: 'Das bringt doch eh nichts.' → Du: 'Sie haben schon viele Versuche hinter sich, und es hat nicht funktioniert.'

2. **Verstärkte Spiegelung (Amplified Reflection)** — leicht übertrieben zurückgeben, sodass die Person selbst mildert.
   - Patient: 'Ich kann das nicht.' → Du: 'Es gibt keinen Weg, auf dem das für Sie funktionieren könnte.'
   - Patient (reagiert): 'Na ja, so extrem ist es auch nicht…' → Du hast Change Talk **provoziert** durch Spiegelung.

3. **Doppelseitige Spiegelung (Double-Sided Reflection)** — beide Seiten der Ambivalenz nennen.
   - 'Einerseits nervt Sie das Rauchen, weil es so teuer ist. Andererseits hilft es Ihnen nach stressigen Tagen.'

4. **Autonomie betonen** — Die Entscheidung bleibt beim Patienten. Explizit benennen.
   - 'Es ist Ihre Entscheidung. Niemand kann Sie zwingen.'

**Was du **nicht** tust:** Argumentieren, warnen, Fakten auftürmen, moralisieren. Der 'Righting Reflex' verstärkt Widerstand.

(Miller/Rollnick MI, 2023 4. Aufl.)"

**B1 (760 Zeichen):**
"**'Rolling with Resistance'** war lange ein MI-Prinzip. In der 4. Auflage (Miller/Rollnick 2023) sagt man nicht mehr **'Widerstand'**. Der Begriff macht den Patienten krank. Jetzt sagt man **'Sustain Talk'** (Sätze gegen Änderung) und **'Discord'** (Spannung in der Beziehung).

**Vier Strategien gegen Widerstand:**

1. **Spiegeln (Reflection)** — Die Sätze des Patienten zurückgeben, ohne zu diskutieren. Ziel: der Patient hört sich selbst.
   - Patient: 'Das bringt doch eh nichts.' → Du: 'Sie haben schon viele Versuche gemacht — und es hat nicht funktioniert.'

2. **Verstärkte Spiegelung** — Leicht übertrieben zurückgeben, sodass der Patient **selbst mildert**.
   - Patient: 'Ich kann das nicht.' → Du: 'Für Sie gibt es keinen Weg, auf dem das funktionieren könnte.'
   - Patient: 'Na ja, so extrem ist es auch nicht…' → **Change Talk provoziert**.

3. **Doppelseitige Spiegelung** — Beide Seiten nennen.
   - 'Einerseits nervt Sie das Rauchen wegen der Kosten. Andererseits hilft es nach stressigen Tagen.'

4. **Autonomie betonen** — Die Entscheidung bleibt beim Patienten. Sag es **deutlich**.
   - 'Es ist Ihre Entscheidung. Niemand kann Sie zwingen.'

**Was du **nicht** tust:** Argumentieren, warnen, Fakten auftürmen, moralisieren. Der 'Righting Reflex' macht Widerstand **stärker**. (Miller/Rollnick 2023)"

- **Erklärungs-Step:** stepType `comparison` (4 Rolling-Strategien mit Beispielen)
- **Glossar-Begriffe:** [Rolling with Resistance, Sustain Talk, Discord, Amplified Reflection, Double-Sided Reflection]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei Widerstand muss man dem Patienten deutlich machen, dass er irrt"**
- **Fachbegriff:** Konfrontations-Ansatz
- **Feedback (C1, 340 Zeichen):** "Nicht ganz — Konfrontation ist der **klassische Anti-MI-Fehler**. Sie aktiviert psychologische Reaktanz: Der Patient verteidigt seine Position **stärker**, je mehr du argumentierst. Das ist eine der stabilsten Befunde der MI-Forschung. Stattdessen: spiegeln, validieren, Autonomie betonen, Ambivalenz zeigen. Merke: Konfrontation verstärkt Widerstand."
- **Feedback (B1, 300 Zeichen):** "Nicht ganz — Konfrontation ist der **klassische Fehler** in MI. Der Patient verteidigt seine Position **stärker**, je mehr du argumentierst. Das ist ein stabiler Befund der Forschung. Besser: **spiegeln**, **validieren**, **Autonomie betonen**, **Ambivalenz zeigen**. Merke: Konfrontation macht Widerstand größer."

**D2: "Eine verstärkte Spiegelung ist manipulativ und sollte vermieden werden"**
- **Fachbegriff:** Manipulations-Verwechslung
- **Feedback (C1, 340 Zeichen):** "Nicht ganz — verstärkte Spiegelung ist **keine Manipulation**, solange sie im MI-Spirit gemacht wird (Partnerschaft, Akzeptanz, Mitgefühl). Sie ist **nicht sarkastisch** oder ironisch, sondern eine **ehrliche** Rückgabe — leicht zugespitzt, damit der Patient selbst mildert. Manipulation wäre das Gegenteil: andere Worte unterschieben. Merke: Zuspitzen ≠ Manipulieren."
- **Feedback (B1, 305 Zeichen):** "Nicht ganz — verstärkte Spiegelung ist **keine Manipulation**, wenn sie im MI-Spirit passiert (Partnerschaft, Akzeptanz, Mitgefühl). Sie ist **nicht sarkastisch**, sondern eine **ehrliche** Rückgabe — **leicht zugespitzt**. Der Patient mildert **selbst**. Manipulieren wäre anders. Merke: Zuspitzen ≠ Manipulation."

**D3: "Autonomie zu betonen bedeutet, dem Patienten egal zu sein"**
- **Fachbegriff:** Autonomie-Interpretation
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — **Autonomie betonen** ≠ Gleichgültigkeit. Du kannst gleichzeitig sagen: 'Es ist Ihre Entscheidung' **und** 'Ich mache mir Sorgen um Sie' — beides im MI-Spirit. Autonomie-Anerkennung bedeutet: die Entscheidungsmacht liegt dort, wo sie hingehört — beim Patienten. Echtes Anliegen ist damit nicht ausgeschlossen. Merke: Autonomie + Anteilnahme."
- **Feedback (B1, 295 Zeichen):** "Nicht ganz — **Autonomie betonen** heißt **nicht** 'ist mir egal'. Du kannst beides sagen: 'Es ist Ihre Entscheidung.' **und** 'Ich mache mir Sorgen um Sie.' Beides ist im MI-Spirit. Autonomie heißt: **Er entscheidet**, nicht du. Aber du kümmerst dich. Merke: Autonomie + Anteilnahme."

### Richtig-Feedback
**C1 (340 Zeichen):** "Sehr gut. Du **spiegelst** ('Sie haben viele Versuche hinter sich, und es hat nicht geholfen — das ist frustrierend.'), **validierst** das Gefühl, **betonst Autonomie** ('Es liegt in Ihrer Hand, wie wir weitermachen'). Du **vermeidest**: Argumente, Warnungen, Gegenbeispiele, Moralisieren — all das verstärkt Widerstand. (Miller/Rollnick 2023)"

**B1 (295 Zeichen):** "Sehr gut. Du **spiegelst** ('Sie haben schon viele Versuche gemacht — und es hat nicht geholfen. Das ist frustrierend.'), **validierst** das Gefühl, **betonst Autonomie** ('Es liegt bei Ihnen'). Du **vermeidest**: Argumente, Warnungen, Moralisieren — all das macht den Widerstand stärker."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 4 Strategien gibt es für 'Rolling with Resistance' in MI?"
- **Rückseite:** "(1) Einfache Spiegelung, (2) verstärkte Spiegelung (zugespitzt), (3) doppelseitige Spiegelung (beide Seiten), (4) Autonomie betonen. Kein Argumentieren. (Miller/Rollnick 2023: jetzt 'Sustain Talk' + 'Discord')"
- **Kategorie:** handlung

---

## Baustein 18: ambivalenz-bearbeiten

### Metadaten
- **bausteinId:** patientenberatung-ambivalenz
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-18]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Patientin: 'Ich weiß, ich müsste Sport machen — aber ich schaffe es einfach nicht. Ich will ja, aber abends bin ich zu müde.' Was sagt ihr innerer Konflikt dir — und wie gehst du damit um?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (295 Zeichen):** "**Ambivalenz** ist in MI der **normale** Zustand vor jeder Verhaltensänderung — nicht ein Hindernis. Beide Seiten (Pro und Contra) gleichzeitig gültig. Methode: **Entscheidungswaage** (Pro/Contra von Beibehalten und Veränderung), **doppelseitige Reflexion**, **Evocation** von Change Talk."

**B1 (280 Zeichen):** "**Ambivalenz** heißt: **zwei Gefühle gleichzeitig**. Sie ist in MI **normal** vor jeder Veränderung — kein Hindernis. Beide Seiten (Pro und Contra) sind **gleichzeitig gültig**. Methode: **Entscheidungswaage** (4 Felder), **doppelseitige Reflexion**, **Change Talk aufrufen**."

- **Step-Typ:** text (displayFormat: procontra — Entscheidungswaage 2×2)

### Stufe 3 — Erklärung

**C1 (900 Zeichen):**
"**Ambivalenz** ist in MI ein zentraler Begriff. Sie beschreibt den **gleichzeitigen Wunsch**, etwas zu verändern **und** etwas beizubehalten. Ambivalenz ist **kein Zeichen von Schwäche oder fehlender Motivation** — sie ist der **normale Zustand** vor jeder bedeutsamen Verhaltensänderung.

**Die Entscheidungswaage (Decisional Balance, 2×2):**

| | Beibehalten (Status quo) | Verändern |
|---|---|---|
| **Positiv** | Vorteile des Bleibens | Vorteile des Änderns |
| **Negativ** | Nachteile des Bleibens | Nachteile des Änderns |

**Beispiel: Sport machen**
- **Positiv-Beibehalten:** Gewohnheit, keine Anstrengung, mehr Zeit am Abend.
- **Negativ-Beibehalten:** Unfit, schlafe schlecht, habe Rückenschmerzen.
- **Positiv-Verändern:** Fitter werden, weniger Schmerzen, besser schlafen.
- **Negativ-Verändern:** Zeit investieren, Überwindung, Ermüdung.

**Was du tust:**
1. **Beide Seiten ernst nehmen** — nicht nur die Pro-Verändern-Argumente hervorheben.
2. **Doppelseitige Reflexion** — 'Einerseits wollen Sie fit werden, andererseits fehlt Ihnen abends die Kraft.'
3. **Evocation** — Change-Talk-Äußerungen aufgreifen und vertiefen ('Was wäre der erste kleine Schritt?').
4. **Autonomie betonen** — Entscheidung bleibt beim Patienten.

**Wichtig (MI-4.-Aufl.-Differenzierung):** Die Entscheidungswaage wird in der 4. Auflage **nur** empfohlen, wenn der Patient **tatsächlich noch unentschieden** ist. Bei bereits klarem Veränderungswunsch (CAT vorhanden) kann die Pro/Contra-Analyse Ambivalenz **zurückholen**. Dann besser: direkt bei Change Talk bleiben. (Miller/Rollnick MI, 2023 4. Aufl.)"

**B1 (800 Zeichen):**
"**Ambivalenz** heißt: Du willst **gleichzeitig zwei Sachen**. Etwas **verändern** und etwas **beibehalten**. In MI ist Ambivalenz **kein Problem** — sie ist **normal** vor jeder Verhaltens-Änderung.

**Entscheidungswaage — 4 Felder:**

| | Beibehalten (Status quo) | Verändern |
|---|---|---|
| **Positiv** | Vorteile des Bleibens | Vorteile des Änderns |
| **Negativ** | Nachteile des Bleibens | Nachteile des Änderns |

**Beispiel: Sport machen**
- **Positiv-Beibehalten:** Gewohnheit, keine Anstrengung, Zeit am Abend.
- **Negativ-Beibehalten:** Nicht fit, schlecht schlafen, Rückenschmerzen.
- **Positiv-Verändern:** Fitter, weniger Schmerzen, besser schlafen.
- **Negativ-Verändern:** Zeit, Überwindung, Ermüdung.

**Was du tust:**
1. **Beide Seiten ernst nehmen** — nicht nur die 'Pro-Verändern'-Gründe sehen.
2. **Doppelseitige Reflexion** — 'Einerseits wollen Sie fit werden, andererseits fehlt Ihnen abends die Kraft.'
3. **Evocation** — Change Talk aufgreifen ('Was wäre der erste kleine Schritt?').
4. **Autonomie betonen** — Die Entscheidung bleibt bei der Patientin.

**Wichtig (MI-4. Aufl.):** Die Entscheidungs-Waage passt **nur**, wenn die Patientin wirklich **noch unentschieden** ist. Ist sie schon sicher (CAT da), holt die Pro/Contra-Analyse die Ambivalenz **zurück**. Dann besser: bei **Change Talk** bleiben. (Miller/Rollnick 2023)"

- **Erklärungs-Step:** stepType `matrix` (Entscheidungswaage 2×2 mit Beispiel)
- **Glossar-Begriffe:** [Ambivalenz, Entscheidungswaage, Decisional Balance, Evocation]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ambivalenz zeigt, dass der Patient noch nicht wirklich motiviert ist"**
- **Fachbegriff:** Motivations-Defizit-Interpretation
- **Feedback (C1, 330 Zeichen):** "Nicht ganz — **Ambivalenz ist der normale Zustand vor Veränderung**, nicht ein Zeichen fehlender Motivation. Praktisch jeder, der einen bedeutsamen Schritt tut, hat vorher beide Seiten gespürt. Die Arbeit mit Ambivalenz ist **Kern** von MI — nicht Umgehung von 'fehlender Motivation'. Merke: Ambivalenz ist normal, kein Defizit."
- **Feedback (B1, 295 Zeichen):** "Nicht ganz — Ambivalenz ist **normal** vor einer Veränderung, **kein** Defizit. Fast jeder, der etwas Großes verändert, hat vorher beide Seiten gespürt. Die Arbeit mit Ambivalenz ist **Kern** von MI. Merke: Ambivalenz = normal, nicht fehlende Motivation."

**D2: "Bei Ambivalenz sollte man dem Patienten zeigen, dass die Pro-Verändern-Seite stärker ist"**
- **Fachbegriff:** Einseitige-Gewichtung
- **Feedback (C1, 335 Zeichen):** "Nicht ganz — **beide Seiten** müssen ernst genommen werden. Wenn du nur Pro-Verändern-Gründe betonst, lädst du den Patienten ein, die **andere Seite** zu verteidigen (Sustain Talk). Die wirksame Methode: beide Seiten **gleich** spiegeln, den Patienten selbst gewichten lassen. Er kennt sein Leben. Merke: Beide Seiten gelten — der Patient wählt."
- **Feedback (B1, 300 Zeichen):** "Nicht ganz — **beide Seiten** müssen ernst genommen werden. Wenn du nur die Pro-Seite betonst, verteidigt der Patient die **andere Seite** (Sustain Talk). Besser: beide Seiten **gleich spiegeln**, den Patienten selbst gewichten lassen. Er kennt sein Leben. Merke: Beide Seiten zählen."

**D3: "Die Entscheidungswaage sollte in jedem MI-Gespräch verwendet werden"**
- **Fachbegriff:** Universal-Anwendung
- **Feedback (C1, 350 Zeichen):** "Nicht ganz — in der 4. Auflage (Miller/Rollnick 2023) ist die Entscheidungswaage **spezifischer** positioniert. Sie hilft, wenn der Patient **wirklich unentschieden** ist. Bei schon vorhandenem Change Talk / CAT **verstärkt** sie paradoxerweise die Ambivalenz — denn sie holt Sustain Talk zurück. Dann: direkt bei Change Talk bleiben, vertiefen. Merke: Nicht immer, nur bei echter Ambivalenz."
- **Feedback (B1, 310 Zeichen):** "Nicht ganz — in der 4. Auflage (Miller/Rollnick 2023) passt die Entscheidungs-Waage **nur**, wenn der Patient **wirklich unentschieden** ist. Wenn schon Change Talk da ist, macht die Pro/Contra-Analyse die Ambivalenz **stärker**. Dann: bei Change Talk **bleiben**. Merke: Nur bei echter Ambivalenz."

### Richtig-Feedback
**C1 (350 Zeichen):** "Sehr gut gehört. Der innere Konflikt der Patientin ist klassische **Ambivalenz** (DARN mit Sustain Talk gemischt). Du nutzt: doppelseitige Reflexion ('Einerseits wollen Sie fit werden, andererseits fehlt Ihnen abends die Kraft'), fragst nach Ressourcen ('Was hat Ihnen in anderen Situationen geholfen?'), betonst Autonomie, rufst Change Talk auf. (Miller/Rollnick 2023)"

**B1 (305 Zeichen):** "Sehr gut gehört. Der innere Konflikt ist **Ambivalenz** (Wunsch + Hindernis). Du nutzt: **doppelseitige Reflexion** ('Einerseits wollen Sie fit werden, andererseits fehlt Ihnen die Kraft'), fragst nach **Ressourcen** ('Was hat früher geholfen?'), **betonst Autonomie**, **rufst Change Talk auf**."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Ambivalenz in MI — und mit welcher Methode arbeitet man mit ihr?"
- **Rückseite:** "Ambivalenz = normaler Zustand vor Veränderung (beide Seiten gleichzeitig gültig). Methode: Entscheidungswaage 2×2 (Pro/Contra Beibehalten vs. Verändern), doppelseitige Reflexion, Evocation. Nur bei echter Unentschiedenheit einsetzen. (Miller/Rollnick 2023)"
- **Kategorie:** handlung

---
