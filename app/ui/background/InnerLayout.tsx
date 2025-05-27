import React from 'react';
import { ImageFrame } from '../ImageFrame';
import RainbowGradientOverlay from './RainboxGradientOverlay';

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
        <div
            className={`
      aspect-[${aspectRatio}]
      ${className}
    `}
        >
            <ImageFrame
                className={`aspect-[${aspectRatio}] relative`}
                imageSrc={imageSource}
                imageClassName={imageFrameClassName}
                imageAlt={imageAlt}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
            />
            <RainbowGradientOverlay
                className="aspect-[${aspectRatio}] absolute inset-0"
                innerClassName="mix-blend-exclusion"
            />
            <RainbowGradientOverlay
                className="aspect-[${aspectRatio}] absolute inset-0"
                innerClassName="mix-blend-hard-light"
            />
        </div>
    );
}
