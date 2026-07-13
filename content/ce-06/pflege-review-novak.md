# Pflege-Review: ls-novak-erregung

**Geprüft:** 2026-07-13 (Re-Review inkl. 3 neue inlineWissen-Tabs)
**Files:** 3 (phases.ts [5 Phasen in einer Datei] + patient.ts + index.ts)
**Step-Anzahl:** 10 (5 MC, 3 inlineWissen-Tabs, 1 Branching, 1 Reflection)
**SituationsTyp:** akutsituation — erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
**Deckt:** CE06-LE1-K4 (akute psychotische Erregung diagnostizieren + Erste Hilfe)

## Mechanisierte Vor-Checks (alle grün)
- `pflege-anti-pattern-check.ts` (content/ce-06): keine Treffer für novak
- `step-grounding-check.ts ce-06`: ✅ PASS ls-novak-erregung (keine Dangling-Refs)
- `standards-currency-check.ts ce-06 --include-plans`: kein Treffer (korrekt § 1831 BGB, KEIN veraltetes § 1906/1906a)
- `zitat-verifizierer.ts` (psychische-akutsituationen.md): 15/15 Zitate verifiziert, alle 8 Belegblöcke ✅

---

## Findings

### Phase 1 erkennen — erk-01 (mc)
Sauber. Score-3-Option = Eigenschutz/Reizarmut (F-08/F-03), Distraktoren plausibel (Festhalten als 1. Schritt; Wahn frontal widerlegen). Alle explanation + explanationB1 gefüllt. Wahn-Handling korrekt (Gefühl ernst, nicht bestätigen/nicht hart widerlegen). Keine Findings.

