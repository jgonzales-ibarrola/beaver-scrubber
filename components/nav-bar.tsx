"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full bg-linear-to-r from-secondary to-brown text-white shadow-sm">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 text-primary">
					<motion.div
						initial={{ scale: 0.95, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.6 }}
						className="flex items-center gap-1"
					>
						<Image
							src={"/logo.png"}
							width={60}
							height={60}
							alt="beaver-scrubber-logo"
							className="object-contain"
						/>
						<span className="inline-block text-2xl font-bold tracking-tight text-white">
							Beaver Scrubber
						</span>
					</motion.div>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex gap-8 text-sm font-medium items-center">
					{["services", "booking", "about", "contact"].map(
						(section) => (
							<Link
								key={section}
								href={`/#${section}`}
								className="hover:text-white/80 transition-colors duration-200"
							>
								{section.charAt(0).toUpperCase() +
									section.slice(1)}
							</Link>
						)
					)}

					<Link
								href={`/blogs`}
								className="hover:text-white/80 transition-colors duration-200"
							>
								Blogs
							</Link>
				</nav>

				{/* Right side */}
				<div className="flex items-center gap-4">
					{/* Optional: Dark mode toggle here */}
					<Button
						asChild
						className="hidden md:inline-flex bg-[#fcdf5b] hover:bg-[#fd944f] text-primary"
					>
						<Link href="#booking">Book Now</Link>
					</Button>

					{/* Mobile Menu Button */}
					<Button
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle Menu"
						className="md:hidden p-2 rounded-full hover:bg-muted transition"
					>
						{isOpen ? <X size={26} /> : <Menu size={26} />}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -20, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden fixed inset-0 top-16 bg-background z-40 p-6 flex flex-col gap-6"
					>
						{["services", "booking", "about", "contact", "blogs"].map(
							(section) => (
								<motion.div
									key={section}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.1 }}
								>
									<Link
										href={`#${section}`}
										onClick={() => setIsOpen(false)}
										className="text-lg font-semibold hover:text-primary transition-colors"
									>
										{section.charAt(0).toUpperCase() +
											section.slice(1)}
									</Link>
								</motion.div>
							)
						)}

						<Button
							asChild
							className="w-full mt-4 bg-[#fcdf5b] text-primary"
						>
							<Link
								href="#booking"
								onClick={() => setIsOpen(false)}
							>
								Book Noww
							</Link>
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
