import React from 'react';
import { ButtonStyle } from './ButtonStyle';
import { getFontAwesomeIcon } from '@/app/lib/utils/getFontAwesomeIcon';
import { downloadAndViewResume } from '@/app/lib/utils/downloadAndViewResume';

interface MobileButtonGroupProps {
    className?: string;
}

export const MobileButtonGroup = ({ className }: MobileButtonGroupProps) => {
    const DownloadIcon = getFontAwesomeIcon('Download');
    // const PhoneIcon = getFontAwesomeIcon('Phone');

    const handleResumeClick = () => {
        downloadAndViewResume();
    };


    return (
        <div className={`space-x-2 ${className}`}>
            <ButtonStyle
                style="ghost"
                iconPosition="left-icon"
                size="tiny"
                borderRadius="eight"
                buttonText="Resume/CV"
                buttonIconSelection={DownloadIcon ?? undefined}
                onClick={handleResumeClick}
            />
            {/* <ButtonStyle
                style="filled"
                iconPosition="left-icon"
                size="tiny"
                borderRadius="eight"
                buttonText="Contact Me"
                buttonIconSelection={PhoneIcon ?? undefined}
                onClick={handleContactClick}
            /> */}
        </div>
    );
};
