# Email Setup Guide

## Overview

This project uses Resend to send email notifications when contact forms are submitted. When a customer submits a contact form, an email is automatically sent to `morgannstovold.work@gmail.com` with the customer's information.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install resend @react-email/components
# or
pnpm add resend @react-email/components
```

### 2. Resend Configuration

1. **Sign up for Resend**: Go to [resend.com](https://resend.com) and create an account
2. **Get your API key**: In your Resend dashboard, go to API Keys and create a new key
3. **Add your domain**: In the Domains section, add `eastbayblinds.com` as a verified domain

### 3. Environment Variables

Add these to your `.env` file:

```env
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Optional: Custom from email (must be verified in Resend)
RESEND_FROM_EMAIL=noreply@eastbayblinds.com
```

### 4. Domain Verification

In your Resend dashboard:
1. Go to **Domains**
2. Add `eastbayblinds.com`
3. Follow the DNS verification steps
4. Wait for verification to complete

### 5. Test the Setup

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Submit a test contact form
4. Check if the email is received at `morgannstovold.work@gmail.com`

## Email Template

The email template (`components/ContactEmail.tsx`) includes:
- Customer's full name
- Email address (clickable)
- Phone number (clickable)
- Message content
- Submission timestamp
- Professional styling

## Production Deployment

### Vercel

1. Add the environment variables in your Vercel dashboard:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL` (optional)

2. Deploy your application

### Other Platforms

Add the environment variables to your hosting platform's configuration.

## Troubleshooting

### Email Not Sending

1. **Check API Key**: Verify your `RESEND_API_KEY` is correct
2. **Domain Verification**: Ensure `eastbayblinds.com` is verified in Resend
3. **From Email**: Make sure the from email is verified
4. **Console Logs**: Check server logs for error messages

### Common Issues

- **Domain not verified**: The from email domain must be verified in Resend
- **Invalid API key**: Double-check the API key format
- **Rate limiting**: Resend has rate limits for free accounts

## Email Flow

1. Customer submits contact form
2. Form data is saved to database
3. Email notification is sent to `morgannstovold.work@gmail.com`
4. Email includes all customer information
5. Admin can click email/phone links to contact customer

## Customization

### Change Recipient Email

Edit `lib/email.ts`:
```typescript
to: ['new-email@example.com'], // Change this line
```

### Modify Email Template

Edit `components/ContactEmail.tsx` to customize the email design and content.

### Add Multiple Recipients

```typescript
to: ['morgannstovold.work@gmail.com', 'another@example.com'],
```

## Security Notes

- API keys are server-side only
- Email addresses are validated
- No sensitive data is logged
- Emails are sent asynchronously to avoid blocking the form submission 