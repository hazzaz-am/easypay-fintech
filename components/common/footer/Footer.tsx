"use client";

import { footerLinks1, footerLinks2 } from "@/data";
import Logo from "../Logo";
import FooterLinks from "./FooterLinks";
import { motion } from "motion/react";

export default function Footer() {
	return (
		<motion.section
			style={{
				backgroundImage: "url('/images/bg-shades-bottom.png')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
			className="max-w-[1170px] mx-auto px-4 pb-8 pt-8 md:pt-12"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.6 }}
		>
			<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 mb-8 md:mb-12">
				<motion.div
					className="space-y-4 max-w-full md:max-w-[278px] mx-auto md:mx-0"
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
					>
						<Logo />
					</motion.div>
					<motion.p
						className="text-theme-gray text-sm md:text-base leading-[150%] font-normal"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						Easy Pay offers secure, seamless, and fee-free payments for
						effortless global transactions.
					</motion.p>
				</motion.div>
				<div className="flex flex-col sm:flex-row lg:flex-row items-start gap-8 sm:gap-12 lg:gap-[100px] justify-between w-full md:w-auto">
					<FooterLinks title="Short links" links={footerLinks1} index={0} />
					<FooterLinks title="Other pages" links={footerLinks2} index={1} />
				</div>
			</div>
			<motion.div
				className="border-t border-[#E7E7E8] text-center pt-6 md:pt-8 mt-6 md:mt-8"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
			>
				<p className="text-footer-text text-xs md:text-sm lg:text-base leading-[150%] font-light px-4">
					2025 ©Easy Pay. All rights reserved. Fintech Landing Page by Hazzaz
				</p>
			</motion.div>
		</motion.section>
	);
}
