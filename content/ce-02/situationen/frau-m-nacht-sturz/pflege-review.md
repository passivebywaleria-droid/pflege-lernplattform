# Pflege-Review: frau-m-nacht-sturz

**Geprueft:** 2026-04-29
**Geprueft von:** pflege-validator (mode=code, Agent-Pass 2)
**Files:** 7 (patient.ts + 6 Phasen)
**Step-Anzahl:** 42 (11 inlineWissen, 6 text, 3 dialog, 3 branching, 3 freetext, 2 mc, 2 matching, 2 categorize, 2 sorting, 1 truefalse, 1 sequencing, 1 selfrating, 1 pflegewagen, 1 matrix, 1 highlight, 1 crowdPoll, 1 summary)
**Kontext:** Seit letzter Pruefung (2026-04-26) erweitert um 11 Inline-Wissens-Bausteine, Transitionen, Drag-and-Drop (Pflegewagen), Matrix-Step, crowdPoll.

## Findings

### F-01 (HOCH): Paragraphen-Inkonsistenz bei Fixierung/Bettgitter

- **Stelle:** phase-planen.ts, Step `plan-02b-fixierung-recht` (inlineWissen) vs. Step `plan-03-fixierung-nein` (branching)
- **Problem:** Der Inline-Wissen-Baustein referenziert korrekt **ss 1831 BGB** (Neufassung ab 01.01.2023, ersetzt ss 1906a). Der direkt folgende Branching-Step zitiert aber in `quellen`, `glossarBegriffe` und allen 3 Feedback-Texten noch den **alten ss 1906a BGB**. Schueler lesen im Wissensbaustein "ss 1831 BGB" und im naechsten Step "ss 1906a BGB" -- das erzeugt Verwirrung und ist juristisch inkorrekt (ss 1906a existiert seit 2023 nicht mehr in dieser Form).
- **Standard-Verweis:** Betreuungsrechtsreform 2023, ss 1831 BGB (neu) ersetzt ss 1906a BGB (alt)
- **Empfehlung:** In `plan-03-fixierung-nein` alle Vorkommen von "ss 1906a BGB" durch "ss 1831 BGB" ersetzen -- in `quellen`, `glossarBegriffe` (beide C1 und B1), und saemtlichen `feedback`/`feedbackB1`-Texten der 3 Branching-Optionen.

### F-02 (HOCH): NRS-Werte inkonsistent zwischen Phasen

- **Stelle:** phase-informieren.ts Dialog Phase 2 (info-04) vs. phase-beobachten.ts Kontext vs. phase-durchfuehren.ts
- **Problem:** Frau M. berichtet in Phase 1 Dialog **NRS 6** ("eine Sechs vielleicht"). Der Phasenkontext von Phase 2 nennt aber **NRS 4**. Phase 3 Kontext sagt **NRS 4**. Phase 4 Kontext sagt **NRS 5** (beim Transfer). Phase 5 spricht von **NRS 8 als Ausgangswert** ("von 8 vorher"). Kein Moment im gesamten Verlauf dokumentiert NRS 8 -- der hoechste belegte Wert ist 6 (Phase 1 Dialog).
- **Standard-Verweis:** Cross-Step-Konsistenz (pflege-konformitaet.md), DNQP Schmerzmanagement 2020
- **Empfehlung:** (a) Einheitlichen Verlauf festlegen, z.B.: NRS 6 (Phase 1, Dialog) -> NRS 4 (Phase 2-3, in Ruhe) -> NRS 5 (Phase 4, beim Transfer) -> NRS 2 (Phase 5, naechster Morgen). (b) Den Wert "NRS 8" in Phase 5 (eval-00b-reassessment) korrigieren auf NRS 6 (oder den Dialog-Wert in Phase 1 auf NRS 8 aendern und alle Folge-Phasen nachziehen). (c) Narrativ erklaeren, warum NRS sich aendert (Ruhe vs. Bewegung).

### F-03 (MITTEL): Katarakt "beidseits" vs. "rechts"

- **Stelle:** patient.ts (diagnosen: "Leichte Katarakt beidseits") vs. phase-planen.ts Kontext ("Katarakt rechts")
- **Problem:** Patient-Daten sagen "beidseits", Phase-3-Kontext sagt "rechts". Cross-Step-Inkonsistenz bei Patient-Diagnosen.
- **Empfehlung:** Phase-3-Kontext auf "beidseits" korrigieren (patient.ts ist Wahrheitsquelle).

