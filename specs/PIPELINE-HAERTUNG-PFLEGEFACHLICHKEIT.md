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
| W2 | Grounding endet an Kernfakten (Steps ungeprüft) | KRITISCH | 2 | offen |
| W5 | Self-Grading-Schleife (String-Existenz ≠ Stützt) | HOCH | 2 | offen |
| W3 | Faktentreue-Gate faktisch AUS (exit 0) | KRITISCH | 2 | offen |
| W1 | Keine klinische Zahlen-Validierung | KRITISCH | 3 | offen |
| W4 | Anti-Pattern-Netz winzig + Sturz-zentriert | HOCH | 3 | offen |
| W6 | Einzel-LLM-Validator, kein Mehr-Augen | HOCH | 4 | offen |
| W10 | Coverage = Präsenz, nicht Korrektheit/Tiefe | MITTEL | 4 | offen |

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

---

## Reihenfolge & Chat-Schnitt

- Jede Stage = eigener Chat-Job (Kontext-Hygiene; bei Degradierung erneuern, siehe
  MASTER-BUILDPLAN §4 Session-Erneuerung).
- Reihenfolge: **Stage 2 → 3 → 4** (Grounding zuerst, weil W1/W6 darauf aufbauen).
- Nach jeder Stage: tsc + vitest + build grün, commit, MEMORY + diesen Status updaten.
