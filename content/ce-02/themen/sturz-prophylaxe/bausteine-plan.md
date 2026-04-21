# Wissensbausteine: Sturz-Prophylaxe

## Metadaten
- themaId: sturz-prophylaxe
- ceId: ce-02
- cluster: B (Mobilität)
- wissensart: handlung
- geschaetzteUE: 4 (Zielzeit: 99 Min App-Content bei Faktor 0,55)
- voraussetzungen: [pflegeprozess]
- bausteineAnzahl: 10 (Mikro-Bausteine)
- erstellt: 2026-04-22 (Pilot-Lauf)

---

## Baustein 1: sturz-definition

### bausteinId: sturz-prophylaxe-sturz-definition

### Metadaten
- **bloomLevel:** 1
- **wissensart:** definition
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Was, glaubst du, zählt alles als Sturz? Auch wenn sich jemand abfängt?"
- **Erwartete Antwort:** (Offen) — aktiviert Vorwissen zur Sturz-Abgrenzung.
- **Step-Typ:** freetext (kurz)

### Stufe 2 — Hinweis
- **Text (C1):** "Ein Sturz ist definiert als unbeabsichtigtes Landen auf dem Boden oder einer tieferen Ebene. Auch abgefangene Stürze zählen — sie heißen 'Near-Miss' und sind wichtige Warnzeichen."
- **Text (B1):** (B1-Dozentin ergänzt)
- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Inhalt:** Was ein Sturz ist, was nicht (bewusstes Setzen), und warum Near-Miss dokumentiert werden muss. Definition nach WHO 2007.
- **Glossar-Begriffe:** [Sturz, Near-Miss, Sturzhergang]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren
- `D1`: **"Ein Sturz ist erst ein Sturz, wenn der Patient verletzt ist"**
  - Fachbegriff: "Verletzung-zentrierte Fehldefinition"
  - Feedback (C1): "Naher dran als du denkst — aber auch ein verletzungsfreier Sturz ist ein Sturz. Die Verletzung ist die Folge, nicht die Definition. Merke: Wir dokumentieren den Sturz selbst, auch ohne sichtbaren Schaden — weil er ein Warnsignal ist."
  - Feedback (B1): (B1-Dozentin ergänzt)

- `D2`: **"Wenn jemand abgefangen wird, ist kein Sturz passiert"**
  - Fachbegriff: "Near-Miss-Konfusion"
  - Feedback (C1): "Nicht ganz — das ist ein Near-Miss (Fast-Sturz). Der zählt als Sturzereignis und wird dokumentiert. Warum? Weil der nächste vielleicht nicht abgefangen wird. Merke: Jeder verhinderte Sturz ist auch ein Warnhinweis."

- `D3`: **"Sich bewusst hinsetzen ist ein Sturz"**
  - Fachbegriff: "Absicht-Verwechslung"
  - Feedback (C1): "Fast — das ist kein Sturz, weil der Patient die Handlung bewusst kontrolliert. Sturz = unbeabsichtigt. Merke: Die Absicht unterscheidet Sturz von bewusstem Hinsetzen."

### Richtig-Feedback
- **Feedback (C1):** "Richtig. Ein Sturz ist das unbeabsichtigte Landen auf dem Boden — auch wenn der Patient keine Verletzung hat. Deshalb gilt: jeden Sturz dokumentieren, auch Near-Miss."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist die Definition eines Sturzes nach WHO?"
- **Rückseite:** "Unbeabsichtigtes Landen auf dem Boden oder einer tieferen Ebene — auch Near-Miss zählt."
- **Kategorie:** fachbegriff

---

## Baustein 2: intrinsische-risikofaktoren

### bausteinId: sturz-prophylaxe-intrinsische-risiken

### Metadaten
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Welche Eigenschaften eines Patienten erhöhen sein Sturzrisiko? Sammle mindestens 3."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis
- **Text (C1):** "Intrinsische Risikofaktoren kommen 'aus dem Patienten selbst': Alter, Muskelschwäche, Sehminderung, Medikamente, kognitive Einschränkungen, Sturz-Vorgeschichte. Der stärkste Einzelprädiktor ist ein Sturz in den letzten 12 Monaten."
- **Step-Typ:** text (displayFormat: procontra — Risiko vs. Schutz)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Inhalt:** Alle intrinsischen Faktoren mit Beispielen, Priorisierung, Hinweise was Pflege beobachten soll
- **Glossar-Begriffe:** [Polypharmazie, Sarkopenie, orthostatische Dysregulation]

