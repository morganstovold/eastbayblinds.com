import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";
import YelpIcon from "./yelpIcon";

export default function Footer() {
	return (
		<footer className="container mx-auto flex flex-col justify-between gap-8 p-6 md:flex-row md:p-8 lg:p-12">
			<div className="flex flex-col justify-between gap-6">
				<div className="flex flex-col gap-4">
					<Logo />
					<p className="text-sm md:text-base">
						Business Hours: Mon-Sat 9am-6pm
					</p>
					<small className="text-xs md:text-sm">
						Licensed & Insured | CA License #985774
					</small>
				</div>
				<small className="text-xs md:text-sm">
					© EAST BAY BLINDS. ALL RIGHTS RESERVED
				</small>
			</div>
			<div className="flex flex-col gap-8 md:flex-row md:gap-16 lg:gap-32">
				<div className="flex flex-col gap-3 md:gap-4">
					<p className="text-base md:text-lg">QUICK LINKS</p>
					<Link
						className="text-muted-foreground text-sm hover:underline"
						href="/"
					>
						HOME
					</Link>
					<Link
						className="text-muted-foreground text-sm hover:underline"
						href="/about"
					>
						ABOUT US
					</Link>
					<Link
						className="text-muted-foreground text-sm hover:underline"
						href="/gallery"
					>
						GALLERY
					</Link>
					<Link
						className="text-muted-foreground text-sm hover:underline"
						href="/contact"
					>
						CONTACT US
					</Link>
				</div>
				<div className="flex flex-col gap-3 md:gap-4">
					<p className="text-base md:text-lg">CONTACT INFORMATION</p>
					<Link
						className="flex items-center gap-3 text-muted-foreground text-sm hover:underline md:text-base"
						href="tel:9252004521"
					>
						<PhoneIcon className="h-4 w-4 flex-shrink-0" />
						(925) 200-4521
					</Link>
					<Link
						className="flex items-center gap-3 text-muted-foreground text-sm hover:underline md:text-base"
						href="mailto:larry@eastbayblinds.com"
					>
						<MailIcon className="h-4 w-4 flex-shrink-0" />
						larry@eastbayblinds.com
					</Link>
					<div className="flex gap-4 text-muted-foreground">
						<Link
							href="https://www.yelp.com/biz/east-bay-blinds-lafayette"
							target="_blank"
						>
							<YelpIcon />
						</Link>
						<Link href="https://www.facebook.com/eastbayblinds" target="_blank">
							<HomeIcon className="h-6 w-6" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
