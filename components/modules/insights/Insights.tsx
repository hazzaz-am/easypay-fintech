"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import InsightsList from "./InsightsList";
import { motion } from "motion/react";

export default function Insights() {
	return (
		<motion.section
			className="py-[120px] bg-[#F6F6F6] px-4"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.6 }}
		>
			<div className="max-w-[1170px] mx-auto">
				<SectionHeader
					subTitle="INSIGHTS & RESOURCES"
					title="Stay informed with the latest fintech trends"
					className="max-w-[590px] mx-auto text-center mb-12"
				/>

				<InsightsList />

				<motion.div
					className="flex justify-center"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
				>
					<Button>Load More Articles</Button>
				</motion.div>
			</div>
		</motion.section>
	);
}
