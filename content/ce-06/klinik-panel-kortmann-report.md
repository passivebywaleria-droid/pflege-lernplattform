# Adversariales Klinik-Panel — `ls-kortmann-abdomen` (CE-06, LE3)

> Situation: Werner Kortmann, 72 — akutes Abdomen / Kolostoma / Drainagen (post-OP)
> Datum: 2026-07-05 · Prüfer: semantischer Lens (pflege-validator-Rolle) + 4 deterministische Lenses
> Grounding: `specs/ce-06/kernfakten/abdomen-stoma-drainagen.md` (F-01..F-17) + `notfallassessment.md` (SBAR)

## Verdikt: ✅ PASS — kein HOCH-Befund (kein K.O.)

Gründerin bleibt Backstop. Das Panel liefert die Vorlage.

## Pre-Filter (deterministisch)

| Check | Ergebnis |
|-------|----------|
| `klinik-panel.ts ce-06 --situation ls-kortmann-abdomen` | 0 Befunde (HOCH 0 · MITTEL 0 · NIEDRIG 0) |
| `pflege-anti-pattern-check.ts ce-06` | 0 Funde |
| `step-grounding-check.ts ce-06` (kortmann) | claim-tragend 12 · gegroundet 12 · dangling 0 |

## Lens 1 — Arzneimittel-/Zahlen-Sicherheit (W1): PASS

Alle geprüften Zahlen sind belegt und werden im Rahmen verwendet:

- **>200 ml/1 h Nachblutung** → F-06 belegt; in ala-02, erm-01, erm-02, ueb-01 korrekt.
- **1 Liter/Tag Dünndarminhalt** → F-11 belegt; erk-03.
- **3 cm prominentes Ileostoma**, **6–8 h Miktion**, **1. Wechsel 3. postop Tag**, **Ileo ≤24 h / Kolo 2–3 Tage** → in den Kernfakten belegt; in den Steps nicht als harte Zahl behauptet (qualitativ umgesetzt), daher kein Out-of-range-Risiko.
- **Keine erfundenen Medikamenten-Dosen:** Analgesie/Volumen/Transfusion durchgehend „nach ärztlicher Anordnung", ohne Dosis oder Präparat. Pflegewagen (erm-02) enthält nur Material (Monitoring, Zugang, Kreuzblut, steriles Verbandmaterial).

## Lens 2 — Recht & Ethik / Currency: PASS

- **Nekrose-/Durchblutungsbeurteilung = ärztlich** korrekt deklariert (erk-04, deckt F-13).
- **Drainage nicht eigenmächtig abklemmen/ziehen** — als falsch markiert mit Begründung (ala-02 Option 3).
- **Einmalkatheter ins Stoma (ärztlich/delegiert):** in den Steps NICHT behauptet → keine ungedeckte Delegationsaussage.
- **Keine veralteten Normen:** keine §-Verweise, kein §1906/1906a, keine FeM-Aussage in dieser Situation.

## Lens 3 — DNQP-/Standard-Konformität (Grounding W2): PASS

- 12/12 claim-tragende Steps gegroundet.
- kernfaktId-Zuordnung je Step inhaltlich passend.
- **ueb-01 `kernfaktId: ["F-07"]`** löst über `themaPrimaer: "notfallassessment"` korrekt auf den **SBAR-Fakt** (notfallassessment.md F-07) auf — NICHT auf den Drainage-F-07 aus abdomen-stoma-drainagen.md. Verifiziert korrekt.
- Nichts über Ausbildungs-/Curriculum-Niveau hinaus: alle Claims aus Paetz Chirurgie 23. Aufl. / I care Krankheitslehre / EAUN 2024 belegbar.

## Lens 4 — Konsistenz (Patient-Daten / Cross-Step): PASS

- Patientendaten durchgängig (72, m, Hartmann, endständiges Kolostoma links, Zieldrainage ohne Sog + Redon subkutan, Blasenkatheter); `patientId` einheitlich; alle `stepId` eindeutig.
- Timeline sauber: 2. postop Tag / 16:40 → stabile Routine (erkennen) → Nachblutung (alarmieren) → Erstmaßnahmen → Re-OP-Übergabe → Reflexion.
- **Stabil vs. akut sauber getrennt:** Frühmobilisation nur in Phase *erkennen* (stabil); Routine-Stomawechsel in erm-02 explizit in „weglegen" mit Prioritätsbegründung. Keine Mobilisation / kein Routine-Wechsel während der akuten Blutung.

## Lens 5 — Semantisch (pflege-validator): PASS

- **Distraktor vs. Empfehlung:** alle falschen Optionen (livide Stelle massieren, Sog an Bauchdrainage, Drainage ziehen, oral trinken/Keks, Wärmflasche, Katheterbeutel hoch hängen, „Blut ist normal — 1 h abwarten") sind über `isCorrect:false` + konkretes Feedback eindeutig als Fehler markiert, nie als Empfehlung getarnt.
- **Keine Pseudo-Empathie / Bagatellisierung:** „Ein bisschen Bauchweh, ist normal, oder?" ist Patientenzitat (Realitätscheck), keine Pflegeaussage; Schmerz wird nicht bagatellisiert.
- **Step-Typ-Pflichten** erfüllt: MC mit `explanation` je Option; Branching mit echten Konsequenz-Pfaden; TrueFalse eindeutig; reflection/freetext mit fachlichen Bewertungskriterien + Standards-Bezug (Patientenedukation F-17); pflegewagen mit konsistenter korrekt/kontraindiziert-Logik.

## Beschaffung

Keine. Alle Befunde/Claims literaturbelegt.

## Advisory-Hinweise (kein K.O., keine Korrekturpflicht)

1. **NIEDRIG — ala-02 / erm-01 / erm-02 / ueb-01:** F-06 belegt verbatim „>200 ml in der **ersten** Stunde" (unmittelbar postop). Die Situation spielt am 2. postop Tag und nutzt >200 ml/1 h als Raten-Alarmschwelle. Klinisch tragfähig (sekundäre/späte Nachblutung; Rate als untrügliches Warnzeichen). Optional: ein Halbsatz, dass eine späte/sekundäre Nachblutung gemeint ist.
2. **INFO — ueb-01:** Zwei verschiedene „F-07" existieren in zwei Kernfakten-Themen (Drainagen vs. SBAR). Auflösung über `themaPrimaer` ist verifiziert korrekt, auf den ersten Blick aber verwechselbar.
