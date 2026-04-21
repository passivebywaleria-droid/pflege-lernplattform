# Wissensbausteine: Sturz-Prophylaxe

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `sturz-prophylaxe` |
| ceId | `ce-02` |
| cluster | B (Mobilität) |
| wissensart | handlung |
| geschaetzteUE | 4 |
| zielzeitMin | 99 (4 UE × 45 × 0,55) |
| bausteineAnzahl | 13 |
| erstellt | 2026-04-22 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 23%, Bloom 3-4: 54%, Bloom 5-6: 23%
**Zeit-Summe (Stufen 2+3 aller Bausteine):** ~55 Min → Rest (~45 Min) für Übungs-Steps im Sessionplan.

**Primärquellen:** DNQP (2022) Expertenstandard Sturzprophylaxe, 2. Aktualisierung; WHO (2007) Global Report on Falls Prevention; § 1906a BGB; Cochrane Review Falls Prevention 2023; Beers-Liste 2023.

---

## Baustein 1: sturz-definition

### Metadaten
- **bausteinId:** sturz-prophylaxe-sturz-definition
- **bloomLevel:** 1
- **wissensart:** definition
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Was, glaubst du, zählt alles als Sturz? Zählt es auch, wenn der Patient sich gerade noch abfängt?"
- **Step-Typ:** freetext (kurz, aktiviert Vorwissen)

### Stufe 2 — Hinweis

**C1:** "Ein Sturz ist laut WHO ein unbeabsichtigtes Landen auf dem Boden oder einer tieferen Ebene. Wichtig: Auch abgefangene Stürze (Near-Miss) zählen als Sturzereignis und werden dokumentiert — sie sind Warnsignale für ein erhöhtes Risiko." (240 Zeichen)

**B1:** "Ein Sturz ist, wenn jemand unabsichtlich auf den Boden fällt. Auch wenn man sich am Tisch festhält und fast fällt, zählt das als Sturz. Wir nennen das 'Near-Miss'. Auch diese Fast-Stürze werden aufgeschrieben." (215 Zeichen)

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (640 Zeichen):**
"Die WHO definiert einen Sturz als 'Ereignis, bei dem die betroffene Person unbeabsichtigt auf dem Boden oder einer tieferen Ebene landet'. Drei Aspekte sind entscheidend: **unbeabsichtigt** (wer sich bewusst hinsetzt, stürzt nicht), **tiefere Ebene** (auch vom Stuhl zu rutschen ist ein Sturz) und **Ereignis** (kein Prozess, sondern ein Moment). Auch **Near-Miss** — wenn jemand sich noch abfängt oder von einer Pflegekraft aufgefangen wird — gehört dazu und muss dokumentiert werden. Warum? Weil der nächste Sturz vielleicht nicht abgefangen wird. Merke: Jeder Sturz ist ein Warnsignal, nicht das Ergebnis, zählt."

**B1 (480 Zeichen):**
"Die WHO sagt: Ein Sturz ist, wenn jemand unabsichtlich auf den Boden fällt. Drei Dinge sind wichtig: Es passiert **unabsichtlich** (wer sich setzen will, stürzt nicht). Man fällt auf eine **tiefere Ebene** (Boden, Stuhl — zählt auch). Es ist ein **schneller Moment**. Auch **Near-Miss** (= fast gefallen, aber abgefangen) ist ein Sturz. Warum? Weil es beim nächsten Mal schlimmer sein kann. Merke: Jeden Sturz und jeden Near-Miss aufschreiben."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Sturz, Near-Miss]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Sturz ist erst ein Sturz, wenn der Patient verletzt ist"**
- **Fachbegriff:** Verletzung-zentrierte Fehldefinition
- **Feedback (C1, 165 Zeichen):** "Naher dran als du denkst — aber die Verletzung ist die Folge, nicht die Definition. Auch ein verletzungsfreier Sturz ist ein Sturz und muss dokumentiert werden. Merke: Das Ereignis zählt, nicht der Schaden."
- **Feedback (B1, 155 Zeichen):** "Gut gedacht — aber auch ohne Verletzung ist es ein Sturz. Der Sturz selbst ist das Ereignis. Die Verletzung kann dazukommen oder nicht. Merke: Wir schreiben jeden Sturz auf, auch ohne Verletzung."

**D2: "Wenn jemand noch abgefangen wird, ist kein Sturz passiert"**
- **Fachbegriff:** Near-Miss-Konfusion
- **Feedback (C1, 175 Zeichen):** "Nicht ganz — das ist ein Near-Miss und zählt als Sturzereignis. Warum? Weil der nächste vielleicht nicht abgefangen wird. Near-Miss = Warnung. Merke: Dokumentieren, auch wenn nichts passiert ist."
- **Feedback (B1, 170 Zeichen):** "Fast richtig — auch ein Fast-Sturz (Near-Miss) ist ein Sturz. Er ist ein Warnzeichen: Beim nächsten Mal fällt der Patient vielleicht wirklich. Merke: Auch Near-Miss wird dokumentiert."

**D3: "Sich bewusst hinsetzen, wenn es zu anstrengend ist, ist ein Sturz"**
- **Fachbegriff:** Absicht-Verwechslung
- **Feedback (C1, 160 Zeichen):** "Fast — aber hier ist die Absicht entscheidend. Wer sich bewusst und kontrolliert hinsetzt, stürzt nicht. Sturz = unbeabsichtigt + unkontrolliert. Merke: Die Kontrolle macht den Unterschied."
- **Feedback (B1, 150 Zeichen):** "Gut gedacht — aber das war Absicht. Wer sich extra hinsetzt, stürzt nicht. Ein Sturz passiert ohne Absicht und ohne Kontrolle. Merke: Absicht = kein Sturz."

### Richtig-Feedback
**C1 (220 Zeichen):** "Genau. Ein Sturz ist das unbeabsichtigte Landen auf einer tieferen Ebene — auch ohne Verletzung. Besonders wichtig: Auch Near-Miss (abgefangene Stürze) dokumentieren. Sie zeigen, dass das Sturzrisiko aktuell erhöht ist."

**B1 (195 Zeichen):** "Sehr gut. Ein Sturz ist, wenn jemand unabsichtlich auf den Boden fällt — egal ob er sich verletzt hat oder nicht. Auch ein Fast-Sturz (Near-Miss) zählt. Wir schreiben jeden Sturz auf."

### Verknüpfte Karteikarte
- **Vorderseite (C1):** "Definition: Was ist ein Sturz nach WHO?"
- **Rückseite (C1):** "Ereignis, bei dem eine Person unbeabsichtigt auf dem Boden oder tieferer Ebene landet — inkl. Near-Miss."
- **Kategorie:** fachbegriff

---

## Baustein 2: risikofaktoren-intrinsisch

### Metadaten
- **bausteinId:** sturz-prophylaxe-risiken-intrinsisch
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Welche Eigenschaften eines Patienten erhöhen sein Sturzrisiko? Sammle mindestens 3."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Intrinsische Risikofaktoren kommen aus dem Patienten selbst: höheres Alter, Muskelschwäche, Sehminderung, kognitive Einschränkungen, Polypharmazie, Gangunsicherheit. Der stärkste Einzelprädiktor ist ein Sturz in den letzten 12 Monaten."

**B1 (215 Zeichen):** "Intrinsische Risiken hat der Patient in sich: hohes Alter, schwache Muskeln, schlechte Augen, viele Medikamente, Unsicherheit beim Gehen. Das wichtigste Zeichen: Ist er im letzten Jahr schon mal gestürzt?"

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Intrinsische Risikofaktoren sind personenbezogen. Die wichtigsten: **Sturz-Vorgeschichte** (1 Sturz im letzten Jahr verdoppelt das Risiko), **Alter** (ab 65 steigt das Risiko, ab 80 stark), **Muskelkraftverlust** (Sarkopenie), **Gangunsicherheit und Balanceprobleme**, **Sehminderung** (Katarakt, Makuladegeneration), **kognitive Einschränkungen** (Demenz, Delir), **Polypharmazie** (> 4 Dauermedikamente, insbesondere Psychopharmaka, Diuretika, Antihypertensiva), **Inkontinenz** (Eile zur Toilette bei Drang), **orthostatische Dysregulation** (Schwindel beim Aufstehen), **chronische Erkrankungen** (Parkinson, Schlaganfall-Folgen, Hüftendoprothese). Pflege beobachtet und meldet — die Kombination mehrerer Faktoren ist entscheidend, nicht ein einzelner. (DNQP 2022)"

**B1 (540 Zeichen):**
"Intrinsische Risiken bedeutet: Der Patient hat sie in sich. Wichtig sind: **Sturz im letzten Jahr** (das ist das wichtigste Zeichen). **Hohes Alter** (über 65, besonders über 80). **Schwache Muskeln**. **Unsicheres Gehen und Balance-Probleme**. **Schlechte Augen**. **Demenz oder Delir**. **Viele Medikamente** (mehr als 4 pro Tag — besonders Schlafmittel, Blutdruckmittel). **Inkontinenz** (muss schnell zur Toilette). **Schwindel beim Aufstehen**. **Parkinson, Schlaganfall**. Die Pflege schaut und meldet. Wichtig: Mehrere Faktoren zusammen = hohes Risiko."

- **Erklärungs-Step:** stepType `comparison` (Faktoren in Tabelle: Faktor | Mechanismus | Was Pflege tun kann)
- **Glossar-Begriffe:** [Polypharmazie, Sarkopenie, orthostatische Dysregulation, Delir]

### Misconceptions → Distraktoren

**D1: "Alter allein ist DER entscheidende Risikofaktor"**
- **Fachbegriff:** Alter-Monokausalität
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — Alter ist ein Faktor unter vielen. Ein fitter, medikamentenfreier 85-Jähriger hat oft weniger Sturzrisiko als ein 65-Jähriger mit Parkinson, 6 Dauermedikamenten und schlechter Sehkraft. Merke: Sturzrisiko ist multifaktoriell. Immer mehrere Faktoren gemeinsam betrachten — eine Summe macht das Risiko."
- **Feedback (B1, 290 Zeichen):** "Gut gedacht — aber Alter ist nur ein Faktor. Ein gesunder 85-Jähriger ohne Medikamente kann sicherer sein als ein 65-Jähriger mit Parkinson und vielen Tabletten. Merke: Wir schauen auf mehrere Dinge zusammen. Mehrere Risiken zusammen = hohes Risiko, nicht nur das Alter."

**D2: "Polypharmazie meint einfach viele Medikamente — alle gleich gefährlich"**
- **Fachbegriff:** Pauschal-Medikamenten-Irrtum
- **Feedback (C1, 360 Zeichen):** "Teilweise richtig — Polypharmazie ist ab 4 Dauermedikamenten definiert. Aber nicht alle sind gleich riskant. Besonders kritisch für Stürze: **Benzodiazepine und Z-Substanzen** (Sedierung), **Antihypertensiva** (Blutdruckabfall), **Diuretika** (Nykturie + Volumenmangel), **Antidepressiva** (orthostatisch), **Antipsychotika** (extrapyramidal). Merke: Nicht die Menge allein, sondern die Kombination zählt."
- **Feedback (B1, 310 Zeichen):** "Teilweise richtig — Polypharmazie heißt 4 oder mehr Medikamente. Aber einige sind gefährlicher: **Schlafmittel und Beruhigungsmittel** (machen müde). **Blutdruckmittel** (Schwindel). **Wassertabletten** (Nachts zur Toilette). **Antidepressiva** und **Medikamente gegen Psychosen**. Merke: Nicht nur die Zahl — auch welche Medikamente."

**D3: "Ein Sturz im letzten Jahr ist Zufall — nicht relevant"**
- **Fachbegriff:** Sturz-Anamnese-Unterschätzung
- **Feedback (C1, 340 Zeichen):** "Nicht ganz — ein Sturz im letzten Jahr verdoppelt das Risiko für einen weiteren. Er ist der **stärkste Einzelprädiktor** (Cochrane Review 2023). Der Grund: Stürze sind selten zufällig — meist steht eine Kombination von Faktoren dahinter, die fortbesteht. Merke: Jede Pflegeanamnese fragt nach Stürzen im letzten Jahr. Immer."
- **Feedback (B1, 305 Zeichen):** "Nicht ganz — ein Sturz im letzten Jahr ist kein Zufall. Die Chance, dass es wieder passiert, ist doppelt so hoch. Meist sind mehrere Probleme zusammen schuld — und die bleiben. Merke: Wir fragen immer: 'Sind Sie in den letzten 12 Monaten schon mal gestürzt?' Immer."

