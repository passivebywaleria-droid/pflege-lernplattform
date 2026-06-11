# Kernfakten: Assessments & Expertenstandards

| Feld | Wert |
|------|------|
| themaId | `assessments-expertenstandards` |
| ceId | `ce-02` |
| cluster | A (Pflegeprozess & Dokumentation) |
| geschätzteUE | 7 |
| wissensart | orientierung |
| quellen | DNQP Expertenstandards (Dekubitusprophylaxe, Schmerzmanagement, Mundgesundheit, Hautintegrität — `dnqp-standards-index/`); Pflege heute 7. Aufl. Kap. Pflegeassessment, Schmerz, Qualität (`pflege-heute-volltext/`); Schiemann/Moers/Büscher „Expertenstandards Gebrauchsanleitung" 4. Aufl. 2020 (`expertenstandards-gebrauchsanleitung-volltext/`); Donabedian (Jahr 1966 korpus-unbelegt ⚠️); Mahoney/Barthel 1965; Braden/Bergstrom 1987 (Subskalen+Spanne jetzt belegt via Gebrauchsanleitung Anhang 2); Guigoz 1994 (Spannen+Cut-off jetzt belegt via Gebrauchsanleitung Anhang 17); Podsiadlo/Richardson 1991 (Schwellenwerte/3 Meter korpus-unbelegt ⚠️); NANDA-I 2021-2023 (`nanda-pflegediagnosen-volltext/`); § 113a SGB XI; § 135a/137a SGB V |
| einträge | 14 |
| erstellt | 2026-06-10 (extrahiert aus bausteine-plan.md, Pipeline v9) |
| grounding | 2026-06-11 Nachbesserung (neue Korpora): 39→52 verifizierte Verbatim-Belege; 9 von 13 ⚠️ aufgelöst; 2 ⚠️ verbleiben (F-04 Donabedian-Jahr 1966, F-09 TUG-Schwellenwerte/3 Meter — kein Korpus-Treffer); Sachkorrektur F-03: Anzahl entschärft auf „mindestens 11", Claim „12" nicht verbatim belegbar |

---

### F-01: Screening vs. Assessment

**Fakt:** Ein Screening ist ein kurzes, breit angelegtes Such-Verfahren mit wenigen Items, das Risiko-Personen identifiziert. Ein Assessment ist die vertiefte, meist standardisierte und punktbewertete Einschätzung bei auffälligen Personen. Erst Screening, dann bei Auffälligkeit das Assessment.

**Prüfungsrelevanz:** hoch
**Wissensart:** Definition
**Bloom-Potential:** 1-2 (Erinnern, Verstehen)
**Primärquelle:** (DNQP Dekubitusprophylaxe 2017/2024; Pflege heute 7. Aufl. Kap. 1.9 Pflegeassessment)
**Beleg:**
- Quelle: `dnqp-standards-index/dekubitusprophylaxe.txt`
- Zitat: "Diese Einschätzung beinhaltet ein initiales Screening sowie eine differenzierte Beurteilung des Dekubitusrisikos, wenn eine Gefährdung im Screening nicht ausgeschlossen werden kann"
**Praxisfehler:** Bei allen Bewohnern sofort ein vollständiges Assessment durchführen statt zuerst zu screenen — zeitlich unmöglich und belastet die Bewohner.

**Misconceptions:**
- `M1`: **"Screening und Assessment sind dasselbe, nur andere Wörter"** — Sie unterscheiden sich in Tiefe und Zweck: Screening filtert breit (wenige Items), Assessment prüft tief (viele Items, standardisiert). Fachbegriff: "Synonym-Irrtum".
- `M2`: **"Ein Assessment macht man nur einmal bei der Aufnahme"** — Assessments werden wiederholt durchgeführt (bei Zustandsänderung oder zu festen Zeitpunkten). Die Pflegeprozess-Phase Evaluation braucht neue Messwerte. Fachbegriff: "Einmal-Messung-Fehler".
- `M3`: **"Ein Screening ist unwichtig, weil es ungenau ist"** — Das Screening ist nicht ungenau, sondern bewusst breit und ökonomisch. Ohne Screening müsste man alle komplett assessen. Fachbegriff: "Ungenauigkeits-Mythos".

---

### F-02: DNQP und nationale Expertenstandards

**Fakt:** Das DNQP (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege, Hochschule Osnabrück) entwickelt seit 1999 nationale Expertenstandards. Sie bilden den aktuellen Stand der Pflegeforschung ab und werden in der Regel alle fünf Jahre überprüft. 1999 beschloss die Gesundheitsministerkonferenz die Entwicklung dieser Pflegestandards.

**Prüfungsrelevanz:** hoch
**Wissensart:** Fakt
**Bloom-Potential:** 1-2 (Erinnern, Verstehen)
**Primärquelle:** (DNQP 2024; Pflege heute 7. Aufl. Kap. 47.7 Qualität und Pflegequalität)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "1999 beschloss die Gesundheitsministerkonferenz (GMK) im Rahmen einer Qualitätsstrategie im Gesundheitswesen u. a. die Entwicklung von ärztlichen Leitlinien und Pflegestandards für zehn wichtige Krankheiten" (belegt: 1999 als Startjahr der nationalen Pflegestandards)
- Zitat: "Sie werden in der Regel alle fünf Jahre überprüft" (belegt: 5-Jahres-Überprüfungszyklus)
- Quelle: `dnqp-standards-index/schmerzmanagement.txt`
- Zitat: "Hochschule Osnabrück" (belegt: institutioneller Sitz/Geschäftsstelle des DNQP — im Original "Geschäftsstelle: … Hochschule Osnabrück ∙ Fakultät für Wirtschafts- und Sozialwissenschaften")
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Deutsche Netzwerk für Qualitätsentwicklung in der Pflege" (belegt: Auflösung des Akronyms DNQP)
**Praxisfehler:** Expertenstandards als unverbindliche Empfehlungen behandeln, von denen man beliebig abweichen darf.

