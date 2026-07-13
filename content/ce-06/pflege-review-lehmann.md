# Pflege-Review: ls-lehmann-sturz-sht

**Geprüft:** 2026-07-13
**File:** content/ce-06/situationen/ls-lehmann-sturz-sht/phases.ts (5 Phasen)
**Grounding:** specs/ce-06/kernfakten/traumatologische-erstversorgung.md (F-01..F-08) + notfallassessment.md (F-07 = SBAR)
**Fokus:** Akutsituation Sturz + SHT im Heim; 3 neue inlineWissen-Tabs (erk-01b · erm-00b · erm-02b) + Anti-Pattern korrektiv
**Step-Anzahl:** 9 (4 mc, 1 branching, 1 truefalse, 1 reflection, 3 inlineWissen)

## Mechanisierte Vor-Checks

| Gate | Ergebnis |
|------|----------|
| zitat-verifizierer (Kernfakten) | ✅ 12/12 Belege verbatim-verifiziert |
| step-grounding-check ce-06 | ✅ PASS ls-lehmann-sturz-sht (0 dangling / 0 missing) |
| pflege-anti-pattern-check | ✅ Keine Treffer in Lehmann |
| standards-currency-check --include-plans | ✅ 0 veraltete Normen (§1831 Fassung ab 2023 korrekt) |
| faktentreue-check | ✅ SBAR + ABCDE gedeckt (Coverage 100%) |

## Findings

### 3) erstmassnahmen — ce06-lehmann-erm-00b-blutstillung + ce06-lehmann-erm-01 (inlineWissen + mc)

#### F-01 (MITTEL): Sub-Claim „kein punktueller Druck über Knochenstufe / Verdacht Schädelbruch" klinisch korrekt, aber nicht gegroundet
- **Stelle:** Zeile 344 (kerntext), 362-365 (spektrum „Verdacht auf Schädelbruch"), 371 (karteikarte), 406 (erm-01 explanation der richtigen Option)
- **Problem:** Die Aussage „über einer Knochenstufe / bei Verdacht auf Schädelbruch KEIN punktueller, kräftiger Druck, sondern nur locker steril abdecken" ist fachlich **richtiges Erste-Hilfe-Standardwissen** (imprimierte/offene Schädelverletzung nicht komprimieren). Sie ist aber **nicht** von den zitierten Kernfakten F-06 (Druckverband/sterile Kompresse) oder F-07 (Wärmeerhalt) gedeckt und im `pflege-heute-volltext` nicht verbatim auffindbar (Suche nach „Knochenstufe/Schädelbruch/kein Druck" ohne Treffer). Der `step-grounding-check` schlägt nicht an, weil F-06/F-07 als IDs existieren — die konkrete Aussage aber nicht abdecken. Das verletzt die Projekt-Regel „nichts Ungedecktes", **nicht** die Fachlichkeit.
- **Standard-Verweis:** Erste-Hilfe-Doktrin (DRK/DGUV: bei Verdacht auf Schädelbruch keinen direkten Druck); im aktuellen CE-06-Korpus nicht verbatim belegt.
- **Empfehlung:** (a) bevorzugt — verifizierten Verbatim-Beleg als **F-09** in `traumatologische-erstversorgung.md` nachtragen (z.B. `notfallmedizin-index` / DRK-Leitlinie), `kernfaktId` der beiden Steps um `"F-09"` ergänzen. (b) falls kein Korpus-Beleg beschaffbar — den Sub-Claim auf das Belegte reduzieren: „Sterile Kompresse, leichter Druck; bei starker Blutung Druckverband; nicht umlagern" und die Knochenstufe-Ausnahme streichen. Da klinisch wertvoll: (a).

### 3) erstmassnahmen — ce06-lehmann-erm-03 (truefalse)

#### F-02 (NIEDRIG): truefalse mit nur einer Karte — Abgrenzung „einseitiges Gitter = keine FeM" nicht als Gegenkarte geübt
- **Stelle:** Zeile 576-583 (trueFalseCards)
- **Problem:** Nur eine (falsche) Aussage. Die trennscharfe Abgrenzung (einseitiges Gitter, aus dem die Bewohnerin selbst heraus kann = keine genehmigungspflichtige FeM — steht schon im Tab C, Zeile 537-541) wird als Wahr/Falsch-Mechanik nicht genutzt.
- **Standard-Verweis:** F-08 (BGB § 1831); Tab C spektrum „Einseitiges Gitter".
- **Empfehlung:** Optional zweite Karte: „Ein einseitiges Bettgitter, aus dem Frau Lehmann selbst heraus kann, ist keine genehmigungspflichtige freiheitsentziehende Maßnahme." → `isTrue: true`.

