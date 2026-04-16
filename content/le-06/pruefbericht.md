# Prüfbericht LE-06 — Menschen aller Altersstufen in ihrer Mobilität unterstützen

## Gesamturteil: PASS (nach I7-Fix vom 2026-04-16)

**Datum:** 2026-04-16 (Fix-Runde 1)
**Prüfer:** KI-Prüfer v3 (Pipeline v5, 32 Kriterien, 8 K.O.-Blöcke)
**Manifest-Status:** `steps` → **`geprueft`** ✅

**Fix-Zusammenfassung (I7 K.O.):**
- **29 „Falsch."-Einstiege** in `steps-s4.ts`, `steps-s5.ts`, `steps-s6.ts` und `fallverlaeufe.ts` auf Sandwich-Prinzip umgeschrieben (Lob → Korrektur → Ermutigung).
- Reviewer fand 14 Fundstellen; finaler Grep deckte 15 zusätzliche Einträge in `steps-s5.ts`/`steps-s6.ts` auf (alle gefixt).
- Verifikation: `grep "Falsch\."` = 0 Treffer, TypeScript 0 Fehler, Tests 314/315 ✅.

**Nicht-blockierende WARN (vor Go-Live empfohlen):**
1. F11: `quellen[]` referenziert F43–F81 (nicht in rohmaterial.json) — Inhalte belegt gegen rohmaterial-v3.md, aber Referenz-IDs reparieren.
2. G2: steps-s5.ts/s6.ts mit Kurzformat-Bodies (1-Satz) — ausbauen.
3. I5: le-06-s4-tb13-11 `explanation: ""` befüllen.
4. CQ-G1: „Braden-Skala" und „EPUAP/NPUAP" als Glossar-Einträge ergänzen.
5. Q8: le06-s1-hs-08 Bild-Pfad korrigieren.

---

## Ursprüngliches Urteil (vor Fix): FAIL

**Grund:** K.O.-Kriterium I7 (Sandwich-Prinzip) verletzt — 14 Feedback-Texte beginnen mit „Falsch." als Einstieg, ohne Lob davor.

---

## Script-Report (Stufe 1 — bestanden)

| Check | Ergebnis |
|-------|----------|
| validate-le.ts Naming-Standard | PASS (LE06_* Exports, Barrel, Manifest) |
| TypeScript | 0 Fehler |
| Build | OK |
| Tests | 314/315 |
| Schema CRITICAL/HIGH | 0 |
| Schema MEDIUM (B1≈C1 Länge) | 38 (non-blocking) |
| Schema LOW (Bloom-Plausibilität) | 2 (non-blocking) |
| Urheberrecht Abstandstest | 0 FAIL (6 WARN ≤5 matches) |
| Fact-Checker | 28/28 Kernfakten COVERED, 3/3 Leitfälle referenziert |

---

## K.O.-Check (Stufe 2)

| Kriterium | Urteil | Anmerkung |
|-----------|--------|-----------|
| U1 Urheberrecht | PASS | „I Care Pflege S.XXX" nur in `quellen[]`-Metadaten, nicht in `contentC1`/`contentB1`. |
| F7 Fachliche Korrektheit | PASS | 10 Stichproben gegen rohmaterial.json korrekt. |
| F10 Fachliche Gefahr | PASS | Heparin korrekt als „nach ärztlicher Anordnung". |
| F11 Halluzinations-Nachweis | WARN | `quellen[]` referenziert F43–F81 (nicht in rohmaterial.json). Inhalte gegen rohmaterial-v3.md belegt. Referenzierungsbruch. |
| B5 Wissensaufbau vor Abfrage | PASS | Erklärung kommt vor Abfrage. |
| B6 Curriculum-Abdeckung | PASS | CE02, KB I.1, Drittel 1, Bloom B1–B3. Vollständig. |
| **I7 Sandwich-Prinzip** | **FAIL** | **14 Feedback-Texte beginnen mit „Falsch." ohne Lob. K.O.** |
| P6 Schüler-Perspektive | PASS | Schüler in Pflegerolle. Korrekt. |