### Richtig-Feedback
**C1 (260 Zeichen):** "Sehr gut. Die wichtigsten intrinsischen Risikofaktoren sind: Sturz-Vorgeschichte (stärkster Einzelprädiktor!), Alter, Muskelschwäche, Sehminderung, Gangunsicherheit, kognitive Einschränkungen und Polypharmazie. Die Kombination entscheidet."

**B1 (225 Zeichen):** "Sehr gut. Die wichtigsten Risiken sind: Schon mal gestürzt (das ist das wichtigste), hohes Alter, schwache Muskeln, schlechte Augen, Unsicherheit beim Gehen, Demenz, viele Medikamente. Mehrere Risiken zusammen = hohes Risiko."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der stärkste Einzelprädiktor für einen erneuten Sturz?"
- **Rückseite:** "Ein Sturz in den letzten 12 Monaten — verdoppelt das Risiko."
- **Kategorie:** assessment

---

## Baustein 3: risikofaktoren-extrinsisch

### Metadaten
- **bausteinId:** sturz-prophylaxe-risiken-extrinsisch
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Geh gedanklich durch ein Patientenzimmer. Welche Sturzgefahren könntest du dort entdecken?"
- **Step-Typ:** text (Denkaufgabe, keine Bewertung)

### Stufe 2 — Hinweis

**C1 (215 Zeichen):** "Extrinsische Risikofaktoren liegen in der Umgebung: Stolperfallen (Kabel, lose Teppiche), ungeeignetes Schuhwerk, schlechte Beleuchtung, nasse Böden, fehlende Haltegriffe, falsch eingestellte Bett-Höhe."

**B1 (205 Zeichen):** "Extrinsische Risiken kommen von außen: Kabel auf dem Boden, Teppiche, lose Schuhe, wenig Licht, nasser Boden, keine Griffe zum Festhalten, Bett zu hoch oder zu niedrig für den Patienten."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Extrinsische Risiken sind umgebungsbezogen — und oft von Pflege direkt veränderbar. Die häufigsten: **Stolperfallen** (Kabel, Teppichkanten, herumliegende Gegenstände). **Ungeeignetes Schuhwerk** (lose Pantoffeln, glatte Sohlen — rutschfeste Hausschuhe oder geschlossene Schuhe mit Absatz <2,5 cm sind ideal). **Schlechte Beleuchtung** — besonders nachts. **Nasse oder rutschige Böden** (nach Reinigung, Inkontinenz). **Fehlende Haltegriffe** in Bad und Toilette. **Bett-Höhe** nicht angepasst (bei Transfer hoch, bei Demenzpatienten die klettern: bodennah). **Bettgitter** — können Sturzhöhe erhöhen, sind keine Prophylaxe! (DNQP 2022) Pflege beobachtet, verändert und dokumentiert Umgebungsanpassungen."

**B1 (510 Zeichen):**
"Extrinsische Risiken kommen von außen — und Pflege kann viel ändern. Die wichtigsten: **Kabel, Teppiche** (Stolpergefahr). **Lose Schuhe** (rutschfeste Hausschuhe sind besser). **Wenig Licht** (besonders nachts). **Nasser Boden** (nach Putzen). **Keine Griffe** in Bad und Toilette. **Bett zu hoch oder zu niedrig** (nicht passend zum Patienten). **Bettgitter** — die machen den Sturz schlimmer, keine Prophylaxe! Pflege schaut, ändert, schreibt auf."

- **Erklärungs-Step:** stepType `hotspot` (Bild eines Patientenzimmers mit verschiedenen Gefahren)
- **Glossar-Begriffe:** [Bettgitter, rutschfest]

### Misconceptions → Distraktoren

**D1: "Bettgitter verhindern Stürze"**
- **Fachbegriff:** Bettgitter-Illusion
- **Feedback (C1, 370 Zeichen):** "Nicht ganz — das ist einer der häufigsten Mythen. Bettgitter können Sturzhöhe erhöhen, wenn Patienten (besonders bei Demenz) darüber klettern. Dadurch werden Verletzungen schlimmer, nicht verhindert. Außerdem sind beidseitige Bettgitter ohne Zustimmung eine freiheitsentziehende Maßnahme (§ 1906a BGB). Merke: Bettgitter = keine Prophylaxe."
- **Feedback (B1, 310 Zeichen):** "Nicht ganz — das glauben viele, ist aber falsch. Bettgitter können den Sturz schlimmer machen: Patienten klettern darüber und fallen tiefer. Außerdem ist das Festhalten im Bett ohne Erlaubnis rechtlich verboten (§ 1906a BGB). Merke: Bettgitter schützen nicht vor Stürzen."

**D2: "Ein Rutsch-Teppich unter den Füßen verhindert Stürze"**
- **Fachbegriff:** Teppich-Trugschluss
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — lose Teppiche (auch 'rutschfeste') sind eine der häufigsten Stolperfallen. Die Kanten heben sich, bei Nässe rutschen sie. Rutschfeste Bodenbeläge oder bündig verlegte Böden sind sicherer. Merke: Teppiche im Patientenzimmer möglichst entfernen, nicht ergänzen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Teppiche sind oft eine Gefahr. Die Ränder heben sich, der Patient stolpert. Auch 'rutschfeste' Teppiche können nass rutschen. Besser: Teppiche weg. Merke: Kein loser Teppich im Patientenzimmer."

**D3: "Helle Beleuchtung ist nur tagsüber wichtig"**
- **Fachbegriff:** Tag-Nacht-Verwechslung
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — nachts ist Beleuchtung besonders kritisch. Viele Stürze passieren beim nächtlichen Toilettengang: Patient wacht auf, ist desorientiert, Licht fehlt. Ein Bewegungsmelder oder ein Nachtlicht am Boden senkt das Risiko deutlich. Merke: Nachts = erhöhtes Sturzrisiko."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — nachts ist Licht besonders wichtig. Viele Patienten stürzen, wenn sie nachts zur Toilette gehen. Ohne Licht sehen sie nicht gut. Ein Nachtlicht oder Bewegungsmelder hilft. Merke: Auch nachts muss man etwas sehen können."

### Richtig-Feedback
**C1 (215 Zeichen):** "Gut erkannt. Die häufigsten extrinsischen Risiken: Stolperfallen, ungeeignete Schuhe, schlechte Beleuchtung (besonders nachts!), fehlende Haltegriffe, falsche Bett-Höhe. Das Gute: Pflege kann hier direkt einwirken."

**B1 (205 Zeichen):** "Gut gesehen. Typische Gefahren: Kabel, Teppiche, lose Schuhe, wenig Licht nachts, keine Griffe zum Festhalten, Bett falsch eingestellt. Gut ist: Als Pflege kannst du viele dieser Dinge direkt ändern."

### Verknüpfte Karteikarte
- **Vorderseite:** "Sind beidseitige Bettgitter eine Sturzprophylaxe?"
- **Rückseite:** "Nein — sie können Sturzhöhe erhöhen. Ohne Zustimmung: freiheitsentziehende Maßnahme (§ 1906a BGB)."
- **Kategorie:** handlung

---

## Baustein 4: sturzrisiko-assessment

### Metadaten
- **bausteinId:** sturz-prophylaxe-assessment
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Ein neuer Patient wird aufgenommen. Du musst sein Sturzrisiko einschätzen. Wie gehst du vor? Was fragst du? Was beobachtest du?"
- **Step-Typ:** freetext (mittel, Bloom 4)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Der DNQP-Standard empfiehlt KEIN einzelnes Instrument als Pflicht. Führend ist die **klinische Einschätzung** unter Berücksichtigung multipler Risikofaktoren. Instrumente wie Tinetti, Timed-Up-and-Go oder Morse können unterstützen."

**B1 (220 Zeichen):** "Der DNQP-Standard sagt: Es gibt kein einzelnes Instrument, das man nehmen muss. Wichtig ist die **Einschätzung durch die Pflegekraft**. Sie schaut auf viele Risiken gleichzeitig. Werkzeuge wie Tinetti oder TUG können helfen."

- **Step-Typ:** text (displayFormat: mnemonic — "MULTI: Medikamente, Unsicher im Gang, Letzter Sturz, Tinetti/Werkzeuge, Individuelle Faktoren")

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Sturzrisiko-Assessment ist nicht das Ausfüllen eines Formulars — es ist klinisches Denken. Der DNQP-Expertenstandard 2022 stellt klar: **Kein einzelnes Tool ist Pflicht** (anders als frühere Versionen). Stattdessen: Multifaktorielle klinische Einschätzung. Pflichtaspekte: (1) Anamnese-Frage nach Sturz in den letzten 12 Monaten, (2) Medikamenten-Review, (3) Gang-/Balance-Beobachtung (z.B. Timed-Up-and-Go: >14 Sekunden = Risiko), (4) Sehkraft, (5) Kognition. Instrumente wie **Tinetti** (gut für Reha), **Morse Fall Scale** (Akutkrankenhaus) können unterstützen, nicht ersetzen. Re-Assessment ist Pflicht bei jeder **Zustandsveränderung**: neue Medikamente, nach OP, bei akuter Erkrankung, nach einem Sturzereignis. (DNQP 2022)"

**B1 (560 Zeichen):**
"Das Assessment ist kein Formular ausfüllen — es ist klinisches Denken. Der DNQP-Standard 2022 sagt: **Kein einzelnes Werkzeug ist Pflicht**. Die Pflegekraft muss mehrere Risiken zusammen einschätzen. Das fragt und beobachtet die Pflege immer: (1) Ist der Patient in den letzten 12 Monaten gestürzt? (2) Welche Medikamente nimmt er? (3) Wie sicher ist sein Gang? (Timed-Up-and-Go: wenn länger als 14 Sekunden = Risiko) (4) Wie sind seine Augen? (5) Ist er geistig klar? Das Assessment wird wiederholt: Nach neuen Medikamenten, nach OP, nach einem Sturz."

- **Erklärungs-Step:** stepType `comparison` (Tabelle: Tinetti | TUG | Morse | Klinische Einschätzung — Wann sinnvoll, Stärken, Grenzen)
- **Glossar-Begriffe:** [Timed-Up-and-Go, Tinetti-Test, Morse Fall Scale, Re-Assessment]

### Misconceptions → Distraktoren

**D1: "Tinetti ≤ 18 Punkte = Sturzrisiko. Punktwert entscheidet."**
- **Fachbegriff:** Skala-Dogmatismus
- **Feedback (C1, 480 Zeichen):** "Nicht ganz — seit dem DNQP-Update 2022 sind Skalen Hilfsmittel, nicht Pflicht. Klinische Einschätzung ist führend. Ein Tinetti-Wert von 22 bei einem Patienten mit frischem Diuretika-Neustart + nächtlicher Nykturie ist riskanter als 18 bei einem seit Jahren stabilen Parkinson-Patienten mit angepasstem Setting. Merke: Skalen sind ein Werkzeug unter vielen. Die Summe der Risiken — und wie frisch sie sind — entscheidet. Tinetti = Momentaufnahme."
- **Feedback (B1, 400 Zeichen):** "Nicht ganz — der DNQP sagt seit 2022: Skalen sind nur Hilfsmittel. Wichtig ist, was die Pflegekraft sieht. Beispiel: Ein Patient mit Tinetti 22, aber neuer Wassertablette und nachts Drang = mehr Risiko als einer mit 18, aber stabil seit Jahren. Merke: Skala = ein Werkzeug. Mehrere Risiken zusammen machen das Bild. Nicht nur die Zahl."

**D2: "Einmaliges Assessment bei Aufnahme reicht für den ganzen Aufenthalt"**
- **Fachbegriff:** Statisches-Assessment-Denken
- **Feedback (C1, 440 Zeichen):** "Nicht ganz — das Sturzrisiko ist dynamisch. Re-Assessment ist Pflicht bei **jeder Zustandsveränderung**: Neue Medikamente, nach OP, akute Erkrankung (z.B. Harnwegsinfekt), nach einem Sturz oder Near-Miss. Auch stille Veränderungen (Muskelabbau während längerem Liegen) können das Risiko erhöhen. Merke: Assessment ist kein Einmal-Akt. Ein Patient kann innerhalb von 24 Stunden vom 'niedrigen Risiko' zum 'hohen Risiko' werden."
- **Feedback (B1, 370 Zeichen):** "Nicht ganz — das Sturzrisiko ändert sich ständig. Re-Assessment muss passieren: Nach neuen Medikamenten. Nach einer OP. Bei einer akuten Krankheit. Nach einem Sturz. Auch wenn der Patient lange liegt und Muskeln abbaut. Merke: Assessment ist keine einmalige Sache. Innerhalb von 24 Stunden kann sich alles ändern."

