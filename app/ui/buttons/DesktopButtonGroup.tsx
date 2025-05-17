import React from "react";
import { ButtonStyle } from "./ButtonStyle";

interface DesktopButtonGroupProps {
    className?: string;
}

export const DesktopButtonGroup = ({ className }: DesktopButtonGroupProps) => {
    return (
        <div className={`flex justify-center space-x-4 ${className}`}>
            <ButtonStyle
                style="filled"
                iconPosition="left-icon"
                size="medium"
                borderRadius="sixteen"
                buttonText="Resume"
                buttonIconSelection="Download"
            />
            <ButtonStyle
                style="outlined"
                iconPosition="left-icon"
                size="medium"
                borderRadius="sixteen"
                buttonText="Contact Me"
                buttonIconSelection="Phone"
            />
        </div>
    );
};