### Misconceptions → Distraktoren
- `D1`: **"Alter allein ist DER Risikofaktor"**
  - Feedback (C1): "Nicht ganz — Alter ist EIN Faktor unter vielen. Ein fitter 85-Jähriger ohne Medikamente hat vielleicht weniger Risiko als ein 60-Jähriger mit Parkinson und Polypharmazie. Merke: immer multifaktoriell denken."

- `D2`: **"Bettgitter verhindern Stürze"**
  - Feedback (C1): "Nicht ganz — Bettgitter erhöhen die Fallhöhe, wenn der Patient darüber klettert. Deshalb sind sie KEINE Sturzprophylaxe, sondern eine freiheitsentziehende Maßnahme die rechtlich genehmigt werden muss. Merke: Sicherheit ≠ Einsperren."

- `D3`: **"Polypharmazie ist harmlos solange der Patient sie gewohnt ist"**
  - Feedback (C1): "Nicht ganz — Gewöhnung schützt nicht vor Wechselwirkungen. Jedes zusätzliche Medikament ab dem 4. erhöht das Sturzrisiko um ca. 20% (abhängig von der Substanz). Merke: Regelmäßiger Medikamentenreview."

### Richtig-Feedback
- **Feedback (C1):** "Genau. Wichtige intrinsische Faktoren sind Alter, Sturz-Vorgeschichte, Muskelschwäche, Sehminderung, Medikamente. Der stärkste ist: Sturz in den letzten 12 Monaten."

---

## Baustein 3: extrinsische-risikofaktoren

### bausteinId: sturz-prophylaxe-extrinsische-risiken

### Metadaten
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Schau dir das Zimmer deines Patienten an: welche Sturzgefahren kannst du sehen?"
- **Step-Typ:** text (Denkaufgabe, keine Bewertung)

### Stufe 2 — Hinweis
- **Text (C1):** "Extrinsische Risikofaktoren sind in der Umgebung: Stolperfallen (Teppiche, Kabel), schlechte Beleuchtung, fehlende Haltegriffe, nasse Böden, ungeeignetes Schuhwerk."
- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `hotspot` (Bild eines Patientenzimmers)
- **Inhalt:** Hotspots auf Stolperfallen, Haltegriffe, Beleuchtung etc.
- **imageSlot:** scene, copic, "hospital patient room with multiple hazards: rug edges, low light, bed too high, no grab bars, cluttered floor — minimalist sketchy drawing"

### Misconceptions → Distraktoren
- `D1`: **"Extrinsische Faktoren sind Patienten-Sache, nicht Pflege-Aufgabe"**
  - Feedback: "Nicht ganz — die Umgebung gehört zu den Pflege-Interventionen. Pflege kann und soll das Zimmer sicher gestalten. Merke: Prophylaxe = Patient + Umgebung."

- `D2`: **"Ein Rutsch-Teppich verhindert Stürze"**
  - Feedback: "Nicht ganz — lose Teppiche sind eine der Top-Stolperfallen. Rutschfeste Bodenmaterialien sind sicherer als Teppiche."

- `D3`: **"Helle Beleuchtung nur tagsüber wichtig"**
  - Feedback: "Nicht ganz — nachts ist die Beleuchtung kritisch (Toilettengang). Ein Bewegungslicht oder Nachtlicht kann Stürze verhindern."

---

## Baustein 4: risiko-assessment

### bausteinId: sturz-prophylaxe-assessment

