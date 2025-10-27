import SectionHeader from "@/components/common/SectionHeader";
import FAQList from "./FAQList";

export default function FAQ() {
	return (
		<section className="max-w-[1170px] mx-auto py-[120px] px-4">
			<SectionHeader
				subTitle="FAQ"
				title="Frequently asked questions"
				className="w-full text-center mx-auto mb-12"
			/>
			<FAQList />
		</section>
	);
}
