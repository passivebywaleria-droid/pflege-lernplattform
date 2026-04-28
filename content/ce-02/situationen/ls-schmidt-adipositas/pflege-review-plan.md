# Pflege-Review (Plan): ls-schmidt-adipositas

**Geprüft:** 2026-04-26
**Mode:** plan (retrospektiv, nach Code-Review-PASS)
**Files:** 8 (patient-plan, baustein-trigger, 6 Phasen-Plans)
**Step-Anzahl (geplant):** 35 Kern + 10 optional = 45
**Spezifischer Fokus:** Adipositas (Sprache, bariatrisches Equipment, Kinästhetik bei hoher Last, Hautfaltenpflege, Diabetisches Fußsyndrom, Mangelernährung, Inkontinenz)

---

## Findings

### patient-plan.md / Querschnitt — Bariatrisches Equipment

#### F-01 (HOCH): Mobilisations- und Lagerungs-Equipment bei BMI 38 / 98 kg nicht thematisiert
- **Stelle:** patient-plan.md (Bewegungs-Profil), phase-planen.md Step 3.5, phase-durchfuehren.md Step 4.8
- **Problem:** Frau Schmidt ist 98 kg / BMI 38. Plan spricht von „kleinen Schritten zum Waschbecken", nennt aber kein Wort zu bariatrischem Equipment (Schwerlastbett bis 250 kg, breiterer Toilettenstuhl, Aufstehhilfe, Stehlifter). Bei Adipositas Grad II wird Equipment-Bewusstsein in der Ausbildung explizit verlangt (DGUV 207-018 „Patiententransfer"). 98 kg liegt unterhalb der Lifter-Pflicht (>150 kg), aber die Risikoeinschätzung (z.B. Bett-Tragkraft, Toilettenstuhl-Belastbarkeit) gehört in den Pflegeplan.
- **Standard-Verweis:** DGUV 207-018; DBfK Positionspapier Adipositas-Pflege 2021
- **Empfehlung:** In Phase 3 (Mobilisationsplan) optionalen Step ergänzen: „Welches Equipment ist bei BMI 38 / 98 kg sinnvoll? Was ist bei BMI > 40 zwingend?" oder Hinweis-Baustein hinterlegen.

### phase-durchfuehren.md — Step 4.8 (Inkontinenz-Versorgung Klein-Branching)

