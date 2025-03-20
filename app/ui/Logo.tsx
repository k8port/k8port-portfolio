// app/ui/Logo.tsx
import React from "react";
import Image from "next/legacy/image";
import CustomizableImage from "./CustomImage";
import OrnateBorder from "./OrnateBorder";
import { ballet } from "../fonts";

interface LogoProps {
  className?: string;
  logo: {
    motto: string;
    motto_translation: string;
  };
}

export default function Logo({ className, logo }: LogoProps) {
  return (
    <div
      data-testid="logo-container"
      className={`mx-auto max-w-[300px] ${className}`}
    >
      {/* Latin text section */}
      <div className="w-5/6 h-full mb-2">
        <OrnateBorder
          bgColor={`
            bg-seagrey/85 
            bg-[url('/images/gears/gears3_ash.png')] 
            bg-cover bg-center bg-no-repeat 
            bg-blend-hard-light
          `}
          borderColor="border-antiqueblack"
        >
          <div className="relative z-10">
            <h1
              className={`
                ${ballet.className} font-ballet 
                font-semibold text-magnolia
                text-2xl motto-text-shadow`}
            >
              {logo.motto}
            </h1>
          </div>
        </OrnateBorder>
      </div>

      <div className="relative w-full flex justify-center">
        {/* Portrait section */}
        <div className="relative w-[200px] aspect-3/4 border-2 my-2">
          <Image
            src="/images/portrait.png"
            alt="Portrait"
            className="object-contain"
            layout="fill"
            sizes="100vw"
            priority
            data-testid="portrait-image"
          />
          {/* Signature section */}
          {/* <div className="absolute -top-9 -right-16 z-10">
            <CustomizableImage
              src="/images/signature.png"
              alt="Signature"
              circleColor="bg-mintgreen/65"
              border="border-2 border-skyblue/95"
              shadow="inner-shadow"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
