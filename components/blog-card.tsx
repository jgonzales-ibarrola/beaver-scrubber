"use client";

import Link from "next/link";

interface BlogCardProps {
	slug: string;
	title: string;
	excerpt: string;
	author: string;
	image?: string;
}

export default function BlogCard({ slug, title, excerpt, author, image }: BlogCardProps) {
	return (
		<Link
			href={`/blogs/${slug}`}
			className="group block bg-white rounded-lg shadow hover:shadow-md transition"
		>
			<div className="relative h-48 w-full overflow-hidden rounded-t-lg">
				<img
					src={image || `https://source.unsplash.com/featured/?cleaning,home&sig=${slug}`}
					alt={title}
					className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
				/>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
			</div>
			<div className="p-4 space-y-2">
				<h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{title}</h3>
				<p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
				<p className="text-xs text-gray-500 mt-2">By {author}</p>
			</div>
		</Link>
	);
}
