import React from "react";
import Image from "next/image";

interface ProfilePicProps {
    className?: string;
    profilePicSrc?: string;
    profilePicDescription?: string;
}

export const ProfilePic = ({
    className,
    profilePicDescription,
    profilePicSrc,
}: ProfilePicProps) => {
    return (
        <div className={`relative w-[300px] h-[287px] ${className}`}>
            <Image 
                src={`${profilePicSrc}`} 
                alt={`${profilePicDescription}`} 
                className="w-full h-full object-cover"
                width={300}
                height={287}
            />
        </div>
    );
};
