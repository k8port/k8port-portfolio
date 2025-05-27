import React from 'react';
import { ShapeCircle } from '../icons/ShapeCircle';
import { Rec } from '../icons/Rec';
import { IconType } from 'react-icons/lib';

interface ButtonStyleProps {
    style: 'filled' | 'ghost' | 'outlined';
    iconPosition:
        | 'left-icon'
        | 'right-icon'
        | 'no-icon'
        | 'left-icon-right-text'
        | 'right-icon-left-text';
    size: 'large' | 'medium' | 'small' | 'tiny';
    borderRadius: 'four' | 'eight' | 'sixteen' | 'thirty-two';
    buttonText: string;
    buttonIconSelection?: IconType;
    onClick?: () => void;
}

export const ButtonStyle = ({
    style,
    iconPosition,
    size,
    borderRadius,
    buttonText,
    buttonIconSelection,
    onClick,
}: ButtonStyleProps) => {
    let styleClass = 'bg-brand-tertiary border border-solid border-brand-secondaryvar';
    let hoverStyleClass = 'hover:bg-brand-tertiaryvar hover:border-2 hover:border-brand-quinary';
    let activeStyleClass = 'active:bg-brand-quaternaryvar active:border-brand-senary';
    let loadingStyleClass =
        '[&[data-loading=true]]:bg-brand-quaternary [&[data-loading=true]]:border-brand-primary';
    let sizeClass = 'px-28 py-5';
    let iconPositionClass = 'left-icon';
    let borderRadiusClass = 'rounded-sm';
    const IconComponent = buttonIconSelection ?? null;

    if (style === 'outlined') {
        styleClass =
            'bg-brand-secondary/25 border border-solid border-accent-accentred !text-bluewhites-ghostwhite';
        hoverStyleClass =
            'hover:bg-brand-secondary/50 hover:border-2 hover:border-accent-accentredvar text-bluewhites-ghostwhite';
        activeStyleClass = 'active:bg-accent-accentred/75 active:border-accent-accentredvar';
        loadingStyleClass =
            '[&[data-loading=true]]:bg-brand-secondary/25 [&[data-loading=true]]:border-accent-accentredvar';
    }

    if (style === 'ghost') {
        styleClass = 'bg-accent-accentgreen border border-solid border-accent-accentgreenvar';
        hoverStyleClass =
            'hover:bg-accent-accentgreenvar hover:border-2 hover-border-brand-secondaryvar';
        activeStyleClass = 'active:bg-accent-accentbluevar active:border-accent-accentblue';
        loadingStyleClass =
            '[&[data-loading=true]]:bg-accent-accentbluevar [&[data-loading=true]]:border-accent-accentblue';
    }

    size === 'medium'
        ? (sizeClass = 'px-12 py-4')
        : size === 'small'
            ? (sizeClass = 'px-10 py-3')
            : (sizeClass = 'px-8 py-2');

    iconPosition === 'left-icon'
        ? (iconPositionClass = 'left-icon')
        : iconPosition === 'right-icon'
            ? (iconPositionClass = 'right-icon')
            : iconPosition === 'no-icon'
                ? (iconPositionClass = 'no-icon')
                : iconPosition === 'left-icon-right-text'
                    ? (iconPositionClass = 'left-icon-right-text')
                    : (iconPositionClass = 'right-icon-left-text');

    borderRadius === 'four'
        ? (borderRadiusClass = 'rounded-sm')
        : borderRadius === 'eight'
            ? (borderRadiusClass = 'rounded-lg')
            : borderRadius === 'sixteen'
                ? (borderRadiusClass = 'rounded-2xl')
                : (borderRadiusClass = 'rounded-full');

    return (
        /* default code is for large button right icon, border-radius: four */

        <button
            type="button"
            onClick={onClick}
            className={`
                inline-flex items-center 
                justify-center gap-1 
                ${sizeClass}
                ${styleClass}
                ${hoverStyleClass}
                ${activeStyleClass}
                ${loadingStyleClass}
                ${iconPositionClass}
                ${borderRadiusClass}
                border border-solid
                shadow-btn-shadow6
                cursor-pointer
        `}
        >
            <div
                className={`
                inline-flex 
                items-end 
                [&[data-loading='true']]:items-center
                gap-1.5 
                relative 
                flex-[0_0_auto]
            `}
            >
                <div
                    className={`
                    relative 
                    w-fit mt-[-1.00px] 
                    whitespace-nowrap 
                    not-italic
                    font-bold lg:font-normal
                    text-xs lg:text-sm
                    uppercase
                    [&[data-loading='true']]:text-transparent
                    text-greenblacks-jade
                `}
                >
                    {IconComponent && <IconComponent className="inline-flex mx-auto" />}
                    <span className="data-[loading=true]:hidden mx-2">{buttonText}</span>
                </div>
                <div
                    className={`
                    text-greenblacks-jade
                    active:text-bluewhites-ghostwhite
                    inline-flex 
                    items-center 
                    gap-1.5 
                    relative
                    uppercase
                `}
                >
                    <Rec className="hidden group-data-[loading=true]:inline-block animate-spin !relative !w-2 !h-2" />
                    <ShapeCircle className="hidden !relative !w-3.5 !h-3.5 group-data-[loading=true]:!w-4 group-data-[loading=true]:!h-4" />
                    <Rec className="hidden group-data-[loading=true]:inline-block animate-spin !relative !w-2 !h-2" />
                </div>
            </div>
        </button>
    );
};
