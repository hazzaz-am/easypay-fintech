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
		<div className={cn("space-y-1 mb-12", className)}>
			<span className="text-base font-semibold leading-[150%] text-theme-secondary uppercase">
				{subTitle}
			</span>
			<h2 className="font-bold text-[40px] leading-[120%] text-theme-dark">
				{title}
			</h2>
		</div>
	);
}