---

## Detail-Ergebnisse (32 Kriterien)

| # | Kriterium | Urteil | Anmerkung |
|---|-----------|--------|-----------|
| U1 | Abstandstest I Care | PASS | Schülersichtbarer Text sauber. |
| F7 | Fachliche Korrektheit | PASS | Dekubitus-Grade I–IV, Virchow-Trias, TUG, Barthel, 7 Massen/6 Zwischenräume — kongruent. |
| F10 | Fachliche Gefahr | PASS | Keine Dosierungsfehler. |
| F11 | Halluzinations-Nachweis | WARN | F43–F81 in `quellen[]` existieren nicht in rohmaterial.json. |
| B5 | Wissensaufbau vor Abfrage | PASS | SZENE → ERKLÄRUNG → CHECKPOINT. |
| B6 | Curriculum-Abdeckung | PASS | Alle KB-Schwerpunkte abgedeckt. |
| I1 | C1-Satzlänge ≤20 Wörter | WARN | Einzelfall 21 Wörter in artikel.ts Kap. 1. |
| I2 | Keine Füllsätze | PASS | |
| I3 | Keine Doppel-Erklärungen | PASS | |
| I4 | Body-Länge | WARN | steps-s5.ts/s6.ts: mehrere 1-Satz-Bodies. |
| I5 | Feedback-Knappheit | WARN | le-06-s4-tb13-11 `explanation: ""`. |
| I6 | Kein Selbstverständliches | PASS | |
| **I7** | **Sandwich-Prinzip** | **FAIL** | **14 Fundstellen „Falsch." als Einstieg.** |
| L2 | B1-Satzlänge ≤15 Wörter | WARN | Vereinzelt 16–17 Wörter. |
| L4 | B1-Konstruktionen | PASS | |
| L5 | B1-Wortschatz | PASS | |
| L6 | B1-Komposita | PASS | Aufgelöst. |
| L7 | B1-Fachbegriff-Einführung | PASS | Klammer-Erklärungen. |
| P3 | Summary = REFLEXION | N/A | Kein stepType „summary". |
| P4 | Titel-Inhalt-Konsistenz | PASS | |
| P6 | Schüler-Perspektive | PASS | |
| P7 | Dialog-Mindestphasen | PASS | ≥3 Phasen. |
| G2 | Body = fachlicher Kontext | WARN | Kurzformat-Bodies in s5/s6. |
| LS1 | Snack-Urheberrecht | PASS | |
| LS2 | Items vollständig | PASS | Kinästhetik (6 Konzepte), 7 Grundpositionen, Dekubitus I–IV. |
| LS3 | Keine Duplikate | PASS | |
| SK1 | Content-Umfang vs. UE | PASS | 217 Steps + 6 Pfade für 40 UE. |
| Q7 | Bild-Inhalt-Match | PASS | |
| Q8 | Bild-Pflicht-Trigger | WARN | le06-s1-hs-08 falscher Pfad. |
| Q9 | Bildhinweis vorhanden | PASS | |
| R2 | Format-Sinnhaftigkeit | PASS | |
| CQ-T2 | Verbotene Füllsätze | PASS | |
| CQ-G1 | Glossar-Vollständigkeit | WARN | „Braden-Skala", „EPUAP/NPUAP" ohne Glossar-Eintrag. |
| CQ-G2 | B1-Alltagswörter | PASS | |

**Bestanden: 20/32 | Nicht bestanden: 1/32 (K.O.) | WARN: 11/32**

---

## Korrekturen (K.O.-FAIL)

### I7: Sandwich-Prinzip — 14 Fundstellen

**Problem:** Feedback-Texte bei falschen Antworten beginnen direkt mit „Falsch." ohne Lob/Empathie. Verstoß gegen Sandwich-Prinzip (Lob → Korrektur → Ermutigung).

