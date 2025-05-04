import React from "react";

export default function OpacityOverlay() {
    return (
        <div className={`
            w-full h-full
            bg-gradient-to-b from-brand-primary
            to-brand-primary/20
            to-brand-primary/0
        `}>
        </div>
    );
}