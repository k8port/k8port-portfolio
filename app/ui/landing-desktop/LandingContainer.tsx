import React from "react";
import { LeftSideLayout } from "./LeftSideLayout";
import { RightSideLayout } from "./RightSideLayout";

export const LandingContainer = () => {
  const width = 737;
  const height = 1196;
  const aspectRatio = width / height;
  return (
    <section className="min-h-screen flex flex-col md:flex-row gap-0 md:gap-[2vw]">
        <LeftSideLayout
          className="w-full md:w-3/5"
          imageFrameClassName="flow-root aspect-ratio-[11/13]"
          imageSource="/images/nouveau-brain.png"
          imageAlt="Art Nouveau brain design"
          imageWidth={width}
          imageHeight={height} />
      <RightSideLayout className={`w-full md:w-2/5 relative`} />
    </section>
  );
};
