import Image from "next/image";
import workingStepsImage from "/public/images/man-using-laptop-coffee-shop 1.png";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";

import downloadIcon from "/public/images/how-works/download-pay-icon.png";
import bankCardIcon from "/public/images/how-works/bank-card-icon.png";
import payIcon from "/public/images/how-works/paying-icon.png";
import { Fragment } from "react/jsx-runtime";

const steps = [
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

export default function WorkingSteps() {
	return (
		<section className="bg-[#F6F6F6] py-[120px]">
			<div className="max-w-[1170px] mx-auto">
				<div className="flex-col lg:flex-row items-end justify-between mb-12">
					<SectionHeader
						subTitle="HOW IT WORKS"
						title="Make payments, transfers, and more in 3 simple steps"
						className="w-1/2"
					/>
					<Button>Get Started Now</Button>
				</div>
				<div className="bg-white rounded-2xl p-6">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{steps.map((step) => (
							<div key={step.id} className="relative p-6">
								{step.border && (
									<>
										<div className="hidden lg:block absolute -left-5 top-0 bottom-0 w-px bg-linear-to-t from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
										<div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-linear-to-t from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]" />
									</>
								)}
								<h2 className="font-bold text-[80px] leading-[100%] text-[#F3F3F3]">
									{step.id}
								</h2>
								<Image src={step.icon} alt={step.title} className="-mt-8" />
								<div className="mt-12 space-y-2">
									<h3 className="font-bold text-xl leading-[120%] text-theme-dark">
										{step.title}
									</h3>
									<p className="text-base leading-[150%] text-theme-gray">
										{step.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="mt-6">
					<Image src={workingStepsImage} alt="Working Steps" />
				</div>
			</div>
		</section>
	);
}
