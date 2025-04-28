import * as React from "react";

interface ContactTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactTemplate({
  name,
  email,
  phone,
  message,
}: ContactTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", padding: "20px", color: "#333" }}>
      <h2>📩 New Contact Message</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
      <hr style={{ margin: "20px 0" }} />
      <p>✅ Please respond to this inquiry as soon as possible.</p>
    </div>
  );
}
