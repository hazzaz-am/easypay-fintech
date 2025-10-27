"use client";

import { featureList } from "@/data";
import FeatureCard from "./FeatureCard";
import { motion } from "motion/react";

export default function FeaturesList() {
	return (
		<motion.div
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[72px] mt-12"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5 }}
		>
			{featureList.map((feature, index) => (
				<FeatureCard key={feature.id} feature={feature} index={index} />
			))}
		</motion.div>
	);
}
