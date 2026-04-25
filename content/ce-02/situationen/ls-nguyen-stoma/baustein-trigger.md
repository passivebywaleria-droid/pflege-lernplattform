# Baustein-Trigger: Herr Nguyen — Kolostoma-Erstversorgung

**situationId:** ls-nguyen-stoma
**Thema:** stuhlausscheidung (+ 8 verknüpfte Themen)
**Trigger-Anzahl:** 18 (Pflicht: min 3 — erfüllt)

---

## Prinzip

Ein Baustein wird **getriggert**, wenn:
1. Der Schüler einen Step falsch beantwortet, der das Baustein-Wissen voraussetzt
2. ODER ein Branching-Pfad gewählt wird, der auf eine Wissenslücke hinweist
3. ODER ein Schlüsselzitat erscheint, das didaktisch ein Konzept einleitet (Brilliant-ähnlich)

**Welche Stufe erscheint?** Bestimmt der Sequencer anhand des Schülerprofils:
- C1 + Vorerfahrung → Stufe 1 (Denkfrage)
- B2 + etwas Praxis → Stufe 2 (Hinweis)
- B1 + Anfänger → Stufe 3 (Erklärung + Glossar + TTS)

---

## Trigger-Tabelle (Gesamt)

| # | Phase & Step | Trigger-Bedingung | Baustein-ID | Thema | Didaktischer Zweck |
|---|--------------|-------------------|-------------|-------|---------------------|
| T-01 | Phase 1, Step 1.2 | Antwort A (rückverlagerbar) oder C (Ileostoma) gewählt | `stuhlausscheidung-stoma-arten` | stuhlausscheidung | Stoma-Typen unterscheiden: endständig / doppelläufig / Kolostoma / Ileostoma |
| T-02 | Phase 1, Step 1.3 | < 3 von 5 Karten richtig kategorisiert | `pflegeplanung-priorisierung` | pflegeplanung | Priorisierung bei mehreren simultanen Pflegeproblemen |
| T-03 | Phase 2, Step 2.1 | Hotspot falsch geklickt (B blass, C livide oder D gereizt) | `stuhlausscheidung-stoma-inspektion` | stuhlausscheidung | Stomafarben und ihre klinische Bedeutung (rosig=gut, blass=Durchblutung, livide=Nekrose) |
| T-04 | Phase 2, Step 2.3 | < 3 richtige Markierungen (highlight) | `haut-mazerierung` | haut | Mazerierung: Stomainhalt auf Haut = Hautzerstörung durch enzymatische Wirkung |
| T-05 | Phase 2, Step 2.4 | Antwort A (verharmlosend: "kommt wieder") | `ernaehrungsassessment-nrs2002` | ernaehrungsassessment | NRS-2002: ab wann ist Ernährungsberatung Pflicht? Albumin 28 g/l als klinischer Marker |
| T-06 | Phase 2, Step 2.5 | > 2 Braden-Subskalen falsch eingeordnet | `dekubitus-prophylaxe-braden-skala` | dekubitus-prophylaxe | Braden-Skala korrekt erheben: Subskalen + Interpretation |
| T-07 | Phase 2, Step 2.6 | ≥ 2 Thrombose-Aussagen falsch | `thrombose-prophylaxe-massnahmen` | thrombose-prophylaxe | Thromboseprophylaxe: drei Säulen (Pharmakologisch / Physikalisch / Mobilisation) |
| T-08 | Phase 3, Step 3.1 | Stoma auf Rang 3 oder tiefer gesetzt | `pflegeplanung-priorisierung` | pflegeplanung | Akute Hygienepriorität vs. prophylaktische Maßnahmen — Wann ist was dringlicher? |
| T-09 | Phase 3, Step 3.2 | ≥ 3 Karten in falscher Reihenfolge | `stuhlausscheidung-beutelwechsel` | stuhlausscheidung | Beutelwechsel-Ablauf: Hygieneregeln, Schutzpaste, Plattenanpassung |
| T-10 | Phase 3, Step 3.3 | Stomatherapeut falsch zugeordnet | `stuhlausscheidung-stomatherapeut` | stuhlausscheidung | Rolle des Stomatherapeuten: Produkt-Beratung + Angehörigen-Anleitung + Nachsorge |
| T-11 | Phase 3, Step 3.4 | Pfad A gewählt (direkt animieren ohne Assessment) | `ernaehrungsassessment-nrs2002` | ernaehrungsassessment | Back-up: NRS-2002 (falls T-05 in Phase 2 nicht getriggert) |
| T-12 | Phase 4, Step 4.3 | Pfad A ("Das ist doch nicht so") oder Pfad C (Allgemeinplatz) — K1 Scham | `ganzkörperpflege-würde` | ganzkörperpflege | Körperbild-Veränderung begleiten: Spiegeln statt Trösten, Raum lassen statt falsch beruhigen |
| T-13 | Phase 4, Step 4.5 | Branching K3: Schritt A (sofort Beutel wechseln) statt B (Haut zuerst) | `stuhlausscheidung-leckage-management` | stuhlausscheidung | Leckage-Management: Haut vor Beutel — warum die Reihenfolge wichtig ist |
| T-14 | Phase 4, Step 4.7 | Antwort A (sofort Stuhl) oder C (warten bis NRS < 2) | `mobilisation-grundsätze` | mobilisation | Mobilisations-Stufen post-OP: Assessment + Vorstufen (Bettkante) vor Transfer |
| T-15 | Phase 5, Step 5.2 | Kcal-Berechnung mit > 300 kcal Abweichung | `ernaehrungsassessment-kcal-bedarf` | ernaehrungsassessment | Energiebedarf post-OP schätzen: Stressstoffwechsel, Mangelernährung, Richtwerte |
| T-16 | Phase 5, Step 5.4 | KI-Feedback: psychosoziales Thema nicht thematisiert (back-up für T-12) | `ganzkörperpflege-würde` | ganzkörperpflege | Back-up T-12: Körperbild-Veränderung spätestens in Reflexion aufgreifen |
| T-17 | Phase 6, Step 6.1 | < 6 von 9 Dokumentations-Elementen in Freitext | `stuhlausscheidung-stomadokumentation` | stuhlausscheidung | Stomadokumentation: 9 Pflicht-Elemente für Behandlungskontinuität |
| T-18 | Phase 6, Step 6.3 | Emotionaler Status auf "Nicht dokumentieren" | `pflegeplanung-psychosozial` | pflegeplanung | Psychosozialer Status gehört in den Pflegebericht — warum er behandlungsrelevant ist |

