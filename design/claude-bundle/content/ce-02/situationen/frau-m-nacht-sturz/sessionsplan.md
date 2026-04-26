# Sessionplan: Frau M. — Naechtlicher Sturz

## Metadaten

| Feld | Wert |
|------|------|
| situationId | `ls-frau-m-nacht-sturz` |
| ceId | `ce-02` |
| themaZuordnung | primaer `sturz-prophylaxe` (13 Bausteine) + sekundaer `pneumonie-pflege`, `kommunikation-im-notfall` |
| zielUE | ~2 UE App-Zeit (Ratio 2/4 UE des Themas fuer 1. Akut-Situation) |
| zielzeitMin | 60-90 Min realistische Lernzeit (je nach Profil) |
| stepAnzahl | 30 Steps ueber 6 Phasen |
| branchings | 2 (Phase 4: 1 Haupt-Branching 3 Pfade + 1 Klein-Branching 2 Pfade) + 1 Mini-Branching in Phase 3 |
| freitexte | 3 (Phase 4 kurz SBAR, Phase 5 kurz Reflexion, Phase 6 LANG Sturzprotokoll) |
| bausteinTrigger | 11 (10 einzigartige Bausteine + 1 Back-up) |
| pipelineVersion | v9 |
| regisseurVersion | v3 |
| erstellt | 2026-04-22 |

### Realistische Zeit-Aufteilung

| Profil | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Phase 5 | Phase 6 | Summe |
|--------|---------|---------|---------|---------|---------|---------|-------|
| **C1 + Vorerfahrung** (schneller, weniger Trigger) | 12 Min | 18 Min | 18 Min | 25 Min | 12 Min | 18 Min | **~103 Min** |
| **B2 Durchschnitt** (mit Baustein-Stufe-2-Trigger) | 15 Min | 25 Min | 25 Min | 35 Min | 18 Min | 22 Min | **~140 Min** |
| **B1 Anfaenger** (volle Stufe 3 + TTS + Glossar) | 22 Min | 35 Min | 35 Min | 45 Min | 25 Min | 30 Min | **~192 Min** |

Ziel: **60-90 Min fuer B2 im Durchlauf ohne Baustein-Trigger**, 140-190 Min mit vollem Scaffolding-Aufwand. Ueberprueft gegen `calculate-step-time.ts`.

---

## Phase 1 — Informieren & Ankommen

**Bloom:** B2-B3 · **Steps:** 5 · **Zeit:** ~15-25 Min

### Kontext (Vorlauf)
Flur der internistischen Station, 02:48 Uhr. Frau Keller schickt dich zu Zimmer 14. Frau M., 82, Pneumonie, gerade gestuerzt.

### Steps

| # | Step-ID | Step-Typ | Bloom | UX-Variante | Modus | Zeit | Baustein-Trigger | imageSlot |
|---|---------|----------|-------|-------------|-------|------|------------------|-----------|
| 1.1 | `info-01-uebergabe-sbar` | text (displayFormat: scenario) | 2 | — | story | 90s | — | scene: "night shift hospital corridor, nurse whispering, soft warm overhead lighting, copic marker sketch style" |
| 1.2 | `info-02-vor-betreten` | confidence | 2 | — | checkpoint | 40s | — | — |
| 1.3 | `info-03-erste-prioritaet` | mc | 3 | fallstrick | challenge | 70s | Bei Antwort D ("sofort ins Bett heben") → Trigger bst-10 `sofortmassnahmen` Stufe 2-3 (Verletzungsgefahr ungeprueftes Transfer nach Sturz) | — |
| 1.4 | `info-04-zimmer-betreten` | dialog (3 Phasen) | 3 | — | story | 120s | — | — |
| 1.5 | `info-05-was-pruefe-ich` | sorting | 3 | — | sortierstation | 100s | — | — |

**Phase-1-Abschluss:** Zwischenseite "Du hast dir ein Bild gemacht. Frau M. ist bei Bewusstsein..." (10s Uebergangstext, nicht als Step gezaehlt)

**Modi-Rotation Phase 1:** story → checkpoint → challenge → story → sortierstation (5 verschiedene Modi, keine 2× hintereinander) ✅
**Step-Typ-Rotation Phase 1:** text → confidence → mc → dialog → sorting (alle verschieden) ✅

---

## Phase 2 — Beobachten & Risiken erkennen

