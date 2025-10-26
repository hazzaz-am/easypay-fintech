import { cn } from "@/lib/utils";
import { ISecurity } from "@/types";

interface IProps {
	service: ISecurity;
}

export default function SecurityCard({ service }: IProps) {
	return (
		<div className={cn(service.border && "lg:relative lg:px-6")}>
			{service.border && (
				<>
					<div className="hidden lg:block absolute -left-5 top-0 bottom-0 w-px bg-linear-to-t from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
					<div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-linear-to-t from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
				</>
			)}
			<div
				className="rounded-full h-7 w-7 flex items-center justify-center"
				style={{ backgroundColor: `${service.color}33` }}
			>
				<div
					className="rounded-full h-2.5 w-2.5 animate-pulse"
					style={{ backgroundColor: service.color }}
				/>
			</div>
			<div className="mt-4 md:mt-6 space-y-2">
				<h4 className="font-bold text-lg md:text-xl leading-[120%] text-theme-dark">
					{service.title}
				</h4>
				<p className="text-theme-gray text-sm md:text-base leading-[150%]">
					{service.description}
				</p>
			</div>
		</div>
	);
}
