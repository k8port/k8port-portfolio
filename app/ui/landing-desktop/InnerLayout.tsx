import React from "react";
import { ImageFrame } from "./ImageFrame";
import RainbowGradientOverlay from "./background/RainboxGradientOverlay";

interface InnerLayoutProps {
  className: string;
  imageFrameClassName: string;
  imageSource: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export default function InnerLayout({
  className,
  imageFrameClassName,
  imageSource,
  imageAlt,
  imageWidth,
  imageHeight,
}: InnerLayoutProps) {
  const aspectRatio = imageWidth / imageHeight;
  return (
    <div className={`
      flex justify-center items-center
      w-full
      max-w-3xl 
      mx-auto
      aspect-[${aspectRatio}]
      ${className}
    `}>
      <div className={`relative w-full h-full aspect-[${aspectRatio}]`}>
        <ImageFrame
          className="w-full h-full object-cover"
          imageSrc={imageSource}
          imageClassName={imageFrameClassName}
          imageAlt={imageAlt}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
        <RainbowGradientOverlay className="absolute inset-0" innerClassName="mix-blend-exclusion" />
        <RainbowGradientOverlay className="absolute inset-0" innerClassName="mix-blend-hard-light" />
      </div>
    </div>
  );
};

