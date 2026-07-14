# Adversariales Klinik-Panel (W6) — CE-06 · ls-sander-verbruehung

**Datei:** `content/ce-06/situationen/ls-sander-verbruehung/phases.ts` (+ `patient.ts`)
**Fall:** Renate Sander, 74 — Verbrühung 2. Grades (kochendes Wasser) an rechtem Unterarm + Oberschenkel, ambulanter Pflegebesuch
**Deckt:** CE06-LE1-K1 (Rest) — Erste Hilfe Verbrennung/Verbrühung, Verätzung (Haut + Mund/Speiseröhre), Hitze- und Kältenotfälle
**Re-Prüfung (aktuell):** Verätzung Verdauungstrakt — „Milch" an allen Stellen entfernt (Tab C `ref-00b-spektrum`, Karteikarte, MC `ref-00d` + Erklärungen). Jetzt „Wasser oder Tee, keine Milch". Kernfakt F-09 (`thermisch-chemische-notfaelle.md`) auf I care Pflege 3. Aufl. 2025 umgestellt.
**Grounding:** `specs/ce-06/kernfakten/thermisch-chemische-notfaelle.md` (F-01..F-13, **32/32 Verbatim-Belege verifiziert**) + `notfallassessment.md` F-07 (SBAR, Leonard 2004, verifiziert)
**Datum:** 2026-07-14 (Re-Check nach Currency-Update Verätzung)

## Verdikt: ✅ PASS (kein K.O.)

| | HOCH | MITTEL | NIEDRIG |
|---|---|---|---|
| Befunde | **0** | 0 | 4 (informativ) |

Kein HOCH-Befund über alle vier deterministischen Lenses + 5. semantischen Lens. Vier informative NIEDRIG-Anmerkungen (N1–N4) für den Gründerin-Backstop — **nicht blockierend**. N4 ist ein Doku-Drift-Hinweis (kein Student-facing Content).

**Deterministische Pre-Filter (alle grün):**
- `klinik-panel.ts` — Zahlen 0 · Recht 0 · DNQP/Standard 0 · Konsistenz 0 → PASS (exit 0)
- `pflege-anti-pattern-check.ts` ce-06 — 0 Funde (HOCH/MITTEL/NIEDRIG je 0)
- `step-grounding-check.ts` — claim-tragend **11** · gegroundet **11** · dangling **0** → PASS
- `zitat-verifizierer.ts` — thermisch-chemische-notfaelle **32/32** + F-07 SBAR: alle Belege verifiziert

---

## Re-Check des aktuellen Updates (Verätzung Verdauungstrakt — „keine Milch", I care 2025)

**Steps:** `ce06-sander-ref-00b-spektrum` (Wissens-Tab C + Categorize + Karteikarten-Kurz) und `ce06-sander-ref-00d`/`ref-00c` (Verätzung-Mund-MC). Kernfakt **F-09** auf I care 2025 umgestellt.

| Prüffrage | Ergebnis |
|---|---|
| Milch vollständig aus dem Student-facing Content entfernt? | **Ja.** `grep "Milch" ls-sander-verbruehung/` liefert nur noch „**keine** Milch"-Formulierungen (Tab-Fließtext, Categorize-Feedback, MC-Option, MC-Erklärungen C1+B1). Keine Stelle empfiehlt Milch mehr. |
| Fachlich korrekt / aktuell? | **Ja.** Neuere Empfehlung (I care 2025, DRK/Giftnotruf): bei Verätzung des Verdauungstrakts kleine Schlucke **Leitungswasser oder Tee**, keine Milch (Milch kann die Beurteilung erschweren / Aufnahme mancher Stoffe fördern), ~200 ml, **niemals Erbrechen auslösen**. Der Content bildet genau das ab. |
| Verbatim-gegroundet? | **Ja.** F-09 belegt auf `icare-pflege-3aufl-volltext/icare-pflege-3aufl.txt`: „Bei Verätzungen des Verdauungstrakts den Betroffenen in kleinen Schlucken trinken lassen" + `pflege-heute` „Niemals Erbrechen auslösen". `zitat-verifizierer --check-file thermisch-chemische-notfaelle.md` = **32/32 ✅**. |
| „Niemals Erbrechen auslösen" erhalten? | **Ja.** In Tab C, Categorize-Feedback und MC `ref-00d` (Korrekt- wie Distraktor-Auflösung) durchgängig als Kernbotschaft. |
| Konsistent quer durch die Situation? | **Ja.** Kein Step nennt Milch als Option; „Wasser oder Tee, keine Milch" identisch in Tab C, Categorize (`hauptfaktor: Verätzung Mund/Speiseröhre`) und MC. Der 1-Liter-Distraktor („Gift verdünnen") bleibt korrekt als Fehler (löst Erbrechen aus). |

---

## Lens 1 — Arzneimittel-/Zahlen-Sicherheit ✅
Out-of-Range **0** · keine erfundenen Werte. Jede physiologische Zahl ist an F-01..F-13 verbatim-gegroundet.

