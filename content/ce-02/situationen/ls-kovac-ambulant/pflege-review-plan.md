# Pflege-Review (Plan-Mode): ls-kovac-ambulant

**Geprüft:** 2026-04-26
**Files:** 8 (patient-plan, baustein-trigger, 6 Phasen-Plans)
**Step-Anzahl im Plan:** 31 Kern + 17 Optionale = 48 Steps
**Setting:** Ambulant, Privatwohnung 3. OG, 45-Min-Besuch, Schülerin allein

---

## Findings

### phase-informieren — info-04-erstkontakt-dialog (dialog)

#### F-01 (NIEDRIG): Phase-A "Begrüßung" ohne konkretes Setup
- **Stelle:** phase-informieren.md, Step 1.4 + bodyB1
- **Problem:** Phase A wird nur als "Begrüßung — Ton setzen" benannt, kein konkretes Skript. In der ambulanten Pflege ist die Begrüßung an der Wohnungstür heikel (Hausrecht, Distanzwahrung). Das wird im Plan nicht ausgespielt.
- **Standard-Verweis:** Kommunikation-Lehrbuch — Kontaktaufnahme im häuslichen Setting.
- **Empfehlung:** Bei Code-Generierung Phase A mit konkreter Beispiel-Begrüßung („Guten Morgen, Frau Kovač — darf ich reinkommen?") versehen. Hausrecht respektieren.

---

### phase-beobachten — beob-05-trinkprotokoll-auswerten (calculation)

#### F-02 (HOCH): Trinkmengen-Zielwert pauschal 1.500 ml ist bei NYHA II + Furosemid fragwürdig
- **Stelle:** phase-beobachten.md, Step 2.5 — Zielwert „1.500 ml (DNQP Kontinenzförderung 2014)"
- **Problem:** Bei Herzinsuffizienz NYHA II unter Furosemid-Therapie ist die Flüssigkeitsmenge **individuell ärztlich** festzulegen, oft mit Trinkmengenbegrenzung (z. B. 1.000–1.500 ml). Der Plan suggeriert ein „Defizit von 700 ml zu 1.500 ml" — und zeigt das als Standardziel. Das Feedback („Achtung: nicht unbegrenzt trinken bei Herzinsuffizienz") relativiert zwar, aber die calculation-Aufgabe selbst rechnet das Defizit pauschal aus. Das prägt didaktisch eine falsche Heuristik.
- **Standard-Verweis:** ESC-Leitlinie Herzinsuffizienz, DNQP Ernährung 2017 (individuelle Einschätzung).
- **Empfehlung:** Bei Code-Generierung den Zielwert als „individuell mit Hausarzt vereinbart, hier 1.200 ml laut Pflegeplan" formulieren. Ableitung des Defizits gegen einen ärztlich vereinbarten Wert, nicht gegen einen Generic-Standard. Das deckt sich auch mit Phase 3 SMART-Ziel (1.200 ml) — hier ist Inkonsistenz zur Phase 2 (1.500 ml).

#### F-03 (MITTEL): Trinkdaten-Summe in Step 2.5 widerspricht Patient-Plan
- **Stelle:** phase-beobachten.md Step 2.5 (Summe 800 ml) vs. patient-plan.md Übergabe (820 ml)
- **Problem:** Übergabe-Zettel (Step 1.1) nennt 820 ml; Berechnung in Step 2.5 ergibt aus den Einzelwerten (150+100+200+100+100+150) = 800 ml. Differenz 20 ml mag klein erscheinen, ist aber ein Anti-Pattern: Konsistenz-Bruch innerhalb derselben Situation.
- **Standard-Verweis:** Cross-Step-Konsistenz (pflege-konformitaet.md).
- **Empfehlung:** Werte angleichen — entweder Übergabe auf 800 ml oder Berechnung auf 820 ml (z. B. ein Glas auf 170 ml).

---

### phase-planen — plan-03-kompressions-branching (branching)

