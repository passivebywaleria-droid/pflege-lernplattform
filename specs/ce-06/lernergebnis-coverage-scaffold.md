# CE-06 Lernergebnis-Coverage-Gerüst

> **Generiert** aus `specs/curriculum/ce-06-lernergebnisse.json` (35 Lernergebnisse, 5 LEs). Quelle: Fachkommission-Rahmenlehrplan § 53 PflBG (curriculum-generalistik).
>
> **Gate-Regel (Präsenz):** Erst wenn jedes Lernergebnis VOLL (oder begründet by-design-TEILWEISE) ist, gilt der CE als rahmenplan-vollständig. FEHLT = blockiert.
>
> **Gate-Regel (Tiefe, W10):** „0 FEHLT" reicht NICHT — jedes Lernergebnis muss mind. Stufe „geübt" erreichen (Bloom ≥ 3 in einem zugeordneten Step). Berührt/fehlt = blockiert (außer motorisch/einstellung: by-design). Mess-Skript: `npx tsx scripts/lernergebnis-tiefe.ts 6`.
>
> **Pflicht-Artefakt des Rechecks:** Schreibe das Step→LE-Mapping maschinenlesbar nach `specs/ce-06/lernergebnis-mapping.json` im Format `{ "<leId>": ["<stepId>", …] }`. Erst damit kann das Tiefe-Gate (W10) messen.
>
> ⚠️ **Vor Gebrauch Katalog-Vollständigkeit prüfen:** Stichprobe gegen `recherche/curriculum-generalistik-volltext/` — stimmt Anzahl/Bloom je LE? (Heuristische Extraktion kann Bullets über Seitenumbrüche verlieren.)

## Content-Orte (Stand Generierung)

**Themen (8):** akute-dyspnoe, anaphylaxie, bewusstlosigkeit, notfallassessment, reanimation, schmerznotfall, schock-management, sepsis

**Situationen (1):** ls-wagner-reanimation

## Bilanz (Recheck-Stand 2026-07-03 — Welle 1: Reanimation/LE1-Kern)

> **Stand:** Welle 1 gebaut (Situation `ls-wagner-reanimation`, LE1-Kern). LE1-K1/K3/K4 + LE2–LE5
> sind offen und in den nächsten Wellen zu bauen (siehe `content/ce-06/BUILD-JOURNAL.md`).
> Das Tiefe-Gate (`scripts/lernergebnis-tiefe.ts 6`) ist daher bewusst noch FAIL (31 LE offen).

| LE | n | VOLL | TEILW | FEHLT |
|----|---|------|-------|-------|
| 1 | 7 | 3 | 1 | 3 |
| 2 | 8 | 0 | 0 | 8 |
| 3 | 7 | 0 | 0 | 7 |
| 4 | 6 | 0 | 0 | 6 |
| 5 | 7 | 0 | 0 | 7 |
| **Σ** | **35** | **3** | **1** | **31** |

## LE-Index 1 (7 Lernergebnisse)

| ID | Typ | Bloom-Soll | Lernergebnis | Status | Deckende Quelle (stepId) | Tiefe (berührt/geübt/geprüft) |
|----|-----|-----------|--------------|--------|--------------------------|-------------------------------|
| CE06-LE1-W1 | W | 2 (erlaeutern) | erläutern rechtliche und ethische Aspekte zur Ersten Hilfe … BLS/ALS/Kammerflimmern/KPR-Indikation/AED | **VOLL** | erk-01, erk-02, ala-01, erm-01, erm-02, erm-03, ueb-01 | geprüft |
| CE06-LE1-K1 | K | 2 (fuehren) | führen Erste-Hilfemaßnahmen bei Wunden, Blutungen, Sturz, Hitzeerschöpfung, Verbrennungen, Erfrierungen, Verätzungen durch | FEHLT | — (Welle 2: Traumatologie/Erste Hilfe) | — |
| CE06-LE1-K2 | K | 2 (fuehren) | führen lebenserhaltende Sofortmaßnahmen durch | **VOLL** | ala-01, erm-01, erm-02, erm-03 | geprüft |
| CE06-LE1-K3 | K | 2 (diagnostizieren) | diagnostizieren neurologische Akutsituationen (z.B. Synkopen, Apoplex, epileptischer Anfall) und leiten Maßnahmen der 1. Hilfe ein | FEHLT | — (Welle 2: Synkope/Apoplex-Situation) | — |
| CE06-LE1-K4 | K | 2 (diagnostizieren) | diagnostizieren akute psychotische Erregungszustände und leiten Maßnahmen der 1. Hilfe ein | FEHLT | — (Welle 3: Psychiatrie-Akut, ggf. CE-11-Naht) | — |
| CE06-LE1-K5 | K | 4 (analysieren) | analysieren einrichtungsspezifische Notfallpläne und identifizieren das Aufgabenfeld von Pflegefachkräften | TEILW | ala-01 (Alarmierung/Rollen), ref-02 (CIRS/Defi-Standort) | geübt |
| CE06-LE1-E1 | E | 5 (reflektieren) | reflektieren eigene Gefühle und erfahrene Hilfen in Not-/Unfallsituationen … empathisches Handeln | **VOLL** | ref-01 | geprüft |

