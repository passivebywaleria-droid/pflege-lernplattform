# Kernfakten: Sturz-Prophylaxe

| Feld | Wert |
|------|------|
| themaId | `sturz-prophylaxe` |
| ceId | `ce-02` |
| cluster | B (Mobilität) |
| geschätzteUE | 4 |
| wissensart | handlung |
| quellen | DNQP Expertenstandard Sturzprophylaxe 2. Aktual. 2022 (`dnqp-standards-index/sturzprophylaxe.txt`); Pflege heute Kap. Sturzprophylaxe (`pflege-heute-volltext/pflege-heute.txt`) |
| einträge | 11 |
| erstellt | 2026-04-22 (Pilot-Lauf Pipeline v9) |
| grounding | STÜTZT-gehoben 2026-06-11 (Dozentin A) → erneut überarbeitet 2026-06-11. Belege ergänzt: F-02 Tinetti/TUG (DNQP Gebrauchsanleitung), F-03 intrinsisch/extrinsisch aufgelöst (DNQP-Zitat: Einteilung nicht mehr statt), F-05 Rutschfester Bodenbelag + freie Wege, F-06 Benzodiazepine/Antidepressiva Sturz-Kontext, F-08 § 1831 Abs. 4 BGB amtlich belegt (bgb-1831.txt) + Werktags-Frist (SACHKORREKTUR: nicht 24h; Lehrbuch-Zitat § 1906 a.F. als altes Recht markiert). Quer-Korpus-Welle 2026-06-11 (alle 19 Korpora geprüft). 2026-06-11 (Curriculum-Tiefe-Pass): alle verbleibenden Marker aufgelöst, indem die nicht belegbaren Über-Ausbildungsniveau-Details aus dem Schüler-Text gestrichen wurden statt extern zu beschaffen — F-04 Trainings-Dosierung 2-3 Einh./12 Wo. + „am besten belegt" (war bereits nicht im Fakt-Text behauptet, Hinweis im Fakt belassen); F-06 20-40-%-Anteil (nie im Fakt-Text) + Diuretika als Sturz-Risikofaktor aus Fakt-Text F-06 UND aus F-03-Liste gestrichen (DNQP-Gebrauchsanleitung Sturz-Kapitel listet nur Antihypertensiva + Psychotrope, KEINE Diuretika); F-03/M2 + F-06/M1 Prozent-Hinweise (bereits qualitativ). F-08 (§ 1831 BGB) unverändert. Body-Marker = 0. |

---

### F-01: Definition Sturz

**Fakt:** Ein Sturz ist ein Ereignis, bei dem die betroffene Person unbeabsichtigt auf dem Boden oder einer tieferen Ebene landet. Fast-Stürze (Beinahestürze/Near-Miss) gelten laut DNQP ausdrücklich NICHT als Sturz, sollen aber im Rahmen der Risikoeinschätzung berücksichtigt werden, weil sie wichtige Hinweise auf Risikofaktoren (z. B. Balance-Störung, orthostatische Hypotonie) geben.

**Prüfungsrelevanz:** hoch
**Wissensart:** Definition
**Bloom-Potential:** 1-2 (Erinnern, Verstehen)
**Primärquelle:** (WHO, Global Report on Falls Prevention in Older Age, 2007; DNQP 2022)
**Beleg:**
- Quelle: `dnqp-standards-index/sturzprophylaxe.txt`
- Zitat: "Ein Sturz ist ein Ereignis, bei dem der oder die Betroffene unbeabsichtigt auf dem Boden oder auf einer anderen tieferen Ebene aufkommt"
- Quelle: `dnqp-standards-index/sturzprophylaxe.txt`
- Zitat: "dass Beinahestürze nicht als Stürze zu definieren sind, aber im pflegerischen Alltag im Rahmen der Risikoeinschätzung durchaus berücksichtigt werden sollten"
**Praxisfehler:** Fast-Stürze werden oft nicht dokumentiert, obwohl sie wichtige Warnzeichen sind.
**Transfer:** Wie bei einem Unfall: nicht nur der Crash zählt, auch das "Fast-Passiert" ist eine Warnung.

