import SectionHeader from "@/components/common/SectionHeader";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_DATA = [
	{
		id: 1,
		question: "How do I create an Easy Pay account?",
		answer:
			"Creating an Easy Pay account is quick and simple. Download our app from the App Store or Google Play, tap 'Sign Up', and follow the prompts to enter your basic information. You'll need to verify your email address and phone number, then link a bank account or card to start making transactions securely.",
	},
	{
		id: 2,
		question: "What are the transaction fees?",
		answer:
			"Easy Pay offers competitive and transparent pricing. Personal transfers are free for up to 100 transactions per month on the Free Plan. Our Advanced Plan ($19/month) and Business Plan ($29/month) offer higher limits and reduced fees. There are no hidden charges, and you can always view our full fee schedule in the app settings.",
	},
	{
		id: 3,
		question: "Is my money safe with Easy Pay?",
		answer:
			"Absolutely. Easy Pay uses bank-level encryption and security measures to protect your financial data. We employ two-factor authentication, biometric access, end-to-end encryption, and 24/7 fraud monitoring. Your money is protected at every step, and we're compliant with all financial regulations to ensure your peace of mind.",
	},
	{
		id: 4,
		question: "How long do transfers take?",
		answer:
			"Transfer times vary by destination and method. Instant transfers to other Easy Pay users happen in seconds. Bank transfers typically complete within 1-3 business days, while international transfers can take 3-5 business days. You'll always receive real-time updates and notifications about your transaction status.",
	},
	{
		id: 5,
		question: "Can I use Easy Pay internationally?",
		answer:
			"Yes! Easy Pay supports international transfers to over 100 countries. You can send and receive money globally with competitive exchange rates and transparent fees. Simply select the recipient's country, enter the amount, and we'll show you the exact exchange rate and any applicable fees before you confirm the transfer.",
	},
	{
		id: 6,
		question: "What if I have an issue with a transaction?",
		answer:
			"Our customer support team is available 24/7 to help resolve any transaction issues. You can contact us through in-app chat, email, or phone. We also have comprehensive fraud protection, and if you notice any unauthorized transactions, report them immediately through the app and we'll investigate right away.",
	},
];

export default function FAQ() {
	return (
		<section className="max-w-[1170px] mx-auto py-[120px]">
			<SectionHeader
				subTitle="FAQ"
				title="Frequently asked questions"
				className="w-full text-center mx-auto mb-12"
			/>
			<div className="max-w-[870px] mx-auto">
				<Accordion
					type="single"
					collapsible
					className="w-full space-y-4"
					defaultValue="item-1"
				>
					{FAQ_DATA.map((faq) => (
						<AccordionItem
							key={faq.id}
							value={`item-${faq.id}`}
							className="border border-[#E7E7E8] rounded-2xl px-6 bg-white last:border-b data-[state=open]:border-theme-primary data-[state=open]:bg-[#F6F9FF] transition-all duration-200 hover:bg-[#f6f9ff]"
						>
							<AccordionTrigger className="text-left font-bold text-xl leading-[120%] text-theme-dark hover:no-underline py-6 data-[state=open]:text-theme-primary hover:text-theme-primary transition-all duration-200">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-base leading-[150%] text-theme-gray pb-6">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
