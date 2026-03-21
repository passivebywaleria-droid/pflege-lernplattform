// Lektion 15: Nicht-medikamentoese Interventionen
// CE 05 — Block D: Pflegerisches Handeln
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-15-interventionen",
  ceId: "ce-05",
  title: "Nicht-medikamentoese Interventionen",
  titleShort: "Interventionen",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 15, b1: 25 },
  kompetenzbereiche: ["KB-I.1", "KB-II.2", "KB-III.2"],
  bloomStufen: [1, 3],
  voraussetzungen: ["le-12-pflegeprozess-1"],
  leitfall: {
    name: "Leyla Arslan",
    alter: 42,
    beruf: "Floristin (eigener Laden)",
    diagnose:
      "RA seit 5 Jahren, MTX 15 mg/Woche, DAS28 3,8, Uebelkeit und Haarausfall unter MTX",
    setting:
      "Rheumatologische Ambulanz, interdisziplinaere Beratung",
    kernproblem:
      "Will Medikamente absetzen und nur noch natuerliche Therapie, Beruf durch Feinmotorik-Probleme bedroht",
  },
  glossarCount: 12,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "interventionen-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Wie viel weisst du ueber nicht-medikamentoese Therapie?",
      body: "Medikamente sind wichtig bei Rheuma — aber sie sind nicht alles. Physiotherapie, Ergotherapie, Ernaehrung, physikalische Therapie und Bewegungsprogramme koennen Schmerz lindern, Funktion verbessern und Lebensqualitaet steigern. Viele Patienten fragen gezielt nach diesen Moeglichkeiten — manche wuenschen sich sogar, ganz auf Medikamente zu verzichten.\n\nIn dieser Lektion lernst du, welche nicht-medikamentoesen Interventionen bei Rheuma evidenzbasiert wirksam sind, welche nicht, und wie du Patienten kompetent beraten kannst. Du triffst Leyla Arslan, eine Floristin mit RA, die ihre Medikamente absetzen will und auf \"natuerliche Heilmethoden\" setzt.\n\nAm Ende kannst du einen individuellen nicht-medikamentoesen Therapieplan erstellen — als Ergaenzung, nicht als Ersatz der Basistherapie.",
      glossarBegriffe: ["Komplementaermedizin"],
    },
    contentB1: {
      title: "Wie viel weisst du ueber Therapie ohne Medikamente?",
      body: "Medikamente sind wichtig bei Rheuma.\nAber es gibt noch mehr, was gegen Schmerzen und Steifigkeit hilft.\n\nZum Beispiel:\n- Bewegungsuebungen (Physiotherapie)\n- Hilfe fuer den Alltag (Ergotherapie)\n- Richtiges Essen (Ernaehrung)\n- Waerme und Kaelte\n\nIn dieser Lektion lernst du:\n- Welche Therapien ohne Medikamente bei Rheuma helfen\n- Welche NICHT helfen (auch wenn man es im Internet liest)\n- Wie du Patienten beraten kannst\n\nDu triffst Leyla Arslan.\nSie hat Rheuma und will ihre Medikamente absetzen.\nSie will nur noch \"natuerliche\" Mittel nehmen.\n\nAm Ende kannst du einen Therapieplan erstellen.\nDer Plan ergaenzt die Medikamente — er ersetzt sie nicht.",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich bei der Beratung zu nicht-medikamentoesen Therapien bei Rheuma?",
    },
  },
  {
    stepId: "interventionen-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Welche Rolle spielen nicht-medikamentoese Interventionen?",
      body: "",
    },
    question: {
      fragetext:
        "Welche Aussage ueber nicht-medikamentoese Interventionen bei rheumatoider Arthritis ist korrekt?",
      optionen: [
        {
          text: "Sie koennen die medikamentoese Basistherapie (DMARDs) vollstaendig ersetzen, wenn der Patient motiviert ist",
          isCorrect: false,
          explanation:
            "Nicht-medikamentoese Interventionen sind eine wichtige Ergaenzung, aber kein Ersatz fuer DMARDs. Die S3-Leitlinie und EULAR-Empfehlungen betonen: Basistherapie kontrolliert die Entzuendung, nicht-medikamentoese Massnahmen verbessern Funktion und Lebensqualitaet. Ohne DMARDs schreitet die Gelenkzerstoerung fort.",
        },
        {
          text: "Sie sind eine evidenzbasierte Ergaenzung zur Basistherapie und verbessern Funktion, Schmerz und Lebensqualitaet",
          isCorrect: true,
          explanation:
            "Richtig. EULAR und die S3-Leitlinie empfehlen Physiotherapie, Ergotherapie und Patientenschulung fuer alle RA-Patienten als integralen Bestandteil des Behandlungskonzepts. Die Evidenz zeigt: Bewegung reduziert Schmerz, Ergotherapie verbessert Funktion, Schulung staerkt Selbstmanagement.",
        },
        {
          text: "Sie sind nur Placebo und haben keinen nachweisbaren Effekt auf den Krankheitsverlauf",
          isCorrect: false,
          explanation:
            "Fuer viele nicht-medikamentoese Interventionen gibt es gute Evidenz: Physiotherapie (EULAR 2018), Ergotherapie (S3-Leitlinie), Ernaehrung (DGRh-Empfehlung). Nicht alles hat die gleiche Evidenzstaerke — aber \"nur Placebo\" ist fachlich falsch.",
        },
        {
          text: "Sie wirken nur bei leichten Verlaeufen und bringen bei schwerer RA nichts",
          isCorrect: false,
          explanation:
            "Gerade bei schwerer RA sind nicht-medikamentoese Interventionen besonders wichtig: Ergotherapie zum Gelenkschutz, Physiotherapie zum Funktionserhalt, psychoedukative Interventionen gegen Fatigue. EULAR empfiehlt koerperliche Aktivitaet ausdruecklich auch bei aktiver Erkrankung — angepasst an die Krankheitsaktivitaet.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "interventionen-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q6"],
    contentC1: {
      title: "Leyla Arslan — \"Ich will keine Chemie mehr\"",
      body: "Leyla Arslan, 42, fuehrt seit 8 Jahren ihren Blumenladen \"Blumen Arslan\". Seit 5 Jahren hat sie Rheumatoide Arthritis — behandelt mit MTX 15 mg/Woche und Prednisolon 5 mg. Ihr DAS28 liegt bei 3,8: moderate Krankheitsaktivitaet, nicht perfekt kontrolliert.\n\nLeyla kommt heute mit einem Stapel ausgedruckter Internetartikel in die rheumatologische Ambulanz: \"Ich habe gelesen, dass Kurkuma und Weihrauch genauso gut wirken wie MTX. Und meine Mutter sagt, mit tuerkischem Leinoel und Fasten hat sie ihre Gelenkschmerzen wegbekommen.\"\n\nWas Leyla nicht erwaehnt: Ihre Mutter hat keine diagnostizierte RA — sondern altersbedingte Arthrose.\n\nLeylas echtes Problem: Die Uebelkeit nach MTX-Einnahme und der Haarausfall belasten sie enorm. Ihr Rheumatologe hat bei ihrem letzten Besuch gesagt: \"Lassen Sie den Unsinn mit den Kraeutern — nehmen Sie einfach Ihre Medikamente.\" Leyla fuehlt sich nicht ernst genommen.\n\nGleichzeitig bedroht die RA ihren Beruf: Beim Blumenbinden schmerzen die Fingergelenke. Die ergonomische Schere rutscht aus den steifen Fingern. Im Kuehlraum (8 Grad, taeglich 30 Minuten) wird die Morgensteifigkeit schlimmer. \"Mein Laden ist mein Leben. Wenn ich nicht mehr binden kann, ist alles vorbei.\"",
      fallbezug:
        "Leitfall-Einfuehrung. Leyla begleitet uns durch die gesamte Lektion.",
      glossarBegriffe: ["Komplementaermedizin", "Mediterrane Ernaehrung"],
    },
    contentB1: {
      title: "Leyla Arslan — \"Ich will keine Chemie mehr\"",
      body: "Leyla Arslan ist 42 Jahre alt.\nSie hat einen Blumenladen: \"Blumen Arslan\".\nSeit 8 Jahren ist es ihr Laden. Sie liebt ihre Arbeit.\n\nSeit 5 Jahren hat Leyla Rheuma (Rheumatoide Arthritis).\nIhr Arzt hat ihr MTX verschrieben (das ist ein Basismedikament).\nLeyla nimmt auch Prednisolon (ein Cortison-Medikament).\n\nAber Leyla hat Probleme mit dem MTX:\n- Ihr ist oft schlecht (Uebelkeit)\n- Ihre Haare fallen aus\n\nLeyla kommt heute zum Arzt und sagt:\n\"Ich will kein MTX mehr nehmen.\"\n\"Ich habe im Internet gelesen: Kurkuma und Weihrauch helfen genauso gut.\"\n\"Meine Mutter sagt: Mit Leinoel und Fasten gehen die Schmerzen weg.\"\n\nWas Leyla nicht weiss:\nIhre Mutter hat kein Rheuma. Sie hat Arthrose (Verschleiss).\nDas ist nicht das Gleiche.\n\nIhr Rheumatologe hat gesagt: \"Lassen Sie den Unsinn mit den Kraeutern.\"\nLeyla fuehlt sich nicht ernst genommen.\n\nGleichzeitig hat Leyla ein grosses Problem bei der Arbeit:\n- Beim Blumenbinden schmerzen ihre Finger.\n- Die Schere rutscht aus den steifen Fingern.\n- Im Kuehlraum (8 Grad, jeden Tag 30 Minuten) wird die Steifigkeit schlimmer.\n\nLeyla sagt: \"Mein Laden ist mein Leben.\"",
      fallbezug: "Leitfall-Einfuehrung.",
    },
  },
  {
    stepId: "interventionen-04",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q5", "Q6"],
    contentC1: {
      title:
        "Mehr als Kraeuter — das Spektrum nicht-medikamentoeser Interventionen",
      body: "Nicht-medikamentoese Interventionen bei Rheuma umfassen weit mehr als \"Naturheilkunde\". Hier der Ueberblick:\n\n**Evidenzbasierte Interventionen (Empfohlen durch S3/EULAR):**\n- **Physiotherapie:** Bewegungstherapie, Funktionstraining, Aquatherapie\n- **Ergotherapie:** Gelenkschutz, Hilfsmittel, Schienen, ATL-Training\n- **Physikalische Therapie:** Kaelteanwendung (Entzuendung), Waerme (Steifigkeit)\n- **Patientenschulung:** Krankheitsverstaendnis, Selbstmanagement\n\n**Mit moderater Evidenz (Kann ergaenzen):**\n- **Ernaehrung:** Mediterrane Kost, Omega-3-Fettsaeuren\n- **Entspannung:** Progressive Muskelrelaxation, Yoga, Achtsamkeit\n- **Bewegungsprogramme:** Rehasport, Funktionstraining der Rheuma-Liga\n\n**Mit schwacher/keiner Evidenz (Nicht empfohlen als Therapie):**\n- Homoeopathie, Kurkuma/Weihrauch als Monotherapie, Heilfasten als Dauertherapie\n\nDer entscheidende Punkt: Die erste Gruppe — Physio, Ergo, Schulung — ist keine \"Alternative\" zur Medizin. Sie IST Medizin. Fuer Leyla bedeutet das: Es gibt tatsaechlich viel, was sie ZUSAETZLICH zu MTX tun kann. Aber die Internetartikel ueber \"Rheuma heilen ohne Chemie\" fuehren in die Irre.",
      fallbezug:
        "Leyla sucht nach Alternativen — aber die wirksamsten nicht-medikamentoesen Interventionen sind keine Alternativen, sondern Ergaenzungen.",
      glossarBegriffe: ["Evidenzbasiert"],
    },
    contentB1: {
      title: "Mehr als Kraeuter — was es alles gibt",
      body: "Therapie ohne Medikamente bei Rheuma — das ist mehr als \"Naturheilkunde\".\n\n**Was wirklich hilft (von Aerzten empfohlen):**\n- **Physiotherapie:** Uebungen fuer Beweglichkeit und Kraft\n- **Ergotherapie:** Hilfe fuer den Alltag, Gelenkschutz, Hilfsmittel\n- **Waerme und Kaelte:** Waerme bei steifen Gelenken, Kaelte bei entzuendeten Gelenken\n- **Schulung:** Wissen ueber die Krankheit und was man selbst tun kann\n\n**Was ein bisschen helfen KANN (als Ergaenzung):**\n- **Ernaehrung:** Viel Gemuese, Olivenoel, Fisch. Wenig Fleisch.\n- **Entspannung:** Yoga, Achtsamkeit, Muskelentspannung\n\n**Was NICHT hilft (keine Beweise):**\n- Homoeopathie\n- Kurkuma oder Weihrauch als alleinige Therapie\n- Dauerhaftes Fasten\n\nWichtig: Physiotherapie und Ergotherapie sind keine \"Alternative\".\nSie sind ein Teil der Medizin.\n\nFuer Leyla bedeutet das:\nEs gibt viel, was sie ZUSAETZLICH zu MTX tun kann.\nAber die Internetartikel ueber \"Rheuma heilen ohne Chemie\" stimmen nicht.",
      fallbezug:
        "Leyla sucht Alternativen — die wirksamsten Therapien ohne Medikamente sind aber keine Alternativen. Sie sind Ergaenzungen.",
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-7)
  // ==========================================
  {
    stepId: "interventionen-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q3", "Q8"],
    contentC1: {
      title: "Bewegung statt Schonung — was die Evidenz sagt",
      body: "Frueher hiess es: \"Rheuma-Gelenke schonen.\" Heute sagt die Evidenz das Gegenteil: Regelmaessige Bewegung ist eine der wirksamsten nicht-medikamentoesen Interventionen bei RA.\n\n**EULAR empfiehlt 4 Bewegungsdomaenen:**\n1. **Ausdauer:** Walken, Schwimmen, Radfahren — 150 Min/Woche moderat\n2. **Kraft:** Muskelaufbau schuetzt Gelenke — 2x/Woche\n3. **Flexibilitaet:** Dehnen erhaelt Bewegungsausmass\n4. **Gleichgewicht:** Sturzprophylaxe, besonders bei Fussgelenk-Beteiligung\n\n**Ist Bewegung im Schub sicher?**\nJa — angepasst. EULAR betont: Koerperliche Aktivitaet ist auch bei aktiver Erkrankung sicher. Im Schub: weniger Intensitaet, weniger Belastung, aber NICHT Bettruhe.\n\n**Funktionstraining (Rheuma-Liga):**\nSpezielle Gruppentherapie fuer Rheuma-Patienten, 1-2x/Woche, von Physiotherapeuten geleitet. Wasser- oder Trockengymnastik. Verordnung durch jeden Arzt moeglich, Kostentraeger uebernehmen. Ueber 300.000 Teilnehmer deutschlandweit.\n\n**Rehasport:**\nBreiter angelegt als Funktionstraining, 1-3x/Woche, staerker auf Ausdauer und Kraft ausgerichtet. Kann parallel zum Funktionstraining verordnet werden.\n\nFuer Leyla: Aquatherapie waere ideal — Auftrieb entlastet die Fingergelenke, Waerme des Wassers lockert Steifigkeit.",
      glossarBegriffe: ["Physiotherapie", "Funktionstraining", "Rehasport"],
    },
    contentB1: {
      title: "Bewegung hilft — auch bei Rheuma",
      body: "Frueher hat man gesagt: \"Rheuma-Gelenke muessen ruhen.\"\nDas stimmt nicht.\nHeute wissen wir: Bewegung ist eine der besten Therapien bei Rheuma.\n\n**Was empfohlen wird (EULAR-Empfehlung):**\n- **Ausdauer:** Spazieren, Schwimmen, Radfahren — 150 Minuten pro Woche\n- **Kraft:** Muskeln staerken, das schuetzt die Gelenke — 2 Mal pro Woche\n- **Dehnen:** Damit die Gelenke beweglich bleiben\n- **Gleichgewicht:** Damit man nicht stuerzt\n\n**Ist Bewegung im Schub erlaubt?**\nJa! Aber weniger und vorsichtiger. Nicht im Bett liegen bleiben.\n\n**Funktionstraining (von der Rheuma-Liga):**\nDas ist Gruppengymnastik speziell fuer Menschen mit Rheuma.\nEin Physiotherapeut leitet die Gruppe.\nEs gibt Uebungen im Wasser oder an Land.\nDer Arzt kann es verordnen. Die Krankenkasse bezahlt.\nUeber 300.000 Menschen machen in Deutschland Funktionstraining.\n\n**Rehasport:**\nAehnlich wie Funktionstraining, aber mit mehr Kraft und Ausdauer.\nMan kann beides gleichzeitig bekommen.\n\nFuer Leyla: Wassergymnastik waere gut.\nDas Wasser traegt den Koerper. Die Finger werden entlastet.\nDas warme Wasser lockert die steifen Gelenke.",
    },
  },
  {
    stepId: "interventionen-06",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-III.2",
    quellen: ["Q1", "Q7"],
    contentC1: {
      title: "Gelenkschutz: Nicht verzichten, sondern anders machen",
      body: "Ergotherapie bei Rheuma hat ein Ziel: Alltag erhalten, trotz Einschraenkungen. Nicht: \"Das koennen Sie nicht mehr.\" Sondern: \"So geht es anders.\"\n\n**Die 5 Gelenkschutzprinzipien:**\n1. **Grosse Gelenke statt kleine belasten** — Tasche auf dem Unterarm statt in der Hand tragen\n2. **Kraft verteilen** — Teller mit beiden Haenden heben statt mit einer\n3. **Hebelgesetze nutzen** — Flasche mit dem Handballen oeffnen, nicht mit den Fingern\n4. **Dauerhaften Druck vermeiden** — Griffverstaerkungen verwenden, nicht krampfhaft festhalten\n5. **Pausen einplanen** — Pacing: 20 Minuten arbeiten, 5 Minuten pausieren\n\n**Hilfsmittel fuer den Alltag:**\n- Griffverstaerkungen (Messer, Stifte, Scheren)\n- Dosenoefffner, Flaschenoefffner (Hebelwirkung)\n- Ergonomische Kuechengeraete (abgewinkelte Griffe)\n- Anzieh-Hilfen (Strumpfanzieher, langer Schuhloeoeoel)\n- Handgelenks-Orthesen (Ruhigstellung, Entlastung)\n\n**Evidenz:** Intensive Gelenkschutz-Programme mit Schulung verbessern Schmerz und Funktion signifikant. Die S3-Leitlinie empfiehlt Ergotherapie fuer alle RA-Patienten.\n\nFuer Leyla ist Ergotherapie entscheidend: Eine ergonomische Blumenschere mit Griffverstaerkung, Techniken zum Binden ohne Fingerbelastung, Pausenstruktur im Arbeitsalltag — das kann ihren Beruf retten.",
      fallbezug:
        "Leyla braucht keine Kraeuter — sie braucht eine Ergotherapeutin, die ihren Arbeitsplatz analysiert.",
      glossarBegriffe: ["Ergotherapie", "Gelenkschutz"],
    },
    contentB1: {
      title: "Gelenkschutz: Nicht aufhoeren — anders machen",
      body: "Ergotherapie bei Rheuma bedeutet:\nDen Alltag so anpassen, dass die Gelenke geschuetzt werden.\nNicht: \"Das koennen Sie nicht mehr.\"\nSondern: \"So geht es anders.\"\n\n**5 Regeln fuer den Gelenkschutz:**\n1. **Grosse Gelenke nutzen statt kleine:**\n   Die Tasche auf dem Unterarm tragen. Nicht in der Hand.\n2. **Kraft verteilen:**\n   Den Teller mit beiden Haenden heben. Nicht mit einer Hand.\n3. **Hebelwirkung nutzen:**\n   Die Flasche mit dem Handballen oeffnen. Nicht mit den Fingern.\n4. **Nicht zu fest greifen:**\n   Griffverstaerkungen benutzen.\n5. **Pausen machen:**\n   20 Minuten arbeiten, 5 Minuten Pause.\n\n**Hilfsmittel fuer den Alltag:**\n- Griffverstaerkungen (fuer Messer, Stifte, Scheren)\n- Spezielle Dosenoefffner und Flaschenoefffner\n- Ergonomische Kuechengeraete\n- Strumpfanzieher, Schuhloeoeoel\n- Handgelenks-Orthesen (Schienen)\n\nFuer Leyla ist Ergotherapie sehr wichtig:\nEine spezielle Schere mit dickem Griff.\nNeue Techniken zum Blumenbinden.\nPausen einplanen im Arbeitsalltag.\nDas kann ihren Beruf retten.",
      fallbezug:
        "Leyla braucht keine Kraeuter — sie braucht eine Ergotherapeutin, die ihren Arbeitsplatz anschaut.",
    },
  },
  {
    stepId: "interventionen-07",
    phase: 3,
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q4", "Q7", "Q10"],
    contentC1: {
      title: "Welche Intervention bewirkt was?",
      body: "Jede nicht-medikamentoese Intervention hat eine spezifische Wirkung und Indikation. Ordne zu.",
    },
    question: {
      fragetext:
        "Ordne jede Intervention ihrer Hauptwirkung zu:",
      matchingPairs: [
        {
          left: "Funktionstraining (Rheuma-Liga)",
          right:
            "Beweglichkeit erhalten und Schmerz lindern durch regelmaessige rheumaspezifische Gruppengymnastik",
        },
        {
          left: "Ergotherapie (Gelenkschutz)",
          right:
            "Alltagsfaehigkeit erhalten durch gelenkschonende Techniken und Hilfsmittel",
        },
        {
          left: "Kryotherapie (Kaelteanwendung)",
          right:
            "Entzuendung und Schwellung reduzieren bei akut entzuendeten Gelenken",
        },
        {
          left: "Thermotherapie (Waermeanwendung)",
          right:
            "Muskelentspannung und Beweglichkeit foerdern bei chronischer Steifigkeit ohne Entzuendung",
        },
        {
          left: "Aquatherapie",
          right:
            "Schmerzarme Bewegung durch Wasserauftrieb mit gleichzeitiger Kraeftigung",
        },
        {
          left: "Mediterrane Ernaehrung",
          right:
            "Entzuendungsaktivitaet senken durch antiinflammatorische Nahrungsmittel als Therapieergaenzung",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 8-10)
  // ==========================================
  {
    stepId: "interventionen-08",
    phase: 4,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q10", "Q1"],
    contentC1: {
      title: "Waerme oder Kaelte? — Nicht verwechseln!",
      body: "Physikalische Therapie nutzt physikalische Reize (Temperatur, Druck, Strom) zur Schmerzlinderung und Funktionsverbesserung. Die wichtigste Regel bei Rheuma: Kaelte bei Entzuendung, Waerme bei Steifigkeit — NIEMALS umgekehrt.",
      fallbezug:
        "Leyla arbeitet taeglich 30 Minuten im Kuehlraum (8 Grad) — danach sind ihre Finger steif und schmerzhaft. Gleichzeitig hat sie ein geschwollenes, uebererwaermtes linkes Handgelenk (Synovitis).",
      glossarBegriffe: [
        "Kryotherapie",
        "Thermotherapie",
        "Balneotherapie",
      ],
    },
    question: {
      fragetext:
        "Leyla hat zwei Probleme gleichzeitig: (1) Steife Finger nach dem Kuehlraum und (2) ein geschwollenes, warmes linkes Handgelenk. Was empfiehlst du?",
      optionen: [
        {
          text: "Handgelenk kuehlen (Kryotherapie), Finger waermen (Paraffinbad oder Koernerkissen VOR dem Kuehlraum)",
          isCorrect: true,
          explanation:
            "Richtig. Das geschwollene, uebererwaermte Handgelenk zeigt aktive Entzuendung (Synovitis) — hier hilft Kaelte (Entzuendungshemmung, Schmerzlinderung). Die steifen Finger ohne Entzuendungszeichen profitieren von Waerme (Muskelentspannung, Beweglichkeitsfoerderung). Beide Massnahmen koennen gleichzeitig an verschiedenen Stellen angewendet werden. TIPP: Waerme VOR dem Kuehlraum — praepariert die Finger.",
        },
        {
          text: "Alles waermen — Waerme ist bei Rheuma immer richtig",
          isCorrect: false,
          explanation:
            "Gefaehrlich. Waerme auf ein entzuendetes Gelenk (geschwollen, uebererwaermt) verstaerkt die Entzuendung, foerdert Schwellung und verschlimmert den Schmerz. Die Regel lautet: NIEMALS Waerme auf akut entzuendete Gelenke. Die gleiche Patientin kann gleichzeitig Kaelte UND Waerme brauchen — an verschiedenen Stellen.",
        },
        {
          text: "Alles kuehlen — Kaelte hilft immer bei Rheuma",
          isCorrect: false,
          explanation:
            "Kaelte auf steife, nicht-entzuendete Gelenke verschlimmert die Steifigkeit. Bei Morgensteifigkeit und Steifigkeit nach Kaelteexposition braucht Leyla Waerme, nicht noch mehr Kaelte. Die Indikation bestimmt die Temperatur — nicht die Diagnose.",
        },
        {
          text: "Keine physikalische Therapie — das bringt bei RA nichts",
          isCorrect: false,
          explanation:
            "Physikalische Therapie ist bei RA evidenzbasiert wirksam, wenn sie korrekt angewendet wird. Die S3-Leitlinie und EULAR empfehlen sie als Ergaenzung. Der Effekt ist kurzfristig, aber regelmaessig angewendet verbessert sie die Lebensqualitaet.",
        },
      ],
    },
  },
  {
    stepId: "interventionen-09",
    phase: 4,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q5", "Q6", "Q9"],
    contentC1: {
      title: "Evidenz-Ranking: Nicht alles ist gleich wirksam",
      body: "Leyla bringt eine Liste mit: Kurkuma, Weihrauch, Fasten, mediterrane Ernaehrung, Omega-3-Kapseln, Homoeopathie. \"Meine Freundin hat damit ihr Rheuma geheilt.\" Als Pflegefachperson musst du differenzieren koennen — was hat Evidenz, was nicht?",
      fallbezug:
        "Leyla fragt dich direkt: \"Was davon wuerden SIE mir empfehlen?\" — Du musst evidenzbasiert beraten koennen.",
    },
    question: {
      fragetext:
        "Sortiere die folgenden Massnahmen von der HOECHSTEN zur NIEDRIGSTEN Evidenz bei rheumatoider Arthritis (laut DGRh und Cochrane):",
      sortItems: [
        "Mediterrane Ernaehrung (DGRh empfohlen, moderate Evidenz fuer Symptombesserung)",
        "Omega-3-Fettsaeuren >3g/Tag (moderate Evidenz fuer Entzuendungssenkung)",
        "Kurkuma/Curcumin (einzelne Hinweise, aber unzureichende Evidenz fuer Empfehlung)",
        "Weihrauch/Boswellia (einzelne Studien, keine ausreichende Evidenz)",
        "Heilfasten als Dauertherapie (kurzfristiger Effekt, nicht nachhaltig, nicht empfohlen)",
        "Homoeopathie (DGRh: nicht empfohlen, keine Wirkung ueber Placebo hinaus)",
      ],
    },
  },
  {
    stepId: "interventionen-10",
    phase: 4,
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1", "Q5", "Q6"],
    contentC1: {
      title: "\"Ab morgen nehme ich nur noch Kurkuma\"",
      body: "",
      fallbezug:
        "Leyla sagt: \"Ich habe mich entschieden. Ab naechster Woche setze ich MTX ab. Meine Freundin hat gesagt, mit Kurkuma, Weihrauch und Fasten geht es ihr viel besser. Und die Uebelkeit und den Haarausfall will ich nicht mehr. Mein Koerper sagt mir, dass die Chemie mir schadet.\"",
    },
    question: {
      fragetext:
        "Wie reagierst du als Pflegefachperson?",
      branchingOptions: [
        {
          text: "\"Da haben Sie Recht — natuerliche Mittel sind besser vertraeglich. Probieren Sie das aus und schauen Sie, wie es Ihnen geht.\"",
          feedback:
            "Fachlich gefaehrlich. MTX eigenmaechtiges Absetzen bei DAS28 3,8 (moderate Aktivitaet) fuehrt mit hoher Wahrscheinlichkeit zu einem Schub und fortschreitender Gelenkzerstoerung. Kurkuma hat keine ausreichende Evidenz als Ersatz fuer DMARDs. Die Nebenwirkungen (Uebelkeit, Haarausfall) sind real und belastend — aber es gibt Loesungen (subkutane Umstellung, Folsaeure-Erhoehung), die man vor dem Absetzen ausprobieren sollte.",
          isCorrect: false,
        },
        {
          text: "\"Ich verstehe, dass die Nebenwirkungen Sie belasten — das ist absolut nachvollziehbar. Bevor Sie MTX absetzen, lassen Sie uns gemeinsam mit Ihrem Rheumatologen ueber Alternativen sprechen. Es gibt Wege, die Uebelkeit zu reduzieren. Und fuer Ernaehrung, Bewegung und Ergotherapie koennen wir parallel einen Plan machen.\"",
          feedback:
            "Sehr gut. Du nimmst Leylas Bedenken ernst (Uebelkeit, Haarausfall sind reale Probleme), validierst ihr Gefuehl (\"nachvollziehbar\"), informierst ohne zu bevormunden (Alternativen benennen), und lenkst auf einen gemeinsamen Weg. Das Absetzen wird nicht verboten, aber in den richtigen Kontext gestellt: erst Alternativen pruefen, dann entscheiden. Die nicht-medikamentoesen Massnahmen werden ZUSAETZLICH angeboten — nicht ALS Ersatz.",
          isCorrect: true,
        },
        {
          text: "\"Das waere sehr unvernuenftig. Kurkuma ist keine Medizin. Nehmen Sie Ihre Tabletten, sonst werden Ihre Gelenke kaputt.\"",
          feedback:
            "Inhaltlich nicht falsch (MTX-Absetzen ist riskant, Kurkuma kein DMARD-Ersatz), aber kommunikativ katastrophal. \"Unvernuenftig\" ist wertend und paternalistisch. Leyla hatte genau diese Erfahrung mit ihrem Rheumatologen (\"Lassen Sie den Unsinn\") — wenn du genauso reagierst, wird sie NIEMALS mehr nach Rat fragen und still absetzen. Beratung braucht Respekt.",
          isCorrect: false,
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "interventionen-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1", "Q2", "Q5", "Q7"],
    contentC1: {
      title: "Dein Plan fuer Leyla",
      body: "",
      fallbezug:
        "Leyla hat deine Beratung angenommen. Sie ist bereit, MTX vorerst weiterzunehmen — wenn parallel nicht-medikamentoese Massnahmen aufgebaut werden. Du sollst einen individuellen Plan erstellen, der zu Leylas Beruf, Alltag und Beduerfnissen passt.",
    },
    contentB1: {
      title: "Dein Plan fuer Leyla",
      body: "",
      fallbezug:
        "Leyla will einen Plan. Sie nimmt MTX weiter — wenn sie gleichzeitig Therapien ohne Medikamente bekommt. Du machst den Plan.",
    },
    question: {
      fragetext:
        "Erstelle einen nicht-medikamentoesen Therapieplan fuer Leyla. Beruecksichtige: (1) ihren Beruf als Floristin, (2) die spezifischen Gelenkprobleme, (3) die Kuehlraum-Situation und (4) ihren Wunsch nach \"natuerlichen\" Massnahmen.",
      musterantwort:
        "Fuer Leyla schlage ich folgenden nicht-medikamentoesen Plan vor: (1) Ergotherapie: Arbeitsplatzanalyse im Blumenladen, ergonomische Schere mit Griffverstaerkung, Gelenkschutz-Schulung fuer Bindetechniken, Handgelenks-Orthese fuer schwere Arbeiten. (2) Physiotherapie: Funktionstraining der Rheuma-Liga (Aquatherapie 1x/Woche), Handgymnastik-Programm fuer morgens. (3) Physikalische Therapie: Paraffinbad fuer die Haende VOR der Kuehlraum-Arbeit (Waerme gegen Steifigkeit), Kuehlpack fuer das entzuendete Handgelenk NACH der Arbeit. (4) Ernaehrung: Mediterrane Ernaehrung als Ergaenzung — mehr Gemuese, Olivenoel, Fisch, weniger Fleisch. Omega-3-Supplementation besprechen. (5) Kuehlraum: Isolierte Handschuhe besorgen, Kuehlraum-Aufenthalt auf 15-Minuten-Bloecke aufteilen statt 30 Minuten am Stueck. (6) Rheuma-Liga: Kontakt vermitteln — Selbsthilfegruppe und Funktionstraining in ihrer Naehe.",
      bewertungskriterien: [
        "Ergotherapie/Gelenkschutz mit konkretem Berufsbezug (Floristin) erwaehnt",
        "Mindestens 2 verschiedene Interventionskategorien genannt (z.B. Physio + Ergo + Ernaehrung)",
        "Waerme/Kaelte-Regel korrekt angewendet (Waerme gegen Steifigkeit, Kaelte gegen Entzuendung)",
        "Kein Ersatz der Basistherapie vorgeschlagen (Ergaenzung, nicht Alternative)",
        "Individuell auf Leyla zugeschnitten (nicht generisch)",
      ],
      satzanfaengeB1: [
        "Fuer Leyla wuerde ich folgende Massnahmen vorschlagen: ...",
        "Beim Blumenbinden kann sie ... , um die Gelenke zu schuetzen.",
        "Fuer die Kuehlraum-Arbeit empfehle ich ...",
        "Als Ernaehrungsempfehlung wuerde ich Leyla sagen: ...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "interventionen-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-III.2",
    quellen: ["Q1", "Q2", "Q8"],
    contentC1: {
      title: "Nicht-medikamentoese Interventionen sind Teamarbeit",
      body: "Du hast in dieser Lektion gelernt: Nicht-medikamentoese Interventionen sind evidenzbasierte Ergaenzungen der Basistherapie — keine Alternativen. Physiotherapie, Ergotherapie, physikalische Therapie und Ernaehrungsanpassung sind fuer viele Rheuma-Patienten genauso wichtig wie ihre Medikamente.\n\n**Pflege als Schnittstelle:**\nPflegende sind oft die Ersten, die hoeren: \"Ich will keine Tabletten mehr.\" Deine Aufgabe ist nicht, das abzuwerten — sondern ernst zu nehmen, zu differenzieren und kompetent zu beraten. Du kennst die Evidenz, du kennst die Patientin, du vermittelst zum richtigen Ansprechpartner.\n\n**Interprofessionelles Team:**\n- **Rheumatologe:** Medikamentenanpassung\n- **Physiotherapeut:** Bewegungsprogramm, Funktionstraining\n- **Ergotherapeut:** Gelenkschutz, Hilfsmittel, Arbeitsplatzanpassung\n- **Ernaehrungsberater:** Individuelle Ernaehrungsumstellung\n- **Psychologe:** Coping, Krankheitsbewaeltigung, Achtsamkeit\n- **Rheuma-Liga:** Selbsthilfe, Funktionstraining, Information\n\n**Dein Praxisauftrag:**\n\n1. **Beobachte:** Welche nicht-medikamentoesen Interventionen werden auf deiner Station/in deiner Einrichtung eingesetzt? Gibt es Physiotherapie, Ergotherapie, Ernaehrungsberatung — oder nur Medikamente?\n\n2. **Frage nach:** Hat ein Patient dich schon einmal nach \"natuerlichen Alternativen\" gefragt? Wie hast du reagiert? Wuerdest du heute anders antworten?\n\n3. **Erkunde:** Gibt es in deiner Region eine Rheuma-Liga-Gruppe? Funktionstraining? Ergotherapie mit Rheuma-Schwerpunkt? Notiere dir die Kontaktdaten — fuer kuenftige Beratungsgespraeche.\n\n**Leyla hat den Termin bei der Ergotherapeutin wahrgenommen.** Die Arbeitsplatzanalyse ergab: Mit einer ergonomischen Schere, Griffverstaerkungen und einem Paraffinbad vor der Kuehlraum-Arbeit kann sie weiter Blumen binden. Sie hat angefangen, dreimal pro Woche mediterran zu kochen. MTX nimmt sie weiterhin — jetzt subkutan, die Uebelkeit ist deutlich besser.",
      fallbezug:
        "Leyla bekommt nicht \"Chemie ODER Natur\" — sie bekommt beides. Und es funktioniert.",
      glossarBegriffe: ["Rheuma-Liga"],
    },
    contentB1: {
      title: "Dein Auftrag fuer die Praxis",
      body: "Du hast gelernt:\n- Welche Therapien ohne Medikamente bei Rheuma helfen\n- Wann Waerme hilft und wann Kaelte\n- Was Ergotherapie und Gelenkschutz bedeuten\n- Wie du Patienten beraten kannst, die \"natuerliche\" Therapie wollen\n\n**Pflege als Verbindung:**\nPatienten sagen oft: \"Ich will keine Tabletten mehr.\"\nDeine Aufgabe: Das ernst nehmen. Nicht abwerten.\nAber auch: Ehrlich beraten. Was hat Beweise? Was nicht?\nUnd: Den richtigen Fachmann vermitteln.\n\n**Wer kann helfen?**\n- **Rheumatologe:** Medikamente anpassen\n- **Physiotherapeut:** Bewegungsprogramm\n- **Ergotherapeut:** Gelenkschutz und Hilfsmittel\n- **Ernaehrungsberater:** Essen umstellen\n- **Rheuma-Liga:** Selbsthilfe und Funktionstraining\n\n**Dein Auftrag:**\n\n1. Welche Therapien ohne Medikamente gibt es auf deiner Station?\n2. Hat ein Patient dich nach \"natuerlichen\" Mitteln gefragt?\n3. Gibt es in deiner Stadt eine Rheuma-Liga-Gruppe? Schreibe die Kontaktdaten auf.\n\n**Und Leyla?**\nSie war bei der Ergotherapeutin.\nMit einer neuen Schere, Griffverstaerkungen und einem Waermebad fuer die Haende kann sie weiter Blumen binden.\nSie kocht jetzt 3 Mal pro Woche mediterran.\nMTX nimmt sie weiter — jetzt als Spritze unter die Haut.\nDie Uebelkeit ist viel besser.\n\nLeyla bekommt nicht \"Chemie ODER Natur\".\nSie bekommt beides. Und es funktioniert.",
      fallbezug:
        "Leyla bekommt beides — und es funktioniert.",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Physiotherapie",
    erklaerung:
      "Bewegungstherapie zur Verbesserung von Funktion, Kraft, Beweglichkeit und Schmerzlinderung — bei Rheuma eine der wirksamsten nicht-medikamentoesen Interventionen",
  },
  {
    begriff: "Ergotherapie",
    erklaerung:
      "Therapie zur Erhoehung der Selbststaendigkeit im Alltag — bei Rheuma v.a. Gelenkschutz, Hilfsmittelversorgung und Arbeitsplatzanpassung",
  },
  {
    begriff: "Gelenkschutz",
    erklaerung:
      "Prinzipien und Techniken zum Schutz der Gelenke im Alltag: grosse statt kleine Gelenke belasten, Kraft verteilen, Hebelgesetze nutzen, Pausen einplanen",
  },
  {
    begriff: "Funktionstraining",
    erklaerung:
      "Rheumaspezifische Gruppengymnastik (Wasser oder Land), 1-2x/Woche, von Physiotherapeuten geleitet, von der Rheuma-Liga organisiert und von Kostentraegern finanziert",
  },
  {
    begriff: "Rehasport",
    erklaerung:
      "Gruppenbasierte Bewegungstherapie mit Fokus auf Ausdauer und Kraft, aerztlich verordnet, kann parallel zum Funktionstraining laufen",
  },
  {
    begriff: "Balneotherapie",
    erklaerung:
      "Behandlung mit natuerlichen Mineralwaessern, Gasen oder Schlammpackungen — Evidenz bei RA gering, aber kurzfristige Schmerzlinderung moeglich",
  },
  {
    begriff: "Kryotherapie",
    erklaerung:
      "Kaelteanwendung zur Entzuendungshemmung und Schmerzlinderung — bei Rheuma einsetzen bei akut entzuendeten, geschwollenen Gelenken",
  },
  {
    begriff: "Thermotherapie",
    erklaerung:
      "Waermeanwendung zur Muskelentspannung und Durchblutungsfoerderung — bei Rheuma einsetzen bei Steifigkeit OHNE aktive Entzuendung, NIEMALS auf entzuendete Gelenke",
  },
  {
    begriff: "Mediterrane Ernaehrung",
    erklaerung:
      "Ernaehrungsform mit viel Gemuese, Obst, Olivenoel, Fisch und wenig Fleisch — von der DGRh als Ergaenzung bei RA empfohlen (moderate Evidenz)",
  },
  {
    begriff: "Komplementaermedizin",
    erklaerung:
      "Ergaenzende Heilmethoden neben der Schulmedizin — bei Rheuma mit sehr unterschiedlicher Evidenz, von wirksam (Yoga) bis unwirksam (Homoeopathie)",
  },
  {
    begriff: "Evidenzbasiert",
    erklaerung:
      "Auf wissenschaftlichen Studien beruhend — Massnahmen mit hoher Evidenz sind nachweislich wirksam, solche mit niedriger Evidenz moeglicherweise nicht",
  },
  {
    begriff: "Rheuma-Liga",
    erklaerung:
      "Deutsche Rheuma-Liga: groesste Selbsthilfeorganisation fuer Menschen mit Rheuma, bietet Funktionstraining, Beratung, Information und Interessenvertretung",
  },
];
