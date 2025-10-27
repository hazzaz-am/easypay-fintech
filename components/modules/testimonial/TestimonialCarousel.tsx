import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { testimonials } from "@/data";
import TestimonialCard from "./TestimonialCard";

type PropType = {
	options?: EmblaOptionsType;
	emblaRef: (node: HTMLDivElement | null) => void;
};

const TestimonialCarousel: React.FC<PropType> = (props) => {
	const { emblaRef } = props;

	return (
		<section
			className="w-full py-6 mt-6 lg:mt-8 xl:mt-0 xl:w-auto xl:flex-1 xl:min-w-0 overflow-hidden xl:-mr-4"
			style={{
				backgroundImage: "url('/images/pricing/bg-shades-round.png')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			<div className="embla w-full select-none">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">
						{testimonials.map((testimonial) => (
							<TestimonialCard key={testimonial.id} testimonial={testimonial} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialCarousel;
