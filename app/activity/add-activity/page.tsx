import React from "react";

import AddActivity from "@/components/AddActivity";
import { title as titleStyle } from "@/components/primitives";

export default function AddActivityPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className={titleStyle()}>Nieuwe Activiteit</h1>
      <AddActivity />
    </div>
  );
}
