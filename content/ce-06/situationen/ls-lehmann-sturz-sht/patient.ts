// CE-06 Situation „Frau Lehmann — Sturz mit Kopfverletzung im Pflegeheim" — Patient
// SituationsTyp: akutsituation. Showcase: Erste Hilfe bei Sturz/Wunde/Blutung (LE1-K1)
// unter erschwerten Bedingungen: Antikoagulation, Demenz, Nachtdienst, FeM-Rechtsfrage.

import type { PatientBeschreibung } from "../../../_types";

export const CE06_SIT_LEHMANN_PATIENT: PatientBeschreibung = {
  patientId: "pat-lehmann-sht",
  name: "Anneliese Lehmann",
  alter: 86,
  geschlecht: "w",
  diagnosen: ["Sturz mit Kopfplatzwunde (Verdacht Schädel-Hirn-Trauma)"],
  nebendiagnosen: [
    "mittelschwere vaskuläre Demenz",
    "Osteoporose",
    "Vorhofflimmern unter Apixaban (orales Antikoagulans)",
    "drei Stürze in den letzten sechs Monaten",
  ],
  setting: "Vollstationäres Pflegeheim, Bewohnerzimmer, 02:45 Uhr nachts — Nachtdienst mit 2 Pflegekräften für 48 Bewohner",
  hintergrund:
    "Frau Lehmann war Verkäuferin. Seit zwei Jahren lebt sie im Heim, die Demenz schreitet langsam voran. Nachts ist sie oft unruhig und ruft nach ihrer Mutter. In dieser Nacht hörst du im Flur einen dumpfen Schlag; als du das Zimmer betrittst, liegt sie auf dem Boden neben dem Bett und blutet an der rechten Stirn. Ihre Tochter Gudrun hat die Vorsorgevollmacht und möchte über jedes Ereignis informiert werden.",
  hintergrundB1:
    "Frau Lehmann war Verkäuferin und lebt seit zwei Jahren im Heim. Ihre Demenz wird langsam schlimmer. Nachts ist sie oft unruhig und ruft nach ihrer Mutter. In dieser Nacht hörst du einen dumpfen Schlag. Du gehst ins Zimmer: Sie liegt auf dem Boden neben dem Bett und blutet an der Stirn. Ihre Tochter Gudrun hat die Vollmacht und will immer informiert werden.",
  persoenlichkeit:
    "Durch die Demenz zeitlich und örtlich oft nicht orientiert; sie erkennt die Situation nicht und kann erschrocken oder abwehrend reagieren. Sie ist möglicherweise schwerhörig — fehlende Antwort heißt nicht automatisch Bewusstlosigkeit. In Stresssituationen wehrt sie Berührung ab und will aufstehen.",
  persoenlichkeitB1:
    "Wegen der Demenz weiß sie oft nicht, wo sie ist. Sie versteht die Situation nicht und reagiert erschrocken oder abwehrend. Sie hört vielleicht schlecht — keine Antwort heißt nicht sofort Bewusstlosigkeit. Bei Stress wehrt sie Berührung ab und will aufstehen.",
  zitate: [
    "Ich wollte nur... Wo ist Mutti? Lasst mich los!",
  ],
};
