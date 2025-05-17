import React, { forwardRef } from "react";
import LayeredVector from "./LayeredVector";
import AboutMe from "./AboutMe";
import { MobileButtonGroup } from "../buttons/MobileButtonGroup";
import { DesktopButtonGroup } from "../buttons/DesktopButtonGroup";
import { ItIsI } from "./ItIsI";
import Image from "next/image";

interface LandingContentProps {
    className?: string;
}

const LandingContent = forwardRef<HTMLDivElement, LandingContentProps>(({ className }, ref) => {
  return (
       
      <div 
        ref={ref}
        className={`
          flex 
          w-full 
          gap-0 md:gap-8 lg:gap-0
          justify-center
          mx-auto
          overflow-y-auto
          ${className}
      `}>

        <div className={`
          flex flex-col 
          sm:min-w-2xl
          gap-8 md:gap-12 
          justify-start
          sm:justify-center
        `}> 
          <ItIsI 
            className={`
              relative
              md:hidden
              top-25 md:top-50
              left-0 
              flex flex-col 
              items-center
              gap-2
              sm:gap-4
              md:gap-6
            `}
            insertNameHere="Kate Portalatin" 
            insertJobTitleHere="Full Stack Software Engineer" />
          <AboutMe className="flex flex-col gap-2 md:gap-8 mx-auto items-center" />
          <MobileButtonGroup className="self-center md:hidden" />
          <DesktopButtonGroup className="hidden md:flex" />
        </div>

        <LayeredVector className={`
          h-dvh relative 
          top-0 -left-30
          lg:-top-30
        `} />
        
        <div className="hidden md:flex md:flex-col justify-center items-start">
          <ItIsI 
            className={`
              w-full h-full
              mt-2
              mt-40 2xl:mt-60 
              overflow-hidden
            `}
            insertNameHere="Kate Portalatin" 
            insertJobTitleHere="Full Stack Software Engineer" 
          />
        </div>
    </div>
  );
});

LandingContent.displayName = 'LandingContent';

export default LandingContent;

