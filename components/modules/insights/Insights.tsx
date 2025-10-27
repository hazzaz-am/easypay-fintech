import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import InsightsList from "./InsightsList";

export default function Insights() {
	return (
		<section className="py-[120px] bg-[#F6F6F6] px-4">
			<div className="max-w-[1170px] mx-auto">
				<SectionHeader
					subTitle="INSIGHTS & RESOURCES"
					title="Stay informed with the latest fintech trends"
					className="max-w-[590px] mx-auto text-center mb-12"
				/>

				<InsightsList />

				<div className="flex justify-center">
					<Button>Load More Articles</Button>
				</div>
			</div>
		</section>
	);
}
