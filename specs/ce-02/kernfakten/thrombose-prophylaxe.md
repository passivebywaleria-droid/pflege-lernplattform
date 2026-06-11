# Kernfakten: Thrombose-Prophylaxe

| Feld | Wert |
|------|------|
| themaId | `thrombose-prophylaxe` |
| ceId | `ce-02` |
| cluster | B (Mobilität & Prophylaxen) |
| geschätzteUE | 4 |
| wissensart | handlung |
| quellen | AWMF S3-Leitlinie Prophylaxe der venösen Thromboembolie (VTE), Registernr. 003-001, Version 4.0 (2025 Update zu 2015); Pflege heute Kap. Thromboseprophylaxe; I Care Pflege Kap. Prophylaxen; DGP (Deutsche Gesellschaft für Phlebologie) Leitlinien |
| einträge | 13 |
| erstellt | 2026-04-21 |
| grounding | 2026-06-11 (icare-krankheitslehre-Korpus): F-02 ~90-%-Lokalisationsquote aufgelöst (Becken-/Beinvenen, nicht Beinvenen allein); F-11 ~50 % klinisch stumm + Homans/Payr/Meyer unzuverlässig aufgelöst (Homans-Sensitivität 60–90 % bleibt ⚠️); F-12 Atemnot als erstes LE-Zeichen qualitativ belegt (80-%-Quote bleibt ⚠️). Offen: F-03 (50 % proximale TVT→LE), F-05 (bereits korrigiert, kein offenes ⚠️), F-07 (Heparin-Luftblock — in keinem Korpus). |

---

### F-01: Definition Thrombose & Virchow-Trias

**Fakt:** Eine Thrombose ist die Bildung eines Blutgerinnsels (Thrombus) in einem Blutgefäß zu Lebzeiten. Rudolf Virchow beschrieb 1856 drei Kardinalfaktoren, die gemeinsam eine Thrombose begünstigen (Virchow-Trias): (1) Gefäßwandschaden (Endothelalteration), (2) Strömungsveränderung (Stase, verlangsamter oder verwirbelter Blutfluss), (3) Veränderte Blutzusammensetzung (Hyperkoagulabilität). Meist wirken mehrere Faktoren gleichzeitig.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Definition + Pathogenese
**Bloom-Potential:** 1-3
**Primärquelle:** (Virchow R., Gesammelte Abhandlungen zur wissenschaftlichen Medicin, 1856; AWMF S3-Leitlinie VTE 2015, Update 2025)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Die Entstehung eines Thrombus wird vor allem durch drei Risikofaktoren begünstigt (Virchow-Trias)"
**Praxisfehler:** Schüler nennen nur 2 der 3 Säulen oder verwechseln sie mit Entzündungszeichen.

**Misconceptions:**
- `M1`: **"Thrombose entsteht nur durch verlangsamten Blutfluss"** — Stase ist nur 1 der 3 Säulen. Auch intakter Blutfluss kann bei Hyperkoagulabilität (z.B. Pille + Rauchen) zu Thrombose führen. Fachbegriff: "Stase-Fixierung".
- `M2`: **"Virchow-Trias sind die Symptome"** — Die Trias beschreibt Ursachen (Pathogenese), nicht Symptome. Symptome sind Schwellung, Schmerz, Überwärmung.
- `M3`: **"Alle 3 Faktoren müssen gleichzeitig vorliegen"** — Auch einzelne Faktoren können zur Thrombose führen, aber Kombination erhöht das Risiko deutlich.

---

### F-02: Tiefe Venenthrombose (TVT) vs. oberflächliche Phlebitis

**Fakt:** Eine tiefe Venenthrombose (TVT, Phlebothrombose) betrifft die tiefen Leitvenen (bevorzugt die Beinvenen) und ist potenziell lebensbedrohlich durch Lungenembolie-Risiko. Eine oberflächliche Venenthrombose (Thrombophlebitis) betrifft oberflächliche Venen unter der Haut und ist meist harmlos, kann aber in die tiefen Venen einwachsen (→ TVT). VTE entstehen pathophysiologisch bevorzugt in den Beinvenen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Klassifikation
**Bloom-Potential:** 2-4
**Primärquelle:** (AWMF S3-Leitlinie VTE, Update 2025; DGP Leitlinie "Diagnostik und Therapie der Venenthrombose und Lungenembolie")
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Von besonderer klinischer Bedeutung ist die tiefe Venenthrombose (TVT) der Beine"
- Quelle: `leitlinien-volltext/awmf-vte-prophylaxe.txt`
- Zitat: "Pathophysiologisch entwickeln sich VTE in den tiefen Venen (TVT), bevorzugt in den Beinvenen"
- Quelle: `icare-krankheitslehre-volltext/icare-krankheitslehre.txt`
- Zitat: "Im speziellen Fall der tiefen Venen an den Extremitäten spricht man von einer tiefen Venenthrombose (TVT) oder auch Phlebothrombose; 90 % davon betreﬀen Becken- oder Beinvenen." — Lokalisations-Quote 90 % belegt (Bezugswert: Becken- ODER Beinvenen zusammen, nicht Beinvenen allein)

