// app/fonts.ts
import {
  Lobster,
  Martian_Mono,
  Space_Grotesk,
  Ballet,
  Cormorant_Garamond,
  Sail,
  Playfair_Display,
  Roboto,
} from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-spaceGrotesk",
  display: "swap",
});

// Other fonts – use these on a per-component basis.
export const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lobster",
  display: "swap",
});

export const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-martianMono",
  display: "swap",
});

export const ballet = Ballet({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ballet",
  display: "swap",
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorantGaramond",
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfairDisplay",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
  display: "swap",
});

export const sail = Sail({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sail",
  display: "swap",
});
