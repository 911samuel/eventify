/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  remotePatterns: ["utfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig
