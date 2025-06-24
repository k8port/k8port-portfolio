import { motion } from 'framer-motion';
import React from 'react';

// components/PhotoOrb.jsx
export default function PhotoOrb({ show }: { show: boolean }) {
    return (
        <motion.img
            src="/images/abstract-profile/abstract-profile-BG-sunset.svg"
            alt="Full photo orb"
            initial={{ opacity: 1 }}
            animate={{ opacity: show ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full object-cover rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
    );
}