**Misconceptions:**
- `M1`: **"Ein Sturz ist erst ein Sturz, wenn der Patient verletzt ist"** — Schüler verwechseln Sturz mit Sturzfolge. Auch ein Sturz ohne Verletzung muss dokumentiert werden (Warnsignal). Fachbegriff: "Verletzung-zentrierte Fehldefinition".
- `M2`: **"Ausrutschen ist kein Sturz"** — Abgrenzung schwierig: Jeder unbeabsichtigte Kontakt mit einer tieferen Ebene (auch abgefangen) ist Sturz. Near-Miss = beinahe, aber nicht passiert.
- `M3`: **"Wenn sich jemand bewusst setzt, ist das kein Sturz"** — Korrekt, bewusste Handlung ist kein Sturz. ABER: "Sich fallen lassen weil man Gleichgewicht verliert" IST Sturz.

---

### F-02: Sturzrisiko-Einschätzung nach DNQP

**Fakt:** Die Pflegefachperson identifiziert zu Beginn des pflegerischen Auftrages mittels Screening das Sturzrisiko und überprüft die Einschätzung bei Veränderungen der Pflegesituation, nach einem Sturz und in individuell festzulegenden Zeitabständen. Kein einzelnes Punkte-Schema ist vorgeschrieben — die individuelle, multifaktorielle Einschätzung steht im Vordergrund; die Verwendung starrer Risiko-Skalen gilt als überholt. Der Timed-Up-and-Go-Test (TUG) ist ein spezifisches Instrument zur Mobilitätsmessung, das im Rahmen des Expertenstandards Sturzprophylaxe eine Rolle spielt; der Tinetti-Test ist ein weiteres geriatrisches Assessment-Instrument. Hinweis: Die Morse Fall Scale wird in den vorliegenden Primärquellen nicht namentlich genannt; für ihre namentliche Nennung wären die Skalen-Originalarbeiten (Morse 1989) zu beschaffen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3-4 (Anwenden, Analysieren)
**Primärquelle:** (DNQP 2022; Expertenstandard Sturzprophylaxe 2. Aktualisierung; für Instrumenten-Namen: Skalen-Originalarbeiten — zu beschaffen)
**Beleg:**
- Quelle: `dnqp-standards-index/sturzprophylaxe.txt`
- Zitat: "Die Pflegefachkraft identifiziert unmittelbar zu Beginn des pflegerischen Auftrages mittels eines Screenings systematisch das Sturzrisiko"
- Quelle: `dnqp-standards-index/sturzprophylaxe.txt`
- Zitat: "Die Pflegefachkraft überprüft die Einschätzung des Sturzrisikos bei"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Die Verwendung von Skalen zur Risikoeinschätzung gilt als überholt"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Vielmehr ist deutlich geworden, dass Risikofaktoren in ihrer Kombination und situationsabhängig zum Tragen kommen"
- Quelle: `expertenstandards-gebrauchsanleitung-volltext/expertenstandards-gebrauchsanleitung.txt`
- Zitat: "Timed-Up-and-Go-Test TUG erwähnenswert, da er bereits im Rahmen des Expertenstandards Sturzprophylaxe eine Rolle spielte"
- Quelle: `expertenstandards-gebrauchsanleitung-volltext/expertenstandards-gebrauchsanleitung.txt`
- Zitat: "der Ergebnisse durch den Tinetti-Test und den Timed"
**Praxisfehler:** Viele Pflegende verlassen sich auf ein einzelnes Punkte-Schema (z.B. "18 = kein Risiko") statt multifaktoriell zu denken.
**Transfer:** [Transfer] Wie ein Arzt nicht nur Fieber misst, sondern den ganzen Patienten anschaut.

**Misconceptions:**
- `M1`: **"Das Tinetti-Ergebnis entscheidet über Maßnahmen"** — Skalen sind Hilfsmittel, keine Vorschrift. DNQP 2022 betont: Klinische Einschätzung ist führend. Fachbegriff: "Skala-Dogmatismus".
- `M2`: **"Einmaliges Assessment bei Aufnahme reicht"** — Re-Assessment ist Pflicht bei Zustandsveränderung (neue Medikamente, OP, Infekt).
- `M3`: **"Jeder Patient über 75 hat Sturzrisiko"** — Alter ist EIN Faktor unter vielen. Ein fitter 80-Jähriger kann niedrigeres Risiko haben als ein 60-Jähriger mit Parkinson.

---

