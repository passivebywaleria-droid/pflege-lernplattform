// CE-02 — Themen-Array für content-loader
// Registriert alle Themen, die vollständig mit TS-Dateien vorliegen.

import type { Thema } from "../_types";

import {
  CE02_THEMA_STURZ_PROPHYLAXE_BAUSTEINE,
  CE02_THEMA_STURZ_PROPHYLAXE_GLOSSAR,
  CE02_THEMA_STURZ_PROPHYLAXE_KARTEIKARTEN,
} from "./themen/sturz-prophylaxe";

import {
  CE02_THEMA_SCHLAF_BAUSTEINE,
  CE02_THEMA_SCHLAF_GLOSSAR,
  CE02_THEMA_SCHLAF_KARTEIKARTEN,
} from "./themen/schlaf";

import {
  CE02_THEMA_KONTRAKTUR_PROPHYLAXE_BAUSTEINE,
  CE02_THEMA_KONTRAKTUR_PROPHYLAXE_GLOSSAR,
  CE02_THEMA_KONTRAKTUR_PROPHYLAXE_KARTEIKARTEN,
} from "./themen/kontraktur-prophylaxe";

import {
  CE02_THEMA_PNEUMONIE_PROPHYLAXE_BAUSTEINE,
  CE02_THEMA_PNEUMONIE_PROPHYLAXE_GLOSSAR,
  CE02_THEMA_PNEUMONIE_PROPHYLAXE_KARTEIKARTEN,
} from "./themen/pneumonie-prophylaxe";

import {
  CE02_THEMA_THROMBOSE_PROPHYLAXE_BAUSTEINE,
  CE02_THEMA_THROMBOSE_PROPHYLAXE_GLOSSAR,
  CE02_THEMA_THROMBOSE_PROPHYLAXE_KARTEIKARTEN,
} from "./themen/thrombose-prophylaxe";

import {
  CE02_THEMA_POSITIONIERUNG_BAUSTEINE,
  CE02_THEMA_POSITIONIERUNG_GLOSSAR,
  CE02_THEMA_POSITIONIERUNG_KARTEIKARTEN,
} from "./themen/positionierung";

import {
  CE02_THEMA_KINAESTHETIK_BAUSTEINE,
  CE02_THEMA_KINAESTHETIK_GLOSSAR,
  CE02_THEMA_KINAESTHETIK_KARTEIKARTEN,
} from "./themen/kinaesthetik";

import {
  CE02_THEMA_MOBILISATION_BAUSTEINE,
  CE02_THEMA_MOBILISATION_GLOSSAR,
  CE02_THEMA_MOBILISATION_KARTEIKARTEN,
} from "./themen/mobilisation";

import {
  CE02_THEMA_DEKUBITUS_PROPHYLAXE_BAUSTEINE,
  CE02_THEMA_DEKUBITUS_PROPHYLAXE_GLOSSAR,
  CE02_THEMA_DEKUBITUS_PROPHYLAXE_KARTEIKARTEN,
} from "./themen/dekubitus-prophylaxe";

import {
  CE02_THEMA_PFLEGEPROZESS_BAUSTEINE,
  CE02_THEMA_PFLEGEPROZESS_GLOSSAR,
  CE02_THEMA_PFLEGEPROZESS_KARTEIKARTEN,
} from "./themen/pflegeprozess";

import {
  CE02_THEMA_PFLEGEPLANUNG_BAUSTEINE,
  CE02_THEMA_PFLEGEPLANUNG_GLOSSAR,
  CE02_THEMA_PFLEGEPLANUNG_KARTEIKARTEN,
} from "./themen/pflegeplanung";

import {
  CE02_THEMA_PFLEGEDOKUMENTATION_BAUSTEINE,
  CE02_THEMA_PFLEGEDOKUMENTATION_GLOSSAR,
  CE02_THEMA_PFLEGEDOKUMENTATION_KARTEIKARTEN,
} from "./themen/pflegedokumentation";

import {
  CE02_THEMA_ASSESSMENTS_EXPERTENSTANDARDS_BAUSTEINE,
  CE02_THEMA_ASSESSMENTS_EXPERTENSTANDARDS_GLOSSAR,
  CE02_THEMA_ASSESSMENTS_EXPERTENSTANDARDS_KARTEIKARTEN,
} from "./themen/assessments-expertenstandards";

