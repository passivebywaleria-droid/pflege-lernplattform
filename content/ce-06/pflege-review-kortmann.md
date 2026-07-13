# Pflege-Review: ls-kortmann-abdomen

**Geprüft:** 2026-07-13
**Modus:** code (Content gebaut)
**Files:** content/ce-06/situationen/ls-kortmann-abdomen/phases.ts (5 Phasen) + Kernfakten `abdomen-stoma-drainagen.md` (F-01..F-17) + `notfallassessment.md` (F-07 SBAR) + glossar.ts
**Step-Anzahl:** 14 (5 MC, 3 Branching, 1 TrueFalse, 1 Pflegewagen, 1 Reflection, 1 Freetext, 3 inlineWissen-Tabs A/B/C)

## Mechanisierte Vor-Checks
- `pflege-anti-pattern-check.ts content/ce-06` → **keine Treffer** für kortmann (Anti-Patterns nur als Falsch-Optionen/Distraktoren, korrekt ausgenommen).
- `step-grounding-check.ts ce-06` → **PASS ls-kortmann-abdomen: claim-tragend 15 · gegroundet 15**.
- Alle `kernfaktId` lösen auf (inkl. der bewusst über `themaPrimaer: notfallassessment` aufgelöste F-07/SBAR in ueb-01 — im Code dokumentiert).

## Findings

### Phase 2 ALARMIEREN — ce06-kortmann-ala-00b-drainagen-verstehen (inlineWissen Tab B)

