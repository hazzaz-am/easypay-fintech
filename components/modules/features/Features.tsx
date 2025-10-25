import SectionHeader from "@/components/common/SectionHeader";
import instantPaymentIcon from "/public/images/features/instant-payment-icon.png";
import hiddenFeesIcon from "/public/images/features/no-hidden-fees-icon.png";
import digitalWalletIcon from "/public/images/features/wallet-icon.png";
import transactionsIcon from "/public/images/features/transactions-icon.png";
import Image, { type StaticImageData } from "next/image";
import ClientLogos from "./ClientLogos";

interface Feature {
	id: string;
	title: string;
	description: string;
	bgColor: string;
	icon: StaticImageData;
}

const featureList: Feature[] = [
	{
		id: crypto.randomUUID(),
		title: "Instant payments",
		description: "Send money to friends or family in real-time, for free.",
		bgColor: "#F3F7FF",
		icon: instantPaymentIcon,
	},
	{
		id: crypto.randomUUID(),
		title: "No hidden fees",
		description: "Clear and simple pricing. Always be aware of your costs.",
		bgColor: "#FBF6EF",
		icon: hiddenFeesIcon,
	},
	{
		id: crypto.randomUUID(),
		title: "Digital wallet",
		description: "Store money securely and make fast transfers or purchases.",
		bgColor: "#EEF9FE",
		icon: digitalWalletIcon,
	},
	{
		id: crypto.randomUUID(),
		title: "Secure transactions",
		description: "End-to-end encryption for all transactions.",
		bgColor: "#F4EDFC",
		icon: transactionsIcon,
	},
];

export default function Features() {
	return (
		<>
			<section className="max-w-[1170px] mx-auto">
				<SectionHeader
					subTitle="features"
					title="Why choose Easy Pay for effortless payments?"
					className="text-center w-[500px] mx-auto"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[72px]">
					{featureList.map((feature) => (
						<div
							key={feature.id}
							className="py-8 px-4 rounded-lg text-center"
							style={{ backgroundColor: feature.bgColor }}
						>
							<Image
								src={feature.icon}
								alt={feature.title}
								className="mx-auto"
								width={60}
								height={60}
							/>
							<div className="mt-10 space-y-2">
								<h3 className="text-theme-dark font-bold text-xl leading-[120%]">
									{feature.title}
								</h3>
								<p className="text-base leading-[150%] text-theme-gray">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
			<ClientLogos />
		</>
	);
}
