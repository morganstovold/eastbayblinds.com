"use client";

interface ScrollToTopButtonProps {
	className?: string;
	children: React.ReactNode;
}

export function ScrollToTopButton({
	className,
	children,
}: ScrollToTopButtonProps) {
	return (
		<button
			className={className}
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			type="button"
		>
			{children}
		</button>
	);
}
