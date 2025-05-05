import React from "react"; import InnerLayout from "./InnerLayout";
import LayeredVector from "./LayeredVector";
import OpacityOverlay from "./OpacityOverlay";

interface LandingContainerProps {
  className?: string;
}

export const LandingContainer = ({ className }: LandingContainerProps) => {
  const width = 2400;
  const height = 2400;
  const aspectRatio = width / height;
  
  return (

    <section className={`@container/landing mx-auto w-full ${className}`}>
      {/* layer 1: Base background layer */}
      <div className="absolute inset-0 -top-12 z-0">
        <InnerLayout
          className="object-contain"
          imageFrameClassName={`aspect-[${aspectRatio}]`}
          imageSource="/images/nouveaubrain.png"
          imageAlt="Art Nouveau brain design"
          imageWidth={width}
          imageHeight={height} />
      </div>
    </section>
  );
};
