import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Resend } from "resend";
import ContactEmail from "@/components/contactEmail";

export async function sendContactNotification({
	name,
	email,
	phone,
	submittedAt,
}: {
	name: string;
	email: string;
	phone: string;
	submittedAt: string;
}) {
	const { env } = getCloudflareContext();
	// @ts-expect-error: type mismatch
	const resend = new Resend(env.RESEND_API_KEY);

	try {
		const { data, error } = await resend.emails.send({
			from: "Contact Form <noreply@notifications.stovold.dev>",
			to: ["larry@eastbayblinds.com"],
			subject: "New Contact Form Submission - East Bay Blinds",
			react: ContactEmail({
				name,
				email,
				phone,
				submittedAt,
			}),
		});

		if (error) {
			console.error("Error sending contact notification email:", error);
			return { success: false, error };
		}

		console.log("Contact notification email sent successfully:", data);
		return { success: true, data };
	} catch (error) {
		console.error("Error sending contact notification email:", error);
		return { success: false, error };
	}
}