**Misconceptions:**
- `M1`: **"Expertenstandards sind Empfehlungen, die man befolgen kann oder nicht"** — Sie sind verbindliche Grundlage der Leistungserbringung (§ 113a SGB XI / § 135a SGB V, korpusbelegt; Einordnung als "antizipiertes Sachverständigengutachten" jetzt belegt via Gebrauchsanleitung 4. Aufl. 2020, s. F-13). Abweichen nur mit dokumentierter Begründung. Fachbegriff: "Freiwilligkeits-Irrtum".
- `M2`: **"Das DNQP ist eine staatliche Behörde"** — Das DNQP ist kein Amt, sondern ein bundesweiter Zusammenschluss von Pflegefachleuten an der Hochschule Osnabrück, der unabhängig arbeitet. Fachbegriff: "Behörden-Verwechslung".
- `M3`: **"Expertenstandards gelten nur im Krankenhaus"** — Sie gelten in allen Pflege-Settings (Krankenhaus, Altenpflege, ambulant); für die Altenpflege über § 113a SGB XI. Fachbegriff: "Setting-Irrtum".

---

### F-03: Die 12 Expertenstandards und ihre Aktualisierung

**Fakt:** Es gibt mindestens 11 nationale Expertenstandards (Dekubitusprophylaxe, Entlassungsmanagement, Schmerzmanagement bei akuten Schmerzen, Sturzprophylaxe, Förderung der Harnkontinenz, Pflege von Menschen mit chronischen Wunden, Ernährungsmanagement, Schmerzmanagement bei chronischen Schmerzen, Beziehungsgestaltung in der Pflege von Menschen mit Demenz, Erhaltung und Förderung der Mobilität, Förderung der Mundgesundheit; hinzu kommt der Standard Erhaltung und Förderung der Hautintegrität — Gesamtzahl je nach Erscheinungsstand). Jeder Standard stellt das Pflege-Niveau zum genannten Zeitpunkt dar und wird regelmäßig überprüft.

**Prüfungsrelevanz:** hoch
**Wissensart:** Fakt / Übersicht
**Bloom-Potential:** 2 (Verstehen)
**Primärquelle:** (DNQP 2024; Pflege heute 7. Aufl. Kap. 47.7 Nationale Expertenstandards)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Ein Expertenstandard stellt das Niveau der Pflege bezogen auf das jeweilige Thema zum genannten Zeitpunkt dar" (Niveau-/Zeitpunkt-Aussage)
- Zitat: "Bis heute liegen" / "folgende Expertenstandards vor:" (leitet die Liste ein)
- Zitat: "Schmerzmanagement bei akutem und" (Listenpunkt akut/chronisch)
- Zitat: "Ernährungsmanagement zur Sicherung und Förderung der oralen Ernährung in der Pflege" (Listenpunkt)
- Zitat: "Beziehungsgestaltung in der Pflege" (Listenpunkt Demenz)
- Zitat: "Sie werden in der Regel alle fünf Jahre überprüft" (belegt: regelmäßige Aktualisierung der Standards)
- Quelle: `dnqp-standards-index/mundgesundheit.txt`
- Zitat: "Expertenstandards Förderung der Mundgesundheit in der Pflege" (belegt: Standard Mundgesundheit existiert — im Original-Titel "EXPERTENSTANDARD FÖRDERUNG DER MUNDGESUNDHEIT IN DER PFLEGE")
- Quelle: `dnqp-standards-index/hautintegritaet.txt`
- Zitat: "Erhaltung und Förderung der Hautintegrität in der Pflege" (belegt: Standard Hautintegrität existiert — im Original-Titel "EXPERTENSTANDARD ERHALTUNG UND FÖRDERUNG DER HAUTINTEGRITÄT IN DER PFLEGE")
- Quelle: `expertenstandards-gebrauchsanleitung-volltext/expertenstandards-gebrauchsanleitung.txt`
- Zitat: "Das Deutsche Netzwerk für Qualitätsentwicklung in der Pflege DNQP hat bisher folgende Expertenstandards erarbeitet, veröffentlicht und aktualisiert:" (leitet die nummerierte Liste von 11 Standards ein; Stand 4. Aufl. 2020)
- Zitat: "1. Expertenstandard Dekubitusprophylaxe in der Pflege (2. Aktualisierung 2017)"
- Zitat: "2. Expertenstandard Entlassungsmanagement in der Pflege (2. Aktualisierung 2019)"
- Zitat: "3. Expertenstandard Schmerzmanagement in der Pflege bei akuten Schmerzen (1. Aktualisierung 2011)"
- Zitat: "4. Expertenstandard Sturzprophylaxe in der Pflege (1. Aktualisierung 2013)"
- Zitat: "5. Expertenstandard Förderung der Harnkontinenz in der Pflege (1. Aktualisierung 2014)"
- Zitat: "6. Expertenstandard Pflege von Menschen mit chronischen Wunden (1. Aktualisierung 2015)"
- Zitat: "7. Expertenstandard Ernährungsmanagement zur Sicherung und Förderung der oralen Ernährung in der Pflege (1. Aktualisierung 2017)"
- Zitat: "8. Expertenstandard Schmerzmanagement in der Pflege bei chronischen Schmerzen (Mai 2015)"
- Zitat: "9. Expertenstandard Beziehungsgestaltung in der Pflege von Menschen mit Demenz (März 2019)"
- Zitat: "10. Expertenstandard nach § 113a SGB XI Erhaltung und Förderung der Mobilität in der Pflege (Januar 2015)"
- Zitat: "11. Erarbeitet wird 2019 der Expertenstandard Erhaltung und Förderung der Mundgesundheit in der Pflege."
- Hinweis: Hautintegrität als Standard #12 belegt über `dnqp-standards-index/hautintegritaet.txt` (nach Erscheinungsstand 2020er Aufl.), exakte Gesamt-Zahl "12" als Fließtext-Zahl ist im Korpus NICHT verbatim — deshalb Fakt auf "mindestens 11" entschärft.
**Praxisfehler:** Mit einer veralteten Standard-Version arbeiten, ohne die Jahresangabe zu prüfen.

