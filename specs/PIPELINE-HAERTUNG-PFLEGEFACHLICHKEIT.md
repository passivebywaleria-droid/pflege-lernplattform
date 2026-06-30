# Pipeline-Härtung — Pflegefachlichkeit (W1-W10)

> Programm zur Schließung der 10 Pflegefachlichkeits-Schwachstellen der Content-Pipeline.
> Boot-Anker für den dedizierten „Chat 0 — Pipeline-Härtung". Lies zuerst die Wirbelsäule
> (CLAUDE.md, MEMORY.md, MASTER-BUILDPLAN.md, HANDOFF.md), dann diese Datei.
>
> Stand: 2026-06-30

---

## Gründerin-Entscheidungen (fest verdrahtet, gelten für ALLE Stages)

1. **Referenzwerte (W1):** Die Range-DB (Vitalwerte/Dosierungen/Laborwerte) wird
   **ausschließlich aus unseren Literaturen** (`recherche/`) befüllt — jeder Wert
   verbatim belegt (`zitat-verifizierer`-Logik). **Was im Korpus fehlt → Beschaffungsliste**
   an die Gründerin, NICHTS erfinden. (Analog „⚠️ Quelle beschaffen".)
2. **Klinische Freigabe (W6):** Gründerin ist Pädagogin, „aber auch ich muss alles
   nachlesen" → also baut die KI das **vollständige adversariale Panel** (nicht ein
   Validator, sondern ALLE Lenses gleichzeitig), jeder Befund literaturbelegt. Gründerin
   = menschlicher Backstop, Panel macht die umfassende Arbeit.

**Übergreifendes Prinzip:** Kein erfundener Content — jede neue Prüf-Schwelle/Range/Norm
ist selbst quellenbelegt, sonst Beschaffungsliste.

---

## Status

| W | Schwachstelle | Severity | Stage | Status |
|---|---------------|----------|-------|--------|
| W7 | Veraltete Rechtsnorm §1906a (Tool + Content) | MITTEL | 1 | ✅ `5d59184` |
| W9 | 800-Wörter-Cap im Validator | MITTEL | 1 | ✅ `5d59184` |
| W8 | Drift Skript↔Regel (2 Wahrheitsquellen) | MITTEL | 1 | ✅ `3bf5d05` |
| W2 | Grounding endet an Kernfakten (Steps ungeprüft) | KRITISCH | 2 | ✅ `9564c62` |
| W5 | Self-Grading-Schleife (String-Existenz ≠ Stützt) | HOCH | 2 | ✅ `9564c62` |
| W3 | Faktentreue-Gate faktisch AUS (exit 0) | KRITISCH | 2 | ✅ `9564c62` |
| W1 | Keine klinische Zahlen-Validierung | KRITISCH | 3 | ✅ Stage 3 |
| W4 | Anti-Pattern-Netz winzig + Sturz-zentriert | HOCH | 3 | ✅ Stage 3 |
| W6 | Einzel-LLM-Validator, kein Mehr-Augen | HOCH | 4 | ✅ Stage 4 |
| W10 | Coverage = Präsenz, nicht Korrektheit/Tiefe | MITTEL | 4 | ✅ Stage 4 |

**Alle 10 Schwachstellen geschlossen (W1–W10 ✅).**

---

## Stage 2 — Grounding härten (KRITISCH)

**Ziel:** Die „kein erfundener Content"-Garantie über die Kernfakten-Grenze hinaus auf den
lernende-sichtbaren Text ausdehnen.

### W2 — Step-Level-Grounding
- **Schema:** jeder klinische Claim-tragende Step bekommt optional `kernfaktId: string[]`
  (Referenz auf `F-XX` der Kernfakten). Neues Feld → **pipeline-sync.md: 7 Stellen** updaten
  (`_types.ts`, didaktik-regisseur, content-generator, didaktik-pruefer, GESAMT-PROMPT,
  ADAPTIVER-THEMENBOGEN, MEMORY).
- **Validator-Skript** `scripts/step-grounding-check.ts <ce>`: jeder Step mit klinischem
  Claim muss ≥1 `kernfaktId` haben, die auf einen existierenden, verifizierten Kernfakt zeigt.
- **Trade-off:** nicht jeder Step ist claim-tragend (Reflexion/Selfrating nicht). → Whitelist
  der claim-freien Step-Typen, sonst False-Positive-Flut.
- **Edge Case:** ein Step kann mehrere Fakten bündeln → `kernfaktId` ist Array.

