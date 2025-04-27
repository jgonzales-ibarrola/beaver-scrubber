import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  time: string;
  serviceType: string;
  serviceDetails?: string;
  additionalNotes?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  address,
  date,
  time,
  serviceType,
  serviceDetails,
  additionalNotes,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", padding: "20px", color: "#333" }}>
    <h2>🧹 New Booking Request</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Address:</strong> {address}</p>
    <p><strong>Service:</strong> {serviceType}</p>
    <p><strong>Date:</strong> {date}</p>
    <p><strong>Time:</strong> {time}</p>
    {serviceDetails && (
      <p><strong>Service Details:</strong> {serviceDetails}</p>
    )}
    {additionalNotes && (
      <p><strong>Additional Notes:</strong> {additionalNotes}</p>
    )}
    <hr style={{ margin: "20px 0" }} />
    <p>✅ Please confirm this booking with the client ASAP.</p>
  </div>
);
