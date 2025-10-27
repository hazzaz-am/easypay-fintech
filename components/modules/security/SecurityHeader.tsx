"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { motion } from "motion/react";

export default function SecurityHeader() {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0 mb-8 md:mb-10 lg:mb-12">
			<SectionHeader
				subTitle="SECURITY"
				title="We protect your money at every step with Easy Pay"
				className="w-full lg:w-1/2 text-center lg:text-left"
			/>
			<motion.div
				className="w-full lg:w-[377px] lg:ml-auto"
				initial={{ opacity: 0, x: 30 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
			>
				<p className="text-sm md:text-base leading-[150%] text-theme-gray text-center lg:text-left">
					Easy Pay ensures your money is protected at every step with advanced
					encryption, real-time monitoring, and multi-factor authentication.
				</p>
			</motion.div>
		</div>
	);
}
