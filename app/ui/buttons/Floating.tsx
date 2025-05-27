import React from 'react';
import { useFloating, autoUpdate } from '@floating-ui/react';

export function Floating() {
    const { refs, floatingStyles } = useFloating({
        whileElementsMounted: autoUpdate,
    });
    return (
        <>
            <button ref={refs.setReference}>Button</button>
            <div ref={refs.setFloating} style={floatingStyles}>
                Tooltip
            </div>
        </>
    );
}