## LE-Index 2 (8 Lernergebnisse)

| ID | Typ | Bloom-Soll | Lernergebnis | Status | Deckende Quelle (stepId) | Tiefe (berührt/geübt/geprüft) |
|----|-----|-----------|--------------|--------|--------------------------|-------------------------------|
| CE06-LE2-W1 | W | 2 (beschreiben) | beschreiben Anteile und Funktion des HerzKreislaufsystems |  |  |  |
| CE06-LE2-W2 | W | 2 (erlaeutern) | erläutern Schockursachen und Schocksysteme |  |  |  |
| CE06-LE2-W3 | W | 2 (erklaeren) | erklären Notfallmedikamente und –maßnahmen im Zusammenhang mit Schock erklären die Klink und Therapie eines Herzinfarktes erläutern Reizleitungsstörungen und deren Therapiemöglichkeiten erklären die Bedeutung ausgewählter Elektrolyte für das Herz-Kreislaufsystem erklären Aufbau und Handhabung unterschiedlicher Infusionssysteme erläutern Verwendungszweck und Handhabung eines Perfusors erklären unterschiedliche Möglichkeiten der Sauerstoffgabe erläutern Anzeichen für ein Elektrolytungleichgewicht und ein Flüssigkeitsdefizit |  |  |  |
| CE06-LE2-K1 | K | 2 (beobachten) | beobachten die Vitalzeichen mit Hilfe intensivmedizinischer Geräte |  |  |  |
| CE06-LE2-K2 | K | 2 (bereiten) | bereiten Materialien zur Legung peripherer und zentraler venöser Zugänge |  |  |  |
| CE06-LE2-K3 | K | 2 (fuehren) | führen atemunterstützende Lagerungen durch |  |  |  |
| CE06-LE2-K4 | K | 6 (entwickeln) | entwickeln Vorschläge zur Unterstützung eines familiären Copings |  |  |  |
| CE06-LE2-E1 | E | 5 (arbeiten) | arbeiten die besonderen Aufgaben Pflegender in einem apparate- und gerätedominierenden intensivmedizinischen Kontext heraus |  |  |  |

## LE-Index 3 (7 Lernergebnisse)

| ID | Typ | Bloom-Soll | Lernergebnis | Status | Deckende Quelle (stepId) | Tiefe (berührt/geübt/geprüft) |
|----|-----|-----------|--------------|--------|--------------------------|-------------------------------|
| CE06-LE3-W1 | W | 2 (beschreiben) | beschreiben Ursachen, Symptome und Differentialdiagnostik eines akuten Abdomens |  |  |  |
| CE06-LE3-W2 | W | 2 (erlaeutern) | erläutern die Unterschiede zwischen einem Ileo- und Colostoma und daraus resultierende spezifische Versorgungsanforderungen |  |  |  |
| CE06-LE3-W3 | W | 2 (erklaeren) | erklären die Wirkungsweisen unterschiedlicher Drainagesysteme |  |  |  |
| CE06-LE3-W4 | W | 2 (beschreiben) | beschreiben ihr Vorgehen zur Mobilisation von Menschen mit Sonden und Drainagen beschreiben Ursachen und Symptomatik von viszeralem Schmerz, Kolikschmerz und abdominalen Schmerz erklären die Infektionsprophylaxe bei Lage eines Dauerkatheters erläutern Parameter zur postoperativen Überwachung bezüglich eines beeinträchtigten Gasaustausches, Obstipationsgefahr beeinträchtigte Urinausscheidung |  |  |  |
| CE06-LE3-K1 | K | 2 (fuehren) | führen die postoperative Versorgung nach Anlage eines Stomas durch |  |  |  |
| CE06-LE3-K2 | K | 2 (fuehren) | führen einen postoperativen Verbandwechsel im Zusammenhang mit Drainagesystemen durch |  |  |  |
| CE06-LE3-E1 | E | 5 (stellen) | stellen heraus, welche Bedeutung Informationen und Wissen zur gesundheitlichen Situation für die akuterkrankten Menschen hat |  |  |  |

## LE-Index 4 (6 Lernergebnisse)

