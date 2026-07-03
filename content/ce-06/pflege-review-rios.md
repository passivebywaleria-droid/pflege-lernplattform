# Pflege-Review: ls-rios-synkope (Herr Ríos — Synkope während der Dialyse)

**Geprüft:** 2026-07-03
**Modus:** code (fertiger TypeScript-Content)
**Files:** 2 (phases.ts mit 5 Akut-Phasen + patient.ts)
**Step-Anzahl:** 8 (6 MC, 1 Branching, 1 Reflection)
**Deckt:** CE06-LE1-K3 — neurologische Akutsituationen diagnostizieren + Erste Hilfe einleiten

## Mechanisierte Vor-Checks (alle PASS)

- `pflege-anti-pattern-check.ts content/ce-06` → 0 Treffer für ls-rios-synkope
- `step-grounding-check.ts ce-06` → PASS, 7/7 claim-tragende Steps gegroundet, 0 DANGLING, 0 MISSING
- `klinik-panel.ts ce-06` → 0 Befunde (Zahlen/Recht/DNQP/Konsistenz alle 0)

Die semantische Prüfung unten ist die 5. Lens (Distraktor-vs-Empfehlung, Pseudo-Empathie, Realitätscheck).

---

## Antworten auf die 7 Prüf-Fragen der Gründerin

