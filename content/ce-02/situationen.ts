// CE-02 — Situationen-Array für content-loader
// Registriert alle Situationen, die vollständig mit TS-Dateien vorliegen.

import type { Lernsituation } from "../_types";

// --- Pilot: Frau M. Nächtlicher Sturz ---
import {
  CE02_SIT_FRAU_M_NACHT_STURZ_PATIENT,
  CE02_SIT_FRAU_M_NACHT_STURZ_INFORMIEREN,
  CE02_SIT_FRAU_M_NACHT_STURZ_BEOBACHTEN,
  CE02_SIT_FRAU_M_NACHT_STURZ_PLANEN,
  CE02_SIT_FRAU_M_NACHT_STURZ_DURCHFUEHREN,
  CE02_SIT_FRAU_M_NACHT_STURZ_EVALUIEREN,
  CE02_SIT_FRAU_M_NACHT_STURZ_DOKUMENTIEREN,
} from "./situationen/frau-m-nacht-sturz";

// --- Spirale 1 ---
import {
  CE02_SIT_YILMAZ_HUEFT_TEP_PATIENT,
  CE02_SIT_YILMAZ_HUEFT_TEP_INFORMIEREN,
  CE02_SIT_YILMAZ_HUEFT_TEP_BEOBACHTEN,
  CE02_SIT_YILMAZ_HUEFT_TEP_PLANEN,
  CE02_SIT_YILMAZ_HUEFT_TEP_DURCHFUEHREN,
  CE02_SIT_YILMAZ_HUEFT_TEP_EVALUIEREN,
  CE02_SIT_YILMAZ_HUEFT_TEP_DOKUMENTIEREN,
} from "./situationen/ls-yilmaz-hueft-tep";

import {
  CE02_SIT_BAUER_DEMENZ_STURZ_PATIENT,
  CE02_SIT_BAUER_DEMENZ_STURZ_INFORMIEREN,
  CE02_SIT_BAUER_DEMENZ_STURZ_BEOBACHTEN,
  CE02_SIT_BAUER_DEMENZ_STURZ_PLANEN,
  CE02_SIT_BAUER_DEMENZ_STURZ_DURCHFUEHREN,
  CE02_SIT_BAUER_DEMENZ_STURZ_EVALUIEREN,
  CE02_SIT_BAUER_DEMENZ_STURZ_DOKUMENTIEREN,
} from "./situationen/ls-bauer-demenz-sturz";

import {
  CE02_SIT_EMILIA_SAEUGLING_PATIENT,
  CE02_SIT_EMILIA_SAEUGLING_INFORMIEREN,
  CE02_SIT_EMILIA_SAEUGLING_BEOBACHTEN,
  CE02_SIT_EMILIA_SAEUGLING_PLANEN,
  CE02_SIT_EMILIA_SAEUGLING_DURCHFUEHREN,
  CE02_SIT_EMILIA_SAEUGLING_EVALUIEREN,
  CE02_SIT_EMILIA_SAEUGLING_DOKUMENTIEREN,
} from "./situationen/ls-emilia-saeugling";

import {
  CE02_SIT_PETROV_SCHLAGANFALL_PATIENT,
  CE02_SIT_PETROV_SCHLAGANFALL_INFORMIEREN,
  CE02_SIT_PETROV_SCHLAGANFALL_BEOBACHTEN,
  CE02_SIT_PETROV_SCHLAGANFALL_PLANEN,
  CE02_SIT_PETROV_SCHLAGANFALL_DURCHFUEHREN,
  CE02_SIT_PETROV_SCHLAGANFALL_EVALUIEREN,
  CE02_SIT_PETROV_SCHLAGANFALL_DOKUMENTIEREN,
} from "./situationen/ls-petrov-schlaganfall";

// --- Spirale 2 ---
import {
  CE02_SIT_SCHMIDT_ADIPOSITAS_PATIENT,
  CE02_SIT_SCHMIDT_ADIPOSITAS_INFORMIEREN,
  CE02_SIT_SCHMIDT_ADIPOSITAS_BEOBACHTEN,
  CE02_SIT_SCHMIDT_ADIPOSITAS_PLANEN,
  CE02_SIT_SCHMIDT_ADIPOSITAS_DURCHFUEHREN,
  CE02_SIT_SCHMIDT_ADIPOSITAS_EVALUIEREN,
  CE02_SIT_SCHMIDT_ADIPOSITAS_DOKUMENTIEREN,
} from "./situationen/ls-schmidt-adipositas";

