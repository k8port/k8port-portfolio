import React from 'react';
import { motion } from 'framer-motion';
import { animate } from '../../background/Animate';

interface FlowingHairProps {
    children: React.ReactNode;
    svgProps?: React.SVGProps<SVGSVGElement>;
}

export default function FlowingHair({ 
    children, 
    svgProps = {}
}: FlowingHairProps) {
    return (
        <svg {...svgProps} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="hairwave">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.02"
                        numOctaves="2"
                        result="noise">
                        <animate
                            attributeName="baseFrequency"
                            dur="10s"
                            values="0.02;0.005;0.02"
                            repeatCount="indefinite"
                        />
                    </feTurbulence>
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale="10"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </defs>

            <g id="hair" filter="url(#hairwave)">
                {children}
            </g>
        </svg>
    );
}