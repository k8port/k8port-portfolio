'use client';
// src/components/AnimatedMuseSVG.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MUSES } from '../../../data/MUSES';

const rand = (min: number, max: number) => Math.random() * (max - min) + min;
const isFalling = () => Math.random() < 0.45;

const CONFETTI_TO_HAIR_COLOR: Readonly<Record<string, string>> = {
    '#00CED1': '#3E2F84',
    '#50C878': '#E6A6BE',
    '#595652': '#595652',
    '#870074': '#870074',
    '#8DA399': '#595652',
    '#F3DECA': '#F0C0A8',
    '#F8F9F5': '#F8F9F5',
    '#FF00FF': '#FF33CC',
    '#FF2400': '#FF2400',
    '#FF5A36': '#F88379',
    '#FFFD01': '#E0B0FF',
};

interface AnimatedMuseSVGProps {
    className?: string;
}

export default function AnimatedMuseSVG({ className }: AnimatedMuseSVGProps) {
    const screenW = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const screenH = typeof window !== 'undefined' ? window.innerHeight : 1080;

    type MuseAnimation = {
        x: number | number[];
        y: number | number[];
        rotate: number | number[];
        opacity?: number[];
    };
    type MuseTransition = {
        duration: number;
        ease: 'easeInOut';
        repeat: number;
        repeatType: 'loop';
        delay: number;
        times?: number[];
    };

    return (
        <div className="w-full relative">
            <motion.svg
                viewBox="0 0 256 324"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className={`
                    w-full h-auto overflow-visible
                    transition-all duration-300
                    dark:[filter:invert(1)_hue-rotate(180deg)_brightness(1.05)_contrast(1.15)]
                    ${className}
                `}
            >
                {MUSES.map(({ id, paths }, i) => {
                    // generate per-muse random target

                    const falling = isFalling();

                    // swirling animation (l <- r)
                    const swirlTo = {
                        x: rand(-screenW * 4, -screenW),
                        y: rand(-215, 215),
                        rotate: rand(-2160, 2160),
                    };

                    // drift downward animation
                    const fallTo = {
                        x: swirlTo.x + rand(-200, 200),
                        y: screenH + rand(100, 400),
                        rotate: rand(-90, 90),
                    };

                    let animate: MuseAnimation;
                    let transition: MuseTransition;

                    if (falling) {
                        animate = {
                            x: [screenW, swirlTo.x, fallTo.x],
                            y: [0, swirlTo.y, fallTo.y],
                            rotate: [0, swirlTo.rotate, fallTo.rotate],
                            opacity: [1, 1, 0],
                        };

                        transition = {
                            duration: rand(20, 30),
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'loop',
                            delay: rand(5, 7),
                            times: [0, 0.3, 1],
                        };
                    } else {
                        animate = { ...swirlTo, opacity: [1] };
                        transition = {
                            duration: rand(8, 16),
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'loop',
                            delay: i * 0.3,
                        };
                    }

                    return (
                        <motion.g
                            key={id}
                            id={id}
                            initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                            animate={animate}
                            transition={transition}
                        >
                            {paths.map((attrs, j) => {
                                const fill = CONFETTI_TO_HAIR_COLOR[attrs.fill];

                                if (!fill) {
                                    throw new Error(`Missing hair color for confetti fill ${attrs.fill}`);
                                }

                                return <path key={j} {...attrs} fill={fill} />;
                            })}
                        </motion.g>
                    );
                })}
            </motion.svg>
        </div>
    );
}
