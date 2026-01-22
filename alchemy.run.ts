import alchemy from "alchemy";
import { Nextjs, R2Bucket } from "alchemy/cloudflare";
import { GitHubComment } from "alchemy/github";
import { CloudflareStateStore, SQLiteStateStore } from "alchemy/state";

const app = await alchemy("eastbayblinds-com", {
	stateStore: (scope) =>
		scope.local ? new SQLiteStateStore(scope) : new CloudflareStateStore(scope, {
			scriptName: "eastbayblinds-com-state",
		}),
});

const r2 = await R2Bucket("r2");

export const website = await Nextjs("website", {
	adopt: true,
	bindings: {
		RESEND_API_KEY: alchemy.secret(process.env.RESEND_API_KEY),
		NEXT_INC_CACHE_R2_BUCKET: r2,
	},
});

if (process.env.PULL_REQUEST) {
	// if this is a PR, add a comment to the PR with the preview URL
	// it will auto-update with each push
	await GitHubComment("preview-comment", {
		owner: "morganstovold",
		repository: "eastbayblinds.com",
		issueNumber: Number(process.env.PULL_REQUEST),
		body: `## 🚀 Preview Deployed

Your changes have been deployed to a preview environment:

**🌐 Website:** ${website.url}

Built from commit ${process.env.GITHUB_SHA?.slice(0, 7)}

+---
<sub>🤖 This comment updates automatically with each push.</sub>`,
	});
}

await app.finalize();