### W5 — Semantischer Stützt-Check (adversarial)
- Der `zitat-verifizierer` prüft nur String-Existenz. Ergänzung: ein **adversarialer
  Agent-Schritt**, der pro Beleg fragt „Stützt dieses Zitat den KONKRETEN Claim — oder nur
  das Thema?" (die `dozentin-recherche.md`-Regel, bisher nur Selbst-Appell).
- **Mehr-Augen:** ≥2 unabhängige Agenten, Mehrheit entscheidet (kein Self-Grading).
- **Trade-off:** Token-Kosten — läuft zur Build-Zeit, nicht in CI. Akzeptiert (Sicherheit).

### W3 — Faktentreue-Gate scharfschalten
- `faktentreue-check.ts` exitet aktuell immer 0. **Umbau:** exit 1 bei ungedeckten
  Instrumenten, SOBALD für die `{ce}` Kernfakten existieren (Flag `--strict` automatisch
  aktiv, wenn Kernfakten-Coverage > Schwelle).
- **Abhängigkeit:** braucht Kernfakten pro Thema (eigener Arbeitsstrang). Bis dahin bleibt
  es Warn-Modus — aber sichtbar geloggt, nicht stumm.

### ✅ Stage 2 — umgesetzt (2026-06-30)

**W2 — Step-Level-Grounding**
- Schema: `kernfaktId?: string[]` in `ContentStep` (`content/_types.ts`). Format pro Eintrag:
  bare `"F-08"` (Thema = `themaPrimaer`) oder qualifiziert `"sturz-prophylaxe/F-08"`.
- Pipeline-Sync (7 Stellen): `_types.ts`, didaktik-regisseur, content-generator,
  didaktik-pruefer (neues K.O.-Kriterium **F12**), GESAMT-PROMPT-v2, ADAPTIVER-THEMENBOGEN, MEMORY.
- `scripts/step-grounding-check.ts <ce> [--strict]`: lädt echte Steps (dyn. Import der
  `content/{ce}/index.ts`), Whitelist claim-freier Typen (reflection/selfrating/confidence/
  crowdPoll/audio/speech). **Auto-Strict pro Situation**: sobald eine Situation ≥1 Grounding
  hat, müssen ALLE claim-tragenden Steps gegroundet sein; sonst Warn (Coverage-Hinweis).
  **Dangling-Refs immer FAIL.** Pure Kern + `tests/unit/step-grounding.test.ts` (17 Tests).
- CE-02-Baseline: alle Situationen „nicht adoptiert" (noch keine kernfaktId) → exit 0,
  bereit fürs schrittweise Nachrüsten.

**W5 — Semantischer Stützt-Check (adversarial)**
- `scripts/stuetzt-check.ts --file <kernfakten.md> [--strict]`: parst Claim↔Beleg-Paare,
  befragt **3 unabhängige Lenses** (wortlaut / spezifisch / skeptiker) per Nebius-Llama,
  **Mehrheits-Entscheid** (STUETZT braucht echte Mehrheit, kein Self-Grading). Build-Zeit,
  nicht CI. Ohne `NEBIUS_API_KEY` sichtbarer Skip (exit 0). Injizierbarer `Judge` →
  `tests/unit/stuetzt-check.test.ts` (12 Tests, Mock-Judge).

**W3 — Faktentreue-Gate scharfschalten**
- `scripts/faktentreue-check.ts`: Coverage = Kernfakten-Themen / CE-Themen. **Coverage ≥ 80 %
  → STRICT (exit 1 bei ungedecktem Instrument)**, sonst sichtbarer WARN (exit 0). Override
  `--strict`/`--warn`. Pure Kern (`computeCoverage`/`decideMode`/`gateExitCode`) +
  `tests/unit/faktentreue-gate.test.ts` (14 Tests). CE-02 jetzt STRICT (100 % Coverage,
  0 Lücken → PASS); CE-04 WARN (0 Kernfakten).

Gates grün: `tsc` ✅ · vitest 458 ✅ (+43 neu) · `build` ✅.

---

## Stage 3 — Klinische Korrektheit (KRITISCH/HOCH)

### W1 — Klinischer Zahlen-Validator
- **`scripts/klinik-zahlen-check.ts`** + **`recherche/referenzwerte.json`** (kuratiert,
  jeder Eintrag mit Verbatim-Beleg + Quelldatei).
- Prüft jeden Zahlenwert im Content gegen plausible Range. Format pro Eintrag:
  `{ groesse, einheit, min, max, quelldatei, zitat }`.
