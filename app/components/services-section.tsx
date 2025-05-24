"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Sparkles, Droplets } from "lucide-react";
import ServiceCard from "@/components/service-card";

const cleaningContent = [
	{
		title: "Kitchen Cleaning",
		description:
			"Deep cleaning of kitchen surfaces, appliances, and fixtures. We tackle tough grease, disinfect surfaces, and leave your kitchen spotless.",
		imgUrl: "/home/kitchen-cleaning.jpg",
	},
	{
		title: "Bedroom & Living Areas",
		description:
			"Thorough cleaning of bedrooms and living spaces, including vacuuming mattresses, carpets, and upholstery for a fresh, allergen-free environment.",
		imgUrl: "/home/bed-living-cleaning.jpg",
	},
	{
		title: "Stock Room Organization",
		description:
			"Decluttering and organizing storage spaces, ensuring a clean and orderly environment for your belongings.",
		imgUrl: "/home/stock-room-org-cleaning.jpg",
	},
];

const powerWashingContent = [
	{
		title: "House Exteriors",
		description:
			"Professional power washing for walkways, stairs, swimming pools, chimneys, roofs, and windows to remove dirt, stains, and weather damage.",
		imgUrl: "/home/exterior-cleaning.jpg",
	},
	{
		title: "Driveways & Patios",
		description:
			"Restore the appearance of concrete or tile patios and driveways by removing accumulated dirt, debris, and weather-related stains.",
		imgUrl: "/home/drive-patios-cleaning.jpg",
	},
	{
		title: "Vehicles & Equipment",
		description:
			"Specialized power washing for automobiles, outdoor equipment, barbecue grills, and other items that need thorough cleaning.",
		imgUrl: "/home/vehicle-equipment-cleaning.jpg",
	},
];

const upholsteryShampooingContent = [
	{
		title: "Bed Mattresses",
		description:
			"A specialized fabric-safe shampoo is applied using a low-moisture technique to break down dirt without soaking the mattress. This is followed by gentle scrubbing and powerful extraction to leave the mattress fresh, sanitized, and nearly dry.",
		imgUrl: "/home/car-interior.jpg",
	},
	{
		title: "Sofas and Leather Chairs",
		description:
			"Thorough shampooing of fabric and upholstered couches to remove embedded dirt, pet hair, stains, and odors — leaving your furniture fresh and inviting.",
		imgUrl: "/home/sofa-cleaning.jpg",
	},
	{
		title: "Fabric Upholstery",
		description:
			"Professional-grade upholstery cleaning for mattresses and office chairs, helping eliminate allergens, bacteria, and body oils for a healthier indoor environment.",
		imgUrl: "/home/office-chair-cleaning.jpg",
	},
];

export default function Services() {
	return (
		<section id="services" className="py-20 bg-gray-100 dark:bg-[#1a202c]">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a202c] dark:text-[#f3f4f6]">
						Our Services
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
						Comprehensive cleaning and power washing solutions
						tailored to your needs.
					</p>
				</motion.div>

				<Tabs defaultValue="cleaning" className="w-full">
					<TabsList className="bg-white grid w-fit mx-auto grid-cols-3 gap-4 mb-12">
						<TabsTrigger
							value="cleaning"
							className="text-lg py-3 px-5 rounded-md bg-gray-100 hover:bg-orange/80 transition-colors"
						>
							<Sparkles className="mr-2 h-4 w-4" />
							Professional Cleaning
						</TabsTrigger>
						<TabsTrigger
							value="power-washing"
							className="text-lg py-3 px-5 rounded-md bg-gray-100 hover:bg-orange/80 transition-colors"
						>
							<Droplets className="mr-2 h-4 w-4" />
							Power Washing
						</TabsTrigger>
						<TabsTrigger
							value="upholstery-shampooing"
							className="text-lg py-3 px-5 rounded-md bg-gray-100 hover:bg-orange/80 transition-colors"
						>
							<Droplets className="mr-2 h-4 w-4" />
							Upholstery Shampooing
						</TabsTrigger>
					</TabsList>

					<TabsContent value="cleaning">
						<div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
							{cleaningContent.map((service, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: index * 0.2,
									}}
								>
									<ServiceCard
										imgUrl={service.imgUrl}
										title={service.title}
										description={service.description}
									/>
								</motion.div>
							))}
						</div>
					</TabsContent>

					<TabsContent value="power-washing">
						<div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
							{powerWashingContent.map((service, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: index * 0.2,
									}}
								>
									<ServiceCard
										imgUrl={service.imgUrl}
										title={service.title}
										description={service.description}
									/>
								</motion.div>
							))}
						</div>
					</TabsContent>

					<TabsContent value="upholstery-shampooing">
						<div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
							{upholsteryShampooingContent.map(
								(service, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.5,
											delay: index * 0.2,
										}}
									>
										<ServiceCard
											imgUrl={service.imgUrl}
											title={service.title}
											description={service.description}
										/>
									</motion.div>
								)
							)}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
