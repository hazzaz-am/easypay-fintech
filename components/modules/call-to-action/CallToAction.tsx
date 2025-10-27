"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function CallToAction() {
	return (
		<motion.section
			style={{
				backgroundImage: "url('/images/contact-section-bg.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="my-[120px] max-w-[1170px] xl:mx-auto rounded-2xl mx-4"
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<div className="py-[100px] px-4 bg-black/70 w-full h-full overflow-hidden rounded-2xl">
				<div className="max-w-[580px] mx-auto text-center text-white space-y-3">
					<motion.h2
						className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[40px] leading-[120%]"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					>
						Ready to experience seamless secure payments globally
					</motion.h2>
					<motion.p
						className="text-sm xl:text-base leading-[150%] font-normal "
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
					>
						Ready for hassle-free, secure payments anywhere in the world? Start
						using Monks Pay today it&apos;s fast, free, and focused on keeping
						your transactions secure!
					</motion.p>
				</div>
				<motion.div
					className="flex flex-col md:flex-row items-center justify-center gap-3 mt-10"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
					>
						<Button>Download the App</Button>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.9, ease: "backOut" }}
					>
						<Button variant="outline" className="text-white border-white">
							Get Started Now
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</motion.section>
	);
}
