import React from 'react';
import Image from 'next/image';

interface PlaceholderPictureProps {
    className?: string;
}

export default function PlaceholderPicture({ className }: PlaceholderPictureProps) {
    return (
        <div className={`${className}`}>
            <Image src="/images/placeholder.png" alt="Placeholder" width={380} height={220} />
        </div>
    );
}
