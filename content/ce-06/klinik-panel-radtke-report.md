# Adversariales Klinik-Panel — ce-06 · `ls-radtke-brand`

**Geprüft:** 2026-07-13 · **Datei:** `content/ce-06/situationen/ls-radtke-brand/phases.ts`
**Panel:** W6 4-Lens (deterministisch) + 5. semantischer Lens (pflege-validator-Rolle)
**Fokus (Redesign-Runde):** 3 neue Wissens-Tabs `ce06-radtke-ala-00b-manv`, `ce06-radtke-erm-00b-sichtung`, `ce06-radtke-ueb-00b-psych-erste-hilfe` · KB-Marker-Korrektur (LE4-Set, Primär I.4) · 10 neue Glossar-Einträge

## Verdikt: ✅ PASS — 0 HOCH-Befunde (kein K.O.)

Panel = umfassende Vorlage. Gründerin bleibt menschlicher Backstop; die 4 NIEDRIG-Notizen unten sind Abwägungs-Hinweise, keine Fehler.

---

## Deterministische Lenses (Skript, 0 Drift)

| Lens / Skript | Ergebnis |
|---|---|
| Klinik-Panel (4 Lenses gesamt, `klinik-panel.ts --situation ls-radtke-brand`) | ✅ 0 HOCH · 0 MITTEL · 0 NIEDRIG (exit 0) |
| L1 Arzneimittel/Zahlen (`klinik-zahlen-check`, W1) | ✅ 0 out-of-range |
| L2 Recht & Ethik (`standards-currency-check ce-06`) | ✅ 0 Treffer (kein §1906/1906a-Drift) |
| L3 DNQP/Standard (`step-grounding-check ce-06`) | ✅ ls-radtke-brand PASS · 0 DANGLING · 0 MISSING |
| L4 Konsistenz (Patient-Daten / Cross-Step) | ✅ 0 Dubletten / Fremd-patientId |
| Anti-Pattern-Regex (`pflege-anti-pattern-check ce-06`) | ✅ 0 Funde (HOCH/MITTEL/NIEDRIG je 0) |
| Faktentreue (`faktentreue-check ce-06`) | ✅ Coverage 100% (STRICT) · ABCDE + SBAR gedeckt · 0 ungedeckt |
| Zitat-Verifizierer (`--check-file katastrophe-triage-krise.md`) | ✅ Alle 28 Verbatim-Belege (F-01..F-12) verifiziert |

---

## Lens 1 — Arzneimittel-/Zahlen-Sicherheit → PASS
- Keine Dosen, keine Wirkstoffe, keine erfundenen Instrumente/Scores. Sichtungskategorien werden qualitativ verwendet (rot/gelb/grün/blau/schwarz), nicht mit erfundenen Cut-off-Werten.
- ABCDE korrekt als Prioritätenschema (F-06), keine Zahlen-Claims.

## Lens 2 — Recht & Ethik → PASS
- Kein veralteter Normverweis. FeM/§1831-Thema kommt hier nicht vor (andere LE4-Situation).
- Rechtlich sauber gebaut: **keine Auskunft an Dritte/Presse — nur die Einsatzleitung** (F-11, Persönlichkeitsrecht/Datenschutz) ist als Score-3-Verhalten gesetzt; Presse-Auskunft ausschließlich Falsch-Option (`ueb-01` Opt 2).

## Lens 3 — DNQP-/Standard-Konformität → PASS
- Alle claim-tragenden Steps mit `kernfaktId` gegroundet, keine Dangling-Refs.
- Standard-Treue exakt: MANV-Definition/Leitprinzip (F-01/F-08), Katastrophe (F-02), ABCDE (F-06), Sichtungskategorien SK I rot / II gelb / III grün / IV blau / schwarz (F-07), Eigenschutz (F-09), psych. Erste Hilfe (F-10), KIT/Krisenintervention (F-11), PTBS/Supervision (F-12).

## Lens 4 — Konsistenz → PASS
- StepIds eindeutig, patientId konsistent (Radtke, 84).
- **Cross-Step-Konsistenz Sichtung:** Tab B lehrt 5 Kategorien; `erm-02` (pflegewagen) bietet nur SK I/II/III als Zonen an — die `begruendung` erklärt ausdrücklich, dass blau/schwarz fehlen, weil „im Übungsbild alle sechs überlebend" sind. Sauber reconciled, kein Widerspruch. Ethisch stark: kein realer Bewohner wird in blau/schwarz einsortiert.
- Item-Zuordnungen konsistent zu den Tab-B-Definitionen (bewusstlos/spritzende Blutung → SK I; großflächige Verbrennung *mit stabilem Kreislauf* + Fraktur stabil → SK II; gehfähig/leichte Rauchgasreizung → SK III).

---

## Lens 5 — Semantisch (pflege-validator-Rolle)

Prüft, was Regex nicht kann: Distraktor-vs-Empfehlung, Pseudo-Empathie, Realitätscheck, Step-Typ-Pflichten.

### Bestanden — Kernprüfungen
- **Distraktor vs. Empfehlung:** Alle 4 kritischen Anti-Patterns liegen ausschließlich in Falsch-Optionen und lehren *über* das Falsche:
  - „allein zum brennenden Zimmer, selbst löschen" → `erk-01` Opt 2 (`isCorrect:false`)
  - „nur die Lautesten versorgen" / „Übungssituation" → `ala-01` Opt 3 (false)
  - „reihum jeden vollständig versorgen" (Individualmedizin im MANV) → `ala-01` Opt 2 (false)
  - „Feuerlöscher ins Gesicht" → `erk-02` Opt 3 (false); „weiterlaufen lassen" → `erk-02` Opt 2 (false)
  - „Presse Auskunft geben + Betroffene allein lassen" → `ueb-01` Opt 2 (false); „ausführliche Sacherklärung an panisch-verwirrte Person" → `ueb-01` Opt 3 (false).
