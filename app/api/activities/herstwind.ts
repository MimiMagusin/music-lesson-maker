import { Activity } from "@/app/api/activities/ActivityTypes";

export const herfstWind: Activity = {
  title: "De wind",
  info: {
    minAge: 4,
    maxAge: 6,
    timeInMinutes: 10,
    theme: ["Herfst"],
    celebration: [],
  },
  steps: [
    "Hebben jullie ook die storm gehoord vannacht?",
    "Doe een aantal stemoefeningen met de wind: blazen, ssss, ffff, lang, kort, etc.",
    "Dirigeer de wind harder en zachter",
    "Wat gebeurt er met de blaadjes als de wind hard waait? Die dwarrelen op de grond",
    "Laat een blaadje op verschillende manieren naar de grond dwarrelen. Laat de leerlingen het blad volgen met hun stem",
    "Weet je welk instrument ook heel goed werkt met de wind? Een fluit! Speel het lied op de fluit, laat de leerlingen mee playbacken.",
    "Zing het lied 'De wind' hoe vaak hoor je de wind waaien? (3x)",
    "Luister, er gaat iets fout! Kan je horen wat? Blaas zacht bij 'Harder waait' en andersom",
    "Laat de kinderen meeblazen met de wind",
    "Ga staan als een rechte boom met je voeten alsof er wortels in de grond groeien en je armen als takken in de lucht",
    "Geef een zacht duwtje tegen de leerlingen om te kijken of ze goed stevig staan",
    "Laat de leerlingen meezingen en meezwaaien met hun takken (harder en zachter) met het lied bij de laatste regel laten de leerlingen hun armen zakken",
    "Zing het lied drie keer, de eerste keer met de bewegingen, de tweede keer vallen de bomen om, de derde keer zingen de leerlingen het lied liggend op de grond. Ze mogen hun 'blaadjes' aan het eind omhoog blazen.",
  ],
  materials: [{ text: "De wind - Kleuterwijs p81" }],
  learningGoal: {
    goal: "De leerling kan",
    kvb: "betekenis",
    musicalDomain: "Zingen",
  },
};
