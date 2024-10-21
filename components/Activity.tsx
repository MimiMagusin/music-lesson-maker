import { Link } from "@nextui-org/link";

import ActivityInfoCards from "./ActivityInfo";

import { subtitle } from "@/components/primitives";
import {
  ActivityInfo,
  ActivityMaterial,
  LearningGoal,
} from "@/app/api/activities/ActivityTypes";

export type ActivityProps = {
  title: string;
  info: ActivityInfo;
  steps: string[];
  materials?: ActivityMaterial[];
  learningGoal: LearningGoal;
};

function ShowMaterials(materials: ActivityMaterial[]) {
  return (
    <div className="basis-96 flex flex-col gap-4">
      <h3 className="font-bold">Nodig</h3>
      <ol className="list-disc list-outside">
        {materials.map((material, index) => (
          <li key={`${material.text}-${index}`}>
            {material.href ? (
              <Link href={material.href}>{material.text}</Link>
            ) : (
              <>{material.text}</>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Activity({
  title,
  info,
  steps,
  materials,
  learningGoal,
}: ActivityProps) {
  return (
    <div className="flex flex-col gap-4">
      <ActivityInfoCards info={info} />
      <h2 className={`${subtitle()} mt-8`}>{title}</h2>
      <h3>
        <b>Leerdoel:</b> {learningGoal.goal}
      </h3>
      <div className="flex flex-row gap-16 mt-8">
        <div className="flex-grow">
          <div>
            <h3 className="font-bold">Activiteit</h3>
            <ol className="list-decimal list-outside max-w-3xl">
              {steps.map((step) => (
                <li key={step} className="m-4">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
        {materials && materials.length > 0 && ShowMaterials(materials)}
      </div>
    </div>
  );
}
