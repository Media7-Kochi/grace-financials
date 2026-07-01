import axios from 'axios';

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

export async function sendEmail({ to, subject, htmlContent }) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    throw new Error('BREVO_API_KEY is not configured in .env');
  }

  if (!process.env.SENDER_EMAIL) {
    throw new Error('SENDER_EMAIL is not configured in .env');
  }

  const response = await axios.post(
    BREVO_API_URL,
    {
      sender: {
        name: 'Grace Financials',
        email: process.env.SENDER_EMAIL,
      },
      to: Array.isArray(to) ? to : [{ email: to }],
      subject,
      htmlContent,
    },
    {
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
    },
  );

  return { success: true, messageId: response.data.messageId };
}