### F-04 (MITTEL): TrueFalse-Statement 2 (Orthostase) widerspruechlich zur eigenen Erklaerung

- **Stelle:** phase-beobachten.ts, Step `beob-05-orthostase-test`, TrueFalse-Karte 2
- **Problem:** Statement: "Ein Blutdruckabfall von 10/5 mmHg beim Aufstehen ist normal und kein Hinweis auf Orthostase." isTrue: false. Erklaerung sagt dann aber: "10/5 liegt unter der Schwelle" -- was technisch bestaetigt, dass 10/5 tatsaechlich unter der Diagnoseschwelle liegt und somit kein formaler Orthostase-Befund ist. Die Aussage "in Kombination mit Symptomen kann es auch bei kleinem Abfall relevant sein" macht die TrueFalse-Logik mehrdeutig. TrueFalse-Pflicht (pflege-konformitaet.md): "Aussagen unzweideutig -- nicht 'ist meistens so'."
- **Standard-Verweis:** AAS-Konsensus 2011 (Schwelle: syst. 20 mmHg oder diast. 10 mmHg)
- **Empfehlung:** Entweder Statement umformulieren zu klarer Schwelle ("Ein systolischer Abfall von 15 mmHg beim Aufstehen ist orthostatisch relevant") mit isTrue: false, oder die Erklaerung schaerfen ohne den relativierenden Nachsatz.

### F-05 (MITTEL): Zolpidem-Dosis 10 mg ohne Alters-Anpassungshinweis

- **Stelle:** phase-beobachten.ts, Step `beob-02-zolpidem-erklaert` + Highlight-Segment
- **Problem:** Zolpidem 10 mg wird als verordnete Dosis genannt. Die PRISCUS-2.0-Liste empfiehlt bei aelteren Menschen maximal 5 mg (wenn ueberhaupt). Der Text erklaert korrekt warum Zolpidem problematisch ist, erwaehnt aber nicht, dass die verordnete 10 mg bereits die **doppelte** maximal empfohlene Dosis ist. Das ist didaktisch eine verpasste Chance -- der Schueler koennte lernen: "Nicht nur welches Medikament, auch welche Dosis."
- **Standard-Verweis:** PRISCUS 2.0 (2023): Zolpidem max. 5 mg bei >= 65 Jahren
- **Empfehlung:** In einem der Erklaertexte (z.B. Highlight-Reason oder Zolpidem-Text) ergaenzen: "Zudem: 10 mg ist bereits die doppelte empfohlene Maximaldosis fuer >= 65-Jaehrige nach PRISCUS 2.0."

### F-06 (NIEDRIG): InlineWissen Schellong-Test -- Schritt 1 sagt "5-10 Min flach liegen"

- **Stelle:** phase-beobachten.ts, Step `beob-04b-schellong-test`
- **Problem:** Der AAS-Konsensus 2011 empfiehlt "mindestens 5 Min supine rest". Der Text gibt "5-10 Min" an -- korrekt als Spanne, aber im Pflegealltag (03:15 nachts, Notfall) ist "10 Min flach liegen lassen" unrealistisch. Der TrueFalse-Step danach testet nicht diese Spanne, also kein didaktischer Schaden, aber der Schein-Widerspruch koennte irritieren.
- **Empfehlung:** Auf "mindestens 5 Min" vereinheitlichen (praeziser, praxisnaeh).

### F-07 (NIEDRIG): Summary-Step referenziert "Cochrane 2023: -24 % Sturzrate"

- **Stelle:** phase-dokumentieren.ts, Step `dok-03-session-summary`, kernaussagen[5]
- **Problem:** Quelle "Cochrane 2023" fuer "-24 % Sturzrate bei interprofessioneller Sturzprophylaxe" ist nicht in `quellen` des Steps aufgefuehrt (nur "DNQP 2022"). Die Zahl klingt plausibel (Cochrane Gillespie et al. 2012 berichtet RR 0.69-0.76 fuer multifaktorielle Interventionen), aber die spezifische Angabe "Cochrane 2023: -24 %" muesste mit exakter Referenz belegt sein.
- **Empfehlung:** Entweder die korrekte Cochrane-Referenz in quellen ergaenzen oder die Angabe auf das belegte "Cochrane Gillespie 2012, aktualisiert 2023" praezisieren.

## Cross-Step-Probleme

