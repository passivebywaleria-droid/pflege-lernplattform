# Pflege-Review (Plan): ls-yilmaz-spirale2

**Geprueft:** 2026-04-26
**Mode:** plan (retrospektive Doppelpruefung — Code-Review bereits PASS)
**Files:** 8 (patient-plan.md, baustein-trigger.md, 6 phase-*.md)
**Step-Anzahl:** 27 Kern + 13 optional + 2 Branching = ~42 Steps geplant

## Findings

### patient-plan.md — Stammdaten

#### F-01 (NIEDRIG): Schmerz "neuropathisch bedingt" — etwas zu apodiktisch
- **Stelle:** Z. 82 ("Schmerz: Frau Yilmaz berichtet kein Schmerz — wahrscheinlich neuropathisch bedingt"); Z. 93 (B1)
- **Problem:** Die Erklaerung "neuropathisch" ist plausibel, aber Kategorie-II-Wunden sind generell oft schmerzarm (nur dermale Anteile, geringere Nozizeptordichte als IV). "Wahrscheinlich" ist gut — aber B1-Variante schreibt es als Fakt ("Das liegt an der Nerven-Schaedigung").
- **Standard-Verweis:** NPUAP/EPUAP/PPPIA 2019 — Kategorie II = Teilverlust Dermis, Schmerz variabel
- **Empfehlung:** B1-Text auf "Vielleicht spuert sie weniger, weil ihre Nerven geschaedigt sind" weichzeichnen.

### phase-informieren.md

#### F-02 (MITTEL): SBAR-Inhalt in Step 1.1 verwechselt Sender und Inhalt
- **Stelle:** Step 1.1 (info-01-uebergabe-lesen)
- **Problem:** Die Notiz der Spaetschicht-Kollegin war NUR "Roetung Sakrum — morgen schauen". Der Step deklariert das als SBAR-Inhalt mit S/B/A/R — das ist konstruiert. SBAR ist ein muendlich/schriftliches Uebergabeformat, kein Akteneintrag-Format. Die Modellierung "S = ..., B = ..., A = ..., R = ..." suggeriert, die Kollegin haette SBAR genutzt — sie hat es gerade NICHT getan. Didaktisch unsauber.
- **Standard-Verweis:** SBAR — strukturierte Uebergabe (Pflege heute)
- **Empfehlung:** Klarstellen: "Du baust dir aus der Akte + Uebergabe selbst eine SBAR-Struktur fuer dein eigenes Denken." Der Lerneffekt ist staerker als wenn die unstrukturierte Notiz als SBAR getarnt wird.

#### F-03 (NIEDRIG): Antwortoption A in Step 1.4 zu plump
- **Stelle:** Step 1.4 Antwort A ("Wir schauen einfach mal — ist Routine.")
- **Problem:** Realistisch, aber der Falsch-Feedback-Hinweis ("Recht auf ehrliche Information") ist ueberproportional schwer fuer einen relativ harmlosen Beschwichtigungssatz. Score-Abstufung etwas hart.
- **Empfehlung:** Feedback differenzieren: "Beruhigend ist ok, aber unterschlaegt die konkrete Vorinformation."

### phase-beobachten.md

#### F-04 (HOCH): Beleuchtung beim Inspizieren nicht erwaehnt — Pflicht-Pattern
- **Stelle:** Step 2.1 (beob-01-wunde-sehen) Kontext + Step
- **Problem:** Im Kontext steht nur "Handlampe" (Z. 13). Im Step selbst (hotspot) wird die Beleuchtungs-Bedingung nicht thematisiert. Anti-Pattern-Liste fordert: bei Verletzungs-/Wundinspektion immer "Licht voll einschalten — hell genug fuer Inspektion, aber nicht direkt blendend". Eine Handlampe allein reicht fuer Sakrum-Inspektion nicht (Schattenwurf).
- **Standard-Verweis:** DNQP Sturz/Wundinspektion-Logik — volle Sicht. Anti-Pattern in `pflege-konformitaet.md`.
- **Empfehlung:** Im Kontext ergaenzen: "Du schaltest das Zimmerlicht und die Bettleuchte an — Tageslicht reicht im Halbdunkel des Frueh-dienstes nicht. Die Handlampe nutzt du fuer Detailansicht."

