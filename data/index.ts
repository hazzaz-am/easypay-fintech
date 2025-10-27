import instantPaymentIcon from "/public/images/features/instant-payment-icon.png";
import hiddenFeesIcon from "/public/images/features/no-hidden-fees-icon.png";
import digitalWalletIcon from "/public/images/features/wallet-icon.png";
import transactionsIcon from "/public/images/features/transactions-icon.png";

import downloadIcon from "/public/images/how-works/download-pay-icon.png";
import bankCardIcon from "/public/images/how-works/bank-card-icon.png";
import payIcon from "/public/images/how-works/paying-icon.png";

import client1 from "/public/images/clients/testimonial-men-1.png";
import client2 from "/public/images/clients/testimonial-men-2.png";

import digitalWallet from "/public/images/insights/digitalWallet.jpg";
import payments from "/public/images/insights/payments.jpg";
import cryptoCurrency from "/public/images/insights/cryptocurrency.jpg";
import paymentApps from "/public/images/insights/paymentApps.jpg";
import smallBusiness from "/public/images/insights/smallBusiness.jpg";
import aiPowerd from "/public/images/insights/aiPowerd.jpg";

import {
	IFAQ,
	IFeature,
	IInsight,
	IPricingPlan,
	ISecurity,
	ITestimonial,
	IWorkingStep,
} from "@/types";

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

// Steps to get started with Easy Pay
export const workingSteps: IWorkingStep[] = [
	{
		id: "01",
		title: "Download Easy Pay",
		description:
			"Get the Easy Pay app today from the App Store or Google Play hassle free.",
		icon: downloadIcon,
		border: false,
	},
	{
		id: "02",
		title: "Link your bank or card",
		description:
			"Easily connect your account in seconds with advanced security for peace of mind.",
		icon: bankCardIcon,
		border: true,
	},
	{
		id: "03",
		title: "Start paying",
		description:
			"Easily split bills, send money to friends, and make smooth online payments instantly.",
		icon: payIcon,
		border: false,
	},
];

// Pricing plans
export const pricingPlans: IPricingPlan[] = [
	{
		id: 1,
		name: "Free Plan",
		subTitle: "Free for personal payments.",
		price: "0",
		billingCycle: "month",
		features: [
			"Up to 100 transactions per month",
			"Basic fraud protection",
			"Email support",
		],
		purchaseText: "Get Free Plan",
	},
	{
		id: 2,
		name: "Advanced",
		subTitle: "Minimal fees for advanced transactions",
		price: "19",
		billingCycle: "month",
		features: [
			"Up to 1000 transactions per month",
			"Advanced fraud protection",
			"Detailed transaction reports",
			"Priority email & chat support",
		],
		purchaseText: "Get Advanced Plan",
	},
	{
		id: 3,
		name: "Business",
		subTitle: "Premium business transactions",
		price: "29",
		billingCycle: "month",
		features: [
			"Unlimited transactions per month",
			"Premium fraud protection",
			"Detailed transaction reports",
			"Priority email & chat support",
		],
		purchaseText: "Get Business Plan",
	},
];

// testimonials data
export const testimonials: ITestimonial[] = [
	{
		id: 1,
		content:
			"Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
		client: {
			name: "Ethan Williams",
			position: "Digital Marketing Specialist",
			image: client1,
		},
	},
	{
		id: 2,
		content:
			"Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
		client: {
			name: "Daniel Thompson",
			position: "Product Designer",
			image: client2,
		},
	},
	{
		id: 3,
		content:
			"Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
		client: {
			name: "Ethan Williams",
			position: "Digital Marketing Specialist",
			image: client1,
		},
	},
	{
		id: 4,
		content:
			"Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
		client: {
			name: "Daniel Thompson",
			position: "Product Designer",
			image: client2,
		},
	},
];

// faq data
export const faqData: IFAQ[] = [
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

// Insights data
export const insights: IInsight[] = [
	{
		id: 1,
		image: digitalWallet,
		category: "Security",
		categoryColor: "#37c390",
		title: "5 Essential Tips to Protect Your Digital Wallet",
		excerpt:
			"Learn the best practices for keeping your digital assets safe and secure in today's connected world.",
		author: "Sarah Johnson",
		date: "Mar 15, 2024",
		readTime: "5 min read",
	},
	{
		id: 2,
		image: payments,
		category: "Innovation",
		categoryColor: "#2e68fd",
		title: "The Future of Contactless Payments in 2024",
		excerpt:
			"Discover how contactless payment technology is revolutionizing the way we handle transactions.",
		author: "Michael Chen",
		date: "Mar 12, 2024",
		readTime: "7 min read",
	},
	{
		id: 3,
		image: cryptoCurrency,
		category: "Finance",
		categoryColor: "#932efa",
		title: "Understanding Cryptocurrency Integration in Modern Banking",
		excerpt:
			"A comprehensive guide to how traditional banks are adopting cryptocurrency technologies.",
		author: "Emily Rodriguez",
		date: "Mar 10, 2024",
		readTime: "10 min read",
	},
	{
		id: 4,
		image: paymentApps,
		category: "Tips & Tricks",
		categoryColor: "#ff6b6b",
		title: "Maximizing Rewards with Digital Payment Apps",
		excerpt:
			"Smart strategies to get the most out of your digital wallet rewards and cashback programs.",
		author: "David Park",
		date: "Mar 8, 2024",
		readTime: "6 min read",
	},
	{
		id: 5,
		image: smallBusiness,
		category: "Business",
		categoryColor: "#ffa500",
		title: "How Small Businesses Can Benefit from Digital Payments",
		excerpt:
			"Transform your small business with modern payment solutions that customers love.",
		author: "Lisa Thompson",
		date: "Mar 5, 2024",
		readTime: "8 min read",
	},
	{
		id: 6,
		image: aiPowerd,
		category: "Technology",
		categoryColor: "#4ecdc4",
		title: "AI-Powered Fraud Detection: The Next Frontier",
		excerpt:
			"Exploring how artificial intelligence is making digital payments safer than ever before.",
		author: "James Wilson",
		date: "Mar 1, 2024",
		readTime: "9 min read",
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