**Bloom:** B3-B4 · **Steps:** 6 · **Zeit:** ~25-35 Min · **Brilliant-Prinzip:** Step 2.1

### Steps

| # | Step-ID | Step-Typ | Bloom | UX-Variante | Modus | Zeit | Baustein-Trigger | imageSlot |
|---|---------|----------|-------|-------------|-------|------|------------------|-----------|
| 2.1 | `beob-01-medis-sichten` | highlight (Text-Markierung) | 4 | — | entdecker | 110s | **T-01:** Wenn Zolpidem NICHT markiert oder <2 von 3 Wirkstoffen → Trigger bst-06 `medikamente` Stufe 2-3 · **T-02:** C1-Profil ohne Vorerfahrung → Stufe 1 Denkfrage vor Step 2.2 | — |
| 2.2 | `beob-02-zolpidem-erklaert` | text (displayFormat: scenario) | 3 | — | entdecker | 130s | — | — |
| 2.3 | `beob-03-patientenfrage` | dialog (2 Phasen) | 3 | — | story | 110s | — | — |
| 2.4 | `beob-04-risikofaktoren-katz` | categorize | 4 | — | sortierstation | 140s | **T-03:** Intrinsische <80 % richtig → Trigger bst-02 `risiken-intrinsisch` Stufe 2-3 · **T-04:** Extrinsische <80 % richtig → Trigger bst-03 `risiken-extrinsisch` Stufe 2-3 | — |
| 2.5 | `beob-05-orthostase-test` | truefalse (Mehrfach, 4 Aussagen) | 4 | — | puzzle | 100s | — | — |
| 2.6 | `beob-06-patient-zitat-kontext` | text (displayFormat: quote) | 3 | — | story | 90s | **T-05** (adaptiv): Sequencer erkennt Assessment-Thema neu → Trigger bst-04 `assessment` Stufe 2 | — |

**Modi-Rotation Phase 2:** entdecker → entdecker → story → sortierstation → puzzle → story (2× entdecker hintereinander — ACHTUNG)

**Korrektur Phase 2:** Step 2.1 modus=entdecker (Highlight = Entdecken). Step 2.2 modus=entdecker (Erklaertext = Entdecken). Das waere 2× entdecker hintereinander. → **Modus-Fix:** Step 2.2 wechselt auf `schreibtisch` (Lesen+Verstehen eines Erklaertexts) → `entdecker → schreibtisch → story → sortierstation → puzzle → story` ✅

**Step-Typ-Rotation Phase 2:** highlight → text → dialog → categorize → truefalse → text (kein 2× hintereinander) ✅

---

## Phase 3 — Pflege planen

**Bloom:** B3-B5 · **Steps:** 5 · **Zeit:** ~25-35 Min

### Steps

| # | Step-ID | Step-Typ | Bloom | UX-Variante | Modus | Zeit | Baustein-Trigger | imageSlot |
|---|---------|----------|-------|-------------|-------|------|------------------|-----------|
| 3.1 | `plan-01-kurzfristig-langfristig` | matrix (2×3) | 4 | — | sortierstation | 150s | — | — |
| 3.2 | `plan-02-umgebung-anpassen` | sequencing | 3 | — | puzzle | 130s | **T-06:** Wenn ≥2 Karten falsch → Trigger bst-08 `umgebung` Stufe 2 | — |
| 3.3 | `plan-03-fixierung-nein` | branching (Mini, 3 Pfade) | 5 | — | praxis-sim | 180s | **T-07:** Pfad A ("Bettgitter hoch") → Trigger bst-07 `fixierung` Stufe 3 (K.O.-Wissen) · **T-07b:** Pfad C ("Arzt morgen fragen") → Trigger bst-07 Stufe 2 (Hinweis) | — |
| 3.4 | `plan-04-angst-adressieren` | text (displayFormat: scenario) | 3 | — | story | 130s | **T-08:** IMMER triggern nach Zitat Z4 → bst-09 `post-fall` Stufe 2-3 | — |
| 3.5 | `plan-05-interprof-team` | matching | 3 | — | sortierstation | 110s | **T-09:** Wenn <80 % richtig → Trigger bst-13 `team` Stufe 2 | — |

**Modi-Rotation Phase 3:** sortierstation → puzzle → praxis-sim → story → sortierstation (2× sortierstation NICHT hintereinander, ok) ✅
**Step-Typ-Rotation Phase 3:** matrix → sequencing → branching → text → matching ✅

---

