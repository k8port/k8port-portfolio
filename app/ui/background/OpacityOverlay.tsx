import React, { forwardRef } from "react";

interface OpacityOverlayProps {
    className?: string;
}

const OpacityOverlay = forwardRef<HTMLDivElement, OpacityOverlayProps>(({ className }, ref) => {
    return (
        <div 
            ref={ref}
            className={`
                bg-gradient-to-b from-brand-primary
                from-35%
                to-brand-primary/0
                ${className}
            `}
        />
    );
});

OpacityOverlay.displayName = 'OpacityOverlay';

export default OpacityOverlay;