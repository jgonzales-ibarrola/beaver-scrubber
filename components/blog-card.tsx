"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
	slug: string;
	title: string;
	excerpt: string;
	author: string;
	image?: string;
}

export default function BlogCard({ slug, title, excerpt, author, image }: BlogCardProps) {
	const imageUrl = image || '/dummy-image.png';

	return (
		<Link
			href={`/blogs/${slug}`}
			className="group block bg-white rounded-lg shadow hover:shadow-md transition"
		>
			<div className="relative h-48 w-full overflow-hidden rounded-t-lg">
				<Image
					src={imageUrl}
					alt={title}
					fill
					className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
					sizes="(max-width: 768px) 100vw, 33vw"
					priority
				/>
				<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 pointer-events-none" />
			</div>
			<div className="p-4 space-y-2">
				<h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{title}</h3>
				<p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
				<p className="text-xs text-gray-500 mt-2">By {author}</p>
			</div>
		</Link>
	);
}
