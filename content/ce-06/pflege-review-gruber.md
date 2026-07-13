# Pflege-Review: ls-gruber-schock

**Geprüft:** 2026-07-13
**Modus:** code (Content gebaut)
**Files:** 3 (phases.ts, patient.ts, index.ts) + glossar.ts + kernfakten schock-und-kreislauf.md / notfallassessment.md
**Step-Anzahl:** 11 Antwort-/Reflexions-Steps + 3 inlineWissen-Tabs
- 7 MC (erk-01, erk-02, ala-01, erm-01, erm-03, erm-06, ueb-01)
- 1 pflegewagen (erm-02), 1 truefalse (erm-04), 1 branching (erm-05), 1 reflection (ref-01), 1 freetext (ref-02)
- 3 inlineWissen: Tab A (erk-01b Schock verstehen), Tab C (ala-00b Team/Grenze, KB III.2), Tab B (erm-00b Lagern-Falle)

## Mechanisierte Vor-Checks
- `pflege-anti-pattern-check.ts content/ce-06`: **0 Treffer im Gruber-File** (die 32 CE-weiten Treffer stammen aus anderen Situationen — bewusste Falsch-Optionen/Distraktoren, hier nicht einschlägig).
- `step-grounding-check.ts ce-06`: **PASS** für ls-gruber-schock (0 dangling, 0 missing kernfaktId).
- Alle kernfaktId (F-01..F-14) im File verweisen auf existierende, verbatim-belegte Kernfakten.

## Befund gesamt

Sehr solider, sauber gegroundeter Build. Die zentrale Lernfalle (Autotransfusionslage
mit Ausnahme obere GI-Blutung) ist fachlich korrekt, konsistent über alle Steps und
literaturbelegt umgesetzt. Kein pflegefachlicher Fehler gefunden. Distraktoren sind
überwiegend realistische Anfänger-Impulse. „du"-Anrede durchgängig. Patient-Daten
konsistent (Herbert Gruber, 69, Ulcus/NSAR/Hypertonie) über patient.ts, SBAR und
Reflexion. Nur NIEDRIG-Findings (Feinschliff).

## Findings

### phase 3 erstmassnahmen — erm-01 (mc)

#### F-01 (NIEDRIG): Distraktor „zum Aufstehen bewegen" grenzwertig plakativ
- **Stelle:** phases.ts Z. 472, Option 3
- **Problem:** „Den Oberkörper stark aufrichten und ihn zum Aufstehen bewegen, damit ihm nicht mehr übel wird." Einen hypotonen Schockpatienten aktiv zum Aufstehen zu bewegen, ist so grob falsch, dass es der Karikatur nahekommt. Der naive Kern (aufsetzen gegen Übelkeit) ist zwar plausibel, das „Aufstehen bewegen" überzeichnet.
- **Standard-Verweis:** Schock-Erstmaßnahmen (F-04, F-06) — im Schock jede Anstrengung vermeiden.
- **Empfehlung:** Distraktor auf den plausiblen Kern reduzieren, z. B. „Ihn zum Schutz vor Erbrechen aufrecht hinsetzen lassen" (ohne Mobilisation) — bleibt falsch, wirkt aber realistischer.

### phase 4 uebergeben — ueb-01 (mc)

#### F-02 (NIEDRIG): Länge der richtigen SBAR-Option als möglicher Tell
- **Stelle:** phases.ts Z. 875 (korrekte Option) vs. Z. 883/891 (Distraktoren)
- **Problem:** Die vollständige SBAR-Antwort ist deutlich länger/dichter als die beiden Distraktoren. Bei MC kann Länge zum unbeabsichtigten Lösungshinweis werden.
- **Standard-Verweis:** MC-Qualitätsregel (pflege-konformitaet.md — Optionen vergleichbar lang, Begründung in explanation).
- **Empfehlung:** Inhaltlich korrekt so (SBAR ist naturgemäß umfangreich), akzeptabel. Optional die Distraktoren etwas anreichern, damit die Länge nicht diskriminiert. Kein Handlungszwang.

### phase 3 erstmassnahmen — erm-00b / erm-01 (inlineWissen + mc)

