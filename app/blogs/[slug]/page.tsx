import Image from "next/image";
import { notFound } from "next/navigation";

const blogContent: Record<
	string,
	{
		title: string;
		author: string;
		body: string[];
		image?: string;
	}
> = {
	"the-power-of-clean": {
		title: "The Power of Clean: Unveiling the Benefits of Professional Deep Cleaning and Power Washing",
		author: "K.A. Villalobos",
		body: [
			"Cleanliness is more than just surface-level beauty—it is the foundation of health, safety, and property preservation. In a world increasingly aware of hygiene and sustainability, professional deep cleaning and power washing services offer solutions that are both practical and transformative.",
			"The accumulation of dirt, grime, mold, and mildew doesn’t just compromise the visual appeal of a property; it silently deteriorates surfaces and jeopardizes health. According to Healthline (2021), exposure to mold and dust mites can trigger respiratory ailments, especially in children and the elderly.",
			"Power washing, in particular, utilizes high-pressure water spray to effectively remove built-up contaminants on exterior surfaces. This not only revitalizes your home or commercial building but also prolongs the life of driveways, walls, and roofs by preventing corrosion and decay. A report by Mr. Handyman (2021) reveals that regular pressure washing reduces long-term repair costs by up to 30% in residential properties.",
			"Moreover, a well-maintained property enhances its market value and leaves a lasting impression—something especially important for businesses aiming to attract clients or homeowners preparing for resale. By hiring professionals, you also save valuable time and avoid physical strain, allowing experts to handle every detail with precision.",
			"Ultimately, investing in professional cleaning is not a luxury but a necessity—an act of care for your property, your health, and your peace of mind.",
		],
		image: "/home/exterior-cleaning.jpg",
	},
  "simplify-your-life": {
		title: "The Convenience of Availing Professional Cleaning Services",
		author: "A.J. Ng",
		body: [
			"In the fast-paced rhythm of modern living, time has become a precious currency. Juggling personal, professional, and household responsibilities often leaves little room for deep cleaning and home maintenance. This is where professional cleaning services offer not just a solution, but a lifestyle upgrade. Hiring professionals to clean your home or workspace offers unmatched convenience, transforming a time-consuming chore into a seamless service that adapts to your needs.",
			"What makes this service particularly valuable is the ability to customize cleaning plans based on your schedule and preferences. Whether it's weekly maintenance, one-time deep cleaning, or seasonal sanitation, professional services are designed to be flexible yet consistent. As emphasized by Maria’s Green Cleaning (2022), clients who avail regular services experience significant mental relief and health improvements, thanks to reduced allergens and germs in the home.",
			"Additionally, trained cleaners use specialized tools and products that ensure thorough sanitization—often exceeding what the average homeowner can achieve. This not only guarantees a higher standard of cleanliness but also prolongs the life of furniture, appliances, and surfaces. Maintenance One (2021) highlights that consistent professional cleaning improves indoor air quality and lowers the risk of illness, making it an investment in your health.",
			"Ultimately, professional cleaning services simplify life in profound ways. They create a cleaner, healthier space without the stress, giving you time to focus on what truly matters—family, career, rest, and meaningful living."
		],
		image: '/home/sofa-cleaning.jpg'
	},
	"hidden-dangers": {
		title: "The Silent Risks of an Unclean Home",
		author: "A.I Quillope",
		body: [
			"An unclean home does more than challenge your aesthetic sensibilities—it can endanger your health, disrupt mental well-being, and damage your property. The build-up of grime, dust, pet dander, and mold may seem harmless at first glance, but science tells a different story. According to a 2020 study published by PuroClean, prolonged exposure to unclean indoor environments significantly increases the risk of respiratory conditions, skin irritation, and gastrointestinal illnesses due to bacteria proliferation.",
			"Neglected kitchens, for instance, are breeding grounds for harmful pathogens like salmonella and E. coli, which thrive in damp, unhygienic spaces. Meanwhile, dust accumulation can trigger asthma and allergies, especially in children and elderly residents. The risk escalates with the presence of black mold, which is linked to more severe symptoms like chronic fatigue and lung infections, according to Healthline.",
			"Beyond physical health, cluttered and dirty spaces take a toll on mental health. Psychological studies have shown that disorganized environments contribute to stress, anxiety, and depression, making it harder to focus or relax. Additionally, pests like rodents and cockroaches find their way into dirty, food-laden areas, further compounding hygiene and structural concerns.",
			"In essence, the true cost of an unclean home is far greater than the inconvenience of tidying up. It affects your body, mind, and financial stability. By understanding these hidden risks, homeowners and business operators are encouraged to take proactive steps in securing a cleaner, safer, and more life-affirming environment."
		],
		image: '/home/hero-banner.png'
	},
	"invest-in-your-home": {
		title: "Why Regular Maintenance Cleaning Matters",
		author: "K. De Leon",
		body: [
			"Just like any valuable asset, your home requires consistent care to preserve its functionality, aesthetic value, and long-term worth. Regular maintenance cleaning is not merely about keeping things tidy—it’s a foundational practice that safeguards your investment and nurtures your family’s health. As highlighted by Independence Home Life (2022), minor issues like mold in grout lines or grease buildup in exhaust fans, when ignored, often escalate into costly repairs. Routine cleaning helps catch these problems early, saving you from unexpected financial burdens.",
			"Additionally, appliances and HVAC systems operate more efficiently in clean environments, leading to improved energy performance and reduced utility costs. Regular dusting and filter replacement can extend the life of these systems and improve indoor air quality, making your home healthier and more sustainable. Furthermore, homes that are regularly cleaned and maintained tend to retain or increase their market value, a point emphasized by Fannie Mae’s homeowner resources.",
			"From a lifestyle standpoint, a clean home is a productive and peaceful space. It supports better sleep, fosters relaxation, and reflects a sense of pride in one’s living environment. In a time where wellness is paramount, regular cleaning is not a task to be sidelined—it is a vital practice that enriches everyday life. Beaver Scrubber Cleaning Co. invites you to treat your home as the sacred space it is and maintain it through consistent, professional care.",
		],
		image: '/home/bed-living-cleaning.jpg'
	}
};

export default async function BlogDetailPage({ params }: { params:  Promise<{ slug: string }> }) {
	const {slug} = await params;
	const blog = blogContent[slug];
	if (!blog) return notFound();

	return (
		<section className="min-h-screen bg-white py-20 px-4 md:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto">
				{blog.image && (
					<div className="relative w-full h-64 mb-10 rounded-xl overflow-hidden">
						<Image
							src={blog.image}
							alt={blog.title}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 768px"
							priority
						/>
					</div>
				)}

				<header className="mb-12 text-center">
					<h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">{blog.title}</h1>
					<p className="mt-4 text-base text-muted-foreground">
						Written by <span className="font-medium">{blog.author}</span>
					</p>
					<div className="mt-6 h-px bg-gray-200 w-24 mx-auto rounded-full" />
				</header>

				<article className="space-y-6 text-base md:text-lg leading-relaxed text-gray-800">
					{blog.body.map((para, idx) => (
						<p key={idx} className="text-pretty">{para}</p>
					))}
				</article>
			</div>
		</section>
	);
}