# Quality Gate Report: LE-06

**Datum:** 2026-04-17  
**Verdict:** ✅ PASS  
**Checks:** 9/11 bestanden  

## Ergebnisse

| # | Check | K.O.? | Ergebnis | Fehler | Warnungen |
|---|-------|-------|----------|--------|----------|
| 1 | TypeScript Compilation | **Ja** | ✅ | 0 | 0 |
| 2 | Naming-Standard (LE-Schablone) | Nein | ❌ | 1 | 1 |
| 3 | Renderer-Kompatibilität | **Ja** | ✅ | 0 | 0 |
| 4 | Urheberrecht (Abstandstest) | **Ja** | ✅ | 0 | 1 |
| 5 | Schema-Validierung | Nein | ✅ | 0 | 0 |
| 6 | Fakten-Abdeckung | Nein | ✅ | 0 | 0 |
| 7 | MC-Bias-Check | Nein | ✅ | 0 | 10 |
| 8 | Dialog-Bias-Check | Nein | ✅ | 0 | 4 |
| 9 | B1-Sprachqualität | Nein | ✅ | 0 | 0 |
| 10 | Glossar-Vollständigkeit | Nein | ✅ | 0 | 0 |
| 11 | Pre-Live 7-Punkt-Gate | Nein | ❌ | 1 | 0 |

### Naming-Standard (LE-Schablone)

**Fehler:**
- ❌ 1 kritische Naming-Fehler
**Warnungen:**
- ⚠️ Naming-Warnungen vorhanden (MEDIUM/LOW)

### Urheberrecht (Abstandstest)

**Warnungen:**
- ⚠️ 6 WARN-Blöcke (3-5 Treffer)

### MC-Bias-Check

**Warnungen:**
- ⚠️ le06-s1-mc-07: ALLE_OBEN — Option "Alle genannten Komplikationen treffen auf Frau Siebert zu" — typischer MC-Bias
- ⚠️ le-06-s2-tb5-02: LAENGE — Korrekte Antwort 74 Zeichen, Distraktoren Ø 40 Zeichen (83% länger)
- ⚠️ le-06-s2-tb5-02: FACHBEGRIFF — "Gleichgewichtsorgan" nur in korrekter Antwort, nicht in Distraktoren
- ⚠️ le-06-s2-tb6-04: LAENGE — Korrekte Antwort 55 Zeichen, Distraktoren Ø 40 Zeichen (38% länger)
- ⚠️ le-06-s2-tb6-04: FACHBEGRIFF — "Druckentlastung" nur in korrekter Antwort, nicht in Distraktoren
- ⚠️ le-06-s2-tb8-04: LAENGE — Korrekte Antwort 77 Zeichen, Distraktoren Ø 36 Zeichen (116% länger)
- ⚠️ le-06-s3-tb9-06: LAENGE — Korrekte Antwort 74 Zeichen, Distraktoren Ø 34 Zeichen (116% länger)
- ⚠️ le-06-s3-tb9-06: FACHBEGRIFF — "Bettgalgen" nur in korrekter Antwort, nicht in Distraktoren
- ⚠️ le-06-s3-tb10-02: LAENGE — Korrekte Antwort 54 Zeichen, Distraktoren Ø 31 Zeichen (74% länger)
- ⚠️ le-06-s3-tb10-02: FACHBEGRIFF — "Wahrnehmung" nur in korrekter Antwort, nicht in Distraktoren

### Dialog-Bias-Check

**Warnungen:**
- ⚠️ le-06-s2-tb7-09: POSITION_BIAS — 3x hintereinander beste Antwort auf Position B
- ⚠️ le-06-s3-tb9-04: POSITION_BIAS — 3x hintereinander beste Antwort auf Position B
- ⚠️ le-06-s4-tb14-10: POSITION_BIAS — 3x hintereinander beste Antwort auf Position B
- ⚠️ GESAMT: POSITION_BIAS — Position B hat den besten Score in 76% aller Phasen (16/21)

### Pre-Live 7-Punkt-Gate

**Fehler:**
- ❌ Pre-Live-Gate BLOCKED

---
*Generiert von `scripts/quality-gate.ts`*
