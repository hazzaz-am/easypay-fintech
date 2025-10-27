"use client";

import { securityServices } from "@/data";
import SecurityCard from "./SecurityCard";
import { motion } from "motion/react";

export default function SecurityServices() {
	return (
		<motion.div
			style={{
				backgroundImage: "url('/images/security/security-bg.png')",
				backgroundSize: "cover",
				backgroundPosition: "center bottom",
			}}
			className="rounded-xl md:rounded-2xl py-6 md:py-8 lg:py-10 px-4 md:px-6 bg-[#F6F6F6]"
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
				{securityServices.map((service, index) => (
					<SecurityCard key={service.id} service={service} index={index} />
				))}
			</div>
		</motion.div>
	);
}
