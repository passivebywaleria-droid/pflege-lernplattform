// Karteikarten — LE-06 Menschen aller Altersstufen in ihrer Mobilität unterstützen
// 46 Karten, 5 Kategorien (fachbegriff, fakt, handlung, assessment, recht)
// Abdeckung: Mobilität, Kinästhetik, Positionierung, Transfer, Bobath, Dekubitus, Sturz, Kontraktur, Thrombose, Pneumonie, Schlaf, Assessments, Arbeitsschutz
// 30/46 = 65% prüfungsrelevant

import type { KarteikarteVorlage } from "../_types";

export const LE06_KARTEIKARTEN: KarteikarteVorlage[] = [

  // ===================================================================
  // MOBILITÄT & IMMOBILITÄT (Karten 1–2)
  // ===================================================================

  {
    id: "le06-kk-01",
    vorderseite: "Was ist Mobilität?",
    rueckseiteC1: "Die Fähigkeit, den eigenen Körper zielgerichtet zu bewegen und die Position zu wechseln — von der Lageveränderung im Bett bis zum freien Gehen. Sie ist Grundvoraussetzung für Selbstständigkeit und gesellschaftliche Teilhabe.",
    rueckseiteB1: "Mobilität bedeutet: sich bewegen können. Vom Drehen im Bett bis zum freien Gehen. Wer sich bewegen kann, bleibt selbstständig und kann am Leben teilnehmen.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Vgl. DNQP, Expertenstandard Erhaltung und Förderung der Mobilität, 2020",
  },
  {
    id: "le06-kk-02",
    vorderseite: "Welche fünf Komplikationen drohen bei Immobilität?",
    rueckseiteC1: "Dekubitus, Thrombose, Pneumonie, Kontraktur und Sturz. Jede dieser Komplikationen erfordert eigene Prophylaxe-Maßnahmen — zusammen bilden sie das Prophylaxe-Bündel.",
    rueckseiteB1: "5 Gefahren bei Unbeweglichkeit: Dekubitus (Druckgeschwür), Thrombose (Blutgerinnsel), Pneumonie (Lungenentzündung), Kontraktur (Gelenk-Versteifung) und Sturz. Gegen jede Gefahr gibt es eigene Maßnahmen.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Vgl. DNQP, diverse Expertenstandards",
  },

  // ===================================================================
  // KINÄSTHETIK (Karten 3–8)
  // ===================================================================

  {
    id: "le06-kk-03",
    vorderseite: "Was besagt das Kinästhetik-Grundprinzip?",
    rueckseiteC1: "Vorhandene Bewegungsfähigkeiten des pflegebedürftigen Menschen unterstützen, statt den Körper passiv zu transportieren. Der Mensch wird als aktiver Partner in den Bewegungsablauf einbezogen.",
    rueckseiteB1: "Das Grundprinzip: Du unterstützt die Bewegung, die der Mensch noch kann. Du trägst ihn nicht einfach. Der Mensch macht aktiv mit.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Vgl. Hatch/Maietta, Kinästhetik-Konzept",
  },
  {
    id: "le06-kk-04",
    vorderseite: "Was sind die 7 Massen und 6 Zwischenräume in der Kinästhetik?",
    rueckseiteC1: "7 Massen: Kopf, Brustkorb, Becken, 2 Arme, 2 Beine (stabile Körperteile). 6 Zwischenräume: Hals, Taille, 2 Achselhöhlen, 2 Leisten (bewegliche Verbindungen). Praxisregel: An den Massen unterstützen, Zwischenräume frei lassen.",
    rueckseiteB1: "7 Massen (= feste Teile): Kopf, Brustkorb, Becken, 2 Arme, 2 Beine. 6 Zwischenräume (= bewegliche Stellen): Hals, Taille, 2 Achselhöhlen, 2 Leisten. Regel: An den Massen anfassen. Die Zwischenräume frei lassen!",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Vgl. Hatch/Maietta, Kinästhetik-Konzept",
  },
  {
    id: "le06-kk-05",
    vorderseite: "Warum soll man beim Transfer nicht unter die Achseln greifen?",
    rueckseiteC1: "Der Brustkorb wird blockiert, Drehbewegungen werden unmöglich, die Pflegekraft trägt das gesamte Gewicht allein. Außerdem besteht Verletzungsgefahr für den Plexus brachialis (Armnervengeflecht).",
    rueckseiteB1: "Drei Gründe: 1. Der Brustkorb kann sich nicht drehen. 2. Du trägst das ganze Gewicht allein. 3. Die Nerven im Arm können verletzt werden. Deshalb: am Becken oder Brustkorb unterstützen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Vgl. Hatch/Maietta, Kinästhetik-Konzept",
  },
  {
    id: "le06-kk-06",
    vorderseite: "Was ist der Unterschied zwischen paralleler und spiraliger Bewegung?",
    rueckseiteC1: "Parallele Bewegung: Beide Körperhälften synchron über eine Achse — kraftaufwändig und unnatürlich. Spiralige Bewegung: Drehbewegung über zwei Achsen — kraftsparend und physiologisch. Kleinkinder nutzen intuitiv spiralige Muster beim Aufrichten.",
    rueckseiteB1: "Parallel: Beide Seiten bewegen sich gleichzeitig. Das braucht viel Kraft. Spiralig: Der Körper dreht sich. Das braucht weniger Kraft und ist natürlicher. Babys richten sich immer spiralig auf.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Vgl. Hatch/Maietta, Kinästhetik-Konzept",
  },
  {
    id: "le06-kk-07",
    vorderseite: "Nenne die 7 Grundpositionen nach der Kinästhetik.",
    rueckseiteC1: "(1) Rückenlage, (2) Bauchlage mit Ellbogenstütz, (3) Schneidersitz, (4) Hand-Knie-Stand, (5) Einbein-Knie-Stand, (6) Einbeinstand, (7) Zweibeinstand. Praxisregel: Erst eine sichere Position herstellen, dann den nächsten Schritt einleiten.",
    rueckseiteB1: "1. Rückenlage, 2. Bauchlage mit Ellbogen, 3. Schneidersitz, 4. Hand-Knie-Stand, 5. Ein-Knie-Stand, 6. Einbeinstand, 7. Zweibeinstand. Regel: Erst eine sichere Position, dann der nächste Schritt.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Vgl. Hatch/Maietta, Kinästhetik-Konzept",
  },
  {
    id: "le06-kk-08",
    vorderseite: "Worauf ist beim Infant Handling (Kinästhetik bei Säuglingen) zu achten?",
    rueckseiteC1: "Säuglinge über die Seite aufnehmen (spiralige Bewegung), nie parallel hochheben. Beim Ablegen Füße zuerst Kontakt zur Unterlage herstellen lassen. Abruptes Hochnehmen kann das Gleichgewichtsorgan überreizen (vestibuläre Überreizung).",
    rueckseiteB1: "Babys immer über die Seite aufnehmen. Nie parallel hochheben! Beim Ablegen die Füße zuerst auf die Unterlage. Schnelles Hochheben kann das Gleichgewicht des Babys überreizen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: false,
    quelle: "Vgl. Hatch/Maietta, Kinästhetik Infant Handling",
  },

  // ===================================================================
  // POSITIONIERUNG (Karten 9–10)
  // ===================================================================

  {
    id: "le06-kk-09",
    vorderseite: "Was ist Positionierung und was unterscheidet sie von \u201ELagerung\u201C?",
    rueckseiteC1: "Positionierung ist die therapeutische Lagerung mit einem definierten Ziel (Druckentlastung, Atemerleichterung, Schmerzlinderung). Der Begriff \u201EPositionierung\u201C ersetzt den veralteten Begriff \u201ELagerung\u201C, weil er den therapeutischen Zweck betont.",
    rueckseiteB1: "Positionierung bedeutet: Du legst den Menschen in eine bestimmte Position mit einem Ziel. Zum Beispiel: Druck entlasten oder Atmen erleichtern. Der alte Begriff \u201ELagerung\u201C wird nicht mehr benutzt.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Vgl. DNQP, Expertenstandard Dekubitusprophylaxe, 2017",
  },
  {
    id: "le06-kk-10",
    vorderseite: "Warum ist die 30\u00B0-Seitenlage die zentrale Positionierung für die Dekubitusprophylaxe?",
    rueckseiteC1: "In der 30\u00B0-Seitenlage werden Trochanter major, Schulter und Kreuzbein gezielt entlastet. Anders als bei der 90\u00B0-Seitenlage entsteht kein hoher Druckpunkt am Trochanter. Sie ist deshalb die Standardposition zur Druckentlastung.",
    rueckseiteB1: "In der 30\u00B0-Seitenlage wird der Druck gut verteilt. Der Knochen an der Hüfte, die Schulter und das Kreuzbein werden entlastet. Bei der 90\u00B0-Seitenlage drückt zu viel auf den Hüftknochen.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Vgl. DNQP, Expertenstandard Dekubitusprophylaxe, 2017",
  },

  // ===================================================================
  // MOBILISATION & TRANSFER (Karten 11–15)
  // ===================================================================

  {
    id: "le06-kk-11",
    vorderseite: "Was prüfst du vor jeder Mobilisation?",
    rueckseiteC1: "Befinden erfragen, Kreislauf kontrollieren (Puls/Blutdruck), Muskelvenenpumpe aktivieren (Füße strecken/anziehen lassen), Ziel erklären, Hilfsmittel bereitstellen, Sicherheit schaffen (rutschfestes Schuhwerk, Bettbremsen feststellen).",
    rueckseiteB1: "1. Frage: \u201EWie fühlen Sie sich?\u201C 2. Puls und Blutdruck prüfen. 3. Füße bewegen lassen. 4. Dem Menschen das Ziel erklären. 5. Hilfsmittel bereitstellen. 6. Feste Schuhe anziehen, Bettbremsen feststellen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Vgl. DNQP, Expertenstandard Erhaltung und Förderung der Mobilität, 2020",
  },
  {
    id: "le06-kk-12",
    vorderseite: "Wie mobilisierst du einen Menschen von der Seitenlage an die Bettkante?",
    rueckseiteC1: "Beine aus dem Bett gleiten lassen, gleichzeitig Oberkörper aufrichten — der Schwung der Beine hilft beim Aufrichten (Hebelprinzip). Dann 1\u20132 Minuten an der Bettkante sitzen lassen, Kreislauf kontrollieren, erst dann weitermobilisieren.",
    rueckseiteB1: "Die Beine gleiten aus dem Bett. Gleichzeitig richtest du den Oberkörper auf. Das Gewicht der Beine hilft dabei. Dann: 1 bis 2 Minuten sitzen lassen. Den Kreislauf prüfen. Erst dann weiter.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Vgl. Fachliteratur Mobilisation",
  },
  {
    id: "le06-kk-13",
    vorderseite: "Wie wird ein aktivierender Transfer Bett \u2192 Rollstuhl durchgeführt?",
    rueckseiteC1: "Rollstuhl schräg zum Bett (zur stärkeren Seite), Bremsen feststellen, Fußstützen weg. Füße parallel und flach auf den Boden. Patient stützt sich ab, Pflegeperson stabilisiert am Becken. Patient steht auf und dreht sich zum Rollstuhl.",
    rueckseiteB1: "Rollstuhl schräg zum Bett stellen (zur starken Seite). Bremsen fest, Fußstützen weg. Füße flach auf den Boden. Der Patient stützt sich ab. Du hältst am Becken. Er steht auf und dreht sich zum Rollstuhl.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Vgl. Fachliteratur Transfer",
  },
  {
    id: "le06-kk-14",
    vorderseite: "Nenne drei Hilfsmittel für den passiven Transfer und ihre Indikation.",
    rueckseiteC1: "Rutschbrett: sitzender Transfer ohne Stehfähigkeit. Drehscheibe: stehender Transfer mit eingeschränkter Drehfähigkeit. Patientenlifter: bei komplettem Bewegungsverlust (mindestens 2 Pflegepersonen).",
    rueckseiteB1: "1. Rutschbrett: Der Mensch kann sitzend rutschen, aber nicht stehen. 2. Drehscheibe: Der Mensch kann stehen, aber sich nicht drehen. 3. Patienten-Lifter: Der Mensch kann sich gar nicht bewegen. Du brauchst 2 Personen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Vgl. Fachliteratur Transfer; SGB V \u00A7 33",
  },
  {
    id: "le06-kk-15",
    vorderseite: "Wonach richtet sich die Auswahl eines Gehstocks, Rollators oder einer Unterarmgehstütze?",
    rueckseiteC1: "Individuell auf Basis von: Barthel-Index, ärztlicher Belastungsvorgabe, Gleichgewichtsfähigkeit und kognitivem Status. Gehstock: leichte Gangunsicherheit. UAG: Teilbelastung nach OP. Rollator: mittlere Gangunsicherheit, beide Hände zum Abstützen nötig.",
    rueckseiteB1: "Das hängt vom Menschen ab: Wie selbstständig ist er? Was sagt der Arzt? Wie gut ist sein Gleichgewicht? Gehstock: bei leichter Unsicherheit. Gehstütze: nach einer Operation. Rollator: wenn beide Hände zum Abstützen nötig sind.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: false,
    quelle: "Vgl. Fachliteratur Hilfsmittelversorgung; SGB V \u00A7 33",
  },

  // ===================================================================
  // BOBATH (Karte 16)
  // ===================================================================

  {
    id: "le06-kk-16",
    vorderseite: "Was ist das Grundprinzip des Bobath-Konzepts?",
    rueckseiteC1: "Die betroffene (gelähmte) Körperseite wird aktiv in alle Handlungen einbezogen, nicht kompensiert. Konkret: Von der betroffenen Seite ansprechen, Nachttisch auf die betroffene Seite, über die betroffene Seite mobilisieren. Ziel: Normalisierung des Muskeltonus und Anbahnung physiologischer Bewegungsmuster.",
    rueckseiteB1: "Die gelähmte Seite wird immer mit einbezogen. Nicht weglassen! Konkret: Von der gelähmten Seite ansprechen. Den Nachttisch auf die gelähmte Seite stellen. Über die gelähmte Seite mobilisieren.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Vgl. Bobath-Konzept, Fachliteratur Neurologie",
  },

  // ===================================================================
  // DEKUBITUS (Karten 17–23)
  // ===================================================================

  {
    id: "le06-kk-17",
    vorderseite: "Was ist ein Dekubitus?",
    rueckseiteC1: "Eine lokal begrenzte Schädigung der Haut und/oder des darunterliegenden Gewebes, typischerweise über einem Knochenvorsprung, verursacht durch Druck und/oder Scherkräfte (NPUAP/EPUAP/PPPIA, 2014).",
    rueckseiteB1: "Ein Dekubitus (= Druckgeschwür) ist eine Wunde an der Haut. Sie entsteht durch zu langen Druck. Besonders gefährdet sind Stellen über Knochen.",
    tag: "krankheitslehre",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Vgl. NPUAP/EPUAP/PPPIA, Internationale Leitlinie, 2014",
  },
  {
    id: "le06-kk-18",
    vorderseite: "Beschreibe die 4 Dekubitus-Kategorien nach EPUAP.",
    rueckseiteC1: "Kat. I: Nicht wegdrückbare Rötung bei intakter Haut. Kat. II: Teilzerstörung der Haut (Blase oder flaches Ulkus). Kat. III: Vollständiger Hautverlust, Subkutis sichtbar, kein Knochen/Muskel. Kat. IV: Vollständiger Gewebeverlust, Knochen/Sehnen/Muskeln freiliegend.",
    rueckseiteB1: "Kat. I: Haut ist rot. Die Rötung geht nicht weg beim Drücken. Kat. II: Blase oder flache Wunde. Kat. III: Haut komplett kaputt. Fettgewebe sichtbar. Kat. IV: Alles zerstört. Knochen oder Muskeln liegen frei.",
    tag: "krankheitslehre",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Vgl. EPUAP/NPUAP Klassifikation, 2014",
  },
  {
    id: "le06-kk-19",
    vorderseite: "Nenne die wichtigsten Prädilektionsstellen in Rücken- und Seitenlage.",
    rueckseiteC1: "Rückenlage: Hinterhaupt, Schulterblätter, Ellbogen, Kreuzbein/Steißbein, Fersen. Seitenlage: Ohr, Schulter, Trochanter major, Knie-Innenseite, Außenknöchel. Sitzposition: Sitzbein und Steißbein.",
    rueckseiteB1: "Rückenlage: Hinterkopf, Schulterblätter, Ellbogen, Kreuzbein und Fersen. Seitenlage: Ohr, Schulter, Hüftknochen, Knie-Innenseite und Knöchel. Im Sitzen: Sitzbein und Steißbein.",
    tag: "anatomie",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Vgl. EPUAP/NPUAP, 2014; DNQP, 2017",
  },
  {
    id: "le06-kk-20",
    vorderseite: "Wie funktioniert der Fingertest?",
    rueckseiteC1: "Auf die gerötete Hautstelle drücken. Wird die Rötung weiß und normalisiert sich: Warnsignal, aber noch kein Dekubitus. Bleibt die Rötung bestehen (nicht wegdrückbar): Dekubitus Kategorie I — sofortige Druckentlastung erforderlich.",
    rueckseiteB1: "Drücke mit dem Finger auf die rote Stelle. Wird sie kurz weiß? Dann ist es ein Warnsignal. Bleibt die Stelle rot? Dann ist es Dekubitus Kategorie I. Sofort den Druck entlasten!",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Vgl. NPUAP/EPUAP, 2014; DNQP, 2017",
  },
  {
    id: "le06-kk-21",
    vorderseite: "Was misst die Braden-Skala und wie wird sie interpretiert?",
    rueckseiteC1: "Die Braden-Skala erfasst 6 Bereiche: Sensorisches Empfindungsvermögen, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Score 6\u201323 Punkte. Niedrigere Werte = höheres Dekubitusrisiko.",
    rueckseiteB1: "Die Braden-Skala prüft 6 Bereiche: Empfinden, Feuchtigkeit, Aktivität, Mobilität, Ernährung und Reibung. Das Ergebnis ist zwischen 6 und 23 Punkten. Wenige Punkte = hohes Dekubitus-Risiko.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Vgl. Braden/Bergstrom, 1987; DNQP, 2017",
  },
  {
    id: "le06-kk-22",
    vorderseite: "Was ist der Kernsatz der Dekubitusprophylaxe?",
    rueckseiteC1: "Bewegung vor Positionierung. Die wichtigste Maßnahme ist die Förderung der Eigenbewegung (Kinästhetik). Erst wenn Eigenbewegung nicht ausreicht, kommen positionierende Maßnahmen und druckverteilende Hilfsmittel zum Einsatz.",
    rueckseiteB1: "Der wichtigste Satz: Bewegung geht vor Positionierung! Zuerst hilfst du dem Menschen, sich selbst zu bewegen. Erst wenn das nicht reicht, benutzt du Lagerungsmaterial oder Spezial-Matratzen.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Vgl. DNQP, Expertenstandard Dekubitusprophylaxe, 2017",
  },
  {
    id: "le06-kk-23",
    vorderseite: "Was ist in der Dekubitusprophylaxe NICHT evidenzbasiert?",
    rueckseiteC1: "Einreiben mit durchblutungsfördernden Mitteln (kein Nutzen belegt), Massage über Knochenvorsprüngen (kann Gewebe zusätzlich schädigen) und pauschale Umlagerungsintervalle ohne individuelle Hautbeurteilung.",
    rueckseiteB1: "Drei Dinge helfen NICHT: 1. Einreiben mit Cremes für die Durchblutung. 2. Massage über Knochen. Das kann die Haut sogar schädigen. 3. Alle 2 Stunden umlagern ohne die Haut zu prüfen.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Vgl. DNQP, Expertenstandard Dekubitusprophylaxe, 2017",
  },

  // ===================================================================
  // STURZPROPHYLAXE (Karten 24–27)
  // ===================================================================

  {
    id: "le06-kk-24",
    vorderseite: "Was ist ein Sturz laut DNQP-Definition?",
    rueckseiteC1: "Ein Ereignis, bei dem eine Person unbeabsichtigt auf dem Boden oder einer tieferen Ebene aufkommt. Auch ein Sturz auf die Knie zählt — die Person muss nicht zum Liegen kommen.",
    rueckseiteB1: "Ein Sturz ist: Ein Mensch fällt hin, ohne es zu wollen. Auch ein Fall auf die Knie zählt als Sturz. Der Mensch muss nicht auf dem Boden liegen.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Vgl. DNQP, Expertenstandard Sturzprophylaxe, 2013",
  },
  {
    id: "le06-kk-25",
    vorderseite: "Nenne je 3 personen-, medikamenten- und umgebungsbezogene Sturzrisikofaktoren.",
    rueckseiteC1: "Personenbezogen: Alter, Gleichgewichtsstörungen, Sturzangst. Medikamentenbezogen: Polypharmazie (\u22655 Medikamente), psychotrope Medikamente, Antihypertensiva. Umgebungsbezogen: Stolperfallen, schlechte Beleuchtung, falsches Schuhwerk.",
    rueckseiteB1: "Person: Alter, Gleichgewichts-Probleme, Sturz-Angst. Medikamente: 5 oder mehr Medikamente, Beruhigungsmittel, Blutdruck-Medikamente. Umgebung: Stolperfallen, schlechtes Licht, falsche Schuhe.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Vgl. DNQP, Expertenstandard Sturzprophylaxe, 2013",
  },
  {
    id: "le06-kk-26",
    vorderseite: "Wie funktioniert der Timed-Up-and-Go-Test?",
    rueckseiteC1: "Aufstehen vom Stuhl, 3 Meter gehen, umdrehen, zurückgehen, setzen. Unter 10 Sekunden: unauffällig. 10\u201319 Sekunden: leichte Einschränkung. Ab 20 Sekunden: erhöhtes Sturzrisiko.",
    rueckseiteB1: "Der Patient steht vom Stuhl auf. Er geht 3 Meter, dreht um und setzt sich wieder. Unter 10 Sekunden: gut. 10 bis 19 Sekunden: leicht eingeschränkt. Ab 20 Sekunden: hohes Sturzrisiko.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Vgl. Podsiadlo/Richardson, 1991; DNQP, 2013",
  },
  {
    id: "le06-kk-27",
    vorderseite: "Erkläre die Sturzangst-Spirale.",
    rueckseiteC1: "Sturz \u2192 Angst \u2192 weniger Bewegung \u2192 Muskelabbau \u2192 erhöhtes Sturzrisiko \u2192 erneuter Sturz \u2192 noch mehr Angst. Dazu kommen sozialer Rückzug und kognitive Verschlechterung. Pflegefachpersonen durchbrechen die Spirale durch Ermutigung, schrittweise Mobilisation und Sicherheitsvermittlung.",
    rueckseiteB1: "Die Spirale: Sturz, dann Angst, dann weniger Bewegung, dann Muskelabbau, dann noch mehr Sturzrisiko, dann wieder ein Sturz. So stoppen: Den Menschen ermutigen. Schritt für Schritt mobilisieren. Sicherheit geben.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Vgl. DNQP, Expertenstandard Sturzprophylaxe, 2013",
  },

  // ===================================================================
  // KONTRAKTUR (Karten 28–30)
  // ===================================================================

  {
    id: "le06-kk-28",
    vorderseite: "Was ist eine Kontraktur und wann entsteht sie?",
    rueckseiteC1: "Dauerhafte Gelenkversteifung durch Schrumpfung von Muskeln, Sehnen und Bändern. Entsteht bei Immobilität bereits nach 4 bis 14 Tagen Ruhigstellung und kann irreversibel werden.",
    rueckseiteB1: "Eine Kontraktur (= Gelenk-Versteifung): Ein Gelenk bewegt sich nicht mehr. Die Muskeln und Bänder sind zu kurz geworden. Das kann schon nach 4 bis 14 Tagen im Bett passieren. Oft ist es nicht mehr rückgängig zu machen.",
    tag: "krankheitslehre",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Vgl. Fachliteratur Kontrakturenprophylaxe",
  },
  {
    id: "le06-kk-29",
    vorderseite: "Wie entsteht ein Spitzfuß und warum ist er klinisch relevant?",
    rueckseiteC1: "Die Bettdecke drückt permanent auf den Fuß und fixiert das Sprunggelenk in Plantarflexion. Entsteht innerhalb weniger Tage Bettruhe. Folge: Der Mensch kann nicht mehr flach auftreten, normales Stehen und Gehen wird unmöglich.",
    rueckseiteB1: "Die Bettdecke drückt dauerhaft auf den Fuß. Der Fuß zeigt nach unten und wird steif. Das passiert schon nach wenigen Tagen im Bett. Die Folge: Der Mensch kann nicht mehr normal stehen und gehen.",
    tag: "krankheitslehre",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Vgl. Fachliteratur Kontrakturenprophylaxe",
  },
  {
    id: "le06-kk-30",
    vorderseite: "Welche Maßnahmen dienen der Kontrakturenprophylaxe?",
    rueckseiteC1: "Aktive Bewegungsübungen (Patient bewegt selbst) und passive Bewegungsübungen (Pflegeperson bewegt) durch den vollen Bewegungsumfang. Frühmobilisation. Physiologische Positionierung (z. B. Fuß in 90\u00B0-Stellung). Hilfsmittel: Spitzfußprophylaxe-Schiene, Bettbogen.",
    rueckseiteB1: "1. Aktive Übungen: Der Mensch bewegt selbst. 2. Passive Übungen: Du bewegst das Gelenk für ihn. 3. Früh aufstehen. 4. Den Fuß in 90\u00B0 lagern. 5. Hilfsmittel benutzen: eine Schiene oder einen Bettbogen gegen den Spitzfuß.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Vgl. Fachliteratur Kontrakturenprophylaxe",
  },

  // ===================================================================
  // THROMBOSE (Karten 31–35)
  // ===================================================================

  {
    id: "le06-kk-31",
    vorderseite: "Was beschreibt die Virchow-Trias?",
    rueckseiteC1: "Die drei Faktoren der Thromboseentstehung: (1) Verlangsamter Blutfluss (bei Immobilität fällt die Muskelvenenpumpe aus), (2) Gefäßwandschädigung (OP, Trauma, Entzündung), (3) Erhöhte Gerinnungsneigung (Dehydratation, Gerinnungsstörungen).",
    rueckseiteB1: "3 Gründe für eine Thrombose: 1. Das Blut fließt zu langsam (weil die Muskelpumpe fehlt). 2. Die Gefäßwand ist beschädigt (zum Beispiel nach einer OP). 3. Das Blut gerinnt zu schnell (zum Beispiel bei zu wenig Trinken).",
    tag: "krankheitslehre",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Vgl. Virchow, 1856; AWMF, S3-Leitlinie VTE-Prophylaxe, 2015",
  },
  {
    id: "le06-kk-32",
    vorderseite: "Was ist der Unterschied zwischen expositionellen und dispositionellen Thrombose-Risikofaktoren?",
    rueckseiteC1: "Expositionell: Akut und zeitlich begrenzt (OP, Trauma, Immobilisation, Schwangerschaft). Dispositionell: Dauerhaft und personenbezogen (Alter >60, Tumorerkrankung, frühere Thrombose, Adipositas). Das Gesamtrisiko ergibt sich aus der Kombination beider Gruppen.",
    rueckseiteB1: "Expositionell (= vorübergehend): OP, Verletzung, Bettruhe, Schwangerschaft. Dispositionell (= dauerhaft): Alter über 60, Krebs, frühere Thrombose, starkes Übergewicht. Das Gesamt-Risiko ist die Kombination aus beiden.",
    tag: "krankheitslehre",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Vgl. AWMF, S3-Leitlinie VTE-Prophylaxe, 2015",
  },
  {
    id: "le06-kk-33",
    vorderseite: "Warum ist eine tiefe Beinvenenthrombose besonders gefährlich?",
    rueckseiteC1: "Im Frühstadium häufig symptomarm oder symptomlos. Das Gerinnsel kann sich lösen, über das venöse System in die Lunge wandern und eine lebensbedrohliche Lungenembolie verursachen.",
    rueckseiteB1: "Am Anfang merkt man oft nichts. Deshalb ist es so gefährlich. Das Blutgerinnsel kann sich lösen. Es wandert dann in die Lunge. Das nennt man Lungen-Embolie. Das ist lebensgefährlich.",
    tag: "krankheitslehre",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Vgl. AWMF, S3-Leitlinie VTE-Prophylaxe, 2015",
  },
  {
    id: "le06-kk-34",
    vorderseite: "Nenne drei pflegerische Maßnahmen der Thromboseprophylaxe.",
    rueckseiteC1: "(1) Frühmobilisation und Aktivierung der Muskelvenenpumpe (Fußkreisen, Fußwippen), (2) Medizinische Thromboseprophylaxe-Strümpfe (MTS) korrekt anlegen, (3) Ausreichende Flüssigkeitszufuhr zur Vermeidung erhöhter Blutviskosität.",
    rueckseiteB1: "1. Früh aufstehen und die Füße bewegen (Fußkreisen, Fußwippen). 2. Thrombose-Strümpfe (MTS) richtig anziehen. 3. Genug trinken. Denn bei zu wenig Flüssigkeit wird das Blut dickflüssiger.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Vgl. AWMF, S3-Leitlinie VTE-Prophylaxe, 2015",
  },
  {
    id: "le06-kk-35",
    vorderseite: "Wie werden MTS (Thromboseprophylaxe-Strümpfe) korrekt angelegt?",
    rueckseiteC1: "Morgens vor dem Aufstehen anziehen (Beine noch entlastet). Richtige Größe ermitteln. Strumpf wenden, über den Fuß ziehen, faltenfrei nach oben ziehen. Zehenbereich frei lassen (Durchblutungskontrolle). Keine Einschnürungen.",
    rueckseiteB1: "Morgens anziehen, bevor der Patient aufsteht. Die richtige Größe nehmen. Den Strumpf umstülpen und über den Fuß ziehen. Dann ohne Falten hochziehen. Die Zehen bleiben frei. Keine Einschnürungen!",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Vgl. AWMF, S3-Leitlinie VTE-Prophylaxe, 2015",
  },

  // ===================================================================
  // PNEUMONIE & PROPHYLAXE-BÜNDEL (Karten 36–39)
  // ===================================================================

  {
    id: "le06-kk-36",
    vorderseite: "Wofür steht das Akronym LISA in der Pneumonieprophylaxe?",
    rueckseiteC1: "L = Lungenbelüftung verbessern (Oberkörperhochlage, Atemübungen, Frühmobilisation). I = Infektionen vermeiden (Mundpflege, Händehygiene). S = Sekret mobilisieren (Flüssigkeitszufuhr, Inhalation). A = Aspiration vermeiden (aufrechte Position beim Essen, Schluckstatus prüfen).",
    rueckseiteB1: "L = Lunge besser belüften (Oberkörper hoch, Atemübungen, früh aufstehen). I = Infektionen vermeiden (Mundpflege, Hände waschen). S = Schleim lösen (genug trinken, inhalieren). A = Verschlucken vermeiden (aufrecht essen, Schlucken prüfen).",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Vgl. Fachliteratur Pneumonieprophylaxe",
  },
  {
    id: "le06-kk-37",
    vorderseite: "Warum ist Mundpflege Teil der Pneumonieprophylaxe?",
    rueckseiteC1: "In der Mundhöhle leben Millionen Bakterien. Bei immobilen Menschen mit eingeschränktem Hustenreflex können diese Keime in die tieferen Atemwege gelangen. Gründliche Mundpflege reduziert die Keimbelastung und damit das Pneumonierisiko.",
    rueckseiteB1: "Im Mund leben viele Bakterien. Wenn ein Mensch schlecht husten kann, gelangen diese Keime in die Lunge. Gute Mundpflege verringert die Keime. So sinkt das Risiko für eine Lungenentzündung.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: false,
    quelle: "Vgl. Fachliteratur Pneumonieprophylaxe",
  },
  {
    id: "le06-kk-38",
    vorderseite: "Was ist Aspiration und bei wem besteht erhöhte Gefahr?",
    rueckseiteC1: "Eindringen von Fremdkörpern, Nahrung oder Flüssigkeit in die Atemwege unterhalb der Stimmritze. Erhöhte Gefahr bei Patienten mit Dysphagie (Schluckstörung), Bewusstseinsstörungen oder eingeschränktem Hustenreflex.",
    rueckseiteB1: "Aspiration (= Verschlucken in die Lunge): Essen oder Trinken gelangt in die Atemwege. Gefahr besteht bei: Schluck-Störungen, Bewusstseins-Störungen oder schwachem Hustenreflex.",
    tag: "krankheitslehre",
    kategorie: "fachbegriff",
    pruefungsrelevant: false,
    quelle: "Vgl. Medizin-Grundlagenwissen",
  },
  {
    id: "le06-kk-39",
    vorderseite: "Warum ist Frühmobilisation die wirksamste Einzelmaßnahme im Prophylaxe-Bündel?",
    rueckseiteC1: "Sie wirkt gleichzeitig auf alle fünf Prophylaxen: fördert Durchblutung (Dekubitus/Thrombose), aktiviert Muskelvenenpumpe (Thrombose), belüftet die Lunge (Pneumonie), erhält Gelenkbeweglichkeit (Kontraktur), stärkt Kraft und Gleichgewicht (Sturz).",
    rueckseiteB1: "Frühmobilisation hilft gegen alle 5 Gefahren gleichzeitig: Sie fördert die Durchblutung. Sie aktiviert die Muskelpumpe. Sie belüftet die Lunge. Sie hält die Gelenke beweglich. Sie stärkt Kraft und Gleichgewicht.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Vgl. DNQP, Expertenstandard Erhaltung und Förderung der Mobilität, 2020",
  },

  // ===================================================================
  // SCHLAF (Karten 40–42)
  // ===================================================================

  {
    id: "le06-kk-40",
    vorderseite: "Wie verläuft ein Schlafzyklus?",
    rueckseiteC1: "Ein Zyklus dauert ca. 90 Minuten und besteht aus Non-REM-Schlaf (Leichtschlaf und Tiefschlaf) und REM-Schlaf (Traumschlaf mit schnellen Augenbewegungen). Pro Nacht werden 4 bis 6 Zyklen durchlaufen.",
    rueckseiteB1: "Ein Schlaf-Zyklus dauert ungefähr 90 Minuten. Zuerst kommt der Leicht- und Tiefschlaf. Dann kommt der Traumschlaf (REM-Schlaf). Pro Nacht gibt es 4 bis 6 Zyklen.",
    tag: "anatomie",
    kategorie: "fakt",
    pruefungsrelevant: false,
    quelle: "Vgl. AASM, ICSD-3, 2014",
  },
  {
    id: "le06-kk-41",
    vorderseite: "Wie verändert sich der Schlaf im Alter?",
    rueckseiteC1: "Tiefschlafphasen werden kürzer, ältere Menschen wachen häufiger auf und schlafen insgesamt leichter. Das ist eine normale altersbedingte Veränderung und kein Zeichen einer Schlafstörung.",
    rueckseiteB1: "Im Alter wird der Tiefschlaf kürzer. Ältere Menschen wachen öfter auf. Sie schlafen leichter. Das ist normal. Das ist keine Schlafstörung.",
    tag: "anatomie",
    kategorie: "fakt",
    pruefungsrelevant: false,
    quelle: "Vgl. Fachliteratur Schlafmedizin",
  },
  {
    id: "le06-kk-42",
    vorderseite: "Nenne 4 Maßnahmen der Schlafhygiene.",
    rueckseiteC1: "Individuelle Schlafgewohnheiten berücksichtigen, Störfaktoren minimieren (Licht, Lärm, Schmerzen), Ein- und Durchschlafrituale respektieren, abendliche Aktivierung vermeiden. Schlafmedikamente nur als letztes Mittel — sie verändern die Schlafarchitektur und erhöhen die Sturzgefahr.",
    rueckseiteB1: "1. Schlaf-Gewohnheiten beachten. 2. Störungen verringern (Licht, Lärm, Schmerzen). 3. Schlaf-Rituale beibehalten. 4. Abends keine aufregenden Aktivitäten. Schlaf-Medikamente nur als letztes Mittel. Sie erhöhen die Sturzgefahr.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: false,
    quelle: "Vgl. Fachliteratur Schlafmedizin",
  },

  // ===================================================================
  // ASSESSMENTS & DOKUMENTATION (Karten 43–44)
  // ===================================================================

  {
    id: "le06-kk-43",
    vorderseite: "Was misst der Barthel-Index?",
    rueckseiteC1: "Die Selbstständigkeit bei 10 Aktivitäten des täglichen Lebens (Essen, Baden, Körperpflege, An-/Auskleiden, Stuhl-/Harnkontrolle, Toilettenbenutzung, Transfer, Mobilität, Treppensteigen). Skala 0\u2013100 Punkte. Höhere Werte = mehr Selbstständigkeit.",
    rueckseiteB1: "Der Barthel-Index prüft 10 Alltags-Tätigkeiten: Essen, Baden, Körperpflege, Anziehen, Stuhl-Kontrolle, Harn-Kontrolle, Toilette, Transfer, Gehen und Treppensteigen. 0 bis 100 Punkte. Mehr Punkte = mehr Selbstständigkeit.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Vgl. Barthel/Mahoney, 1965",
  },
  {
    id: "le06-kk-44",
    vorderseite: "Was gehört in ein Sturzprotokoll?",
    rueckseiteC1: "Datum, Uhrzeit, Ort, Umstände (was tat der Patient?), Schuhwerk, Beleuchtung, Zeugen, Verletzungen, Sofortmaßnahmen, Arztinformation, erneute Sturzrisikoeinschätzung und angepasste Maßnahmen.",
    rueckseiteB1: "In ein Sturzprotokoll gehören: Wann? Wo? Was hat der Patient gemacht? Welche Schuhe? Wie war das Licht? Gab es Zeugen? Welche Verletzungen? Was hast du sofort gemacht? Ist der Arzt informiert? Welche Maßnahmen änderst du?",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: false,
    quelle: "Vgl. DNQP, Expertenstandard Sturzprophylaxe, 2013; \u00A7 4 PflBG",
  },

  // ===================================================================
  // SCHERKRAFT (Karte 45)
  // ===================================================================

  {
    id: "le06-kk-45",
    vorderseite: "Was ist Scherkraft und warum ist sie für den Dekubitus relevant?",
    rueckseiteC1: "Kraft, die tangential (seitlich verschiebend) auf die Haut einwirkt, z. B. beim Rutschen im Bett. Verursacht Gewebeschäden in tieferen Hautschichten, die von außen nicht sichtbar sind. Deshalb Scherkräfte durch Positionierung und Anti-Rutsch-Maßnahmen vermeiden.",
    rueckseiteB1: "Scher-Kraft entsteht, wenn die Haut seitlich verschoben wird. Das passiert zum Beispiel beim Rutschen im Bett. Die Schäden sind unter der Haut. Man sieht sie nicht von außen. Deshalb: Rutschen verhindern!",
    tag: "krankheitslehre",
    kategorie: "fachbegriff",
    pruefungsrelevant: false,
    quelle: "Vgl. NPUAP/EPUAP/PPPIA, Internationale Leitlinie, 2014",
  },

  // ===================================================================
  // ARBEITSSCHUTZ (Karte 46)
  // ===================================================================

  {
    id: "le06-kk-46",
    vorderseite: "Nenne 3 Regeln für rückenschonendes Arbeiten in der Pflege.",
    rueckseiteC1: "(1) Bett auf Arbeitshöhe einstellen (Oberkante Matratze = Hüfthöhe der Pflegeperson). (2) Aus den Beinen arbeiten, nicht aus dem Rücken. (3) Nah am pflegebedürftigen Menschen stehen und Hilfsmittel nutzen. Bei schweren Personen: zweite Pflegekraft hinzuziehen.",
    rueckseiteB1: "1. Das Bett auf deine Hüfthöhe einstellen. 2. Aus den Beinen arbeiten, nicht aus dem Rücken. 3. Nah am Menschen stehen und Hilfsmittel benutzen. Bei schweren Personen: eine zweite Pflegekraft holen.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: false,
    quelle: "Vgl. ArbSchG; Fachliteratur Arbeitsschutz in der Pflege",
  },
];
