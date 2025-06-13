import React from 'react';
import { ButtonStyle } from './ButtonStyle';
import { getFontAwesomeIcon } from '@/app/lib/utils/getFontAwesomeIcon';
import { downloadAndViewResume } from '@/app/lib/utils/downloadAndViewResume';

interface DesktopButtonGroupProps {
    className?: string;
}

export const DesktopButtonGroup = ({ className }: DesktopButtonGroupProps) => {
    const DownloadIcon = getFontAwesomeIcon('Download');
    // const PhoneIcon = getFontAwesomeIcon('Phone');

    const handleResumeClick = () => {
        downloadAndViewResume();
    };

    // const handleContactClick = () => {
    //     // Add your contact logic here
    //     console.log('Opening contact form...');
    //     // Example: window.location.href = '#contact';
    // };

    return (
        <div className={`flex justify-center space-x-4 ${className}`}>
            <ButtonStyle
                style="filled"
                iconPosition="left-icon"
                size="tiny"
                borderRadius="sixteen"
                buttonText="Resume / CV"
                buttonIconSelection={DownloadIcon ?? undefined}
                onClick={handleResumeClick}
            />
            {/* <ButtonStyle
                style='filled'
                iconPosition='left-icon'
                size='small'
                borderRadius='sixteen'
                buttonText='Contact Me'
                buttonIconSelection={PhoneIcon ?? undefined}
                onClick={handleContactClick}
            /> */}
        </div>
    );
};
