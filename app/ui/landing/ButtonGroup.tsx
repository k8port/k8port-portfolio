import React from "react";
import { ButtonStyle } from "../buttons/ButtonStyle";

interface ButtonGroupProps {
    className?: string;
}

export const ButtonGroup = ({ className }: ButtonGroupProps) => {
    return (
        <div className={`${className}`}>
            <ButtonStyle
                style="filled"
                icon="left-icon"
                size="large"
                borderRadius="four"
                buttonText="Button"
                buttonIconSelection="Download"
            />
            <ButtonStyle
                style="filled"
                icon="left-icon"
                size="large"
                borderRadius="four"
                buttonText="Button"
                buttonIconSelection="Phone"
            />
        </div>
    );
};