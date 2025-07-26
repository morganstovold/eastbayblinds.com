import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Section,
  Hr,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  serviceType: string;
  message: string;
  submittedAt: string;
}

export default function ContactEmail({
  name,
  email,
  phone,
  zipCode,
  serviceType,
  message,
  submittedAt,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission - East Bay Blinds</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={heading}>New Contact Form Submission</Text>

          <Section style={section}>
            <Text style={label}>
              From: <Text style={value}>{name}</Text>
            </Text>

            <Text style={label}>
              Email:{" "}
              <Text style={value}>
                <Link href={`mailto:${email}`} style={link}>
                  {email}
                </Link>
              </Text>
            </Text>

            <Text style={label}>
              Phone:{" "}
              <Text style={value}>
                <Link href={`tel:${phone}`} style={link}>
                  {phone}
                </Link>
              </Text>
            </Text>

            <Text style={label}>
              Zip Code: <Text style={value}>{zipCode}</Text>
            </Text>

            <Text style={label}>
              Service Type: <Text style={value}>{serviceType}</Text>
            </Text>

            <Text style={label}>
              Submitted: <Text style={value}>{submittedAt}</Text>
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>
              Message: <Text style={messageText}>{message}</Text>
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            This email was sent from the East Bay Blinds contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#484848",
  padding: "17px 0 0",
};

const section = {
  padding: "0 48px",
};

const label = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#484848",
  margin: "16px 0 4px",
};

const value = {
  fontSize: "14px",
  color: "#484848",
  margin: "0 0 16px",
};

const link = {
  color: "#2754C5",
  textDecoration: "underline",
};

const messageText = {
  fontSize: "14px",
  color: "#484848",
  lineHeight: "1.5",
  margin: "0",
  whiteSpace: "pre-wrap",
};

const hr = {
  borderColor: "#dfe1e4",
  margin: "42px 0",
};

const footer = {
  fontSize: "12px",
  color: "#8898aa",
  margin: "0",
  padding: "0 48px",
};