**1. Hypoglykämie-Grenzwert „unter 50 mg/dl" — vertretbar?**
JA, grounding-belegt (Pflege heute Kap. 26.6.5, Verbatim „Blutzucker unter 50 mg/dl", F-03) und für Pflegeschüler vertretbar. Falldaten konsistent: 48 mg/dl < 50 → eindeutig Hypoglykämie unter JEDEM gängigen Schwellenwert. Einzige kleine Schwäche = didaktische Framing-Frage (siehe F-01, NIEDRIG). KEIN Fehler in den Falldaten.

**2. KEINE orale Glukose bei Bewusstseinstrübung — korrekt/klar?**
JA, vorbildlich. Mehrfach, unmissverständlich, mit Schluckfähigkeit als sauberem Kriterium umgesetzt (branching erm-01: „er ist nicht wach genug zum Schlucken", „reagiert nur auf Schmerzreiz — schluckt also nicht sicher"). Aspirationsgefahr korrekt benannt (F-05). Das ist die didaktische Kern-Sicherheitsentscheidung und sie sitzt.

**3. Kompetenzgrenze Glukose 40 % i.v. = ärztlich, Shunt schützen — realistisch?**
JA, korrekt (F-05). „Glukose 40 % i.v." = nur Konzentration genannt, KEINE ml-Dosis behauptet → grounding-sauber. Shunt als „Lebensader", nicht eigenmächtig punktieren, Pflegerolle „vorbereiten/melden/assistieren/überwachen" — fachlich und realistisch. Der Distraktor „selbst in den Shunt spritzen" ist ein realistischer Erfahrenen-Fehler, korrekt als falsch markiert.

**4. Lagerung ohne pauschale Trendelenburg — korrekt?**
JA, im Prinzip korrekt (F-06/F-07). Kopftieflage-Kontraindikation (Hirndruck/Atemnot/Übelkeit) sauber begründet, „Beine hoch + stabile Seitenlage" ist der richtige Weg. Eine kleine Prioritäts-Unschärfe in der Formulierung → siehe F-02 (NIEDRIG).

**5. Differentialdiagnose (Hypoglykämie / kardiale Synkope / Dialyse-Hypotonie) — sauber?**
JA. erk-01 stellt genau diese drei Ursachen gegenüber (BZ messen vs. Apoplex-Vorfestlegung vs. Dialyse-Hypotonie aussitzen) und priorisiert die Blutzuckermessung korrekt als schnellsten diagnostischen Handgriff (F-04: „bei jeder unklaren neurologischen Akutsituation zwingend"). ABCDE ist im Szenario bereits abgebildet (atmet, Puls tastbar) und wird im Korrekt-Feedback als „parallel" nicht vergessen — gut.

**6. Kein fälschliches „FAST-Schema"?**
KORREKT VERMIEDEN. Kein Vorkommen von „FAST" im Content; die Schlaganfall-Option heißt „Schlaganfall-Alarm/Apoplex". Homonym-Falle (Trauma-Sonografie) sauber umgangen.

**7. Distraktoren / Sandwich / Konsistenz / Anrede / Umlaute?**
- Distraktoren durchweg realistische Anfänger-/Erfahrenen-Fehler, KEIN gefährlicher als „richtig" markierter Distraktor.
- Sandwich-Feedback vorhanden (anerkennen → korrigieren → ermutigen), besonders gut in erm-01 D2 (Hierarchie vs. Patientensicherheit).
- Cross-Step-Konsistenz: Ríos 63 (patient ✓ / ueb-01 „63" ✓), Dialyse 2. Std ✓, Insulin ✓, Shunt links (patient „linker Unterarm" / erm-02 „linken Arm" ✓), BZ-Verlauf 48 → 120 (erk-02/ala-01 = 48, ueb-01 = 120 ✓). Alles konsistent.
- „du"-Anrede durchgängig, keine „Sie"-Slips an Lernende.
- Echte Umlaute überall (ä ö ü ß, Ríos mit í). Keine ae/oe/ue.

---

## Findings

### 3) ERSTMASSNAHMEN — ce06-rios-erm-03 (mc, Lagerung)

#### F-02 (NIEDRIG): Prioritäts-Unschärfe „Beine hoch, DANN Seitenlage sobald nicht wach"
- **Stelle:** phases.ts:355 (Korrekt-Option) + 358 (explanation)
- **Problem:** Die Bedingung „sobald er wegen der Bewusstseinstrübung nicht sicher wach ist, in die stabile Seitenlage" ist logisch leicht schief — Herr Ríos ist im gesamten Szenario bereits bewusstseinsgetrübt (reagiert nur auf Schmerzreiz). Er ist JETZT schon nicht sicher wach. Damit hat die stabile Seitenlage (Aspirationsschutz) hier Priorität; Beine-Hoch ist ergänzende Kreislaufunterstützung, wo mit den Blutlinien machbar. Zudem sind „Beine hochlegen" und „stabile Seitenlage" praktisch schwer gleichzeitig. Die Antwort ist nicht falsch (beides gehört zum Repertoire), aber die konditionale Reihenfolge kann suggerieren, Seitenlage sei erst später/optional.
- **Standard-Verweis:** F-06 (Beine hoch bei Ohnmacht; stabile Seitenlage bei anhaltender Bewusstlosigkeit mit erhaltener Atmung = Aspirationsschutz), notfallassessment F-03.
- **Empfehlung:** Formulierung schärfen: „Da er bereits nur auf Schmerzreiz reagiert (nicht sicher wach), hat die stabile Seitenlage zum Atemwegsschutz Vorrang; Beine hochlegen als Kreislaufunterstützung, soweit mit den Dialyse-Zugängen möglich." Keine inhaltliche, nur Prioritäts-Klarstellung.

### 1) ERKENNEN — ce06-rios-erk-02 (mc, Blutzucker einordnen)

#### F-01 (NIEDRIG): „<50 mg/dl" als absolute Definition — Grauzone 50–70 nicht adressiert
- **Stelle:** phases.ts:108 + 111 (Korrekt-Option/explanation), auch 116/119 (Distraktor „noch im Normbereich")
- **Problem:** Der Content stellt „Hypoglykämie = Blutzucker unter 50 mg/dl" als harte Definition dar. Das ist grounding-belegt (Pflege heute, F-03) und für den konkreten Fall (48 mg/dl) völlig unkritisch. Kritisch nur als didaktisches Restrisiko: Ein Schüler könnte daraus ableiten, symptomatische Werte im Bereich 50–69 mg/dl seien „normal/unkritisch". Klinisch ist bei insulinbehandelten Patienten mit Symptomatik bereits < 70 mg/dl handlungsrelevant (internationaler Alert-Wert). Der Distraktor „48 … noch im Normbereich" ist korrekt als falsch markiert — das Restrisiko betrifft nur die nicht behandelte Grauzone.
- **Standard-Verweis:** F-03 (Pflege heute „unter 50 mg/dl") vs. aktuelle Leitlinien-Alertschwelle < 70 mg/dl. Projekt-Grounding-Regel: Pflege heute = Maßstab → deliberate Wahl ist regelkonform.
- **Empfehlung:** Optional einen Halbsatz ergänzen, ohne die belegte Schwelle zu verlassen: „(Grenzwerte werden teils höher angesetzt; bei Symptomen und Insulin gilt schon ein niedrig-normaler Wert als behandlungsbedürftig.)" — oder bewusst so belassen mit Verweis auf Grounding. Kein K.O.

### Cross-Step (alle MC-Steps) — Test-Design

#### F-03 (MITTEL): Systematische Längen-/Ausführlichkeits-Bias (längste Option = korrekt)
- **Stelle:** erk-01 (54 vs. 62/70), erk-02 (108 vs. 116/124), ala-01 (178 vs. 186/194), erm-02 (301 vs. 309/317), erm-03 (355 vs. 363/371) — in jedem MC-Step ist die korrekte Option merklich länger/ausführlicher begründet als die Distraktoren.
- **Problem:** Die Score-korrekte Antwort trägt jeweils die umfangreichste Selbstbegründung im Optionstext. Ein prüfungserfahrener Schüler kann systematisch die längste Option wählen und liegt richtig — ohne den Fachinhalt zu kennen. Das untergräbt die Diagnostik-Funktion der MC-Steps (Bloom 3–4). Kein pflegefachlicher Fehler, aber ein reales, ausnutzbares Muster über die gesamte Situation.
- **Standard-Verweis:** pflege-konformitaet.md — MC: „Distraktoren = realistische Anfänger-Fehler, keine Karikaturen" + ausgewogene Optionen (MC-Bias-Kriterium der Pipeline).
- **Empfehlung:** Korrekt-Optionen auf den reinen Handlungskern kürzen (Begründung gehört in `explanation`, nicht in `text`) ODER Distraktoren um gleich lange Pseudo-Begründungen anreichern. Ziel: vergleichbare Optionslängen, damit die Länge kein Lösungssignal ist.

---

## Cross-Step-Probleme

Keine inhaltlichen Inkonsistenzen. Patient-Daten, BZ-Verlauf, Shunt-Seite, Alter, Setting durchgängig konsistent (siehe Prüf-Frage 7). Einziger Cross-Step-Punkt ist das Test-Design-Muster F-03 (MITTEL).

## Weitere Beobachtungen (kein Finding)

- **Reflection-Step (ref-01)** trägt kein `kernfaktId` — bei einem offenen, nicht-claim-tragenden Schreib-Step by-design vertretbar; step-grounding-check zählt ihn korrekt nicht mit. OK.
- **Dialysestuhl-Realität:** Positionierung eines an Maschine/Shunt angeschlossenen Patienten (Blutlinien, Drehung zur shunt-fernen Seite) wird nicht im Detail beschrieben — für das Lernziel-Niveau (LE1-K3) akzeptabel, nicht bemängelt. Reduktion des Flüssigkeitsentzugs als ärztliche Entscheidung ist in ala-01 sauber erwähnt.
- **Glukagon** (in F-05 für Laien/Angehörige belegt) wird bewusst nicht genannt — im professionellen Dialyse-Setting mit anwesendem Arzt ist Glukose 40 % i.v. der richtige Weg. Korrekte Auslassung.

## Zusammenfassung

- **0 Findings HOCH**
- **1 Finding MITTEL** (F-03 — systematischer MC-Längen-Bias über alle MC-Steps)
- **2 Findings NIEDRIG** (F-01 Hypoglykämie-Schwellen-Framing; F-02 Lagerungs-Prioritäts-Unschärfe)
- **Allgemein:** Pflegefachlich stark und diszipliniert gebaut. Keine Pseudo-Empathie, kein romantisierender Slang, keine erfundenen Instrumente/Dosen. Alle sicherheitskritischen Entscheidungen (keine orale Gabe bei Bewusstseinstrübung, Kompetenzgrenze i.v.-Glukose, Shunt-Schutz, keine pauschale Trendelenburg, FAST-Vermeidung) sind korrekt und grounding-belegt. Distraktoren realistisch, Sandwich-Feedback konsequent, Konsistenz lückenlos. Einzige echte Schwäche ist das Test-Design (Optionslängen), nicht die Fachlichkeit.
- **K.O.-Verdikt: PASS.** Kein HOCH-Finding. Live-Deploy-fähig; F-03 (MITTEL) und die zwei NIEDRIG-Punkte vor Deploy nachziehen (Gründerin-Regel: alle Severities fixen), aber kein Blocker.