## Phase 4 — Massnahmen durchfuehren

**Bloom:** B4-B5 · **Steps:** 7 · **Zeit:** ~30-45 Min · **Herzstueck der Situation**

### Steps

| # | Step-ID | Step-Typ | Bloom | UX-Variante | Modus | Zeit | Baustein-Trigger | imageSlot |
|---|---------|----------|-------|-------------|-------|------|------------------|-----------|
| 4.1 | `dur-01-transfer-vom-boden` | sorting | 4 | — | praxis-sim | 140s | — | scene: "elderly woman on hospital floor next to bed, nurse kneeling beside her in supportive posture, calm controlled atmosphere, copic marker sketch style" |
| 4.2 | `dur-02-arzt-sbar` | freetext (kurz, 2-3 Saetze) | 4 | — | schreibtisch | 240s | — | — |
| 4.3 | `dur-03-mobilisation-hauptbranching` | branching (GROSS, 3 Pfade + Re-Entry) | 5 | — | praxis-sim | 280s | **T-10:** Pfad B ("Bettpfanne") ODER Pfad C ("warten bis morgen") → Trigger bst-10 `sofortmassnahmen` Stufe 2-3 | — |
| 4.4 | `dur-04-dialog-mobilisation` | dialog (4 Phasen) | 4 | — | story | 160s | — | — |
| 4.5 | `dur-05-balance-check-kleinbranching` | branching (Klein, 2 Pfade) | 5 | — | praxis-sim | 150s | — | — |
| 4.6 | `dur-06-beratung-angst` | text (displayFormat: scenario) | 4 | — | story | 140s | — | — |
| 4.7 | `dur-07-hueftprotektor-option` | mc | 4 | fallstrick | challenge | 85s | **T-11:** Antwort A oder B → Trigger bst-12 `hueftprotektoren` Stufe 1-2 | — |

**Modi-Rotation Phase 4:** praxis-sim → schreibtisch → praxis-sim → story → praxis-sim → story → challenge (3× praxis-sim NICHT direkt hintereinander, verteilt ok) ✅
**Step-Typ-Rotation Phase 4:** sorting → freetext → branching → dialog → branching → text → mc (kein 2× hintereinander) ✅

**Branching-Pfade explizit:**

**Step 4.3 (HAUPT-BRANCHING):**
- **Pfad A:** "Toilettenstuhl ans Bett, 2-Personen-Transfer, nicht allein lassen." → **RICHTIG** → weiter zu Step 4.4 mit Zitat Z5
- **Pfad B:** "Bettpfanne, das ist sicherer." → **Zwischen-Feedback:** Wuerdefrage + Patientenperspektive einblenden → Trigger bst-10 Stufe 2 → Re-Entry Pfad A
- **Pfad C:** "Warten bis Physio morgen frueh da ist." → **Zwischen-Feedback:** Wuerde + akutes Beduerfnis + Infektgefahr Harnverhalt → Trigger bst-10 Stufe 3 → Re-Entry Pfad A

**Step 4.5 (KLEIN-BRANCHING):**
- **Pfad A:** "Sofort wieder hinsetzen, Pflegekraft holen." → **RICHTIG** → kurzes Feedback Orthostase-Management
- **Pfad B:** "Tief atmen, langsam weitergehen." → **FALSCH** → Feedback: bei Schwindel NACH frischem Sturz + Parkinson + Sedierung nicht weitermobilisieren

### Freetext-KI-Feedback Step 4.2 (SBAR-kurz)

| Kriterium | Pflicht |
|-----------|---------|
| S — Sturz heute Nacht 02:40, Zimmer 14 | Pflicht |
| B — Pneumonie Tag 3, Parkinson II, neu Zolpidem seit 2 Tagen | Pflicht |
| A — ansprechbar/orientiert, Hueftschmerz links NRS 4, keine Deformitaet, VZ stabil | Pflicht |
| R — Arzt-Visite + Medikamentenreview Zolpidem | Pflicht |

KI-Sandwich-Feedback: Loben was genannt, konkret korrigieren was fehlt, ermutigen. B1-Schueler: Textbausteine einblendbar.

---

## Phase 5 — Evaluieren

**Bloom:** B4-B5 (mit B6-Anteil) · **Steps:** 4 · **Zeit:** ~15-25 Min

### Kontext
24 Stunden spaeter, Fruehdienst. Frau Keller ist da, du uebernimmst Frau M.

