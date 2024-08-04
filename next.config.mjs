/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },

      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },

      {
        protocol: "https",
        hostname: "*.suckless.org",
      },

      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },

      {
        protocol: "https",
        hostname: "wiki.installgentoo.com",
      },
    ],
  },
};

export default nextConfig;
