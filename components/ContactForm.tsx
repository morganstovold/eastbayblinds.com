"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormData {
	fullName: string;
	phone: string;
	email: string;
	zipCode: string;
	lookingFor: string[];
	projectDetails: string;
}

interface FormErrors {
	fullName?: string;
	phone?: string;
	email?: string;
	zipCode?: string;
}

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		fullName: "",
		phone: "",
		email: "",
		zipCode: "",
		lookingFor: [],
		projectDetails: "",
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		if (!formData.fullName.trim()) {
			newErrors.fullName = "Full name is required";
		}
		if (!formData.phone.trim()) {
			newErrors.phone = "Phone number is required";
		}
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!EMAIL_REGEX.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}
		if (!formData.zipCode.trim()) {
			newErrors.zipCode = "Zip code is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			// TODO: Implement actual form submission
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setSubmitStatus("success");
			setFormData({
				fullName: "",
				phone: "",
				email: "",
				zipCode: "",
				lookingFor: [],
				projectDetails: "",
			});
		} catch (_error) {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleCheckboxChange = (value: string) => {
		setFormData((prev) => ({
			...prev,
			lookingFor: prev.lookingFor.includes(value)
				? prev.lookingFor.filter((item) => item !== value)
				: [...prev.lookingFor, value],
		}));
	};

	return (
		<form className="flex w-full flex-col gap-6" onSubmit={handleSubmit}>
			<h2 className="font-semibold text-2xl">Request Your Free Consultation</h2>

			<Field>
				<Label htmlFor="fullName">
					Full Name <span className="text-destructive">*</span>
				</Label>
				<Input
					aria-invalid={!!errors.fullName}
					id="fullName"
					onChange={(e) =>
						setFormData({ ...formData, fullName: e.target.value })
					}
					placeholder="John Smith"
					required
					value={formData.fullName}
				/>
				{errors.fullName && <FieldError>{errors.fullName}</FieldError>}
			</Field>

			<Field>
				<Label htmlFor="phone">
					Phone Number <span className="text-destructive">*</span>
				</Label>
				<Input
					aria-invalid={!!errors.phone}
					id="phone"
					onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
					placeholder="(925) 555-1234"
					required
					type="tel"
					value={formData.phone}
				/>
				{errors.phone && <FieldError>{errors.phone}</FieldError>}
			</Field>

			<Field>
				<Label htmlFor="email">
					Email <span className="text-destructive">*</span>
				</Label>
				<Input
					aria-invalid={!!errors.email}
					id="email"
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
					placeholder="john@example.com"
					required
					type="email"
					value={formData.email}
				/>
				{errors.email && <FieldError>{errors.email}</FieldError>}
			</Field>

			<Field>
				<Label htmlFor="zipCode">
					Zip Code <span className="text-destructive">*</span>
				</Label>
				<Input
					aria-invalid={!!errors.zipCode}
					id="zipCode"
					onChange={(e) =>
						setFormData({ ...formData, zipCode: e.target.value })
					}
					placeholder="94549"
					required
					value={formData.zipCode}
				/>
				<FieldDescription>To confirm we serve your area</FieldDescription>
				{errors.zipCode && <FieldError>{errors.zipCode}</FieldError>}
			</Field>

			<Field>
				<Label>What are you looking for?</Label>
				<div className="flex flex-col gap-2">
					{[
						"Shades",
						"Blinds",
						"Shutters",
						"Motorized Options",
						"Not Sure Yet",
					].map((option) => (
						<label className="flex items-center gap-2" key={option}>
							<input
								checked={formData.lookingFor.includes(option)}
								className="h-4 w-4"
								onChange={() => handleCheckboxChange(option)}
								type="checkbox"
							/>
							<span className="text-sm">{option}</span>
						</label>
					))}
				</div>
			</Field>

			<Field>
				<Label htmlFor="projectDetails">Tell us about your project</Label>
				<textarea
					className="min-h-[100px] w-full rounded-md border border-input bg-transparent px-2.5 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:bg-input/30"
					id="projectDetails"
					maxLength={500}
					onChange={(e) =>
						setFormData({ ...formData, projectDetails: e.target.value })
					}
					placeholder="How many windows? Any specific concerns or preferences?"
					value={formData.projectDetails}
				/>
				<FieldDescription>
					Optional - helps Larry prepare for your consultation
				</FieldDescription>
			</Field>

			{submitStatus === "success" && (
				<div className="rounded-md bg-green-50 p-4 text-green-800 text-sm">
					Thank you for your submission! We'll get back to you within 24 hours.
				</div>
			)}

			{submitStatus === "error" && (
				<div className="rounded-md bg-red-50 p-4 text-red-800 text-sm">
					Something went wrong. Please try again or call us directly.
				</div>
			)}

			<Button
				className="w-full md:w-auto"
				disabled={isSubmitting}
				size="lg"
				type="submit"
			>
				{isSubmitting ? "Submitting..." : "Schedule Free Consultation"}
				<ChevronRight className="ml-2" />
			</Button>

			<p className="text-muted-foreground text-xs">
				By submitting this form, you agree to receive communication from East
				Bay Blinds. We respect your privacy and will never share your
				information.
			</p>
		</form>
	);
}
