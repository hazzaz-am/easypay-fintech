import { featureList } from "@/data";
import FeatureCard from "./FeatureCard";

export default function FeaturesList() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[72px] mt-12">
			{featureList.map((feature) => (
				<FeatureCard key={feature.id} feature={feature} />
			))}
		</div>
	);
}
