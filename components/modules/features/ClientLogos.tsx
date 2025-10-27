"use client";

import { MovingClientLogos } from "@/components/modules/features/MovingClientLogos";
import { motion } from "motion/react";

export default function ClientLogos() {
	return (
		<motion.div
			className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mb-[120px]"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<MovingClientLogos direction="right" speed="normal" />
		</motion.div>
	);
}