### F-03: Intrinsische vs. extrinsische Risikofaktoren

**Fakt:** Sturzrisikofaktoren werden in den Primärquellen (DNQP, Pflege heute) nach Ursprung gegliedert: **personen-, medikamenten-, umgebungs- sowie situationsbezogen**. Meist ist ein Sturz Ergebnis einer Kombination mehrerer, scheinbar voneinander unabhängiger Ursachen. Pflege kann auf alle diese Ebenen einwirken. Hinweis zur Didaktik: Die im Unterricht gebräuchliche Zwei-Teilung **intrinsisch (personenbezogen) vs. extrinsisch (umgebungsbezogen)** ist eine vereinfachende Sammelkategorie; die DNQP-Aktualisierung des Expertenstandards Sturzprophylaxe hat diese Einteilung explizit aufgegeben und verwendet stattdessen die 4-fache Gliederung (personen/medikamenten/umgebung/situation). Dieser Befund ist nun verbatim belegbar (s. u.).

**Prüfungsrelevanz:** hoch
**Wissensart:** Klassifikation
**Bloom-Potential:** 2-4
**Primärquelle:** (DNQP 2022; Pflege heute Kap. Sturzprophylaxe)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Faktoren, die ein Sturzereignis begünstigen, sind personen-, medikamenten-, umgebungs- sowie situationsbezogen"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Meist führt nicht ein einzelner Faktor, sondern mehrere, scheinbar voneinander unabhängige Ursachen zu einem Sturz"
- Quelle: `dnqp-standards-index/sturzprophylaxe.txt`
- Zitat: "die individuellen personen-, medikamenten- und umgebungsbezogenen Sturzrisikofaktoren"
- Quelle: `expertenstandards-gebrauchsanleitung-volltext/expertenstandards-gebrauchsanleitung.txt`
- Zitat: "Eine Einteilung in intrinsische und extrinsische Sturzrisikofaktoren findet deshalb in der Aktualisierung des Expertenstandards nicht mehr"
**Praxisfehler:** Fokus nur auf personenbezogene Faktoren (Patient) und Vernachlässigung von Umgebung, Medikamenten und Situation.

**Intrinsische Faktoren:**
- Sturz in den letzten 12 Monaten (stärkster Prädiktor!)
- Gangunsicherheit, Balance-Probleme
- Muskelschwäche (Sarkopenie)
- Sehminderung
- Kognitive Einschränkung (Demenz, Delir)
- Medikamente (Polypharmazie, Psychopharmaka)
- Inkontinenz (Eile zur Toilette)
- Orthostatische Dysregulation
- Chronische Erkrankungen (Parkinson, Schlaganfall)

**Extrinsische Faktoren:**
- Ungeeignetes Schuhwerk
- Stolperfallen
- Schlechte Beleuchtung
- Fehlende Haltegriffe
- Nasse Böden
- Bettgitter (können Sturzhöhe erhöhen!)

**Misconceptions:**
- `M1`: **"Bettgitter schützen vor Stürzen"** — Bettgitter erhöhen die Sturzhöhe und können zu schwereren Verletzungen führen. Fachbegriff: "Bettgitter-Illusion".
- `M2`: **"Nur die Krankheit verursacht Stürze"** — Ein erheblicher Teil der Stürze hat umgebungs- und situationsbezogene Mitursachen; meist wirken mehrere Faktoren zusammen (Pflege heute: "mehrere, scheinbar voneinander unabhängige Ursachen"). Fachbegriff: "Personen-zentrierte Voreingenommenheit".
- `M3`: **"Schlechte Beleuchtung ist ein Luxus-Problem"** — Schlechte Beleuchtung ist ein großer Sturzrisikofaktor, besonders nachts.

---

### F-04: Kraft- und Balance-Training als wirksamste Maßnahme

