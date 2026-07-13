# Adversariales Klinik-Panel (W6) — CE-06 · ls-sander-verbruehung

**Datei:** `content/ce-06/situationen/ls-sander-verbruehung/phases.ts` (+ `patient.ts`)
**Fall:** Renate Sander, 74 — Verbrühung 2. Grades (kochendes Wasser) an rechtem Unterarm + Oberschenkel, ambulanter Pflegebesuch
**Deckt:** CE06-LE1-K1 (Rest) — Erste Hilfe Verbrennung/Verbrühung, Verätzung (Haut + Mund/Speiseröhre), Hitze- und Kältenotfälle
**Erweiterung geprüft:** 3 Wissens-Tabs (Schwere/Fläche · Kühlen+Hausmittel · Vier-Notfälle-Krone) + Branching Erstversorgung + TrueFalse Hausmittel + Verätzung-Mund-MC + Hypothermie-MC + SBAR-MC
**Grounding:** `specs/ce-06/kernfakten/thermisch-chemische-notfaelle.md` (F-01..F-13, **32/32 Verbatim-Belege verifiziert**) + `notfallassessment.md` F-07 (SBAR, Leonard 2004, verifiziert)
**Datum:** 2026-07-13

## Verdikt: ✅ PASS (kein K.O.)

| | HOCH | MITTEL | NIEDRIG |
|---|---|---|---|
| Befunde | **0** | 0 | 3 (informativ) |

Kein HOCH-Befund über alle vier deterministischen Lenses + 5. semantischen Lens. Drei informative NIEDRIG-Anmerkungen (N1–N3) für den Gründerin-Backstop — **nicht blockierend**, alle konservativ-sicher.

**Deterministische Pre-Filter (alle grün):**
- `klinik-panel.ts` — Zahlen 0 · Recht 0 · DNQP/Standard 0 · Konsistenz 0 → PASS (exit 0)
- `pflege-anti-pattern-check.ts` ce-06 — 0 Funde (HOCH/MITTEL/NIEDRIG je 0)
- `step-grounding-check.ts` — claim-tragend **11** · gegroundet **11** · dangling **0** → PASS
- `zitat-verifizierer.ts` — thermisch-chemische-notfaelle **32/32** + F-07 SBAR: alle Belege verifiziert

---

## Lens 1 — Arzneimittel-/Zahlen-Sicherheit ✅
Out-of-Range **0** · keine erfundenen Werte. Jede physiologische Zahl ist an F-01..F-13 verbatim-gegroundet.

