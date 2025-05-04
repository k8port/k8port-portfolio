import React from "react";
import InnerLayout from "./InnerLayout";
import LayeredVector from "./background/LayeredVector";
import OpacityOverlay from "./background/OpacityOverlay";

export const LandingContainer = () => {
  const width = 1500;
  const height = 2400;
  const aspectRatio = width / height;
  
  return (

    // primary stacking context section
    <section className="@container">
      
      {/* layer 1: Base background layer */}
      <div className="absolute inset-0 z-0">
        <InnerLayout
          className="w-screen h-screen"
          imageFrameClassName={`flow-root aspect-[${aspectRatio}]`}
          imageSource="/images/nouveau-brain.png"
          imageAlt="Art Nouveau brain design"
          imageWidth={width}
          imageHeight={height} />
      
        {/* layer 2: Opacity gradient overlay */}
        <div className="absolute inset-0 z-10">
          <OpacityOverlay />
        </div>
      </div>


      {/* layer 3: Layered vector */}
          {/* <LayeredVector className={`
            h-dvh
            w-48
          `} /> */}
    </section>
  );
};
