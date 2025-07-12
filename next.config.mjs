/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /LICENSE$/,
      use: 'raw-loader',
    });

    config.module.rules.push({
      test: /\.node$/,
      use: 'file-loader',
    });

    config.module.rules.push({
      test: /\.d\.ts$/,
      loader: 'ignore-loader'
    });

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "node-fetch": false,
        "fs": false,
      };
    }

    return config;
  },
};

export default nextConfig;