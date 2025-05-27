import React from 'react';
import Image from 'next/image';
import Tooltip from '../buttons/Tooltip';

interface CreativeTypeProps {
    src: string;
    className?: string;
}

export default function CreativeType({ src, className }: CreativeTypeProps) {
    return (
        <div className={'flex-col items-center justify-center md:justify-end'}>
            <Tooltip message="Click me to discover your creative type...">
                <Image
                    className={`${className} cursor-pointer object-cover`}
                    src={src}
                    alt="Creative Type"
                    width={270}
                    height={480}
                    onClick={() => window.open('https://mycreativetype.com', '_blank')}
                />
            </Tooltip>
        </div>
    );
}
