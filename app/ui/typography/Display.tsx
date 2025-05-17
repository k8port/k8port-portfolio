import React from "react";

interface DisplayProps {
    className?: string;
    displayText: string;
    textColor?: string;
    textSize?: string;
}

export const Display = ({ className, displayText, textColor, textSize }: DisplayProps) => { 
    return (
        <div className={`
            font-dmserifdisplay
            ${textColor}
            ${textSize}
            ${className}
        `}>
            {displayText}
        </div>
    );
};

