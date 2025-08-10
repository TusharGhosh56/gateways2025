import React from "react";
import { Timeline } from "./ui/timeline";
import registrationSteps from "@/store/registration";

const RegistrationProcessV2 = () => {
  const data = registrationSteps.map((step) => ({
    title: step.title,
    content: (
      <div className="space-y-4">
        <p className="font-mono text-sm leading-relaxed text-gray-300 md:text-base">
          {step.description}
        </p>
      </div>
    ),
  }));

  return (
    <div>
      <Timeline data={data} />
    </div>
  );
};

export default RegistrationProcessV2;
