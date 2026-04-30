// CE-02 Situation Frau Schmidt — Inline-Wissens-Bausteine (Begriffs-Lücken-Patch)
// 7 Bausteine: Deckt 16 von 20 fehlende Begriffe ab → Coverage 29% → ~86%
// Positionierung: VOR dem Anwendungs-Step der den Begriff braucht
// HINWEIS: IW-S01 (beob-05c) folgt auf beob-05b-intertrigo (embedded IW in phase file).
//   Bei der Interleaving-Integration einen Anwendungs-Step dazwischen sicherstellen.
// Pipeline v9 — 2026-04-30

import type { ContentStep } from "../../../_types";

// =============================================================================
// PHASE 2 — BEOBACHTEN
// =============================================================================

/**
 * IW-S01: Diabetisches Fußsyndrom + Podologe + Onychomykose
 * Position: VOR Step 2.6 (MC: Fußinspektion — Podologe K.O.-Wissen)
 * Grund: Schüler braucht Vorwissen zu DFS/Podologe bevor K.O.-Frage kommt
 * Deckt: Diabetisches Fußsyndrom, Onychomykose, Podologe
 */
export const CE02_SCHMIDT_IW_01_DFS_PODOLOGE: ContentStep = {
  stepId: "ce02-schmidt-beob-05c-dfs-podologe",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DDG (2023): Praxisempfehlungen Diabetisches Fußsyndrom",
    "AWMF S3-Leitlinie NVL Typ-2-Diabetes (2023): Fußversorgung und Podologie",
    "Wagner F.W. (1979) / Armstrong D.G. (1996): Wagner-Armstrong-Klassifikation",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-schmidt-beob-dfs-podologe",
  tag: "pflege",
  themaPrimaer: "ernährungsassessment",
  themenSekundaer: ["haut"],
  transition:
    "Du kennst jetzt das Diabetische Fußsyndrom und die Kompetenzgrenzen. Gleich inspizierst du Frau Schmidts Füße.",
  contentC1: {
    title: "Diabetisches Fußsyndrom — warum Pflege nicht feilen darf",
    body: "",
    glossarBegriffe: ["Diabetisches Fußsyndrom", "Podologe", "Onychomykose"],
  },
  contentB1: {
    title: "Diabetischer Fuß — warum nur ein Spezialist die Nägel macht",
    body: "",
    glossarBegriffe: ["Diabetisches Fußsyndrom", "Podologe", "Onychomykose"],
  },
  inlineWissen: {
    bausteinRef: "ernährungsassessment-dfs-podologe",
    themaPrimaer: "ernährungsassessment",
    storyAufhaenger:
      "Du hast gerade Frau Schmidts Haut inspiziert — Intertrigo in den Falten ist dir klar. Jetzt schaust du weiter nach unten: die Füße. Im Übergabeblatt steht \"Diabetes mellitus Typ 2\". Warum ist das für die Füße so wichtig — und warum darfst du die Nägel nicht schneiden?",
    storyAufhaengerB1:
      "Du hast die Haut-Falten inspiziert. Jetzt schaust du auf die Füße. Frau Schmidt hat Diabetes. Warum sind die Füße bei Diabetes besonders gefährdet?",
    kerntext:
      "**Was ist das Diabetische Fußsyndrom (DFS)?** Eine Komplikation bei Diabetes: Nervenschädigung (Polyneuropathie) + Durchblutungsstörung = der Patient spürt Verletzungen nicht und sie heilen schlecht.\n\n**Warum ist das so gefährlich?**\n\n• **Polyneuropathie**: Frau Schmidt spürt Druckstellen, Risse und Blasen an den Füßen nicht oder kaum.\n\n• **Angiopathie**: Die Blutgefäße sind verengt — Wunden heilen 3–5× langsamer (DDG 2023).\n\n• **Onychomykose** (Nagelpilz): Bei Diabetes häufig — verdickte, verfärbte Nägel. Diagnose nur durch Arzt/Mykologie. Aber: Jeder Nagel-Eingriff birgt Verletzungsgefahr.\n\n**Kompetenzgrenze Pflege ↔ Podologe:**\n\n• Pflege darf: inspizieren, dokumentieren, Arzt informieren, Überweisung einleiten.\n\n• Pflege darf NICHT: Nägel schneiden, feilen, Hornhaut entfernen — auch nicht \"nur ein bisschen\".\n\n• **Podologe** (= medizinischer Fußpfleger mit Zusatzqualifikation): Einzige Berufsgruppe für invasive Fußpflege bei DFS.\n\n**Wagner-Armstrong-Klassifikation:**\n• Grad 0: Risikofuß (noch keine Läsion)\n• Grad 1: Oberflächliche Läsion (z. B. Rissbildung) — Frau Schmidt ist hier\n• Grad 2–5: Tiefere Läsionen bis Gangrän",
    kerntextB1:
      "**Was ist das Diabetische Fußsyndrom?** Bei Diabetes werden Nerven und Blutgefäße in den Füßen geschädigt.\n\n• Die Nerven funktionieren schlechter = Frau Schmidt spürt Verletzungen am Fuß nicht.\n\n• Die Blutgefäße sind verengt = Wunden heilen viel langsamer.\n\n• **Onychomykose** (= Nagelpilz): Bei Diabetes häufig. Die Nägel werden dick und gelblich.\n\n**Wer darf die Nägel schneiden?**\n\n• Pflege: Schauen, aufschreiben, Arzt informieren — aber NICHT schneiden oder feilen!\n\n• **Podologe** (= Fuß-Spezialist): Nur er darf die Nägel bearbeiten.\n\n**Wagner-Einteilung:**\n• Grad 0 = Risiko, aber noch keine Wunde\n• Grad 1 = erste Risse (Frau Schmidt)\n• Grad 2–5 = tiefere Wunden",
    faustregel:
      "**Diabetikerfuß = Podologe.** Pflege schaut, dokumentiert, überweist — fasst die Nägel nicht an.",
    faustregelB1:
      "Diabetiker-Fuß = nur der Podologe darf die Nägel machen. Pflege schaut und dokumentiert.",
    spektrum: [
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "COPD + eingeschränkte Mobilität",
        kurzbeschreibung:
          "Bei ihr ist die Fußinspektion aus einem anderen Grund wichtig: Immobilität führt zu Ödemen und Thromboserisiko — nicht zu DFS, aber die Füße müssen trotzdem kontrolliert werden.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz + Sturzrisiko",
        kurzbeschreibung:
          "Herr Bauer vergisst Schuhe anzuziehen. Bei ihm ist barfuß laufen auf Station ein konkretes Sturzrisiko — kein DFS, aber dieselbe Pflege-Aufgabe: Fußinspektion und Dokumentation.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Hemiparese + Sensibilitätsstörung",
        kurzbeschreibung:
          "Ähnlich wie bei DFS spürt Herr Petrov auf der gelähmten Seite Verletzungen schlechter — neurologisch, nicht metabolisch. Fußpflege erfordert besondere Vorsicht.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Bei Frau Schmidt (Diabetes Typ 2) findest du verdickte, gelbliche Nägel und trockene Haut an den Füßen. Was tust du — und was nicht?",
      rueckseite:
        "Inspizieren, Befund dokumentieren (Wagner Grad 1), Arzt informieren, Podologen-Überweisung einleiten. Pflege darf Nägel NICHT schneiden oder feilen (DDG 2023). Podologe = einzige zugelassene Berufsgruppe für invasive Fußpflege bei DFS. Onychomykose (Nagelpilz) = häufig bei Diabetes, Diagnose durch Arzt.\n\nSpektrum: Kovac (Ödem-Füße), Bauer (barfuß), Petrov (Sensibilitätsstörung).\n\nFaustregel: **Diabetikerfuß = Podologe. Pflege schaut, dokumentiert, überweist.**",
    },
  },
};

