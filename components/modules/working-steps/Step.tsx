import { cn } from "@/lib/utils";
import { IWorkingStep } from "@/types";
import Image from "next/image";

interface IProps {
	step: IWorkingStep;
}

export default function Step({ step }: IProps) {
	return (
		<div
			className={cn(
				"relative p-6",
				step.border ? "border-y md:border-y-0" : ""
			)}
		>
			{step.border && (
				<>
					<div className="hidden lg:block absolute -left-5 top-0 bottom-0 w-px bg-linear-to-t from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
					<div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-linear-to-t from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
				</>
			)}
			<h2 className="font-bold text-[80px] leading-[100%] text-[#F3F3F3]">
				{step.id}
			</h2>
			<Image src={step.icon} alt={step.title} className="-mt-8" />
			<div className="mt-12 space-y-2">
				<h3 className="font-bold text-lg xl:text-xl leading-[120%] text-theme-dark">
					{step.title}
				</h3>
				<p className="text-sm xl:text-base leading-[150%] text-theme-gray">
					{step.description}
				</p>
			</div>
		</div>
	);
}