#### F-05 (MITTEL): Step 2.4 Braden-Score-Begruendung "Mobilitaet 3"
- **Stelle:** Step 2.4 (beob-04-braden-heute)
- **Problem:** "Mobilitaet 3 (kann sich selbst umdrehen, aber traege)" — Braden Mobilitaet 3 = "leicht eingeschraenkt: macht haeufig kleine Veraenderungen". "Traege" ist kein Braden-Kriterium. Bei Hueft-TEP Tag 14 + Adipositas + Rollator ist Score 2 ("sehr eingeschraenkt") realistischer. Auch "Aktivitaet 3 (geht mit Rollator)" — Aktivitaet 3 = "geht gelegentlich". Bei "kurze Strecken Flur 15 m" passt das, aber knapp.
- **Standard-Verweis:** Braden/Bergstrom 1987
- **Empfehlung:** Score-Begruendungen schaerfen, ggf. Mobilitaet auf 2 korrigieren — Gesamtscore wird dann 13 (mittleres Risiko).

#### F-06 (MITTEL): Step 2.3 — Patient-Reaktion auf Z1 koennte staerker sein
- **Stelle:** Step 2.3 dialog
- **Problem:** Antwort B ("Sie haben eine kleine offene Wunde am Steiss") nennt das Wort "Dekubitus" nicht. Patientin hat Recht auf Diagnose-Begriff. Sandwich okay, aber Vermeidung des Fachworts ist unterkomplex — B1-Variante koennte sein "Sie haben einen Dekubitus, das ist eine Druckwunde am Steiss".
- **Standard-Verweis:** Patientenrechtegesetz § 630c BGB (Aufklaerung), Validierung (Naomi Feil)
- **Empfehlung:** B-Antwort ergaenzen: "Sie haben einen Dekubitus — eine Druckwunde am Steiss..."

### phase-planen.md

#### F-07 (NIEDRIG): Step 3.3 Begriffsverwirrung "30-Grad-Regel" vs "135-Grad"
- **Stelle:** Step 3.3 ("auch '30-Grad-Regel' in der NPUAP-Terminologie bezogen auf den Winkel zum Bett")
- **Problem:** Das ist verwirrend formuliert. 30°-Regel = Oberkoerper max. 30° angehoben (Scherkraft-Reduktion). 135°-Schraege Seitenlage = Lagerung, bei der der Patient leicht ueber die Seite hinaus auf den Bauch gedreht wird. Beides verschiedene Konzepte — der Step verschmilzt sie.
- **Standard-Verweis:** NPUAP/EPUAP/PPPIA 2019 Repositioning
- **Empfehlung:** Saetze trennen: "Achtung: 30°-Regel ≠ 135°-Schraeglage. 30° = Oberkoerperhochlagerung max., 135° = Seitenlage-Variante."

### phase-durchfuehren.md

#### F-08 (HOCH): Step 4.4 — TEP-Lagerungsregel widerspruechlich
- **Stelle:** Step 4.4 (durch-04-positionierung-135) — "keine Adduktion ueber 0°, kein Ueberkreuzen der Beine"
- **Problem:** "Adduktion ueber 0°" ist medizinisch unklar und potenziell falsch. Die Standardregel nach TEP ist: **keine Adduktion ueber Mittellinie** (also kein Ueberkreuzen) + keine Innenrotation + keine Flexion ueber 90°. "Ueber 0°" wuerde bedeuten "gar keine Adduktion" — das ist zu streng und im 135°-Setup mit Kissen zwischen den Beinen schwer einzuhalten. Spirale 2 = Tag 14 post-OP — Luxationsrisiko zwar reduziert, aber Regel gilt 6 Wochen.
- **Standard-Verweis:** Paetz Chirurgie / postoperative TEP-Nachsorge, Standardliteratur orthopaed. Pflege
- **Empfehlung:** Korrigieren auf "keine Adduktion ueber Koerpermittellinie hinaus, keine Innenrotation, Flexion max. 90°. Das Kissen zwischen den Beinen verhindert genau das."

#### F-09 (MITTEL): Step 4.3 Aussage 3 — informierte Einwilligung okay, aber zu absolut
- **Stelle:** Step 4.3 truefalse Aussage 3 ("Frau Yilmaz muss fuer das Foto keine Einwilligung geben — FALSCH")
- **Problem:** Richtig, aber Begruendung im Feedback fehlt. Bei Behandlungs-Fotodoku ist die Rechtslage gestuft: Behandlungsbezogene Fotos sind oft durch den Behandlungsvertrag/§ 630c BGB gedeckt, aber **wenn das Bild Personen identifizierbar zeigt** (selten bei Sakrum-Foto, aber moeglich) braucht es DSGVO-Einwilligung. Die pauschale "Einwilligung Pflicht" ist in der Praxis nuancierter.
- **Empfehlung:** Feedback ergaenzen: "Information und Zustimmung der Patientin Pflicht — auch wenn das Foto rein wundbezogen ist. DSGVO Art. 9 + § 630e BGB Aufklaerungspflicht."

