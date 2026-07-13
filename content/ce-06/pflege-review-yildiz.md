# Pflege-Review: ls-yildiz-thoraxschmerz

**Geprüft:** 2026-07-13 (Redesign: 3 Wissens-Tabs + KB-Marker auf LE2-Set)
**Files:** 1 (`phases.ts` — 5 Phasen in einer Datei) + Grounding `specs/ce-06/kernfakten/herz-kreislauf-akut.md`
**Step-Anzahl:** 11 (7 MC/TrueFalse/Branching-Antwort-Steps, 3 inlineWissen-Tabs, 1 reflection)
**Vor-Checks:** pflege-anti-pattern-check 0 Treffer · step-grounding-check PASS (10/10 claim-tragend) · standards-currency 0 Treffer

## Findings

### Phase 2 „Alarmieren" — ce06-yildiz-ala-00b-team-zeit (inlineWissen, Tab C)

#### F-01 (MITTEL): „Zeit ist Herzmuskel" + Herzkatheter-Reperfusion nicht durch zitierte kernfaktId gedeckt
- **Stelle:** Zeile 249–252 (kerntext + faustregel); wiederkehrend in ala-01 explanation (Z. 312) und erk-01 Option C (Z. 83)
- **Problem:** Der Tab lehrt als Kernaussage: „Je schneller die ärztliche Versorgung (und im Krankenhaus die Eröffnung des verschlossenen Gefäßes im Herzkatheter) beginnt, desto mehr Herzmuskel bleibt erhalten" und den Merksatz „Zeit ist Herzmuskel". Zitiert sind F-03 (Erstmaßnahmen: Arzt + Pflegekraft, beruhigen, lagern, Fenster), F-06 (O2/Nitro/Analgetika nur Arztanordnung), F-08 (Angst/Coping). **Keiner dieser drei Kernfakten** — und keiner der acht Fakten F-01..F-08 in `herz-kreislauf-akut.md` — enthält „Zeit ist Herzmuskel", Reperfusion, Herzkatheter/PCI oder „je früher, desto mehr Myokard erhalten". Fachlich korrekt (Standard-Kardiologie), aber im Sinne der Grounding-Disziplin ungegroundet. Der step-grounding-check schlägt NICHT an, weil er nur prüft, ob die kernfaktId auflösbar/nicht-dangling ist, nicht ob sie den konkreten Claim stützt.
- **Standard-Verweis:** `.claude/rules/pflege-konformitaet.md` → Step-Level-Grounding (W2/W5) + semantischer Stützt-Check; Regel „Kein erfundener Content — alles standardsbelegt".
- **Empfehlung:** Kernfakt **F-09** in `herz-kreislauf-akut.md` ergänzen mit verbatim-Beleg aus Pflege heute (Kap. 21.5 Herzinfarkt/Reperfusion — „Zeit ist Herzmuskel"/Lyse/PCI/Herzkatheter), `scripts/zitat-verifizierer.ts --check-file` grün ziehen; dann in Tab C (+ ala-01 explanation, erk-01 Option C) `kernfaktId` um F-09 erweitern. Alternativ, falls kein Beleg beschaffbar: Reperfusions-/Merksatz entfernen und nur die gegroundete Zeitkritik („jede Minute zählt, sofort Arzt") belassen.

### Phase 1 „Erkennen" — ce06-yildiz-erk-01 (MC) + Phase 5 ce06-yildiz-ref-01 (reflection)

