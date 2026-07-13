# Pflege-Review: ls-sander-verbruehung

**Geprüft:** 2026-07-13
**Files:** 2 (phases.ts mit 5 Phasen + patient.ts)
**Step-Anzahl:** 11 (5 MC, 1 Branching, 1 TrueFalse, 1 Reflection, 3 inlineWissen-Tabs)

## Vor-Checks (mechanisiert)
- `step-grounding-check ce-06` → **PASS** für ls-sander-verbruehung (keine Dangling-Refs)
- `klinik-panel ce-06` → **PASS** (0 Befunde über alle 4 Lenses)
- `pflege-anti-pattern-check` → **0 Treffer in den Sander-Dateien** (die 32 Repo-Treffer stammen sämtlich aus CE-02, keiner aus dieser Situation)

## Findings

### erkennen — ce06-sander-erk-01 (mc)
Sauber. Score-3-Option = Blasen → mind. 2. Grad ernst nehmen (F-02). Distraktor „Schmerz = sicherstes Zeichen Lebensgefahr" korrekt als Trugschluss widerlegt (Schmerzrezeptoren bei 3. Grad zerstört). Distraktor „Blasen aufstechen" doppelt widerlegt (2. Grad + Infektionsschutz, F-05). explanation + explanationB1 für jede Option gefüllt. Keine Findings.

### erkennen — ce06-sander-erk-01b-schwere (inlineWissen Tab A)
Kerntext deckt sich vollständig mit F-01/F-02/F-03: Grade 1–3, Handfläche ≈ 1 %, Neuner-Regel, Schock ab großer Fläche, Schmerz-kein-Maßstab. Spektrum sauber gestaffelt (1./2./3. Grad), Frau Sander korrekt als 2. Grad verankert. Karteikarte fachlich korrekt. „du"/Imperativ durchgehend, kein Antwort-Step. Keine Findings.

### erkennen — ce06-sander-erk-02 (mc)
Score-3: Handfläche ≈ 1 %, Schockschwelle 10–15 % (F-03), trotzdem ärztliche Versorgung. Distraktoren („< 10 % immer harmlos" / „bei jeder Verbrennung Notarzt/Schock") plausibel und korrekt widerlegt. Siehe aber F-02 (unten) zur Grounding-Präzision des „2. Grad → Arzt".

### alarmieren — ce06-sander-ala-01 (mc)

#### F-01 (MITTEL): Claim „Zweitgradige Verbrennungen brauchen ärztliche Versorgung" nicht wörtlich vom zitierten Kernfakt F-06 gedeckt
- **Stelle:** phases.ts Z. 246–251 (Score-3-Option + explanation), `kernfaktId: ["F-06"]`
- **Problem:** Der zitierte F-06 groundet ausschließlich zwei Schwellen: Klinik ab **> 10 % KOF** und spezialisiertes Zentrum bei **Gesicht/Hände/Füße/Genital**. Frau Sander (~1–2 % am Unterarm/Oberschenkel) erfüllt keine der beiden. Die im Content generalisierte Aussage „Zweitgradige Verbrennungen/Verbrühungen brauchen ärztliche Versorgung" ist fachlich Standard-Erste-Hilfe-Wissen, steht aber so **nicht in F-01..F-13**. Das ist keine Erfindung eines gefährlichen Ratschlags, aber eine Grounding-Präzisions-Lücke gegenüber der strengen „kein ungegroundeter Claim"-Regel.
- **Standard-Verweis:** F-06 (Kernfakten thermisch-chemische-notfaelle); Pflege heute Kap. 14.6.5.
- **Empfehlung:** Entweder (a) einen Kernfakt ergänzen, der „2.-gradige Wunden werden ärztlich beurteilt/versorgt (offene Wunde, Infektions-/Schmerzrisiko)" verbatim belegt, ODER (b) die explanation an F-06 anlehnen, z. B.: *„Klinikpflicht besteht ab > 10 % KOF und bei Gesicht/Händen/Füßen/Genital (F-06). Frau Sander liegt darunter — aber eine offene, blasenbildende 2.-Grad-Wunde bei einer allein lebenden 74-Jährigen mit starken Schmerzen wird als klinische Einzelfallentscheidung zeitnah ärztlich versorgt."* Damit bleibt die Empfehlung erhalten und die Grenze zwischen belegter Norm und Einzelfallurteil transparent.

