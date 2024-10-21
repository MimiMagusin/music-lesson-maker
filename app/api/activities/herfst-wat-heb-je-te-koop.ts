import { Activity } from "@/app/api/activities/ActivityTypes";

export const herfstWatHebJeTeKoop: Activity = {
  title: "Herfst, wat heb je te koop?",
  info: {
    minAge: 4,
    maxAge: 6,
    timeInMinutes: 15,
    theme: ["Herfst"],
    celebration: [],
  },
  steps: [
    "Vertel: Kijk eens wat ik allemaal in het park gevonden heb! Laat de verschillende herfstmaterialen zien",
    "Maak geluid met de materialen. Kunnen de leerlingen raden wat ze horen zonder dat ze zien wat geluid maakt?",
    "Laat ook een aantal leerlingen geluiden maken",
    "Zing het lied 'Hersfst, herfst, wat heb je te koop', tik op de maat mee met twee kastanjes. De leerlingen mogen met hun 'denkkastanjes' meeklappen. Herhaal een aantal keer",
    "Laat de leerlingen mee zingen",
    "Dit ritme past heel goed bij 'Herfst, herfst', luister maar (tik de kwartnoten op de darbuka). Laat de leerlingen meedoen op hun knieën",
    "Ik heb ook een mooie bij 'honderdduizend bladeren' tik de achtste noten op de darbuka. Laat de leerlingen meedoen",
    "Wissel de beide ritmes af. Welke speel ik? Ga staan voor 'Herfst, herfst', zitten voor 'honderduizend bladeren'",
    "Laat een paar leerlingen 'herfst, 'herfst' op een rasp of guiro spelen en 'honderdduizend bladeren' op de djembe/darbuka. De andere kinderen doen mee op hun benen",
    "Ben eerst zelf dirigent, laat dan een leerling dirigent zijn.",
    "Zing het lied en laat de leerlingen op het goede moment spelen. Geef ondertussen de instrumenten door. De rest zingt",
    "Voeg 'Op een hoop' (op de tamboerijn) en/of wat heb je te koop (maracas) toe",
  ],
  materials: [
    {
      text: "Herfst, herfst, wat heb je te koop?",
      href: "https://www.kinderliedjes.info/herfst-wat-heb-je-te-koop/",
    },
    {
      text: "Verschillende herfstmaterialen (kastanjes, eikeljes, blaadjes, takken, etc.",
    },
    {
      text: "Darbuka's/Djembé's, guiro's, tamboerijnen, maraca's",
    },
  ],
  learningGoal: {
    goal: "De leerling kan het lied 'Herfst, herfst, wat heb je te koop' ritmisch begeleiden",
    kvb: "klank",
    musicalDomain: "Spelen",
  },
};
