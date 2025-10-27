import SectionHeader from "@/components/common/SectionHeader";
import ClientLogos from "./ClientLogos";
import FeaturesList from "./FeaturesList";

export default function Features() {
	return (
		<>
			<section id="features" className="max-w-[1170px] pt-[120px] mx-auto px-4">
				<SectionHeader
					subTitle="features"
					title="Why choose Easy Pay for effortless payments?"
					className="text-center max-w-[500px] mx-auto"
				/>
				<FeaturesList />
			</section>
			<ClientLogos />
		</>
	);
}
