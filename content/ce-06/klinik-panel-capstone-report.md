# Adversariales Klinik-Panel (W6) — CE-06 · ls-capstone-am-boden

**Datei:** `content/ce-06/situationen/ls-capstone-am-boden/phases.ts` (+ `patient.ts`)
**Fall:** Frau Wanda Petrova, 68 — Synkope (roter Faden) → Differenzierungs-Capstone „Jemand liegt am Boden — was ist es?" (Retrieval/Interleaving über LE1)
**Geprüft:** 2 Synthese-Tabs (erster Blick · erst Blutzucker/differenzieren) + 3 interleavte Phase-3-Fälle (HKS · Apoplex · Krampfanfall) + Synkope-Einordnung + SBAR + Reflexion
**Grounding (bestehend, KEIN neuer Kernfakt):** `notfallassessment.md` (F-01/F-03/F-07), `reanimation-bls.md` (F-01/F-02/F-04), `neurologische-akutsituationen.md` (F-01/F-04/F-08/F-09/F-10/F-11/F-13), `psychische-akutsituationen.md` (F-01/F-08)
**Datum:** 2026-07-13

## Verdikt: ✅ PASS (kein K.O.)

| | HOCH | MITTEL | NIEDRIG |
|---|---|---|---|
| Befunde | **0** | 0 | 1 (informativ) |

Kein HOCH-Befund über die vier deterministischen Lenses + 5. semantischen Lens. Eine informative NIEDRIG-Anmerkung (N1: Grounding-Nachverfolgbarkeit) für den Gründerin-Backstop — **nicht blockierend**. Deterministische Skripte: `klinik-panel.ts` PASS (0/0/0/0), `pflege-anti-pattern-check.ts` 0 Funde, `step-grounding-check.ts` PASS (Dangling 0 · Missing 0).

**Zentrale Frage beantwortet:** Ja — der „erst-Blick + erst-Blutzucker"-Algorithmus ist fachlich korrekt, und jeder claim-tragende Schritt ist gegroundet (Tabs zusätzlich abgesichert durch themenSekundaer + Wiederbegegnung + dedizierte Phase-3-Fälle mit eigenem kernfaktId).

---

## Lens 1 — Arzneimittel-/Zahlen-Sicherheit ✅
`klinik-zahlen-check`: Out-of-Range **0** · keine erfundenen Werte · keine falsch gelehrten Normwerte.

| Aspekt | Ergebnis | Beleg |
|---|---|---|
| BZ 108 mg/dl als „normal" | OK | Hypoglykämie-Schwelle < 50 mg/dl (neuro F-03 verbatim „Blutzucker unter 50 mg/dl"). 108 liegt klar im Normbereich → schließt Hypoglykämie korrekt aus |
| BZ 108 durchgängig konsistent | OK | Identisch in Kontext (Z.285), Kontext-B1 (Z.287) und SBAR-Musterlösung (Z.562) |
| Keine erfundene Dosis/Volumen | OK | Kein mg/ml-Wert für Glukose o. Ä. eingeführt; Traubenzucker nur als (korrekt widerlegter) Distraktor |
| Status epilepticus | OK | erm-03 nennt keine falsche Zahlenschwelle; Hilfe wird konservativ schon bei „über wenige Minuten" ausgelöst, Definition (F-12: sehr lang/Serie ohne Erholung) korrekt paraphrasiert |

## Lens 2 — Recht & Ethik / Currency ✅
`standards-currency-check`: Recht-Lens **0** Funde. Keine autoritativ verwendete veraltete Norm (Capstone enthält keine FeM-/Betreuungsrechts-Claims). n/a wie im Auftrag erwartet.

## Lens 3 — DNQP-/Standard-Konformität (Grounding) ✅
`step-grounding-check`: **PASS** — alle zitierten `kernfaktId` existieren, keine Dangling-/Missing-Refs. Semantische Tiefenprüfung der beiden Tabs (Sub-Claims, die über die zitierten kernfaktId hinausgehen):

