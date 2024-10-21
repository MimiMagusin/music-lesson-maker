import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { activities } from "./api/activities/activities";

import Activity, { ActivityProps } from "@/components/Activity";
import {
  title as titleStyle,
  subtitle as subtitleStyle,
} from "@/components/primitives";

export default function Home() {
  const renderActivities = (activities: ActivityProps[]) =>
    activities.map((activity, index) => {
      const { title, info, steps, materials, learningGoal } = activity;

      return (
        <div key={`${title}-${index}`} className="flex flex-col gap-12">
          <hr />
          <Activity
            info={info}
            learningGoal={learningGoal}
            materials={materials}
            steps={steps}
            title={title}
          />
        </div>
      );
    });

  return (
    <div className="flex flex-col gap-12">
      <h1 className={titleStyle()}>Muzieklessenmaker</h1>
      <h2 className={subtitleStyle()}>
        Alle Activiteiten: {activities.length}
      </h2>
      {renderActivities(activities)}
    </div>
  );
}
