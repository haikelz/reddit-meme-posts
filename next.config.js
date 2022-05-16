/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "external-preview.redd.it",
      "preview.redd.it",
      "i.redd.it",
      "imgur.com",
    ],
  },
};

module.exports = nextConfig;
