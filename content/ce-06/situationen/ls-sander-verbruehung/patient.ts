// CE-06 Situation „Frau Sander — Verbrühung im ambulanten Pflegebesuch“ — Patient
// SituationsTyp: akutsituation. Showcase: Erste Hilfe bei Verbrennung/Verbrühung (LE1-K1-Rest)
// + Spektrum-Krone Verätzung/Hitze/Kälte. Anti-Pattern-Fokus: Hausmittel (Mehl/Butter), Blasen öffnen.

import type { PatientBeschreibung } from "../../../_types";

export const CE06_SIT_SANDER_PATIENT: PatientBeschreibung = {
  patientId: "pat-sander-verbruehung",
  name: "Renate Sander",
  alter: 74,
  geschlecht: "w",
  diagnosen: ["Verbrühung 2. Grades an rechtem Unterarm und Oberschenkel (kochendes Wasser)"],
  nebendiagnosen: [
    "arterielle Hypertonie",
    "Coxarthrose rechts (geht am Rollator)",
    "lebt allein, ambulante Pflege 1x täglich",
  ],
  setting: "Häuslichkeit, morgendlicher ambulanter Pflegebesuch — Küche/Wohnzimmer; du bist zunächst allein mit ihr, eine Nachbarin kommt dazu",
  hintergrund:
    "Frau Sander lebt allein in ihrer Wohnung und wird einmal täglich ambulant versorgt. Als du zum Morgenbesuch kommst, ist ihr beim Teekochen die Kanne mit kochendem Wasser abgerutscht — sie hat sich den rechten Unterarm und einen Streifen am Oberschenkel verbrüht. Auf dem Unterarm bilden sich Brandblasen, sie hat starke Schmerzen. Eine besorgte Nachbarin ist herbeigeeilt und will „schnell Mehl draufstreuen, das hat früher immer geholfen“.",
  hintergrundB1:
    "Frau Sander lebt allein und bekommt einmal am Tag ambulante Pflege. Beim Teekochen ist ihr kochendes Wasser über den rechten Unterarm und den Oberschenkel gelaufen. Am Unterarm bilden sich Blasen, sie hat starke Schmerzen. Eine Nachbarin will schnell Mehl darauf streuen.",
  persoenlichkeit:
    "Klar orientiert, aber verängstigt und schmerzgeplagt. Sie vertraut alten Hausmitteln („das hat meine Mutter immer gemacht“) und muss von falschen Sofortmaßnahmen ruhig, aber bestimmt abgehalten werden.",
  persoenlichkeitB1:
    "Sie ist wach und weiß, wo sie ist, aber sie hat Angst und starke Schmerzen. Sie glaubt an alte Hausmittel. Du musst sie ruhig, aber klar von falschen Maßnahmen abhalten.",
  zitate: [
    "Tun Sie doch was — streuen Sie Mehl drauf, das kühlt doch!",
  ],
};
