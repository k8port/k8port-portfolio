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

    const handleScheduleClick = () => {
        window.location.href =
            'https://calendar.proton.me/bookings/guest#1YyyqlWtO7nGp4bbcDH36rlU8QQo8Hql_2GGm7_jhnI=';
    };

    return (
        <div className={`space-x-2 ${className}`}>
            {/* ButtonStyle component instances below */}
            <ButtonStyle
                style="ghost"
                iconPosition="right-icon"
                size="tiny"
                borderRadius="eight"
                buttonText="Schedule w/ K8"
                buttonIconSelection={CalendarIcon ?? undefined}
                onClick={handleScheduleClick}
                cursor-pointer
            />
            <ButtonStyle
                style="ghost"
                iconPosition="right-icon"
                size="tiny"
                borderRadius="eight"
                buttonText="Projects"
                buttonIconSelection={PhoneIcon ?? undefined}
                onClick={handleContactClick}
                cursor-pointer
            />
            <ButtonStyle
                style="ghost"
                iconPosition="right-icon"
                size="tiny"
                borderRadius="eight"
                buttonText="Download Resume"
                buttonIconSelection={DownloadIcon ?? undefined}
                onClick={handleResumeClick}
                cursor-pointer
            />
        </div>
    );
};
