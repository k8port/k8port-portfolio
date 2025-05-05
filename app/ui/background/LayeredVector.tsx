import React from "react";
import Image from "next/image";

interface LayeredVectorProps {
    className: string;
}

export default function LayeredVector({ className }: LayeredVectorProps) {
    const width = 140;
    const height = 650;
    const aspectRatio = width / height;

    return (
        <div className={`${className} aspect-[${aspectRatio}] relative`}>
            <div className={`
                absolute inset-0 
                left-12 top-0
                sm:top-6
            `}>
                <Image
                    className="w-full h-full aspect-[${aspectRatio}] object-cover mix-blend-luminosity"
                    src="/images/layered_vector/luminous-vector.png"
                    alt="Luminous Vector"
                    width={width}
                    height={height}
                />
            </div>
            <div className={`
                absolute inset-0 
                left-12 top-0
                sm:top-6
            `}>
                <Image
                    className="w-full h-full aspect-[${aspectRatio}] object-cover mix-blend-plus-darker"
                    src="/images/layered_vector/plus-darker-vector.svg"
                    alt="Plus Darker Vector"
                    width={240}
                    height={875}
                />
            </div>
        </div>
    );
}