/**
 * IW-S02: Belastungsinkontinenz
 * Position: VOR Step 2.7 (Dialog: Inkontinenz-Assessment)
 * Grund: Begriff wird im Dialog-Step gebraucht, Schüler braucht Vorwissen
 * Deckt: Belastungsinkontinenz
 */
export const CE02_SCHMIDT_IW_02_BELASTUNGSINKONTINENZ: ContentStep = {
  stepId: "ce02-schmidt-beob-06b-belastungsinkontinenz",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "ICS — International Continence Society: Klassifikation Harninkontinenz",
    "AWMF S2k-Leitlinie (2023): Diagnostik und Therapie Harninkontinenz bei Frauen",
    "DNQP (2014): Expertenstandard Förderung der Harnkontinenz in der Pflege",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-schmidt-beob-belastungsinkontinenz",
  tag: "pflege",
  themaPrimaer: "harnausscheidung",
  themenSekundaer: ["ernährungsassessment"],
  transition:
    "Du weißt jetzt was Belastungsinkontinenz ist. Gleich sprichst du Frau Schmidt darauf an — behutsam.",
  contentC1: {
    title: "Belastungsinkontinenz — was passiert im Beckenboden?",
    body: "",
    glossarBegriffe: ["Belastungsinkontinenz", "Beckenboden", "Sphinkterinsuffizienz"],
  },
  contentB1: {
    title: "Belastungsinkontinenz — Urin verlieren beim Husten",
    body: "",
    glossarBegriffe: ["Belastungsinkontinenz", "Beckenboden"],
  },
  inlineWissen: {
    bausteinRef: "harnausscheidung-belastungsinkontinenz",
    themaPrimaer: "harnausscheidung",
    storyAufhaenger:
      "In der Übergabe steht: \"Belastungsinkontinenz seit 2 Jahren.\" Frau Schmidt redet nicht gerne darüber. Bevor du das Thema ansprichst: Was genau ist Belastungsinkontinenz — und warum trifft es Frauen mit Adipositas besonders?",
    storyAufhaengerB1:
      "In der Übergabe steht: Frau Schmidt verliert Urin seit 2 Jahren. Was genau ist Belastungsinkontinenz? Warum haben Frauen mit Übergewicht das öfter?",
    kerntext:
      "**Was ist Belastungsinkontinenz?** Unwillkürlicher Urinverlust bei körperlicher Belastung — Husten, Niesen, Lachen, Heben, Treppensteigen. Der Blasenschließmuskel (Sphinkter) kann dem Druckanstieg im Bauchraum nicht standhalten.\n\n**Warum bei Adipositas häufiger?**\n\n• Erhöhter intraabdominaler Druck durch Fettgewebe belastet den Beckenboden dauerhaft.\n\n• Adipositas Grad II (BMI 35–40) verdoppelt das Inkontinenz-Risiko (AWMF S2k-LL 2023).\n\n**3 Schweregrade (ICS):**\n\n• Grad I: Urinverlust bei Husten, Niesen, schwerem Heben\n• Grad II: Urinverlust bei Gehen, Treppensteigen, leichter Anstrengung\n• Grad III: Urinverlust schon im Stehen oder Liegen\n\n**Behandlung (Goldstandard):**\n\n• **Beckenbodentraining** — 3 Monate konsequnt (AWMF S2k-LL 2023)\n• Gewichtsreduktion von 5–10% verbessert Inkontinenz signifikant\n• Pessartherapie als Sofortmaßnahme\n• Operative Optionen (TVT/TOT) erst nach konservativer Therapie\n\n**Pflege-Aufgabe:** Schamfrei ansprechen, Selbstversorgung fördern, Hautschutz sichern, Gynäkologie-Überweisung anregen.",
    kerntextB1:
      "**Was ist Belastungsinkontinenz?** Man verliert Urin beim Husten, Niesen, Lachen oder Heben. Der Muskel am Blasenausgang (= Schließmuskel) ist zu schwach.\n\n**Warum bei Übergewicht?**\n\nDas Fett im Bauch drückt auf den Beckenboden. Der Beckenboden wird schwächer.\n\n**3 Stufen:**\n• Stufe 1: Urin beim Husten oder schweren Heben\n• Stufe 2: Urin beim Gehen oder Treppen steigen\n• Stufe 3: Urin schon im Stehen\n\n**Was hilft?**\n• **Beckenboden-Training** — 3 Monate lang\n• Abnehmen (5–10% Gewicht) hilft gegen Inkontinenz\n• Frauenarzt-Überweisung\n\n**Pflege:** Respektvoll ansprechen, Frau Schmidt beim Selbstversorgen unterstützen.",
    faustregel:
      "**Belastungsinkontinenz = Druck übersteigt Schließkraft.** Adipositas erhöht den Druck — Beckenbodentraining stärkt die Gegenkraft.",
    faustregelB1:
      "Belastungsinkontinenz heißt: Druck zu hoch, Muskel zu schwach. Beckenboden-Training hilft.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Inkontinenz bei Demenz",
        kurzbeschreibung:
          "Bei Herr Bauer ist es keine Belastungsinkontinenz, sondern eine funktionelle Inkontinenz: Er findet die Toilette nicht rechtzeitig. Andere Ursache, ähnliche Pflege-Herausforderung.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Neurogene Blasenstörung nach Schlaganfall",
        kurzbeschreibung:
          "Neurogene Blase: Die Nervensteuerung der Blase ist nach dem Schlaganfall gestört. Daher Katheter — ein anderer Mechanismus als bei Frau Schmidt.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-säugling",
        hauptfaktor: "Physiologische Inkontinenz im Säuglingsalter",
        kurzbeschreibung:
          "Säuglinge sind physiologisch inkontinent — die Blasenkontrolle reift erst mit 2–4 Jahren. Kein pathologischer Befund, aber Beobachtung der Ausscheidung ist dieselbe Pflege-Aufgabe.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Frau Schmidt (BMI 38) verliert seit 2 Jahren Urin beim Husten. Welcher Inkontinenz-Typ — und was ist der Goldstandard der Therapie?",
      rueckseite:
        "Belastungsinkontinenz Grad I (ICS). Intraabdominaler Druck übersteigt Sphinkter-Schließkraft. Adipositas = doppeltes Risiko (AWMF S2k-LL 2023). Goldstandard: Beckenbodentraining (3 Monate), Gewichtsreduktion 5–10%, ggf. Pessartherapie. Pflege: schamfrei ansprechen, Selbstversorgung fördern, Gynäkologie-Überweisung.\n\nSpektrum: Bauer (funktionelle Inkontinenz), Petrov (neurogene Blase), Emilia (physiologisch).\n\nFaustregel: **Druck > Schließkraft = Belastungsinkontinenz.**",
    },
  },
};

