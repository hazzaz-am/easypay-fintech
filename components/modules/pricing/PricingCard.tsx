import { IPricingPlan } from "@/types";
import { Button } from "@/components/ui/button";
import darkCheckMarkIcon from "/public/images/pricing/darkCheckMark.png";
import lightCheckMarkIcon from "/public/images/pricing/lightCheckMark.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface IProps {
	plan: IPricingPlan;
}

export default function PricingCard({ plan }: IProps) {
	return (
		<div
			key={plan.id}
			className={cn(
				"py-10 px-6 rounded-2xl border flex flex-col justify-between h-[504px]",
				plan.name === "Advanced"
					? "border-theme-dark bg-theme-dark text-white"
					: "border-[#E7E7E8] bg-white"
			)}
		>
			<div className="space-y-6">
				<div>
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
				</div>
				<div className="flex items-center">
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
				</div>
				<div className="h-px bg-linear-to-r from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
				<div className="space-y-2">
					{plan.features.map((feature) => (
						<div key={feature} className="flex items-center gap-2">
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
						</div>
					))}
				</div>
			</div>
			<div>
				<Button
					variant={plan.name === "Advanced" ? "default" : "outline"}
					className="w-full"
				>
					{plan.purchaseText}
				</Button>
			</div>
		</div>
	);
}
