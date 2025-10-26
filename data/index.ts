import { ISecurity } from "@/types";

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
