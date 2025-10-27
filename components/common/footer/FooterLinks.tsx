"use client";

import { motion } from "motion/react";

interface IProps {
	title: string;
	links: string[];
	index: number;
}

export default function FooterLinks({ title, links, index }: IProps) {
	return (
		<motion.div
			className="w-full sm:w-auto"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{
				duration: 0.6,
				delay: index * 0.15 + 0.3,
				ease: "easeOut",
			}}
		>
			<motion.h4
				className="text-lg md:text-xl leading-[120%] font-bold text-theme-dark mb-3 md:mb-4"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					delay: index * 0.15 + 0.4,
				}}
			>
				{title}
			</motion.h4>
			<menu className="space-y-2 md:space-y-3">
				{links.map((link, linkIndex) => (
					<motion.li
						key={link}
						className="text-sm md:text-base leading-[150%] text-theme-gray cursor-pointer hover:text-theme-text transition-colors font-normal"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.4,
							delay: index * 0.15 + 0.5 + linkIndex * 0.1,
						}}
					>
						{link}
					</motion.li>
				))}
			</menu>
		</motion.div>
	);
}
