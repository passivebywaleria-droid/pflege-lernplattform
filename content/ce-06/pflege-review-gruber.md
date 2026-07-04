# Pflege-Review: ls-gruber-schock

**Geprüft:** 2026-07-04
**Modus:** code (semantischer Backstop nach deterministischen Gates)
**Files:** 3 (patient.ts, phases.ts, index.ts) — 5 Phasen
**Step-Anzahl:** 11 (7 MC, 1 pflegewagen, 1 truefalse, 1 branching, 1 reflection, 1 freetext)
**Grounding:** specs/ce-06/kernfakten/schock-und-kreislauf.md (F-01–F-14) + notfallassessment.md (F-01–F-07)

---

## Zusammenfassung vorweg

Die Situation ist fachlich sehr solide gebaut. Alle vom Auftrag markierten kritischen Leitplanken sind korrekt umgesetzt und verbatim gegroundet. Ich finde **keinen HOCH-Befund**. Die Findings sind stilistisch/didaktisch (MITTEL/NIEDRIG) und keine Blocker.

---

## Prüfung der kritischen Leitplanken (alle BESTANDEN)

### 1. Autotransfusionslage-FALLE (erm-01) — KORREKT
- Richtige Option: „Keine Beine-hoch-Lagerung … flach bzw. nach Wunsch, Kopf bei Erbrechen zur Seite". Gedeckt durch F-06 („Ausnahme: Blutungen an Kopf, Lunge und oberem Magen-Darm-Trakt").
- Distraktor „Autotransfusionslage: flach + beide Beine hoch" ist **plausibel-falsch, keine Karikatur** — die explanation erklärt ausdrücklich, dass die Regel „grundsätzlich stimmt, aber ausgenommen ist". Genau der richtige Anfänger-Fehler.
- Aspirationsargument (Kopftieflage bei Erbrechen) fachlich korrekt ergänzt.
- Distraktor 3 (Aufsetzen/Mobilisieren) ist der schwächere, aber im Schockkontext plausibel-verlockende Fehler. In Ordnung.

### 2. Katecholamine/Perfusor nur auf Arztanordnung (erm-04) — KORREKT
- TrueFalse: eigenmächtiges Einstellen = falsch; Herrichten + Laufrate nach Anordnung = richtig.
- „Dopamin-/Dobutaminperfusor" als Wirkstoff genannt (gedeckt F-07), Katecholamine als Wirkstoffgruppe. **Keine erfundenen Dosen.**
- „Adrenalin/Noradrenalin" tauchen in erk-01 ausschließlich als körpereigene Stresshormone (Zentralisation) auf — konform zur Leitplanke.

### 3. i.v.-Kalium (erm-06) — KORREKT
- Richtige Option: langsam, hohe Konzentration nur über ZVK. explanation nennt „>40 mmol/l" — exakt gedeckt durch F-10.
- Gefährlicher Distraktor „Bolus über periphere Kanüle" ist als „Gefährlich falsch" markiert, mit korrekter Begründung (tödliche Rhythmusstörungen).
- Reizleitung/Sinusknoten als Taktgeber + Kaskade (AV-Knoten → His → Tawara → Purkinje) korrekt, gedeckt durch F-09.

### 4. Nüchtern-Prinzip (erm-02) — KORREKT
- Kalium-Brausetablette + Abendessen-Tablett = orale Gaben, korrekt in „weglegen/kontraindiziert".
- Kalium-Brause ist ein besonders guter Distraktor, weil es die Kalium-Thematik aus erm-06 aufgreift und den Reflex „Kalium fehlt → oral geben" testet. Sauber.

### 5. O2-Systeme (erm-03) — KORREKT
- Maske 6–8 l/min, nicht unter 5 l/min (CO2-Stau). Gedeckt durch F-11 + F-06 (100 % O2, 6–8 l/min).
- Distraktor „Maske 3 l/min" ist der korrekte fachliche Gegenpol (CO2-Stau-Falle). Distraktor „Brille 1 l/min genügt immer" plausibel-falsch.

### 6. Schockformen/Index (erk-02) + Kreislauf/Zentralisation (erk-01) — KORREKT
- Leitsymptome (schneller/schwacher Puls >100, fallender RR, kalt-blass, Schweiß, Unruhe), Schockindex Puls/RRsys, Normwert ~0,5 → Richtung 1: alles gedeckt durch F-03.
- Zentralisation/Vasokonstriktion in Haut+Muskel: gedeckt durch F-05.
- „Sein Normaldruck ist hyperton, 100/70 ist für ihn schon Abfall" — didaktisch stark, medizinisch korrekt, konsistent mit Nebendiagnose Hypertonie.