**Misconceptions:**
- `M1`: **"Es gibt für jede Pflegesituation einen Expertenstandard"** — Es gibt nur rund ein Dutzend Standards zu den häufigsten Risiken (Stand 2022: mindestens 11 veröffentlicht). Für viele Situationen (z.B. Sterbebegleitung, Atmung) existiert kein eigener Standard. Fachbegriff: "Vollständigkeits-Irrtum".
- `M2`: **"Expertenstandards werden einmal geschrieben und gelten für immer"** — Sie werden in der Regel alle 3-5 Jahre aktualisiert; die Jahresangabe ist immer wichtig. Fachbegriff: "Aktualisierungs-Mythos".
- `M3`: **"Es gibt einen Expertenstandard für Diabetes oder Herzinfarkt"** — Die DNQP-Standards decken Pflegephänomene ab, nicht Krankheiten. Für Krankheiten gibt es medizinische Leitlinien. Fachbegriff: "Krankheits-Standard-Verwechslung".

---

### F-04: S-P-E-Struktur nach Donabedian

**Fakt:** Jeder Expertenstandard ist nach der S-P-E-Struktur aufgebaut: S = Struktur (Voraussetzungen: Personal, Wissen, Material), P = Prozess (Handeln: Abläufe, Maßnahmen), E = Ergebnis (Zielerreichung). Das Modell geht auf den amerikanischen Mediziner Avedis Donabedian (1919–2000) zurück und ist keine zeitliche Reihenfolge, sondern drei parallele Betrachtungsebenen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Donabedian 1966, Milbank Memorial Fund Quarterly 44(3); Pflege heute 7. Aufl. Kap. 47.7)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "schlägt Donabedian vor, Qualität auf den Ebenen Struktur, Prozess und Ergebnis zu beurteilen" (belegt: S-P-E geht auf Donabedian zurück)
- Quelle: `icare-examen-kompakt-volltext/icare-examen-kompakt.txt`
- Zitat: "unterteilt die Pflegequalität in 3 Kategorien:"
- ⚠️ Jahreszahl 1966 (Milbank Memorial Fund Quarterly) bleibt unbelegt — kein Korpus nennt die Originalarbeit 1966. Lebensdaten (1919–2000) sind belegt. Fakt wurde auf "(1919–2000)" entschärft.
**Praxisfehler:** Nur das Ergebnis betrachten ("Bewohner zufrieden = alles gut") und Struktur- und Prozessqualität vernachlässigen.

**Misconceptions:**
- `M1`: **"S-P-E ist eine zeitliche Reihenfolge: zuerst Struktur, dann Prozess, dann Ergebnis"** — S-P-E ist keine Zeitabfolge, sondern drei parallele Betrachtungsebenen ("three approaches to quality of care"). Fachbegriff: "Zeitabfolge-Irrtum".
- `M2`: **"Die S-P-E-Kriterien werden vom Gesetzgeber vorgeschrieben"** — Die Struktur stammt von Donabedian (amerikanischer Wissenschaftler, 1919–2000); das DNQP nutzt sie freiwillig, weil sie sich bewährt hat. Fachbegriff: "Gesetzes-Verwechslung".
- `M3`: **"Ergebnis-Kriterien messen nur medizinische Outcomes (z.B. Wundheilung)"** — Ergebnis (E) misst pflegerische Zielerreichung, auch organisatorisch ("aktuelle Einschätzung liegt vor") oder beziehungsbezogen. Fachbegriff: "Outcome-Enge".

---

### F-05: Braden-Skala (Dekubitusrisiko)

**Fakt:** Die Braden-Skala (Braden & Bergstrom 1987) erfasst das Dekubitusrisiko über 6 Subskalen (sensorische Wahrnehmung, Hautfeuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte), Gesamtsumme 6-23 Punkte. Je niedriger die Punktzahl, desto höher das Risiko. Der DNQP betont die klinische Einschätzung als primäres Instrument — Skalen ergänzen, ersetzen sie nicht.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Braden & Bergstrom 1987, Rehabilitation Nursing 12(1); DNQP Dekubitusprophylaxe 2017/2024; Pflege heute 7. Aufl. Kap. 1.9 / 6.12)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Skalen können allenfalls im Rahmen der klinischen Einschätzung zur Unterstützung der pflegerischen Beobachtung genutzt werden" (belegt: Skalen ergänzen, ersetzen die klinische Einschätzung nicht)
- Quelle: `expertenstandards-gebrauchsanleitung-volltext/expertenstandards-gebrauchsanleitung.txt`
- Zitat: "Sensorisches Empfindungsvermögen" (Spaltenüberschrift Subskala 1 in Anhang 2 Braden Skala)
- Zitat: "Feuchtigkeit" (Subskala 2)
- Zitat: "Fähigkeit, die Position zu wechseln oder zu halten" (Subskala 3 Mobilität — Beschreibungszeile unter Spaltenüberschrift)
- Zitat: "Ausmaß der physischen Aktivität" (Subskala 4 Aktivität — Beschreibungszeile)
- Zitat: "Ernährungsgewohnheiten" (Subskala 5 Ernährung — Beschreibungszeile)
- Zitat: "Reibung und Scherkräfte" (Subskala 6)
- Zitat: "geringes Risiko = 16 bis 15 P" (belegt: Risikobewertungs-Tabelle; min 6 Punkte ergibt sich aus 6 Subskalen × min 1 Punkt je; max 23 aus 5 × 4 + Reibung max 3)
- Zitat: "sehr hohes Risiko = <9 P" (belegt: untere Grenze Risikobewertung)
- Hinweis: Die Spanne "6-23" ist aus der Tabelle ableitbar (Reibung/Scherkräfte hat nur 3 Stufen: 1-3; die anderen 5 haben je 4 Stufen: 1-4; Summe max = 5×4+3 = 23, min = 6). Im Fließtext steht diese Spanne nicht verbatim — bei zitat-verifizierer die kürzesten Phrasen verwenden.
**Praxisfehler:** Sich "blind" auf das Skalen-Ergebnis verlassen, statt die klinische Einschätzung führen zu lassen.

