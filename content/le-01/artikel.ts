// LE-01 Wissens-Tab: Artikel-Kapitel (9 Kapitel)
// Quelle: I Care Pflege, Thieme, 2. Aufl. 2020, Kap. 01 (S. 20-33), Kap. 02 (S. 34-77), Kap. 03 (S. 78-99)

import type { ArtikelKapitel } from "../_types";

export const LE01_ARTIKEL: ArtikelKapitel[] = [

  // ── Kapitel 1: Geschichte der Pflege ──────────────────────────
  {
    kapitelId: "le01-kap-01",
    titel: "Geschichte der Pflege",
    titelB1: "Wie hat die Pflege begonnen?",
    tag: "pflege",
    geschaetzteDauer: 7,
    glossarBegriffe: ["Profession", "Professionalisierung", "ICN (International Council of Nurses)"],
    bloecke: [
      {
        type: "text",
        contentC1: `Die Geschichte der Pflege reicht weit zurück. Bereits um 500 v. Chr. wurden in Indien Pflegefachkräfte als eigenständige Berufsgruppe erwähnt, die neben Ärzten in Vorläufern heutiger Krankenhäuser arbeiteten. [I Care Pflege S.20] Pflege war also kein \u201Emodernes\u201C Phänomen, sondern von Beginn an eine gesellschaftlich anerkannte Tätigkeit.

Den entscheidenden Impuls für die Professionalisierung gab Florence Nightingale ab 1845. Sie hospitierte in der Kaiserswerther Diakonie, pflegte im Krimkrieg verwundete britische Soldaten und veröffentlichte 1859 \u201ENotes on Nursing\u201C \u2014 das erste systematische Werk zur Pflege. 1860 gründete sie die erste Schwesternschule Englands. Nightingale gilt als erste Pflegetheoretikerin. [I Care Pflege S.21]

In Deutschland trieb Agnes Karll die Entwicklung voran. 1903 forderte sie eine dreijährige Ausbildung für Pflegerinnen und gründete die erste deutsche Berufsorganisation, aus der sich der Deutsche Berufsverband für Pflegeberufe (DBfK) entwickelte. 1907 wurde sie Präsidentin des International Council of Nurses (ICN). [I Care Pflege S.21] Nur ein Jahr zuvor, 1906, hatte Preußen Vorschriften über die staatliche Prüfung von Pflegepersonen eingeführt. Pflege wurde damit erstmals ein gesetzlich anerkannter und geregelter Beruf. [I Care Pflege S.21]`,
        contentB1: `Die Geschichte der Pflege ist sehr alt. Schon vor 2500 Jahren gab es Pflege als Beruf. In Indien arbeiteten Pflegekräfte um 500 v. Chr. neben Ärzten. Sie arbeiteten in frühen Formen von Krankenhäusern. [I Care Pflege S.20] Pflege ist also kein neuer Beruf.

Eine sehr wichtige Person war Florence Nightingale. Sie lebte in England. Ab 1845 lernte sie Pflege in Deutschland. Der Ort hieß Kaiserswerth. Dann pflegte sie verwundete Soldaten im Krimkrieg. 1859 schrieb sie das Buch \u201ENotes on Nursing\u201C. Das war das erste Fachbuch über Pflege. 1860 gründete sie die erste Pflege-Schule in England. Man nennt sie die Begründerin der modernen Pflege. [I Care Pflege S.21]

In Deutschland war Agnes Karll sehr wichtig. 1903 forderte sie: Die Ausbildung in der Pflege soll drei Jahre dauern. Sie gründete die erste Berufs-Organisation in Deutschland. Daraus entstand später der DBfK. Das ist der Deutsche Berufsverband für Pflegeberufe. 1907 wurde Agnes Karll Präsidentin vom ICN. ICN bedeutet International Council of Nurses. [I Care Pflege S.21] Schon 1906 machte Preußen ein Gesetz: Pflegekräfte mussten eine staatliche Prüfung bestehen. Pflege wurde damit ein anerkannter Beruf. [I Care Pflege S.21]`,
        quelle: "I Care Pflege S.20\u201322",
      },
      {
        type: "warnung",
        contentC1: `Die dunkelste Phase der Pflegegeschichte fällt in die Zeit des Nationalsozialismus (1933\u20131945). Berufsverbände wurden unter NS-Führung gestellt. Im sogenannten \u201EEuthanasie\u201C-Programm ab 1940 wurden geistig behinderte und psychisch kranke Patienten in \u201EHeil- und Pflegeanstalten\u201C ermordet. Pflegefachkräfte bereiteten Patienten für den Transport in die Tötungsanstalten vor. [I Care Pflege S.22] Diese Verstrickung mahnt bis heute: Professionelle Pflege braucht nicht nur Fachwissen, sondern auch eine ethische Haltung, die das Wohl jedes einzelnen Menschen über institutionelle Anweisungen stellt. [Transfer]`,
        contentB1: `Die schlimmste Zeit in der Pflege-Geschichte war der Nationalsozialismus (= NS-Zeit, 1933\u20131945). Die Nazis übernahmen die Kontrolle über die Berufsverbände. Ab 1940 töteten sie Menschen mit Behinderungen und psychischen Krankheiten. Das nannte man \u201EEuthanasie\u201C-Programm. Pflegekräfte halfen dabei. Sie bereiteten Patienten für den Transport vor. [I Care Pflege S.22] Das zeigt uns heute: Pflege braucht mehr als Fachwissen. Pflege braucht auch eine ethische Haltung. Das bedeutet: Man muss immer das Wohl der Patienten an die erste Stelle setzen. [Transfer]`,
        quelle: "I Care Pflege S.22",
      },
    ],
  },

  // ── Kapitel 2: Was ist Pflege? Definitionen und Profession ──────────────────────────
  {
    kapitelId: "le01-kap-02",
    titel: "Was ist Pflege? Definitionen und Profession",
    titelB1: "Was bedeutet Pflege? Was ist eine Profession?",
    tag: "pflege",
    geschaetzteDauer: 8,
    glossarBegriffe: ["Profession", "Professionalisierung", "Vorbehaltene Tätigkeiten", "ICN (International Council of Nurses)", "Laienpflege"],
    bloecke: [
      {
        type: "text",
        contentC1: `Pflege lässt sich auf verschiedene Weisen definieren. Der International Council of Nurses (ICN) beschreibt Pflege als die eigenverantwortliche Versorgung und Betreuung von Menschen aller Altersgruppen, von Familien oder Lebensgemeinschaften sowie von Gruppen und sozialen Gemeinschaften \u2014 ob krank oder gesund, in allen Lebenssituationen. [I Care Pflege S.23] Die WHO ergänzt diese Perspektive: Der gesellschaftliche Auftrag der Pflege sei es, dem Einzelnen, der Familie und ganzen Gruppen dabei zu helfen, ihr physisches, psychisches und soziales Potenzial zu bestimmen und zu verwirklichen. [I Care Pflege S.23]`,
        contentB1: `Was ist Pflege? Dafür gibt es verschiedene Definitionen (= Erklärungen).

Der ICN (International Council of Nurses) sagt: Pflege bedeutet, Menschen in allen Altersgruppen eigenverantwortlich zu versorgen und zu betreuen. Das gilt für Familien und für Gruppen. Das gilt für kranke und für gesunde Menschen. [I Care Pflege S.23] Die WHO (Welt-Gesundheits-Organisation) ergänzt: Pflege soll den Menschen helfen. Sie sollen ihre körperlichen, seelischen und sozialen Fähigkeiten erkennen. Und sie sollen diese Fähigkeiten nutzen können. [I Care Pflege S.23]`,
        quelle: "I Care Pflege S.23",
      },
      {
        type: "merke",
        contentC1: `Pflege ist mehr als ein Beruf im allgemeinen Sinne. Ein Beruf ist eine dauerhaft angelegte, in der Regel eine Ausbildung voraussetzende Arbeit, die gegen Bezahlung ausgeübt wird. Eine Profession hingegen muss bestimmte Merkmale aufweisen: Wissen auf wissenschaftlicher Grundlage, kontrollierter Berufszugang durch Abschlussprüfung, verbindliche Berufsrichtlinien wie den Ethikkodex des ICN, Berufsverbände, Autonomie des Berufsstands, gesellschaftliche Relevanz sowie angemessenes Entgelt und Fort- und Weiterbildungsmöglichkeiten. [I Care Pflege S.23-24] Professionalisierung bezeichnet den Prozess, in dem sich ein Beruf zu einer Profession weiterentwickelt. [I Care Pflege S.23]`,
        contentB1: `Pflege ist mehr als nur ein Beruf. Ein Beruf ist eine Arbeit mit Ausbildung und Gehalt. Eine Profession (= gehobener Beruf) hat besondere Merkmale. Es gibt 7 Merkmale: Wissen aus der Wissenschaft, eine Abschluss-Prüfung, Berufsregeln wie den Ethikkodex (= Regeln für richtiges Handeln), Berufsverbände, Selbstständigkeit des Berufs, Bedeutung für die Gesellschaft und gute Bezahlung mit Weiterbildung. [I Care Pflege S.23-24] Professionalisierung (= Weg zur Profession) bedeutet: Ein Beruf entwickelt sich weiter zu einer Profession. [I Care Pflege S.23]`,
        quelle: "I Care Pflege S.23\u201324",
      },
      {
        type: "text",
        contentC1: `Das Pflegeberufegesetz (PflBG) unterstreicht den professionellen Anspruch durch die Definition vorbehaltener Tätigkeiten in § 4: die Erhebung und Feststellung des Pflegebedarfs, die Organisation, Gestaltung und Steuerung des Pflegeprozesses sowie die Analyse, Evaluation, Sicherung und Entwicklung der Pflegequalität. Diese Tätigkeiten dürfen nicht an Pflegehelfer delegiert werden. [I Care Pflege S.23]

Berufliche Pflege grenzt sich von Laienpflege durch vier Merkmale ab: den Abschluss einer pflegerischen Ausbildung, ein tarifliches Gehalt, wissenschaftliche Grundlagen sowie ein definiertes Berufsbild mit Berufskodex. [I Care Pflege S.26] Ende 2017 waren in Deutschland 3,4 Millionen Menschen pflegebedürftig. Davon wurden 1,76 Millionen allein von Angehörigen zu Hause gepflegt \u2014 in zwei von drei Fällen von Frauen. [I Care Pflege S.26] Diese Zahlen verdeutlichen: Ohne pflegende Angehörige wäre die Versorgung nicht tragbar, doch die professionelle Pflege bleibt unverzichtbar, weil sie fachliches Wissen, ethische Standards und systematisches Vorgehen einbringt. [Transfer]`,
        contentB1: `Das Pflegeberufegesetz (PflBG) beschreibt vorbehaltene Tätigkeiten in § 4. Das sind Aufgaben, die nur Pflegefachkräfte machen dürfen. Pflegehelfer dürfen das nicht. Diese Aufgaben sind: den Pflegebedarf feststellen, den Pflegeprozess planen und steuern, und die Pflege-Qualität prüfen und verbessern. [I Care Pflege S.23]

Was ist der Unterschied zwischen Laienpflege (= Pflege durch Familie) und beruflicher Pflege? Es gibt 4 Merkmale: eine Pflege-Ausbildung, ein Gehalt nach Tarif, Wissen aus der Wissenschaft und ein festes Berufsbild mit Regeln. [I Care Pflege S.26] Ende 2017 brauchten in Deutschland 3,4 Millionen Menschen Pflege. 1,76 Millionen von ihnen pflegten Angehörige zu Hause. In 2 von 3 Fällen waren das Frauen. [I Care Pflege S.26] Das zeigt: Ohne die Hilfe von Familien geht es nicht. Aber die professionelle Pflege ist trotzdem sehr wichtig. Sie bringt Fachwissen, ethische Regeln und ein systematisches Vorgehen mit. [Transfer]`,
        quelle: "I Care Pflege S.23, S.26",
      },
    ],
  },

  // ── Kapitel 3: Pflegeverständnis und Berufsverständnis ──────────────────────────
  {
    kapitelId: "le01-kap-03",
    titel: "Pflegeverständnis und Berufsverständnis",
    titelB1: "Was ist Pflege-Verständnis? Was ist Berufs-Verständnis?",
    tag: "pflege",
    geschaetzteDauer: 6,
    glossarBegriffe: ["Pflegeverständnis", "Berufsverständnis", "Pflegeleitbild"],
    bloecke: [
      {
        type: "text",
        contentC1: `Das Pflegeverständnis beschreibt, wie Pflege aus der Perspektive einzelner Personen, Institutionen oder des Gesetzgebers aufgefasst und ausgeübt werden soll. Wesentliche Aspekte sind das Verständnis von Gesundheit und Krankheit, das Menschenbild, die innere Haltung und die Ziele pflegerischen Handelns. [I Care Pflege S.27]

Jede Pflegefachkraft bringt ein individuelles Pflegeverständnis mit, das durch persönliche und soziale Einflüsse geprägt ist: eigene Erfahrungen mit Krankheit und Pflege, soziale Herkunft, kultureller Hintergrund, gesellschaftliche Erwartungshaltungen, Geschlechterrollen, Ausbildung und berufliche Vorerfahrungen. [I Care Pflege S.27] Zwei Pflegende können denselben Patienten betreuen und dabei von unterschiedlichen Grundannahmen ausgehen \u2014 etwa ob Pflege primär körperliche Versorgung oder ganzheitliche Begleitung bedeutet. [Transfer]

Das Berufsverständnis unterscheidet sich vom individuellen Pflegeverständnis dadurch, dass es Haltung, Handlungsanweisungen und Normen beschreibt, die für alle Angehörigen der Berufsgruppe allgemeingültig sein sollen. [I Care Pflege S.27] Es gibt also einen verbindlichen Rahmen, innerhalb dessen sich individuelle Auffassungen bewegen dürfen.`,
        contentB1: `Was ist Pflege-Verständnis? Es beschreibt, wie man Pflege sieht und macht. Wichtige Fragen sind: Was ist Gesundheit? Was ist Krankheit? Welches Bild hat man vom Menschen? Welche Ziele hat die Pflege? [I Care Pflege S.27]

Jede Pflegekraft hat ein eigenes Pflege-Verständnis. Das hängt von vielen Dingen ab: eigene Erfahrungen mit Krankheit, die Familie und Herkunft, die Kultur, die Rolle von Männern und Frauen, die Ausbildung und die Arbeit vorher. [I Care Pflege S.27] Zwei Pflegende betreuen denselben Patienten. Aber sie denken vielleicht anders darüber. Eine Person denkt: Pflege ist vor allem Körperpflege. Die andere denkt: Pflege ist Begleitung vom ganzen Menschen. [Transfer]

Das Berufsverständnis ist etwas anderes als das Pflege-Verständnis. Das Berufsverständnis gilt für alle Pflegekräfte. Es beschreibt Regeln und Normen für den ganzen Beruf. [I Care Pflege S.27] Es gibt also feste Regeln. Aber jede Pflegekraft darf innerhalb dieser Regeln eigene Ideen haben.`,
        quelle: "I Care Pflege S.27",
      },
      {
        type: "text",
        contentC1: `Das Pflegeverständnis hat sich im Laufe der Jahrzehnte grundlegend gewandelt. Bis in die 1950er-Jahre wurde Pflege eher intuitiv ausgeübt; die Motivation war häufig Nächstenliebe und Barmherzigkeit. In den 1960er- und 1970er-Jahren vereinheitlichten sich Methoden und Abläufe. Nach 1980 setzte eine gezielte Professionalisierung ein: Pflegewissenschaft etablierte sich als eigenständige Disziplin, das Bewusstsein für Eigenständigkeit, Ganzheitlichkeit und Interdisziplinarität wuchs. [I Care Pflege S.27] Dieser Wandel ist nicht abgeschlossen. Auch heute noch ringen Pflegende um die Balance zwischen fachlicher Professionalität und menschlicher Zugewandtheit. [Transfer]`,
        contentB1: `Das Pflege-Verständnis hat sich über die Jahre stark verändert. Bis in die 1950er-Jahre war Pflege eher nach Gefühl. Die Motivation war oft Nächsten-Liebe. In den 1960er- und 1970er-Jahren wurden die Methoden einheitlicher. Ab 1980 begann die Professionalisierung (= der Weg zum anerkannten Beruf). Die Pflege-Wissenschaft wurde eine eigene Disziplin (= Fachrichtung). [I Care Pflege S.27] Dieser Wandel geht weiter. Auch heute suchen Pflegende die richtige Balance. Sie wollen fachlich gut und gleichzeitig menschlich nah sein. [Transfer]`,
        quelle: "I Care Pflege S.27",
      },
    ],
  },

  // ── Kapitel 4: Berufspolitik — Verbände, Gewerkschaften, Kammern ──────────────────────────
  {
    kapitelId: "le01-kap-04",
    titel: "Berufspolitik \u2014 Verbände, Gewerkschaften, Kammern",
    titelB1: "Wer vertritt die Pflege in der Politik?",
    tag: "pflege",
    geschaetzteDauer: 7,
    glossarBegriffe: ["Pflegekammer", "Deutscher Pflegerat (DPR)"],
    bloecke: [
      {
        type: "text",
        contentC1: `Pflege ist nicht nur eine Tätigkeit am Bett, sondern auch ein Berufsstand mit politischer Vertretung. Drei Organisationsformen prägen die berufspolitische Landschaft: Berufsverbände, Gewerkschaften und Pflegekammern.

Berufsverbände repräsentieren die Pflegeprofession in der Öffentlichkeit. Sie setzen sich bei Ministerien und Behörden für die Belange der Pflegenden ein, beraten Mitglieder in Rechtsfragen und organisieren Fort- und Weiterbildungen. Der Deutsche Pflegerat (DPR) ist der Dachverband der bedeutendsten Pflegeverbände in Deutschland. [I Care Pflege S.30]

Gewerkschaften sind demokratische Vereinigungen von Arbeitnehmern, die sich freiwillig zusammengeschlossen haben, um gemeinsame Interessen durchzusetzen. Der entscheidende Unterschied zu Berufsverbänden: Gewerkschaften schließen Tarifverträge ab und verhandeln direkt über Gehälter und Arbeitsbedingungen. [I Care Pflege S.31]`,
        contentB1: `Pflege ist nicht nur Arbeit am Bett. Pflege hat auch eine politische Seite. Es gibt drei wichtige Organisationen: Berufsverbände, Gewerkschaften und Pflegekammern.

Ein Berufsverband vertritt den Pflege-Beruf in der Öffentlichkeit. Er spricht mit der Politik für die Pflegenden. Er berät Mitglieder bei Rechts-Fragen. Und er organisiert Weiterbildungen. Der Deutsche Pflegerat (DPR) ist der Dach-Verband. Das bedeutet: Er ist die große Organisation über allen Pflege-Verbänden in Deutschland. [I Care Pflege S.30]

Gewerkschaften sind Vereinigungen von Arbeitnehmern. Sie sind freiwillig. Der wichtige Unterschied zu Berufsverbänden: Gewerkschaften verhandeln über das Gehalt. Sie schließen Tarif-Verträge (= Verträge über Bezahlung und Arbeitszeit) ab. [I Care Pflege S.31]`,
        quelle: "I Care Pflege S.30\u201331",
      },
      {
        type: "text",
        contentC1: `Pflegekammern sind Körperschaften des öffentlichen Rechts mit Pflichtmitgliedschaft für alle Pflegefachkräfte. Ihre Aufgaben umfassen die Erarbeitung einer eigenen Berufsordnung, Qualitätsempfehlungen, das Führen eines Berufsregisters, Regelungen über Fort- und Weiterbildung sowie disziplinarische Maßnahmen bei Regelverstößen. Deutschland hatte 2020 drei Pflegekammern in Rheinland-Pfalz, Schleswig-Holstein und Niedersachsen. [I Care Pflege S.31-32]`,
        contentB1: `Pflegekammern sind anders als Verbände und Gewerkschaften. Sie sind Körperschaften des öffentlichen Rechts (= offizielle staatliche Einrichtungen). Alle Pflegefachkräfte müssen Mitglied sein. Das nennt man Pflicht-Mitgliedschaft. Die Pflegekammer macht eine eigene Berufsordnung (= Regeln für den Beruf). Sie führt ein Register aller Pflegekräfte. Sie regelt die Weiterbildung. Und sie kann bei Regel-Verstößen Strafen geben. 2020 gab es in Deutschland drei Pflegekammern. Sie waren in Rheinland-Pfalz, Schleswig-Holstein und Niedersachsen. [I Care Pflege S.31-32]`,
        quelle: "I Care Pflege S.31\u201332",
      },
      {
        type: "merke",
        contentC1: `Die Debatte um Pflegekammern ist kontrovers. Befürworter argumentieren: Selbstverwaltung schärft das Profil der Pflege, stärkt die Stellung in Politik und Gesellschaft und ermöglicht eine eigene Berufsordnung mit Aufsicht. Kritiker wenden ein: Die Pflichtmitgliedschaft wird als undemokratisch empfunden, es entsteht Bürokratie und bestehende Organisationen könnten die Aufgaben ebenso erfüllen. [I Care Pflege S.31-32] Für Auszubildende ist wichtig zu verstehen: Der Unterschied liegt in der Verbindlichkeit. Ein Berufsverband kann bei Verstößen gegen Standards appellieren, eine Kammer kann Disziplinarverfahren einleiten. [Transfer]`,
        contentB1: `Es gibt eine Diskussion über die Pflegekammer. Manche sind dafür. Sie sagen: Die Kammer stärkt die Pflege in der Politik. Die Pflege bekommt eigene Regeln und eigene Kontrolle. Andere sind dagegen. Sie sagen: Die Pflicht-Mitgliedschaft ist nicht gerecht. Es entsteht zu viel Bürokratie (= Verwaltung). [I Care Pflege S.31-32] Für Auszubildende ist ein Unterschied wichtig: Ein Berufsverband kann nur bitten und mahnen. Eine Kammer kann ein Verfahren (= offizielle Untersuchung) einleiten. [Transfer]`,
        quelle: "I Care Pflege S.31\u201332",
      },
    ],
  },

  // ── Kapitel 5: Das PflBG und die generalistische Ausbildung ──────────────────────────
  {
    kapitelId: "le01-kap-05",
    titel: "Das PflBG und die generalistische Ausbildung",
    titelB1: "Das neue Pflege-Gesetz und die Ausbildung",
    tag: "pflege",
    geschaetzteDauer: 8,
    glossarBegriffe: ["Pflegeberufegesetz (PflBG)", "Generalistische Pflegeausbildung", "Vorbehaltene Tätigkeiten", "Praxisanleiter"],
    bloecke: [
      {
        type: "text",
        contentC1: `Das Pflegeberufegesetz (PflBG) trat am 1. Januar 2020 in Kraft und löste die bis dahin getrennten Ausbildungen in Gesundheits- und Krankenpflege, Gesundheits- und Kinderkrankenpflege sowie Altenpflege ab. Das Ziel: Vermittlung von Kompetenzen zu einer selbstständigen, umfassenden und prozessorientierten Pflege von Menschen aller Altersstufen. [I Care Pflege S.38]

Die generalistische Pflegeausbildung dauert in Vollzeit drei Jahre, in Teilzeit bis zu fünf Jahre. Der theoretische Unterricht umfasst 2100 Stunden, die praktische Ausbildung mindestens 2500 Stunden. [I Care Pflege S.38]`,
        contentB1: `Seit dem 1. Januar 2020 gibt es ein neues Gesetz: das Pflegeberufegesetz (PflBG). Vorher gab es drei getrennte Ausbildungen: Kranken-Pflege, Kinder-Kranken-Pflege und Alten-Pflege. Jetzt gibt es eine gemeinsame Ausbildung. Das Ziel: Man lernt, Menschen in jedem Alter selbstständig zu pflegen. [I Care Pflege S.38]

Die Ausbildung dauert 3 Jahre in Vollzeit. In Teilzeit dauert sie bis zu 5 Jahre. Der Unterricht in der Schule hat 2100 Stunden. Die Praxis hat mindestens 2500 Stunden. [I Care Pflege S.38]`,
        quelle: "I Care Pflege S.38",
      },
      {
        type: "tabelle",
        contentC1: "Die 5 Kompetenzbereiche der theoretischen Pflegeausbildung",
        contentB1: "Die 5 Lern-Bereiche in der Theorie",
        headers: ["Kompetenzbereich", "Bezeichnung", "Stunden"],
        rows: [
          ["KB I", "Pflegeprozesse und Pflegediagnostik", "1000"],
          ["KB II", "Kommunikation und Beratung", "280"],
          ["KB III", "Intra- und interprofessionelles Handeln", "300"],
          ["KB IV", "Gesetzliche Rahmenbedingungen und Ethik", "160"],
          ["KB V", "Pflegewissenschaft und berufsethische Werthaltungen", "160"],
          ["Frei", "Zur freien Verteilung", "200"],
          ["Gesamt", "", "2100"],
        ],
        quelle: "I Care Pflege S.39",
      },
      {
        type: "text",
        contentC1: `Die ersten beiden Ausbildungsjahre erfolgen generalistisch. Zwischen dem 18. und 20. Ausbildungsmonat können Auszubildende wählen: Sie bleiben in der generalistischen Ausbildung und erwerben den Abschluss Pflegefachfrau bzw. Pflegefachmann \u2014 EU-weit anerkannt \u2014 oder sie spezialisieren sich auf Gesundheits- und Kinderkrankenpflege oder Altenpflege. [I Care Pflege S.38]

Zugangsvoraussetzungen sind ein mittlerer Bildungsabschluss oder ein Hauptschulabschluss mit einer abgeschlossenen zweijährigen Berufsausbildung, einer einjährigen Assistenz- oder Helferausbildung oder dem Abschluss einer zehnjährigen allgemeinen Schulbildung. [I Care Pflege S.38]

Die Pflichteinsätze im ersten und zweiten Ausbildungsdrittel umfassen: Orientierungseinsatz (400 Stunden), stationäre Akutpflege (400 Stunden), stationäre Langzeitpflege (400 Stunden), ambulante Pflege (400 Stunden) und pädiatrische Versorgung (120 Stunden) \u2014 insgesamt 1720 Stunden. Am Ende des zweiten Drittels steht eine verpflichtende Zwischenprüfung. [I Care Pflege S.42]`,
        contentB1: `Die ersten 2 Jahre sind für alle gleich. Das nennt man generalistisch (= allgemein). Zwischen dem 18. und 20. Monat kann man wählen. Man kann die generalistische Ausbildung weitermachen. Dann bekommt man den Abschluss Pflegefachfrau oder Pflegefachmann. Dieser Abschluss gilt in der ganzen EU. Oder man kann sich spezialisieren auf Kinder-Kranken-Pflege oder Alten-Pflege. [I Care Pflege S.38]

Wer die Ausbildung machen will, braucht mindestens einen mittleren Schulabschluss. Mit einem Hauptschulabschluss geht es auch. Aber dann braucht man zusätzlich eine andere abgeschlossene Ausbildung. [I Care Pflege S.38]

In den ersten 2 Jahren gibt es Pflicht-Einsätze: Orientierung (400 Stunden), Akut-Pflege im Krankenhaus (400 Stunden), Langzeit-Pflege im Pflegeheim (400 Stunden), ambulante Pflege (400 Stunden) und Kinder-Pflege (120 Stunden). Das sind zusammen 1720 Stunden. Am Ende vom zweiten Drittel gibt es eine Zwischen-Prüfung. [I Care Pflege S.42]`,
        quelle: "I Care Pflege S.38, S.42",
      },
    ],
  },

  // ── Kapitel 6: Kompetenz und Handlungskompetenz ──────────────────────────
  {
    kapitelId: "le01-kap-06",
    titel: "Kompetenz und Handlungskompetenz",
    titelB1: "Was bedeutet Kompetenz in der Pflege?",
    tag: "pflege",
    geschaetzteDauer: 6,
    glossarBegriffe: ["Handlungskompetenz", "Fachkompetenz"],
    bloecke: [
      {
        type: "text",
        contentC1: `Der Begriff Kompetenz stammt aus dem Lateinischen und bedeutet \u201EBefähigung, etwas zu tun\u201C oder \u201EZuständigkeit\u201C. Im pflegerischen Kontext steht nicht die reine Wissensvermittlung im Vordergrund, sondern die Anwendbarkeit von Kenntnissen in konkreten Berufssituationen. [I Care Pflege S.47]

Handlungskompetenz ist nach der Kultusministerkonferenz (KMK, 2011) die Fähigkeit, sich in beruflichen, gesellschaftlichen und privaten Situationen sachgerecht und verantwortlich zu verhalten. Sie setzt sich aus drei Dimensionen zusammen: Fachkompetenz, Personale Kompetenz und Sozialkompetenz. [I Care Pflege S.47]`,
        contentB1: `Das Wort Kompetenz (= Fähigkeit) kommt aus dem Lateinischen. Es bedeutet: Man kann etwas tun und ist dafür zuständig. In der Pflege ist wichtig: Man lernt nicht nur Wissen. Man lernt auch, das Wissen in der Praxis zu nutzen. [I Care Pflege S.47]

Handlungs-Kompetenz bedeutet: Man kann in beruflichen Situationen richtig und verantwortlich handeln. Das sagt die KMK (Kultus-Minister-Konferenz) seit 2011. Es gibt drei Teile: Fach-Kompetenz, Personale Kompetenz und Sozial-Kompetenz. [I Care Pflege S.47]`,
        quelle: "I Care Pflege S.47",
      },
      {
        type: "text",
        contentC1: `Fachkompetenz bedeutet, Aufgaben und Probleme auf der Grundlage fachlichen Wissens und Könnens eigenständig zu lösen und das Ergebnis zu beurteilen. Dazu gehören Fachwissen, Fachsprache, fachspezifische Methoden und fachübergreifendes Wissen aus Medizin, Soziologie, Psychologie, Ethik und Recht. [I Care Pflege S.47] Wer eine Pflegeanamnese erhebt, braucht nicht nur Wissen über die richtigen Fragen, sondern auch die Fähigkeit, Antworten fachlich einzuordnen. [Transfer]

Sozialkompetenz ist in der Pflege besonders bedeutsam, weil Pflege immer mit und an Menschen stattfindet \u2014 sowohl mit Pflegeempfängern als auch im interdisziplinären Team. Sie umfasst Beziehungs- und Teamfähigkeit, Einfühlungsvermögen, Kooperations- und Konfliktlösebereitschaft, Konsensfähigkeit und Toleranz. [I Care Pflege S.48]`,
        contentB1: `Was ist Fach-Kompetenz? Man kann Aufgaben und Probleme selbstständig lösen. Man hat Fachwissen und kennt die Fachsprache. Man kennt auch Wissen aus anderen Bereichen: Medizin, Psychologie, Ethik und Recht. [I Care Pflege S.47] Ein Beispiel: Bei der Pflege-Anamnese (= erste Befragung des Patienten) muss man die richtigen Fragen stellen. Und man muss die Antworten fachlich verstehen. [Transfer]

Was ist Sozial-Kompetenz? Man kann gut mit anderen Menschen arbeiten. Das ist in der Pflege besonders wichtig. Man arbeitet mit Patienten und im Team. Sozial-Kompetenz bedeutet: Teamfähigkeit, Einfühlungsvermögen (= Empathie), Zusammenarbeit, Konflikte lösen und Toleranz (= andere Meinungen akzeptieren). [I Care Pflege S.48]`,
        quelle: "I Care Pflege S.47\u201348",
      },
      {
        type: "merke",
        contentC1: `Die drei Dimensionen bedingen sich gegenseitig. Fachkompetenz ohne Sozialkompetenz führt zu technisch korrekter, aber menschlich kalter Pflege. Sozialkompetenz ohne Fachkompetenz erzeugt Zuwendung, die fachlich nicht fundiert ist. Personale Kompetenz \u2014 also Selbstreflexion, Eigenverantwortung und Belastbarkeit \u2014 hält beides zusammen. [Transfer] In der Pflegeausbildung werden alle drei Dimensionen gleichzeitig entwickelt: im Unterricht, in der Praxis und in der Reflexion.`,
        contentB1: `Die drei Teile gehören zusammen. Fach-Kompetenz allein ist zu wenig. Dann ist die Pflege fachlich richtig, aber kalt. Sozial-Kompetenz allein ist auch zu wenig. Dann ist man freundlich, aber weiß nicht genug. Personale Kompetenz verbindet beides. Sie bedeutet: Man denkt über sich selbst nach. Man ist verantwortlich und belastbar. [Transfer] In der Ausbildung lernt man alle drei Teile gleichzeitig.`,
        quelle: "I Care Pflege S.47\u201348",
      },
    ],
  },

  // ── Kapitel 7: Der Pflegeprozess — Einführung ──────────────────────────
  {
    kapitelId: "le01-kap-07",
    titel: "Der Pflegeprozess \u2014 Einführung",
    titelB1: "Was ist der Pflege-Prozess?",
    tag: "pflege",
    geschaetzteDauer: 8,
    glossarBegriffe: ["Pflegeprozess", "Fiechter und Meier", "Pflegeanamnese", "Pflegeproblem", "Ressourcen (pflegerisch)", "Pflegeziel", "Evaluation (Pflege)"],
    bloecke: [
      {
        type: "text",
        contentC1: `Der Pflegeprozess ist das zentrale Arbeitsinstrument professioneller Pflege. Er ist ein systematischer und zielgerichteter Arbeits- und Problemlösungsprozess, in dem gemeinsam mit dem Pflegeempfänger sein individueller Pflegebedarf erhoben wird, um darauf aufbauend eine bestmögliche Pflege zu erreichen. Laut § 4 PflBG zählt der Pflegeprozess zu den vorbehaltenen Tätigkeiten der Pflegefachkräfte. [I Care Pflege S.78]`,
        contentB1: `Der Pflege-Prozess ist das wichtigste Werkzeug in der Pflege. Er hilft, die Pflege systematisch (= Schritt für Schritt) zu planen. Man arbeitet zusammen mit dem Patienten. Man findet heraus: Was braucht dieser Patient? Dann plant man die beste Pflege. Laut Gesetz (§ 4 PflBG) dürfen nur Pflegefachkräfte den Pflege-Prozess machen. [I Care Pflege S.78]`,
        quelle: "I Care Pflege S.78",
      },
      {
        type: "merke",
        contentC1: `Im deutschsprachigen Raum hat sich das sechsschrittige Pflegeprozessmodell nach Fiechter und Meier durchgesetzt. Die sechs Schritte bilden einen Regelkreis: (1) Informationssammlung, (2) Erkennen von Pflegeproblemen und Ressourcen, (3) Festlegung der Pflegeziele, (4) Planung der Pflegemaßnahmen, (5) Durchführung der Pflege, (6) Evaluation. [I Care Pflege S.78] Der Begriff \u201ERegelkreis\u201C bedeutet: Nach der Evaluation beginnt der Prozess bei Bedarf erneut \u2014 Pflege ist kein linearer Vorgang, sondern eine fortlaufende Anpassung. [Transfer]`,
        contentB1: `In Deutschland nutzt man das Modell von Fiechter und Meier. Es hat 6 Schritte. Die Schritte bilden einen Kreis. Das bedeutet: Nach dem letzten Schritt fängt man wieder von vorne an.

Die 6 Schritte sind:
1. Informationen sammeln
2. Pflege-Probleme und Ressourcen (= Stärken) erkennen
3. Pflege-Ziele festlegen
4. Pflege-Maßnahmen planen
5. Die Pflege machen
6. Evaluation (= Prüfen: Hat es geholfen?)

[I Care Pflege S.78] Pflege ist kein gerader Weg. Man prüft immer wieder und passt die Pflege an. [Transfer]`,
        quelle: "I Care Pflege S.78",
      },
      {
        type: "text",
        contentC1: `Im ersten Schritt werden alle pflegerelevanten Daten über den Pflegeempfänger erhoben. Dabei wird zwischen direkten und indirekten Informationen sowie zwischen objektiven und subjektiven Informationen unterschieden. Die Pflegeanamnese ist eine Methode der strukturierten Datenerhebung, die in der Regel bei der Aufnahme durchgeführt wird. [I Care Pflege S.80]

Im zweiten Schritt werden Pflegeprobleme identifiziert: physische, psychische, emotionale, soziale oder organisatorische Beeinträchtigungen, die den Pflegeempfänger in der Selbstpflege einschränken. Pflegeprobleme können aktuell, potenziell, verdeckt, generell oder individuell sein. [I Care Pflege S.81] Gleichzeitig werden Ressourcen erfasst \u2014 Fähigkeiten, Fertigkeiten und Einflüsse, die den Betroffenen bei der Bearbeitung seiner Probleme unterstützen können. Ressourcen lassen sich in sechs Kategorien einteilen: körperliche, innere, räumliche, soziale, ökonomische und spirituelle. [I Care Pflege S.82]

Pflegeziele geben Richtung, Art und Umfang der Pflegemaßnahmen vor und dienen als Evaluationsgrundlage. Sie müssen spezifisch, messbar, akzeptiert, realisierbar und terminierbar formuliert sein. [I Care Pflege S.82-83]`,
        contentB1: `Im ersten Schritt sammelt man alle wichtigen Informationen über den Patienten. Es gibt verschiedene Arten von Informationen: direkte (man sieht oder misst etwas selbst) und indirekte (man liest in der Akte). Es gibt auch objektive Informationen (zum Beispiel der Blutdruck) und subjektive Informationen (der Patient sagt, wie er sich fühlt). Die Pflege-Anamnese (= erste Befragung) macht man bei der Aufnahme. [I Care Pflege S.80]

Im zweiten Schritt sucht man die Pflege-Probleme. Das sind Einschränkungen des Patienten. Zum Beispiel: Der Patient kann sich nicht alleine waschen. Pflege-Probleme können aktuell sein. Oder sie können in der Zukunft kommen. Gleichzeitig schaut man auf die Ressourcen (= Stärken und Fähigkeiten). Es gibt 6 Arten: körperliche, innere, räumliche, soziale, finanzielle und geistliche Ressourcen. [I Care Pflege S.81-82]

Pflege-Ziele beschreiben: Was soll die Pflege erreichen? Gute Ziele sind: spezifisch (= genau), messbar, akzeptiert vom Patienten, realisierbar (= erreichbar) und terminiert (= mit Zeitangabe). [I Care Pflege S.82-83]`,
        quelle: "I Care Pflege S.80\u201383",
      },
    ],
  },

  // ── Kapitel 8: Berufsethik und ICN-Ethikkodex ──────────────────────────
  {
    kapitelId: "le01-kap-08",
    titel: "Berufsethik und ICN-Ethikkodex",
    titelB1: "Ethik in der Pflege \u2014 was bedeutet das?",
    tag: "pflege",
    geschaetzteDauer: 6,
    glossarBegriffe: ["Ethikkodex (ICN)", "Pflegekammer", "Profession"],
    bloecke: [
      {
        type: "text",
        contentC1: `Professionelle Pflege erfordert nicht nur Fachwissen und Handlungskompetenz, sondern auch eine ethische Grundhaltung. Der International Council of Nurses (ICN) formulierte bereits 1953 einen internationalen Ethikkodex für Pflegefachkräfte (Code of Ethics for Nurses). Er wurde seitdem mehrfach überarbeitet und definiert die ethischen Pflichten professionell Pflegender gegenüber Pflegeempfängern, der eigenen Berufsausübung, der Profession und den Kollegen. [I Care Pflege S.24]

Auf nationaler Ebene besagt die Rahmenberufsordnung des Deutschen Pflegerats, dass Pflegende ihren Beruf \u201Eentsprechend dem allgemein anerkannten Stand pflegewissenschaftlicher, medizinischer und weiterer bezugswissenschaftlicher Erkenntnisse ausüben sollen\u201C. [I Care Pflege S.46] Diese Formulierung ist anspruchsvoll: Sie verlangt, dass Pflegende sich kontinuierlich weiterbilden und ihr Handeln an aktueller Evidenz ausrichten.`,
        contentB1: `Gute Pflege braucht nicht nur Fachwissen. Sie braucht auch eine ethische Haltung. Ethik (= die Lehre vom richtigen Handeln) ist sehr wichtig in der Pflege.

Der ICN hat schon 1953 einen Ethikkodex geschrieben. Das ist ein Regel-Werk für richtiges Verhalten. Auf Englisch heißt er \u201ECode of Ethics for Nurses\u201C. Er beschreibt die Pflichten von Pflegekräften. Es gibt vier Bereiche: Pflichten gegenüber den Patienten, Pflichten bei der eigenen Arbeit, Pflichten gegenüber dem Beruf und Pflichten gegenüber den Kollegen. [I Care Pflege S.24]

In Deutschland gibt es die Rahmen-Berufsordnung vom Deutschen Pflegerat. Dort steht: Pflegende sollen nach dem neuesten Stand der Pflege-Wissenschaft arbeiten. [I Care Pflege S.46] Das bedeutet: Man muss sich immer weiterbilden. Man muss immer nach dem neuesten Wissen arbeiten.`,
        quelle: "I Care Pflege S.24, S.46",
      },
      {
        type: "merke",
        contentC1: `Allerdings gibt es einen wichtigen Unterschied in der Durchsetzbarkeit. Berufsverbände können bei Verstößen gegen die Berufsordnung keine Konsequenzen veranlassen \u2014 die Berufsordnung ist derzeit hauptsächlich eine Selbstverpflichtung. Pflegekammern hingegen, wo sie existieren, können Disziplinarverfahren einleiten und berufsrechtliche Konsequenzen durchsetzen. [I Care Pflege S.24]`,
        contentB1: `Aber es gibt einen wichtigen Unterschied. Ein Berufsverband kann bei Regel-Verstößen nichts machen. Die Berufsordnung ist eine freiwillige Verpflichtung. Eine Pflegekammer ist anders. Sie kann ein Verfahren einleiten und Strafen geben. [I Care Pflege S.24]`,
        quelle: "I Care Pflege S.24",
      },
      {
        type: "text",
        contentC1: `Die ethische Reflexion in der Pflege stützt sich auf vier Prinzipien nach Beauchamp und Childress: Autonomie (das Recht des Pflegeempfängers auf Selbstbestimmung), Fürsorge (die Verpflichtung, das Wohl des Pflegeempfängers zu fördern), Gerechtigkeit (gleiche Versorgung für alle, unabhängig von Herkunft, Status oder Diagnose) und Nicht-Schaden (die Pflicht, dem Pflegeempfänger keinen Schaden zuzufügen). [I Care Pflege S.753-754] Diese vier Prinzipien stehen nicht immer im Einklang. Wenn ein Patient die Behandlung ablehnt, kollidieren Autonomie und Fürsorge. Solche Spannungen auszuhalten und reflektiert zu entscheiden gehört zum Kern professioneller Pflege. [Transfer]`,
        contentB1: `In der Pflege gibt es 4 ethische Prinzipien (= Grundsätze). Sie kommen von Beauchamp und Childress:
1. Autonomie (= Selbst-Bestimmung): Der Patient darf selbst entscheiden.
2. Fürsorge: Die Pflegekraft sorgt für das Wohl des Patienten.
3. Gerechtigkeit: Alle Patienten bekommen die gleiche Versorgung.
4. Nicht-Schaden: Man darf dem Patienten keinen Schaden zufügen.

[I Care Pflege S.753-754] Diese 4 Prinzipien passen nicht immer zusammen. Ein Beispiel: Ein Patient will keine Behandlung. Er hat das Recht dazu (Autonomie). Aber die Pflegekraft will ihm helfen (Fürsorge). Das ist ein Konflikt. Solche Konflikte gehören zur Pflege. Man muss darüber nachdenken und gut entscheiden. [Transfer]`,
        quelle: "I Care Pflege S.753\u2013754",
      },
    ],
  },

  // ── Kapitel 9: Selbstpflege und Stressbewältigung ──────────────────────────
  {
    kapitelId: "le01-kap-09",
    titel: "Selbstpflege und Stressbewältigung",
    titelB1: "Wie kann ich als Pflegekraft auf mich achten?",
    tag: "pflege",
    geschaetzteDauer: 6,
    glossarBegriffe: ["Eisenhower-Methode", "Progressive Muskelentspannung (PMR)"],
    bloecke: [
      {
        type: "text",
        contentC1: `Pflegefachkräfte arbeiten unter hoher körperlicher und psychischer Belastung. Zu den Risiken gehören Rückenschmerzen durch Heben und Tragen, Schichtarbeit mit den Folgen eines sozialen Jetlags sowie emotionale Belastung durch die tägliche Konfrontation mit Leid und Tod. Die Burnout-Gefährdung ist in Pflegeberufen überdurchschnittlich hoch. [I Care Pflege S.56-63] Selbstpflege ist deshalb keine Luxusoption, sondern eine berufliche Notwendigkeit. Wer sich nicht um sich selbst kümmert, kann langfristig nicht für andere sorgen. [Transfer]`,
        contentB1: `Pflegekräfte haben eine schwere Arbeit. Der Körper wird stark belastet. Viele bekommen Rücken-Schmerzen vom Heben und Tragen. Die Schichtarbeit ist anstrengend. Man arbeitet manchmal nachts oder am Wochenende. Und die Arbeit ist emotional schwer. Man sieht jeden Tag Leid und manchmal auch Tod. Die Gefahr für Burnout (= totale Erschöpfung durch die Arbeit) ist in der Pflege besonders hoch. [I Care Pflege S.56-63] Deshalb ist Selbst-Pflege sehr wichtig. Man muss auch auf sich selbst achten. Wer nicht auf sich achtet, kann irgendwann nicht mehr gut für andere sorgen. [Transfer]`,
        quelle: "I Care Pflege S.56\u201363",
      },
      {
        type: "text",
        contentC1: `Ein bewährtes Instrument für das Zeitmanagement ist die Eisenhower-Methode. Sie teilt Aufgaben in vier Kategorien ein: dringend und wichtig \u2014 sofort erledigen; nicht dringend, aber wichtig \u2014 terminieren; nicht wichtig, aber dringend \u2014 delegieren; weder wichtig noch dringend \u2014 nicht bearbeiten. Kategorie zwei wird im Pflegealltag oft unterschätzt, bietet aber den nötigen Ausgleich: Sport, Erholung, Fortbildung und soziale Kontakte fallen typischerweise in diese Kategorie. [I Care Pflege S.73]`,
        contentB1: `Für ein gutes Zeit-Management gibt es die Eisenhower-Methode. Man teilt Aufgaben in 4 Gruppen ein:
1. Dringend und wichtig: Sofort erledigen.
2. Nicht dringend, aber wichtig: Einen Termin dafür planen.
3. Nicht wichtig, aber dringend: An jemand anderen geben.
4. Nicht wichtig und nicht dringend: Nicht machen.

Gruppe 2 wird oft vergessen. Aber sie ist sehr wichtig. Dazu gehören: Sport, Erholung, Weiterbildung und Treffen mit Freunden. [I Care Pflege S.73]`,
        quelle: "I Care Pflege S.73",
      },
      {
        type: "text",
        contentC1: `Für akute Stresssituationen stehen kurzfristige Bewältigungsmethoden zur Verfügung: spontane Entspannung durch die 4-6-8-Atemtechnik (vier Sekunden einatmen, sechs Sekunden halten, acht Sekunden ausatmen), positives Selbstgespräch, kontrolliertes Abreagieren, Wahrnehmungslenkung und Gedankenstopp. [I Care Pflege S.75] Diese Techniken lassen sich direkt im Arbeitsalltag anwenden \u2014 etwa in einer kurzen Pause zwischen zwei Pflegesituationen. [Transfer]

Langfristig wirksam sind körperliche Bewegung wie Joggen, Walken oder Schwimmen, aber auch Yoga, Qigong und Tai-Chi. Besonders empfehlenswert ist die Progressive Muskelentspannung nach Jacobson: Durch abwechselndes Anspannen und Entspannen einzelner Muskelgruppen wird das Wohlbefinden gesteigert. Die Methode ist leicht erlernbar und eignet sich auch für Einsteiger. [I Care Pflege S.77]`,
        contentB1: `Bei akutem Stress helfen schnelle Methoden. Eine gute Übung ist die 4-6-8-Atem-Technik: Man atmet 4 Sekunden ein. Man hält 6 Sekunden die Luft an. Man atmet 8 Sekunden aus. Andere Methoden sind: positives Selbst-Gespräch (= sich selbst Mut machen), Gedanken-Stopp (= negative Gedanken bewusst stoppen) und Wahrnehmungs-Lenkung (= an etwas Schönes denken). [I Care Pflege S.75] Diese Methoden kann man direkt bei der Arbeit nutzen. Zum Beispiel in einer kurzen Pause. [Transfer]

Langfristig hilft Bewegung am besten. Zum Beispiel: Joggen, Walken, Schwimmen, Yoga oder Qigong. Sehr gut ist auch die Progressive Muskel-Entspannung nach Jacobson. Das funktioniert so: Man spannt einzelne Muskeln an. Dann entspannt man sie wieder. Das steigert das Wohl-Befinden (= man fühlt sich besser). Die Methode ist leicht zu lernen. Sie ist auch gut für Anfänger. [I Care Pflege S.77]`,
        quelle: "I Care Pflege S.75, S.77",
      },
    ],
  },
];
