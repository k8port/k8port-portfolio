import React from 'react';

interface GreetingProps {
    className: string;
    greetingText: string;
}

export const Greeting = ({ className, greetingText }: GreetingProps) => {
    return <div className={`${className}`}>{greetingText}</div>;
};
