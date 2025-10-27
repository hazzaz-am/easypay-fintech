"use client";

import { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { usePrevNextButtons } from "./CarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import SectionContent from "./SectionContent";
import TestimonialCarousel from "./TestimonialCarousel";
import { motion } from "motion/react";

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
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.6 }}
			className="bg-[#F6F6F6] py-12 md:py-16 lg:py-[120px] mb-[120px] overflow-x-hidden"
		>
			<div className="max-w-[1170px] mx-auto px-4">
				<div className="xl:flex xl:items-center xl:gap-8">
					<SectionContent
						onPrevButtonClick={onPrevButtonClick}
						onNextButtonClick={onNextButtonClick}
						prevBtnDisabled={prevBtnDisabled}
						nextBtnDisabled={nextBtnDisabled}
					/>
					<TestimonialCarousel options={OPTIONS} emblaRef={emblaRef} />
				</div>
			</div>
		</motion.section>
	);
}
