# Adversariales Klinik-Panel — `ls-kortmann-abdomen` (CE-06, LE3)

> Situation: Herr Kortmann, 72 — akutes Abdomen / Kolostoma / Drainagen (2. postop Tag Not-Hartmann → intraabdominelle Nachblutung)
> Datum: 2026-07-13 · Lauf: **Redesign-Runde** (3 neue Wissens-Tabs, KB-Marker-Korrektur, 9 neue Glossar-Einträge)
> Prüfer: 4 deterministische Lenses + semantischer 5. Lens (pflege-validator-Rolle)
> Grounding: `specs/ce-06/kernfakten/abdomen-stoma-drainagen.md` (F-01..F-17) + `notfallassessment.md` (SBAR F-07)

## Verdikt: PASS — kein HOCH-Befund (kein K.O.)

Panel = Vorlage. Gründerin bleibt menschlicher Backstop.

## Pre-Filter (deterministisch)

| Check | Ergebnis |
|-------|----------|
| `klinik-panel.ts ce-06 --situation ls-kortmann-abdomen` | exit 0 · 0 Befunde (HOCH 0 · MITTEL 0 · NIEDRIG 0) |
| `pflege-anti-pattern-check.ts ce-06` | exit 0 · 0 Funde |
| `zitat-verifizierer.ts --check-file abdomen-stoma-drainagen.md` | exit 0 · alle Belege verifiziert (F-01..F-17) |
| `step-grounding-check.ts ce-06` (kortmann) | exit 0 · claim-tragend **15** · gegroundet **15** · dangling 0 (12→15 durch die 3 neuen Wissens-Tabs) |
| `standards-currency-check.ts ce-06` | exit 0 · 0 Treffer |

## Lens 1 — Arzneimittel-/Zahlen-Sicherheit (W1): PASS

- **>200 ml/1 h Nachblutung** (F-06) belegt; korrekt in ala-02, erm-01, erm-02, ueb-01, erm-00b.
- **~1 L/Tag Dünndarminhalt** (F-11) belegt; erk-02b + erk-03.
- 3 cm Ileostoma / 6–8 h Miktion / 1. Wechsel 3. postop Tag / Ileo ≤24 h / Kolo 2–3 Tage — in Kernfakten belegt, in Steps qualitativ statt als harte Zahl → kein Out-of-range-Risiko.
- **Keine erfundenen Medikamenten-Dosen:** Analgesie/Volumen/Transfusion durchgehend „nach ärztlicher Anordnung".

## Lens 2 — Recht & Ethik / Currency: PASS

- Nekrose-/Durchblutungsbeurteilung = ärztlich (erk-04, erm-00b, F-13).
- Drainage nicht eigenmächtig abklemmen/ziehen — Falsch-Option mit Begründung (ala-02 Opt3, erm-00b).
- **Kompetenzgrenze III.2 korrekt als LE3-Primär** didaktisiert (Tab C erm-00b + ala-02 + erm-01).
- Keine veralteten Normen (kein §1906/1906a; Currency-Check 0 Treffer).

## Lens 3 — DNQP-/Standard-Konformität (Grounding W2): PASS

- 15/15 claim-tragende Steps gegroundet.
- Die **3 neuen Wissens-Tabs** liegen jeweils **VOR** ihrer Anwendung, ohne Antwort-Step: `erk-02b` (F-10/11/12, Ileo vs. Kolo) vor `erk-03`; `ala-00b` (F-07/08/09, Drainagen ohne/mit Sog) vor `ala-01`; `erm-00b` (F-06/13, Team-Grenze) vor `erm-01`ff.
- `ueb-01 kernfaktId F-07` löst über `themaPrimaer "notfallassessment"` korrekt auf den SBAR-Fakt auf.
- Nichts über Curriculum-Niveau hinaus (Paetz Chirurgie / I care Krankheitslehre / EAUN 2024).

## Lens 4 — Konsistenz (Patient-Daten / Cross-Step): PASS

