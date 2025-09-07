import React from "react";
import AnimatedMuseSVG from "./AnimatedMuse";

interface AnimatedMuseGroupProps {
    className?: string;
}

export const AnimatedMuseGroup = ({ className }: AnimatedMuseGroupProps) => {
    return (
        <div className={`${className}`}>
            <AnimatedMuseSVG className={`
                absolute inset-x-0 top-0 left-30 h-10
                opacity-85
                z-999
            `} />
            <AnimatedMuseSVG className={`
                absolute inset-x-0 top-10 left-30 h-10
                opacity-85
                z-999
            `} />
            <AnimatedMuseSVG className={`
                absolute inset-x-0 top-10 left-30 h-10
                opacity-85
                z-999
            `} />
            <AnimatedMuseSVG className={`
                absolute inset-x-0 top-10 left-30 h-10
                opacity-85
                z-999
            `} />
            <AnimatedMuseSVG className={`
                absolute inset-x-0 top-20 left-30 h-10
                opacity-85
                z-999
            `} />
        </div>
    );
};