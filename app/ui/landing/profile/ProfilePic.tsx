import React from 'react';
import Image from 'next/image';

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
    return (
        <div className={`relative w-full h-full ${className}`}>
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