#### F-02 (NIEDRIG): Triage-Stufe „Rettungsdienst" bei ~1–2 % 2.-Grad-Wunde diskussionswürdig
- **Stelle:** phases.ts Z. 246 (Score-3: „Rettungsdienst / Notaufnahme"), Konsistenz mit ueb-01 (Rettungsdienst trifft ein)
- **Problem:** Der Content lehrt in erk-02/ala-01 korrekt „kleine Fläche, Schock droht erst > 10–15 %", eskaliert dann aber auf Rettungsdienst. Für eine handflächengroße 2.-Grad-Wunde ist der 112-Rettungsdienst realistisch eher Über-Triage; ambulant käme auch Hausarzt/KV-Notdienst/organisierter Transport in Frage. Vertretbar wegen Alter + Alleinsein + starke Schmerzen + Transportunfähigkeit, aber die interne Spannung (kleine Fläche ↔ Rettungsdienst) sollte bewusst sein.
- **Empfehlung:** Die „oder Notaufnahme"-Alternative ist gut; ggf. in der explanation ergänzen, warum hier der Rettungsdienst gerechtfertigt ist (Schmerz/Analgesie-Bedarf, keine sichere Selbst-Transportoption der allein lebenden Patientin) — dann ist die Triage-Wahl explizit begründet statt implizit.

### erstmassnahmen — ce06-sander-erm-00b-kuehlen (inlineWissen Tab B)
Vollständig gegroundet: lauwarmes Wasser ~20 °C / ~10 Min (F-04), Auskühlungsgefahr/Wärmeerhalt (F-04), keine Salben/Puder/Sprays/Hausmittel (F-05), Blasen zu (F-05), festklebende Kleidung nicht abreißen (F-05), steril abdecken (F-05). Wiederbegegnung→Lehmann (sterile Kompresse statt unsteriles Material) fachlich stimmig und didaktisch sinnvoll verknüpft. Keine Findings.

### erstmassnahmen — ce06-sander-erm-01 (branching)
Score-3-Pfad: Nachbarin freundlich-klar stoppen, lauwarm kühlen, steril abdecken, zudecken, Schmerz/Kreislauf beobachten (F-04/F-05). Alle 3 Distraktoren sind durchgehend als FALSCH markiert (`isCorrect: false`) und korrekt widerlegt:
- Mehl aufstreuen → hält Hitze, verklebt, Infektion (F-05) ✓
- Eiskaltes Wasser/Eiswürfel großflächig → Auskühlung, Prognoseverschlechterung (F-04) ✓
- Blasen aufstechen + Brandsalbe → Infektion + keine Salbe (F-05) ✓

#### F-03 (NIEDRIG): Sandwich-Abschluss in Distraktor-Feedbacks ohne „ermutigen"-Teil
- **Stelle:** phases.ts Z. 393/401/409 (feedback der 3 falschen Branching-Optionen)
- **Problem:** Die Feedbacks würdigen die Absicht („Der Wunsch zu helfen ist verständlich" / „Der Gedanke stimmt hier nicht") und korrigieren fachlich präzise, enden aber jeweils mit dem Korrektiv-Satz ohne ermutigenden Abschluss (Sandwich Stufe 3). Fachlich völlig korrekt, nur didaktischer Feinschliff.
- **Empfehlung:** Optional je einen ermutigenden Halbsatz anfügen, z. B. „…kühlen und steril abdecken — merk dir die Faustregel ‚auf die Brandwunde kommt nichts drauf', dann liegst du sicher richtig." Kein Muss.

### erstmassnahmen — ce06-sander-erm-02 (truefalse)
Beide Karten fachlich korrekt als `isTrue: false` (Hausmittel-Mythos, Blasen aufstechen), Erklärungen mit F-05-Bezug.

#### F-04 (NIEDRIG): Beide TrueFalse-Aussagen sind „falsch" — Rate-Muster
- **Stelle:** phases.ts Z. 441–455
- **Problem:** Bei 2 Karten, beide `false`, erreicht ein Schüler mit reiner „alles-falsch"-Strategie 100 %. Rein didaktischer Hinweis, keine fachliche Frage; beide Aussagen SIND ja Mythen, die Widerlegung ist korrekt.
- **Empfehlung:** Optional eine dritte, wahre Karte ergänzen (z. B. „Brandwunden werden steril oder sauber abgedeckt" = wahr, F-05), um Antwort-Streuung zu erzeugen. Kein K.O.

### uebergeben — ce06-sander-ueb-01 (mc)
SBAR-Struktur vollständig und priorisiert (S/B/A/R sauber getrennt), Werte konsistent zur Patientin (74, Hypertonie, 2. Grad, wenige Prozent, ~15 Min). Distraktoren („alles unter Kontrolle" / Nachbarin-Anekdote) plausibel und korrekt widerlegt. `kernfaktId: ["F-07"]` löst korrekt gegen `notfallassessment`/F-07 (SBAR, Leonard 2004) auf — nicht gegen den gleichnamigen thermisch-F-07 (Inhalationstrauma); die themaPrimaer-Zuordnung ist im Kommentar dokumentiert und step-grounding-check bestätigt (kein Dangling). Keine Findings.

### reflektieren — ce06-sander-ref-00b-spektrum (inlineWissen Tab C, Krone)
Vier verwandte Notfälle sauber interleavt und je gegroundet: Verätzung Haut — Kleider weg + fließend spülen, eigene Finger schützen (F-08); Verätzung Mund — ~200 ml kleine Schlucke, NIE Erbrechen (F-09); Hitzschlag/Sonnenstich (F-10/F-11); Hypothermie < 35 °C / < 30 °C lebensbedrohlich (F-12), passiv langsam wärmen, KEINE heiße Wärmflasche/Wärmestrahler (F-13, Blutdruckabfall durch Gefäßerweiterung). Faustregel + Karteikarte konsistent. Keine Findings.

### reflektieren — ce06-sander-ref-00c-veraetzung (mc)
Verätzung-Mund-Transfer (Rohrreiniger/Lauge). Score-3: kleine Schlucke ~200 ml, NIE Erbrechen, Giftnotruf (F-09). Distraktoren „Finger in den Hals" und „ganzer Liter" beide korrekt als gefährlich widerlegt (Erbrechen verätzt Speiseröhre erneut; große Menge provoziert Erbrechen). Vorbildlich gegroundet. Keine Findings.

### reflektieren — ce06-sander-ref-00d-hitze-kaelte (mc)
Hypothermie-Transfer (32 °C, Kollegin will heiße Wärmflasche). Score-3: passiv/langsam wärmen, keine Wärmflasche, max ~1 °C/h, engmaschig überwachen (F-12/F-13). Distraktoren „schneller/heißer + heißes Vollbad" und „von selbst regulieren" korrekt widerlegt.

#### F-05 (NIEDRIG): „stark unterkühlt (32 °C)" + „intensivmedizinisch" leicht über Kernfakt hinaus
- **Stelle:** phases.ts Z. 680/711
- **Problem:** 32 °C ist fachlich moderate (nicht „starke") Hypothermie; F-12 setzt die Lebensgefahr-Grenze < 30 °C. Der Content ist intern konsistent (Distraktor-3-Erklärung sagt korrekt „ab unter 30 °C akute Lebensgefahr", 32 °C also noch darüber). Der Zusatz „gehören intensivmedizinisch versorgt" ist sinnvolles Allgemeinwissen, steht aber nicht wörtlich in F-12/F-13.
- **Empfehlung:** „stark unterkühlt" → „deutlich unterkühlt" o. Ä.; „intensivmedizinisch" ist als klinische Einordnung vertretbar, könnte aber zur Grounding-Sauberkeit entschärft werden („engmaschig überwacht, bei Bewusstseins-/Kreislaufstörung stationär/intensiv"). Kein fachlicher Fehler.

### reflektieren — ce06-sander-ref-01 (reflection)
Bloom-5-Reflexion mit 4 sinnvollen Achsen (Erstmaßnahmen + Hausmittel-Fehler, Schmerz-kein-Maßstab, Prävention allein lebender alter Menschen, ambulanter Alleingang). systemPrompt fordert explizit Sandwich (loben → konkretisieren → ermutigen) und benennt die fachlichen Prüfpunkte korrekt. Kein kernfaktId nötig (offene Reflexion, step-grounding-exempt). Keine Findings.

## Cross-Step-Probleme
- **Patient-Konsistenz:** durchgehend stimmig (74 J., 2. Grad, rechter Unterarm + Oberschenkel, Hypertonie, allein lebend, ambulant). SBAR-Werte in ueb-01 decken sich mit patient.ts und den Vorphasen. ✓
- **Anti-Pattern „Sie-statt-du":** keine Verstöße. Lernende durchgehend „du"/Imperativ; „Sie" ausschließlich in Patienten-/Nachbarinnen-Rede („Tun Sie doch was", „streuen Sie drauf"). ✓
- **Distraktor-Disziplin:** Alle 5 bewusst gebauten Fehler (Hausmittel, Blasen aufstechen, Eis großflächig, Erbrechen bei Verätzung, heiße Wärmflasche) erscheinen ausschließlich als `isCorrect: false`-Optionen und werden jeweils mit Kernfakt-Bezug widerlegt — kein einziger taucht in einer Musterlösung, einem Kerntext oder einer Faustregel als korrekt auf. ✓
- **F-07-Namenskollision** (thermisch-F-07 Inhalationstrauma ↔ notfallassessment-F-07 SBAR) sauber über themaPrimaer aufgelöst; kein Dangling-Ref (step-grounding PASS). ✓
- **Triage-Spannung** (kleine Fläche ↔ Rettungsdienst) siehe F-02, NIEDRIG.

## Zusammenfassung
- **0 Findings HOCH**
- **1 Finding MITTEL** (F-01: Grounding-Präzision „2. Grad → Arzt" vs. zitierter F-06)
- **4 Findings NIEDRIG** (F-02 Triage-Stufe, F-03 Sandwich-Abschluss, F-04 TrueFalse-Rate-Muster, F-05 „stark"/„intensivmedizinisch")
- **Allgemeine Beobachtungen:** Sehr saubere, curriculum-first aufgebaute Situation. Kein Pseudo-Empathie-Bias, keine romantisierende Sprache. Alle Erste-Hilfe-Schritte sind auf F-01..F-13 zurückführbar; die 3 Wissens-Tabs sind literatur-treu paraphrasiert (Kühl-Temperatur 20 °C/10 Min, Handfläche 1 %, Hypothermie-Werte < 35/< 30 °C, max 1 °C/h alle exakt aus den Kernfakten). Fachliche Korrektheit von Kühl-Temperatur/Dauer, Flächen-/Klinik-Schwellen und Hypothermie-Werten bestätigt. Die 5 bewusst gebauten Fehler sind durchgehend nur Distraktoren und korrekt widerlegt. B1-Varianten vollständig und fachlich deckungsgleich. Einziger substanzieller Punkt: die generalisierte „2.-gradig → ärztliche Versorgung"-Empfehlung geht über den zitierten F-06 (Schwellen > 10 % / Sonderlokalisationen) hinaus — sachlich richtig, aber grounding-technisch zu präzisieren.
- **K.O.-Verdikt: PASS** (0 HOCH). Empfehlung: F-01 (MITTEL) vor Live-Deploy adressieren (Kernfakt ergänzen oder explanation an F-06 anlehnen); NIEDRIG-Punkte optional.
