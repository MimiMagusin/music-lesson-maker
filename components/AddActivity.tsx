// "use client";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditor from "react-froala-wysiwyg";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";

import AddLearningGoal from "./AddLearningGoal";
import AddGeneralInformation from "./AddGeneralInfo";

function Content({ stepNumber }: { stepNumber: number }) {
  if (stepNumber === 3) return <AddGeneralInformation />;
  if (stepNumber === 2)
    return (
      <>
        <h3>Stappen</h3>
        <FroalaEditor tag="textarea" />
      </>
    );
  if (stepNumber === 1) return <AddLearningGoal />;

  return <Input label="Titel van de activiteit" />;
}

function NextButton({
  stepNumber,
  onClick,
}: {
  stepNumber: number;
  onClick: (stepNumber: number) => any;
}) {
  if (stepNumber === 3)
    return <Button onClick={() => onClick(0)}>Opslaan</Button>;

  return <Button onClick={() => onClick(stepNumber + 1)}>Volgende</Button>;
}

export default function AddActivity({}) {
  const [stepNumber, setStepNumber] = useState(0);

  return (
    <div className="max-w-3xl flex gap-8 flex-col">
      <Divider />
      <Content stepNumber={stepNumber} />
      <Divider />
      <Button
        disabled={stepNumber === 0}
        onClick={() => setStepNumber((nr) => nr - 1)}
      >
        Vorige
      </Button>
      <NextButton stepNumber={stepNumber} onClick={setStepNumber} />
    </div>
  );
}
