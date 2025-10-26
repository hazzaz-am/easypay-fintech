import Banner from "@/components/modules/banner/Banner";
import CallToAction from "@/components/modules/call-to-action/CallToAction";
import Features from "@/components/modules/features/Features";
import Pricing from "@/components/modules/pricing/Pricing";
import Security from "@/components/modules/security/Security";
import Testimonial from "@/components/modules/testimonial/Testimonial";
import WorkingSteps from "@/components/modules/working-steps/WorkingSteps";

export default function HomePage() {
	return (
		<>
			<Banner />
			<Features />
			<WorkingSteps />
			<Security />
			<Pricing />
			<Testimonial />
			<CallToAction />
		</>
	);
}