**D3: "Für jeden Patienten sollte die Morse Fall Scale genutzt werden, sie ist das beste Tool"**
- **Fachbegriff:** Tool-Absolutismus
- **Feedback (C1, 450 Zeichen):** "Nicht ganz — die DNQP 2022 empfiehlt KEIN einzelnes Instrument als Universal-Standard. Jedes Tool hat Stärken und Schwächen je nach Setting: **Morse** ist gut für Akutkrankenhaus, **Tinetti** für Reha und Geriatrie, **TUG** überall schnell einsetzbar. Für ambulante Pflege passt oft gar keins — dort ist klinische Einschätzung primär. Merke: Werkzeug zum Kontext wählen. Das 'beste Tool' hängt von Setting + Patient ab."
- **Feedback (B1, 380 Zeichen):** "Nicht ganz — es gibt nicht DAS beste Werkzeug für alle. Der DNQP 2022 sagt: Man wählt passend zum Ort. **Morse** passt im Akutkrankenhaus. **Tinetti** in der Reha. **TUG** ist schnell und überall nutzbar. In der ambulanten Pflege nimmt man oft gar kein Werkzeug — da schaut die Pflege selbst. Merke: Das Werkzeug muss zum Patienten und zum Ort passen."

### Richtig-Feedback
**C1 (300 Zeichen):** "Genau. Gutes Sturzrisiko-Assessment kombiniert: (1) Sturzanamnese der letzten 12 Monate, (2) Medikamenten-Review, (3) Beobachtung von Gang + Balance (z.B. TUG), (4) Sehkraft, (5) Kognition. Tools unterstützen, ersetzen aber nicht die klinische Einschätzung. Re-Assessment bei Zustandsveränderung."

**B1 (270 Zeichen):** "Genau. Gutes Assessment schaut auf: (1) Ist der Patient im letzten Jahr schon mal gestürzt? (2) Welche Medikamente nimmt er? (3) Wie sicher ist sein Gang? (4) Wie sind seine Augen? (5) Ist er geistig klar? Werkzeuge helfen, aber die Pflegekraft denkt. Bei Veränderung: neu einschätzen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Empfiehlt der DNQP-Standard 2022 ein einzelnes Sturzrisiko-Instrument als Pflicht?"
- **Rückseite:** "Nein — klinische Einschätzung ist führend. Tools wie Tinetti, TUG, Morse sind Hilfsmittel."
- **Kategorie:** assessment

---

## Baustein 5: kraft-balance-training

### Metadaten
- **bausteinId:** sturz-prophylaxe-training
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Was ist wissenschaftlich die wirksamste Einzelmaßnahme gegen Stürze? Rate mal — und warum glaubst du das?"
- **Step-Typ:** freetext (kurz)

### Stufe 2 — Hinweis

**C1 (225 Zeichen):** "Progressives **Kraft- und Balance-Training** ist die am besten belegte Sturzprävention (Cochrane Review 2023). Wirksam ab 2-3 Einheiten/Woche, mindestens 12 Wochen Dauer. Selbst 90-Jährige profitieren nachweislich."

**B1 (215 Zeichen):** "Am besten wirkt **Kraft- und Balance-Training**. Das haben viele Studien gezeigt (Cochrane Review 2023). 2-3 Mal pro Woche, mindestens 12 Wochen lang. Auch sehr alte Menschen (über 90) werden dadurch stärker."

- **Step-Typ:** text (displayFormat: quote — Cochrane-Zitat)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die Evidenz ist eindeutig: **Progressives Kraft- und Balance-Training ist die wirksamste Einzelmaßnahme gegen Stürze** (Cochrane Review 2023, Sherrington et al.). Progressiv heißt: Die Belastung wird schrittweise gesteigert. Training über mindestens 12 Wochen, 2-3 Mal wöchentlich. Die Einheiten bestehen aus: (1) Mobilisation (Gelenke beweglich machen), (2) Krafttraining (Kniebeugen, Fersenheben, Bein-Press), (3) Balance-Übungen (Einbein-Stand, Tandemstand, Stehen auf weicher Unterlage), (4) Koordination und Alltagstransfer. Wichtig: **Auch Hochbetagte profitieren** — selbst in der Pflegeheim-Population zeigen 90-Jährige signifikante Kraftzuwächse. Die Pflege begleitet und motiviert; Physiotherapie plant und führt durch. (Cochrane 2023)"

**B1 (530 Zeichen):**
"Die Wissenschaft ist klar: **Kraft- und Balance-Training wirkt am besten gegen Stürze** (Cochrane 2023). Progressiv heißt: Schritt für Schritt schwieriger. 2-3 Mal pro Woche, mindestens 12 Wochen. Das Training hat 4 Teile: (1) Gelenke beweglich machen, (2) Kraft aufbauen (Kniebeugen, Auf die Zehenspitzen), (3) Balance üben (Einbein-Stand, Tandemstand), (4) Alltagsbewegungen. Wichtig: **Auch sehr alte Menschen werden stärker**. Sogar 90-Jährige im Pflegeheim. Die Pflege begleitet und macht Mut. Physiotherapie plant."

- **Erklärungs-Step:** stepType `sequencing` (Reihenfolge Training: Mobilisation → Kraft → Balance → Koordination → Alltagstransfer)
- **Glossar-Begriffe:** [Progressive Belastung, Tandemstand, Cochrane Review]

### Misconceptions → Distraktoren

**D1: "Nach einem Sturz ist Ruhe das Beste"**
- **Fachbegriff:** Post-Fall-Ruhe-Fehler
- **Feedback (C1, 360 Zeichen):** "Nicht ganz — Ruhe nach Sturz ist oft das Gegenteil von hilfreich. Sie führt zu: Muskelabbau, Sturzangst (Post-Fall-Syndrom), Selbstständigkeits-Verlust. Frühe, graduelle Mobilisation ist Standard. Ausnahme: echte Kontraindikation (Fraktur, Kopfverletzung) — und auch dann so viel Bewegung wie medizinisch möglich. Merke: Aktivität heilt, Passivität verschlimmert."
- **Feedback (B1, 310 Zeichen):** "Nicht ganz — Ruhe ist meistens schlecht. Was passiert: Muskeln werden schwächer, Angst wächst, der Patient wird unselbstständig. Besser: Früh und langsam wieder bewegen. Ausnahme: Echter Grund (Knochenbruch, Kopfverletzung). Aber auch dann so viel Bewegung wie möglich. Merke: Bewegen hilft, Liegen verschlimmert."

**D2: "Alte Patienten können kein richtiges Krafttraining mehr machen"**
- **Fachbegriff:** Altersstereotyp-Training
- **Feedback (C1, 340 Zeichen):** "Nicht ganz — das ist ein Mythos. Studien mit Heimbewohnern über 90 zeigen: Sie bauen signifikant Muskulatur auf (z.B. Fiatarone et al., New England Journal of Medicine). Progressives Training ist anpassbar an jedes Fitnesslevel. Selbst Sitz-Gymnastik oder Bett-Übungen sind Training. Merke: Training ist für jedes Alter. Nur Intensität und Form anpassen."
- **Feedback (B1, 300 Zeichen):** "Nicht ganz — viele glauben das, ist aber falsch. Studien mit Menschen über 90 in Pflegeheimen zeigen: Sie bauen Muskeln auf — auch sehr alte Menschen. Training kann angepasst werden: Sitzen, im Bett, kleine Übungen. Merke: Training geht in jedem Alter. Nur leichter und langsamer, aber es geht."

**D3: "Spazierengehen ist genug — das ist schon Training"**
- **Fachbegriff:** Gehen-als-Training-Fehlannahme
- **Feedback (C1, 330 Zeichen):** "Nicht ganz — Spazierengehen ist gut, aber es ist nicht progressiv (gleiche Belastung, gleiche Muskeln). Gezielte Balance-Übungen (Einbein-Stand, Tandemstand) und Kraftübungen (Aufstehen aus dem Stuhl) trainieren spezifisch. Die Cochrane-Daten zeigen: Gehen allein senkt Sturzrisiko nicht signifikant. Merke: Gehen + gezielte Übungen."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — Gehen ist gut, aber nicht genug. Beim Gehen trainiert man immer dasselbe. Besser: Gezielte Übungen. **Balance**: auf einem Bein stehen, Tandemstand. **Kraft**: Aufstehen aus dem Stuhl, Kniebeugen. Die Studien sind klar: Nur Gehen schützt nicht. Merke: Gehen + extra Übungen."

### Richtig-Feedback
**C1 (265 Zeichen):** "Richtig. Progressives Kraft- und Balance-Training ist die wirksamste Einzelmaßnahme (Cochrane 2023). 2-3× pro Woche, mindestens 12 Wochen. Auch Hochbetagte profitieren. Pflege motiviert und begleitet, Physiotherapie plant. Training ist NICHT für 'Fitte' reserviert."

**B1 (230 Zeichen):** "Richtig. Kraft- und Balance-Training wirkt am besten gegen Stürze (Cochrane 2023). 2-3 Mal pro Woche, mindestens 12 Wochen. Auch 90-Jährige werden stärker. Pflege macht Mut und begleitet, Physiotherapie plant. Training ist für ALLE, nicht nur für Fitte."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist die wirksamste Einzelmaßnahme gegen Stürze?"
- **Rückseite:** "Progressives Kraft- und Balance-Training, 2-3x/Woche, min. 12 Wochen (Cochrane 2023)"
- **Kategorie:** handlung

---

## Baustein 6: medikamentenreview

### Metadaten
- **bausteinId:** sturz-prophylaxe-medikamente
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Frau Schmitt (78) bekommt seit gestern ein neues Schlafmittel. Heute morgen geht sie unsicher und wirkt benommen. Was fällt dir ein?"
- **Step-Typ:** mc (mit Fallstrick-Variante)

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "20-40% der Stürze bei Senioren haben medikamentöse Mitursachen. Besonders riskant: Benzodiazepine, Z-Substanzen, Antihypertensiva, Diuretika, Antidepressiva, Antipsychotika. Polypharmazie (>4 Dauermedikamente) ist eigenständiger Risikofaktor."

**B1 (225 Zeichen):** "20-40% der Stürze bei alten Menschen kommen auch von Medikamenten. Besonders riskant: Schlafmittel, Beruhigungsmittel, Blutdruckmittel, Wassertabletten, Antidepressiva. Ab 4 verschiedenen Medikamenten steigt das Risiko stark."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"Medikamente gehören zu den **beeinflussbarsten Sturzrisikofaktoren** — deshalb ist der Medikamenten-Review Teil jedes Sturz-Assessments. Besonders riskant (Beers-Liste 2023): (1) **Benzodiazepine + Z-Substanzen** (Diazepam, Lorazepam, Zolpidem) — Sedierung, Muskelrelaxation; Sturzrisiko +50-100%. (2) **Antihypertensiva** — Blutdruckabfall, Orthostase; besonders in Aufdosierungsphasen kritisch. (3) **Diuretika** — Nykturie, Volumenmangel, Hypotonie. (4) **Antidepressiva** (trizyklisch, SSRI) — Orthostase, QT-Verlängerung. (5) **Antipsychotika** — extrapyramidale Symptome, Sedierung. Pflege-Aufgabe: Neue Medikamente registrieren, Patient beobachten (Benommenheit, Schwindel, Gangveränderung), Auffälligkeiten dokumentieren und dem Arzt melden. Merke: Jedes neue Medikament kann das Sturzrisiko verändern. (Beers 2023)"

**B1 (580 Zeichen):**
"Medikamente sind ein Sturz-Risiko, das man gut ändern kann. Deshalb ist der Medikamenten-Check immer Teil des Sturz-Assessments. Besonders gefährlich (Beers-Liste 2023): (1) **Schlafmittel + Beruhigungsmittel** (wie Diazepam, Zolpidem) — machen müde und schwach. (2) **Blutdruckmittel** — niedriger Blutdruck, Schwindel. (3) **Wassertabletten** — nachts zur Toilette, wenig Flüssigkeit. (4) **Antidepressiva** — Schwindel beim Aufstehen. (5) **Medikamente gegen Psychosen** — extrapyramidal, müde. Pflege-Aufgabe: Neue Medikamente merken, Patient beobachten (müde? schwindelig? unsicher?), aufschreiben, dem Arzt sagen."

- **Erklärungs-Step:** stepType `matrix` (Tabelle: Medikamenten-Gruppe × Sturz-Mechanismus × Pflege-Beobachtung)
- **Glossar-Begriffe:** [Beers-Liste, Orthostase, Nykturie, Extrapyramidale Symptome]

### Misconceptions → Distraktoren

