import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactTemplate } from '@/components/contact-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

    const emailHtml = await render(
      ContactTemplate({
        name,
        email,
        phone,
        message,
      })
    );

    const { data, error } = await resend.emails.send({
      from: 'Beaver Scrubber Cleaning Company <onboarding@resend.dev>',
      to: ['beaverscrubberco@gmail.com'],
      subject: 'New Contact Message!',
      html: emailHtml,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
