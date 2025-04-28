"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function ContactSection() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const contactData = {
      name: formData.get("name") as string,
      email: formData.get("email") ? (formData.get("email") as string) : "", // Optional email
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/send/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        toast.success("Message Sent! We'll get back to you as soon as possible.");
      } else {
        toast.error("Failed to send the message. Please try again.");
      }
    } catch (error) {
			console.error(error);
      toast.error("An error occurred while sending the message.");
    }

    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto">
            Have questions or ready to book? Get in touch with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl bg-white rounded-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email (optional)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email (optional)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=XJ55+QW4,Lucena+City,Quezon+Province,Philippines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4"
            >
              <div className="bg-primary p-3 rounded-full text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">Our Location</h3>
                <p className="text-primary/80">
                  XJ55+QW4, Quezon Ave., Brgy. Gulang-Gulang, Lucena City, Quezon Province, Philippines
                </p>
              </div>
            </Link>

            <div className="flex items-start gap-4">
              <div className="bg-primary p-3 rounded-full text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">Phone</h3>
                <p className="text-primary/80">+63 915 2877 486</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary p-3 rounded-full text-white">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary">Email</h3>
                <p className="text-primary/80">beaverscrubberco@gmail.com</p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-semibold text-lg text-primary mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="bg-primary p-3 rounded-full text-white hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="bg-primary p-3 rounded-full text-white hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
