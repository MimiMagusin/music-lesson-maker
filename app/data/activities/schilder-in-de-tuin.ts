import { Activity } from "@/app/ActivityTypes";

export const schilderInDeTuin: Activity = {
  title: "De Schilder",
  info: {
    minAge: 4,
    maxAge: 6,
    timeInMinutes: 10,
    theme: ["Herfst"],
    celebration: [],
  },
  steps: [
    "Vertel: Nou ik werd vanochtend wakker, en volgens mij is er een schilder in onze achtertuin geweest. Moet je kijken! Laat de kinderen een aantal gekleurde herfstbladeren zien",
    "Vraag: Wie heeft er ook van die mooie bladeren zien liggen?",
    "Ik heb er meteen een liedje bij bedacht, ik ga het voor jullie zingen. Nu is mijn vraag aan jullie, wat is de naam van de schilder? Als je het gehoord hebt zeg je niets, maar steek je stil je vinger op.",
    "Zing het lied",
    "Bespreek wat de naam van de schilder was  (Herfst) Laat de leerlingen de laatste regel van het lied zingen.",
    "Zing het eerste couplet van het lied terwijl je de bladeren uitdeelt. Elk kind krijgt twee gekleurde bladeren, ondertussen mogen de kinderen de laatste regel van het lied meezingen.",
    "Zing nog een aantal keer het eerste couplet, laat de kinderen als ze 'hun kleur' horen hun bladeren bewegen. De andere bladeren hangen stil.",
    "Vertel: er lagen ook een hoop takken op de grond! Volgens mij was er ook een sterke man, die aan de bomen heeft geschud, ik zal het eens laten zien",
    "Laat een kind staan als een boom. Geef een zacht duwtje, let op, wortels blijven stevig staan, alleen de takken bewegen!",
    "Zing het tweede couplet, laat de kinderen omstebeurt hun bladeren bewegen door als een 'sterke man' zachtjes een duwtje te geven.",
    "Zing het hele lied nog éénmaal met de bewegingen.",
  ],
  materials: [
    { text: "Er was een schilder - Kleuterwijs p80" },
    { text: "Twee gekleurde herfstbladeren voor ieder kind" },
  ],
  learningGoal: {
    goal: "De leerling kan het lied en spel 'Er was een schilder' uit het hoofd zingen en spelen",
    kvb: "betekenis",
    musicalDomain: "Zingen",
  },
};