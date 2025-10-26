import Banner from "@/components/modules/banner/Banner";
import Features from "@/components/modules/features/Features";
import Security from "@/components/modules/security/Security";
import WorkingSteps from "@/components/modules/working-steps/WorkingSteps";

export default function HomePage() {
	return (
		<>
			<Banner />
			<Features />
			<WorkingSteps />
			<Security />
		</>
	);
}
