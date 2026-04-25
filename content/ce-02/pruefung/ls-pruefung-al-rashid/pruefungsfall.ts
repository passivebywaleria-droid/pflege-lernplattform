// CE-02 Prüfungsfall: Herr Al-Rashid — Prostata-OP & Ramadan
// Quelle: pruefungsfall-plan.md | Dozentin | 2026-04-23
// Typ: Pruefungsfall (PflAPrV-Format) | feedbackMode: delayed
// Spirale 4 — alle CE-02-Themen als Voraussetzung
// bloomRange [4, 6] — AFB I bis III, 25 Punkte, ~35 Min

import type { Pruefungsfall, PruefungsAufgabe } from "../../../_types";

// ─── Aufgaben ────────────────────────────────────────────────────────────────

const AUFGABEN: PruefungsAufgabe[] = [
  {
    aufgabeId: "pf-al-rashid-a1",
    operator: "nennen",
    afb: 1,
    punkte: 5,
    fragetext:
      "Nenne fünf pflegerisch relevante Risiken, die sich aus der Fallbeschreibung für Herrn Al-Rashid ergeben. Nutze die klinischen Befunde und Beobachtungen aus dem Fall.",
    fragetextB1:
      "Schau dir die Fallbeschreibung an. Nenne fünf Risiken, die Herrn Al-Rashid gefährden. Was siehst du in der Beschreibung?",
    musterloesung: [
      "Dekubitusrisiko: Nicht wegdrückbare Rötung am Steißbein (2 × 3 cm) + Immobilität seit 3 Tagen + keine Braden-Dokumentation für heute → Gefahr eines Dekubitus Kategorie I bis II (NPUAP/EPUAP).",
      "Thromboserisiko: Kompressionsstrümpfe liegen am Fußende, nicht angelegt + OP-Trauma + Immobilität → erhöhte Gefahr einer tiefen Venenthrombose (Virchow-Trias; AWMF S3-Leitlinie VTE-Prophylaxe, 2015).",
      "Pneumonierisiko: Flachlagerung + Immobilität seit 3 Tagen + leichte Dysphagie → verminderte Atemtiefe, Sekretretention, Aspirationsgefahr.",
      "Infektionsrisiko (CAUTI): BVK liegend seit OP-Tag (3 Tage), Urin-Kultur-Abstrich noch ausstehend → katheterassoziierter Harnwegsinfekt (häufigste nosokomiale Infektion; KRINKO, 2015).",
      "Medikamentengabe gefährdet: Orales Schmerzmittel (Ibuprofen 400 mg) und PPI (Pantoprazol) um 8:00 Uhr nicht eingenommen wegen Ramadan-Fasten → unzureichende Schmerzversorgung + Magenschleimhaut ungeschützt.",
    ],
    bewertungskriterien:
      "Je 1P pro korrekt benanntem Risiko, maximal 5P. Punkte nur bei kausalem Fallbezug — Risiko muss aus einem konkreten Befund der Fallbeschreibung abgeleitet werden. Pauschalaussage ohne Fallbezug (z. B. nur 'Thrombose' ohne Begründung) gibt 0P.",
  },
  {
    aufgabeId: "pf-al-rashid-a2",
    operator: "erlaeutern",
    afb: 2,
    punkte: 6,
    fragetext:
      "Die Hautrötung am Steißbein ist 2 × 3 cm groß und lässt sich beim Fingertest nicht wegdrücken. Erläutere, welcher Dekubitus-Kategorie dieser Befund entspricht, warum Herr Al-Rashid besonders gefährdet ist, und welche zwei pflegerischen Maßnahmen du sofort einleiten würdest.",
    fragetextB1:
      "Am Steißbein von Herrn Al-Rashid siehst du eine rote Stelle (2 × 3 cm). Wenn du mit dem Finger drückst, bleibt die Rötung. Erkläre: (a) Welche Dekubitus-Kategorie ist das? (b) Warum ist Herr Al-Rashid besonders gefährdet? (c) Was machst du sofort — zwei Maßnahmen.",
    musterloesung: [
      "Aspekt 1 — Klassifikation: Nicht wegdrückbare Rötung der intakten Haut = Dekubitus Kategorie I nach NPUAP/EPUAP. Die Haut ist noch intakt, aber die Mikrozirkulation ist bereits dauerhaft unterbrochen. Fingertest positiv bedeutet: Rötung bleibt = Gefäßdruck aufgehoben (DNQP Expertenstandard Dekubitusprophylaxe, 2017).",
      "Aspekt 2 — Gefährdung: Herr Al-Rashid liegt seit OP immobil und bewegt sich kaum. Er trinkt tagsüber nicht (Ramadan → Dehydratation → Gewebeturgorrückgang → erhöhte Druckempfindlichkeit der Haut). Zusätzlich: altersbedingte Hautatrophie (71 Jahre) + postoperativer Zustand → Heilungsprozesse verlangsamt.",
      "Aspekt 3 — Sofortmaßnahmen: (1) Sofortige Druckentlastung: Umpositionierung des Steißbeins aus der Druckzone — z. B. 30°-Schräglagerung links oder rechts. (2) Lückenlose Dokumentation des Befunds (Größe, Aussehen, Kategorie, Fingertest-Ergebnis) + Weichlagerung bzw. Wechseldruckmatratze prüfen + Braden-Skala für heute noch ausfüllen.",
    ],
    bewertungskriterien:
      "Je 2P pro Aspekt, maximal 6P. Punkte pro Aspekt nur wenn ein Warum-Bezug zum Fall vorhanden ist — reine Aufzählungen ohne Erklärung geben pro Aspekt max. 1P. Fallbezug (Ramadan, Immobilität, Alter) ist zwingend für volle Punktzahl bei Aspekt 2.",
  },
  {
    aufgabeId: "pf-al-rashid-a3",
    operator: "erlaeutern",
    afb: 2,
    punkte: 4,
    fragetext:
      "Das Medikamentenblatt zeigt für 8:00 Uhr: Ibuprofen 400 mg oral und Pantoprazol 40 mg oral. Herr Al-Rashid hat beide Medikamente nicht eingenommen, weil er fastet. Erläutere zwei pflegerische Konsequenzen, die sich daraus ergeben, und wie du damit umgehst.",
    fragetextB1:
      "Herr Al-Rashid hat seine Medikamente um 8:00 Uhr nicht genommen, weil er fastet. Es waren: Ibuprofen (Schmerzmittel) und Pantoprazol (Magenschutz). Erkläre: (a) Welche zwei Probleme entstehen dadurch? (b) Was machst du in beiden Fällen?",
    musterloesung: [
      "Aspekt 1 — Schmerzmanagement gefährdet: Ohne orales Schmerzmittel am 3. postoperativen Tag kann die Schmerzlinderung nicht gewährleistet werden. Herr Al-Rashid zeigt sein Schmerzerleben kaum (kulturell gelernte Zurückhaltung + Sprachbarriere B1). Konsequenz: Schmerz trotzdem einschätzen (NRS + Beobachtung Mimik, Körperhaltung, Schonatmung); Arzt informieren (SBAR) für alternative Applikationsform — z. B. Suppositorium oder i.v.-Gabe, die das Fasten nicht bricht (DNQP Expertenstandard Schmerzmanagement, 2020 — sinngemäß für kulturell bedingtes Schmerz-Underreporting).",
      "Aspekt 2 — Kommunikation und kulturelle Kompetenz: Das Nichteinhalten des Medikamentenplans muss der Arztvisite klar gemeldet werden. Gleichzeitig ist der Wunsch, den Ramadan einzuhalten, ein Patientenrecht (Würde, Selbstbestimmung). Konsequenz: Medikamentenplan gemeinsam mit dem ärztlichen Team und dem Patienten neu planen. Bei der Kommunikation: Hisham als vorläufigen Übersetzer einbeziehen, aber sensible Gesundheitsfragen möglichst über professionellen Telefondolmetscher klären (Datenschutz, § 203 StGB). Was kann nach Sonnenuntergang gegeben werden? Was ist unaufschiebbar?",
    ],
    bewertungskriterien:
      "Je 2P pro Aspekt, maximal 4P. Punkte nur wenn Handlungskonsequenz UND Begründung vorhanden sind. 'Arzt informieren' allein ohne Kontext gibt 0,5P. Datenschutzaspekt beim Sohn-als-Übersetzer kann als Bonuswertung gezählt werden — kein K.O.-Kriterium.",
  },
  {
    aufgabeId: "pf-al-rashid-a4",
    operator: "begruenden",
    afb: 3,
    punkte: 3,
    fragetext:
      "Der BVK von Herrn Al-Rashid liegt seit dem OP-Tag — das sind drei Tage. Der Urin-Kultur-Abstrich aus der Aufnahme liegt noch aus. Begründe, warum ein Blasenverweilkatheter das Infektionsrisiko erhöht, und warum eine regelmäßige Beurteilung der Notwendigkeit des Katheters zur Pflegeplanung gehört.",
    fragetextB1:
      "Herr Al-Rashid hat seit 3 Tagen einen Blasenkatheter. Begründe: (a) Warum wird das Infektionsrisiko durch den Katheter höher? (b) Warum gehört es zur Pflege, regelmäßig zu fragen: Braucht der Patient den Katheter noch?",
    musterloesung: [
      "Ein BVK unterbricht die natürliche Barriere der Harnröhrenschleimhaut. Bakterien können entlang des Katheters aufsteigen (intraluminal oder extraluminal) und zur Blase gelangen → katheterassoziierter Harnwegsinfekt (CAUTI). CAUTI ist die häufigste nosokomiale Infektion in Kliniken (KRINKO, Empfehlung zur Prävention katheterassoziierter Harnwegsinfektionen, 2015).",
      "Jeder Tag mit liegendem Katheter erhöht das CAUTI-Risiko um ca. 3–7 % (KRINKO, 2015). Nach drei Tagen ist das Risiko damit deutlich messbar erhöht.",
      "Die pflegerische Aufgabe ist nicht nur das hygienische Handling (tägliche Meatus-Pflege, geschlossenes System, Beutel unter Blasenniveau), sondern aktiv die ärztliche Überprüfung anzustoßen: Ist der Katheter noch nötig? Kann er entfernt werden? Das ist eigenverantwortliche Pflegeplanung (§ 4 PflBG: vorbehaltene Tätigkeiten schließen die Beurteilung von Prophylaxemaßnahmen ein).",
    ],
    bewertungskriterien:
      "3P nur bei vollständiger Kausalitätskette: anatomische Erklärung → Infektionsmechanismus → quantifizierbares Risiko → pflegerische Konsequenz mit Begründung. Fehlt die Kausalitätskette → max. 1P. Primärquelle KRINKO muss nicht wörtlich zitiert werden, aber die Kernaussage muss fachlich korrekt sein.",
  },
  {
    aufgabeId: "pf-al-rashid-a5",
    operator: "planen",
    afb: 3,
    punkte: 4,
    fragetext:
      "Herr Al-Rashid liegt seit drei Tagen immobil, hat eine leichte Dysphagie und fastet tagsüber. Entwickle einen kurzen Pflegeplan (Pflegeproblem, Pflegeziel, drei Pflegemaßnahmen) zur Pneumonieprophylaxe — und begründe, warum du die Dysphagie und das Ramadan-Fasten dabei berücksichtigst.",
    fragetextB1:
      "Herr Al-Rashid liegt immobil, schluckt schlecht (Dysphagie) und fastet tagsüber. Schreibe einen kurzen Pflegeplan zur Pneumonieprophylaxe: (1) Pflegeproblem, (2) Pflegeziel, (3) drei Maßnahmen. Erkläre auch, warum die Dysphagie und das Ramadan-Fasten in deinem Plan wichtig sind.",
    musterloesung: [
      "Pflegeproblem (1P): Erhöhte Pneumoniegefährdung durch Immobilität, eingeschränkte Atemtiefe post-OP und Aspirationsgefahr bei vorbestehender Dysphagie.",
      "Pflegeziel (1P): Herr Al-Rashid zeigt bis Ende der Frühschicht regelrechte Atemtiefe (SpO2 ≥ 96 %), hustet selbstständig ab, und es treten keine Zeichen einer beginnenden Pneumonie auf (kein Fieber, keine Verschlechterung der Atemgeräusche).",
      "Drei Pflegemaßnahmen (je 0,5P, max. 2P): (1) Oberkörperhochlagerung 30–45° (LISA-Prinzip) — verbessert Zwerchfellexkursion und reduziert Aspirationsrisiko; bei Dysphagie besonders wichtig nach jedem Schluckversuch. (2) Atemübungen 3× täglich (Lippenbremse, Kontaktatmung gegen Widerstand) — Sekretmobilisation und Verbesserung der Atemtiefe. (3) Mobilisation schrittweise anstoßen: Bettkantensitzen heute noch, morgen kurzes Stehen — frühzeitige Mobilisation ist die wirksamste Einzelmaßnahme zur Pneumonieprophylaxe; Thrombosegefährdung mitdenken (Kompressionsstrümpfe anlegen!).",
      "Begründung Dysphagie + Ramadan (1P): Bei Dysphagie: Schluckversuche nur in Oberkörperhochlage, angedickte Flüssigkeiten bei Bedarf — niemals liegend Essen oder Trinken anreichen (Aspirationsgefahr). Ramadan: Tagsüber keine Schluckübungen mit Flüssigkeiten planbar → Schluckversuch auf die Zeit nach Sonnenuntergang verschieben; tagsüber Trockenübungen (Schluckmuskeln trainieren ohne Flüssigkeit) und Lippenbremse möglich. Einschränkung im Pflegebericht dokumentieren und im interdisziplinären Team besprechen.",
    ],
    bewertungskriterien:
      "Volle Punktzahl nur bei: korrektem Pflegeproblem + messbarem Ziel + 3 fachlich begründeten Maßnahmen + explizitem Einbezug von Dysphagie und Ramadan. Maßnahmen ohne Begründung geben je 0,25P. Fehlt der Ramadan-Bezug komplett → kein Punkt für die Begründungsfrage.",
  },
  {
    aufgabeId: "pf-al-rashid-a6",
    operator: "beurteilen",
    afb: 3,
    punkte: 3,
    fragetext:
      "Hisham (der Sohn) hat dir erklärt, dass sein Vater fastet. Du möchtest nun über das anstehende Schlucken von Medikamenten und die Ernährungssituation sprechen. Beurteile: Ist es pflegerisch und rechtlich korrekt, Hisham als Übersetzer für diese Gespräche zu nutzen? Was musst du dabei beachten?",
    fragetextB1:
      "Hisham ist der Sohn von Herrn Al-Rashid. Er spricht gut Deutsch. Du möchtest über Medikamente und Ernährung sprechen. Ist es richtig, Hisham als Übersetzer zu nutzen? Begründe deine Antwort und schreibe, was du beachten musst.",
    musterloesung: [
      "Beurteilung mit Begründung (2P): Nein — uneingeschränkt korrekt ist die Nutzung des Sohns als Übersetzer nicht. Hisham ist kein geschulter Dolmetscher; bei medizinischen Fachthemen (Medikamentenplan, Schluckstörung, Pflegeplanung) können Informationen gefiltert, vereinfacht oder falsch übertragen werden. Der Patient hat das Recht, dass seine Gesundheitsinformationen nicht zwingend durch Familienangehörige laufen — Selbstbestimmung und Datenschutz (§ 203 StGB: ärztliche Schweigepflicht gilt sinngemäß auch für Pflegende). Wenn Herr Al-Rashid ausdrücklich wünscht, dass sein Sohn übersetzt, ist das sein Recht — aber die Einwilligung muss klar sein.",
      "Was zu beachten ist (1P): (1) Bei nicht-dringlichen, komplexen Gesprächen: professionellen Telefondolmetscher (z. B. Sprachmittlungsdienst des Klinikums) organisieren. (2) Bei akuten Situationen: Sohn als provisorischen Übersetzer nutzen, dabei einfache und klare Sätze verwenden. (3) Alles Besprochene dokumentieren — wer war beim Gespräch dabei, was wurde besprochen, was hat der Patient zugestimmt.",
    ],
    bewertungskriterien:
      "3P nur bei: begründetem Urteil (nicht nur ja/nein) + konkreter Handlungsempfehlung + Datenschutz-/Selbstbestimmungsbezug. 'Telefondolmetscher nutzen' allein ohne Begründung = 0,5P.",
  },
];

