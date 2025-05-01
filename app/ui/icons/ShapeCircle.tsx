import React from "react";

interface ShapeCircleProps {
    className?: string;
}

export const ShapeCircle = ({ className }: ShapeCircleProps) => {
    return (
        <div className={`relative w-4 h-4 ${className}`}>
            <img
                className="absolute w-[11px] h-[11px] top-[3px] left-[3px]"
                alt="Shape Circle"
                src="/images/shape-circle.svg"
            />
        </div>
    );
};