### Metadaten
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn du das Sturzrisiko eines Patienten einschätzen sollst — worauf achtest du?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis
- **Text (C1):** "Der DNQP-Expertenstandard empfiehlt KEIN einzelnes Instrument als Pflicht. Die klinische Einschätzung unter Berücksichtigung mehrerer Risikofaktoren steht im Vordergrund. Assessment-Instrumente wie Tinetti, TUG, Morse können unterstützen."
- **Step-Typ:** text (displayFormat: mnemonic — "MULTI: Medikamente, Urinverhalten, Lichtverhältnisse, Treppen, Individuelle Faktoren")

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `comparison`
- **Inhalt:** Tabellarischer Vergleich Tinetti / TUG / Morse / Klinische Einschätzung — Vor- und Nachteile, wann wer sinnvoll ist.

### Misconceptions → Distraktoren
- `D1`: **"Tinetti ≤ 18 heißt immer Sturzrisiko"**
  - Fachbegriff: "Skala-Dogmatismus"
  - Feedback: "Nicht ganz — Skalen sind Hilfsmittel. Die klinische Einschätzung ist führend. Ein Tinetti von 22 bei einem Patienten mit akuter Harnwegsinfektion + Diuretika-Neustart ist höheres Risiko als 18 bei einem stabilen Parkinson-Patienten seit Jahren."

- `D2`: **"Einmal einschätzen reicht"**
  - Feedback: "Nicht ganz — Re-Assessment ist Pflicht bei Zustandsveränderungen: Neue Medikamente, OP, Infekt, Sturzereignis. Merke: Assessment ist dynamisch."

- `D3`: **"Morse Fall Scale ist besser als TUG"**
  - Feedback: "Nicht ganz — DNQP empfiehlt KEIN einzelnes Instrument. Jedes hat Stärken/Schwächen je nach Setting (TUG = Reha, Morse = Akutkrankenhaus). Merke: Tool zum Kontext wählen."

---

## Baustein 5: kraft-balance-training

### bausteinId: sturz-prophylaxe-training

### Metadaten
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Was ist die wissenschaftlich wirksamste Maßnahme gegen Stürze? Rat mal."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis
- **Text (C1):** "Progressives Kraft- und Balancetraining ist die am besten belegte Sturzprävention (Cochrane-Review). Wirksam ab 2-3 Einheiten/Woche über mindestens 12 Wochen. Auch 90-Jährige profitieren!"
- **Step-Typ:** text (displayFormat: quote — Cochrane)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `sequencing`
- **Inhalt:** Reihenfolge eines typischen Trainingsaufbaus: Beweglichkeit → Kraft → Balance → Koordination → Alltagstransfer

### Misconceptions → Distraktoren
- `D1`: **"Nach Sturz ist Ruhe wichtig"**
  - Fachbegriff: "Post-Fall-Ruhe-Fehler"
  - Feedback: "Nicht ganz — Ruhe nach Sturz verschlimmert die Sturzangst und den Muskelabbau. Frühe, sanfte Mobilisation ist Standard. Merke: Aktivität heilt, Passivität verschlimmert."

- `D2`: **"Alte Patienten können kein Krafttraining"**
  - Feedback: "Nicht ganz — Studien zeigen: selbst 90-jährige Pflegeheim-Bewohner haben signifikante Kraftzuwächse nach progressivem Training. Das 'zu alt'-Mythos ist widerlegt."

- `D3`: **"Spazierengehen reicht als Training"**
  - Feedback: "Nicht ganz — Gehen ist nicht progressiv (gleiche Belastung). Gezielte Balance-Übungen (Einbeinstand, Tandemstand) und Krafttraining sind überlegen."

---

## Baustein 6: medikamentenreview

### bausteinId: sturz-prophylaxe-medikamente

### Metadaten
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Welche Medikamente erhöhen das Sturzrisiko am stärksten?"
- **Step-Typ:** mc (mit Misconceptions als Distraktoren)

### Stufe 2 — Hinweis
- **Text (C1):** "Sturzrisiko-erhöhende Medikamente: Psychopharmaka (besonders Benzodiazepine), Antihypertensiva, Diuretika, Antidepressiva, Antipsychotika. Polypharmazie (> 4 Dauermedikamente) ist eigenständiger Risikofaktor."
- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `matrix` (Medikament × Sturz-Mechanismus)
- **Inhalt:** Welches Medikament wirkt wie auf Sturzrisiko (Hypotension, Sedierung, Dehydratation, extrapyramidal)