**Fakt:** Gezieltes Kraft- und Balancetraining ist eine zentrale Maßnahme zur Sturzprävention und wirkt dem sturzfördernden Muskelabbau (Sarkopenie) entgegen. Es kann individuell oder in der Gruppe durchgeführt werden. (Hinweis: Eine konkrete „beste"-Einzelmaßnahme-Rangfolge sowie eine exakte Trainings-Dosierung sind im Schüler-Text bewusst nicht behauptet — der DNQP-Standard hält fest, dass zu sturzpräventiven Interventionen teilweise widersprüchliche Ergebnisse vorliegen.)

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 3-5
**Primärquelle:** (DNQP 2022; für Dosierung/Überlegenheit: Cochrane-Review zur Sturzprävention — zu beschaffen)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Falls möglich, gezieltes Kraft- und Balancetraining"
- Zitat: "Dem Abbau von Muskelkraft und Reaktionsfähigkeit kann entgegengewirkt werden durch regelmäßiges Trainieren von"
**Praxisfehler:** "Schonung" als Sturzprävention — führt zu Muskelabbau und erhöht das Risiko (Teufelskreis).
**Transfer:** [Transfer] Wie im Sport: ohne Training keine Muskelkraft. Der Unterschied: bei älteren Menschen geht es schneller verloren.

**Misconceptions:**
- `M1`: **"Nach Sturz ist Ruhe wichtig"** — Bettruhe nach Sturz fördert Muskelabbau und Sturzangst (Post-Fall-Syndrom). Frühe Mobilisation ist Standard.
- `M2`: **"Alte Patienten können kein Krafttraining"** — Selbst 90+ profitieren von progressivem Krafttraining (Evidenz!).
- `M3`: **"Spazieren reicht als Training"** — Gehen allein ist nicht progressiv. Gezielte Balance-/Kraftübungen sind überlegen.

---

### F-05: Umgebungsanpassung

**Fakt:** Pflegerische Aufgabe: Die Umgebung des Patienten so gestalten, dass Sturzrisiko minimiert wird. Dazu gehören Haltegriffe, rutschfeste Unterlagen, angepasste Bett-Höhe, freie Wege, gute Beleuchtung (auch nachts), Stolperfallen entfernen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 3
**Primärquelle:** (DNQP 2022; Pflege heute 7. Aufl., Kap. 9.8 Sturzprophylaxe)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Stolperfallen/Hindernisse zu identifizieren, diese anschließend beseitigen"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Beseitigen von Stolperfallen (z. B. Teppiche, Türschwellen), Anbringen von Haltegriffen, gute und ausreichende Beleuchtung"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Niedrige Betthöhe"
- Quelle: `dnqp-standards-index/sturzprophylaxe.txt`
- Zitat: "Die Pflegefachkraft sorgt für eine individuelle Umgebungsanpassung sowie für den Einsatz geeigneter Hilfsmittel zur Sturzprophylaxe"
- Quelle: `expertenstandards-gebrauchsanleitung-volltext/expertenstandards-gebrauchsanleitung.txt`
- Zitat: "Rutschfester Bodenbelag"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Wege gemeinsam mit dem Patienten abschreiten, um Stolperfallen/Hindernisse zu identifizieren, diese anschließend beseitigen"
**Belegstatus Teilaussagen:** Stolperfallen entfernen, Haltegriffe, gute Beleuchtung, angepasste (niedrige) Betthöhe, rutschfester Bodenbelag (DNQP Gebrauchsanleitung: bauliche Voraussetzungen Sturzprophylaxe) und freie Wege/Hindernisse beseitigen (Pflege heute: umgebungsbezogene Sturzprophylaxe-Maßnahmen) sind nun verbatim aus dem Korpus gedeckt.
**Praxisfehler:** Bett-Höhe wird oft nicht patientenindividuell angepasst (tief bei Demenz vs. hoch für Transfer).

**Misconceptions:**
- `M1`: **"Bett so hoch wie möglich stellen"** — Bei Demenz-Patienten, die klettern: tief stellen (möglichst bodennah mit Matratze davor). Bei Transfer: hoch einstellen.
- `M2`: **"Handläufe nur im Bad"** — Auch Flure, Treppen, Toiletten profitieren.

---

### F-06: Medikamentenreview als Präventivmaßnahme

**Fakt:** Medikamente sind eine eigene Sturzrisiko-Kategorie: Die im Alter häufige Polypharmazie (> 4 Medikamente) erhöht das Sturzrisiko durch wenig kalkulierbare Wechselwirkungen; besonders riskant sind psychotrope Medikamente (z. B. Benzodiazepine, Z-Substanzen, Antidepressiva) und Antihypertensiva. Regelmäßiger interprofessioneller Medikamentenreview ist wichtiger Baustein.

**Prüfungsrelevanz:** mittel
**Wissensart:** Maßnahme
**Bloom-Potential:** 4 (Analysieren)
**Primärquelle:** (DNQP 2022; für Anteil/Medikationslisten: PRISCUS/FORTA bzw. Beers-Liste — zu beschaffen)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Die im Alter häufige Polypharmazie erhöht das Sturzrisiko durch wenig kalkulierbare Wechselwirkungen der Arzneimittel"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Stürze werden durch die Menge der Medikamente und durch einige spezielle Medikamentengruppen begünstigt"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Polypharmazie > 4 Medikamente"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Einnahme von mehr als vier verschiedenen Medikamenten"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Psychotrope Medikamente"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Herabsetzung des Muskeltonus, dadurch kommt es zu Gangunsicherheit und erhöhter Sturzgefahr"
- Quelle: `icare-examen-kompakt-volltext/icare-examen-kompakt.txt`
- Zitat: "Bei älteren Pflegeempfängern können Psychopharmaka eine erhöhte Sturzgefahr bewirken"
- Quelle: `expertenstandards-gebrauchsanleitung-volltext/expertenstandards-gebrauchsanleitung.txt`
- Zitat: "Einnahme von Benzodiazepinen und Anticholinergika"
- Quelle: `expertenstandards-gebrauchsanleitung-volltext/expertenstandards-gebrauchsanleitung.txt`
- Zitat: "Einnahme von Antidepressiva und Nicht-Einnahme von Medikamenten zur Leistungssteigerung bei Menschen mit Demenz"
**Belegstatus Teilaussagen:** Die Definition *Polypharmazie > 4 Medikamente* ist verbatim doppelt gedeckt. Als sturzrelevante Medikamentengruppen sind verbatim belegt: *Antihypertensiva* und *Psychotrope Medikamente* (DNQP/Pflege heute), *Benzodiazepine* mit dem Mechanismus „Herabsetzung des Muskeltonus → erhöhte Sturzgefahr" (Pflege heute Kap. 38), *Psychopharmaka* mit sturzbezogenem Kontext (icare-examen-kompakt), sowie *Benzodiazepine* und *Antidepressiva* in der DNQP-Gebrauchsanleitung-Kriterienliste. *Diuretika* in einem expliziten Sturz-Ursachen-Kontext und die konkrete Zahl *20-40 % medikamentöse Mitursache* sind im Korpus nicht belegbar — daher aus dem Schüler-Text gestrichen (über Ausbildungsniveau bzw. unbelegte Quote).
**Praxisfehler:** Pflege übernimmt Medikamente unkritisch, ohne Wechselwirkungen/Sturzrisiko zu hinterfragen.

**Misconceptions:**
- `M1`: **"Schlafmittel sind harmlos"** — Benzodiazepine und Z-Substanzen (Zolpidem etc.) zählen zu den psychotropen Medikamenten, die das Sturzrisiko deutlich erhöhen (Pflege heute: "spezielle Medikamentengruppen").
- `M2`: **"Medikamente sind Arzt-Sache"** — Pflege hat Beobachtungs- und Meldepflicht bei Nebenwirkungen.

---

### F-07: Hüftprotektoren bei Hochrisiko

**Fakt:** Hüftprotektoren können Hüftfrakturen bei Stürzen verhindern. Wirksam bei Hochrisikopatienten (Demenz + Gangunsicherheit + Osteoporose). Problem: Compliance oft schlecht — viele tragen sie nicht durchgängig.

**Prüfungsrelevanz:** mittel
**Wissensart:** Maßnahme
**Bloom-Potential:** 3
**Primärquelle:** (DNQP 2022; Pflege heute Kap. Sturzprophylaxe)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Bei hohem Sturzrisiko Verwendung von Hüftprotektoren zur Prophylaxe hüftgelenknaher Frakturen bei Akzeptanz des Patienten"

**Misconceptions:**
- `M1`: **"Hüftprotektoren verhindern Stürze"** — Sie verhindern Frakturen, nicht Stürze. Sturzprävention ist davon unabhängig.
- `M2`: **"Hüftprotektoren für alle Patienten"** — Nur Hochrisiko. Sonst Überversorgung.

---

### F-08: Keine Fixierung als Sturzprophylaxe

**Fakt:** Fixierung (Bettgitter, Gurte, sedierende Medikation) ist KEINE Sturzprophylaxe — Studien zeigen sogar, dass durch freiheitsentziehende Maßnahmen (FEM) das Sturzaufkommen nicht gesenkt wird, und sie erhöht Komplikationen (Stürze beim Überklettern, Verletzungen durch Gurte, Muskelabbau). Bettgitter stellen eine freiheitsentziehende Maßnahme nach § 239 StGB dar und sind nur zulässig, wenn der Betroffene zugestimmt hat, Gefahr im Verzug ist oder ein richterlicher Beschluss vorliegt. Für längere Fixierung (dauerhaft oder regelmäßig) ist spätestens am folgenden Werktag eine richterliche Genehmigung notwendig (§ 1831 Abs. 4 BGB; bis 31.12.2022: § 1906 Abs. 4 BGB a.F. — Lehrbücher zitieren teils noch das alte Recht). SACHKORREKTUR: Die früher genannte „24-Stunden-Frist" ist im Korpus nicht belegbar — der belegte Wortlaut lautet „spätestens am folgenden Werktag".

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Recht + Handlung
**Bloom-Potential:** 4-5 (Bewerten, Entscheiden)
**Primärquelle:** (DNQP 2022; § 1831 Abs. 4 BGB [bis 2022: § 1906 Abs. 4 BGB a.F.]; Bundesverfassungsgericht: Selbstbestimmung)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Längerfristige freiheitsentziehende Maßnahmen benötigen grundsätzlich einen richterlichen Beschluss durch das Betreuungsgericht"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "auch ohne richterlichen Beschluss anordnen. Die richterliche Genehmigung muss er"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "belegen, dass durch FEM das Sturzaufkommen nicht gesenkt werden kann"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Bettgitter stellen eine freiheitsentziehende Maßnahme nach § 239 Strafgesetzbuch dar. Sie sind rechtlich nur dann zulässig, wenn der Betroffene zugestimmt hat, Gefahr im Verzug ist oder wenn es einen richterlichen Beschluss dazu gibt"
- Quelle: `icare-examen-kompakt-volltext/icare-examen-kompakt.txt`
- Zitat: "Wird in § 1906 Abs. 4 BGB geregelt" — ACHTUNG altes Recht: § 1906 BGB a.F., aufgehoben zum 1.1.2023 (Betreuungsrechtsreform); heutige Norm: § 1831 Abs. 4 BGB
- Quelle: `icare-examen-kompakt-volltext/icare-examen-kompakt.txt`
- Zitat: "Für längere Fixierung (dauerhaft oder regelmäßig) ist zeitnah (spätestens am folgenden Werktag) eine richterliche Genehmigung notwendig"
- Quelle: `leitlinien-volltext/bgb-1831.txt`
- Zitat: "Bürgerliches Gesetzbuch (BGB) § 1831 Freiheitsentziehende Unterbringung und freiheitsentziehende Maßnahmen" — aktuelle Rechtsgrundlage (seit 1.1.2023)
- Zitat: "Die Absätze 1 bis 3 gelten entsprechend, wenn dem Betreuten, der sich in einem Krankenhaus, einem Heim oder einer sonstigen Einrichtung aufhält, durch mechanische Vorrichtungen, Medikamente oder auf andere Weise über einen längeren Zeitraum oder regelmäßig die Freiheit entzogen werden soll." — § 1831 Abs. 4 BGB: FeM-Genehmigungspflicht bei längerem Zeitraum/Regelmäßigkeit
**Praxisfehler:** Fixierung aus Angst vor Haftung angewandt — führt umgekehrt zu Haftungsrisiko.

**Misconceptions:**
- `M1`: **"Bettgitter sind keine Fixierung"** — Beidseitige Bettgitter OHNE Zustimmung gelten als freiheitsentziehende Maßnahme.
- `M2`: **"Wenn der Patient demenzkrank ist, darf man fixieren"** — Nein. Auch bei Demenz braucht eine längerfristige FEM einen richterlichen Beschluss des Betreuungsgerichts. Ausnahme: akute Eigen-/Fremdgefährdung (Notwehr/Notstand) — dann ärztliche Anordnung ohne Beschluss zulässig, richterliche Genehmigung spätestens am folgenden Werktag nachzuholen (§ 1831 Abs. 4 BGB; bis 2022: § 1906 Abs. 4 BGB a.F.).
- `M3`: **"Fixierung ist sicher"** — Tote durch Strangulation in Bettgittern und Gurtbetten dokumentiert. Extrem risikoreich.

---

### F-09: Post-Fall-Syndrom (Sturzangst)

**Fakt:** Nach einem Sturz entwickeln viele Patienten eine Sturzangst, die zu vermindernder Aktivität führt. Das reduziert Muskelkraft und Balance → erhöht das Sturzrisiko weiter (Teufelskreis). Pflegerische Intervention: angstreduzierte Mobilisation, Ressourcen stärken, positive Verstärkung.

**Prüfungsrelevanz:** mittel
**Wissensart:** Komplikation
**Bloom-Potential:** 3-4
**Primärquelle:** (DNQP 2022)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Dadurch entsteht ein Teufelskreis, weil die Bewegungseinschränkung und der damit verbundene Trainingsmangel das Sturzrisiko weiter fördern"
**Transfer:** [Transfer] Wie bei einem Fahrrad-Unfall: nach dem Sturz will man erstmal nicht mehr fahren — bis man wieder das Vertrauen findet.

**Misconceptions:**
- `M1`: **"Wenn jemand Angst hat, soll er ruhig liegen bleiben"** — Umgekehrt: sanfte Mobilisation überwindet die Angst. Ruhe verschlimmert.
- `M2`: **"Sturzangst ist psychologisch, nicht pflegerisch"** — Pflege hat Kern-Rolle: graduelle Expositions-Therapie, Erfolgserlebnisse schaffen.

---

### F-10: Dokumentation nach Sturz

**Fakt:** Nach jedem Sturz Pflicht: Sturzprotokoll mit Hergang, Uhrzeit, Ort, Umständen (Schuhwerk? Medikamente? Umgebung? Zeit seit letzter Mahlzeit?), Verletzungen, Maßnahmen. Dient der Analyse (Ursachensuche) und rechtlichen Absicherung.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Dokumentation
**Bloom-Potential:** 6 (Erschaffen — Bericht formulieren)
**Primärquelle:** (DNQP 2022; Pflegedokumentations-Richtlinien)
**Beleg:**
- Quelle: `dnqp-standards-index/sturzprophylaxe.txt`
- Zitat: "Die Pflegefachkraft dokumentiert und analysiert jeden Sturz"
- Quelle: `dnqp-standards-index/sturzprophylaxe.txt`
- Zitat: "Jeder Sturz ist dokumentiert und analysiert"
**Praxisfehler:** Knappe Dokumentation ("Patient gestürzt") statt strukturierte Analyse.

**Misconceptions:**
- `M1`: **"Wenn keine Verletzung, keine Dokumentation"** — Auch verletzungsfreie Stürze müssen dokumentiert und analysiert werden. Beinahestürze (Near-Miss) gelten laut DNQP zwar nicht als Sturz, sind aber im Rahmen der Risikoeinschätzung zu berücksichtigen (siehe F-01) — wichtig für die Trend-Analyse.
- `M2`: **"Sturz-Ursache = was der Patient sagt"** — Patientenbericht ist subjektiv und unvollständig (besonders nach Kopfverletzung, bei Demenz). Pflegerische Einschätzung + Situationsanalyse nötig.

---

### F-11: Interprofessionelle Zusammenarbeit

**Fakt:** Sturzprophylaxe ist interprofessionell: Pflege (Assessment, Mobilisation, Umgebung), Arzt (Medikamentenreview, Grunderkrankungen), Physiotherapie (Training), Augenarzt (Sehkorrektur), Orthopäde (Schuhwerk, Hilfsmittel), Apotheker (Medikamentenreview).

**Prüfungsrelevanz:** mittel
**Wissensart:** Organisation
**Bloom-Potential:** 3
**Primärquelle:** (DNQP 2022)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Sturzprävention ist eine multiprofessionelle Aufgabe"

**Misconceptions:**
- `M1`: **"Sturzprophylaxe ist Pflege-Sache allein"** — Ohne Arzt-Beteiligung (Medikamente), Physio (Training), Augenarzt (Sehkorrektur) ist Prophylaxe unvollständig.