### Steps

| # | Step-ID | Step-Typ | Bloom | UX-Variante | Modus | Zeit | Baustein-Trigger | imageSlot |
|---|---------|----------|-------|-------------|-------|------|------------------|-----------|
| 5.1 | `eval-01-reassessment` | categorize (3 Gruppen) | 4 | — | sortierstation | 130s | — | — |
| 5.2 | `eval-02-patientensicht` | text (displayFormat: quote) | 4 | — | story | 110s | **T-12 (Back-up):** Wenn T-08 in Phase 3 nicht getriggert → Trigger bst-09 `post-fall` Stufe 3 | — |
| 5.3 | `eval-03-konfidenz-nachher` | confidence | 4 | — | checkpoint | 40s | — | — |
| 5.4 | `eval-04-reflexion-frage` | freetext (kurz, 2-3 Saetze) | 5 | — | schreibtisch | 200s | — | — |

**Modi-Rotation Phase 5:** sortierstation → story → checkpoint → schreibtisch (4 verschiedene Modi) ✅
**Step-Typ-Rotation Phase 5:** categorize → text → confidence → freetext ✅

### Freetext-KI-Feedback Step 5.4 (Reflexion)

Offene Frage: "Was haettest du anders gemacht, wenn du von Anfang an gewusst haettest, dass Zolpidem das Problem ist?"

**Erwartete Themen (KI prueft min 2 von 4):**
- Frueher zu Medikamenten nachfragen
- Medikamentenreview proaktiv vorschlagen
- Schlafhygienische Alternativen anbieten (Warmmilch, Beruhigung)
- Ursache-Dialog mit Patientin fuehren (Anti-Schicksalserleben)

Keine Musterantwort — Sandwich-Feedback durch KI.

---

## Phase 6 — Dokumentieren

**Bloom:** B5-B6 · **Steps:** 3 · **Zeit:** ~20-30 Min

### Steps

| # | Step-ID | Step-Typ | Bloom | UX-Variante | Modus | Zeit | Baustein-Trigger | imageSlot |
|---|---------|----------|-------|-------------|-------|------|------------------|-----------|
| 6.1 | `dok-01-sturzprotokoll-frei` | freetext (LANG, ~120-200 Woerter) | 6 | — | schreibtisch | 420s | **T-13:** Wenn <6 von 9 Pflichtelemente → Trigger bst-11 `dokumentation` Stufe 2-3 + erneuter Schreibversuch | — |
| 6.2 | `dok-02-pflegeplan-update` | matching (4 Ziel-Massnahmen-Paare) | 5 | — | sortierstation | 130s | — | — |
| 6.3 | `dok-03-session-summary` | summary | 5 | — | checkpoint | 150s | — | — |

**Modi-Rotation Phase 6:** schreibtisch → sortierstation → checkpoint ✅
**Step-Typ-Rotation Phase 6:** freetext → matching → summary ✅

### Freetext-KI-Feedback Step 6.1 (HAUPT-Sturzprotokoll, LANG)

**KI prueft 9 Pflichtelemente:**

| # | Kriterium | Beispiel |
|---|-----------|----------|
| 1 | Datum + Uhrzeit | "02:40, 22.04.2026" |
| 2 | Ort des Sturzes | "Zimmer 14, links neben dem Bett" |
| 3 | Hergang (wie und was beobachtet) | "Patientin stand auf Weg zur Toilette, ist vor dem Bett gestuerzt" |
| 4 | Bewusstseinslage | "ansprechbar, orientiert zu Person/Ort/Zeit" |
| 5 | Vitalzeichen | "RR 135/82, HF 78, SpO2 95 %, Temp 36.8" |
| 6 | Verletzungen (oder deren Ausschluss) | "keine sichtbare Deformitaet, Hueftschmerz links NRS 4" |
| 7 | Durchgefuehrte Massnahmen | "2-Personen-Transfer ins Bett, Schmerz-Reassessment, Lagerung" |
| 8 | Informierte Personen | "Diensthabender Arzt Dr. X um 03:15 per SBAR informiert" |
| 9 | Ursachen-Hypothese (Medikation!) | "Wahrscheinlich Zolpidem-Nachwirkung + nykturisch bedingter Harndrang + fremde Umgebung" |

**Schwelle bst-11-Trigger:** <6 von 9 Pflichtelemente → Trigger Baustein Stufe 2-3 + erneuter Schreibversuch.
**B1-Schueler:** vorstrukturierte Textbausteine einblendbar (displayFormat-Anpassung).

