"use client";

import SectionHeader from "@/components/common/SectionHeader";
import ClientLogos from "./ClientLogos";
import FeaturesList from "./FeaturesList";
import { motion } from "motion/react";

export default function Features() {
	return (
		<>
			<motion.section
				id="features"
				className="max-w-[1170px] pt-[120px] mx-auto px-4"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.1 }}
				transition={{ duration: 0.6 }}
			>
				<SectionHeader
					subTitle="features"
					title="Why choose Easy Pay for effortless payments?"
					className="text-center max-w-[500px] mx-auto"
				/>
				<FeaturesList />
			</motion.section>
			<ClientLogos />
		</>
	);
}
