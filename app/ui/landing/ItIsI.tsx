import React from 'react';
import { Display } from '../typography/Display';
import { Headline } from '../typography/Headline';
import { ProfilePic } from './ProfilePic';
interface ItIsIProps {
    className?: string;
    insertNameHere: string;
    insertJobTitleHere: string;
    profilePicWidth?: string;
}

export const ItIsI = ({ className, insertNameHere, insertJobTitleHere }: ItIsIProps) => {
    let profilePicWidth = "w-96";
    if (profilePicWidth) {
        profilePicWidth = profilePicWidth;
    }
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
            <div className={`mt-4 sm:mt-10 ${profilePicWidth} h-auto`}>
                <ProfilePic
                    imageWidth={686}
                    imageHeight={678}
                    className="rounded-full opacity-65 shadow-btn-shadow"
                    profilePicSrc="/images/abstract-profile/abstract-profile-sunrise.png"
                    profilePicDescription="Profile Picture"
                />
            </div>
        </div>
    );
};
