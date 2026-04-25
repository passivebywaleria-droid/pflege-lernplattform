# Phase 3 — Planen: Ambulante Pflegeplanung, Priorisierung, Ethisches Dilemma

**situationId:** ls-kovac-ambulant
**Zeit:** ~20–30 Min
**Bloom:** B3–B5
**Kern-Frage:** Was kann ich in 45 Minuten schaffen? Und was tue ich, wenn eine Patientin eine Maßnahme ablehnt, die sie schützen würde?
**Steps:** 5

---

## Kontext

Du hast alle relevanten Befunde erfasst. Jetzt musst du entscheiden: Was ist in diesem Morgenbesuch möglich? Was vertagst du auf den Abend? Was muss der Arzt wissen? Und: Die Kompressionsstrümpfe liegen noch in der Packung. Frau Kovač hat sie drei Wochen lang abgelehnt. Heute wirst du das Gespräch führen — nicht weil du es erzwingen kannst, sondern weil du dokumentieren musst was sie entschieden hat und warum.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 3.1 | `plan-01-zeitbudget-matrix` | **matrix** (2×3) | B4 | Matrix: Maßnahmen nach Zeit und Priorität einordnen. Zeilen: Heute Morgen (45 Min) / Heute Abend / Diese Woche (Arzt informieren). Spalten: Akut (sofort nötig) / Prophylaxe / Beratung/Aufklärung. Karten zum Einordnen: "Atemübungen" (Morgen / Prophylaxe) / "Obstipation — Macrogol, ggf. Zäpfchen" (Morgen / Akut) / "Trinkprotokoll Ziel vereinbaren" (Morgen / Beratung) / "Kompressionsstrümpfe-Gespräch" (Morgen / Beratung) / "Hausarzt informieren: Trinkmenge + Obstipation" (Diese Woche) / "Bewegungsübungen Knie" (Morgen / Prophylaxe). Bloom 4 — Synthese: nicht alle Maßnahmen passen gleichzeitig in 45 Min. | pflege |
| 3.2 | `plan-02-kompressions-dilemma-aufbau` | **text** (displayFormat: `scenario`) | B3 | Erklärungs-Step (VOR dem Branching): Das ethische Dilemma benennen. Text (~200 Wörter, C1): Frau Kovač lehnt die Kompressionsstrümpfe ab. Das ist ihr gutes Recht — Patientenautonomie ist ein rechtlich verankerter Grundsatz (§ 1901a BGB, § 630d BGB). Aber als Pflegekraft weißt du: Ihr Thromboserisiko ist erhöht. Immobilität + Herzinsuffizienz + COPD + Alter + kaum Bewegung. Was bedeutet Autonomie respektieren? Bedeutet es schweigen? Oder bedeutet es aufklären — und dann die Entscheidung der Patientin akzeptieren? Lernbotschaft: Aufklärung ist Pflicht. Erzwingen ist verboten. Dokumentieren ist notwendig. Quelle: (§ 630f BGB). | pflege |
| 3.3 | `plan-03-kompressions-branching` | **branching** (3 Pfade) | B5 | **ETHISCHES DILEMMA — BRANCHING.** Du gehst zu Frau Kovač und sagst: _"Frau Kovač, ich möchte kurz über die Kompressionsstrümpfe sprechen. Darf ich?"_ Sie antwortet: _**Zitat Z3**: "Ich brauch keine Strümpfe! Die drücken nur. Ich hab doch die Tabletten."_ Du wählst: Pfad A) _"Ich erkläre ihr dass ASS und Kompressionsstrümpfe verschiedene Wirkungen haben, und warum beide wichtig sind. Ich akzeptiere dann ihre Entscheidung."_ → Richtiger Pfad: Aufklärung korrekt, Autonomie respektiert. Weiter zu Doku-Aufgabe. Pfad B) _"Ich lasse das Thema fallen — sie wird's eh nicht ändern."_ → Feedback: Unterlassene Aufklärung ist ein Dokumentationsproblem und ethisch nicht vertretbar. Zurück zu Pfad A mit Erklärung. Pfad C) _"Ich überzeuge sie mit Nachdruck — das ist zu wichtig."_ → Feedback: Druck verletzt Autonomie (§ 1901a BGB), beschädigt Vertrauen. Erkläre warum Überzeugung erlaubt, Druck verboten ist. Zurück zu Pfad A. | pflege |
| 3.4 | `plan-04-schlafberatung-planen` | **sequencing** | B3 | Reihenfolge Schlafhygiene-Beratung planen. Aufgabe: Ordne 5 Schritte für das Schlafhygiene-Gespräch mit Frau Kovač (abends). Karten: [Aktuelle Schlafgewohnheiten zusammenfassen — ohne Wertung] → [Erklären was Schlafhygiene bedeutet und warum es ihr hilft] → [Konkrete Empfehlung formulieren (TV-Zeit, Zubettgehzeit)] → [Frau Kovačs Reaktion abwarten und auf Bedenken eingehen] → [Vereinbarung treffen und im Pflegeplan notieren]. Bloom 3 — Anwenden: die Reihenfolge ist nicht trivial (erst zuhören, dann erklären, dann einigen). | pflege |
| 3.5 | `plan-05-ziele-smart` | **fillin** (Lückentext) | B4 | SMART-Pflegeziel formulieren. Lückentext (2 Ziele vervollständigen): Ziel 1: _"Frau Kovač trinkt bis [___] täglich mindestens [___] ml Flüssigkeit, nachgewiesen durch das Trinkprotokoll."_ (Antwort: 3 Tagen / 1.200 ml — nicht sofort 1.500 ml, Steigerung realistisch) Ziel 2: _"Frau Kovač führt die Knie-Bewegungsübungen [___] täglich selbstständig durch, mindestens [___] Wiederholungen pro Seite."_ (Antwort: 1× / 5) Feedback: SMART bedeutet spezifisch, messbar, akzeptiert, realistisch, terminiert. Das zweite Ziel war messbar — aber ist es akzeptiert? Frau Kovač muss dem Ziel zustimmen. | pflege |

---

## Optionale Steps

| # | Step-Typ | Bloom | Für wen | Inhalt |
|---|----------|-------|---------|--------|
| Opt-3.A | **text** (displayFormat: `quote`) | B2 | B1-Schüler | Rechtliche Grundlage einfach erklärt: Was sagt § 630d BGB? "Einwilligung nach Aufklärung" — Schülergerechte Erklärung |
| Opt-3.B | **comparison** | B3 | Mittlere | Vergleich: Was wirken ASS und Kompressionsstrümpfe jeweils — und warum ergänzen sie sich? Zwei-Spalten-Tabelle |
| Opt-3.C | **reflection** | B5 | Fortgeschrittene | Freie Reflexionsfrage: "Wo liegt die Grenze zwischen Aufklärung und Bevormundung? Woran merkst du in der Praxis, wenn du diese Grenze überschreitest?" KI-Feedback. |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| plan-03: Pfad B oder C gewählt | `pflegedokumentation-verweigerung` | Stufe 2–3 |
| plan-05: SMART-Ziel fehlerhaft | `pflegedokumentation-pflegeziele` | Sequencer wählt |
| plan-02: angezeigt wenn Bloom < 3 | `thrombose-prophylaxe-kompression` | Stufe 2–3 |

---

**Phase-3-Abschluss:** _"Du hast einen Plan. Aufklärung durchgeführt, Entscheidung von Frau Kovač notiert, Ziele vereinbart. Jetzt: Handeln. Atemübungen, Bewegungsübungen, Trinkprotokoll besprechen — in 45 Minuten. Los."_