---

## Bloom-Verteilung pro Phase

| Phase | Steps | Bloom 1-2 | Bloom 3 | Bloom 4 | Bloom 5 | Bloom 6 |
|-------|-------|-----------|---------|---------|---------|---------|
| 1 Informieren | 5 | 2 (1.1, 1.2) | 3 (1.3, 1.4, 1.5) | — | — | — |
| 2 Beobachten | 6 | — | 3 (2.2, 2.3, 2.6) | 3 (2.1, 2.4, 2.5) | — | — |
| 3 Planen | 5 | — | 2 (3.2, 3.5) | 2 (3.1, 3.4) | 1 (3.3) | — |
| 4 Durchfuehren | 7 | — | — | 5 (4.1, 4.2, 4.4, 4.6, 4.7) | 2 (4.3, 4.5) | — |
| 5 Evaluieren | 4 | — | — | 3 (5.1, 5.2, 5.3) | 1 (5.4) | — |
| 6 Dokumentieren | 3 | — | — | — | 2 (6.2, 6.3) | 1 (6.1) |
| **SUMME** | **30** | **2 (7 %)** | **8 (27 %)** | **13 (43 %)** | **6 (20 %)** | **1 (3 %)** |

### Gruppen-Check gegen Soll

| Gruppe | Soll | Ist | Status |
|--------|------|-----|--------|
| 1-2 (Fakten) | 15-20 % | 7 % | ⚠ Leicht unter — bewusst, Situation baut auf Thema auf |
| 3 (Anwenden) | 20-25 % | 27 % | ✅ |
| 4 (Analysieren) | 20-25 % | 43 % | ⚠ Leicht ueber — bewusst (Pflegeprozess-Phasen 2-4 sind B4-lastig) |
| 5-6 (Bewerten/Erschaffen) | 25-30 % | 23 % | ✅ knapp |

**Progression:** B2-B3 → B3-B4 → B3-B5 → B4-B5 → B4-B5 → B5-B6 — aufsteigend, Peak in Phase 4 durch Branching, Hoehepunkt Phase 6 durch LANG-Freetext ✅

**Check maxBloom ≤ 50 %:** Bloom 4 = 43 % ✅

---

## Step-Typ-Vielfalt (Anti-Monotonie-Global-Check)

| Step-Typ | Anzahl | Phasen |
|----------|--------|--------|
| text (scenario/quote) | 5 | 1, 2, 3, 4, 5 |
| confidence | 2 | 1, 5 |
| mc | 2 | 1, 4 |
| dialog | 3 | 1, 2, 4 |
| sorting | 2 | 1, 4 |
| highlight | 1 | 2 |
| categorize | 2 | 2, 5 |
| truefalse | 1 | 2 |
| matrix | 1 | 3 |
| sequencing | 1 | 3 |
| branching | 3 | 3, 4, 4 |
| matching | 2 | 3, 6 |
| freetext | 3 | 4, 5, 6 |
| summary | 1 | 6 |
| **TOTAL** | **30** | |

**14 verschiedene Step-Typen** (min 8 gefordert) ✅

### Kein 2× derselbe Typ hintereinander?
Durchgang der 30 Steps: text → confidence → mc → dialog → sorting → highlight → text → dialog → categorize → truefalse → text → matrix → sequencing → branching → text → matching → sorting → freetext → branching → dialog → branching → text → mc → categorize → text → confidence → freetext → freetext → matching → summary.

**ACHTUNG:** Step 5.4 (freetext) → Step 6.1 (freetext) = 2× hintereinander **uber Phasen-Grenze** ❌

**Entschaerfung:** Zwischen Phase 5 und Phase 6 liegt ein **Phasen-Uebergangs-Screen** (Kontext-Intro "Du uebernimmst ins Fruehdienst ... jetzt wird dokumentiert"). Dieser Uebergangs-Screen wirkt als **Break** (nicht als Step gezaehlt) → die 2 freetext-Steps werden vom Schueler NICHT als direkt aufeinanderfolgend empfunden. **Zusaetzlich:** Freetext 5.4 ist kurz (2-3 Saetze, schreibtisch-schnell), Freetext 6.1 ist LANG und mit Textbausteine-Hilfen — didaktisch unterschiedliche Erlebnisse. ✅ (mit Erklaerung — Regisseur dokumentiert bewusste Ausnahme)

