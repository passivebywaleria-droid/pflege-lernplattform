# Adversariales Klinik-Panel (W6) — CE-06 · ls-rios-synkope

**Datei:** `content/ce-06/situationen/ls-rios-synkope/phases.ts`
**Fall:** Herr Ríos, 63 — Synkope während der Dialyse → Neuro-Differenzial (Hypoglykämie)
**Re-Prüfung (aktuell):** Hypoglykämie-Schwelle — `erk-01b-hypoglykaemie` (Wissens-Tab) + Kernfakt F-03 (`neurologische-akutsituationen.md`) auf I care Pflege 3. Aufl. 2025 umgestellt: Definition < 50 mg/dl, aber Symptome/Behandlungsbedarf schon < 70 mg/dl
**Vorherige Re-Prüfung:** Status-epilepticus-Handlungsschwelle „~10–15 Min" → „länger als 5 Minuten" (F-12)
**Grounding:** `specs/ce-06/kernfakten/neurologische-akutsituationen.md` (F-01..F-13, **22/22 Verbatim-Belege verifiziert**)
**Datum:** 2026-07-14 (Re-Check nach Currency-Update Hypoglykämie)

## Verdikt: ✅ PASS (kein K.O.)

| | HOCH | MITTEL | NIEDRIG |
|---|---|---|---|
| Befunde | **0** | 0 | 0 |

Kein Befund über alle vier deterministischen Lenses + 5. semantischen Lens. Der 2025-Schwellen-Fix ist verbatim gegroundet und konsistent zum Fallwert 48 mg/dl.

---

## Re-Check des aktuellen Updates (Hypoglykämie-Schwelle — I care 2025)

**Step:** `ce06-rios-erk-01b-hypoglykaemie` (Wissens-Tab, `kernfaktId ["F-01","F-02","F-03"]`). Kernfakt **F-03** (`neurologische-akutsituationen.md`) auf I care 2025 ergänzt.

| Prüffrage | Ergebnis |
|---|---|
| Fachlich korrekt / aktuell? | **Ja.** I care 3. Aufl. 2025: Hypoglykämie definitionsgemäß < 50 mg/dl (2,8 mmol/l), Symptome/Behandlungsbedarf aber bereits < 70 mg/dl (3,9 mmol/l). Der Tab-Text bildet genau diese zweistufige Aussage ab. |
| Verbatim-gegroundet? | **Ja.** F-03 belegt auf `icare-pflege-3aufl-volltext/icare-pflege-3aufl.txt`: „Man spricht von einer Hypoglykämie, wenn der Blutzuckerspiegel bei Werten" + „einer Hypoglykämie können allerdings bereits bei Werten" (< 70) — zusätzlich `pflege-heute` „Blutzucker unter 50 mg/dl". `zitat-verifizierer --check-file neurologische-akutsituationen.md` = **22/22 ✅**. |
| Konsistent mit dem Fallwert 48 mg/dl? | **Ja — eindeutig.** 48 < 50 → unstrittig Hypoglykämie (kein Grenzfall). Der MC `erk-01c` prüft genau das: Korrekt-Option „Das ist eine Hypoglykämie", Distraktor „48 mg/dl … noch im Normbereich" = falsch aufgelöst. Die C1-`explanation` benennt sogar die höhere 70-mg/dl-Schwelle als Zusatz-Nuance („Manche Leitlinien setzen die Schwelle höher an … 48 mg/dl ist ohnehin eindeutig zu niedrig") — didaktisch sauber, kein Widerspruch. |
| Kein Widerspruch quer durch die Situation? | **Ja.** Lernsnack (erk-01b) „unter ~50 = Hypoglykämie", Neuro-Differenzial-Tab „sofort den Blutzucker messen", ala-01 „schwere Hypoglykämie" (Bewusstseinsstörung) — alle konsistent; keine abweichende Schwelle. |

---

## Deterministische Lenses

**Lens 1 — Arzneimittel-/Zahlen-Sicherheit** ✅ `klinik-panel` Zahlen-Lens **0**. **BZ-Schwelle < 50 mg/dl Definition / < 70 mg/dl Symptome (F-03, I care 2025), Fallwert 48 konsistent**, Glukose 40 % i.v. ohne erfundene ml-Dosis (F-05), Status-epilepticus 5 Min verbatim (F-12).

**Lens 2 — Recht & Ethik / Currency** ✅ `standards-currency-check ce-06`: **0** Treffer. Glukose i.v. durchgängig als ärztlich; Shunt nicht eigenmächtig punktiert; Beißkeil als obsolet gelehrt; keine veralteten §-Verweise.

**Lens 3 — DNQP-/Standard-Grounding** ✅ `step-grounding-check ce-06`: claim-tragend **11** · gegroundet **11** · dangling **0**. „time is brain" (F-08/F-09), Krampfanfall-Erste-Hilfe (F-10/F-11/F-12), Lagerung (F-06/F-07) belegt.

**Lens 4 — Konsistenz** ✅ Doppelte stepIds **0** · fremde patientIds **0**. Ríos-Daten (63/Dialyse/Diabetes/Insulin) durchgängig; BZ 48 mg/dl konsistent von erk bis SBAR (120 mg/dl nach Therapie); Frau Béker (74) explizit „anderer Fall".

**Lens 5 — Semantisch (pflege-validator)** ✅ `pflege-anti-pattern-check ce-06`: **0** Funde. Beißkeil/Festhalten/orale-Gabe-bei-Bewusstseinsstörung/„48 im Normbereich" erscheinen ausschließlich als Distraktoren mit korrigierender Widerlegung — „lehrt über Falsches", nicht „empfiehlt Falsches".

---

## Beschaffung
Keine. Alle Befunde belegt; der 2025-Schwellenwert (< 50 def / < 70 Symptome) ist verifiziert eingebaut (F-03).

*Panel = umfassende Vorlage. Gründerin bleibt menschlicher Backstop und kann jeden Befund overrulen.*
