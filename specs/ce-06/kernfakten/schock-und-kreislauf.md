# Kernfakten — Schock, Herz-Kreislauf & intensivmedizinischer Kontext (CE-06)

> Thema-Slug: `schock-und-kreislauf` · CE-06 · Cluster A (LE2)
> Deckt: CE06-LE2-W1 (Anteile/Funktion Herz-Kreislaufsystem), W2 (Schockursachen/Schocksysteme),
> W3 (Notfallmedikamente/Schock, Reizleitungsstörungen, Elektrolyte, Infusion/Perfusor, O2-Gabe,
> Flüssigkeits-/Elektrolytdefizit), K1 (Vitalzeichen mit intensivmed. Geräten), K2 (Material PVK/ZVK),
> E1 (apparate-/gerätedominierter intensivmedizinischer Kontext).
>
> **Grounding-Regel:** Verbatim-Belege aus `recherche/*-volltext/`.
> Prüfbar: `npx tsx scripts/zitat-verifizierer.ts --check-file specs/ce-06/kernfakten/schock-und-kreislauf.md`.
> Primärquellen: Pflege heute (7. Aufl.) Kap. 14.5 (Schock), Kap. 3.5 (O2-Gabe), Kap. 33.10.3 (Kalium);
> I care Anatomie Kap. 6/7 (Herz-Kreislauf, Reizleitungssystem).
>
> **Kritische Leitplanken (bewusst so gebaut):**
> - Keine erfundenen Medikamenten-Dosen. Katecholamine/Perfusor NUR auf Arztanordnung, als Wirkstoff.
>   „Adrenalin/Noradrenalin" hier ausschließlich als körpereigene Stresshormone (Zentralisation) bzw.
>   als Wirkstoffgruppe Katecholamine der Kreislaufunterstützung — KEINE Anaphylaxie-Dosis.
> - Autotransfusionslage (Beine hoch) bei hypovolämem Schock — ABER Ausnahme: Blutungen an Kopf,
>   Lunge, oberem Magen-Darm-Trakt (F-06) und kardiogener Schock (F-07). Das ist die zentrale Falle.
> - Hoch dosiertes i.v.-Kalium nur über ZVK, langsam — Herzrhythmus-Gefahr (F-10).

---

### F-01: Schock = generalisiertes Kreislaufversagen mit Sauerstoffmangel der Organe
Der Schock ist ein generalisiertes Kreislaufversagen, bei dem der Körper den Durchblutungsbedarf einzelner oder aller Organe nicht mehr decken kann. Durch den resultierenden Sauerstoffmangel lebenswichtiger Gewebe kann er zur Bewusstlosigkeit, zum Organversagen (z. B. der Nieren) und zum Tod führen.

**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Generalisiertes Kreislaufversagen, bei dem der Körper den Durchblutungsbedarf einzelner oder aller Organe"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Organversagen (z. B. der Nieren) und"
- Primärquelle: (Pflege heute 2019, Kap. 14.5)

