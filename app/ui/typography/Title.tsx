import React from 'react';

interface TitleProps {
    titleText: string;
    fontWeight: 'normal' | 'bold';
}

export const Title = ({ titleText, fontWeight }: TitleProps) => {
    const fontWeightClass = fontWeight === 'normal' ? 'font-normal' : 'font-bold';
    return (
        <p
            className={`
            relative 
            w-[445px] 
            mt-[-1.00px] 
            font-spacegrotesk 
            ${fontWeightClass} 
            text-redblacks-blackplum 
            text-xl 
            leading-7 
            uppercase 
            not-italic`}
        >
            {titleText}
        </p>
    );
};
