import SectionHeader from "@/components/common/SectionHeader";
import { NextButton, PrevButton } from "./CarouselArrowButtons";

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
			<p className="max-w-[549px] text-sm md:text-base leading-[150%] text-theme-gray mb-6 font-normal">
				Boost your credibility by featuring genuine testimonials from real
				users, showcasing their positive experiences and satisfaction with Monks
				Pay services.
			</p>
			<div className="embla__controls">
				<div className="embla__buttons flex gap-2">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>
			</div>
		</div>
	);
}
