import SectionHeader from "@/components/common/SectionHeader";
import { NextButton, PrevButton } from "./CarouselArrowButtons";
import { motion } from "motion/react";

interface IProps {
	onPrevButtonClick: () => void;
	onNextButtonClick: () => void;
	prevBtnDisabled: boolean;
	nextBtnDisabled: boolean;
}

export default function SectionContent({
	onPrevButtonClick,
	onNextButtonClick,
	prevBtnDisabled,
	nextBtnDisabled,
}: IProps) {
	return (
		<div className="w-full xl:w-[585px] xl:shrink-0">
			<SectionHeader
				subTitle="TESTIMONIAL"
				title="We've build trust with reviews from real users"
				className="max-w-[537px]"
			/>
			<motion.p
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
				className="max-w-[549px] text-sm md:text-base leading-[150%] text-theme-gray mb-6 font-normal"
			>
				Boost your credibility by featuring genuine testimonials from real
				users, showcasing their positive experiences and satisfaction with Monks
				Pay services.
			</motion.p>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
				className="embla__controls"
			>
				<div className="embla__buttons flex gap-2">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>
			</motion.div>
		</div>
	);
}
