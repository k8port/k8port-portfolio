import React from "react";
import Image from "next/image";

interface ImageFrameProps {
  className: string;
  imageClassName: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export const ImageFrame = ({
  className,
  imageClassName,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}: ImageFrameProps) => {
  return (
    <div className={`flex w-full h-full items-center relative ${className}`}>
      <Image
        className={`w-full h-auto object-contain rounded-lg ${imageClassName}`}
        alt={imageAlt}
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        priority
        quality={90}
      />
    </div>
  );
};

