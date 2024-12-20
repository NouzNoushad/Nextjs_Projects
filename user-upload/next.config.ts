import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**'
            }
        ],
        // domains: ['res.cloudinary.com'],
    },
};

export default nextConfig;
