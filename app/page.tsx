import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Stars from "@/components/stars";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PSImage from "@/public/new/HD/illuminated-shades.jpg";
import MOImage from "@/public/new/HD/motorized.png";
import ORSImage from "@/public/new/HD/office.webp";
import LPCImage from "@/public/new/HD/roller-shades.webp";
import HeroImage from "@/public/new/HD/shades.webp";
import EEImage from "@/public/new/HD/soft-blinds.webp";
import LARRYHeadshot from "@/public/new/larry.jpg";
import NORMANImage from "@/public/new/NORMAN/1844-x-1038_Photo_Shutters_06.jpg";

export const metadata: Metadata = {
	title: "Custom Shutters, Blinds & Shades | Lafayette, Orinda, Walnut Creek",
	description:
		"Premium window treatments from $500 to $5,000+ per room. Authorized Hunter Douglas & Norman dealer. Free consultation. Call (925) 200-4521.",
};

export default function HomePage() {
	return (
		<div className="relative flex flex-col">
			<Header />

			{/* HERO SECTION */}
			<section className="relative flex h-[60vh] min-h-[400px] w-full md:h-[70vh]">
				<Image
					alt="Expert Window Treatment Solutions for Your Home"
					className="absolute inset-0 z-0 object-cover"
					fill
					priority
					src={HeroImage}
				/>
				<div className="absolute inset-0 z-1 bg-black/60" />
				<div className="z-2 flex h-full w-full flex-col items-center justify-center gap-4 px-4 text-center text-primary-foreground md:gap-6">
					<p className="text-xs md:text-sm">
						Lafayette • Orinda • Moraga • Danville • Alamo • Walnut Creek
					</p>
					<h1 className="max-w-3xl font-bold text-3xl tracking-tighter md:text-4xl lg:text-5xl">
						Expert Window Treatment Solutions for Your Home
					</h1>
					<p className="max-w-2xl text-sm md:text-base lg:text-lg">
						Family-owned. Locally trusted. Hunter Douglas & Norman USA
						Authorized Dealer.
					</p>
					<div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
						<Link
							className={buttonVariants({
								className: "flex w-full items-center gap-2 md:w-auto",
								size: "lg",
								variant: "secondary",
							})}
							href="/contact"
						>
							Schedule Your Free Consultation
							<ChevronRight />
						</Link>
						<span className="text-sm md:text-base">or call</span>
						<Link
							className="font-semibold text-lg text-primary-foreground hover:underline md:text-xl"
							href="tel:9252004521"
						>
							(925) 200-4521
						</Link>
					</div>
					<div className="mt-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm md:mt-6">
						<Stars size={14} />
						<span className="text-primary-foreground/90 text-xs md:text-sm">
							100+ Five-Star Reviews
						</span>
					</div>
				</div>
			</section>

			{/* FIND YOUR SOLUTION */}
			<section className="container mx-auto flex w-full flex-col items-center gap-6 px-4 py-16 md:gap-8 md:py-24 lg:py-32">
				<h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
					FIND YOUR PERFECT SOLUTION
				</h1>
				<p className="text-center text-sm md:text-base">
					ONLY THE BEST FROM THE INDUSTRY'S LEADING BRANDS
				</p>
				<Separator className="max-w-xl" />
				<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
					{/* Large featured card */}
					<div className="relative col-span-1 flex aspect-[3/2] h-full w-full items-end overflow-hidden rounded-lg p-6 md:col-span-2 md:aspect-[3/1] md:p-8">
						<Image
							alt="Light & Privacy Control"
							className="absolute z-0 h-full object-cover"
							fill
							src={LPCImage}
						/>
						<div className="absolute inset-0 z-1 bg-black/60" />
						<div className="z-2 flex flex-col gap-2 text-primary-foreground">
							<h3 className="text-xl md:text-2xl">LIGHT & PRIVACY CONTROL</h3>
							<Link
								className="flex items-center gap-2 text-primary-foreground text-sm hover:underline md:text-base"
								href="/contact"
							>
								LEARN MORE
								<ChevronRight className="h-4 w-4" />
							</Link>
						</div>
					</div>

					{/* Smaller cards */}
					{[
						{ title: "PRIVACY & SLEEP", image: PSImage },
						{ title: "ENERGY EFFICIENT", image: EEImage },
						{ title: "OFFICE & RETAIL SPACES", image: ORSImage },
						{ title: "MOTORIZED OPTIONS", image: MOImage },
					].map((item) => (
						<div
							className="relative flex aspect-[3/2] h-full items-end overflow-hidden rounded-lg p-6 md:aspect-[2/1] md:p-8"
							key={item.title}
						>
							<Image
								alt={item.title}
								className="absolute z-0 h-full object-cover"
								fill
								src={item.image}
							/>
							<div className="absolute inset-0 z-1 bg-black/60" />
							<div className="z-2 flex flex-col gap-2 text-primary-foreground">
								<h3 className="text-lg md:text-xl">{item.title}</h3>
								<Link
									className="flex items-center gap-2 text-primary-foreground text-sm hover:underline"
									href="/contact"
								>
									LEARN MORE
									<ChevronRight className="h-4 w-4" />
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>

			<Separator />

			{/* FEATURED BRANDS */}
			<section className="w-full bg-[#181818] py-16 text-primary-foreground md:py-24 lg:py-32">
				<div className="container mx-auto flex w-full flex-col items-center gap-6 px-4 md:gap-8">
					<h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
						FEATURED BRANDS
					</h1>
					<p className="max-w-3xl text-center text-sm md:text-base">
						WE PARTNER WITH THE MOST TRUSTED NAMES IN WINDOW TREATMENTS
					</p>
					<Separator className="max-w-xl" />
					<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
						<div className="relative flex aspect-[3/2] h-full items-end overflow-hidden rounded-lg p-6 md:aspect-[2/1] md:p-8">
							<Image
								alt="Hunter Douglas"
								className="absolute z-0 h-full object-cover"
								fill
								src={EEImage}
							/>
							<div className="absolute inset-0 z-1 bg-black/60" />
							<div className="z-2 flex w-full flex-col gap-2 text-primary-foreground">
								<p className="text-xs md:text-sm">AUTHORIZED DEALER</p>
								<h3 className="text-xl md:text-2xl">HUNTER DOUGLAS</h3>
								<Link
									className="flex items-center gap-2 text-primary-foreground text-sm hover:underline"
									href="https://www.hunterdouglas.com/"
									target="_blank"
								>
									LEARN MORE
									<ChevronRight className="h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="relative flex aspect-[3/2] h-full items-end overflow-hidden rounded-lg p-6 md:aspect-[2/1] md:p-8">
							<Image
								alt="Norman USA"
								className="absolute z-0 h-full object-cover"
								fill
								src={NORMANImage}
							/>
							<div className="absolute inset-0 z-1 bg-black/60" />
							<div className="z-2 flex w-full flex-col gap-2 text-primary-foreground">
								<p className="text-xs md:text-sm">AUTHORIZED DEALER</p>
								<h3 className="text-xl md:text-2xl">NORMAN USA</h3>
								<Link
									className="flex items-center gap-2 text-primary-foreground text-sm hover:underline"
									href="https://normanusa.com/"
									target="_blank"
								>
									LEARN MORE
									<ChevronRight className="h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* WHY CHOOSE US */}
			<section className="flex w-full flex-col items-center gap-6 px-4 py-16 md:gap-8 md:py-24 lg:py-32">
				<h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
					WHY HOMEOWNERS CHOOSE US
				</h1>
				<div className="flex max-w-[900px] flex-col items-center gap-6 md:gap-8">
					<Separator />
					<div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
						<div className="relative aspect-square w-48 flex-shrink-0 overflow-hidden rounded-lg md:w-64">
							<Image
								alt="Larry Collins, Owner of East Bay Blinds"
								className="absolute z-0 h-full object-cover object-[20%_center]"
								fill
								src={LARRYHeadshot}
							/>
							<div className="absolute inset-0 z-1 bg-black/20" />
							<div className="absolute bottom-0 z-10 flex w-full flex-col gap-2 p-4 text-primary-foreground">
								<p className="font-semibold text-shadow-lg">LARRY COLLINS</p>
							</div>
						</div>
						<div className="flex flex-col gap-4 text-center md:gap-6 md:text-left">
							<p className="text-base leading-relaxed md:text-lg">
								"I'm Larry Collins, and I've been helping East Bay homeowners
								find the perfect window treatments for over 20 years.
							</p>
							<p className="text-base leading-relaxed md:text-lg">
								As a family-owned business, I personally oversee every
								consultation and installation. Your satisfaction isn't just good
								for business, it's personal."
							</p>
							<p className="mt-2 font-semibold md:mt-4">
								- Larry Collins, Owner
							</p>
						</div>
					</div>
					<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
						{[
							{
								title: "Expert Guidance",
								desc: "Throughout every decision, from initial consultation to final installation",
							},
							{
								title: "Family Owned",
								desc: "We stand behind every job with personal accountability and care",
							},
							{
								title: "Authorized Dealer",
								desc: "Hunter Douglas & Norman USA premium products with full warranties",
							},
							{
								title: "Professional Installation",
								desc: "Precision measurement and expert installation with attention to detail",
							},
						].map((item) => (
							<div
								className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:gap-4 md:p-8"
								key={item.title}
							>
								<h2 className="font-semibold text-xl md:text-2xl">
									{item.title}
								</h2>
								<p className="text-muted-foreground text-sm md:text-base">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* HOW WE WORK TOGETHER */}
			<section className="w-full bg-[#181818] py-16 text-primary-foreground md:py-24 lg:py-32">
				<div className="container mx-auto flex w-full flex-col items-center gap-8 px-4 md:gap-12 lg:gap-16">
					<h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
						HOW WE WORK TOGETHER
					</h1>
					<Separator className="max-w-xl" />
					<div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
						{[
							{
								num: "1.",
								title: "Schedule Consultation",
								desc: "Book a time that works for you, no pressure",
							},
							{
								num: "2.",
								title: "In-Home Design Visit",
								desc: "Larry brings samples and provides expert guidance",
							},
							{
								num: "3.",
								title: "Professional Installation",
								desc: "Precision measurement and expert installation",
							},
						].map((step) => (
							<div
								className="flex flex-col items-center gap-3 text-center md:gap-4"
								key={step.num}
							>
								<h1 className="font-bold text-5xl md:text-6xl">{step.num}</h1>
								<h3 className="text-xl md:text-2xl">{step.title}</h3>
								<p className="text-sm md:text-base">{step.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* TESTIMONIALS */}
			<section className="container mx-auto flex w-full flex-col items-center gap-6 px-4 py-16 md:gap-8 md:py-24 lg:py-32">
				<h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
					WHAT YOUR NEIGHBORS SAY
				</h1>
				<Separator className="max-w-xl" />
				<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
					{[
						{
							quote:
								"We loved this guy so much we kept his contact info—Fast forward ten years, I call him, hoping he's still around... Not only did he respond quickly, he again listened carefully to what we wanted... with no fuss no pressure, gave us exactly what we were wishing for—all at a very fair and reasonable price point.",
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
							className="flex flex-col justify-between gap-4 rounded-lg border border-border bg-card p-6"
							key={testimonial.name}
						>
							<p className="text-sm leading-relaxed md:text-base">
								"{testimonial.quote}"
							</p>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3 md:gap-4">
									<Avatar className="h-10 w-10">
										<AvatarFallback>{testimonial.initial}</AvatarFallback>
									</Avatar>
									<div className="flex flex-col">
										<p className="font-semibold text-sm md:text-base">
											{testimonial.name}
										</p>
										<small className="text-muted-foreground text-xs md:text-sm">
											{testimonial.location}
										</small>
									</div>
								</div>
								<div className="scale-75 md:scale-100">
									<Stars />
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* FINAL CTA */}
			<section className="w-full bg-[#181818] py-16 text-primary-foreground md:py-24 lg:py-32">
				<div className="container mx-auto flex w-full flex-col items-center gap-6 px-4 text-center md:gap-8">
					<h1 className="text-2xl md:text-3xl lg:text-4xl">
						Ready to Explore Your Options?
					</h1>
					<p className="max-w-2xl text-sm leading-relaxed md:text-base lg:text-lg">
						Schedule a free, no-pressure consultation. We will bring samples,
						discuss your needs, and provide expert recommendations.
					</p>
					<div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
						<Button className="w-full md:w-auto" size="lg" variant="secondary">
							Schedule Free Consultation
							<ChevronRight className="ml-2" />
						</Button>
						<span className="text-sm md:text-base">or call</span>
						<Link
							className="font-semibold text-lg text-primary-foreground hover:underline md:text-xl"
							href="tel:9252004521"
						>
							(925) 200-4521
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
