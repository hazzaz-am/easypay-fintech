import { Accordion } from "@/components/ui/accordion";
import { faqData } from "@/data";
import FAQItem from "./FAQItem";

export default function FAQList() {
	return (
		<div className="max-w-[870px] mx-auto">
			<Accordion
				type="single"
				collapsible
				className="w-full space-y-4"
				defaultValue="item-1"
			>
				{faqData.map((faq) => (
					<FAQItem key={faq.id} faq={faq} />
				))}
			</Accordion>
		</div>
	);
}
