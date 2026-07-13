# Klinik-Panel-Report — `ls-yildiz-thoraxschmerz` (CE-06)

**Situation:** Frau Yıldız, 62 — akuter Thoraxschmerz / Verdacht Herzinfarkt
**Redesign-Gegenstand:** 3 neue Wissens-Tabs + korrigierte KB-Marker
**Grounding:** `specs/ce-06/kernfakten/herz-kreislauf-akut.md` (F-01..F-08) + `notfallassessment.md` (F-07 SBAR)
**Datum:** 2026-07-13

## Verdikt: ✅ PASS — kein HOCH-Befund (kein K.O.)

1 MITTEL-Befund (Grounding-Hygiene, → Beschaffung). Panel = Vorlage; Gründerin bleibt Backstop.

---

## Deterministische Pre-Filter (4 Skript-Lenses + AP)

| Skript | Ergebnis |
|--------|----------|
| `klinik-panel.ts` | ✅ PASS — 0 Befunde (Zahlen 0 · Recht 0 · DNQP 0 · Konsistenz 0) |
| `pflege-anti-pattern-check.ts` | ✅ PASS — 0 Funde |
| `step-grounding-check.ts` | ✅ PASS — 0 DANGLING / 0 MISSING |
| `klinik-zahlen-check.ts` | ✅ PASS — 0 Out-of-Range |

---

## Befunde (semantischer 5. Lens)

### YILDIZ-SEM-01 — MITTEL — Lens 3 (DNQP/Standard-Grounding) + Lens 5 (semantisch)

**„Zeit ist Herzmuskel" + Herzkatheter/Reperfusion ist fachlich korrekt, aber durch die zitierten Kernfakten NICHT gedeckt.**

Direkte Antwort auf die vom Auftrag gestellte Frage: Der „Zeit ist Herzmuskel / Herzkatheter"-Claim in **Tab C** ist **NICHT durch F-03 gedeckt** — er ist ein ungegroundeter Mechanismus-/Instrument-Zusatz.

- **F-03** belegt nur: „Arzt benachrichtigen und weitere Pflegefachperson verständigen" (Zeitkritik nur implizit über „sofort").
- Grep über `herz-kreislauf-akut.md` + `notfallassessment.md`: **„Zeit ist Herzmuskel", „Herzkatheter", „Reperfusion", „verschlossenes Gefäß", „Eröffnung" kommen nirgends vor.**
- Der Reperfusions-Mechanismus („je schneller die Eröffnung des verschlossenen Gefäßes im Herzkatheter, desto mehr Herzmuskel bleibt erhalten") und die Methode PCI/Herzkatheter sind ein Zusatz über F-03/F-06/F-08 hinaus.

**Warum die Skript-Lenses das nicht fangen:** `step-grounding-check` prüft nur, ob `kernfaktId` existieren (nicht dangling) — hier `[F-03, F-06, F-08]`, also grün. Die *semantische* Deckung des konkreten Claims prüft er nicht. Genau das ist Aufgabe des 5. Lens.

**Fundstellen:**
- `ce06-yildiz-ala-00b-team-zeit` (Tab C, kerntext) — Merksatz + PCI-Mechanismus
- `ce06-yildiz-erk-01` (Option C, explanation) — „Zeit ist Herzmuskel"
- `ce06-yildiz-ala-01` (richtige Option, explanation) — „rasche Reperfusion im Herzkatheter"
- `ce06-yildiz-ueb-01` (SBAR-Muster, R) — „Herzkatheter-Anmeldung"
- `ce06-yildiz-ref-01` (glossarBegriffe/prompt) — „Zeit ist Herzmuskel"

**Einordnung:** Kein fachlicher Fehler — „time is muscle" und Herzkatheter/PCI als Reperfusionsverfahren sind kardiologischer Standard. Reine Grounding-Hygiene nach Gründerin-Regel (fehlende Quelle → Beschaffung, nichts erfinden). Nicht patientengefährdend → MITTEL, kein K.O.

**Fix (Beschaffung bevorzugt):** Neuen Kernfakt (z.B. F-09) in `herz-kreislauf-akut.md` mit Verbatim-Beleg für „Zeit ist Herzmuskel" + Reperfusionstherapie/PCI/Herzkatheter beim ACS/STEMI aufnehmen (Pflege heute Kap. 21.2.1/21.5 oder I-care Krankheitslehre), `zitat-verifizierer.ts` bestätigen, dann `kernfaktId` von ala-00b/erk-01/ala-01/ueb-01 um F-09 ergänzen. Minimalvariante (nicht bevorzugt): PCI-Mechanismus streichen, nur „sofort/zeitkritisch" belassen.

---

## Beschaffung

| Item | Grund | Kandidat-Quelle |
|------|-------|-----------------|
| Verbatim-Beleg „Zeit ist Herzmuskel" + Reperfusion/Herzkatheter (PCI) beim ACS | in Tab C/erk-01/ala-01/ueb-01 autoritativ verwendet, in F-01..F-08 nicht belegt | Pflege heute 21.2.1/21.5 bzw. I-care Krankheitslehre (Herzinfarkt/Reperfusion) |

---

## Explizit geprüft & OK

- **Zahlen:** Abbruch-Schwelle RR<90 UND Puls>100 = F-07 verbatim. Branching RR 85/50 + Puls 112 löst konsistent aus (85<90, 112>100).
- **Medikamenten-Dosen:** keine erfunden. O2/Nitro/Analgetika durchgängig nur qualitativ + „auf Arztanordnung". „zwei Hübe Nitro" nur in einer als FALSCH markierten, verurteilten Distraktor-Aussage.
- **Recht/Kompetenz:** Kompetenzgrenze Pflege↔Arzt korrekt (F-06). Keine veraltete Norm (FeM/§1831 nicht einschlägig).
- **Konsistenz:** 62 J. / KHK+Angina / Diabetes / Hypertonie / „Nitro half diesmal nicht" durchgängig identisch. Oberkörper-hoch vs. Schocklage ohne Widerspruch. 11 eindeutige stepIds, keine Duplikate, keine fremde patientId.
- **Semantisch:** alle Falsch-Optionen (Schocklage, eigenmächtig Nitro/O2, Abwarten, noch höher lagern, „Diabetiker bekommen keine Infarkte", „wird schon wieder") reine Distraktoren mit korrektiver, belegter Erklärung. Pseudo-Empathie konsequent als Anti-Beispiel (F-08).
