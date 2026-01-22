interface LogoProps {
	variant?: "default" | "dark";
}

export default function Logo({ variant = "default" }: LogoProps) {
	return (
		<h3 className={variant === "dark" ? "text-gray-900" : ""}>
			EAST BAY BLINDS
		</h3>
	);
}
