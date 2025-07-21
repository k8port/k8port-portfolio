// app/fonts.ts
import {
    Space_Grotesk,
    DM_Serif_Display,
    Great_Vibes,
    Martian_Mono,
    Cormorant_Garamond,
    Lobster,
    Bodoni_Moda_SC
} from 'next/font/google';

export const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-spaceGrotesk',
    display: 'swap',
});

export const dmSerifDisplay = DM_Serif_Display({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-dmSerifDisplay',
    display: 'swap',
});

export const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-lobster',
    display: 'swap',
});

export const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-greatVibes',
    display: 'swap',
});

export const martianMono = Martian_Mono({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-martianMono',
    display: 'swap',
});

export const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-cormorantGaramond',
    display: 'swap',
});

export const bodoniModaSC = Bodoni_Moda_SC({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bodoniModaSC',
    display: 'swap',
});
