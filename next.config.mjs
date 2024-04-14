/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
  },
};

export default nextConfig;
