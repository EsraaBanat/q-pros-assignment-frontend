/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const nodeEnv = process.env.NODE_ENV;
    // const destination = "http://localhost:3001/:path*";
    const destination = "https://q-pros-assignment.up.railway.app/:path*";

    return [
      {
        source: "/api/:path*",
        destination,
      },
    ];
  },
};

module.exports = nextConfig;
