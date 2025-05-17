import React from "react";
import Image from "next/image";

interface LayeredVectorProps {
    className: string;
}

export default function LayeredVector({ className }: LayeredVectorProps) {
    const width = 140;
    const height = 500;
    const aspectRatio = width / height;
    return (
        <div className={`${className}`}>
            <div className="w-full h-full">
                <Image 
                    src="/images/layered_vector/luminous_vector.svg" 
                    alt="Luminous Vector" 
                    width={width} 
                    height={height}
                    className={`
                        min-h-[575px] min-w-[160px]
                        sm:min-h-[750px] sm:min-w-[250px]
                        aspect-[${aspectRatio}] 
                        object-cover 
                        absolute 
                        top-54 -left-25 
                        sm:top-15 sm:-left-45
                        lg:top-54 lg:-left-48
                        mix-blend-luminosity
                        animate-float
                    `} 
                />

                <Image 
                    src="/images/layered_vector/plus-darker-vector.svg" 
                    alt="Plus Darker Vector" 
                    width={width} 
                    height={height} 
                    className={`
                        min-h-[575px] min-w-[160px]
                        sm:min-h-[750px] sm:min-w-[250px]
                        aspect-[${aspectRatio}] 
                        object-cover absolute 
                        top-54 -left-25 
                        sm:top-15 sm:-left-45
                        lg:top-54 lg:-left-48
                        mix-blend-plus-darker
                    `}
                />
            </div>
        </div>
    );
}