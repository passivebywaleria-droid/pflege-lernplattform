# Adversariales Klinik-Panel (W6) — CE-06 · ls-novak-erregung

**Datei:** `content/ce-06/situationen/ls-novak-erregung/phases.ts`
**Fall:** Herr Novak, 34 — akute psychotische Erregung (paranoid) auf der Inneren, dabei Fieber 39,2 °C bei Pneumonie
**Erweiterung geprüft:** 3 Wissens-Tabs (Tab A/B/C) + **Re-Prüfung 2025-Ergänzung**: Tab C `erm-01b` (Faustregel + Karteikarte) + MC `erm-02` + Kernfakt **F-04** ergänzt um „Die Fixierung selbst muss ärztlich angeordnet sein" (I care Pflege 2025, Kap. 7.7.5)
**Grounding:** `specs/ce-06/kernfakten/psychische-akutsituationen.md` (F-01..F-08, **16/16 Verbatim-Belege verifiziert**, davon 1 neu aus `icare-pflege-3aufl-volltext`) + `notfallassessment.md`
**Datum:** 2026-07-14 (Re-Prüfung; Erst-Prüfung 2026-07-13)

## Verdikt: ✅ PASS (kein K.O.)

| | HOCH | MITTEL | NIEDRIG |
|---|---|---|---|
| Befunde | **0** | 0 | 2 (informativ, unverändert) |

Kein HOCH-Befund über alle vier deterministischen Lenses + 5. semantischen Lens. Die 2025-Ergänzung ist rechtlich korrekt, widerspruchsfrei zum bestehenden „Sedierung = ärztlich" + § 1831-Rahmen und verbatim gegroundet. Zwei informative NIEDRIG-Anmerkungen (N1/N2) aus der Erst-Prüfung unverändert — **nicht blockierend**.