**Misconceptions:**
- `M1`: **"Hohe Braden-Punktzahl bedeutet hohes Dekubitus-Risiko"** — Bei Braden ist es umgekehrt: niedrige Punktzahl (6) = hohes Risiko, hohe Punktzahl (23) = praktisch kein Risiko. Fachbegriff: "Punktzahl-Umkehrungs-Fehler".
- `M2`: **"Die Braden-Skala ist die einzige DNQP-empfohlene Skala"** — Der DNQP sieht die klinische Einschätzung als primäres Instrument; auch Norton- oder Waterlow-Skala sind verbreitet. Fachbegriff: "Exklusivitäts-Irrtum".
- `M3`: **"Die Braden-Skala sagt dir auch, welche Prophylaxe-Maßnahmen du machen musst"** — Braden beschreibt nur das Risiko; die Maßnahmen stehen im Expertenstandard. Fachbegriff: "Assessment-Maßnahmen-Verwechslung".

---

### F-06: Barthel-Index (Selbstständigkeit/ADL)

**Fakt:** Der Barthel-Index (Mahoney & Barthel 1965) misst die körperliche Selbstständigkeit bei 10 Alltagsaktivitäten (ADL: Essen, Baden, Körperpflege, Ankleiden, Stuhl-/Harnkontrolle, WC, Transfer, Gehen, Treppensteigen). Punkteskala 0-100; je höher, desto selbstständiger. Er misst die tatsächliche Leistung, nicht die theoretische Fähigkeit, und sagt nichts über die Ursache der Einschränkung.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Mahoney & Barthel 1965, Maryland State Medical Journal 14; Pflege heute 7. Aufl. Kap. 1.9 / 17.5.1)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Der Barthel-Index ist ein Instrument mit 10 Items zur Erfassung der Selbstständigkeit bei grundlegenden Alltagsaktivitäten" (belegt: 10 ADL-Items, körperliche Selbstständigkeit)
- Zitat: "die eine Gesamtsumme (max. 100 Punkte) ergeben. 100 Punkte drücken weitgehende Selbstständigkeit des Patienten bei den Verrichtungen aus. Je geringer die Punktzahl ist, desto höher ist die bestehende Abhängigkeit von Hilfe und Versorgung" (belegt: Spanne max. 100, je höher = selbstständiger / je niedriger = abhängiger)
- Quelle: `expertenstandards-gebrauchsanleitung-volltext/expertenstandards-gebrauchsanleitung.txt`
- Zitat: "Der maximal erreichbare Scorewert beträgt 100 Punkte." (belegt: Obergrenze 100; Untergrenze 0 folgt aus Minimum aller Items = je 0)
- Zitat: "Selbstständig, benötigt keine Hilfe" (Höchstwert je Item; belegte Formulierung aus Anhang 6 Barthel-Tabelle)
- Zitat: "Unfähig, allein zu essen" (Item 1 Essen — Niedrigstwert-Formulierung)
- Zitat: "Abhängig von fremder Hilfe" (Item 2 Baden — Niedrigstwert-Formulierung)
- Zitat: "Körperpflege (Rasieren, Kämmen, Zähneputzen)" (Item 3)
- Zitat: "An- und Auskleiden" (Item 4)
- Zitat: "Stuhlkontrolle" (Item 5)
- Zitat: "Urinkontrolle" (Item 6)
- Zitat: "Toilettenbenutzung" (Item 7)
- Zitat: "Bett- bzw. Stuhltransfer" (Item 8)
- Zitat: "Immobil bzw. Strecke < 50 m" (Item 9 Mobilität — Niedrigstwert-Formulierung)
- Zitat: "Treppensteigen" (Item 10)
**Praxisfehler:** Eine niedrige Barthel-Punktzahl als geistige Behinderung fehldeuten, statt sie ursachen-neutral als Hilfebedarf zu lesen.

**Misconceptions:**
- `M1`: **"Der Barthel-Index misst die geistigen Fähigkeiten (Kognition)"** — Barthel misst körperliche Selbstständigkeit (ADL); für Kognition nutzt man MMST oder DemTect. Fachbegriff: "Kognitions-Verwechslung".
- `M2`: **"Eine niedrige Barthel-Punktzahl bedeutet geistige Behinderung"** — Der Barthel sagt nur, wie viel Hilfe jemand braucht, nicht warum; er ist ursachen-neutral. Fachbegriff: "Behinderungs-Ursache-Verwechslung".
- `M3`: **"Barthel-Index und Pflegegrad (SGB XI) sind dasselbe"** — Der Pflegegrad nutzt das NBA (§ 15 SGB XI) mit 6 Modulen; Barthel misst nur 10 ADL-Items. Fachbegriff: "Pflegegrad-Verwechslung".

---

### F-07: NRS-Schmerzskala

**Fakt:** Die NRS (Numerische Rating-/Rangskala) ist die Standard-Schmerzskala: Der Patient ordnet seinen Schmerz einer Zahl von 0 bis 10 zu (0 = kein Schmerz, 10 = stärkster vorstellbarer Schmerz). Einfach, schnell, vergleichbar, auch telefonisch nutzbar, empfohlen ab Schulalter. Alternativen: VAS, Smiley-/Gesichter-Skala (Kinder), BESD (schwere Demenz).

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 2 (Verstehen)
**Primärquelle:** (DNQP Schmerzmanagement akut 2011 / chronisch 2015; Pflege heute 7. Aufl. Kap. 13 Pflege bei Schmerzen)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "ordnet der Patient seine Schmerzen einer Zahl zwischen 0 und 10 zu, wobei 0 für „kein Schmerz“ und 10 für „stärkster vorstellbarer Schmerz“ steht" (belegt: NRS-Spanne 0-10 mit Polen)
- Zitat: "Visuelle Analogskala (VAS): Einzeichnen der Schmerzintensität auf einer Linie" (belegt: Alternative VAS)
- Zitat: "Gesichterskala: Angabe der Schmerzintensität durch Ankreuzen von Gesichtsausdrücken" (belegt: Alternative Gesichter-/Smiley-Skala für Kinder)
- Zitat: "Beurteilung von Schmerzen bei Demenz (BESD)" (belegt: Fremdeinschätzungs-Instrument BESD bei Demenz)
**Praxisfehler:** Annehmen, bei nicht sprechfähigen Patienten könne man Schmerz nicht messen — dafür gibt es Beobachtungsinstrumente wie BESD.