// =============================================================================
// PHASE 3 — PLANEN
// =============================================================================

/**
 * IW-S03: Pflegediagnose + PESR-Schema + SMART-Ziel
 * Position: VOR Step 3.1 (Matching: Pflegediagnosen nach PESR)
 * Grund: Schüler braucht PESR und SMART als Grundlage bevor er anwendet
 * Deckt: Pflegediagnose, PESR-Schema, SMART-Ziel
 */
export const CE02_SCHMIDT_IW_03_PESR_SMART: ContentStep = {
  stepId: "ce02-schmidt-plan-00b-pesr-smart",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "NANDA International (2021–2023): Pflegediagnosen — Definitionen und Klassifikation",
    "Gordon M. (1994): Functional Health Patterns — Pflegediagnostik",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-schmidt-plan-pesr-smart",
  tag: "pflege",
  themaPrimaer: "pflegeplanung",
  themenSekundaer: ["pflegeprozess"],
  transition:
    "PESR und SMART sitzen. Jetzt: Ordne Frau Schmidts Probleme den richtigen Pflegediagnosen zu.",
  contentC1: {
    title: "PESR-Schema und SMART-Ziele — Werkzeuge der Pflegeplanung",
    body: "",
    glossarBegriffe: ["Pflegediagnose", "PESR-Schema", "SMART-Ziel"],
  },
  contentB1: {
    title: "PESR und SMART — zwei Werkzeuge für die Pflege-Planung",
    body: "",
    glossarBegriffe: ["Pflegediagnose", "PESR-Schema", "SMART-Ziel"],
  },
  inlineWissen: {
    bausteinRef: "pflegeplanung-pesr-smart",
    themaPrimaer: "pflegeplanung",
    storyAufhaenger:
      "Du hast das Assessment bei Frau Schmidt abgeschlossen: Proteinmangel, Intertrigo-Risiko, Belastungsinkontinenz. Jetzt sollst du einen Pflegeplan schreiben. Aber wie wird aus einem Befund eine Pflegediagnose — und wie wird daraus ein messbares Ziel?",
    storyAufhaengerB1:
      "Du hast bei Frau Schmidt viel herausgefunden: Eiweiß-Mangel, Haut-Falten-Risiko, Inkontinenz. Jetzt machst du einen Pflege-Plan. Zwei Werkzeuge helfen dir: PESR und SMART.",
    kerntext:
      "**PESR-Schema — Pflegediagnosen strukturieren** (NANDA 2021):\n\nJede Pflegediagnose hat vier Teile:\n\n• **P** = Problem: Was ist das Problem? (z. B. Mangelernährung bezogen auf Proteinzufuhr)\n\n• **E** = Einflussfaktor (Ätiologie): Warum besteht das Problem? (z. B. einseitige Fertigkost-Ernährung)\n\n• **S** = Symptom: Woran erkennst du es? (z. B. Albumin 31 g/l, NRS-Score 1)\n\n• **R** = Ressource: Was kann die Patientin? (z. B. Frau Schmidt ist gesprächsbereit, kann selbst essen)\n\n**SMART-Ziele — messbare Pflegeziele formulieren:**\n\n• **S** = Spezifisch: Was genau? (Proteinzufuhr steigern)\n• **M** = Messbar: Wie viel? (mindestens 67 g Protein/Tag)\n• **A** = Erreichbar: Ist das realistisch? (stationär machbar mit 3 eiweißreichen Mahlzeiten)\n• **R** = Relevant: Warum wichtig? (Wundheilung, Immunabwehr)\n• **T** = Terminiert: Bis wann? (bis Entlassung in 5 Tagen)\n\n**Zusammenhang:** Erst PESR (Problem erkennen) → dann SMART (Ziel definieren) → dann Maßnahmen planen.",
    kerntextB1:
      "**PESR — Pflege-Diagnosen aufbaün:**\n\n• **P** = Problem: Was ist los? (z. B. zu wenig Eiweiß)\n• **E** = Einflussfaktor: Warum? (z. B. nur Fertig-Essen)\n• **S** = Symptom: Woran sieht man das? (z. B. Albumin zu niedrig)\n• **R** = Ressource: Was kann die Patientin? (z. B. sie kann selbst essen)\n\n**SMART — Pflege-Ziele schreiben:**\n\n• **S** = Was genau? (mehr Eiweiß)\n• **M** = Wie viel? (67 g pro Tag)\n• **A** = Schaffbar? (ja, im Krankenhaus)\n• **R** = Warum wichtig? (Heilung)\n• **T** = Bis wann? (bis Entlassung)\n\nErst PESR → dann SMART → dann Maßnahmen.",
    faustregel:
      "**PESR = Was ist das Problem und warum. SMART = Was ist das Ziel und bis wann.** Beides zusammen = Pflegeplan.",
    faustregelB1:
      "PESR sagt: Was ist das Problem? SMART sagt: Was ist das Ziel? Beides zusammen ergibt den Pflege-Plan.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Sturzprophylaxe-Pflegeziel",
        kurzbeschreibung:
          "Bei Frau M. lautet die PESR-Diagnose: Erhöhtes Sturzrisiko (P) durch Nykturie + Medikamente (E), Sturz letzte Nacht (S), Ressource: mobil tagsüber. SMART-Ziel: \"Kein weiterer Sturz bis Entlassung.\"",
      },
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Stoma-Selbstversorgung als Pflegeziel",
        kurzbeschreibung:
          "Bei Herrn Nguyen: PESR = beeinträchtigte Selbstversorgung (P) durch neues Stoma (E). SMART-Ziel: \"Herr Nguyen wechselt den Beutel bis Entlassung selbstständig.\"",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Hemiparese + Schluckstörung",
        kurzbeschreibung:
          "Mehrere PESR-Diagnosen gleichzeitig: Dysphagie, Hemiplegie, Aphasie. Priorisierung nach Gefährdungspotenzial — Aspiration vor Kontraktur.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Du schreibst eine Pflegediagnose für Frau Schmidts Ernährungsproblem. Welches Schema nutzt du — und was gehört in jedes Feld?",
      rueckseite:
        "PESR-Schema: P = Mangelernährung bezogen auf Proteinzufuhr, E = einseitige Fertigkost, S = Albumin 31 g/l + NRS-Score 1, R = gesprächsbereit, kann selbst essen. Dann SMART-Ziel: 67 g Protein/Tag bis Entlassung (5 Tage).\n\nSpektrum: Frau M. (Sturzrisiko-PESR), Nguyen (Stoma-Selbstversorgung), Petrov (Priorisierung).\n\nFaustregel: **PESR = Problem + Warum. SMART = Ziel + Wann.**",
    },
  },
};

