// CE-06 Situation „Nächtlicher Brand im Pflegeheim — Katastrophe, Triage & Krisenintervention" — Patient
// SituationsTyp: akutsituation. Showcase LE4: Großschadensereignis/MANV (W1), Anlässe→Maßnahmen (K1),
// Handeln bei Brand nach Notfallplan/Brandschutzordnung (K2), Krisenintervention (K3), eigenes Funktionieren/
// Eigenschutz (E1), Supervision (E2). Ankerperson: evakuierte, panische Bewohnerin Ilse Radtke.

import type { PatientBeschreibung } from "../../../_types";

export const CE06_SIT_RADTKE_PATIENT: PatientBeschreibung = {
  patientId: "pat-radtke-brand",
  name: "Ilse Radtke",
  alter: 84,
  geschlecht: "w",
  diagnosen: ["Beginnende Demenz", "arterielle Hypertonie"],
  nebendiagnosen: [
    "eingeschränkte Mobilität (Rollator)",
    "Schwerhörigkeit beidseits",
  ],
  setting:
    "Vollstationäres Pflegeheim, Wohnbereich 2, Nachtdienst gegen 02:10 Uhr. In einem Bewohnerzimmer im Nachbarflügel ist ein Feuer ausgebrochen, der Rauchmelder hat ausgelöst, der Brandalarm läuft. Mehrere Bewohner müssen evakuiert werden.",
  hintergrund:
    "Ilse Radtke war Grundschullehrerin und lebt seit zwei Jahren im Heim. In der Nacht schrillt der Brandalarm; im Nachbarflügel brennt es. Du hast Nachtdienst und musst nach dem Notfallplan der Einrichtung handeln: alarmieren, Bewohner in Sicherheit bringen, dich selbst schützen. Frau Radtke wird aus ihrem Zimmer evakuiert — sie ist durch die Demenz und die Schwerhörigkeit besonders verängstigt und begreift die Situation kaum. Draußen sammeln sich weitere Bewohner mit unterschiedlichen Verletzungen; die Feuerwehr ist alarmiert und im Anmarsch.",
  hintergrundB1:
    "Ilse Radtke war Lehrerin und lebt seit zwei Jahren im Heim. Nachts schrillt der Brandalarm — im Nachbarflügel brennt es. Du hast Nachtdienst. Du musst nach dem Notfallplan handeln: alarmieren, Bewohner retten, dich selbst schützen. Frau Radtke wird aus ihrem Zimmer gebracht. Durch die Demenz und die Schwerhörigkeit hat sie große Angst und versteht kaum, was passiert. Draußen warten weitere Bewohner mit Verletzungen. Die Feuerwehr kommt gleich.",
  persoenlichkeit:
    "Freundlich, aber durch die Demenz schnell überfordert und orientierungslos. In der lauten, hellen Ausnahmesituation gerät sie in Panik, ruft nach ihrer (längst verstorbenen) Schwester und will zurück in ihr Zimmer. Sie braucht Schutz, Ruhe, Ansprache auf Augenhöhe und einfache, klare Orientierung.",
  persoenlichkeitB1:
    "Sie ist freundlich, aber durch die Demenz schnell überfordert. In der lauten Situation bekommt sie Panik, ruft nach ihrer Schwester und will zurück ins Zimmer. Sie braucht Schutz, Ruhe und einfache, klare Worte auf Augenhöhe.",
  zitate: [
    "Wo ist meine Schwester? Ich muss zurück in mein Zimmer!",
    "Was ist denn hier los? Ich verstehe das alles nicht.",
  ],
};
