"use client";

import { pricingPlans } from "@/data";
import PricingCard from "./PricingCard";
import { motion } from "motion/react";

export default function PricingList() {
	return (
		<motion.div
			style={{
				backgroundImage: "url('/images/pricing/bg-shades-round.png')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "bottom",
			}}
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.5 }}
		>
			{pricingPlans.map((plan, index) => (
				<PricingCard key={plan.id} plan={plan} index={index} />
			))}
		</motion.div>
	);
}
