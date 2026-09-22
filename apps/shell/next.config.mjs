/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/dashboard/:path*',
        destination: 'http://localhost:3001/:path*',
      },
      {
        source: '/module-a/:path*',
        destination: 'http://localhost:3002/:path*',
      },
      {
        source: '/module-b/:path*',
        destination: 'http://localhost:3003/:path*',
      },
    ];
  },
};

export default nextConfig;
