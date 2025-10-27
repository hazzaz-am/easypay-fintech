"use client";

import { workingSteps } from "@/data";
import Step from "./Step";
import { motion } from "motion/react";

export default function StepList() {
	return (
		<motion.div
			className="bg-white rounded-2xl p-6"
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{workingSteps.map((step, index) => (
					<Step key={step.id} step={step} index={index} />
				))}
			</div>
		</motion.div>
	);
}
