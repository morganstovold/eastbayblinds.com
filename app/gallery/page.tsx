import { ChevronRight, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Image1 from "@/assets/new/HD/motorized.png";
import Image2 from "@/assets/new/HD/roller-shades.webp";
import Image3 from "@/assets/new/HD/shades.webp";
import Image4 from "@/assets/new/HD/soft-blinds.webp";
import Image5 from "@/assets/new/NORMAN/1844-x-1038_Photo_Shutters_06.jpg";
import Image6 from "@/assets/new/NORMAN/1844-x-1038_Photo_Shutters_14.jpg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Window Treatment Gallery | Before & After | East Bay Blinds",
	description:
		"Browse our gallery of custom blinds, shutters, and shades installations in Lafayette, Walnut Creek, Orinda. Real projects by East Bay Blinds. Hunter Douglas & Norman products.",
	alternates: {
		canonical: "https://www.eastbayblinds.com/gallery",
	},
	openGraph: {
		title: "Window Treatment Gallery | Before & After | East Bay Blinds",
		description:
			"Browse our gallery of custom installations in Lafayette, Walnut Creek, Orinda.",
		url: "https://www.eastbayblinds.com/gallery",
	},
};

// Add new gallery images here
const galleryImages: StaticImageData[] = [
	Image1,
	Image2,
	Image3,
	Image4,
	Image5,
	Image6,
];

export default function GalleryPage() {
	return (
		<div className="relative flex flex-col">
			<Header variant="dark" />

			{/* GALLERY CONTENT */}
			<section className="bg-white py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="mb-12 text-center">
						<h1 className="mb-4 font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl">
							Gallery
						</h1>
						<p className="mx-auto max-w-2xl text-gray-600 md:text-lg">
							Our collection of window treatment solutions.
						</p>
					</div>

					{/* GALLERY GRID */}
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{galleryImages.map((image, index) => (
							<div
								className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
								key={index}
							>
								<Image
									alt={`Gallery image ${index + 1}`}
									className="object-cover transition duration-300 group-hover:scale-105"
									fill
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									src={image.src}
								/>
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
							Ready to Start Your Project?
						</h2>
						<p className="mb-8 text-gray-300 md:text-lg">
							Schedule a free consultation and let's discuss how we can
							transform your windows.
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
