# Kernfakten: Harnausscheidung & Inkontinenz

| Feld | Wert |
|------|------|
| themaId | `harnausscheidung` |
| ceId | `ce-02` |
| cluster | E (Ausscheidung) |
| geschätzteUE | 10 |
| wissensart | handlung |
| quellen | DNQP Expertenstandard Kontinenzförderung in der Pflege (Aktual. 2024); Pflege heute Kap. 8 Ausscheidung + Kap. 33 Harnsystem; ICS 2023 |
| einträge | 16 |
| erstellt | 2026-06-10 (Dozentin A, quellengebunden aus bausteine-plan.md) |
| grounding | 2026-06-11 (Dozentin A — auf STÜTZT gehoben gegen QUALITAETSSTANDARD-GROUNDING R1–R3; alle 16 Fakten pro Teilaussage verifiziert, ✅ MATCH eingetragen; F-13 Profil-Namen korrigiert; 3 ungedeckte Teilaussagen markiert/entfernt) |

---

### F-01: Urin-Normalwerte beim Erwachsenen

**Fakt:** Ein gesunder Erwachsener scheidet pro Tag etwa 1,5–2 Liter Urin aus (Menge pro Miktion 200–400 ml, Frequenz 4–6×/Tag). Der Farbstoff sind die Urochrome (natürliche gelbe Harnfarbstoffe); der normale pH-Wert des Urins liegt bei 5–6 (leicht sauer). Diese Werte prüft die Pflege bei jeder Schicht mit bloßem Auge bzw. per Teststreifen (Harndichte).

**Prüfungsrelevanz:** hoch
**Wissensart:** Fakt
**Bloom-Potential:** 1-2 (Erinnern, Verstehen)
**Primärquelle:** (Pflege heute Kap. 8 / Kap. 33)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Menge pro Tag: 1,5–2 l" — Tagesmenge (Spickzettel „Normalwerte der Miktion und Urinmenge") ✅ MATCH
- Zitat: "Menge pro Miktion: 200–400 ml • Häufigkeit (Frequenz): 4-bis 6-mal pro Tag" — Miktionsmenge/Frequenz ✅ MATCH
- Zitat: "Urochrome = natürliche gelbe Harnfarbstoffe" — Farbstoff ✅ MATCH
- Zitat: "Der normale pH-Wert des Urins liegt bei 5–6" — pH ✅ MATCH
- ⚠️ Entfernt (nicht im Korpus belegbar): „klar und strohgelb", „leicht aromatisch", „spezifisches Gewicht 1010–1025 g/l". Im Pflege-heute-Volltext kein Beleg für strohgelb/aromatisch (nur „strohgelbe Haut" = Ikterus, kein Urin) und keine numerische Harndichte 1010–1025 für Urin. Teststreifen erfassen die Harndichte qualitativ. ⚠️ Quelle beschaffen (Labormedizin / DIN-Referenz Urin-Dichte 1.001–1.040, Normwert ~1.010–1.025), falls die numerische Spanne wieder aufgenommen werden soll.
**Praxisfehler:** Urinbeurteilung wird übersprungen, obwohl sie kostenlos und täglich verfügbar ist — der Blick in die Toilette ist ein vollwertiges Assessment.

**Misconceptions:**
- `M1`: **"Eine Tagesmenge von 800 ml ist normal"** — 800 ml liegen bereits an der Grenze zur Oligurie; normal sind 1,5–2 L. Fachbegriff: "Oligurie-Verkennung".
- `M2`: **"Dunkelgelber Morgenurin ist immer krankhaft"** — der erste Morgenurin ist bei Gesunden physiologisch konzentriert (nachts kein Trinken). Erst durchgehend dunkler Urin ist auffällig.
- `M3`: **"Der pH-Wert von Urin ist wie beim Blut 7"** — Urin ist leicht sauer (pH 5–6), Blut neutral (7,35–7,45). Fachbegriff: "pH-Verwechslung".

---

### F-02: Pathologische Urinmengen — Oligurie, Anurie, Polyurie

**Fakt:** Drei Mengenstörungen müssen sicher unterschieden werden: Oligurie (100–500 ml/24h), Anurie (unter 100 ml/24h — Notfall) und Polyurie (über 3000 ml/24h). Polyurie mit Polydipsie ist ein Hinweis auf Diabetes mellitus. Als Pflegende führt man die Bilanz und bemerkt die Abweichung zuerst.

