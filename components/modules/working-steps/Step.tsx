"use client";

import { cn } from "@/lib/utils";
import { IWorkingStep } from "@/types";
import Image from "next/image";
import { motion } from "motion/react";

interface IProps {
	step: IWorkingStep;
	index: number;
}

export default function Step({ step, index }: IProps) {
	return (
		<motion.div
			className={cn(
				"relative p-6",
				step.border ? "border-y md:border-y-0" : ""
			)}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{
				duration: 0.6,
				delay: index * 0.15,
				ease: "easeOut",
			}}
		>
			{step.border && (
				<>
					<div className="hidden lg:block absolute -left-5 top-0 bottom-0 w-px bg-linear-to-t from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
					<div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-linear-to-t from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
				</>
			)}
			<motion.h2
				className="font-bold text-[80px] leading-[100%] text-[#F3F3F3]"
				initial={{ opacity: 0, scale: 0.5 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					delay: index * 0.15 + 0.2,
					ease: "backOut",
				}}
			>
				{step.id}
			</motion.h2>
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					delay: index * 0.15 + 0.3,
					ease: "easeOut",
				}}
			>
				<Image src={step.icon} alt={step.title} className="-mt-8" />
			</motion.div>
			<motion.div
				className="mt-12 space-y-2"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					delay: index * 0.15 + 0.4,
				}}
			>
				<h3 className="font-bold text-lg xl:text-xl leading-[120%] text-theme-dark">
					{step.title}
				</h3>
				<p className="text-sm xl:text-base leading-[150%] text-theme-gray">
					{step.description}
				</p>
			</motion.div>
		</motion.div>
	);
}
