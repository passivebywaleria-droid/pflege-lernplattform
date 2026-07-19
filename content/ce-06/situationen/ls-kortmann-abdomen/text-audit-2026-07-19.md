# Text-Audit: ls-kortmann-abdomen

**Geprüft:** 2026-07-19
**Auftrag:** Voll-Audit aller Texte (Gründerin-Regel „jeden Text in jedem Schritt")
**Files:** phases.ts (1099 Z.), patient.ts, situationen.ts-Eintrag
**Umfang:** 16 Steps (11 Antwort-Steps + 3 inlineWissen + 1 reflection + 1 freetext) über 5 Phasen + 5 Phasen-Kontexte (C1/B1) + patient.ts — ~230 geprüfte Textfelder (C1+B1)

---

## Ergebnis

**0 HOCH · 0 MITTEL · 3 NIEDRIG**

Die Situation ist fachlich sehr sauber. Alle sicherheitskritischen Fakten, die die Gründerin explizit genannt hat, sind **vollständig** in den Antwort-/Aufdeck-Texten enthalten (kein Halbwissen, kein verkürzt-verzerrtes Destillat):

- **Stoma-Beurteilung inkl. livide→Arzt** — vollständig in erk-04 (branching): rosig/rot = vital, dunkelrot/livide = Durchblutungsstörung → sofort Arzt, grau/schwarz = Nekrose; Beurteilung ist ärztliche Aufgabe; kein Massieren. Gegroundet F-13.
- **Drainage-Fördermenge >200 ml/1 h → Arzt** — vollständig in ala-02 (branching) + erm-00b/erm-01. Gegroundet F-06.
- **Zieldrainage OHNE Sog vs. Redon (Saugdrainage)** — vollständig in ala-00b (inlineWissen) + ala-01 (MC), inkl. Grund (Sog schädigt Darm → Perforation/Fistel). Gegroundet F-07/F-08.
- **Drainage nie eigenmächtig abklemmen/ziehen** — vollständig in ala-02 (Distraktor korrekt als falsch) + erm-00b. Gegroundet F-06.
- **Nüchtern (mögliche Re-OP)** — vollständig in erm-00b, erm-01, erm-02, erm-03. Gegroundet F-04.

Verifizierte Zahlen (wortwörtlich gegen Volltext):
- Ileostoma-Fördermenge „~1–3 Liter/Tag frisch" ✓ I care Pflege 3. Aufl. Z. 163928 „1000–3000 ml/Tag"; Paetz Z. 33985 „pro Tag etwa 1 Liter" (Content nutzt die weitere I-care-Spanne — zulässig, sicherere Lehre).
- Katheterbeutel unterhalb Blasenniveau ✓ F-16 / EAUN 2024.
- Postop Wasserlassen 6–8 h, Frühmobilisation als wirksamste Pneumonieprophylaxe ✓ F-15/F-16.
- >200 ml/1 h Nachblutungszeichen ✓ Paetz Z. via F-06.

---

## Findings

### F-01 (NIEDRIG): Hartmann-Vereinfachung verschleiert die Resektion
- **Stelle:** phases.ts:179 (erk-02b kerntext C1) / :180-181 (B1)
- **Zitat:** „Weil bei der Hartmann-Operation nur ein Stück Darm vorübergehend stillgelegt wird, ist dieses endständige Kolostoma meist temporär".
- **Problem:** Bei der Hartmann-OP wird der erkrankte Sigmaabschnitt **reseziert (entfernt)**, das proximale Ende als endständiges Kolostoma ausgeleitet, der Rektumstumpf blind verschlossen. „nur ein Stück Darm vorübergehend stillgelegt" kann suggerieren, es sei nichts entfernt worden. patient.ts:28 sagt korrekt „Der entzündete Darmabschnitt wurde entfernt" — der Inline-Text ist unpräziser als der Fall.
- **Beleg:** Kernfakten F-12 (Paetz Kap. 23.8.3): „Nach einer Hartmann-Operation besteht ebenfalls ein endständiges Kolostoma; dieses ist meist ein temporäres Stoma, das operativ zurückverlagert werden kann." (Resektion des erkrankten Abschnitts implizit.)
- **Fix:** z. B. „Bei der Hartmann-OP wird der erkrankte Darmabschnitt entfernt, das obere Ende als Stoma ausgeleitet und der untere Rest vorübergehend verschlossen — deshalb kann das endständige Kolostoma später zurückverlegt werden." Kernaussage (temporär/rückverlegbar) bleibt korrekt.

### F-02 (NIEDRIG): „>200 ml/1 h → sofort Arzt" in Faustregel/Karteikarte ohne Bezug „erste postop Stunde"
- **Stelle:** phases.ts:653-655 (erm-00b faustregel) + :688/692 (karteikarte); analog :446-449.
- **Zitat:** „Über 200 ml frisches Blut/1 h aus der Drainage → sofort Arzt."
- **Problem:** Die klassische Schwelle „>200 ml in der **ersten postoperativen Stunde**" (F-06) wird im Destillat auf „/1 h" generalisiert. Klinisch sicher (eskaliert eher), aber die Fundstelle bezieht die Zahl auf die 1. postop Stunde. Die ala-02-Erklärung (phases.ts:577) liefert die Nuance korrekt („Als klassische Schwelle gilt >200 ml in der ersten postoperativen Stunde; … auch später als sekundäre Nachblutung ebenso alarmierend") — die verkürzten Merktexte übernehmen sie nicht.
- **Beleg:** Kernfakten F-06 (Paetz Kap. 12.5): „stärkerer Blutverlust aus Drainagen (über 200 ml in der ersten Stunde) ein leicht erkennbares und untrügliches Zeichen einer Nachblutung".
- **Fix:** In Faustregel/Karteikarte ergänzen: „(klassische Schwelle: erste postop Stunde; ein plötzlicher starker Blutverlust ist auch später alarmierend)".

### F-03 (NIEDRIG): Somatik/Neuropathie-Deskriptoren in Distraktor-Erklärungen ohne eigenen Beleg
- **Stelle:** phases.ts:131-134 (erk-02 Distraktor „Oberflächenschmerz") / :139-142 (Distraktor „neuropathisch").
- **Zitat:** „scharf, gut lokalisierbar" (somatisch) bzw. „typisch brennend oder elektrisierend-einschießend" (neuropathisch).
- **Problem:** Die Aussagen sind schmerzphysiologisches Standardwissen und korrekt; Kernfakt F-05 belegt jedoch nur die Dreiteilung somatisch/viszeral/neurogen und den viszeralen Schmerz verbatim, nicht die konkreten Deskriptoren. Kein Fehler (Distraktor-Erklärungen, fachlich richtig), nur ein Grounding-Hinweis für den nächsten Beleg-Durchlauf.
- **Beleg:** F-05 (I care Krankheitslehre Kap. 7.1) belegt viszeral/Kolik verbatim; somatisch/neuropathisch-Deskriptoren dort nicht wörtlich zitiert.
- **Fix:** Optional Verbatim-Beleg für somatisch (scharf/lokalisiert) + neuropathisch (brennend/einschießend) in F-05 nachtragen. Keine Content-Änderung nötig.

---

## Konsistenz (geprüft, widerspruchsfrei)

- **Zeitachse:** „vor drei Tagen kam er … nachts operiert" + „2. postoperativer Tag" ist konsistent: Aufnahme abends (vor 3 Tagen), OP in der Nacht rollt auf den Folgetag (= OP-Tag), heute = 2. postop Tag. Kein Widerspruch.
- **Patient-Daten:** 72 J., endständiges Kolostoma links, intraabdominelle Zieldrainage (ohne Sog) + subkutane Redon, Blasendauerkatheter — durchgängig identisch (patient.ts ↔ alle Phasen).
- **Re-OP-Dramaturgie:** stabiler 2. postop Tag (Wissen/Routine: erk-05 Frühmobilisation) → Nachblutung (ala) → Erstmaßnahmen (erm, nüchtern/Überwachung) → SBAR-Übergabe OP (ueb) → Reflexion (ref). Keine Mobilisation/Routine-Stomawechsel während der akuten Blutung (erm-02 Stomabeutel korrekt als „weglegen"). Cross-Step-konsistent.
- **B1-Drift:** keine. B1 fachlich identisch mit C1; B1 ergänzt teils Definitionen (z. B. „endständig", „Aspiration", „Kreuzblut") — zulässige Scaffolding, keine Widersprüche.
- **False-Positive-Disziplin:** Alle Distraktoren/Score-0-Optionen sind korrekt als falsch markiert, ihre explanation/feedback fachlich richtig und vollständig.

## K.O.-Verdikt: **PASS** (0 HOCH)

## Fix-Status (2026-07-19, Haupt-Session)
- F-01 ✅ Hartmann-Beschreibung präzisiert: erkrankter Abschnitt ENTFERNT, oberes Ende ausgeleitet, unterer Rest verschlossen (C1+B1).
- F-02 ✅ Faustregel + Karteikarte tragen jetzt die Schwelle „erste postoperative Stunde" + „plötzlicher starker Blutverlust auch später alarmierend" (C1+B1). ala-02-Erklärung hatte die Nuance bereits.
- F-03 ⏳ Kein Content-Fehler; Verbatim-Beleg für somatisch/neuropathisch-Deskriptoren in Kernfakt F-05 beim nächsten Beleg-Durchlauf nachtragen.
