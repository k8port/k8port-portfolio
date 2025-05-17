import React from "react";
import Landing from "./ui/landing/LandingContent";
import { LandingContainer } from "./ui/landing/LandingContainer";


export default function HomePage() {
  return (
    <>
        <section id="landing" className="relative h-screen w-full overflow-hidden">
          <LandingContainer />
        </section>
    </>
  );
}

