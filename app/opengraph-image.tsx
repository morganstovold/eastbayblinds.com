import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "East Bay Blinds - Custom Window Treatments";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				fontSize: 60,
				background: "linear-gradient(to bottom, #1f2937, #111827)",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				color: "white",
				padding: "40px",
			}}
		>
			<div style={{ fontSize: 80, fontWeight: "bold", marginBottom: 20 }}>
				East Bay Blinds
			</div>
			<div style={{ fontSize: 40, opacity: 0.9, textAlign: "center" }}>
				Custom Window Treatments Lafayette, CA
			</div>
			<div
				style={{
					fontSize: 30,
					opacity: 0.8,
					marginTop: 40,
					display: "flex",
					gap: 30,
				}}
			>
				<span>⭐ 100+ 5-Star Reviews</span>
				<span>📞 (925) 200-4521</span>
			</div>
		</div>,
		{
			...size,
		}
	);
}