### 7. SBAR (ueb-01) + Coping-Freetext (ref-02) — KORREKT
- SBAR: alle vier Elemente (S/B/A/R) sauber getrennt, Entscheidendes zuerst. Gedeckt durch notfallassessment.md F-07.
- Coping-Musterantwort benennt beide Coping-Richtungen (problem-/emotionsorientiert), Schuld relativieren, aktive Einbeziehung, Familienbesprechung. Gedeckt durch F-14. Bewertungskriterien fachlich + Sandwich-Ton gefordert.

### 8./9. MC-Qualität + Cross-Step-Konsistenz — siehe Findings unten

---

## Findings

### erkennen — ce06-gruber-erk-01 (mc)

#### F-01 (NIEDRIG): Leichter Längen-Bias in erk-01
- **Stelle:** phases.ts Z. 63–85
- **Problem:** Die richtige Option (Z. 63) ist mit ~30 Wörtern die längste und einzige, die Fachbegriff-Trias (HZV sinkt / RR fällt / Zentralisation) vollständig auflistet. Die beiden Distraktoren sind deutlich kürzer und rhetorisch als „Falschbehauptung" erkennbar. Ein Schüler kann die richtige Antwort über die Länge/Vollständigkeit statt über Verständnis wählen.
- **Standard-Verweis:** pflege-konformitaet.md, MC-Pflicht „kein Längen-Bias".
- **Empfehlung:** Kein Blocker. Optional die richtige Option leicht straffen oder einen Distraktor um einen plausiblen Halbsatz verlängern (z. B. Distraktor 2 mit einem scheinbar physiologischen Zusatz). explanation ist für JEDE Option gefüllt — das ist erfüllt.

### erkennen — ce06-gruber-erk-02 (mc)

#### F-02 (NIEDRIG): Zeitangabe im Distraktor 3 als Erkennungsmerkmal
- **Stelle:** phases.ts Z. 133–139
- **Problem:** Distraktor „ich messe in einer Stunde erneut" ist der einzige mit konkreter Zeitangabe und dadurch als „Abwarten-Fehler" leicht identifizierbar. Inhaltlich aber ein realistischer und wichtiger Anfänger-Fehler (Bagatellisieren) — Grenzfall, kein echtes Problem.
- **Empfehlung:** Belassen. Der Fehler „stündliches Abwarten bei Schockzeichen" ist didaktisch wertvoll und die explanation adressiert ihn korrekt als „Gefährlich".

### erstmassnahmen — ce06-gruber-erm-01 (mc)

#### F-03 (MITTEL): Richtige Option bündelt mehrere Maßnahmen — potenzieller Längen-/Vollständigkeits-Bias in der zentralen Fallstrick-Frage
- **Stelle:** phases.ts Z. 257–263
- **Problem:** Genau in der wichtigsten Fallstrick-Frage (Autotransfusionslage) ist die richtige Option die längste und packt Lagerung + Kopf-zur-Seite + Sauerstoff + Zugänge in einen Satz, während die Distraktoren monothematisch sind. Da dies der didaktische Kern der Situation ist, sollte die richtige Antwort NICHT über Textlänge/„enthält am meisten" wählbar sein, sondern nur über das Erkennen der GI-Ausnahme.
- **Standard-Verweis:** pflege-konformitaet.md, MC-Pflicht „Distraktoren plausibel, kein Längen-Bias"; die Falle soll Fachwissen prüfen, nicht Antwortstrategie.
- **Empfehlung:** Kein Blocker (Grounding + Distraktor-Qualität korrekt). Optional richtige Option auf den Kern kürzen: „Keine Beine-hoch-Lagerung — bei oberer GI-Blutung flach bzw. nach Wunsch, Kopf bei Erbrechen zur Seite." (O2/Zugänge sind ohnehin Thema von erm-02/erm-03) und dafür einen Distraktor um einen scheinplausiblen Zusatz erweitern.

### erstmassnahmen — ce06-gruber-erm-02 (pflegewagen)

