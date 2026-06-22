import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  distDir: 'dist',
  basePath: '/guilhermevieira', // ← NOME DO SEU REPOSITÓRIO
  images: {
    unoptimized: true,
  },
}

export default nextConfig
