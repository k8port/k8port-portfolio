import React from "react";

interface GradientOverlayProps {
    className: string;
}

export const GradientOverlay = ({ className }: GradientOverlayProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b 
        from-[theme(colors.brand.quinaryvar)] 
        to-[theme(colors.accent.accentred)] mix-blend-hard-light"></div>
    </div>
  );
};

export default GradientOverlay;
