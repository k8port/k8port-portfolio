import React from 'react';
import { ButtonStyle } from './ButtonStyle';
import { getFontAwesomeIcon } from '@/app/styles/icons';
import { downloadAndViewResume } from '@/app/lib/utilities';

interface MobileButtonGroupProps {
    className?: string;
}

export const MobileButtonGroup = ({ className }: MobileButtonGroupProps) => {
    const DownloadIcon = getFontAwesomeIcon('Download');
    // const PhoneIcon = getFontAwesomeIcon('Phone');

    const handleResumeClick = () => {
        downloadAndViewResume();
    };

    // const handleContactClick = () => {
    //     console.log('Contact button clicked!');
    //     // Add your contact logic here
    //     // Example: window.location.href = '#contact';
    // };

    return (
        <div className={`space-x-2 ${className}`}>
            <ButtonStyle
                style="filled"
                iconPosition="left-icon"
                size="tiny"
                borderRadius="eight"
                buttonText="Resume"
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
