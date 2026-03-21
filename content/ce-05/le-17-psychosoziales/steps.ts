// Lektion 17: Psychosoziale Aspekte und Krankheitsbewaeltigung
// CE 05 — Block E: Beratung & Psychosoziales
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-17-psychosoziales",
  ceId: "ce-05",
  title: "Psychosoziale Aspekte und Krankheitsbewaeltigung",
  titleShort: "Psychosoziales",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 20, b1: 30 },
  kompetenzbereiche: ["KB-I.1", "KB-II.2", "KB-III.2", "KB-V.1"],
  bloomStufen: [3, 5],
  voraussetzungen: ["le-04-ra"],
  leitfall: {
    name: "Omar Mansour",
    alter: 40,
    beruf: "Koch/Kuechenchef (selbststaendig, libanesisches Restaurant)",
    diagnose:
      "Rheumatoide Arthritis seit 3 Jahren, beginnende Ulnardeviation beidseits, PHQ-9: 15 (mittelgradige Depression)",
    setting: "Rheumatologische Ambulanz, 3-Monats-Kontrolle",
    kernproblem:
      "Unerkannte Depression, Koerperbildveraenderung, sozialer Rueckzug, kulturelles Stigma psychischer Erkrankungen",
  },
  glossarCount: 12,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "psycho-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q3"],
    contentC1: {
      title: "Was weisst du ueber psychosoziale Aspekte bei Rheuma?",
      body: "In dieser Lektion geht es um das, was neben den Gelenken schmerzt: die Seele, die Beziehung, der Beruf, das Selbstbild. Rheumatische Erkrankungen betreffen nie nur den Koerper.\n\nDu lernst:\n- Warum Depression und Angst bei Rheuma so haeufig sind — und wie du sie erkennst\n- Drei Coping-Strategien nach Lazarus und wann welche hilft\n- Das Corbin-Strauss-Modell: Wie chronische Krankheit in Phasen verlaeuft\n- Warum Koerperbildveraenderung und Sexualitaet pflegerische Themen sind\n- Schwerbehinderung, GdB und soziale Teilhabe — was Pflegende wissen muessen\n- Wie du ein psychosoziales Beratungsgespraech fuehrst\n\nDas Ziel: Du erkennst psychosoziale Belastungen bei Rheuma-Patienten, verstehst Coping-Strategien und kannst eine psychosoziale Pflegeplanung erstellen.",
      glossarBegriffe: ["Psychosoziale Belastung"],
    },
    contentB1: {
      title: "Was weisst du ueber die Seele bei Rheuma?",
      body: "In dieser Lektion geht es um die Seele. Rheuma macht nicht nur die Gelenke krank. Rheuma veraendert auch das Leben.\n\nDu lernst:\n- Warum viele Rheuma-Patienten traurig oder aengstlich sind\n- Wie Menschen mit einer Krankheit umgehen (Coping)\n- Was passiert, wenn sich der Koerper veraendert\n- Warum Partnerschaft und Sexualitaet schwieriger werden\n- Was ein Schwerbehindertenausweis (GdB) ist\n- Wie du Patienten psychisch unterstuetzen kannst\n\nNach dieser Lektion erkennst du psychische Probleme bei Rheuma-Patienten. Und du weisst, wie du helfen kannst.",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich beim Thema psychosoziale Aspekte bei rheumatischen Erkrankungen?",
    },
  },
  {
    stepId: "psycho-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q4"],
    contentC1: {
      title: "Was gehoert zu psychosozialen Aspekten bei Rheuma?",
      body: "",
    },
    question: {
      fragetext:
        "Ein Patient mit Rheumatoider Arthritis erzaehlt dir im Aufnahmegespraech: 'Ich schlafe schlecht, meine Frau und ich reden kaum noch, und bei der Arbeit schaffe ich nur noch die Haelfte.' Welche Dimension seiner Erkrankung beschreibt er hier primaer?",
      optionen: [
        {
          text: "Die medikamentoese Dimension — er braucht bessere Schmerzmedikation",
          isCorrect: false,
          explanation:
            "Schlafprobleme KOENNEN mit Schmerzen zusammenhaengen, aber Partnerschaftsprobleme und berufliche Einschraenkungen gehen weit ueber Medikation hinaus. Er beschreibt psychosoziale Belastungen.",
        },
        {
          text: "Die psychosoziale Dimension — psychische Belastung (Schlaf), soziale Beziehungen (Ehe) und Teilhabe (Arbeit) sind betroffen",
          isCorrect: true,
          explanation:
            "Richtig! Der Patient beschreibt drei Kernbereiche psychosozialer Belastung: psychisches Wohlbefinden (Schlafprobleme), soziale Beziehungen (Partnerschaft) und gesellschaftliche Teilhabe (Erwerbstaetigkeit). Diese Bereiche beeinflussen sich gegenseitig und den Krankheitsverlauf.",
        },
        {
          text: "Die pflegerische Dimension — er braucht Hilfe bei den ATLs",
          isCorrect: false,
          explanation:
            "ATL-Einschraenkungen sind ein Teil des Bildes, aber der Patient spricht primaer ueber Beziehung, Arbeit und Psyche — nicht ueber Koerperpflege oder Mobilitaet. Das ist psychosozial, nicht funktionell.",
        },
        {
          text: "Die rehabilitative Dimension — er muss in eine Reha",
          isCorrect: false,
          explanation:
            "Rehabilitation kann helfen, aber die Beschreibung des Patienten betrifft primaer seine psychische Belastung und seine sozialen Rollen. Reha adressiert Funktionsfaehigkeit — hier geht es um mehr.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "psycho-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q3"],
    contentC1: {
      title: "Omar Mansour — Der Koch, der nicht mehr lachen kann",
      body: "Omar Mansour, 40 Jahre, Koch und Kuechenchef. Seit 15 Jahren in Deutschland, seit 8 Jahren selbststaendig mit einem libanesischen Restaurant. Acht Mitarbeiter, treue Stammgaeste, 12-Stunden-Tage. Omar kocht nicht nur — Kochen ist seine Identitaet.\n\nVor drei Jahren die Diagnose: Rheumatoide Arthritis. Trotz MTX und Leflunomid schreitet die Erkrankung voran. Beide Haende zeigen beginnende Ulnardeviation — die Finger driften nach aussen ab. Fuer einen Koch, der taeglich Gemuese schneidet, Toepfe hebt und Teig knetet, ist das mehr als ein medizinisches Problem. Es ist eine existenzielle Bedrohung.\n\nHeute kommt Omar zur 3-Monats-Kontrolle. Die Rheumatologin bittet dich, den PHQ-9-Fragebogen mit ihm durchzugehen. Ergebnis: 15 Punkte — mittelgradige Depression. Omar hat nie ueber psychische Belastungen gesprochen.\n\nWas du noch erfaehrst: Ehefrau Yasmin ist im 7. Monat schwanger mit dem dritten Kind. Omar arbeitet trotz Schmerzen jeden Tag — er darf nicht 'schwach' sein. Er hat aufgehoert, Freunde zu treffen, geht nicht mehr freitags in die Moschee. Sein aelterer Bruder in Kairo sagt am Telefon: 'Reiss dich zusammen — du bist ein Mann.'\n\nYasmin hat der Rheumatologin gesagt: 'Omar lacht nicht mehr. Er schlaeft nicht. Er spielt nicht mehr mit den Kindern.'",
      fallbezug:
        "Omar begleitet dich durch die gesamte Lektion. Sein Fall zeigt: Psychosoziale Belastung bei Rheuma ist nicht die Ausnahme — sie ist die Regel. Und sie wird umso unsichtbarer, je mehr ein Patient 'funktioniert'.",
      glossarBegriffe: [
        "PHQ-9 (Patient Health Questionnaire)",
        "Ulnardeviation",
      ],
    },
    contentB1: {
      title: "Omar Mansour — Ein Koch, der nicht mehr lachen kann",
      body: "Omar Mansour ist 40 Jahre alt.\nEr ist Koch und hat ein eigenes Restaurant. Libanesisches Essen.\nOmar lebt seit 15 Jahren in Deutschland. Er kommt aus Aegypten.\nEr hat 8 Mitarbeiter. Omar arbeitet jeden Tag 12 Stunden.\nKochen ist fuer Omar alles. Seine Haende sind sein wichtigstes Werkzeug.\n\nVor 3 Jahren hat der Arzt gesagt: Omar hat Rheuma (Rheumatoide Arthritis).\nEr nimmt Medikamente (MTX und Leflunomid). Aber die Krankheit wird schlimmer.\nSeine Finger werden krumm. Das nennt man Ulnardeviation.\nDie Finger zeigen nach aussen. Omar kann das Messer nicht mehr gut halten.\n\nHeute ist Omar beim Rheuma-Arzt. Du machst einen Test mit ihm: den PHQ-9.\nDas ist ein Fragebogen fuer Depression (Traurigkeit).\nErgebnis: 15 Punkte. Das bedeutet: Omar hat eine mittelgradige Depression.\nAber Omar hat nie darueber gesprochen.\n\nWas du noch erfaehrst:\nOmars Frau Yasmin ist schwanger. Das dritte Kind.\nOmar arbeitet jeden Tag, obwohl er starke Schmerzen hat.\nEr trifft keine Freunde mehr. Er geht nicht mehr in die Moschee.\nSein Bruder in Aegypten sagt am Telefon: 'Du bist ein Mann. Reiss dich zusammen!'\nYasmin sagt zur Aerztin: 'Omar lacht nicht mehr. Er spielt nicht mit den Kindern.'",
    },
  },
  {
    stepId: "psycho-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q3", "Q4"],
    contentC1: {
      title: "Depression erkennen — Was faellt bei Omar auf?",
      body: "",
      fallbezug:
        "Omar hat PHQ-9 = 15. Aber BEVOR du den Fragebogen hattest — was haettest du pflegerisch beobachten koennen?",
    },
    question: {
      fragetext:
        "Omar laechelt bei der Begruessung, antwortet hoeflich und sagt auf die Frage 'Wie geht es Ihnen?' automatisch: 'Gut, danke.' Trotzdem zeigt sein Verhalten klare Warnsignale. Was ist der wichtigste Grund, NICHT auf seine Worte zu vertrauen?",
      optionen: [
        {
          text: "Omar luegt — er will Aufmerksamkeit",
          isCorrect: false,
          explanation:
            "Das ist weder fair noch fachlich angemessen. Patienten mit Depression antworten haeufig sozial erwuenscht, besonders Maenner und besonders in Kulturen, in denen psychische Belastung stigmatisiert ist. Das ist kein Luegen, sondern eine Schutzstrategie.",
        },
        {
          text: "Sozial erwuenschtes Antworten: Maenner, besonders aus Kulturen mit Stigmatisierung psychischer Erkrankungen, verbergen Belastungen haeufig hinter Hoeflichkeit",
          isCorrect: true,
          explanation:
            "Richtig! Studien zeigen: Maenner mit RA berichten seltener ueber psychische Belastungen als Frauen. Kulturelle Normen ('Ein Mann ist stark') verstaerken das. Pflegerische Beobachtung muss UEBER die Selbstauskunft hinausgehen: sozialer Rueckzug, Schlafprobleme, Gewichtsveraenderung, Interessenverlust — all das zeigt Omar, OHNE darueber zu sprechen.",
        },
        {
          text: "Der PHQ-9 ist unzuverlaessig — man sollte sich auf das klinische Gespraech verlassen",
          isCorrect: false,
          explanation:
            "Der PHQ-9 hat eine Sensitivitaet von 88% und Spezifitaet von 88% fuer Depression. Er ist ein validiertes Screening-Instrument. Aber: Er ersetzt NICHT die pflegerische Beobachtung — beides zusammen ergibt das vollstaendige Bild.",
        },
        {
          text: "Omar ist Auslaender — Depression wird in seiner Kultur anders definiert",
          isCorrect: false,
          explanation:
            "Depression als Erkrankung existiert in ALLEN Kulturen. Was sich unterscheidet, ist der Umgang damit — Stigmatisierung, Ausdruck, Hilfesuchverhalten. 'Anders definiert' ist eine gefaehrliche Vereinfachung, die dazu fuehren kann, dass Depression bei Migranten nicht erkannt wird.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-7)
  // ==========================================
  {
    stepId: "psycho-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q3", "Q4"],
    contentC1: {
      title: "Depression und Angst bei Rheuma — haeufiger als du denkst",
      body: "Depression ist die haeufigste psychische Komorbiditaet bei rheumatischen Erkrankungen. Die Zahlen: 9,5-41,5% der RA-Patienten erfuellen die Kriterien einer klinischen Depression (Englbrecht & Alten 2018). Bei Frueharthritis berichten 47,7% ueber depressive oder aengstliche Symptome — fast doppelt so viel wie in der Allgemeinbevoelkerung.\n\nWarum? Die Beziehung ist bidirektional: Depression verschlechtert den RA-Verlauf (weniger Therapietreue, hoehere Schmerzwahrnehmung, schlechteres DAS28). Gleichzeitig erhoehen die Entzuendungsbotenstoffe TNF-alpha und IL-6 — dieselben, die Gelenke zerstoeren — das Depressionsrisiko (neuroinflammatorische Hypothese).\n\nScreening-Instrumente fuer die Pflege:\n- Zwei-Fragen-Test (NVL Depression): 'Fuehlten Sie sich im letzten Monat haeufig niedergeschlagen?' + 'Hatten Sie im letzten Monat deutlich weniger Lust und Freude?' Sensitivitaet: 96%. Wenn beide Fragen 'ja': weiter mit PHQ-9.\n- PHQ-9: 9 Fragen, 5 Minuten, Selbstauskunft. Ergebnis ab 10 Punkten: Depression wahrscheinlich, fachliche Abklaerung empfohlen.\n\nWas bedeutet das fuer Omar? PHQ-9 = 15 (mittelgradig). Seine Depression ist keine Persoenlichkeitsschwaeche — sie ist eine behandelbare Komorbiditaet, die seinen gesamten Krankheitsverlauf beeinflusst.",
      glossarBegriffe: [
        "Depression (komorbide)",
        "Zwei-Fragen-Test (Depression-Screening)",
      ],
    },
    contentB1: {
      title: "Traurigkeit und Angst bei Rheuma — sehr haeufig",
      body: "Viele Rheuma-Patienten sind traurig oder haben Angst. Das ist sehr haeufig.\nFast die Haelfte (47 von 100) hat depressive Symptome (Anzeichen fuer Depression).\n\nWarum?\nRheuma und Depression verstaerken sich gegenseitig.\nWer depressiv ist, nimmt mehr Schmerz wahr.\nWer depressiv ist, nimmt seine Medikamente nicht regelmaessig.\nUnd: Die Entzuendungsstoffe (TNF-alpha, IL-6) koennen auch im Gehirn Probleme machen.\n\nWie erkennst du eine Depression? Zwei einfache Fragen:\n1. Waren Sie im letzten Monat oft traurig?\n2. Hatten Sie im letzten Monat weniger Freude an Dingen?\n\nWenn der Patient beide Fragen mit Ja beantwortet: Mache den PHQ-9 Test.\nDer PHQ-9 hat 9 Fragen. Er dauert 5 Minuten.\nAb 10 Punkten: Der Patient braucht Hilfe von einem Arzt oder Psychologen.\n\nOmar hat 15 Punkte. Das ist eine mittelgradige Depression.\nSeine Depression ist keine Schwaeche. Sie ist eine Krankheit.\nOhne Behandlung wird auch das Rheuma schlimmer.",
    },
  },
  {
    stepId: "psycho-06",
    phase: 3,
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q5"],
    contentC1: {
      title:
        "Wie Menschen mit chronischer Krankheit umgehen — Lazarus Coping-Modell",
      body: "Richard Lazarus unterscheidet drei Formen der Krankheitsbewaeltigung (Coping): problemorientiert, emotionsorientiert und bewertungsorientiert. Keine Form ist 'besser' — entscheidend ist die flexible, situationsangepasste Nutzung. Ordne Omars Verhaltensweisen der passenden Coping-Form zu.",
      glossarBegriffe: [
        "Coping (Krankheitsbewaeltigung)",
        "Lazarus Stressmodell",
      ],
    },
    question: {
      fragetext:
        "Ordne jedes Verhalten der passenden Coping-Strategie nach Lazarus zu:",
      matchingPairs: [
        {
          left: "Omar recherchiert Hilfsmittel fuer die Kueche",
          right: "Problemorientiertes Coping",
        },
        {
          left: "Omar weint nachts heimlich im Badezimmer",
          right: "Emotionsorientiertes Coping",
        },
        {
          left: "Omar sagt sich: 'Die RA macht mich zu einem besseren Chef — ich delegiere jetzt mehr'",
          right: "Bewertungsorientiertes Coping",
        },
        {
          left: "Omar beantragt einen GdB beim Versorgungsamt",
          right: "Problemorientiertes Coping",
        },
        {
          left: "Omar vermeidet Treffen mit Freunden, um nicht ueber seine Krankheit reden zu muessen",
          right: "Emotionsorientiertes Coping",
        },
        {
          left: "Omar beginnt, seine RA als Teil seiner Lebensgeschichte zu akzeptieren",
          right: "Bewertungsorientiertes Coping",
        },
      ],
    },
  },
  {
    stepId: "psycho-07",
    phase: 3,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q6", "Q7"],
    contentC1: {
      title:
        "Wenn der Koerper fremd wird — und die Partnerschaft mitleidet",
      body: "Das Corbin-Strauss-Modell beschreibt chronische Krankheit in acht Phasen: von der Vor-Verlaufskurve (bevor Symptome beginnen) ueber Krise und Instabilitaet bis zur stabilen Phase. Entscheidend: In jeder Phase laufen drei Arbeitslinien parallel — Krankheitsarbeit (Therapie, Arztbesuche), Alltagsarbeit (Haushalt, Beruf) und Biographiearbeit (Wer bin ich jetzt?).\n\nOmar steckt zwischen 'instabil' und 'abwaerts'. Seine Biographiearbeit ist blockiert: Er war der starke Koch, der alles im Griff hatte. Wer ist er jetzt?\n\nKoerperbildveraenderung: 50-90% der Rheuma-Patienten berichten, dass veraenderte Haende, Schwellungen oder Deformitaeten ihr Selbstbild beeintraechtigen. Fuer Omar: Seine Haende waren sein Werkzeug UND sein Stolz. Die Ulnardeviation ist nicht nur funktionell — sie ist sichtbar, fuer Mitarbeiter, Gaeste, seine Frau.\n\nSexualitaet: 50-90% berichten sexuelle Funktionsstoerungen bei Rheuma. Ursachen: Schmerz, Fatigue, Medikamentennebenwirkungen, veraendertes Koerperbild, Depression. Das Thema wird von Fachpersonal fast nie angesprochen — obwohl Patienten sich wuenschen, dass jemand fragt. Pflege kann diese Luecke fuellen: nicht mit Loesungen, sondern mit dem Angebot zum Gespraech.\n\nFuer Omar: Er schlaeft seit Monaten auf der Couch — offiziell 'wegen der Schmerzen'. Yasmin versteht das nicht. Beide schweigen.",
      fallbezug:
        "Omar vereint alle drei Ebenen: Krankheitsarbeit (DMARDs, Kontrollen), Alltagsarbeit (Restaurant fuehren mit schmerzenden Haenden) und Biographiearbeit (Wer bin ich als Mann, Vater, Koch?). Die Biographiearbeit ist am meisten blockiert.",
      glossarBegriffe: [
        "Corbin-Strauss-Trajekt-Modell",
        "Koerperbildveraenderung (Body Image)",
      ],
    },
    contentB1: {
      title:
        "Wenn sich der Koerper veraendert — und die Partnerschaft leidet",
      body: "Chronische Krankheit veraendert das ganze Leben. Nicht nur den Koerper.\nDas Corbin-Strauss-Modell beschreibt 8 Phasen einer chronischen Krankheit.\nIn jeder Phase braucht der Patient andere Hilfe.\n\nEs gibt 3 Arten von Arbeit bei einer chronischen Krankheit:\n1. Krankheitsarbeit: Medikamente nehmen, zum Arzt gehen\n2. Alltagsarbeit: Arbeiten, Haushalt, Kinder versorgen\n3. Biographiearbeit: Wer bin ich jetzt? Was kann ich noch?\n\nOmar schafft die Krankheitsarbeit und die Alltagsarbeit.\nAber die Biographiearbeit ist blockiert. Er weiss nicht mehr, wer er ist.\nEr war der starke Koch. Jetzt kann er kaum ein Messer halten.\n\nKoerperveraenderung:\n50 bis 90 von 100 Rheuma-Patienten sagen: Mein Koerper sieht anders aus.\nGeschwollene Gelenke, krumme Finger, Narben. Das veraendert das Selbstbild.\nFuer Omar sind seine Haende sein Stolz. Die Veraenderung ist fuer ihn sehr schwer.\n\nSexualitaet:\n50 bis 90 von 100 Rheuma-Patienten haben Probleme mit der Sexualitaet.\nGruende: Schmerzen, Muedigkeit, Medikamente, veraenderter Koerper, Depression.\nFast niemand spricht darueber. Aber Patienten wuenschen sich, dass jemand fragt.\nOmar schlaeft seit Monaten auf der Couch. Er sagt: wegen der Schmerzen.",
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 8-10)
  // ==========================================
  {
    stepId: "psycho-08",
    phase: 4,
    stepType: "sorting",
    bloomLevel: 4,
    kompetenzbereich: "KB-III.2",
    quellen: ["Q1", "Q2", "Q8", "Q9", "Q10"],
    contentC1: {
      title: "Wer hilft wann? — Die psychosoziale Versorgungskette",
      body: "Omar braucht nicht EIN Gespraech — er braucht ein Netz. Aber wer wird wann eingeschaltet? Bringe die Schritte der psychosozialen Versorgung in die richtige Reihenfolge — vom Erkennen bis zur Langzeitunterstuetzung.",
      fallbezug:
        "Omar sitzt vor dir. PHQ-9 = 15. Er hat noch nie mit jemandem ueber seine Belastung gesprochen. Wie baust du die Versorgung auf?",
    },
    question: {
      fragetext:
        "Bringe die Schritte der psychosozialen Versorgung fuer Omar in die richtige Reihenfolge:",
      sortItems: [
        "Screening durchfuehren: Zwei-Fragen-Test + PHQ-9 — Depression erkennen und dokumentieren",
        "Ergebnis besprechen: Omar in wertschaetzender Atmosphaere ueber das PHQ-9-Ergebnis informieren — nicht pathologisieren",
        "Aerztliche Mitteilung: Rheumatologin ueber PHQ-9-Ergebnis informieren — Empfehlung psychiatrische/psychotherapeutische Abklaerung",
        "Sozialdienst einschalten: GdB-Antrag, Beratung zu Erwerbsminderung, berufliche Rehabilitation",
        "Psychotherapie anbahnen: Ueberweisung an Psychotherapeut oder psychiatrische Ambulanz — Wartezeit ueberbruecken",
        "Selbsthilfe vermitteln: Rheuma-Liga, Selbsthilfegruppe, ggf. maennerspezifisches Angebot — Langzeitunterstuetzung",
      ],
    },
  },
  {
    stepId: "psycho-09",
    phase: 4,
    stepType: "branching",
    bloomLevel: 5,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1", "Q3"],
    contentC1: {
      title:
        "Omar sagt: 'Ich brauche keinen Psychologen — ich bin nicht verrueckt!'",
      body: "Du hast Omar erklaert, dass sein PHQ-9-Ergebnis auf eine Depression hindeutet. Du empfiehlst ein Gespraech mit einem Psychologen. Omar reagiert sofort: 'Psychologe? Ich bin nicht verrueckt! Mein Bruder hat recht — ich muss mich einfach zusammenreissen. In meiner Familie geht man nicht zum Psychologen.'",
      fallbezug:
        "Das ist der Moment, in dem kulturelle Normen, Stigmatisierung und deine Beratungskompetenz aufeinandertreffen. Omars Widerstand ist kein Zeichen von Uneinsichtigkeit — es ist ein Zeichen dafuer, wie tief das Stigma sitzt.",
      glossarBegriffe: ["Psychoedukation"],
    },
    question: {
      fragetext: "Wie reagierst du auf Omars Ablehnung?",
      branchingOptions: [
        {
          text: "'Herr Mansour, Depression ist eine Krankheit wie Rheuma auch. Sie MUESSEN das behandeln lassen, sonst wird alles schlimmer.'",
          feedback:
            "Fachlich korrekt, aber kontraproduktiv. 'Sie MUESSEN' erzeugt Widerstand, besonders bei jemandem, der sich bereits bevormundet fuehlt. Du bestaetigst sein Gefuehl: 'Alle sagen mir, was ich tun soll.' Depression als 'Krankheit wie jede andere' zu bezeichnen, ignoriert das kulturelle Stigma, das fuer Omar real ist. Beziehungsebene vor Sachebene!",
          isCorrect: false,
        },
        {
          text: "'Ich hoere, dass das Wort Psychologe fuer Sie schwierig ist. Darf ich fragen, was genau Sie daran stoert? Vielleicht finden wir gemeinsam einen Weg, der fuer Sie passt.'",
          feedback:
            "Sehr gut! Du validierst Omars Gefuehl, ohne das Stigma zu bestaetigen. Du fragst nach SEINEM Erleben statt zu belehren. 'Gemeinsam einen Weg finden' respektiert seine Autonomie. Moegliche naechste Schritte: Psychosomatische Beratung statt 'Psychologe', Sozialdienst als neutraler Einstieg, Rheuma-Liga Maennergruppe, oder erst Yasmin einbeziehen. Nicht jeder Weg zum Ziel heisst 'Psychotherapie'.",
          isCorrect: true,
        },
        {
          text: "'In Deutschland ist das normal — viele Maenner gehen zum Psychologen. Das ist keine Schwaeche.'",
          feedback:
            "Gut gemeint, aber problematisch. Du relativierst Omars kulturelle Praegung ('In Deutschland ist das normal' = 'Deine Kultur ist falsch'). Und die Aussage stimmt statistisch nicht: Maenner nutzen deutlich seltener Psychotherapie als Frauen. Anstatt seine Realitaet kleinzureden, solltest du sie verstehen und darauf aufbauen.",
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "psycho-10",
    phase: 4,
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q8", "Q9"],
    contentC1: {
      title: "Schwerbehinderung bei Rheuma — Rechte und Realitaet",
      body: "Omar ueberlegt, einen GdB-Antrag zu stellen. Er hat Angst: 'Wenn mein Vermieter oder meine Bank erfaehrt, dass ich schwerbehindert bin...' Pflege muss hier aufklaeren — sachlich, nicht emotional.",
      fallbezug:
        "Fuer Omar als Selbststaendigen ist die Situation besonders komplex: Kein Kuendigungsschutz (er ist Chef), aber Steuervorteile und Zugang zu beruflicher Rehabilitation.",
      glossarBegriffe: [
        "Grad der Behinderung (GdB)",
        "Erwerbsminderungsrente",
      ],
    },
    question: {
      fragetext:
        "Omar fragt dich: 'Wenn ich einen Schwerbehindertenausweis bekomme — wer erfaehrt davon?' Welche Aussage ist korrekt?",
      optionen: [
        {
          text: "Der Arbeitgeber wird automatisch informiert — Omar muss das nicht selbst sagen",
          isCorrect: false,
          explanation:
            "Falsch. Der Arbeitgeber erfaehrt NICHTS automatisch. Der Patient entscheidet selbst, ob und wann er den GdB mitteilt. Da Omar selbststaendig ist, betrifft ihn diese Frage ohnehin nicht direkt — aber das Prinzip ist wichtig fuer die Beratung.",
        },
        {
          text: "Niemand erfaehrt automatisch davon — der GdB ist eine persoenliche Information, die der Patient selbst entscheidet mitzuteilen",
          isCorrect: true,
          explanation:
            "Richtig! Der Schwerbehindertenausweis ist ein persoenliches Dokument. Der Patient entscheidet, wem er davon erzaehlt. Weder Vermieter noch Bank noch Krankenkasse informieren Dritte. Im Arbeitsverhaeltnis besteht nach 6 Monaten eine Offenbarungspflicht NUR bei direkter Frage — aber nicht proaktiv.",
        },
        {
          text: "Die Krankenkasse informiert automatisch den Arbeitgeber, damit der Kuendigungsschutz greift",
          isCorrect: false,
          explanation:
            "Falsch. Die Krankenkasse gibt KEINE Informationen ueber den GdB weiter. Der Kuendigungsschutz greift erst, wenn der Arbeitnehmer den Schwerbehindertenausweis dem Arbeitgeber vorlegt oder einen Antrag auf Gleichstellung gestellt hat.",
        },
        {
          text: "Ab GdB 50 wird man automatisch als erwerbsgemindert eingestuft",
          isCorrect: false,
          explanation:
            "Falsch. GdB und Erwerbsminderung sind ZWEI verschiedene Systeme. GdB misst die Beeintraechtigung der Teilhabe (Versorgungsamt). Erwerbsminderung misst die Arbeitsfaehigkeit in Stunden (Rentenversicherung). Man kann GdB 50 haben und voll arbeiten — wie Omar aktuell.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "psycho-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q2", "Q3", "Q5", "Q6", "Q8", "Q9", "Q10"],
    contentC1: {
      title: "Dein psychosozialer Pflegeplan fuer Omar",
      body: "Du schreibst eine psychosoziale Pflegeplanung fuer Omar Mansour. Beruecksichtige alles, was du ueber ihn weisst: seine Staerken (Unternehmertum, Familie, Loyalitaet seiner Mitarbeiter), seine Belastungen (PHQ-9 = 15, Koerperbildveraenderung, sozialer Rueckzug, Schlafprobleme), sein Umfeld (Yasmin schwanger, Bruder in Kairo, Restaurantteam) und die kulturellen Faktoren (Stigma psychischer Erkrankungen, Maennlichkeitsnorm).",
      fallbezug:
        "Dies ist DEIN Plan fuer Omar — individuell, kultursensibel, ressourcenorientiert.",
    },
    question: {
      fragetext:
        "Schreibe eine psychosoziale Pflegeplanung fuer Omar. Der Plan soll enthalten: (1) Mindestens eine Pflegediagnose (psychosozial), (2) ein realistisches Pflegeziel, (3) drei konkrete Massnahmen mit Begruendung, (4) Beruecksichtigung kultureller Faktoren.",
      musterantwort:
        "Pflegediagnose: Beeintraechtigte Anpassung (NANDA-I 00069) — belegt durch: PHQ-9 = 15, sozialer Rueckzug, Schlafprobleme, Verleugnung psychischer Belastung, uebermaessige Arbeit als Kompensation. Pflegeziel: Omar nimmt innerhalb von 4 Wochen mindestens ein psychosoziales Unterstuetzungsangebot wahr (Sozialdienst, Beratung oder Selbsthilfe) und benennt eine eigene Coping-Strategie. Massnahmen: (1) Beratungsgespraech fuehren — Omars Perspektive verstehen, das Wort 'Psychologe' vermeiden, alternative Zugaenge anbieten (z.B. 'Sozialberatung', 'Gespraech ueber den Alltag mit Rheuma'). Begruendung: Stigma respektieren, Zugang oeffnen statt erzwingen. (2) Sozialdienst einschalten — GdB-Beratung, berufliche Perspektiven, Hilfsmittel fuer die Kueche. Begruendung: Praktische Probleme loesen schafft Vertrauen und reduziert Belastung. (3) Yasmin einbeziehen — mit Omars Einverstaendnis gemeinsames Gespraech anbieten. Begruendung: Yasmin ist die wichtigste Bezugsperson und selbst belastet (Schwangerschaft + Sorge um Omar). Kulturelle Beruecksichtigung: Maennlichkeitsnorm nicht bekaempfen, sondern nutzen — 'Fuer Ihre Familie sorgen heisst auch, auf sich selbst zu achten.' Begriffe wie 'psychisch krank' vermeiden, stattdessen 'Belastung' oder 'Stress'. Angebot einer maennerspezifischen Gespraechsgruppe.",
      bewertungskriterien: [
        "Psychosoziale Pflegediagnose formuliert (nicht nur medizinisch)",
        "Realistisches Pflegeziel mit Zeitrahmen (nicht 'Omar soll zum Psychologen')",
        "Mindestens 3 konkrete Massnahmen mit Begruendung",
        "Kulturelle Faktoren beruecksichtigt (Maennlichkeitsnorm, Stigma)",
        "Ressourcenorientierung erkennbar (Omars Staerken einbezogen)",
      ],
      satzanfaengeB1: [
        "Omars groesstes Problem ist...",
        "Ich moechte Omar helfen, indem ich...",
        "Fuer Omar ist es wichtig, dass...",
        "Seine Frau Yasmin kann helfen, weil...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "psycho-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 5,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q3", "Q10"],
    contentC1: {
      title: "Praxisauftrag — Hinschauen, wo andere wegsehen",
      body: "Omars Geschichte ist kein Einzelfall. Fast die Haelfte aller Rheuma-Patienten erlebt psychische Belastungen — aber nur ein Bruchteil wird adaequat versorgt. Warum? Weil niemand fragt. Weil das Gelenk wichtiger scheint als die Seele. Weil Maenner nicht weinen. Weil 'der Patient funktioniert ja noch'.\n\nWas du mitnimmst:\n- Depression bei Rheuma ist bidirektional — unbehandelt verschlechtert sie den Krankheitsverlauf\n- Der Zwei-Fragen-Test dauert 30 Sekunden — und kann eine Depression aufdecken\n- Coping ist kein Persoenlichkeitsmerkmal — es ist erlernbar und veraenderbar\n- Koerperbildveraenderung und Sexualitaet sind pflegerische Themen — auch wenn sie unbequem sind\n- GdB und Schwerbehinderung sind Rechte, keine Defizite\n\nPraxisauftrag fuer deine naechste Praxisphase:\n1. Fuehre bei einem Patienten mit chronischer Erkrankung den Zwei-Fragen-Test durch — und dokumentiere das Ergebnis.\n2. Frage dich: Welche psychosozialen Belastungen sehe ich bei meinen Patienten — und welche uebersehe ich, weil ich nicht danach frage?\n\nDie Deutsche Rheuma-Liga bietet Selbsthilfegruppen in allen Bundeslaendern — auch fuer Angehoerige. Peer-Support (Austausch unter Betroffenen) ist eine der wirksamsten Massnahmen gegen Isolation bei chronischer Krankheit.",
      glossarBegriffe: ["Selbsthilfegruppe"],
    },
    contentB1: {
      title: "Was du mitnimmst — Praxisauftrag",
      body: "Omars Geschichte passiert oft. Fast die Haelfte aller Rheuma-Patienten hat psychische Probleme.\nAber die meisten bekommen keine Hilfe. Warum?\nWeil niemand fragt. Weil das Gelenk wichtiger scheint als die Seele.\n\nWas du dir merken sollst:\n- Depression bei Rheuma ist haeufig — und sie macht das Rheuma schlimmer\n- Der Zwei-Fragen-Test dauert 30 Sekunden\n- Menschen lernen, mit Krankheit umzugehen (Coping). Man kann ihnen dabei helfen.\n- Veraenderter Koerper und Sexualitaet — das sind wichtige Themen in der Pflege\n- Ein Schwerbehindertenausweis ist ein Recht. Keine Schande.\n\nAuftrag fuer die Praxis:\n1. Stelle einem Patienten die zwei Fragen: Sind Sie traurig? Haben Sie weniger Freude?\n2. Frage dich: Welche Probleme hat mein Patient — die ich nicht sehe, weil ich nicht frage?\n\nDie Rheuma-Liga hat Selbsthilfegruppen in ganz Deutschland.\nDort treffen sich Menschen mit Rheuma. Sie helfen sich gegenseitig.",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Psychosoziale Belastung",
    erklaerung:
      "Wechselwirkung zwischen psychischen Faktoren (Angst, Depression, Selbstbild) und sozialen Faktoren (Beruf, Partnerschaft, Teilhabe) bei chronischer Erkrankung",
  },
  {
    begriff: "Depression (komorbide)",
    erklaerung:
      "Depression, die gleichzeitig mit einer anderen Erkrankung auftritt. Bei RA: 9,5-41,5% Praevalenz, bidirektional verknuepft mit Krankheitsaktivitaet",
  },
  {
    begriff: "PHQ-9 (Patient Health Questionnaire)",
    erklaerung:
      "Standardisierter Fragebogen mit 9 Fragen zur Depressionsschwere (0-27 Punkte). 5-9: leicht, 10-14: mittel, 15-19: mittelgradig, 20+: schwer",
  },
  {
    begriff: "Zwei-Fragen-Test",
    erklaerung:
      "Einfaches Depression-Screening: 'Niedergeschlagen?' + 'Weniger Freude?' Sensitivitaet 96%. Bei doppeltem Ja: weiter mit PHQ-9",
  },
  {
    begriff: "Coping (Krankheitsbewaeltigung)",
    erklaerung:
      "Gesamtheit der Strategien, mit denen ein Mensch belastende Situationen bewaeltigt. Drei Formen nach Lazarus: problem-, emotions- und bewertungsorientiert",
  },
  {
    begriff: "Lazarus Stressmodell",
    erklaerung:
      "Transaktionales Stressmodell: Stress entsteht durch kognitive Bewertung einer Situation (Bedrohung vs. Herausforderung), nicht durch die Situation selbst",
  },
  {
    begriff: "Corbin-Strauss-Trajekt-Modell",
    erklaerung:
      "Pflegemodell fuer chronische Krankheiten. 8 Phasen, 3 Arbeitslinien: Krankheitsarbeit, Alltagsarbeit, Biographiearbeit. Ziel: Verlaufskurve formen",
  },
  {
    begriff: "Koerperbildveraenderung (Body Image)",
    erklaerung:
      "Veraenderung der Wahrnehmung des eigenen Koerpers durch Krankheit. Bei RA: Schwellung, Deformitaet, Funktionsverlust. 50-90% betroffen",
  },
  {
    begriff: "Grad der Behinderung (GdB)",
    erklaerung:
      "Mass fuer die Beeintraechtigung der Teilhabe am gesellschaftlichen Leben (0-100). Ab GdB 50: Schwerbehindertenstatus mit Kuendigungsschutz, Zusatzurlaub, Steuervorteilen",
  },
  {
    begriff: "Erwerbsminderungsrente",
    erklaerung:
      "Rentenleistung bei eingeschraenkter Arbeitsfaehigkeit. Volle EM: unter 3 Std/Tag, teilweise EM: 3-6 Std/Tag. Unabhaengig vom GdB",
  },
  {
    begriff: "Psychoedukation",
    erklaerung:
      "Strukturierte Vermittlung von Wissen ueber psychische Erkrankungen an Patienten und Angehoerige. Ziel: Verstaendnis foerdern, Stigma reduzieren, Selbstmanagement staerken",
  },
  {
    begriff: "Selbsthilfegruppe",
    erklaerung:
      "Zusammenschluss von Betroffenen zum Austausch und gegenseitiger Unterstuetzung. Rheuma-Liga: 300.000 Mitglieder, groesste Selbsthilfeorganisation im Gesundheitswesen",
  },
];
