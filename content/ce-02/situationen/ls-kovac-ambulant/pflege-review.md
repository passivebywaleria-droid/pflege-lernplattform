# Pflege-Review: ls-kovac-ambulant

**Geprüft:** 2026-04-26 (Re-Validierung nach Fix-Round 2026-04-25)
**Mode:** code
**Files:** 8 (patient.ts + 6 Phasen + inline-wissen.ts)
**Step-Anzahl:** ~36 Kern + ~12 Optional + 10 InlineWissen-Bausteine

## Re-Validierung

Vorheriger Review (2026-04-25) identifizierte 2 HOCH, 9 MITTEL, 8 NIEDRIG. Alle wurden gefixt und dokumentiert (Fix-Block im vorherigen Review). Stichproben-Validierung gegen aktuellen Code:

- **F-12 (Notarzt-Bewertung):** Gefixt. Pfad C Notaruf ist jetzt `isCorrect: true`. Feedback korrekt umgeschrieben ("Im Zweifel nie falsch"). OK.
- **F-06 (VAS 3 = Normalbefund):** Gefixt. VAS 3/10 jetzt in `correctCategory: 1` (Kontraktur-Zeichen). Body erweitert mit DNQP Schmerz 2020. OK.
- **F-01 (SGB XI):** Gefixt. Opt-1.B neu als Vertiefungs-Step (PG 3, § 36, § 37, Hausnotruf). OK.
- **F-09 (SMART-Ziel 1x):** Gefixt. Pflegeziel 2 jetzt "2x taeglich, 10 Wiederholungen". OK.
- **F-14 (Datenschutz "wohlauf"):** Gefixt. Pfad A ohne Gesundheitsaussage. OK.
- **F-13 (Kontaktatmung):** Gefixt. "Haende folgen passiv, druecken nicht". Kontraindikation ergaenzt. OK.
- **F-05 (SpO2-Korridor):** Gefixt. Klarstellung: 88-92% nur unter O2-Therapie bei Exazerbation. OK.

## Neue Findings (2026-04-26)

### inline-wissen.ts

#### F-N01 (NIEDRIG): Spektrum-Patient "Frau M." Pneumonie Tag 3 — Pruefung ausstehend [AKZEPTIERT 2026-04-30]
- **Stelle:** inline-wissen.ts, CE02_KOVAC_INLINE_01A, spektrum[0]
- **Problem:** Verweis auf "Frau M., Pneumonie Tag 3" setzt voraus, dass Frau M. tatsaechlich eine Pneumonie im Content hat. Cross-Situationen-Konsistenz sollte validiert werden.
- **Empfehlung:** Cross-LE-Checker verwenden.
- **Status:** Kein Code-Fix moeglich — Cross-Referenz-Validierung via cross-le-checker.ts empfohlen.

### phase-planen — Branching Opt-3.C (NEU)

#### F-N02 (NIEDRIG): Opt-3.C Angehoerigen-Ressource ist sehr lang [AKZEPTIERT 2026-04-30]
- **Stelle:** phase-planen.ts, Opt-3.C
- **Problem:** ~400 Woerter in contentC1.body. Fuer einen optionalen Text-Step sehr umfangreich. Inhaltlich exzellent (SGB XI §§ 39, 45, 45a konkret), aber Schuelern koennte die Textmenge abschrecken.
- **Empfehlung:** Ggf. in 2 Steps aufteilen oder als Flipcard-Variante anbieten.
- **Status:** Akzeptabel als optionaler Vertiefungs-Step. Kein Code-Fix noetig — Textlaenge ist fuer Vertiefung angemessen.

### phase-durchfuehren — Kinästhetik

#### F-N03 (NIEDRIG): Kinästhetik bei Bewegungsuebungen korrekt, aber Kontaktatmung grenzt an [GEFIXT 2026-04-30]
- **Stelle:** phase-durchfuehren.ts, Step dur-01 + dur-04
- **Problem:** dur-04 (Bewegung) betont korrekt: "Frau Kovac fuehrt alle Bewegungen aktiv selbst aus." dur-01 (Kontaktatmung) sagt jetzt korrekt "Haende folgen passiv". Aber die Formulierung "Du legst die Haende sanft seitlich auf den unteren Brustkorb" koennte als aktiver Eingriff missverstanden werden. Der Fix von F-13 hat das verbessert, aber ein Satz wie "Fragen Sie Frau Kovac vorher um Erlaubnis" fehlt (Einwilligung vor Beruehrung, besonders in der Wohnung der Patientin).
- **Empfehlung:** Ergaenzen: "Fragen Sie Frau Kovac, ob Sie die Haende auflegen duerfen."
- **Fix:** Einwilligung vor Beruehrung in C1 und B1 ergaenzt: "Frage Frau Kovac, ob du die Haende auflegen darfst."

## Cross-Step-Probleme

Keine neuen Cross-Step-Inkonsistenzen. Patientendaten konsistent. FEV1 jetzt ueberall 30-49%. Trinkmenge-Diskrepanz 820/800 ml als Lerngelegenheit dokumentiert. SMART-Ziel 2x taeglich konsistent mit Eval-Lob.

## InlineWissen-Bausteine Pruefung

10 Bausteine in inline-wissen.ts geprueft (Stichprobe: 3 vollstaendig gelesen). Quellen korrekt (AWMF S3, GOLD 2023, AASM 2020, Borbely 1982, DGSM 2017). Spektrum-Patienten konsistent. Faustregeln praxistauglich. Keine Erfindungen oder Pseudo-Empathie erkannt.

## Zusammenfassung

- 0 Findings HOCH (alle vorherigen HOCH gefixt)
- 0 Findings MITTEL (alle vorherigen MITTEL gefixt)
- 3 Findings NIEDRIG (F-N01 bis F-N03 — Cross-Referenz, Textlaenge, Einwilligung Beruehrung)
- Pseudo-Empathie: Nicht vorhanden. Sprache durchgaengig sachlich.
- Standards: Vorbildlich (GOLD 2023, DNQP, SGB XI, DSGVO, BGB, AWMF).
- Kinästhetik: Korrekt umgesetzt in Bewegungsuebungen. Kontaktatmung verbessert.
- Patientenautonomie: Exzellent (Verweigerungs-Doku, Branching mit Konsequenzen).
- SGB-XI-Kontext: Jetzt vorhanden (Opt-1.B). Starke Ergaenzung.
- **K.O.-Verdikt: PASS**