**Misconceptions:**
- `M1`: **"Wenn der Patient nicht sprechen kann, kann man Schmerzen nicht messen"** — Für nicht kommunikationsfähige Patienten gibt es Fremdeinschätzungs-Instrumente wie BESD. Fachbegriff: "Kommunikations-Pessimismus".
- `M2`: **"Eine Schmerzskala reicht für alle Patientengruppen"** — Skalenwahl ist altersabhängig: NRS für Erwachsene, Gesichter-Skala für Kinder, BESD bei schwerer Demenz. Fachbegriff: "Universal-Skala-Irrtum".
- `M3`: **"Die NRS-Zahl ist objektiv messbar wie Fieber"** — Schmerz ist subjektiv; die NRS bildet das Schmerzerleben des Patienten ab, kein objektiver Messwert. Fachbegriff: "Objektivitäts-Verwechslung".

---

### F-08: MNA (Mangelernährung)

**Fakt:** Das MNA (Mini Nutritional Assessment, Guigoz 1994) ist das Standard-Instrument zur Früherkennung von Mangelernährung bei älteren Menschen. Zweistufig: MNA-SF (Short Form, 0-14 Punkte) als Screening, bei Auffälligkeit (≤11 Punkte) das volle MNA (0-30 Punkte). Teil des DNQP-Expertenstandards Ernährungsmanagement.

**Prüfungsrelevanz:** mittel
**Wissensart:** Assessment
**Bloom-Potential:** 2 (Verstehen)
**Primärquelle:** (Guigoz 1994, Facts and Research in Gerontology; DNQP Ernährungsmanagement 2017; Pflege heute 7. Aufl. Kap. 1.9 / 7.2)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Die Expertenstandards in der Pflege empfehlen z. B. das Mini Nutritional Assessment (MNA) zur Einschätzung des Risikos einer Unterernährung" (belegt: MNA als Standard-/Expertenstandard-empfohlenes Instrument für Mangelernährung)
- Zitat: "Mini Nutritional Assessment short form (MNA-SF) für geriatrische Einrichtungen" (belegt: Kurzform MNA-SF, Einsatz im geriatrischen/älteren Kontext)
- Quelle: `expertenstandards-gebrauchsanleitung-volltext/expertenstandards-gebrauchsanleitung.txt`
- Zitat: "Wenn der Wert 11 oder kleiner 11 ist, fahren Sie mit der Anamnese fort, um den Gesamt-Index zu erhalten." (belegt: Cut-off ≤11 für Übergang von Screening zum vollen MNA)
- Zitat: "11 Punkte oder weniger: Gefahr der Mangelernährung" (belegt: Cut-off Risikogrenze Vorauswertung)
- Zitat: "Ergebnis der Vor-Anamnese (max. 14 Punkte)" (belegt: MNA-SF Spanne 0-14)
- Zitat: "Gesamt-Index (max. 30 Punkte)" (belegt: volles MNA Spanne 0-30)
- Zitat: "Ernährungszustandes älterer Menschen" (belegt: Zielgruppe ältere Menschen; "ab 65 J." explizit steht nicht im Korpus — Fakt entschärft auf "bei älteren Menschen")
- Zitat: "Guigoz Y, Vellas B and Garry PJ. 1994. Mini Nutritional Assessment:A practical assessment tool for" (belegt: Guigoz 1994 als Originalreferenz — Literaturangabe im MNA-Anhang)
**Praxisfehler:** Mangelernährung allein am BMI festmachen und den ungewollten Gewichtsverlust als wichtigsten Indikator übersehen.

**Misconceptions:**
- `M1`: **"Mangelernährung erkennt man nur am BMI"** — Das MNA fragt auch nach ungewolltem Gewichtsverlust (wichtigster Indikator), Appetit, Mobilität und akuten Erkrankungen; ein normaler BMI schließt Mangelernährung nicht aus. Fachbegriff: "BMI-Fokus-Fehler".
- `M2`: **"Das MNA-SF reicht immer — das lange MNA braucht man nie"** — Das MNA-SF ist ein Screening; bei auffälligem Ergebnis folgt das vollständige MNA. Fachbegriff: "Screening-Sufficienz-Fehler".
- `M3`: **"Bei übergewichtigen Patienten gibt es keine Mangelernährung"** — Auch Übergewichtige können qualitativ mangelernährt sein (zu wenig Protein/Vitamine) oder eine Sarkopenie entwickeln. Fachbegriff: "Adipositas-Ausschluss-Mythos".

---

### F-09: Timed-Up-and-Go-Test (Mobilität/Sturzrisiko)

**Fakt:** Der Timed-Up-and-Go-Test (TUG, Podsiadlo & Richardson 1991) ist ein Mobilitäts- und Sturzrisiko-Test: Der Patient steht aus dem Stuhl auf, geht 3 Meter, dreht um, geht zurück und setzt sich; die Zeit wird gemessen. Orientierung: <10 Sek. normal, ≥20 Sek. erhöhte Sturzgefahr, ≥30 Sek. stark eingeschränkt. Hilfsmittel sind erlaubt und werden dokumentiert.