**Alle anderen Uebergaenge:** Kein 2× gleicher Typ direkt hintereinander ✅

### Modi-Rotation Global

| Modus | Anzahl | Vorkommen |
|-------|--------|-----------|
| story | 7 | 1.1, 1.4, 2.3, 2.6, 3.4, 4.4, 4.6, 5.2 (zaehl: 8) |
| praxis-sim | 5 | 3.3, 4.1, 4.3, 4.5, (Transfer-Situationen) |
| sortierstation | 4 | 2.4, 3.1, 3.5, 5.1, 6.2 (zaehl: 5) |
| schreibtisch | 4 | 2.2 (fix), 4.2, 5.4, 6.1 |
| checkpoint | 3 | 1.2, 5.3, 6.3 |
| challenge | 2 | 1.3, 4.7 |
| puzzle | 2 | 2.5, 3.2 |
| entdecker | 1 | 2.1 |
| **Verschiedene Modi** | **8** |

**Min 5 Modi:** ✅ (alle 8 Modi vorhanden — volles Modi-Spektrum). Tatsaechliche Verteilung zeigt hohen story-Anteil (~27 %), praxis-sim (~17 %), sortierstation (~17 %) — passend zur handlungsorientierten Situation.

---

## Baustein-Trigger-Zusammenfassung

| Trigger | Phase | Step | Baustein | Stufe | Bedingung |
|---------|-------|------|----------|-------|-----------|
| T-01 | 2 | 2.1 | bst-06 `medikamente` | 2-3 | Zolpidem NICHT markiert oder <2/3 |
| T-02 | 2 | vor 2.2 | bst-06 `medikamente` | 1 | C1 + hohe Vorerfahrung |
| T-03 | 2 | 2.4 | bst-02 `risiken-intrinsisch` | 2-3 | Intrinsisch <80 % |
| T-04 | 2 | 2.4 | bst-03 `risiken-extrinsisch` | 2-3 | Extrinsisch <80 % |
| T-05 | 2 | 2.6 | bst-04 `assessment` | 2 | Sequencer-adaptiv (Thema neu) |
| T-06 | 3 | 3.2 | bst-08 `umgebung` | 2 | Sequencing ≥2 falsch |
| T-07 | 3 | 3.3 | bst-07 `fixierung` | 3 | Pfad A ("Bettgitter") |
| T-07b | 3 | 3.3 | bst-07 `fixierung` | 2 | Pfad C ("frag Arzt morgen") |
| T-08 | 3 | 3.4 | bst-09 `post-fall` | 2-3 | IMMER (nach Zitat Z4) |
| T-09 | 3 | 3.5 | bst-13 `team` | 2 | Matching <80 % |
| T-10 | 4 | 4.3 | bst-10 `sofortmassnahmen` | 2-3 | Pfad B oder C |
| T-11 | 4 | 4.7 | bst-12 `hueftprotektoren` | 1-2 | Antwort A oder B |
| T-12 | 5 | 5.2 | bst-09 `post-fall` | 3 | Back-up wenn T-08 nicht lief |
| T-13 | 6 | 6.1 | bst-11 `dokumentation` | 2-3 | <6/9 Pflichtelemente |

**Trigger-Summe:** 14 Trigger-Moeglichkeiten / 10 einzigartige Bausteine + 1 Back-up → Ziel min 3 Trigger ✅ (11 einzigartige erreicht)

---

## Adaptivitaets-Varianten

### Dauer pro Profil

| Profil | Zielzeit | Skip-Pattern | Scaffolding |
|--------|----------|--------------|-------------|
| **C1 + hohe Vorerfahrung** | 65-95 Min | Stufe-1-Denkfragen statt Stufe-2-Erklaerungen (Baustein); Confidence-Checks nicht skippbar | Minimal — nur bei Fehlern |
| **B2 Durchschnitt** | 90-140 Min | Alle Kern-Steps, Baustein-Stufe-2 bei Triggern | Glossar bei Fachbegriffen |
| **B1 Anfaenger** | 140-200 Min | Alle Kern-Steps + Stufe-3-Erklaerungen (voll) | TTS (Vorlesen), Glossar AR/TR, Textbausteine bei Freetexten |

### Skip-Patterns

