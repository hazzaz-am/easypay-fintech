"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function SectionHeader({
	subTitle,
	title,
	className,
}: {
	subTitle: string;
	title: string;
	className?: string;
}) {
	return (
		<motion.div
			className={cn("space-y-1", className)}
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<motion.span
				className="text-sm lg:text-base font-semibold leading-[150%] text-theme-secondary uppercase"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				{subTitle}
			</motion.span>
			<motion.h2
				className="font-bold text-xl lg:text-[40px] leading-[120%] text-theme-dark"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				{title}
			</motion.h2>
		</motion.div>
	);
}
