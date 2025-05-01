import React from "react";

interface DisplayProps {
    displayText: string;
}

export const Display = ({ displayText }: DisplayProps) => { 
    return (
        <div className="
            relative 
            w-445px 
            mt-[-1.00px] 
            font-dm-serif-display 
            text-redblacks-blackplum 
            text-4xl 
            leading-[48px]">
            {displayText}
        </div>
    );
};

