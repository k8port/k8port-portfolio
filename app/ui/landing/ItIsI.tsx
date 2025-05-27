import React from 'react';
import { Display } from '../typography/Display';
import { Headline } from '../typography/Headline';
import { ProfilePic } from './ProfilePic';
interface ItIsIProps {
    className?: string;
    insertNameHere: string;
    insertJobTitleHere: string;
}

export const ItIsI = ({ className, insertNameHere, insertJobTitleHere }: ItIsIProps) => {
    return (
        <div className={`${className}`}>
            <Display
                className="w-96 h-auto text-center sm:text-left"
                displayText={insertNameHere}
                textColor="text-greengrays-graygreen"
                textSize="text-5xl"
            />
            <Headline
                className="mt-2 w-96 h-auto text-center sm:text-left"
                headlineText={insertJobTitleHere}
                headlineStyle="default"
                textColor="text-greengrays-chameleongray"
                textSize="text-lg"
            />
            <div className="mt-4 sm:mt-10 w-96 md:w-md lg:w-2xl h-auto">
                <ProfilePic
                    imageWidth={686}
                    imageHeight={678}
                    className="mix-blend-multiply"
                    profilePicSrc="/images/abstract_profile.png"
                    profilePicDescription="Profile Picture"
                />
            </div>
        </div>
    );
};
