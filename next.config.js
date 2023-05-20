/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};
module.exports = nextConfig;
