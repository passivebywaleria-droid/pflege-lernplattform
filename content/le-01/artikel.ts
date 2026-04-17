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
    zusammenfassung: "Von den ersten Pflegenden in der Antike über Nightingale bis zur NS-Zeit — wie Pflege zum anerkannten Beruf wurde.",
    zusammenfassungB1: "Pflege ist ein sehr alter Beruf. Nightingale und Agnes Karll haben ihn verändert. Die NS-Zeit war das dunkelste Kapitel.",
    headerImageUrl: "/images/content/le-01/header/kap-01-geschichte.svg",
    glossarBegriffe: ["Profession", "Professionalisierung", "ICN (International Council of Nurses)"],
    bloecke: [
      {
        type: "text",
        contentC1: `Wer denkt, Pflege sei ein moderner Beruf, irrt. Schon in altindischen Schriften aus der Zeit um 500 v. Chr. tauchen Beschreibungen von Menschen auf, die Kranke versorgten — organisiert, mit festen Aufgaben, neben den Ärzten. Es sind die frühesten bekannten Belege dafür, dass Pflege keine zufällige Hilfeleistung war, sondern eine gesellschaftlich anerkannte Tätigkeit.

Die Frage, wann Pflege zur Profession wurde, führt unweigerlich zu einer Engländerin: Florence Nightingale. Als junge Frau aus wohlhabendem Haus widersetzte sie sich den Konventionen ihrer Zeit. 1845 lernte sie in der Kaiserswerther Diakonie bei Düsseldorf, wie systematische Krankenpflege aussehen konnte. Jahre später, während des Krimkriegs (1853–1856), organisierte sie die Versorgung verwundeter britischer Soldaten — und senkte die Sterblichkeitsrate dramatisch. 1859 fasste sie ihre Beobachtungen in „Notes on Nursing" zusammen, dem ersten methodischen Pflegewerk überhaupt. Ein Jahr später eröffnete sie in London die erste professionelle Pflegeschule.

In Deutschland schrieb Agnes Karll Geschichte. Als freiberufliche Krankenschwester erlebte sie um 1900 die miserablen Arbeitsbedingungen ihrer Kolleginnen — unbezahlte Überstunden, keine Altersvorsorge, totale Abhängigkeit von den Arbeitgebern. 1903 gründete sie eine Standesorganisation, aus der später der DBfK (Deutscher Berufsverband für Pflegeberufe) hervorging. Vier Jahre später wurde sie zur Präsidentin des ICN gewählt. Parallel dazu führte Preußen 1906 die erste staatliche Pflegeprüfung ein — ein Meilenstein, denn damit war Pflege erstmals gesetzlich als Beruf verankert.`,
        contentB1: `Pflege ist ein sehr alter Beruf. Schon vor 2500 Jahren gab es in Indien Menschen, die Kranke versorgten. Sie arbeiteten neben Ärzten. Pflege ist also kein neuer Beruf.

Eine sehr wichtige Person war Florence Nightingale aus England. 1845 lernte sie in Deutschland, wie gute Pflege funktioniert. Der Ort hieß Kaiserswerth bei Düsseldorf. Später pflegte sie verwundete Soldaten im Krimkrieg. Sie machte die Pflege viel besser — weniger Soldaten starben. 1859 schrieb sie das Buch „Notes on Nursing". Das war das erste Fachbuch über Pflege. 1860 eröffnete sie die erste Pflege-Schule in London.

In Deutschland war Agnes Karll sehr wichtig. Sie sah: Die Arbeitsbedingungen für Pflegende sind schlecht. 1903 gründete sie eine Berufs-Organisation. Daraus entstand später der DBfK (Deutscher Berufsverband für Pflegeberufe). 1907 wurde sie Präsidentin vom ICN (International Council of Nurses). Schon 1906 gab es in Preußen die erste staatliche Pflege-Prüfung. Pflege wurde damit ein anerkannter Beruf.`,
        contentKurz: `Pflege gibt es seit über 2500 Jahren. Florence Nightingale gründete 1860 die erste Pflegeschule. Agnes Karll gründete 1903 die erste deutsche Berufsorganisation. 1906 gab es die erste staatliche Pflegeprüfung.`,
        contentKurzB1: `Pflege gibt es seit über 2500 Jahren. Florence Nightingale hat 1860 die erste Pflege-Schule gegründet. Agnes Karll hat 1903 die erste Berufs-Organisation gegründet. 1906 gab es die erste Pflege-Prüfung.`,
        contentErweitert: `Wer denkt, Pflege sei ein moderner Beruf, irrt. Schon in altindischen Schriften aus der Zeit um 500 v. Chr. tauchen Beschreibungen von Menschen auf, die Kranke versorgten — organisiert, mit festen Aufgaben, neben den Ärzten. Im antiken Rom übernahmen Frauen und Sklaven die Versorgung Kranker, während im Mittelalter christliche Ordensgemeinschaften diese Aufgabe institutionalisierten — etwa die Johanniter (gegründet um 1099) und die Barmherzigen Brüder (gegründet 1540).

Die Frage, wann Pflege zur Profession wurde, führt unweigerlich zu Florence Nightingale. 1845 lernte sie in der Kaiserswerther Diakonie bei Düsseldorf, wie systematische Krankenpflege aussehen konnte. Dort erlebte sie das Modell von Theodor Fliedner, der bereits 1836 eine Diakonissenanstalt mit strukturierter Pflegeausbildung gegründet hatte. Während des Krimkriegs (1853–1856) organisierte Nightingale die Versorgung verwundeter britischer Soldaten und senkte die Sterblichkeitsrate von über 40 % auf unter 5 % — vor allem durch Hygienemaßnahmen, Belüftung und systematische Dokumentation. 1859 veröffentlichte sie „Notes on Nursing", 1860 eröffnete sie die erste professionelle Pflegeschule am St Thomas' Hospital in London.

In Deutschland schrieb Agnes Karll Geschichte. 1903 gründete sie die Berufsorganisation der Krankenpflegerinnen Deutschlands (B.O.K.D.), die erste freie Standesvertretung — unabhängig von Kirche und Roten Kreuz. Ihre Forderungen waren revolutionär: geregelte Arbeitszeiten, Altersversorgung, freie Berufswahl. 1907 wurde sie zur ICN-Präsidentin gewählt. Preußen führte 1906 die erste staatliche Pflegeprüfung ein. 1938 wurde mit dem Krankenpflegegesetz erstmals eine reichseinheitliche Regelung geschaffen — allerdings bereits unter nationalsozialistischem Einfluss.`,
        contentErweitertB1: `Pflege ist ein sehr alter Beruf. Schon vor 2500 Jahren gab es in Indien Menschen, die Kranke versorgten. Im alten Rom pflegten Frauen und Sklaven die Kranken. Im Mittelalter übernahmen Klöster und religiöse Gruppen die Pflege — zum Beispiel die Johanniter (gegründet um 1099).

Florence Nightingale war eine sehr wichtige Person. 1845 lernte sie in Kaiserswerth bei Düsseldorf gute Pflege. Dort hatte Theodor Fliedner schon 1836 eine Pflege-Schule gegründet. Nightingale pflegte dann im Krimkrieg verwundete Soldaten. Sie machte alles sauberer und organisierter. Dadurch sank die Sterblichkeit von über 40 % auf unter 5 %. 1859 schrieb sie das Buch „Notes on Nursing". 1860 eröffnete sie die erste Pflege-Schule in London.

Agnes Karll war sehr wichtig für Deutschland. 1903 gründete sie die erste freie Berufs-Organisation für Pflegende. Sie kämpfte für bessere Arbeitsbedingungen: feste Arbeitszeiten, Rente, freie Berufswahl. 1907 wurde sie ICN-Präsidentin. 1906 gab es in Preußen die erste staatliche Pflege-Prüfung. 1938 kam das erste Krankenpflege-Gesetz für ganz Deutschland.`,
        kernaussage: "Pflege ist seit über 2500 Jahren eine gesellschaftlich anerkannte Tätigkeit.",
        kernaussageB1: "Pflege ist ein sehr alter Beruf — über 2500 Jahre alt.",
        quelle: "Vgl. Nightingale, Notes on Nursing, 1859; Agnes-Karll-Institut, Historische Quellen",
      },
      {
        type: "wusstestdu",
        contentC1: "Florence Nightingale senkte die Sterblichkeitsrate verwundeter Soldaten im Krimkrieg von über 40 % auf unter 5 % — allein durch bessere Hygiene und Organisation der Pflege.",
        contentB1: "Florence Nightingale hat im Krieg die Sterblichkeit von über 40 % auf unter 5 % gesenkt. Nur durch bessere Hygiene und Organisation!",
      },
      {
        type: "warnung",
        contentC1: `Zur Pflegegeschichte gehört auch ihr dunkelstes Kapitel: die Zeit des Nationalsozialismus (1933–1945). Das NS-Regime instrumentalisierte den Pflegeberuf für seine Ideologie. Berufsverbände wurden gleichgeschaltet. Im sogenannten „Euthanasie"-Programm (Aktion T4) ab 1940 wurden hunderttausende Menschen mit Behinderungen und psychischen Erkrankungen systematisch ermordet — in Einrichtungen, die sich „Heil- und Pflegeanstalten" nannten. Pflegepersonal war daran aktiv beteiligt: bei der Selektion, beim Transport, bei der Verabreichung tödlicher Medikamente. Diese Verstrickung ist kein historisches Detail am Rande. Sie ist die zentrale Mahnung unseres Berufsstandes: Fachkompetenz allein schützt nicht vor Unrecht. Professionelle Pflege verlangt eine ethische Haltung, die das Wohl jedes einzelnen Menschen über jede Anweisung stellt.`,
        contentB1: `Die schlimmste Zeit der Pflege-Geschichte war der Nationalsozialismus (1933–1945). Die Nazis übernahmen die Kontrolle über die Pflege-Verbände. Ab 1940 ermordeten sie systematisch Menschen mit Behinderungen und psychischen Krankheiten. Das nannte man „Euthanasie"-Programm. Pflegekräfte halfen dabei. Sie wählten Patienten aus. Sie bereiteten Transporte vor. Sie gaben tödliche Medikamente. Das zeigt uns heute: Pflege braucht mehr als Fachwissen. Pflege braucht eine ethische Haltung. Das bedeutet: Man muss immer das Wohl der Patienten über jede Anweisung stellen.`,
        quelle: "Vgl. Steppe, Krankenpflege im Nationalsozialismus, 1993; Gedenkstätte T4",
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
    zusammenfassung: "ICN und WHO definieren Pflege unterschiedlich. Das PflBG schützt drei Tätigkeiten als exklusiv für Fachkräfte.",
    zusammenfassungB1: "Pflege ist für alle Menschen da. Drei Aufgaben dürfen nur Pflegefachkräfte machen — das steht im Gesetz.",
    headerImageUrl: "/images/content/le-01/header/kap-02-definitionen.svg",
    glossarBegriffe: ["Profession", "Professionalisierung", "Vorbehaltene Tätigkeiten", "ICN (International Council of Nurses)", "Laienpflege"],
    bloecke: [
      {
        type: "text",
        contentC1: `Was genau meinen wir, wenn wir von \u201EPflege\u201C sprechen? Zwei internationale Organisationen haben Antworten formuliert, die bis heute als Orientierung dienen.

Der ICN (International Council of Nurses) betont in seiner Definition die Eigenverantwortlichkeit: Pflege richtet sich an Menschen jeder Altersgruppe \u2014 an Einzelpersonen ebenso wie an Familien und ganze Gemeinschaften. Sie findet in allen Lebenssituationen statt und unterscheidet nicht zwischen gesund und krank. Entscheidend ist, dass Pflegefachkräfte dabei nicht nur assistieren, sondern eigenständig handeln.

Die WHO rückt einen anderen Aspekt in den Vordergrund: Sie sieht den gesellschaftlichen Auftrag der Pflege darin, Menschen dabei zu unterstützen, ihre körperlichen, psychischen und sozialen Möglichkeiten zu erkennen und auszuschöpfen. Pflege wird hier als Befähigung verstanden \u2014 nicht nur als Versorgung.

Beide Perspektiven ergänzen sich: Der ICN beschreibt, WER gepflegt wird und WIE autonom. Die WHO beschreibt, WOZU Pflege da ist.`,
        contentB1: `Was bedeutet \u201EPflege\u201C eigentlich? Zwei große Organisationen haben das beschrieben.

Der ICN (International Council of Nurses) sagt: Pflege ist für alle Menschen da. Für alte und junge. Für Familien und für Gruppen. Für kranke und für gesunde Menschen. Wichtig ist: Pflegekräfte arbeiten eigenverantwortlich. Das heißt: Sie entscheiden selbst, was zu tun ist.

Die WHO (Welt-Gesundheits-Organisation) sagt: Pflege soll den Menschen helfen. Sie sollen ihre Fähigkeiten erkennen \u2014 körperliche, seelische und soziale. Und sie sollen diese Fähigkeiten nutzen können.

Beide Beschreibungen passen zusammen: Der ICN sagt, für WEN Pflege da ist. Die WHO sagt, WOZU Pflege da ist.`,
        contentKurz: `Der ICN definiert Pflege als eigenverantwortliche Versorgung aller Menschen in allen Lebenssituationen. Die WHO ergänzt: Pflege soll Menschen befähigen, ihre Möglichkeiten auszuschöpfen. Beide Perspektiven ergänzen sich.`,
        contentKurzB1: `Der ICN sagt: Pflege ist für alle Menschen da — eigenverantwortlich. Die WHO sagt: Pflege soll Menschen helfen, ihre Fähigkeiten zu nutzen. Beide Beschreibungen passen zusammen.`,
        contentErweitert: `Was genau meinen wir, wenn wir von \u201EPflege\u201C sprechen? Zwei internationale Organisationen haben Antworten formuliert, die bis heute als Orientierung dienen.

Der ICN (International Council of Nurses) veröffentlichte seine Definition erstmals 2002 und aktualisierte sie seitdem mehrfach. Die Kernelemente: Pflege richtet sich an Menschen jeder Altersgruppe — an Einzelpersonen ebenso wie an Familien und ganze Gemeinschaften. Sie findet in allen Lebenssituationen statt und unterscheidet nicht zwischen gesund und krank. Entscheidend ist, dass Pflegefachkräfte dabei nicht nur assistieren, sondern eigenständig handeln. Konkret nennt der ICN vier Kernaufgaben: Gesundheit fördern, Krankheit verhüten, Gesundheit wiederherstellen sowie Leiden lindern und ein würdevolles Sterben begleiten.

Die WHO rückt einen anderen Aspekt in den Vordergrund: Sie sieht den gesellschaftlichen Auftrag der Pflege darin, Menschen dabei zu unterstützen, ihre körperlichen, psychischen und sozialen Möglichkeiten zu erkennen und auszuschöpfen. Pflege wird hier als Befähigung (Empowerment) verstanden — nicht nur als Versorgung. Die WHO betont dabei auch, dass Pflege in der Lebenswelt der Menschen stattfindet — nicht nur im Krankenhaus.

Beide Perspektiven ergänzen sich: Der ICN beschreibt, WER gepflegt wird und WIE autonom die Pflegenden dabei handeln. Die WHO beschreibt, WOZU Pflege da ist — nämlich zur Befähigung. In Deutschland verbindet das PflBG (§ 5) beide Ansätze, indem es die Ausbildungsziele an den ICN-Kernaufgaben orientiert und gleichzeitig die WHO-Perspektive der Gesundheitsförderung aufgreift.`,
        contentErweitertB1: `Was bedeutet \u201EPflege\u201C eigentlich? Zwei große Organisationen haben das beschrieben.

Der ICN (International Council of Nurses) hat seine Beschreibung 2002 veröffentlicht. Er sagt: Pflege ist für alle Menschen da — für alte und junge, für Familien und für Gruppen, für kranke und für gesunde Menschen. Pflegekräfte arbeiten eigenverantwortlich. Der ICN nennt vier Kern-Aufgaben: 1. Gesundheit fördern. 2. Krankheit verhindern. 3. Gesundheit wiederherstellen. 4. Leiden lindern und beim Sterben begleiten.

Die WHO (Welt-Gesundheits-Organisation) sagt etwas anderes: Pflege soll den Menschen helfen, ihre Fähigkeiten zu erkennen und zu nutzen — körperliche, seelische und soziale. Das nennt man Empowerment (= Befähigung). Pflege passiert überall — nicht nur im Krankenhaus.

Beide Beschreibungen passen zusammen: Der ICN sagt, für WEN Pflege da ist. Die WHO sagt, WOZU Pflege da ist. Das deutsche Pflegeberufegesetz (PflBG, § 5) verbindet beide Ideen.`,
        quelle: "Vgl. ICN, Definition of Nursing, 2002; WHO, 1987",
      },
      {
        type: "merke",
        contentC1: `Ist Pflege ein Beruf oder eine Profession? Der Unterschied ist wichtig. Jede bezahlte Arbeit, die eine Ausbildung voraussetzt, ist ein Beruf. Eine Profession geht darüber hinaus \u2014 sie erfüllt zusätzliche Kriterien:

\u2022 Sie stützt sich auf eigene Forschung und wissenschaftliches Wissen.
\u2022 Der Zugang ist geregelt \u2014 durch eine staatliche Abschlussprüfung.
\u2022 Es existieren verbindliche Berufsregeln, etwa ein Ethikkodex (wie der ICN-Ethikkodex).
\u2022 Der Berufsstand organisiert sich selbst in Verbänden und handelt fachlich autonom.
\u2022 Die Arbeit hat eine hohe Bedeutung für die Gesellschaft.
\u2022 Weiterbildung und angemessene Vergütung sind selbstverständlich.

Erfüllt die Pflege all das? Viele dieser Punkte sind erreicht \u2014 eigene Pflegewissenschaft, dreijährige Ausbildung mit Staatsexamen, der ICN-Ethikkodex. Andere Punkte, wie die volle berufliche Autonomie, sind noch in Entwicklung. Diesen Weg vom Beruf zur Profession nennt man Professionalisierung.`,
        contentB1: `Ist Pflege ein Beruf oder eine Profession (= gehobener Beruf)? Das ist ein wichtiger Unterschied.

Ein Beruf ist eine Arbeit mit Ausbildung und Gehalt. Eine Profession hat noch mehr. Sie braucht:
\u2022 Eigenes Wissen aus der Forschung
\u2022 Eine geregelte Prüfung für den Berufszugang
\u2022 Feste Berufsregeln (zum Beispiel einen Ethikkodex)
\u2022 Eigene Berufsverbände
\u2022 Fachliche Selbstständigkeit
\u2022 Große Bedeutung für die Gesellschaft
\u2022 Gute Bezahlung und Weiterbildung

Hat die Pflege das alles? Vieles davon ja: eigene Wissenschaft, Staatsexamen, Ethikkodex. Aber nicht alles ist schon erreicht. Den Weg dahin nennt man Professionalisierung (= der Weg zur Profession).`,
        quelle: "Vgl. ICN, Code of Ethics for Nurses, 2021; PflBG 2017",
      },
      {
        type: "text",
        contentC1: `Einen konkreten Ausdruck findet der professionelle Anspruch im Pflegeberufegesetz (PflBG). Dort legt § 4 drei Tätigkeiten fest, die ausschließlich Pflegefachkräften vorbehalten sind \u2014 und nicht an Pflegehelfer delegiert werden dürfen:

1. Den Pflegebedarf einer Person erheben und feststellen
2. Den Pflegeprozess organisieren, gestalten und steuern
3. Die Qualität der Pflege analysieren, sichern und weiterentwickeln

Diese sogenannten vorbehaltenen Tätigkeiten sind das juristische Fundament dafür, dass Pflege kein beliebig austauschbarer Dienst ist, sondern Fachkompetenz erfordert.

Davon zu unterscheiden ist die sogenannte Laienpflege: die Versorgung durch Angehörige und Bezugspersonen, die keine pflegerische Ausbildung haben. Sie ist unverzichtbar \u2014 laut Statistischem Bundesamt wurden 2017 von den rund 3,4 Millionen Pflegebedürftigen in Deutschland über die Hälfte ausschließlich durch Angehörige zu Hause versorgt, davon überwiegend durch Frauen. Ohne diese Leistung wäre das Versorgungssystem nicht tragfähig. Und doch kann Laienpflege die professionelle Pflege nicht ersetzen: Wer den Pflegeprozess steuert, braucht eine fundierte Ausbildung, ethische Leitlinien und ein systematisches Vorgehen.`,
        contentB1: `Das Pflegeberufegesetz (PflBG) sagt in § 4: Drei Aufgaben dürfen nur Pflegefachkräfte machen. Pflegehelfer dürfen das nicht. Diese drei Aufgaben sind:
1. Den Pflegebedarf feststellen: Was braucht der Patient?
2. Den Pflegeprozess steuern: Wie wird die Pflege geplant?
3. Die Pflegequalität prüfen: Ist die Pflege gut genug?

Das nennt man vorbehaltene Tätigkeiten. Nur Pflegefachkräfte mit Ausbildung dürfen das.

Daneben gibt es die Laienpflege (= Pflege durch Familie). Viele Menschen werden zu Hause von Angehörigen gepflegt. 2017 waren in Deutschland 3,4 Millionen Menschen pflegebedürftig. Mehr als die Hälfte davon wurde nur durch die Familie versorgt \u2014 meistens durch Frauen. Das ist sehr wichtig. Aber Angehörige können die Fachpflege nicht ersetzen. Denn den Pflegeprozess steuern \u2014 das braucht Ausbildung, Regeln und ein System.`,
        quelle: "Vgl. § 4 PflBG; Statistisches Bundesamt, Pflegestatistik 2017",
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
    zusammenfassung: "Jede Pflegekraft hat ein eigenes Pflegeverständnis — der Berufsstand hat einen gemeinsamen Rahmen aus Ethikkodex und Leitbild.",
    zusammenfassungB1: "Jede Pflegekraft denkt anders über Pflege. Aber es gibt gemeinsame Regeln und Werte für alle.",
    headerImageUrl: "/images/content/le-01/header/kap-03-verstaendnis.svg",
    glossarBegriffe: ["Pflegeverständnis", "Berufsverständnis", "Pflegeleitbild"],
    bloecke: [
      {
        type: "text",
        contentC1: `Fragen Sie drei Pflegefachkräfte, was gute Pflege ausmacht — und Sie bekommen drei verschiedene Antworten. Die eine betont die körperliche Versorgung: Wundmanagement, Medikamentengabe, Vitalzeichen. Die andere sagt: Es geht darum, den ganzen Menschen zu sehen — mit seinen Ängsten, seiner Biografie, seinen Wünschen. Die dritte meint: Pflege bedeutet vor allem, Menschen zu befähigen, so viel wie möglich selbst zu tun.

Keine dieser Antworten ist falsch. Aber sie zeigen: Hinter dem, was wir täglich tun, steht ein Pflegeverständnis — ein inneres Bild davon, was Pflege sein soll. Dieses Bild wird geformt durch viele Einflüsse: eigene Erfahrungen mit Krankheit oder Pflege in der Familie, kultureller Hintergrund, Geschlechterrollen, die Art der Ausbildung und die Stationen der bisherigen Berufslaufbahn. Zwei Kolleginnen können denselben Patienten betreuen und trotzdem aus völlig unterschiedlichen Grundannahmen heraus handeln.

Vom individuellen Pflegeverständnis zu unterscheiden ist das Berufsverständnis: der gemeinsame Rahmen, auf den sich alle Pflegefachpersonen verpflichten. Berufsverbände wie der ICN formulieren diesen Rahmen in Ethikkodizes und Positionspapieren. Einrichtungen konkretisieren ihn in Pflegeleitbildern. Der Einzelne darf innerhalb dieses Rahmens eigene Schwerpunkte setzen — aber die Grundwerte gelten für alle.`,
        contentB1: `Was bedeutet Pflege-Verständnis? Es ist das innere Bild davon, was gute Pflege sein soll. Fragen Sie drei Pflegekräfte — und Sie bekommen drei Antworten. Eine sagt: Pflege ist Körperpflege und Medikamente. Eine andere sagt: Pflege ist den ganzen Menschen sehen. Die dritte sagt: Pflege ist Hilfe zur Selbsthilfe. Alle drei haben recht.

Jede Pflegekraft hat ein eigenes Pflege-Verständnis. Es kommt von vielen Dingen: eigene Erfahrungen, Familie, Kultur, Ausbildung und Beruf. Zwei Pflegende betreuen denselben Patienten — aber sie denken vielleicht ganz anders darüber.

Das Berufsverständnis ist etwas anderes. Es gilt für alle Pflegekräfte. Es ist der gemeinsame Rahmen: Werte und Regeln, die für den ganzen Beruf gelten. Zum Beispiel der Ethikkodex vom ICN. Oder das Pflegeleitbild einer Einrichtung. Die Grundwerte gelten für alle — aber eigene Schwerpunkte darf man setzen.`,
        contentKurz: `Pflegeverständnis = persönliches Bild von guter Pflege (geprägt durch Erfahrung, Kultur, Ausbildung). Berufsverständnis = gemeinsamer Rahmen für alle (Ethikkodex, Leitbilder, Berufsverbände). Beides zusammen formt professionelles Handeln.`,
        contentKurzB1: `Pflege-Verständnis = eigenes Bild von guter Pflege. Berufs-Verständnis = gemeinsame Regeln für alle Pflegekräfte (Ethikkodex, Leitbilder). Beides ist wichtig.`,
        contentErweitert: `Fragen Sie drei Pflegefachkräfte, was gute Pflege ausmacht — und Sie bekommen drei verschiedene Antworten. Die eine betont die körperliche Versorgung: Wundmanagement, Medikamentengabe, Vitalzeichen. Die andere sagt: Es geht darum, den ganzen Menschen zu sehen — mit seinen Ängsten, seiner Biografie, seinen Wünschen. Die dritte meint: Pflege bedeutet vor allem, Menschen zu befähigen, so viel wie möglich selbst zu tun.

Keine dieser Antworten ist falsch. Aber sie zeigen: Hinter dem, was wir täglich tun, steht ein Pflegeverständnis — ein inneres Bild davon, was Pflege sein soll. Dieses Bild wird geformt durch viele Einflüsse: eigene Erfahrungen mit Krankheit oder Pflege in der Familie, kultureller Hintergrund, Geschlechterrollen, die Art der Ausbildung und die Stationen der bisherigen Berufslaufbahn. Die Pflegewissenschaftlerin Patricia Benner zeigte in ihrem Stufenmodell „From Novice to Expert" (1984), dass sich das Pflegeverständnis mit zunehmender Berufserfahrung grundlegend wandelt: Während Anfängerinnen sich an Regeln und Checklisten orientieren, handeln Expertinnen intuitiv aus einem tiefen Situationsverständnis heraus.

Vom individuellen Pflegeverständnis zu unterscheiden ist das Berufsverständnis: der gemeinsame Rahmen, auf den sich alle Pflegefachpersonen verpflichten. Der ICN-Ethikkodex (zuletzt überarbeitet 2021) definiert vier grundlegende Verantwortungsbereiche: Pflege und Patienten, Pflege und Praxis, Pflege und Profession, Pflege und globale Gesundheit. Einrichtungen konkretisieren diesen Rahmen in Pflegeleitbildern — etwa durch Festlegungen wie „Wir pflegen ressourcenorientiert" oder „Wir beziehen Angehörige aktiv ein". Der Einzelne darf innerhalb dieses Rahmens eigene Schwerpunkte setzen — aber die Grundwerte gelten für alle. Die Spannung zwischen persönlichem und professionellem Pflegeverständnis ist kein Problem, sondern Motor der beruflichen Entwicklung.`,
        contentErweitertB1: `Was bedeutet Pflege-Verständnis? Es ist das eigene Bild von guter Pflege. Drei Pflegekräfte haben drei verschiedene Antworten: Körperpflege, den ganzen Menschen sehen, oder Hilfe zur Selbsthilfe. Alle haben recht.

Jede Pflegekraft hat ein eigenes Pflege-Verständnis. Es kommt von vielen Dingen: Erfahrung, Familie, Kultur, Ausbildung. Die Forscherin Patricia Benner hat gezeigt: Am Anfang arbeitet man nach Regeln und Checklisten. Mit mehr Erfahrung handelt man intuitiv (= aus dem Gefühl heraus). Das Pflege-Verständnis wächst mit der Erfahrung.

Das Berufsverständnis ist etwas anderes. Es gilt für alle Pflegekräfte. Der ICN-Ethikkodex (zuletzt aktualisiert 2021) nennt vier Bereiche: 1. Pflege und Patienten. 2. Pflege und Praxis. 3. Pflege und Beruf. 4. Pflege und globale Gesundheit. Einrichtungen haben auch eigene Pflege-Leitbilder. Die Grundwerte gelten für alle — aber eigene Schwerpunkte darf man setzen.`,
        quelle: "Vgl. ICN, Code of Ethics, 2021; Pflegeleitbild-Konzepte",
      },
      {
        type: "text",
        contentC1: `Das Pflegeverständnis in Deutschland hat sich in wenigen Jahrzehnten grundlegend gewandelt. Bis in die 1950er-Jahre dominierte ein karitativer Ansatz: Pflege galt als Dienst am Nächsten, getragen von Mitgefühl und religiöser Motivation. Systematisches Fachwissen spielte eine untergeordnete Rolle. In den 1960er- und 1970er-Jahren begann eine Phase der Standardisierung — Abläufe wurden vereinheitlicht, Dokumentation eingeführt, erste Ausbildungsordnungen geschaffen. Der Wendepunkt kam in den 1980er-Jahren: Pflegewissenschaft etablierte sich als eigenständige akademische Disziplin, zunächst in den USA und Skandinavien, dann auch im deutschsprachigen Raum. Begriffe wie Ganzheitlichkeit, Patientenorientierung und evidenzbasierte Praxis prägten ein neues Selbstbild. Dieser Wandel ist bis heute nicht abgeschlossen. Auch in Ihrer Ausbildung werden Sie immer wieder vor der Frage stehen: Wie verbinde ich fachliche Professionalität mit menschlicher Nähe?`,
        contentB1: `Das Pflege-Verständnis hat sich über die Jahre stark verändert. Bis in die 1950er-Jahre war Pflege vor allem Nächsten-Liebe. Man half, weil man Mitgefühl hatte. Fachwissen war weniger wichtig. In den 1960er- und 1970er-Jahren wurden die Abläufe einheitlicher. Man fing an, alles aufzuschreiben (Dokumentation). Ab den 1980er-Jahren wurde Pflege eine eigene Wissenschaft. Neue Begriffe kamen: Ganzheitlichkeit (= den ganzen Menschen sehen), Patientenorientierung, evidenzbasierte Praxis (= Pflege nach dem neuesten Wissen). Dieser Wandel geht weiter. Auch in Ihrer Ausbildung werden Sie sich fragen: Wie kann ich fachlich gut UND menschlich nah sein?`,
        quelle: "Vgl. Robert Bosch Stiftung, Pflege braucht Eliten, 1992; DGP Positionspapiere",
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
    zusammenfassung: "Drei Organisationstypen vertreten Pflegende: Berufsverbände für Fachpolitik, Gewerkschaften für Gehalt, Pflegekammern für Selbstverwaltung.",
    zusammenfassungB1: "Berufsverbände, Gewerkschaften und Pflegekammern — drei verschiedene Organisationen helfen Pflegekräften.",
    headerImageUrl: "/images/content/le-01/header/kap-04-berufspolitik.svg",
    glossarBegriffe: ["Pflegekammer", "Deutscher Pflegerat (DPR)"],
    bloecke: [
      {
        type: "text",
        contentC1: `Stellen Sie sich vor: Sie arbeiten seit Monaten auf einer unterbesetzten Station. Überstunden häufen sich, die Bezahlung stimmt nicht mit der Verantwortung überein, und bei den Gesundheitsreformen werden Pflegende nicht gefragt. Wer setzt sich für Sie ein? In Deutschland gibt es dafür drei verschiedene Organisationstypen — und es lohnt sich, ihre Unterschiede zu kennen.

Berufsverbände vertreten die fachlichen und berufspolitischen Interessen der Pflege. Der bekannteste ist der DBfK (Deutscher Berufsverband für Pflegeberufe), der zum internationalen Netzwerk des ICN gehört. Über ihm steht als Dachorganisation der Deutsche Pflegerat (DPR), der alle großen Pflegeverbände bündelt und gegenüber der Politik mit einer Stimme spricht. Berufsverbände beraten ihre Mitglieder, nehmen Stellung zu Gesetzentwürfen und organisieren fachliche Weiterbildung. Was sie nicht können: direkt über Ihr Gehalt verhandeln.

Genau das ist die Domäne der Gewerkschaften. Als Zusammenschlüsse von Arbeitnehmerinnen und Arbeitnehmern haben sie ein juristisches Werkzeug, das Berufsverbänden fehlt: die Tarifverhandlung. ver.di — die größte Gewerkschaft im Dienstleistungssektor — verhandelt direkt mit Arbeitgebern über Löhne, Arbeitszeiten und Zuschläge. Wenn Verhandlungen scheitern, darf eine Gewerkschaft zum Streik aufrufen. Ein Berufsverband darf das nicht.`,
        contentB1: `Stellen Sie sich vor: Sie arbeiten auf einer Station. Es gibt zu wenig Personal. Sie machen viele Überstunden. Das Gehalt ist zu niedrig. Wer hilft Ihnen? Dafür gibt es drei Arten von Organisationen: Berufsverbände, Gewerkschaften und Pflegekammern.

Ein Berufsverband vertritt die Pflege in der Politik. Der bekannteste ist der DBfK (Deutscher Berufsverband für Pflegeberufe). Über allen Verbänden steht der Deutsche Pflegerat (DPR). Er spricht für alle Pflege-Verbände zusammen. Berufsverbände beraten ihre Mitglieder und organisieren Weiterbildung. Aber: Sie können nicht über Ihr Gehalt verhandeln.

Das können Gewerkschaften. Die größte Gewerkschaft für Pflegende ist ver.di. Sie verhandelt direkt mit den Arbeitgebern über Löhne, Arbeitszeiten und Zuschläge. Wenn die Verhandlung scheitert, darf eine Gewerkschaft zum Streik aufrufen. Ein Berufsverband darf das nicht.`,
        quelle: "Vgl. DBfK Satzung; DPR Geschäftsordnung; ver.di Tarifpolitik Gesundheitswesen",
      },
      {
        type: "text",
        contentC1: `Pflegekammern funktionieren nach einem anderen Prinzip. Sie sind Körperschaften des öffentlichen Rechts — vergleichbar mit der Ärztekammer oder der Anwaltskammer. Alle Pflegefachpersonen eines Bundeslandes müssen Mitglied sein (Pflichtmitgliedschaft). Dafür erhält die Berufsgruppe etwas Einzigartiges: die Selbstverwaltung. Die Kammer erstellt eine verbindliche Berufsordnung, führt ein Berufsregister, definiert Weiterbildungsstandards — und kann bei Verstößen berufsrechtliche Verfahren einleiten. Rheinland-Pfalz richtete 2016 die erste deutsche Pflegekammer ein, Nordrhein-Westfalen folgte 2022 mit dem bundesweit größten Modell.`,
        contentB1: `Pflegekammern sind noch einmal anders. Sie sind offizielle staatliche Einrichtungen. Alle Pflegefachkräfte in einem Bundesland müssen Mitglied sein. Das nennt man Pflicht-Mitgliedschaft. Dafür kann die Pflege sich selbst verwalten. Die Kammer macht eigene Regeln (Berufsordnung). Sie führt ein Register aller Pflegekräfte. Sie legt Weiterbildungs-Standards fest. Und sie kann bei Regel-Verstößen ein Verfahren einleiten und Strafen geben. Rheinland-Pfalz hatte 2016 die erste Pflegekammer. Nordrhein-Westfalen folgte 2022.`,
        quelle: "Vgl. Heilberufsgesetze RLP, NRW; PflegeKG NRW 2022",
      },
      {
        type: "merke",
        contentC1: `Die Pflegekammer-Debatte spaltet die Berufsgruppe. Befürworter sehen in ihr die Chance auf echte Mitbestimmung: Wer eine Kammer hat, hat eine Stimme, die Gesetzgeber anhören müssen — vergleichbar mit der Macht der Ärztekammer. Kritiker hingegen empfinden die Pflichtmitgliedschaft als Bevormundung und fürchten zusätzliche Bürokratie bei ohnehin knappen Zeitressourcen. Für Ihre Praxis ist ein Unterschied entscheidend: Wenn eine Kollegin gegen die Berufsordnung verstößt, kann ein Berufsverband nur appellieren. Eine Kammer kann ein Disziplinarverfahren einleiten — mit realen Konsequenzen bis hin zum Berufsverbot.`,
        contentB1: `Die Pflegekammer ist umstritten. Manche sind dafür: Die Kammer gibt der Pflege eine starke Stimme — wie die Ärztekammer für Ärzte. Andere sind dagegen: Die Pflicht-Mitgliedschaft fühlt sich unfair an. Und es gibt mehr Verwaltungsarbeit. Für Auszubildende ist ein Unterschied wichtig: Ein Berufsverband kann nur bitten und empfehlen. Eine Pflegekammer kann ein Verfahren einleiten — mit echten Konsequenzen.`,
        quelle: "Vgl. DBfK Positionspapier Pflegekammer; ver.di Stellungnahme",
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
    zusammenfassung: "Seit 2020 gibt es eine einzige generalistische Ausbildung statt drei getrennter — 2100h Theorie, 2500h Praxis, EU-weit anerkannt.",
    zusammenfassungB1: "Seit 2020 gibt es nur noch eine Pflege-Ausbildung für alle. 3 Jahre, Theorie und Praxis zusammen.",
    headerImageUrl: "/images/content/le-01/header/kap-05-pflbg.svg",
    glossarBegriffe: ["Pflegeberufegesetz (PflBG)", "Generalistische Pflegeausbildung", "Vorbehaltene Tätigkeiten", "Praxisanleiter"],
    bloecke: [
      {
        type: "text",
        contentC1: `Bis Ende 2019 gab es in Deutschland drei getrennte Pflegeausbildungen: eine für die Krankenpflege, eine für die Kinderkrankenpflege und eine für die Altenpflege. Wer Krankenpflege gelernt hatte, durfte nicht ohne Weiteres im Pflegeheim arbeiten — und umgekehrt. Das war nicht nur unpraktisch, sondern entsprach auch nicht mehr der Versorgungsrealität: Patienten im Krankenhaus werden immer älter, Bewohner im Pflegeheim immer kränker. Die Grenzen zwischen den Feldern verschwimmen längst.

Das Pflegeberufegesetz (PflBG), seit dem 1. Januar 2020 gültig, zog die Konsequenz: eine einzige generalistische Ausbildung, die auf alle Versorgungsbereiche vorbereitet (Vgl. § 5 PflBG). Drei Jahre Vollzeit (oder bis zu fünf in Teilzeit), aufgeteilt in 2100 Stunden Theorie und mindestens 2500 Stunden Praxis in wechselnden Einsatzfeldern. Das Ziel laut Gesetz: Pflegefachpersonen sollen Menschen aller Altersgruppen eigenverantwortlich und ganzheitlich pflegen können.`,
        contentB1: `Bis Ende 2019 gab es in Deutschland drei verschiedene Pflege-Ausbildungen: Krankenpflege, Kinderkrankenpflege und Altenpflege. Das war unpraktisch. Zum Beispiel: Wer Krankenpflege gelernt hatte, durfte nicht einfach im Pflegeheim arbeiten. Seit dem 1. Januar 2020 gibt es ein neues Gesetz: das Pflegeberufegesetz (PflBG). Jetzt gibt es nur noch eine Ausbildung für alle. Sie heißt: generalistische Pflegeausbildung. Man lernt, alle Menschen zu pflegen — egal ob jung oder alt, ob im Krankenhaus oder zu Hause.

Die Ausbildung dauert 3 Jahre in Vollzeit (oder bis zu 5 Jahre in Teilzeit). Es gibt 2100 Stunden Theorie in der Schule und mindestens 2500 Stunden Praxis.`,
        quelle: "Vgl. § 5, § 6 PflBG; PflAPrV (Ausbildungs- und Prüfungsverordnung)",
      },
      {
        type: "wusstestdu",
        contentC1: "Der generalistische Abschluss als Pflegefachfrau/Pflegefachmann wird dank EU-Richtlinie 2005/36/EG in allen 27 EU-Mitgliedstaaten automatisch anerkannt — ohne zusätzliche Prüfung.",
        contentB1: "Mit dem neuen Abschluss kann man in allen 27 EU-Ländern als Pflegekraft arbeiten — ohne Extra-Prüfung!",
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
        quelle: "Vgl. Anlage 1 PflAPrV",
      },
      {
        type: "text",
        contentC1: `Ein besonderes Merkmal der neuen Ausbildung: Im dritten Jahr gibt es eine Wahlmöglichkeit. Wer die generalistische Ausbildung durchläuft, schließt als Pflegefachfrau bzw. Pflegefachmann ab — ein Titel, der dank der EU-Berufsanerkennungsrichtlinie (2005/36/EG) in allen Mitgliedstaaten gilt. Alternativ können Auszubildende sich nach dem zweiten Jahr auf Kinderkrankenpflege oder Altenpflege spezialisieren. Dieser Abschluss gilt dann nur in Deutschland.

Um zur Ausbildung zugelassen zu werden, brauchen Sie mindestens einen mittleren Schulabschluss (Realschule). Mit Hauptschulabschluss ist der Einstieg möglich, wenn Sie zusätzlich eine abgeschlossene Berufsausbildung (mindestens zwei Jahre) oder eine einjährige Pflegehelferausbildung vorweisen können (Vgl. § 11 PflBG).

Die Praxiseinsätze folgen einem festen Schema: Orientierungseinsatz zu Beginn (400 Stunden), dann stationäre Akutpflege (400 Stunden), Langzeitpflege (400 Stunden), ambulante Pflege (400 Stunden) und pädiatrische Versorgung (120 Stunden). Insgesamt 1720 Pflichtstunden in den ersten zwei Dritteln. Am Ende des zweiten Drittels steht eine verpflichtende Zwischenprüfung, die Ihren Lernstand dokumentiert.`,
        contentB1: `Im dritten Jahr kann man wählen: Entweder die generalistische Ausbildung fertigmachen — dann wird man Pflegefachfrau oder Pflegefachmann. Dieser Abschluss gilt in der ganzen EU. Oder man spezialisiert sich auf Kinderkrankenpflege oder Altenpflege — dieser Abschluss gilt dann nur in Deutschland.

Wer die Ausbildung machen will, braucht mindestens einen mittleren Schulabschluss (Realschule). Mit Hauptschulabschluss geht es auch — aber dann braucht man zusätzlich eine andere Ausbildung (mindestens 2 Jahre) oder eine Pflegehelfer-Ausbildung (1 Jahr).

In den ersten 2 Jahren gibt es feste Praxis-Einsätze: Orientierung (400 Stunden), Krankenhaus (400), Pflegeheim (400), ambulante Pflege (400) und Kinderpflege (120). Das sind zusammen 1720 Stunden. Am Ende des zweiten Drittels gibt es eine Zwischen-Prüfung.`,
        quelle: "Vgl. § 6, § 11 PflBG; § 1 PflAPrV; RL 2005/36/EG",
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
    zusammenfassung: "Kompetenz heißt nicht Wissen, sondern richtiges Handeln in realen Situationen — aus Fach-, Sozial- und Personaler Kompetenz.",
    zusammenfassungB1: "Kompetenz bedeutet: Man kann in einer echten Situation richtig handeln. Dafür braucht man drei Dinge.",
    headerImageUrl: "/images/content/le-01/header/kap-06-kompetenz.svg",
    glossarBegriffe: ["Handlungskompetenz", "Fachkompetenz"],
    bloecke: [
      {
        type: "text",
        contentC1: `Ein Beispiel: Sie wissen, dass der Blutdruck Ihres Patienten zu niedrig ist. Sie kennen die Theorie — Flüssigkeitszufuhr, Lagewechsel, Arzt informieren. Aber können Sie das auch umsetzen, wenn gleichzeitig das Telefon klingelt, der Patient ängstlich ist und die Kollegin auf dem Flur Hilfe ruft? Genau das unterscheidet Wissen von Kompetenz.

Kompetenz in der Pflege bedeutet nicht, Fakten aufzählen zu können. Sie bedeutet, in einer realen Situation richtig zu handeln — fachlich korrekt, menschlich angemessen und eigenverantwortlich. Die Kultusministerkonferenz (KMK) beschreibt Handlungskompetenz seit 2011 als Bereitschaft und Fähigkeit, im Beruf, im Alltag und im Zusammenleben eigenständig und verantwortungsvoll zu handeln. Drei Dimensionen bilden das Fundament: Fachkompetenz, Sozialkompetenz und Personale Kompetenz (Vgl. KMK, Handreichung für die Erarbeitung von Rahmenlehrplänen, 2011).`,
        contentB1: `Ein Beispiel: Sie wissen, dass der Blutdruck Ihres Patienten zu niedrig ist. Aber was tun Sie, wenn gleichzeitig das Telefon klingelt und der Patient Angst hat? Wissen allein reicht nicht. Man muss auch handeln können.

Kompetenz bedeutet: Man kann in einer echten Situation richtig handeln. Man handelt fachlich richtig. Man handelt menschlich gut. Und man handelt eigenverantwortlich. Handlungs-Kompetenz hat drei Teile: Fach-Kompetenz, Sozial-Kompetenz und Personale Kompetenz (Vgl. KMK, 2011).`,
        quelle: "Vgl. KMK, Handreichung Rahmenlehrpläne, 2011; § 5 PflBG Ausbildungsziel",
      },
      {
        type: "text",
        contentC1: `Fachkompetenz meint die Fähigkeit, pflegerische Aufgaben mit dem nötigen Wissen und Können selbstständig zu lösen und das Ergebnis kritisch einzuschätzen. Dazu gehört nicht nur pflegespezifisches Wissen — etwa über Wundversorgung oder Medikamentenwirkung — sondern auch Wissen aus Nachbardisziplinen: Anatomie, Psychologie, Recht, Ethik. Wer bei der Aufnahme eines Patienten eine Pflegeanamnese erhebt, muss nicht nur die richtigen Fragen stellen. Sie muss die Antworten fachlich einordnen können: Ist das, was der Patient beschreibt, ein Pflegeproblem? Welche Ressource steckt dahinter?

Sozialkompetenz ist in der Pflege untrennbar mit dem Arbeitsalltag verwoben, weil jede pflegerische Handlung am und mit einem anderen Menschen stattfindet. Sie umfasst Empathie — die Fähigkeit, sich in das Erleben des Gegenübers hineinzuversetzen —, Teamfähigkeit im interdisziplinären Umfeld, Konfliktlösungskompetenz und die Bereitschaft, unterschiedliche Wertvorstellungen zu respektieren. Wenn ein Patient eine Maßnahme ablehnt, brauchen Sie Sozialkompetenz, um seine Perspektive zu verstehen, bevor Sie fachlich argumentieren.`,
        contentB1: `Was ist Fach-Kompetenz? Man hat Fachwissen und kann es anwenden. Man kennt Pflege-Wissen (zum Beispiel Wundversorgung). Man kennt auch Wissen aus anderen Bereichen: Anatomie, Psychologie, Recht, Ethik. Ein Beispiel: Bei der Pflege-Anamnese (= erste Befragung des Patienten) muss man die richtigen Fragen stellen. Und man muss die Antworten fachlich verstehen.

Was ist Sozial-Kompetenz? Man kann gut mit anderen Menschen umgehen. Das ist in der Pflege besonders wichtig. Man arbeitet immer mit Menschen: mit Patienten und im Team. Sozial-Kompetenz bedeutet: Einfühlungsvermögen (= Empathie), Teamfähigkeit, Konflikte lösen und andere Meinungen respektieren. Wenn ein Patient eine Maßnahme ablehnt, muss man erst seine Sicht verstehen.`,
        quelle: "Vgl. KMK Rahmenlehrpläne, 2011; § 5 PflBG",
      },
      {
        type: "merke",
        contentC1: `Die drei Dimensionen lassen sich nicht isoliert betrachten — sie greifen wie Zahnräder ineinander. Fachkompetenz ohne Sozialkompetenz führt zu technisch korrekter, aber emotional kalter Pflege: alles richtig gemacht, aber den Menschen nicht erreicht. Sozialkompetenz ohne Fachkompetenz erzeugt warme Zuwendung ohne fundiertes Handeln — nett gemeint, aber potenziell gefährlich. Personale Kompetenz — Selbstreflexion, Verantwortungsbewusstsein, Belastbarkeit — ist das Verbindungsstück: Sie sorgt dafür, dass Sie erkennen, wenn Ihnen Fachwissen fehlt, und dass Sie Grenzen wahren, wenn die emotionale Belastung zu groß wird. In der Ausbildung entwickeln Sie alle drei Dimensionen gleichzeitig: im Unterricht (Fach), in der Praxis (Sozial) und in der Reflexion (Personal).`,
        contentB1: `Die drei Teile gehören zusammen — wie Zahnräder. Fach-Kompetenz allein reicht nicht. Dann ist die Pflege fachlich richtig, aber kalt. Sozial-Kompetenz allein reicht auch nicht. Dann ist man freundlich, aber macht vielleicht Fehler. Personale Kompetenz verbindet beides. Sie bedeutet: über sich selbst nachdenken, Verantwortung übernehmen und belastbar sein. In der Ausbildung lernt man alle drei Teile gleichzeitig: im Unterricht (Fach), in der Praxis (Sozial) und in der Reflexion (Personal).`,
        quelle: "Vgl. KMK Rahmenlehrpläne, 2011",
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
    zusammenfassung: "Der Pflegeprozess nach Fiechter/Meier hat 6 Phasen im Regelkreis — und ist laut PflBG eine vorbehaltene Tätigkeit.",
    zusammenfassungB1: "Der Pflege-Prozess hat 6 Schritte. Er ist ein Kreislauf: Am Ende prüft man das Ergebnis und fängt wieder an.",
    headerImageUrl: "/images/content/le-01/header/kap-07-pflegeprozess.svg",
    glossarBegriffe: ["Pflegeprozess", "Fiechter und Meier", "Pflegeanamnese", "Pflegeproblem", "Ressourcen (pflegerisch)", "Pflegeziel", "Evaluation (Pflege)"],
    bloecke: [
      {
        type: "text",
        contentC1: `Stellen Sie sich vor, Sie kommen morgens auf Station und übernehmen die Versorgung von fünf Patienten. Einer klingelt wegen Schmerzen, eine andere braucht Hilfe beim Aufstehen, der dritte wartet auf seine Medikamente. Wie entscheiden Sie, was zuerst passiert? Genau dafür gibt es den Pflegeprozess: ein Denkwerkzeug, das Ihnen hilft, individuelle Bedürfnisse zu erkennen, Prioritäten zu setzen und Ihre Arbeit nachvollziehbar zu machen.

Das Pflegeberufegesetz gibt diesem Werkzeug besonderes Gewicht. Laut § 5 Abs. 3 Nr. 1 PflBG gehört die Steuerung des Pflegeprozesses zu den Aufgaben, die ausschließlich Pflegefachpersonen übernehmen dürfen — eine sogenannte vorbehaltene Tätigkeit. Der Gesetzgeber sagt damit: Wer den Pflegeprozess verantwortet, trägt professionelle Verantwortung, die nicht delegiert werden kann.`,
        contentB1: `Stellen Sie sich vor: Sie kommen morgens auf die Station. Sie sind für fünf Patienten zuständig. Ein Patient hat Schmerzen. Eine Patientin braucht Hilfe beim Aufstehen. Ein dritter Patient wartet auf Medikamente. Was machen Sie zuerst? Dabei hilft der Pflege-Prozess. Er ist ein Denk-Werkzeug. Er hilft Ihnen, die Pflege zu planen und Schritt für Schritt vorzugehen.

Der Pflege-Prozess ist sehr wichtig. Das steht sogar im Gesetz: Im Pflegeberufegesetz (§ 5 Abs. 3 Nr. 1 PflBG). Dort steht: Nur Pflegefachpersonen dürfen den Pflege-Prozess steuern. Das nennt man eine vorbehaltene Tätigkeit.`,
        quelle: "Vgl. § 5 Abs. 3 Nr. 1 PflBG",
      },
      {
        type: "merke",
        contentC1: `Liliane Juchli, Wegbereiterin der Pflegewissenschaft im deutschsprachigen Raum, beschrieb Pflege als kreisförmigen Vorgang: beobachten, planen, handeln, überprüfen — und wieder von vorn. Auf dieser Idee bauten Verena Fiechter und Martha Meier 1981 ihr Sechs-Phasen-Modell auf, das bis heute in der Ausbildung verwendet wird:

1. Informationen sammeln — Was wissen wir über diesen Menschen?
2. Probleme und Stärken benennen — Wo braucht er Unterstützung, was kann er selbst?
3. Ziele formulieren — Was soll sich verändern, bis wann?
4. Maßnahmen planen — Welche Schritte führen zum Ziel?
5. Pflege durchführen — Geplantes umsetzen und dokumentieren.
6. Ergebnis bewerten — Hat sich etwas verbessert? Falls nicht: zurück zu Phase 1.

Das Entscheidende ist der letzte Punkt: Pflege endet nicht nach der Durchführung. Sie prüft ihr eigenes Ergebnis und beginnt den Kreislauf erneut. Deshalb spricht man von einem Regelkreis.`,
        contentB1: `Die Schweizer Pflegewissenschaftlerinnen Verena Fiechter und Martha Meier haben 1981 ein Modell entwickelt. Dieses Modell hat 6 Phasen. Es wird bis heute in der Ausbildung benutzt.

Die 6 Phasen sind:
1. Informationen sammeln — Was wissen wir über den Patienten?
2. Probleme und Stärken erkennen — Was kann der Patient? Wo braucht er Hilfe?
3. Ziele festlegen — Was soll besser werden? Bis wann?
4. Maßnahmen planen — Wie erreichen wir das Ziel?
5. Pflege durchführen — Den Plan umsetzen und aufschreiben.
6. Ergebnis prüfen — Hat die Pflege geholfen?

Wichtig: Nach dem letzten Schritt geht es wieder von vorne los. Pflege hört nie auf. Man prüft immer wieder und passt die Pflege an. Das nennt man einen Regelkreis.`,
        quelle: "Vgl. Fiechter/Meier, Pflegeplanung, 1981",
      },
      {
        type: "text",
        contentC1: `Die erste Phase — Informationen sammeln — gleicht der Arbeit eines Detektivs. Sie beobachten den Patienten (direkte Information), lesen seine Akte (indirekte Information), messen seinen Blutdruck (objektives Datum) und fragen, wie er sich fühlt (subjektive Angabe). Das strukturierte Erstgespräch bei der Aufnahme heißt Pflegeanamnese.

Aus diesen Daten leiten Sie in Phase 2 ab, welche Probleme vorliegen. Ein Pflegeproblem ist jede Einschränkung — körperlich, seelisch oder sozial —, bei der der Patient Unterstützung benötigt. Manche Probleme bestehen bereits (aktuell), andere könnten entstehen (potenziell). Genauso wichtig sind die Ressourcen: Was bringt der Patient mit? Kann er sich selbst motivieren? Hat er Angehörige, die unterstützen? Körperkraft, innere Haltung, soziales Umfeld, finanzielle Absicherung — all das fließt in die Planung ein.

In Phase 3 formulieren Sie Pflegeziele. Ein gut formuliertes Ziel folgt dem SMART-Prinzip: spezifisch (was genau?), messbar (woran erkennbar?), akzeptiert (stimmt der Patient zu?), realistisch (ist es erreichbar?) und terminiert (bis wann?). Beispiel: „Herr Weber geht bis Freitag mit Rollator 20 Meter selbstständig über den Flur." Das ist überprüfbar — anders als „Herr Weber soll mobiler werden".`,
        contentB1: `Phase 1 — Informationen sammeln: Sie arbeiten wie ein Detektiv. Sie schauen den Patienten an (direkte Information). Sie lesen die Akte (indirekte Information). Sie messen den Blutdruck (objektive Information). Sie fragen den Patienten, wie er sich fühlt (subjektive Information). Das Erstgespräch bei der Aufnahme heißt Pflege-Anamnese.

Phase 2 — Probleme und Stärken erkennen: Aus den Informationen finden Sie heraus: Wo braucht der Patient Hilfe? Das ist ein Pflege-Problem. Zum Beispiel: Der Patient kann nicht allein aufstehen. Manche Probleme gibt es jetzt schon (aktuell). Andere könnten kommen (potenziell). Aber Sie schauen auch: Was kann der Patient gut? Hat er Familie, die hilft? Kann er sich selbst motivieren? Das sind Ressourcen (= Stärken).

Phase 3 — Ziele formulieren: Ein gutes Pflege-Ziel ist SMART. Das bedeutet: spezifisch (= genau), messbar, akzeptiert (der Patient ist einverstanden), realistisch (= erreichbar) und terminiert (= mit Zeitangabe). Ein Beispiel: „Herr Weber geht bis Freitag mit dem Rollator 20 Meter über den Flur." Das ist ein gutes Ziel. Man kann prüfen: Hat er es geschafft?`,
        quelle: "Vgl. Fiechter/Meier, 1981; § 5 Abs. 3 PflBG",
      },
      {
        type: "vertiefung",
        contentC1: `SMART-Ziele im Detail:
S — Spezifisch: Nicht „Mobilität verbessern", sondern „Herr Weber geht mit Rollator über den Flur".
M — Messbar: Distanz in Metern, Häufigkeit pro Tag, Schmerzskala.
A — Akzeptiert: Der Patient muss einverstanden sein — kein Ziel über seinen Kopf hinweg.
R — Realistisch: Erreichbar in der geplanten Zeit, mit den vorhandenen Ressourcen.
T — Terminiert: „Bis Freitag", „innerhalb von 3 Tagen", „bei Entlassung".`,
        contentB1: `SMART-Ziele erklärt:
S — Spezifisch: Genau sagen, was passieren soll.
M — Messbar: Man kann prüfen, ob es geklappt hat.
A — Akzeptiert: Der Patient ist einverstanden.
R — Realistisch: Das Ziel ist erreichbar.
T — Terminiert: Es gibt einen Zeitpunkt.`,
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
    zusammenfassung: "Der ICN-Ethikkodex und die 4 Prinzipien von Beauchamp/Childress bilden den ethischen Kompass für pflegerische Entscheidungen.",
    zusammenfassungB1: "Es gibt Regeln für richtiges Handeln in der Pflege. Vier Grundsätze helfen bei schwierigen Entscheidungen.",
    headerImageUrl: "/images/content/le-01/header/kap-08-ethik.svg",
    glossarBegriffe: ["Ethikkodex (ICN)", "Pflegekammer", "Profession"],
    bloecke: [
      {
        type: "text",
        contentC1: `Ein 82-jähriger Patient mit fortgeschrittener Demenz wehrt sich gegen das Waschen. Sie wissen, dass seine Haut ohne regelmäßige Körperpflege Schaden nehmen wird. Gleichzeitig sagt Ihnen Ihr Berufsethos: Kein Mensch darf gegen seinen Willen angefasst werden. Was tun Sie? Genau in solchen Momenten zeigt sich, warum Pflege mehr verlangt als Handgriffe — sie verlangt eine ethische Haltung.

Seit 1953 gibt es dafür einen internationalen Orientierungsrahmen: den Ethikkodex des ICN (International Council of Nurses). Dieses Dokument wurde mehrfach überarbeitet, zuletzt 2021. Es beschreibt vier Verantwortungsbereiche: gegenüber den Menschen, denen wir pflegen, gegenüber der eigenen Berufsausübung, gegenüber dem Berufsstand als Ganzes und gegenüber den Kolleginnen und Kollegen (Vgl. ICN, Code of Ethics for Nurses, 2021).

In Deutschland ergänzt die Rahmenberufsordnung des Deutschen Pflegerats diese Grundsätze. Ihr Kernsatz lautet sinngemäß: Pflegende richten ihr Handeln am aktuellen Stand der Pflegewissenschaft aus. Wer das ernst nimmt, verpflichtet sich zu lebenslangem Lernen — Stillstand wäre ein Verstoß gegen die eigene Berufsordnung.`,
        contentB1: `Ein Beispiel: Ein alter Patient mit Demenz will nicht gewaschen werden. Aber ohne Körperpflege bekommt er Hautprobleme. Was tun Sie? Zwingen Sie ihn? Oder lassen Sie ihn? Solche Fragen gehören zur Ethik. Ethik bedeutet: die Lehre vom richtigen Handeln.

Seit 1953 gibt es den Ethikkodex vom ICN. ICN heißt International Council of Nurses. Der Ethikkodex ist ein Regelwerk für Pflegekräfte. Er beschreibt vier Bereiche:
1. Pflichten gegenüber den Patienten
2. Pflichten bei der eigenen Arbeit
3. Pflichten gegenüber dem Beruf
4. Pflichten gegenüber den Kollegen
(Vgl. ICN, Code of Ethics for Nurses, 2021)

In Deutschland gibt es auch Regeln: die Rahmen-Berufsordnung vom Deutschen Pflegerat. Dort steht: Pflegende sollen immer nach dem neuesten Wissen arbeiten. Das bedeutet: Man muss sich weiterbilden.`,
        quelle: "Vgl. ICN, Code of Ethics for Nurses, 2021; Deutscher Pflegerat, Rahmenberufsordnung",
      },
      {
        type: "merke",
        contentC1: `Wer überwacht die Einhaltung dieser Regeln? Hier liegt ein Knackpunkt: Berufsverbände wie der DBfK können nur appellieren — wenn jemand gegen die Berufsordnung verstößt, fehlt ihnen die rechtliche Handhabe. Anders bei Pflegekammern: Wo sie existieren (etwa in Rheinland-Pfalz und Nordrhein-Westfalen), können sie berufsrechtliche Verfahren einleiten und Sanktionen verhängen. Die Berufsordnung wird damit vom freiwilligen Leitbild zum verbindlichen Maßstab.`,
        contentB1: `Wer kontrolliert die Regeln? Ein Berufsverband (zum Beispiel der DBfK) kann nur bitten. Er kann keine Strafen geben. Eine Pflegekammer ist anders. Sie hat mehr Macht. In manchen Bundesländern (zum Beispiel Rheinland-Pfalz) gibt es Pflegekammern. Sie können ein Verfahren einleiten und Strafen geben.`,
        quelle: "Vgl. Heilberufsgesetze der Länder; DBfK Positionspapiere",
      },
      {
        type: "text",
        contentC1: `Wenn im Alltag ethische Konflikte auftreten, hilft ein Denkmodell aus der Medizinethik weiter. Tom Beauchamp und James Childress formulierten 1979 vier Prinzipien, die sich auch in der Pflege als Kompass bewährt haben:

Erstens Selbstbestimmung: Jeder Patient hat das Recht, Behandlungen abzulehnen — selbst wenn Sie das für unvernünftig halten. Zweitens Wohltun: Sie sind verpflichtet, aktiv zum Wohl des Patienten beizutragen. Drittens Nicht-Schaden: Jede Handlung muss so gestaltet sein, dass sie keinen vermeidbaren Schaden anrichtet. Viertens Gerechtigkeit: Alle Patienten verdienen die gleiche Qualität der Versorgung — unabhängig von Herkunft, Diagnose oder Versicherungsstatus (Vgl. Beauchamp/Childress, Principles of Biomedical Ethics, 1979).

Das Schwierige: Diese vier Prinzipien widersprechen sich regelmäßig. Zurück zum Demenz-Patienten: Sein Recht auf Selbstbestimmung kollidiert mit Ihrer Pflicht, Hautschäden zu verhindern (Wohltun). Solche Spannungen lassen sich nicht mit einer Formel auflösen. Sie verlangen, dass Sie innehalten, die Perspektiven abwägen und eine begründete Entscheidung treffen — genau das macht professionelle Pflege aus.`,
        contentB1: `Für schwierige Entscheidungen gibt es ein Denkmodell. Es kommt von Beauchamp und Childress (1979). Es hat vier Grundsätze:

1. Selbstbestimmung: Der Patient darf selbst entscheiden. Auch wenn Sie denken: Das ist falsch.
2. Wohltun: Sie sollen dem Patienten Gutes tun.
3. Nicht-Schaden: Sie dürfen dem Patienten nicht schaden.
4. Gerechtigkeit: Alle Patienten bekommen die gleiche Versorgung.
(Vgl. Beauchamp/Childress, Principles of Biomedical Ethics, 1979)

Das Problem: Diese vier Grundsätze passen nicht immer zusammen. Erinnern Sie sich an den Demenz-Patienten? Er will nicht gewaschen werden (Selbstbestimmung). Aber ohne Pflege bekommt er Hautprobleme (Wohltun). Was wiegt mehr? Darüber muss man nachdenken. Das gehört zur Pflege dazu.`,
        quelle: "Vgl. Beauchamp/Childress, Principles of Biomedical Ethics, 1979; ICN, Code of Ethics, 2021",
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
    zusammenfassung: "Selbstpflege ist Kernkompetenz — Eisenhower-Methode für Zeitmanagement, 4-6-8-Atmung und PMR gegen akuten Stress.",
    zusammenfassungB1: "Pflegekräfte müssen auch auf sich selbst achten. Es gibt einfache Methoden gegen Stress.",
    headerImageUrl: "/images/content/le-01/header/kap-09-selbstpflege.svg",
    glossarBegriffe: ["Eisenhower-Methode", "Progressive Muskelentspannung (PMR)"],
    bloecke: [
      {
        type: "text",
        contentC1: `Es klingt paradox: Menschen, die beruflich für die Gesundheit anderer sorgen, vernachlässigen häufig ihre eigene. Pflegefachpersonen heben und lagern täglich Patienten, stehen stundenlang, arbeiten im Wechsel zwischen Früh-, Spät- und Nachtschicht. Die körperlichen Folgen — Rückenschmerzen, Schlafstörungen, chronische Erschöpfung — gehören zu den häufigsten Berufskrankheiten der Branche. Dazu kommt die emotionale Seite: Sie begleiten Menschen in Angst, Schmerz und Trauer. Manche Patienten sterben während Ihrer Schicht. Studien der Berufsgenossenschaft für Gesundheitsdienst und Wohlfahrtspflege (BGW) zeigen, dass Pflegekräfte ein überdurchschnittlich hohes Risiko für Burnout tragen. Selbstpflege ist deshalb keine Wellness-Option nach Feierabend — sie ist eine professionelle Kernkompetenz. Wer langfristig für andere sorgen will, muss zuerst für sich selbst sorgen.`,
        contentB1: `Es klingt seltsam: Pflegekräfte kümmern sich um die Gesundheit anderer — aber oft nicht um ihre eigene. Der Körper wird stark belastet. Man hebt und lagert Patienten. Man steht stundenlang. Man arbeitet im Wechsel: Früh-Schicht, Spät-Schicht, Nacht-Schicht. Viele bekommen Rückenschmerzen und Schlafprobleme. Und die Arbeit ist emotional schwer. Man sieht Leid, Schmerz und Tod. Die Gefahr für Burnout (= totale Erschöpfung) ist in der Pflege besonders hoch. Deshalb ist Selbst-Pflege sehr wichtig. Wer für andere sorgen will, muss zuerst auf sich selbst achten.`,
        kernaussage: "Selbstpflege ist keine Wellness-Option — sie ist eine professionelle Kernkompetenz.",
        kernaussageB1: "Selbst-Pflege ist kein Luxus — sie ist eine wichtige Fähigkeit für den Beruf.",
        quelle: "Vgl. BGW Gesundheitsreport Pflege; DAK Gesundheitsreport",
      },
      {
        type: "text",
        contentC1: `Ein einfaches, aber wirkungsvolles Werkzeug für den Umgang mit der täglichen Aufgabenflut stammt vom ehemaligen US-Präsidenten Dwight D. Eisenhower. Seine Methode sortiert Aufgaben nach zwei Achsen — Dringlichkeit und Wichtigkeit — in vier Felder: Was dringend UND wichtig ist, erledigen Sie sofort. Was wichtig, aber nicht dringend ist, planen Sie bewusst ein. Was dringend, aber unwichtig ist, delegieren Sie. Was weder dringend noch wichtig ist, streichen Sie. Die zweite Kategorie ist die entscheidende: Hier liegen Sport, Erholung, Weiterbildung und soziale Kontakte — also alles, was Sie langfristig gesund hält, aber im Tagesgeschäft immer als Erstes wegfällt.`,
        contentB1: `Für ein gutes Zeit-Management gibt es die Eisenhower-Methode. Man sortiert alle Aufgaben in 4 Gruppen:
1. Dringend und wichtig: Sofort erledigen.
2. Wichtig, aber nicht dringend: Einen Termin dafür planen.
3. Dringend, aber nicht wichtig: An jemand anderen geben.
4. Nicht wichtig und nicht dringend: Nicht machen.

Gruppe 2 wird oft vergessen. Aber sie ist am wichtigsten für die eigene Gesundheit. Dazu gehören: Sport, Erholung, Weiterbildung und Treffen mit Freunden.`,
        quelle: "Vgl. Covey, Die 7 Wege zur Effektivität, 1989; Eisenhower-Prinzip",
      },
      {
        type: "text",
        contentC1: `Wenn der Stress bereits da ist — etwa nach einer belastenden Situation auf Station — helfen kurzfristige Techniken, die Sie in wenigen Minuten anwenden können: Die 4-6-8-Atemtechnik (vier Sekunden einatmen, sechs Sekunden halten, acht Sekunden langsam ausatmen) aktiviert den Parasympathikus und senkt den Puls messbar. Ein kurzes, bewusstes Selbstgespräch („Ich habe getan, was ich konnte") kann emotionale Spiralen unterbrechen. Die Wahrnehmungslenkung — bewusst auf etwas Neutrales oder Angenehmes achten — hilft, sich nach belastenden Bildern zu lösen. All das funktioniert in einer Zwei-Minuten-Pause auf dem Flur.

Langfristig bewährt sich vor allem regelmäßige Bewegung: Laufen, Schwimmen, Radfahren — alles, was den Kopf frei macht. Eine besonders niedrigschwellige Methode ist die Progressive Muskelentspannung (PMR) nach Edmund Jacobson: Sie spannen einzelne Muskelgruppen für einige Sekunden bewusst an und lassen dann gezielt locker. Der Wechsel zwischen Spannung und Entspannung trainiert das Nervensystem, schneller in den Ruhemodus zu schalten. PMR lässt sich ohne Hilfsmittel üben — im Pausenraum, zu Hause oder sogar im Sitzen.`,
        contentB1: `Wenn der Stress schon da ist, helfen schnelle Methoden. Zum Beispiel die 4-6-8-Atem-Technik: 4 Sekunden einatmen, 6 Sekunden Luft anhalten, 8 Sekunden langsam ausatmen. Das beruhigt den Körper. Eine andere Methode: sich selbst etwas Gutes sagen, zum Beispiel: „Ich habe getan, was ich konnte." Das hilft gegen negative Gedanken. Diese Methoden kann man in einer kurzen Pause nutzen.

Langfristig hilft Bewegung am besten: Laufen, Schwimmen, Radfahren. Sehr gut ist auch die Progressive Muskel-Entspannung (PMR) nach Jacobson. So funktioniert es: Man spannt einzelne Muskeln bewusst an. Dann entspannt man sie wieder. Der Wechsel zwischen Spannung und Entspannung beruhigt den Körper. Man kann PMR überall üben — ohne Geräte.`,
        quelle: "Vgl. Jacobson, Progressive Relaxation, 1938; BGW Stressprävention",
      },
    ],
  },
];
