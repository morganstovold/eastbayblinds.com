import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	poweredByHeader: false,
	turbopack: {
		resolveAlias: {
			"@/*": "./*",
		},
	},
	redirects: async () => {
		return [
			{
				source: "/request-consultation",
				destination: "/contact",
				permanent: true,
			},
		];
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;