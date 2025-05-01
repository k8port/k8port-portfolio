import React from "react";
import { ShapeCircle } from "../icons/ShapeCircle";
import { Rec } from "../icons/Rec";

interface ButtonStyleProps {
    style: "filled" | "ghost" | "outlined";
    icon: "left-icon" | "right-icon" | "no-icon" | "left-icon-right-text" | "right-icon-left-text";
    size: "large" | "medium" | "small" | "tiny";
    borderRadius: "four" | "eight" | "sixteen" | "thirty-two";
    buttonText: string;
    buttonIconSelection?: string;
}

export const ButtonStyle = ({
    style,
    icon,
    size,
    borderRadius,
    buttonText,
    buttonIconSelection, 
}: ButtonStyleProps) => {

    return (
        /* default code is for large button right icon, border-radius: four */
        
        <div className={`
            inline-flex items-center 
            justify-center gap-1 
            px-[52px] [&[data-loading="true"]]:px-[60px]
            py-5 relative 
            bg-brand-tertiary 
            hover:bg-brand-tertiaryvar 

            active:bg-brand-primary
            [&[data-loading="true"]]:bg-brand-secondaryvar
            disabled: bg-greenwhites-featherwhite
            active:border active:border-solid active:border-brand-tertiary
            active: text-bluewhites-ghostwhite
            btn-shadow6
            rounded`
        }>
            <div className={`
                inline-flex 
                items-end 
                [&[data-loading="true"]]:items-center
                gap-1.5 
                relative 
                flex-[0_0_auto]
            `}>
                <div className={`
                    relative 
                    w-fit mt-[-1.00px] 
                    caption-heavy 
                    text-greenblacks-jade 
                    text-sm 
                    whitespace-nowrap 
                    not-italic
                    leading-4
                    [&[data-loading="true"]]:text-transparent
                `}>
                    <span className="data-[loading=true]:hidden">{buttonText}</span>
                </div>
                <div className={`
                    inline-flex 
                    items-center 
                    gap-1.5 
                    relative
                `}>
                    <Rec className="hidden group-data-[loading=true]:inline-block animate-spin !relative !w-2 !h-2" />
                    <ShapeCircle className="hidden !relative !w-3.5 !h-3.5 group-data-[loading=true]:!w-4 group-data-[loading=true]:!h-4" />
                    <Rec className="hidden group-data-[loading=true]:inline-block animate-spin !relative !w-2 !h-2" />
                </div>
            </div>
        </div>
    );
}