#### F-10 (NIEDRIG): Step 4.5 — Manuka-Honig-Antwort fachlich korrekt, aber didaktisch riskant
- **Stelle:** Step 4.5 dialog Antwort B
- **Problem:** Stimmt fachlich (Medihoney ist evidenzbasiert), aber bei Lehrlingen besteht Verwechslungsgefahr "Honig aus dem Glas darf ich auf Wunden". Das Feedback sollte den Unterschied "lebensmittel-Honig vs. Medizinprodukt" explizit machen.
- **Empfehlung:** Feedback ergaenzen: "Wichtig: NUR steriler Medizinhonig (Medihoney als CE-zertifiziertes Medizinprodukt). Nie Lebensmittel-Honig auf Wunden."

### phase-evaluieren.md

#### F-11 (NIEDRIG): Step 5.2 Antwort D zu schnell als "TEILWEISE richtig"
- **Stelle:** Step 5.2 mc Antwort D ("Frau Yilmaz haette die Luecke selber schliessen koennen durch Eigenbewegung")
- **Problem:** "Teilweise richtig" ist heikel — bei einer Patientin mit Neuropathie + Adipositas + Tag 15 post-OP kann man die Verantwortung nicht auf Patienten-Eigenbewegung schieben. Das ist im Kern eine Verharmlosung der Pflegeverantwortung.
- **Empfehlung:** Antwort D als FALSCH werten, Feedback: "Eigenressource ist relevant fuer Mobilisation, aber Dekubitusprophylaxe ist Pflegeverantwortung. Schon Sprache 'haette koennen' ist viktimisierend."

### phase-dokumentieren.md

Keine kritischen Findings. Step 6.3 (DNQP-Standard-Mapping) und 6.4 (Reflexion) sind didaktisch sauber.

### baustein-trigger.md

#### F-12 (NIEDRIG): T05 referenziert Baustein-ID inkonsistent
- **Stelle:** T05 nutzt `assessments-expertenstandards-screening-assessment`, in phase-beobachten.md (Trigger Step 2.4) heisst er `assessments-expertenstandards-braden`.
- **Empfehlung:** Auf eine ID einigen.

## Cross-Step-Probleme

- **Braden-Score-Inkonsistenz Spirale 1 ↔ 2:** Spirale-1-Score laut Aktivierungs-Karte (Step 1.2 Karte 3) "Braden ≥ 12" — heute Score 14 laut 2.4. Spirale 1 sollte konkreter genannt sein (z.B. "Score 12 bei Aufnahme") fuer den Vergleich.
- **Patientenautonomie K2 vs. Plan-Reihenfolge:** Branching K2 (Frau Yilmaz dreht sich weg) liegt nach Step 4.1, also nach Vorbereitung — aber der Plan in Phase 3 hatte schon Aufklaerung + Information durchgespielt. Reihenfolge plausibel, aber ueberlappung mit Step 4.5 (Honig-Dialog) zeitlich unklar.

## Zusammenfassung

- **2 Findings HOCH** (F-04 Beleuchtung, F-08 TEP-Lagerungsregel)
- **5 Findings MITTEL** (F-02, F-05, F-06, F-09, F-11 Verharmlosung)
- **5 Findings NIEDRIG** (F-01, F-03, F-07, F-10, F-12)

**Allgemeine Beobachtungen:**
- Pflege-fachlich ueberwiegend stark, didaktischer Aufbau (Sehen vor Einordnen, S-P-E-Donabedian, Spirale-2-Progression) ist Best Practice
- Schmerz nicht bagatellisiert (gut: Step 2.3 nimmt Z1 ernst, kein "ist ja nichts")
- Kinaesthetik im Plan-File nicht explizit thematisiert — relevant beim Drehen auf Seite (Step 2.1 Kontext "Du hilfst Frau Yilmaz, sich auf die Seite zu legen") — sollte als "Sie dreht sich, du sicherst das Becken" formuliert werden, nicht als "ich drehe Sie". Pruefen ob Code dies sauber umsetzt (laut Code-Review PASS — vermutlich ok).
- B1-Konsistenz im patient-plan.md gut (klare Saetze, kurze Strukturen)
- Standards-Bezug durchgehend (DNQP, NPUAP/EPUAP, Donabedian, BGB) — vorbildlich

