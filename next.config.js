/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  env: { NEXTAUTH_URL: "https://app-next-schema.vercel.app" },
  images: {
    domains: ["raw.githubusercontent.com", "i.ibb.co"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
