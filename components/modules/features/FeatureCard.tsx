import { IFeature } from "@/types";
import Image from "next/image";

interface IProps {
	feature: IFeature;
}

export default function FeatureCard({ feature }: IProps) {
	return (
		<div
			className="py-8 px-4 rounded-lg text-center"
			style={{ backgroundColor: feature.bgColor }}
		>
			<Image
				src={feature.icon}
				alt={feature.title}
				className="mx-auto"
				width={60}
				height={60}
			/>
			<div className="mt-10 space-y-2">
				<h3 className="text-theme-dark font-bold text-xl leading-[120%]">
					{feature.title}
				</h3>
				<p className="text-base leading-[150%] text-theme-gray">
					{feature.description}
				</p>
			</div>
		</div>
	);
}
