// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove any Webpack-specific configurations if possible
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Custom Webpack configurations
  //   return config;
  // },
};

module.exports = nextConfig;