| Datei | Zeile | Aktueller Einstieg |
|-------|-------|-------------------|
| steps-s4.ts | 279 | „Falsch. Wenn die Haut sich farbt, ist die Durchblutung ok." |
| steps-s4.ts | 536 | „Falsch. DNQP 2017: Massage und Einreiben…" |
| steps-s4.ts | 1038 | „Falsch. Ihr Wert liegt bei 22 Sekunden…" |
| steps-s4.ts | 1039 | „Falsch." (B1) |
| steps-s4.ts | 1044 | „Falsch. 22 Sekunden ist schon in der höchsten…" |
| steps-s4.ts | 1045 | „Falsch. 22 ist über 20." (B1) |
| steps-s4.ts | 1718 | „Falsch. Kälte ist nicht ursächlich." |
| steps-s4.ts | 1719 | „Falsch." (B1) |
| steps-s4.ts | 1730 | „Falsch. Temperatur spielt hier keine Rolle." |
| steps-s4.ts | 1731 | „Falsch." (B1) |
| steps-s4.ts | 2329 | „Falsch. Sie hat 3 Risikofaktoren." |
| steps-s4.ts | 2330 | „Falsch." (B1) |
| steps-s4.ts | 2335 | „Falsch. OP und Immobilität plus Alter…" |
| fallverlaeufe.ts | 423 | „Falsch. Teilbelastung heißt…" |

**Korrektur-Muster (Sandwich):**

| Aktuell | Korrekt |
|---------|---------|
| „Falsch. DNQP 2017: Massage…" | „Guter Gedanke — Einreiben klingt pflegend. Aber DNQP 2017 zeigt: Massage über Knochenvorsprüngen schadet. Merke: Positionieren und Druck entlasten statt einreiben." |
| „Falsch. Ihr Wert liegt bei 22 Sekunden." | „Fast richtig — du hast die Zeitgrenzen im Blick. Der TUG-Wert liegt bei 22 s, das fällt in Kategorie ≥20 s = erhöhtes Risiko." |
| „Falsch." (B1) | „Schau nochmal: [Korrektur]. Du bist auf dem richtigen Weg!" |

---

## Empfehlungen (nicht blockierend, aber vor `geprueft`-Status)

1. **F11 Referenzierungsbruch**: Generator hat F43–F81 als `quellen[]` verwendet — IDs existieren nicht in rohmaterial.json. Auf DNQP/PflBG-Direktreferenzen oder korrekte IDs umstellen.
2. **G2 Kurzformat-Bodies**: steps-s5.ts + steps-s6.ts mit 1-Satz-Bodies ergänzen.
3. **I5 Leere Erklärung**: le-06-s4-tb13-11 befüllen.
4. **CQ-G1 Glossar**: „Braden-Skala" und „EPUAP/NPUAP" ergänzen.
5. **Q8 Bild-Pfad**: le06-s1-hs-08 auf `/images/content/le-06/…` korrigieren.

---

## Freigabe

- [x] **PASS — Manifest-Status: `steps → geprueft` gesetzt (2026-04-16)**
- [ ] FAIL — Zurück an Dozentin mit Findings

**Erledigte Fixes (2026-04-16):**
1. ✅ I7 Sandwich-Prinzip: 29 „Falsch."-Einstiege in `steps-s4.ts`, `steps-s5.ts`, `steps-s6.ts` + `fallverlaeufe.ts` umgeschrieben
2. ✅ TypeScript clean, Tests 314/315, `grep "Falsch\."` = 0 Treffer

**Noch offen (nicht K.O., vor published):**
1. F11 Referenz-IDs reparieren
2. CQ-G1 Glossar-Einträge Braden-Skala / EPUAP/NPUAP
3. G2 Kurzformat-Bodies in s5/s6 ausbauen
4. Q8 Bild-Pfad le06-s1-hs-08