### Misconceptions → Distraktoren
- `D1`: **"Schlafmittel sind harmlos"**
  - Feedback: "Nicht ganz — Benzodiazepine erhöhen Sturzrisiko um 50-100%. Z-Substanzen (Zolpidem) auch. Langfristig auch kognitive Beeinträchtigung."

- `D2`: **"Medikamentenreview ist Arzt-Sache"**
  - Feedback: "Nicht ganz — Pflege hat Beobachtungs- und Meldepflicht. Wenn Patient nach neuem Medikament Gangunsicherheit zeigt → melden. Pflege ist die Frontlinie."

- `D3`: **"Ältere brauchen weniger Dosis"**
  - Feedback: "Teilweise richtig, aber falsch pauschalisiert. Bei Älteren: Start low, go slow. Aber nicht alles halbieren — individuelle Abwägung. Merke: 'Ältere' sind nicht homogen."

---

## Baustein 7: fixierung-rechtlich

### bausteinId: sturz-prophylaxe-fixierung

### Metadaten
- **bloomLevel:** 5
- **wissensart:** recht
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Frau M. hat Sturzrisiko. Darfst du beidseitige Bettgitter hochziehen?"
- **Step-Typ:** branching (einfach, Bloom 5)

### Stufe 2 — Hinweis
- **Text (C1):** "Fixierung (inkl. beidseitiger Bettgitter) ist eine freiheitsentziehende Maßnahme. Sie braucht richterliche Genehmigung (§ 1906a BGB) oder informierte Zustimmung des Patienten. Sie ist KEINE Sturzprophylaxe — sie kann Verletzungen sogar verstärken."
- **Step-Typ:** text (displayFormat: procontra — Argumente pro/contra Fixierung)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `branching` (ethisches Dilemma)
- **Inhalt:** Szenario mit Entscheidung + rechtlicher Einordnung + Alternativen
- **Glossar-Begriffe:** [Fixierung, freiheitsentziehende Maßnahme, § 1906a BGB, informierte Einwilligung]

### Misconceptions → Distraktoren
- `D1`: **"Bettgitter sind keine Fixierung"**
  - Feedback: "Nicht ganz — beidseitige Bettgitter OHNE Zustimmung = freiheitsentziehende Maßnahme. Rechtlich wie Gurte. Merke: Die Intention zählt, nicht das Instrument."

- `D2`: **"Bei Demenz darf man fixieren"**
  - Feedback: "Nicht ganz — auch bei Demenz: Betreuer + Gericht müssen zustimmen. § 1906a BGB. Ausnahme: akute Eigengefährdung (max 24h ohne Genehmigung, dann unverzüglich beantragen)."

- `D3`: **"Fixierung ist die sicherere Option"**
  - Feedback: "Nicht ganz — dokumentierte Tote durch Strangulation in Bettgittern und Gurtbetten. Fixierung ist extrem risikoreich. Merke: Es gibt fast immer Alternativen."

---

## Baustein 8: post-fall-syndrom

### bausteinId: sturz-prophylaxe-post-fall-syndrom

### Metadaten
- **bloomLevel:** 3
- **wissensart:** komplikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Herr K. ist vor 2 Wochen gestürzt. Jetzt traut er sich nicht mehr zu laufen. Was passiert mit seinem Körper?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis
- **Text (C1):** "Post-Fall-Syndrom: Sturzangst nach Sturz führt zu Bewegungsvermeidung → Muskelabbau → reduziertes Gleichgewicht → erhöhtes Sturzrisiko (Teufelskreis). Pflegerische Aufgabe: sanfte graduelle Mobilisation + Angstreduktion."
- **Step-Typ:** text (displayFormat: beforeafter — Teufelskreis visualisiert)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Inhalt:** Graduelle Expositions-Strategie, Ressourcen-Ansatz, positive Verstärkung

### Misconceptions → Distraktoren
- `D1`: **"Wer Angst hat, soll liegen bleiben"**
  - Feedback: "Nicht ganz — Ruhe verschlimmert den Teufelskreis. Graduelle Mobilisation baut Vertrauen auf. Merke: Aktivität IST Therapie gegen Sturzangst."

