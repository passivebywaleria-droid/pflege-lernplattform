// CE-06 Situation „Herr Ríos — Kollaps während der Dialyse" — Patient
// SituationsTyp: akutsituation. Showcase: neurologische Akutsituation DIAGNOSTIZIEREN
// (Differentialdiagnose Synkope) + Erste Hilfe einleiten unter Kompetenzgrenzen (LE1-K3).

import type { PatientBeschreibung } from "../../../_types";

export const CE06_SIT_RIOS_PATIENT: PatientBeschreibung = {
  patientId: "pat-rios-synkope",
  name: "Miguel Ríos",
  alter: 63,
  geschlecht: "m",
  diagnosen: ["chronische Niereninsuffizienz Stadium 5, Hämodialyse 3×/Woche"],
  nebendiagnosen: [
    "Typ-2-Diabetes mellitus unter Insulin",
    "diabetische Nephropathie",
    "arterielle Hypertonie",
    "arteriovenöser Shunt linker Unterarm",
  ],
  setting: "Dialysezentrum, 2. Stunde der Hämodialyse, 14:15 Uhr — 5 weitere Patienten, 2 Pflegekräfte",
  hintergrund:
    "Herr Ríos kam vor über 40 Jahren aus Chile nach Deutschland und war Bauleiter. Seit drei Jahren ist er dialysepflichtig und kommt dreimal pro Woche. Heute Morgen hatte er wenig Appetit und hat kaum gefrühstückt — sein Insulin hat er wie gewohnt gespritzt. In der zweiten Dialysestunde wird er plötzlich blass, verdreht die Augen und reagiert nicht mehr auf Ansprache.",
  hintergrundB1:
    "Herr Ríos kam vor über 40 Jahren aus Chile nach Deutschland. Seit drei Jahren braucht er dreimal pro Woche Dialyse. Heute hatte er wenig Appetit und kaum gefrühstückt. Sein Insulin hat er trotzdem normal gespritzt. In der zweiten Dialysestunde wird er plötzlich blass und reagiert nicht mehr.",
  persoenlichkeit:
    "Rational, mit trockenem Humor über seine Dialyse. Er kennt seinen Körper gut, spielt Beschwerden aber gern herunter ('wird schon wieder'). Seine Frau Carmen wartet wie immer im Warteraum. Vor dem Ereignis sagte er beiläufig, er fühle sich 'komisch' — ein Frühwarnzeichen, das leicht übergangen wird.",
  persoenlichkeitB1:
    "Er denkt sachlich und macht Witze über seine Dialyse. Beschwerden spielt er gern herunter ('wird schon wieder'). Seine Frau Carmen wartet draußen. Vorher sagte er, er fühle sich 'komisch' — ein wichtiges Warnzeichen.",
  zitate: [
    "Heute fühle ich mich komisch. Aber wahrscheinlich das Wetter.",
  ],
};