### F-02: Vier Schockformen — hypovoläm, kardiogen, obstruktiv, distributiv
Man unterscheidet vier häufige Schockformen mit unterschiedlichen Ursachen: den hypovolämischen Schock (Volumenmangel), den kardiogenen Schock (unzureichende Herzleistung), den obstruktiven Schock (Einengung des Blutflusses, z. B. Lungenembolie) und den distributiven Schock (Verteilungsschock: septisch, anaphylaktisch, neurogen — „Versacken" des Blutes in weitgestellten Gefäßen bei zunächst normalem Blutvolumen).

**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Hypovolämischer Schock (Volumenmangelschock) durch Volumenmangel"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Kardiogener Schock durch unzureichende Herzleistung"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Distributiver Schock (Verteilungsschock)"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "des Blutes in den weitgestellten"
- Primärquelle: (Pflege heute 2019, Kap. 14.5)

### F-03: Schock-Leitsymptome + Schockindex (> 1 nur beim hypovolämen Schock)
Zeichen eines Schocks (nicht immer alle/gleichzeitig): Angst/Unruhe/Schwindel, Bewusstseinseinschränkung, schneller (über 100/Min.) und schwächer werdender Puls, Sinken des systolischen Blutdrucks, kalte blasse bis zyanotische Haut mit feinperligem Schweiß, rasche/erschwerte Atmung, verminderte Urinmenge (Oligurie). Der Schockindex (Puls/RR systolisch) liegt beim Gesunden bei ca. 0,5; ein Wert > 1 zeigt Schockgefahr — aber nur beim hypovolämischen Schock aussagekräftig.

**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Schneller (über 100/Min.) und schwächer werdender"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Sinken des systolischen Blutdrucks unter"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Schockindex beim Gesunden"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Schockindex > 1 (nur beim"
- Primärquelle: (Pflege heute 2019, Kap. 14.5.1)

### F-04: Schock-Erstmaßnahmen allgemein — Ursache, Lagerung, Zugänge, O2, Monitoring, Intensiv
Erstmaßnahmen bei Schock: wenn möglich die Schockursache beseitigen (z. B. Blutstillung); Lagerung je nach Form (Autotransfusionslage bei erhaltenem Bewusstsein, außer beim kardiogenen Schock); baldmöglichst mehrere periphervenöse Zugänge legen und je nach Form Flüssigkeit/Medikamente geben; Sauerstoff geben; fortlaufendes Monitoring von Bewusstsein, Atmung, Puls, Blutdruck und Hautzustand; möglichst rasche Verlegung auf die Intensivstation.

**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "außer solche im kardiogenen Schock"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "mehrere periphervenöse Zugänge gelegt"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Gabe von Sauerstoff, bei unzureichender"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Monitoring von Bewusstsein, Atmung,"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Möglichst rasche Verlegung auf die Intensivstation"
- Primärquelle: (Pflege heute 2019, Kap. 14.5.1)

### F-05: Hypovolämischer Schock — Ursachen + Kreislaufzentralisation
Der hypovolämische Schock entsteht durch Verluste von Blut (z. B. nach Unfällen, bei gastrointestinalen Blutungen), Plasma (z. B. Verbrennung) oder Wasser/Elektrolyten (starke Durchfälle/Erbrechen). Als Gegenmaßnahme schüttet das Nebennierenmark vermehrt Adrenalin und Noradrenalin aus, die zu einer Vasokonstriktion (Gefäßverengung) in nicht lebensnotwendigen Organen führen; das Blut wird zentralisiert, um Herz und Gehirn zu versorgen.

**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Blut (z. B. nach Unfällen, bei gastrointestinalen Blutungen)"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Das Nebennierenmark schüttet vermehrt die Hormone Adrenalin und Noradrenalin aus"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Vasokonstriktion (Gefäßverengung)"
- Primärquelle: (Pflege heute 2019, Kap. 14.5.2)

### F-06: Hypovoläm — Erstmaßnahmen; Autotransfusionslage AUSSER bei oberer GI-Blutung
Erstmaßnahmen beim hypovolämischen Schock: den Patienten beruhigen, hinlegen und in Autotransfusionslage bringen — Ausnahme: Blutungen an Kopf, Lunge und oberem Magen-Darm-Trakt. Sauerstoff (100 %) 6–8 l/Min. geben; starke Blutungen durch Druckverband/Abdrücken stillen; große venöse Zugänge (evtl. ZVK) legen; großzügig Infusionen zum Volumenausgleich (z. B. isotone Kochsalzlösung), bei Blutverlust evtl. Erythrozytenkonzentrate; Kreislauf durch Gabe von Katecholaminen unterstützen; laufendes Monitoring.

**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Blutungen an Kopf, Lunge"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Sauerstoff (100 %) 6–8 l/Min. geben"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Große venöse Zugänge (evtl. ZVK) legen"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Kreislauf durch Gabe von Katecholaminen"
- Primärquelle: (Pflege heute 2019, Kap. 14.5.2)

### F-07: Kardiogener Schock — Pumpversagen; Oberkörper hoch, Katecholamin-Perfusor
Der kardiogene Schock entsteht durch Pumpversagen des Herzens (z. B. akuter Myokardinfarkt, Herzrhythmusstörungen). Erstmaßnahmen: bei systolischem RR > 100 mmHg Oberkörperhoch-/Beintieflagerung (NICHT Autotransfusionslage), bei niedrigeren Werten flache/leichte Oberkörperhochlage; Sauerstoffgabe; Unterstützung der Pumpleistung durch Dopamin- bzw. Dobutaminperfusor (nur auf Arztanordnung); Wärmeerhalt (Frieren erhöht den Sauerstoffverbrauch).

**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Pumpversagen des Herzens, etwa bei"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Bei systolischem RR > 100 mmHg Oberkörperhoch-, Beintieflagerung"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Herzens durch Dopamin- bzw. Dobutaminperfusor"
- Primärquelle: (Pflege heute 2019, Kap. 14.5.3)

### F-08: Herz-Kreislaufsystem — zentrale Blutpumpe, kleiner + großer Kreislauf, HZV ca. 5 l/min
Das Herz ist die zentrale Blutpumpe des Herz-Kreislauf-Systems: Durch seine Pumpleistung fließt das Blut in den Lungenkreislauf (kleiner Kreislauf) und von dort in den Körperkreislauf (großer Kreislauf). Die rechte Herzkammer pumpt das Blut in den Lungenkreislauf, die linke Herzkammer in den Körperkreislauf. Das Herzzeitvolumen (HZV) beträgt beim Erwachsenen in Ruhe ca. 5 l/min.

**Beleg:**
- Quelle: `icare-anatomie-volltext/icare-anatomie.txt`
- Zitat: "Das Herz stellt die zentrale Blutpumpe des Herz-Kreislauf-Systems dar"
- Quelle: `icare-anatomie-volltext/icare-anatomie.txt`
- Zitat: "Die rechte Herzkammer pumpt das Blut in den Lungenkreislauf,"
- Quelle: `icare-anatomie-volltext/icare-anatomie.txt`
- Zitat: "die linke Herzkammer pumpt das Blut in den Körperkreislauf"
- Quelle: `icare-anatomie-volltext/icare-anatomie.txt`
- Zitat: "Herzzeitvolumen"
- Primärquelle: (I care Anatomie, Kap. 6/7)

### F-09: Reizleitungssystem — Sinusknoten als Taktgeber, Kaskade bis zum Kammermyokard
Der elektrische Impuls des Herzens entsteht im Sinusknoten (Taktgeber beim gesunden Herzen). Der im Sinusknoten gebildete Reiz wird über die Vorhofmuskulatur zum AV-Knoten geleitet, von dort über das His-Bündel und die Tawara-Schenkel zu den Purkinje-Fasern und schließlich zum Kammermyokard. Fällt der Sinusknoten aus, springt der AV-Knoten als Schrittmacher ein — allerdings mit langsamerem Rhythmus.

**Beleg:**
- Quelle: `icare-anatomie-volltext/icare-anatomie.txt`
- Zitat: "Der im Sinusknoten gebildete Reiz wird über die Muskulatur der"
- Quelle: `icare-anatomie-volltext/icare-anatomie.txt`
- Zitat: "His-Bündel und die Tawara-Schenkel die Purkinje-Fasern"
- Quelle: `icare-anatomie-volltext/icare-anatomie.txt`
- Zitat: "Fällt der Sinusknoten aus, springt der AV-Knoten als"
- Quelle: `icare-anatomie-volltext/icare-anatomie.txt`
- Zitat: "generiert beim gesunden Herzen die Impulse"
- Primärquelle: (I care Anatomie, Kap. 6.6)

### F-10: Elektrolyte fürs Herz — Kalium-Entgleisung führt zu Herzrhythmusstörungen
Kaliumstörungen wirken direkt auf das Herz. Die Hyperkaliämie zeigt sich u. a. durch Muskelschwäche und Herzrhythmusstörungen bis zum Herzstillstand. Auch die Hypokaliämie kann lebensbedrohliche Herzrhythmusstörungen auslösen. Eine intravenöse Kaliumgabe ist nur in schweren Fällen nötig und muss wegen dieser Gefahr langsam erfolgen; Konzentrationen über 40 mmol/l dürfen nur über einen ZVK infundiert werden (Kalium reizt/schädigt die Venenwand).

**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Herzrhythmusstörungen bis zum Herzstillstand"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Gefahr lebensbedrohlicher Herzrhythmusstörungen langsam erfolgen"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "nur über einen ZVK infundiert werden"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Da Kalium zur Venenwandreizung und Venenschädigung führt"
- Primärquelle: (Pflege heute 2019, Kap. 33.10.3)

### F-11: Sauerstoff-Applikationssysteme — Nasensonde, Brille, Maske (Flussraten, min. 5 l/min bei Maske)
Sauerstoff wird über unterschiedliche Systeme verabreicht: die Sauerstoffnasensonde und die Sauerstoffbrille (Einflussstutzen beidseitig in die Nasenlöcher) für niedrigere Flussraten sowie die einfache Sauerstoffmaske für kurzzeitig höhere O2-Dosierung von 5–10 l/Min. Bei der Maske darf der Sauerstofffluss nicht unter 5 l/Min. absinken, sonst droht ein CO2-Stau in der Maske. Höchste Konzentrationen erreichen Masken mit Reservoirbeutel.

**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "ermöglicht kurzzeitig eine hohe O2-Dosierung von 5–10 l/Min"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Der Sauerstofffluss darf nicht unter 5 l/Min. absinken,"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "werden beidseitig in die Nasenlöcher des Patienten eingeführt"
- Primärquelle: (Pflege heute 2019, Kap. 3.5)

### F-12: Material für venöse Zugänge / Notfallausstattung — Stauschlauch, Kanülen, ZVK, Perfusor
Zum Legen eines venösen Zugangs gehören u. a. Stauschlauch, Spritzen und Kanülen sowie die Venenverweilkatheter. Zur Notfallausstattung einer Station zählen darüber hinaus zentrale Venenkatheter, Perfusoren und Infusomaten mit passendem Infusionsmaterial sowie Trägerlösungen wie die Ringer-Lösung (zum Volumenersatz und Freihalten der venösen Zugänge). Bei hohem Volumenbedarf werden große venöse Zugänge, evtl. ein ZVK, gelegt.

**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Stauschlauch, Spritzen und Kanülen"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Materialien zum Legen eines venösen"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Perfusoren und Infusomaten, dazu passendes Infusionsmaterial"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Ringer-Lösung oder andere Infusionslösung"
- Primärquelle: (Pflege heute 2019, Kap. 14.1)

### F-13: Intensivmedizinischer Kontext — apparate- und gerätedominiert
Auf der Intensivstation ist die Patientenumgebung apparate- und gerätedominiert: zum Patientenbett gehören Infusionspumpen/Perfusoren, eine Beatmungseinheit und ein Überwachungsmonitor sowie alle dem Patienten zugeordneten Geräte. Die Pflege behält dabei den Menschen hinter den Geräten im Blick.

**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Patientenbett mit Infusionspumpen/Perfusoren, Beatmungseinheit, Überwachungsmonitor"
- Primärquelle: (Pflege heute 2019, Kap. 41)

### F-14: Angehörige begleiten (familiäres Coping) — Information, Einbeziehung, Extremsituation
Coping bezeichnet die Reaktionen auf herausfordernde Lebensereignisse — problemorientiert (auf die Lösung) und emotionsorientiert (auf die Gefühlswelt gerichtet). Angehörige können sich in emotionalen Extremsituationen befinden; Angst, Trauer oder Wut beeinträchtigen ihre Denk- und Entscheidungsmöglichkeiten. Deshalb brauchen sie klare, verständliche Informationen, aktive Einbeziehung und Gesprächsangebote (z. B. Familienbesprechungen) — das stützt die familiäre Bewältigung.

**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Reaktionen auf herausfordernde Lebensereignisse"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Emotionsorientiertes Coping (zielt auf"
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Problemorientiertes Coping (zielt auf"
- Quelle: `kommunikation-gesundheitswesen-volltext/kommunikation-gesundheitswesen.txt`
- Zitat: "Angehörige können sich in emotionalen Extremsituationen befinden"
- Quelle: `kommunikation-gesundheitswesen-volltext/kommunikation-gesundheitswesen.txt`
- Zitat: "beeinträchtigen Denk- und Entscheidungsmöglichkeiten"
- Quelle: `kommunikation-gesundheitswesen-volltext/kommunikation-gesundheitswesen.txt`
- Zitat: "Familienbesprechungen eignen sich"
- Primärquelle: (Pflege heute 2019, Kap. 15; Kommunikation im Gesundheitswesen)
