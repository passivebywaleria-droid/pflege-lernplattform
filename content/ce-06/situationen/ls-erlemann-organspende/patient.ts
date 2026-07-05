// CE-06 Situation „Organspende & Hirntod — ein junger Mensch auf der Intensivstation" — Patient
// SituationsTyp: akutsituation (Phasen-Set erkennen→alarmieren→erstmassnahmen→uebergeben→reflektieren,
// Titel tragen die eigentliche Bedeutung). Showcase LE5: TPG/Hirntod (K1/W4), Hirntod-Feststellung (W3/W4),
// Organspende-Ablauf/Entscheidungslösung (W3), Organmangel/häufige Organe (W1/W2), Angehörigenbegleitung (E2),
// kulturelle Bedeutung von Herz und Hirn (E1).

import type { PatientBeschreibung } from "../../../_types";

export const CE06_SIT_ERLEMANN_PATIENT: PatientBeschreibung = {
  patientId: "pat-erlemann-hirntod",
  name: "Tobias Erlemann",
  alter: 24,
  geschlecht: "m",
  diagnosen: [
    "Schweres Schädel-Hirn-Trauma nach Motorradunfall mit ausgedehnter Hirnblutung",
    "festgestellter Gesamthirntod (irreversibler Hirnfunktionsausfall)",
  ],
  nebendiagnosen: ["zuvor gesund", "kein Organspendeausweis auffindbar"],
  setting:
    "Interdisziplinäre Intensivstation, Einzelzimmer. Tobias wird beatmet, der Kreislauf wird intensivmedizinisch aufrechterhalten. Nach zwei unabhängigen ärztlichen Untersuchungen ist der Gesamthirntod festgestellt und dokumentiert. Seine Eltern sind an seinem Bett.",
  hintergrund:
    "Tobias Erlemann, 24, war Auszubildender und leidenschaftlicher Motorradfahrer. Vor drei Tagen verunglückte er schwer; eine ausgedehnte Hirnblutung führte trotz Operation zum irreversiblen Ausfall aller Hirnfunktionen. Zwei voneinander unabhängige Ärzte haben den Gesamthirntod festgestellt. Sein Körper wird auf der Intensivstation weiter beatmet, Herz und Kreislauf laufen mit Unterstützung — für seine Eltern ein zutiefst verwirrender Anblick: „Er ist doch noch warm, sein Herz schlägt doch.“ Ein Organspendeausweis wurde nicht gefunden; nach der Entscheidungslösung müssen nun die Eltern nach seinem mutmaßlichen Willen entscheiden. Der behandelnde Arzt und die/der Transplantationsbeauftragte führen das Gespräch; du begleitest die Familie pflegerisch.",
  hintergrundB1:
    "Tobias Erlemann, 24, war Azubi und fuhr gern Motorrad. Vor drei Tagen hatte er einen schweren Unfall. Eine große Hirnblutung führte zum Ausfall aller Hirnfunktionen. Zwei unabhängige Ärzte haben den Gesamthirntod festgestellt. Sein Körper wird auf der Intensivstation weiter beatmet, das Herz schlägt mit Unterstützung. Für die Eltern ist das sehr verwirrend: „Er ist doch noch warm.“ Es gibt keinen Organspendeausweis. Nach der Entscheidungslösung müssen die Eltern nach seinem mutmaßlichen Willen entscheiden. Der Arzt führt das Gespräch, du begleitest die Familie.",
  persoenlichkeit:
    "Tobias selbst ist hirntot — die Situation dreht sich um seine trauernden Eltern. Die Mutter (Sabine) ist wie erstarrt, kann den Widerspruch zwischen „warmem, atmenden Körper“ und „hirntot“ kaum fassen. Der Vater (Reinhard) sucht Halt in Fragen und Fakten. Beide brauchen Zeit, ehrliche Information, Raum zum Abschiednehmen und das Gefühl, nichts überstürzen zu müssen.",
  persoenlichkeitB1:
    "Tobias ist hirntot. Es geht um seine trauernden Eltern. Die Mutter (Sabine) ist wie erstarrt und versteht kaum, dass er trotz warmem Körper hirntot ist. Der Vater (Reinhard) stellt viele Fragen. Beide brauchen Zeit, ehrliche Information und Raum zum Abschiednehmen.",
  zitate: [
    "Er ist doch noch warm, sein Herz schlägt doch — wie kann er da tot sein?",
    "Wir wissen gar nicht, was Tobias gewollt hätte. Wir haben nie darüber gesprochen.",
  ],
};
