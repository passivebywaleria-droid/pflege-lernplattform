# Pflege-Review (Plan): ls-lukas-verbruehung

**Geprüft:** 2026-04-26
**Mode:** plan (retrospektive Doppelprüfung — pflege-review.md ist bereits PASS)
**Files:** 8 (patient-plan, baustein-trigger, 6 Phasen-Pläne)
**Step-Anzahl im Plan:** 30 Kern + 12 optional, 16 Step-Typen

---

## Findings

### patient-plan.md — Stammdaten

#### F-01 (NIEDRIG): Vitalwert-Einordnung HF 142 als „leicht erhöht"
- **Stelle:** patient-plan.md, Vitalzeichen-Tabelle
- **Problem:** HF 142 liegt am oberen Ende der angegebenen Norm 100–140. Bezeichnung „leicht erhöht (Schmerz, Stress)" ist klinisch korrekt (Schmerz/Stress treibt Tachykardie), aber Tabellen-Logik widersprüchlich: 142 > 140 = leicht über Norm.
- **Standard-Verweis:** GNPI 2022, altersgerechte Referenzwerte
- **Empfehlung:** Norm-Obergrenze auf 145/min anheben oder Einordnung als „obere Norm­grenze, im Schmerzkontext erklärbar" formulieren. Inhaltlich PASS.

#### F-02 (NIEDRIG): Kühlungsdauer
- **Stelle:** Unfallhergang
- **Problem:** „Lauwarmes Wasser, 15–20 Min" entspricht der GNPI-Empfehlung (10–20 Min, Wassertemp. 15–20 °C); explizite Temperaturangabe fehlt im Text.
- **Standard-Verweis:** GNPI 2022; DGV-Leitlinie 2023 (Kühlung max. 20 Min, Wasser 15–20 °C, NICHT Eiswasser, nur betroffenes Areal — Hypothermie-Gefahr bei Kindern!)
- **Empfehlung:** In `kontextB1` Phase 1 oder im Trigger-Baustein `verbruehungsgrade` Wassertemperatur und das Hypothermie-Risiko bei Kindern ergänzen — gerade für die Eltern-Anleitung („zuhause beim nächsten Mal").

---

### Phase 2 — Beobachten

#### F-03 (NIEDRIG): KUSS-Skala — Auswertungs-Schwellenwert
- **Stelle:** beob-01-kuss-skala-brilliant + Baustein `schmerzassessment-kinder`
- **Problem:** KUSS hat 5 Kategorien × 0–2 Punkte = 0–10 (technisch korrekt im Plan). Schwellenwert „≥4 = behandlungsbedürftig" wird im Sessionplan nicht explizit benannt; Lukas mit „8/10" bzw. später „9/10" ist klar interventionspflichtig — Lerner muss das aber selbst herleiten.
- **Standard-Verweis:** Büttner/Finke 2000; DNQP Schmerzmanagement (Assessment + Dokumentation bei NRS/KUSS ≥ 4)
- **Empfehlung:** Schwellenwert „≥4 = Handlungsbedarf" im Erklär-Step nach `beob-01` explizit nennen (Anti-Pattern-Liste: „NRS X, ok, im Rahmen" gilt analog für KUSS — moderate Werte dürfen nicht bagatellisiert werden).

---

### Phase 3 — Planen

#### F-04 (MITTEL): Wundauflage — Hydrokolloid vs. Polyurethanschaum
- **Stelle:** plan-02-wundversorgung-feuchte
- **Problem:** „Polyurethanschaum ODER Hydrokolloid" — bei nässender Verbrühung Grad 2a ist Hydrokolloid suboptimal (kann bei starkem Exsudat mazerieren, klebt an offener Wundfläche). Polyurethanschaum / silikonbeschichtete Wundauflage (Mepilex Ag/Border) ist die kindgerechte erste Wahl.
- **Standard-Verweis:** DGV-Leitlinie 2023; Hoehl/Kullick 2019 Kap. Wundversorgung Pädiatrie
- **Empfehlung:** Hydrokolloid streichen oder als Spätphase-Option (saubere, granulierende Wunde) kennzeichnen. Im Plan-Step Polyurethanschaum mit Silikonbeschichtung als Standard ausweisen.

