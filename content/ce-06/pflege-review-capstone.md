# Pflege-Review: ls-capstone-am-boden

**Geprüft:** 2026-07-13
**Modus:** code (phases.ts + patient.ts)
**Files:** 2 (phases.ts mit 5 Phasen, patient.ts)
**Step-Anzahl:** 8 (5 MC, 1 Branching, 2 inlineWissen-Synthese-Tabs, 1 Reflection) — Zählung: 5 Phasen, davon Ph.1 mit 4 Steps (2 MC + 2 Tabs), Ph.2 1 MC, Ph.3 3 Steps (1 Branching + 2 MC), Ph.4 1 MC, Ph.5 1 Reflection

## Mechanisierte Vor-Checks

- `step-grounding-check.ts ce-06` → **PASS** (0 DANGLING, 0 MISSING) — alle kernfaktId lösen sauber auf
- `pflege-anti-pattern-check.ts` → **0 Treffer** in ls-capstone-am-boden
- `standards-currency-check.ts ce-06 --include-plans` → **PASS** (keine veraltete Norm autoritativ)

## Fachlicher Kern-Algorithmus (verifiziert korrekt)

- **Erster Blick** (Reaktion? normale Atmung?) → 3 Wege (reanimieren / stabile Seitenlage / differenzieren) — deckt sich mit reanimation-bls F-01, notfallassessment F-01/F-03. ✓
- **Schnappatmung ≠ normale Atmung** — verbatim gedeckt durch reanimation-bls F-02. ✓
- **Kreislauf da → erst Blutzucker → Leitzeichen** — gedeckt durch neuro F-04/F-13. ✓
- **Apoplex** (einseitig+bleibend → Notruf, time is brain, Symptombeginn notieren) — neuro F-08/F-09. ✓
- **Krampfanfall** (schützen, NICHTS in den Mund, Beißkeil obsolet, Zeit stoppen, Status epilepticus) — neuro F-10/F-11/F-12. ✓
- **Synkope** (kurz weg + zurück, keine Ausfälle, Beine hoch, kardiale Abklärung) — neuro F-01/F-02/F-06. ✓

## Findings

### Ph.1 erkennen — ce06-petrova-erk-01b-erster-blick (inlineWissen, Tab 1)

