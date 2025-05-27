import React from 'react';
import { ItIsI } from './ItIsI';
import { Greeting } from './Greeting';
import { ProfileDescription } from './ProfileDescription';
interface ProfileDescriptionGroupProps {
    className?: string;
}

export const ProfileDescriptionGroup = ({ className }: ProfileDescriptionGroupProps) => {
    return (
        <div className={`w-[600px] h-[727px] ${className}`}>
            <div className="relative w-[604px] h-[727px]">
                <div className="flex flex-col w-[556px] items-center gap-[51px] relative ml-[24px]">
                    <Greeting
                        className={`
                            inline-flex items-center
                            justify-center gap-2.5 relative
                            flex-[0_0_auto] greeting`}
                        greetingText="Hello!"
                    />

                    <ItIsI
                        className={`
                            flex flex-col items-start
                            gap-1 relative
                            flex-[0_0_auto]`}
                        insertNameHere="Kate Portalatin"
                        insertJobTitleHere="Senior Full Stack Engineer"
                    />

                    <ProfileDescription
                        className={`
                            flex flex-col items-center 
                            w-[539.41px] gap-8 relative
                            flex-[0_0_auto]
                        `}
                        subheader="Applications,&nbsp;&nbsp;Enterprise Systems"
                    />
                </div>
            </div>
        </div>
    );
};