**Prüfungsrelevanz:** hoch
**Wissensart:** Fakt
**Bloom-Potential:** 2 (Verstehen)
**Primärquelle:** (Pflege heute Kap. 33)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Polyurie > 3.000 ml/24 Std." — Polyurie ✅ MATCH
- Zitat: "Oligurie 100–500 ml/24 Std." — Oligurie ✅ MATCH
- Zitat: "Anurie < 100 ml/24 Std." — Anurie ✅ MATCH
- Zitat: "Leitsymptome Appetitlosigkeit, Polyurie, Polydipsie. Dehydratation durch osmotische Diurese (massive Glukosurie)" — Polyurie+Polydipsie bei Diabetes/hyperglykämischem Koma (NICHT die hyperkalzämische Krise) ✅ MATCH
**Praxisfehler:** Reduzierte Ausscheidung wird als "trinkt halt wenig" abgetan, statt Exsikkose, Niereninsuffizienz oder Schock auszuschließen.

**Misconceptions:**
- `M1`: **"Oligurie und Anurie bedeuten dasselbe"** — Oligurie = wenig (100–500 ml), Anurie = (fast) nichts (<100 ml). Anurie ist absoluter Notfall. Fachbegriff: "Mengen-Gleichsetzung".
- `M2`: **"Polyurie heißt nur, der Patient trinkt zu viel"** — Polyurie ist meist krankhaft (Diabetes mellitus, Diabetes insipidus, Diuretika); bei Polyurie immer Blutzucker messen.
- `M3`: **"Ein Patient mit Harnverhalt hat Anurie"** — bei Anurie produziert die Niere keinen Urin, bei Harnverhalt produziert sie normal, der Urin kann nur nicht raus. Fachbegriff: "Produktions-Abfluss-Verwechslung".

---

### F-03: Urinfarbe und -geruch als Assessment

**Fakt:** Farbe und Geruch sind ein kostenloses Pflege-Assessment. Rötlich-fleischfarbener, trüber Urin spricht für eine Makrohämaturie (Blut im Urin, z. B. durch Nierensteine oder Tumoren); bierbrauner Urin für Bilirubin (Lebererkrankung). Ein obstartiger Geruch (wie sehr reife Äpfel = Azetongeruch) deutet auf Ketonkörper im Urin (Ketonurie bei entgleistem Diabetes) hin — Azeton im Urin ist immer ein Alarmsignal.

**Prüfungsrelevanz:** mittel
**Wissensart:** Assessment
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute Kap. 8 / Kap. 25 / Kap. 26)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Makrohämaturie (Blut im Urin), z. B. durch Nierensteine" — Hämaturie (Tab. 8.7 Urinfarbe) ✅ MATCH
- Zitat: "Bilirubinhaltiger bierbrauner Urin" — Bilirubin/Leber ✅ MATCH
- Zitat: "Bei längerem Stehenlassen wird der Urin trübe und dunkler" — Stehzeit-Effekt ✅ MATCH
- Zitat: "Ein Azetongeruch (Geruch wie sehr reife Äpfel) ist bei Hyperglykämie mit Ausscheidung von Ketonkörpern wahrnehmbar" — Ketongeruch ✅ MATCH
- Zitat: "Azeton im Urin ist immer ein Alarmsignal für eine Stoffwechselentgleisung" — Ketonurie/Alarm ✅ MATCH
- Hinweis: Begriff im Korpus „obstartig / wie sehr reife Äpfel" (Azetongeruch), nicht wörtlich „süßlich" — Faktentext an Korpus-Wortlaut angeglichen, „süßlich" als laienverständliches Synonym ergänzt.
**Praxisfehler:** Rötlicher Urin wird sofort als Blut gedeutet, ohne Nahrungsmittel/Medikamente und Teststreifen zu berücksichtigen.

**Misconceptions:**
- `M1`: **"Roter Urin ist immer Hämaturie"** — auch Rote Bete, Rhabarber, Rifampicin oder Phenytoin färben rot; nur Teststreifen/Mikroskop sichern Blut. Fachbegriff: "Hämaturie-Kurzschluss".
- `M2`: **"Süßlich riechender Urin ist normal"** — süßlicher Geruch (nach Obst/Nagellackentferner) ist ein Alarmsignal für Ketonkörper; Blutzucker sofort messen.
- `M3`: **"Ammoniakgeruch kommt nur von alter Urinflasche"** — frisch gelassener ammoniakalischer Urin deutet auf Harnwegsinfekt (bakterielle Harnstoffzersetzung schon in der Blase).

---

### F-04: Miktionsstörungen — Fachbegriffe