- `D2`: **"Sturzangst ist psychologisch, nicht pflegerisch"**
  - Feedback: "Nicht ganz — Pflege hat die Kern-Rolle: Erfolgserlebnisse schaffen, positive Verstärkung, angstreduzierte Mobilisation. Psycholog:in ergänzend, nicht ersetzend."

---

## Baustein 9: dokumentation-sturz

### bausteinId: sturz-prophylaxe-dokumentation

### Metadaten
- **bloomLevel:** 6
- **wissensart:** dokumentation
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Herr M. ist gerade gestürzt. Was schreibst du in die Pflegedokumentation?"
- **Step-Typ:** freetext (~60 Wörter erwartet)

### Stufe 2 — Hinweis
- **Text (C1):** "Ein Sturzprotokoll enthält: Hergang, Uhrzeit, Ort, Umstände (Schuhwerk, Medikamente, Zeit seit letzter Mahlzeit), Verletzungen, sofortige Maßnahmen, Reassessment."
- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `freetext` (mit KI-Feedback)
- **Inhalt:** Aufgabe "Schreibe Sturzprotokoll für folgende Situation..." mit KI-bewertetem Text

### Misconceptions → Distraktoren
- `D1`: **"Wenn keine Verletzung, keine Dokumentation"**
  - Feedback: "Nicht ganz — auch verletzungsfreie Stürze dokumentieren. Sie sind Warnsignale für Risiko-Trend."

- `D2`: **"Patient-Bericht reicht als Doku"**
  - Feedback: "Nicht ganz — Patient-Bericht kann unvollständig sein (besonders nach Kopfverletzung, bei Demenz). Pflegerische Einschätzung + Situationsanalyse sind nötig."

---

## Baustein 10: interprofessionelle-zusammenarbeit

### bausteinId: sturz-prophylaxe-team

### Metadaten
- **bloomLevel:** 3
- **wissensart:** organisation
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Wer muss bei der Sturzprophylaxe zusammenarbeiten?"
- **Step-Typ:** matching (Rollen → Aufgaben)

### Stufe 2 — Hinweis
- **Text (C1):** "Sturzprophylaxe ist Teamaufgabe: Pflege (Assessment, Umgebung, Mobilisation), Arzt (Medikamentenreview), Physiotherapie (Training), Augenarzt (Sehkorrektur), Apotheker (Medikamente)."
- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung
- **Erklärungs-Step:** stepType `matrix` (Akteur × Aufgabe)
- **Inhalt:** Wer macht was, wer meldet wem, wie fließt Information

---

## Glossar-Einträge (für glossar-plan.md)

| Begriff | C1-Definition | Quelle |
|---------|---------------|--------|
| Sturz | Unbeabsichtigtes Landen auf dem Boden oder tieferer Ebene | WHO 2007 |
| Near-Miss | Fast-Sturz (abgefangen) — dokumentieren! | DNQP 2022 |
| Intrinsische Risikofaktoren | Personenbezogen: Alter, Muskelschwäche, Medikamente | DNQP 2022 |
| Extrinsische Risikofaktoren | Umgebungsbezogen: Stolperfallen, Beleuchtung | DNQP 2022 |
| Polypharmazie | > 4 Dauermedikamente | DEGAM |
| Sarkopenie | Muskelabbau im Alter | WHO |
| Post-Fall-Syndrom | Sturzangst → Bewegungsvermeidung → Muskelabbau → Sturzrisiko | DNQP 2022 |
| Fixierung | Freiheitsentziehende Maßnahme, rechtlich bindend | § 1906a BGB |
| § 1906a BGB | Genehmigung freiheitsentziehender Maßnahmen | BGB |
| Tinetti-Test | Assessment für Balance + Gang | Tinetti 1986 |
| TUG (Timed-Up-and-Go) | Steh-Geh-Test, <10s = ok, >14s = Sturzrisiko | Podsiadlo 1991 |

---

## Karteikarten (10 Stück, 1 pro Baustein)

Siehe `karteikarten-plan.md` — jede Karteikarte ist eine Kern-Frage aus dem zugehörigen Baustein, FSRS-kompatibel.