**Skript-Läufe (deterministisch, 0 Drift):**
- `klinik-panel.ts --situation ls-novak-erregung` → 0 Befunde (Zahlen 0 · Recht 0 · DNQP 0 · Konsistenz 0) · exit 0
- `pflege-anti-pattern-check.ts ce-06` → 0 Funde (HOCH 0 · MITTEL 0 · NIEDRIG 0)
- `step-grounding-check.ts ce-06` → ls-novak-erregung: claim-tragend **9** · gegroundet **9** · dangling **0**
- `standards-currency-check.ts ce-06 --include-plans` → 0 Treffer (keine veraltete Norm autoritativ verwendet)
- `zitat-verifizierer.ts --check-file …/psychische-akutsituationen.md` → **16/16** Belege verifiziert (inkl. neu „Die Fixierung muss ärztlich angeordnet sein")

---

## Re-Prüfung der 2025-Ergänzung „Fixierung selbst = ärztlich angeordnet" (Lens 2 + 5)

**Was geändert wurde:** Tab C `erm-01b` Faustregel (Z.460) + Karteikarte (Z.485) und Kernfakt F-04 tragen jetzt zusätzlich zur „letzte Deeskalationsstufe"-Regel den Satz, dass die **Fixierung selbst ärztlich angeordnet** sein muss.

| Prüffrage | Ergebnis | Beleg / Begründung |
|---|---|---|
| Rechtlich korrekt? | **OK** | Zwei-Ebenen-Modell korrekt abgebildet: (a) die Fixierung als medizinische Maßnahme wird **ärztlich angeordnet** (Pflege ordnet sie nicht eigenständig an); (b) die freiheitsentziehende Wirkung braucht **zusätzlich** die richterliche Genehmigung (§ 1831 BGB), sofern regelmäßig/länger. F-04 formuliert genau diese Staffelung. Verbatim: I care Pflege 2025 „Die Fixierung muss ärztlich angeordnet sein" (`icare-pflege-3aufl-volltext`, zitat-verifizierer ✅) |
| Konsistent mit „Sedierung = ärztlich" (F-07)? | **OK** | Die neue Zeile ergänzt die ärztliche Anordnung für die **Maßnahme Fixierung** parallel zur bereits gelehrten ärztlichen Anordnung der **Sedierung** (Haloperidol). Beide Ebenen stehen jetzt vollständig nebeneinander — keine Doppelung, kein Konflikt. Faustregel + Karteikarte identisch formuliert (kein Cross-Step-Widerspruch) |
| Kein Widerspruch zum § 1831-/PsychKG-Rahmen und zu erm-02? | **OK** | Die richterliche Genehmigung (§ 1831 BGB) und die ärztliche Anordnung sind unterschiedliche Ebenen, kein Entweder-oder. Die im Kerntext + erm-02 gelehrte **Gefahr-im-Verzug-Ausnahme** (sofortige Sofortmaßnahme, „unverzüglich nachzuholen") bleibt die anerkannte Ausnahme zu BEIDEN Ebenen — dadurch entsteht kein Widerspruch. PsychKG bleibt korrekt auf psychiatrische Einrichtungen begrenzt |
| Fixierung weiterhin nur als „letzte Stufe unter Recht" gelehrt (nicht empfohlen)? | **OK** | Der Zusatz verschärft die Hürde (jetzt ärztliche Anordnung + Recht + Team + Mindestmaß), er senkt sie nicht. Fixierung bleibt in erm-02 klar als NICHT-erster-Schritt markiert; „sofort selbst fixieren" bleibt Distraktor |

**Semantisches Urteil:** Die Ergänzung ist eine **fachliche Präzisierung**, keine neue Handlungsempfehlung. Sie macht die Rechtsgrenze eher enger und korrekter. Kein neuer Befund.

---

## Lens 1 — Arzneimittel-/Zahlen-Sicherheit ✅
Out-of-Range **0** · keine erfundenen Dosen · keine falsch gelehrten Normwerte.

| Aspekt | Ergebnis | Beleg |
|---|---|---|
| Haloperidol als Wirkstoff | OK | Nur Wirkstoffname, KEINE erfundene Dosis/mg/Volumen. F-07 verbatim „Bei Übererregung oder aggressivem Verhalten evtl. Haloperidol i. v." (PH 38.8) |
| Sedierung = ärztliche Anordnung | OK | Durchgängig (ala-01, erm-01b, erm-02); Pflege gibt Sedativa nie eigenmächtig (F-07) |
| Fieber 39,2 °C bei Pneumonie | OK | Physiologisch plausibel; als potenzielle Ursache des Fieberdelirs korrekt eingeordnet (F-01) |
| SpO2 / Blutzucker / Temperatur | OK | Als Mess-Parameter benannt, KEINE erfundenen Zahlenwerte |

## Lens 2 — Recht & Ethik / Currency ✅
`standards-currency-check`: Recht-Lens **0** Funde. Keine veraltete Norm-Fassung.

| Aspekt | Ergebnis | Beleg |
|---|---|---|
| **Fixierung selbst = ärztliche Anordnung (NEU 2025)** | OK | Siehe Re-Prüfungs-Sektion oben. Verbatim I care Pflege 2025 |
| **§ 1831 BGB (aktuelle Fassung)** | OK | Durchgängig § 1831 BGB — NICHT §1906/§1906a. Betreuungsrechtsreform 01.01.2023 korrekt (erm-01b, erm-02, Faustregel, Karteikarte) |
| Quelltext-Abgleich BGB | OK | `leitlinien-volltext/bgb-1831.txt`: „nur mit Genehmigung des Betreuungsgerichts zulässig" — Content paraphrasiert exakt (Gefahr im Verzug → Sofortmaßnahme, dann nachholen) |
| PsychKG vs. Betreuungsrecht (somatische Station) | OK | Korrekt abgegrenzt: auf der Inneren richterliche Grundlage = Betreuungsrecht (§ 1831 BGB); PsychKG nur für Unterbringung in psychiatrischen Einrichtungen. F-06 verbatim |
| FeM: Zustimmung / Gefahr im Verzug / richterlich | OK | F-06 verbatim „wenn der Betroffene zugestimmt hat, Gefahr im Verzug ist oder…" |
| Zwang legitimiert / Mindestmaß / nicht aggressiv | OK | F-05 verbatim „muss legitimiert sein und auf das Mindestmaß beschränkt bleiben" |

## Lens 3 — DNQP-/Standard-Grounding ✅
`step-grounding-check`: claim-tragend **9** · gegroundet **9** · dangling **0**.

| Tab | kernfaktId | Ergebnis | Beleg |
|---|---|---|---|
| Tab A `erk-01b` Eigenschutz/Deeskalation | F-08/F-02/F-03 | OK | F-08 Abstand/Fluchtweg/Gewaltbereitschaft; F-03 „nie mit mehreren"; F-02 Deeskalationsziel (PH 16.6) |
| Tab B `erk-02b` Erregung ≠ Psychose | F-01 | OK | F-01 „Bei sehr hohem Fieber: motorische Unruhe, ängstliche Erregung, Sinnestäuschungen" + Delir (PH 12.3) |
| Tab C `erm-01b` Grenzen des Zwangs | F-04/F-05/F-06/F-07 | OK | F-04 (inkl. NEU „ärztlich angeordnet", I care 2025); F-05 Mindestmaß; F-06 FeM + § 1831 BGB; F-07 Haloperidol ärztlich |

## Lens 4 — Konsistenz (Patient-Daten / Cross-Step) ✅
Doppelte stepIds **0** · fremde patientIds **0**. Fieber 39,2 °C, Pneumonie, paranoide Schizophrenie, entfernte Infusion durchgängig konsistent. Fixierung/Sedierung/Wahn-Widerlegen konsequent nur als Distraktor bzw. „letzte Stufe unter Recht" — keine widersprüchliche Wertung zwischen Steps (auch nach der 2025-Ergänzung). Wiederbegegnung → Ríos korrekt (`neuro-differenzial`).

## Lens 5 — Semantisch (pflege-validator) ✅
`pflege-anti-pattern-check`: **0** Funde. Distraktor-vs-Empfehlung sauber getrennt.

- Fixieren / Sedieren / Wahn-frontal-widerlegen erscheinen ausschließlich als FALSCHE Optionen mit korrekter Widerlegung — „lehrt über Falsches", nicht „empfiehlt Falsches".
- Fixierung wird nur dort als zulässig gelehrt, wo sie es fachlich IST (letzte Stufe, echte Gefahr, legitimiert, Mindestmaß, im Team, ärztlich angeordnet) — Lehre ÜBER die Rechtsgrenze, keine Handlungsempfehlung.
- Deeskalation korrekt: GEFÜHL (Angst) ernst nehmen, Wahninhalt weder bestätigen noch hart widerlegen.
- Leitplanke „akute Erregung NICHT automatisch psychiatrisch — organische Ursachen zuerst" trägt konsistent durch erk-02, Tab B, Alarmieren, SBAR, Reflexion.

### N1 — NIEDRIG (informativ, unverändert)
`erk-02` + Tab B: praktische Ergänzung „SpO2-Clip/Blutzucker-Stich brauchen Nähe" ist plausible Inferenz über F-01 hinaus — kein Fehler, kein Standard-Claim. Gründerin-Option: so belassen.

### N2 — NIEDRIG (informativ, unverändert)
`ueb-01` (SBAR): Alter „34" erstmals in Phase 4 genannt — kein Widerspruch, kosmetisch.

---

## Beschaffung
Keine offenen Belege. Alle Claims (inkl. der 2025-Ergänzung „Fixierung ärztlich angeordnet") sind gegroundet und verbatim verifiziert (F-01..F-08, 16/16). § 1831 BGB gegen `leitlinien-volltext/bgb-1831.txt` abgeglichen.

*Panel = umfassende Vorlage. Gründerin bleibt menschlicher Backstop und kann jeden Befund overrulen.*
