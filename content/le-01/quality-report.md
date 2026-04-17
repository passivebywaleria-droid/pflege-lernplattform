# Quality Gate Report: LE-01

**Datum:** 2026-04-17  
**Verdict:** ❌ FAIL  
**Checks:** 7/11 bestanden  

## K.O.-Fehler

- ❌ Urheberrecht (Abstandstest)

## Ergebnisse

| # | Check | K.O.? | Ergebnis | Fehler | Warnungen |
|---|-------|-------|----------|--------|----------|
| 1 | TypeScript Compilation | **Ja** | ✅ | 0 | 0 |
| 2 | Naming-Standard (LE-Schablone) | Nein | ❌ | 1 | 1 |
| 3 | Renderer-Kompatibilität | **Ja** | ✅ | 0 | 0 |
| 4 | Urheberrecht (Abstandstest) | **Ja** | ❌ | 1 | 1 |
| 5 | Schema-Validierung | Nein | ❌ | 4 | 0 |
| 6 | Fakten-Abdeckung | Nein | ⏭️ | 0 | 1 |
| 7 | MC-Bias-Check | Nein | ✅ | 0 | 5 |
| 8 | Dialog-Bias-Check | Nein | ✅ | 0 | 1 |
| 9 | B1-Sprachqualität | Nein | ✅ | 0 | 0 |
| 10 | Glossar-Vollständigkeit | Nein | ✅ | 0 | 0 |
| 11 | Pre-Live 7-Punkt-Gate | Nein | ❌ | 1 | 0 |

### Naming-Standard (LE-Schablone)

**Fehler:**
- ❌ 2 kritische Naming-Fehler
**Warnungen:**
- ⚠️ Naming-Warnungen vorhanden (MEDIUM/LOW)

### Urheberrecht (Abstandstest)

**Fehler:**
- ❌ 1 FAIL-Blöcke (≥6 N-Gramm-Treffer)
**Warnungen:**
- ⚠️ 2 WARN-Blöcke (3-5 Treffer)

### Schema-Validierung

**Fehler:**
- ❌ le01-s1-cf-08: question.statements — Array mit mind. 1 Einträgen (Statements als string[])
- ❌ le01-s1-cf-08: question.confidenceCards — Nicht question.confidenceCards sondern question.statements (als string[])
- ❌ le01-s4-cf-08: question.statements — Array mit mind. 1 Einträgen (Statements als string[])
- ❌ le01-s4-cf-08: question.confidenceCards — Nicht question.confidenceCards sondern question.statements (als string[])

### Fakten-Abdeckung

**Warnungen:**
- ⚠️ Kein rohmaterial.json — übersprungen

### MC-Bias-Check

**Warnungen:**
- ⚠️ le01-s1-mc-05: FACHBEGRIFF — "Gleichschaltung" nur in korrekter Antwort, nicht in Distraktoren
- ⚠️ le01-s3-mc-04: FACHBEGRIFF — "Qualifikation" nur in korrekter Antwort, nicht in Distraktoren
- ⚠️ le01-s4-mc-05: FACHBEGRIFF — "Effizienz" nur in korrekter Antwort, nicht in Distraktoren
- ⚠️ le01-s5-mc-07: LAENGE — Korrekte Antwort 90 Zeichen, Distraktoren Ø 28 Zeichen (225% länger)
- ⚠️ le01-s5-mc-07: FACHBEGRIFF — "Entlassung" nur in korrekter Antwort, nicht in Distraktoren

### Dialog-Bias-Check

**Warnungen:**
- ⚠️ GESAMT: POSITION_BIAS — Position A hat den besten Score in 67% aller Phasen (2/3)

### Pre-Live 7-Punkt-Gate

**Fehler:**
- ❌ Pre-Live-Gate BLOCKED

---
*Generiert von `scripts/quality-gate.ts`*
