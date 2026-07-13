# Adversariales Klinik-Panel (W6) — CE-06 · ls-rios-synkope

**Datei:** `content/ce-06/situationen/ls-rios-synkope/phases.ts`
**Fall:** Herr Ríos, 63 — Synkope während der Dialyse → Neuro-Differenzial (Hypoglykämie)
**Erweiterung geprüft:** Hypoglykämie-Wissenstab · Neuro-Differenzial-Tab · Apoplex-Transfer-MC · Krampfanfall-Transfer-MC
**Re-Prüfung:** Status-epilepticus-Handlungsschwelle „~10–15 Min" → **„länger als 5 Minuten"** (F-12)
**Grounding:** `specs/ce-06/kernfakten/neurologische-akutsituationen.md` (F-01..F-13, **20/20 Verbatim-Belege verifiziert**)
**Datum:** 2026-07-13 (Re-Check nach Currency-/Sicherheits-Update)

## Verdikt: ✅ PASS (kein K.O.)

| | HOCH | MITTEL | NIEDRIG |
|---|---|---|---|
| Befunde | **0** | 0 | 0 |

Kein Befund über alle vier deterministischen Lenses + 5. semantischen Lens. **Die vormalige N1-Anmerkung (ILAE-2015-5-Min-Schwelle) ist mit diesem Update aufgelöst.**

---

## Re-Check des Updates (Status epilepticus)

**Step:** `ce06-rios-ref-00d-krampfanfall` (Krampfanfall-Transfer-MC).

| Prüffrage | Ergebnis |
|---|---|
| Ist „länger als 5 Minuten" fachlich korrekt/aktuell? | **Ja.** Entspricht der operationalen ILAE-2015-Definition (Trinka et al., *Epilepsia* 56:1515–1523): t1 = 5 Min für den generalisiert tonisch-klonischen Anfall (Handlungsschwelle). Die vormalige „~10–15 Min"-Angabe war überholt. |
| Verbatim-gegroundet? | **Ja.** F-12 jetzt belegt auf `icare-krankheitslehre-volltext` „Dauert der Anfall länger als 5 Minuten, handelt es sich um einen Status epilepticus" (+ Pflege heute „Der lebensbedrohliche Status epilepticus"). `zitat-verifizierer --check-file` = 20/20 ✅. |
| Konsistent im Step (C1 + B1)? | **Ja.** Beide Erklärungen nennen „5 Minuten"; Korrekt-Antwort löst Hilfe „besonders wenn der Anfall über wenige Minuten dauert" aus — weicher formuliert, aber widerspruchsfrei zur präzisen 5-Min-Schwelle in der `explanation`. |
| Konsistent zum Rest der Situation? | **Ja.** Kein anderer Step (Neuro-Differenzial-Tab, Apoplex-MC) nennt eine abweichende Schwelle. Quellen-Feld ergänzt: „I care Krankheitslehre 2020, Kap. 17.8; ILAE 2015 (Trinka et al.); Pflege heute 2019, Kap. 37.8.2". |

---

## Deterministische Lenses

**Lens 1 — Arzneimittel-/Zahlen-Sicherheit** ✅ `klinik-panel` Zahlen-Lens **0**. BZ-Schwelle < 50 mg/dl (F-03, Fallwert 48 konsistent), Glukose 40 % i.v. ohne erfundene ml-Dosis (F-05), **Status-epilepticus 5 Min jetzt verbatim gegroundet** (F-12).

**Lens 2 — Recht & Ethik / Currency** ✅ `klinik-panel` Recht-Lens **0**. Glukose i.v. durchgängig als ärztlich; Shunt nicht eigenmächtig punktiert; Beißkeil als obsolet gelehrt; keine veralteten §-Verweise.

**Lens 3 — DNQP-/Standard-Grounding** ✅ `step-grounding-check ce-06`: claim-tragend **11** · gegroundet **11** · dangling **0**. „time is brain" (F-08/F-09), Krampfanfall-Erste-Hilfe (F-10/F-11/F-12), Lagerung (F-06/F-07) belegt.

**Lens 4 — Konsistenz** ✅ Doppelte stepIds **0** · fremde patientIds **0**. Ríos-Daten (63/Dialyse/Diabetes/Insulin) durchgängig; Frau Béker (74) explizit „anderer Fall"; Wiederbegegnung Wagner (`reanimation-bls-hks-erkennen`) auflösbar.

**Lens 5 — Semantisch (pflege-validator)** ✅ `pflege-anti-pattern-check ce-06`: **0** Funde. Beißkeil/Festhalten/orale-Gabe-bei-Bewusstseinsstörung erscheinen ausschließlich als Distraktoren mit korrigierender Widerlegung — „lehrt über Falsches", nicht „empfiehlt Falsches".

---

## Beschaffung
Keine. Alle Befunde belegt; die vormals als Beschaffung gelistete ILAE-2015-5-Min-Schwelle ist jetzt verifiziert eingebaut (F-12).

*Panel = umfassende Vorlage. Gründerin bleibt menschlicher Backstop und kann jeden Befund overrulen.*