**D1: "Schlafmittel sind harmlos, wenn der Patient sie schon lange nimmt"**
- **Fachbegriff:** Chronisch-harmlos-Trugschluss
- **Feedback (C1, 430 Zeichen):** "Nicht ganz — Benzodiazepine und Z-Substanzen erhöhen das Sturzrisiko um 50-100%, auch nach Jahren der Einnahme. Toleranz bedeutet nicht Sicherheit — die muskelrelaxierende + kognitiv-dämpfende Wirkung bleibt. Im Gegenteil: Kumulation bei reduzierter Nieren-/Leberfunktion im Alter macht lange eingenommene Präparate oft riskanter. Die Beers-Liste empfiehlt Absetzen oder Wechsel auf Alternativen. Merke: Dauereinnahme ≠ Sicherheit."
- **Feedback (B1, 380 Zeichen):** "Nicht ganz — Schlafmittel wie Diazepam oder Zolpidem bleiben gefährlich, auch nach Jahren. Das Sturzrisiko ist 50-100% höher. Der Körper gewöhnt sich an, aber nicht sicher. Bei alten Menschen werden die Medikamente schlechter abgebaut — das macht sie manchmal gefährlicher. Die Beers-Liste empfiehlt, sie abzusetzen oder zu wechseln. Merke: Lange einnehmen heißt nicht sicher."

**D2: "Medikamentenänderungen sind rein Arzt-Sache — Pflege betrifft das nicht"**
- **Fachbegriff:** Medikamenten-Entfremdung
- **Feedback (C1, 410 Zeichen):** "Nicht ganz — Pflege ist die **Frontlinie der Medikamenten-Beobachtung**. Der Arzt verschreibt und ändert, aber Pflege sieht den Patienten rund um die Uhr. Wenn Frau Schmitt nach einer neuen Tablette plötzlich unsicher geht oder müde wirkt, ist es Pflege-Aufgabe, das zu bemerken und zu melden. Keine Beobachtung = keine Sicherheit. Die Pflegedokumentation ist Teil des Medikamenten-Managements. Merke: Pflege beobachtet und meldet — das ist lebenswichtig."
- **Feedback (B1, 350 Zeichen):** "Nicht ganz — Pflege ist sehr wichtig bei Medikamenten. Der Arzt verschreibt, aber **die Pflege sieht den Patienten den ganzen Tag**. Wenn Frau Schmitt nach einer neuen Tablette plötzlich müde ist oder unsicher geht, merkt das nur die Pflege. Aufschreiben und dem Arzt sagen — das ist Pflege-Aufgabe. Merke: Pflege beobachtet und meldet. Das ist lebenswichtig."

**D3: "Im Alter braucht man weniger Dosis — einfach die Hälfte geben"**
- **Fachbegriff:** Pauschal-Halbieren-Fehler
- **Feedback (C1, 400 Zeichen):** "Teilweise richtig, aber gefährlich pauschal. Die Regel ist 'Start low, go slow' — aber nicht automatisch halbieren. Dosis-Anpassung im Alter richtet sich nach: (1) Nierenfunktion (GFR), (2) Leberfunktion, (3) anderen Medikamenten (Interaktionen), (4) Körpergewicht, (5) Zielwirkung. Halbieren kann genauso gefährlich sein wie volle Dosis (zu wenig Wirkung → Komplikationen). Merke: Dosis individuell anpassen, nicht automatisch halbieren."
- **Feedback (B1, 350 Zeichen):** "Teilweise richtig — alte Menschen brauchen oft weniger, aber nicht automatisch die Hälfte. Die richtige Dosis hängt ab von: Nieren, Leber, anderen Medikamenten, Gewicht. Zu wenig kann auch schlecht sein (Wirkung fehlt). Der Arzt entscheidet individuell — nicht pauschal. Merke: Dosis wird für jeden Patienten einzeln angepasst."

### Richtig-Feedback
**C1 (295 Zeichen):** "Ausgezeichnet. Medikamente sind ein wichtiger, veränderbarer Sturzrisiko-Faktor. Die Pflegeaufgabe: Nach jedem neuen Präparat Patient gezielt beobachten (Gang, Schwindel, Benommenheit), Auffälligkeiten dokumentieren und dem Arzt melden. Besonders kritisch sind Schlafmittel, Diuretika, Antihypertensiva."

**B1 (260 Zeichen):** "Ausgezeichnet. Medikamente sind ein wichtiger Sturz-Risiko. Pflege-Aufgabe: Nach neuen Medikamenten genau beobachten (Gang, Schwindel, müde?), aufschreiben, dem Arzt sagen. Besonders wichtig: Schlafmittel, Wassertabletten, Blutdruckmittel. Da immer extra aufpassen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 3 Medikamenten-Gruppen erhöhen das Sturzrisiko besonders stark?"
- **Rückseite:** "Benzodiazepine/Z-Substanzen (Sedierung), Antihypertensiva (Orthostase), Diuretika (Nykturie + Volumenmangel). Beers-Liste 2023."
- **Kategorie:** fakt

---

## Baustein 7: fixierung-rechtlich

### Metadaten
- **bausteinId:** sturz-prophylaxe-fixierung
- **bloomLevel:** 5
- **wissensart:** recht
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Frau M. (85, Demenz) ist nachts schon zweimal gestürzt. Deine Kollegin sagt: 'Lass uns heute Nacht beide Bettgitter hochziehen.' Was tust du?"
- **Step-Typ:** branching (Bloom 5, 3 Optionen)

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Fixierung (inkl. beidseitiger Bettgitter) ist eine **freiheitsentziehende Maßnahme**. Sie braucht richterliche Genehmigung (§ 1906a BGB) oder informierte Zustimmung des Patienten. Sie ist keine Sturzprophylaxe — sie kann Verletzungen verschlimmern."

**B1 (230 Zeichen):** "Fixierung (auch beidseitige Bettgitter) ist eine **freiheitsentziehende Maßnahme**. Dafür braucht man Erlaubnis vom Gericht (§ 1906a BGB) oder vom Patienten selbst. Fixierung schützt NICHT vor Stürzen. Sie kann Verletzungen schlimmer machen."

- **Step-Typ:** text (displayFormat: procontra — Pro/Contra Fixierung mit rechtlichen Folgen)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Die rechtliche und ethische Lage ist klar: **Fixierung ist keine Sturzprophylaxe**. Der Bundesgerichtshof und § 1906a BGB stellen fest: Freiheitsentziehende Maßnahmen — dazu gehören beidseitige Bettgitter (ohne Zustimmung), Gurte, Bett-am-Boden-Schranken, sedierende 'Bedarfs-Medikation' — sind nur zulässig mit **(a) richterlicher Genehmigung** oder **(b) informierter Einwilligung des Patienten**. In akuter Eigengefährdung darf Pflege notfallmäßig fixieren, muss aber **innerhalb von 24 Stunden** richterliche Genehmigung beantragen. Warum nicht als Prophylaxe? Weil sie das Gegenteil bewirken kann: **Dokumentierte Todesfälle durch Strangulation in Gurten und Bettgittern**; Verletzungen durch Überklettern (Sturzhöhe erhöht); Muskelabbau durch Immobilität; Delir durch Überforderung. Alternativen: Niederflur-Bett, Sturzmatte, Bewegungsmelder, bauliche Anpassung, Einzelbetreuung. Merke: Fixierung ist **ultima ratio**, nicht Erstmaßnahme. (§ 1906a BGB; DNQP 2022)"

**B1 (600 Zeichen):**
"Die Regel ist klar: **Fixierung ist keine Sturzprophylaxe**. Der § 1906a BGB sagt: Jemanden festhalten (beide Bettgitter, Gurte, Bett am Boden, Schlafmittel zum Ruhigstellen) ist nur erlaubt mit **Erlaubnis vom Gericht** oder wenn der Patient selbst zustimmt. In einem Notfall (akute Gefahr) darf Pflege fixieren — aber in **24 Stunden muss man die Erlaubnis beim Gericht beantragen**. Warum ist Fixierung keine Prophylaxe? Sie macht es oft schlimmer: Patienten sind in Bettgittern gestorben (Strangulation); Patienten klettern über Bettgitter und fallen tiefer; Muskeln werden schwächer; Delir durch Überforderung. Bessere Alternativen: Bett niedrig stellen, Sturzmatte, Bewegungsmelder. Merke: Fixierung ist die **allerletzte Möglichkeit**, nie die erste."

- **Erklärungs-Step:** stepType `branching` (komplexes ethisches Dilemma mit 3 Optionen, je 1-2 Folge-Steps)
- **Glossar-Begriffe:** [Fixierung, Freiheitsentziehende Maßnahme, § 1906a BGB, informierte Einwilligung, ultima ratio]

### Misconceptions → Distraktoren

**D1: "Bettgitter sind kein echtes Fixieren — das ist nur Sicherheit"**
- **Fachbegriff:** Bettgitter-Entwertung
- **Feedback (C1, 560 Zeichen):** "Nicht ganz — das ist einer der gefährlichsten Irrtümer. **Beidseitige Bettgitter ohne Zustimmung** sind rechtlich Fixierung — eine freiheitsentziehende Maßnahme. Der Patient kann das Bett nicht mehr freiwillig verlassen. Das Bundesgerichtshof hat das mehrfach bestätigt. Unterschied: **Einseitiges** Bettgitter (Patient kann auf der offenen Seite aussteigen) = keine Fixierung. **Beidseitig** oder so hoch, dass der Patient nicht mehr aussteigt = Fixierung. Ohne richterliche Genehmigung oder Zustimmung ist das rechtswidrig und kann strafbar sein. Merke: Intention und Wirkung entscheiden, nicht der Begriff."
- **Feedback (B1, 440 Zeichen):** "Nicht ganz — das ist ein gefährlicher Irrtum. **Beidseitige Bettgitter ohne Erlaubnis** sind rechtlich Fixierung. Warum? Weil der Patient das Bett nicht mehr freiwillig verlassen kann. Das hat der Bundesgerichtshof mehrfach bestätigt. Unterschied: **Ein** Bettgitter (Patient kann auf der anderen Seite raus) = keine Fixierung. **Beide** Bettgitter = Fixierung. Ohne Erlaubnis ist das verboten und kann strafbar sein. Merke: Was wirklich passiert, zählt — nicht wie es heißt."

**D2: "Bei Demenz darf man fixieren — die verstehen es nicht"**
- **Fachbegriff:** Demenz-Fixierungs-Rechtfertigung
- **Feedback (C1, 530 Zeichen):** "Nicht ganz — und rechtlich gefährlich. Bei Demenz gelten dieselben Regeln. Weil der Patient nicht selbst einwilligen kann, braucht es: (1) einen **Betreuer** (gesetzlich bestellt) UND (2) **richterliche Genehmigung** (§ 1906a BGB). Beides muss vorliegen. Ausnahme nur: **akute Eigengefährdung** (z.B. Patient will aus dem 3. Stock) — dann darf Pflege kurzfristig fixieren, aber innerhalb von **24 Stunden** muss richterliche Genehmigung beantragt werden. Demenz = mehr Schutzbedarf, nicht weniger Rechte. Merke: Demenz rechtfertigt keine Fixierung. Ohne Genehmigung: strafbar."
- **Feedback (B1, 410 Zeichen):** "Nicht ganz — das ist falsch und gefährlich. Auch bei Demenz gelten die Regeln. Weil der Patient nicht selbst 'Ja' sagen kann, braucht man: (1) einen **Betreuer** (vom Gericht bestimmt) UND (2) **Erlaubnis vom Gericht** (§ 1906a BGB). Beides muss da sein. Nur in akuter Gefahr (Patient rennt aus dem 3. Stock) darf Pflege kurz fixieren — aber in 24 Stunden muss man die Erlaubnis beantragen. Demenz = mehr Schutz, nicht weniger Rechte."

**D3: "Fixierung ist sicherer als kein Schutz — besser als ein Sturz"**
- **Fachbegriff:** Sicherheits-Trugschluss
- **Feedback (C1, 520 Zeichen):** "Nicht ganz — das ist einer der gefährlichsten Mythen in der Pflege. **Dokumentierte Todesfälle**: Patienten strangulieren in Bettgittern (Kopf zwischen Gitter und Matratze), ersticken in Gurten, klettern über Bettgitter und fallen aus größerer Höhe mit schwereren Verletzungen. Zusätzlich: Muskelabbau durch Immobilität, Delir durch Überforderung, Verlust der Autonomie, Würde-Verlust. Alternativen wie Niederflur-Bett + Sturzmatte + Bewegungsmelder sind fast immer sicherer. Merke: Fixierung = erhöhtes Risiko, nicht Sicherheit."
- **Feedback (B1, 410 Zeichen):** "Nicht ganz — das ist ein gefährlicher Irrtum. **In Deutschland sind Menschen in Bettgittern und Gurten gestorben** (Strangulation, Ersticken). Manche klettern über Bettgitter und fallen tiefer, schlimmer. Außerdem: Muskeln werden schwächer, Verwirrtheit kommt dazu, die Würde leidet. Bessere Alternativen: Niedriges Bett + Matte am Boden + Bewegungsmelder. Merke: Fixierung ist NICHT sicher — sie ist oft gefährlicher."

