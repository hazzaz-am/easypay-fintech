"use client";

import { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { usePrevNextButtons } from "./CarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import SectionHeader from "@/components/common/SectionHeader";
import { NextButton, PrevButton } from "./CarouselArrowButtons";
import Carousel from "./Carousel";

const OPTIONS: EmblaOptionsType = {
	align: "start",
	dragFree: true,
	loop: true,
};

export default function Testimonial() {
	const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);

	const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
		const autoplay = emblaApi?.plugins()?.autoplay;
		if (!autoplay) return;

		const resetOrStop =
			autoplay.options.stopOnInteraction === false
				? autoplay.reset
				: autoplay.stop;

		resetOrStop();
	}, []);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi, onNavButtonClick);

	return (
		<section className="py-[120px] bg-[#F6F6F6] flex items-center justify-between">
			<div className="ml-auto w-[585px]">
				<SectionHeader
					subTitle="TESTIMONIAL"
					title="We’ve build trust with reviews from real users"
          className="max-w-[537px]"
				/>
				<p className="max-w-[549px] text-base leading-[150%] text-theme-gray">
					Boost your credibility by featuring genuine testimonials from real
					users, showcasing their positive experiences and satisfaction with
					Monks Pay services.
				</p>
				<div className="embla__controls">
					<div className="embla__buttons flex gap-2">
						<PrevButton
							onClick={onPrevButtonClick}
							disabled={prevBtnDisabled}
						/>
						<NextButton
							onClick={onNextButtonClick}
							disabled={nextBtnDisabled}
						/>
					</div>
				</div>
			</div>
			<div className="w-1/2" style={{
        backgroundImage: "url('/images/pricing/bg-shades-round.png')",
        backgroundPosition: "center"
      }}>
				<Carousel options={OPTIONS} emblaRef={emblaRef} />
			</div>
		</section>
	);
}