| Zahl / Wert | Ergebnis | Beleg |
|---|---|---|
| Verbrennungsgrade 1–3 (Rötung / Blasen / Verkohlung) | OK | F-02 verbatim |
| Handfläche ≈ 1 % KOF · Neuner-Regel | OK | F-03 verbatim „hat sich die Neuner-Regel bewährt" |
| Schockschwelle Volumenmangel | OK | F-03 verbatim „droht ein Volumenmangelschock" |
| Klinik-Indikation Sonderlokalisation/Fläche | OK | F-06 verbatim „müssen im Krankenhaus behandelt werden" |
| Kühlen ~20 °C / lauwarm | OK | F-04 verbatim „mit lauwarmem Wasser" |
| Verätzung Mund ~200 ml Wasser/Tee, keine Milch | OK | **F-09 (I care 2025) „in kleinen Schlucken trinken lassen"** |
| Hypothermie < 35 °C / < 30 °C lebensbedrohlich | OK | F-12 verbatim |
| Wiedererwärmen max. ~1 °C/h | OK | F-13 verbatim |

## Lens 2 — Recht & Ethik / Currency ✅
`standards-currency-check ce-06`: **0** Treffer. Keine veralteten Normen. Der Verätzungs-Fix ist eine **fachliche** Currency-Korrektur (Erste-Hilfe-Empfehlung), keine Norm-Ablösung.

## Lens 3 — DNQP-/Standard-Grounding ✅
`step-grounding-check ce-06`: claim-tragend **11** · gegroundet **11** · dangling **0**. Verätzung Mund jetzt auf F-09 (I care 2025) belegt; übrige Schritte (Kühlen F-04, Wundversorgung F-05, Verätzung Haut F-08, Hitze F-10/F-11, Kälte F-13, SBAR notfallassessment/F-07) unverändert gegroundet.

## Lens 4 — Konsistenz (Patient-Daten / Cross-Step) ✅
Doppelte stepIds **0** · fremde patientIds **0**. Sander-Daten (74 / rechter Unterarm + Oberschenkel / 2. Grad) durchgängig; „Blasen bleiben zu" und „lauwarm kühlen" cross-step widerspruchsfrei; „keine Milch" jetzt cross-step einheitlich.

## Lens 5 — Semantisch (pflege-validator) ✅
`pflege-anti-pattern-check ce-06`: **0** Funde. Distraktor-vs-Empfehlung sauber getrennt; Milch erscheint nur noch als negierte Warnung („keine Milch"), nicht als Empfehlung. „Niemals Erbrechen auslösen" durchgängig; Erbrechen-Auslösen ausschließlich als widerlegter Distraktor.

---

## NIEDRIG-Anmerkungen (informativ, nicht blockierend)

### N1 — Konservative Klinik-/Arzt-Empfehlung bei kleiner 2.-grädiger Fläche
`ce06-sander-erk-02`, `ce06-sander-ala-01` · Lens 3. „2.-grädige Verbrühung bei alter Frau gehört zeitnah ärztlich versorgt" ist konservativ-sicher (offene Wunde, Infektions-/Schmerzrisiko, Alter); bleibt bei „ärztlich versorgen", nicht „Klinikpflicht". KEIN Fehler.

### N2 — „alte Menschen" als Zusatz zur Kühl-Zurückhaltung
`ce06-sander-erm-00b-kuehlen` · Lens 1/3. F-04 nennt „große Flächen und Kinder"; Content ergänzt „alte Menschen" — physiologisch begründete, konservative Extrapolation. KEIN Fehler.

### N3 — Zusätze „Giftnotruf" / „intensivmedizinisch versorgen"
`ce06-sander-ref-00c/ref-00d` · Lens 1/3. Standard-Erste-Hilfe (Giftnotruf = Form der in F-09 geforderten sofortigen ärztlichen Hilfe). KEIN Fehler.

### N4 — Doku-Drift: stale Review-Markdown enthält noch „Milch" (NEU)
**Datei:** `content/ce-06/REVIEW-WISSENS-TABS.md`, Zeilen 855 + 866 · **kein Student-facing Content.**
Das Review-Dokument trägt noch die alte Formulierung „Wasser, Tee oder Milch". Dies ist ein reines Doku-Artefakt (rendert **nicht** im Player, `content-loader` liest nur `phases.ts`), also **nicht blockierend** und **kein HOCH-Befund**. **Empfehlung an die Gründerin:** bei nächster Gelegenheit die beiden Zeilen auf „Wasser oder Tee, keine Milch" nachziehen, damit die Doku nicht gegen den Live-Content driftet.

---

## Beschaffung
Keine. Alle gelehrten Aussagen sind verbatim gegroundet (F-01..F-13, F-07) oder konservativ-sichere Standard-Erste-Hilfe-Ergänzungen (N1–N3). N4 ist ein Doku-Aufräum-Hinweis, keine Beschaffung.

*Panel = umfassende Vorlage. Gründerin bleibt menschlicher Backstop und kann jeden Befund overrulen.*
