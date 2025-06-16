import React from "react";
import Image from "next/image";
import AnimatedMuse from "./vector/AnimatedMuse";

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
                <AnimatedMuse className={`
                    min-h-[50px] min-w-[100px]
                    absolute
                    top-37 sm:top-54 md:top-15 lg:top-51
                    -left-10 sm:-left-25 md:-left-60 lg:-l
                    opacity-85
                    z-999
                `} />
                <AnimatedMuse className={`
                    min-h-[50px] min-w-[100px]
                    absolute
                    top-37 sm:top-54 md:top-15 lg:top-51
                    -left-10 sm:-left-25 md:-left-60 lg:-l
                    opacity-85
                    z-999
                `} />
                <AnimatedMuse className={`
                    min-h-[50px] min-w-[100px]
                    absolute
                    top-37 sm:top-54 md:top-15 lg:top-51
                    -left-10 sm:-left-25 md:-left-60 lg:-l
                    opacity-85
                    z-999
                `} />
                <Image
                    src="/images/layered_vector/vector_figure.svg"
                    alt="Vector Figure"
                    width={width}
                    height={height}
                    className={`
                        min-h-[605.5px] min-w-[200px]
                        sm:min-h-[700px] sm:min-w-[225px]
                        md:min-h-[807px] md:min-w-[267px]
                        aspect-[${aspectRatio}]
                        object-cover
                        absolute
                        top-37 sm:top-54 md:top-15 lg:top-51
                        -left-10 sm:-left-25 md:-left-60 lg:-left-45
                        opacity-85
                    `}
                />
            </div>
        </div>
    );
}