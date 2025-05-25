import React, { forwardRef } from "react";
import LayeredVector from "./LayeredVector";
import AboutMe from "./AboutMe";
import { MobileButtonGroup } from "../buttons/MobileButtonGroup";
import { DesktopButtonGroup } from "../buttons/DesktopButtonGroup";
import { ItIsI } from "./ItIsI";

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
          pb-20
          ${className}
      `}>

        <div className={`
          flex flex-col 
          sm:min-w-2xl
          gap-8 md:gap-12 
          justify-start sm:justify-center
        `}> 
          <ItIsI 
            className={`
              relative
              md:hidden
              top-15
              sm:top-25 md:top-50
              left-0 
              flex flex-col 
              items-center
              gap-2
              sm:gap-4
              md:gap-6
            `}
            insertNameHere="Kate Portalatin" 
            insertJobTitleHere="Full Stack Software Engineer" />
          <MobileButtonGroup className="mt-10 sm:mt-20 self-center md:hidden" />
          <AboutMe className="flex flex-col gap-2 md:gap-8 mx-auto items-center" />
          <DesktopButtonGroup className="hidden md:inline-flex items-start" />
        </div>

        <LayeredVector className={`
          h-dvh relative 
          top-0 -left-30
          lg:-top-30
        `} />
        
        <div className="hidden md:flex md:flex-col justify-start lg:justify-normal space-y-6">
          <div className="md:relative md:-left-20 lg:left-5">
            <ItIsI 
            className={`
              flex flex-col 
              w-full h-full
              mt-50
              overflow-hidden
            `}
            insertNameHere="Kate Portalatin" 
            insertJobTitleHere="Full Stack Software Engineer" 
            />
          </div>
          {/* TODO: move to other section */}
          {/* <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row gap-4">
              <CreativeType 
                src="/images/The_Alchemist_GIF.gif" 
                className="w-xs h-auto mix-blend-hard-light opacity-60 hover:opacity-70"
              />
            </div>
          </div> */}
        </div>
    </div>
  );
});

LandingContent.displayName = 'LandingContent';

export default LandingContent;

