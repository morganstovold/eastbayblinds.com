"use server";

import { sendContactNotification } from "@/lib/email";

interface ContactFormData {
	fullName: string;
	phone: string;
	email: string;
}

export async function submitContactForm(data: ContactFormData) {
	try {
		if (!(data.fullName && data.phone && data.email)) {
			return {
				success: false,
				error: "Missing required fields",
			};
		}

		const submittedAt = new Date().toLocaleString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			timeZoneName: "short",
		});

		const emailResult = await sendContactNotification({
			name: data.fullName,
			email: data.email,
			phone: data.phone,
			submittedAt,
		});

		if (!emailResult.success) {
			console.error("Failed to send contact notification email");
			// Still return success to user even if email fails
		}

		return {
			success: true,
		};
	} catch (error) {
		console.error("Contact form submission error:", error);
		return {
			success: false,
			error: "Failed to submit form. Please try again.",
		};
	}
}