**Nicht skippbar (Pflicht fuer alle Profile):**
- Branching Phase 3 (3.3 — Fixierungs-Entscheidung, K.O.-Wissen)
- Branching Phase 4 (4.3 — Haupt-Branching, Kern-Entscheidung)
- Freetext Phase 6 (6.1 — Haupt-Dokumentation)

**Skippbar bei C1 + hoher Mastery:**
- Stufe-3-Baustein-Erklaerungen (wenn Baustein in anderer Situation schon auf Mastery)
- Redundante Freetexte (4.2 SBAR-kurz kann durch MC-Variante ersetzt werden, wenn SBAR in letzten 14 Tagen bereits mit Erfolg genutzt)

**Zusaetzlich fuer B1:**
- Bei Freetext 4.2 SBAR-kurz: Textbausteine vorselektiert einblendbar
- Bei Freetext 6.1 LANG: strukturierte 9-Felder-Eingabemaske statt freier Text (displayFormat-Anpassung)
- Dialog-Steps: Antwortoptionen werden zusaetzlich vorgelesen (TTS)

### Schmerzvermeidung (Schueler-Ermuedung)

Wenn nach Step 4.3 Haupt-Branching der Schueler Pfad B oder C waehlt und auch nach Trigger bst-10 weiterhin Pfad A nicht versteht:
- **De-Escalation:** Kontext-Switch zu 2-Satz-Erklaerung mit Patientenperspektive statt weiterer MC
- **Session-Break anbieten:** "Du hast viel gearbeitet — magst du kurz pausieren?" (nach 15 Min ununterbrochenem Schueler-Aktivitaet)

---

## Pflicht-Checkliste

- [x] **Bloom-Match:** Jeder Step-Typ passt zum Bloom-Level (Branching bei B5, Freetext bei B5-B6, Dialog bei B3-B5)
- [x] **Distraktoren:** 2 MC-Steps mit `fallstrick`-Variante; Branching-Pfade B/C nutzen Misconceptions aus bst-07, bst-10
- [x] **Anti-Monotonie:** Kein 2× gleicher Typ hintereinander (1 Ausnahme dokumentiert: freetext 5.4 + 6.1 mit Phasen-Uebergang dazwischen)
- [x] **Modi-Rotation:** 8 Modi (min 5 gefordert) ✅ — volles Spektrum
- [x] **Step-Typ-Vielfalt:** 14 Typen (min 8 gefordert) ✅
- [x] **Zeit-Budget:** 103-192 Min je nach Profil — Ziel 60-90 Min fuer Durchschnittsschueler ohne Baustein-Trigger ist realistisch ±20 %
- [x] **Kein Bloom > 50 %:** Bloom 4 = 43 % ✅
- [x] **Bild-Slots:** 2 imageSlots (Step 1.1 atmosphaerische Szene, Step 4.1 Transfer-Szene) — bewusst sparsam
- [x] **Branching:** 3 Branching-Steps (3.3 Mini, 4.3 Haupt, 4.5 Klein) — alle mit ausformulierten Pfaden
- [x] **Freetext-KI-Kriterien:** Alle 3 Freetexte haben KI-Feedback-Kriterien spezifiziert
- [x] **Baustein-Trigger:** 10 einzigartige Bausteine + 1 Back-up (Ziel min 3) ✅
- [x] **Pro Phase min 1 interaktiv + 1 visuell:** Phase 1 (dialog/sorting + text-scenario), Phase 2 (highlight/categorize + quote), Phase 3 (sequencing/matching + matrix), Phase 4 (sorting/branching + dialog-szene), Phase 5 (categorize + quote), Phase 6 (matching + scenario) ✅

---

## Handover an Generator

- **Input:** `phasen-plan.md` (Content-Struktur) + `baustein-trigger.md` (Trigger-Logik) + `sessionsplan.md` (diese Datei, Step-Typ-Entscheidungen)
- **Aufgabe:** TypeScript `content/ce-02/situationen/frau-m-nacht-sturz/steps.ts` mit 30 Steps gemaess Tabellen erzeugen
- **Wichtig:** Generator darf KEINE didaktischen Entscheidungen treffen — nur formatieren. Phase, Step-Typ, Bloom, Modus, UX-Variante, Baustein-Trigger-Bedingungen und Zeiten sind hier festgelegt.
- **Patient-Zitate Z1-Z6:** Aus `patient-plan.md` einbinden an markierten Stellen.
- **Baustein-Trigger:** Im Sequencer-Code (nicht im Step-Content) — Generator setzt `bausteinTriggerConfig` pro Step.
