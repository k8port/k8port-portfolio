import React from 'react';

interface AnimateProps {
    max: number;
    min: number;
}

const rand = () => {
    return Math.floor(Math.random() * 100);
};

export const animate = {
    float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
    },
};
