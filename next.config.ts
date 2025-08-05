import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/request-consultation",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