**Fakt:** Die wichtigsten Miktionsstörungen mit eigenen Fachbegriffen: Pollakisurie (häufiges Wasserlassen kleiner Mengen bei normaler Tagesgesamtmenge), Nykturie (vermehrtes nächtliches Wasserlassen), Dysurie/Algurie (schmerzhaftes und/oder erschwertes Wasserlassen), Strangurie (wird in der Pflegeliteratur zusammen mit Dysurie unter dem Begriff „Dysurie/Strangurie" geführt: schmerzhaftes und/oder erschwertes Wasserlassen) und Harnverhalt (Unfähigkeit, die gefüllte Blase zu entleeren).

**Prüfungsrelevanz:** hoch
**Wissensart:** Fachbegriff
**Bloom-Potential:** 2-3 (Verstehen, Anwenden)
**Primärquelle:** (Pflege heute Kap. 8)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Häufiges Wasserlassen kleiner Mengen, die Tagesgesamtmenge ist normal" — Pollakisurie (Tab. 8.2) ✅ MATCH
- Zitat: "Vermehrtes nächtliches Wasserlassen" — Nykturie (DEFINITION Nykturie) ✅ MATCH
- Zitat: "Schmerzhaftes und/oder erschwertes Wasserlassen" — Dysurie/Strangurie (Tab. 8.2: beide Begriffe teilen dieselbe Definition im Tabellenfeld „Dysurie/Strangurie") ✅ MATCH
- Zitat: "Unfähigkeit, die gefüllte Blase zu entleeren" — Harnverhalt ✅ MATCH

**Misconceptions:**
- `M1`: **"Pollakisurie und Polyurie sind dasselbe"** — Polyurie = große Gesamtmenge (>3 L/24h), Pollakisurie = oft, aber kleine Portionen bei normaler Gesamtmenge. Fachbegriff: "Poly-Polla-Verwechslung".
- `M2`: **"Nykturie ab 65 ist Alter und nicht behandelbar"** — Nykturie ist häufig, aber meist behandelbar (Herzinsuffizienz, Prostata, Diabetes); melden statt resignieren.
- `M3`: **"Dysurie heißt: der Patient kann nicht pinkeln"** — Dysurie = schmerzhaftes Wasserlassen; "kann gar nicht" wäre Harnverhalt. Fachbegriff: "Dys-Anurie-Verwechslung".

---

### F-05: Pathologische Beimengungen im Urin

**Fakt:** Teststreifen und Beobachtung zeigen Veränderungen der Urinzusammensetzung: Hämaturie (pathologische Ausscheidung von roten Blutkörperchen), Leukozyturie (weiße Blutkörperchen), Pyurie (Eiterharn), Bakteriurie (Bakterien) und Proteinurie (pathologische Ausscheidung von Eiweiß). Diese Befunde gehören in jede Schicht-Übergabe; die Therapie entscheidet der Arzt.

**Prüfungsrelevanz:** mittel
**Wissensart:** Assessment
**Bloom-Potential:** 2-3 (Verstehen, Anwenden)
**Primärquelle:** (Pflege heute Kap. 8)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Pathologische Ausscheidung von roten Blutkörperchen" — Hämaturie (Tab. 8.6) ✅ MATCH
- Zitat: "Leukozyturie Pathologische Ausscheidung von weißen Blutkörperchen" — Leukozyturie ✅ MATCH
- Zitat: "Pyurie Eiterharn" — Pyurie ✅ MATCH
- Zitat: "Bakteriurie Vorhandensein von Bakterien" — Bakteriurie ✅ MATCH
- Zitat: "Proteinurie Pathologische Ausscheidung von Eiweiß" — Proteinurie ✅ MATCH
**Praxisfehler:** Zucker oder Nitrit im Streifen wird verharmlost statt als Hinweis auf Diabetes bzw. Harnwegsinfekt gemeldet.

**Misconceptions:**
- `M1`: **"Blut im Urin ist immer ein Tumor"** — Hämaturie hat viele Ursachen (HWI, Nierenstein, Verletzung), Tumor ist selten. Fachbegriff: "Tumor-Fehlschluss".
- `M2`: **"Zucker im Urin ist harmlos, solange der Patient gut isst"** — Glukosurie bedeutet Blutzucker über der Nierenschwelle (~180 mg/dl), Hinweis auf Diabetes; Blutzucker messen.
- `M3`: **"Nitrit ist immer ein Laborfehler"** — Nitrit entsteht durch Bakterien im Urin; positiver Nitrit-Test mit Leukozyten spricht für HWI.

---

### F-06: Definition Kontinenz und Inkontinenz (ICS/DNQP)

**Fakt:** Harninkontinenz ist nach der International Continence Society (ICS) jeglicher unfreiwilliger Harnverlust. Kontinenz versteht die DNQP-Expert*innenarbeitsgruppe als die Fähigkeit, willkürlich und zur passenden Zeit an einem geeigneten Ort die Blase zu entleeren. Inkontinenz ist kein normales Alterssymptom, sondern ein behandelbares Problem.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Definition
**Bloom-Potential:** 1-2 (Erinnern, Verstehen)
**Primärquelle:** (DNQP Kontinenzförderung Aktual. 2024; ICS 2023)
**Beleg:**
- Quelle: `dnqp-standards-index/kontinenzfoerderung.txt`
- Zitat: "Harninkontinenz ist in Anlehnung an die „International Continence Society“ (ICS) jeglicher unfreiwilliger Harnverlust/Urinabgang (ICS 2023)" — Inkontinenz-Def/ICS ✅ MATCH
- Zitat: "die Fähigkeit, willkürlich und zur passenden Zeit an einem geeigneten Ort die Blase zu entleeren" — Kontinenz-Def ✅ MATCH
**Praxisfehler:** Inkontinenz wird als Schicksal hingenommen, der Leidensdruck nicht aktiv angesprochen — obwohl Scham viele schweigen lässt.

**Misconceptions:**
- `M1`: **"Inkontinenz gehört zum Alter, da kann man nichts machen"** — häufig, aber nicht normal und nicht unvermeidbar; Training, Medikamente oder OP verbessern das Profil. Fachbegriff: "Fatalismus-Mythos".
- `M2`: **"Wer eine Einlage braucht, ist inkontinent"** — Einlage ist ein Hilfsmittel, keine Diagnose. Fachbegriff: "Hilfsmittel-Gleichsetzung".
- `M3`: **"Kontinenz heißt, die Blase füllt sich langsam"** — Kontinenz ist die willkürliche Kontrolle: spüren, aufschieben, rechtzeitig zur Toilette. Fachbegriff: "Füllungs-Fehldeutung".

---

### F-07: Belastungsinkontinenz (Stressinkontinenz)

**Fakt:** Bei der Belastungsinkontinenz verliert der Patient bei abdominaler Druckerhöhung unwillkürlich Urin (Husten, Pressen, Wechsel vom Liegen zum Stehen). Blasensensibilität und -motorik sind normal, es liegt eine Störung des Blasenverschlusses vor. Ursachen bei Frauen: Gebärmuttersenkung nach Geburten, Östrogenmangel nach der Menopause; bei Männern oft postoperativ nach Prostatektomie. Leitsymptom: Urinverlust ohne Harndrang.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Klassifikation
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute Kap. 8)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Bei der Stressinkontinenz (Belastungsinkontinenz) verliert der Patient bei abdominaler Druckerhöhung unwillkürlich Urin" — Def ✅ MATCH
- Belegt (Auslöser/Ursachen, Einzelbegriffe im Korpus verifiziert): „Husten", „Pressen", „Prostatektomie", „Gebärmuttersenkung", „Östrogenmangel" ✅ MATCH
**Praxisfehler:** "Stress" wird als psychischer Stress missverstanden statt als körperliche Druckerhöhung.

**Misconceptions:**
- `M1`: **"Belastungsinkontinenz bedeutet Inkontinenz bei psychischem Stress"** — "stress" meint hier körperlichen Druck (Husten, Heben), daher heute korrekt "Belastungsinkontinenz". Fachbegriff: "Stress-Missverständnis".
- `M2`: **"Bei Belastungsinkontinenz hat die Patientin starken Harndrang"** — der Urinverlust erfolgt ohne Harndrang; plötzlicher Drang ist typisch für Dranginkontinenz.
- `M3`: **"Beckenbodentraining ist sinnlos im Alter"** — Beckenbodentraining ist Mittel der ersten Wahl und in jedem Alter wirksam.

---

### F-08: Dranginkontinenz (Detrusorhyperaktivität)

**Fakt:** Bei der Dranginkontinenz verspürt der Patient schon bei geringer Blasenfüllung plötzlich einen so starken, zwanghaften Harndrang (imperativer Harndrang), dass er ein Einnässen nicht mehr verhindern kann. Ursachen: neurogen (Apoplex, Multiple Sklerose), Harnwegsinfekte, Blasensteine, Stress, Kaffee- und Alkoholkonsum. Therapie der ersten Wahl: Blasentraining.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Klassifikation
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute Kap. 8)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "verspürt der Patient schon bei geringer Blasenfüllung plötzlich einen so starken, zwanghaften Harndrang" — Def ✅ MATCH
- Belegt (Begriff/Ursachen/Therapie, Einzelbegriffe im Korpus verifiziert): „imperativer Harndrang", „Apoplex", „Multiple Sklerose", „Blasentraining" ✅ MATCH
**Praxisfehler:** Sofortiges Aufsuchen der Toilette bei jedem Drang wird als "Training" verkauft — das Gegenteil von Blasentraining.

