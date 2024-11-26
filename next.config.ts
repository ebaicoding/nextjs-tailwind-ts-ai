/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nextjs-tailwind-ts-ai',
  images: {
    loader: 'custom',
    loaderFile: './app/utils/imageLoader.ts',
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  assetPrefix: '/nextjs-tailwind-ts-ai/',
}

module.exports = nextConfig
