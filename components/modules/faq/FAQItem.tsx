import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { IFAQ } from "@/types";

interface IProps {
	faq: IFAQ;
}

export default function FAQItem({ faq }: IProps) {
	return (
		<AccordionItem
			key={faq.id}
			value={`item-${faq.id}`}
			className="border border-[#E7E7E8] rounded-2xl px-6 bg-white last:border-b data-[state=open]:border-theme-primary data-[state=open]:bg-[#F6F9FF] transition-all duration-200 hover:bg-[#f6f9ff]"
		>
			<AccordionTrigger className="text-left font-bold xl:text-xl leading-[120%] text-theme-dark hover:no-underline py-6 data-[state=open]:text-theme-primary hover:text-theme-primary transition-all duration-200">
				{faq.question}
			</AccordionTrigger>
			<AccordionContent className="text-xs xl:text-base leading-[150%] text-theme-gray pb-6">
				{faq.answer}
			</AccordionContent>
		</AccordionItem>
	);
}
