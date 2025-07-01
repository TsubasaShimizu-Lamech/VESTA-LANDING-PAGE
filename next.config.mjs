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
  // カスタムドメインを使用する場合はbasePathとassetPrefixを無効化
  ...(process.env.NODE_ENV === 'production' && !process.env.CUSTOM_DOMAIN && {
    basePath: repoName,
    assetPrefix: repoName + '/',
  }),
}

export default nextConfig
