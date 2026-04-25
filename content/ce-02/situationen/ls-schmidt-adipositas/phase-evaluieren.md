# Phase 5 — Evaluieren

**situationId:** ls-schmidt-adipositas
**Phase:** evaluieren
**Zeit:** ~20–30 Min
**Bloom:** B4–B6
**Kern-Frage:** Was hat die Pflegeintervention der letzten 48 Stunden verändert — bei Frau Schmidt und in mir?
**Steps:** 5

---

## Kontext

Szenen-Sprung: 48 Stunden später. Frau Schmidt ist seit 5 Tagen stationär, Entlassung ist für übermorgen geplant. Du übernimmst sie wieder im Frühdienst. Die Ernährungsberaterin war gestern, die Podologin hat heute Morgen den ersten Termin. Der BZ-Verlauf liegt vor.

Du willst wissen: Was hat sich verändert? Was nicht? Was war gut an der Pflege — was muss besser werden?

**kontextB1:** 48 Stunden sind vergangen. Frau Schmidt ist jetzt seit 5 Tagen hier.
Übermorgen kommt sie nach Hause.
Heute Morgen übernimmst du sie wieder im Frühdienst.
Gestern war die Ernährungs-Beraterin da.
Heute Morgen kam die Podologin (= Fußpflege-Spezialistin) zum ersten Mal.
Du hast den Blutzucker-Verlauf (= BZ-Tagesprofil) der letzten 5 Tage vor dir.
Du fragst dich: Was hat sich verbessert? Was nicht? Was war gute Pflege?

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 5.1 | `eval-01-bz-verlauf` | **timeline` | B4 | Zeitstrahl: BZ-Tagesprofil der 5 Stationslage. Datenpunkte (nüchtern / postprandial): Tag 1: 398/—, Tag 2: 287/354, Tag 3 (du warst da): 187/254, Tag 4: 165/212, Tag 5: 148/189. Zielbereich als Linie eingezeichnet: < 130 nüchtern, < 180 postprandial. Frage: _„Was fällt dir auf? Ist Frau Schmidt auf dem richtigen Weg?"_ Bloom 4: Verläufe interpretieren, Schlüsse ziehen. Erwartete Antwort: Positiver Trend, noch nicht ganz im Zielbereich, aber deutliche Besserung. | krankheitslehre |
| 5.2 | `eval-02-pflegeziele-erreicht` | **categorize` | B4 | Drei Pflegeziele aus Phase 3 auswerten. Schüler ordnet Status zu: **Erreicht** / **Teilweise erreicht** / **Noch offen**. Ziel 1 „NRS-Score sinkt, Proteinzufuhr steigt": Teilweise (Beratung erfolgt, BZ besser, Albumin braucht länger). Ziel 2 „Hautfalten ohne Intertrigo, täglich gepflegt": Erreicht (kein Befund, Dokumentation zeigt tägliche Pflege). Ziel 3 „Inkontinenz-Versorgung mit Würde, Selbstpflege soweit möglich": Erreicht. Podologie: Termin heute, kein Pflegeziel aber Meilenstein. Bloom 4: Soll-Ist-Vergleich. | pflege |
| 5.3 | `eval-03-patientenzitat-schluss` | **text` (displayFormat: `quote`) | B4 | **Zitat Z6** als Quote-Card: _„Wissen Sie, was mich überrascht hat? Dass mein Essen so viel mit dem Zucker zu tun hat. Ich hab gedacht, das ist einfach mein Schicksal."_ Begleit-Text (3 Sätze, C1): Frau Schmidts Aussage ist mehr als ein Dank — sie zeigt, dass Informationsvermittlung und Beziehung zusammen Wirkung entfalten. Schicksal vs. Handlungsfähigkeit: Wenn Menschen verstehen warum, entstehen Motivation und Eigenverantwortung. Das ist Pflegeaufgabe. Quelle: [Transfer] | pflege |
| 5.4 | `eval-04-reflexion-beratungsgesprach` | **freetext` (kurz, 2-3 Sätze) | B5 | Offene Reflexionsfrage: _„Was war der Unterschied zwischen Pfad A (Verbotsliste) und Pfad B (Biographie zuerst) in deinem Gespräch mit Frau Schmidt — und was nimmst du daraus für zukünftige Ernährungsgespräche mit?"_ KI-Feedback prüft: Autonomieprinzip, motivierende Gesprächsführung, Biographie-Bedeutung. Kein Muster — Sandwich-Feedback. | pflege |
| 5.5 | `eval-05-konfidenz-nachher` | **confidence` | B4 | Zweite Konfidenz-Frage (Spiegel zu Phase 1, Step 1.2): _„Wie sicher fühlst du dich jetzt, das Thema Adipositas und Ernährungsberatung in einem Pflegegespräch anzusprechen?"_ Skala 1–5. Vergleich mit Ausgangswert: Wachstum sichtbar machen. Kein richtig/falsch — Selbstwahrnehmung. | pflege |

---

## Optionale Steps (Sequencer wählt)

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 5.6 | `eval-06-albumin-verlauf` | **text` (displayFormat: `scenario`) | B3 | B2-Schüler | Erklärung: Warum steigt Albumin nicht in 48h? Halbwertszeit Albumin 15-20 Tage — Verbesserung braucht Wochen. Kurzzeit-Marker sind Präalbumin (HWZ 2 Tage) und Transferrin. Dennoch: Proteinzufuhr steigern jetzt ist richtig. |
| 5.7 | `eval-07-podologe-zusammenarbeit` | **reflection` | B3 | Alle | Reflexion: Die Podologin hat heute die Füße versorgt. Du siehst das Ergebnis — Nägel fachgerecht gekürzt, Risse desinfiziert. Was hättest du selbst falsch gemacht, wenn du nicht die Grenze gewusst hättest? |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| eval-01-timeline-Fehlinterpretation | `ernaehrungsassessment-bz-tagesprofil` | Stufe 2–3 |
| eval-02-ziele-falsch-bewertet (Hautpflege als „noch offen") | `haut-intertrigo` | Stufe 2 |
| eval-04-freetext-kein-Autonomiebezug | `pflegeplanung-ressourcenorientierung` | Stufe 3 |

---

---

## B1-Versionen der Kern-Steps

### Step 5.1 — bodyB1
Zeitstrahl: Blutzucker (= BZ) von Frau Schmidt über 5 Tage.
Nüchtern (= vor dem Frühstück) / nach dem Essen:
- Tag 1: 398 / — (sehr hoch bei Einlieferung)
- Tag 2: 287 / 354 (noch sehr hoch)
- Tag 3 (du warst da): 187 / 254 (besser, aber noch zu hoch)
- Tag 4: 165 / 212 (deutlich besser)
- Tag 5: 148 / 189 (fast im Ziel-Bereich)
Ziel: Nüchtern unter 130, nach dem Essen unter 180.
Was fällt dir auf? Der Blutzucker sinkt. Frau Schmidt ist auf dem richtigen Weg.
Aber: Sie ist noch nicht ganz im Ziel-Bereich.

### Step 5.2 — bodyB1
Bewerte die 3 Pflege-Ziele aus Phase 3:
**Ziel 1 — Frau Schmidt isst täglich 3 eiweißreiche Mahlzeiten:**
→ Teilweise erreicht. Die Ernährungs-Beratung fand statt. Der Blutzucker ist besser.
Aber: Albumin (= Eiweiß im Blut) braucht Wochen um zu steigen. Noch nicht messbar.
**Ziel 2 — Haut-Falten täglich gepflegt, keine Entzündung:**
→ Erreicht! Die Dokumentation zeigt: täglich gepflegt. Keine Intertrigo.
**Ziel 3 — Inkontinenz mit Würde behandelt, Selbst-Pflege möglich:**
→ Erreicht. Frau Schmidt pflegt sich selbst. Die Versorgung ist diskret.
Bonus: Podologin-Termin war heute Morgen. Das ist kein Pflege-Ziel — aber ein wichtiger Schritt.

### Step 5.3 — bodyB1
Frau Schmidt sagt:
"Wissen Sie, was mich überrascht hat? Dass mein Essen so viel mit dem Zucker zu tun hat. Ich hab gedacht, das ist einfach mein Schicksal."
Was bedeutet das?
Frau Schmidt glaubte: "Ich kann nichts ändern. Das ist einfach so."
Jetzt denkt sie: "Ich kann etwas tun."
Das ist Pflegearbeit: Verstehen ermöglicht Veränderung.
Wenn jemand versteht WARUM, will er auch handeln.

### Step 5.4 — bodyB1 (Reflexion)
Was war der Unterschied zwischen den zwei Wegen im Ernährungs-Gespräch?
**Weg A:** Du hast eine Verbots-Liste gemacht. Frau Schmidt hat abgeschaltet.
**Weg B:** Du hast zuerst gefragt — zuhört — dann erklärt.
Was nimmst du mit?
Tipp: Frau Schmidt hat eine lange Geschichte mit Essen.
Verbote erinnern sie an alte Misserfolge.
Fragen öffnen — Verbote schließen.

### Step 5.5 — bodyB1 (Konfidenz)
Frage: Wie sicher fühlst du dich jetzt, das Thema Übergewicht und Ernährung anzusprechen?
Skala 1–5 (1 = sehr unsicher, 5 = sehr sicher).
Vergleiche mit deiner Antwort in Phase 1.
Hat sich dein Gefühl verändert?

---

## Phase-5-Abschluss

_Zwischenseite:_ „Frau Schmidt verbessert sich. Noch nicht am Ziel — aber auf dem Weg. Du hast heute gelernt: Pflege ist nicht nur Hände anlegen. Es ist verstehen, erklären, Grenzen kennen. Jetzt dokumentierst du, was du gesehen und getan hast."
