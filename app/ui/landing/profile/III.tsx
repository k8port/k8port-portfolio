import React from 'react';
import { Display } from '../../typography/Display';
import { Headline } from '../../typography/Headline';
import { ProfilePic } from './ProfilePic';
import { useState } from 'react';
import AnimateProfile from './AnimateProfile';

interface IIIProps {
    className?: string;
    insertNameHere: string;
    insertJobTitleHere: string;
    profilePicWidth?: string;
}

export const III = ({ className, insertNameHere, insertJobTitleHere }: IIIProps) => {

    const [animateState, setAnimateState] = useState<"explode" | "reassemble">("explode");
    return (
        <div className={`${className}`}>
            <Display
                className="w-md h-auto text-center animate-slide-in-left"
                displayText={insertNameHere}
                textColor="text-greengrays-graygreen"
                textSize="text-5xl"
            />
            <Headline
                className="mt-4 w-md h-auto text-center"
                headlineText={insertJobTitleHere}
                headlineStyle="default"
                textColor="text-greengrays-chameleongray"
                textSize="text-lg"
            />
            <div className={`mt-4 sm:mt-10 h-auto`}>
                {/* <AnimateProfile animateState={animateState} /> */}
                <ProfilePic
                    imageWidth={1038}
                    imageHeight={920}
                    className="rounded-full opacity-65 shadow-btn-shadow aspect-[1038/920]"
                    profilePicSrc="/images/abstract-profile/abstract-profile-sunset.svg"
                    profilePicDescription="Profile Picture"
                />
            </div>
        </div>
    );
};
