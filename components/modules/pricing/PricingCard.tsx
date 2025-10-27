"use client";

import { IPricingPlan } from "@/types";
import { Button } from "@/components/ui/button";
import darkCheckMarkIcon from "/public/images/pricing/darkCheckMark.png";
import lightCheckMarkIcon from "/public/images/pricing/lightCheckMark.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface IProps {
	plan: IPricingPlan;
	index: number;
}

export default function PricingCard({ plan, index }: IProps) {
	return (
		<motion.div
			key={plan.id}
			className={cn(
				"py-10 px-6 rounded-2xl border flex flex-col justify-between h-[504px] overflow-hidden",
				plan.name === "Advanced"
					? "border-theme-dark bg-theme-dark text-white"
					: "border-[#E7E7E8] bg-white"
			)}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{
				duration: 0.6,
				delay: index * 0.15,
				ease: "easeOut",
			}}
		>
			<div className="space-y-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						delay: index * 0.15 + 0.2,
					}}
				>
					<h4
						className={cn(
							"font-bold text-2xl leading-[120%]",
							plan.name === "Advanced" ? "text-white" : "text-theme-dark"
						)}
					>
						{plan.name}
					</h4>
					<p
						className={cn(
							"text-base leading-[150%]",
							plan.name === "Advanced" ? "text-[#B1B2B2]" : "text-theme-gray"
						)}
					>
						{plan.subTitle}
					</p>
				</motion.div>
				<motion.div
					className="flex items-center"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						delay: index * 0.15 + 0.3,
						ease: "backOut",
					}}
				>
					<h2
						className={cn(
							"text-[56px] font-bold leading-[120%]",
							plan.name === "Advanced" ? "text-white" : "text-theme-dark"
						)}
					>
						${plan.price}
						<span
							className={cn(
								"text-base leading-[150%] font-medium",
								plan.name === "Advanced" ? "text-[#B1B2B2]" : "text-theme-gray"
							)}
						>
							/ {plan.billingCycle}
						</span>
					</h2>
				</motion.div>
				<motion.div
					className="h-px bg-linear-to-r from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.6,
						delay: index * 0.15 + 0.4,
					}}
				/>
				<motion.div
					className="space-y-2"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						delay: index * 0.15 + 0.5,
					}}
				>
					{plan.features.map((feature, featureIndex) => (
						<motion.div
							key={feature}
							className="flex items-center gap-2"
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.4,
								delay: index * 0.15 + 0.6 + featureIndex * 0.1,
							}}
						>
							{plan.name === "Advanced" ? (
								<Image src={darkCheckMarkIcon} alt={feature} />
							) : (
								<Image src={lightCheckMarkIcon} alt={feature} />
							)}
							<p
								className={cn(
									"text-xs lg:text-sm xl:text-base leading-[150%]",
									plan.name === "Advanced"
										? "text-[#B1B2B2]"
										: "text-theme-gray"
								)}
							>
								{feature}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					delay: index * 0.15 + 0.8,
				}}
			>
				<Button
					variant={plan.name === "Advanced" ? "default" : "outline"}
					className="w-full"
				>
					{plan.purchaseText}
				</Button>
			</motion.div>
		</motion.div>
	);
}
