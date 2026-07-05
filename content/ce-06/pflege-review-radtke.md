# Pflege-Review: ls-radtke-brand (CE-06, LE4)

**Geprüft:** 2026-07-05 · **Verdikt: PASS** (0 HOCH, kein K.O.)
**Files:** patient.ts + phases.ts (5 Phasen, 9 Steps) · Grounding: katastrophe-triage-krise.md (F-01..F-12)

## Kernbefund
Pflegefachlich stark, durchgehend gegen F-01..F-12 gegroundet. Triage-Zuordnungen (SK I/II/III), MANV-Leitprinzip,
Kleiderbrand, ABCDE, Eigenschutz, psychische Erste Hilfe und Supervision/PTBS-Differenzierung korrekt.
Patient/Setting konsistent (Radtke 84, Demenz, schwerhörig; nächtlicher Heimbrand → MANV). Beide Validatoren PASS.

## Findings — ALLE gefixt

| ID | Sev | Quelle | Finding | Fix |
|----|-----|--------|---------|-----|
| F-01 | MITTEL | validator | Triage-Item „hustet leicht" grün ohne Rauchgas-Nachbeobachtung (inkonsistent zu Item 6) | Nachbeobachtungs-Hinweis in Item-5-Erklärung ergänzt (Kategorie bleibt grün) |
| F-02 | MITTEL | validator | MC-Längen-Tell in allen 4 MCs | Distraktoren in erk-01/erk-02/erm-01 verlängert, korrekte Option (erk-01) gestrafft |
| F-03 | NIEDRIG | validator | Branching ohne sichtbare Konsequenz | Radtke-Reaktion je Pfad ins Feedback gefaltet (ruhiger / Panik eskaliert / wendet sich ab) |
| F-04 | NIEDRIG | validator | TrueFalse ohne B1 (Schema-Limit) | Fachbegriffe inline aufgelöst (gesichtet, einsturzgefährdet) |
| F-05 | NIEDRIG | validator | Schwerhörigkeit didaktisch ungenutzt | hörgerechte Ansprache (Lippenlesen, deutlich, Berührung ankündigen) in Score-3 ergänzt |
| F-06 | NIEDRIG | validator | SK-III-Zone `variant: "discard"` (Wegwerf-Optik) | auf `secondary` umgestellt |
| F-07 | NIEDRIG | validator | ala-01 `tag: "krankheitslehre"` inkonsistent | → `pflege` |
| L3-01 | NIEDRIG | panel | „Brandabschnitt schließen" = unbelegte Detailtaktik | generalisiert auf „nach der Brandschutzordnung vorgehen" |
| L1-01 | NIEDRIG | panel | SK IV/schwarz nur im Header | Hinweis auf SK IV (blau) + schwarz in die Triage-Begründung ergänzt |

## Cross-Step
- Patient/Setting durchgängig konsistent. ✅
- Triage-Zuordnungen stimmig zu SK-Definitionen; SK IV/schwarz bewusst nicht interaktiv sortiert (ethisch sauber). ✅
- Eigenschutz als „erst prüfen, dann helfen" — nicht als Untätigkeits-Vorwand. ✅

## Nach-Fix-Gates
tsc ✅ · anti-pattern 0 ✅ · step-grounding 8/8 ✅ · vitest 564 ✅ · build ✅

**K.O.-Verdikt: PASS.** Alle Findings behoben.
