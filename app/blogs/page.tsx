import BlogCard from '@/components/blog-card';
import React from 'react'

const blogPosts = [
	{
		slug: "the-power-of-clean",
		title: "The Power of Clean: Unveiling the Benefits of Professional Deep Cleaning and Power Washing",
		excerpt:
			"Cleanliness is more than just beauty—it’s foundational to health, safety, and sustainability. Learn how professional cleaning protects and enhances your property.",
		author: "K.A. Villalobos",
		image: '/home/exterior-cleaning.jpg'
	},
  {
		slug: "simplify-your-life",
		title: "The Convenience of Availing Professional Cleaning Services",
		excerpt:
			"In the fast-paced rhythm of modern living, time has become a precious currency. Juggling personal, professional, and household responsibilities often leaves little room for deep cleaning and home maintenance. This is where professional cleaning services offer not just a solution, but a lifestyle upgrade. Hiring professionals to clean your home or workspace offers unmatched convenience, transforming a time-consuming chore into a seamless service that adapts to your needs.",
		author: "A.J. Ng",
		image: '/home/sofa-cleaning.jpg'
	},
  {
		slug: "hidden-dangers",
		title: "The Silent Risks of an Unclean Home",
		excerpt:
			"An unclean home does more than challenge your aesthetic sensibilities—it can endanger your health, disrupt mental well-being, and damage your property. The build-up of grime, dust, pet dander, and mold may seem harmless at first glance, but science tells a different story. According to a 2020 study published by PuroClean, prolonged exposure to unclean indoor environments significantly increases the risk of respiratory conditions, skin irritation, and gastrointestinal illnesses due to bacteria proliferation.",
		author: "A.I Quillope",
		image: '/home/hero-banner.png'
	},
  {
		slug: "invest-in-your-home",
		title: "Why Regular Maintenance Cleaning Matters",
		excerpt:
			"Just like any valuable asset, your home requires consistent care to preserve its functionality, aesthetic value, and long-term worth. Regular maintenance cleaning is not merely about keeping things tidy—it’s a foundational practice that safeguards your investment and nurtures your family’s health. As highlighted by Independence Home Life (2022), minor issues like mold in grout lines or grease buildup in exhaust fans, when ignored, often escalate into costly repairs. Routine cleaning helps catch these problems early, saving you from unexpected financial burdens.",
		author: "K. De Leon",
		image: '/home/bed-living-cleaning.jpg'
	},
];

export default function BlogsPage() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold mb-12 text-center">Our Blog</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{blogPosts.map((post) => (
						<BlogCard key={post.slug} {...post} />
					))}
				</div>
			</div>
		</section>
	);
}