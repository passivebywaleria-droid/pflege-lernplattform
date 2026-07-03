// CE-06 Situation „Frau Yıldız — akuter Thoraxschmerz (Verdacht Herzinfarkt)" — Patient
// SituationsTyp: akutsituation. Showcase (LE2): akutes Koronarsyndrom erkennen (ACS vs. Angina
// pectoris), Erstmaßnahmen/Lagerung, Monitoring, Medikamente nur ärztlich, kardiogener Schock.

import type { PatientBeschreibung } from "../../../_types";

export const CE06_SIT_YILDIZ_PATIENT: PatientBeschreibung = {
  patientId: "pat-yildiz-acs",
  name: "Şengül Yıldız",
  alter: 62,
  geschlecht: "w",
  diagnosen: ["akuter Thoraxschmerz, Verdacht auf akutes Koronarsyndrom"],
  nebendiagnosen: [
    "bekannte koronare Herzkrankheit mit stabiler Angina pectoris",
    "Typ-2-Diabetes mellitus",
    "arterielle Hypertonie",
  ],
  setting: "Internistische Station, Patientenzimmer, 19:40 Uhr — du bist im Spätdienst als Erste bei ihr",
  hintergrund:
    "Frau Yıldız kam vor 40 Jahren aus der Türkei nach Deutschland, war Näherin. Sie kennt ihre Angina pectoris seit Jahren und hat ein Nitrospray, das bei Belastungsschmerz sonst rasch hilft. Am frühen Abend bekommt sie erneut Brustschmerzen — sie nimmt an, es sei wie immer. Doch dieses Mal wird der Schmerz stärker, strahlt in den linken Arm, sie schwitzt kalt und wird unruhig. Nach Ruhe und ihrem Nitrospray bessert es sich NICHT.",
  hintergrundB1:
    "Frau Yıldız kam vor 40 Jahren aus der Türkei. Sie kennt ihre Angina pectoris seit Jahren und hat ein Nitrospray, das sonst schnell hilft. Am Abend bekommt sie wieder Brustschmerzen. Sie denkt, es ist wie immer. Aber diesmal wird der Schmerz stärker, strahlt in den linken Arm, sie schwitzt kalt. Ruhe und Nitrospray helfen diesmal NICHT.",
  persoenlichkeit:
    "Zurückhaltend, will keine Umstände machen und spielt Beschwerden herunter ('das kenne ich schon'). Genau das ist hier gefährlich: Sie deutet die neuen, stärkeren Zeichen als 'ihre normale Angina'. Als Diabetikerin kann ihr Schmerzempfinden zudem verändert sein.",
  persoenlichkeitB1:
    "Zurückhaltend, sie will keine Umstände machen und sagt oft 'das kenne ich schon'. Das ist hier gefährlich, weil sie die neuen, stärkeren Zeichen für 'ihre normale Angina' hält. Als Diabetikerin spürt sie Schmerz vielleicht anders.",
  zitate: [
    "Das kenne ich schon, das ist meine Angina. Gleich geht es wieder weg.",
  ],
};
