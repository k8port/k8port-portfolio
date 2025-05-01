import React from "react";
import { BiAngry } from "react-icons/bi";

interface ButtonStyleProps {
    style: "filled" | "ghost" | "outlined";
    icon: "left-icon" | "right-icon" | "no-icon" | "left-icon-right-text" | "right-icon-left-text";
    state: "default" | "hover" | "pressed" | "loading" | "disable";
    size: "large" | "medium" | "small" | "tiny";
    borderRadius: "four" | "eight" | "sixteen" | "thirty-two";
    buttonText: string;
}

export const ButtonStyle = ({
    style,
    icon,
    state,
    size,
    borderRadius,
    buttonText,
}: ButtonStyleProps) => {
    return (
        /* large buttons */
        /* filled, right-icon, default, large, four */
        <div className="inline-flex items-center justify-center gap-1 px-[52px] py-5 relative bg-blue-600 rounded">
            <div className="inline-flex items-end gap-1.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] caption-heavy text-bluewhites-ghostwhite whitespace-nowrap not-italic">
                   {buttonText} 
                </div>
                <BiAngry className="!relative !w-3.5 !h-3.5" />
            </div>
        </div>

        // filled, right-icon hover, large, four - color changes to bg-blue-800 on line 21
        // filled, right-icon pressed, large, four - color changes to bg-blue-850 on line 21, border border-solid border-blue-500 added to same line 
        // filled, right-icon loading, large, four  - items-end to items-center on line 22, px to 60px *px-[60px], color change to bg-blue-600, no border, 2 icons added before and after main icon with !w-2 !h-2, main icon class changes to !w-4 !h-4
        // filled, right-icon disable, large, four - px back to 52px *px-[52px], color change to bg-blue-100, no border, main icon class returns to !w-3.5 !h-3.5 with no additional icons, text-bluegrays-antiquepewter

        // outlined, right-icon, default, large, four - no fill, border border-solid border-lime-600
        // outlined, right-icon hover, large, four -  (color change) border border-solid border-lime-700
        // outlined, right-icon pressed, large, four - (color-change) border border-solid border-lime-800
        // outlined, right-icon loading, large, four - items-end to items-center on line 22, px to 60px *px-[60px], color change back to border-lime-600, 2 icons added before and after main icon with !w-2 !h-2, main icon class changes to !w-4 !h-4
        // outlined, right-icon disable, large, four - px back to 52px *px-[52px], color change to border-lime-50

        // ghost, right-icon, default, large, four - color changes to bg-light-blue500 on line 21 + opacity-50 and $className variable added
        // ghost, right-icon hover, large, four - color changes to bg-light-blue750 on line 21 + opacity-60
        // ghost, right-icon pressed, large, four - color changes to bg-light-blue850 on line 21 + opacity-80
        // ghost, right-icon loading, large, four - items-end to items-center on line 22, px to 60px *px-[60px], color change to bg-light-blue500 + opacity-50, 2 icons added before and after main icon with !w-2 !h-2, main icon class changes to !w-4 !h-4
        // ghost, right-icon disable, large, four - px back to 52px *px-[52px], color change to bg-light-blue50 + opacity-30


        /* variations */
        // left icon --> reverse order of div with text and icon.  all else is same
        // no icon --> remove icon, all else is same
        // icon-right-left-text --> line 21 px-[25px], line 22 - gap-[60px] 
        // icon-left-right-text --> reverse order of text and icon, all else is same as icon-right-left-text


        /* medium buttons */
        // right icon, default, medium, four --> line 21: px-[47px] py-4
        // right icon, hover, medium, four --> line 21: bg-blue-800
        // right icon, pressed, medium, four --> line 21: bg-blue-850
        // right icon, loading, medium, four --> line 21: bg-blue-600
        // right icon, disable, medium, four --> line 21: bg-blue-100

    );
}

