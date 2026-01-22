import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Thank You",
	description:
		"Thank you for contacting East Bay Blinds. We'll be in touch soon.",
};

export default function ThankYouPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 text-center">
			<div className="flex max-w-2xl flex-col items-center gap-6">
				<h1 className="font-bold text-5xl">Thank You!</h1>
				<p className="text-muted-foreground text-xl">
					We've received your message and will get back to you within 24 hours.
				</p>
				<p className="text-lg text-muted-foreground">
					Looking forward to helping you find the perfect window treatments for
					your home.
				</p>
				<Link href="/">
					<Button size="lg" variant="default">
						Back to Home
						<ChevronRight />
					</Button>
				</Link>
			</div>
		</div>
	);
}
