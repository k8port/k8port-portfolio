import React from 'react'
import { motion } from 'framer-motion';

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

function Floating({ children, index }: { children: React.ReactNode; index: number }) {
    return (
        <motion.g
            initial={{ x: 0, y: 0, rotate: 0 }}
            animate={{
                x: rand(-60, 60),
                y: rand(-40, 40),
                rotate: rand(-180, 180)
            }}
            transition={{
                duration: rand(8, 16),
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: index * 0.2
            }}
        >
            {children}
        </motion.g>
    );
}

export default Floating;