/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Assets are pre-optimised to WebP at build-prep time; the runtime image
    // optimiser (which needs `sharp`) is disabled for this deployment target.
    unoptimized: true,
  },
};

export default nextConfig;
