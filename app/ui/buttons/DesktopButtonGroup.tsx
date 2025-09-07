import React from 'react';
import { ButtonStyle } from './ButtonStyle';
import { getFontAwesomeIcon } from '@/lib/actions/getFontAwesomeIcon';
import { downloadAndViewResume } from '@/lib/actions/downloadAndViewResume';

interface DesktopButtonGroupProps {
    className?: string;
}

export const DesktopButtonGroup = ({ className }: DesktopButtonGroupProps) => {
    const DownloadIcon = getFontAwesomeIcon('Download');
    const PhoneIcon = getFontAwesomeIcon('Phone');

    const handleResumeClick = () => {
        downloadAndViewResume();
    };

    const handleContactClick = () => {
        // Add your contact logic here
        // Example: window.location.href = '#contact';
        document.getElementById('collaborate')?.scrollIntoView({ behavior: 'smooth' });
    };

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
            <ButtonStyle
                style='filled'
                iconPosition='left-icon'
                size='small'
                borderRadius='sixteen'
                buttonText='Contact Me'
                buttonIconSelection={PhoneIcon ?? undefined}
                onClick={handleContactClick}
            />
        </div>
    );
};
