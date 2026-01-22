"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";
import { buttonVariants } from "./ui/button";

interface HeaderProps {
	variant?: "default" | "dark";
}

export default function Header({ variant = "default" }: HeaderProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const isDark = variant === "dark";

	return (
		<>
			<header
				className={`z-50 flex w-full items-center justify-between px-4 py-4 md:px-6 md:py-6 lg:px-12 lg:py-8 ${isDark ? "relative border-gray-200 border-b bg-white text-gray-900" : "absolute top-0 left-0 text-primary-foreground"}`}
			>
				<Logo variant={variant} />

				{/* Desktop Navigation */}
				<div className="hidden items-center space-x-6 md:flex lg:space-x-8">
					<Link className="text-sm hover:underline lg:text-base" href="/">
						HOME
					</Link>
					<Link className="text-sm hover:underline lg:text-base" href="/about">
						ABOUT
					</Link>
					<Link
						className="text-sm hover:underline lg:text-base"
						href="/gallery"
					>
						GALLERY
					</Link>
				</div>

				{/* Desktop CTA */}
				<div className="hidden items-center space-x-4 md:flex lg:space-x-6">
					<Link
						className="font-semibold text-sm hover:underline lg:text-base"
						href="tel:9252004521"
					>
						(925) 200-4521
					</Link>
					<Link
						className={buttonVariants({
							variant: isDark ? "default" : "secondary",
							size: "lg",
						})}
						href="/contact"
					>
						CONTACT US
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button
					aria-label="Toggle menu"
					className="md:hidden"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					type="button"
				>
					{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</header>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="fixed inset-0 z-40 bg-black/95 md:hidden">
					<div className="flex h-full flex-col items-center justify-center space-y-8 text-primary-foreground">
						<Link
							className="font-semibold text-2xl"
							href="/"
							onClick={() => setMobileMenuOpen(false)}
						>
							HOME
						</Link>
						<Link
							className="font-semibold text-2xl"
							href="/about"
							onClick={() => setMobileMenuOpen(false)}
						>
							ABOUT
						</Link>
						<Link
							className="font-semibold text-2xl"
							href="/gallery"
							onClick={() => setMobileMenuOpen(false)}
						>
							GALLERY
						</Link>
						<Link
							className="font-semibold text-2xl"
							href="tel:9252004521"
							onClick={() => setMobileMenuOpen(false)}
						>
							(925) 200-4521
						</Link>
						<Link
							className={buttonVariants({ variant: "secondary", size: "lg" })}
							href="/contact"
							onClick={() => setMobileMenuOpen(false)}
						>
							CONTACT US
						</Link>
					</div>
				</div>
			)}
		</>
	);
}
