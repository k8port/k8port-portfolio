import React from "react";
import { ButtonGroup } from "../buttons/MobileButtonGroup";
import { ProfileDescriptionGroup } from "./ProfileDescriptionGroup";

interface RightSideLayoutProps {
  className?: string;
}

export const RightSideLayout = ({
  className,
}: RightSideLayoutProps) => {
  return (
    <div className={`
      flex flex-col 
      items-center relative 
      gap-12 w-full max-w-screen-md
      px-4 md:px-0
      ${className}
    `}>
    <div className="bg-gradient-to-r from-brand-primary/75 to-brand-secondaryvar/75 md:hidden z-0"></div>
   
      <ProfileDescriptionGroup className={`
        max-w-xl w-full
        aspect-[4/5]
        md:h-auto
        ${className}
      `} />
      <ButtonGroup className={`
        inline-flex items-center gap-[18px] relative
        flex-[0_0_auto]
      `}/>
    </div>
  );
};
