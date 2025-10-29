/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // ✅ needed for App Router
  },
};

export default nextConfig;