> ✅ Detail-Wert AUFGELÖST (2026-06-11): Die ~90-%-Quote ist jetzt verbatim aus I Care Krankheitslehre belegbar. WICHTIG zur exakten Scope: Der Korpus belegt „90 % … Becken- ODER Beinvenen" (gemeinsam), NICHT „90 % in den Beinvenen" allein. Im Schüler-Content daher als „rund 90 % aller TVT betreffen die Becken- oder Beinvenen" formulieren — nicht auf Beinvenen verkürzen.
**Praxisfehler:** Oberflächliche Phlebitis wird als harmlos abgetan, ohne auf ein mögliches Einwachsen zu achten.

**Misconceptions:**
- `M1`: **"Jede Venenentzündung ist eine Thrombose"** — Phlebitis ist Entzündung der oberflächlichen Vene, oft ohne Gerinnsel. TVT = Gerinnsel in tiefer Vene. Unterschiedliche Prognose.
- `M2`: **"Phlebitis ist immer harmlos"** — Eine aszendierende Thrombophlebitis der V. saphena magna kann in die V. femoralis einwachsen → TVT → Lungenembolie. Fachbegriff: "Phlebitis-Unterschätzung".
- `M3`: **"TVT ist nur ein Beinproblem"** — TVT kann auch in Arm-, Becken- oder viszeralen Venen auftreten (seltener, aber möglich).

---

### F-03: Lungenembolie als lebensbedrohliche Komplikation

**Fakt:** Die Lungenembolie (LE) ist die gefürchtetste Komplikation einer TVT: Ein Thrombus löst sich aus der tiefen Vene, wandert über das rechte Herz in die Lungenarterie und verschließt diese teilweise oder vollständig. Proximale TVT haben dabei ein höheres Risiko für eine symptomatische Lungenembolie als distale. Asymptomatische TVT können asymptomatische, symptomatische oder fatale Lungenembolien auslösen. Eine fulminante LE ist sofort lebensbedrohlich und eine häufige Todesursache im Krankenhaus.

**Prüfungsrelevanz:** sehr hoch (Notfall-Erkennung!)
**Wissensart:** Komplikation
**Bloom-Potential:** 4-6
**Primärquelle:** (AWMF S3-Leitlinie VTE, Update 2025; ESC Guidelines on Acute Pulmonary Embolism 2019)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "gelangt er mit dem Blutstrom in die Lunge und kann dort als venöse Thromboembolie (VTE) eine lebensbedrohliche Lungenembolie"
- Quelle: `leitlinien-volltext/awmf-vte-prophylaxe.txt`
- Zitat: "Asymptomatische TVT können asymptomatische, symptomatische oder fatale Lungenembolien"
- Quelle: `leitlinien-volltext/awmf-vte-prophylaxe.txt`
- Zitat: "wobei das symptomatische LE-Risiko bei proximalen TBVT höher ist als bei distalen"

> ⚠️ Detail-Wert „50 % aller proximalen TVT verursachen LE": Die AWMF-S3-Leitlinie VTE (2025) belegt verbatim nur die *Richtung* (proximale TVT → höheres symptomatisches LE-Risiko) und dass TVT symptomlose LE auslösen können — gibt aber KEINE 50-%-Quote an. Konkrete Prozentangabe entfernt; qualitativer Beleg steht. Bis zur lokalen Verfügbarkeit einer Epidemiologie-/ESC-Quelle keine 50-%-Zahl behaupten.
**Praxisfehler:** Leitsymptome werden als Aufregung, Panikattacke oder banale Atemnot fehlgedeutet — Zeitverlust bis zur Notfall-Versorgung.
**Transfer:** [Transfer] Wie ein Stein, der sich aus einem Stau in der Beinvene löst und in die Lunge geschwemmt wird — wo er einen Stau verursacht, der die Sauerstoffaufnahme blockiert.

**Misconceptions:**
- `M1`: **"Lungenembolie entsteht nur nach langer Immobilität"** — Auch bei kurzen Eingriffen (ambulante OP), nach langen Autofahrten oder bei jüngeren Frauen unter Pille + Rauchen möglich. Fachbegriff: "Immobilitäts-Mythos".
- `M2`: **"Wer hustet, hat keine Lungenembolie"** — Husten (teils blutig) kann Symptom sein. Auch Fieber, Unruhe, Todesangst möglich. Untypische Symptome häufig.
- `M3`: **"Bei Kreislaufstabilität ist keine LE möglich"** — Kleine LE können stabil verlaufen, aber jederzeit in fulminante LE übergehen. Engmaschige Überwachung!

---

### F-04: Risikofaktoren & Padua-/Caprini-Score

