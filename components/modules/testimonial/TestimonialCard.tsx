import { ITestimonial } from "@/types";
import star from "/public/images/clients/star.png";

import Image from "next/image";

interface IProps {
	testimonial: ITestimonial;
}

export default function TestimonialCard({ testimonial }: IProps) {
	return (
		<div className="embla__slide py-6 md:py-8 px-4 md:px-6 bg-white rounded-2xl">
			<div className="flex gap-1 mb-3 md:mb-4">
				<Image src={star} alt="star" className="w-4 h-4 md:w-auto md:h-auto" />
				<Image src={star} alt="star" className="w-4 h-4 md:w-auto md:h-auto" />
				<Image src={star} alt="star" className="w-4 h-4 md:w-auto md:h-auto" />
				<Image src={star} alt="star" className="w-4 h-4 md:w-auto md:h-auto" />
				<Image src={star} alt="star" className="w-4 h-4 md:w-auto md:h-auto" />
			</div>
			<p className="text-sm md:text-base leading-[150%] text-theme-gray font-normal">
				{testimonial.content}
			</p>
			<div className="mt-6 md:mt-8 flex items-center gap-2">
				<div className="shrink-0">
					<Image
						src={testimonial.client.image}
						alt={testimonial.client.name}
						className="w-12 h-12 md:w-auto md:h-auto"
					/>
				</div>
				<div>
					<h4 className="font-semibold text-sm md:text-[18px] leading-[120%] text-theme-dark">
						{testimonial.client.name}
					</h4>
					<p className="text-xs md:text-base leading-[150%] text-theme-gray">
						{testimonial.client.position}
					</p>
				</div>
			</div>
		</div>
	);
}
