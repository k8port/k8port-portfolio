import React from "react";

interface HeadlineProps {
    headlineText: string;
    headlineStyle?: "default" | "heavy";
}

export const Headline = ({ headlineText, headlineStyle }: HeadlineProps) => {
    const fontWeightClass = headlineStyle === "heavy" ? "font-bold" : "font-normal";
    const transformClass = headlineStyle === "heavy" ? "uppercase" : "capitalize";
    const leadingClass = headlineStyle === "heavy" ? "leading-8" : "leading-[normal]";
    return (
        <p className={`
            relative 
            w-[445px] 
            mt-[-1.00px] 
            font-spacegrotesk 
            ${fontWeightClass} 
            text-redblacks-blackplum 
            text-2xl 
            ${leadingClass} 
            ${transformClass}`}>
            {headlineText}
        </p>
    );
};