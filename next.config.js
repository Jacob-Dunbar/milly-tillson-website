/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
  },
};

module.exports = nextConfig;
