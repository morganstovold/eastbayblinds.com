import { CheckCircle, ChevronRight, Phone, Star } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SWImage from "@/assets/Hero-Shades.webp";
import MOImage from "@/assets/new/HD/motorized.png";
import LPCImage from "@/assets/new/HD/roller-shades.webp";
import HeroImage from "@/assets/new/HD/shades.webp";
import EEImage from "@/assets/new/HD/soft-blinds.webp";
import LARRYHeadshot from "@/assets/new/larry.jpg";
import NORMANImage from "@/assets/new/NORMAN/1844-x-1038_Photo_Shutters_06.jpg";
import PSImage from "@/assets/new/NORMAN/1844-x-1038_Photo_Shutters_14.jpg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Custom Blinds, Shutters & Shades Lafayette | East Bay Blinds",
	description:
		"Lafayette's trusted window treatment specialist since 2006. Hunter Douglas & Norman authorized dealer. 100+ 5-star reviews. Free consultation. Serving Lafayette, Walnut Creek, Orinda, Moraga. Call (925) 200-4521.",
	alternates: {
		canonical: "https://www.eastbayblinds.com",
	},
	openGraph: {
		title: "Custom Blinds, Shutters & Shades Lafayette | East Bay Blinds",
		description:
			"Family-owned since 2006. Hunter Douglas & Norman authorized dealer. 100+ 5-star reviews. Free consultation.",
		url: "https://www.eastbayblinds.com",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "East Bay Blinds - Custom Window Treatments",
			},
		],
	},
};

