import SectionHeader from "@/components/common/SectionHeader";
import { Fragment } from "react/jsx-runtime";

const securityServices = [
	{
		id: 1,
		title: "Two-factor authentication",
		description:
			"Two-factor authentication ensures added protection by using verification steps.",
		color: "#2E68FD",
	},
	{
		id: 2,
		title: "Fraud detection and alerts",
		description:
			"Fraud detection safeguards your money, sending instant alerts for any activity.",
		color: "#FC4343",
	},
	{
		id: 3,
		title: "Transaction notifications",
		description:
			"Instant notifications for transaction keep you informed to manage your finances.",
		color: "#08A965",
	},
	{
		id: 4,
		title: "Biometric access",
		description:
			"Easily and securely log in with biometric features, and facial recognition.",
		color: "#3B7793",
	},
	{
		id: 5,
		title: "End-to-end encryption",
		description:
			"By encryption, protecting your data from unauthorized access.",
		color: "#D77E1B",
	},
	{
		id: 6,
		title: "24/7 Protection support",
		description:
			"Our dedicated team is available around the clock to help you.",
		color: "#932EFA",
	},
];

export default function Security() {
	return (
		<section className="max-w-[1170px] mx-auto py-[120px]">
			<div className="flex items-center justify-between mb-12">
				<SectionHeader
					subTitle="SECURITY"
					title="We protect your money at every step with Easy Pay"
					className="w-1/2"
				/>
				<div className="w-[377px] ml-auto">
					<p className="text-base leading-[150%] text-theme-gray">
						Easy Pay ensures your money is protected at every step with advanced
						encryption, real-time monitoring, and multi-factor authentication.
					</p>
				</div>
			</div>
			<div
				style={{
					backgroundImage: "url('/images/security/security-bg.png')",
					backgroundSize: "cover",
					backgroundPosition: "center bottom",
				}}
				className="rounded-2xl py-10 px-6 bg-[#F6F6F6]"
			>
				<div className="grid grid-cols-3 gap-6">
					{securityServices.map((service) => (
						<Fragment key={service.id}>
							<div>
								<div
									className="rounded-full h-7 w-7 flex items-center justify-center"
									style={{ backgroundColor: `${service.color}33` }}
								>
									<div
										className="rounded-full h-2.5 w-2.5"
										style={{ backgroundColor: service.color }}
									/>
								</div>
								<div className="mt-6 space-y-2">
									<h4 className="font-bold text-xl leading-[120%] text-theme-dark">
										{service.title}
									</h4>
									<p className="text-theme-gray text-base leading-[150%]">
										{service.description}
									</p>
								</div>
							</div>
							{/* {service.id % 3 !== 0 && (
								<div className="w-1 h-[180px] bg-linear-to-t from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]"></div>
							)} */}
						</Fragment>
					))}
				</div>
			</div>
		</section>
	);
}
