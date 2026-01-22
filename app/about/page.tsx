import { CheckCircle, ChevronRight, Phone, Star } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LARRYHeadshot from "@/assets/new/Larry-Collins.jpg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "About Larry Collins | Family-Owned Since 2006 | East Bay Blinds",
	description:
		"Meet Larry Collins, owner of East Bay Blinds. 20+ years experience, 100+ 5-star reviews. Hunter Douglas & Norman authorized dealer. Personally handles every consultation and installation in Lafayette, Walnut Creek, Orinda.",
	alternates: {
		canonical: "https://www.eastbayblinds.com/about",
	},
	openGraph: {
		title: "About Larry Collins | Family-Owned Since 2006 | East Bay Blinds",
		description:
			"Meet Larry Collins, owner of East Bay Blinds. 20+ years experience, 100+ 5-star reviews.",
		url: "https://www.eastbayblinds.com/about",
	},
};

const values = [
	{
		title: "Personal Service",
		description:
			"Larry personally handles every consultation and installation. No salespeople, no subcontractors—just direct communication with the owner.",
	},
	{
		title: "Expert Guidance",
		description:
			"With over 20 years of experience, Larry provides honest recommendations based on your needs and budget, not commission targets.",
	},
	{
		title: "Quality Products",
		description:
			"As an authorized Hunter Douglas and Norman USA dealer, we offer only premium products backed by full manufacturer warranties.",
	},
	{
		title: "Local Commitment",
		description:
			"We live and work in the East Bay. Our reputation in the community matters to us, which is why we stand behind every installation.",
	},
];

export default function AboutPage() {
	return (
		<div className="relative flex flex-col">
			<Header variant="dark" />

			{/* MEET LARRY */}
			<section className="bg-white py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="mx-auto max-w-4xl">
						<div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
							{/* Circular Avatar */}
							<div className="shrink-0">
								<div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-gray-100 shadow-lg md:h-48 md:w-48">
									<Image
										alt="Larry Collins, Owner of East Bay Blinds"
										className="object-cover object-[20%_center]"
										fill
										src={LARRYHeadshot}
									/>
								</div>
							</div>

							{/* Story Content */}
							<div>
								<h1 className="mb-1 font-bold text-3xl tracking-tight md:text-4xl">
									Meet Larry Collins
								</h1>
								<p className="mb-6 text-gray-600">
									Owner & Founder • Serving the East Bay since 2006
								</p>

								<div className="space-y-4 text-gray-700">
									<p className="leading-relaxed">
										I started East Bay Blinds with a simple philosophy: treat
										every home like it's my own. After working in the window
										treatment industry and seeing how impersonal the experience
										could be, I knew there had to be a better way.
									</p>
									<p className="leading-relaxed">
										Today, I still personally handle every consultation and
										installation. When you call East Bay Blinds, you're talking
										to me—not a call center. When I measure your windows and
										recommend products, I'm drawing on over 20 years of
										experience, not reading from a script.
									</p>
									<p className="leading-relaxed">
										My goal is simple: help you find the right window treatments
										for your home and budget, then install them perfectly. No
										pressure, no games—just honest advice and quality work.
									</p>
								</div>

								<div className="mt-6 flex items-center gap-2">
									<div className="flex">
										{[...new Array(5)].map((_, i) => (
											<Star
												className="h-5 w-5 fill-yellow-400 text-yellow-400"
												key={i}
											/>
										))}
									</div>
									<span className="text-gray-600 text-sm">
										100+ Five Star Reviews
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* OUR VALUES */}
			<section className="bg-gray-50 py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="mx-auto mb-12 max-w-3xl text-center">
						<h2 className="mb-4 font-bold text-2xl md:text-3xl lg:text-4xl">
							What Sets Us Apart
						</h2>
						<p className="text-gray-600 md:text-lg">
							In a world of big-box stores and impersonal service, we do things
							differently.
						</p>
					</div>

					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
						{values.map((value) => (
							<div
								className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
								key={value.title}
							>
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
									<CheckCircle className="h-5 w-5 text-primary" />
								</div>
								<h3 className="mb-2 font-semibold text-lg">{value.title}</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA SECTION */}
			<section className="bg-background-alt py-16 text-white md:py-24">
				<div className="container mx-auto px-4 text-center">
					<div className="mx-auto max-w-3xl">
						<h2 className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl">
							Ready to Get Started?
						</h2>
						<p className="mb-8 text-gray-300 md:text-lg">
							Schedule a free consultation and see why East Bay homeowners have
							trusted Larry with their window treatments since 2006.
						</p>
						<div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
							<Link
								className={buttonVariants({
									size: "lg",
									variant: "secondary",
									className: "w-full md:w-auto",
								})}
								href="/contact"
							>
								Schedule Free Consultation
								<ChevronRight className="ml-2 h-5 w-5" />
							</Link>
							<span className="text-gray-300 text-sm">or</span>
							<Link
								className="inline-flex items-center gap-2 font-semibold text-lg hover:underline"
								href="tel:9252004521"
							>
								<Phone className="h-5 w-5" />
								(925) 200-4521
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