### Phase 1 erkennen — erk-01b-eigenschutz-deeskalation (inlineWissen, Tab A)
Fachlich korrekt und deckungsgleich mit F-08/F-02/F-03. „Nicht mit mehreren gleichzeitig zugehen, eine Person hält Kontakt, Kollegen im Hintergrund" (F-03), „Eigenschutz zuerst: Abstand, fester Stand, freier Rückweg, bei Gewaltbereitschaft raus + Hilfe" (F-08). Spektrum + Karteikarte konsistent. Keine Pseudo-Empathie („Dein Herz klopft" ist Atmosphäre, keine medizinische Fehlaussage). Keine Findings.

### Phase 1 erkennen — erk-02 (mc)
Kernaussage (organische Ursachen zuerst ausschließen, diagnostic overshadowing) korrekt und lebenswichtig — F-01. Distraktoren realistisch („eindeutig Schub", „Fieber zweitrangig"). Keine Findings.

### Phase 1 erkennen — erk-02b-organisch (inlineWissen, Tab B)
Kern der Leitplanke korrekt: Fieberdelir/Hypoxie/Hypoglykämie, diagnostic overshadowing, „erst Körper, dann Psyche". Wiederbegegnung → Ríos (Blutzucker imitiert alle Bilder) didaktisch stimmig und fachlich tragfähig. Keine Findings.

#### F-01 (NIEDRIG): SpO2/BZ-Messung „gelingt oft erst, wenn er dich heranlässt"
- **Stelle:** phases.ts Z. 188 (erk-02 explanation) + Z. 245 (Tab B kerntext)
- **Problem:** Kein fachlicher Fehler — realitätsnah und korrekt (Deeskalation und Assessment Hand in Hand, notfalls unter ärztlicher Begleitung). Anmerkung nur: Die Formulierung könnte missverstanden werden, als dürfe man das Assessment beliebig aufschieben, bis der Patient „heranlässt". Der Text fängt das durch „notfalls unter ärztlicher Begleitung" bereits ab.
- **Standard-Verweis:** F-01 (Vitalzeichen/Temp/SpO2/BZ prüfen)
- **Empfehlung:** Optional präzisieren: „… je nach Kooperation; bei kritischem Verdacht auf Hypoxie/Sepsis wird die Messung ärztlich begleitet erzwungen, nicht beliebig verschoben." Keine Pflichtkorrektur.

### Phase 2 alarmieren — ala-01 (mc)
Korrekt: diskret 1 Kollegin im Hintergrund (F-03), Arzt für Erregung UND Fieber informieren, Sedierung = ärztliche Anordnung (F-07). Distraktor „selbst Beruhigungsmittel aus dem Schrank geben" ist ein plausibler, gefährlicher Anfänger-Fehler, korrekt widerlegt. Keine Findings.

### Phase 3 erstmassnahmen — erm-01 (branching)
Drei Pfade mit klar unterschiedlichen, realistischen Patientenkonsequenzen (ruhiger/Kontakt hält · schreit auf/Kontakt bricht · kurz erleichtert, dann Vertrauensbruch). Deeskalations-Prinzip (Gefühl validieren ohne Wahninhalt zu bestätigen/hart zu widerlegen) korrekt. „Mitspielen/Gegenmittel"-Distraktor korrekt als vertrauensschädigend entlarvt. Keine Findings.

### Phase 3 erstmassnahmen — erm-01b-zwang-recht (inlineWissen, Tab C)
Rechtlich der sensibelste Baustein — und fachlich korrekt:
- Fixierung = LETZTE Deeskalationsstufe, im Team, patientenschonend, eine Person spricht weiter (F-04) ✅
- Zwang nur bei echter Selbst-/Fremdgefährdung, nicht aggressiv, legitimiert, Mindestmaß (F-05) ✅
- Rechtsgrundlage: Zustimmung / Gefahr im Verzug / richterliche Genehmigung; **somatische Station → Betreuungsrecht § 1831 BGB (Fassung ab 2023), Gefahr-im-Verzug-Sofortmaßnahme ohne Genehmigung, unverzüglich nachzuholen; PsychKG nur für Unterbringung in psychiatrischen Einrichtungen, greift auf der Inneren nicht automatisch** (F-06) ✅ — PsychKG-vs-Betreuungsrecht-Abgrenzung sauber und korrekt.
- Sedierung (Haloperidol) = ärztliche Anordnung (F-07) ✅
- Verwendet die AKTUELLE Norm § 1831 BGB, NICHT das abgelöste § 1906/1906a.

#### F-02 (NIEDRIG): § 1831 BGB setzt bestehende rechtliche Betreuung voraus
- **Stelle:** phases.ts Z. 456 (Tab C kerntext) + Z. 517/520 (erm-02 explanation)
- **Problem:** § 1831 BGB (Genehmigung des Betreuungsgerichts) greift nur, wenn ein rechtlicher Betreuer/Bevollmächtigter bestellt ist. Herr Novak lebt in einer „betreuten Wohngruppe" (patient.ts Z. 19) — das ist eine Wohnform, kein Beleg für eine rechtliche Betreuung. Der Text präsentiert § 1831 als „die richterliche Grundlage" ohne diese Voraussetzung zu nennen.
- **Bewertung:** Kein Fehler im pflegerisch-operativen Kern: Akut gilt hier ohnehin die Gefahr-im-Verzug-Sofortmaßnahme (im Text korrekt als operativer Weg benannt); die richterliche Genehmigung ist der Folgeschritt. Grounded in F-06. Nach Curriculum-Tiefe-Regel (Pflege heute/I Care ist Maßstab) liegt die Betreuer-Voraussetzung an der Grenze des Ausbildungsniveaus — Kürzen/Belassen ist vertretbar.
- **Standard-Verweis:** F-06; § 1831 BGB (Betreuungsrecht)
- **Empfehlung:** Optional ein Halbsatz zur Präzision: „… sofern eine rechtliche Betreuung besteht; andernfalls stützt sich die akute Maßnahme auf Gefahr im Verzug / rechtfertigenden Notstand, und eine Betreuung wird veranlasst." Keine Pflichtkorrektur.

### Phase 3 erstmassnahmen — erm-02 (mc)
Score-3-Option juristisch/fachlich korrekt und differenziert. Beide Distraktoren sind die realistischen Pole („dürfen wir selbst entscheiden" vs. „niemals fixieren") und werden mit dem korrekten Maßstab-dazwischen widerlegt. PsychKG-Abgrenzung konsistent zu Tab C und F-06. Keine Findings (außer der NIEDRIG-Nuance F-02 oben).

### Phase 4 uebergeben — ueb-01 (mc)
SBAR vollständig (S/B/A/R), organische Spur explizit als offene Ursache benannt statt „nur Psychose" — didaktisch stark. Distraktoren („dreht durch"-Etikett + Sofort-Sedierungswunsch · beschönigend „alles gut") realistisch. Keine inhaltlichen Findings.

#### F-03 (NIEDRIG): kernfaktId ["F-07"] deckt die SBAR-Kernaussage nur lose
- **Stelle:** phases.ts Z. 572 (ueb-01, kernfaktId)
- **Problem:** Der Step lehrt die SBAR-Struktur (quellen: Leonard et al. 2004). F-07 ist inhaltlich „Sedierung ärztlich" — trifft nur eine Randaussage der R-Zeile. In dieser Kernfakten-Datei existiert kein SBAR-Fakt; SBAR ist über notfallassessment.md gegroundet. Das Step-Grounding-Skript ist grün (F-07 ist gültige Referenz), aber die semantische Passung ist schwach.
- **Standard-Verweis:** SBAR (Leonard et al. 2004) — konsistent zu Wagner/Ríos (II.1)
- **Empfehlung:** Falls ein SBAR-Kernfakt in `notfallassessment.md` existiert (F-ID), diesen als kernfaktId ergänzen/ersetzen; sonst F-07 belassen (die R-Zeile referenziert ärztliches Vorgehen). Kosmetisch.

### Phase 5 reflektieren — ref-01 (reflection)
Prompt deckt alle vier Kern-Lernziele (diagnostic overshadowing/organische Ursachen · Deeskalationsprinzipien · Grenze Schutz/Zwang · Eigenschutz+Nachbesprechung). systemPrompt bewertet im Sandwich-Prinzip, „niemals abwertend", Bewertungskriterien fachlich orientiert. Selbst-Reflexion, keine Wahr/Falsch-Falle. Keine Findings.

---

## Cross-Step-Probleme
Keine. Geprüft und konsistent durch alle 5 Phasen:
- **Alter:** 34 (patient.ts Z. 10 ↔ SBAR Z. 588) ✓
- **Diagnosen:** Pneumonie + Fieber 39,2 °C + bekannte paranoide Schizophrenie überall identisch ✓
- **Zeit:** 23:30 Uhr durchgängig, keine unerklärten Sprünge ✓
- **Verlauf:** „Infusion herausgezogen/entfernt" (Ph. 3 Kontext ↔ SBAR) konsistent ✓
- **Wahn-Haltung:** „Gefühl ernst, Inhalt weder bestätigen noch hart widerlegen" in erk-01, erm-01, Reflexion durchgängig identisch ✓
- **Recht:** § 1831 BGB / Gefahr im Verzug / PsychKG-Abgrenzung in Tab C und erm-02 wortgleich in der Logik ✓
- **Sedierung ärztlich:** ala-01, Tab C, erm-02 konsistent ✓

## Zusammenfassung
- **0 Findings HOCH**
- **0 Findings MITTEL**
- **3 Findings NIEDRIG** (F-01 Assessment-Formulierung optional präzisieren · F-02 § 1831 setzt Betreuung voraus — grounded/vertretbar · F-03 SBAR-kernfaktId lose)
- **Allgemeine Beobachtungen:**
  - Kein Pseudo-Empathie-Bias. Keine der App-typischen Anti-Patterns (kein „indirektes Licht", keine NRS-Bagatelle, kein „ziehe/hebe Sie", keine unrechtmäßige Fixierung/Bettgitter, kein „Sie" an Lernende — durchgängig „du", Patientenrede korrekt „Sie").
  - Standards-Bezug sauber und aktuell: PsychKG-vs-Betreuungsrecht korrekt abgegrenzt, § 1831 BGB in aktueller Fassung (kein § 1906a-Drift), Deeskalation/Eigenschutz/organischer Ausschluss standardkonform (Pflege heute Kap. 16/12.3/38.8/48.2.5), alle F-01…F-08 sauber im Content gespiegelt.
  - B1-Konsistenz: jede Option mit explanationB1/feedbackB1, contentB1, kontextB1 — durchgängig „du", Sandwich im Feedback.
  - Die 3 neuen Wissens-Tabs sind literatur-belegt, paraphrasiert, jeweils VOR/BEI ihrer Anwendung platziert, ohne Antwort-Step — didaktisch und fachlich sauber.
- **K.O.-Verdikt: PASS** (0 HOCH — kein K.O.-Kriterium). Die 3 NIEDRIG-Punkte sind optionale Feinschliffe, kein Deploy-Blocker.