import {
  CE02_SIT_YILMAZ_SPIRALE2_PATIENT,
  CE02_SIT_YILMAZ_SPIRALE2_INFORMIEREN,
  CE02_SIT_YILMAZ_SPIRALE2_BEOBACHTEN,
  CE02_SIT_YILMAZ_SPIRALE2_PLANEN,
  CE02_SIT_YILMAZ_SPIRALE2_DURCHFUEHREN,
  CE02_SIT_YILMAZ_SPIRALE2_EVALUIEREN,
  CE02_SIT_YILMAZ_SPIRALE2_DOKUMENTIEREN,
} from "./situationen/ls-yilmaz-spirale2";

// --- Spirale 3 ---
import {
  CE02_SIT_KOVAC_AMBULANT_PATIENT,
  CE02_SIT_KOVAC_AMBULANT_INFORMIEREN,
  CE02_SIT_KOVAC_AMBULANT_BEOBACHTEN,
  CE02_SIT_KOVAC_AMBULANT_PLANEN,
  CE02_SIT_KOVAC_AMBULANT_DURCHFUEHREN,
  CE02_SIT_KOVAC_AMBULANT_EVALUIEREN,
  CE02_SIT_KOVAC_AMBULANT_DOKUMENTIEREN,
} from "./situationen/ls-kovac-ambulant";

import {
  CE02_SIT_NGUYEN_STOMA_PATIENT,
  CE02_SIT_NGUYEN_STOMA_INFORMIEREN,
  CE02_SIT_NGUYEN_STOMA_BEOBACHTEN,
  CE02_SIT_NGUYEN_STOMA_PLANEN,
  CE02_SIT_NGUYEN_STOMA_DURCHFUEHREN,
  CE02_SIT_NGUYEN_STOMA_EVALUIEREN,
  CE02_SIT_NGUYEN_STOMA_DOKUMENTIEREN,
} from "./situationen/ls-nguyen-stoma";

import {
  CE02_SIT_LUKAS_VERBRUEHUNG_PATIENT,
  CE02_SIT_LUKAS_VERBRUEHUNG_INFORMIEREN,
  CE02_SIT_LUKAS_VERBRUEHUNG_BEOBACHTEN,
  CE02_SIT_LUKAS_VERBRUEHUNG_PLANEN,
  CE02_SIT_LUKAS_VERBRUEHUNG_DURCHFUEHREN,
  CE02_SIT_LUKAS_VERBRUEHUNG_EVALUIEREN,
  CE02_SIT_LUKAS_VERBRUEHUNG_DOKUMENTIEREN,
} from "./situationen/ls-lukas-verbruehung";

