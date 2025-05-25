"use client";

import { motion } from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
	return (
		<section id="about" className="py-20 bg-gray-100">
			<div className="container mx-auto px-4">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-3">
						About Us
					</h2>
					<p className="text-primary/80 text-base md:text-lg max-w-xl mx-auto">
						Discover who we are and what we stand for at
						<br />
						<span className="text-lead font-extrabold underline underline-offset-2 italic">
							BEAVER SCRUBBER CLEANING CO.
						</span>
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-10 items-start">
					{/* Our Story */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<Card className="rounded-2xl shadow-md">
							<CardHeader>
								<CardTitle className="text-2xl">Our Story</CardTitle>
								<CardDescription className="text-muted-foreground text-sm">
									Built on quality, trust, and care.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6 text-sm text-gray-700 leading-relaxed">
								<div>
									<p>
										<span className="font-semibold underline underline-offset-2 italic">
											BEAVER SCRUBBER CLEANING CO.
										</span>{" "}
										specializes in professional cleaning,
										power washing and upholstery shampooing,
										primarily serving residential properties.
										We expertly clean beds, pillows, carpets,
										sofas, and a variety of furniture. Our
										services also extend to schools, commercial
										spaces, healthcare facilities, and other
										work environments. Additionally, we offer
										power washing solutions to remove algae,
										mildew, and mold from outdoor surfaces,
										restoring their original beauty.
									</p>
								</div>
								<Separator />
								<div>
									<h3 className="text-lg font-semibold mb-4">
										What “BEAVER” Stands For
									</h3>
									<ul className="space-y-3 text-muted-foreground text-sm">
										{[
											["B", "Belongingness"],
											["E", "Environmentally Responsible"],
											["A", "Adaptability"],
											["V", "Value Creation"],
											["E", "Excellence"],
											["R", "Reliability"],
										].map(([letter, word]) => (
											<li key={letter+word} className="flex items-center gap-2">
												<span className="text-blue-500 font-bold text-lg w-6">
													{letter}
												</span>
												<span className="text-sm">{word}</span>
											</li>
										))}
									</ul>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* Location Card */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<Card className="rounded-2xl shadow-md">
							<CardHeader>
								<CardTitle className="text-2xl">Our Location</CardTitle>
								<CardDescription className="text-muted-foreground text-sm">
									Located in the heart of Lucena City
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-5 text-sm text-muted-foreground leading-relaxed">
								<div>
									<p>
										Our headquarters is located at XJ55+QW4,
										Quezon Avenue, Barangay. Gulang-Gulang, Lucena City,
										Quezon Province, Philippines.
									</p>
									<p className="mt-2">
										We’re positioned along key highways and
										near the diversion road — making our
										services fast, accessible, and visible
										to the community.
									</p>
								</div>
								<div className="aspect-video overflow-hidden rounded-lg">
									<iframe
										src="https://www.google.com/maps?q=7Q53XJ55%2BQW4&output=embed"
										width="100%"
										height="100%"
										style={{ border: 0 }}
										allowFullScreen
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
									></iframe>
								</div>
								<div className="text-center">
									<Button
										className="bg-secondary text-primary hover:bg-secondary/80"
										asChild
									>
										<Link
											href="https://maps.app.goo.gl/MBXXrSoF6cPFWxDK6"
											target="_blank"
											rel="noopener noreferrer"
										>
											Get Directions
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