import {
  CE02_THEMA_HAUT_BAUSTEINE,
  CE02_THEMA_HAUT_GLOSSAR,
  CE02_THEMA_HAUT_KARTEIKARTEN,
} from "./themen/haut";

import {
  CE02_THEMA_GANZKOERPERPFLEGE_BAUSTEINE,
  CE02_THEMA_GANZKOERPERPFLEGE_GLOSSAR,
  CE02_THEMA_GANZKOERPERPFLEGE_KARTEIKARTEN,
} from "./themen/ganzkörperpflege";

import {
  CE02_THEMA_ERNAEHRUNGSASSESSMENT_BAUSTEINE,
  CE02_THEMA_ERNAEHRUNGSASSESSMENT_GLOSSAR,
  CE02_THEMA_ERNAEHRUNGSASSESSMENT_KARTEIKARTEN,
} from "./themen/ernaehrungsassessment";

import {
  CE02_THEMA_MUNDPFLEGE_BAUSTEINE,
  CE02_THEMA_MUNDPFLEGE_GLOSSAR,
  CE02_THEMA_MUNDPFLEGE_KARTEIKARTEN,
} from "./themen/mundpflege";

import {
  CE02_THEMA_SAEUGLINGSPFLEGE_BAUSTEINE,
  CE02_THEMA_SAEUGLINGSPFLEGE_GLOSSAR,
  CE02_THEMA_SAEUGLINGSPFLEGE_KARTEIKARTEN,
} from "./themen/saeuglingspflege";

import {
  CE02_THEMA_BASALE_STIMULATION_BAUSTEINE,
  CE02_THEMA_BASALE_STIMULATION_GLOSSAR,
  CE02_THEMA_BASALE_STIMULATION_KARTEIKARTEN,
} from "./themen/basale-stimulation";

import {
  CE02_THEMA_ERNAEHRUNGSGRUNDLAGEN_BAUSTEINE,
  CE02_THEMA_ERNAEHRUNGSGRUNDLAGEN_GLOSSAR,
  CE02_THEMA_ERNAEHRUNGSGRUNDLAGEN_KARTEIKARTEN,
} from "./themen/ernaehrungsgrundlagen";

import {
  CE02_THEMA_ESSEN_ANREICHEN_BAUSTEINE,
  CE02_THEMA_ESSEN_ANREICHEN_GLOSSAR,
  CE02_THEMA_ESSEN_ANREICHEN_KARTEIKARTEN,
} from "./themen/essen-anreichen";

import {
  CE02_THEMA_ENTERALE_ERNAEHRUNG_BAUSTEINE,
  CE02_THEMA_ENTERALE_ERNAEHRUNG_GLOSSAR,
  CE02_THEMA_ENTERALE_ERNAEHRUNG_KARTEIKARTEN,
} from "./themen/enterale-ernaehrung";

import {
  CE02_THEMA_HARNAUSSCHEIDUNG_BAUSTEINE,
  CE02_THEMA_HARNAUSSCHEIDUNG_GLOSSAR,
  CE02_THEMA_HARNAUSSCHEIDUNG_KARTEIKARTEN,
} from "./themen/harnausscheidung";

import {
  CE02_THEMA_BLASENKATHETER_BAUSTEINE,
  CE02_THEMA_BLASENKATHETER_GLOSSAR,
  CE02_THEMA_BLASENKATHETER_KARTEIKARTEN,
} from "./themen/blasenkatheter";

import {
  CE02_THEMA_STUHLAUSSCHEIDUNG_BAUSTEINE,
  CE02_THEMA_STUHLAUSSCHEIDUNG_GLOSSAR,
  CE02_THEMA_STUHLAUSSCHEIDUNG_KARTEIKARTEN,
} from "./themen/stuhlausscheidung";