export const CE02_SITUATIONEN: Lernsituation[] = [
  // Pilot / Spirale 2
  {
    situationId: "frau-m-nacht-sturz",
    ceId: "ce-02",
    situationsTyp: "pflegeprozess",
    patient: CE02_SIT_FRAU_M_NACHT_STURZ_PATIENT,
    titel: "Frau M. — Nächtlicher Sturz",
    titelB1: "Frau M. ist nachts gestürzt",
    themen: ["sturz-prophylaxe", "pflegeprozess", "pflegedokumentation", "assessments-expertenstandards"],
    spirale: 2,
    geschaetzteUE: 3,
    phasen: [
      CE02_SIT_FRAU_M_NACHT_STURZ_INFORMIEREN,
      CE02_SIT_FRAU_M_NACHT_STURZ_BEOBACHTEN,
      CE02_SIT_FRAU_M_NACHT_STURZ_PLANEN,
      CE02_SIT_FRAU_M_NACHT_STURZ_DURCHFUEHREN,
      CE02_SIT_FRAU_M_NACHT_STURZ_EVALUIEREN,
      CE02_SIT_FRAU_M_NACHT_STURZ_DOKUMENTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  // Spirale 1
  {
    situationId: "ls-yilmaz-hueft-tep",
    ceId: "ce-02",
    situationsTyp: "pflegeprozess",
    patient: CE02_SIT_YILMAZ_HUEFT_TEP_PATIENT,
    titel: "Frau Yilmaz — Hüft-TEP und Immobilität",
    themen: ["mobilisation", "dekubitus-prophylaxe", "thrombose-prophylaxe", "positionierung", "pflegeprozess", "pflegedokumentation"],
    spirale: 1,
    geschaetzteUE: 4,
    phasen: [
      CE02_SIT_YILMAZ_HUEFT_TEP_INFORMIEREN,
      CE02_SIT_YILMAZ_HUEFT_TEP_BEOBACHTEN,
      CE02_SIT_YILMAZ_HUEFT_TEP_PLANEN,
      CE02_SIT_YILMAZ_HUEFT_TEP_DURCHFUEHREN,
      CE02_SIT_YILMAZ_HUEFT_TEP_EVALUIEREN,
      CE02_SIT_YILMAZ_HUEFT_TEP_DOKUMENTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-bauer-demenz-sturz",
    ceId: "ce-02",
    situationsTyp: "pflegeprozess",
    patient: CE02_SIT_BAUER_DEMENZ_STURZ_PATIENT,
    titel: "Herr Bauer — Demenz und Sturz",
    themen: ["sturz-prophylaxe", "kontraktur-prophylaxe", "ganzkörperpflege", "mundpflege", "harnausscheidung", "basale-stimulation", "pflegeprozess"],
    spirale: 1,
    geschaetzteUE: 4,
    phasen: [
      CE02_SIT_BAUER_DEMENZ_STURZ_INFORMIEREN,
      CE02_SIT_BAUER_DEMENZ_STURZ_BEOBACHTEN,
      CE02_SIT_BAUER_DEMENZ_STURZ_PLANEN,
      CE02_SIT_BAUER_DEMENZ_STURZ_DURCHFUEHREN,
      CE02_SIT_BAUER_DEMENZ_STURZ_EVALUIEREN,
      CE02_SIT_BAUER_DEMENZ_STURZ_DOKUMENTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-emilia-saeugling",
    ceId: "ce-02",
    situationsTyp: "pflegeprozess",
    patient: CE02_SIT_EMILIA_SAEUGLING_PATIENT,
    titel: "Baby Emilia — Säuglingspflege",
    themen: ["saeuglingspflege", "kinaesthetik", "ernaehrungsgrundlagen", "stuhlausscheidung", "haut", "pflegeprozess"],
    spirale: 1,
    geschaetzteUE: 3,
    phasen: [
      CE02_SIT_EMILIA_SAEUGLING_INFORMIEREN,
      CE02_SIT_EMILIA_SAEUGLING_BEOBACHTEN,
      CE02_SIT_EMILIA_SAEUGLING_PLANEN,
      CE02_SIT_EMILIA_SAEUGLING_DURCHFUEHREN,
      CE02_SIT_EMILIA_SAEUGLING_EVALUIEREN,
      CE02_SIT_EMILIA_SAEUGLING_DOKUMENTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-petrov-schlaganfall",
    ceId: "ce-02",
    situationsTyp: "pflegeprozess",
    patient: CE02_SIT_PETROV_SCHLAGANFALL_PATIENT,
    titel: "Herr Petrov — Schlaganfall mit Dysphagie",
    themen: ["mobilisation", "kinaesthetik", "pneumonie-prophylaxe", "ganzkörperpflege", "essen-anreichen", "enterale-ernaehrung", "blasenkatheter", "pflegeprozess", "pflegedokumentation"],
    spirale: 1,
    geschaetzteUE: 5,
    phasen: [
      CE02_SIT_PETROV_SCHLAGANFALL_INFORMIEREN,
      CE02_SIT_PETROV_SCHLAGANFALL_BEOBACHTEN,
      CE02_SIT_PETROV_SCHLAGANFALL_PLANEN,
      CE02_SIT_PETROV_SCHLAGANFALL_DURCHFUEHREN,
      CE02_SIT_PETROV_SCHLAGANFALL_EVALUIEREN,
      CE02_SIT_PETROV_SCHLAGANFALL_DOKUMENTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  // Spirale 2
  {
    situationId: "ls-schmidt-adipositas",
    ceId: "ce-02",
    situationsTyp: "pflegeprozess",
    patient: CE02_SIT_SCHMIDT_ADIPOSITAS_PATIENT,
    titel: "Frau Schmidt — Adipositas, Diabetes, Mangelernährung",
    themen: ["ernaehrungsassessment", "ernaehrungsgrundlagen", "ganzkörperpflege", "haut", "mobilisation", "dekubitus-prophylaxe", "harnausscheidung", "pflegeplanung"],
    spirale: 2,
    geschaetzteUE: 4,
    phasen: [
      CE02_SIT_SCHMIDT_ADIPOSITAS_INFORMIEREN,
      CE02_SIT_SCHMIDT_ADIPOSITAS_BEOBACHTEN,
      CE02_SIT_SCHMIDT_ADIPOSITAS_PLANEN,
      CE02_SIT_SCHMIDT_ADIPOSITAS_DURCHFUEHREN,
      CE02_SIT_SCHMIDT_ADIPOSITAS_EVALUIEREN,
      CE02_SIT_SCHMIDT_ADIPOSITAS_DOKUMENTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-yilmaz-spirale2",
    ceId: "ce-02",
    situationsTyp: "pflegeprozess",
    patient: CE02_SIT_YILMAZ_SPIRALE2_PATIENT,
    titel: "Frau Yilmaz — Dekubitus Grad II (Spirale 2)",
    themen: ["dekubitus-prophylaxe", "positionierung", "mobilisation", "pflegedokumentation", "assessments-expertenstandards"],
    spirale: 2,
    geschaetzteUE: 3,
    phasen: [
      CE02_SIT_YILMAZ_SPIRALE2_INFORMIEREN,
      CE02_SIT_YILMAZ_SPIRALE2_BEOBACHTEN,
      CE02_SIT_YILMAZ_SPIRALE2_PLANEN,
      CE02_SIT_YILMAZ_SPIRALE2_DURCHFUEHREN,
      CE02_SIT_YILMAZ_SPIRALE2_EVALUIEREN,
      CE02_SIT_YILMAZ_SPIRALE2_DOKUMENTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  // Spirale 3
  {
    situationId: "ls-kovac-ambulant",
    ceId: "ce-02",
    situationsTyp: "pflegeprozess",
    patient: CE02_SIT_KOVAC_AMBULANT_PATIENT,
    titel: "Frau Kovač — Multimorbid, ambulante Pflege",
    themen: ["pneumonie-prophylaxe", "kontraktur-prophylaxe", "mobilisation", "ernaehrungsassessment", "stuhlausscheidung", "schlaf", "pflegedokumentation", "thrombose-prophylaxe"],
    spirale: 3,
    geschaetzteUE: 4,
    phasen: [
      CE02_SIT_KOVAC_AMBULANT_INFORMIEREN,
      CE02_SIT_KOVAC_AMBULANT_BEOBACHTEN,
      CE02_SIT_KOVAC_AMBULANT_PLANEN,
      CE02_SIT_KOVAC_AMBULANT_DURCHFUEHREN,
      CE02_SIT_KOVAC_AMBULANT_EVALUIEREN,
      CE02_SIT_KOVAC_AMBULANT_DOKUMENTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-nguyen-stoma",
    ceId: "ce-02",
    situationsTyp: "pflegeprozess",
    patient: CE02_SIT_NGUYEN_STOMA_PATIENT,
    titel: "Herr Nguyen — Darmkrebs-OP mit Stoma-Neuanlage",
    themen: ["stuhlausscheidung", "dekubitus-prophylaxe", "thrombose-prophylaxe", "mobilisation", "ernaehrungsassessment", "enterale-ernaehrung", "ganzkörperpflege", "haut", "pflegeplanung"],
    spirale: 3,
    geschaetzteUE: 4,
    phasen: [
      CE02_SIT_NGUYEN_STOMA_INFORMIEREN,
      CE02_SIT_NGUYEN_STOMA_BEOBACHTEN,
      CE02_SIT_NGUYEN_STOMA_PLANEN,
      CE02_SIT_NGUYEN_STOMA_DURCHFUEHREN,
      CE02_SIT_NGUYEN_STOMA_EVALUIEREN,
      CE02_SIT_NGUYEN_STOMA_DOKUMENTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
  {
    situationId: "ls-lukas-verbruehung",
    ceId: "ce-02",
    situationsTyp: "pflegeprozess",
    patient: CE02_SIT_LUKAS_VERBRUEHUNG_PATIENT,
    titel: "Kind Lukas — Verbrühung und Kinderschutz",
    themen: ["haut", "ganzkörperpflege", "saeuglingspflege", "ernaehrungsgrundlagen", "mundpflege", "pflegeprozess", "pflegedokumentation"],
    spirale: 3,
    geschaetzteUE: 3,
    phasen: [
      CE02_SIT_LUKAS_VERBRUEHUNG_INFORMIEREN,
      CE02_SIT_LUKAS_VERBRUEHUNG_BEOBACHTEN,
      CE02_SIT_LUKAS_VERBRUEHUNG_PLANEN,
      CE02_SIT_LUKAS_VERBRUEHUNG_DURCHFUEHREN,
      CE02_SIT_LUKAS_VERBRUEHUNG_EVALUIEREN,
      CE02_SIT_LUKAS_VERBRUEHUNG_DOKUMENTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
];
