/** @type {import('next').NextConfig} */
const repoName = '/VESTA-LANDING-PAGE';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  ...(process.env.NODE_ENV === 'production' && {
    basePath: repoName,
    assetPrefix: repoName + '/',
  }),
}

export default nextConfig