- **Gründerin-Entscheidung:** Werte NUR aus `recherche/`. Was fehlt → `BESCHAFFUNGSLISTE.md`.
- **Vitalwerte zuerst** (im Korpus gut belegt: RR, Puls, Temp, AF, SpO2, BZ), Arzneimittel-
  Dosierungen nur soweit belegt; Rest auf Beschaffungsliste.
- **Edge Case (kritisch):** Patienten-Fall-Daten sind absichtlich abnormal (NRS 5, RR 90/60).
  → Werte in `patient.ts` + als Fall-Vitalwert markierte Felder per **Whitelist** ausnehmen;
  nur Autoritäts-Claims („Normalwert ist X") prüfen, nicht Falldaten.

### W4 — Anti-Pattern-Netz pro CE-Domäne erweitern
- Pro neuer CE domänenspezifische Anti-Patterns ergänzen (CE-06 Akut: ABCDE-Reihenfolge,
  Reanimation; CE-08 Palliativ: Opioid-Mythen, Sterbephase; CE-10 Kinder: Dosis-pro-kg).
- Jedes neue Pattern aus `recherche/` + Standard belegt, in Skript **und** Register (W8-Test
  erzwingt Sync).
- **Beispiel-Lücke heute:** „2-Stunden-Umlagern" (Misconception M3 der Recherche) wird von
  keinem Regex gefangen → als Pattern aufnehmen.

### ✅ Stage 3 — umgesetzt (2026-06-30)

**W1 — Klinischer Zahlen-Validator**
- `recherche/referenzwerte.json`: 18 kuratierte Referenzwerte, JEDER mit Verbatim-Beleg
  (`quelle{datei,zeile,zitat}`, per `grep` verifiziert). Erwachsene komplett (RR syst/diast,
  Puls, AF, Temp, SpO2, BZ mg/dl+mmol/l); Kinder Puls+AF je Altersstufe. Bounds aus
  zitierten Pathologie-Schwellen; fehlt ein Bound → `null` (statt Erfindung).
- `recherche/BESCHAFFUNGSLISTE-REFERENZWERTE.md`: 6 offene Lücken (BZ-Untergrenze,
  Kinder-SpO2/-Temp/-BZ/-RR-Band) — Gründerin-Regel: nichts erfinden.
- `scripts/klinik-zahlen-check.ts <ce> [--json]`: **Präzisions-Prinzip** — prüft NUR
  Autoritäts-Claims (Norm-Marker + adjazenter Wert+Einheit ohne Komma dazwischen + Größen-Alias
  im Fenster). Falldaten (NRS/RR) tragen keinen Norm-Marker → nie geprüft; `patient.ts` +
  `klinik-zahlen:ignore`-Zeilen + Kommentare zusätzlich whitelisted. Altersgruppen-Scoping;
  fehlt pädiatrischer Beleg → Skip+Log (Coverage-Lücke), kein Fehler. Pure Kern +
  `tests/unit/klinik-zahlen-check.test.ts` (36 Tests). CE-02: 4 Claims geprüft, 0 Out-of-Range,
  0 FP (planted-error-getestet: fängt SpO2 80 %, RR 200/130, Kinder-AF 60).

**W4 — Anti-Pattern-Netz erweitert (4 neue, korpus-belegt)**
- `AP-2H-LAGERUNG-STARR` (MITTEL, DNQP Dekubitus), `AP-DEKUBITUS-MASSAGE` (HOCH, I care/DNQP 2017),
  `AP-DEKUBITUS-HAUTMYTHOS` (HOCH, Pflege Heute — Franzbranntwein/Eisen+Föhnen),
  `AP-OPIOID-ATEMDEPRESSION-MYTHOS` (HOCH, Aulbert). Jedes mit `ignoreIf` für korrektive
  Lehre (verboten/aufgegeben/widerlegt/Titration) → 0 FP auf CE-02 (lehrt alle korrekt).
- In Skript UND Register (`pflege-konformitaet.md`); **W8-Drift-Test grün**. Fire/Suppress-
  Regression in `tests/unit/pflege-anti-pattern-w4.test.ts` (11 Cases).

Gates grün: `tsc` ✅ · vitest 509 ✅ (+51 neu) · `build` ✅ · eslint ✅.

---

## Stage 4 — Mehr-Augen & Tiefe (HOCH/MITTEL)

### W6 — Adversariales Klinik-Panel (Gründerin-Entscheidung: „alles, nicht einzeln")
- Ersetzt den Einzel-`pflege-validator` durch ein **Panel mit getrennten Lenses**, parallel:
  1. **Arzneimittel-/Zahlen-Sicherheit** (nutzt W1)
  2. **Recht & Ethik** (FeM/§1831, Einwilligung, Schweigepflicht — nutzt Standards-Currency)
  3. **DNQP-/Standard-Konformität** (nutzt Grounding)
  4. **Konsistenz** (Patient-Daten, Cross-Step)
- Jeder Lens unabhängig, jeder Befund **literaturbelegt**; Befunde gemerged + dedupliziert.
- Gründerin = Backstop (kann jeden Befund overrulen, aber das Panel liefert die Vorlage).
- **Standards-Currency-Registry (D):** `recherche/standards-currency.json`
  `{ norm, version, datum, ersetzt }` — Check flaggt veraltete Normen im Content
  (hätte W7/§1906a automatisch gefangen).

### W10 — Coverage-Tiefe statt Präsenz
- `lernergebnis-coverage` zählt heute Berührung. Ergänzung: pro Lernergebnis eine
  **Tiefe-Stufe** (berührt / geübt / geprüft) aus Bloom-Level der zugeordneten Steps ableiten.
- „0 FEHLT" wird zu „0 FEHLT + jedes LE mind. auf Stufe ‚geübt'".

### ✅ Stage 4 — umgesetzt (2026-06-30)

**W6 — Adversariales Klinik-Panel** (ersetzt Einzel-Validator durch 4 parallele Lenses)
- `scripts/klinik-panel.ts <ce> [--situation <id>] [--json]`: 4 unabhängige Lenses,
  jeder Befund literaturbelegt, gemerged + dedupliziert (pure `mergeFindings`/`dedupKey`/
  `panelVerdict`). K.O. (exit 1) bei ≥1 HOCH. Report `content/{ce}/klinik-panel-report.{md,json}`,
  Befunde ohne Beleg → Beschaffungs-Sektion.
  - Lens 1 Arzneimittel/Zahlen → reuse `analyzeText` (W1, `referenzwerte.json`)
  - Lens 2 Recht & Ethik → reuse `scanTextForOutdatedNorms` (Currency-Registry)
  - Lens 3 DNQP/Standard → reuse `checkSituation` (W2-Grounding)
  - Lens 4 Konsistenz → neu (Dup-stepId, fremde patientId)
- **Teil D — Standards-Currency-Registry**: `recherche/standards-currency.json`
  (`{ norm, pattern, status, ersetztDurch, datumAbloesung, grund, beleg }`) +
  `scripts/standards-currency-check.ts <ce> [--include-plans] [--json]`. Korrektiv-Kontext
  („vormals §1906") wird ausgenommen. Erster belegter Eintrag §1906/1906a→§1831/1832
  (Betreuungsrechtsreform 2023). **Demonstriert:** fängt §1906a in CE-01-Plänen (8×),
  hätte W7 automatisch gefangen. CE-02 (.ts) sauber.
- **5. Lens = semantisch**: `pflege-validator` bleibt (Distraktor-vs-Empfehlung), die
  Gründerin der menschliche Backstop. AP-Regex-Pre-Filter gehört bewusst zum semantischen
  Lens, nicht zu den deterministischen 4 (sonst over-fire auf Lehr-Distraktoren).
  Neue Agent-Doku `.claude/agents/klinik-panel.md`.

**W10 — Coverage-Tiefe statt Präsenz**
- `scripts/lernergebnis-tiefe.ts <ce-nummer> [--strict]`: pure `bloomToTiefe`
  (1-2 berührt · 3-4 geübt · 5-6 geprüft), `deriveLeTiefe` (höchste Stufe), `gateLe`
  (min „geübt"; motorisch/einstellung by-design befreit), `bilanz`. JOINT Katalog ×
  Mapping `specs/{ce}/lernergebnis-mapping.json` × Step-Blooms. Ohne Mapping Warn-Modus
  (analog Grounding-Adoption). `lernergebnis-coverage-scaffold.ts` um Tiefe-Spalten,
  Tiefe-Gate-Regel und Mapping-Pflicht-Artefakt erweitert.

Gates grün: `tsc` ✅ · vitest **564** (+55 neu) ✅ · `build` ✅ · eslint (neue Dateien sauber) ✅.
W8-Drift-Test grün (ANTI_PATTERNS unberührt). CE-02-Panel PASS.

---

## Reihenfolge & Chat-Schnitt

- Jede Stage = eigener Chat-Job (Kontext-Hygiene; bei Degradierung erneuern, siehe
  MASTER-BUILDPLAN §4 Session-Erneuerung).
- Reihenfolge: **Stage 2 → 3 → 4** (Grounding zuerst, weil W1/W6 darauf aufbauen).
- Nach jeder Stage: tsc + vitest + build grün, commit, MEMORY + diesen Status updaten.
