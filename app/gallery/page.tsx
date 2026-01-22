import { ChevronRight, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { buttonVariants } from "@/components/ui/button";

// Gallery images - add new project photos here
import Image1 from "@/public/new/HD/illuminated-shades.jpg";
import Image2 from "@/public/new/HD/motorized.png";
import Image3 from "@/public/new/HD/office.webp";
import Image4 from "@/public/new/HD/roller-shades.webp";
import Image5 from "@/public/new/HD/soft-blinds.webp";
import Image6 from "@/public/new/NORMAN/1844-x-1038_Photo_Shutters_06.jpg";
import Image7 from "@/public/new/NORMAN/1844-x-1038_Photo_Shutters_14.jpg";

export const metadata: Metadata = {
	title: "Project Gallery | East Bay Blinds | Lafayette, CA",
	description:
		"Browse our gallery of window treatment installations in Lafayette, Walnut Creek, Orinda and throughout the East Bay. See real projects by East Bay Blinds.",
};

interface GalleryImage {
	src: StaticImageData;
	alt: string;
	caption?: string;
}

// Add new gallery images here
const galleryImages: GalleryImage[] = [
	{
		src: Image1,
		alt: "Illuminated shades installation",
		caption: "Illuminated Shades",
	},
	{
		src: Image2,
		alt: "Motorized window treatments",
		caption: "Motorized Shades",
	},
	{
		src: Image3,
		alt: "Office window treatments",
		caption: "Commercial Installation",
	},
	{
		src: Image4,
		alt: "Roller shades installation",
		caption: "Roller Shades",
	},
	{
		src: Image5,
		alt: "Soft blinds installation",
		caption: "Soft Blinds",
	},
	{
		src: Image6,
		alt: "Norman shutters installation",
		caption: "Norman Shutters",
	},
	{
		src: Image7,
		alt: "Norman plantation shutters",
		caption: "Plantation Shutters",
	},
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
							Recent Installations
						</h1>
						<p className="mx-auto max-w-2xl text-gray-600 md:text-lg">
							Browse recent projects from homes throughout the East Bay.
						</p>
					</div>

					{/* GALLERY GRID */}
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{galleryImages.map((image) => (
							<div
								className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
								key={image.alt}
							>
								<Image
									alt={image.alt}
									className="object-cover transition duration-300 group-hover:scale-105"
									fill
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									src={image.src}
								/>
								{image.caption && (
									<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8">
										<p className="font-medium text-sm text-white">
											{image.caption}
										</p>
									</div>
								)}
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
