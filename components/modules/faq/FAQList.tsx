"use client";

import { Accordion } from "@/components/ui/accordion";
import { faqData } from "@/data";
import FAQItem from "./FAQItem";
import { motion } from "motion/react";

export default function FAQList() {
	return (
		<motion.div
			className="max-w-[870px] mx-auto"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5 }}
		>
			<Accordion
				type="single"
				collapsible
				className="w-full space-y-4"
				defaultValue="item-1"
			>
				{faqData.map((faq, index) => (
					<FAQItem key={faq.id} faq={faq} index={index} />
				))}
			</Accordion>
		</motion.div>
	);
}
