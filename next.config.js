/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ["lucide-react"]
  },
  webpack: (config, { isServer }) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: false,
      topLevelAwait: true,
    };
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "fs": false,
      };
    }
    
    return config;
  }
};

module.exports = nextConfig;