/**
 * IW-S04: Interprofessionell + Ressourcenorientierung
 * Position: VOR Step 3.3 (Matrix: interprofessionelles Team)
 * Grund: Beide Begriffe werden im Matrix-Step und Branching verwendet
 * Deckt: Interprofessionell, Ressourcenorientierung
 */
export const CE02_SCHMIDT_IW_04_INTERPROFESSIONELL: ContentStep = {
  stepId: "ce02-schmidt-plan-02b-interprof-ressourcen",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "WHO (2010): Framework for Action on Interprofessional Education & Collaborative Practice",
    "§ 2 PflBG — Pflege orientiert sich an Ressourcen",
    "DNQP (2017): Expertenstandard Entlassungsmanagement — interprofessionelle Zusammenarbeit als Pflicht",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-schmidt-plan-interprof",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["pflegeplanung"],
  transition:
    "Interprofessionell und ressourcenorientiert im Kopf. Jetzt: Wer macht was bei Frau Schmidt?",
  contentC1: {
    title: "Interprofessionell arbeiten + Ressourcen stärken",
    body: "",
    glossarBegriffe: ["Interprofessionell", "Ressourcenorientierung"],
  },
  contentB1: {
    title: "Im Team arbeiten + Stärken nutzen",
    body: "",
    glossarBegriffe: ["Interprofessionell", "Ressourcenorientierung"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-interprof-ressourcen",
    themaPrimaer: "pflegeprozess",
    storyAufhaenger:
      "Du hast drei Pflegediagnosen für Frau Schmidt geschrieben. Jetzt denkst du: Proteinzufuhr steigern — kann ich das allein? Nein. Ernährungsberaterin, Podologe, Arzt. Aber wie teilt man Aufgaben auf, ohne etwas zu vergessen — und ohne die Patientin zu übergehen?",
    storyAufhaengerB1:
      "Du hast 3 Pflege-Diagnosen geschrieben. Aber du kannst nicht alles allein machen. Du brauchst ein Team: Ernährungs-Beraterin, Podologe, Arzt. Wie teilt ihr die Aufgaben auf?",
    kerntext:
      "**Interprofessionelle Zusammenarbeit** (WHO 2010):\n\nMehrere Berufsgruppen arbeiten zusammen — jede bringt ihre Kompetenz ein:\n\n• **Pflege**: Assessment, tägliche Beobachtung, Hautpflege, Ernährungsprotokoll, Mobilisation, Kommunikation mit Patient\n• **Arzt**: Diagnosestellung, Medikation (Metformin), Überweisungen\n• **Podologe**: Fußpflege bei DFS (Nägel, Hornhaut, Wundversorgung Fuß)\n• **Ernährungsberaterin**: Individuelle Ernährungsplanung, Schulung\n\n**Kompetenzgrenzen sind Qualität, nicht Schwäche.** Wenn Pflege die Nägel nicht schneidet, ist das kein Versagen — es ist Patientensicherheit (DDG 2023).\n\n**Ressourcenorientierung** (§ 2 PflBG):\n\nPflege stärkt was da ist, statt zu übernehmen was noch geht.\n\n• Frau Schmidt KANN selbst essen → Pflege berät, ersetzt nicht\n• Frau Schmidt KANN die Inkontinenzvorlage selbst wechseln → Pflege bietet an, übernimmt nicht\n• Frau Schmidt KANN Entscheidungen treffen → Pflege informiert, entscheidet nicht\n\nDas Ziel: Frau Schmidt verlässt das Krankenhaus **kompetenter** als sie gekommen ist.",
    kerntextB1:
      "**Im Team arbeiten (= interprofessionell):**\n\nMehrere Berufsgruppen arbeiten zusammen:\n\n• **Pflege**: Beobachten, Haut pflegen, Ernährung dokumentieren, mit Frau Schmidt reden\n• **Arzt**: Diagnose, Medikamente, Überweisungen\n• **Podologe**: Fuß-Pflege (Nägel)\n• **Ernährungs-Beraterin**: Ernährungs-Plan machen\n\nJede Berufsgruppe hat ihre Aufgabe. Das ist keine Schwäche — das ist Sicherheit.\n\n**Ressourcen-Orientierung** (§ 2 PflBG):\n\nPflege stärkt was die Patientin kann:\n• Frau Schmidt kann selbst essen → beraten, nicht ersetzen\n• Frau Schmidt kann die Vorlage selbst wechseln → anbieten, nicht übernehmen\n\nZiel: Frau Schmidt geht nach Hause und kann mehr als vorher.",
    faustregel:
      "**Kompetenzgrenze = Patientensicherheit.** Ressourcenorientierung = stärken was da ist, nicht übernehmen was noch geht.",
    faustregelB1:
      "Jeder im Team hat seine Aufgabe. Pflege stärkt was die Patientin kann.",
    spektrum: [
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Stomatherapeut als Schlüssel-Profession",
        kurzbeschreibung:
          "Bei Herrn Nguyen ist der Stomatherapeut die Schlüssel-Profession. Pflege lernt von ihm den Beutelwechsel und leitet Herrn Nguyen zur Selbstversorgung an.",
      },
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Physiotherapie + Pflege bei Sturzprophylaxe",
        kurzbeschreibung:
          "Sturzprophylaxe: Pflege sichert die Umgebung (Nachtlicht, Niedrigbett), Physiotherapie trainiert Gleichgewicht und Kraft. Gemeinsames Ziel, geteilte Aufgaben.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Logopädie + Physiotherapie + Pflege",
        kurzbeschreibung:
          "Drei Professionen gleichzeitig: Logopädie (Schlucken + Sprache), Physiotherapie (Bobath-Mobilisation), Pflege (Positionierung, Ernährung, Kommunikation). Koordination ist hier die Kernaufgabe.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Was bedeutet \"interprofessionell\" bei Frau Schmidt — und warum ist Kompetenzgrenze keine Schwäche?",
      rueckseite:
        "Interprofessionell = mehrere Berufsgruppen (Pflege, Arzt, Podologe, Ernährungsberaterin) arbeiten zusammen, jede mit eigener Kompetenz. Kompetenzgrenze = Patientensicherheit (DDG 2023): Pflege schneidet keine Diabetiker-Nägel. Ressourcenorientierung (§ 2 PflBG): Was Frau Schmidt kann, stärken — nicht übernehmen.\n\nSpektrum: Nguyen (Stomatherapeut), Frau M. (Physio), Petrov (3 Professionen).\n\nFaustregel: **Kompetenzgrenze = Patientensicherheit.**",
    },
  },
};

