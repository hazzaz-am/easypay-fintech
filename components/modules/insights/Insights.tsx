import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";

import digitalWallet from "/public/images/insights/digitalWallet.jpg";
import payments from "/public/images/insights/payments.jpg";
import cryptoCurrency from "/public/images/insights/cryptocurrency.jpg";
import paymentApps from "/public/images/insights/paymentApps.jpg";
import smallBusiness from "/public/images/insights/smallBusiness.jpg";
import aiPowerd from "/public/images/insights/aiPowerd.jpg";

// Sample insight data - replace with your actual data source
const insights = [
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

export default function Insights() {
	return (
		<section className="py-[120px] bg-[#F6F6F6]">
			<div className="max-w-[1170px] mx-auto ">
				<SectionHeader
					subTitle="INSIGHTS & RESOURCES"
					title="Stay informed with the latest fintech trends"
					className="max-w-[590px] mx-auto text-center mb-12"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{insights.map((insight) => (
						<article
							key={insight.id}
							className="bg-white rounded-2xl border border-[#E7E7E8] overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-theme-primary group cursor-pointer"
						>
							<div className="relative h-60 w-full bg-[#F3F3F3] overflow-hidden">
								<Image
									src={insight.image}
									alt={insight.title}
									layout="fill"
									objectFit="cover"
								/>
								{/* Category Badge */}
								<div
									className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold"
									style={{ backgroundColor: insight.categoryColor }}
								>
									{insight.category}
								</div>
							</div>

							<div className="p-6">
								<h3 className="font-bold text-[20px] leading-[120%] text-theme-dark mb-3 group-hover:text-theme-primary transition-colors duration-200">
									{insight.title}
								</h3>

								<p className="text-base leading-[150%] text-theme-gray mb-6">
									{insight.excerpt}
								</p>

								<div className="flex items-center justify-between pt-4 border-t border-[#E7E7E8]">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-linear-to-br from-theme-primary to-theme-secondary flex items-center justify-center text-white text-sm font-semibold">
											{insight.author
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</div>
										<div>
											<p className="text-sm font-semibold text-theme-dark">
												{insight.author}
											</p>
											<p className="text-xs text-theme-text">{insight.date}</p>
										</div>
									</div>

									<span className="text-sm text-theme-text">
										{insight.readTime}
									</span>
								</div>
							</div>
						</article>
					))}
				</div>

				<div className="flex justify-center">
					<Button>Load More Articles</Button>
				</div>
			</div>
		</section>
	);
}