#### F-03 (NIEDRIG): Alternativlagerung „Oberkörper leicht erhöht" ist klinische Inferenz über den Verbatim-Beleg hinaus
- **Stelle:** phases.ts Z. 396/409/456/459 (Tab B + erm-01)
- **Problem:** F-06 belegt nur die Ausnahme (keine Autotransfusionslage bei oberer GI-Blutung), NICHT die konkrete Alternativposition. Der Content ergänzt „nach Wunsch / Oberkörper eher leicht erhöht, Kopf zur Seite" als Aspirationsprophylaxe — fachlich korrekt und Standard, aber eine Ableitung. Bei ausgeprägter Hypotonie ist starke Oberkörperhochlagerung ohnehin kontraindiziert; der Content sagt bewusst „leicht" und „nach Wunsch", das ist konsistent.
- **Standard-Verweis:** Aspirationsprophylaxe bei Erbrechen / obere GI-Blutung (F-04, F-06 sinngemäß).
- **Empfehlung:** Keine inhaltliche Korrektur nötig — die Formulierung „leicht erhöht / nach seinem Wunsch / Kopf zur Seite" ist sauber abgesichert. Nur zur Kenntnis: Aussage geht minimal über den wörtlichen Beleg hinaus, bleibt aber im I-care-/Pflege-heute-Standard.

### Glossar (situationsübergreifend)

#### F-04 (NIEDRIG): Mehrere C1-`glossarBegriffe` ohne Eintrag in glossar.ts
- **Stelle:** glossar.ts vs. contentC1 diverser Steps
- **Problem:** Systematisch fehlen u. a. Körperkreislauf, Leitsymptome, Kreuzblut, Ringer(-Lösung), Dekompensation, Sinusknoten, Reizleitungssystem, Hypokaliämie, Überwachungsmonitor, Venenverweilkanüle, ZVK, SBAR, Coping, Familienbesprechung, Flussrate, Sauerstoffmaske/-brille, Vitalzeichen. In der B1-Variante sind viele inline „(= …)" erklärt, in der C1-Variante bekommt der Lernende aber keinen Tooltip.
- **Standard-Verweis:** VISION Achse 1 (Sprachförderung/Glossar DE/AR/TR) — kein Pflege-Fehler, aber Feature-Lücke.
- **Empfehlung:** Kernbegriffe (ZVK, SBAR, Sinusknoten, Reizleitungssystem, Hypokaliämie, Kreuzblut, Coping) in glossar.ts nachtragen; die restlichen bei Gelegenheit. Nicht deploymentblockierend.

## Cross-Step-Probleme
Keine. Positiv geprüft und konsistent:
- **Beine-hoch-Verbot** durchgängig: Tab B (erm-00b) → MC erm-01 (Autotransfusionslage-Distraktor falsch) → pflegewagen erm-02 (Schaumstoffkeil zum Beine-Hochlagern → „weglegen") → branching erm-05 (Oberkörper-hoch-Distraktor falsch). Widerspruchsfrei.
- **Nüchtern-Gebot** konsistent: erm-02 (Abendessen + Kalium-Brause → weglegen) ↔ SBAR („nüchtern") ↔ Diagnose obere GI-Blutung.
- **Vitalzeichen-Progression** logisch: erk-02 P108/RR100-70 → erm-05 P132/RR80-50 (Dekompensation) → SBAR P132/RR80-50. Kein Sprung.
- **Kompetenzgrenze** (Katecholamine/Perfusor/Laufrate nur Arztanordnung) konsistent: Tab C, truefalse erm-04, branching erm-05, glossar.
- **Patient-Background** (NSAR-Ulkus, verschwiegene Meläna) ist in patient.ts etabliert → SBAR-Background und ref-02 („warum hat er nichts gesagt") sind gedeckt, keine aus dem Nichts eingeführten Fakten.
- **Kalium i.v. langsam / hohe Konz. nur ZVK** (erm-06, F-10) konsistent mit pflegewagen-Erklärung (kein orales Kalium). Bolus-Distraktor korrekt als gefährlich markiert.

## Positiv hervorzuheben
- Sandwich-Prinzip in reflection (systemPrompt) und freetext (bewertungskriterien) explizit gefordert; Musterantwort relativiert Renates Schuld fachlich sauber.
- Adrenalin/Noradrenalin nur als körpereigene Stresshormone (Zentralisation), keine erfundenen Med-Dosen — Leitplanke eingehalten.
- O2-Maske 6–8 l/min + „nicht unter 5 l/min" (CO2-Stau) korrekt und F-11-belegt.
- Angehörigenbegleitung (Renate) als eigener Kompetenzstrang (III.2/Coping) sauber integriert.

## Zusammenfassung
- **0 Findings HOCH**
- **0 Findings MITTEL**
- **4 Findings NIEDRIG** (F-01 Distraktor-Feinschliff, F-02 SBAR-Längentell, F-03 Lagerungs-Inferenz, F-04 Glossar-Lücken)
- Kein Pseudo-Empathie-Bias, kein romantisierender Slang. Standards-Bezug (Pflege heute Kap. 14.5, I care Anatomie) durchgängig und verbatim-belegt. B1-Varianten vorhanden und angemessen. „du"-Anrede konsistent.
- **K.O.-Verdikt: PASS** (kein HOCH offen; die 4 NIEDRIG sind Feinschliff, nicht deploymentblockierend).
