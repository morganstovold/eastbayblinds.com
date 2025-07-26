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
  Row,
  Column,
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
  const contactFields = [
    { label: "Name", value: name },
    { 
      label: "Email", 
      value: email, 
      link: `mailto:${email}` 
    },
    { 
      label: "Phone", 
      value: phone, 
      link: `tel:${phone}` 
    },
    { label: "Zip Code", value: zipCode },
    { label: "Service Type", value: serviceType },
    { label: "Submitted", value: submittedAt },
  ];

  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name} - East Bay Blinds</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Text style={heading}>📋 New Contact Form Submission</Text>
          </Section>

          <Section style={contentSection}>
            <Text style={sectionTitle}>Contact Information</Text>
            
            {contactFields.map(({ label, value, link }) => (
              <Row key={label} style={fieldRow}>
                <Column style={labelColumn}>
                  <Text style={fieldLabel}>{label}:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={fieldValue}>
                    {link ? (
                      <Link href={link} style={linkStyle}>
                        {value}
                      </Link>
                    ) : (
                      value
                    )}
                  </Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Hr style={divider} />

          <Section style={contentSection}>
            <Text style={sectionTitle}>Message</Text>
            <Text style={messageContent}>{message}</Text>
          </Section>

          <Hr style={divider} />

          <Section style={footerSection}>
            <Text style={footerText}>
              This email was automatically generated from the East Bay Blinds 
              contact form submission.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f8fafc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "600px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

const headerSection = {
  backgroundColor: "#1e40af",
  padding: "32px 40px",
  textAlign: "center" as const,
};

const heading = {
  fontSize: "24px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "0 0 8px 0",
  lineHeight: "1.2",
};

const contentSection = {
  padding: "32px 40px 0",
};

const sectionTitle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1f2937",
  margin: "0 0 20px 0",
  borderBottom: "2px solid #e5e7eb",
  paddingBottom: "8px",
};

const fieldRow = {
  marginBottom: "16px",
};

const labelColumn = {
  width: "30%",
  verticalAlign: "top" as const,
};

const valueColumn = {
  width: "70%",
  verticalAlign: "top" as const,
};

const fieldLabel = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#6b7280",
  margin: "0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const fieldValue = {
  fontSize: "16px",
  color: "#1f2937",
  margin: "0",
  lineHeight: "1.4",
};

const linkStyle = {
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: "500",
};

const messageContent = {
  fontSize: "16px",
  color: "#374151",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
  backgroundColor: "#f9fafb",
  padding: "20px",
  borderRadius: "6px",
  border: "1px solid #e5e7eb",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "32px 40px",
};

const footerSection = {
  padding: "0 40px 32px",
};

const footerText = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0",
  textAlign: "center" as const,
  fontStyle: "italic",
};