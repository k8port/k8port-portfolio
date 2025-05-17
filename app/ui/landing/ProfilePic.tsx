import React from "react";
import Image from "next/image";

interface ProfilePicProps {
    className?: string;
    imageWidth?: number;
    imageHeight?: number;
    profilePicDescription?: string;
    profilePicSrc?: string;
}

export const ProfilePic = ({
    className,
    imageWidth,
    imageHeight,
    profilePicDescription,
    profilePicSrc,
}: ProfilePicProps) => {
    if (!imageWidth) imageWidth = 686;
    if (!imageHeight) imageHeight = 678;
    return (
        <div className={`relative w-3/4 h-3/4 ${className}`}>
            <Image 
                src={`${profilePicSrc}`} 
                alt={`${profilePicDescription}`} 
                className="w-full"
                width={imageWidth}
                height={imageHeight}
            />
        </div>
    );
};