### Richtig-Feedback
**C1 (400 Zeichen):** "Hervorragend. Du hast die rechtliche und ethische Kernregel erkannt: Fixierung ist keine Sturzprophylaxe, sondern eine freiheitsentziehende Maßnahme (§ 1906a BGB). Richtiger Weg: Mit Kollegin über Alternativen sprechen (Niederflur-Bett, Sturzmatte, Bewegungsmelder, Einzelbetreuung), ggf. mit Arzt und Betreuung über rechtlich abgesichertes Vorgehen reden. Pflegefachperson hat hier Aufklärungs- und Widerspruchs-Pflicht."

**B1 (340 Zeichen):** "Hervorragend. Du hast die Regel verstanden: Fixierung ist keine Prophylaxe — sie ist eine freiheitsentziehende Maßnahme (§ 1906a BGB). Richtiger Weg: Mit der Kollegin über bessere Lösungen sprechen (niedriges Bett, Matte am Boden, Bewegungsmelder, jemand bleibt kurz da). Als Pflegefachkraft musst du aufklären und widersprechen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Sind beidseitige Bettgitter ohne Zustimmung Fixierung?"
- **Rückseite:** "Ja — freiheitsentziehende Maßnahme, braucht richterliche Genehmigung (§ 1906a BGB). Keine Sturzprophylaxe."
- **Kategorie:** recht

---

## Baustein 8: umgebungsanpassung

### Metadaten
- **bausteinId:** sturz-prophylaxe-umgebung
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Du übernimmst einen Patienten im neuen Zimmer. Was prüfst du als erstes hinsichtlich Sturzrisiko in der Umgebung?"
- **Step-Typ:** freetext (kurz)

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Umgebungsanpassung ist direkte Pflegeaufgabe: Haltegriffe, rutschfeste Unterlagen, angepasste Bett-Höhe (tief bei Demenz, hoch für Transfer), freie Wege, Beleuchtung (auch nachts), rutschfeste Schuhe statt Hausschuhe."

**B1 (215 Zeichen):** "Die Umgebung sicher machen ist direkte Pflegeaufgabe: Griffe zum Festhalten, rutschfeste Matten, Bett richtig einstellen (niedrig bei Demenz, hoch für Transfer), freie Wege, Licht (auch nachts), feste Schuhe."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (690 Zeichen):**
"Die Umgebungsanpassung ist die am häufigsten **unterschätzte** Sturzprävention — dabei ist sie die, die Pflege am direktesten umsetzen kann. Schlüsselbereiche: (1) **Bett-Höhe anpassen** — tief bei Demenz-Patienten, die klettern könnten (Sturzmatte davor); hoch genug für rückenschonenden Transfer. (2) **Haltegriffe** in Bad, Toilette, Flur. (3) **Beleuchtung** — auch nachts: Bewegungsmelder, Nachtlichter. (4) **Schuhwerk** — rutschfeste Hausschuhe oder geschlossene Schuhe mit Absatz <2,5 cm. Keine offenen Pantoffeln. (5) **Stolperfallen entfernen** — lose Teppiche, Kabel, herumliegende Gegenstände. (6) **Boden trocken** halten (Inkontinenz, Reinigung). (7) **Orientierungshilfen** bei kognitiven Einschränkungen. Pflege dokumentiert Anpassungen im Pflegeplan. (DNQP 2022)"

**B1 (520 Zeichen):**
"Umgebung sicher machen ist oft unterschätzt — dabei kann Pflege hier viel direkt tun. Das Wichtigste: (1) **Bett richtig einstellen** — niedrig bei Demenz (dazu eine Matte am Boden); hoch genug, dass man rückenschonend arbeiten kann. (2) **Griffe zum Festhalten** in Bad, Toilette, Flur. (3) **Licht** — auch nachts (Nachtlicht, Bewegungsmelder). (4) **Schuhe** — rutschfeste Hausschuhe oder richtige Schuhe mit Absatz unter 2,5 cm. Keine losen Pantoffeln. (5) **Wege frei machen** — keine Teppiche, Kabel, Sachen. (6) **Boden trocken** halten. Pflege schreibt alle Anpassungen im Pflegeplan auf."

- **Erklärungs-Step:** stepType `hotspot` (Bild Patientenzimmer mit markierbaren Zonen)
- **imageSlot:** scene/Copic — Hospital patient room, elderly patient's perspective, showing bed, floor, bathroom door
- **Glossar-Begriffe:** [Sturzmatte, Bewegungsmelder, Nachtlicht]

### Misconceptions → Distraktoren

**D1: "Bett immer möglichst tief stellen — dann kann nichts passieren"**
- **Fachbegriff:** Bett-Tief-Pauschalisierung
- **Feedback (C1, 340 Zeichen):** "Nicht ganz — Bett-Höhe muss **individuell** angepasst werden. Bei Demenz-Patienten, die nachts klettern: sehr tief (mit Sturzmatte davor) — reduziert Sturzhöhe. Aber für **Transfer** in den Rollstuhl oder zum Gehen: das Bett muss hoch genug sein, sonst muss Pflege hebend arbeiten (Rückenprobleme!). Merke: Situativ anpassen, nicht pauschal."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — die Bett-Höhe muss zur Situation passen. Bei Demenz-Patienten, die nachts klettern: sehr tief stellen (mit Matte davor). Aber beim **Transfer** in den Rollstuhl: Bett muss höher sein — sonst tut der Pflege-Rücken weh. Merke: Je nach Situation passend einstellen."

**D2: "Haltegriffe im Bad — das ist Luxus, nur wenn der Patient danach fragt"**
- **Fachbegriff:** Haltegriff-Unterschätzung
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — Haltegriffe sind eine der **wirksamsten umgebungsbezogenen Sturz-Präventions-Maßnahmen** (DNQP 2022). Besonders im Bad: Anheben vom WC, Ein-/Aussteigen aus Dusche/Badewanne. Auch im Flur, an Türen, beim Bett. Pflege soll aktiv überprüfen, nicht warten bis Patient fragt — viele fragen nicht. Merke: Griffe anbieten + installieren."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — Haltegriffe im Bad sind eine der **besten** Sturz-Schutz-Maßnahmen (DNQP 2022). Besonders wichtig: Beim Aufstehen vom WC, beim Ein-/Aussteigen aus der Dusche. Auch im Flur und am Bett. Pflege soll selbst nachschauen, ob welche da sind — viele Patienten fragen nicht."

**D3: "Hausschuhe sind bequem und für ältere Menschen besser als feste Schuhe"**
- **Fachbegriff:** Hausschuh-Komfort-Irrtum
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — Hausschuhe mit glatten Sohlen gehören zu den häufigsten Sturzursachen. Lose, offene Pantoffeln sind besonders gefährlich (rutschen ab). Empfohlen: rutschfeste Hausschuhe (z.B. mit Gummisohle) ODER geschlossene Schuhe mit Absatz <2,5 cm. Auch nachts nicht barfuß oder in Socken gehen. Merke: Sicher > bequem."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — viele Hausschuhe sind gefährlich. Besonders **lose Pantoffeln** — die rutschen vom Fuß. Besser: Hausschuhe mit **Gummisohle** (rutschfest) oder richtige Schuhe mit kleinem Absatz. Auch nicht barfuß oder nur in Socken gehen. Merke: Sicher ist wichtiger als bequem."

### Richtig-Feedback
**C1 (285 Zeichen):** "Stark. Umgebungsprüfung gehört zu jedem Dienst: Bett-Höhe passend einstellen, Haltegriffe prüfen und wenn nötig installieren lassen, Beleuchtung (auch nachts!), rutschfeste Schuhe, Stolperfallen entfernen, Boden trocken. Alle Anpassungen im Pflegeplan dokumentieren."

**B1 (250 Zeichen):** "Stark. Umgebung prüfen gehört zu jedem Dienst: Bett richtig einstellen, Griffe zum Festhalten prüfen, Licht (auch nachts), rutschfeste Schuhe, keine Teppiche/Kabel im Weg, Boden trocken. Alle Änderungen im Pflegeplan aufschreiben."

### Verknüpfte Karteikarte
- **Vorderseite:** "Bei welchem Patienten stellt man das Bett bewusst sehr tief (mit Sturzmatte)?"
- **Rückseite:** "Bei Demenz-Patienten mit Klettertendenz — tiefes Bett + Matte reduziert Sturzhöhe und damit Verletzungsschwere."
- **Kategorie:** handlung

---

## Baustein 9: post-fall-syndrom

### Metadaten
- **bausteinId:** sturz-prophylaxe-post-fall
- **bloomLevel:** 4
- **wissensart:** komplikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Herr K. ist vor 3 Wochen gestürzt. Heute traut er sich nicht mehr aus dem Bett. Er sagt: 'Ich passe lieber auf.' Was passiert mit seinem Körper, wenn er weiter liegt? Was passiert mit seiner Angst?"
- **Step-Typ:** freetext (Reflexions-Aufgabe)

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Post-Fall-Syndrom: Nach einem Sturz entsteht oft Sturzangst → Bewegungsvermeidung → Muskelabbau → Gleichgewichts-Verlust → **erhöhtes Sturzrisiko**. Ein Teufelskreis. Pflege-Aufgabe: sanfte graduelle Re-Mobilisation."

**B1 (215 Zeichen):** "Nach einem Sturz haben viele Patienten **Sturzangst**. Dann bewegen sie sich weniger. Dadurch werden die Muskeln schwächer und das Gleichgewicht schlechter. **Das Sturzrisiko wird größer**. Ein Teufelskreis."

- **Step-Typ:** text (displayFormat: beforeafter — Teufelskreis visualisiert)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Das **Post-Fall-Syndrom** (auch 'Post-Fall Anxiety') ist eine der häufigsten, aber am wenigsten erkannten Komplikationen nach einem Sturz. Der Mechanismus: (1) Sturz → akute Angst. (2) Vermeidungsverhalten: 'Ich bleibe lieber sitzen.' (3) Inaktivität → Muskelabbau (ca. 1-2% Kraftverlust pro Tag bei Immobilität bei Älteren!). (4) Balance + Reaktionsfähigkeit nehmen ab. (5) Nächster Versuch: größere Unsicherheit, noch mehr Angst, **erhöhte Sturzgefahr**. Der Teufelskreis. Pflege-Intervention ist aktiv, nicht passiv: (a) **Angst validieren** — nicht abtun. (b) **Graduelle Exposition** — kleine, sichere Erfolge schaffen. (c) **Positive Verstärkung** — jeden Schritt würdigen. (d) **Ressourcen stärken** — was kann der Patient noch? (e) Physiotherapie einbinden. Merke: Aktivität IST Therapie. (DNQP 2022)"

**B1 (560 Zeichen):**
"**Post-Fall-Syndrom** heißt: Nach einem Sturz kommt oft **Angst**. Das passiert: (1) Sturz → Angst. (2) Der Patient bewegt sich weniger: 'Besser ich bleibe sitzen.' (3) Muskeln werden schwächer (bei Älteren 1-2% weniger Kraft pro Tag beim Liegen!). (4) Gleichgewicht wird schlechter. (5) Beim nächsten Versuch: noch unsicherer, noch mehr Angst, **höheres Sturzrisiko**. Ein Teufelskreis. Die Pflege muss aktiv sein: (a) **Angst ernst nehmen** — nicht 'ach, ist nicht schlimm'. (b) **Langsam wieder bewegen** — kleine, sichere Schritte. (c) **Erfolge zeigen** — 'Gut gemacht!' (d) **Was kann er noch?** — Stärken nutzen. (e) Physiotherapie dazuholen. Merke: **Sich bewegen ist Therapie**."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep — Der Teufelskreis in 5 Schritten)
- **imageSlot:** scene/Copic — Elderly man sitting in bed, anxious expression, untouched walking aid nearby (vs. Before: standing with nurse support)
- **Glossar-Begriffe:** [Post-Fall-Syndrom, Teufelskreis, Graduelle Exposition, Validation]

### Misconceptions → Distraktoren

