# Phase 5 — Evaluieren

**situationId:** ls-petrov-schlaganfall
**Zeit:** ~15-25 Min
**Bloom:** B4–B5
**Kern-Frage:** Hat das, was ich getan habe, gewirkt? Sind meine Pflegeziele erreicht?
**Steps:** 5

---

## KontextB1

Es ist 10:30 Uhr. Die Früh-Schicht ist fast vorbei.
Frau Wegner kommt ins Zimmer. Sie nickt dir zu: "Gut gemacht. Zeig mir deine Evaluation."
Evaluation (= Auswertung): Hast du deine Pflege-Ziele erreicht?
Du prüfst das systematisch — nicht nach Gefühl.
Herr Petrov sitzt am Bett-Rand. Er hält die Bett-Kante mit der linken Hand.
Er schaut zum Fenster. Er hat den Daumen nach oben gezeigt — nach 8 Minuten.

---

## Kontext

10:30 Uhr. Die Frühschicht neigt sich dem Ende. Frau Wegner kommt ins Zimmer und nickt dir zu: *"Gut gemacht. Zeig mir deine Evaluation."* Du gehst systematisch durch — zielgeleitet, nicht nach Gefühl.

Herrn Petrovs Befund: Er sitzt am Bettrand, die Beine hängen herunter. Er hält mit der linken Hand die Bettkante. Er schaut zum Fenster. **Zitat Z6** kam am Ende der Mobilisation: *(nach 8 Minuten an der Bettkante, Daumen der linken Hand hoch)*

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 5.1 | `eval-01-zielcheck` | **categorize** | B4 | Kategorisierung: Hat das Pflegeziel die Maßnahme ausgelöst? 4 Ziel-Maßnahmen-Paare aus Phase 3 überprüfen. Drei Kategorien: **Erreicht** / **Teilweise erreicht** / **Nicht erreicht — Ursache?** Items: [Ziel "Keine Aspiration beim Frühstück" → Komplikation K1 aufgetreten: Aspiration beim Trinken, gestoppt, weitergemacht mit Anpassung, kein Röntgenbefund] / [Ziel "Herr Petrov sitzt 10 Min an Bettkante" → Er saß 8 Minuten — fast erreicht] / [Ziel "Auskultationsbefund stabil" → Atemgeräusch beidseits vorhanden, kein neu aufgetretenes Rasseln] / [Ziel "Katheter: Bilanz dokumentiert" → gemacht, 1800 ml/24h]. Lerneffekt: Evaluation ist nicht "gut/schlecht" — sondern Ist-Soll-Vergleich mit Konsequenz. | pflege |
| 5.2 | `eval-02-schluckstatus-neu` | **mc** (Single-Choice) | B4 | *"Beim Frühstück kam es zu einem Aspirationsereignis. Was ist jetzt die richtige Konsequenz für die Mittagsmahlzeit?"* A) Essen ganz stoppen bis zur ärztlichen Anordnung B) Konsistenz weiter eindicken auf IDDSI Level 3 und Schlucktherapeutin informieren C) Normales Essen anbieten — er hat ja danach wieder ruhig geatmet D) Nur noch Sondenkost. **Richtig: B.** Feedback: Schlucktherapeutin als Primäransprechpartnerin bei Dysphagie-Verschlechterung. Anpassung der Konsistenz ist Pflegemassnahme, aber Entscheidung interdisziplinär. IDDSI 2019 + DGG/DGN 2020 geben Stufenkonzept vor. **Trigger für Baustein `essen-anreichen-konsistenz-anpassung` Stufe 2 wenn falsch.** | krankheitslehre |
| 5.3 | `eval-03-mobilisations-fortschritt` | **slider** (Einschätzung 1-10) | B4 | Slider-Step: *"Schätze auf einer Skala von 1-10 ein: Wie viel Prozent der ursprünglichen Kraft in der rechten unteren Extremität ist bei Herrn Petrov nach 5 Tagen Bobath-Therapie noch vorhanden?"* Nach Einschätzung: Erklärung der realistischen Prognose — Schlaganfall-Rehabilitation ist ein langer Prozess. In den ersten 3 Monaten: größte Neuroplastizität. Überleben von Nervenzellen hängt u.a. von früher Mobilisation ab. Kein vorhergesagtes Ergebnis — nur: Was wir heute tun, bestimmt wie viel Funktion morgen möglich ist. Quelle: (AWMF S3 Schlaganfall; DGG 2022 Frühmobilisation) | anatomie |
| 5.4 | `eval-04-katheter-entscheidung` | **branching** (Klein-Branching) | B5 | *"Der BVK liegt seit 5 Tagen. Laut Arztanordnung: Re-Evaluation in 14 Tagen. Du weißt: Jeder Tag mit BVK = erhöhtes CAUTI-Risiko. Was tust du?"* Pfad A: "Ich warte die 14 Tage ab — Arztanordnung ist Arztanordnung." → Feedback: Passiv-Abwarten ohne Beobachtung ist nicht Pflegequalität. Du beobachtest, dokumentierst und sprichst an wenn du Komplikationszeichen siehst. Pfad B: "Ich informiere den Arzt heute über den Status (Tag 5, Urinfarbe normal, keine Beschwerden) und frage ob eine Evaluation vorzuziehen ist — immer noch 9 Tage bis zur geplanten." → Richtiger Pfad: Proaktive Kommunikation + KRINKO-Empfehlung: BVK so früh wie möglich entfernen. Quelle: (KRINKO 2015; CDC/HICPAC 2019 CAUTI-Prävention) | pflege |
| 5.5 | `eval-05-reflexion-natalya` | **reflection** | B5 | *"Stell dir vor, Natalya fragt dich heute beim Weggehen: 'Wird er wieder normal?'"* Wie antwortest du — und was sagst du nicht? Denk daran: Du bist Pflegeschüler. Du kennst die Prognose nicht. Du darfst Hoffnung geben — aber keine Versprechen. Offene Reflexionsfrage. KI-Feedback prüft: Ehrlichkeit ohne Entmutigung? Überweisung an Arzt/Reha-Team? Anerkennung der Ehefrau-Perspektive? Keine medizinischen Prognose-Aussagen vom Pflegeschüler? | pflege |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 5.6 | `eval-opt-01-neuroplastizitaet` | **text** (displayFormat: `analogy`) | B3 | B2-Vertiefung | Analogie: Neuroplastizität nach Schlaganfall. Das Gehirn ist wie eine Stadt — wenn eine Hauptstraße gesperrt ist, entstehen neue Nebenstraßen. Das dauert Wochen bis Monate. Frühe Mobilisation ist Straßenbau. (AWMF S3 Schlaganfall) |
| 5.7 | `eval-opt-02-cauti-risiko-tabelle` | **text** (displayFormat: `checklist`) | B2 | B1 | CAUTI-Risiko: 5 Zeichen die auf Harnwegsinfekt hindeuten — erklärt in B1-Sprache. |