- Patientendaten durchgängig; `patientId` einheitlich; alle `stepId` eindeutig.
- Timeline sauber: stabiler 2. postop Tag → Nachblutung → Erstmaßnahmen → Re-OP-Übergabe → Reflexion.
- **Stabil vs. akut getrennt:** Frühmobilisation nur in *erkennen*; Routine-Stomawechsel in erm-02 explizit „weglegen" mit Prioritätsbegründung. Keine Mobilisation / kein Routine-Wechsel während der Blutung.
- Stoma livide nur hypothetisch („Angenommen…"), reales Stoma rosig-rot — kein Widerspruch.

## Lens 5 — Semantisch (pflege-validator)

**Distraktor-vs-Empfehlung, Step-Typ-Pflichten: PASS.** Alle Anti-Patterns (Sog auf Bauchdrainage, Drainage abklemmen/ziehen, Stoma massieren/abtupfen, oral trotz nüchtern, Wärmflasche auf den Bauch, Routine-Stomawechsel in der Akutsituation, Katheterbeutel hoch, Abwarten) erscheinen ausschließlich als Falsch-Optionen mit korrigierendem Lehrtext — nie als getarnte Empfehlung. Sandwich-Feedback validiert den Impuls und korrigiert dann klar, ohne zu bagatellisieren. Bloom-Spread 2–6, erreicht „geprüft" (ref-01 Bloom 5, ref-02 Bloom 6). SBAR ueb-01 vollständig + priorisiert.

### Befunde (kein K.O.)

1. **MITTEL — KORT-SEM-01 — Glossar-Wiring (`page.tsx`, `SITUATION_GLOSSAR`).**
   `ls-kortmann-abdomen` fehlt im Mapping (nur `frau-m-nacht-sturz` + `ls-wagner-reanimation` sind eingetragen) → die Situation bekommt `glossar={[]}`. Damit rendern **weder die 9 neu angelegten CE-06-Einträge** (Kolostoma, Ileostoma, Hautschutzplatte, Drainage, Redon-Drainage, aseptisch, Nachblutung, Kompetenzgrenze, nüchtern) **noch die weiteren 33 referenzierten Fachbegriffe** C1-Tooltips in dieser Situation. Die B1-Inline-„(= …)"-Annotationen greifen weiter. Kein fachlich falscher Inhalt (deshalb kein K.O.), aber die Redesign-Glossar-Arbeit bleibt in der Situation funktional tot. **Empfehlung:** `"ls-kortmann-abdomen": CE06_GLOSSAR` ergänzen (idealerweise alle 9 CE-06-Situationen mappen). Code-Fix, nicht Content — an Gründerin/Dev.

2. **NIEDRIG — KORT-SEM-02 — erk-02.** „dumpf" für viszeralen Schmerz und die Gleichsetzung „neuropathisch (neurogen)" sind korrektes Lehrbuchstandardwissen, aber nicht verbatim in F-05. Fachlich in Ordnung; optional F-05 um „dumpf-drückend" ergänzen.

3. **NIEDRIG — KORT-SEM-03 — erm-02/ala-02.** B1-Glosse „Kreuzblut (= Blut für die Blutgruppe)" verkürzt die Kreuzprobe (Verträglichkeitstest ≠ Blutgruppenbestimmung); C1-Erklärung korrekt. Optional B1 schärfen.

## Beschaffung

Keine. Alle Befunde/Claims literaturbelegt.

## Advisory (übernommen, kein K.O.)

- **NIEDRIG:** F-06 belegt verbatim „>200 ml in der **ersten** Stunde" (unmittelbar postop); die Situation spielt am 2. postop Tag und nutzt >200 ml/1 h als Raten-Alarmschwelle. Klinisch tragfähig (sekundäre/späte Nachblutung); erm-00b/ala-02 adressieren die späte Nachblutung inzwischen explizit.
- **INFO:** Zwei verschiedene „F-07" (Drainagen vs. SBAR) in zwei Kernfakten-Themen — Auflösung über `themaPrimaer` verifiziert korrekt, für Maintainer notiert.