**Fakt:** Thrombose-Risikofaktoren werden individuell bewertet. Die AWMF S3-Leitlinie empfiehlt ein strukturiertes Risiko-Assessment bei stationärer Aufnahme. Häufig genutzte Scores: **Caprini-Score** (chirurgische Patienten) und **Padua-Prediction-Score** (internistische Patienten). Der Padua-Score ist in ACCP-Leitlinien für nicht-chirurgische Patienten empfohlen. Hauptrisiken: Immobilität (>3 Tage), OP (besonders Hüft-/Knie-TEP, Tumor-OP), aktive Tumorerkrankung, VTE in Anamnese, Alter >70, Schwangerschaft/Wochenbett, Adipositas (BMI >30), hormonelle Kontrazeptiva + Rauchen, Thrombophilie.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3-4
**Primärquelle:** (AWMF S3-Leitlinie Prophylaxe der venösen Thromboembolie (VTE), Version 4.1, 2025; Barbar S. et al., Padua Prediction Score, J Thromb Haemost 2010; Caprini JA., Dis Mon 2005)
**Beleg:**
- Quelle: `leitlinien-volltext/awmf-vte-prophylaxe.txt`
- Zitat: "Die Einschätzung des VTE-Risikos auf der Basis von expositionellen und dispositionellen Risikofaktoren sollte zur Einteilung in eine von drei Risikogruppen"
- Zitat: "Instrumente zur Risikostratifizierung – sog. „Risk Assessment Models“ – können bei der Evaluation des individuellen VTE-Risikos hilfreich sein."
- Zitat: "validierter RAMs wie des Caprini-, des Padua- oder des IMPROVE-Score"
**Praxisfehler:** Scores werden nicht dokumentiert oder nur einmalig bei Aufnahme erhoben — Re-Assessment bei Zustandsänderung fehlt.

**Misconceptions:**
- `M1`: **"Jüngere Patienten haben kein Thromboserisiko"** — Pille + Rauchen + Langstreckenflug erhöht Risiko auch bei 25-Jährigen deutlich. Fachbegriff: "Alters-Täuschung".
- `M2`: **"Nur Chirurgie-Patienten brauchen Prophylaxe"** — Auch internistisch immobile Patienten (Pneumonie, Herzinsuffizienz, Schlaganfall) haben hohes Risiko. Padua-Score prüft gezielt diese Gruppe.
- `M3`: **"Caprini-Score ist für alle Patienten"** — Caprini wurde primär für chirurgische Patienten validiert; Padua ist für internistische Patienten besser geeignet. Tool zum Kontext wählen.

---

### F-05: Frühmobilisation als stärkste Einzelmaßnahme

**Fakt:** Frühmobilisation (Umhergehen am 1. postoperativen Tag, Wadenmuskelpumpe aktivieren) ist die am besten belegte Einzelmaßnahme der Thromboseprophylaxe. Durch Aktivierung der Wadenmuskelpumpe kann der venöse Rückfluss um mindestens 50 % gesteigert werden. Auch kurze Spaziergänge (wenige Meter) oder gezielte Fuß-/Beinübungen im Bett sind wirksam. Jede nicht-notwendige Bettruhe ist ein Risiko.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Maßnahme (Basismaßnahme)
**Bloom-Potential:** 3-4
**Primärquelle:** (AWMF S3-Leitlinie VTE, Version 4.1, 2025; Österreichische Ärztezeitung 2024: "Thromboseprophylaxe — Frühmobilisation maßgeblich"; Cochrane-Review zu früher Mobilisation)
**Beleg:**
- Quelle: `leitlinien-volltext/awmf-vte-prophylaxe.txt`
- Zitat: "Allgemeine Basismaßnahmen sind Frühmobilisation, Bewegungsübungen und Anleitung zu Eigenübungen. Diese sollten regelmäßig bei allen Patienten zur Anwendung kommen."
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Die Frühmobilisation ist jedoch maßgeblich für den Operationserfolg und die Thromboseprophylaxe"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Durch Aktivierung der Wadenmuskelpumpe kann der venöse Rückfluss um mindestens 50 % gesteigert werden"

> ⚠️ Korrektur Detail-Wert: Die ursprüngliche Aussage „Wadenpumpe bewirkt ~80 % des venösen Rückflusses" ist NICHT belegbar und wurde durch den verbatim belegten Wert ersetzt: Pflege heute belegt, dass die Aktivierung der Wadenmuskelpumpe den venösen Rückfluss um *mindestens 50 %* steigert (anderer Bezugswert — Steigerung, nicht Anteil am Gesamtrückfluss). Keine 80-%-Zahl behaupten.
**Praxisfehler:** "Schonung nach OP" wird zu lang verordnet oder von Pflege zögerlich umgesetzt — führt zu vermeidbaren Thrombosen.
**Transfer:** [Transfer] Wie ein Fluss, der fließen muss, damit er sich nicht staut: Bewegung ist die natürlichste Thromboseprophylaxe.

