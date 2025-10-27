import Image from "next/image";
import workingStepsImage from "/public/images/man-using-laptop-coffee-shop 1.png";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import StepList from "./StepList";

export default function WorkingSteps() {
	return (
		<section id="benefits" className="bg-[#F6F6F6] py-[120px] px-4">
			<div className="max-w-[1170px] mx-auto">
				<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
					<SectionHeader
						subTitle="HOW IT WORKS"
						title="Make payments, transfers, and more in 3 simple steps"
						className="text-center md:text-left md:w-1/2"
					/>
					<div className="mx-auto md:mx-0">
						<Button>Get Started Now</Button>
					</div>
				</div>
				<StepList />
				<div className="mt-6">
					<Image src={workingStepsImage} alt="Working Steps" />
				</div>
			</div>
		</section>
	);
}
