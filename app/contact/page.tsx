import {
	CheckIcon,
	ChevronRight,
	MailIcon,
	Phone,
	PhoneIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
	title: "Free Consultation | Window Treatments Lafayette | (925) 200-4521",
	description:
		"Schedule your free, no-pressure consultation with Larry Collins. Serving Lafayette, Walnut Creek, Orinda, Moraga, Danville, Alamo. Same-day response. Call (925) 200-4521 or fill out our quick form.",
	alternates: {
		canonical: "https://www.eastbayblinds.com/contact",
	},
	openGraph: {
		title: "Free Consultation | Window Treatments Lafayette | (925) 200-4521",
		description:
			"Schedule your free consultation. Same-day response. Serving Lafayette, Walnut Creek, Orinda.",
		url: "https://www.eastbayblinds.com/contact",
	},
};

const serviceAreas = [
	"Lafayette",
	"Walnut Creek",
	"Orinda",
	"Moraga",
	"Danville",
	"Alamo",
	"Pleasant Hill",
	"Concord",
	"Martinez",
	"And surrounding East Bay communities",
];

const faqs = [
	{
		question: "Do you charge for consultations?",
		answer:
			"No! Your in-home consultation is completely free with no obligation.",
	},
	{
		question: "How long does installation take?",
		answer:
			"Most installations are completed in 1 day. Larger projects may take 2-3 days. Larry will give you an exact timeline during your consultation.",
	},
	{
		question: "Do you offer financing?",
		answer:
			"Yes, we offer flexible payment options. Ask Larry about our current financing options during your consultation.",
	},
	{
		question: "What if I'm outside your service area?",
		answer:
			"Give us a call anyway! We occasionally travel outside our standard service area for larger projects.",
	},
	{
		question: "Do you provide free estimates?",
		answer:
			"Yes, all consultations include a detailed written estimate with no hidden fees.",
	},
];

export default function ContactPage() {
	return (
		<div className="relative flex flex-col">
			<Header variant="dark" />

			{/* MAIN CONTENT */}
			<section className="bg-white py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h1 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl">
							Schedule Your Free Consultation
						</h1>
						<p className="mx-auto max-w-2xl text-gray-600 md:text-lg">
							Larry will visit your home with samples, measure your windows, and
							provide expert recommendations. No pressure, no obligation.
						</p>
					</div>

					{/* TWO-COLUMN LAYOUT */}
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
						{/* LEFT COLUMN: Contact Methods */}
						<div className="flex flex-col gap-8">
							<div>
								<h2 className="mb-6 font-semibold text-2xl">
									Prefer to Call or Text?
								</h2>
								<Link
									className="mb-4 flex items-center gap-3 font-bold text-2xl hover:underline md:text-4xl"
									href="tel:9252004521"
								>
									<PhoneIcon className="h-6 w-6 md:h-10 md:w-10" />
									(925) 200-4521
								</Link>
								<p className="text-muted-foreground text-sm md:text-base">
									Call or text for fastest service
									<br />
									Response within 24 hours
								</p>
							</div>

							<Separator />

							<div>
								<h3 className="mb-3 font-semibold text-lg">Business Hours</h3>
								<div className="flex flex-col gap-1 text-sm md:text-base">
									<p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
									<p>Sunday: Closed</p>
								</div>
							</div>

							<Separator />

							<div>
								<h3 className="mb-3 font-semibold text-lg">Email</h3>
								<Link
									className="flex items-center gap-2 text-sm hover:underline md:text-base"
									href="mailto:larry@eastbayblinds.com"
								>
									<MailIcon className="h-5 w-5" />
									larry@eastbayblinds.com
								</Link>
							</div>

							<Separator />

							<div>
								<h3 className="mb-4 font-semibold text-lg">Service Areas</h3>
								<p className="mb-3 font-medium">Proudly Serving:</p>
								<ul className="mb-4 flex flex-col gap-2 text-sm md:text-base">
									{serviceAreas.map((area) => (
										<li className="flex items-start gap-2" key={area}>
											<span className="text-muted-foreground">•</span>
											<span>{area}</span>
										</li>
									))}
								</ul>
								<p className="text-muted-foreground text-xs md:text-sm">
									Not sure if we serve your area? Give us a call—we may be able
									to help!
								</p>
							</div>
						</div>

						{/* RIGHT COLUMN: Contact Form */}
						<div className="h-fit rounded-lg border border-border bg-card p-6 shadow-sm md:p-8">
							<ContactForm />
						</div>
					</div>
				</div>
			</section>

			<Separator />

			{/* WHAT TO EXPECT SECTION */}
			<section className="container mx-auto px-4 py-16 md:py-24">
				<h2 className="mb-12 text-center font-semibold text-2xl md:text-3xl">
					What to Expect
				</h2>
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<div className="flex flex-col items-center gap-4 text-center">
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
							<CheckIcon className="h-6 w-6" />
						</div>
						<h3 className="font-semibold text-lg md:text-xl">
							We'll Call Within 24 Hours
						</h3>
						<p className="text-muted-foreground text-sm md:text-base">
							Larry will personally reach out to schedule your free in-home
							consultation at a time that works for you.
						</p>
					</div>

					<div className="flex flex-col items-center gap-4 text-center">
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
							<CheckIcon className="h-6 w-6" />
						</div>
						<h3 className="font-semibold text-lg md:text-xl">
							Free In-Home Consultation
						</h3>
						<p className="text-muted-foreground text-sm md:text-base">
							Larry brings samples to your home, measures your windows, and
							provides expert recommendations. Typically takes 30-45 minutes.
						</p>
					</div>

					<div className="flex flex-col items-center gap-4 text-center">
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
							<CheckIcon className="h-6 w-6" />
						</div>
						<h3 className="font-semibold text-lg md:text-xl">
							No Pressure, Just Expertise
						</h3>
						<p className="text-muted-foreground text-sm md:text-base">
							We'll provide a detailed quote and answer all your questions. Take
							your time to decide—there's never any pressure.
						</p>
					</div>
				</div>
			</section>

			<Separator />

			{/* FAQ SECTION */}
			<section className="container mx-auto px-4 py-16 md:py-24">
				<h2 className="mb-12 text-center font-semibold text-2xl md:text-3xl">
					Common Questions
				</h2>
				<div className="mx-auto grid max-w-3xl grid-cols-1 gap-8">
					{faqs.map((faq) => (
						<div className="flex flex-col gap-2" key={faq.question}>
							<h3 className="font-semibold text-lg">Q: {faq.question}</h3>
							<p className="text-muted-foreground text-sm md:text-base">
								A: {faq.answer}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* FINAL CTA SECTION */}
			<section className="bg-background-alt py-16 text-white md:py-24">
				<div className="container mx-auto px-4 text-center">
					<div className="mx-auto max-w-3xl">
						<h2 className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl">
							Ready to Transform Your Windows?
						</h2>
						<p className="mb-8 text-gray-300 md:text-lg">
							Join hundreds of satisfied East Bay homeowners who've trusted
							Larry with their window treatments.
						</p>
						<div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
							<Link
								className={buttonVariants({
									size: "lg",
									variant: "secondary",
									className: "w-full md:w-auto",
								})}
								href="tel:9252004521"
							>
								Call (925) 200-4521
								<ChevronRight className="ml-2 h-5 w-5" />
							</Link>
							<span className="text-gray-300 text-sm">or</span>
							<Link
								className="inline-flex items-center gap-2 font-semibold text-lg hover:underline"
								href="#top"
							>
								<Phone className="h-5 w-5" />
								Fill Out the Form Above
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
