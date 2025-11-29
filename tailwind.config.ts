import type { Config } from 'tailwindcss';
import { themeConfig } from './app/styles/theme/theme.config';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */ 
export default {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: themeConfig.colors,
            fontFamily: themeConfig.typography,
            boxShadow: themeConfig.shadows,
            spacing: themeConfig.spacing,
            screens: themeConfig.screens,
            textShadow: themeConfig.textShadow,
            transitionProperty: themeConfig.transition,
            zIndex: themeConfig.zIndex,
        },
    },
    plugins: [typography],
} satisfies Config;