// ─── Hauptexport ─────────────────────────────────────────────────────────────

export const CE02_PRUEF_AL_RASHID_FALL: Pruefungsfall = {
  pruefungsfallId: "ls-pruefung-al-rashid",
  ceIds: ["ce-02"],
  voraussetzungen: [
    "ce-02/pflegeprozess",
    "ce-02/pflegeplanung",
    "ce-02/pflegedokumentation",
    "ce-02/assessments-expertenstandards",
    "ce-02/kinaesthetik",
    "ce-02/positionierung",
    "ce-02/mobilisation",
    "ce-02/dekubitus-prophylaxe",
    "ce-02/thrombose-prophylaxe",
    "ce-02/sturz-prophylaxe",
    "ce-02/kontraktur-prophylaxe",
    "ce-02/pneumonie-prophylaxe",
    "ce-02/schlaf",
    "ce-02/haut",
    "ce-02/ganzkörperpflege",
    "ce-02/mundpflege",
    "ce-02/saeuglingspflege",
    "ce-02/basale-stimulation",
    "ce-02/ernaehrungsgrundlagen",
    "ce-02/ernaehrungsassessment",
    "ce-02/essen-anreichen",
    "ce-02/enterale-ernaehrung",
    "ce-02/harnausscheidung",
    "ce-02/blasenkatheter",
    "ce-02/stuhlausscheidung",
  ],
  gesamtpunkte: 25,
  zielzeitMin: 35,
  feedbackMode: "delayed",
  fallText: `Es ist 10:30 Uhr. Du bist Pflegeschülerin im zweiten Ausbildungsjahr und übernimmst zusammen mit deiner Praxisanleiterin die Versorgung auf der urologischen Station. Du bekommst Herrn Al-Rashid zugewiesen.

Herr Mahmoud Al-Rashid, 71 Jahre, liegt seit drei Tagen nach einer radikalen Prostatektomie auf der Station. Der Eingriff verlief komplikationslos; die Wundheilung wird als reizlos dokumentiert. Ein Blasenverweilkatheter (BVK, Silikonkatheter, 18 Charrière) leitet den Urin in einen Beutel ab; die Diurese beträgt laut letzter Dokumentation 900 ml in den vergangenen 12 Stunden. Ein transurethraler Urin-Kultur-Abstrich aus der Aufnahme liegt noch aus.

Herr Al-Rashid ist wach und orientiert, aber sehr still. Er liegt in Rückenlage und hat die Beine gestreckt. Auf dem Beobachtungsblatt ist vermerkt: Thrombosegefährdung hoch (Immobilität + OP), Pneumoniegefährdung mittel (kein Fieber, Atemfrequenz 18/min, SpO2 97 %). Die verordneten Antikoagulanzien wurden gestern und heute Morgen verabreicht; die Kompressionsstrümpfe liegen am Fußende des Bettes — sie wurden nachts ausgezogen und nicht wieder angelegt.

Beim Eintritt ins Zimmer sitzt Hisham, der älteste Sohn (42 J.), am Bett. Er erklärt dir auf Deutsch: „Mein Vater fastet. Ramadan. Er trinkt heute bis zum Abend nichts — das ist wichtig für ihn." Der Vater nickt und sagt ruhig: „Ich bin gut, keine Sorge."

Du stellst fest: Das Frühstückstablett steht unangetastet auf dem Tisch. In der Pflegeröhre hängt noch das Medikamentenblatt für 8:00 Uhr — darunter ein orales Schmerzmittel (Ibuprofen 400 mg) und ein Protonenpumpenhemmer (Pantoprazol 40 mg).

Beim Morgenrundgang zeigt die Braden-Skala noch keine Eintragung für heute. Der Patient hat sich seit der Visite um 8:00 Uhr nicht bewegt. Am Steißbein beobachtest du eine blassrote, nicht scharf begrenzte Hautrötung (ca. 2 × 3 cm). Der Fingertest ergibt: Die Rötung bleibt bei Druck bestehen.`,
  fallTextB1: `Es ist 10:30 Uhr. Du bist Pflegeschülerin und arbeitest auf der Urologiestation. Du pflegst heute Herrn Al-Rashid.

Herr Mahmoud Al-Rashid ist 71 Jahre alt. Er hat vor 3 Tagen eine Prostata-Operation gehabt. Die Operation war ohne Probleme. Er hat einen Blasenkatheter (BVK). Der Katheter leitet den Urin in einen Beutel. In den letzten 12 Stunden hat er 900 ml Urin produziert. Ein Urintest aus der Aufnahme fehlt noch.

Herr Al-Rashid ist wach, aber sehr still. Er liegt auf dem Rücken. In seinen Unterlagen steht: Thrombosegefahr hoch, Pneumoniegefahr mittel. Er hat seine Medikamente bekommen. Aber die Kompressionsstrümpfe liegen am Fußende — sie wurden nachts ausgezogen und nicht wieder angezogen.

Du gehst ins Zimmer. Der Sohn Hisham (42 J.) sitzt am Bett. Er sagt: „Mein Vater fastet. Ramadan. Er trinkt heute bis zum Abend nichts." Der Vater nickt und sagt: „Ich bin gut, keine Sorge."

Du siehst: Das Frühstückstablett ist unberührt. Das Medikamentenblatt für 8:00 Uhr hängt noch in der Röhre: Ibuprofen (Schmerzmittel) und Pantoprazol (Magenschutz) — nicht eingenommen.

Die Braden-Skala hat heute keinen Eintrag. Herr Al-Rashid hat sich seit 8:00 Uhr nicht bewegt. Am Steißbein siehst du eine rote Stelle (ca. 2 × 3 cm). Wenn du mit dem Finger drückst, bleibt die Rötung — sie verschwindet nicht.`,
  aufgaben: AUFGABEN,
};
