# Adversariales Klinik-Panel (W6) — CE-06 · `ls-wagner-reanimation`

**Datei:** `content/ce-06/situationen/ls-wagner-reanimation/phases.ts`
**Stand:** 2026-07-13 (Re-Check) · **Geprüfte Steps:** 17 · **Kernfakten:** `reanimation-bls`, `notfallassessment`, `kpr-indikation-recht-ethik`
**Re-Prüfung:** AED-Branching `erm-02` — Zeile „Patienten nicht berühren, Analyse läuft" + Hände-weg-Pause ergänzt (neuer Kernfakt **F-14**)

## Verdikt: ✅ PASS — 0 HOCH-Befunde

Alle vier deterministischen Skript-Lenses + der semantische 5. Lens grün. **Die vormalige Beobachtung OBS-AED-ANALYSEPAUSE ist mit diesem Update umgesetzt und aufgelöst.**

Panel = Vorlage, nicht letztes Wort. **Die Gründerin bleibt Backstop.**

---

## Re-Check des Updates (AED — Hände weg bei Analyse)

**Step:** `ce06-wagner-erm-02` (Branching, Schock-Entscheidung). `kernfaktId` jetzt `["F-11", "F-05", "F-14"]`.

| Prüffrage | Ergebnis |
|---|---|
| ERC-korrekt? | **Ja.** ERC 2021: „clear of the patient" gilt bei **Rhythmusanalyse** (Bewegungsartefakte stören die Analyse) UND bei der **Schockabgabe** (Stromrisiko). Der AED gibt genau diese Sprach-/Bildanweisungen — man folgt ihnen. |
| Verbatim-gegroundet? | **Ja.** F-14 belegt auf `icare-pflege-volltext` „Bildanweisungen des AED gefolgt werden" (+ ERC 2021 „clear of the patient"). `zitat-verifizierer --check-file` = 17/17 ✅. Kein Dangling (`step-grounding-check` PASS). |
| Stört sie die bestehende „Alle weg!"-vor-Schock-Logik? | **Nein — sie verstärkt sie.** Ablauf jetzt: (1) AED „Analyse läuft" → alle nehmen kurz die Hände weg (auto-narriert); (2) „Schock empfohlen. Laden."; (3) Kollegin legt die Hände **wieder** auf den Brustkorb; (4) Korrekt-Antwort: „Alle weg!" + Sichtkontrolle → Schock → sofort weiter HDM. Die zwei „clear"-Momente (Analyse vs. Schock) sind sauber getrennt; die vom Schüler zu treffende „Alle weg!"-vor-Schock-Entscheidung bleibt der Kern der Szene. |
| Fachlich noch feiner? | Die Kollegin, die während „Laden" wieder komprimiert, ist ERC-konform (Kompression während des Ladens minimiert No-Flow) — geräumt wird erst zur **Schockabgabe**. Der Step verlangt genau das. Kein fachlicher Fehler. |
| Konsistenz C1/B1 | Beide body-Varianten tragen die neue Zeile stimmig; Feedback der Korrekt-Option erklärt Eigenschutz + sofortige Fortsetzung. |

---

## Deterministische Lenses

**Lens 1 — Arzneimittel-/Zahlen-Sicherheit (W1)** ✅ `klinik-panel` Zahlen-Lens **0**. 5–6 cm (F-06), 100–120/min (F-07), 30:2 (F-08), Adrenalin alle 3–5 Min (F-10), Pulskontrolle max. 10 Sek./nicht generell (F-03) — alle verbatim. Helferwechsel ~2 Min bewusst als ERC-Organisationsempfehlung deklariert.

**Lens 2 — Recht & Ethik / Standards-Currency** ✅ `klinik-panel` Recht-Lens **0**. § 323c StGB (F-04), § 221 StGB (F-05), **§ 1827 BGB** (aktuelle Fassung seit 01.01.2023, kein § 1901a/§ 1906-Drift). KPR-Indikation korrekt (F-01/F-02/F-03).

**Lens 3 — DNQP-/Standard-Konformität · Step-Grounding (W2)** ✅ `step-grounding-check ce-06`: PASS, **claim-tragend 15 · gegroundet 15**, 0 Dangling. BLS/ALS folgt ERC 2021; AED-Handhabung jetzt zusätzlich über F-14 belegt; SBAR korrekt auf `notfallassessment/F-07` (Leonard 2004).

**Lens 4 — Konsistenz** ✅ Wagner-Alter 67 = SBAR; SBAR-Background deckungsgleich mit `patient.ts`; 17 stepIds, keine Duplikate; Wagner (keine PV → reanimieren) vs. Frau Kellner, 84 (gültige PV → NICHT) sauber kontrastiert.

**Lens 5 — Semantisch (pflege-validator)** ✅ `pflege-anti-pattern-check ce-06`: **0** Regex-Treffer. Alle falschen Optionen `isCorrect:false` mit korrigierender Widerlegung; „sofort Schock ohne Ansage" (erm-02) korrekt als gefährlicher Distraktor markiert; „stabile Seitenlage" bei Schnappatmung als Fallstrick, im Spektrum bei erhaltener Atmung korrekt — semantisch getrennt. Reflexion validierend (Sandwich).

---

## Beobachtung

**OBS-AED-ANALYSEPAUSE — AUFGELÖST.** Die früher als ausgeblendet notierte Hände-weg-Pause während der AED-Rhythmusanalyse ist jetzt explizit in `erm-02` dargestellt und über F-14 belegt.

## Beschaffung
Keine. Alle Befunde belegt.