| Sub-Claim | Tab | Zitierte kernfaktId | Tatsächliche Deckung | Nachverfolgbar? |
|---|---|---|---|---|
| ABCDE-Prioritäten / 2-Fragen-Erstblick | Tab 1 | notfall F-01 | notfall F-01 ✅ | ja |
| bewusstlos+atmet → stabile Seitenlage | Tab 1 | notfall F-03 | notfall F-03 ✅ | ja |
| **Schnappatmung zählt nicht als Atmung / HKS→reanimieren** | Tab 1 | (nur notfall F-01/F-03) | reanimation F-02/F-01/F-04 | **ja** — via `themenSekundaer:["reanimation-bls"]` + Wiederbegegnung→Wagner (`reanimation-bls-hks-erkennen`) + dedizierter Fall erm-01 (F-01/F-02/F-04) |
| Kreislauf da → zuerst Blutzucker | Tab 2 | neuro F-13 | neuro F-13 (verweist auf F-04) ✅ | ja |
| Synkope: kurz weg, Beine hoch, kardial gefährlich | Tab 2 | neuro F-01 | neuro F-01 + F-02 + F-06 | ja — F-02/F-06 im selben Kernfakt, ala-01 klärt kardiale Abklärung |
| Apoplex: einseitig/bleibend, time is brain | Tab 2 | neuro F-08 | neuro F-08 + F-09 | ja — dedizierter Fall erm-02 (F-08/F-09) + Wiederbegegnung→Ríos |
| Krampfanfall: nichts in den Mund, Zeit stoppen | Tab 2 | neuro F-10 | neuro F-10 + F-11 (+ F-12) | ja — dedizierter Fall erm-03 (F-10/F-11) |
| **„erregt+Fieber → an Delir denken; Eigenschutz zuerst"** | Tab 2 (Spektrum) | (keine — alle 4 zitierten sind neuro) | psychische F-01 + F-08 | **eingeschränkt → siehe N1** |

**Ergebnis:** Alle Sub-Claims sind fachlich korrekt und im Korpus verbatim gegroundet. Der einzige Sub-Claim ohne durchgängige Nachverfolgbarkeit im Datenmodell (Delir-Zeile) ist N1 (NIEDRIG, informativ). Der im Auftrag als kritisch benannte HKS/Schnappatmung-Ast (Tab 1) und der „nichts in den Mund"-Ast (Tab 2) sind **vollständig abgedeckt** — beide durch themenSekundaer + Wiederbegegnung + eigene Phase-3-Fälle mit eigenem kernfaktId.

## Lens 4 — Konsistenz (Patient-Daten / Cross-Step) ✅

| Aspekt | Ergebnis |
|---|---|
| stepId-Eindeutigkeit | OK — 10 unique IDs (erk-01/-01b/-02/-02b, ala-01, erm-01/-02/-03, ueb-01, ref-01) |
| patientId | OK — `pat-petrova-kollaps` nur für Petrova; 3 Fremdfälle klar als „ein anderer Bewohner / eine Bewohnerin / ein Bewohner" markiert, keine fremde patientId |
| Petrova-Stammdaten | OK — 68 / w / Synkope / Hypertonie durchgängig (patient.ts ↔ SBAR ↔ Phasen) |
| BZ 108 / Verlauf | OK — konsistent; „~1 Min spontan zurück, keine Ausfälle, keine Zuckungen" durchgängig |
| Kein Item hier-korrekt/dort-falsch | OK — die „erst Blutzucker"-Regel wird in erm-01 bewusst korrekt eingeschränkt (gilt nur bei laufendem Kreislauf, NICHT beim Stillstand). Das ist eine gewollte, fachlich richtige Kontextualisierung, kein Widerspruch |

## Lens 5 — Semantisch (pflege-validator) ✅
Distraktor-vs-Empfehlung, Pseudo-Empathie, Interleaving-Fallen — alles korrektiv aufgelöst; nichts Gefährliches als richtig empfohlen.

| Gefährliche Aussage | Vorkommen | semantische Einordnung |
|---|---|---|
| Zuckerwasser/Traubenzucker auf Verdacht (erk-01), bei Apoplex (erm-02), im Anfall (erm-03) | nur als **Distraktor** | korrektiv: Aspirationsgefahr; falsche Ursache bei normalem BZ; im Anfall nichts oral. ✅ (neuro F-05/F-11) |
| Reanimation trotz Reaktion+Atmung (erk-02) | nur Distraktor | korrektiv: schadet, HDM nur bei fehlender Reaktion UND Atmung. ✅ |
| Schnappatmung als Atmung deuten → SSL (erm-01) | nur Distraktor | korrektiv: klassische Fehldeutung, ist Stillstand → reanimieren. ✅ (reanimation F-02) |
| „erst Blutzucker" beim Stillstand (erm-01) | nur Distraktor | korrektiv: BZ-Regel gilt nur bei laufendem Kreislauf; Reanimation hat Vorrang. ✅ — sauber aufgelöste Interleaving-Falle |
| Beißkeil/Festhalten beim Krampf (erm-03) | nur Distraktor | korrektiv: obsolet, verletzt (Zahn/Weichteile/Frakturen). ✅ (neuro F-11) |
| Schlaganfall-Alarm auf Verdacht (erk-01, ala-01) | nur Distraktor | korrektiv: erst Grundcheck/Differenzierung; keine bleibenden Ausfälle → kein Alarm auf Verdacht. ✅ |
| Bagatellisieren der Synkope („wird schon wieder", „erledigt", „nur der Kreislauf") | nur Distraktor (erk-02, ala-01, ueb-01) | korrektiv: aktiv sichern/messen/abklären, kardiale Synkope gefährlich. ✅ — die Situation lehrt aktiv GEGEN Bagatellisierung |

**Algorithmus-Urteil:** Der Interleaving-Kern stimmt fachlich. (1) Universeller Erstblick „Reaktion? / normale Atmung?" → drei Wege (Stillstand→reanimieren; bewusstlos+atmet→SSL; reagiert→differenzieren) entspricht ABCDE/ERC. (2) „Kreislauf da → zuerst Blutzucker" ist der korrekte, oft vergessene erste Handgriff (Hypoglykämie imitiert alles). (3) Leitzeichen Synkope/Apoplex/Krampfanfall/Delir korrekt getrennt. Kein Pseudo-Empathie-/Kommunikationsmodell-Fehler; Reflexions-`systemPrompt` bewertet exakt die richtigen Kriterien.

---

## Befund N1 (NIEDRIG · informativ — Grounding-Nachverfolgbarkeit)

**Ort:** `ce06-petrova-erk-02b-differenzieren` (Tab 2), Spektrum-Zeile „Erregt/verwirrt, evtl. Fieber → an Delir denken" + zugehöriger Kerntext-Absatz („wenn jemand erregt und verwirrt ist, womöglich mit Fieber … körperliche Ursache … zuerst auf deine eigene Sicherheit").