**Misconceptions:**
- `M1`: **"Dranginkontinenz kommt von zu voller Blase"** — der Detrusor kontrahiert schon bei geringer Füllung; eine überfüllte Blase wäre Harnverhalt/Überlaufinkontinenz. Fachbegriff: "Füllungs-Fehlschluss".
- `M2`: **"Drang- und Belastungsinkontinenz sind dasselbe"** — Belastung = ohne Drang (Beckenboden), Drang = mit imperativem Drang (Detrusor); beides zusammen = Mischinkontinenz.
- `M3`: **"Blasentraining heißt, sofort bei Drang zur Toilette"** — Blasentraining bedeutet, den Drang bewusst auszuhalten und Intervalle zu verlängern.

---

### F-09: Mischinkontinenz

**Fakt:** Bei der Mischinkontinenz kommt es zum unfreiwilligen Urinverlust sowohl im Zusammenhang mit Harndrang als auch bei körperlicher Belastung. Sie ist keine eigene dritte Form, sondern eine Kombination aus Belastungs- und Dranginkontinenz, besonders häufig bei Frauen über 60. Diagnostik über Miktionsprotokoll; Therapie beginnt meist mit der belastenderen Komponente.

**Prüfungsrelevanz:** mittel
**Wissensart:** Klassifikation
**Bloom-Potential:** 2 (Verstehen)
**Primärquelle:** (Pflege heute Kap. 8)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Bei der Mischinkontinenz kommt es zum unfreiwilligen Urinverlust sowohl im Zusammenhang mit Harndrang als auch bei körperlicher Belastung" — Def ✅ MATCH
**Praxisfehler:** Es wird nur nach einem Symptom gefragt, sodass die Mischform übersehen wird.

