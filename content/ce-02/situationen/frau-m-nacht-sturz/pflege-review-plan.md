# Pflege-Review-Plan: frau-m-nacht-sturz

**Geprüft:** 2026-04-26
**Mode:** plan (retrospektive Doppelprüfung der Plan-Files)
**Files:** 6 (patient-plan.md, sessionsplan.md, phasen-plan.md, didaktik-report.md, walkthrough-report.md, baustein-trigger.md)
**Step-Anzahl im Plan:** 30 (5+6+5+7+4+3)
**Quervergleich:** Code-Pflege-Review (`pflege-review.md`) bereits PASS, Plan-Files sind älter als die Code-Fixes

---

## Findings

### Phase 1 — info-04-zimmer-betreten (Dialog)

#### F-P-01 (HOCH): „indirektes Licht — kein Schockmoment"
- **Stelle:** `phasen-plan.md` Zeile 30 (Step 1.4)
- **Problem:** Plan schreibt explizit „du knipst das indirekte Licht an (nicht die Deckenleuchte — Frau M. ist gerade gestürzt, kein Schockmoment)". Direkter Verstoß gegen das **erste Anti-Pattern** in `pflege-konformitaet.md`. Verletzungs-Inspektion nach Sturz braucht volle Sicht (DNQP Sturzprophylaxe 2022, ABCDE-Schema).
- **Standard-Verweis:** DNQP Expertenstandard Sturzprophylaxe 2022 (Inspektion vor Mobilisation); ABCDE — „Exposure" benötigt ausreichende Beleuchtung.
- **Empfehlung:** Plan-Wording anpassen auf „Licht voll einschalten, aber nicht direkt blendend". Im Code laut `pflege-review.md` F-02 bereits korrigiert — Plan-File ist dem Code voraus inkonsistent.
- **Status Code:** gefixt (F-02)

### Phase 1 — info-04, Patientenzitat Z1

#### F-P-02 (NIEDRIG): „Hände im Schoß gefaltet" als nervöse Geste
- **Stelle:** `patient-plan.md` Zeile 75 (Persönlichkeit) → projiziert in Dialog-Body
- **Problem:** Auf dem Boden nach einem Sturz unrealistische Haltung. Code-Pflege-Review F-01 hat das bereits als HOCH eingestuft und im Code korrigiert. Im Plan-Patient-Profil als allgemeine Geste in Ordnung — wird im Code-Review nur problematisch wenn als Sturzhaltung übernommen.
- **Empfehlung:** Plan-Patient-Profil bleibt OK (allgemeine Geste). Hinweis im Plan, dass diese Geste NICHT für Sturz-Sequenz übernommen werden darf.
- **Status Code:** gefixt (F-01)

### Phase 4 — dur-04-dialog-mobilisation (Dialog, 4 Phasen)

#### F-P-03 (HOCH): „3 Min sitzen lassen (Orthostase-Prävention)"
- **Stelle:** `phasen-plan.md` Zeile 93 (Step 4.4)
- **Problem:** Direkter Verstoß gegen Anti-Pattern „3 Min warten = Orthostase-Prävention ohne RR-Messung". Schellong-Test verlangt RR liegen → ≥1 Min sitzen → RR sitzen → erst dann Stand. Reines „warten" ist Pseudo-Prävention.
- **Standard-Verweis:** Leitlinie Orthostatische Hypotonie (DGN); DNQP Sturz Empfehlung 4.2 (Kreislauf-Assessment vor Mobilisation bei Sturzpatienten + sedierender Medikation).
- **Empfehlung:** Plan-Schritt umschreiben — explizit RR liegen, RR sitzen, beide Werte dokumentieren, dann Aufstehen. Im Code laut F-06 bereits umgesetzt.
- **Status Code:** gefixt (F-06)

### Phase 4 — dur-03-mobilisation-hauptbranching (Branching)

#### F-P-04 (MITTEL): NRS 4 ohne explizites Reassessment-Pattern im Plan
- **Stelle:** `phasen-plan.md` Zeile 92 (Step 4.3) — „Schmerz NRS 4/10, möchte zur Toilette"
- **Problem:** NRS ≥ 4 ist moderater Schmerz, dokumentations- und interventionspflichtig (DNQP Schmerz). Plan beschreibt Wert, aber nicht die Pflicht-Konsequenz (SBAR-Anruf erwähnen, Bedarfsanalgesie). Anti-Pattern „NRS X im Rahmen" wird zwar nicht wörtlich genutzt, aber implizit, weil Branching-Entscheidung ohne Schmerz-Intervention weiterläuft.
- **Standard-Verweis:** DNQP Expertenstandard Schmerz, Kriterium 3 (Reassessment + Intervention bei NRS ≥ 4).
- **Empfehlung:** Im Plan klarstellen: vor Mobilisation NRS-Reassessment, im SBAR an Arzt erwähnen, Bedarfsanalgesie anfragen. Code F-03 hat das auf „NRS 5 ist nicht wenig" gefixt — Plan-File bleibt inkonsistent.
- **Status Code:** gefixt (F-03)

### Phase 4 — dur-04 + dur-01 Transfer

