"use client";

import SecurityServices from "./SecurityServices";
import SecurityHeader from "./SecurityHeader";
import { motion } from "motion/react";

export default function Security() {
	return (
		<motion.section
			id="security"
			className="max-w-[1170px] mx-auto pt-12 md:pt-20 lg:pt-[120px] px-4 md:px-6 lg:px-8 overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.6 }}
		>
			<SecurityHeader />
			<SecurityServices />
		</motion.section>
	);
}
