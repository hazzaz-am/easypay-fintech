import SectionHeader from "@/components/common/SectionHeader";

export default function SecurityHeader() {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0 mb-8 md:mb-10 lg:mb-12">
			<SectionHeader
				subTitle="SECURITY"
				title="We protect your money at every step with Easy Pay"
				className="w-full lg:w-1/2 text-center lg:text-left"
			/>
			<div className="w-full lg:w-[377px] lg:ml-auto">
				<p className="text-sm md:text-base leading-[150%] text-theme-gray text-center lg:text-left">
					Easy Pay ensures your money is protected at every step with advanced
					encryption, real-time monitoring, and multi-factor authentication.
				</p>
			</div>
		</div>
	);
}
