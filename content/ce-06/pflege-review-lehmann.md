# Pflege-Review: ls-lehmann-sturz-sht (mode=code)

**Geprüft:** 2026-07-03
**Files:** 3 (phases.ts [5 Phasen], patient.ts, index.ts)
**Step-Anzahl:** 7 (5 MC, 1 Branching, 1 TrueFalse, 1 Reflection — MC-Zählung inkl. erm-01)
**Deckt:** CE06-LE1-K1 (Erste-Hilfe bei Wunden, Blutungen, Sturz)

## Mechanisierte Vor-Checks
- `standards-currency-check ce-06 --include-plans`: ✅ 0 Treffer (§1831 durchgängig, kein §1906/1906a)
- `step-grounding-check ce-06`: ✅ PASS — ls-lehmann 7/7 claim-tragende Steps gegroundet, 0 dangling
- `pflege-anti-pattern-check`: ✅ 0 Treffer in den Lehmann-Files (die 32 Repo-Treffer sind alle CE-02, Anti-Pattern hier nur als korrekt widerlegte Distraktoren)
- Grep §1906 / „Cushing-Trias": ✅ nicht vorhanden

## Prüf-Fokus — Ergebnis pro Punkt (alle 9 Punkte der Gründerin)

1. **SHT unter Apixaban → 112/CT, verzögerte Blutung** — KORREKT & klar priorisiert (erk-02, ala-01, ueb-01). „Sie ist ja wach" als Falle in ala-01/Opt.2 und ueb-01/Opt.2 sauber widerlegt („'Wach' schließt eine sich entwickelnde Blutung nicht aus"). Grounding F-04/F-05.
2. **Nicht-Bewegen / Lage belassen / ansprechen UND anfassen (Schwerhörigkeit)** — KORREKT (erk-01). Sinnvoll auf „leicht an der Schulter berühren" abgeschwächt statt „rütteln" wegen WS-Verdacht. Grounding F-01/F-03.
3. **Wundversorgung: sterile Kompresse + leichter Druck / Druckverband bei starker Blutung; Wärmeerhalt** — KORREKT (erm-01). Grounding F-06/F-07. Siehe NIEDRIG F-06.
4. **Anti-Pattern nur als FALSCHE Optionen** — VERIFIZIERT: (a) gedämpftes Licht = erm-01/Opt.2 falsch; (b) „Glück gehabt" = erm-01/Opt.3 + ueb-01/Opt.2 falsch; (c) unter den Achseln = erm-02/Opt.2 falsch; (d) beidseitiges Bettgitter = erm-02/Opt.3 + erm-03 falsch. KEINE versehentlich als richtig markiert (erk-01=Opt.1, erk-02=Opt.1, ala-01=Opt.1, erm-01=Opt.1, erm-02=Opt.1, erm-03=isTrue:false korrekt).
5. **Recht §1831 BGB** — KORREKT und sogar präzise. Quelle bgb-1831.txt direkt geprüft: die Akut-Ausnahme („wenn mit dem Aufschub Gefahr verbunden ist; die Genehmigung ist unverzüglich nachzuholen") steht wörtlich in §1831 Abs. 2, gilt via Abs. 4 für FeM — die Zitierung „§1831 Abs. 2 u. 4" ist damit sachlich richtig. Bevollmächtigte Tochter (Vorsorgevollmacht) + Betreuungsgericht-Genehmigung ist konsistent mit §1831 Abs. 5 i.V.m. §1820 Abs. 2 Nr. 2 BGB. Milde Alternativen genannt (generisch in erm-03, konkret in Reflexion). Siehe NIEDRIG F-04 (nur Grounding-Hygiene).
6. **Demenz-Deeskalation (erm-02)** — KORREKT: Augenhöhe, mit Namen vorstellen, langsam sprechen, behutsam sichern OHNE Kraft/Fixieren; Osteoporose → kein kraftvolles Festhalten explizit begründet. Fachlich vorbildlich.
7. **„Cushing-Trias" vermieden** — BESTÄTIGT, taucht nicht auf.
8. **MC-Längen-Bias** — überwiegend im Rahmen; zwei NIEDRIG-Hinweise (F-01, F-02).
9. **Distraktoren/Sandwich/Cross-Step/„du"/Umlaute** — Patient-Daten konsistent (86 J., vaskuläre Demenz, Osteoporose, VHF/Apixaban, 3 Stürze/6 Mon., 02:45, 2 PK/48 Bew., Tochter Gudrun Vorsorgevollmacht) über alle Phasen. „du" an Lernende durchgehend, Optionen in Ich-Form. Echte Umlaute überall. Sandwich-Feedback vorhanden.

## Findings

### erm-01 (mc, fallstrick) — Erstversorgung Wunde/Licht/Wärme

#### F-01 (NIEDRIG): Richtige Option ist die längste (Bündel aus 3 Aktionen)
- **Stelle:** phases.ts:254 (correct) vs. :262/:270 (Distraktoren)
- **Problem:** Die korrekte Option bündelt Licht + Kompresse/Druck + Zudecken + nicht-umlagern und ist dadurch merklich länger. Test-wise-Schüler könnten „die vollständigste = längste" wählen (Ríos-Lehre).
- **Standard-Verweis:** MC-Bias-Kriterium (Ríos-Review).
- **Empfehlung:** Mitigation vorhanden (Distraktoren sind selbst mehrteilig). Optional Distraktor 2 leicht verlängern oder korrekte Option auf 2 statt 3 Elemente straffen. Kein Blocker.

### ueb-01 (mc) — SBAR-Übergabe

#### F-02 (NIEDRIG): SBAR-Vollantwort deutlich länger als Distraktoren
- **Stelle:** phases.ts:415 (langer korrekter SBAR-Block) vs. :423/:431
- **Problem:** Längen-Signal korreliert mit Korrektheit.
- **Standard-Verweis:** MC-Bias / SBAR (Leonard 2004).
- **Empfehlung:** By-design vertretbar — Vollständigkeit IST hier das Lernziel; ein unvollständiges SBAR MUSS kürzer sein. Belassen; ggf. einen Distraktor mit falschem, aber langem „SBAR" bauen, um das Längensignal zu neutralisieren.

### erm-03 (truefalse) — FeM-Recht

#### F-04 (NIEDRIG): Akut-Ausnahme rechtlich korrekt, aber nicht als Verbatim-Beleg in Kernfakt F-08
- **Stelle:** phases.ts:366 (Explanation) + Kernfakten F-08 (traumatologische-erstversorgung.md:77–85)
- **Problem:** Der Satz „In akuter Gefahr … Genehmigung … unverzüglich nachzuholen" ist inhaltlich exakt §1831 Abs. 2 S. 2 BGB und via Abs. 4 auf FeM anwendbar — also RICHTIG. Aber die verbatim Belege in F-08 decken nur die generelle Genehmigungspflicht + „längeren Zeitraum/regelmäßig" ab; die Akut-/Nachhol-Klausel ist nicht als Zitat aufgenommen, obwohl der Content sich darauf stützt.
- **Standard-Verweis:** §1831 Abs. 2 u. 4 BGB; Grounding-Regel (Verbatim-Belege für autoritative Claims).
- **Empfehlung:** In F-08 den Verbatim-Beleg ergänzen: „Ohne die Genehmigung ist die Unterbringung nur zulässig, wenn mit dem Aufschub Gefahr verbunden ist; die Genehmigung ist unverzüglich nachzuholen" (bgb-1831.txt, Abs. 2). Rein dokumentarisch, kein inhaltlicher Fehler.

### erm-02 (branching) — Deeskalation

#### F-05 (NIEDRIG): Branching nutzt Format nicht aus (keine divergente Patienten-Konsequenz)
- **Stelle:** phases.ts:308–333
- **Problem:** Die drei Pfade sind fachlich sauber differenziert, aber die Feedbacks erklären nur (wie MC) — sie zeigen keine unterschiedliche Patienten-Reaktion/Konsequenz („Frau Lehmann beruhigt sich" vs. „stürzt erneut / schreit lauter"). Das Schema `branchingOptions` hat kein `patientResponse`-Feld, daher strukturell limitiert.
- **Standard-Verweis:** pflege-konformitaet.md — Branching: „unterschiedliche Konsequenzen pro Pfad".
- **Empfehlung:** Konsequenz in den Feedback-Text einbetten (z.B. „…, Frau Lehmann lässt sich beruhigen und bleibt liegen" / „… sie reißt sich los und schlägt den Kopf erneut an"). Nur didaktische Schärfung.

### Cross-Step

#### F-03 (NIEDRIG): Token-Kollision „Nachtlicht" — falsch in erm-01, empfohlen in Reflexion
- **Stelle:** erm-01 (phases.ts:262/265, „gedämpftes Nachtlicht" = falsch) vs. reflektieren (phases.ts:483/487, „Nachtlicht" als Sturzprophylaxe-Alternative empfohlen)
- **Problem:** Beide sind kontextuell KORREKT (Akut-Inspektion braucht Volllicht ≠ nächtliche Orientierungs-Beleuchtung zur Sturzprävention), aber dasselbe Wort wechselt die Wertung — für B1-Lernende potenziell verwirrend.
- **Standard-Verweis:** Cross-Step-Konsistenz (pflege-konformitaet.md); DNQP Sturzprophylaxe (Orientierungslicht als Maßnahme).
- **Empfehlung:** In der Reflexion einen halben Satz zur Abgrenzung ergänzen: „Nachtlicht zur nächtlichen Orientierung (≠ das gedämpfte Licht bei der akuten Wund-Inspektion)". Kein Fachfehler.

### erm-01 (mc) — klinische Anmerkung

#### F-06 (NIEDRIG): Druck auf Stirnwunde bei SHT-Verdacht — bereits sicher formuliert
- **Stelle:** phases.ts:254/257
- **Problem:** Bei möglichem Schädelbruch ist fester/direkter Druck auf die Wunde kontraindiziert (Impressionsgefahr). Der Content formuliert bewusst „leichtem Druck" für die Platzwunde und reserviert „Druckverband" für „starke Blutung" — das ist standardkonform und sicher. Nur zur Vollständigkeit erwähnt (Härte-Auftrag).
- **Standard-Verweis:** Pflege heute Kap. 14.4 (Blutstillung); F-06.
- **Empfehlung:** Keine Änderung nötig. Optional in der Explanation ergänzen: „kein punktueller, kräftiger Druck bei tastbarer Knochenstufe". Nice-to-have.

## Zusammenfassung
- **0 Findings HOCH**
- **0 Findings MITTEL**
- **6 Findings NIEDRIG** (F-01/F-02 Längen-Bias, F-03 Nachtlicht-Kollision, F-04 Grounding-Hygiene, F-05 Branching-Format, F-06 klinische Nice-to-have)
- **Allgemeine Beobachtungen:** Kein Pseudo-Empathie-Bias — im Gegenteil, „Glück gehabt"/gedämpftes Licht sind gezielt als Fallen verbaut und korrekt widerlegt. Standards-Bezug durchgehend belegt (Pflege heute, SBAR Leonard 2004, §1831 BGB verbatim). B1-Varianten vollständig und konsistent. Rechtlich präzise (Akut-Ausnahme, Bevollmächtigten-Kette). Klinische Priorisierung (Antikoagulation als „Notfall-Macher") didaktisch stark herausgearbeitet.
- **K.O.-Verdikt: PASS** (0 HOCH). Live-Deploy-fähig. Die 6 NIEDRIG-Punkte sind Feinschliff, keine Blocker.
