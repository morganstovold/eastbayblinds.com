import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
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
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;

initOpenNextCloudflareForDev();
