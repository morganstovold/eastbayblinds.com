import Image from "next/image";
import LogoImage from "@/assets/EastBayBlinds-logo.png";

interface LogoProps {
	variant?: "default" | "dark";
}

export default function Logo({ variant = "default" }: LogoProps) {
	return (
		<h3 className={variant === "dark" ? "text-gray-900" : ""}>
			<Image
				alt="East Bay Blinds Logo"
				height={100}
				src={LogoImage}
				width={200}
			/>
		</h3>
	);
}