**Misconceptions:**
- `M1`: **"Nach OP erst nach 24h mobilisieren"** — Veraltet. Heute gilt: Frühmobilisation am OP-Tag oder 1. post-OP-Tag, sobald Kreislauf stabil. ERAS-Konzepte (Enhanced Recovery After Surgery) verkürzen Immobilität bewusst.
- `M2`: **"Bettfahrrad ersetzt Mobilisation"** — Bettfahrrad/Bewegungsübungen im Bett sind gut, aber Aufstehen + Gehen aktiviert die Wadenmuskelpumpe stärker.
- `M3`: **"Wenn der Patient schläft, kann man nicht mobilisieren"** — Auch im Schlaf können Fußkreisen passiv durchgeführt werden (bei Bewusstlosigkeit/Narkose). Mobilisation bedeutet nicht nur Gehen.

---

### F-06: Medikamentöse Prophylaxe — NMH, DOAKs, Fondaparinux

**Fakt:** Die medikamentöse Prophylaxe erfolgt meist mit niedermolekularem Heparin (NMH, z.B. Enoxaparin, Dalteparin) einmal täglich subkutan. Alternativ: Fondaparinux (bei HIT-Risiko), DOAKs (z.B. Rivaroxaban bei elektiver Hüft-/Knie-TEP oral). Unfraktioniertes Heparin (UFH) nur noch selten (Niereninsuffizienz). Die Pflege verabreicht NMH subkutan in die Bauchhaut, beobachtet auf Blutungszeichen (blaue Flecken, Blut im Urin/Stuhl, Nasenbluten) und auf HIT (Heparin-induzierte Thrombozytopenie: Thrombozytenabfall >50% nach 5-14 Tagen).

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Maßnahme + Pflege-Beobachtung
**Bloom-Potential:** 3-5
**Primärquelle:** (AWMF S3-Leitlinie VTE, Version 4.1, 2025; Fachinformationen Enoxaparin/Rivaroxaban; AMBOSS Therapeutische Antikoagulation)
**Beleg:**
- Quelle: `leitlinien-volltext/awmf-vte-prophylaxe.txt`
- Zitat: "Zur medikamentösen VTE-Prophylaxe sollten vorzugsweise Heparine, Fondaparinux, Apixaban, Rivaroxaban, Dabigatran oder Acetylsalicylsäure eingesetzt werden."
- Zitat: "Die Risiken für die Entwicklung einer Heparin-induzierten Thrombozytopenie (HIT) bzw. HIT-assoziierter VTE-Ereignisse sind unter NMH signifikant niedriger als unter UFH"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "kann es zu einem heparininduzierten Abfall der Blutplättchen (heparininduzierte Thrombozytopenie, HIT) kommen"
- Quelle: `leitlinien-volltext/awmf-vte-prophylaxe.txt`
- Zitat: "zwischen Tag 5 und 14 (selten bis Tag 21) um >50 % des höchsten Wertes nach Beginn der Heparintherapie"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Unter der Behandlung mit Heparin kann es zu einem Abfall der Thrombozytenzahl im Blut unter 50 % des Ausgangswerts kommen"
- Zitat: "Zwischen 5. und 14. Tag nach Beginn der Heparingabe."
**Praxisfehler:** Pflege dokumentiert Injektion ohne Beobachtungszeichen; Blutungen werden erst spät erkannt.

**Misconceptions:**
- `M1`: **"NMH und UFH sind gleich"** — NMH hat längere Halbwertszeit (1x täglich), weniger HIT-Risiko, keine aPTT-Kontrolle nötig. UFH wirkt schneller, kürzer und braucht Kontrolle.
- `M2`: **"DOAKs kann man einfach weglassen wenn der Patient nicht schlucken kann"** — DOAKs sind orale Medikamente; bei NPO-Status braucht Patient eine parenterale Alternative (NMH). Abrupter Stopp ist gefährlich.
- `M3`: **"Heparin-Spritze muss umgerührt/geschüttelt werden"** — Fertigspritzen NIEMALS schütteln oder umrühren (Wirkstoffschädigung). Nur kurz auf Raumtemperatur bringen.

---

### F-07: Korrekte Heparin-Injektions-Technik

**Fakt:** Subkutane NMH-Injektion in die Bauchhaut: Bauchnabel 2 cm frei lassen (nicht direkt neben dem Nabel), besonders der Bereich unterhalb des Bauchnabels ist bevorzugt. Hautfalte mit Daumen und Zeigefinger abheben. Nadel zügig senkrecht einstechen. **Nicht aspirieren** bei Heparin — kann Hämatome verursachen. Injektionsstelle systematisch wechseln.

> ⚠️ Detail: „Luftblock in der Fertigspritze nicht entfernen" ist im Pflege-heute-Volltext (s.c.-Kap.) NICHT verbatim enthalten — diese Teilaussage bis zur Verfügbarkeit einer Fachinformation (Enoxaparin/Dalteparin) oder einer Pflegeleitlinie Thromboseprophylaxe streichen.

