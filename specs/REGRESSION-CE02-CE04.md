# Regressions-Lauf — Gehärtete Pipeline über CE-02 + CE-04

> Verifikation: Fängt die fertig-gehärtete Pipeline (W1-W10) die bekannten Fälle, ohne
> den Bestand zu sprengen? Lauf-Datum: 2026-06-30. **Kein Fix in diesem Report — nur Befund
> + priorisierte Backfill-Liste.**

---

## Verdikt

**Die gehärtete Pipeline ist NICHT über den Bestand explodiert.** CE-02 und CE-04 bestehen
die sicherheitskritischen Gates (Klinik-Panel, Zahlen, Faktentreue) sauber. Es gibt **null
HOCH-Befunde**. Die offenen Punkte sind Altlast-Artefakte (§1906a in `.md`-Plänen), eine
Regex-Schärfung (False-Positive-Klasse) und die noch nicht adoptierte Step-Grounding-Optin.

## Gate-Ergebnisse

| Gate | CE-02 | CE-04 | Bemerkung |
|------|:-----:|:-----:|-----------|
| Anti-Pattern | ⚠️ 3 (FP) | ✅ 0 | CE-02-Treffer sind False Positives (Szene/„gedämpfte Klappern") |
| Klinik-Zahlen (W1) | ✅ PASS | ✅ PASS | 18 belegte Referenzwerte, 0 out-of-range |
| Standards-Currency (W6/D) | ❌ 49 | ✅ 0 | CE-02: nur in `.md`-Artefakten, **live `.ts` = 0** |
| Faktentreue (W3) | ✅ STRICT PASS | ✅ (0 Instr.) | CE-02: 21/21 Instrumente gedeckt, Coverage 100% |
| Step-Grounding (W2) | ⏳ Warn (0 adopt.) | ⏳ Warn (0 adopt.) | Mechanismus da, noch keine Situation nutzt `kernfaktId` |
| Klinik-Panel (W6, 4 Lenses) | ✅ PASS | ✅ PASS | 0 HOCH in Arzneimittel/Recht/DNQP/Konsistenz |

## Findings — klassifiziert

### Real (Backfill nötig)
- **R1 — §1906a in 22 `.md`-Dateien (49×).** Davon kritisch: **Generierungs-Quellen**
  (`bausteine-plan.md` ×6, `glossar-plan.md` ×3, `karteikarten-plan.md` ×3, `patient-plan.md`,
  Kernfakten `mobilisation.md`/`kontraktur-prophylaxe.md`). Diese schleppen veraltetes Recht
  zurück, wenn daraus regeneriert wird. Live-`.ts` ist bereits sauber.

### Refinement (Tooling, kein Content-Fehler)
- **R2 — AP-LICHT-INDIREKT überfeuert.** 2 FP-Klassen: (a) atmosphärische Szenen
  („warmes gedämpftes Licht" in der Nachtschicht-Beschreibung, keine Inspektions-Empfehlung),
  (b) das `Licht.{0,40}gedämpft`-Fenster fängt „gedämpfte **Klappern**" (Geschirr). Fix:
  Adjazenz verschärfen + `ignoreIf` für Szenen-/Narrations-Kontext (bildhinweis/context).

### By Design (nicht blockierend)
- **R3 — Step-Grounding (W2) noch nicht adoptiert.** 0 Situationen nutzen `kernfaktId`
  (CE-02: 39 claim-tragende Steps, CE-04: 5). Warn-Modus per Design (Opt-in). Das Adoptieren
  ist die eigentliche W2-Arbeit — verlinkt jeden klinischen Claim mit einem verifizierten
  Kernfakt. Substanziell, aber nicht Live-blockierend.

## Backfill-Liste (priorisiert)

| # | Aufgabe | Aufwand | Blockt Live? |
|---|---------|---------|:---:|
| B1 | §1906a→§1831 in **Generierungs-Quell-`.md`** (~16 Dateien: bausteine/glossar/karteikarten/patient-Pläne + 2 Kernfakten) | klein | nein, aber vor Regenerierung |
| B2 | AP-LICHT-INDIREKT-Regex schärfen (R2), dann CE-02 re-run → soll 0 | klein | nein |
| B3 | §1906a in Report-/Review-`.md` (Wegwerf-Artefakte) — bulk oder ignorieren | trivial | nein |
| B4 | Step-Grounding `kernfaktId` in CE-02/CE-04-Situationen adoptieren (W2-Substanz) | mittel | nein (Warn-Modus) |

## Empfehlung

1. **B1 + B2 jetzt** (beide klein, echter Wert: keine Recht-Rückfälle + sauberer Anti-Pattern-Lauf).
2. **B4 als eigener Pass** (Grounding-Adoption) — kann auch erst beim nächsten CE-02-Anfassen laufen.
3. **B3 ignorieren oder bulk** — Wegwerf-Artefakte.
4. **Danach: CE-06-Build** — die Pipeline ist verifiziert produktionsreif.

> Kernaussage: Die Härtung hat den Bestand nicht zerschossen. CE-02 + CE-04 sind unter der
> gehärteten Pipeline live-sicher (0 HOCH). Die Backfills sind Hygiene, kein Notfall.
