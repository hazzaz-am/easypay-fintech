"use client";

import { IInsight } from "@/types";
import Image from "next/image";
import { motion } from "motion/react";

interface IProps {
	insight: IInsight;
	index: number;
}

export default function InsightArticle({ insight, index }: IProps) {
	return (
		<motion.article
			className="bg-white rounded-2xl border border-[#E7E7E8] overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-theme-primary group cursor-pointer"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{
				duration: 0.6,
				delay: index * 0.15,
				ease: "easeOut",
			}}
		>
			<motion.div
				className="relative h-60 w-full bg-[#F3F3F3] overflow-hidden"
				initial={{ opacity: 0, scale: 1.1 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.6,
					delay: index * 0.15 + 0.2,
				}}
			>
				<Image
					src={insight.image}
					alt={insight.title}
					layout="fill"
					objectFit="cover"
				/>
				{/* Category Badge */}
				<motion.div
					className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold"
					style={{ backgroundColor: insight.categoryColor }}
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						delay: index * 0.15 + 0.4,
					}}
				>
					{insight.category}
				</motion.div>
			</motion.div>

			<motion.div
				className="p-6"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					delay: index * 0.15 + 0.3,
				}}
			>
				<motion.h3
					className="font-bold text-base md:text-[20px] leading-[120%] text-theme-dark mb-3 group-hover:text-theme-primary transition-colors duration-200"
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						delay: index * 0.15 + 0.4,
					}}
				>
					{insight.title}
				</motion.h3>

				<motion.p
					className="text-sm md:text-base leading-[150%] text-theme-gray mb-6"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						delay: index * 0.15 + 0.5,
					}}
				>
					{insight.excerpt}
				</motion.p>

				<motion.div
					className="flex items-center justify-between pt-4 border-t border-[#E7E7E8]"
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						delay: index * 0.15 + 0.6,
					}}
				>
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 rounded-full bg-linear-to-br from-theme-primary to-theme-secondary flex items-center justify-center text-white text-sm font-semibold">
							{insight.author
								.split(" ")
								.map((n) => n[0])
								.join("")}
						</div>
						<div>
							<p className="text-xs md:text-sm font-semibold text-theme-dark">
								{insight.author}
							</p>
							<p className="text-xs text-theme-text">{insight.date}</p>
						</div>
					</div>

					<span className="text-xs md:text-sm text-theme-text">
						{insight.readTime}
					</span>
				</motion.div>
			</motion.div>
		</motion.article>
	);
}