**Misconceptions:**
- `M1`: **"Mischinkontinenz ist eine eigene dritte Form"** — sie ist eine Kombination aus Belastungs- und Dranginkontinenz; beide Mechanismen wirken. Fachbegriff: "Eigenständigkeits-Fehler".
- `M2`: **"Beides wird gleichzeitig mit gleicher Priorität behandelt"** — klinisch bewährt ist, mit der führenden (meist Drang-) Komponente zu beginnen.
- `M3`: **"Mischinkontinenz ist selten"** — sie ist eine der häufigsten Formen bei Frauen über 60.

---

### F-10: Überlaufinkontinenz / Inkontinenz bei chronischer Harnretention

**Fakt:** Eine chronische Harnretention ist eine unvollständige Blasenentleerung (Restharnbildung) mit und ohne unfreiwilligen Urinverlust und im Gegensatz zum akuten Harnverhalt i. d. R. schmerzlos. Ursachen: Abflusshindernis (Prostatahypertrophie, Tumor, Blasenstein), nervale Schädigung oder Arzneimittel. Bei bestimmter Füllung "läuft die Blase über". Gefahr: Harnstau bis in die Nieren.

**Prüfungsrelevanz:** hoch
**Wissensart:** Komplikation
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute Kap. 8)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "unvollständige Blasenentleerung (Restharnbildung) mit und ohne unfreiwilligen Urinverlust" — Def ✅ MATCH
- Zitat: "Im Gegensatz zum akuten Harnverhalt ist sie i. d. R. schmerzlos" — schmerzlos ✅ MATCH
- Zitat: "Ursache kann ein Abflusshindernis, z. B. Prostatahypertrophie" — Ursachen (Tumor/Blasenstein folgen) ✅ MATCH
**Praxisfehler:** "Hat doch gepinkelt, also ist die Blase leer" — ohne Restharnmessung bleibt die prall volle Blase unentdeckt.

**Misconceptions:**
- `M1`: **"Überlaufinkontinenz und Harnverhalt sind dasselbe"** — Harnverhalt = akut, kein Urin, schmerzhaft; Überlaufinkontinenz = chronisch überfüllt, tropfenweiser Abgang, meist schmerzlos.
- `M2`: **"Wenn Urin abgeht, ist die Blase leer"** — bei Überlaufinkontinenz bleibt die Blase prall voll; Restharn per Sonografie messen. Fachbegriff: "Entleerungs-Fehlschluss".
- `M3`: **"Behandelt man zuerst mit Beckenbodentraining"** — Training hilft nicht; erste Maßnahme ist die Katheterisierung zur Entlastung, dann Ursachentherapie.

