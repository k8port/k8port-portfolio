import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { themeConfig } from './app/styles/theme/theme.config';

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: themeConfig.colors,
      fontFamily: themeConfig.typography,
      boxShadow: themeConfig.shadows,
      spacing: themeConfig.spacing,
      screens: themeConfig.screens,
      animation: themeConfig.animation,
      keyframes: themeConfig.keyframes,
      transitionProperty: themeConfig.transition,
      zIndex: themeConfig.zIndex,
    },
  },
  plugins: [],
} satisfies Config;
