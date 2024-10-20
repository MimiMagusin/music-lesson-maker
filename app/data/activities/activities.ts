// {
//     title: "",
//     info: {
//       minAge: 4,
//       maxAge: 6,
//       timeInMinutes: 15,
//       theme: [],
//       celebration: [],
//     },
//     steps: [
//       "",
//     ],
//     materials: [
//       {
//         text: "",
//         href: "",
//       },
//     ],
//     learningGoal: {
//       goal: "De leerling kan",
//       kvb: "klank",
//       musicalDomain: "Spelen",
//     },
//   },

import { Activity } from "../../ActivityTypes";
import { vopaBasics } from "../courses/vopa-basics";
import { herfstWatHebJeTeKoop } from "./herfst-wat-heb-je-te-koop";
import { schilderInDeTuin } from "./schilder-in-de-tuin";
import { herfstWind } from "./herstwind";

export const activities: Activity[] = [
  schilderInDeTuin,
  herfstWind,
  herfstWatHebJeTeKoop,
  ...vopaBasics.activities,
];