export const CE02_THEMEN: Thema[] = [
  // Cluster A — Pflegeprozess
  {
    themaId: "pflegeprozess",
    ceId: "ce-02",
    titel: "Pflegeprozess — das 6-Schritte-Modell",
    kompetenzbereich: "I.1",
    wissensart: "konzept",
    voraussetzungen: [],
    cluster: "A",
    geschaetzteUE: 8,
    bausteine: CE02_THEMA_PFLEGEPROZESS_BAUSTEINE,
    glossar: CE02_THEMA_PFLEGEPROZESS_GLOSSAR,
    karteikarten: CE02_THEMA_PFLEGEPROZESS_KARTEIKARTEN,
  },
  {
    themaId: "pflegeplanung",
    ceId: "ce-02",
    titel: "Pflegeplanung & Pflegediagnosen",
    kompetenzbereich: "I.1",
    wissensart: "konzept",
    voraussetzungen: ["pflegeprozess"],
    cluster: "A",
    geschaetzteUE: 8,
    bausteine: CE02_THEMA_PFLEGEPLANUNG_BAUSTEINE,
    glossar: CE02_THEMA_PFLEGEPLANUNG_GLOSSAR,
    karteikarten: CE02_THEMA_PFLEGEPLANUNG_KARTEIKARTEN,
  },
  {
    themaId: "pflegedokumentation",
    ceId: "ce-02",
    titel: "Pflegedokumentation & Übergabe",
    kompetenzbereich: "I.1",
    wissensart: "konzept",
    voraussetzungen: ["pflegeplanung"],
    cluster: "A",
    geschaetzteUE: 7,
    bausteine: CE02_THEMA_PFLEGEDOKUMENTATION_BAUSTEINE,
    glossar: CE02_THEMA_PFLEGEDOKUMENTATION_GLOSSAR,
    karteikarten: CE02_THEMA_PFLEGEDOKUMENTATION_KARTEIKARTEN,
  },
  {
    themaId: "assessments-expertenstandards",
    ceId: "ce-02",
    titel: "Assessments & Expertenstandards",
    kompetenzbereich: "I.1",
    wissensart: "orientierung",
    voraussetzungen: ["pflegeprozess"],
    cluster: "A",
    geschaetzteUE: 7,
    bausteine: CE02_THEMA_ASSESSMENTS_EXPERTENSTANDARDS_BAUSTEINE,
    glossar: CE02_THEMA_ASSESSMENTS_EXPERTENSTANDARDS_GLOSSAR,
    karteikarten: CE02_THEMA_ASSESSMENTS_EXPERTENSTANDARDS_KARTEIKARTEN,
  },
  // Cluster B — Mobilität & Prophylaxen
  {
    themaId: "kinaesthetik",
    ceId: "ce-02",
    titel: "Kinästhetik — Bewegung verstehen",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: [],
    cluster: "B",
    geschaetzteUE: 5,
    bausteine: CE02_THEMA_KINAESTHETIK_BAUSTEINE,
    glossar: CE02_THEMA_KINAESTHETIK_GLOSSAR,
    karteikarten: CE02_THEMA_KINAESTHETIK_KARTEIKARTEN,
  },
  {
    themaId: "positionierung",
    ceId: "ce-02",
    titel: "Positionierung & Lagerung",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: ["kinaesthetik"],
    cluster: "B",
    geschaetzteUE: 5,
    bausteine: CE02_THEMA_POSITIONIERUNG_BAUSTEINE,
    glossar: CE02_THEMA_POSITIONIERUNG_GLOSSAR,
    karteikarten: CE02_THEMA_POSITIONIERUNG_KARTEIKARTEN,
  },
  {
    themaId: "mobilisation",
    ceId: "ce-02",
    titel: "Mobilisation & Transfer",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: ["kinaesthetik", "positionierung"],
    cluster: "B",
    geschaetzteUE: 6,
    bausteine: CE02_THEMA_MOBILISATION_BAUSTEINE,
    glossar: CE02_THEMA_MOBILISATION_GLOSSAR,
    karteikarten: CE02_THEMA_MOBILISATION_KARTEIKARTEN,
  },
  {
    themaId: "dekubitus-prophylaxe",
    ceId: "ce-02",
    titel: "Dekubitus-Prophylaxe",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: ["positionierung"],
    cluster: "B",
    geschaetzteUE: 12,
    bausteine: CE02_THEMA_DEKUBITUS_PROPHYLAXE_BAUSTEINE,
    glossar: CE02_THEMA_DEKUBITUS_PROPHYLAXE_GLOSSAR,
    karteikarten: CE02_THEMA_DEKUBITUS_PROPHYLAXE_KARTEIKARTEN,
  },
  {
    themaId: "thrombose-prophylaxe",
    ceId: "ce-02",
    titel: "Thrombose-Prophylaxe",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: [],
    cluster: "B",
    geschaetzteUE: 4,
    bausteine: CE02_THEMA_THROMBOSE_PROPHYLAXE_BAUSTEINE,
    glossar: CE02_THEMA_THROMBOSE_PROPHYLAXE_GLOSSAR,
    karteikarten: CE02_THEMA_THROMBOSE_PROPHYLAXE_KARTEIKARTEN,
  },
  {
    themaId: "sturz-prophylaxe",
    ceId: "ce-02",
    titel: "Sturz-Prophylaxe",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: [],
    cluster: "B",
    geschaetzteUE: 4,
    bausteine: CE02_THEMA_STURZ_PROPHYLAXE_BAUSTEINE,
    glossar: CE02_THEMA_STURZ_PROPHYLAXE_GLOSSAR,
    karteikarten: CE02_THEMA_STURZ_PROPHYLAXE_KARTEIKARTEN,
  },
  {
    themaId: "kontraktur-prophylaxe",
    ceId: "ce-02",
    titel: "Kontraktur-Prophylaxe",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: ["kinaesthetik"],
    cluster: "B",
    geschaetzteUE: 3,
    bausteine: CE02_THEMA_KONTRAKTUR_PROPHYLAXE_BAUSTEINE,
    glossar: CE02_THEMA_KONTRAKTUR_PROPHYLAXE_GLOSSAR,
    karteikarten: CE02_THEMA_KONTRAKTUR_PROPHYLAXE_KARTEIKARTEN,
  },
  {
    themaId: "pneumonie-prophylaxe",
    ceId: "ce-02",
    titel: "Pneumonie-Prophylaxe",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: [],
    cluster: "B",
    geschaetzteUE: 4,
    bausteine: CE02_THEMA_PNEUMONIE_PROPHYLAXE_BAUSTEINE,
    glossar: CE02_THEMA_PNEUMONIE_PROPHYLAXE_GLOSSAR,
    karteikarten: CE02_THEMA_PNEUMONIE_PROPHYLAXE_KARTEIKARTEN,
  },
  {
    themaId: "schlaf",
    ceId: "ce-02",
    titel: "Schlaf & Schlafhygiene",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: [],
    cluster: "B",
    geschaetzteUE: 3,
    bausteine: CE02_THEMA_SCHLAF_BAUSTEINE,
    glossar: CE02_THEMA_SCHLAF_GLOSSAR,
    karteikarten: CE02_THEMA_SCHLAF_KARTEIKARTEN,
  },
  // Cluster C — Körperpflege
  {
    themaId: "haut",
    ceId: "ce-02",
    titel: "Haut — Anatomie, Beobachtung, Pflege",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: [],
    cluster: "C",
    geschaetzteUE: 12,
    bausteine: CE02_THEMA_HAUT_BAUSTEINE,
    glossar: CE02_THEMA_HAUT_GLOSSAR,
    karteikarten: CE02_THEMA_HAUT_KARTEIKARTEN,
  },
  {
    themaId: "ganzkörperpflege",
    ceId: "ce-02",
    titel: "Ganzkörperpflege",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: ["haut"],
    cluster: "C",
    geschaetzteUE: 12,
    bausteine: CE02_THEMA_GANZKOERPERPFLEGE_BAUSTEINE,
    glossar: CE02_THEMA_GANZKOERPERPFLEGE_GLOSSAR,
    karteikarten: CE02_THEMA_GANZKOERPERPFLEGE_KARTEIKARTEN,
  },
  // Cluster D — Ernährung
  {
    themaId: "ernaehrungsassessment",
    ceId: "ce-02",
    titel: "Ernährungsassessment & Mangelernährung",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: [],
    cluster: "D",
    geschaetzteUE: 8,
    bausteine: CE02_THEMA_ERNAEHRUNGSASSESSMENT_BAUSTEINE,
    glossar: CE02_THEMA_ERNAEHRUNGSASSESSMENT_GLOSSAR,
    karteikarten: CE02_THEMA_ERNAEHRUNGSASSESSMENT_KARTEIKARTEN,
  },
  {
    themaId: "ernaehrungsgrundlagen",
    ceId: "ce-02",
    titel: "Ernährungsgrundlagen",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: [],
    cluster: "D",
    geschaetzteUE: 8,
    bausteine: CE02_THEMA_ERNAEHRUNGSGRUNDLAGEN_BAUSTEINE,
    glossar: CE02_THEMA_ERNAEHRUNGSGRUNDLAGEN_GLOSSAR,
    karteikarten: CE02_THEMA_ERNAEHRUNGSGRUNDLAGEN_KARTEIKARTEN,
  },
  {
    themaId: "essen-anreichen",
    ceId: "ce-02",
    titel: "Essen & Trinken anreichen",
    kompetenzbereich: "II.1",
    wissensart: "handlung",
    voraussetzungen: ["ernaehrungsgrundlagen"],
    cluster: "D",
    geschaetzteUE: 7,
    bausteine: CE02_THEMA_ESSEN_ANREICHEN_BAUSTEINE,
    glossar: CE02_THEMA_ESSEN_ANREICHEN_GLOSSAR,
    karteikarten: CE02_THEMA_ESSEN_ANREICHEN_KARTEIKARTEN,
  },
  {
    themaId: "enterale-ernaehrung",
    ceId: "ce-02",
    titel: "Enterale & parenterale Ernährung",
    kompetenzbereich: "III.2",
    wissensart: "handlung",
    voraussetzungen: ["ernaehrungsassessment"],
    cluster: "D",
    geschaetzteUE: 7,
    bausteine: CE02_THEMA_ENTERALE_ERNAEHRUNG_BAUSTEINE,
    glossar: CE02_THEMA_ENTERALE_ERNAEHRUNG_GLOSSAR,
    karteikarten: CE02_THEMA_ENTERALE_ERNAEHRUNG_KARTEIKARTEN,
  },
  // Cluster C — Körperpflege (zusätzlich)
  {
    themaId: "mundpflege",
    ceId: "ce-02",
    titel: "Mundpflege & Soor-/Parotitis-Prophylaxe",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: [],
    cluster: "C",
    geschaetzteUE: 7,
    bausteine: CE02_THEMA_MUNDPFLEGE_BAUSTEINE,
    glossar: CE02_THEMA_MUNDPFLEGE_GLOSSAR,
    karteikarten: CE02_THEMA_MUNDPFLEGE_KARTEIKARTEN,
  },
  {
    themaId: "saeuglingspflege",
    ceId: "ce-02",
    titel: "Säuglingspflege",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: ["haut", "kinaesthetik"],
    cluster: "C",
    geschaetzteUE: 10,
    bausteine: CE02_THEMA_SAEUGLINGSPFLEGE_BAUSTEINE,
    glossar: CE02_THEMA_SAEUGLINGSPFLEGE_GLOSSAR,
    karteikarten: CE02_THEMA_SAEUGLINGSPFLEGE_KARTEIKARTEN,
  },
  {
    themaId: "basale-stimulation",
    ceId: "ce-02",
    titel: "Basale Stimulation",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: ["ganzkörperpflege"],
    cluster: "C",
    geschaetzteUE: 9,
    bausteine: CE02_THEMA_BASALE_STIMULATION_BAUSTEINE,
    glossar: CE02_THEMA_BASALE_STIMULATION_GLOSSAR,
    karteikarten: CE02_THEMA_BASALE_STIMULATION_KARTEIKARTEN,
  },
  // Cluster E — Ausscheidung
  {
    themaId: "harnausscheidung",
    ceId: "ce-02",
    titel: "Harnausscheidung & Inkontinenz",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: [],
    cluster: "E",
    geschaetzteUE: 10,
    bausteine: CE02_THEMA_HARNAUSSCHEIDUNG_BAUSTEINE,
    glossar: CE02_THEMA_HARNAUSSCHEIDUNG_GLOSSAR,
    karteikarten: CE02_THEMA_HARNAUSSCHEIDUNG_KARTEIKARTEN,
  },
  {
    themaId: "blasenkatheter",
    ceId: "ce-02",
    titel: "Blasenkatheter",
    kompetenzbereich: "III.2",
    wissensart: "handlung",
    voraussetzungen: ["harnausscheidung"],
    cluster: "E",
    geschaetzteUE: 10,
    bausteine: CE02_THEMA_BLASENKATHETER_BAUSTEINE,
    glossar: CE02_THEMA_BLASENKATHETER_GLOSSAR,
    karteikarten: CE02_THEMA_BLASENKATHETER_KARTEIKARTEN,
  },
  {
    themaId: "stuhlausscheidung",
    ceId: "ce-02",
    titel: "Stuhlausscheidung & Stomapflege",
    kompetenzbereich: "I.1",
    wissensart: "handlung",
    voraussetzungen: [],
    cluster: "E",
    geschaetzteUE: 10,
    bausteine: CE02_THEMA_STUHLAUSSCHEIDUNG_BAUSTEINE,
    glossar: CE02_THEMA_STUHLAUSSCHEIDUNG_GLOSSAR,
    karteikarten: CE02_THEMA_STUHLAUSSCHEIDUNG_KARTEIKARTEN,
  },
];
