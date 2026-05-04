import React, { forwardRef } from 'react';
import LayeredVector from './LayeredVector';
import AboutMe from './profile/AboutMe';
import { MobileButtonGroup } from '../buttons/MobileButtonGroup';
import { DesktopButtonGroup } from '../buttons/DesktopButtonGroup';
import { III } from './profile/III';
import { useBreakpointDebug } from '../../lib/hooks/useBreakpointDebug';
import { useWindowSize } from '../../lib/hooks/useWindowSize';

interface LandingContentProps {
    className?: string;
}

const LandingContent = forwardRef<HTMLDivElement, LandingContentProps>(({ className }, ref) => {
    useBreakpointDebug();
    useWindowSize();

    return (
        <div
            ref={ref}
            className={`
            flex w-full
            gap-0 mx-auto
            justify-center
            pb-20
            shadow shadow-lg
            ${className}
          `}
        >
            <div
                className={`
            flex flex-col
            gap-6 md:gap-4
            mt-0 sm:mt-2 mlg:mt-16
            ml-0 sm:ml-16 md:ml-32 mlg:ml-64
          `}
            >
                <III
                    className={`
                mt-10 relative
                md:hidden
                flex flex-col
                gap-2
              `}
                    insertNameHere="Kate Portalatin"
                    insertJobTitleHere="Senior Software Engineer"
                    profilePicWidth="w-96 lg:w-md"
                />
                <MobileButtonGroup className="self-center md:hidden" />

                <AboutMe className="flex flex-col gap-6 mx-auto px-10 items-center md:mt-50" />

                <DesktopButtonGroup className="hidden md:inline-flex items-start" />
            </div>

            <LayeredVector
                className={`
          absolute top-0 right-0
          h-dvh z-999
        `}
            />

            <div
                className={`
              flex flex-col
              w-full h-full
              mx-auto
            `}
            >
                <div className="hidden md:flex md:flex-col justify-normal space-y-6">
                    <div className="relative">
                        <III
                            className={`
                            mt-50
                            overflow-hidden
                            items-center
                          `}
                            insertNameHere="Kate Portalatin"
                            insertJobTitleHere="Senior Software Engineer"
                            profilePicWidth="w-lg max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

LandingContent.displayName = 'LandingContent';

{
    /* <div className="flex flex-col items-center justify-center">
                  <iframe 
                    style={{borderRadius: "12px"}}
                    title="Music Speaks"
                    src="https://open.spotify.com/embed/playlist/7uPHECxzk2dVTzRUKXB8uA?utm_source=generator&theme=0" 
                    width="100%"
                    height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
                </div> TODO: move to other section */
}

{
    /* TODO: move to other section */
}
{
    /* <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-row gap-4'>
              <CreativeType 
                src='/images/The_Alchemist_GIF.gif' 
                className='w-xs h-auto mix-blend-hard-light opacity-60 hover:opacity-70'
              />
            </div>
          </div> */
}

export default LandingContent;
