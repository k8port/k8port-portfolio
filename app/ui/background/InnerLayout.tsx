import React from "react";
import { ImageFrame } from "../ImageFrame";
import RainbowGradientOverlay from "./RainboxGradientOverlay";

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
      aspect-[${aspectRatio}]
      ${className}
    `}>
      <div className={`aspect-[${aspectRatio}] aspect-[5/4]`}>
        <ImageFrame
          className={`relative`}
          imageSrc={imageSource}
          imageClassName={imageFrameClassName}
          imageAlt={imageAlt}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
        <div className="object-cover overflow-y-scroll">
          <RainbowGradientOverlay className="absolute inset-0" innerClassName="mix-blend-exclusion" />
          <RainbowGradientOverlay className="absolute inset-0" innerClassName="mix-blend-hard-light" />
        </div>
      </div>
    </div>
  );
};

