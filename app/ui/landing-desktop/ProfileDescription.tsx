import React from "react";
import { ProfilePic } from "./ProfilePic";
import { ProfileDescriptionGroup } from "./ProfileDescriptionGroup";

interface ProfileDescriptionProps {
    className?: string;
    subheader?: string,
}

export const ProfileDescription = ({
    className,
    subheader,
}: ProfileDescriptionProps) => {
    return (
        <div className={`${className}`}>
            <div className={`relative w-md top-[51px]`}>
                <div className={`absolute -top-20 -left-5 font-greatvibes font-normal
                    text-4xl leading-[39.6px] whitespace-nowrap text-redgrays-arsenicgray`}>
                    {subheader}
                    
                    <div className={`absolute w-[257px] h-px top-[50px] left-[82px]`}>
                        <svg width="257" height="2" viewBox="0 0 257 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.853271" x2="257" y2="0.853271" stroke="#FA8072"/>
                        </svg>
                    </div>

                    <div className={` absolute top-[70px] -left-[10px]`}>
                        <div className={`
                            font-spacegrotesk font-medium 
                            text-redblacks-offblack 
                            text-[16px] tracking-[0] leading-6 
                        `}>
                            <p className="text-wrap">
                                    Versatile Software Engineer with a Master of Science in Computer
                                    Science from Saint Joseph’s University (2014) and 10+ years designing
                                    and developing performant &amp; scalable applications, microservices,
                                    apis, and UIs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}