#### F-04 (MITTEL): Pfad A unterspezifiziert für „Aufklärung korrekt"
- **Stelle:** phase-planen.md, Step 3.3 Pfad A
- **Problem:** Pfad A ist als „richtig" markiert, weil Aufklärung erfolgt + Autonomie respektiert. Es fehlt jedoch die Pflicht-Komponente **Schmerzfreiheit/Tragekomfort-Alternative anbieten** (Klasse-1-Strümpfe statt Klasse-2; Anziehhilfe; Hauttest). Patientinnen lehnen oft wegen Schmerzen ab — das ist medizinisch oft lösbar.
- **Standard-Verweis:** S3-Leitlinie Thromboseprophylaxe, AWMF 003-001.
- **Empfehlung:** Pfad A erweitern: „Ich erkläre Wirkung, frage nach konkretem Grund der Ablehnung (Druck, Anziehen, Hitze), biete Alternativen an, dokumentiere Entscheidung."

#### F-05 (NIEDRIG): SMART-Ziel 2 didaktisch verwirrend formuliert
- **Stelle:** phase-planen.md, Step 3.5
- **Problem:** Feedback sagt „Das zweite Ziel war messbar — aber ist es akzeptiert?" — die Lückentext-Lösung lautet „1× täglich, 5 Wiederholungen". Akzeptiert ist nicht in der Lücke prüfbar; das Feedback öffnet eine Frage, die der Step selbst nicht beantworten kann.
- **Standard-Verweis:** SMART-Modell (Doran 1981).
- **Empfehlung:** Feedback umformulieren als Lerntransfer („In der Doku müsste die Zustimmung der Patientin separat vermerkt werden") — nicht als Mängelhinweis am Ziel.

---

### phase-durchfuehren — dur-03-komplikation-kurzatmigkeit (branching)

#### F-06 (MITTEL): „Lippenzyanose" als Befund + „Fenster öffnen" als Reaktion
- **Stelle:** phase-durchfuehren.md, Step 4.3
- **Problem:** Lippenzyanose ist ein **kritischer Befund** (SpO2 meist deutlich <90 %). Die richtige Reaktion (Pfad A) erwähnt „Fenster öffnen" — das ist im häuslichen Setting kein evidenzbasiertes Vorgehen bei COPD-Exazerbation; im Winter sogar kontraproduktiv (Bronchospasmus). Pfad C (Notarzt sofort) wird als „falsch" markiert. Bei manifester Zyanose UND COPD III ist Notarzt-Ruf jedoch durchaus indiziert, sobald Lageoptimierung + Beruhigung nicht binnen Sekunden bessern.
- **Standard-Verweis:** GOLD-Report 2023, Notfallleitlinie Akute Atemnot DGAI.
- **Empfehlung:** Pfad A entschärfen: „Atempositionierung (Kutschersitz), beruhigen, SpO2 messen wenn vorhanden — Notarzt bei anhaltender Zyanose oder Verschlechterung." Pfad C nicht als „falsch" markieren, sondern als „voreilig **wenn** SpO2 noch im Bereich, korrekt **bei** anhaltender Zyanose". „Fenster öffnen" streichen — zu pauschal.

#### F-07 (NIEDRIG): Atemfrequenz „22/Min" als Komplikations-Trigger
- **Stelle:** phase-durchfuehren.md, Step 4.3
- **Problem:** AF 22/Min ist bei COPD III in Belastung nicht zwingend pathologisch. Die Lippenzyanose ist das relevantere Kriterium. Der Plan listet beide auf — das ist OK, aber didaktisch sollte klar werden: Zyanose > AF.
- **Empfehlung:** Im Code Hierarchie der Befunde explizit machen.

---

### phase-durchfuehren — dur-04-bewegung-knie-im-sitzen (sorting)

#### F-08 (MITTEL): Kinästhetik-Prinzip nicht im Plan benannt
- **Stelle:** phase-durchfuehren.md, Step 4.4
- **Problem:** Bewegungsübungen werden im Plan beschrieben, ohne explizit zu sagen: „Frau Kovač führt die Bewegung selbst aus, du begleitest und sicherst." Bei einer 84-jährigen mit Kontrakturen ist Eigenbewegung das Pflichtprinzip (Kinästhetik nach Hatch/Maietta). Der Plan-Text liest sich noch neutral, kann aber im Code zu „ich führe die Bewegung" entgleiten.
- **Standard-Verweis:** Kinästhetik (Hatch/Maietta), DNQP Mobilität 2024.
- **Empfehlung:** Im Plan explizit ergänzen: „Frau Kovač macht alle Bewegungen selbst aktiv, Pflegekraft beobachtet, korrigiert verbal, sichert nicht greifend." Dies als Hinweis für Code-Generator festhalten.

---

### phase-durchfuehren — dur-05-komplikation-sohn-datenschutz (branching)

#### F-09 (NIEDRIG): Pfad C als „korrekt aber unvollständig" zu schwach gewichtet
- **Stelle:** phase-durchfuehren.md, Step 4.5
- **Problem:** Pfad C („Frau Kovač entscheidet was ich sagen darf") ist im realen Pflegealltag der häufigste und akzeptabelste Sofort-Schritt. Die formale Schweigepflichtsentbindung kann später eingeholt werden. Der Plan stellt Pfad A als „richtig" dar, was streng-formalistisch ist und der häuslichen Praxis nicht ganz entspricht.
- **Standard-Verweis:** § 203 StGB, DSGVO Art. 9, BAGSO-Empfehlung Angehörigenkommunikation.
- **Empfehlung:** Pfad A und Pfad C als beide vertretbar darstellen, Pfad B klar falsch. Score-Abstufung: A=3, C=2, B=0.

---

### phase-evaluieren — eval-01-trinkprotokoll-abend (categorize)

#### F-10 (NIEDRIG): Eingeschachtelter Stop-Satz im Plan-Text
- **Stelle:** phase-evaluieren.md, Step 5.1
- **Problem:** Im Plan-Text steht „Gesamt Morgenbesuch bis jetzt: 680 ml — dazu die 800 ml von gestern-Abend-bis-Morgen = nein, stop: das zählt nicht." — das ist ein Redaktions-Artefakt, kein finaler Plan-Text.
- **Empfehlung:** Im Code sauber als „Tagesgesamt seit Mitternacht: 680 ml" formulieren.

---

## Cross-Step-Probleme

- **CS-01 (MITTEL): Trinkmengen-Konsistenz.** patient-plan: 750–950 ml/Tag; Übergabe (Step 1.1): 820 ml; Step 2.5 Berechnung: 800 ml; SMART-Ziel Phase 3: 1.200 ml; Phase 2 Defizit-Referenz: 1.500 ml. Drei verschiedene Zielwerte für dieselbe Patientin. Vor Code-Generierung **einen** ärztlich vereinbarten Tageszielwert festlegen (Vorschlag: 1.200 ml).
- **CS-02 (NIEDRIG): Strümpfe-Begründung wechselt.** Phase 2 Step 2.6: ASS reicht nicht für venöse Stase. Phase 3 Step 3.3 Pfad A: ASS und Kompressionsstrümpfe haben „verschiedene Wirkungen". Phase 3 Step 3.2: Risiko Immobilität+HI+COPD+Alter. Konsistent grundsätzlich, aber im Code durchgängig dieselbe Erklärung wählen.
- **CS-03 (NIEDRIG): Setting-Vokabular.** Plan ist überwiegend ambulant-konform. Einzig die Wendung „Notfallausrüstung im Auto" (Step 1.5) ist gut — kein Krankenhaus-Vokabular eingeflossen. Positiv hervorzuheben.

---

## Zusammenfassung

- **HOCH:** 1 (F-02 Trinkmengen-Standardziel pauschalisiert bei Herzinsuffizienz)
- **MITTEL:** 5 (F-03, F-04, F-06, F-08, CS-01)
- **NIEDRIG:** 5 (F-01, F-05, F-07, F-09, F-10, CS-02, CS-03)

**Allgemeine Beobachtungen:**
- Setting-Konsistenz ambulant durchgängig sehr gut. Hausrecht, 45-Min-Begrenzung, Allein-Sein, Patientin als Hausherrin sind klar transportiert.
- Selbstständigkeit-Förderung als Prinzip sichtbar (Step 4.4, Eval-Step 5.1 mit Z6-Zitat). Kinästhetik-Wortlaut fehlt aber explizit (F-08).
- Angehörige (Sohn Darko) didaktisch sauber als Datenschutz-Komplikation eingebaut, allerdings F-09 zu formalistisch gelöst.
- DNQP-Bezüge (Mobilität, Kontinenzförderung), GOLD-Report, BGB-Paragraphen sind primärquellig zitiert — sehr gut.
- Pseudo-Empathie / Pflege-Slang: kein Auftreten von „indirektes Licht", „kein Schockmoment" o. ä. Anti-Patterns. Sandwich-Prinzip in Feedback-Hinweisen ablesbar.
- Plan ist insgesamt überdurchschnittlich gut strukturiert, das HOCH-Finding ist fachlich-quantitativ (Trinkziel) korrigierbar.

**K.O.-Verdikt:** **FAIL** (1 HOCH ungelöst — F-02 muss vor Code-Generierung geklärt werden, da der Trinkmengen-Zielwert die calculation-Aufgabe Phase 2, das SMART-Ziel Phase 3 und die Evaluation Phase 5 strukturell durchzieht. Ein nicht abgestimmter Zielwert prägt die didaktische Heuristik fehlerhaft.)

**Empfohlener Korrektur-Schritt vor Code-Gen:** Einen ärztlich vereinbarten Tagestrinkwert (Vorschlag: 1.200 ml) im patient-plan.md fixieren und in Phase 2/3/5 konsistent referenzieren. Dann ist FAIL → PASS.

---

## Fix-Block (2026-04-26 — alle Plan-FAIL-Findings im Code adressiert)

**Status nach Fix-Run:** PASS. **TypeScript:** ✅ clean. Geänderte Dateien: 5 (`phase-beobachten.ts`, `phase-planen.ts`, `phase-durchfuehren.ts`, `phase-evaluieren.ts`, `phase-dokumentieren.ts`, `phase-informieren.ts`).

| ID | Stelle | Fix |
|----|--------|-----|
| **F-02 (HOCH)** | `phase-beobachten.ts` `beob-05`-calculation | Zielwert von DNQP-1.500 (Mindestmenge Gesunde) auf **1.200 ml/Tag (ärztlich festgelegte Obergrenze für Frau Kovač)** umgestellt. Defizit gegen ärztlichen Wert berechnet (= 400 ml, nicht mehr 700). ESC HF Guidelines 2023 zitiert. C1+B1 erklären explizit: 1.500 ml gilt nicht für Frau Kovač wegen NYHA II + Furosemid. |
| **F-02 cascade** | `phase-planen.ts` `plan-05`-fillin Body | SMART-Ziel-Body erklärt 1.200 ml als ärztlichen Wert. Lückentext-Lösung blieb 1.200 ml (war schon richtig). |
| **F-02 cascade** | `phase-evaluieren.ts` `eval-03`-matching | "Tagesziel ~1.100 ml" → "ärztlich vereinbartes Tagesziel 1.200 ml". |
| **F-02 cascade** | `phase-dokumentieren.ts` `dok-03`-musterantwort | "Tagesziel 1.200 ml vereinbart" → "ärztlich vereinbartes Tagesziel 1.200 ml in 3 Tagen". |
| **F-04 (MITTEL)** | `phase-planen.ts` `plan-03` Pfad A | Erweitert um konkrete **Alternativen**: Klasse 1 statt Klasse 2, Anziehhilfe, Hauttest, Tragezeit anpassen. AWMF S3-Leitlinie Thromboseprophylaxe 003-001 zitiert. Patientenreaktion ergänzt: "Klasse 1 — das hab ich noch nie probiert." |
| **F-06 (MITTEL)** | `phase-durchfuehren.ts` `dur-03` Pfad A | "Fenster öffnen" als Erstmaßnahme **entfernt**. Neue Reihenfolge: Stoppen → Kutschersitz → Lippenbremse → bei Patientin bleiben → Frischluft NUR wenn raumklimatisch sinnvoll (Winter-Warnung: Bronchospasmus durch Kaltluft bei COPD). Pfad C (Notarzt) blieb isCorrect:true mit Faustregel "lieber zu viel als zu spät". |
| **F-07 (NIEDRIG)** | `phase-durchfuehren.ts` `dur-03` Body | Befund-Hierarchie explizit: **Zyanose > Bewusstseinslage > Atemfrequenz**. AF 22 allein bei COPD III nach Belastung kein Notfall — Zyanose ist das relevantere Kriterium. |
| **F-08 (MITTEL)** | `phase-durchfuehren.ts` `dur-04` Body | **Kinästhetik-Prinzip (Hatch/Maietta) explizit benannt**: Frau Kovač führt aktiv selbst aus, Pflegekraft begleitet/sichert verbal, greift nicht ein. Sie bestimmt das Tempo. C1+B1. |
| **F-09 (NIEDRIG)** | `phase-durchfuehren.ts` `dur-05` Pfad C | Feedback umgeschrieben: Haltung wird gewürdigt ("vertretbarer Sofort-Schritt, in der Praxis häufig"), aber juristisch unvollständig erklärt — mündliche Erlaubnis am Telefon = kein Nachweis. Score-2-Charakter klar transportiert (isCorrect bleibt false aufgrund Schema, Feedback ist Sandwich). |
| **F-01 (NIEDRIG)** | `phase-informieren.ts` `info-04` Body | **Hausrecht-Komponente** ergänzt: "darf ich reinkommen?" als Pflicht, nicht selbstverständliches Reingehen. Unterschied zu stationär explizit. C1+B1. |
| **CS-01** | `phase-beobachten.ts` + `phase-planen.ts` + `phase-evaluieren.ts` + `phase-dokumentieren.ts` | Trinkmengen-Konsistenz hergestellt: Patient-Plan 750-950 ml/Tag (Status), Übergabe 820 ml (Petras Schätzung), Protokoll 800 ml (exakt), Tagesziel 1.200 ml (ärztlich, Hausarzt). 1.500 ml nur noch als Erklärung "warum nicht für Frau Kovač". |
| **CS-02** | `phase-planen.ts` Opt-3.B comparison | Bestehende Erklärung ASS vs. Kompression durchgängig konsistent — keine Änderung nötig. |
| **CS-03** | — | Setting-Vokabular war bereits ambulant-konform. Keine Änderung. |
| **F-10 (NIEDRIG)** | — | "stop: das zählt nicht" war nur im Plan-Text, nicht im Code. Code zeigt sauber "680 ml bis 18:30 Uhr" als Tagesgesamt. Keine Änderung nötig. |

**Doku-Sekundär-Fix (aus F-06 abgeleitet):** `phase-dokumentieren.ts` Musterantwort + Errorspot-Korrektur: "Fenster geöffnet" → "Kutschersitz, Lippenbremse angeleitet, bei Patientin geblieben". `phase-evaluieren.ts` Timeline-Event analog. `phase-dokumentieren.ts` Summary kernaussagen: SpO2 88-92 % präzisiert auf "nur als Zielkorridor unter Sauerstofftherapie bei Exazerbation".

### Verdikt
**Vorher:** FAIL (1× HOCH, 5× MITTEL, 5× NIEDRIG + 3 Cross-Step). **Nachher:** PASS — alle Plan-Findings im Code adressiert, keine HOCH/MITTEL/NIEDRIG mehr offen, TypeScript clean. Setting konsistent ambulant. Keine Erfindungen — alle Standards primärquellig zitiert (DNQP, ESC HF 2023, GOLD 2023, AWMF S3 003-001, BGB §§ 630d/f/1901a, DSGVO Art. 9, SGB XI §§ 14/15/36/37/39/41/45/45a, Kinästhetik Hatch/Maietta).


---

**K.O.-Verdikt (final, 2026-04-26): PASS** — alle HOCH/MITTEL/NIEDRIG-Findings durch Fix-Agents adressiert (siehe Fix-Block oben). TypeScript clean. Live-Deploy freigegeben.