---

### F-11: Reflexinkontinenz und funktionelle Inkontinenz

**Fakt:** Bei nervaler Schädigung kann der Urin nicht willkürlich kontrolliert abfließen: Bei Läsionen oberhalb des sakralen Reflexzentrums bildet sich eine Reflexblase (obere Blasenlähmung), die willkürliche Entleerungsfunktion ist ausgefallen. Daneben können auch eine eingeschränkte Kognition und Mobilität zur Inkontinenz führen (funktionelle Inkontinenz) — Blase und Nerven sind intakt, aber die Toilette wird nicht rechtzeitig erreicht.

**Prüfungsrelevanz:** mittel
**Wissensart:** Klassifikation
**Bloom-Potential:** 2 (Verstehen)
**Primärquelle:** (Pflege heute Kap. 8)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "eine eingeschränkte Kognition und Mobilität können zur Inkontinenz führen" — funktionelle Inkontinenz ✅ MATCH
- Zitat: "Ausbildung einer Reflexblase (obere Blasenlähmung). Die willkürliche Entleerungsfunktion ist ausgefallen" — Reflexblase ✅ MATCH
**Praxisfehler:** Funktionelle Inkontinenz wird mit Inkontinenzhosen "versorgt", statt Toilettentraining und Orientierungshilfen anzubieten.

**Misconceptions:**
- `M1`: **"Funktionelle Inkontinenz ist nur eine Ausrede"** — sie ist eine anerkannte Kategorie; Ursache liegt in Kognition/Mobilität, nicht in Blase oder Nerven. Fachbegriff: "Legitimations-Streit".
- `M2`: **"Reflexinkontinenz ist eine extreme Dranginkontinenz"** — bei Drang spürt der Patient den Drang (zu spät), bei Reflex fehlt das Drang-Gefühl (Nervenleitung unterbrochen).
- `M3`: **"Bei funktioneller Inkontinenz helfen nur Windeln"** — Toilettentraining, Orientierungshilfen, Mobilisation und Toilettenstuhl sind erste Wahl.

---

### F-12: Akuter Harnverhalt vs. chronische Harnretention

**Fakt:** Der akute Harnverhalt ist die Unfähigkeit, die gefüllte Blase zu entleeren — akut, prall gefüllt, sehr schmerzhaft, ein Notfall. Davon abzugrenzen ist die chronische Harnretention/Überlaufinkontinenz, die i. d. R. schmerzlos verläuft, weil sich die Blase über lange Zeit an die Überfüllung gewöhnt — sie schädigt die Nieren langsam. Diese Abgrenzung ist prüfungsrelevant und klinisch entscheidend.

**Prüfungsrelevanz:** hoch
**Wissensart:** Entscheidung
**Bloom-Potential:** 4 (Analysieren)
**Primärquelle:** (Pflege heute Kap. 8)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Unfähigkeit, die gefüllte Blase zu entleeren" — Harnverhalt-Def ✅ MATCH
- Zitat: "Im Gegensatz zum akuten Harnverhalt ist sie i. d. R. schmerzlos" — chronisch schmerzlos vs. akut ✅ MATCH
**Praxisfehler:** Fehlende Schmerzen beim chronischen Bild werden als "harmlos" gewertet, obwohl ein Nierenschaden droht.

**Misconceptions:**
- `M1`: **"Beide Begriffe meinen dasselbe"** — akuter Harnverhalt (Notfall, Schmerz) vs. chronische Retention (schmerzlos, Dauertropfen). Fachbegriff: "Begriffs-Gleichsetzung".
- `M2`: **"Beim akuten Harnverhalt hat der Patient keinen Schmerz"** — vertauscht: der akute Harnverhalt ist sehr schmerzhaft, die chronische Form meist schmerzlos. Fachbegriff: "Akut-Chronisch-Vertauschung".
- `M3`: **"Bei chronischer Retention ist kein Katheter nötig, weil Urin abgeht"** — die Blase bleibt prall voll; ohne Entlastung Nierenschaden. Fachbegriff: "Entleerungs-Fehlschluss".

---

### F-13: DNQP-Kontinenzprofile