**D1: "Wer Angst hat, soll ruhig liegen bleiben — dann kann nichts passieren"**
- **Fachbegriff:** Ruhe-Beruhigungs-Trugschluss
- **Feedback (C1, 380 Zeichen):** "Nicht ganz — Ruhe ist das **Gegenteil** von Hilfe. Sie bestätigt die Angst ('Bewegung ist gefährlich') und verursacht Muskelabbau (1-2% Kraftverlust pro Tag!). Der Teufelskreis wird verstärkt. Die evidenzbasierte Intervention ist **graduelle Re-Mobilisation**: kleine, sichere Schritte, Erfolgserlebnisse, positive Verstärkung. Merke: Aktivität bekämpft Angst. Ruhe verstärkt sie."
- **Feedback (B1, 320 Zeichen):** "Nicht ganz — Ruhe ist **schlecht**. Warum? (1) Die Angst wird bestätigt: 'Bewegung ist gefährlich'. (2) Muskeln werden schwächer (1-2% pro Tag!). Der Teufelskreis wird stärker. Besser: **Langsam wieder bewegen** — kleine Schritte, Erfolge feiern. Merke: Bewegen hilft gegen Angst. Liegen macht es schlimmer."

**D2: "Sturzangst ist psychologisch — das ist nicht Pflege-Sache"**
- **Fachbegriff:** Psycho-Abschiebung
- **Feedback (C1, 360 Zeichen):** "Nicht ganz — Pflege ist in der Schlüsselrolle. Wer erlebt Herrn K. 24/7? Pflege. Wer kann graduelle Mobilisations-Ziele setzen? Pflege. Wer sieht Fortschritt? Pflege. Psychologen kommen dazu bei schwerer Angst. Aber die tägliche Mobilisations-Begleitung, Erfolgserlebnisse schaffen, Ressourcen stärken — das ist Pflege. Merke: Post-Fall-Syndrom ist Pflege-Domäne."
- **Feedback (B1, 310 Zeichen):** "Nicht ganz — Pflege ist hier ganz wichtig. Wer sieht Herrn K. den ganzen Tag? Pflege. Wer kann kleine Bewegungs-Ziele setzen? Pflege. Wer feiert den Fortschritt? Pflege. Psychologen helfen bei schwerer Angst. Aber die tägliche Begleitung ist Pflege-Aufgabe. Merke: Post-Fall-Syndrom gehört zur Pflege."

**D3: "Einfach drauf los mobilisieren — dann merkt er, dass es geht"**
- **Fachbegriff:** Brutal-Mobilisations-Fehler
- **Feedback (C1, 360 Zeichen):** "Nicht ganz — Überforderung kann Angst **verstärken**. Ein zweiter Sturz während unsanfter Mobilisation zementiert das Trauma. Evidenzbasiert ist **graduelle Exposition**: winzige, sichere Erfolge (erst sitzen am Bettrand, dann stehen mit Hilfe, dann 2 Schritte, dann 5 Schritte usw.). Jeder Erfolg wird positiv verstärkt. Merke: Klein anfangen, Erfolg feiern, dann steigern."
- **Feedback (B1, 300 Zeichen):** "Nicht ganz — **zu schnell** ist schlecht. Wenn der Patient dabei nochmal stürzt, wird die Angst noch größer. Besser: **Ganz kleine Schritte**. Erst auf der Bettkante sitzen. Dann stehen mit Hilfe. Dann 2 Schritte. Jeden Erfolg loben. Merke: Klein anfangen, Erfolg zeigen, dann mehr wagen."

### Richtig-Feedback
**C1 (340 Zeichen):** "Sehr gut erkannt. Der Teufelskreis Post-Fall-Syndrom: Sturz → Angst → Vermeidung → Muskelabbau (1-2%/Tag!) → erhöhtes Sturzrisiko. Pflege-Intervention: Angst ernst nehmen, graduelle Mobilisation (kleine Schritte), positive Verstärkung bei Fortschritt, Ressourcen betonen, Physio einbinden. Aktivität ist die Therapie."

**B1 (295 Zeichen):** "Sehr gut. Der Teufelskreis: Sturz → Angst → weniger Bewegung → schwächere Muskeln (1-2% pro Tag weniger!) → höheres Sturzrisiko. Pflege-Hilfe: Angst ernst nehmen, kleine Bewegungs-Schritte, Lob bei jedem Erfolg, Stärken zeigen, Physiotherapie dazu. Bewegung ist die beste Therapie gegen Angst."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Teufelskreis beim Post-Fall-Syndrom?"
- **Rückseite:** "Sturz → Angst → Bewegungsvermeidung → Muskelabbau → Gleichgewichts-Verlust → erhöhtes Sturzrisiko."
- **Kategorie:** fakt

---

## Baustein 10: sturz-sofortmassnahmen

### Metadaten
- **bausteinId:** sturz-prophylaxe-sofortmassnahmen
- **bloomLevel:** 4
- **wissensart:** handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Frau M. liegt auf dem Boden neben ihrem Bett. Sie wirkt verwirrt. Was tust du in den ersten 60 Sekunden?"
- **Step-Typ:** sequencing (Reihenfolge Sofortmaßnahmen)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Erste Schritte bei einem Sturz: (1) Ruhe bewahren, (2) Ansprechbarkeit prüfen, (3) Nicht sofort aufheben — erst auf Verletzungen prüfen (Schmerzen, Deformitäten, Kopfverletzung), (4) Hilfe holen wenn nötig, (5) ABCDE wenn nicht ansprechbar."

**B1 (220 Zeichen):** "Erste Schritte bei einem Sturz: (1) Ruhe bewahren. (2) Prüfen: Ist der Patient wach? Antwortet er? (3) **Nicht sofort aufheben** — erst auf Verletzungen schauen (Schmerzen? Kopf?). (4) Hilfe holen. (5) ABCDE bei Bewusstlosigkeit."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Die ersten Minuten nach einem Sturz entscheiden über Sekundärverletzungen. Der strukturierte Ablauf: **Schritt 1 — Ansprechen und Ansprechbarkeit prüfen.** 'Frau M., hören Sie mich? Wissen Sie, wo Sie sind?' Bei Nicht-Reagieren: sofort ABCDE + Hilfe. **Schritt 2 — Verletzungen beurteilen BEVOR bewegt wird.** Sichtbar: Blutung? Kopfverletzung? Deformierte Extremität? Schmerzen (Frau M. fragen wenn ansprechbar)? **Hüftverletzung besonders bei Verkürzung + Außenrotation des Beins = NICHT bewegen, Notarzt.** **Schritt 3 — Wärme + Beruhigung.** Decke. Beruhigend sprechen. Patient auf dem Boden liegen lassen bis Sicherheit hergestellt ist. **Schritt 4 — Hilfe holen.** Pflegeteam, ggf. Arzt. **Schritt 5 — Aufhelfen nur wenn Verletzung ausgeschlossen** und idealerweise zu zweit. **Schritt 6 — Reassessment + Dokumentation** danach. Merke: **Nicht aufheben vor Prüfung.** (DNQP 2022)"

**B1 (570 Zeichen):**
"Die ersten Minuten sind wichtig. So geht es: **Schritt 1 — Ansprechen und schauen: Ist der Patient wach?** 'Frau M., hören Sie mich?' Wenn keine Antwort: ABCDE + Hilfe rufen. **Schritt 2 — Verletzungen suchen, BEVOR wir bewegen.** Blut? Kopfverletzung? Ist ein Bein verdreht oder kürzer? (Kann Hüftbruch sein — **nicht bewegen**, Notarzt). **Schritt 3 — Decke drüber, beruhigend reden.** Patient liegt erstmal. **Schritt 4 — Hilfe holen.** Kollegen, Arzt. **Schritt 5 — Aufhelfen nur wenn nichts gebrochen ist**, am besten zu zweit. **Schritt 6 — Nochmal prüfen und aufschreiben.** Merke: **Nicht sofort aufheben.**"

- **Erklärungs-Step:** stepType `sequencing` (6 Schritte in richtige Reihenfolge)
- **Glossar-Begriffe:** [ABCDE-Schema, Hüftfraktur-Zeichen, Reassessment]

### Misconceptions → Distraktoren

**D1: "Patient sofort aufheben — dann hat er's hinter sich und liegt bequem"**
- **Fachbegriff:** Schnelles-Aufheben-Fehler
- **Feedback (C1, 420 Zeichen):** "Nicht ganz — das kann gefährlich werden. Ein nicht erkannter Knochenbruch, Hüftgelenks-Luxation oder eine instabile Wirbelsäulenverletzung werden durch unsanftes Aufheben **massiv verschlimmert**. Besonders kritisch: Hüftfraktur (Bein verkürzt + außenrotiert) → Notarzt, NICHT bewegen. Erst Verletzungen ausschließen, dann gemeinsam vorsichtig aufhelfen. Merke: Prüfen vor Bewegen. Der Patient ist auf dem Boden sicher — wir haben Zeit."
- **Feedback (B1, 360 Zeichen):** "Nicht ganz — das kann **gefährlich** sein. Wenn ein Knochen gebrochen ist oder die Wirbelsäule verletzt, wird es durch schnelles Aufheben schlimmer. Besonders wichtig: **Hüftbruch** (Bein ist kürzer und verdreht) — **nicht bewegen**, Notarzt. Erst prüfen, dann vorsichtig aufhelfen. Merke: Prüfen kommt vor Bewegen. Der Patient am Boden ist erstmal sicher."

**D2: "Ich dokumentiere erst, wenn alles erledigt ist — jetzt zählt Handeln"**
- **Fachbegriff:** Spät-Dokumentations-Irrtum
- **Feedback (C1, 380 Zeichen):** "Teilweise richtig — akute Versorgung zuerst. Aber: Der **Sturzhergang** (Wo? Wann? Wie? Was lag herum?) muss **so früh wie möglich** dokumentiert werden, weil Details sofort verblassen. Viele Pflegekräfte schreiben Stichpunkte während der Erstversorgung auf Zettel und führen später das Protokoll aus. Merke: Handeln und Erinnern gleichzeitig — Stichpunkte jetzt, vollständige Dokumentation direkt danach."
- **Feedback (B1, 310 Zeichen):** "Teilweise richtig — Hilfe zuerst. Aber: **Wie der Sturz passiert ist** (Wo? Wann? Wie lag er? Was war daneben?) vergisst man schnell. Deshalb: **Kurz aufschreiben** während der Hilfe. Später dann das volle Protokoll. Merke: Wichtige Details sofort merken — Stichpunkte jetzt, richtiges Protokoll gleich danach."

**D3: "Nach dem Aufhelfen kann der Patient normal weitermachen — Sturz vorbei"**
- **Fachbegriff:** Akut-Ende-Annahme
- **Feedback (C1, 400 Zeichen):** "Nicht ganz — die Nachsorge ist mindestens so wichtig wie die Erstversorgung. Notwendig: (1) **Reassessment** in den Stunden danach — Kopfverletzungen können verzögert Symptome zeigen (subdurales Hämatom!). (2) **Vitalzeichen-Kontrolle.** (3) **Sturzprotokoll** mit Hergang-Analyse. (4) **Überarbeiteter Sturzpräventions-Plan.** (5) **Arzt-Information**. Merke: Nach dem Sturz ist vor der Nachsorge."
- **Feedback (B1, 340 Zeichen):** "Nicht ganz — nach dem Aufhelfen ist noch nicht fertig. Wichtig: (1) **In den nächsten Stunden nochmal schauen** — Kopfverletzungen zeigen sich oft später (gefährlich!). (2) **Vitalzeichen messen.** (3) **Sturzprotokoll** schreiben. (4) **Neuen Plan** machen — damit es nicht wieder passiert. (5) **Arzt informieren.** Merke: Nach dem Sturz geht die Arbeit weiter."

### Richtig-Feedback
**C1 (320 Zeichen):** "Hervorragend. Die Kernregel: Ansprechen → Prüfen → Wärme → Hilfe → Aufhelfen nur nach Ausschluss von Verletzungen → Dokumentation → Reassessment. Bei Hinweis auf Hüftfraktur oder Kopfverletzung: nicht bewegen, Notarzt/Arzt sofort. Sicherheit geht vor Geschwindigkeit."

**B1 (275 Zeichen):** "Hervorragend. Die wichtigsten Schritte: Ansprechen → Prüfen → Decke drüber → Hilfe holen → Aufhelfen nur wenn nichts gebrochen → Protokoll → Nochmal prüfen. Bei Hüftbruch oder Kopfverletzung: nicht bewegen, sofort Arzt. Sicherheit vor Schnelligkeit."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 2 Zeichen sprechen für eine Hüftfraktur und bedeuten: nicht bewegen?"
- **Rückseite:** "(1) Bein-Verkürzung und (2) Außenrotation des Fußes. Nicht bewegen, Notarzt/Arzt."
- **Kategorie:** handlung

---

## Baustein 11: sturzprotokoll-dokumentation