#### F-04 (NIEDRIG): „richten"-Zone stark überladen, „weglegen" nur Distraktoren
- **Stelle:** phases.ts Z. 329–399
- **Problem:** 5 von 7 Items gehören in „richten", nur 2 (beide oral) in „weglegen". Das Verhältnis macht die Zuordnung durch Ausschluss leicht (alles außer Essbarem = richten). Fachlich korrekt, aber der Diskriminationswert ist niedrig.
- **Empfehlung:** Optional ein zusätzliches plausibel-falsches nicht-orales Distraktor-Item ergänzen (z. B. „Wärmflasche/warme Bettflasche direkt auf die Haut" oder „Beinschiene zur Hochlagerung"), um die Zone „weglegen" fachlich anspruchsvoller zu machen. Nicht erforderlich.

### uebergeben — ce06-gruber-ueb-01 (mc)

#### F-05 (NIEDRIG): SBAR-Musteroption sehr lang vs. knappe Distraktoren
- **Stelle:** phases.ts Z. 659–681
- **Problem:** Bei SBAR ist Länge inhärent (vollständige Übergabe = lang), daher hier weniger kritisch als bei erk-01/erm-01. Trotzdem sind beide Distraktoren auffällig kurz, sodass „die lange = die richtige" als Heuristik funktioniert.
- **Empfehlung:** Belassen — bei SBAR ist Vollständigkeit legitimes Bewertungskriterium und die explanation begründet das inhaltlich (nicht über Länge). Grenzfall.

---

## Cross-Step-Konsistenz (geprüft, konsistent)

Patientendaten durchgängig stimmig:
- **Alter 69, männlich** — patient.ts konsistent, in ueb-01 SBAR („Herr Gruber, 69") wiederholt korrekt.
- **Diagnose** V. a. obere GI-Blutung bei Ulcus ventriculi + NSAR (Ibuprofen wegen Gonarthrose) — konsistent über patient.ts, erm-02 (nüchtern-Begründung), ueb-01 (SBAR-Background).
- **Vitalwert-Verlauf plausibel und monoton verschlechternd:**
  - erk-02: Puls 108, RR 100/70 (beginnender Schock)
  - erm-05 (Branching, später): Puls 132, RR 80/50, Sättigung fällt (Dekompensation)
  - ueb-01 (SBAR): Puls 132, RR 80/50 — **identisch zu erm-05**, korrekt übernommen.
  Keine Sprünge, keine Widersprüche. Zeitlogik (18:20 Erbrechen → Alarm → Erstmaßnahmen → Verlegung) plausibel ohne unerklärte Lücken.
- **Ehefrau Renate** durchgängig konsistent (erkennen → alarmieren → branching → ref-02 Coping).
- **Nüchtern-Status** konsistent: erm-02 (kein Essen/Trinken), ueb-01 SBAR („nüchtern"). Kein Item, das in einem Step „korrekt" und im nächsten „falsch" wäre.

Keine Cross-Step-Widersprüche gefunden.

---

## Weitere Beobachtungen

- **Keine Pseudo-Empathie / kein Pflege-Slang** gefunden. Keine „gedämpftes Licht"-, „NRS ok"-, „ich ziehe Sie hoch"-Muster. Die Formulierung „Kopf bei Erbrechen zur Seite" ist präzise, nicht vage.
- **explanation/feedback für JEDE Option vorhanden** (MC + Branching + TrueFalse). B1-Varianten durchgängig gepflegt.
- **Sandwich-Ton** in ref-01/ref-02 systemPrompt/bewertungskriterien explizit gefordert.
- **Bettgitter/FeM, Schellong, Massage, Opioid-Mythos** — keine dieser Anti-Pattern-Trigger im Content (nicht einschlägig für diese Situation).
- **Anrede „du"** durchgängig eingehalten.
- **kernfaktId** an allen claim-tragenden Steps gesetzt und auf existierende Fakten verweisend (F-01…F-14 bzw. notfall F-07). Keine Dangling-Refs im Semantik-Check erkennbar.
- **Katecholamine als Wirkstoffgruppe / körpereigene Hormone sauber getrennt** — keine Vermischung mit Anaphylaxie-Dosis.

---

## Verdikt

- **HOCH:** 0
- **MITTEL:** 1 (F-03 — Längen-/Vollständigkeits-Bias in der zentralen Fallstrick-Frage erm-01)
- **NIEDRIG:** 4 (F-01, F-02, F-04, F-05)

**K.O.-Verdikt: PASS** (kein HOCH-Befund). Die fachliche Substanz, das Grounding und alle kritischen Leitplanken sind korrekt. Die Findings sind Feinschliff (v. a. MC-Antwortlängen), kein Live-Deploy-Blocker. Empfehlung: F-03 vor Live optional glätten.