// =============================================================================
// PHASE 4 — DURCHFÜHREN
// =============================================================================

/**
 * IW-S05: SBAR-Schema + Autonomie
 * Position: VOR Step 4.6 (ChatSim: Fußbefund an Arzt melden)
 * Grund: SBAR wird im ChatSim als Struktur gebraucht, Autonomie im Branching danach
 * Deckt: SBAR, Autonomie
 */
export const CE02_SCHMIDT_IW_05_SBAR_AUTONOMIE: ContentStep = {
  stepId: "ce02-schmidt-dur-05b-sbar-autonomie",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "V.1",
  quellen: [
    "Aktionsbündnis Patientensicherheit (2020): SBAR — Empfehlung zur strukturierten Kommunikation",
    "§ 2 PflBG — Pflege achtet die Autonomie der zu pflegenden Personen",
    "Beauchamp T.L. / Childress J.F. (2019): Principles of Biomedical Ethics, 8. Aufl.",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-schmidt-dur-sbar-autonomie",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["pflegedokumentation"],
  transition:
    "SBAR und Autonomie sitzen. Jetzt: Melde den Fußbefund strukturiert an den Arzt.",
  contentC1: {
    title: "SBAR — strukturiert melden + Autonomie wahren",
    body: "",
    glossarBegriffe: ["SBAR", "Autonomie"],
  },
  contentB1: {
    title: "SBAR — Meldung an den Arzt + Autonomie",
    body: "",
    glossarBegriffe: ["SBAR", "Autonomie"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-sbar-autonomie",
    themaPrimaer: "pflegeprozess",
    storyAufhaenger:
      "Du hast Frau Schmidts Ernährungsgespräch geführt und die Diabetes-Ernährung durchgearbeitet. Jetzt musst du den Fußbefund dem Arzt melden. Wie strukturierst du die Meldung, damit nichts Wichtiges fehlt? Und wie bleibt Frau Schmidts Autonomie dabei gewahrt?",
    storyAufhaengerB1:
      "Du musst den Fuß-Befund dem Arzt melden. SBAR hilft dir, die Meldung zu strukturieren. Und: Was bedeutet Autonomie für Frau Schmidt?",
    kerntext:
      "**SBAR — strukturierte Kommunikation** (Aktionsbündnis Patientensicherheit 2020):\n\nVier Buchstaben, vier Schritte — jede Meldung an Arzt oder Übergabe:\n\n• **S** = Situation: Wer bist du? Wer ist die Patientin? Was ist der Anlass?\n    Beispiel: \"Hier ist [Name], Station X. Frau Schmidt, Zimmer 8 — ich habe einen auffälligen Fußbefund.\"\n\n• **B** = Background: Relevante Hintergrundinformation.\n    Beispiel: \"Diabetes Typ 2, BZ entgleist, 5. stationärer Tag.\"\n\n• **A** = Assessment: Deine Einschätzung als Pflege.\n    Beispiel: \"Wagner Grad 1: trockene Haut, Rissbildung, verdickte Nägel. Pflege darf hier nicht intervenieren.\"\n\n• **R** = Recommendation: Deine konkrete Bitte.\n    Beispiel: \"Ich empfehle eine Podologen-Überweisung.\"\n\n**Autonomie** (§ 2 PflBG, Beauchamp/Childress 2019):\n\nFrau Schmidt hat das Recht, selbst zu entscheiden — über ihre Ernährung, ihre Inkontinenzversorgung, ihre Fußpflege. Pflege informiert, berät, empfiehlt — aber Frau Schmidt entscheidet. Autonomie wahren heißt: Nicht entmündigen, auch wenn man es gut meint.",
    kerntextB1:
      "**SBAR — vier Schritte für jede Meldung:**\n\n• **S** = Situation: Wer bin ich? Wer ist die Patientin? Was ist los?\n• **B** = Background: Wichtige Hintergrund-Info (z. B. Diabetes)\n• **A** = Assessment: Was habe ich gesehen? Was ist meine Einschätzung?\n• **R** = Recommendation: Was empfehle ich? (z. B. Podologen-Überweisung)\n\n**Autonomie** (§ 2 PflBG):\n\nFrau Schmidt darf selbst entscheiden — über Ernährung, Inkontinenz-Versorgung, Fuß-Pflege. Pflege informiert und berät. Frau Schmidt entscheidet.",
    faustregel:
      "**SBAR = 4 Sätze, nichts vergessen.** Autonomie = Patientin entscheidet, nicht die Pflege.",
    faustregelB1:
      "SBAR = vier Schritte für die Meldung. Autonomie = Frau Schmidt entscheidet selbst.",
    spektrum: [
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "SBAR bei Stoma-Komplikation",
        kurzbeschreibung:
          "SBAR bei Leckage: S = Stoma undicht, B = 4. POD Kolostoma, A = Haut gerötet, peristomale Mazeration, R = Stomatherapeut hinzuziehen.",
      },
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "SBAR bei Sturzereignis",
        kurzbeschreibung:
          "SBAR nach Sturz: S = Patientin gestürzt, B = Nykturie, neue Medikation, A = keine sichtbare Verletzung, Bewusstsein klar, R = Arzt für Untersuchung + Sturzprotokoll.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "SBAR im ambulanten Setting",
        kurzbeschreibung:
          "Ambulant: Telefonische SBAR-Meldung an Hausarzt bei akuter Atemnot. Im ambulanten Setting ist SBAR besonders wichtig, weil der Arzt nicht vor Ort ist.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Du meldest Frau Schmidts Fußbefund dem Arzt. Nenne die 4 SBAR-Schritte mit Beispielinhalt.",
      rueckseite:
        "S = Situation: [Name], Station, Frau Schmidt Zi. 8, auffälliger Fußbefund. B = Background: DM Typ 2, BZ entgleist, 5. Tag stationär. A = Assessment: Wagner Grad 1, Risse, Nägel verdickt, Pflege darf nicht schneiden. R = Recommendation: Podologen-Überweisung.\n\nAutonomie (§ 2 PflBG): Frau Schmidt entscheidet selbst. Pflege informiert + berät.\n\nSpektrum: Nguyen (Stoma-Leckage), Frau M. (Sturz), Kovac (ambulant).\n\nFaustregel: **SBAR = 4 Sätze, nichts vergessen.**",
    },
  },
};

// =============================================================================
// PHASE 5 — EVALUIEREN
// =============================================================================

/**
 * IW-S06: Evaluation + Pflegeziel + BZ-Tagesprofil + Postprandial
 * Position: VOR Step 5.1 (Timeline: BZ-Verlauf über 5 Tage)
 * Grund: Schüler braucht Evaluation und BZ-Begriffe bevor er den Verlauf beurteilt
 * Deckt: Evaluation, Pflegeziel, Blutzucker-Tagesprofil, Postprandial
 */
export const CE02_SCHMIDT_IW_06_EVALUATION_BZ: ContentStep = {
  stepId: "ce02-schmidt-eval-00b-evaluation-bz",
  phase: 5,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter V. / Meier M. (1981): Pflegeprozess — Evaluation als 6. Schritt",
    "DDG (2023): Praxisempfehlungen Diabetes Typ 2 — Zielwerte BZ-Tagesprofil",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-schmidt-eval-grundlagen",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["ernährungsassessment"],
  transition:
    "Evaluation und BZ-Begriffe im Kopf. Jetzt: Wie hat sich Frau Schmidts BZ über 5 Tage entwickelt?",
  contentC1: {
    title: "Evaluation + BZ-Tagesprofil — Grundbegriffe",
    body: "",
    glossarBegriffe: ["Evaluation", "Pflegeziel", "Blutzucker-Tagesprofil", "Postprandial"],
  },
  contentB1: {
    title: "Auswertung + Blutzucker-Begriffe",
    body: "",
    glossarBegriffe: ["Evaluation", "Pflegeziel", "Blutzucker-Tagesprofil", "Postprandial"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-evaluation-bz",
    themaPrimaer: "pflegeprozess",
    storyAufhaenger:
      "48 Stunden sind vergangen. Du übernimmst Frau Schmidt wieder. Die Frage: Hat sich etwas verändert? Um das beurteilen zu können, brauchst du zwei Dinge — das Konzept der Evaluation und die BZ-Fachbegriffe.",
    storyAufhaengerB1:
      "48 Stunden sind vergangen. Du bist wieder bei Frau Schmidt. Hat sich etwas verbessert? Um das beurteilen zu können, lernst du zwei Dinge: Was ist Evaluation? Und was bedeuten die Blutzucker-Begriffe?",
    kerntext:
      "**Evaluation im Pflegeprozess** (Fiechter/Meier 1981):\n\nEvaluation = Soll-Ist-Vergleich. Du vergleichst:\n\n• **Soll** = dein Pflegeziel aus Phase 3 (z. B. \"67 g Protein/Tag bis Entlassung\")\n• **Ist** = der aktuelle Zustand (z. B. Ernährungsprotokoll zeigt 55 g/Tag)\n\n3 mögliche Ergebnisse:\n• **Ziel erreicht** → Maßnahme war wirksam, weiter beobachten\n• **Teilweise erreicht** → Trend positiv, Maßnahme beibehalten oder anpassen\n• **Nicht erreicht** → Ursache suchen, Maßnahme ändern, Ziel anpassen\n\n**BZ-Tagesprofil** (DDG 2023):\n\nMehrere BZ-Messungen pro Tag zeigen den Verlauf:\n\n• **Nüchtern-BZ**: Morgens vor dem Essen. Zielwert Typ 2: < 130 mg/dl\n• **Postprandial** (= nach dem Essen): 2 Stunden nach Mahlzeitbeginn. Zielwert: < 180 mg/dl\n• **Tagesprofil**: Nüchtern + postprandial × 3 Mahlzeiten + ggf. Nachtmessung\n\n**Warum ist das wichtig?** Ein einzelner BZ-Wert sagt wenig. Der Trend über Tage zeigt: Wirkt die Therapie (Metformin + Ernährung)?",
    kerntextB1:
      "**Was ist Evaluation?** Du vergleichst: Was war das Ziel? Was ist jetzt?\n\n3 Ergebnisse:\n• Ziel erreicht → gut, weiter beobachten\n• Teilweise erreicht → weiter so, vielleicht anpassen\n• Nicht erreicht → warum nicht? Maßnahme ändern\n\n**Blutzucker-Begriffe:**\n\n• **Nüchtern-BZ**: Morgens vor dem Essen. Ziel: unter 130 mg/dl\n• **Postprandial** = nach dem Essen (2 Stunden). Ziel: unter 180 mg/dl\n• **BZ-Tagesprofil**: Alle Messungen eines Tages zusammen",
    faustregel:
      "**Evaluation = Soll vs. Ist.** Nüchtern < 130, postprandial < 180 — das sind die BZ-Zielwerte bei Typ 2.",
    faustregelB1:
      "Evaluation = Ziel mit jetzt vergleichen. BZ-Ziel: Nüchtern unter 130, nach Essen unter 180.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Evaluation bei Demenz: Pflegeziele anders messen",
        kurzbeschreibung:
          "Bei Demenz: Pflegeziele sind schwerer messbar (\"Sturzhäufigkeit reduziert\" statt \"versteht Sturzrisiko\"). Evaluation bezieht sich auf beobachtbare Ergebnisse, nicht auf Verständnis.",
      },
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Evaluation Stoma-Selbstversorgung",
        kurzbeschreibung:
          "Pflegeziel \"Beutelwechsel selbstständig\": Evaluation = kann er es allein? Teilziele: Schablone anlegen, Platte zuschneiden, Beutel wechseln — jeder Schritt einzeln bewertbar.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "Ambulante Evaluation: Wochenziele",
        kurzbeschreibung:
          "Ambulant: Evaluation erfolgt beim nächsten Besuch (z. B. nächste Woche). Pflegeziel: \"Trinkmenge 1,5 l/Tag\" — Evaluation über Trinkprotokoll.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Was ist Evaluation im Pflegeprozess — und was bedeutet \"postprandial\" beim BZ?",
      rueckseite:
        "Evaluation = Soll-Ist-Vergleich. 3 Ergebnisse: erreicht / teilweise / nicht erreicht. Postprandial = 2h nach Essen, Ziel < 180 mg/dl. Nüchtern-BZ Ziel < 130 mg/dl (DDG 2023). BZ-Tagesprofil = alle Messungen eines Tages.\n\nSpektrum: Bauer (Demenz-Ziele), Nguyen (Stoma-Teilziele), Kovac (ambulante Wochenziele).\n\nFaustregel: **Evaluation = Soll vs. Ist. Nüchtern < 130, postprandial < 180.**",
    },
  },
};

