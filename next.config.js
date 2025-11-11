/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The "experimental" block below is outdated; remove deprecated keys
  experimental: {
    // serverActions is enabled by default; no need to set
    // reactCompiler is no longer valid
  },
};

module.exports = nextConfig;
