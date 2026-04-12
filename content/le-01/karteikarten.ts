// Karteikarten — LE-01 Personen- und situationsorientiert professionell pflegen
// 38 Karten, 5 Kategorien (fachbegriff, fakt, handlung, assessment, recht)
// Abdeckung: 9 Kapitel (Geschichte, Definitionen, Pflegeverständnis, Berufspolitik, PflBG, Kompetenz, Pflegeprozess, Ethik, Selbstpflege)
// 25/38 = 66% prüfungsrelevant

import type { KarteikarteVorlage } from "../_types";

export const KARTEIKARTEN_LE01: KarteikarteVorlage[] = [

  // ===================================================================
  // KAPITEL 1: GESCHICHTE DER PFLEGE (Karten 1–5)
  // ===================================================================

  {
    id: "le01-kk-01",
    vorderseite: "Wann und wo wurden Pflegefachkräfte erstmals als eigenständige Berufsgruppe erwähnt?",
    rueckseiteC1: "Ca. 500 v. Chr. in Indien — dort arbeiteten Pflegefachkräfte neben Ärzten in Vorläufern von Krankenhäusern.",
    rueckseiteB1: "Etwa 500 v. Chr. in Indien. Dort gab es die ersten Kranken-Häuser. Pflege-Kräfte arbeiteten zusammen mit Ärzten.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: false,
    quelle: "I Care Pflege S.20",
  },
  {
    id: "le01-kk-02",
    vorderseite: "Welche Bedeutung hat Florence Nightingale für die Pflege?",
    rueckseiteC1: `Nightingale erkannte ab 1845 die Notwendigkeit einer pflegerischen Grundausbildung, pflegte im Krimkrieg, veröffentlichte 1859 \u201ENotes on Nursing\u201C und gründete 1860 die erste Schwesternschule Englands. Sie gilt als erste Pflegetheoretikerin.`,
    rueckseiteB1: `Florence Nightingale wollte ab 1845 eine Ausbildung für Pflege. Sie pflegte Soldaten im Krimkrieg. 1859 schrieb sie das Buch \u201ENotes on Nursing\u201C. 1860 gründete sie die erste Pflege-Schule in England. Sie ist die erste Pflege-Theoretikerin (= eine Person, die Pflege-Wissen aufschreibt).`,
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.21",
  },
  {
    id: "le01-kk-03",
    vorderseite: "Was forderte Agnes Karll 1903 und welche Organisation gründete sie?",
    rueckseiteC1: "Agnes Karll forderte eine dreijährige Ausbildung für Pflegerinnen und gründete die erste Berufsorganisation Deutschlands, aus der der DBfK hervorging. 1907 wurde sie ICN-Präsidentin.",
    rueckseiteB1: "Agnes Karll wollte eine 3-jährige Ausbildung für Pflegerinnen. Sie gründete die erste Berufs-Organisation in Deutschland. Daraus wurde später der DBfK (= Deutscher Berufsverband für Pflegeberufe). 1907 wurde sie Präsidentin vom ICN.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.21",
  },
  {
    id: "le01-kk-04",
    vorderseite: "Seit wann ist Pflege in Deutschland ein gesetzlich geregelter Beruf?",
    rueckseiteC1: "Seit 1906 — Preußen führte Vorschriften über die staatliche Prüfung von Pflegepersonen ein.",
    rueckseiteB1: "Seit 1906. Preußen machte damals Regeln für die staatliche Prüfung von Pflege-Kräften.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: false,
    quelle: "I Care Pflege S.21",
  },
  {
    id: "le01-kk-05",
    vorderseite: "Welche Rolle spielte die Pflege im Nationalsozialismus?",
    rueckseiteC1: `Berufsverbände wurden unter NS-Führung gestellt. Im \u201EEuthanasie\u201C-Programm (ab 1940) wurden psychisch kranke und geistig behinderte Patienten ermordet. Pflegefachkräfte bereiteten Patienten für den Transport vor.`,
    rueckseiteB1: `Die Nazis kontrollierten die Pflege-Verbände. Ab 1940 gab es das \u201EEuthanasie\u201C-Programm. Psychisch kranke und behinderte Menschen wurden getötet. Pflege-Kräfte halfen beim Transport der Patienten.`,
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.22",
  },

  // ===================================================================
  // KAPITEL 2: DEFINITIONEN UND PROFESSION (Karten 6–10)
  // ===================================================================

  {
    id: "le01-kk-06",
    vorderseite: `Wie definiert der ICN \u201EPflege\u201C?`,
    rueckseiteC1: "Pflege umfasst die eigenverantwortliche Versorgung und Betreuung — allein oder in Kooperation — von Menschen aller Altersgruppen, Familien und Gemeinschaften, ob krank oder gesund, in allen Lebenssituationen.",
    rueckseiteB1: "Der ICN (= Weltverband der Pflege) sagt: Pflege bedeutet, Menschen zu versorgen und zu betreuen. Das gilt für alle Altersgruppen. Die Menschen können krank oder gesund sein. Pflege-Kräfte arbeiten allein oder im Team.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.23",
  },
  {
    id: "le01-kk-07",
    vorderseite: "Was unterscheidet die ICN-Definition von der WHO-Definition von Pflege?",
    rueckseiteC1: "Die ICN-Definition betont eigenverantwortliche Versorgung aller Altersgruppen. Die WHO-Definition betont den gesellschaftlichen Auftrag, Menschen zu helfen, ihr physisches, psychisches und soziales Potenzial zu verwirklichen.",
    rueckseiteB1: "Der ICN sagt: Pflege-Kräfte versorgen alle Altersgruppen selbstständig. Die WHO sagt etwas anderes. Sie betont: Pflege hilft Menschen, gesund zu leben. Das bedeutet: körperlich, seelisch und sozial.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.23",
  },
  {
    id: "le01-kk-08",
    vorderseite: "Was ist eine Profession? Nenne mindestens 4 Merkmale.",
    rueckseiteC1: "Eine Profession ist ein Beruf mit: (1) Wissen auf wissenschaftlicher Grundlage, (2) kontrolliertem Berufszugang, (3) verbindlichen Berufsrichtlinien (z. B. Ethikkodex), (4) Berufsverbänden, (5) Autonomie, (6) gesellschaftlicher Relevanz, (7) Entgelt und Fort-/Weiterbildung.",
    rueckseiteB1: "Eine Profession (= ein besonderer Beruf) hat diese Merkmale: (1) Das Wissen kommt aus der Wissenschaft. (2) Man braucht eine Ausbildung als Zugang. (3) Es gibt feste Regeln, z. B. einen Ethik-Kodex. (4) Es gibt Berufs-Verbände. (5) Man arbeitet selbstständig (= Autonomie). (6) Der Beruf ist wichtig für die Gesellschaft. (7) Es gibt Gehalt und Weiter-Bildung.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.23–24",
  },
  {
    id: "le01-kk-09",
    vorderseite: "Welche 3 vorbehaltenen Tätigkeiten definiert § 4 PflBG?",
    rueckseiteC1: "(1) Erhebung und Feststellung des Pflegebedarfs, (2) Organisation, Gestaltung und Steuerung des Pflegeprozesses, (3) Analyse, Evaluation, Sicherung und Entwicklung der Pflegequalität. Diese dürfen nicht an Pflegehelfer delegiert werden.",
    rueckseiteB1: "Vorbehaltene Tätigkeiten (= Aufgaben nur für Pflege-Fachkräfte): (1) Den Pflege-Bedarf feststellen. (2) Den Pflege-Prozess planen und steuern. (3) Die Pflege-Qualität prüfen und verbessern. Pflege-Helfer dürfen diese 3 Aufgaben nicht machen.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.23",
  },
  {
    id: "le01-kk-10",
    vorderseite: "Durch welche 4 Merkmale unterscheidet sich berufliche Pflege von Laienpflege?",
    rueckseiteC1: "(1) Abschluss einer pflegerischen Ausbildung, (2) tarifliches Gehalt, (3) wissenschaftliche Grundlagen, (4) Berufsbild und Berufskodex.",
    rueckseiteB1: "Berufliche Pflege ist anders als Laien-Pflege (= Pflege ohne Ausbildung). 4 Unterschiede: (1) Man hat eine Pflege-Ausbildung. (2) Man bekommt ein festes Gehalt. (3) Man arbeitet nach wissenschaftlichen Regeln. (4) Es gibt ein Berufsbild und einen Berufs-Kodex (= Verhaltensregeln).",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.26",
  },

  // ===================================================================
  // KAPITEL 3: PFLEGEVERSTÄNDNIS (Karten 11–13)
  // ===================================================================

  {
    id: "le01-kk-11",
    vorderseite: `Was beschreibt der Begriff \u201EPflegeverständnis\u201C?`,
    rueckseiteC1: "Pflegeverständnis beschreibt, wie aus der Perspektive einzelner Personen, Institutionen oder des Gesetzgebers Pflege aufgefasst und ausgeübt werden soll. Wesentliche Aspekte: Verständnis von Gesundheit/Krankheit, Menschenbild, innere Haltung, Ziele des Handelns.",
    rueckseiteB1: "Pflege-Verständnis bedeutet: Wie soll Pflege sein? Jede Person, jede Einrichtung und das Gesetz haben eine eigene Meinung dazu. Wichtige Fragen sind: Was ist Gesundheit? Was ist Krankheit? Wie sehen wir den Menschen? Welche Ziele hat die Pflege?",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.27",
  },
  {
    id: "le01-kk-12",
    vorderseite: "Was ist der Unterschied zwischen Pflegeverständnis und Berufsverständnis?",
    rueckseiteC1: "Pflegeverständnis ist die Auffassung einzelner Personen, wie Pflege sein soll. Berufsverständnis beschreibt Haltung, Handlungsanweisungen und Normen der gesamten Berufsgruppe — es soll allgemeingültig sein.",
    rueckseiteB1: "Pflege-Verständnis: Jede Person hat eine eigene Meinung über Pflege. Berufs-Verständnis: Regeln und Normen für alle Pflege-Kräfte. Das Berufs-Verständnis gilt für die ganze Berufs-Gruppe.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.27",
  },
  {
    id: "le01-kk-13",
    vorderseite: "Wie wandelte sich das Pflegeverständnis seit den 1950er Jahren?",
    rueckseiteC1: "Bis in die 1950er wurde Pflege eher intuitiv ausgeübt (Nächstenliebe). In den 60er-/70er-Jahren vereinheitlichten sich Methoden. Nach 1980 setzte Professionalisierung ein — Pflegewissenschaft als eigene Disziplin.",
    rueckseiteB1: "Bis 1950 pflegten die Menschen nach Gefühl und Nächsten-Liebe. In den 1960er- und 1970er-Jahren gab es einheitliche Methoden. Ab 1980 wurde Pflege professionell. Pflege-Wissenschaft wurde ein eigenes Fach.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: false,
    quelle: "I Care Pflege S.27",
  },

  // ===================================================================
  // KAPITEL 4: BERUFSPOLITIK (Karten 14–17)
  // ===================================================================

  {
    id: "le01-kk-14",
    vorderseite: "Was sind Berufsverbände und welche Aufgaben haben sie?",
    rueckseiteC1: "Berufsverbände repräsentieren die Berufsgruppe in der Öffentlichkeit, setzen sich bei Ministerien für deren Belange ein, beraten Mitglieder in Rechtsfragen und organisieren Fort- und Weiterbildungen.",
    rueckseiteB1: "Berufs-Verbände vertreten eine Berufs-Gruppe. Sie sprechen mit der Politik über Probleme der Pflege. Sie beraten ihre Mitglieder bei Rechts-Fragen. Sie organisieren auch Fort-Bildungen und Weiter-Bildungen.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.30",
  },
  {
    id: "le01-kk-15",
    vorderseite: "Was unterscheidet Gewerkschaften von Berufsverbänden?",
    rueckseiteC1: "Gewerkschaften schließen Tarifverträge ab — Berufsverbände nicht. Gewerkschaften vertreten Arbeitnehmerinteressen, während Verbände die Berufsgruppe repräsentieren und beraten.",
    rueckseiteB1: "Gewerkschaften machen Tarif-Verträge (= Verträge über Gehalt). Berufs-Verbände machen keine Tarif-Verträge. Gewerkschaften kämpfen für bessere Arbeits-Bedingungen. Berufs-Verbände vertreten die Berufs-Gruppe und beraten.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.31",
  },
  {
    id: "le01-kk-16",
    vorderseite: "Was ist eine Pflegekammer und welche Aufgaben hat sie?",
    rueckseiteC1: "Eine Pflegekammer ist eine Körperschaft des öffentlichen Rechts mit Pflichtmitgliedschaft. Aufgaben: eigene Berufsordnung, Qualitätsempfehlungen, Berufsregister, Regelungen zu Fort-/Weiterbildung und Disziplinarmaßnahmen.",
    rueckseiteB1: "Eine Pflege-Kammer ist eine offizielle Organisation. Alle Pflege-Kräfte müssen Mitglied sein. Die Pflege-Kammer macht die Berufs-Ordnung (= Regeln für den Beruf). Sie prüft die Qualität der Pflege. Sie regelt die Fort-Bildung. Sie kann auch Strafen geben.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.31–32",
  },
  {
    id: "le01-kk-17",
    vorderseite: "Nenne je 2 Argumente für und gegen Pflegekammern.",
    rueckseiteC1: "Pro: Selbstverwaltung stärkt das Profil der Pflege, ermöglicht eigene Berufsordnung und Aufsicht. Kontra: Pflichtmitgliedschaft wird als undemokratisch empfunden, zusätzliche Bürokratie.",
    rueckseiteB1: "Dafür: Die Pflege kann sich selbst verwalten. Es gibt eine eigene Berufs-Ordnung. Dagegen: Alle müssen Mitglied sein. Das finden manche nicht fair. Es gibt auch mehr Bürokratie (= Verwaltungsarbeit).",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: false,
    quelle: "I Care Pflege S.31–32",
  },

  // ===================================================================
  // KAPITEL 5: PFLBG UND AUSBILDUNG (Karten 18–22)
  // ===================================================================

  {
    id: "le01-kk-18",
    vorderseite: "Wann trat das Pflegeberufegesetz (PflBG) in Kraft und was ist sein Ziel?",
    rueckseiteC1: "Das PflBG trat am 1. Januar 2020 in Kraft. Ziel: Vermittlung von Kompetenzen zu einer selbstständigen, umfassenden und prozessorientierten Pflege von Menschen aller Altersstufen.",
    rueckseiteB1: "Das PflBG (= Pflege-Berufe-Gesetz) gilt seit dem 1. Januar 2020. Ziel: Pflege-Kräfte lernen, alle Menschen selbstständig zu pflegen. Das gilt für alle Altersgruppen. Die Pflege soll nach einem festen Prozess ablaufen.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.38",
  },
  {
    id: "le01-kk-19",
    vorderseite: "Wie lange dauert die generalistische Pflegeausbildung und wie teilen sich Theorie und Praxis auf?",
    rueckseiteC1: "3 Jahre Vollzeit (Teilzeit bis 5 Jahre). Theoretischer Unterricht: 2100 Stunden. Praktische Ausbildung: mindestens 2500 Stunden.",
    rueckseiteB1: "Die Ausbildung dauert 3 Jahre in Vollzeit. In Teilzeit dauert sie bis zu 5 Jahre. Theorie: 2100 Stunden. Praxis: mindestens 2500 Stunden.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.38",
  },
  {
    id: "le01-kk-20",
    vorderseite: "Nenne die 5 Kompetenzbereiche der theoretischen Pflegeausbildung mit Stundenverteilung.",
    rueckseiteC1: "KB I: Pflegeprozesse (1000 Std.), KB II: Kommunikation (280 Std.), KB III: Interprofessionelles Handeln (300 Std.), KB IV: Gesetze/Ethik (160 Std.), KB V: Wissenschaft/Berufsethik (160 Std.) + 200 Std. frei = 2100 Std.",
    rueckseiteB1: "5 Bereiche in der Theorie: (1) Pflege-Prozesse: 1000 Stunden. (2) Kommunikation (= Gespräche führen): 280 Stunden. (3) Arbeiten im Team mit anderen Berufen: 300 Stunden. (4) Gesetze und Ethik: 160 Stunden. (5) Wissenschaft und Berufs-Ethik: 160 Stunden. Plus 200 freie Stunden. Das sind zusammen 2100 Stunden.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.39",
  },
  {
    id: "le01-kk-21",
    vorderseite: "Welche Wahlmöglichkeit haben Auszubildende zwischen dem 18. und 20. Ausbildungsmonat?",
    rueckseiteC1: "Sie können wählen: Pflegefachfrau/-mann (generalistisch, EU-weit anerkannt) oder Spezialisierung Gesundheits- und Kinderkrankenpflege oder Altenpflege.",
    rueckseiteB1: "Nach 18 Monaten können die Auszubildenden wählen. Option 1: Pflege-Fachfrau oder Pflege-Fachmann. Das gilt in der ganzen EU. Option 2: Kinder-Krankenpflege. Option 3: Altenpflege.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.38",
  },
  {
    id: "le01-kk-22",
    vorderseite: "Welche Zugangsvoraussetzungen gelten für die Pflegeausbildung nach PflBG?",
    rueckseiteC1: "Mittlerer Bildungsabschluss oder Hauptschulabschluss + 2-jährige Berufsausbildung oder 1-jährige Assistenz-/Helferausbildung oder erfolgreicher Abschluss einer 10-jährigen Schulbildung.",
    rueckseiteB1: "Man braucht einen von diesen Abschlüssen: (1) Mittlerer Schul-Abschluss (Realschule). (2) Hauptschul-Abschluss plus eine 2-jährige Berufs-Ausbildung. (3) Hauptschul-Abschluss plus eine 1-jährige Helfer-Ausbildung. (4) Oder 10 Jahre Schule mit Abschluss.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.38",
  },

  // ===================================================================
  // KAPITEL 6: KOMPETENZ (Karten 23–25)
  // ===================================================================

  {
    id: "le01-kk-23",
    vorderseite: `Was bedeutet \u201EKompetenz\u201C und wie unterscheidet sie sich von reinem Wissen?`,
    rueckseiteC1: `Kompetenz bedeutet \u201EBefähigung, etwas zu tun\u201C. Im Gegensatz zur reinen Wissensvermittlung steht die Anwendbarkeit von Kenntnissen im Vordergrund.`,
    rueckseiteB1: "Kompetenz (= die Fähigkeit, etwas zu tun) ist mehr als Wissen. Wissen allein reicht nicht. Man muss das Wissen auch anwenden können. Das ist Kompetenz.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.47",
  },
  {
    id: "le01-kk-24",
    vorderseite: "Aus welchen 3 Dimensionen setzt sich Handlungskompetenz zusammen?",
    rueckseiteC1: "Fachkompetenz, Personale Kompetenz und Sozialkompetenz. Handlungskompetent ist, wer sich in beruflichen, gesellschaftlichen und privaten Situationen sachgerecht und verantwortlich verhalten kann (KMK 2011).",
    rueckseiteB1: "Handlungs-Kompetenz (= richtig handeln können) hat 3 Teile: (1) Fach-Kompetenz: Man kennt sein Fach. (2) Personale Kompetenz: Man kennt sich selbst. (3) Sozial-Kompetenz: Man kann gut mit anderen arbeiten. Man handelt richtig im Beruf und im Privat-Leben.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.47",
  },
  {
    id: "le01-kk-25",
    vorderseite: "Was umfasst Sozialkompetenz in der Pflege?",
    rueckseiteC1: "Beziehungs- und Teamfähigkeit, Einfühlungsvermögen, Kooperations- und Konfliktlösebereitschaft, Konsensfähigkeit und Toleranz. Pflege findet immer mit und an Menschen statt.",
    rueckseiteB1: "Sozial-Kompetenz bedeutet: Man kann gut im Team arbeiten. Man kann sich in andere Menschen einfühlen. Man kann Konflikte lösen. Man ist tolerant. Das ist in der Pflege sehr wichtig. Pflege ist immer Arbeit mit Menschen.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: false,
    quelle: "I Care Pflege S.48",
  },

  // ===================================================================
  // KAPITEL 7: PFLEGEPROZESS (Karten 26–32)
  // ===================================================================

  {
    id: "le01-kk-26",
    vorderseite: "Was ist der Pflegeprozess und zu welchen Tätigkeiten gehört er?",
    rueckseiteC1: "Ein systematischer und zielgerichteter Arbeits- und Problemlösungsprozess, in dem gemeinsam mit dem Pflegeempfänger sein individueller Pflegebedarf erhoben wird. Laut § 4 PflBG zählt er zu den vorbehaltenen Tätigkeiten.",
    rueckseiteB1: "Der Pflege-Prozess ist ein fester Ablauf für die Pflege. Die Pflege-Kraft prüft zusammen mit dem Patienten: Was braucht dieser Mensch? Der Pflege-Prozess hat ein klares Ziel. Laut Gesetz (§ 4 PflBG) dürfen nur Fach-Kräfte das machen.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.78",
  },
  {
    id: "le01-kk-27",
    vorderseite: "Nenne die 6 Schritte des Pflegeprozessmodells nach Fiechter und Meier.",
    rueckseiteC1: "(1) Informationssammlung, (2) Erkennen von Pflegeproblemen und Ressourcen, (3) Festlegung der Pflegeziele, (4) Planung der Pflegemaßnahmen, (5) Durchführung, (6) Evaluation.",
    rueckseiteB1: "6 Schritte nach Fiechter und Meier: (1) Informationen sammeln. (2) Probleme und Stärken erkennen. (3) Ziele festlegen. (4) Maßnahmen planen. (5) Maßnahmen machen. (6) Ergebnis prüfen (= Evaluation).",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.78",
  },
  {
    id: "le01-kk-28",
    vorderseite: "Was ist eine Pflegeanamnese und wann wird sie durchgeführt?",
    rueckseiteC1: "Eine Methode der strukturierten Datenerhebung im Rahmen der Informationssammlung (Schritt 1). Sie erfolgt meist bei der Aufnahme des Pflegeempfängers.",
    rueckseiteB1: "Pflege-Anamnese (= das erste Gespräch über die Krankheit) ist Schritt 1 im Pflege-Prozess. Die Pflege-Kraft sammelt Informationen über den Patienten. Das passiert meistens bei der Aufnahme.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.80",
  },
  {
    id: "le01-kk-29",
    vorderseite: "Was ist ein Pflegeproblem und welche Arten gibt es?",
    rueckseiteC1: "Ein Pflegeproblem ist eine physische, psychische, emotionale, soziale oder organisatorische Beeinträchtigung, die den Pflegeempfänger in der Selbstpflege einschränkt. Arten: aktuell, potenziell, verdeckt, generell, individuell.",
    rueckseiteB1: "Ein Pflege-Problem ist eine Einschränkung. Der Patient kann sich nicht allein pflegen. Die Einschränkung kann körperlich, seelisch oder sozial sein. Es gibt 5 Arten: (1) aktuell (= jetzt). (2) potenziell (= möglich in der Zukunft). (3) verdeckt (= versteckt). (4) generell (= bei vielen Patienten). (5) individuell (= nur bei diesem Patienten).",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.81",
  },
  {
    id: "le01-kk-30",
    vorderseite: "Was sind Ressourcen im pflegerischen Kontext? Nenne 3 Kategorien.",
    rueckseiteC1: "Fähigkeiten, Fertigkeiten und Einflüsse, die den Betroffenen bei der Bearbeitung seiner Probleme unterstützen. Kategorien: körperliche, innere, räumliche, soziale, ökonomische, spirituelle Ressourcen.",
    rueckseiteB1: "Ressourcen (= Stärken und Fähigkeiten) helfen dem Patienten. Der Patient kann damit seine Probleme besser lösen. Es gibt verschiedene Arten: Körperliche Ressourcen: z. B. der Patient kann gehen. Soziale Ressourcen: z. B. die Familie hilft. Innere Ressourcen: z. B. der Patient ist motiviert.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.82",
  },
  {
    id: "le01-kk-31",
    vorderseite: "Welche Anforderungen müssen Pflegeziele erfüllen?",
    rueckseiteC1: "Pflegeziele müssen SMART-ähnlich formuliert sein: spezifisch, messbar, akzeptiert, realisierbar und terminierbar. Sie geben Richtung, Art und Umfang der Pflegemaßnahmen vor und dienen als Evaluationsgrundlage.",
    rueckseiteB1: "Pflege-Ziele müssen SMART sein: S = spezifisch (= genau). M = messbar (= man kann es prüfen). A = akzeptiert (= der Patient stimmt zu). R = realisierbar (= es ist möglich). T = terminierbar (= es gibt einen Zeitpunkt). Die Ziele zeigen: Was soll die Pflege erreichen?",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.82–83",
  },
  {
    id: "le01-kk-32",
    vorderseite: "Unterscheide direkte und indirekte sowie objektive und subjektive Informationen in der Pflege.",
    rueckseiteC1: "Direkte Informationen stammen vom Pflegeempfänger selbst, indirekte von Angehörigen oder Dokumenten. Objektive Informationen sind messbar (z. B. Vitalzeichen), subjektive beruhen auf Empfindungen des Betroffenen.",
    rueckseiteB1: `Direkte Informationen: Der Patient erzählt es selbst. Indirekte Informationen: Die Familie oder Dokumente geben Auskunft. Objektive Informationen: Man kann sie messen. Zum Beispiel: Blutdruck, Temperatur. Subjektive Informationen: Der Patient beschreibt sein Gefühl. Zum Beispiel: \u201EIch habe Schmerzen.\u201C`,
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.80",
  },

  // ===================================================================
  // KAPITEL 8: BERUFSETHIK (Karten 33–35)
  // ===================================================================

  {
    id: "le01-kk-33",
    vorderseite: "Wann wurde der ICN-Ethikkodex erstmals formuliert und was regelt er?",
    rueckseiteC1: "1953 vom ICN formuliert und seitdem mehrfach überarbeitet. Er definiert die ethischen Pflichten professionell Pflegender gegenüber Pflegeempfängern, der Berufsausübung, der Profession und den Kollegen.",
    rueckseiteB1: "Den ICN-Ethik-Kodex (= Verhaltens-Regeln für die Pflege) gibt es seit 1953. Er wurde mehrmals aktualisiert. Er beschreibt die Pflichten von Pflege-Kräften. Die Pflichten gelten gegenüber Patienten, dem Beruf und den Kollegen.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.24",
  },
  {
    id: "le01-kk-34",
    vorderseite: "Nenne die 4 ethischen Prinzipien nach Beauchamp und Childress.",
    rueckseiteC1: "(1) Autonomie — Selbstbestimmung des Pflegeempfängers, (2) Fürsorge — Wohl des Pflegeempfängers, (3) Gerechtigkeit — gleiche Versorgung für alle, (4) Nicht-Schaden — Vermeidung von Schaden.",
    rueckseiteB1: "4 Regeln für die Ethik (nach Beauchamp und Childress): (1) Autonomie: Der Patient entscheidet selbst. (2) Fürsorge: Man tut dem Patienten Gutes. (3) Gerechtigkeit: Alle bekommen die gleiche Pflege. (4) Nicht-Schaden: Man darf dem Patienten nicht schaden.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege S.753–754",
  },
  {
    id: "le01-kk-35",
    vorderseite: "Können Berufsverbände bei Verstößen gegen die Berufsordnung Konsequenzen veranlassen?",
    rueckseiteC1: "Nein — die Berufsordnung der Verbände ist derzeit hauptsächlich eine Selbstverpflichtung. Nur Pflegekammern können Disziplinarverfahren einleiten.",
    rueckseiteB1: "Nein. Die Berufs-Ordnung von Verbänden ist freiwillig. Berufs-Verbände können keine Strafen geben. Nur Pflege-Kammern dürfen ein Verfahren starten.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: false,
    quelle: "I Care Pflege S.24",
  },

  // ===================================================================
  // KAPITEL 9: SELBSTPFLEGE (Karten 36–38)
  // ===================================================================

  {
    id: "le01-kk-36",
    vorderseite: "Welche Belastungen sind im Pflegeberuf besonders häufig?",
    rueckseiteC1: "Rückenschmerzen durch Heben und Tragen, Schichtarbeit mit sozialem Jetlag, emotionale Belastung durch Leid und Tod. Die Burnout-Gefährdung ist in Pflegeberufen überdurchschnittlich hoch.",
    rueckseiteB1: "Pflege-Kräfte haben oft Rücken-Schmerzen vom Heben. Schicht-Arbeit stört den Schlaf-Rhythmus. Leid und Tod belasten emotional. Deshalb haben viele Pflege-Kräfte ein Burnout-Risiko (= sie sind total erschöpft vom Beruf).",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: false,
    quelle: "I Care Pflege S.56–63",
  },
  {
    id: "le01-kk-37",
    vorderseite: "Erkläre die Eisenhower-Methode und ihre 4 Kategorien.",
    rueckseiteC1: "Aufgaben werden nach Dringlichkeit und Wichtigkeit eingeteilt: (1) dringend + wichtig → sofort erledigen, (2) nicht dringend + wichtig → terminieren, (3) nicht wichtig + dringend → delegieren, (4) nicht wichtig + nicht dringend → nicht bearbeiten.",
    rueckseiteB1: "Die Eisenhower-Methode sortiert Aufgaben in 4 Gruppen: (1) Dringend und wichtig: Sofort machen! (2) Nicht dringend, aber wichtig: Einen Termin planen. (3) Dringend, aber nicht wichtig: Jemand anderes macht das. (4) Nicht dringend und nicht wichtig: Gar nicht machen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: false,
    quelle: "I Care Pflege S.73",
  },
  {
    id: "le01-kk-38",
    vorderseite: "Nenne 3 kurzfristige und 2 langfristige Methoden der Stressbewältigung.",
    rueckseiteC1: "Kurzfristig: 4-6-8-Atemtechnik, positives Selbstgespräch, Gedankenstopp. Langfristig: Progressive Muskelentspannung nach Jacobson und regelmäßige körperliche Bewegung (Joggen, Schwimmen, Yoga).",
    rueckseiteB1: `3 schnelle Methoden gegen Stress: (1) 4-6-8-Atem-Technik: 4 Sekunden einatmen, 6 halten, 8 ausatmen. (2) Positives Selbst-Gespräch: \u201EIch schaffe das!\u201C (3) Gedanken-Stopp: Negative Gedanken bewusst stoppen. 2 langfristige Methoden: (1) Progressive Muskel-Entspannung (= Muskeln anspannen und loslassen). (2) Regelmäßig Sport machen. Zum Beispiel: Joggen, Schwimmen, Yoga.`,
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: false,
    quelle: "I Care Pflege S.75, S.77",
  },
];
