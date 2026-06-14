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

import {
  CE04_SIT_WAGNER_PATIENT,
  CE04_SIT_WAGNER_WAHRNEHMEN,
  CE04_SIT_WAGNER_EINSCHAETZEN,
  CE04_SIT_WAGNER_INFORMIEREN,
  CE04_SIT_WAGNER_BERATEN,
  CE04_SIT_WAGNER_EVALUIEREN,
  CE04_SIT_WAGNER_DOKUMENTIEREN,
} from "./situationen/ls-wagner-konflikt";

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
  {
    situationId: "ls-wagner-konflikt",
    ceId: "ce-04",
    situationsTyp: "beratung",
    patient: CE04_SIT_WAGNER_PATIENT,
    titel: "Der wütende Sohn — Konflikt auf dem Flur",
    titelB1: "Der wütende Sohn — Streit auf dem Flur",
    themen: ["konflikt-deeskalation", "gespraechsfuehrung", "kommunikationsmodelle"],
    spirale: 1,
    geschaetzteUE: 1,
    phasen: [
      CE04_SIT_WAGNER_WAHRNEHMEN,
      CE04_SIT_WAGNER_EINSCHAETZEN,
      CE04_SIT_WAGNER_INFORMIEREN,
      CE04_SIT_WAGNER_BERATEN,
      CE04_SIT_WAGNER_EVALUIEREN,
      CE04_SIT_WAGNER_DOKUMENTIEREN,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  },
];