### 3) erstmassnahmen — ce06-lehmann-erm-02 (branching)

#### F-03 (NIEDRIG): Glossar nennt „Validation" (Feil), die korrekte Option bildet aber v.a. Deeskalation ab
- **Stelle:** Zeile 448 (glossarBegriffe), 459/461-462 (korrekte Option + feedback)
- **Problem:** Frau Lehmann fragt desorientiert „Wo ist Mutti?". Die richtige Option deeskaliert vorbildlich (Augenhöhe, Name, langsam, behutsam sichern) — greift den emotionalen Gehalt aber nicht explizit validierend auf (Feil: Gefühl hinter der Äußerung aufnehmen, Realität nicht korrigieren). Positiv: die Option korrigiert die Bewohnerin korrekt **nicht**. Glossar verspricht „Validation", gelehrt wird eher „Deeskalation".
- **Standard-Verweis:** Validation nach Naomi Feil.
- **Empfehlung:** Optional im feedback der korrekten Option einen Halbsatz zur validierenden Haltung ergänzen (Gefühl aufgreifen statt „wegdiskutieren").

## Cross-Step-Konsistenz

- **Patientendaten:** OK — Alter 86 (nur SBAR, kein Widerspruch); Demenz/Osteoporose/Vorhofflimmern unter Apixaban durchgängig; „dritter Sturz in sechs Monaten" (SBAR + Reflexion) konsistent; Apixaban immer Wirkstoff, nie Markenname.
- **Bettgitter-Framing:** OK — beidseitig durchgängig FALSCH/FeM (erm-02 → erm-02b → erm-03), keine Umkehr.
- **Licht:** OK — „gedämpftes Nachtlicht" nur Distraktor/Story-Reflex, korrekt gelehrt „Licht voll einschalten". Reflexion (Zeile 700) trennt sauber Orientierungslicht (Sturzprophylaxe, ok) vs. gedämpftes Licht bei Inspektion (falsch) — kein Selbstwiderspruch.
- **Zeit:** OK — 02:45 Uhr durchgehend, Phasenlogik ohne unerklärte Sprünge.
- **Recht/Bevollmächtigte:** OK — Tochter (Vorsorgevollmacht) einbinden UND Genehmigung Betreuungsgericht: korrekt, da § 1831 Abs. 4 auch Bevollmächtigte an die Gerichtsgenehmigung bindet.

## Positive Beobachtungen

- Anti-Patterns bewusst nur als FALSCHE Optionen + korrektiv gelehrt (Licht, beidseitige Bettgitter, Achselgriff, „Glück gehabt") — Distraktor-vs-Empfehlung sauber getrennt.
- „du"-Anrede an Lernende durchgängig; „Sie" nur in patientengerichteter Rede (korrekt).
- Sandwich-Prinzip in Branching-Feedbacks mit realistischer Patient-Reaktion + Körpersprache.
- Wiederbegegnung Wagner (Kreislauf da vs. Stillstand) fachlich korrekt kontrastiert.
- SHT unter Antikoagulation → Klinik/CT (F-04/F-05) konsistent; kein eigenmächtiges Absetzen.
- Cushing-Trias bewusst NICHT behauptet (nicht korpusbelegt) — Abgrenzung eingehalten.

## Zusammenfassung

- **0 Findings HOCH**
- **1 Finding MITTEL** (F-01 — Grounding-Gap eines klinisch korrekten Sub-Claims)
- **2 Findings NIEDRIG** (F-02 truefalse-Kontrast, F-03 Validation-Einlösung)
- Kein Pseudo-Empathie-Bias, starker Standards-Bezug (DNQP/Erste Hilfe, § 1831, SBAR, Kinästhetik, Deeskalation), B1-Konsistenz durchgängig (jeder Text mit B1-Variante).

**K.O.-Verdikt: PASS** — kein HOCH-Finding, keine pflegerisch falsche Empfehlung, keine Inkonsistenz. F-01 ist ein Nachvollziehbarkeits-/Grounding-Gap (kein Fachfehler); vor Live-Deploy F-09 nachtragen, dann ist die Situation auch grounding-vollständig.
