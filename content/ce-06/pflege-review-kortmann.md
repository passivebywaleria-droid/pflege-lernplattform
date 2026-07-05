# Pflege-Review: ls-kortmann-abdomen (CE-06, LE3)

**Geprüft:** 2026-07-05 · **Verdikt: PASS** (0 HOCH, kein K.O.)
**Files:** patient.ts + phases.ts (5 Phasen, 13 Steps) · Grounding: abdomen-stoma-drainagen.md (F-01..F-17) + notfallassessment.md (F-07 SBAR)

## Kernbefund
Fachlich sauber: Stoma-Farblogik (F-13), Drainagen-Sog/aseptisch (F-07/08/09), Nachblutung >200 ml (F-06),
nüchtern (F-04), Ileo-vs-Kolo (F-10/11/12), Schmerzarten (F-05), postop Überwachung/Katheter (F-14/15/16),
zeitliche Trennung Mobilisation↔Nachblutung — alle korrekt zu den Kernfakten. Keine erfundenen Dosen,
Analgesie/Volumen/Diagnostik durchgängig ärztlich, „du"-Anrede, plausible Distraktoren. Patientendaten
über alle Phasen konsistent.

## Findings — ALLE gefixt (User-Regel: jede Severity)

| ID | Sev | Finding | Fix |
|----|-----|---------|-----|
| F-01 | MITTEL | livide-Stoma-Vignette (erk-04) kollidiert mit „stabil" (erk-05) | erk-04 als **hypothetische** Übungsvignette gerahmt („Angenommen, ein Teil wäre livide…"); kanonisch bleibt Stoma vital/rosig |
| F-02 | MITTEL | MC-Längen-Bias: richtige Option immer die längste | Begründungs-Halbsätze aus korrekten Optionen → `explanation`; Distraktoren angehoben (erk-01/02/03/05, ala-01/02, erm-03, ueb-01) |
| F-03 | NIEDRIG | Wärmflasche-Begründung (Vasodilatation) nicht kernfakten-gedeckt | auf gedeckten Grund umgestellt (nicht angezeigt / nicht eigenmächtig / Priorität Überwachung+OP-Vorbereitung) |
| F-04 | NIEDRIG | TrueFalse (erm-01) ohne B1-Feld → Fachbegriffe ungeglättet | „Aspirationsgefahr", „Narkose", „Hb-Kontrolle" in `explanation` inline aufgelöst |
| F-05 | NIEDRIG | Falsch-Feedback ohne Sandwich | Anerkennung + Ermutigung ergänzt (erk-04, ala-02, erm-03) — Gefahrenhinweis bleibt klar vorangestellt |
| F-06 | NIEDRIG | „>200 ml erste Stunde" (F-06) vs. 2. postop Tag | auf „>200 ml frisches Blut innerhalb einer Stunde" geschärft + als späte/sekundäre Nachblutung eingeordnet |
| F-07 | NIEDRIG | kernfaktId F-07 doppeldeutig (SBAR vs. Drainage) | Code-Kommentar an ueb-01 dokumentiert die Thema-Bindung (löst korrekt über themaPrimaer auf) |

## Cross-Step
- Patientendaten durchgängig konsistent (72 J., Not-Hartmann, Kolostoma links, Zieldrainage ohne Sog + Redon, Dauerkatheter). ✅
- Zeitliche Trennung Frühmobilisation (nur erk-05, stabil) ↔ akute Nachblutung (erm-02, kein Routine-Wechsel/keine orale Gabe). ✅

## Nach-Fix-Gates
tsc ✅ · anti-pattern 0 ✅ · step-grounding 12/12 ✅ · vitest 564 ✅ · build ✅

**K.O.-Verdikt: PASS.** Alle Findings behoben.
