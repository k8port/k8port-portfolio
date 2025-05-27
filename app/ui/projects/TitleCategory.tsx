import React from 'react';

interface TitleCategoryProps {
    title: string;
    category: string;
}

export default function TitleCategory({ title, category }: TitleCategoryProps) {
    return (
        <div className="inline-flex flex-col items-start gap-1 relative">
            <div className="relative w-xs mt-[-1.00px] subtitle-m text-redblacks-blackplum">
                {category}
            </div>
            <h4 className="relative w-xs text-redblacks-blackplum">{title}</h4>
        </div>
    );
}