| Zahl / Wert | Ergebnis | Beleg |
|---|---|---|
| Verbrennungsgrade 1–3 (Rötung / Blasen / Verkohlung) | OK | F-02 verbatim „Zusätzliche Bildung von Brandblasen mit starken" + „Komplette Zerstörung der Haut" |
| Handfläche ≈ 1 % KOF · Neuner-Regel | OK | F-03 verbatim „hat sich die Neuner-Regel bewährt"; Handfläche-1 %-Regel |
| Schockschwelle „> 10–15 %" (Volumenmangel) | OK | F-03 verbatim „droht ein Volumenmangelschock". erk-02 nutzt korrekt die **Schock**-Schwelle, nicht die Klinik-Schwelle |
| Klinik-Indikation „> 10 % KOF" | OK | F-06 verbatim „müssen im Krankenhaus behandelt werden" — sauber getrennt von der 10–15-%-Schockschwelle (keine Konflation) |
| Kühlen ~20 °C / ~10 Min lauwarm | OK | F-04 verbatim „mit lauwarmem Wasser" + „ca. 20 °C … ca. 10 Min." |
| Verätzung Mund ~200 ml, nicht mehr | OK | F-09 verbatim „in kleinen Schlucken zu" (~200 ml, sonst Erbrechen) |
| Hypothermie < 35 °C / < 30 °C lebensbedrohlich | OK | F-12 verbatim „Körpertemperatur unter 35" + „Lebensgefahr … unter 30" |
| Wiedererwärmen max. ~1 °C/h (ref-00d) | OK | F-13 verbatim „passives langsames Wiedererwärmen um maximal 1" |
| Falldaten (Alter 74, ~15 Min her, „wenige Prozent") | OK | Falldaten, keine Autoritäts-Claims — konsistent gehalten |

## Lens 2 — Recht & Ethik / Currency ✅
`standards-currency-check`: Recht-Lens **0** Funde. Keine §-Verweise, keine veralteten Normen (n/a für diesen Fall).

| Aspekt | Ergebnis | Beleg |
|---|---|---|
| Kompetenzgrenze Ersthelfer/Pflege | OK | Content lehrt Erstversorgung (kühlen, abdecken, Wärmeerhalt) + zeitnahe ärztliche Versorgung/Rettungsdienst/Giftnotruf — keine ärztlichen Maßnahmen (Analgesie via R im SBAR delegiert, ala-01) |
| Ambulanter Alleingang | OK | Rollen-/Belastungsreflexion (ref-01) statt Kompetenzüberschreitung; Nachbarin wird ruhig-bestimmt gestoppt (Fürsorge/Schadensabwehr) |
| Keine eigenmächtige invasive Maßnahme | OK | Blasen bewusst NICHT geöffnet (F-05); Salben/Medikation ausdrücklich unterlassen |

## Lens 3 — DNQP-/Standard-Grounding ✅
`step-grounding-check`: claim-tragend **11** · gegroundet **11** · dangling **0**. Jeder gelehrte Erste-Hilfe-**Schritt** ist gegroundet:

| Gelehrter Schritt | Ergebnis | Beleg |
|---|---|---|
| Kurz mit lauwarmem Wasser kühlen, kein Eis (Auskühlung) | OK | F-04 („mit lauwarmem Wasser"; „Risiko eines Wärmeverlusts zu hoch") |
| Keine Salben/Puder/Sprays/Hausmittel, Blasen zu, festklebende Kleidung nicht abreißen, steril abdecken | OK | F-05 (3 Verbatim-Belege) |
| Wärmeerhalt/zudecken nach Kühlen | OK | F-04 (Wärmeverlust vermeiden) |
| Verätzung Haut: Kleider weg + fließend spülen, eigene Finger schützen | OK | F-08 (3 Verbatim-Belege) |
| Verätzung Mund: kleine Schlucke ~200 ml, NIE Erbrechen | OK | F-09 („in kleinen Schlucken zu"; „Niemals Erbrechen auslösen") |
| Hitzschlag: aus der Hitze, feuchte Tücher, lagern (Bewusstlosigkeit stabile SL), Vitalzeichen | OK | F-10/F-11 (verbatim „Betroffenen aus der Sonne bringen"; „bei Bewusstlosigkeit stabile Seitenlage") |
| Hypothermie: passiv langsam wärmen, KEINE heiße Wärmflasche/Wärmestrahler | OK | F-13 („führt zur oberflächlichen Gefäßerweiterung mit Blutdruckabfall") |
| SBAR-Übergabe (4 Elemente, priorisiert) | OK | notfallassessment F-07 (Leonard et al. 2004, verifiziert) |

## Lens 4 — Konsistenz (Patient-Daten / Cross-Step) ✅
Doppelte stepIds **0** · fremde patientIds **0**.

| Aspekt | Ergebnis | Beleg |
|---|---|---|
| Sander-Daten (74 / rechter Unterarm + Oberschenkel / 2. Grad) durchgängig | OK | patient.ts `alter:74`, `diagnosen:["… 2. Grades an rechtem Unterarm und Oberschenkel"]` == SBAR ueb-01 „Frau Sander, 74 … rechtem Unterarm und Oberschenkel … Zweitgradig" |
| Vorgeschichte konsistent | OK | patient.ts „arterielle Hypertonie" + „lebt allein" == SBAR-Background „Lebt allein, Hypertonie" |
| „Blasen bleiben zu" cross-step widerspruchsfrei | OK | erk-01, erm-00b, erm-01, erm-02 — Blase durchgängig „nicht öffnen" (kein Item hier korrekt/dort falsch) |
| Kühl-Botschaft cross-step widerspruchsfrei | OK | „lauwarm, kurz, kein Eis" identisch in Tab B, Branching, SBAR |
| Zeitlogik | OK | erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren linear; SBAR „vor etwa 15 Minuten" plausibel |
| Verätzungs-/Hypothermie-Transfer als „anderer Fall" | OK | ref-00c (verwirrter Bewohner, Rohrreiniger) + ref-00d (älterer Mann, 32 °C) explizit als Fremdfälle markiert — kein Sander-Datenkonflikt |

## Lens 5 — Semantisch (pflege-validator) ✅
`pflege-anti-pattern-check`: **0** Funde. Distraktor-vs-Empfehlung sauber getrennt — jedes gefährliche Muster erscheint **ausschließlich als FALSCHE Option mit korrektiver Auflösung** („lehrt über Falsches", nicht „empfiehlt Falsches"):

| Gefahren-Muster | Wo | Auflösung |
|---|---|---|
| Mehl/Butter/Öl/Salbe auf Brandwunde | erk-01 (implizit), erm-00b (Spektrum), erm-01 (Distraktor), erm-02 (TrueFalse=false), ueb-01 (Distraktor) | Immer widerlegt: hält Hitze, verklebt, Infektionsgefahr — nichts draufschmieren (F-05) |
| Brandblasen aufstechen | erk-01 (Distraktor), erm-01 (Distraktor), erm-02 (TrueFalse=false) | Blase schützt vor Keimen → bleibt zu (F-05) |
| Eiskaltes Wasser/Eis großflächig | erm-01 (Distraktor) | Auskühlung senkt Kerntemperatur, verschlechtert Prognose → lauwarm (F-04) |
| Erbrechen auslösen bei Mund-Verätzung | ref-00c (2 Distraktoren: Finger in Hals; 1 L Wasser) | Verätzt Speiseröhre erneut → kleine Schlucke, NIE Erbrechen (F-09) |
| Heiße Wärmflasche/heißes Bad bei Unterkühltem | ref-00d (Distraktor) | Gefäßerweiterung → Blutdruckabfall → passiv langsam wärmen (F-13) |
| „Schmerz = Schweremaßstab" | erk-01 (Distraktor) | Bei tiefen Verbrennungen Schmerzfühler zerstört → Schmerz kein Maßstab (F-02) |

Pseudo-Empathie, Realitätscheck, Step-Typ-Pflichten: sauber. Feedback durchgängig konkret (WAS/WARUM), Sandwich im B1. SBAR-Distraktoren = realistische Anfängerfehler (zu vage / Anekdote statt Fakten), keine Karikaturen. Reflexion (Bloom 5) offen + systemPrompt fachlich orientiert.

---

## NIEDRIG-Anmerkungen (informativ, nicht blockierend)

### N1 — Konservative Klinik-/Arzt-Empfehlung bei kleiner 2.-grädiger Fläche
**Step:** `ce06-sander-erk-02`, `ce06-sander-ala-01` · **Lens 3**
Die Botschaft „2.-grädige Verbrühung bei alter Frau gehört zeitnah ärztlich versorgt, auch bei kleiner Fläche" ist kein wörtlicher F-01..F-13-Claim (F-06 bindet die Klinikpflicht an > 10 % KOF bzw. Sonderlokalisationen). **Bewertung:** KEIN Fehler — konservativ-sicher und pflegefachlich korrekt (offene Wunde, Infektions-/Schmerzrisiko, Alter); die Aussage bleibt bei „ärztlich versorgen", nicht bei „Klinikpflicht". Sauber ist auch, dass die 10-%-Zahl NUR für die Schockgefahr (F-03) verwendet und explizit von der Wundversorgung abgegrenzt wird.

### N2 — „alte Menschen" als Zusatz zur Kühl-Zurückhaltung
**Step:** `ce06-sander-erm-00b-kuehlen` · **Lens 1/3**
F-04 nennt „große Flächen und Kinder" für zurückhaltendes Kühlen; der Content ergänzt „alte Menschen". **Bewertung:** KEIN Fehler — physiologisch begründete, sichere Extrapolation (verminderte Thermoregulation im Alter, im Fall selbst thematisiert). Richtung ist konservativ (weniger auskühlen).

### N3 — Zusätze „Giftnotruf" und „intensivmedizinisch versorgen"
**Step:** `ce06-sander-ref-00c-veraetzung` („Giftnotruf"), `ce06-sander-ref-00d-hitze-kaelte` („intensivmedizinisch bei Bewusstseins-/Kreislaufstörung") · **Lens 1/3**
Beide Zusätze stehen nicht wörtlich in F-09/F-12/F-13. **Bewertung:** KEIN Fehler — Standard-Erste-Hilfe (Giftnotruf ist eine Form der in F-09 geforderten „sofortigen ärztlichen Hilfe"; Intensivversorgung bei schwerer Hypothermie ist unstrittig). Konservativ-sicher.

---

## Beschaffung
Keine. Alle gelehrten Aussagen sind entweder verbatim gegroundet (F-01..F-13, F-07) oder konservativ-sichere Standard-Erste-Hilfe-Ergänzungen (N1–N3). Sollte die Gründerin N1–N3 wörtlich in die Kernfakten heben wollen, gilt: **nur mit verifiziertem Beleg** (`zitat-verifizierer`) — nichts erfinden.

*Panel = umfassende Vorlage. Gründerin bleibt menschlicher Backstop und kann jeden Befund overrulen.*
