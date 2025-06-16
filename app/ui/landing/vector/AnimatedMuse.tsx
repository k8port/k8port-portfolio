// src/components/AnimatedMuseSVG.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MUSES } from '../../../data/MUSES';

const rand = (min: number, max: number) => Math.random()*(max-min)+min;

interface AnimatedMuseSVGProps {
    className?: string;
}

export default function AnimatedMuseSVG({ className }: AnimatedMuseSVGProps) {
    return (
        <div className="w-full relative">
            <motion.svg
                viewBox="0 0 256 324"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-full h-auto overflow-visible ${className}`}
            >
                {MUSES.map(({id, paths}, i) => {
                    // generate per-muse random target
                    const to = {
                        x: rand(-2000, 0),
                        y: rand(-100, 100),
                        rotate: rand(-2160, 2160)
                    };
                    const delay = i * 0.3;
        
                    return (
                        <motion.g
                            key={id} id={id}
                            initial={{ x:0, y:0, rotate:0 }}
                            animate={to}
                            transition={{
                                duration: rand(8,16),
                                ease: 'easeInOut',
                                repeat: Infinity,
                                repeatType: 'loop',
                                delay
                            }}
                        > 
                            {paths.map((attrs, j) => (
                                <path key={j} {...attrs} />
                            ))}
                        </motion.g>
                    );
                })}
            </motion.svg>

        </div>
    );
}
