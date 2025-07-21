import React from 'react';
import PlaceholderPicture from '../PlaceholderPicture';
import Content from './Content';
import { ImageFrame } from '../../ImageFrame';
import { getFontAwesomeIcon } from '@/lib/actions/getFontAwesomeIcon';

interface ContentBoxProps {
    category?: string;
    title?: string;
    text?: string;
    image?: string;
    has_button?: boolean;
    link?: string;
}

export default function ContentBox({
    category,
    title,
    text,
    image,
    has_button,
    link,
}: ContentBoxProps) {
    const IconComponent = has_button ? getFontAwesomeIcon('Right Arrow') : null;

    return (
        <div className="flex flex-col w-sm h-auto items-center relative bg-brand-secondary border border-solid border-greenwhites-featherwhite rounded-lg">
            {!image && <PlaceholderPicture className="self-stretch h-3xs object-cover w-auto" />}

            {image && (
                <ImageFrame
                    className="self-stretch"
                    imageClassName="object-cover"
                    imageSrc={image}
                    imageAlt="Project Image"
                    imageWidth={348}
                    imageHeight={220}
                />
            )}

            {title && category && text && (
                <Content
                    title={title}
                    category={category}
                    text={text}
                    name="Kate Portalatin"
                    role="Full Stack Engineer"
                />
            )}

            {has_button && (
                <div className="flex items-start p-4">
                    <button className="h-12 w-full items-center justify-center gap-4 pl-0 pr-2 py-4 p-0 cursor-pointer border-t border-greenwhites-featherwhite hover:bg-bluewhites-paperwhite hover:text-accent-accentred hover:shadow-btn-shadow8">
                        <div className="inline-flex items-start justify-center gap-2.5 px-4 py-0 relative flex-[0_0_auto]">
                            <span className="text-accent-accentredvar hover:text-accent-accentpink hover:text-lg text-base align-left relative mt-[-1.00px] whitespace-nowrap">
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    More Info
                                </a>
                            </span>
                            {IconComponent && (
                                <IconComponent className="text-accent-accentredvar hover:text-accent-accentpink hover:w-5 hover:h-5 w-4 h-4 cursor-pointer" />
                            )}
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
}
