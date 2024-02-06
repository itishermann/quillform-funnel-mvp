/** @type {import('next').NextConfig} */
const path = require("path");
module.exports = {
  transpilePackages: ["@repo/ui"],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};
