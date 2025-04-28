import { EmailTemplate } from '@/components/email-template';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render'; // <-- add this

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, address, date, time, serviceType, serviceDetails, additionalNotes } = body;

    // ✅ Render EmailTemplate to HTML string first
    const emailHtml = await render(
      EmailTemplate({
        name,
        email,
        phone,
        address,
        date,
        time,
        serviceType,
        serviceDetails,
        additionalNotes,
      })
    );

    const { data, error } = await resend.emails.send({
      from: 'Beaver Scrubber Cleaning Company <onboarding@resend.dev>',
      to: ['beaverscrubberco@gmail.com'],
      subject: 'New Request for CLEANING!',
      html: emailHtml, // ✅ use html instead of react
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}