### Metadaten
- **bausteinId:** sturz-prophylaxe-dokumentation
- **bloomLevel:** 6
- **wissensart:** dokumentation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Schreibe das Sturzprotokoll für Frau M. (Sturz aus Baustein 10). Nutze mindestens 80 Wörter. Erwähne alle wichtigen Dimensionen."
- **Step-Typ:** freetext (mit KI-Feedback)

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Ein Sturzprotokoll enthält: **Hergang** (was genau passiert ist), **Uhrzeit + Ort**, **Umstände** (Schuhwerk, Medikamente, letzte Mahlzeit), **Verletzungen**, **Sofortmaßnahmen**, **Reassessment-Plan**. Strukturiert, nüchtern, vollständig."

**B1 (215 Zeichen):** "Ein Sturzprotokoll schreibt: **Hergang** (was passiert ist), **Uhrzeit + Ort**, **Umstände** (Schuhe? Medikamente? Wann war das letzte Essen?), **Verletzungen**, **was wir getan haben**, **was wir als nächstes prüfen**."

- **Step-Typ:** text (displayFormat: checklist — Pflicht-Elemente)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Das **Sturzprotokoll** ist rechtlich Pflicht und klinisch wertvoll. Ein gutes Protokoll enthält: **(1) Zeit und Ort** — exakt (z.B. 02:15 Uhr, Zimmer 3, zwischen Bett und Toilette). **(2) Hergang** — Was ist passiert? (Selbstbericht Patient + Beobachtung Pflege + ggf. Zeugen). **(3) Vor-Umstände** — Schuhwerk, Brille an?, Medikamente der letzten 4h, letzte Mahlzeit/Trinken, Inkontinenz-Notsituation? **(4) Patientenzustand** — Ansprechbarkeit, Orientierung, Vitalzeichen, Schmerzen. **(5) Verletzungen** — beobachtete + vom Patienten angegebene. **(6) Sofortmaßnahmen** — Was hat Pflege getan? Arzt informiert? Wann? **(7) Nachsorge-Plan** — Reassessment-Intervalle, besondere Beobachtung (insb. Kopfverletzung), Sturzpräventions-Plan angepasst? **Stil**: nüchtern, sachlich, keine Wertungen ('verwirrt' statt 'dement'). **Zweck**: medizinische Nachsorge + rechtliche Absicherung + Trend-Analyse. Merke: Auch verletzungsfreie Stürze + Near-Miss dokumentieren. (DNQP 2022)"

**B1 (600 Zeichen):**
"Das **Sturzprotokoll** ist Pflicht. Das muss drin sein: **(1) Zeit und Ort** — genau (z.B. 02:15 Uhr, Zimmer 3, zwischen Bett und Toilette). **(2) Was ist passiert?** — Frau M. erzählt + Pflege sieht + ggf. Zeugen. **(3) Die Umstände** — Schuhe an? Brille an? Welche Medikamente zuletzt? Wann gegessen/getrunken? Musste sie dringend zur Toilette? **(4) Patient** — Ist sie wach? Orientiert? Vitalzeichen? Schmerzen? **(5) Verletzungen** — was sehen wir, was sagt sie? **(6) Was hat Pflege gemacht?** Arzt angerufen? Wann? **(7) Nächste Schritte** — Wann nochmal prüfen? Plan anpassen? **Stil**: sachlich, keine Bewertung ('verwirrt' statt 'dement'). **Zweck**: medizinisch + rechtlich + Trends erkennen. Merke: Auch Stürze ohne Verletzung aufschreiben. Und Near-Miss auch."

- **Erklärungs-Step:** stepType `freetext` (mit KI-basierter Bewertung nach 6 Kriterien: Zeit+Ort, Hergang, Umstände, Patientenzustand, Verletzungen, Maßnahmen)
- **Bewertungskriterien für KI-Feedback**:
  1. Alle 7 Pflicht-Elemente erwähnt? (je 1 Punkt)
  2. Sachlich-nüchterner Ton?
  3. Vermeidung wertender Begriffe?
  4. Konkrete Uhrzeit + Ort?
  5. Medikamenten-Bezug enthalten?
  6. Nachsorge-Plan erwähnt?
- **Glossar-Begriffe:** [Sturzprotokoll, Hergang, Reassessment]

### Misconceptions → Distraktoren (für Validierungs-MC VOR dem Freitext)

**D1: "Bei verletzungsfreiem Sturz reicht ein kurzer Vermerk im Tagesbericht"**
- **Fachbegriff:** Kurz-Vermerk-Fehler
- **Feedback (C1, 370 Zeichen):** "Nicht ganz — **jeder Sturz** (mit oder ohne Verletzung) braucht ein vollständiges Sturzprotokoll. Warum? (1) Verletzungen können verzögert auftreten (subdurales Hämatom!). (2) Trend-Analyse ist nur mit vollständigen Daten möglich. (3) Rechtliche Absicherung. (4) Sturz-Hergang liefert Präventions-Hinweise. Merke: Ein Kurzvermerk reicht nie. Auch Near-Miss voll protokollieren."
- **Feedback (B1, 320 Zeichen):** "Nicht ganz — **jeder Sturz** braucht ein volles Protokoll — auch ohne sichtbare Verletzung. Warum? (1) Verletzungen zeigen sich manchmal später (Kopf!). (2) Man erkennt Muster nur mit allen Daten. (3) Rechtlich wichtig. (4) Wie der Sturz passierte zeigt, wie man ihn verhindern kann. Merke: Immer voll protokollieren."

**D2: "Patient erzählt, was passiert ist — das übernehme ich direkt im Protokoll"**
- **Fachbegriff:** Patientenbericht-Unreflektiertheit
- **Feedback (C1, 400 Zeichen):** "Nicht ganz — Patientenberichte sind **wertvoll, aber nicht ausschließlich**. Nach Sturz + evtl. Kopfverletzung ist die Erinnerung oft unvollständig oder verzerrt. Bei Demenz oder akuter Desorientierung erst recht. **Besser**: Patientenaussage **zitieren** ('Frau M. gibt an: ...'), dann **Pflege-Beobachtung** ergänzen (Zustand am Fundort, Objekte in der Umgebung, ggf. Zeugen). Merke: Mehrere Perspektiven, klar getrennt."
- **Feedback (B1, 340 Zeichen):** "Nicht ganz — den Patientenbericht **zitieren**, aber nicht nur sich darauf verlassen. Nach einem Sturz (besonders bei Kopfverletzung oder Demenz) ist die Erinnerung oft nicht komplett. **Besser**: 'Frau M. sagt: ...' — und dann **was Pflege gesehen hat** (Wo lag sie? Was war um sie herum? Zeugen?). Merke: Mehrere Quellen, getrennt aufschreiben."

**D3: "Ich schreibe das Sturzprotokoll morgen früh in Ruhe"**
- **Fachbegriff:** Delay-Dokumentation
- **Feedback (C1, 370 Zeichen):** "Nicht ganz — **zeitnahe Dokumentation** ist Pflicht. Details (Uhrzeit, exakte Position, Umgebungsobjekte, genauer Patientenzustand) sind nach wenigen Stunden verblasst. Rechtlich ist unzeitige Dokumentation angreifbar. Praxis: Stichpunkte während/unmittelbar nach Versorgung, vollständiges Protokoll innerhalb der Schicht (i.d.R. innerhalb 1-2 Stunden). Merke: Protokoll heute, nicht morgen."
- **Feedback (B1, 320 Zeichen):** "Nicht ganz — **zeitnah aufschreiben** ist Pflicht. Details (Uhrzeit, wo genau, was war drumrum, wie war der Patient) vergisst man nach ein paar Stunden. Rechtlich ist spätes Schreiben problematisch. Praxis: Stichpunkte gleich notieren, volles Protokoll in der gleichen Schicht (in 1-2 Stunden). Merke: Heute schreiben, nicht morgen."

### Richtig-Feedback
**C1 (350 Zeichen):** "Hervorragend. Das ideale Sturzprotokoll enthält 7 Pflicht-Elemente: Zeit+Ort, Hergang (Patient + Pflege-Beobachtung), Umstände (Schuhe, Medikamente, Mahlzeit), Patientenzustand, Verletzungen, Sofortmaßnahmen, Nachsorge-Plan. Stil: sachlich, nüchtern, keine Wertungen. Zeitnah schreiben. Auch verletzungsfreie Stürze + Near-Miss dokumentieren."

**B1 (295 Zeichen):** "Hervorragend. Das gute Sturzprotokoll hat 7 Teile: Zeit+Ort, Hergang (Patient + Pflege), Umstände (Schuhe, Medikamente, Essen), Patient-Zustand, Verletzungen, Hilfsmaßnahmen, was nächstes. Stil: sachlich, nicht werten. Schnell schreiben. Auch wenn nichts passiert ist: aufschreiben."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 7 Pflicht-Elemente hat ein Sturzprotokoll?"
- **Rückseite:** "Zeit+Ort, Hergang, Umstände, Patientenzustand, Verletzungen, Sofortmaßnahmen, Nachsorge-Plan."
- **Kategorie:** fakt

---

## Baustein 12: hueftprotektoren

### Metadaten
- **bausteinId:** sturz-prophylaxe-hueftprotektoren
- **bloomLevel:** 2
- **wissensart:** maßnahme
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Was, denkst du, machen 'Hüftprotektoren' — und was können sie NICHT?"
- **Step-Typ:** freetext (kurz)

### Stufe 2 — Hinweis

**C1 (225 Zeichen):** "Hüftprotektoren sind weiche oder harte Polster in spezieller Unterwäsche, die bei Stürzen auf die Hüfte den Aufprall abfedern. Sie **verhindern Hüftfrakturen**, aber **keine Stürze**. Compliance ist oft schlecht."

**B1 (215 Zeichen):** "Hüftprotektoren sind **Polster in spezieller Unterwäsche** an der Seite der Hüfte. Wenn jemand auf die Hüfte fällt, federn sie ab. Sie **verhindern Knochenbrüche an der Hüfte**, aber **nicht den Sturz selbst**. Viele tragen sie ungern."

- **Step-Typ:** text (displayFormat: beforeafter — mit/ohne Protektor Wirkung)

### Stufe 3 — Erklärung

**C1 (640 Zeichen):**
"**Hüftprotektoren** sind spezielle Unterhosen mit eingearbeiteten Polstern an den seitlichen Hüften. Bei einem seitlichen Sturz wird die Aufprallenergie absorbiert — das senkt das Risiko einer Hüftfraktur deutlich. **Indikation**: Hochrisiko-Patienten mit gleichzeitig (1) hoher Sturzgefahr, (2) Osteoporose und (3) Immobilitätsrisiko (z.B. Demenz-Patienten im Pflegeheim). **Nicht empfohlen** für alle — Überversorgung bringt keinen Nutzen. **Problem in der Praxis**: Compliance. Viele tragen sie nicht konstant (Inkontinenz-Versorgung schwierig, Komfort-Empfindung). Die Wirksamkeit hängt davon ab, dass sie im Sturzmoment getragen werden. **Wichtig**: Hüftprotektoren **verhindern Frakturen, nicht Stürze** — sie sind **Sekundärprophylaxe**. Die primäre Sturzprävention muss separat erfolgen. (DNQP 2022)"

**B1 (480 Zeichen):**
"**Hüftprotektoren** sind spezielle Unterhosen mit **Polstern an der Seite**. Fällt jemand auf die Hüfte, federn die Polster ab — das verhindert oft einen Knochenbruch. **Für wen?** Hochrisiko-Patienten mit: (1) großem Sturzrisiko, (2) Osteoporose und (3) z.B. Demenz. **Nicht für alle** — wenn das Risiko klein ist, bringt es nichts. **Problem**: Viele tragen sie nicht durchgehend (Inkontinenz, Komfort). Sie helfen nur, wenn sie **beim Sturz** getragen werden. **Wichtig**: Sie **verhindern Knochenbrüche, nicht Stürze**. Sturz-Prophylaxe muss extra passieren."

- **Erklärungs-Step:** stepType `comparison` (Tabelle: Was Hüftprotektoren können vs. nicht können)
- **Glossar-Begriffe:** [Hüftprotektor, Osteoporose, Sekundärprophylaxe, Compliance]

### Misconceptions → Distraktoren

**D1: "Hüftprotektoren verhindern Stürze"**
- **Fachbegriff:** Verwechslung-Ziel
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — Hüftprotektoren **verhindern Hüftfrakturen beim Sturz**, nicht den Sturz selbst. Primär-Prophylaxe (Stürze verhindern) und Sekundär-Prophylaxe (Folgen mindern) sind zwei verschiedene Dinge. Merke: Schutz ≠ Prävention."
- **Feedback (B1, 205 Zeichen):** "Nicht ganz — die Polster verhindern **Knochenbrüche beim Sturz**, aber nicht den Sturz. Sturz-Prävention und Bruch-Schutz sind zwei Dinge. Merke: Schutz ist nicht dasselbe wie Sturz verhindern."

