import { cn } from "@/lib/utils";

export default function SectionHeader({
	subTitle,
	title,
	className,
}: {
	subTitle: string;
	title: string;
	className?: string;
}) {
	return (
		<div className={cn("space-y-1", className)}>
			<span className="text-sm lg:text-base font-semibold leading-[150%] text-theme-secondary uppercase">
				{subTitle}
			</span>
			<h2 className="font-bold text-2xl lg:text-[40px] leading-[120%] text-theme-dark">
				{title}
			</h2>
		</div>
	);
}