**Prüfungsrelevanz:** sehr hoch (praktisch-technisch)
**Wissensart:** Handlung (Technik)
**Bloom-Potential:** 3-4
**Primärquelle:** (Pflege heute Kap. 43.4.3 Subkutane Injektion; Fachinformation Enoxaparin/Dalteparin für Luftblock-Detail)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Die Bauchdecke um den Bauchnabel (um den Nabel 2 cm frei lassen)"
- Zitat: "Mit Daumen und Zeigefinger eine Hautfalte bilden"
- Zitat: "zügig senkrecht in die Hautfalte einstechen"
- Zitat: "Bei der Injektion von Heparin wird dies wegen der möglichen Hämatombildung nicht empfohlen"
- Zitat: "Injektionsstellen wechseln"
**Praxisfehler:** Hautfalte wird losgelassen vor Injektions-Ende; Luftbläschen wird entfernt; aspiriert wird trotz Fertigspritze.

**Misconceptions:**
- `M1`: **"Luftbläschen muss raus, sonst Embolie"** — Falsch für subkutane Injektion. Das Luftbläschen in der Fertigspritze ist absichtlich dort (Luftblock). Luftembolie-Risiko gibt es bei i.v.-Injektion, nicht bei s.c.
- `M2`: **"Aspirieren ist Pflicht"** — Bei subkutaner NMH-Injektion NICHT aspirieren. Erhöht Hämatom-Risiko ohne Nutzen. Nur bei i.m.-Injektionen teils noch gelehrt.
- `M3`: **"Nach Injektion leicht reiben hilft gegen Bluterguss"** — Genau umgekehrt: Reiben verursacht Hämatome. Nur sanft mit Tupfer abdrücken, nicht reiben.

---

### F-08: MTPS — Medizinische Thromboseprophylaxe-Strümpfe

**Fakt:** MTPS (Medizinische Thromboseprophylaxe-Strümpfe) sind Kompressionsstrümpfe mit definiertem Druckverlauf (höchster Druck am Knöchel, abnehmend nach proximal). Sie aktivieren den venösen Rückfluss. **Wichtig (AWMF S3 VTE 2025):** Basismaßnahmen und physikalische Maßnahmen — also auch MTPS — sollen eine *indizierte* medikamentöse VTE-Prophylaxe NICHT ersetzen. Bei mittlerem/hohem Risiko und Kontraindikation gegen Medikamente sind physikalische Maßnahmen indiziert, dabei wird die IPK gegenüber den MTPS bevorzugt. MTPS *zusätzlich* zur medikamentösen Prophylaxe werden nicht explizit empfohlen (kein klar belegter Zusatznutzen, vermehrt Hautläsionen). Korrekte Anlage: morgens vor dem Aufstehen, faltenfrei, bis zum Oberschenkel (oder wadenlang — beide Formen gelten als gleichwertig).

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme (physikalische Prophylaxe)
**Bloom-Potential:** 3-4
**Primärquelle:** (AWMF S3-Leitlinie VTE, Version 4.1, 2025; Rabe E. et al., Medizinische Thromboseprophylaxestrümpfe, Phlebologie 2011; BDC-Artikel "Wirksamkeit und Einsetzbarkeit von Thromboseprophylaxestrümpfen")
**Beleg:**
- Quelle: `leitlinien-volltext/awmf-vte-prophylaxe.txt`
- Zitat: "Basismaßnahmen und physikalische Maßnahmen sollen eine indizierte medikamentöse VTE-Prophylaxe nicht ersetzen."
- Zitat: "Bei Patienten mit mittlerem oder hohem VTE-Risiko und Kontraindikationen gegen eine medikamentöse VTE-Prophylaxe sollen physikalische Maßnahmen, bevorzugt die intermittierende pneumatische Kompression (IPK), zur Anwendung kommen."
- Zitat: "werden MTPS zusätzlich zur medikamentösen VTE-Prophylaxe nicht explizit empfohlen"
**Praxisfehler:** MTPS werden bei allen Patienten angelegt ohne Indikations-Prüfung; falsche Größe verursacht Abschnürung.

**Misconceptions:**
- `M1`: **"MTPS bei jedem Patienten mit Thromboserisiko"** — Aktuelle Evidenz: Zusatznutzen zu NMH ist fraglich. Regelhafte Anlage bei allen Patienten ist nicht mehr Standard. Fachbegriff: "MTPS-Routine-Missverständnis".
- `M2`: **"Stützstrümpfe aus der Apotheke = MTPS"** — Stützstrümpfe haben keinen definierten Druckverlauf. MTPS sind medizinische Produkte mit Druckklassen (z.B. 18-21 mmHg am Knöchel), rezeptpflichtig.
- `M3`: **"Nachts MTPS anlassen ist sinnvoll"** — Nein. MTPS werden tagsüber getragen (wenn Patient aufrecht ist). Nachts im Bett liegt der Patient — keine Stauung durch Schwerkraft. Anlassen kann Druckstellen verursachen.

---

### F-09: MTPS-Kontraindikation pAVK — ABI vor Anlage!

