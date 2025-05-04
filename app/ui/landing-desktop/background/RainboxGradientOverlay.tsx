import React from "react";

interface GradientOverlayProps {
    className: string;
    innerClassName: string;
}

export default function RainbowGradientOverlay({ className, innerClassName }: GradientOverlayProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className={`
        absolute inset-0 bg-gradient-to-b 
        from-brand-quinaryvar 
        to-accent-accentpinkvar 
        ${innerClassName}
      `}></div>
    </div>
  );
};
