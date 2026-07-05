# Adversariales Klinik-Panel (W6) + semantischer Lens — `ls-erlemann-organspende`

- **CE:** ce-06 · **LE5:** Organspende / Hirntod
- **Thema:** `organspende-hirntod`
- **Grounding:** `specs/ce-06/kernfakten/organspende-hirntod.md` (F-01..F-09)
- **Datum:** 2026-07-05
- **Verdikt:** ✅ **PASS** — 0 HOCH, 0 MITTEL, 2 NIEDRIG (Beschaffung, nicht blockierend)

## Pre-Filter (deterministisch)

| Skript | HOCH | MITTEL | NIEDRIG | Status |
|--------|------|--------|---------|--------|
| `klinik-panel.ts ce-06 --situation ls-erlemann-organspende` | 0 | 0 | 0 | PASS |
| `pflege-anti-pattern-check.ts ce-06` | 0 | 0 | 0 | PASS |

## Lens 1 — Arzneimittel-/Zahlen-Sicherheit — PASS

- **821 Lebertransplantationen 2017** → F-07 verbatim („2017 erfolgten in Deutschland 821 Lebertransplantationen").
- **760 postmortal** → F-07 verbatim; **61 Leberteil-Lebendspende** → F-07. Arithmetik 760 + 61 = 821 stimmig.
- **Zwei-Ärzte-Regel** (unabhängig, ≥1 langjährige Intensiverfahrung, unabhängig vom Transplantationsteam) → F-04 verbatim.
- **Gesamthirntod** = irreversibler Ausfall aller Hirnfunktionen → F-02 verbatim.
- Keine erfundenen Zahlen/Register-/Statistik-Details.

## Lens 2 — Recht & Ethik / CURRENCY (kritisch) — PASS

- **Entscheidungslösung korrekt und aktuell** (seit 2012, F-05). Die **Widerspruchslösung** erscheint ausschließlich als Distraktor (erk `erm-01` Opt. 2) und wird jeweils explizit widerlegt („In Deutschland gilt die Entscheidungslösung, nicht die Widerspruchslösung — niemand ist automatisch Spender.").
- **Rechtsstand 2026 gedeckt:** Bundestag lehnte die Widerspruchslösung im Jan 2020 ab; die Entscheidungslösung bleibt gültig. Der Content behauptet nirgends fälschlich die Widerspruchslösung.
- **Keine erfundenen 2020er/2024er-Register-Details** (Organspende-Register/OGR bewusst ausgelassen — kein Fabrizieren).
- **TPG definiert NICHT den Tod**, sondern das Mindestkriterium (Gesamthirntod) → F-02, in `erk-01` dreifach korrekt gelehrt.
- **Ethik wertneutral:** `ref-01`/`ref-02` fordern in systemPrompt/bewertungskriterien ausdrücklich „keine Weltanschauung bewerten"; Pro/Contra und kulturell-religiöses Spektrum als Diskussion (F-08), keine Wertung.
- **Rollenklarheit Pflege durchgängig:** drängt nicht, stellt keinen Hirntod fest, gibt keine Entnahme frei (`ala-01` Opt. 3, `erm-01` Opt. 3, `erm-02`, `ueb-01`) → F-03/F-09.

## Lens 3 — DNQP-/Standard-Konformität (Grounding) — PASS

Alle 8 claim-tragenden Steps tragen `kernfaktId`, keine Dangling-Refs, kein Claim jenseits der Kernfakten:

| Step | kernfaktId |
|------|-----------|
| `erk-01` | F-02, F-01 |
| `ala-01` | F-04 |
| `erm-01` | F-03, F-05 |
| `erm-02` | F-09, F-02 |
| `erm-03` | F-06, F-07 |
| `ueb-01` | F-03, F-09 |
| `ref-01` | F-08, F-02 |
| `ref-02` | F-06, F-09 |

## Lens 4 — Konsistenz — PASS

- Tobias Erlemann, 24, Gesamthirntod nach Motorrad-SHT durchgängig (patient.ts + alle 5 Phasen).
- Kein Organspendeausweis auffindbar konsistent (patient.ts + `erm-01`-Kontext).
- Eltern **Sabine** (Mutter) + **Reinhard** (Vater) in patient.ts benannt, in den Phasen als „Mutter"/„Vater" konsistent.
- Setting Intensivstation/Einzelzimmer/beatmet durchgängig; stepIds eindeutig; keine fremde patientId.

## Lens 5 — Semantisch (pflege-validator) — PASS

- **Distraktor vs. Empfehlung:** Widerspruchslösung, Alleingang-Arzt, Pflege-Freigabe, Zeitdruck/Zustimmung-Drängen erscheinen NUR als `isCorrect:false` und werden explizit korrigiert — „lehrt über Falsches", empfiehlt es nicht.
- **Keine Pseudo-Empathie;** ergebnisoffene Angehörigenbegleitung korrekt (`ueb-01`).
- **Step-Typ-Pflichten** erfüllt: MC-Explanations je Option; truefalse unzweideutig + Beleg; branching mit differenzierten Konsequenzen; reflection ohne Wahr/Falsch-Validierung + wertneutral; freetext mit fachlichen bewertungskriterien + vorbildlicher Musterantwort.
- **Anrede:** Angehörige/Patient gesiezt, „du" nur an Lernende.

## Beschaffung (nicht blockierend, nichts erfinden)

| ID | Sev. | Titel | Empfehlung |
|----|------|-------|-----------|
| B-01 | NIEDRIG | „Mutmaßlicher Wille" der Angehörigen (§ 4 TPG) fachlich korrekt gelehrt, aber nur über F-03/F-05 (nicht verbatim „mutmaßlicher Wille") gegroundet | Optional: Kernfaktum um § 4 TPG mit verifiziertem Verbatim-Beleg ergänzen |
| B-02 | NIEDRIG | Organspende-Register (OGR, seit März 2024) bewusst ausgelassen (Buchstand 2019/2020) — kein Currency-Fehler, da Entscheidungslösung weiter gilt | Optional/später: Register-Hinweis nur mit verifiziertem Beleg ergänzen |

---

**Fazit:** Kein HOCH-Befund → kein K.O. Die Situation ist zahlen-, rechts- und
grounding-sauber; die kritische Currency-Prüfung (Entscheidungs- vs.
Widerspruchslösung, keine erfundenen Register-Details) besteht. Die zwei
NIEDRIG-Punkte sind Grounding-/Aktualisierungs-Optionen (Beschaffung), keine
Fehler. Panel = Vorlage, Gründerin bleibt menschlicher Backstop.
