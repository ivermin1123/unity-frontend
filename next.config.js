/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enable: false,
// });

// eslint-disable-next-line immutable/no-mutation
module.exports = nextConfig;
