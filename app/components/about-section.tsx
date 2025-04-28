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
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
	const aboutText = `Beaver Scrubber Cleaning Co. specializes in professional cleaning and power washing services, primarily serving residential properties. We expertly clean beds, pillows, carpets, sofas, and a variety of furniture. Our services also extend to schools, commercial spaces, healthcare facilities, and other work environments. Additionally, we offer power washing solutions to remove algae, mildew, and mold from outdoor surfaces, restoring their original beauty.`;

	return (
		<section id="about" className="py-20 bg-gray-100">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-4">About Us</h2>
					<p className="text-primary/80 text-lg max-w-2xl mx-auto">
						Discover who we are and what we stand for at Beaver
						Scrubber Cleaning Co.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-10 items-start">
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<Card className="rounded-2xl shadow-md">
							<CardHeader>
								<CardTitle className="text-2xl">
									Our Story
								</CardTitle>
								<CardDescription className="text-primary/80">
									Built on quality, trust, and care.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<TextGenerateEffect words={aboutText} />
								<Separator />
								<div>
									<h3 className="text-lg font-semibold mb-4">
										Our Core Values
									</h3>
									<ul className="space-y-3">
										{[
											"Dedication",
											"Cooperation",
											"Adaptability",
											"Resourcefulness",
											"Environmental Stewardship",
										].map((value) => (
											<li
												key={value}
												className="flex items-center gap-3"
											>
												<span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
												<span className="text-muted-foreground">
													{value}
												</span>
											</li>
										))}
									</ul>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<Card className="rounded-2xl shadow-md">
							<CardHeader>
								<CardTitle className="text-2xl">
									Our Location
								</CardTitle>
								<CardDescription className="text-primary/80">
									Located in the heart of Lucena City
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="space-y-4 text-primary/80">
									<p>
										Our headquarters is located at XJ55+QW4,
										Quezon Ave., Brgy. Gulang-Gulang, Lucena
										City, Quezon Province, Philippines.
									</p>
									<p>
										Positioned along major highways and near
										the diversion road, we ensure fast,
										accessible service delivery to our
										clients and high visibility to future
										customers.
									</p>
								</div>
								<div className="aspect-video overflow-hidden rounded-lg">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.437320654199!2d121.61319217590238!3d13.942083686511854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ddedff9999b413%3A0x7f3c0c4ff5db6f76!2sXJ55%2BQW4!5e0!3m2!1sen!2sph!4v1678532101234!5m2!1sen!2sph"
										width="100%"
										height="100%"
										style={{ border: 0 }}
										allowFullScreen
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
									></iframe>
								</div>
								<div className="text-center mt-4">
									<Button
										className="bg-secondary text-primary hover:bg-secondary/80"
										asChild
									>
										<Link
											href="https://www.google.com/maps/dir/?api=1&destination=XJ55+QW4,Lucena+City,Quezon+Province,Philippines"
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
