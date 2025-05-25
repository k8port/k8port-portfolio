import { neutral_blacks } from '../colors/neutrals/blacks';
import { neutral_whites } from '../colors/neutrals/whites';
import { neutral_grays } from '../colors/neutrals/grays';
import { neutral_browns } from '../colors/neutrals/browns';
import { theme } from "./theme_light";
import { darkThemeColors } from "./theme_dark";
import { typography } from "../typography/typography";
import { lightThemeButtonShadows, darkThemeButtonShadows } from "./shadows";

export const themeConfig = {
  colors: {
    ...theme.colors,
    ...darkThemeColors,
    ...neutral_blacks,
    ...neutral_grays,
    ...neutral_browns,
    ...neutral_whites,
  },
  typography: {
    ...typography.font,
  },
  shadows: {
    ...theme.shadows,
    ...lightThemeButtonShadows,
    ...darkThemeButtonShadows,
  },
  spacing: {
    'header': 'var(--header-height)',
    'footer': 'var(--footer-margin)',
  },
  screens: {
    'xs': '480px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'lg-dt': '1025px',
    'xl': '1200px',
    '2xl': '1400px',
    '3xl': '1600px',
    '4xl': '1800px',
    '5xl': '2000px',
  },
  transition: {
    'default': 'all 0.3s ease-in-out',
    'fast': 'all 0.15s ease-in-out',
    'slow': 'all 0.5s ease-in-out',
  },
  zIndex: {
    'header': '50',
    'modal': '100',
    'tooltip': '200',
  },
} as const;