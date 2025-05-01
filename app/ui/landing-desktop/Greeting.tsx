import React from "react";

interface GreetingProps {
  className: string;
  greetingText: string;
}

export const Greeting = ({ className, greetingText }: GreetingProps) => {
  return (
    <div className={`${className}`}>
        <div className={`relative w-fit mt-[50px] greeting`}>
            {greetingText}
        </div> 
    </div>
  );
};