import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	poweredByHeader: false,
	redirects: async () => {
		return [
			{
				source: "/request-consultation",
				destination: "/contact",
				permanent: true,
			},
		];
	},
	turbopack: {
		resolveAlias: {
			"@/*": [path.resolve(__dirname, "./*")],
		},
	},
};

export default nextConfig;