**Befund:** Der Sub-Claim ist fachlich **korrekt** und **verbatim gegroundet** in `psychische-akutsituationen.md` F-01 („Akute Erregung kann organisch sein — Delir/Fieber ausschließen … Vitalzeichen, Temperatur, SpO2, Blutzucker") und F-08 („Eigenschutz zuerst"). Er geht jedoch über die vier zitierten `kernfaktId` des Tabs hinaus (alle neuro: F-01/F-08/F-10/F-13 — Achtung: „F-08" ist hier der **neuro**-Apoplex-Fakt, nicht der psychische Eigenschutz-Fakt), `themenSekundaer` listet nur `["notfallassessment"]`, und — anders als bei den drei anderen Differentialen — gibt es **keinen dedizierten Phase-3-Fall** und keine Wiederbegegnung für „Delir/organische Erregung". Damit ist dieser eine Sub-Claim im Datenmodell nicht so lückenlos nachverfolgbar wie die übrigen.

**Severity-Begründung:** NIEDRIG, nicht blockierend — es ist ein Traceability-/Vollständigkeits-Hinweis, KEIN Faktenfehler und KEINE gefährliche Empfehlung. `step-grounding-check` bleibt zu Recht grün (alle zitierten kernfaktId existieren).

**Beleg:** `psychische-akutsituationen.md` F-01 (PH 2019, Kap. 12.3/Fieber) + F-08 (PH 2019, Kap. 16).

**Fix (optional, Gründerin-Entscheid):** In `erk-02b` `inlineWissen.themenSekundaer` um `"psychische-akutsituationen"` erweitern (analog zu Tab 1, das `"reanimation-bls"` für den HKS-Ast führt). Damit wäre die Delir-Zeile ebenso explizit nachverfolgbar wie Schnappatmung/HKS in Tab 1. Alternativ: Delir-Zeile als reinen Awareness-Hinweis belassen (sie trainiert „nicht vorschnell psychisch") — dann genügt der themenSekundaer-Eintrag zur Dokumentation der Quelle. Kein Eingriff in Step-Code nötig, nur Metadaten.

**Optionale Mini-Notiz (kein Befund):** `ce06-petrova-ala-01` zitiert für „kardiale Synkope gefährlich" `kernfaktId:["F-13"]`; der Claim ist präziser in neuro **F-02** belegt (verbatim „kardiale Synkopen … sind gefährlich und müssen abgeklärt werden"). F-02 liegt im selben Kernfakt und die `quellen`-Zeile nennt Kap. 21.2.3 korrekt — daher voll gegroundet, nur die kernfaktId-Zuordnung könnte um F-02 ergänzt werden. Keine Aktion erforderlich.

---

## Beschaffung
Keine offenen Belege — alle Aussagen sind durch bestehende, verifiziert-verbatim Kernfakten (notfallassessment · reanimation-bls · neurologische-akutsituationen · psychische-akutsituationen) gedeckt. Kein neuer Kernfakt nötig, keine externe Quelle zu beschaffen.

## Fazit
**PASS.** Der Differenzierungs-Capstone ist fachlich korrekt, das Interleaving (Erstblick → erst Blutzucker → differenzieren) stimmt, alle Falsch-Optionen sind korrektiv aufgelöst, nichts Gefährliches wird empfohlen, Zahlen (BZ 108) und Patient-Daten sind konsistent. Einzige Anmerkung: N1 (NIEDRIG) — Grounding-Nachverfolgbarkeit der Delir-Spektrumzeile via themenSekundaer verbessern. Gründerin bleibt Backstop.