#### F-02 (MITTEL): „Diabetiker/Frauen — erhöhtes Risiko + atypische/abgeschwächte Symptome" nicht gegroundet
- **Stelle:** Z. 75–77 (erk-01 Option B explanation), Z. 667–671 (ref-01 prompt + systemPrompt „bei Frauen und Diabetikern besonders wachsam … atypische/abgeschwächte Symptome")
- **Problem:** Fachlich korrekt (Diabetiker: höheres, oft stumm/atypisch verlaufendes Infarktrisiko; Frauen: atypische Präsentation), aber keiner der Fakten F-01..F-08 deckt „atypische/abgeschwächte Symptome bei Diabetikern/Frauen". Der Claim ist im Reflexions-systemPrompt sogar bewertungsrelevant (die KI soll prüfen, ob der Schüler das benennt) — d. h. die Plattform bewertet gegen eine ungegroundete Aussage.
- **Standard-Verweis:** Grounding-Disziplin (s. F-01); pflege-konformitaet.md „nichts Erfundenes in … systemPrompt".
- **Empfehlung:** Kernfakt für „stummer/atypischer Infarkt bei Diabetikern" + „atypische Symptome bei Frauen" mit Beleg aus Pflege heute (Kap. 21.5) ergänzen und erk-01/ref-01 darauf mappen. Bis dahin fachlich unbedenklich (korrekt), aber grounding-offen.

### Phase 3 „Erstmaßnahmen" — ce06-yildiz-ala-00b (Tab C) + ce06-yildiz-erm-02 (truefalse)

#### F-03 (NIEDRIG): „Bei niedrigem RR kann erneutes Nitro den Kreislauf gefährlich absenken" — Herleitung, kein zitierter Fakt
- **Stelle:** Z. 250 (Tab C kerntext), Z. 495 (erm-02 explanation)
- **Problem:** Pharmakologisch korrekt (Nitrat senkt Vorlast/RR, bei Hypotonie kontraindiziert) und didaktisch wertvoll, aber als eigenständiger Claim nicht in den Kernfakten; wird aus F-01 (Nitro half nicht = Warnzeichen) + F-07 (RR-Abfall) plausibel hergeleitet. Grenzwertig akzeptabel als Reasoning.
- **Empfehlung:** Optional mit Kernfakt (Nitrat-Kontraindikation Hypotonie) belegen; sonst als abgeleitete Begründung belassen — keine fachliche Korrektur nötig.

### Phase 4 „Übergeben" — ce06-yildiz-ueb-01 (MC, SBAR)

#### F-04 (NIEDRIG): kernfaktId ["F-07"] für SBAR-Step semantisch lose
- **Stelle:** Z. 581–582 (`themaPrimaer: "notfallassessment"`, `kernfaktId: ["F-07"]`, `quellen: Leonard et al. 2004`)
- **Problem:** SBAR-Struktur ist über Leonard 2004 sauber belegt; F-07 (Oberkörperhochlagerung-Abbruch bei RR<90/Puls>100) deckt zwar den Assessment-Teil der Musterantwort (RR 85/50, abgeflacht), ist aber ein loser Anker für einen SBAR-Step. Grounding-Check passt (F-07 löst auf). Kosmetisch.
- **Empfehlung:** Falls in `notfallassessment.md` ein SBAR-Kernfakt existiert, zusätzlich taggen; sonst belassen.

## Cross-Step-Probleme

Keine Inkonsistenzen. Positiv geprüft:
- **Patientendaten konsistent:** Frau Yıldız, 62, KHK/Angina + Diabetes + Hypertonie; Nitrospray genommen ohne Besserung — durchgängig (erk-01 → SBAR ueb-01).
- **Vitalwert-Schwelle konsistent:** F-07-Grenze (RR<90 & Puls>100) → Branching erm-03 (85/50, Puls 112) → SBAR ueb-01 (85/50, 112, abgeflacht). Zahlen und Kausalität ziehen sauber durch.
- **Schocklage** wird korrekt als beim kardialen Geschehen FALSCH gelehrt (Tab B, erm-01 Distraktor) — kein Widerspruch zur Oberkörperhochlagerung.
- **Kompetenzgrenze O2/Nitro** konsistent in Tab C, ala-01, erm-02.

## KB-Marker-Logik (Plausibilität)
- I.4 an Erkennen (erk-01, erk-02, Tab A), Lagern/Überwachen (Tab B, erm-01), Branching (erm-03) — plausibel.
- III.2 an Alarmierung (ala-01), Team-Tab (ala-00b), Kompetenzgrenze (erm-02) — konsistent zum LE2-Primär-Schwerpunkt (interprofessionelles Handeln).
- II.1 an SBAR (ueb-01), V.2 an Reflexion (ref-01) — passend, konsistent zu Wagner/Ríos/Novak.
- **Verdikt Marker:** plausibel, keine Fehl-Zuordnung.

## Sonstige geprüfte Kriterien (unauffällig)
- **„du"-Anrede:** durchgängig; Patientenrede in 1. Person; kein „Sie" an Lernende. ✓
- **Sandwich-Feedback:** Branching-Feedbacks (erm-03) und MC-explanations zeigen Konsequenz → Korrektur → Standard; Reflexions-systemPrompt fordert Sandwich explizit. ✓
- **Distraktoren:** durchweg plausible Anfänger-Fehler (Schocklage, „nur die Angina/abwarten", „erst dokumentieren", „Beruhigungsmittel geben", Nitro/O2 eigenmächtig), alle korrekt widerlegt — keine Karikaturen. ✓
- **Anti-Patterns:** kein indirektes Licht, kein „NRS ok", kein „ziehe/hebe hoch", kein „unter Achseln", keine Bettgitter, kein „Glück gehabt", keine eigenmächtige Medikation als richtig markiert. ✓
- **Lagerung/Kompetenzgrenze/kardiogener-Schock-Schwelle:** fachlich korrekt und verbatim-gegroundet (F-06/F-07). ✓

## Zusammenfassung
- **0 Findings HOCH**
- **2 Findings MITTEL** (F-01 Zeit-ist-Herzmuskel/Herzkatheter ungegroundet; F-02 Diabetiker/Frauen-atypisch ungegroundet)
- **2 Findings NIEDRIG** (F-03 Nitro-Hypotonie-Herleitung; F-04 SBAR-kernfaktId lose)
- **Allgemeine Beobachtung:** Kein Pseudo-Empathie-Bias, kein fachlicher Fehler, saubere Konsistenz und starker Standards-Bezug. Der einzige systematische Punkt ist **Grounding, nicht Fachlichkeit**: mehrere fachlich korrekte, aber in den Kernfakten nicht hinterlegte Claims (v. a. „Zeit ist Herzmuskel"/Reperfusion und „atypische Symptome bei Diabetikern/Frauen"). Diese fallen durch das Regex-/Dangling-Ref-Sieb, weil die zitierten kernfaktId zwar existieren, den konkreten Satz aber nicht stützen. Fix = Kernfakten F-09 (+ atypischer/stummer Infarkt) verbatim ergänzen und mappen.
- **K.O.-Verdikt:** **PASS** (0 HOCH). MITTEL-Findings sind Grounding-Nacharbeit — vor Live-Deploy nachziehen (Regel „alles standardsbelegt").
