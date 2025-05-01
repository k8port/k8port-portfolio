import React from "react";
import { LandingContainer } from "./ui/landing-desktop/LandingContainer";

export default function HomePage() {
  return (
    <div className="
      w-full mx-0
      min-h-screen
      overflow-x-hidden
      border border-solid 
      border-greengrays-pastelgray
      bg-brand-primary">
        <div className="max-w-[2000px]"> 
            <LandingContainer />
            {/* <TechnicalSkill /> */}
        </div>

        {/* <SkillsChart /> */}
    </div>
  );
}