- **Leitprinzip korrekt** „für möglichst viele das Beste — erst sichten, dann helfen" (F-08) durchgängig; Individualversorgung vor Sichtung nur als Falsch-Aussage (`erm-03` Card 1 = false).
- **Realitätscheck / kein Kompetenz-Overreach:** Pflege macht **Vorsichtung bis der Rettungsdienst übernimmt** (kontext erstmassnahmen), löscht **nicht den Zimmerbrand** (Feuerwehr), leistet **psych. Erste Hilfe** und **informiert** KIT/Notfallseelsorge für die tiefe Betreuung (F-10/F-11). Rollenschärfe stimmt.
- **Keine Pseudo-Empathie / Werte-über-Fachlichkeit:** psych. Erste Hilfe (Wert) steht neben, nicht über Eigenschutz + Sichtung (Fachlichkeit). Kein empathischer Filler ersetzt die Prioritätenlogik.
- **Step-Typ-Pflichten:** MC mit `explanation`+`explanationB1` je Option; pflegewagen mit `erklaerung`+`erklaerungB1` je Item + plausiblen Distraktoren; truefalse unzweideutig mit Standard-Erklärung; branching mit differenzierten Konsequenzen + Patient-Reaktion; reflection/freetext mit Sandwich-`systemPrompt` bzw. `musterantwort`+`bewertungskriterien`. „du"-Anrede durchgängig.
- **Kleiderbrand (F-05):** aufhalten → Wasser/Tücher/Wolldecke/wälzen → Feuerlöscher, nicht ins Gesicht. Korrekt gelehrt.
- **KB-Marker (LE4-Set, Primär I.4)** stimmen mit der Vorgabe überein: I.4 (Tabs A/B, erk-01/02, ala-01, erm-01/02/03), III.2 (Tab C), II.1 (ueb-01), V.2 (ref-01/02). Kein Marker außerhalb des LE4-Sets (I.2 korrekt entfernt).
- **10 Glossar-Einträge** fachlich korrekt und mit dem Content konsistent (SK-Farben, „nur Einsatzleitung gibt Auskunft", Notfallplan der eigenen Einrichtung).

### NIEDRIG — Abwägungs-Notizen für die Gründerin (keine Fehler, kein K.O.)

| # | Ort | Beobachtung | Beleg / Einordnung |
|---|-----|-------------|--------------------|
| N1 | Tab C `ueb-00b` + `ueb-01` | Frau Radtke wird als **„schwerhörig"** und **„demenzkrank"** behandelt (Lippenlesen, „demenzkranke Frau"), obwohl der Eröffnungs-`kontext` nur „verängstigt und orientierungslos" etabliert. Fachlich ist der Rat (deutlich von vorn sprechen, Berührung ankündigen) korrekt und schadet nie — nur narrativ nicht vorbereitet. Empfehlung: Schwerhörigkeit/Demenz in `patient.ts` bzw. Eröffnungskontext kurz setzen ODER Formulierung generalisieren. | Konsistenz (F-10 korrekt gestützt; Attribut nur unetabliert) |
| N2 | `ueb-01` Branching | Die korrekte Option 1 bündelt mehrere Richtig-Handlungen und ist sichtbar länger/aktionsreicher als die beiden Distraktoren → milde Längen-Bias-Gefahr (Länge als Tell). Bei branching weniger kritisch als bei MC. Optional: Distraktoren gleich lang halten. | MC/Branching-Bias (didaktisch) |
| N3 | Tab A `ala-00b` kerntext | „…heißt das **Katastrophe oder Großschadensereignis**" setzt beide Begriffe gleich, während Glossar/Spektrum sie differenzieren (Katastrophe = Teilmenge von Großschadensereignis, das örtl. Kräfte übersteigt). B1-Vereinfachung, deckungsgleich mit F-02, aber terminologisch etwas lose. | Terminologie (F-01/F-02 gestützt) |
| N4 | `erk-01` Erklärung (Opt 2) vs. `erk-02` | Opt-2-Erklärung sagt „das Löschen macht die Feuerwehr" (Zimmerbrand mit Rauch), während `erk-02` die Pflege den **Kleiderbrand** löschen lässt (F-05). Fachlich konsistent (Personen-/Entstehungsbrand ≠ ausgebreiteter Zimmerbrand), für sehr wörtliche Lernende aber evtl. verwirrend. Optional: Unterschied Zimmerbrand vs. Kleiderbrand/Löschversuch am Entstehungsbrand explizit machen. | Cross-Step-Nuance (kein Widerspruch) |

---

## Beschaffung
Keine — alle Befunde sind literaturbelegt (Pflege heute 2019, Kap. 14.4/14.6/14.7/16.4; F-01..F-12 verbatim verifiziert).

## Zusammenfassung
- **Deterministische 4 Lenses:** alle grün (0 HOCH/MITTEL/NIEDRIG). Zitate 28/28, Grounding 0 dangling, Faktentreue 100%.
- **Semantischer 5. Lens:** PASS. Anti-Patterns sauber als Distraktoren isoliert; Leitprinzip, Sichtungskategorien, Eigenschutz, Rollenschärfe (Vorsichtung/Feuerwehr/KIT/Einsatzleitung) korrekt. 4 NIEDRIG-Abwägungsnotizen als Vorlage für die Gründerin.
- **K.O.:** keiner (≥1 HOCH nötig).

**Verdikt: ✅ PASS**
