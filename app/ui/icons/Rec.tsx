import React from "react";

interface RecProps {
    className?: string;
}

export const Rec = ({ className }: RecProps) => {
    return (
        <div className={`relative h-2 w-2 ${className}`} aria-hidden="true">
            <img
                className="absolute w-[5px] h-[5px] top-px left-px"
                alt="Filled Circle"
                src="/images/filled-circle.svg"
            />
        </div>
    );
};
