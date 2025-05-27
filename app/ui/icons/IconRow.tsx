import React from 'react';
import { getFontAwesomeIcon } from '../../styles/icons';

interface IconRowProps {
    icons: { name: string; className?: string }[];
}

const IconRow: React.FC<IconRowProps> = ({ icons }) => {
    return (
        <div className="flex items-center justify-center gap-2 mt-2">
            {icons.map((icon, index) => {
                const IconComponent = getFontAwesomeIcon(icon.name);
                return (
                    IconComponent && (
                        <IconComponent
                            key={index}
                            className={`font-sans text-base ${icon.className || 'text-blackplum'}`}
                        />
                    )
                );
            })}
        </div>
    );
};

export default IconRow;
