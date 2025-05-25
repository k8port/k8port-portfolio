'use client'

import React, { useRef } from "react";
import Image from "next/image";
import RainbowGradientOverlay from "../background/RainboxGradientOverlay";
import OpacityOverlay from "../background/OpacityOverlay";
import LandingContent from "./LandingContent";
import ScrollingBanner from "../background/ScrollingBanner";


export const LandingContainer = () => {
  const width = 2400;
  const height = 2400;
  const aspectRatio = width / height;
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Image 
        src="/images/nouveaubrain.png" 
        alt="Art Nouveau brain design" 
        width={width} 
        height={height} 
        className={`
          absolute inset-0
          aspect-[1/2]
          sm:aspect-[${aspectRatio}]
          md:aspect-4/5
          lg:aspect-5/6
          xl:aspect-6/7
          object-cover z-0
          -translate-y-12
          md:-translate-y-16
          lg:-translate-y-32
          xl:-translate-y-48
          max-w-full
          max-h-full
        `}
      />

      {/* layer 2: Gradient overlays */}
      <RainbowGradientOverlay className="absolute inset-0" innerClassName="mix-blend-exclusion" />
      <RainbowGradientOverlay className="absolute inset-0" innerClassName="mix-blend-hard-light" />

      {/* layer 3: Animated Opacity Layer */}
      <OpacityOverlay ref={overlayRef} className="absolute inset-0 transition-opacity duration-300 z-30" />

      {/* layer 4: Scrolling Banner */}
      <ScrollingBanner className="relative z-50" />

      {/* layer 5: Landing Content */}
      <LandingContent ref={scrollRef} className={`relative z-60`} />
    </div>
  );
};
