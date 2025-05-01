import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav-bar";
import { Toaster } from 'react-hot-toast';
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Beaver Scrubber | Professional Cleaning & Power Washing Services",
  description:
    "Beaver Scrubber offers top-tier residential and commercial cleaning services, including deep kitchen cleans, bedroom and living area sanitization, power washing for exteriors, patios, and equipment, and organized stock room cleaning.",
  keywords: [
    "Beaver Scrubber",
    "cleaning services",
    "power washing",
    "home cleaning",
    "exterior cleaning",
    "patio cleaning",
    "kitchen cleaning",
    "commercial cleaning",
    "professional cleaning",
    "driveway washing",
    "deep cleaning services",
    "bedroom cleaning",
    "vehicle power washing"
  ],
  authors: [{ name: "Beaver Scrubber Team", url: "https://beaver-scrubber.vercel.app/" }],
  creator: "Beaver Scrubber",
  themeColor: "#f97316", // matches your orange hover color for branding
  openGraph: {
    title: "Beaver Scrubber | Professional Cleaning & Power Washing Services",
    description:
      "Professional-grade cleaning and power washing solutions tailored to homes, businesses, and everything in between.",
    url: "https://beaver-scrubber.vercel.app/",
    siteName: "Beaver Scrubber",
    images: [
      {
        url: "https://beaver-scrubber.vercel.app/logo.png", // Replace with actual Open Graph image
        width: 539,
        height: 463,
        alt: "Beaver Scrubber Logo",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
      >
        <Toaster toastOptions={{
          duration: 5000
        }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
