import React from "react";
import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { roboto } from "./fonts";

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
      <Head>
        <title>Kate Portalatin | Software Engineer</title>
        <meta
          name="description"
          content="Kate Portalatin's portfolio build using Next.js 13, Tailwind CSS, and TypeScript"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="k8port | Kate Portalatin" />
        <meta
          property="og:description"
          content="Kate Portalatin's software portfolio built using Next.js 13."
        />
        <meta property="og:url" content="https://k8port.github.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={` ${roboto.className} `}>
        <Header className="fixed top-0 z-50 mb-4" />
        <main
          className={`grid grid-cols-12 gap-2 scroll-smooth`} 
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer className="fixed bottom-0 z-50" />
      </body>
    </html>
  );
}
