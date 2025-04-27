"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[url(/home/hero-banner.png)] bg-cover bg-center">
      {/* Background Overlay for Darkening Effect */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white dark:text-[#f3f4f6]"
        >
          Transform Your Space <br />
          <span className="text-[#fcdf5b]">
            with Professional Cleaning
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white dark:text-[#e2e8f0]"
        >
          Delivering pristine results for homes and businesses in
          Lucena City, Quezon Province — trusted, reliable, and
          affordable cleaning services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 bg-[#fcdf5b] hover:bg-[#fd944f] text-primary"
          >
            <Link href="#booking">Book an Appointment</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-[#fd944f] text-primary hover:bg-white/80"
          >
            <Link href="#services">View Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