#### F-01 (NIEDRIG): „niemals einen kräftigen Sog" schwächt die Sog-Verbot-Aussage minimal auf
- **Stelle:** Tab-B `kerntext`, Schlusssatz des Drainage-Absatzes.
- **Problem:** Der Absatz sagt zuerst korrekt „Sie läuft OHNE Sog", schließt dann aber mit „Deshalb bekommt eine Bauchdrainage niemals einen **kräftigen** Sog." Das Adjektiv „kräftig" impliziert unbeabsichtigt, ein milder Sog sei zulässig. `faustregel`, `spektrum` und ala-01 sagen konsequent „OHNE Sog" (F-07: „kein Sog"). Interne Präzisions-Inkonsistenz, keine Sicherheitsgefahr.
- **Standard-Verweis:** Paetz Kap. 7.5.1 / Kernfakt F-07 („bei Drainagen in der Bauchhöhle wird kein Sog verwendet").
- **Empfehlung:** „niemals einen kräftigen Sog" → „niemals einen Sog" (oder „läuft grundsätzlich sogfrei").

### Phase 3 ERSTMASSNAHMEN — ce06-kortmann-erm-03 (mc, beginnender Schock)

#### F-02 (NIEDRIG): Schock-/Flachlagerung als pflegerische Sofortmaßnahme fehlt
- **Stelle:** erm-03, Score-3-Option + explanation (und Distraktor 3, wo „aufsetzen zum Trinken" korrekt als falsch markiert ist).
- **Problem:** Die richtige Antwort nennt „sofort melden, Volumen/Transfusion nach Anordnung, engmaschig überwachen" — fachlich korrekt, aber die eigenständige pflegerische Sofortmaßnahme **Flach-/Schocklagerung (Beine hoch, Autotransfusionslage)** beim beginnenden hypovolämischen Schock wird nicht erwähnt. Der Distraktor entlarvt „aufsetzen zum Trinken" nur über den nüchtern-Aspekt, nicht über die falsche (aufrechte) Lagerung bei Schock. Der Begriff „Autotransfusionslage" ist im Glossar bereits vorhanden.
- **Standard-Verweis:** Paetz Kap. 12.5/12.6 (Kreislaufsymptome/Schock); Schocklagerung als pflegerische Erstmaßnahme.
- **Empfehlung:** In die Musterantwort/explanation ergänzen: „flach lagern / Beine erhöht (Autotransfusionslage), warm halten" — und im Distraktor 3 die aufrechte Lagerung als zweiten Fehler benennen. Optionale Vertiefung, kein K.O.

### Phase 3 ERSTMASSNAHMEN — ce06-kortmann-erm-02 (pflegewagen, Item „Wärmflasche")

#### F-03 (NIEDRIG): Begründung „Wärme weglegen" könnte den Kernmechanismus benennen
- **Stelle:** erm-02, Item `waermflasche`, `erklaerung`.
- **Problem:** Item ist korrekt in „weglegen" einsortiert. Die Begründung („nicht zur Erstversorgung, nicht angezeigt, Bauch nicht eigenmächtig behandeln") ist ausreichend, aber didaktisch schwächer als möglich: Der eigentliche Grund (lokale Wärme → Vasodilatation kann die Blutung verstärken; maskiert abdominelle Symptome — klassisch „keine Wärme bei akutem Abdomen") fehlt.
- **Standard-Verweis:** Paetz Kap. 12.6 (akutes Abdomen).
- **Empfehlung:** Ergänzen: „Wärme kann die Durchblutung/Blutung verstärken und Bauchsymptome verschleiern — bei akutem Abdomen kontraindiziert." Kein Fehler in der Kategorisierung.

### Phase 4 ÜBERGEBEN — ce06-kortmann-ueb-01 (mc, SBAR)

#### F-04 (NIEDRIG): Distraktor 2 grenzwertig karikiert
- **Stelle:** ueb-01, Falsch-Option 2 („… macht euch da unten mal bereit für ihn").
- **Problem:** Der Distraktor bildet den realen Anfänger-Fehler „unstrukturiert, Nebensächlichkeiten statt harter Fakten" ab (didaktisch berechtigt), rutscht sprachlich aber leicht ins Karikaturhafte. Grenzwertig, nicht falsch — die Falsch-Aussage ist inhaltlich plausibel (fehlende OP/Tag/Blutmenge/Vitalzeichen).
- **Empfehlung:** Optional den umgangssprachlichen Schluss („macht euch da unten mal bereit") etwas neutraler fassen, damit der Distraktor als ernsthafte, unstrukturierte Übergabe erkennbar bleibt. Belassen möglich.

## Cross-Step-Probleme
Keine. Geprüft und **konsistent**:
- **Patient-Daten:** 72 J., 2. postop Tag, Not-Hartmann bei perf. Sigmadivertikulitis, endständiges Kolostoma links, Zieldrainage (Bauch, ohne Sog) + subkutane Redon, Blasenkatheter — durchgängig über alle 5 Phasen und die SBAR-Übergabe identisch.
- **Sog-Verbot Bauchdrainage:** Tab B, ala-01, Spektrum durchgängig „ohne Sog" (nur F-01 oben als NIEDRIG-Wording).
- **Drainage-nicht-eigenmächtig-ziehen:** Tab B/Tab C explizit, ala-02-Distraktor als Falsch-Option — konsistent (III.2).
- **nüchtern:** F-04-Logik durchgehend (erm-01, erm-02 getraenk-Item, erm-03-Distraktor, SBAR) — kein Widerspruch.
- **Stoma-Farblogik:** rosig-rot = vital / livide = Durchblutungsstörung → Arzt / grau-schwarz = Nekrose — identisch in Tab A, erk-04 (branching), Tab C. Kein Massieren (erk-04 als Falsch-Option, Tab C explizit).
- **Timeline:** stabiler 2. postop Tag mit Frühmobilisation (erk-05) → DANN Nachblutung (Phase 2) → keine Routine-Stoma-Versorgung/Mobilisation während der akuten Blutung (erm-02 stomabeutel-Item korrekt „weglegen"). Sauber, keine unerklärten Zeitsprünge.

## Zusammenfassung
- **0 Findings HOCH**
- **0 Findings MITTEL**
- **4 Findings NIEDRIG** (F-01 Sog-Wording, F-02 Schocklagerung fehlt, F-03 Wärme-Begründung, F-04 Distraktor-Ton)

**Allgemeine Beobachtungen:**
- **Kein Pseudo-Empathie-Bias.** Feedback durchgängig Sandwich-Prinzip (Anerkennen → konkret korrigieren → ermutigen), fachlich präzise, mit Standards-Verweis. Keine romantisierende Sprache, keine Bagatellisierung.
- **Distraktor-Realismus** hoch: plausible Anfänger-Fehler (Lageverwechslung Ileo/Kolo, Sog an Bauchdrainage, abwarten-statt-melden, Drainage selbst ziehen, aufsetzen zum Trinken). Anti-Patterns (Massieren, Drainage ziehen, oral bei nüchtern, Wärme, Beutel hochhängen) ausschließlich als Falsch-Optionen — korrekt.
- **Standards-Bezug** durchgängig belegt (Paetz Chirurgie Kap. 7.5/9.2.4/9.5/12.5/12.6/23.8/23.9; I care Krankheitslehre 7.1; EAUN 2024; SBAR Leonard 2004). Step-Grounding 15/15.
- **„du"-Anrede** an Lernende korrekt durchgehend; Patient korrekt mit „Sie" adressiert.
- **B1-Angemessenheit** gut: contentB1/explanationB1 mit inline-Definitionen der harten Begriffe. TrueFalse-Karten nutzen nur `explanation` (keine explanationB1) — entspricht der projektweiten CE-06-Konvention (auch gruber/yildiz), daher **kein Finding**.
- **Glossar-Chips:** Mehrere in `glossarBegriffe` genannte Fachbegriffe (u. a. viszeraler Schmerz, Nozizeptoren, Mazeration, Nekrose, livide, Peristaltik, Patientenedukation, Frühmobilisation) haben keinen eigenen Eintrag in `content/ce-06/glossar.ts`. Der Step-Renderer zeigt `glossarBegriffe` als nicht-interaktive Chips (kein toter Link), und dasselbe Muster besteht in bereits abgenommenen Schwester-Situationen (gruber: Überwachungsmonitor/Dekompensation/Vitalzeichen ebenfalls ohne Eintrag). Daher **projektweit akzeptiertes Muster, kein kortmann-spezifischer Defekt** — Empfehlung nur zur Vollständigkeit: die genannten zentralen Begriffe (v. a. viszeraler Schmerz, Nozizeptoren, Mazeration, Nekrose, Peristaltik, Patientenedukation) ins CE-06-Glossar aufnehmen, da Tab A und erk-02 didaktisch darauf aufbauen.

**K.O.-Verdikt: PASS** (kein HOCH, kein MITTEL; 4 NIEDRIG als optionale Verbesserungen, nicht deploy-blockierend).