---

---

## B1-Felder für Kern-Steps — Phase 5

### Step 5.1 — bodyB1 (eval-01-zielcheck)
Du prüfst 4 Pflege-Ziele:
Ziel 1: Keine Aspiration beim Frühstück.
→ Es gab eine Komplikation. Herr Petrov hat sich beim Trinken verschluckt.
Du hast sofort gestoppt. Danach war alles stabil. Kein Röntgen-Befund.
Ergebnis: Teilweise erreicht.

Ziel 2: Herr Petrov sitzt 10 Minuten an der Bett-Kante.
→ Er hat 8 Minuten gesessen. Fast erreicht.
Ergebnis: Teilweise erreicht.

Ziel 3: Die Atmung ist stabil.
→ Du hast gehört: Die Lunge klingt normal. Kein neues Rasseln.
Ergebnis: Erreicht.

Ziel 4: Katheter-Bilanz ist dokumentiert.
→ 1.800 ml in 24 Stunden. Das ist normal.
Ergebnis: Erreicht.

Evaluation bedeutet: Ist-Zustand mit Soll-Zustand vergleichen. Nicht "gut" oder "schlecht".

### Step 5.2 — bodyB1 (eval-02-schluckstatus-neu)
Beim Frühstück hat Herr Petrov sich verschluckt. Was machst du jetzt für das Mittag-Essen?
Richtige Antwort: B — Mache die Flüssigkeit noch dicker (= Level 3). Informiere die Schluck-Therapeutin.
Warum? Die Schluck-Therapeutin ist die Expertin für Dysphagie.
Die Pflege passt die Konsistenz (= Dicke) an. Der Arzt entscheidet gemeinsam mit dem Team.

### Step 5.3 — bodyB1 (eval-03-mobilisations-fortschritt)
Wie viel Kraft hat Herrn Petrovs rechtes Bein noch?
Das ist schwer zu sagen. Nach 5 Tagen ist noch nicht viel Fortschritt sichtbar.
Aber: In den ersten 3 Monaten nach einem Schlaganfall kann das Gehirn neue Wege bilden.
Das nennt man Neuro-Plastizität (= das Gehirn lernt neue Wege).
Frühe Mobilisation hilft dem Gehirn dabei. Was du heute tust, ist wichtig für morgen.

### Step 5.4 — bodyB1 (eval-04-katheter-entscheidung)
Der Katheter liegt seit 5 Tagen. Der Arzt hat gesagt: Kontrolle nach 14 Tagen.
Was tust du?
Richtig (Pfad B): Du informierst den Arzt heute.
Du sagst: "Der Katheter liegt seit 5 Tagen. Der Urin ist unauffällig. Sollen wir früher prüfen?"
Das ist proaktiv. Jeder Tag mit Katheter erhöht das Risiko für eine Harnwegs-Infektion (= CAUTI).
Falsch (Pfad A): Einfach warten ist nicht Pflege-Qualität. Du beobachtest aktiv.

### Step 5.5 — bodyB1 (eval-05-reflexion-natalya)
Natalya fragt dich beim Weggehen: "Wird er wieder normal?"
Du bist Pflege-Schüler. Du weißt die Prognose (= Vorhersage) nicht.
Was sagst du?
Richtig: Ehrlich antworten. Keine falschen Versprechen.
Zum Beispiel: "Das kann ich Ihnen nicht sagen. Das weiß das Arzt-Team besser.
Aber ich kann sagen: Herr Petrov arbeitet sehr gut mit. Er hat heute 8 Minuten an der Kante gesessen."
Verweise auf den Arzt und das Reha-Team. Das ist deine Aufgabe als Schüler.

---

## Phase-5-Abschluss

*Zwischenseite:* "Evaluation abgeschlossen. Nicht alles war perfekt — die Aspiration beim Frühstück hat gezeigt: Überwachung ist nie zu viel. Herr Petrov macht Fortschritte. Jetzt: Dokumentieren, damit die nächste Schicht weiß was du getan hast."

---

## Baustein-Trigger Phase 5

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| step-5.2 falsch | `essen-anreichen-konsistenz-anpassung` | Stufe 2 |
| step-5.4-Pfad-A | `blasenkatheter-cauti-praevention` | Stufe 2–3 |
