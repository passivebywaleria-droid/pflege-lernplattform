# Pflege-Review: frau-m-nacht-sturz

**Geprüft:** 2026-04-26
**Geprüft von:** pflege-validator (Agent-Pass 1)
**Files:** 7 (6 Phasen + patient.ts)
**Step-Anzahl:** ~30 Steps verteilt auf 6 Phasen
**Status:** Findings gefixt am 2026-04-26 (Commit `909a6f2`)

## Findings (alle gefixt)

### info-04-zimmer-betreten (Dialog)

#### F-01 (HOCH): „Hände gefaltet im Schoß" + fehlendes NRS-Assessment
- **Problem:** Wirkte arrangiert; keine Schmerz-Skala-Frage als Pflichtschritt vor Bewegung (DNQP Schmerz)
- **Fix:** body realistisch („eine Hand auf der Hüfte, andere stützt am Boden ab"); NRS-Frage in Phase 2 Option A integriert

### info-03-erste-prioritaet (MC)

#### F-02 (MITTEL): Lichtwiderspruch
- **Problem:** MC-Feedback sagt „gedämpft", Dialog body sagt „hell genug" — DNQP Sturz braucht volle Sicht
- **Fix:** MC-Feedback umformuliert auf „voll einschalten, aber nicht blendend"

### dur-04-dialog-mobilisation (Dialog)

#### F-05 (HOCH): „Ich führe nur" — kinästhetisch falsch
- **Problem:** Kinästhetik nach Hatch/Maietta = Patient bewegt sich selbst, Pflege begleitet
- **Fix:** „Sie machen die Bewegung, ich begleite/sichere. Sie sagen das Tempo."

#### F-06 (HOCH): „3 Min Wartezeit (Orthostase-Prävention)"
- **Problem:** Kein Schellong-Test ohne RR-Messung
- **Fix:** Konkreter Schellong: RR 138/82 liegen → ≥1 Min sitzen → RR 132/80 sitzen → erst dann Aufstehen

#### F-07 (MITTEL): Distraktor „Ich ziehe Sie hoch"
- **Problem:** Zu plump, würde Schülerin nie sagen
- **Fix:** Realistischer Anfänger-Fehler „Unter den Achseln greifen" (echte Skills-Lab-Falle)

#### F-08 (MITTEL): Phase 3 Score-2-Antwort lehrhafter
- **Problem:** Empfehlung statt konkreter Reaktionsvorschlag
- **Fix:** Explizit 2-Teile-Reaktion („1. nicht umständlich, 2. Realität benennen")

#### F-09 (NIEDRIG): „Frau Keller schützt die Hüfte"
- **Problem:** Vage
- **Fix:** „Stützt das linke Becken und kontrolliert die Hüfte"

### Phase-durchfuehren Kontext

#### F-03 (MITTEL): „NRS 5, ok, im Rahmen"
- **Problem:** Bagatellisiert moderaten Schmerz (DNQP Schmerz)
- **Fix:** „NRS 5 ist nicht wenig — du wirst das dem Arzt sagen und nach Bedarfsanalgesie fragen"

### Cross-Step (dur-02b Pflegewagen ↔ dur-07 MC)

#### F-10 (MITTEL): Hüftprotektor-Inkonsistenz
- **Problem:** Pflegewagen markiert Hüftprotektor als „korrekt", MC dur-07 als „im Akut-Setting eher nicht"
- **Fix:** Im Pflegewagen jetzt „weglegen"-Zone mit Verweis auf späteren MC-Step

### Phase 2 info-04 Option C

#### F-04 (NIEDRIG): Score-Abstufung Schwindel-Frage
- **Fix:** Feedback ergänzt — Schwindel-Frage ist gleich wichtig, nur Reihenfolge suboptimal

## Cross-Step-Probleme — alle gelöst

## Zusammenfassung

- 3 HOCH ✅ alle gefixt
- 4 MITTEL ✅ alle gefixt
- 3 NIEDRIG ✅ alle gefixt

**Allgemeine Beobachtungen (vor Fix):**
1. Wiederkehrender Bias zu romantisierender Pseudo-Empathie
2. Kinästhetik-Begriff verwendet, aber widersprüchlich umgesetzt
3. Schmerz-Assessment fehlte als expliziter Schritt vor Bewegung
4. Sandwich-Feedback inkonsistent (B1 nachträglich)

**Positive Beobachtungen:**
- SBAR-Struktur korrekt
- Würde-Aspekt (Bettpfanne-Distraktor) didaktisch stark
- 2-Personen-Transfer-Konzept richtig
- Post-Fall-Syndrom-Bezug richtig

**K.O.-Verdikt:** PASS (alle HOCH-Findings gefixt 2026-04-26)
