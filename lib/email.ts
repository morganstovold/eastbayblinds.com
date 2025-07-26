import { Resend } from "resend";
import ContactEmail from "@/components/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactNotification({
  name,
  email,
  phone,
  zipCode,
  serviceType,
  message,
  submittedAt,
}: {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  serviceType: string;
  message: string;
  submittedAt: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "East Bay Blinds <noreply@eastbayblinds.com>",
      to: ["larry@eastbayblinds.com"],
      subject: "New Contact Form Submission - East Bay Blinds",
      react: ContactEmail({
        name,
        email,
        phone,
        zipCode,
        serviceType,
        message,
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
