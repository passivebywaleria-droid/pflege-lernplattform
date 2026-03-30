# Prüfbericht S1 — LE-01

## Durchlauf 1 (2026-03-30) — FAIL

**K.O.-Verletzungen:**
- [F7 K.O.] ICN Schlüsselaufgaben falsch: nur 4 statt 5, "Begleitung Sterbender" statt "Forschung + Bildung"
- [F7 K.O.] Step 6 hatte 2x `isCorrect: true` ohne `multipleCorrect`

**Sonstige FAIL:**
- [L1] Track 77% basis / 23% vertiefung (Soll: 60-70%/30-40%)
- [I1] Step 8 C1: Satz >20 Wörter
- [I2/I6] Step 6 body: Füllsatz "Jetzt eine Transferfrage."

**Fixes angewendet:**
- Step 4: ICN Schlüsselaufgaben korrigiert (5 Aufgaben inkl. Forschung+Bildung), Satz gesplittet
- Step 5 (reveal): 4→5 Karten, "Begleitung Sterbender" → "Forschung" + "Bildung"
- Step 6 (mc): 2. isCorrect entfernt, Füllsatz entfernt
- Steps 5, 9, 15: track "basis" → "vertiefung" (Track-Korrektur)
- Step 8 C1: Langer Satz gesplittet
- Step 22 C1: Füllsatz entfernt

---

## Durchlauf 2 (2026-03-30) — FAIL (keine K.O.-Verletzungen)

**Track:** 68% basis / 32% vertiefung — PASS ✓

**FAIL-Punkte:**

### [B2] AMBOSS-Prinzip
Step 4 (text, ICN-Schlüsselaufgaben) → Step 6 (mc): direktes 1:1-Abtesten des unmittelbar vorher Gelesenen.
- **Fix:** Step 6 auf Anwendungsfrage umgestellt — Yasemin-Kontext "Was macht Pflege vs. was macht der Arzt?"

### [E3] Fehler-Wiederholungen nicht dokumentiert
Feld `fehlerWiederholung` existiert nicht in `_types.ts` — Pipeline-Lücke.
- **Status:** Bekannte Lücke, kein K.O., wird in späterem Pipeline-Sprint adressiert.

### [G3] Fragetext identisch mit Title (Step 21)
title="Wie sicher bist du?" vs. fragetext="Bewerte jede Aussage: Wie sicher bist du?"
- **Fix:** title → "Drei Kernthemen im Check"

### [I3] Doppel-Erklärungen
Vorbehaltene Tätigkeiten in Steps 8, 9, 10, 16, 18, 21 wiederholt.
- **Fix:** Step 10 truefalse explanation für Statement 2 auf 1 Satz gekürzt.

---

## Durchlauf 3 (2026-03-30) — PASS ✓

**Alle 43 Kriterien bestanden. Keine K.O.-Verletzungen.**

Track: 68% basis / 32% vertiefung — im Zielkorridor.

Bekannte Pipeline-Lücke (kein FAIL): `fehlerWiederholungen`-Feld fehlt in `_types.ts` — für nächsten Pipeline-Sprint vormerken.