---

## Trigger-Verteilung pro Phase

| Phase | Trigger | Bausteine (Themen) |
|-------|---------|---------------------|
| 1 Informieren | T-01, T-02 | stuhlausscheidung, pflegeplanung |
| 2 Beobachten | T-03, T-04, T-05, T-06, T-07 | stuhlausscheidung, haut, ernaehrungsassessment, dekubitus-prophylaxe, thrombose-prophylaxe |
| 3 Planen | T-08, T-09, T-10, T-11 | pflegeplanung, stuhlausscheidung (×2), ernaehrungsassessment |
| 4 Durchführen | T-12, T-13, T-14 | ganzkörperpflege, stuhlausscheidung, mobilisation |
| 5 Evaluieren | T-15, T-16 (Back-up) | ernaehrungsassessment, ganzkörperpflege |
| 6 Dokumentieren | T-17, T-18 | stuhlausscheidung, pflegeplanung |
| **SUMME** | **18 (14 einzigartige + 4 Back-ups/Varianten)** | 9 Themen abgedeckt |

---

## Abgedeckte Themen durch Trigger

| Thema (themaId) | Bausteine getriggert | Hauptphasen |
|-----------------|----------------------|-------------|
| `stuhlausscheidung` | stoma-arten, stoma-inspektion, beutelwechsel, stomatherapeut, leckage-management, stomadokumentation | 1, 2, 3, 4, 6 |
| `dekubitus-prophylaxe` | braden-skala | 2 |
| `thrombose-prophylaxe` | massnahmen | 2 |
| `mobilisation` | grundsätze | 4 |
| `ernaehrungsassessment` | nrs2002 (×2 Trigger), kcal-bedarf | 2, 3, 5 |
| `ganzkörperpflege` | würde (×2 Trigger) | 4, 5 |
| `haut` | mazerierung | 2 |
| `pflegeplanung` | priorisierung (×2), psychosozial | 1, 3, 6 |
| `enterale-ernaehrung` | — (kein direkter Trigger, implizit in 5.2 Kcal-Berechnung) | indirekt |

