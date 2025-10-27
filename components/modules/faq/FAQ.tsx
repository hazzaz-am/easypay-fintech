"use client";

import SectionHeader from "@/components/common/SectionHeader";
import FAQList from "./FAQList";
import { motion } from "motion/react";

export default function FAQ() {
	return (
		<motion.section
			className="max-w-[1170px] mx-auto py-[120px] px-4"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.6 }}
		>
			<SectionHeader
				subTitle="FAQ"
				title="Frequently asked questions"
				className="w-full text-center mx-auto mb-12"
			/>
			<FAQList />
		</motion.section>
	);
}
