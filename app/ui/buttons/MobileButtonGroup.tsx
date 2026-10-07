import React from 'react';
import { ButtonStyle } from './ButtonStyle';
import { getFontAwesomeIcon } from '@/lib/actions/getFontAwesomeIcon';
import { downloadAndViewResume } from '@/lib/actions/downloadAndViewResume';

interface MobileButtonGroupProps {
    className?: string;
}

export const MobileButtonGroup = ({ className }: MobileButtonGroupProps) => {
    const DownloadIcon = getFontAwesomeIcon('Download');
    const PhoneIcon = getFontAwesomeIcon('Phone');
    const CalendarIcon = getFontAwesomeIcon('Calendar');

    const handleResumeClick = () => {
        downloadAndViewResume();
    };

    const handleContactClick = () => {
        document.getElementById('collaborate')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`space-x-2 ${className}`}>
            {/* ButtonStyle component instances below */}
            <ButtonStyle
                style="ghost"
                iconPosition="no-icon"
                size="tiny"
                borderRadius="eight"
                buttonText="Schedule w/ K8"
                buttonIconSelection={CalendarIcon ?? undefined}
                onClick={handleResumeClick}
            />
            <ButtonStyle
                style="ghost"
                iconPosition="no-icon"
                size="tiny"
                borderRadius="eight"
                buttonText="Projects"
                buttonIconSelection={PhoneIcon ?? undefined}
                onClick={handleContactClick}
            />
        </div>
    );
};