**Fakt:** Der DNQP-Expertenstandard nutzt Kontinenzprofile, um bei inkontinenten Personen den Grad des Unterstützungsbedarfs bezüglich personeller und/oder materieller Hilfe zu bestimmen und nach den Maßnahmen zu evaluieren. Die sechs Profile (Tab. 8.8, nach dem Expertenstandard „Förderung der Harnkontinenz in der Pflege") bilden ein Spektrum: **Kontinenz**, **unabhängig erreichte Kontinenz**, **abhängig erreichte Kontinenz**, **unabhängig kompensierte Inkontinenz**, **abhängig kompensierte Inkontinenz**, **nicht kompensierte Inkontinenz**. Pflegerisches Ziel: das angestrebte Kontinenzprofil erhalten oder erreichen; der Patient bestimmt selbst, welches Profil er anstrebt.

**Prüfungsrelevanz:** hoch
**Wissensart:** Klassifikation
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (DNQP Kontinenzförderung Aktual. 2024; Pflege heute Kap. 8 Tab. 8.8)
**Beleg:**
- Quelle: `dnqp-standards-index/kontinenzfoerderung.txt`
- Zitat: "den Grad des Unterstützungsbedarfs bezüglich personeller und/oder materieller Hilfe zu bestimmen" — Zweck ✅ MATCH
- Zitat: "hat die damalige Expert*innenarbeitsgruppe Kontinenzprofile entwickelt" — Entwicklung ✅ MATCH
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Kontinenzprofile nach dem Expertenstandard „Förderung der Harnkontinenz in der Pflege“" — Tab. 8.8 Überschrift ✅ MATCH
- Zitat: "Unabhängig erreichte Kontinenz" — Profil 2 ✅ MATCH
- Zitat: "Abhängig erreichte Kontinenz" — Profil 3 ✅ MATCH
- Zitat: "Unabhängig kompensierte Inkontinenz" — Profil 4 ✅ MATCH
- Zitat: "Abhängig kompensierte Inkontinenz" — Profil 5 ✅ MATCH
- Zitat: "Nicht kompensierte Inkontinenz" — Profil 6 ✅ MATCH
- Zitat: "der Patient selbst bestimmt, welches Kontinenzprofil" — Selbstbestimmung/Ziel ✅ MATCH
- ⚠️ KORREKTUR: Bisherige Profil-Namen („unabhängig kontinent / abhängig kontinent / unabhängig nicht-kontinent / abhängig nicht-kontinent") waren **fachlich falsch** (nicht die DNQP-Terminologie) und wurden durch die belegten 6 Profile ersetzt.
**Praxisfehler:** Es wird nur "kontinent / inkontinent" dokumentiert, statt das differenzierte Profil und damit den realen Hilfebedarf abzubilden.

**Misconceptions:**
- `M1`: **"Es gibt nur kontinent oder inkontinent"** — die Profile sind ein Spektrum von völlig unabhängig bis völlig pflegebedürftig.
- `M2`: **"Wer Hilfsmittel nutzt, ist immer abhängig"** — "unabhängig kontinent" nutzt selbst organisierte Maßnahmen ohne Pflegehilfe.
- `M3`: **"Das Profil ändert sich nicht"** — das Profil wird nach den Maßnahmen evaluiert; Ziel ist eine Verbesserung um eine Stufe.

---

### F-14: Miktionsprotokoll als Basis-Assessment

**Fakt:** Das gemeinsam mit dem Betroffenen erstellte Miktionsprotokoll über 3–7 Tage ist die Grundlage des Kontinenzassessments. Erhoben werden: Anzahl der Miktionen, Urinmenge, Häufigkeit des ungewollten Urinverlusts, situative Bedingungen, Ersuchen um Unterstützung sowie Trinkmenge. Es dient der Planung von Interventionen (Blasen-/Toilettentraining) und der Überprüfung durchgeführter Maßnahmen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 4 (Analysieren)
**Primärquelle:** (Pflege heute Kap. 8; DNQP Kontinenzförderung Aktual. 2024)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "gemeinsam mit dem Betroffenen erstelltes Miktionsprotokoll während 3–7 Tagen" — Dauer 3–7 Tage ✅ MATCH
- Zitat: "Im Miktionsprotokoll werden folgende Informationen erhoben" — Datenkatalog (Anzahl Miktionen, Urinmenge, ungewollter Verlust, situative Bedingungen, Ersuchen um Unterstützung) ✅ MATCH
- Zitat: "Trinkmenge/-gewohnheiten" — Trinkmenge als Protokoll-Item ✅ MATCH
**Praxisfehler:** Nur die Uhrzeit wird notiert; ohne Mengenangabe lässt sich die funktionelle Blasenkapazität nicht bestimmen.

**Misconceptions:**
- `M1`: **"Ein Tag Miktionsprotokoll reicht"** — mind. 3 zusammenhängende Tage, sonst kein belastbares Muster. Fachbegriff: "Zu-kurze-Erfassung".
- `M2`: **"Die Menge ist zu kompliziert zu messen"** — die Menge in ml ist essenziell für die Blasenkapazität und Trainings-Intervalle.
- `M3`: **"Das Protokoll führt nur die Pflegekraft"** — wenn möglich führt der Betroffene selbst; das schult die Selbstwahrnehmung als Teil der Therapie.

---

### F-15: Blasentraining und Kontinenztraining

**Fakt:** Blasentraining ist eine Form der Verhaltenstherapie mit dem Ziel, falsche Ausscheidungsgewohnheiten zu korrigieren, die Blasenkapazität zu erhöhen und die Fähigkeit, den Harndrang zu verdrängen, zu verbessern; angestrebt werden Ausscheidungsintervalle von 3–4 Std. Es eignet sich für Frauen mit Stress-, Drang- und Mischinkontinenz. Bei Drang soll der Patient sich hinsetzen, tief durchatmen und die Miktion unterdrücken; Intervalle werden wöchentlich um 15–30 Min. verlängert.

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 4 (Analysieren, Anwenden)
**Primärquelle:** (Pflege heute Kap. 8; DNQP Kontinenzförderung Aktual. 2024)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "die Blasenkapazität zu erhöhen und die Fähigkeit, den Harndrang zu verdrängen, zu verbessern" — Ziel ✅ MATCH
- Zitat: "Es werden Ausscheidungsintervalle von 3–4 Std. angestrebt" — Intervall 3–4 Std ✅ MATCH
- Zitat: "Blasentraining eignet sich für Frauen mit Stress-, Drangund Mischinkontinenz" — Eignung (OCR-Artefakt „Drangund" = „Drang- und" im Quelltext) ✅ MATCH
- Zitat: "Bei Erfolg werden die Ausscheidungsintervalle wöchentlich um 15–30 Min. verlängert" — Steigerung +15–30 Min ✅ MATCH
**Praxisfehler:** Bei jeder Inkontinenzform wird dasselbe Training angewendet, statt die Trainingsform an die Ursache anzupassen.

**Misconceptions:**
- `M1`: **"Blasentraining heißt, sofort bei Drang aufs WC"** — es bedeutet, den Drang bewusst zu unterdrücken und Intervalle zu verlängern.
- `M2`: **"Beckenbodentraining hilft bei Überlaufinkontinenz"** — bei chronischer Retention hilft Training nicht; hier ist Katheterisierung erforderlich.
- `M3`: **"Training wirkt sofort"** — Intervalle werden wöchentlich gesteigert; Kontinenztraining braucht Wochen bis Monate.

---

### F-16: HWI-Prophylaxe durch sauren Urin und Trinkmenge

**Fakt:** Der normale Urin-pH liegt bei 5–6. Bei saurem Urin ist die Gefahr eines Harnwegsinfekts geringer, weil sich krankheitserregende Keime im sauren Milieu weniger leicht vermehren können. Eine ausreichende Trinkmenge (1,5–2 L) und das saure Milieu wirken zusammen prophylaktisch. Bei liegendem Katheter senkt das Abklemmen das Infektionsrisiko nicht.

**Prüfungsrelevanz:** mittel
**Wissensart:** Maßnahme
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute Kap. 8 / Kap. 33)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Der normale pH-Wert des Urins liegt bei 5–6" — pH 5–6 ✅ MATCH
- Zitat: "ist bei saurem Urin die Gefahr eines Harnwegsinfekts geringer, weil sich aufgrund des sauren Milieus krankheitserregende Keime weniger leicht vermehren können" — saurer Urin = weniger HWI ✅ MATCH
- Zitat: "Die Flüssigkeitszufuhr soll täglich mindestens 1,5–2 l betragen, da dies auch die Gefahr von Harnwegsinfekten vermindert" — Trinkmenge 1,5–2 L + HWI ✅ MATCH
**Praxisfehler:** Reduzierte Trinkmenge "damit weniger Urin kommt" begünstigt konzentrierten Urin und Harnwegsinfekte.

**Misconceptions:**
- `M1`: **"Wenig trinken verhindert Inkontinenz"** — zu wenig trinken konzentriert den Urin, reizt die Blase und erhöht das HWI-Risiko.
- `M2`: **"Ein Dauerkatheter schützt vor Harnwegsinfekten"** — der liegende Katheter ist selbst ein Hauptrisikofaktor für katheterassoziierte HWI.
- `M3`: **"Alkalischer Urin ist immer besser"** — bei saurem Urin ist das HWI-Risiko geringer; alkalischer Urin begünstigt eher bestimmte Steinarten.
