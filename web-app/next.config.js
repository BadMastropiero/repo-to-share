const {i18n} = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // Disabled due to lottie errors on prod build
  // Also disabled is smaller the js exported
  swcMinify: false,
  images: {
    domains: [
      'images.ctfassets.net',
      'lh3.googleusercontent.com',
      'tetraimpacts-web-app-staging.vercel.app',
      'tetraimpacts.com',
    ],
  },
  i18n,
};

module.exports = nextConfig;