#### F-05 (NIEDRIG): Holliday-Segar wird ohne ärztliche Verordnung pflegerisch dargestellt
- **Stelle:** plan-03-fluessigkeitsbedarf
- **Problem:** Erhaltungsbedarf nach Holliday-Segar (1160 ml/d) ist pflegerisch berechenbar — gut. Der „Zusatzbedarf 1–2 ml/kg/% KOF in den ersten 24h" ist eine vereinfachte Variante der Parkland-Formel. Diese ist ärztliche Verordnung (Schock-Prävention, gehört in die ärztliche Therapieplanung), nicht pflegerische Berechnungs-Aufgabe.
- **Standard-Verweis:** GNPI 2022; DGV 2023 (Volumenersatztherapie ist arztpflichtig)
- **Empfehlung:** Plan-Step trennen: pflegerisch = Holliday-Segar-Erhaltungsbedarf + Trinkprotokoll. Parkland/Verbrühungs-Zusatz als ärztliche Anordnung kennzeichnen, die Pflege überwacht (nicht selbst plant). Häufiges Anti-Pattern in CE-02-Reviews — hier knapp am Fehler vorbei.

---

### Phase 4 — Durchführen

#### F-06 (NIEDRIG): Blasen-Management
- **Stelle:** dur-04-verbandwechsel-korrekt, Schritt 1
- **Problem:** „Blasen nicht öffnen (wenn intakt)" entspricht Pflege-Praxis. DGV 2023 differenziert: kleine Blasen belassen, große/spannungsreiche werden ggf. ärztlich punktiert (steriler Stichkanal, Blasendach belassen). Im Plan nicht erwähnt — Schüler könnte denken „nie öffnen".
- **Standard-Verweis:** DGV 2023 Abschnitt Verbrennung Grad 2a
- **Empfehlung:** Hinweis ergänzen: „Großflächige/spannungsreiche Blasen → ärztliche Entscheidung über Punktion".

---

### Phase 5 — Evaluieren

#### F-07 (MITTEL): KUSS-Verlauf inkonsistent zu Aufnahmedaten
- **Stelle:** eval-02-kuss-verlauf
- **Problem:** Patient-Plan dokumentiert Aufnahme-KUSS „8/10". Phase 5 startet die Timeline mit „Aufnahme 9/10". Cross-File-Inkonsistenz.
- **Standard-Verweis:** DNQP Schmerz (valide Verlaufsdokumentation)
- **Empfehlung:** Werte angleichen — entweder Patient-Plan auf 9/10 anheben oder Timeline-Startwert auf 8/10 korrigieren.

---

## Cross-Step-Probleme

- **KUSS-Inkonsistenz:** patient (8/10) ↔ eval-02 (9/10) — siehe F-07
- Sonst hohe Konsistenz: Patient-Daten (Alter, Gewicht, Grad, KOF) durchgehend stabil; Patient-Zitate korrekt eingebettet.

---

## Zusammenfassung

- **0 Findings HOCH**
- **2 Findings MITTEL** (F-04 Hydrokolloid, F-07 KUSS-Inkonsistenz)
- **5 Findings NIEDRIG** (F-01, F-02, F-03, F-05, F-06)

**Allgemeine Beobachtungen:**
- Kein Pseudo-Empathie-Bias erkennbar — Kommunikation pädiatrisch sauber, „Beruhigen Sie sich" als Distraktor (dur-06) didaktisch korrekt verwendet.
- Standards-Bezug stark (DGV, GNPI, KKG, SGB VIII, Hoehl/Kullick, Holliday-Segar, Büttner/Finke) — bei jedem Erklär-Step mind. eine Primärquelle.
- B1-Konsistenz gut: kontextB1, bodyB1, situationB1 systematisch vorhanden, Glossar-Begriffe (KOF, Exsikkose, KUSS) erklärt.
- Sandwich-Prinzip in Feedback-Texten klar erkennbar (Lob für Sandras Erstkühlung, transparente Kinderschutz-Erklärung).
- Anti-Pattern-Liste: kein Eiswasser, keine Fixierung, keine Bagatellisierung, kein „Hochziehen unter Achseln" — alle vermieden.
- Häufiges CE-02-Anti-Pattern Parkland-Formel pflegerisch: knapp daneben (siehe F-05) — empfehlenswerte Klarstellung im Plan.

**K.O.-Verdikt: PASS**

(Code-Review pflege-review.md bereits PASS; diese Plan-Doppelprüfung bestätigt das. F-04 und F-07 sollten beim nächsten Content-Edit nachgezogen werden, sind aber kein Live-Blocker.)
