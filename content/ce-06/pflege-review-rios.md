# Pflege-Review: ls-rios-synkope (Variante-D-Redesign)

**Geprüft:** 2026-07-13
**File:** content/ce-06/situationen/ls-rios-synkope/phases.ts (5 Phasen)
**Grounding:** specs/ce-06/kernfakten/neurologische-akutsituationen.md (F-01..F-13) + notfallassessment.md (F-07 = SBAR)
**Fokus:** 4 neue Steps (erk-01b Hypoglykämie · ref-00b Neuro-Differenzial · ref-00c Apoplex · ref-00d Krampfanfall)
**Step-Anzahl gesamt:** 11 (7 MC, 1 branching, 2 inlineWissen, 1 reflection)

## Mechanisierte Vor-Checks

| Gate | Ergebnis |
|------|----------|
| zitat-verifizierer (Kernfakten) | ✅ 19/19 Belege verbatim-verifiziert |
| step-grounding-check ce-06 | ✅ PASS ls-rios-synkope (11 claim-tragend / 11 gegroundet, 0 dangling) |
| pflege-anti-pattern-check | ✅ Keine Treffer in Ríos |

## Findings

### 5) reflektieren — ce06-rios-ref-00b-neuro-differenzial (inlineWissen)

#### F-01 (NIEDRIG): Synkope-Beschreibung unterschlägt die gefährliche kardiale Synkope
- **Stelle:** Zeile 558 (kerntext) + Zeile 563-567 (spektrum „Synkope")
- **Problem:** „Synkope — eine kurze Ohnmacht. Der Kreislauf fängt sich von allein … Erste Reaktion: hinlegen, Beine hoch, beobachten." Diese Darstellung reduziert die Synkope auf die harmlose (vasovagale) Form. F-01 hält aber fest, dass die Synkope ein *Symptom, keine Diagnose* ist und die Ursache geklärt werden muss; F-02 betont, dass die kardiale Synkope (gerade bei Älteren, im Liegen/unter Belastung) gefährlich ist und abgeklärt werden muss. In einem Differenzial-Baustein könnte „fängt sich von allein" fälschlich beruhigen — ausgerechnet in einer Situation, die mit Blutdruckabfall unter Dialyse begann.
- **Standard-Verweis:** F-01/F-02 (Pflege heute Kap. 21.2.3) — Synkope ist Symptom, kardiale Form gefährlich.
- **Empfehlung:** Einen Halbsatz ergänzen, z.B. „… wieder wach — aber die Ursache muss geklärt werden (eine kardiale Synkope kann gefährlich sein)." Der reflection-Step ref-01 und die Kontextszene tragen das teils schon; die Differenzial-Karte selbst sollte es nicht ganz weglassen.

### 3) erstmassnahmen — ce06-rios-erm-03 (mc, Lagerung)

#### F-02 (NIEDRIG): B1-Erklärung priorisiert die stabile Seitenlage schwächer als die C1-Option
- **Stelle:** Zeile 416 (Option C1) vs. Zeile 420-421 (explanationB1)
- **Problem:** Die C1-Antwort stellt korrekt klar: „Da er nur auf Schmerzreiz reagiert, hat die stabile Seitenlage (Atemwegsschutz) Vorrang." Die B1-Erklärung dreht die Reihenfolge um: „Flach lagern und Beine hoch hilft dem Kreislauf. Wenn er nicht sicher wach ist, kommt er in die stabile Seitenlage." Weil Herr Ríos bereits bewusstseinsgetrübt IST (reagiert nur auf Schmerzreiz), ist die Seitenlage nach F-06 schon jetzt indiziert — nicht nur „falls". Die B1-Fassung könnte den Eindruck erwecken, erst flach+Beine hoch, dann konditional Seitenlage.
- **Standard-Verweis:** F-06 (Pflege heute Kap. 14/5.5) — bei Bewusstlosigkeit/-trübung mit erhaltener Atmung stabile Seitenlage, Atemwegsschutz hat Vorrang.
- **Empfehlung:** B1 angleichen: „Weil er nur auf Schmerz reagiert, kommt er in die stabile Seitenlage (Atemwege frei). Beine hoch hilft zusätzlich dem Kreislauf." Reihenfolge = Atemweg zuerst.

#### F-03 (NIEDRIG): Realismus — Seitenlage am laufenden Dialysezugang
- **Stelle:** Zeile 416, 419
- **Problem:** Herr Ríos liegt am Dialysestuhl, angeschlossen über Shunt und Blutlinien. Eine echte stabile Seitenlage mit erhöhten Beinen ist bei laufender Dialyse praktisch nur nach geordnetem Abbruch/Blutrückgabe möglich. Die Option berücksichtigt die Zugänge nur beim Beine-Hochlegen („soweit die Dialyse-Zugänge es zulassen"), nicht bei der Seitenlage.
- **Standard-Verweis:** Realitätscheck (kein direkter DNQP-Verweis).
- **Empfehlung:** Optional den Halbsatz auch auf die Seitenlage beziehen bzw. in der Erklärung erwähnen, dass die Dialyse dafür nach ärztlicher Anordnung reduziert/beendet wird. Kein fachlicher Fehler, nur Praxis-Feinheit.

### 5) reflektieren — ce06-rios-ref-00d-krampfanfall (mc)

#### F-04 (NIEDRIG): Status-epilepticus-Schwelle (10-15 Min) ist die konservative Lehrbuch-Fassung
- **Stelle:** Zeile 680 (explanation)
- **Problem:** „Dauert der Anfall zu lange (Erwachsene über ~10–15 Min) … Status epilepticus." Das ist F-12/Pflege-heute-treu, entspricht aber nicht mehr der aktuellen operationalen ILAE-Definition (Behandlungsschwelle t1 = 5 Min beim generalisiert tonisch-klonischen Anfall). Da die richtige Antwort-Option praktisch bereits „hole den Arzt, besonders wenn der Anfall über wenige Minuten dauert" sagt, ist die Handlungsanweisung sicher — nur die genannte Zahl ist konservativ.
- **Standard-Verweis:** F-12 (Pflege heute Kap. 37.8.2) — quellentreu; Hinweis: ILAE-Operationaldefinition 5 Min ist aktueller.
- **Empfehlung:** Belassen (quellenbelegt) oder mit Klammer relativieren: „(neuere Definitionen setzen die Behandlungsschwelle bereits bei ~5 Min an)". Kein Sicherheitsrisiko, da früher gehandelt wird.

## Cross-Step-Probleme

Keine. Geprüft und konsistent:
- **Patientendaten** (Ríos, 63, dialysepflichtiger Diabetiker unter Insulin, heute kaum gegessen, BZ 48 → nach ärztl. Glukose 120, Shunt intakt) durchgehend widerspruchsfrei über alle 5 Phasen.
- **BZ-Wert 48 mg/dl** in erk-01b (storyAufhaenger „48"), erk-02, ala-01, uebergeben konsistent; Reveal-Reihenfolge (erk-01 Hook → erk-01b Wissen mit 48 → erk-02 Einordnung) sauber.
- **Rollenabgrenzung** durchgängig identisch gehalten: Glukose 40 % i.v. = ärztlich (erk-01b, ala-01, erm-01, erm-02); Shunt nicht eigenmächtig punktieren (erm-02); keine ml-Dosis behauptet (nur Konzentration 40 %, F-05-belegt).
- **kernfaktId-Mapping** korrekt: erm-03 → F-06/F-07 (neuro: Lagerung/Kopftieflage); ueb-01 → F-07 aus themaPrimaer „notfallassessment" (= SBAR), NICHT die Kopftieflage-F-07. Kein Fehler.

## Fachliche Bestätigungen (die neuen Steps)

- **erk-01b Hypoglykämie:** BZ <50 (F-03), Insulin+zu wenig gegessen (F-04), imitiert Schlaganfall (F-04), Behandlung nach Bewusstsein — wach oral / bewusstseinsgetrübt nichts oral + Aspirationsgefahr + Glukose i.v. ärztlich (F-05). Alles korrekt und gegroundet. (Glukagon aus F-05 bewusst weggelassen — im klinischen Dialyse-Setting mit anwesendem Arzt didaktisch vertretbar, kein Fehler.)
- **ref-00b Neuro-Differenzial:** Vier Bilder sauber getrennt; Apoplex-Zeichen (Mundwinkel/Arm/Sprache, einseitig, bleibend) korrekt OHNE das im Korpus mehrdeutige „FAST" zu benennen — konsistent mit der bewussten Abgrenzung im Kernfakten-Header. Wiederbegegnung Wagner (Kreislauf da → NICHT reanimieren; Stillstand → reanimieren) fachlich richtig und didaktisch stark.
- **ref-00c Apoplex:** Plötzliche einseitige bleibende Ausfälle + BZ normal → Schlaganfall-Notfall, sofort Arzt/Notruf, Symptombeginn dokumentieren, time is brain (F-08/F-09). Distraktoren (1 Std. abwarten / Traubenzucker) realistisch, Erklärungen korrekt.
- **ref-00d Krampfanfall:** Schützen, NICHT festhalten, NICHTS in den Mund, Zeit stoppen, Status epilepticus (F-10/F-11/F-12). Beißkeil/Gegenstand zwischen die Zähne korrekt als obsolet dargestellt (F-11). Distraktor „Zuckerwasser einflößen" mit Aspirations-Erklärung korrekt.
- **Distraktor-Qualität:** durchgehend plausible Anfänger-/Hierarchie-Fehler (z.B. „sie ist länger dabei, sie wird schon wissen" in erm-01; biografische SBAR-Antwort in ueb-01), keine Karikaturen.
- **Pseudo-Empathie / Slang:** keine romantisierende Sprache, kein „indirektes Licht", keine NRS-Bagatellisierung, keine kinästhetisch falschen Formulierungen.

## Zusammenfassung

- 0 Findings HOCH
- 0 Findings MITTEL
- 4 Findings NIEDRIG (F-01 Synkope-Vollständigkeit, F-02 B1-Priorisierung Seitenlage, F-03 Realismus Dialysezugang, F-04 Status-epilepticus-Zahl)
- **Allgemeine Beobachtung:** Sehr saubere, standardsbelegte Situation. Rollenabgrenzung Pflege/Arzt vorbildlich (Glukose i.v. ärztlich, Shunt-Schutz), obsolete Empfehlung (Beißkeil) korrekt als obsolet gelehrt, keine Pseudo-Empathie, keine erfundenen Instrumente (FAST bewusst vermieden). Alle 4 neuen Steps fachlich korrekt und gegroundet. Die NIEDRIG-Findings sind Feinschliff (Vollständigkeit/B1-Priorisierung), kein Sicherheitsrisiko.
- **K.O.-Verdikt: PASS** (keine HOCH- oder MITTEL-Findings; alle NIEDRIG optional, live-deploy-tauglich)
