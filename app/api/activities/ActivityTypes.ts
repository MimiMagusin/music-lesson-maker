export type Theme =
  | "Herfst"
  | "Winter"
  | "Lente"
  | "Zomer"
  | "Dieren"
  | "Ridders en kastelen";

export type Celebration =
  | "Michaël"
  | "Boekenweek"
  | "Sint Maarten"
  | "Sinterklaas";

export type ActivityInfo = {
  minAge?: number;
  maxAge?: number;
  timeInMinutes?: number;
  theme?: Theme[];
  celebration?: string[];
};


export type ActivityMaterial = {
  text: string;
  href?: string;
};

export type MusicalDomain =
  | "Zingen"
  | "Spelen"
  | "Bewegen"
  | "Luisteren"
  | "Lezen en Noteren"
  | "Componeren/Improviseren";

export type LearningGoal = {
  musicalDomain: MusicalDomain;
  kvb: "klank" | "vorm" | "betekenis";
  goal: string;
};


export type Course = {
  id: string;
  title: string;
  description: string;
  topics: string[];

  activities: Activity[];
};


export type Activity = {
  title: string;
  info: ActivityInfo;
  steps: string[];
  materials?: ActivityMaterial[];
  learningGoal: LearningGoal;
  series?: {
    course: Course;
    /** Index + 1course activities array*/
    lessonNumber: number;
    /** Length course activities array */
    totalNumberOfLessons: number;
  }
};
