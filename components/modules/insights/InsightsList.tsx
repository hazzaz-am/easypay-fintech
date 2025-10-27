"use client";

import { insights } from "@/data";
import InsightArticle from "./InsightArticle";
import { motion } from "motion/react";

export default function InsightsList() {
	return (
		<motion.div
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.5 }}
		>
			{insights.map((insight, index) => (
				<InsightArticle key={insight.id} insight={insight} index={index} />
			))}
		</motion.div>
	);
}