**Prüfungsrelevanz:** mittel
**Wissensart:** Assessment
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Podsiadlo & Richardson 1991, JAGS 39(2); DNQP Sturzprophylaxe 2022; Pflege heute 7. Aufl. Kap. 19 Geriatrie)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Timed Up & Go-Test (Mobilität)" (belegt nur Existenz/Zweck des Instruments)
- ⚠️ Schwellenwerte (<10 / ≥20 / ≥30 Sek.), Strecke "3 Meter" und Ablauf (Aufstehen → Gehen → Umdrehen → Setzen) sind in KEINEM der verfügbaren Korpora verbatim belegt (geprüft: Pflege heute, Gebrauchsanleitung, I Care Examen Kompakt, Prüfungswissen, DNQP Sturzprophylaxe). Originalarbeit Podsiadlo & Richardson 1991 (JAGS 39(2)) nicht im Korpus. Detailwerte in Bausteinens NICHT als belegte Fakten verwenden; nur belegbare Aussage: "Timed Up & Go-Test (Mobilität)" (Pflege heute) und "Timed-Up-and-Go-Test TUG erwähnenswert, da er bereits im Rahmen des Expertenstandards Sturzprophylaxe eine Rolle spielte" (Gebrauchsanleitung).
**Praxisfehler:** Beim TUG nur die Zeit stoppen und die Bewegungsqualität (Unsicherheit, Abstützen, Gleichgewichtsverlust) ignorieren.

**Misconceptions:**
- `M1`: **"Beim TUG zählt nur die Geschwindigkeit — wer schnell ist, ist sicher"** — Neben der Zeit zählt die Bewegungsqualität; eine gute Zeit mit unsicherer Bewegung ist trotzdem auffällig. Fachbegriff: "Geschwindigkeits-Fokus-Fehler".
- `M2`: **"Den TUG kann man nur mit Stoppuhr-App machen"** — Jede Stoppuhr genügt; entscheidend ist der einheitliche Start ("Los") und Stopp (Hinsetzen). Fachbegriff: "Technik-Abhängigkeits-Mythos".
- `M3`: **"Wer beim TUG Hilfsmittel braucht (Rollator), darf den Test nicht machen"** — Hilfsmittel sind ausdrücklich erlaubt und werden dokumentiert; Ziel ist die Alltags-Einschätzung. Fachbegriff: "Hilfsmittel-Ausschluss-Fehler".

---

### F-10: Assessmentauswahl im Pflegeprozess

**Fakt:** Die Assessment-Wahl folgt dem Pflegeprozess: zuerst Informationen sammeln, dann gezielt die passenden Assessments durchführen (Braden → Dekubitus, Barthel → Selbstständigkeit, NRS → Schmerz, MNA → Ernährung, TUG → Sturz/Mobilität). Bei mehreren Problemen werden die 3-4 relevantesten priorisiert — nicht alle auf einmal, da das den Patienten überfordert.

**Prüfungsrelevanz:** hoch
**Wissensart:** Entscheidung
**Bloom-Potential:** 4 (Analysieren)
**Primärquelle:** (DNQP 2024; Fiechter/Meier 1981 Pflegeprozess; Pflege heute 7. Aufl. Kap. 1.9.6 Auswahl von Assessmentinstrumenten)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Instrumente sollten unaufdringlich sein und zum Zustand des Patienten passen"
**Praxisfehler:** Bei Neuaufnahmen "sicherheitshalber" alle verfügbaren Assessments durchführen und Patient wie Pflegekraft überlasten.

**Misconceptions:**
- `M1`: **"Bei neuen Bewohnern macht man sicherheitshalber alle verfügbaren Assessments"** — Zu viele Assessments belasten Bewohner und Pflegekraft; gezielt die wichtigsten Risiken priorisieren. Fachbegriff: "Assessment-Überladung".
- `M2`: **"Man macht erst die Assessments, dann sammelt man Informationen"** — Der Pflegeprozess beginnt mit Information sammeln; erst dann weiß man, welche Assessments sinnvoll sind. Fachbegriff: "Pflegeprozess-Umkehrung".
- `M3`: **"Wenn ein Assessment normal ausfällt, braucht man es nicht zu wiederholen"** — Zustände verändern sich; der DNQP fordert regelmäßige Wiederholung (z.B. 14-tägig oder bei Zustandsänderung). Fachbegriff: "Einmal-Normal-Fehler".

---

### F-11: Klassifikationssysteme (NANDA-I, NIC, NOC, ICNP, ENP)

**Fakt:** Klassifikationssysteme sind einheitliche Pflege-Fachsprachen: NANDA-I (Pflegediagnosen, seit 1982), NIC (Interventionen/Maßnahmen), NOC (Outcomes/Ergebnisse), ICNP (internationale Terminologie des ICN), ENP (European Nursing care Pathways). Sie machen Pflege vergleichbar, dokumentierbar und forschbar. In Deutschland ist kein System gesetzlich vorgeschrieben — die Einrichtung wählt selbst.

**Prüfungsrelevanz:** mittel
**Wissensart:** Fakt
**Bloom-Potential:** 2 (Verstehen)
**Primärquelle:** (NANDA International 2021-2023; ICN 2021; Pflege heute 7. Aufl. Kap. 1.8.1 NANDA-Pflegediagnosen)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "North American Nursing Diagnosis Association" (belegt: Auflösung des Akronyms NANDA)
- Zitat: "Organisation in Nordamerika, die sich mit der" (NANDA-I = Pflegediagnosen)
- Zitat: "Ergebnisqualität beschreiben, z. B. NOC" (NOC = Outcomes/Ergebnisse)
- Zitat: "ICNP® (International Classification" / "als Internationale Klassifikation für die Pflegepraxis (International Classification for" (ICNP = internationale Terminologie des ICN)
- Zitat: "ENP (European Nursing Care Pathways)" (ENP)
- Quelle: `nanda-pflegediagnosen-volltext/nanda-pflegediagnosen.txt`
- Zitat: "NANDA International wurde 1982 als North American Nursing Diagnosis Association (Nordamerikanische Pflegediagnosenvereinigung) gegründet." (belegt: NANDA-I seit 1982)
- Zitat: "Pflegeterminologie (z. B. Pflegeergebnisklassifikation [NOC], Pflegeinterventionsklassifikation [NIC]) für jede Diagnose erforderlich." (belegt: NIC = Pflegeinterventionsklassifikation)
- Zitat: "Die Klassifikation der Pflegeinterventionen (NIC) ist eine Taxonomie von Interventionen, die Pflegefachpersonen in verschiedenen Pflege-Settings anwenden können." (belegt: NIC-Definition)
- Zitat: "Dafür gibt es (in den USA) keine gesetzlichen Vorgaben." (belegt: kein Klassifikationssystem gesetzlich vorgeschrieben; Kontext USA, gilt analog für Deutschland — keine NANDA-Pflicht bekannt)
- Hinweis: "In Deutschland kein System vorgeschrieben" ist aus dem NANDA-Buch nur für USA explizit belegt; für DE-spezifische Rechtsquelle ggf. DPR-Stellungnahme suchen.
**Praxisfehler:** Pflegediagnosen mit medizinischen Diagnosen gleichsetzen und so pflegerelevante Probleme nicht eigenständig erfassen.

