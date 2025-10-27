import SectionHeader from "@/components/common/SectionHeader";
import PricingList from "./PricingList";

export default function Pricing() {
	return (
		<section className="max-w-[1170px] mx-auto mb-[120px] px-4">
			<SectionHeader
				subTitle="PRICING"
				title="Simple transparent pricing no hidden fees "
				className="max-w-[490px] mx-auto text-center mb-12"
			/>
			<PricingList />
		</section>
	);
}
