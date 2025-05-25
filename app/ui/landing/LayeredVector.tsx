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
                    src="/images/layered_vector/floatingvectors.svg" 
                    alt="Floating Vectors" 
                    width={600} 
                    height={600} 
                    className={`
                        min-h-[60px] min-w-[60px]
                        z-999
                        aspect-[1]
                        object-cover absolute 
                        top-47 -left-15
                        sm:top-54 sm:-left-25 
                        md:top-25 md:-left-55
                        lg:top-75 lg:-left-50
                        lg-dt:top-50 lg-dt:-left-45
                        animate-float-left
                    `} 
                />
                <Image 
                    src="/images/layered_vector/luminous_vector.svg" 
                    alt="Luminous Vector" 
                    width={width} 
                    height={height}
                    className={`
                        min-h-[700px] min-w-[160px]
                        sm:min-h-[650px] sm:min-w-[180px]
                        md:min-h-[825px] md:min-w-[240px]
                        lg:min-h-[900px] lg:min-w-[260px]
                        aspect-[${aspectRatio}] 
                        object-cover 
                        absolute 
                        top-37 -left-10
                        sm:top-54 sm:-left-25 
                        md:top-25 md:-left-55
                        lg:top-75 lg:-left-50
                        lg-dt:top-50 lg-dt:-left-45
                        opacity-35
                        mix-blend-plus-luminosity
                        priority
                    `} 
                />

                <Image 
                    src="/images/layered_vector/plus-darker-vector.svg" 
                    alt="Plus Darker Vector" 
                    width={width} 
                    height={height} 
                    className={`
                        min-h-[700px] min-w-[160px]
                        sm:min-h-[650px] sm:min-w-[180px]
                        md:min-h-[825px] md:min-w-[240px]
                        lg:min-h-[900px] lg:min-w-[260px]
                        aspect-[${aspectRatio}] 
                        object-cover absolute 
                        top-37 -left-10
                        sm:top-54 sm:-left-25 
                        md:top-25 md:-left-55
                        lg:top-75 lg:-left-50
                        lg-dt:top-50 lg-dt:-left-45
                        opacity-35
                        mix-blend-plus-darker
                    `}
                />

            </div>
        </div>
    );
}