**Misconceptions:**
- `M1`: **"NANDA-I ist in Deutschland gesetzlich vorgeschrieben"** — In Deutschland ist kein Klassifikationssystem Pflicht; Einheitlichkeit muss nur innerhalb der Einrichtung bestehen. Fachbegriff: "Rechts-Pflicht-Fehler".
- `M2`: **"Pflegediagnosen und medizinische Diagnosen sind dasselbe"** — Medizinische Diagnosen beschreiben Krankheiten, Pflegediagnosen pflegerelevante Probleme/Reaktionen; ein Schlaganfall löst viele Pflegediagnosen aus. Fachbegriff: "Diagnose-Verwechslung".
- `M3`: **"NIC und NOC sind Teile von NANDA-I"** — NANDA-I, NIC und NOC sind drei eigenständige Systeme, oft als "NNN-Verbindung" zusammen genutzt. Fachbegriff: "System-Verschmelzung".

---

### F-12: Die 6 Standardkriterien je Expertenstandard

**Fakt:** Alle DNQP-Expertenstandards sind nach demselben Muster aus 6 Standardkriterien aufgebaut, jedes mit S-P-E (Struktur/Prozess/Ergebnis): (1) Risikoerhebung/Assessment, (2) Voraussetzungen/Verfahrensregelung, (3) Maßnahmenplanung, (4) Durchführung, (5) Information/Beratung/Schulung/Anleitung, (6) Evaluation. Die Reihenfolge folgt dem Pflegeprozess — keine Lücke von Risiko bis Erfolg.

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept
**Bloom-Potential:** 4 (Analysieren)
**Primärquelle:** (DNQP 2024; Donabedian 1966; Pflege heute 7. Aufl. Kap. 47.7)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "findet breite Anwendung im Gesundheitswesen, zum Beispiel auch beim Aufbau der Expertenstandards" (Donabedian-S-P-E im Standard-Aufbau)
- Quelle: `dnqp-standards-index/dekubitusprophylaxe.txt`
- Zitat: "Strukturkriterien" / "Prozesskriterien" / "Ergebniskriterien" (S-P-E-Spalten je Kriterium)
- Beleg für 6 Kriterien-Ebenen: Standard ist durchnummeriert S1–S6 / P1–P6 / E1–E6 (im DNQP-Original verifizierbar: "S6a"/"P6"/"E6a" vorhanden) → 6 Standardkriterien je Expertenstandard.
- Zitat: "Eine aktuelle, systematische Einschätzung des individuellen Dekubitusrisikos" (Kriterium 1 = Risikoerhebung/Assessment)
- Zitat: "Die Pflegefachkraft verfügt über die Kompetenz, die Effektivität der pro" (Kriterium 6 = Evaluation)
- Quelle: `expertenstandards-gebrauchsanleitung-volltext/expertenstandards-gebrauchsanleitung.txt`
- Zitat: "S1 Risikoerhebung, Screening, Assessment, erforderliche Kompetenz der PFK" (Standardkriterium 1 — Tabellenkopf)
- Zitat: "S2 Voraussetzungen in der Einrichtung, Verfahrensregel" (Standardkriterium 2)
- Zitat: "S3 Planung von Maßnahmen" (Standardkriterium 3)
- Zitat: "S4 Durchführung von Maßnahmen" (Standardkriterium 4)
- Zitat: "S5 Information, Anleitung, Schulung und Beratung" (Standardkriterium 5)
- Zitat: "S6 Evaluation" (Standardkriterium 6)
- Hinweis: Vorstehende Zitate sind die S-Spalten der Grundstruktur-Tabelle aus Kap. 1 (Gebrauchsanleitung). Im Content dürfen die Kurz-Labels (1) Risikoerhebung … (6) Evaluation als Paraphrase verwendet werden; sie dürfen jedoch NICHT als wörtliche Zitate aus diesem Dokument ausgegeben werden.
**Praxisfehler:** Kriterium 5 (Information/Beratung) als optional behandeln, obwohl es Kernaufgabe (§ 4 PflBG) ist und über die Compliance des Patienten entscheidet.

**Misconceptions:**
- `M1`: **"Die Reihenfolge der 6 Kriterien ist egal — alles parallel"** — Die Reihenfolge ist systematisch und entspricht dem Pflegeprozess (ohne Assessment keine Planung, ohne Evaluation kein Lernen). Fachbegriff: "Reihenfolge-Egal-Fehler".
- `M2`: **"Kriterium 5 (Information/Beratung) ist optional"** — Information und Beratung sind Kernaufgaben (§ 4 PflBG); ohne Einbeziehung des Patienten scheitern Maßnahmen oft. Fachbegriff: "Info-Nebensache-Mythos".
- `M3`: **"Kriterium 2 (Voraussetzungen) ist nur Aufgabe der Leitung, nicht der PFK"** — Die Leitung trägt Organisationsverantwortung, die PFK muss Mängel (fehlendes Material, unklare Verfahren) melden. Fachbegriff: "Verantwortungs-Trennungsfehler".

---

### F-13: Juristische Bedeutung der Expertenstandards