#### F-02 (MITTEL): Selbstpflege-Pfad ohne Sicherheitscheck (Sturzrisiko)
- **Stelle:** dur-08, Pfad B („Natürlich. Zeigen Sie mir, wie Sie es machen — ich helfe nur wenn Sie wollen.")
- **Problem:** Frau Schmidt hat BMI 38, Diabetes, Schwäche/Schwindel bei Aufnahme, Belastungsinkontinenz, kürzlich entgleister BZ. Selbstpflege im Bett oder am Bettrand ohne kurzen Schellong-/Vitalcheck ist bei diesem Profil nicht ohne weiteres unbedenklich. Pfad B ist autonomie-stärkend richtig — aber didaktisch fehlt der Hinweis auf Sicherung („ich bleibe in Reichweite", „Klingel griffbereit").
- **Standard-Verweis:** DNQP Sturzprophylaxe 2022 — Risikofaktor Diabetes + Adipositas + entgleister BZ
- **Empfehlung:** Pfad B-Text um Sicherungs-Aspekt ergänzen oder Feedback-Text um „Klingel in Reichweite, Pflege bleibt im Zimmer/in der Nähe".

### phase-beobachten.md — Step 2.6 (Fußinspektion)

#### F-03 (NIEDRIG): „Verdickte Nägel" als Befund — Onychomykose nicht abgegrenzt
- **Stelle:** beob-06, Befundbeschreibung
- **Problem:** „Verdickte Nägel" beim Diabetiker ist häufig Onychomykose — relevant für Beratung (Antimykotikum?), aber Plan nennt nur Podologe-Überweisung. Pflegerisch korrekt (kein Schneiden!), aber didaktisch dünn.
- **Empfehlung:** Optional-Step oder Baustein „Onychomykose bei Diabetes" verlinken. Nicht K.O.

### phase-planen.md — Step 3.4 (Hautpflege Sequencing)

#### F-04 (MITTEL): „Zinkpaste in Hautfalten" — kontraindiziert in feuchten Falten
- **Stelle:** plan-04, Sequencing-Karte „Hautschutz-Lotion oder Zinkpaste dünn auftragen"
- **Problem:** Plan-Text qualifiziert zwar „nicht in feuchten Falten, nur vorbeugend" — aber die Karte selbst nennt Zinkpaste als Option. Aktuelle AWMF-Leitlinie Intertrigo (2022) empfiehlt **atmungsaktive textile Einlagen** (z.B. Inkontinenz-Vlies, spezielle Faltenvliese), KEINE okklusiven Pasten in geschlossenen Falten — Pasten verstärken Mazeration. Für Schüler:in im 2. AD ist „Zinkpaste in Hautfalten" eine häufige falsche Vereinfachung.
- **Standard-Verweis:** AWMF Leitlinie Intertrigo 2022; DNQP Hautintegrität (in Vorbereitung) / I-Care Haut
- **Empfehlung:** Karte umformulieren auf „atmungsaktives Faltenvlies einlegen, Hautschutz-Creme nur auf intakter, trockener Haut außerhalb der Falte". Sortierung-Reihenfolge bleibt valide.

### phase-durchfuehren.md — Step 4.7 (BZ-Kalkulation)

#### F-05 (NIEDRIG): „Trend wichtig für Metformin-Dosierung" — verkürzt
- **Stelle:** dur-07
- **Problem:** Postprandial 254 mg/dl auf Metformin Tag 1–3 ist erwartbar, weil Metformin frühestens nach 1–2 Wochen voll wirkt. „Arzt informieren" ist richtig, aber Begründung „für Metformin-Dosierung" kann Schüler verleiten zu denken, die Dosis sei sofort hochzusetzen. Korrekt: Verlaufstrend dokumentieren, Arzt informieren wegen anhaltender Hyperglykämie und ggf. Bridging-Insulin.
- **Standard-Verweis:** DDG Praxisempfehlungen 2023 — Metformin-Wirkeintritt
- **Empfehlung:** Erläuterungstext präzisieren — „Trend dokumentieren, Arzt informieren wegen anhaltender Hyperglykämie. Metformin braucht Eindosierung."

### Querschnitt — Sprache & Anti-Body-Shaming

#### F-06 (NIEDRIG): „dem anzusehen ist, dass das Essen…" — leichte Stigmatisierung
- **Stelle:** phase-informieren.md Kontext, Z. 16
- **Problem:** Formulierung ist grenzwertig — sie unterstellt, dass „Essen" am Körper ablesbar sei. Adipositas hat multifaktorielle Ursachen (Genetik, Stoffwechsel, Medikamente, soziale Lage). Plan ist insgesamt sehr respektvoll und thematisiert Vorurteile (Step 1.8) — aber dieser Satz selbst reproduziert eines.
- **Empfehlung:** Umformulieren auf „bei der das Thema Ernährung sichtbar Bedeutung hat, ohne dass ich die Geschichte dahinter kenne". Sonst gut.

### phase-evaluieren.md — Step 5.6 (Albumin-Verlauf, optional)

#### F-07 (NIEDRIG): Albumin-Halbwertszeit korrekt — aber Präalbumin-HWZ
- **Stelle:** eval-06
- **Problem:** Präalbumin (Transthyretin) HWZ ≈ 2 Tage ist korrekt, Transferrin HWZ ≈ 8 Tage — der Plan nennt nur Präalbumin und Transferrin gesammelt. Detail, kein Pflege-Fehler. Quellenangabe (DGE/Cederholm) wäre wünschenswert.

---

## Cross-Step / Cross-Phase

- **Konsistenz Patient-Daten:** Alter (68), BMI (38), Albumin (31 g/l), BZ-Werte, Wagner 1 — durchgängig konsistent in allen Phasen. ✓
- **Trigger-Logik:** K.O.-Wiederholung Diabetischer Fuß (T04→T08→T14) didaktisch sehr stark, korrekt eskaliert. ✓
- **NRS-2002-Berechnung Score 3:** Plan rechnet inkonsistent — Step 2.3 sagt „Ernährungsstatus Score 0 scheinbar, aber…" und nennt Gesamt-Score 3. NRS-2002 erlaubt aber den Score-Anteil nur entweder/oder, nicht „scheinbar 0 + trotzdem". Korrekt wäre: Ernährungsstatus Score 1 (Albumin niedrig + Gewichtsverlust-Anamnese fehlt → falls keine Gewichtsabnahme: Score 0; dann Krankheits-Score 1 + Alter ≥70 wäre +1, hier 68 → 0). Gesamt 1, nicht 3. Sollte didaktisch nachgeschärft werden — sonst bringt Schüler:innen das Tool falsch bei. **MITTEL → F-08.**

#### F-08 (MITTEL): NRS-2002-Score-Berechnung im Plan rechnerisch unsauber
- **Stelle:** beob-03 (Phase 2) + B1-Variante
- **Standard-Verweis:** Kondrup J. et al. (2003) NRS-2002 Originalpublikation; DGEM-Leitlinie
- **Empfehlung:** Score-Bausteine sauber durchrechnen. Wenn Albumin als Mangel-Hinweis angeführt wird, GLIM-Kriterien klar von NRS-2002 trennen — der Plan vermischt beide. Alternativ: Anamnestische Gewichtsabnahme oder reduzierte Nahrungsaufnahme in den Patient-Plan ergänzen, dann ist NRS Score ≥3 sauber begründbar.

---

## Zusammenfassung

- **0 Findings HOCH** … außer F-01 (bariatrisches Equipment) — strittig, ob HOCH oder MITTEL. Eingestuft als **HOCH** weil Adipositas-Pflege ohne Equipment-Awareness ein blinder Fleck ist, der praxisrelevant Fehler erzeugt.
- **3 Findings MITTEL:** F-02 (Sturzsicherung Selbstpflege), F-04 (Zinkpaste in Falten), F-08 (NRS-Berechnung)
- **4 Findings NIEDRIG:** F-03, F-05, F-06, F-07

**Allgemeine Beobachtungen:**
- **Sprache & Würde:** Sehr gut — Plan vermeidet Body-Shaming durchgängig, thematisiert Scham und Vorurteile aktiv (Step 1.8). Patientenzitate authentisch, nicht karikiert.
- **Kinästhetik bei hoher Last:** Im Plan kommt Kinästhetik-Sprache („Sie machen die Bewegung, ich begleite") nicht vor — aber es gibt auch keinen Anti-Pattern-Verstoß („ich hebe Sie", „unter den Achseln greifen"). Mobilisationsplan abstrakt, kein Transfer-Step. Code-Review hat Kinästhetik bestanden, daher OK.
- **Hautfaltenpflege:** Konzeptuell vorhanden, aber Zinkpasten-Detail (F-04) ist veraltetes Wissen.
- **Mangelernährung-Konzept:** Didaktisch herausragend (Brilliant-Prinzip Step 2.1, Albumin-Paradox 2.4) — kleines Rechen-Problem in F-08, aber Kernbotschaft sitzt.
- **Diabetischer Fuß / Podologie-Grenze:** K.O.-Trigger-Eskalation 3× hervorragend gelöst.
- **Inkontinenz-Würde:** Sehr gut (Steps 2.7, 3.6, 4.8) — kleines Sicherheits-Detail F-02.
- **Standards-Bezüge:** DNQP, DDG, DGE, ICS, AWMF, Wagner-Armstrong — durchgängig zitiert mit Jahreszahlen. ✓
- **B1-Versionen:** vorhanden für alle Kern-Steps. ✓

**K.O.-Verdikt:** **PASS mit Auflage.**

Begründung: Code-Review ist bereits PASS. Plan-Findings F-01, F-04, F-08 sind didaktisch nachzuschärfen, falls die Situation in einer späteren Iteration überarbeitet wird — aber keines davon erzeugt unmittelbares pflegerisches Schadensrisiko, das vor Live-Deploy blockieren müsste. Für den nächsten Iterations-Zyklus (oder ein Adipositas-spezifisches Update-Sprint) sollten F-01 (Equipment), F-04 (Zinkpaste) und F-08 (NRS-Berechnung) aufgenommen werden.

---

## Fix-Block (2026-04-26) — alle Plan-Findings adressiert

### Code-Änderungen umgesetzt

#### F-01 (HOCH) Bariatrisches Equipment — GELÖST
- **Step 3.5 (phase-planen.ts):** Tragkraft-Schwellen explizit aufgenommen: Standard-Bett 135–185 kg, Schwerlastbett ab > 250 kg, Lifter-Pflicht > 150 kg (DGUV 207-018). Frau Schmidt mit 98 kg unter Schwellen — aber Equipment-Awareness („Tragkraft prüfen") explizit im Plan, auch für Toilettenstuhl/Bariatrie-Stuhl. Quellen ergänzt: DGUV Information 207-018 (2022) + DBfK Positionspapier Adipositas-Pflege 2021.
- B1-Variante mit Schwellen-Hinweis ergänzt.

#### F-02 (MITTEL) Sturzsicherung Selbstpflege Pfad B — GELÖST
- **Step 4.8 (phase-durchfuehren.ts):** Pfad-B-Option umformuliert: „Klingel lege ich Ihnen in Reichweite, ich bleibe im Zimmer in der Nähe." Feedback erweitert um DNQP Sturzprophylaxe 2022, Sturzrisiko-Faktoren (Adipositas, neuer Diabetes mit Hypoglykämie-Risiko, Inkontinenz, Atemnot) und Schellong-/Vital-Check-Hinweis. Würde + Sicherheit zusammen.

#### F-03 (NIEDRIG) Onychomykose-Hinweis — GELÖST
- **Step 2.6 (phase-beobachten.ts):** Befund-Beschreibung um „verdickte und gelblich-trübe Nägel (Verdacht auf Onychomykose — Nagelpilz, häufig bei Diabetes; Diagnose nur durch Arzt/Mykologie)" erweitert. Glossar „Onychomykose" ergänzt. Pflegerisch unverändert: keine Intervention durch Pflege, Podologe.

#### F-04 (MITTEL) Zinkpaste in Falten kontraindiziert — GELÖST
- **Step 3.4 (phase-planen.ts) + Step 4.1 (phase-durchfuehren.ts):** Karte „Zinkpaste in der Falte" ersetzt durch „Atmungsaktives textiles Faltenvlies in die Falte einlegen" (AWMF S2k Intertrigo 2022 — Goldstandard). Klarstellung: KEINE okklusiven Pasten/Cremes IN die Falte (verstärkt Mazeration). Hautschutz-Creme nur AUSSERHALB der Falte auf intakter Haut.

#### F-05 (NIEDRIG) Metformin-Wirkeintritt präzisiert — GELÖST
- **Step 4.7 (phase-durchfuehren.ts):** explanation umformuliert: Metformin braucht 1–2 Wochen bis volle Wirkung. Pflege dokumentiert + meldet, Arzt entscheidet über Eindosierung / Bridging-Insulin. Vermeidet Verständnis „Dosis sofort hochsetzen". (DDG 2023)

#### F-06 (NIEDRIG) Stigmatisierende Formulierung in Phase 1 — GELÖST
- **kontext (phase-informieren.ts):** „dem anzusehen ist, dass das Essen in ihrem Leben eine besondere Rolle spielt" → „bei dem das Thema sichtbar Bedeutung hat — ohne dass du die Geschichte dahinter kennst". Vermeidet Reproduktion des Vorurteils „Essen ist am Körper ablesbar".

#### F-07 (NIEDRIG) Halbwertszeiten Albumin/Präalbumin/Transferrin — GELÖST
- **Step 5.2 (phase-evaluieren.ts):** Quellen ergänzt um Cederholm GLIM 2019 (Halbwertszeit Albumin/Präalbumin/Transferrin) + DGE D-A-CH 2024. Vertiefung „Präalbumin (HWZ 2 Tage), Transferrin (HWZ 8 Tage) sensitiver für kurzfristige Verlaufskontrolle" war bereits im Item enthalten.

#### F-08 (MITTEL) NRS-2002-Berechnung — bereits gelöst durch Code-Fix-Block
- patient.ts + Step 2.3 + Step 2.3b: NRS-Score konsistent 0+1+0=1, GLIM-Diagnostik separat. Albumin als GLIM-Kriterium (NICHT NRS) klar getrennt. Siehe Fix-Block in pflege-review.md (F-02/F-03 Code-Review).

---

### Verifikation
- **TypeScript-Compile:** `npx tsc --noEmit` clean.
- **Neue Quellen:** DGUV Information 207-018 (2022), DBfK Positionspapier Adipositas-Pflege 2021, Cederholm GLIM 2019 (HWZ-Daten).
- **Echte Umlaute:** durchgängig.
- **Body-Shaming-Check:** Phase-1-kontext re-formuliert, kein anderer Vorurteils-Reproduktionspunkt gefunden.

### K.O.-Status nach Fixes
- HOCH: 0 ungelöst (1/1 gelöst — F-01)
- MITTEL: 0 ungelöst (3/3 gelöst — F-02, F-04, F-08)
- NIEDRIG: 0 ungelöst (4/4 gelöst — F-03, F-05, F-06, F-07)

**Verdikt nach Fixes: PASS** — Live-Deploy-fähig, keine Auflagen mehr offen.