**D2: "Jeder Risikopatient sollte Hüftprotektoren bekommen"**
- **Fachbegriff:** Überversorgungs-Fehler
- **Feedback (C1, 230 Zeichen):** "Nicht ganz — Hüftprotektoren sind für **Hochrisiko-Patienten** (Sturzrisiko + Osteoporose + oft Demenz). Bei niedrigem Risiko bringen sie keinen Nutzen, sind aber teuer und unbequem. Merke: Nur bei klarer Indikation einsetzen."
- **Feedback (B1, 200 Zeichen):** "Nicht ganz — Hüftprotektoren sind für **sehr hohes Risiko** (Sturz-Risiko + Osteoporose + oft Demenz). Bei wenig Risiko helfen sie nicht. Merke: Nur wenn wirklich nötig einsetzen."

### Richtig-Feedback
**C1 (220 Zeichen):** "Genau. Hüftprotektoren verhindern Hüftfrakturen, nicht Stürze (Sekundär-Prophylaxe). Indikation: Hochrisiko (Sturzgefahr + Osteoporose + meist Demenz). Compliance oft schlecht — Anwendung muss begleitet werden."

**B1 (190 Zeichen):** "Genau. Hüftprotektoren verhindern Knochenbrüche an der Hüfte, nicht den Sturz. Für wen: Sehr hohes Risiko (Sturz + schwache Knochen + oft Demenz). Viele tragen sie ungern — Pflege begleitet."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was verhindern Hüftprotektoren — und was nicht?"
- **Rückseite:** "Sie verhindern Hüftfrakturen beim Sturz, NICHT den Sturz selbst. Indikation nur bei Hochrisiko."
- **Kategorie:** fakt

---

## Baustein 13: interprofessionelle-zusammenarbeit

### Metadaten
- **bausteinId:** sturz-prophylaxe-team
- **bloomLevel:** 3
- **wissensart:** organisation
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Pflege soll Sturzprophylaxe umsetzen. Wen brauchst du noch — und wofür?"
- **Step-Typ:** matching (Rolle → Aufgabe)

### Stufe 2 — Hinweis

**C1 (225 Zeichen):** "Sturzprophylaxe ist **Teamaufgabe**: Pflege (Assessment, Umgebung, Mobilisation), Arzt (Medikamentenreview, Grunderkrankungen), Physiotherapie (Training), Augenarzt (Sehkorrektur), Apotheker (Medikamenten-Interaktionen)."

**B1 (210 Zeichen):** "Sturzprophylaxe ist **Teamarbeit**: Pflege (schauen, Umgebung ändern, begleiten), Arzt (Medikamente prüfen, Krankheiten behandeln), Physiotherapie (Training), Augenarzt (Brille), Apotheker (Medikamenten-Check)."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Sturzprophylaxe kann Pflege **allein nicht leisten** — das zeigt die Evidenz. Der **interprofessionelle Ansatz** ist Standard: **Pflege** (zentrale Rolle): Assessment, Umgebungsanpassung, Mobilisations-Begleitung, Dokumentation, Koordination des Teams. **Arzt**: Medikamenten-Review (kritisch), Behandlung von Grunderkrankungen (Herzinsuffizienz, Diabetes, Parkinson, Delir), Verordnungen für Physiotherapie und Hilfsmittel. **Physiotherapie**: Individuelles Kraft-/Balance-Training, Gangschule, Hilfsmittel-Anpassung. **Augenarzt**: Sehkraft-Kontrolle (kritisch — Gleitsichtbrillen sind Sturz-Risiko!). **Apotheker/Pharmazeut**: Medikamenten-Interaktions-Check, Vorschlag von Alternativen. **Sozialdienst/Ergotherapie**: Wohnraum-Anpassung zuhause. Pflege **koordiniert** das Team und ist **Informations-Drehscheibe**. Ohne diese Vernetzung bleibt Sturzprophylaxe Stückwerk."

**B1 (480 Zeichen):**
"Sturzprophylaxe braucht **ein Team** — Pflege alleine reicht nicht. **Pflege** (wichtigste Rolle): Schauen, Umgebung ändern, bei Bewegung helfen, aufschreiben, Team zusammenhalten. **Arzt**: Medikamente prüfen, Krankheiten behandeln (Herz, Diabetes, Parkinson), Rezepte für Physiotherapie. **Physiotherapie**: Extra-Training (Kraft, Balance), Gehen üben, Hilfsmittel anpassen. **Augenarzt**: Brille und Sehkraft (Gleitsichtbrillen sind riskant!). **Apotheker**: Medikamente auf gefährliche Mischungen prüfen. **Ergotherapie**: Wohnung zuhause anpassen. Pflege **verbindet** das Team."

- **Erklärungs-Step:** stepType `matrix` (Akteur × Aufgabe × Wann involviert)
- **Glossar-Begriffe:** [Interprofessionell, Ergotherapie]

### Misconceptions → Distraktoren

**D1: "Sturzprophylaxe ist primär Pflege-Aufgabe — die anderen machen was anderes"**
- **Fachbegriff:** Pflege-Alleinstellungs-Irrtum
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — Pflege ist zentral, aber Sturzprophylaxe braucht das Team. Studien zeigen: Multifaktorielle interprofessionelle Programme senken Sturzrate um 24% (Cochrane 2023), Pflege allein wenig. Gründe: Medikamentenmanagement (Arzt), Krafttraining (Physio), Sehkorrektur (Augenarzt) — das kann Pflege nicht ersetzen. Merke: Pflege koordiniert, alle handeln."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — Pflege ist sehr wichtig, aber **ohne das Team geht es nicht**. Studien zeigen: Wenn alle zusammenarbeiten, sinken Stürze um 24%. Pflege allein schafft viel weniger. Warum? Medikamente = Arzt. Training = Physio. Brille = Augenarzt. Merke: Pflege verbindet, alle handeln."

**D2: "Die Physiotherapie soll ich nur holen, wenn der Patient schon gestürzt ist"**
- **Fachbegriff:** Zu-Spät-Einschaltung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — Physiotherapie ist **Primärprophylaxe**, nicht nur Reaktion. Bei identifiziertem Sturzrisiko → frühzeitig Physio einbinden. Kraft- und Balance-Training über 12+ Wochen ist die wirksamste Einzelmaßnahme (Cochrane 2023). Darauf warten bis jemand gefallen ist = zu spät. Merke: Frühe Anmeldung, präventiv."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — Physiotherapie sollte **früh** dazukommen, nicht erst nach einem Sturz. Wenn Sturzrisiko da ist: Physio anmelden. Training über 12+ Wochen ist die beste Einzelmaßnahme. Warten bis es passiert ist = zu spät. Merke: Früh anmelden, nicht erst nach dem Sturz."

### Richtig-Feedback
**C1 (285 Zeichen):** "Gut. Sturzprophylaxe ist Team-Aufgabe: Pflege (Assessment, Umgebung, Koordination), Arzt (Medikamenten-Review, Grunderkrankungen), Physiotherapie (Training — früh einbeziehen!), Augenarzt (Sehkraft), Apotheker (Interaktionen), Ergotherapie (Wohnraum). Pflege ist die Schaltstelle."

**B1 (245 Zeichen):** "Gut. Sturzprophylaxe ist Team-Aufgabe: Pflege (Assessment, Umgebung, zusammenhalten), Arzt (Medikamente, Krankheiten), Physiotherapie (Training — früh dazuholen!), Augenarzt (Sehen), Apotheker (Medikamente prüfen), Ergotherapie (Wohnen). Pflege verbindet."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Berufsgruppen gehören typischerweise ins Sturzprophylaxe-Team?"
- **Rückseite:** "Pflege (koordiniert), Arzt, Physiotherapie, Augenarzt, Apotheker. Ggf. Ergotherapie/Sozialdienst."
- **Kategorie:** fakt

---

## Bloom-Verteilung (13 Bausteine)

| Bloom | Anzahl | Prozent |
|-------|--------|---------|
| 1 (Erinnern) | 1 | 8% |
| 2 (Verstehen) | 2 | 15% |
| 3 (Anwenden) | 5 | 38% |
| 4 (Analysieren) | 4 | 31% |
| 5 (Bewerten) | 1 | 8% |
| 6 (Erschaffen) | 1 | 8% |

**Check:** Bloom 1-2: **23%** (Ziel max 25%) ✅ · Bloom 3-4: **69%** (Ziel min 50%) ✅ · Bloom 5-6: **15%** (Ziel min 15%) ✅

## Zeit-Budget

**Bausteine-Zeit-Summe (Stufen 2+3):** ~55 Min
**Gesamt-Zielzeit Thema:** 99 Min (4 UE × 45 × 0,55)
**Verfügbar für Übungs-Steps (Regisseur-Plan):** ~44 Min

**Status:** Passt — Regisseur kann 10-15 Übungs-Steps (MC, Matching, Sequencing, Hotspot etc.) ergänzen.

## Primärquellen (konsistent durchgängig)

- DNQP (2022): Expertenstandard Sturzprophylaxe in der Pflege, 2. Aktualisierung
- WHO (2007): Global Report on Falls Prevention in Older Age
- § 1906a BGB — Genehmigung freiheitsentziehender Maßnahmen
- Cochrane Database (2023): Exercise for preventing falls in older people (Sherrington et al.)
- Beers-Liste (2023) — potenziell inadäquate Medikation im Alter
- EPUAP/NPIAP/PPPIA (2019) — nur bei Dekubitus-Bezug

## Pflicht-Glossar-Einträge

| Begriff | C1-Definition | Quelle |
|---------|---------------|--------|
| Sturz | Unbeabsichtigtes Landen auf dem Boden oder tieferer Ebene | WHO 2007 |
| Near-Miss | Fast-Sturz (abgefangen) — als Sturzereignis dokumentieren | DNQP 2022 |
| Intrinsische Risikofaktoren | Personenbezogen: Alter, Muskelschwäche, Medikamente, Kognition | DNQP 2022 |
| Extrinsische Risikofaktoren | Umgebungsbezogen: Stolperfallen, Beleuchtung, Schuhe | DNQP 2022 |
| Polypharmazie | ≥ 4 Dauermedikamente, eigenständiger Sturzrisikofaktor | Beers 2023 |
| Sarkopenie | Altersbedingter Muskelkraftverlust | WHO |
| Post-Fall-Syndrom | Sturzangst → Bewegungsvermeidung → Muskelabbau → Sturzrisiko | DNQP 2022 |
| Fixierung | Freiheitsentziehende Maßnahme, genehmigungspflichtig | § 1906a BGB |
| § 1906a BGB | Rechtliche Grundlage freiheitsentziehender Maßnahmen | BGB |
| Timed-Up-and-Go | Schneller Test: Steh-Gang, >14s = Sturzrisiko | Podsiadlo 1991 |
| Tinetti-Test | Balance + Gang Assessment (max 28 Punkte) | Tinetti 1986 |
| Orthostatische Dysregulation | Blutdruckabfall beim Aufstehen → Schwindel/Sturzrisiko | Klinik |
| Hüftprotektor | Unterwäsche mit Polstern, verhindert Hüftfrakturen bei Sturz | DNQP 2022 |
| Sturzprotokoll | Strukturierte Dokumentation nach Sturzereignis | DNQP 2022 |
| Interprofessionell | Team-Ansatz: Pflege + Arzt + Physio + Augenarzt + Apotheker | DNQP 2022 |

## Karteikarten

Siehe `karteikarten-plan.md` — 13 Karten, 1 pro Baustein, FSRS-kompatibel.

## Was für Review #1 geprüft werden soll

- [ ] Fachliche Richtigkeit jedes Bausteins (Expertenstandards-konform?)
- [ ] Bloom-Level plausibel (Lernziel passt zu Bloom)?
- [ ] Misconceptions = echte Pflegeschüler-Fehler (nicht konstruiert)?
- [ ] Feedback spezifisch zur Misconception (nicht generisch)?
- [ ] B1-Sprache: Sätze <15 Wörter, einfache Wörter?
- [ ] Längen im Rahmen (Stufe 3: 500-800 C1, 400-600 B1)?
- [ ] Rechtliche Genauigkeit (§ 1906a, Dokumentationspflicht)?
- [ ] Keine veralteten Empfehlungen (Homans-Zeichen, 2-Stunden-Dogma, Bettgitter-Prophylaxe)?