**Fakt:** Eine **periphere arterielle Verschlusskrankheit (pAVK)** ist eine harte Kontraindikation für MTPS. Der Strumpfdruck kann bei verschlechterter Arterien-Durchblutung zu Druckschäden, Nekrosen oder Amputation führen. **Vor Anlage: Knöchel-Arm-Index (ABI) messen** oder Arzt-Anordnung prüfen. Absolute Kontraindikation: ABI <0,5 (schwere pAVK); ABI 0,5-0,9 nur mit ärztlicher Freigabe und engmaschiger Kontrolle. Weitere Kontraindikationen: dekompensierte Herzinsuffizienz, septische Phlebitis, akute Hautinfektionen, schwere Beinödeme mit Blasenbildung.

**Prüfungsrelevanz:** sehr hoch (Patientensicherheit!)
**Wissensart:** Kontraindikation (Recht + Handlung)
**Bloom-Potential:** 4-5
**Primärquelle:** (AWMF S3-Leitlinie VTE, Version 4.1, 2025; Draco-Leitlinie Kompressionstherapie; DGP Leitlinie Kompressionstherapie 2018)
**Beleg:**
- Quelle: `leitlinien-volltext/awmf-vte-prophylaxe.txt`
- Zitat: "Limitationen in der Anwendung physikalischer Maßnahmen können sich ergeben durch eine schwere periphere arterielle Verschlusskrankheit (PAVK) mit kritischer Extremitätenischämie"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "bei Werten < 0,9 ist von einer peripheren arteriellen Verschlusskrankheit auszugehen"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Ein ABI von unter 0,5 bedeutet eine schwere arterielle Durchblutungsstörung, die den Erhalt des Beines gefährdet"
**Praxisfehler:** MTPS werden ohne Prüfung der arteriellen Durchblutung angelegt; ABI nicht bekannt, kein Nachfragen.

**Misconceptions:**
- `M1`: **"Kalte/livide Füße zeigen nur schlechte Venen"** — Kalte, livide oder blasse Füße können pAVK-Zeichen sein. Vor MTPS immer arterielle Durchblutung prüfen. Fachbegriff: "Venen-Tunnelblick".
- `M2`: **"Wenn Patient keine Schmerzen hat, ist pAVK ausgeschlossen"** — pAVK kann asymptomatisch sein, besonders bei Diabetikern (diabetische Neuropathie maskiert Schmerz). ABI-Messung ist Standard.
- `M3`: **"ABI messen ist Arzt-Aufgabe, Pflege braucht das nicht zu wissen"** — Pflege muss wissen, WANN ABI gemessen werden muss und darf MTPS nicht ohne Freigabe anlegen. Pflege ist die Sicherheitsebene.

---

### F-10: IPK — Intermittierende Pneumatische Kompression

**Fakt:** IPK (Intermittierende Pneumatische Kompression) ist ein Gerät mit Luftkissen-Manschetten, die rhythmisch aufgepumpt und entspannt werden — ahmt die Wadenmuskelpumpe nach. Indikation: wenn medikamentöse Prophylaxe kontraindiziert ist oder zusätzlich zu NMH bei Hochrisikopatienten (z.B. nach Schlaganfall, nach großen OPs). Wird mehrere Stunden pro Tag getragen. Kontraindikationen ähnlich MTPS (pAVK, akute TVT, schwere Herzinsuffizienz).

**Prüfungsrelevanz:** mittel
**Wissensart:** Maßnahme (physikalische Prophylaxe)
**Bloom-Potential:** 2-3
**Primärquelle:** (AWMF S3-Leitlinie VTE, Version 4.1, 2025; CLOTS 3-Studie zur IPK nach Schlaganfall, Lancet 2013)
**Beleg:**
- Quelle: `leitlinien-volltext/awmf-vte-prophylaxe.txt`
- Zitat: "Die intermittierende pneumatische Kompression (IPK) imitiert die Arbeit der Wadenmuskelpumpe beim immobilen Patienten."
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "knie- oder oberschenkellange Beinmanschetten angelegt. Diese füllen sich zyklisch und wellenartig mit Luft und entleeren sich dann wieder, so wird der venöse Rückfluss unterstützt"
**Praxisfehler:** IPK wird angelegt bei akuter TVT (kontraindiziert, Emboliegefahr!) oder ohne pAVK-Abklärung.

**Misconceptions:**
- `M1`: **"IPK bei bereits bestehender Thrombose sinnvoll"** — Falsch. Bei bestehender TVT ist IPK kontraindiziert — Gefahr, Thrombusteile zu lösen → Lungenembolie. Erst nach Ausschluss TVT anlegen.
- `M2`: **"IPK nur nachts"** — Nein, IPK soll mehrere Stunden pro Tag getragen werden, wann der Patient liegt/sitzt. Kann nachts genutzt werden, muss aber nicht.
- `M3`: **"IPK ersetzt Frühmobilisation"** — IPK ist Ergänzung, nicht Ersatz. Aktive Bewegung ist immer überlegen, wenn möglich.

---

