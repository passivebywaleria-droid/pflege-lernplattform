// CE-04 — Situationen-Array für content-loader (Beratungssituationen, SituationsTyp "beratung")
import type { Lernsituation } from "../_types";

import {
  CE04_SIT_DEMIR_PATIENT,
  CE04_SIT_DEMIR_WAHRNEHMEN,
  CE04_SIT_DEMIR_EINSCHAETZEN,
  CE04_SIT_DEMIR_INFORMIEREN,
  CE04_SIT_DEMIR_BERATEN,
  CE04_SIT_DEMIR_EVALUIEREN,
  CE04_SIT_DEMIR_DOKUMENTIEREN,
} from "./situationen/ls-demir-diabetes";

export const CE04_SITUATIONEN: Lernsituation[] = [
  {
    situationId: "ls-demir-diabetes",
    ceId: "ce-04",
    situationsTyp: "beratung",
    patient: CE04_SIT_DEMIR_PATIENT,
    titel: "Herr Demir — Diabetes-Diagnose und die Sprache",
    titelB1: "Herr Demir — Diabetes und die Sprache",
    themen: ["kultursensible-kommunikation", "beratung", "gespraechsfuehrung", "kommunikationsmodelle"],
    spirale: 1,
    geschaetzteUE: 1,
    phasen: [
      CE04_SIT_DEMIR_WAHRNEHMEN,
      CE04_SIT_DEMIR_EINSCHAETZEN,
      CE04_SIT_DEMIR_INFORMIEREN,
      CE04_SIT_DEMIR_BERATEN,
      CE04_SIT_DEMIR_EVALUIEREN,
      CE04_SIT_DEMIR_DOKUMENTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
];
