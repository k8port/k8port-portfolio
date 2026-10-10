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
    const CalendarIcon = getFontAwesomeIcon('Calendar');

    const handleResumeClick = () => {
        downloadAndViewResume();
    };

    const handleContactClick = () => {
        // Add your contact logic here
        // Example: window.location.href = '#contact';
        document.getElementById('collaborate')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScheduleClick = () => {
        window.location.href =
            'https://calendar.proton.me/bookings/guest#1YyyqlWtO7nGp4bbcDH36rlU8QQo8Hql_2GGm7_jhnI=';
    };

    return (
        <>
            <div className={`flex flex-col space-y-4 ml-[55%] ${className}`}>
                <ButtonStyle
                    style="filled"
                    iconPosition="right-icon"
                    size="small"
                    borderRadius="thirty-two"
                    buttonText="Schedule Meeting with K8"
                    buttonIconSelection={CalendarIcon ?? undefined}
                    onClick={handleScheduleClick}
                />
                <ButtonStyle
                    style="ghost"
                    iconPosition="left-icon-right-text"
                    size="small"
                    borderRadius="thirty-two"
                    buttonText="Resume / CV"
                    buttonIconSelection={DownloadIcon ?? undefined}
                    onClick={handleResumeClick}
                />
                <ButtonStyle
                    style="outlined"
                    iconPosition="left-icon-right-text"
                    size="small"
                    borderRadius="thirty-two"
                    buttonText="Contact Me"
                    buttonIconSelection={PhoneIcon ?? undefined}
                    onClick={handleContactClick}
                />
            </div>
        </>
    );
};