export default function HomePage() {
	return (
		<div className="relative flex flex-col">
			<Header />

			{/* HERO SECTION */}
			<section className="relative flex min-h-[100svh] w-full items-center md:min-h-[600px] lg:min-h-[80vh]">
				<Image
					alt="Expert Window Treatment Solutions for Your Home"
					className="absolute inset-0 z-0 object-cover"
					fill
					priority
					src={HeroImage}
				/>
				{/* Stronger gradient for better text readability */}
				<div className="absolute inset-0 z-1 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

				<div className="container relative z-2 mx-auto px-4 py-24 md:py-20">
					{/* Max-width container so it doesn't look lost on 4K */}
					<div className="mx-auto max-w-4xl text-center">
						{/* Top badge - single on mobile, all three on desktop */}
						<div className="mb-4 flex flex-wrap items-center justify-center gap-2 md:mb-6 md:gap-3">
							<div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/40 px-2.5 py-1 backdrop-blur-md md:gap-2 md:px-4 md:py-2">
								<span className="font-medium text-[11px] text-white md:text-xs">
									Family-Owned Since 2006
								</span>
							</div>
							<Link
								className="hidden items-center gap-2 rounded-full border border-white/30 bg-black/40 px-4 py-2 backdrop-blur-md transition hover:border-white/50 hover:bg-black/50 sm:inline-flex"
								href="https://www.yelp.com/biz/east-bay-blinds-benicia-2"
								target="_blank"
							>
								<span className="font-semibold text-white text-xs">
									100+ Reviews
								</span>
							</Link>
							<div className="hidden items-center gap-2 rounded-full border border-white/30 bg-black/40 px-4 py-2 backdrop-blur-md md:inline-flex">
								<CheckCircle className="h-3 w-3" />
								<span className="font-semibold text-white text-xs">
									Licensed & Insured
								</span>
							</div>
						</div>

						{/* Headline with text shadow for better readability */}
						<h1 className="mb-3 font-bold text-2xl text-white tracking-tight drop-shadow-2xl [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)] md:mb-6 md:text-5xl lg:text-6xl">
							Expert Window Treatments for Your Home
						</h1>

						{/* Subheadline - shorter on mobile */}
						<p className="mb-5 text-sm text-white/90 drop-shadow-lg [text-shadow:_0_1px_8px_rgb(0_0_0_/_70%)] md:mb-8 md:text-xl">
							<span className="hidden md:inline">
								Authorized Hunter Douglas & Norman USA dealer serving Lafayette,
								Walnut Creek, Orinda, and the East Bay with personal service and
								expert guidance.
							</span>
							<span className="md:hidden">
								Hunter Douglas & Norman dealer serving the East Bay.
							</span>
						</p>

						{/* CTAs - side by side on desktop, stacked on mobile */}
						<div className="mb-6 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center md:mb-8 md:gap-4">
							<Link
								className={buttonVariants({
									size: "default",
									variant: "secondary",
									className:
										"flex w-full items-center justify-center gap-2 text-sm shadow-xl sm:w-auto md:text-base",
								})}
								href="/contact"
							>
								Schedule Free Consultation
								<ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
							</Link>
							<Link
								className={buttonVariants({
									size: "default",
									variant: "outline",
									className:
										"flex w-full items-center justify-center gap-2 border-white bg-white/10 text-sm text-white shadow-xl backdrop-blur-md hover:bg-white/20 sm:w-auto md:text-base",
								})}
								href="tel:9252004521"
							>
								<Phone className="h-4 w-4 md:h-5 md:w-5" />
								(925) 200-4521
							</Link>
						</div>

						{/* Bottom trust signals - hidden on mobile */}
						<div className="hidden flex-wrap items-center justify-center gap-6 text-sm text-white drop-shadow-lg sm:flex">
							<div className="flex items-center gap-2">
								<CheckCircle className="h-4 w-4" />
								<span>No Pressure Consultations</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle className="h-4 w-4" />
								<span>Free In-Home Estimates</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle className="h-4 w-4" />
								<span>Same-Day Response</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FIND YOUR SOLUTION - REDESIGNED */}
			<section className="bg-gray-50 py-16 md:py-24 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
						<p className="mb-3 font-medium text-primary text-sm uppercase tracking-wider md:text-base">
							It's your home, Get inspired
						</p>
						<h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl">
							Find Your Perfect Solution
						</h2>
						<p className="text-base text-gray-600 md:text-lg">
							Whether you need light control, privacy, energy efficiency, or
							smart home integration, we have the perfect window treatment
							solution for your home.
						</p>
					</div>

					{/* Equal-sized flex grid - all same size */}
					<div className="flex flex-wrap justify-center gap-6 lg:gap-8">
						{[
							{
								title: "Light & Privacy Control",
								desc: "Manage natural light throughout the day while maintaining privacy",
								image: PSImage,
							},
							{
								title: "Privacy & Sleep",
								desc: "Complete blackout solutions for bedrooms and media rooms",
								image: LPCImage,
							},
							{
								title: "Energy Efficient",
								desc: "Reduce heating and cooling costs with insulating window treatments",
								image: EEImage,
							},
							{
								title: "Motorized Options",
								desc: "Smart home integration with voice and app control",
								image: MOImage,
							},
							{
								title: "Specialty Windows",
								desc: "Custom solutions for unique shapes and hard-to-reach windows",
								image: SWImage,
							},
						].map((item) => (
							<Link
								className="group relative flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.334rem)]"
								href="/contact"
								key={item.title}
							>
								<div className="relative h-48 w-full overflow-hidden md:h-56">
									<Image
										alt={item.title}
										className="absolute inset-0 object-cover transition duration-300 group-hover:scale-105"
										fill
										src={item.image}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
								</div>
								<div className="flex flex-1 flex-col p-6">
									<h3 className="mb-2 font-semibold text-xl">{item.title}</h3>
									<p className="mb-4 text-gray-600 text-sm">{item.desc}</p>
									<div className="mt-auto flex items-center gap-2 font-medium text-primary text-sm transition-all group-hover:gap-3">
										Schedule Consultation
										<ChevronRight className="h-4 w-4" />
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* FEATURED BRANDS - REDESIGNED */}
			<section className="bg-white py-16 md:py-24 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
						<h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl">
							Trusted Partners
						</h2>
						<p className="text-base text-gray-600 md:text-lg">
							We partner with Hunter Douglas and Norman USA, the most trusted
							names in window treatments to bring you proven quality,
							innovation, and lasting value.
						</p>
					</div>

					{/* Brand Cards */}
					<div className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
						{/* Hunter Douglas Card */}
						<div className="group overflow-hidden rounded-2xl bg-background-alt shadow-xl transition hover:shadow-2xl">
							<div className="relative h-48 overflow-hidden">
								<Image
									alt="Hunter Douglas Window Treatments"
									className="absolute inset-0 object-cover opacity-70 transition duration-500 group-hover:scale-110 group-hover:opacity-60"
									fill
									src={EEImage}
								/>
							</div>
							<div className="p-8">
								<div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
									<CheckCircle className="h-4 w-4 text-white" />
									<span className="font-semibold text-white text-xs uppercase tracking-wider">
										Authorized Dealer
									</span>
								</div>
								<h3 className="mb-4 font-bold text-3xl text-white">
									Hunter Douglas
								</h3>
								<p className="mb-6 text-gray-300 text-sm leading-relaxed">
									Industry leader in innovation, style, and performance. From
									PowerView® automation to energy-efficient cellular shades,
									Hunter Douglas sets the standard for premium window
									treatments.
								</p>
								<Link
									className="inline-flex items-center gap-2 font-medium text-sm text-white transition hover:gap-3"
									href="https://www.hunterdouglas.com/"
									target="_blank"
								>
									Explore Products
									<ChevronRight className="h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Norman USA Card */}
						<div className="group overflow-hidden rounded-2xl bg-background-alt shadow-xl transition hover:shadow-2xl">
							<div className="relative h-48 overflow-hidden">
								<Image
									alt="Norman USA Window Treatments"
									className="absolute inset-0 object-cover opacity-70 transition duration-500 group-hover:scale-110 group-hover:opacity-60"
									fill
									src={NORMANImage}
								/>
							</div>
							<div className="p-8">
								<div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
									<CheckCircle className="h-4 w-4 text-white" />
									<span className="font-semibold text-white text-xs uppercase tracking-wider">
										Authorized Dealer
									</span>
								</div>
								<h3 className="mb-4 font-bold text-3xl text-white">
									Norman USA
								</h3>
								<p className="mb-6 text-gray-300 text-sm leading-relaxed">
									American-made quality and craftsmanship since 1976. Norman
									specializes in premium shutters, shades, and blinds built to
									last a lifetime with superior materials and construction.
								</p>
								<Link
									className="inline-flex items-center gap-2 font-medium text-sm text-white transition hover:gap-3"
									href="https://normanusa.com/"
									target="_blank"
								>
									Explore Products
									<ChevronRight className="h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>

					{/* Benefits Grid */}
					<div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
						<div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center transition hover:shadow-md">
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<CheckCircle className="h-6 w-6 text-primary" />
							</div>
							<h4 className="mb-2 font-semibold text-lg">Full Warranties</h4>
							<p className="text-gray-600 text-sm">
								Comprehensive manufacturer warranties on all products
							</p>
						</div>

						<div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center transition hover:shadow-md">
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<CheckCircle className="h-6 w-6 text-primary" />
							</div>
							<h4 className="mb-2 font-semibold text-lg">
								Expert Installation
							</h4>
							<p className="text-gray-600 text-sm">
								Certified installation by Larry, ensuring perfect results
							</p>
						</div>

						<div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center transition hover:shadow-md">
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<CheckCircle className="h-6 w-6 text-primary" />
							</div>
							<h4 className="mb-2 font-semibold text-lg">Premium Quality</h4>
							<p className="text-gray-600 text-sm">
								Only the best materials and craftsmanship
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* WHY CHOOSE US - REDESIGNED */}
			<section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
						<h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl">
							Why Homeowners Choose Us
						</h2>
					</div>

					{/* Larry's Story - Integrated Design */}
					<div className="mx-auto mb-16 max-w-4xl">
						<div className="overflow-hidden rounded-2xl bg-white shadow-xl">
							{/* Mobile: Avatar + Quote layout */}
							<div className="p-6 md:hidden">
								<div className="mb-6 flex items-center gap-4">
									<div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
										<Image
											alt="Larry Collins, Owner of East Bay Blinds"
											className="object-cover object-[20%_center]"
											fill
											src={LARRYHeadshot}
										/>
									</div>
									<div>
										<p className="font-semibold text-lg">Larry Collins</p>
										<p className="text-gray-600 text-sm">Owner & Founder</p>
									</div>
								</div>

								<blockquote className="space-y-4 text-gray-700">
									<p className="text-base leading-relaxed">
										"I've been helping East Bay homeowners find the perfect
										window treatments for over 20 years. As a family-owned
										business, I personally oversee every consultation and
										installation. Your satisfaction isn't just good for
										business.it's personal."
									</p>
								</blockquote>

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

							{/* Desktop: Side-by-side layout */}
							<div className="hidden md:grid md:grid-cols-5">
								{/* Larry's Photo */}
								<div className="relative md:col-span-2 md:min-h-[350px]">
									<Image
										alt="Larry Collins, Owner of East Bay Blinds"
										className="absolute inset-0 h-full w-full object-cover object-[20%_center]"
										fill
										src={LARRYHeadshot}
									/>
								</div>

								{/* Larry's Quote */}
								<div className="flex flex-col justify-center p-10 md:col-span-3 lg:p-12">
									<div className="mb-6">
										<p className="mb-1 font-semibold text-xl">Larry Collins</p>
										<p className="text-gray-600 text-sm">Owner & Founder</p>
									</div>

									<blockquote className="space-y-4 text-gray-700">
										<p className="text-lg leading-relaxed">
											"I've been helping East Bay homeowners find the perfect
											window treatments for over 20 years. As a family-owned
											business, I personally oversee every consultation and
											installation.
										</p>
										<p className="text-lg leading-relaxed">
											Your satisfaction isn't just good for business.it's
											personal."
										</p>
									</blockquote>

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
						<div className="mt-8 text-center">
							<Link
								className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
								href="/contact"
							>
								Schedule Your Free Consultation with Larry
								<ChevronRight className="h-4 w-4" />
							</Link>
						</div>
					</div>

					{/* Four Pillars */}
					<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
						{[
							{
								title: "Expert Guidance",
								desc: "Personal consultation from initial meeting to final installation",
							},
							{
								title: "Family Owned",
								desc: "Personal accountability and care in every project",
							},
							{
								title: "Authorized Dealer",
								desc: "Hunter Douglas & Norman USA premium products",
							},
							{
								title: "Professional Installation",
								desc: "Precision measurement and expert craftsmanship",
							},
						].map((item) => (
							<div
								className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
								key={item.title}
							>
								<h3 className="mb-2 font-semibold text-lg">{item.title}</h3>
								<p className="text-gray-600 text-sm">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* HOW WE WORK TOGETHER */}
			<section className="bg-background-alt py-16 text-white md:py-24 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
						<h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl">
							How We Work Together
						</h2>
						<p className="text-base text-gray-300 md:text-lg">
							From first contact to final installation, we make the process
							simple, transparent, and stress-free.
						</p>
					</div>

					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
						{[
							{
								num: "1",
								title: "Schedule Consultation",
								desc: "Book a free in-home consultation at your convenience. No pressure, no obligation.",
							},
							{
								num: "2",
								title: "In-Home Design Visit",
								desc: "Larry brings samples, measures your windows, and provides expert recommendations.",
							},
							{
								num: "3",
								title: "Professional Installation",
								desc: "Larry personally oversees installation with precision and attention to detail.",
							},
						].map((step) => (
							<div
								className="relative flex flex-col items-center text-center"
								key={step.num}
							>
								<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 font-bold text-3xl">
									{step.num}
								</div>
								<h3 className="mb-3 font-semibold text-xl">{step.title}</h3>
								<p className="text-gray-300 text-sm leading-relaxed">
									{step.desc}
								</p>
								<Link
									className="mt-4 inline-flex items-center gap-1 text-sm text-white/80 underline-offset-4 hover:underline"
									href="/contact"
								>
									Start here <ChevronRight className="h-3 w-3" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* TESTIMONIALS */}
			<section className="bg-white py-16 md:py-24 lg:py-32">
				<div className="container mx-auto px-4">
					<div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
						<h2 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl">
							What Your Neighbors Say
						</h2>
						<p className="text-base text-gray-600 md:text-lg">
							Don't just take our word for it.hear from East Bay homeowners
							who've trusted us with their window treatments.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
						{[
							{
								quote:
									"We loved this guy so much we kept his contact info.Fast forward ten years, I call him, hoping he's still around... Not only did he respond quickly, he again listened carefully to what we wanted... with no fuss no pressure, gave us exactly what we were wishing for.all at a very fair and reasonable price point.",
								name: "Joan S.",
								location: "Lafayette, CA",
								initial: "J",
							},
							{
								quote:
									"Larry is the owner of this small business - he is knowledgeable, experienced and easy to work with. He delivered the products on schedule and installed everything himself. His prices were very reasonable (much less than the Costco window covering service). Highly recommended.",
								name: "Safa T.",
								location: "Concord, CA",
								initial: "S",
							},
							{
								quote:
									"There's a reason I'm drawn to work with small businesses that are owner-operated... Larry was very patient with us, listened to our needs, and was never pushy. He came himself to do it and made sure everything was 100% to our liking. He's respectful, and left the space sparkling clean.",
								name: "Isabelle L.",
								location: "Walnut Creek, CA",
								initial: "I",
							},
							{
								quote:
									"I bought my blinds from him seven years ago. Some Hunter Douglas blinds. And last month, I noticed that the honeycombs on one of the blinds were coming apart. I contacted him and he replaced the blind for free. So easy. So friendly.",
								name: "Natalie C.",
								location: "El Cerrito, CA",
								initial: "N",
							},
							{
								quote:
									"What set Larry apart was how he really cares about his product... his quiet installation when I returned from hospital post delivery. Larry and his son didn't leave any mess, and were super quiet when they exited our home.",
								name: "Lisa H.",
								location: "Lafayette, CA",
								initial: "L",
							},
							{
								quote:
									"Larry and his son installed the shutters with expert workmanship, very minimal noise and the best part? My bedrooms were left clean!!! The shutters transforms the house and are great quality.",
								name: "Cindy T.",
								location: "San Francisco, CA",
								initial: "C",
							},
						].map((testimonial) => (
							<div
								className="flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:shadow-md"
								key={testimonial.name}
							>
								<div className="mb-4 flex">
									{[...new Array(5)].map((_, i) => (
										<Star
											className="h-4 w-4 fill-yellow-400 text-yellow-400"
											key={i}
										/>
									))}
								</div>
								<p className="mb-6 flex-grow text-gray-700 text-sm leading-relaxed">
									"{testimonial.quote}"
								</p>
								<div className="flex items-center gap-3">
									<Avatar className="h-10 w-10">
										<AvatarFallback className="bg-primary text-primary-foreground">
											{testimonial.initial}
										</AvatarFallback>
									</Avatar>
									<div>
										<p className="font-semibold text-sm">{testimonial.name}</p>
										<p className="text-gray-600 text-xs">
											{testimonial.location}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="mt-12 text-center">
						<Link
							className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
							href="https://www.yelp.com/biz/east-bay-blinds-benicia-2"
							target="_blank"
						>
							Read All 100+ Reviews on Yelp
							<ChevronRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="bg-background-alt py-16 text-white md:py-24 lg:py-32">
				<div className="container mx-auto px-4 text-center">
					<div className="mx-auto max-w-3xl">
						<h2 className="mb-6 font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl">
							Ready to Transform Your Windows?
						</h2>
						<p className="mb-8 text-base text-gray-300 md:mb-10 md:text-lg">
							Schedule a free, no-pressure consultation. Larry will bring
							samples, measure your windows, and provide expert recommendations
							tailored to your home.
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
								<ChevronRight className="ml-2" />
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