// =============================================================================
// PHASE 6 — DOKUMENTIEREN
// =============================================================================

/**
 * IW-S07: Entlassungsmanagement
 * Position: VOR Step 6.3 (Matching: Entlassungsplanung)
 * Grund: Begriff wird im Matching-Step erstmalig gebraucht
 * Deckt: Entlassungsmanagement
 */
export const CE02_SCHMIDT_IW_07_ENTLASSUNGSMANAGEMENT: ContentStep = {
  stepId: "ce02-schmidt-dok-02b-entlassungsmanagement",
  phase: 6,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP (2019): Expertenstandard Entlassungsmanagement in der Pflege, 2. Aktualisierung",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-schmidt-dok-entlassungsmanagement",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["pflegedokumentation"],
  transition:
    "Entlassungsmanagement verstanden. Jetzt: Ordne zu — wer bekommt welche Information bei Frau Schmidts Entlassung?",
  contentC1: {
    title: "Entlassungsmanagement — nahtlos weiterversorgen",
    body: "",
    glossarBegriffe: ["Entlassungsmanagement", "Pflegeüberleitung"],
  },
  contentB1: {
    title: "Entlassungs-Management — was passiert nach dem Krankenhaus?",
    body: "",
    glossarBegriffe: ["Entlassungsmanagement"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-entlassungsmanagement",
    themaPrimaer: "pflegeprozess",
    storyAufhaenger:
      "Frau Schmidt geht in zwei Tagen nach Hause. Aber: Podologen-Termine, Ernährungsberatung, Diabetes-Kontrolle, Inkontinenz-Abklärung — wer organisiert das? Wenn die Entlassung schlecht geplant ist, reißt die Versorgungskette — und Frau Schmidt steht zu Hause allein mit offenen Fragen.",
    storyAufhaengerB1:
      "Frau Schmidt kommt in 2 Tagen nach Hause. Aber: Fuß-Pflege, Ernährungs-Beratung, Blutzucker-Kontrolle — wer kümmert sich? Wenn die Entlassung schlecht geplant ist, bekommt Frau Schmidt zu Hause keine Hilfe.",
    kerntext:
      "**Was ist Entlassungsmanagement?** Die systematische Planung der Weiterversorgung nach der Entlassung — damit keine Versorgungslücke entsteht (DNQP 2019).\n\n**3 Kern-Elemente:**\n\n• **Frühzeitige Einschätzung** des poststationären Versorgungsbedarfs (idealerweise innerhalb von 24h nach Aufnahme)\n\n• **Interprofessionelle Koordination**: Wer braucht welche Information? Arztbrief, Pflegebrief, Verordnungen, Termine\n\n• **Patientenedukation**: Frau Schmidt muss verstehen — was muss sie zu Hause tun? Welche Termine stehen an?\n\n**Bei Frau Schmidt konkret:**\n• Podologen-Termin ambulant (Fuß → Hausarzt-Überweisung)\n• Ernährungsberatung ambulant (Protein-Zufuhr weiter steigern)\n• BZ-Kontrolle beim Hausarzt (Metformin-Einstellung)\n• Gynäkologie-Überweisung (Belastungsinkontinenz)\n\n**Pflege-Aufgabe:** Nicht nur Pflegebericht schreiben, sondern **Pflegeüberleitung** — was muss die ambulante Versorgung wissen? Was kann Frau Schmidt selbst?",
    kerntextB1:
      "**Was ist Entlassungs-Management?** Die Planung: Was braucht Frau Schmidt nach dem Krankenhaus?\n\n**3 Kern-Punkte:**\n\n• **Früh planen**: Schon bald nach der Aufnahme überlegen: Was braucht sie zu Hause?\n\n• **Alle informieren**: Hausarzt, Podologe, Ernährungs-Beraterin — alle brauchen Infos\n\n• **Frau Schmidt erklären**: Was muss sie zu Hause tun? Welche Termine hat sie?\n\n**Bei Frau Schmidt:**\n• Podologe (Fuß)\n• Ernährungs-Beratung (Eiweiß)\n• Hausarzt (Blutzucker)\n• Frauenärztin (Inkontinenz)",
    faustregel:
      "**Entlassungsmanagement = keine Lücke nach der Entlassung.** Pflege plant, koordiniert und informiert — ab Tag 1.",
    faustregelB1:
      "Entlassungs-Management heißt: Alles planen, damit Frau Schmidt zu Hause gut versorgt ist.",
    spektrum: [
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Stoma-Versorgung ambulant",
        kurzbeschreibung:
          "Bei Herrn Nguyen ist Entlassungsmanagement besonders komplex: Stoma-Material bestellen, Stomatherapeut ambulant, Angehörige einweisen, Selbstversorgung gesichert?",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Rehabilitation nach Schlaganfall",
        kurzbeschreibung:
          "Entlassung in Reha — nicht nach Hause. Pflegeüberleitung an Reha-Einrichtung mit Bobath-Status, Schluckprotokoll und Kommunikationshilfen.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "Ambulant → stationär → ambulant",
        kurzbeschreibung:
          "Bei Frau Kovac geht es umgekehrt: ambulante Pflege muss dokumentieren, wann eine stationäre Einweisung nötig wird (z. B. COPD-Exazerbation) und was der Hausarzt danach wissen muss.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Was ist Entlassungsmanagement — und wann beginnt es bei Frau Schmidt?",
      rueckseite:
        "Entlassungsmanagement = systematische Planung der Weiterversorgung (DNQP 2019). Beginnt idealerweise innerhalb 24h nach Aufnahme. 3 Kern-Elemente: Bedarfseinschätzung, interprofessionelle Koordination, Patientenedukation. Pflege schreibt Pflegeüberleitung.\n\nSpektrum: Nguyen (Stoma ambulant), Petrov (Reha-Überleitung), Kovac (ambulant).\n\nFaustregel: **Keine Lücke nach der Entlassung — Pflege plant ab Tag 1.**",
    },
  },
};