#### F-P-05 (HOCH): „Kinästhetischer Transfer" ohne Patient-tut-es-selbst-Pattern
- **Stelle:** `phasen-plan.md` Zeile 90 (Step 4.1: „Kinästhetischer Transfer über Seitlage und Kniestand"); `phasen-plan.md` Zeile 93 (Step 4.4 Dialog Beschreibung)
- **Problem:** Plan benennt „kinästhetisch" als Label, beschreibt aber nicht das Kernprinzip (Patient bewegt sich selbst, Pflege begleitet/sichert). Risiko: Generator interpretiert als „Pflege führt Bewegung" — exakt was Code F-05 als „Ich führe nur" gefunden hat.
- **Standard-Verweis:** Kinästhetik nach Hatch/Maietta — Eigenbewegungs-Prinzip. „Pflege begleitet, Patient steuert Tempo".
- **Empfehlung:** Plan explizit vorgeben: „Sie machen die Bewegung, ich begleite und sichere. Sie sagen das Tempo." als Pflicht-Phrasierung. Code F-05 bereits gefixt.
- **Status Code:** gefixt (F-05)

### Phase 3 — plan-03-fixierung-nein (Branching)

#### F-P-06 (NIEDRIG): Plan-Wording „Bettgitter erhöhen Sturzhöhe"
- **Stelle:** `phasen-plan.md` Zeile 73 (Step 3.3)
- **Problem:** Sachlich richtig, aber unvollständig — Bettgitter beidseitig hoch ohne richterliche Genehmigung gilt als Fixierung (BGB § 1906a). Plan erwähnt das in Pfad B („richterliche Genehmigung oder Einwilligung"), aber Pfad A-Falsch-Feedback fokussiert nur auf Verletzungsrisiko. Rechtliche Komponente sollte stärker.
- **Standard-Verweis:** BGB § 1906a, BGH-Rechtsprechung zur Fixierung.
- **Empfehlung:** Im Plan bereits OK abgedeckt — Generator hat nach didaktik-report.md F10 (PASS) auch rechtlichen Aspekt eingebaut. Kein K.O.

### Cross-Step Konsistenz

#### F-P-07 (MITTEL): Hüftprotektor — Pflegewagen-Step im Plan nicht erwähnt
- **Stelle:** `sessionsplan.md` zeigt 30 Steps ohne Pflegewagen-Step. Code hat aber `dur-02b` (Pflegewagen) eingefügt (siehe Code-F-10). Plan und Code divergieren strukturell.
- **Problem:** Plan-Doku ist nicht synchronisiert mit dem implementierten Code. Risiko bei späteren Iterationen, dass Generator Pflegewagen-Step entfernt, weil Plan ihn nicht kennt.
- **Empfehlung:** `sessionsplan.md` und `phasen-plan.md` rückwirkend updaten — Pflegewagen-Step dokumentieren. Aktuell kein Pflege-K.O. (Code ist konsistent gefixt), aber Pipeline-Sync-Issue.
- **Status Code:** Pflegewagen-Konsistenz gefixt (F-10).

### Patient-Plan

#### F-P-08 (NIEDRIG): „Wie in Watte" als Patientenzitat
- **Stelle:** `patient-plan.md` Z2, Zeile 95
- **Problem:** Stilistisch starke Metapher — bei B1-Schülern verständlich? Kommt ohne Erklärung in Phase 2.3 zum Einsatz. Glossar-Trigger fehlt im Plan.
- **Empfehlung:** Glossar-Eintrag „wie in Watte = benommen, schläfrig" aufnehmen. Code-Walkthrough hat B-12 für PRISCUS/Z-Substanzen bereits gefixt, dieser Idiom-Punkt aber nicht.

---

## Cross-Step-Probleme

- Plan-File und Code divergieren bei: Lichtwording, NRS-Konsequenz, Schellong, Kinästhetik-Phrasierung, Pflegewagen-Step. Alle Code-Korrekturen sind in `pflege-review.md` PASS — Plan-Files sind dokumentarisch veraltet, aber inhaltlich nicht mehr live.

---

## Zusammenfassung

- **HOCH:** 3 (F-P-01 Licht, F-P-03 3-Min, F-P-05 Kinästhetik) — alle im Code bereits gefixt
- **MITTEL:** 2 (F-P-04 NRS, F-P-07 Pflegewagen-Sync) — Code OK, Plan-Doku veraltet
- **NIEDRIG:** 3 (F-P-02 Hände, F-P-06 BGB-Wording, F-P-08 Watte-Idiom)

**Allgemeine Beobachtungen:**
1. Plan-Files enthalten genau die Anti-Pattern, die Code-Pflege-Review bereits gefangen hat — bestätigt Wert des Code-Validators als Sicherheitsnetz.
2. Pseudo-Empathie-Bias („indirektes Licht", „kein Schockmoment", „3 Min warten") sind im Plan **vorhanden** und wären ohne Code-Validierung live gegangen.
3. Plan-Doku-Synchronisation mit Code-Stand ist überfällig (Pipeline-Sync-Regel betroffen, aber kein Pflege-K.O.).
4. Patientenprofil, SBAR-Struktur, Branching-Logik, Bloom-Progression, Bausteintrigger und Würde-Aspekt sind im Plan exzellent.

**K.O.-Verdikt:** **PASS** — alle 3 HOCH-Findings sind im Code bereits behoben (Verweis auf `pflege-review.md`). Plan-File ist dokumentarisch veraltet, aber der live-relevante Content ist pflegekonform. Empfehlung: Plan-Files synchronisieren, sobald nächste Iteration ansteht.
