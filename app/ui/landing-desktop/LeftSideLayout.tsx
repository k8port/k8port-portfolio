import React from "react";
import { GradientOverlay } from "./GradientOverlay";
import { ImageFrame } from "./ImageFrame";

interface LeftSideLayoutProps {
  className: string;
  imageFrameClassName: string;
  imageSource: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export const LeftSideLayout = ({
  className,
  imageFrameClassName,
  imageSource,
  imageAlt,
  imageWidth,
  imageHeight,
}: LeftSideLayoutProps) => {
  const aspectRatio = imageWidth / imageHeight;
  return (
    <div className={`
      flex justify-center items-center
      w-full md:w-auto
      min-w-3xs md:min-w-xl lg:min-w-xl
      max-w-5xl
      aspect-[${aspectRatio}]
      flex-shrink-o
      ${className}
    `}>
      <div className={`relative w-full h-full aspect-[${aspectRatio}]`}>
        <ImageFrame
          className="w-full h-full object-color"
          imageSrc={imageSource}
          imageClassName={imageFrameClassName}
          imageAlt={imageAlt}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
        <GradientOverlay className="absolute inset-0" />
      </div>
    </div>
  );
};