#### F-01 (NIEDRIG / BEANTWORTET — sauber): HKS-Ast in Tab 1 über Wiederbegegnung + dedizierten Fall gegroundet
- **Stelle:** Zeile 86–146, `kernfaktId: ["F-01","F-03"]` (notfallassessment), HKS-Inhalt im `kerntext` + `spektrum[0]`
- **Prüfung der Kernfrage:** Tab 1 lehrt den HKS-Ast („keine Reaktion + keine normale Atmung → Rettungskette, sofort Herzdruckmassage; Schnappatmung zählt nicht"). Diese Claims stehen NICHT wörtlich in den zitierten notfallassessment-Fakten F-01 (ABCDE) / F-03 (SSL) — F-01/F-03 grounden nur das Framework (Prioritäten + SSL-Ast).
- **Bewertung:** SAUBER. Nichts Erfundenes. Jeder HKS-Claim hat ein autoritatives Home-Fact im CE-06-Korpus: „keine Reaktion + keine normale Atmung" = reanimation-bls F-01, „Schnappatmung ist kein Atmen" = reanimation-bls F-02 (verbatim), Rettungskette = reanimation-bls F-04. Der Tab deklariert das korrekt: `themenSekundaer: ["reanimation-bls"]`, `wiederbegegnung.basisBausteinId: "reanimation-bls-hks-erkennen"` (Wagner), und der HKS-Ast wird autoritativ getestet in Phase 3 `ce06-petrova-erm-01` (`themaPrimaer: reanimation-bls`, `kernfaktId: ["F-01","F-02","F-04"]`). Da `kernfaktId` gegen die EINE `themaPrimaer` (hier notfallassessment) auflöst, KANN ein reanimation-F-id gar nicht in dieses Array — die gewählte Konstruktion (themenSekundaer + Wiederbegegnung + gegroundeter Zwilling erm-01) ist der schema-korrekte Weg, cross-thema-Synthese auszudrücken.
- **Empfehlung:** Keine Änderung nötig. (Der Vollständigkeit halber ist erm-01 der reanimation-gegroundete Anker — bleibt so.)

### Ph.1 erkennen — ce06-petrova-erk-02b-differenzieren (inlineWissen, Tab 2)

#### F-02 (MITTEL): Delir-/Erregungs-Zeile im spektrum ohne deckenden kernfaktId und ohne Cross-Ref
- **Stelle:** Zeile 252–257, `spektrum[3]` „Erregt/verwirrt, evtl. Fieber → an Delir denken"; `kerntext`-Absatz „wenn jemand erregt und verwirrt ist … an eine körperliche Ursache (etwa ein Delir) denken". `kernfaktId: ["F-01","F-08","F-10","F-13"]` (alle neurologische-akutsituationen).
- **Problem:** Anders als der HKS-Ast (der über `themenSekundaer` + `wiederbegegnung`→Wagner + den gegroundeten Fall erm-01 abgesichert ist) hat der Delir-/organische-Erregungs-Ast (K4) hier WEDER einen deckenden kernfaktId (die vier zitierten Fakten sind alle neuro und decken Delir nicht) NOCH eine Wiederbegegnung/Cross-Ref zur autoritativen Quelle (Novak / `psychische-akutsituationen`). Der Inhalt selbst ist fachlich korrekt (körperliche Ursache prüfen, Eigenschutz zuerst), also NICHT erfunden — aber es ist die einzige Stelle der Situation, an der ein gelehrter Claim ohne Grounding-Spur bleibt.
- **Standard-Verweis:** Grounding-Disziplin W2/W5 (jeder claim-tragende Inhalt braucht kernfaktId oder klare Wiederbegegnung).
- **Empfehlung:** `themenSekundaer` um `"psychische-akutsituationen"` ergänzen UND eine kurze `wiederbegegnung` bzw. Cross-Bemerkung zu Novak setzen (analog zum HKS→Wagner-Muster), damit der Delir-Ast dieselbe Grounding-Qualität hat wie der HKS-Ast. Alternativ die Zeile knapper als reinen Merker „an körperliche Ursache denken, Eigenschutz" halten mit Verweis auf die Novak-Situation. Kein fachlicher Fehler — reine Nachvollziehbarkeit.

### Ph.1 erkennen — ce06-petrova-erk-02 (mc)

#### F-03 (NIEDRIG): kernfaktId zu dünn für den „erst Blutzucker"-Claim
- **Stelle:** Zeile 149–201, `kernfaktId: ["F-01"]` (neuro F-01 = Synkope-Definition).
- **Problem:** Die Lehr-Aussage ist „kein Stillstand → als Erstes Blutzucker messen". Home-Fact dafür ist neuro F-04 (Hypoglykämie imitiert Schlaganfall → sofort messen) bzw. F-13. F-01 (Synkope-Definition) trägt den Blutzucker-Claim nicht. Die Prosa-`quellen` nennen Kap. 26.6.5 korrekt — nur der maschinelle kernfaktId zeigt daneben.
- **Empfehlung:** `kernfaktId` auf `["F-01","F-04"]` (oder `["F-04","F-13"]`) erweitern. Traceability, nicht blockierend.

### Ph.2 alarmieren — ce06-petrova-ala-01 (mc)

#### F-04 (NIEDRIG): kernfaktId F-13 nicht das beste Home-Fact für die Synkopen-Handlung
- **Stelle:** Zeile 290–342, `kernfaktId: ["F-13"]` (neuro Differenzial).
- **Problem:** Der Claim „Synkope → liegen lassen, Beine hoch, Arzt/Ursachenabklärung, kardiale Synkope gefährlich" wird am direktesten von neuro F-01 (Synkope = Symptom, Ursache klären), F-02 (kardiale Synkope gefährlich, abklären) und F-06 (Beine hoch) getragen. F-13 (konvulsive Synkope/Differenzial) ist nur mittelbar passend.
- **Empfehlung:** `kernfaktId` auf `["F-01","F-02","F-06"]` setzen (oder ergänzen). Traceability.

### Ph.3 erstmassnahmen — ce06-petrova-erm-03 (mc)

#### F-05 (NIEDRIG): „über wenige Minuten" vager als die Status-epilepticus-Schwelle
- **Stelle:** Zeile 492 (richtige Option) „… hole den Arzt, besonders wenn der Anfall über wenige Minuten dauert".
- **Problem:** Kein Fehler — als früher Anruf-Trigger im Pflegesetting ist „wenige Minuten" sogar umsichtig. Nur besteht ein leichter Wording-Kontrast zu neuro F-12 (Status epilepticus = Schwelle ~10–15 Min). Die `explanation` trennt korrekt: Status = „zu lange oder Anfall auf Anfall ohne Erholung".
- **Empfehlung:** Optional präzisieren (z. B. „Arzt hinzuziehen; bei über ~5 Min andauerndem Anfall drängt die Zeit — anhaltend/wiederholt = Status epilepticus"). Keine Pflicht.

## Cross-Step-Probleme

Keine. Konsistenz durchgeprüft und stimmig:
- **Petrova-Stammdaten:** 68 J. (patient.ts + SBAR-Option), Synkope, Hypertonie + „Schwindel beim Aufstehen" (patient.ts ↔ SBAR-Background), BZ 108 mg/dl normal (Ph.2-Kontext ↔ SBAR ↔ ala-01), „nach knapp einer Minute spontan orientiert" (persoenlichkeit ↔ SBAR), Zeit „gegen 10:15 / Vormittag". Alles konsistent.
- **BZ 108 als „normal":** korrekt gegen neuro F-03 (Hypoglykämie < 50 mg/dl) — keine Bagatellisierung.
- **Die 3 Fremdfälle klar als andere Personen:** „ein anderer Bewohner" / „eine Bewohnerin" / „ein Bewohner" — sauber von Petrova (rotem Faden) getrennt. Kein Vermischen der Falldaten.
- **Interleaving-Logik:** In Fall 1 (HKS) wird der Distraktor „erst Blutzucker messen" korrekt als falsch entlarvt (BZ-Regel gilt nur bei laufendem Kreislauf) — konsistent mit der in Ph.1 gelehrten Gabelung. Kein „korrekt-hier / falsch-dort"-Widerspruch.

## Weitere Beobachtungen (nicht situationsspezifisch, keine Findings)

- glossarBegriffe „SBAR", „kardiale Synkope", „diagnostische Vorsicht" haben keinen CE-06-Glossar-Eintrag (`content/ce-06/glossar.ts`). Betrifft „SBAR" 9/11 CE-06-Situationen gleichermaßen (Wagner, Yıldız, … alle deployed) — also ein CE-weites Glossar-Coverage-Thema, kein Defekt dieser Situation und nicht pflege-fachlich. Ggf. separat: SBAR-Eintrag in ce-06/glossar.ts nachziehen.

## Qualitäts-Positiva (ausdrücklich)

- **Distraktoren** durchweg realistisch (Zuckerwasser-Reflex, „HDM schadet nicht", Abwarten, Schlaganfall-Alarm auf Verdacht, Beißkeil/Festhalten) — jeder mit konkretem WAS+WARUM widerlegt, keine Karikaturen. Nichts Erfundenes gelehrt.
- **Kein Anti-Pattern:** keine Pseudo-Empathie, kein „im Rahmen", keine Kinästhetik-Verstöße („ziehen/heben"), kein Bettgitter/Fixierung, keine „Glück gehabt"-Bagatellisierung. Aspirationsschutz („nichts oral bei kaum Reaktion / im Anfall") korrekt und konsistent mit neuro F-05.
- **„du"-Anrede** durchgehend an Lernende; „Sie" nur beim Stationsarzt („Schildern Sie mir …") — regelkonform (andere Figur).
- **Sandwich-Feedback:** alle MC-`explanation`/Branching-`feedback` gefüllt (C1 + B1), Reflection-`systemPrompt` fordert Sandwich + differenzierte Bloom-5-Bewertung explizit.
- **SBAR-Step** vorbildlich: die richtige Option nennt ausdrücklich den strukturierten Ausschluss (kein Stillstand / BZ normal / keine Halbseitenzeichen / keine Zuckungen) — passgenau zum Capstone-Lernziel.

## Zusammenfassung

- **0 Findings HOCH**
- **1 Finding MITTEL** (F-02 Delir-Ast in Tab 2 ohne Grounding-Spur — fachlich korrekt, nur Nachvollziehbarkeit)
- **4 Findings NIEDRIG** (F-01 beantwortet/sauber, F-03/F-04 kernfaktId-Feinschliff, F-05 Wording)
- **Pseudo-Empathie-Bias:** nein. **Standards-Bezug:** durchgängig (ABCDE, ERC/BLS, DNQP-nahe Erste-Hilfe, SBAR, time is brain). **B1-Konsistenz:** jede C1-Stelle hat B1-Pendant.
- Antwort auf die gestellte Kernfrage: **Ja, der HKS-Ast in Tab 1 ist sauber** — Framework (ABCDE/SSL) via F-01/F-03 gegroundet, HKS-Inhalt via themenSekundaer + Wiederbegegnung→Wagner + gegroundeter Zwilling erm-01 (reanimation-bls F-01/F-02/F-04); nichts Erfundenes.
- **K.O.-Verdikt: PASS** (0 HOCH). Empfehlung: F-02 (kleiner Cross-Ref/themenSekundaer-Fix) und die drei NIEDRIG-kernfaktId-Feinschliffe vor Live-Deploy nachziehen — alle nicht-blockierend.
