# Text-Audit: ls-yildiz-thoraxschmerz (CE-06, Herzinfarkt)

**Geprüft:** 2026-07-19
**Files:** phases.ts (11 Steps, 5 Phasen), patient.ts, situationen.ts-Eintrag (Z. 210–228)
**Umfang:** 11 Steps / ~120 Textfelder (C1+B1) inkl. 3 inlineWissen-Tabs
**Auftrag:** Voll-Audit ALLER Texte (Gründerin, 2026-07-19: „Schau dir jeden Text an in jedem Schritt.")

## Verifizierte Grounding-Basis (wortwörtlich gegen Literatur)

Alle tragenden Fakten belegt in `recherche/pflege-heute-volltext/pflege-heute.txt`:

- RR < 90 mmHg & Puls > 100/Min → Lagerung abbrechen: Z. 68404–68405 „Bei einem Blutdruck < 90 mmHg und einem Puls > 100/Min. muss die Lagerung abgebrochen werden."
- Oberkörper hoch entlastet Herz: Z. 68401 „erleichtern die Atmung und entlasten das Herz. Allerdings kann der arterielle Blutdruck gefährlich abfallen und ein kardiogener Schock oder eine Minderdurchblutung des Gehirns drohen."
- O2/Nitro/Analgetika nur auf Arztanordnung: Z. 68363 „verabreichen Sauerstoff nach Arztanordnung", Z. 68383 „verabreichen Analgetika nach", Z. 68975 „Auf Arztanordnung: … Zwei Hübe Nitroglyzerin-Spray".
- Jeder akute Thoraxschmerz bedrohlich: Z. 68952 „Jeder akute Thoraxschmerz wird bis zum Beweis des Gegenteils als bedrohlich eingestuft."
- Erstmaßnahmen (Arzt + weitere Pflegefachperson, Oberkörper hoch, Fenster): Z. 68958–68975.
- Monitoring (Puls/RR/Hautfarbe/Bewusstsein + Pulsoximetrie): Kernfakt F-04, pflege-heute Kap. 21.1.2.
- O2-Indikation SpO2 < 90 %: Z. 70683 „bei Sauerstoffsättigung < 90 % Sauerstoff nach Arztanordnung verabreichen".
- Nitro nur bei syst. RR ≥ 100 mmHg: Z. 70679/68976 „nur bei einem systolischen Blutdruck ≥ 100 mmHg".
- Atypisch/stumm bei Diabetikern und Frauen: Kernfakt F-10 (I care Krankheitslehre, Kap. 9).

## Findings

### F-01 (MITTEL) — Konsistenz: „ihrem niedrigen Blutdruck" bevor der RR gefallen ist
- **Stelle:** phases.ts Z. 547 (explanation) + Z. 549 (explanationB1), Step `ce06-yildiz-erm-02` (truefalse)
- **Content-Zitat:** „Und bei ihrem niedrigen Blutdruck kann eine erneute Nitrogabe den Kreislauf gefährlich weiter absenken." / B1: „bei ihrem niedrigen Blutdruck kann noch mehr Nitro den Blutdruck weiter gefährlich absenken."
- **Problem:** Der unmittelbar vorangehende Step `erm-01` beschreibt sie als „Blutdruck (noch) stabil" (Z. 477/482). Die Hypotonie (85/50) tritt erst im nächsten Step `erm-03` auf (Z. 569/574). Das Possessiv „ihrem niedrigen Blutdruck" behauptet in `erm-02` eine Tatsache, die im Fallverlauf an dieser Stelle noch nicht eingetreten ist — Widerspruch innerhalb Phase 3.
- **Literaturbeleg (Regel korrekt, Zuschreibung verfrüht):** pflege-heute Z. 70679 „nur bei einem systolischen Blutdruck ≥ 100 mmHg" — die Nitro-Blutdruck-Warnung stimmt, nur die Zuschreibung an ihren aktuellen Wert ist verfrüht.
- **Fix:** Konditional formulieren, z. B. „Und fällt ihr Blutdruck ab, kann eine erneute Nitrogabe den Kreislauf gefährlich weiter absenken" bzw. „bei niedrigem Blutdruck" (wie es Tab C in Z. 271 korrekt allgemein tut).

### F-02 (NIEDRIG) — kernfaktId F-07 am SBAR-Step sachfremd
- **Stelle:** phases.ts Z. 636, Step `ce06-yildiz-ueb-01` (mc, SBAR)
- **Content-Zitat:** `kernfaktId: ["F-07"]`
- **Problem:** F-07 belegt Oberkörperhochlagerung/RR-Grenze, nicht SBAR-Kommunikation. Das Grounding des Steps läuft korrekt über `quellen: ["Leonard et al. 2004 (SBAR)"]`. Der SBAR-Text selbst ist fachlich vollständig und die zitierten Vitalwerte (85/50, 112) sind konsistent — reines Metadaten-Mismatch.
- **Fix:** kernfaktId entfernen oder auf einen SBAR-tragenden Kernfakt setzen.

### F-03 (NIEDRIG) — O2-Indikation SpO2 < 90 % nicht genannt (Ergänzung, kein Fehler)
- **Stelle:** Tab C (Z. 271/273) + Step `erm-02` (Z. 547) — O2 durchgängig als „nur auf Arztanordnung"
- **Problem:** Der Content scopet Sauerstoff korrekt als ärztliche Anordnung (Pflege gibt nicht eigenmächtig). Die moderne Indikationsschwelle fehlt jedoch: pflege-heute Z. 70683 „bei Sauerstoffsättigung < 90 % Sauerstoff nach Arztanordnung verabreichen". Kein Halbwissen-Verstoß, weil die Frage nur die Kompetenzgrenze betrifft und der Schüler auf Anordnung wartet — also nicht gefährlich unvollständig handelt.
- **Fix (optional):** Im Tab-C-Kerntext ergänzen, dass O2 zielgerichtet erst bei SpO2 < 90 % (auf Anordnung) gegeben wird.

## HALBWISSEN/SCOPE-Lens (neue Regel) — bestanden

Für jede Frage prüft der Aufdeck-/Antworttext die geforderte Handlung vollständig:

- ACS-Symptomatik inkl. atypischer Verläufe: Tab A (Z. 122/124) deckt stumm bei Diabetikern + atypisch bei Frauen vollständig ab (F-10). ✅
- Lagerung + Grenze: Tab B (Z. 417) nennt Oberkörper hoch, absolute Bettruhe UND Abbruch-Kriterium RR < 90/Puls > 100. ✅
- Nitro-Vorbehalt: Tab C + erm-02 nennen Arztanordnung + Blutdruck-Absacken. ✅
- Zeitfenster: „Zeit ist Herzmuskel" durchgängig, keine erfundenen Minutenangaben. ✅

Keine Frage verspricht mehr, als ihr Antworttext liefert.

## Konsistenz-Check — bestanden (außer F-01)

- Alter 62 durchgängig (patient.ts Z. 10, SBAR Z. 652). ✅
- Vitalwerte im Verschlechterungsverlauf konsistent: 85/50 mmHg, Puls 112 in `erm-03` (Z. 569/578) = SBAR `ueb-01` (Z. 652). ✅
- Nebendiagnosen (KHK/Angina, Typ-2-Diabetes, Hypertonie) konsistent Patient ↔ SBAR-Background. ✅
- Narrativer RR-Verlauf: „(noch) stabil" (erm-01) → 85/50 (erm-03) → SBAR — schlüssig, außer verfrühte Zuschreibung in erm-02 (F-01).

## B1-Drift — kein Befund

B1 ist über alle Steps fachlich identisch mit C1, nur sprachlich vereinfacht (Fachbegriffe erklärt: Nitrat, akutes Koronarsyndrom, Pulsoximetrie, kardiogener Schock, Herzkatheter, Arztanordnung). Keine fachliche Verkürzung/Verzerrung.

## Distraktor-Disziplin — korrekt

Alle Score-0/falsch-Optionen (erk-01 „Diabetiker bekommen keine echten Herzinfarkte", erm-01 Schocklage, ala-01 „erst dokumentieren", ueb-01 „wird schon wieder") sind plausible Anfängerfehler, korrekt als falsch markiert, explanations fachlich sauber und belegt. Keine Falschlehre in den Distraktoren.

## Zusammenfassung

- **0 HOCH**
- **1 MITTEL** (F-01: „ihrem niedrigen Blutdruck" widerspricht dem noch stabilen RR in erm-01)
- **2 NIEDRIG** (F-02 kernfaktId-Mismatch am SBAR-Step; F-03 O2-Schwelle SpO2 < 90 % als Ergänzung)
- Geprüft: 11 Steps / ~120 Textfelder. Alle tragenden Fakten literatur-/kernfakten-belegt.
- **K.O.-Verdikt: PASS** (kein HOCH-Finding). Fachlich sehr sauber gebaut; einzige echte Korrektur ist die konditionale Umformulierung in F-01.

## Fix-Status (2026-07-19, Haupt-Session)
- F-01 ✅ erm-02: „bei ihrem niedrigen Blutdruck" → konditional („Nitro senkt den Blutdruck: Fällt er ab, …; nur bei ausreichendem Blutdruck") — Konsistenz zu erm-01 („noch stabil") hergestellt. ACHTUNG: Agent-Zitat „Nitro nur RR≥100" war falsch — Quelle sagt wortwörtlich „Bei systolischem Blutdruck ≥ 90 mmHg" (deshalb bewusst OHNE Zahl formuliert, die strikte Arztvorbehalts-Lehre der Situation bleibt).
- F-02 ❌ FALSE POSITIVE: SBAR-Step hat themaPrimaer "notfallassessment" → F-07 = SBAR. Mapping korrekt, kein Fix.
- F-03 ✅ SpO2-Schwelle ergänzt (verbatim: „bei Sauerstoffsättigung < 90 % Sauerstoff nach Arztanordnung"), C1+B1.
