"use client";

import { IFeature } from "@/types";
import Image from "next/image";
import { motion } from "motion/react";

interface IProps {
	feature: IFeature;
	index: number;
}

export default function FeatureCard({ feature, index }: IProps) {
	return (
		<motion.div
			className="py-8 px-4 rounded-lg text-center"
			style={{ backgroundColor: feature.bgColor }}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{
				duration: 0.6,
				delay: index * 0.1,
				ease: "easeOut",
			}}
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.3 },
			}}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					delay: index * 0.1 + 0.2,
					ease: "easeOut",
				}}
			>
				<Image
					src={feature.icon}
					alt={feature.title}
					className="mx-auto"
					width={60}
					height={60}
				/>
			</motion.div>
			<motion.div
				className="mt-10 space-y-2"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					delay: index * 0.1 + 0.4,
				}}
			>
				<h3 className="text-theme-dark font-bold text-xl leading-[120%]">
					{feature.title}
				</h3>
				<p className="text-base leading-[150%] text-theme-gray">
					{feature.description}
				</p>
			</motion.div>
		</motion.div>
	);
}
