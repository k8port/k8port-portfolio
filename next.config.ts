// next.config.ts
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = createMDX({
    extension: /\.mdx?/,
})

const nextConfig: NextConfig = {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'mdx'],
    turbopack: {
    },
    eslint: {
        dirs: ['app', 'components', 'lib', 'pages', 'public', 'styles'],
        ignoreDuringBuilds: true
    },
    // Remove any Webpack-specific configurations if possible
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //   // Custom Webpack configurations
    //   return config;
    // },
};

export default withMDX(nextConfig)