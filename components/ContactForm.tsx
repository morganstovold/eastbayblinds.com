"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/lib/contact-actions";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormData {
	fullName: string;
	phone: string;
	email: string;
}

interface FormErrors {
	fullName?: string;
	phone?: string;
	email?: string;
}

export default function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		fullName: "",
		phone: "",
		email: "",
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
			const result = await submitContactForm(formData);

			if (result.success) {
				setSubmitStatus("success");
				// Redirect to thank you page after 1 second
				setTimeout(() => {
					window.location.href = "/thank-you";
				}, 1000);
			} else {
				setSubmitStatus("error");
			}
		} catch (_error) {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
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

			{submitStatus === "success" && (
				<div className="rounded-md bg-green-50 p-4 text-green-800 text-sm">
					Thank you! Redirecting to confirmation page...
				</div>
			)}

			{submitStatus === "error" && (
				<div className="rounded-md bg-red-50 p-4 text-red-800 text-sm">
					Something went wrong. Please try again or call us at (925) 200-4521.
				</div>
			)}

			<Button
				className="w-full md:w-auto"
				disabled={isSubmitting}
				size="lg"
				type="submit"
			>
				{isSubmitting ? "Submitting..." : "Get My Free Quote"}
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
