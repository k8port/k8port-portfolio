import { getFontAwesomeIcon } from "@/app/styles/icons";
import React from "react";

interface IconContainerProps {
    iconName: string;
    className?: string;
}

export default function IconContainer({ iconName, className }: IconContainerProps) {
    const IconComponent = getFontAwesomeIcon(iconName);
    return <div className={`flex w-12 h-12 items-center justify-center relative bg-greenwhites-featherwhite ${className}`}>
        {IconComponent && <IconComponent className={`text-blackplum`} />}
    </div>;
}