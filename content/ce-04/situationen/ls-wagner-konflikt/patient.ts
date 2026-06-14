// CE-04 Situation „Der wütende Sohn" — Patient
// SituationsTyp: beratung. Showcase: Konflikt & Deeskalation + Gesprächsführung + Kommunikationsmodelle.

import type { PatientBeschreibung } from "../../../_types";

export const CE04_SIT_WAGNER_PATIENT: PatientBeschreibung = {
  patientId: "pat-wagner",
  name: "Erika Wagner",
  alter: 81,
  geschlecht: "w",
  diagnosen: ["Z.n. Schenkelhalsfraktur (operativ versorgt)"],
  nebendiagnosen: ["beginnende Demenz", "arterielle Hypertonie"],
  setting: "Unfallchirurgische Station",
  hintergrund:
    "Frau Wagner ist nach einer Hüft-OP auf Station. Ihr Sohn Thomas (54) besucht sie täglich. Er ist berufstätig, kümmert sich zusätzlich um den Haushalt seiner Mutter und ist seit Wochen erschöpft und in Sorge. Heute findet er seine Mutter im durchnässten Bett vor, weil die Klingel außer Reichweite lag — und platzt heraus.",
  hintergrundB1:
    "Frau Wagner ist nach einer Hüft-OP auf Station. Ihr Sohn Thomas (54) kommt jeden Tag. Er arbeitet, kümmert sich um den Haushalt der Mutter und ist seit Wochen erschöpft und in Sorge. Heute findet er das Bett nass vor, weil die Klingel zu weit weg lag — und wird laut.",
  persoenlichkeit:
    "Frau Wagner ist freundlich und etwas verwirrt nach der OP. Der Konflikt entsteht nicht mit ihr, sondern mit ihrem Sohn Thomas: erschöpft, übernächtigt, voller Sorge und Schuldgefühle — seine Wut ist Ausdruck von Überforderung, nicht von Bösartigkeit.",
  persoenlichkeitB1:
    "Frau Wagner ist freundlich und nach der OP etwas verwirrt. Der Streit ist nicht mit ihr, sondern mit dem Sohn Thomas: erschöpft, übermüdet, voller Sorge. Seine Wut kommt von Überforderung, nicht von Bosheit.",
  zitate: [
    "(Sohn) Hier kümmert sich ja keiner! Sehen Sie sich das an!",
  ],
};
