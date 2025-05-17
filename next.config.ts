import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pub-bd030be048334ccb85b400876a5cab94.r2.dev',
                pathname: '/test-storage/**'
            },
        ],
    },
};

export default nextConfig;
