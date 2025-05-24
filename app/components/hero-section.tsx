"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('/home/hero-banner.png')] overflow-hidden">
			{/* Watery Overlay Blob */}
			<div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 via-transparent to-brown-700/30 animate-pulse blur-2xl z-0 pointer-events-none" />

			{/* Justin Beaver Image */}
			<motion.img
				src="/home/justin-beaver.png"
				alt="Justin Beaver the mascot"
				initial={{ opacity: 0, x: -50, y: 50 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={{ duration: 1, delay: 0.6 }}
				className="absolute bottom-0 left-0 w-40 sm:w-52 md:w-80 object-contain z-10 pointer-events-none"
			/>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-black/60 z-0" />

			{/* Main Content */}
			<div className="relative z-10 container mx-auto px-6 text-center">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white"
				>
					Transform Your Space <br />
					<span className="bg-gradient-to-r from-[#fcdf5b] to-[#fd944f] bg-clip-text text-transparent">
						with Professional Cleaning
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/90"
				>
					Delivering pristine results for homes and businesses in
					Lucena City, Quezon Province - trusted, reliable, and
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
						className="text-lg px-8 py-6 bg-[#fcdf5b] hover:bg-[#fd944f] text-primary font-semibold shadow-md"
					>
						<Link href="#booking">Book an Appointment</Link>
					</Button>
					<Button
						asChild
						size="lg"
						variant="outline"
						className="text-lg px-8 py-6 border-white/30 text-primary hover:bg-white/10 hover:text-white transition"
					>
						<Link href="#services">View Services</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
