import instantPaymentIcon from "/public/images/features/instant-payment-icon.png";
import hiddenFeesIcon from "/public/images/features/no-hidden-fees-icon.png";
import digitalWalletIcon from "/public/images/features/wallet-icon.png";
import transactionsIcon from "/public/images/features/transactions-icon.png";

import { IFeature, ISecurity } from "@/types";

// All Security Services Easy Pay provide
export const securityServices: ISecurity[] = [
	{
		id: 1,
		title: "Two-factor authentication",
		description:
			"Two-factor authentication ensures added protection by using verification steps.",
		color: "#2E68FD",
		border: false,
	},
	{
		id: 2,
		title: "Fraud detection and alerts",
		description:
			"Fraud detection safeguards your money, sending instant alerts for any activity.",
		color: "#FC4343",
		border: true,
	},
	{
		id: 3,
		title: "Transaction notifications",
		description:
			"Instant notifications for transaction keep you informed to manage your finances.",
		color: "#08A965",
		border: false,
	},
	{
		id: 4,
		title: "Biometric access",
		description:
			"Easily and securely log in with biometric features, and facial recognition.",
		color: "#3B7793",
		border: false,
	},
	{
		id: 5,
		title: "End-to-end encryption",
		description:
			"By encryption, protecting your data from unauthorized access.",
		color: "#D77E1B",
		border: true,
	},
	{
		id: 6,
		title: "24/7 Protection support",
		description:
			"Our dedicated team is available around the clock to help you.",
		color: "#932EFA",
		border: false,
	},
];

// All Features of Easy Pay
export const featureList: IFeature[] = [
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

// Footer links
export const footerLinks1: string[] = [
	"Features",
	"How it works",
	"Security",
	"Testimonial",
];

export const footerLinks2: string[] = [
	"Privacy policy",
	"Terms & conditions",
	"404",
];
