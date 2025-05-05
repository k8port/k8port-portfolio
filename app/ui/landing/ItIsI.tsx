import React from "react";
import Image from "next/image";
interface ItIsIProps {
  className?: string;
  insertNameHere: string;
  insertJobTitleHere: string;
}

export const ItIsI = ({ className, insertNameHere, insertJobTitleHere }: ItIsIProps) => {
  return (
    <div className={`${className}`}> 
        <div className={`
            relative self-stretch
            mt-[-1.00px] font-spacegrotesk
            font-bold text-collection-persiangreen
            text-2xl tracking-[1.00px]
            leading-6
        `}>
           I AM 
        </div>

        <div className={`
            relative self-stretch 
            font-dmserifdisplay 
            font-normal text-blueblacks-bluecharcoal
            text-8xl tracking-[0] 
            leading-[105.6px]
        `}>
            {insertNameHere}
        </div>

        <div className={`
            relative self-stretch
            font-spacegrotesk
            font-bold text-blueblacks-bluecharcoal
            text-4xl tracking-[0] 
            leading-[105.6px]
        `}>
            {insertJobTitleHere}
        </div>

        <div className={`
            absolute w-[186px] h-[178px]
            top-[-31px] left-52
        `}>
            <Image src="/images/profile_pic.png" alt="Profile Picture" width={186} height={178} />
        </div>
    </div>
  );
};

