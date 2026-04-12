// Karteikarten — LE 06 Menschen aller Altersstufen in ihrer Mobilität unterstützen
// 38 Karten, 5 Kategorien: fachbegriff (8), fakt (8), handlung (8), assessment (7), recht (7)
// Tags: pflege (30), anatomie (4), krankheitslehre (4)
// Quellen: I Care Pflege (Thieme 2020), Expertenstandards DNQP, EPUAP/NPUAP

import type { KarteikarteVorlage } from "../_types";

export const KARTEIKARTEN_LE06: KarteikarteVorlage[] = [
  // =====================================================================
  // FACHBEGRIFF (8 Karten) — Definitionen als Fragen
  // =====================================================================
  {
    id: "le06-kk-01",
    vorderseite: "Was versteht man unter dem Immobilitätssyndrom?",
    rueckseiteC1:
      "Kaskade von Folgeerkrankungen durch anhaltende Bewegungsunfähigkeit: Dekubitus, Kontrakturen, Thrombose, Pneumonie, Obstipation, Harnwegsinfekte, Deprivation und Muskelschwund.",
    rueckseiteB1:
      "Wenn ein Patient sich nicht bewegt, werden viele Körperstellen krank: Haut, Gelenke, Blutgefäße und Lunge.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 405–406",
  },
  {
    id: "le06-kk-02",
    vorderseite: "Was sind die 6 Konzepte der Kinästhetik nach Hatch und Maietta?",
    rueckseiteC1:
      "Interaktion, Funktionale Anatomie, Menschliche Bewegung, Anstrengung, Menschliche Funktion, Umgebung — entwickelt in den 1970er-Jahren zur Förderung ressourcenorientierter Bewegung.",
    rueckseiteB1:
      "Kinästhetik hat 6 Teile: Zusammenwirken, Körperbau, Bewegung, Kraft, Funktion und Umgebung.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 342–347",
  },
  {
    id: "le06-kk-03",
    vorderseite: "Was ist der Unterschied zwischen paralleler und spiraliger Bewegung?",
    rueckseiteC1:
      "Parallele Bewegung erfolgt synchron und gerade — erfordert mehr Kraft. Spiralige Bewegung nutzt Drehung um die Körperlängsachse und ist durch den Hebeleffekt leichter für Pflegende und Patienten.",
    rueckseiteB1:
      "Gerade Bewegung braucht viel Kraft. Drehbewegung (spiralig) ist leichter — so sollte man Patienten bewegen.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 344–345",
  },
  {
    id: "le06-kk-04",
    vorderseite: "Was ist der Unterschied zwischen Makro- und Mikropositionierung?",
    rueckseiteC1:
      "Makropositionierung: Vollständiger Lagewechsel (z. B. Rückenlage → 30°-Seitenlage) mit vollständiger Druckentlastung. Mikropositionierung: Kleine Positionsveränderungen zur Druckumverteilung — ersetzt Makropositionierung nicht.",
    rueckseiteB1:
      "Makro: Patient wird komplett umgedreht. Mikro: Nur ein kleines Kissen wird verschoben. Mikro allein reicht nicht.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 351",
  },
  {
    id: "le06-kk-05",
    vorderseite: "Was sind die 4 Dekubitus-Kategorien nach EPUAP?",
    rueckseiteC1:
      "Kat. I: Nicht wegdrückbare Rötung, Haut intakt. Kat. II: Teilverlust der Haut, Blase. Kat. III: Verlust aller Hautschichten, Subkutis sichtbar. Kat. IV: Vollständiger Gewebeverlust, Knochen/Sehnen sichtbar.",
    rueckseiteB1:
      "Kat. I: Rote Stelle bleibt. Kat. II: Blase oder offene Stelle. Kat. III: Tiefe Wunde. Kat. IV: Sehr tiefe Wunde, Knochen sichtbar.",
    tag: "krankheitslehre",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "EPUAP/NPUAP Leitlinie 2019",
  },
  {
    id: "le06-kk-06",
    vorderseite: "Was sind freiheitsentziehende Maßnahmen (FEM)? Nenne 4 Beispiele.",
    rueckseiteC1:
      "Maßnahmen die die Bewegungsfreiheit gegen den Willen einschränken: Bettgitter, Gurte (Bauch-, Handgelenk), Tisch vor dem Rollstuhl, medikamentöse Sedierung, abgeschlossene Zimmertür.",
    rueckseiteB1:
      "FEM hält den Patienten fest: Gitter, Gurte, Sedierung oder abgeschlossene Tür. Erlaubt nur als letztes Mittel.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 180–183",
  },
  {
    id: "le06-kk-07",
    vorderseite: "Was sind die Prädilektionsstellen für Dekubitus in Rückenlage?",
    rueckseiteC1:
      "Hinterkopf, Schulterblätter, Ellenbogen, Kreuzbein/Steißbein, Fersen — alle Stellen wo Knochen direkt unter der Haut liegen und Druck konzentriert wird.",
    rueckseiteB1:
      "Rückenlage: Hinterkopf, Schultern, Ellbogen, Steißbein und Fersen sind gefährdet.",
    tag: "anatomie",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 396",
  },
  {
    id: "le06-kk-08",
    vorderseite: "Was beschreibt die Virchow-Trias?",
    rueckseiteC1:
      "Drei pathophysiologische Faktoren der Thromboseentstehung: verlangsamter Blutfluss, Gefäßwandschädigung und veränderte Blutzusammensetzung. Benannt nach Rudolf Virchow.",
    rueckseiteB1:
      "3 Gründe für Blutgerinnsel: langsamer Blutfluss, kaputte Gefäßwand, verändertes Blut.",
    tag: "anatomie",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 417",
  },

  // =====================================================================
  // FAKT (8 Karten) — Prüfungswissen, Zahlen, Zusammenhänge
  // =====================================================================
  {
    id: "le06-kk-09",
    vorderseite: "Wie schnell kann ein Spitzfuß nach Bettruhe entstehen?",
    rueckseiteC1:
      "Bereits nach wenigen Tagen strikter Bettlägerigkeit — die Bettdecke drückt den Fuß in Plantarflexion, die Wadenmuskulatur verkürzt sich. Spitzfußprophylaxe ab Tag 1.",
    rueckseiteB1:
      "Ein Spitzfuß kann nach wenigen Tagen im Bett entstehen. Man muss sofort ab dem ersten Tag vorbeugen.",
    tag: "krankheitslehre",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 423",
  },
  {
    id: "le06-kk-10",
    vorderseite: "Warum erhöhen Bettgitter das Sturzrisiko statt es zu senken?",
    rueckseiteC1:
      "Patienten klettern über das Gitter — die Fallhöhe steigt von ca. 50 cm auf über 120 cm. Zudem fördern Gitter Kontrakturen durch Bewegungseinschränkung.",
    rueckseiteB1:
      "Mit Gitter fällt der Patient von höher, wenn er darüber klettert. Das ist gefährlicher als ohne Gitter.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 438",
  },
  {
    id: "le06-kk-11",
    vorderseite: "Welche 7 Organsysteme werden durch Immobilität geschädigt?",
    rueckseiteC1:
      "Haut (Dekubitus), Bewegungsapparat (Kontraktur, Muskelatrophie), Herz-Kreislauf (Thrombose), Lunge (Pneumonie), Verdauung (Obstipation), Harnwege (Infekte), Psyche (Depression).",
    rueckseiteB1:
      "Immobilität schadet: Haut, Gelenke, Herz, Lunge, Darm, Blase und Geist — alle 7 müssen geschützt werden.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 405–406",
  },
  {
    id: "le06-kk-12",
    vorderseite: "Was passiert anatomisch bei der Entstehung von Scherkräften?",
    rueckseiteC1:
      "Verschiedene Hautschichten werden gegeneinander verschoben (z. B. beim Herunterrutschen im Bett). Blutgefäße in der Dermis verdrillen sich, die Durchblutung wird unterbrochen.",
    rueckseiteB1:
      "Wenn der Patient rutscht, werden Hautschichten auseinandergezogen. Die Blutgefäße werden gedreht — das ist gefährlich.",
    tag: "anatomie",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 393",
  },
  {
    id: "le06-kk-13",
    vorderseite: "Wofür steht das V-A-S-E Schema bei der Pneumonieprophylaxe?",
    rueckseiteC1:
      "V = Ventilation (Belüftung), A = Aspiration vermeiden, S = Sekretmobilisation, E = Atemübungen (z. B. Lippenbremse, Kontaktatmung).",
    rueckseiteB1:
      "V = Luft in die Lunge. A = kein Essen in die Lunge. S = Schleim lösen. E = Atemübungen machen.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 468",
  },
  {
    id: "le06-kk-14",
    vorderseite: "Was ist das Grundprinzip des Bobath-Konzepts?",
    rueckseiteC1:
      "Die betroffene Körperseite wird aktiv in alle Aktivitäten einbezogen statt nur die gesunde Seite zu nutzen. Ziel: Bahnung normaler Bewegungsmuster bei ZNS-Schädigung.",
    rueckseiteB1:
      "Die kranke Seite immer mit einbeziehen, nicht nur die gesunde Seite benutzen.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 438",
  },
  {
    id: "le06-kk-15",
    vorderseite: "Welche Muskeln und Gelenke sind bei Bettlägerigkeit besonders kontrakturgefährdet?",
    rueckseiteC1:
      "Sprunggelenk (Spitzfuß), Hüftgelenk (Beugekontraktur), Kniegelenk, Handgelenk und Schultergelenk. Die Wadenmuskulatur verkürzt sich am schnellsten.",
    rueckseiteB1:
      "Fuß, Hüfte, Knie, Hand und Schulter werden am schnellsten steif. Der Fuß ist am häufigsten betroffen.",
    tag: "anatomie",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 441",
  },
  {
    id: "le06-kk-16",
    vorderseite: "Wie viele Mikrobewegungen führt ein gesunder Mensch pro Stunde im Schlaf durch?",
    rueckseiteC1:
      "12–40 Mikrobewegungen pro Stunde und 5–6 komplette Positionswechsel pro Nacht. Immobile Patienten können beides nicht — Pflegefachkraft muss übernehmen.",
    rueckseiteB1:
      "Gesunde Menschen bewegen sich 12 bis 40 Mal pro Stunde unbewusst. Immobile Patienten können das nicht.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: false,
    quelle: "I Care Pflege Thieme 2020, S. 392",
  },

  // =====================================================================
  // HANDLUNG (8 Karten) — Was tut die Pflegefachkraft konkret?
  // =====================================================================
  {
    id: "le06-kk-17",
    vorderseite: "Wie wird der Fingertest zur Dekubitusfrüherkennung durchgeführt?",
    rueckseiteC1:
      "Gerötete Stelle für 1 Sekunde mit dem Finger eindrücken. Wird die Rötung weiß: physiologische Hyperämie. Bleibt die Rötung bestehen (nicht wegdrückbar): Dekubitus Kategorie I.",
    rueckseiteB1:
      "Rote Stelle kurz eindrücken. Wird sie weiß? Dann kein Dekubitus. Bleibt sie rot? Dann ist es Dekubitus.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 399",
  },
  {
    id: "le06-kk-18",
    vorderseite: "Welche 4 Schritte sind vor jeder Mobilisation durchzuführen?",
    rueckseiteC1:
      "1) Kreislaufkontrolle (Puls, Blutdruck), 2) Muskelvenenpumpe aktivieren (Füße strecken/anziehen), 3) Patient informieren (Ziel erklären), 4) Sicherheit herstellen (Schuhwerk, Hilfsmittel).",
    rueckseiteB1:
      "Vor der Mobilisation: Blutdruck messen, Füße bewegen lassen, Ziel erklären, sicheren Weg schaffen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 360",
  },
  {
    id: "le06-kk-19",
    vorderseite: "Wie mobilisiert man einen Patienten kinästhetisch an die Bettkante?",
    rueckseiteC1:
      "Patient dreht sich zur Seite (spiralige Bewegung). Beine über die Bettkante schwingen lassen. Oberkörper mit Armstütz aufrichten. Betthöhe so einstellen, dass Füße fest am Boden stehen.",
    rueckseiteB1:
      "Patient dreht sich, Beine hängen über das Bett, Oberkörper richtet sich auf. Der Patient macht so viel wie möglich selbst.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 356",
  },
  {
    id: "le06-kk-20",
    vorderseite: "Welche Maßnahmen gehören zur Spitzfußprophylaxe ab Tag 1?",
    rueckseiteC1:
      "Aktive Fußbewegungen anleiten (Kreisen, Strecken, Anziehen), Fußstütze verwenden, Bettdecke mit Bettbogen entlasten, regelmäßige Mobilisation. Kein Kissen unter die Kniekehlen.",
    rueckseiteB1:
      "Füße täglich bewegen, eine Stütze unter den Fuß legen, Bettdecke hochhalten. Kein Kissen unter das Knie!",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 424–425",
  },
  {
    id: "le06-kk-21",
    vorderseite: "Was darf man bei der Dekubitusprophylaxe NICHT tun?",
    rueckseiteC1:
      "Verboten: 1) Eisbeutel (Vasokonstriktion), 2) Föhnen (Hautaustrocknung), 3) Einreiben mit Franzbranntwein oder Alkoholen (zerstört Hautbarriere). Alles veraltet und schädlich.",
    rueckseiteB1:
      "Nicht erlaubt: Eis auf die Haut, Föhn auf die Haut, Franzbranntwein. Das schadet der Haut.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 403",
  },
  {
    id: "le06-kk-22",
    vorderseite: "Wie wird die 30°-Seitenlage korrekt durchgeführt?",
    rueckseiteC1:
      "Patient in 30°-Seitenlage (nicht 90°!). Rücken mit Kissen abgestützt. Oberes Bein leicht nach vorne auf einem Kissen. Der Trochanter major wird vollständig entlastet.",
    rueckseiteB1:
      "Patient liegt schräg auf der Seite (30°, nicht 90°). Ein Kissen stützt den Rücken. Der Hüftknochen bekommt keinen Druck.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 349–350",
  },
  {
    id: "le06-kk-23",
    vorderseite: "Wie werden Kompressionsstrümpfe korrekt angelegt?",
    rueckseiteC1:
      "Morgens vor dem Aufstehen anlegen. Strumpf auf Knäuel formen, über Ferse ziehen, Schritt für Schritt nach oben rollen. Faltenfreiheit prüfen. Kein Einrollen am Rand.",
    rueckseiteB1:
      "Strümpfe am Morgen anlegen, wenn der Patient noch liegt. Keine Falten, kein Einrollen am Rand.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 420",
  },
  {
    id: "le06-kk-24",
    vorderseite: "Was muss nach jedem Sturzereignis dokumentiert werden?",
    rueckseiteC1:
      "Sturzprotokoll: Wer, Wann, Wo, Umstände, Verletzungen, Zeugen, Sofortmaßnahmen, Arztinformation. Analyse der Ursachen. Angepasster Maßnahmenplan. Gilt auch für Beinahestürze.",
    rueckseiteB1:
      "Nach jedem Sturz aufschreiben: Wer ist gefallen? Wann? Was passiert? Was wurde gemacht? Warum ist er gefallen?",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 440–441",
  },

  // =====================================================================
  // ASSESSMENT (7 Karten) — Einschätzungsinstrumente
  // =====================================================================
  {
    id: "le06-kk-25",
    vorderseite: "Was misst der Barthel-Index und was bedeuten die Extremwerte?",
    rueckseiteC1:
      "Selbstständigkeit in 10 ADL-Bereichen (Essen, Baden, Körperpflege, An-/Auskleiden, Stuhl-/Harnkontrolle, Toilette, Transfer, Mobilität, Treppensteigen). 0 = vollständig abhängig, 100 = selbstständig.",
    rueckseiteB1:
      "Der Barthel-Index misst: Was kann der Patient alleine? 0 Punkte = braucht bei allem Hilfe. 100 Punkte = alles alleine.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 178–180",
  },
  {
    id: "le06-kk-26",
    vorderseite: "Wie funktioniert der Timed-Up-and-Go-Test?",
    rueckseiteC1:
      "Aufstehen, 3 m gehen, umdrehen, zurückgehen, hinsetzen. Unter 10 s = normal, 10–19 s = leichtes Sturzrisiko, 20 s und mehr = erhöhtes Sturzrisiko.",
    rueckseiteB1:
      "Aufstehen, 3 Meter gehen, zurück, hinsetzen — Zeit messen. Unter 10 Sekunden: gut. Ab 20 Sekunden: Sturzgefahr.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DNQP Expertenstandard Sturzprophylaxe 2022",
  },
  {
    id: "le06-kk-27",
    vorderseite: "Welche 6 Bereiche bewertet die Braden-Skala?",
    rueckseiteC1:
      "Sensorisches Empfindungsvermögen, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung und Scherkräfte. Gesamtscore 6–23: Unter 18 = Dekubitusrisiko.",
    rueckseiteB1:
      "Die Braden-Skala prüft 6 Dinge: Fühlen, Feuchtigkeit, Aktivität, Bewegung, Essen, Reiben. Unter 18 Punkte = Gefahr.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 397–398",
  },
  {
    id: "le06-kk-28",
    vorderseite: "Was misst der Tinetti-Test und ab wann besteht Sturzrisiko?",
    rueckseiteC1:
      "Gleichgewicht (max. 16 Punkte) und Gang (max. 12 Punkte), Gesamtscore max. 28. Unter 20 Punkte = erhöhtes Sturzrisiko.",
    rueckseiteB1:
      "Der Tinetti-Test prüft: Wie gut kann der Patient stehen und gehen? Weniger als 20 Punkte: Sturzgefahr.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DNQP Expertenstandard Sturzprophylaxe 2022",
  },
  {
    id: "le06-kk-29",
    vorderseite: "Was erfasst die Norton-Skala bei der Dekubitusrisikoeinschätzung?",
    rueckseiteC1:
      "5 Bereiche: Allgemeinzustand, Geistiger Zustand, Aktivität, Mobilität, Inkontinenz. Skala 5–20: 14 und unter = gefährdet, 12 und unter = sehr gefährdet.",
    rueckseiteB1:
      "Die Norton-Skala prüft 5 Dinge: Gesundheit, Geist, Aktivität, Bewegung, Inkontinenz. 14 Punkte oder weniger: Risiko.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 397",
  },
  {
    id: "le06-kk-30",
    vorderseite: "Welche 3 Sturzrisikokategorien werden unterschieden?",
    rueckseiteC1:
      "Personenbezogen (Gangunsicherheit, Demenz, Inkontinenz), medikamentenbezogen (Polypharmazie, Sedativa), umgebungsbezogen (Stolperfallen, Beleuchtung).",
    rueckseiteB1:
      "Sturz-Risiken: beim Menschen selbst (schwache Beine, Schwindel), durch Medikamente, durch die Umgebung (Kabel, schlechtes Licht).",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DNQP Expertenstandard Sturzprophylaxe 2022",
  },
  {
    id: "le06-kk-31",
    vorderseite: "Wie erkennt man bei dunkler Hautfarbe einen Dekubitus Grad I?",
    rueckseiteC1:
      "Fingertest allein nicht ausreichend. Zusätzlich prüfen: lokale Erwärmung (Temperaturunterschied), Veränderung der Konsistenz (Verhärtung oder Weichheit), Schmerzäußerung des Patienten.",
    rueckseiteB1:
      "Bei dunkler Haut sieht man die rote Stelle nicht gut. Deshalb: Fühlen (warm? hart?), fragen ob es schmerzt.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 399",
  },

  // =====================================================================
  // RECHT (7 Karten) — Rechtliche und ethische Grundlagen
  // =====================================================================
  {
    id: "le06-kk-32",
    vorderseite: "Welche rechtliche Genehmigung braucht man für FEM?",
    rueckseiteC1:
      "Richterliche Genehmigung nach § 1831 BGB (Betreuungsrecht). Im Notfall kurzzeitig ohne Genehmigung möglich — sofort nachzuholen. Wirksame Einwilligung eines Einwilligungsfähigen ersetzt die Genehmigung.",
    rueckseiteB1:
      "Für FEM braucht man die Genehmigung eines Richters. Im Notfall kann man kurz warten — aber die Genehmigung muss danach kommen.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "BGB § 1831; I Care Pflege Thieme 2020, S. 181–182",
  },
  {
    id: "le06-kk-33",
    vorderseite: "Wer haftet bei einem Sturz des Patienten?",
    rueckseiteC1:
      "Pflegefachkraft haftet persönlich bei Pflegefehlern (§ 823 BGB): Sturzrisiko nicht erhoben, Prophylaxe unterlassen. Einrichtung haftet bei Organisationsverschulden (zu wenig Personal, fehlende Hilfsmittel).",
    rueckseiteB1:
      "Die Pflegekraft haftet, wenn sie etwas Wichtiges nicht getan hat. Die Einrichtung haftet, wenn sie zu wenig Personal hatte.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 187",
  },
  {
    id: "le06-kk-34",
    vorderseite: "Was gilt rechtlich wenn ein Patient die Mobilisation ablehnt?",
    rueckseiteC1:
      "Selbstbestimmungsrecht: Ablehnung MUSS respektiert werden. Pflicht: Über Risiken aufklären (Thrombose, Dekubitus, Kontraktur). Entscheidung mit Aufklärung dokumentieren.",
    rueckseiteB1:
      "Der Patient darf Nein sagen. Die Pflegekraft muss die Risiken erklären und alles aufschreiben. Zwingen ist verboten.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 184–185",
  },
  {
    id: "le06-kk-35",
    vorderseite: "Warum gilt 'was nicht dokumentiert ist, gilt als nicht gemacht'?",
    rueckseiteC1:
      "Im Haftungsfall orientieren sich Gerichte an der Dokumentation als Beweismittel. Fehlende Einträge gelten als Beleg, dass Maßnahmen nicht durchgeführt wurden.",
    rueckseiteB1:
      "Wenn etwas nicht dokumentiert ist, glaubt das Gericht dass es nicht gemacht wurde. Dokumentation schützt die Pflegekraft.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 187",
  },
  {
    id: "le06-kk-36",
    vorderseite: "Welche 3 DNQP-Expertenstandards sind für Mobilität relevant?",
    rueckseiteC1:
      "Dekubitusprophylaxe (2017), Sturzprophylaxe (2013) und Förderung der Mobilität (2020). Gerichte nutzen diese als Maßstab — Einhaltung schützt rechtlich.",
    rueckseiteB1:
      "3 wichtige Standards: Dekubitus verhindern, Sturz verhindern, Mobilität fördern. Wer diese einhält, ist geschützt.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "DNQP Expertenstandards 2013/2017/2020",
  },
  {
    id: "le06-kk-37",
    vorderseite: "Was muss bei einer FEM dokumentiert werden?",
    rueckseiteC1:
      "Zeitpunkt und Dauer, Art der Maßnahme, Begründung, welche Alternativen ausprobiert wurden, Ergebnis der regelmäßigen Überprüfung, Unterschrift der anordnenden Person.",
    rueckseiteB1:
      "Aufschreiben: Wann? Wie lange? Was? Warum? Was wurde zuerst versucht? Regelmäßig prüfen ob es noch nötig ist.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 183",
  },
  {
    id: "le06-kk-38",
    vorderseite: "Was ist ein Organisationsverschulden im Pflegekontext?",
    rueckseiteC1:
      "Die Einrichtung hat strukturelle Mängel verursacht: Personalmangel, fehlende Hilfsmittel, keine vorgeschriebene Risikoeinschätzung. Unterscheidet sich vom individuellen Pflegefehler.",
    rueckseiteB1:
      "Die Einrichtung hat zu wenig Personal oder Hilfsmittel bereitgestellt. Das ist die Schuld der Einrichtung, nicht der Pflegekraft.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "I Care Pflege Thieme 2020, S. 187",
  },
];
