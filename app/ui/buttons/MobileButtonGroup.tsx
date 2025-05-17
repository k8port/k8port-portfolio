import React from "react";
import { ButtonStyle } from "./ButtonStyle";

interface MobileButtonGroupProps {
    className?: string;
}

export const MobileButtonGroup = ({ className }: MobileButtonGroupProps) => {
    return (
        <div className={`space-x-2 ${className}`}>
            <ButtonStyle
                style="filled"
                iconPosition="left-icon"
                size="small"
                borderRadius="eight"
                buttonText="Resume"
                buttonIconSelection="Download"
            />
            <ButtonStyle
                style="filled"
                iconPosition="left-icon"
                size="small"
                borderRadius="eight"
                buttonText="Contact Me"
                buttonIconSelection="Phone"
            />
        </div>
    );
};