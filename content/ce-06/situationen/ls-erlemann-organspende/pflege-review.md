# Pflege-Review (semantischer Lens / pflege-validator) — `ls-erlemann-organspende`

- **CE:** ce-06 · **LE5** Organspende / Hirntod / Recht & Ethik
- **Rolle:** 5. Lens des adversarialen Klinik-Panels (Distraktor-vs-Empfehlung, Pseudo-Empathie, Step-Typ-Pflichten)
- **Pre-Filter gelaufen:** `klinik-panel.ts` PASS · `pflege-anti-pattern-check.ts` 0 Funde · `step-grounding-check.ts` PASS · `standards-currency-check.ts` 0 · `zitat-verifizierer` 28/28
- **Datum:** 2026-07-13
- **Ergebnis:** ✅ **PASS** — 0 HOCH, 0 MITTEL, 2 NIEDRIG (nicht-blockierend)

---

## 1. Fachliche Korrektheit vs. „klingt empathisch"

Kein Optimieren auf Empathie-Schein. Der zentrale, schwer auszuhaltende Widerspruch („Er ist doch noch warm — wie kann er tot sein?") wird **ehrlich** beantwortet: der warme, beatmete Körper täuscht Leben vor, der Gesamthirntod ist der Tod des Menschen (erk-00b, erk-01, F-01/F-02). Keine Verharmlosung, keine Pseudo-Beruhigung.

## 2. Distraktor vs. Empfehlung (Kernaufgabe)

Alle gefährlichen Aussagen stehen ausschließlich in **Falsch-Positionen** mit korrekter Widerlegung — der Content lehrt ÜBER Falsches, empfiehlt es nicht:

| Falsch-Aussage | Ort | Widerlegt? |
|---|---|---|
| „jeder automatisch Spender … solange nicht widersprochen" (Widerspruchslösung) | erm-01 Opt. B | ✅ „Entscheidungslösung, nicht Widerspruchslösung" |
| „Pflegekraft darf Entnahme freigeben" | erm-01 Opt. C | ✅ „Die Pflege gibt keine Organentnahme frei" |
| „Intensivarzt entscheidet allein und rasch" | ala-01 Opt. B | ✅ „zwei unabhängige Ärzte … Sorgfalt vor Tempo" |
| „Angehörige bestätigen Hirntod" | ala-01 Opt. C | ✅ „ärztliche, an strenge Kriterien gebundene Aufgabe" |
| „zur Zustimmung raten" / „Zeitdruck + allein lassen" | ueb-01 (Branching) | ✅ ergebnisoffen begleiten, nicht drängen |

## 3. Rechtsstand / Currency (Prüf-Fokus)

- ENTSCHEIDUNGSLÖSUNG (seit 2012) durchgehend; **keine** versehentliche Widerspruchslösung als autoritative Aussage → **kein HOCH**.
- TPG definiert nicht den Tod, nur Mindestkriterium (F-02) — konsistent.
- Hirntod-Feststellung ärztlich, zwei unabhängige Ärzte ohne Transplantationsbezug (F-04) — konsistent.
- Pflege stellt keinen Hirntod fest / drängt nicht; Gespräch bei Arzt + Transplantationsbeauftragte (F-03/F-09) — konsistent.

## 4. E1/E2 — Reflexion/Diskussion, wertneutral

`ref-01` (reflection) und `ref-02` (freetext) sind Bloom-5-Diskussion ohne T/F-Validierung. systemPrompt/Bewertungskriterien fordern ausdrücklich Respekt und **keine Bewertung von Weltanschauungen/Religionen** — konform zu F-08 (Spektrum religiös-kultureller Sichtweisen belegt).

## 5. Step-Typ-Pflichten

- **MC:** Erklärung je Option, richtige Option mit Standard-/Kernfakt-Verweis, Distraktoren = realistische Anfänger-Fehler. ✅
- **truefalse (erm-02):** unzweideutig, Standard-Bezug. ✅
- **branching (ueb-01):** Score-Pfade führen zu unterschiedlichen, realistischen Angehörigen-Reaktionen. ✅
- **reflection (ref-01):** keine Wahr/Falsch-Bewertung, nicht bewertende Sprache. ✅
- **freetext (ref-02):** fachliche Bewertungskriterien, vorbildliche Musterantwort mit Standards-Bezug. ✅

## 6. Anrede / Konsistenz

Lernende mit „du" (u. a. „eine Grenze für dich"); Angehörige/Patient in 3. Person, keine Siez-Fehler an Lernende. Patient-Daten (Tobias Erlemann, 24, Motorradunfall/Hirnblutung, kein Ausweis) über alle 5 Phasen konsistent.

---

## Befunde (nicht-blockierend)

- **N1 (NIEDRIG, Currency-Beobachtung):** Organspende-Register (seit 03/2024) im „kein Ausweis"-Pfad nicht erwähnt — bewusste Leitplanke (Buchstand 2019/2020, keine erfundenen Register-Details). Inhaltlich nicht falsch; Vormerkung für spätere Aktualisierung.
- **N2 (NIEDRIG, kosmetisch):** Task nennt 9 Glossar-Einträge, im Code 8 — reine Zähl-Diskrepanz Doku/Code, alle 8 korrekt.

**Verdikt:** PASS. Keine Änderung am Step-Code erforderlich. Gründerin bleibt Backstop.
