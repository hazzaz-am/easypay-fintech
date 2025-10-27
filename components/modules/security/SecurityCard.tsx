"use client";

import { cn } from "@/lib/utils";
import { ISecurity } from "@/types";
import { motion } from "motion/react";

interface IProps {
	service: ISecurity;
	index: number;
}

export default function SecurityCard({ service, index }: IProps) {
	return (
		<motion.div
			className={cn(service.border && "lg:relative lg:px-6")}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{
				duration: 0.6,
				delay: index * 0.15,
				ease: "easeOut",
			}}
		>
			{service.border && (
				<>
					<div className="hidden lg:block absolute -left-5 top-0 bottom-0 w-px bg-linear-to-t from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
					<div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-linear-to-t from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
				</>
			)}
			<motion.div
				className="rounded-full h-7 w-7 flex items-center justify-center"
				style={{ backgroundColor: `${service.color}33` }}
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					delay: index * 0.15 + 0.2,
					ease: "backOut",
				}}
			>
				<div
					className="rounded-full h-2.5 w-2.5 animate-pulse"
					style={{ backgroundColor: service.color }}
				/>
			</motion.div>
			<motion.div
				className="mt-4 md:mt-6 space-y-2"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					delay: index * 0.15 + 0.4,
				}}
			>
				<h4 className="font-bold text-lg md:text-xl leading-[120%] text-theme-dark">
					{service.title}
				</h4>
				<p className="text-theme-gray text-sm md:text-base leading-[150%]">
					{service.description}
				</p>
			</motion.div>
		</motion.div>
	);
}