| ID | Typ | Bloom-Soll | Lernergebnis | Status | Deckende Quelle (stepId) | Tiefe (berührt/geübt/geprüft) |
|----|-----|-----------|--------------|--------|--------------------------|-------------------------------|
| CE06-LE4-W1 | W | 2 (beschreiben) | beschreiben die jeweilige Spezifik von Notfallsituationen in stationären und ambulanten Einrichtungen, gesellschaftlichen Katastrophensituationen und das Handeln in Notaufnahmen erläutern die Bedeutung des eigenen „Funktionierens“ von Rettungskräften und Pflegefachkräften in Krisen- und Katastrophensituationen erläutern den Katastrophenschutzplan ihrer ausbildenden Einrichtung erläutern Sinn und Handhabung von Triage-Instrumenten zum Patientenmanagement in Notaufnahmen |  |  |  |
| CE06-LE4-K1 | K | 2 (ordnen) | ordnen Anlässe für Krisen- und Katastrophensituationen, in denen Pflegefachkräfte als professionelle Helfer agieren die zu ergreifenden Maßnahmen zu (Pandemien durch Noroviren, Influenza etc.; Brände; Hitzewellen; Massenunfälle; Naturkatastrophe; Terroranschläge) |  |  |  |
| CE06-LE4-K2 | K | 3 (planen) | planen ihr Handeln im Falle eines Brandes in ihrer Einrichtung anhand der einrichtungsspezifischen Brandschutzordnung und des Notfallplans |  |  |  |
| CE06-LE4-K3 | K | 2 (darstellen) | stellen das Vorgehen zur Krisenintervention dar |  |  |  |
| CE06-LE4-E1 | E | 5 (reflektieren) | reflektieren eigene Möglichkeiten zur Krisenintervention in Akutsituationen |  |  |  |
| CE06-LE4-E2 | E | 5 (diskutieren) | diskutieren Supervision als Mittel zum Erhalt der eigenen Fassung |  |  |  |

## LE-Index 5 (7 Lernergebnisse)

| ID | Typ | Bloom-Soll | Lernergebnis | Status | Deckende Quelle (stepId) | Tiefe (berührt/geübt/geprüft) |
|----|-----|-----------|--------------|--------|--------------------------|-------------------------------|
| CE06-LE5-W1 | W | 2 (erlaeutern) | erläutern Ursachen und Konsequenzen fehlender Spenderorgane |  |  |  |
| CE06-LE5-W2 | W | 1 (benennen) | benennen die häufigsten Organtransplantationen in Deutschland |  |  |  |
| CE06-LE5-W3 | W | 2 (erlaeutern) | erläutern den Ablauf einer postmortalen Organspende |  |  |  |
| CE06-LE5-W4 | W | 2 (erlaeutern) | erläutern Aufgaben und Herausforderungen von Pflegefachkräften bei der Pflege eines hirntoten Menschen |  |  |  |
| CE06-LE5-K1 | K | 1 (skizzieren) | skizzieren die wichtigsten rechtlichen Grundlagen und ihre Bezüge zu ethischen Fragestellungen |  |  |  |
| CE06-LE5-E1 | E | 5 (diskutieren) | diskutieren die kulturelle Bedeutung von Herz und Hirn |  |  |  |
| CE06-LE5-E2 | E | 5 (reflektieren) | reflektieren die Unterschiede der psychischen Begleitung bei Lebendspenden und bei Spenden von hirntoten Menschen Pro und Contra-Diskussion zu ethischen Fragestellungen im Zusammenhang mit der Organspende und bevorzugtem Organerhalt |  |  |  |

## Prüf-Prompt (je LE-Index 1 Agent, parallel) — wiederverwendbar

```
Du bist Coverage-Prüfer für die Pflege-Lernplattform. NUR LESEN.
AUFGABE: Bewerte die Rahmenlehrplan-Lernergebnisse von CE-06 LE-Index <N>
(Katalog `specs/curriculum/ce-06-lernergebnisse.json`, filtere "leIndex" == <N>) gegen den AKTUELLEN Content.
Pro Lernergebnis: VOLL / TEILWEISE / FEHLT + Bloom-Soll erreicht? + deckende bausteinId/stepId.

QUELLEN:
- Katalog: specs/curriculum/ce-06-lernergebnisse.json
- Content: content/ce-06/themen/*/bausteine.ts, content/ce-06/situationen/*/phase-*.ts
- Grounding-Korpus zum Gegenprüfen: recherche/*-volltext/

REGELN:
- Trage je Lernergebnis die deckenden stepIds ein UND leite die Tiefe ab (Bloom 1-2 → berührt, 3-4 → geübt, 5-6 → geprüft).
- Schreibe das Mapping zusätzlich maschinenlesbar nach specs/ce-06/lernergebnis-mapping.json: { "<leId>": ["<stepId>", …] }. Dann misst scripts/lernergebnis-tiefe.ts 6 die Tiefe deterministisch.
- "VOLL" nur wenn Inhalt UND Bloom-Verb des Lernergebnisses erreicht sind.
- Einstellungs-/Reflexionsziele (diskutieren/reflektieren) brauchen ein reflection-/Diskussions-Format, nicht nur Lehrtext.
- "👶 Alter"-Ziele: prüfe ob die geforderten Altersstufen (Kind/Säugling/alter Mensch) eingelöst sind.
- "✋ motor."-Ziele: die Plattform deckt nur kognitiv vor — Handausführung als by-design-TEILWEISE markieren, kein FEHLT.
- Sei streng und unabhängig.

OUTPUT: Tabelle (ID | Status | Quelle | Bloom?), Bilanz (n VOLL / n TEILW / n FEHLT), explizite Liste verbleibender FEHLT mit Begründung.
```