### F-11: Symptome der TVT — Homans-Zeichen ist VERALTET

**Fakt:** Leitsymptome einer TVT sind: **Schwellung eines Beins** (einseitig!), **Wadenschmerz** (besonders beim Auftreten), **Überwärmung**, **livide/zyanotische Verfärbung**, **verstärkte Venenzeichnung** (Pratt-Warnvenen). **Wichtig:** Etwa 50% der TVT verlaufen **symptomarm oder klinisch stumm** — besonders distale Thrombosen. Die klassischen klinischen Tests wie **Homans-Zeichen** (Wadenschmerz bei Dorsalflexion des Fußes), **Payr-Zeichen, Meyer-Zeichen** gelten heute als **unzuverlässig, unspezifisch und veraltet**. Moderne Diagnostik: **Wells-Score + D-Dimer + Kompressions-Sonographie** (Goldstandard).

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Symptome + Diagnostik
**Bloom-Potential:** 4-5 (Analysieren, Bewerten)
**Primärquelle:** (AWMF S2k-Leitlinie Venenthrombose und Lungenembolie 2015/2017; IHAMZ-Guideline TVT 2024; DGP)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Die Beschwerden können sehr ausgeprägt sein, insbesondere bei bettlägerigen Patienten aber auch gering"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Schwellung, Rötung oder blaue (livide)"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Überwärmung von Ober- oder Unterschenkel"
- Quelle: `icare-krankheitslehre-volltext/icare-krankheitslehre.txt`
- Zitat: "In etwa der Hälfte der Fälle fehlen diese typischen Symptome jedoch; die Thrombose wird dann als „klinisch stumm“ bezeichnet." — ~50 % klinisch stumm verbatim belegt
- Quelle: `icare-krankheitslehre-volltext/icare-krankheitslehre.txt`
- Zitat: "Die nach ihren Erstbeschreibern Meyer, Payr und Homan benannten Zeichen erlauben jedoch keine sichere Diagnosestellung: Eine Thrombose kann hiermit weder ausgeschlossen noch bestätigt werden." — Homans/Payr/Meyer unzuverlässig (qualitativ) belegt

> ✅/⚠️ TEILWEISE AUFGELÖST (2026-06-11): Der Detail-Wert „etwa 50 % der TVT klinisch stumm" ist jetzt verbatim aus I Care Krankheitslehre belegbar („In etwa der Hälfte der Fälle fehlen diese typischen Symptome"). Ebenso ist die qualitative Aussage „Homans-/Payr-/Meyer-Zeichen erlauben keine sichere Diagnose" jetzt belegt. NICHT belegt bleibt die konkrete Homans-*Sensitivitätsangabe* (60–90 %) — in keinem lokalen Korpus enthalten. Diese Prozentzahl bis zur Verfügbarkeit einer Diagnostik-Primärquelle nicht als belegt behaupten.
**Praxisfehler:** Pflege prüft Homans-Zeichen als "Standard" — auslösend kann Emboliegefahr sein (Thrombusteile lösen!); klinisch stumme TVT wird verpasst.
**Transfer:** [Transfer] Wie in der alten Medizin, wo man dem Patienten auf die Stirn gefühlt hat um Fieber zu messen — heute haben wir Thermometer. Homans ist wie Stirnfühlen: ungenau, kann Schaden machen.

**Misconceptions:**
- `M1`: **"Homans-Zeichen ist Standard-Test"** — VERALTET! Aktuelle Leitlinien empfehlen Homans NICHT mehr. Sensitivität 60-90%, aber Spezifität schlecht. Risiko: Beim Prüfen können Thrombusteile gelöst werden. Fachbegriff: "Homans-Mythos".
- `M2`: **"Ohne sichtbare Schwellung keine TVT"** — 50% der TVT sind klinisch stumm oder diskret. Besonders Waden-TVT kann wenig Schwellung zeigen. Fachbegriff: "Symptom-Fehlschluss".
- `M3`: **"Beide Beine prüfen ist genug"** — Seitendifferenz ist ein Hinweis, aber nicht beweisend. Bei klinischem Verdacht IMMER Wells-Score + D-Dimer + Sonographie.

---

### F-12: Lungenembolie — Notfall-Symptome erkennen

**Fakt:** Akute Lungenembolie-Symptome: **plötzliche Atemnot (Dyspnoe)** ist häufigstes Symptom (80%); **Thoraxschmerz** (meist atemabhängig, stechend); **Tachykardie** (>100/min); **Tachypnoe** (>20/min); **Zyanose**; **Schwindel, Kollaps, Synkope**; **Husten** (teils blutig); **Angst, Todesangst, Unruhe**. Bei massiver LE: **Schock, Kreislaufstillstand**. Bei Verdacht: **SOFORT Notfall-Maßnahmen**: Arzt/Notruf, Patient flach lagern bei Schock oder Oberkörperhochlagerung bei Dyspnoe, O2-Gabe, Monitoring, venösen Zugang vorbereiten, KEINE körperliche Belastung mehr. Jede Minute zählt!

