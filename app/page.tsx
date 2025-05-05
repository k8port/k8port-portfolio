import React from "react";
import { LandingContainer } from "./ui/background/LandingContainer";

export default function HomePage() {
  return (
      <div className={`bg-brand-primary overflow-y-scroll`}>
      
        <LandingContainer className="max-w-screen px-0" />
      </div>
  );
}

