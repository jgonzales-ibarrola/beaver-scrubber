"use client";

import { cn } from "@/lib/utils";

interface ServiceCardProps {
  imgUrl: string;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({
  imgUrl,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <div className={cn("max-w-xs w-full group/card", className)}>
      <div
        className={cn(
          "relative h-96 rounded-md shadow-xl overflow-hidden bg-cover bg-center flex flex-col justify-end p-6 transition-all duration-300 group-hover/card:shadow-2xl"
        )}
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      >
        <div className="absolute inset-0 bg-black/50 group-hover/card:bg-black/60 transition duration-300" />

        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}
