/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allows any domain
      },
    ],
    unoptimized: false, // set to true if you want to skip all optimization
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
