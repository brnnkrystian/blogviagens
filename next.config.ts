import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'anselmohoffmann.com.br' },
      { protocol: 'https', hostname: 'oficinadeinverno.com.br' },
      { protocol: 'https', hostname: 'blog.getmalas.com.br' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

export default nextConfig
