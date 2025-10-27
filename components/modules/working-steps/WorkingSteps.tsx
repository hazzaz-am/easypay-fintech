"use client";

import Image from "next/image";
import workingStepsImage from "/public/images/man-using-laptop-coffee-shop 1.png";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import StepList from "./StepList";
import { motion, Variants } from "motion/react";

const buttonVariants: Variants = {
	hidden: { scale: 0, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "backOut",
			delay: 0.6,
		},
	},
};

export default function WorkingSteps() {
	return (
		<motion.section
			id="benefits"
			className="bg-[#F6F6F6] py-[120px] px-4"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.6 }}
		>
			<div className="max-w-[1170px] mx-auto">
				<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
					<SectionHeader
						subTitle="HOW IT WORKS"
						title="Make payments, transfers, and more in 3 simple steps"
						className="text-center md:text-left md:w-1/2"
					/>
					<motion.div
						variants={buttonVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="mx-auto md:mx-0"
					>
						<Button>Get Started Now</Button>
					</motion.div>
				</div>
				<StepList />
				<motion.div
					className="mt-6"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<Image src={workingStepsImage} alt="Working Steps" />
				</motion.div>
			</div>
		</motion.section>
	);
}