1. **NRS-Verlauf** (F-02): Hauptproblem. 6 -> 4 -> 5 -> 2 waere plausibel, aber Phase 5 behauptet "von 8 vorher" -- das stimmt mit keinem vorherigen Step ueberein.
2. **Paragraphen-Widerspruch** (F-01): Inline-Wissen sagt ss 1831, Branching sagt ss 1906a -- direkt hintereinander.
3. **Katarakt beidseits/rechts** (F-03): Minor, aber Patient-Daten muessen konsistent sein.
4. **Pflegewagen ↔ MC Hueftprotektor**: Vorheriger Review-Fix (F-10 alt) korrekt umgesetzt -- Pflegewagen markiert Hueftprotektor als "weglegen", MC erklaert warum. Konsistenz jetzt gegeben.

## InlineWissen-Bausteine: Fachliche Pruefung

| Phase | Step | Thema | Verdict |
|-------|------|-------|---------|
| 1 | info-01b | Sturz-Definition WHO/DNQP | OK -- Definition korrekt, Beinahe-Sturz richtig, 2-3x Risiko belegt |
| 1 | info-03b | Risikofaktoren-Spektrum | OK -- intrinsisch/extrinsisch korrekt, Faktorenbündelung richtig |
| 1 | info-05b | NRS-Schmerzskala | OK -- Schwellenwerte korrekt, KUSS/BESD/PAINAD fuer Sonderfaelle |
| 2 | beob-01 | PIM/PRISCUS | OK -- PIM-Definition korrekt, Klassen vollstaendig |
| 2 | beob-04b | Schellong-Test | OK -- Ablauf AAS-konform, Schwellen korrekt (siehe F-06 minor) |
| 3 | plan-00b | DNQP 6 Kriterien | OK -- alle 6 korrekt, Reihenfolge stimmt |
| 3 | plan-02b | Fixierung/ss 1831 BGB | OK -- juristisch korrekt (Inline-Teil), ss 34 StGB Notfall-Klausel korrekt |
| 3 | plan-04b | SBAR | OK -- alle 4 Elemente korrekt, Zeitangaben praxisnah |
| 4 | dur-00b | Kinaesthetik Transfer | OK -- Hatch/Maietta korrekt, Anti-Patterns richtig, Beckensicherung statt Achselgriff |
| 5 | eval-00b | Re-Assessment NRS | OK mit Einschraenkung: "NRS 8 vorher" ist inkonsistent (F-02) |
| 6 | dok-00b | Sturzprotokoll vs. Pflegebericht | OK -- 9 Pflichtfelder korrekt, ss 630f BGB richtig, Stil-Hinweise korrekt |

**Faustregel-Aussagen:** Alle 11 Faustregeln sind fachlich korrekt und verstaendlich formuliert.

**Spektrum-Patienten:** Konsistent ueber alle 11 Bausteine. Bauer (Demenz), Yilmaz (Hueft-TEP), Kovac (ambulant), Schmidt (Adipositas), Petrov (Schlaganfall), Lukas (Paediatrie) -- Varianz gut, keine Fehler in Kurzcharakterisierungen.

## Zusammenfassung

- **2 Findings HOCH** (ss 1831/1906a-Widerspruch + NRS-Inkonsistenz)
- **3 Findings MITTEL** (Katarakt beidseits/rechts, TrueFalse mehrdeutig, Zolpidem-Dosis-Hinweis fehlt)
- **2 Findings NIEDRIG** (Schellong-Zeitspanne, Cochrane-Referenz unbelegt)
- **11 Inline-Wissen-Bausteine:** Fachlich korrekt, gut eingebettet, Spektrum-Diversitaet stark
- **Vorherige Findings (Pass 1):** Alle gefixt, keine Regressionen erkannt (Licht, Kinaesthetik, Schmerz-Bagatellisierung, Hueftprotektor-Cross-Step)
- **Positiv:** SBAR durchgehend korrekt, Kinaesthetik-Anti-Patterns sauber, Sandwich-Feedback konsistent in B1, Dialog-Optionen realistisch (keine Karikaturen), Pflegewagen-Step fachlich korrekt, Fixierungs-Wissensbaustein juristisch praezise

**K.O.-Verdikt: FAIL** (2 HOCH-Findings ungeloest: ss 1831/1906a-Widerspruch und NRS-Cross-Step-Inkonsistenz)

*Nach Fix der 2 HOCH-Findings: Re-Review empfohlen, dann voraussichtlich PASS.*
