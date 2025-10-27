import { pricingPlans } from "@/data";
import PricingCard from "./PricingCard";

export default function PricingList() {
	return (
		<div
			style={{
				backgroundImage: "url('/images/pricing/bg-shades-round.png')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "bottom",
			}}
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
		>
			{pricingPlans.map((plan) => (
				<PricingCard key={plan.id} plan={plan} />
			))}
		</div>
	);
}