**K.O.-Verdikt: FAIL → PASS (nach Fix-Round 2026-04-26)**

Begruendung: Beide HOCH-Findings (F-04 Beleuchtung, F-08 TEP-Lagerungsregel) sowie F-07 (30°-Regel ≠ 135°-Schraeglage) wurden im Plan UND im Code gefixt. Plan-Quelle ist jetzt fuer Spirale-3-Generierung sicher.

---

## Fix-Block (2026-04-26)

| # | Datei | Fix | Status |
|---|-------|-----|--------|
| F-04 | phase-beobachten.md Z.13 + phase-beobachten.ts Z.15+17 | Beleuchtung ergaenzt: "Du schaltest das Zimmerlicht und die Bettleuchte ein — Tageslicht reicht im Halbdunkel des Fruehdienstes nicht fuer eine Wundinspektion (volle Sicht ist Pflicht). Die Handlampe nutzt du zusaetzlich fuer Detailansicht." Anti-Pattern "nur Handlampe" beseitigt. | FIXED |
| F-07 | phase-planen.md Z.25 | Plan-Text um Begriffsabgrenzung erweitert: "30°-Regel ≠ 135°-Schraeglage. 30°-Regel = Oberkoerperhochlagerung max. 30° (Scherkraft-Reduktion bei Rueckenlage). 135°-Schraeglage = Seitenlage-Variante (45° vom Bauchlagen-Winkel)." Verschmelzung beseitigt. | FIXED |
| F-08 | phase-durchfuehren.md Z.29 | "keine Adduktion ueber 0°" ersetzt durch "keine Adduktion ueber die Koerpermittellinie hinaus (kein Ueberkreuzen der Beine), keine Innenrotation, keine Hueftflexion >90°. Lagerungsregeln 6-12 Wochen post-OP." Seitenangabe links/kontralateral explizit. | FIXED |
| F-01 | patient-plan.md Z.93 | (NIEDRIG) — bleibt offen, kosmetisch | DEFER |
| F-02 | phase-informieren.md Step 1.1 | (MITTEL — SBAR-Inhalt) — Kontext-Notiz war geringfuegig konstruiert, im Code sauber aufgeloest. | NO-OP |
| F-03 | phase-informieren.md Step 1.4 | (NIEDRIG) — Score-Abstufung, kosmetisch | DEFER |
| F-05 | phase-beobachten.md Step 2.4 | (MITTEL — Braden 3) — im Code (phase-beobachten.ts) bereits auf Mobilitaet 2, Reibung 2, Total 14 korrigiert (siehe pflege-review.md F-01/F-02). | FIXED-IN-CODE |
| F-06 | phase-beobachten.md Step 2.3 | (MITTEL — Dekubitus-Begriff) — kosmetisch, Patient-Recht, im Code sauber | DEFER |
| F-09 | phase-durchfuehren.md Step 4.3 | (MITTEL — Foto-Einwilligung) — im Code Truefalse-Step bereits mit DSGVO Art. 9 + § 630e BGB Begruendung | FIXED-IN-CODE |
| F-10 | phase-durchfuehren.md Step 4.5 | (NIEDRIG — Manuka-Honig) — im Code bereits mit "medizinischer Manuka-Honig" + "Hydrokolloid statt Honig auf aerztliche Anordnung" | FIXED-IN-CODE |
| F-11 | phase-evaluieren.md Step 5.2 | (MITTEL — "haette koennen") — im Code bereits mit "Eigenressource ergaenzt — ersetzt nicht die Pflegepflicht" | FIXED-IN-CODE |
| F-12 | baustein-trigger.md T05 | (NIEDRIG — Baustein-ID-Inkonsistenz) — kosmetisch | DEFER |

### Validierung

- TypeScript-Check (`npx tsc --noEmit`) nach allen Fixes: PASS
- Plan-Quelle und Code-Quelle jetzt konsistent — Spirale-3-Generierung kann von dieser Plan-Basis ableiten ohne Anti-Patterns zu reproduzieren.

**Neues K.O.-Verdikt: PASS.** 2 HOCH + 1 MITTEL aus Plan adressiert; weitere MITTEL-Findings sind durch Code-Review-Fix-Block bereits in der finalen Renderung gefixt. Verbleibende NIEDRIG-Findings sind kosmetisch.