**Fakt:** Expertenstandards gelten in der Rechtsprechung als "antizipiertes Sachverständigengutachten" und sind verbindliche Grundlage für die pflegerische Leistungserbringung (§ 135a/137a SGB V, § 113a SGB XI Altenpflege). Abweichung ohne dokumentierte Begründung gilt als Fahrlässigkeit; im Schadensfall greift die Beweislastumkehr. Verantwortungsebenen: PFK = Durchführungsverantwortung, Leitung = Organisationsverantwortung.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Recht / Komplikation
**Bloom-Potential:** 5 (Bewerten)
**Primärquelle:** (DNQP 2024; § 113a SGB XI; § 135a/137a SGB V; § 222/§ 229 StGB; Pflege heute 7. Aufl. Kap. 47.7.3)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Dies betrifft auch die Expertenstandards, die – für ihren jeweiligen Bereich – den gegenwärtigen Stand des Wissens darstellen und somit verbindliche Grundlage für die pflegerische Leistungserbringung sind" (belegt: verbindliche Grundlage)
- Zitat: "Expertenstandards sind verbindliche Grundlage der Leistungserbringung im SGB XI (§ 113a)" (belegt: Rechtsnorm § 113a SGB XI für Altenpflege)
- Zitat: "Verpflichtung der Leistungserbringer zur Qualitätssicherung (§§ 135a, 137, 137a SGB V)" (belegt: Rechtsnormen § 135a/137a SGB V)
- Zitat: "Eine mangelhafte Pflegedokumentation kann jedoch zur Beweislastumkehr führen" (belegt: Beweislastumkehr — im Korpus an die Pflegedokumentation gekoppelt, nicht explizit an die Standard-Abweichung)
- Quelle: `expertenstandards-gebrauchsanleitung-volltext/expertenstandards-gebrauchsanleitung.txt`
- Zitat: "Expertenstandards gelten deshalb als ein antizipiertes, also vorweggenommenes Sachverständigengutachten." (belegt: juristische Einordnung als antizipiertes Sachverständigengutachten)
- Zitat: "Dadurch entsteht eine strafrechtliche und zivilrechtliche Wertigkeit der Expertenstandards, deren Nichtbeachtung oder Nichtumsetzung aus haftungsrechtlicher Sicht in jedem Fall eine Fahrlässigkeit und folglich ein Verschulden darstellt." (belegt: Fahrlässigkeit/Verschulden bei Nichtbeachtung)
- Zitat: "Dabei trägt die Pflegefachkraft die Durchführungsverantwortung, Pflegedienstleitung und Einrichtungsleitung übernehmen die Organisationsverantwortung und somit die Haupthaftungsverantwortung für die korrekte Umsetzung der in den Expertenstandards geforderten Inhalte." (belegt: Durchführungs- vs. Organisationsverantwortung)
- Zitat: "Im Schadensfall kann es dadurch zur Beweislasterleichterung oder -umkehr kommen, wobei die Pflegeeinrichtung anhand der Dokumentationen beweisen muss, dass eine korrekte Leistungserbringung erfolgte." (belegt: Beweislastumkehr im Schadensfall)
**Praxisfehler:** Von einem Standard abweichen (z.B. weil der Patient ablehnt) ohne Aufklärung und Dokumentation — dann entfällt die Entlastung.

**Misconceptions:**
- `M1`: **"Wenn ein Patient etwas ablehnt, bist du automatisch aus der Verantwortung"** — Ablehnung entlastet nur bei dokumentierter Aufklärung (Folgen, Alternativen) und geprüfter Einwilligungsfähigkeit. Fachbegriff: "Ablehnungs-Exkulpations-Fehler".
- `M2`: **"Die Pflegefachkraft haftet immer — die Leitung nie"** — Es gibt zwei Ebenen: Durchführungsverantwortung (PFK) und Organisationsverantwortung (Leitung); beide können getrennt oder zusammen haften. Fachbegriff: "Einzel-Haftungs-Fehler".
- `M3`: **"Wer einen Standard nicht kennt, kann nicht haften"** — Unkenntnis schützt nicht; examinierte PFK müssen die Standards kennen (Fortbildungspflicht), die Einrichtung muss schulen. Fachbegriff: "Unkenntnis-Schutz-Mythos".

---

### F-14: Grenzen standardisierter Assessments

**Fakt:** Standardisierte Assessments sind Momentaufnahmen mit Grenzen: Interrater-Unterschiede, sprachlich-kulturelle Prägung (viele Skalen aus USA/UK) und das Risiko der Skala-Gläubigkeit. Der DNQP (Dekubitusprophylaxe 2017/2024) sieht die klinische Einschätzung der Pflegefachkraft als primäres Instrument; Skalen ergänzen, ersetzen sie nicht. Bei Abweichung von Skala und Einschätzung: beides dokumentieren und vorsichtig planen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Entscheidung
**Bloom-Potential:** 5 (Bewerten)
**Primärquelle:** (DNQP Dekubitusprophylaxe 2017/2024; Benner 1984 From Novice to Expert; Pflege heute 7. Aufl. Kap. 1.9 Pflegeassessment)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Eine Einschätzung mit einem Assessmentinstrument kann eine Einschätzung durch professionelle Pflegende nicht ersetzen"
**Praxisfehler:** Sich auf eine unauffällige Skala verlassen, obwohl das klinische Bild (Bauchgefühl) ein Risiko anzeigt, ohne beides zu dokumentieren.

**Misconceptions:**
- `M1`: **"Wenn die Skala 'kein Risiko' zeigt, reicht das aus — Bauchgefühl ist unwissenschaftlich"** — Klinische Intuition ist nicht unwissenschaftlich (Benner 1984); der DNQP nennt die klinische Einschätzung primäres Instrument. Fachbegriff: "Intuitions-Abwertung".
- `M2`: **"Skalen sind objektiv, deshalb immer besser als Meinungen"** — Skalen wirken objektiv, aber die Einstufung ist subjektiv (Interrater-Reliabilität oft nur moderat). Fachbegriff: "Objektivitäts-Mythos".
- `M3`: **"Man sollte nur in Deutschland entwickelte Assessments benutzen"** — Entscheidend ist die Validierung im deutschen Kontext, nicht die Herkunft; Braden, Barthel, NRS sind international entwickelt und hier geprüft. Fachbegriff: "Nationalismus-Wissenschaft-Fehler".
