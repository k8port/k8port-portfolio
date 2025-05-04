import React from "react";
// Define the Metadata type locally to avoid import errors
interface Metadata {
  title?: string;
  description?: string;
  icons?: {
    icon?: string;
    apple?: string;
  };
}
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./ui/header/Header";
import { dmSerifDisplay, greatVibes, martianMono, spaceGrotesk, cormorantGaramond } from "./styles/typography/fonts";

export const metadata: Metadata = {
  title: "k8port | Kate Portalatin",
  description:
    "Kate Portalatin's (k8port) portfolio build using Next.js 13, Tailwind CSS, and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
          <body className={`
            ${spaceGrotesk.variable} 
            ${dmSerifDisplay.variable}
            ${greatVibes.variable}
            ${martianMono.variable}
            ${cormorantGaramond.variable}
            font-spacegrotesk
            flex
            flex-col
            bg-brand-primary
            antialiased
            overflow-x-hidden
          `}>
            <Header />
            <main>
              {children}
            </main>
          </body>
          <Analytics />
          <SpeedInsights />
        {/* <Footer className="fixed bottom-0 z-50" /> */} 
    </html>
  );
}
