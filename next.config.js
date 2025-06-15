/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['d2jb2caottkk25.cloudfront.net'],
    formats: ['image/avif', 'image/webp'],
  },
  // Disable experimental features that might be causing memory issues
  experimental: {
    // optimizeCss: true, // Removing this as it may be causing memory issues
  },
  // Reduce memory usage during build
  webpack: (config, { dev, isServer }) => {
    // Optimize for memory usage in production builds
    if (!dev) {
      config.optimization.minimize = true;
      
      // Limit parallel operations
      config.parallelism = 1;
    }
    
    return config;
  },
}

module.exports = nextConfig
