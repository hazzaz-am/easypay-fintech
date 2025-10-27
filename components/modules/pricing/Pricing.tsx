"use client";

import SectionHeader from "@/components/common/SectionHeader";
import PricingList from "./PricingList";
import { motion } from "motion/react";

export default function Pricing() {
	return (
		<motion.section
			id="pricing"
			className="max-w-[1170px] mx-auto py-[120px] px-4 overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.6 }}
		>
			<SectionHeader
				subTitle="PRICING"
				title="Simple transparent pricing no hidden fees "
				className="max-w-[490px] mx-auto text-center mb-12"
			/>
			<PricingList />
		</motion.section>
	);
}
