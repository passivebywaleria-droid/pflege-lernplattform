# Text-Audit: ls-capstone-am-boden (CE-06) — 2026-07-19

> Voll-Audit aller Texte (Auftrag Waleria). Geprüft: 5 Phasen / 10 Steps,
> ~150 Textfelder (C1+B1) + patient.ts + situationen.ts-Eintrag. Wortwörtlich
> gegen Kernfakten (notfallassessment, reanimation-bls, neurologische-
> akutsituationen) + pflege-heute-volltext + icare-pflege-3aufl +
> icare-krankheitslehre. Klinik-Panel-Report berücksichtigt (N1 behoben,
> N2 → F-1). Prüfer: pflege-validator-Agent (audit-capstone).

**Ergebnis: 0 HOCH · 1 MITTEL · 2 NIEDRIG — K.O.-Verdikt PASS.**

Bestanden u. a.: BZ 108 „normal" korrekt und konsistent · Karotispuls ≤10 s
zeitgleich · Erstblick (Reaktion/Atmung → 3 Wege) · Schnappatmung ≠ Atmung ·
„Beine hoch bei kurzer Ohnmacht" (pflege-heute Z. 15711) · „nicht festhalten"
(icare-krankheitslehre Z. 83239) · Beißkeil obsolet · Wagner-/Ríos-/Novak-Recaps
deckungsgleich mit den Quell-Situationen (Halbwissen-Linse) · kein B1-Drift ·
Distraktoren korrekt korrektiv.

## Findings

### F-1 (MITTEL) — Krampfanfall-Lehrtext ohne „Arzt rufen" ✅ GEFIXT
erk-02b kerntext + karteikarte lehrten schützen/nichts in den Mund/Uhrzeit —
ohne Arzt-Rufen und ohne die 5-Min-Eskalation, die Spektrum-Zeile und erm-03
bereits trugen (interne Inkonsistenz; „Uhrzeit merken" verlor ohne
Eskalationsregel den Zweck). Beleg verbatim: icare-pflege-3aufl Z. 202580
„unverzüglich Arzt rufen, Betroffenen nicht alleine lassen, vor Verletzung
schützen" + F-12 „Dauert der Anfall länger als 5 Minuten…". Fix: kerntext (C1+B1)
+ Karteikarte (C1+B1) um „unverzüglich Arzt rufen; >5 Min = Status epilepticus"
ergänzt.

### F-2 (NIEDRIG) — F-12 fehlte in kernfaktId ✅ GEFIXT
erm-03 und erk-02b lehren die 5-Min-Status-Schwelle (= F-12), referenzierten sie
aber nicht. F-12 in beide kernfaktId-Arrays aufgenommen (Traceability).

### F-3 (NIEDRIG) — ueb-01 body „Ausschluss … zuerst" irreführend ✅ GEFIXT
Der systematische Ausschluss sitzt im Assessment (3. SBAR-Element), nicht
„zuerst". Umformuliert: „…bringt das Entscheidende zuerst und macht den
systematischen Ausschluss explizit."

## Fix-Status (2026-07-19, Haupt-Session)
Alle 3 Findings gefixt (Belege vor dem Fix selbst wortwörtlich nachgelesen).