**Prüfungsrelevanz:** sehr hoch (lebensrettend!)
**Wissensart:** Komplikation + Notfall-Erkennung
**Bloom-Potential:** 5-6 (Bewerten, Entscheiden)
**Primärquelle:** (AWMF S3-Leitlinie VTE, Update 2025; ESC Guidelines Acute Pulmonary Embolism 2019; AMBOSS Lungenembolie)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Typisch sind plötzliche Atemnot, schnelle Atmung, atemabhängige Thoraxschmerzen und Husten, evtl. mit blutigem Sputum"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Tachykardie. Ein Pulsanstieg über 100/Minute bei Erwachsenen wird als Tachykardie bezeichnet"
- Zitat: "Tachypnoe (Atemfrequenz > 20/min)"
- Quelle: `icare-krankheitslehre-volltext/icare-krankheitslehre.txt`
- Zitat: "Das erste Zeichen ist oft die plötzliche Atemnot. Später kommen auch Husten und atemabhängige Brustschmerzen dazu." — Atemnot als erstes/führendes LE-Zeichen (qualitativ) belegt

> ⚠️ Detail-Wert „Dyspnoe häufigstes Symptom (80 %)": Die *qualitative* Aussage „Atemnot ist das erste/führende LE-Zeichen" ist jetzt verbatim aus I Care Krankheitslehre belegt. Die konkrete *80-%-Quote* bleibt in keinem lokalen Korpus (Pflege heute, AWMF VTE, Paetz, Prüfungswissen, I Care Krankheitslehre) enthalten. Bis zur Verfügbarkeit einer LE-Epidemiologie-Quelle (ESC Acute Pulmonary Embolism Guidelines) keine 80-%-Zahl behaupten.
**Praxisfehler:** Symptome werden als Panikattacke oder Angst fehlgedeutet; Patient wird allein gelassen oder nicht priorisiert.
**Transfer:** [Transfer] Wie ein Alarm im Haus — plötzliche Atemnot bei Risikopatient ist die Brandmeldung. Du schickst niemanden hin zum "Nachsehen", du rufst sofort die Feuerwehr.

**Misconceptions:**
- `M1`: **"Ohne Schwellung im Bein keine Lungenembolie"** — 50% der LE haben keine erkennbare TVT vorher. Besonders bei Beckenvenenthrombosen können Zeichen im Bein fehlen. Fachbegriff: "Vorläufer-Falle".
- `M2`: **"Atemnot ist immer Asthma oder Panik"** — Bei Risikopatienten (postoperativ, immobil, Tumor): immer LE ausschließen. Fachbegriff: "Symptom-Fehldeutung".
- `M3`: **"Patient mit LE soll sich bewegen, damit er besser atmet"** — FALSCH und gefährlich. Bei V.a. LE: absolute Ruhe, flach oder Oberkörper hoch, aber NICHT aufstehen lassen. Bewegung kann weitere Thrombusteile lösen.

---

### F-13: Pflegeaufgabe — Beobachten, Melden, Dokumentieren, Durchführen

**Fakt:** Die Pflege macht bei Thromboseprophylaxe **keine Diagnosen** — Diagnostik und Therapie-Entscheidungen sind ärztliche Aufgaben. Die Pflege trägt Kern-Verantwortung für: **Beobachten** (Beine täglich vergleichen, Atemfrequenz, Vitalzeichen, Hautfarbe), **Risiko-Assessment** durchführen/dokumentieren, **Maßnahmen durchführen** (Mobilisation, NMH s.c. nach AO, MTPS korrekt anlegen, Patient anleiten), **Melden** bei Verdacht auf TVT oder LE (sofort Arzt informieren!), **Dokumentieren** aller Beobachtungen, Maßnahmen und Auffälligkeiten.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Rolle + Verantwortung
**Bloom-Potential:** 4-6
**Primärquelle:** (§ 4 PflBG — vorbehaltene Tätigkeiten; AWMF S3-Leitlinie VTE; DNQP-Leitlinien pflegerische Beobachtung)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "halten die Pflegenden vor der Mobilisation Rücksprache mit dem Arzt"
**Praxisfehler:** Pflege wartet auf Arzt-Visite statt sofort zu melden; Beobachtungen werden nicht dokumentiert.

**Misconceptions:**
- `M1`: **"Thromboseprophylaxe ist Arzt-Sache"** — Medikamenten-Anordnung ja, Durchführung/Beobachtung ist Pflege. Pflege ist die Frontlinie und erkennt Komplikationen zuerst.
- `M2`: **"Bei Verdacht erstmal abwarten bis Arzt kommt"** — Bei V.a. Lungenembolie: SOFORT Notruf. Nicht auf nächste Visite warten. Zeit = Leben.
- `M3`: **"Patient kann selbst melden, wenn er Schmerzen hat"** — Nicht alle Patienten melden zuverlässig (Demenz, Sprachbarriere, Unterschätzung). Aktive Beobachtung durch Pflege ist Standard.
