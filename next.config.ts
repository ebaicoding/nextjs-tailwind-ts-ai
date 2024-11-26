/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nextjs-tailwind-ts-ai',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/nextjs-tailwind-ts-ai',
  // Remove custom loader configuration
}

module.exports = nextConfig