**Hinweis zu `enterale-ernaehrung`:** Kein eigenständiger Trigger in dieser Situation — das Thema wird nicht vertieft, weil Herr Nguyen noch keine enterale Ernährung per Sonde hat (orale Kost im Aufbau). Der Baustein zu `enterale-ernaehrung` triggert in einer anderen Situation (z.B. Intensivstation). Methodisch korrekt: Nur triggern was im Fall relevant ist.

---

## Nicht getriggerte Bausteine (bewusst)

| Thema | Bausteine | Warum nicht |
|-------|-----------|-------------|
| `enterale-ernaehrung` | alle Sonden-Bausteine | Herr Nguyen hat noch keine Sonde — orale Kost im Aufbau |
| `stuhlausscheidung` | Obstipation, Diarrhoe-Management | Kein Thema in dieser Situation |
| `thrombose-prophylaxe` | Kompressionsstrümpfe anlegen | Wird im Nachmittag durch Physio aufgegriffen, nicht Kern dieser Situation |

→ Diese Bausteine triggern in anderen Situationen der CE-02 (Spirale 1+2), was das Wiederverwendungs-Prinzip erfüllt.

---

## Sequencer-Regeln

### Stufen-Wahl

```
IF Schüler.sprache === "C1" AND Schüler.vorerfahrung === "hoch":
  Stufe = 1 (Denkfrage)
ELIF Schüler.sprache === "B2" OR Schüler.vorerfahrung === "mittel":
  Stufe = 2 (Hinweis)
ELSE:
  Stufe = 3 (Erklärung + B1 + Glossar + TTS)
```

### Trigger-Deduplizierung

- T-05 und T-11 triggern denselben Baustein (`ernaehrungsassessment-nrs2002`). Wenn T-05 schon getriggert → T-11 wird unterdrückt.
- T-12 und T-16 triggern denselben Baustein (`ganzkörperpflege-würde`). T-16 ist expliziter Back-up: läuft nur wenn T-12 nicht getriggert wurde.
- T-02 und T-08 triggern denselben Baustein (`pflegeplanung-priorisierung`). Bei Doppel-Trigger: zweiter Trigger bringt Stufe 1 (Vertiefung), nicht nochmal Stufe 3.

### Interkulturelle Besonderheit (kein eigener Trigger-Baustein)

Die interkulturelle Dimension (Dolmetscher-Dilemma, Würde und Männlichkeit im kulturellen Kontext) ist **kein eigenständiger Trigger** — sie ist der Kontext der Situation und läuft durch alle Phasen. Interkulturelle Kompetenz (KB III.2) wird durch Branching-Entscheidungen und Reflexions-Freitexts trainiert, nicht durch einen Wissens-Baustein.

---

## Karteikarten-Trigger (FSRS)

Am Ende von Phase 6 werden folgende Karteikarten in das FSRS-System geladen:

- `fk-stoma-farben` (rosig=gut, blass=Durchblutung, livide=Nekrose)
- `fk-stoma-beutelwechsel-ablauf` (8 Schritte)
- `fk-stoma-leckage` (Haut zuerst, dann Beutel)
- `fk-braden-subskalen` (6 Subskalen + Interpretation)
- `fk-ernaehrung-albumin` (28 g/l = Hypoalbuminämie = Mangelernährung)
- `fk-nrs2002-trigger` (Wann Ernährungsberaterin anfordern?)
- `fk-thrombose-3-saeulen` (pharmakologisch, physikalisch, mobilisation)
- `fk-würde-körperbild` (Spiegeln statt falscher Trost)

→ 8 Karten, alle prüfungsrelevant.

---

## Qualitäts-Check

- [x] Min 3 Baustein-Trigger → 18 (14 einzigartige) ✓
- [x] Trigger über alle 6 Phasen verteilt ✓
- [x] 9 referenzierte Themen alle mit min 1 Trigger ✓ (außer `enterale-ernaehrung` — begründet)
- [x] Pfad-abhängige Trigger in Branching-Steps (T-12, T-13, T-14) ✓
- [x] Back-up-Trigger für kritisches Wissen (T-11 für Ernährung, T-16 für Würde) ✓
- [x] Stufenwahl adaptiv (C1 / B2 / B1) ✓
- [x] Trigger-Deduplizierung beschrieben ✓
- [x] Interkulturelle Kompetenz durch Situation, nicht durch Baustein (begründet) ✓
