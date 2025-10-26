import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import star from "/public/images/clients/star.png"

import client1 from "/public/images/clients/testimonial-men-1.png";
import client2 from "/public/images/clients/testimonial-men-2.png";
import Image from "next/image";

type PropType = {
	options?: EmblaOptionsType;
	emblaRef: (node: HTMLDivElement | null) => void;
};

const testimonials = [
	{
		id: 1,
		content:
			"Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
		client: {
			name: "Ethan Williams",
			position: "Digital Marketing Specialist",
			image: client1,
		},
	},
	{
		id: 2,
		content:
			"Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
		client: {
			name: "Daniel Thompson",
			position: "Product Designer",
			image: client2,
		},
	},
	{
		id: 3,
		content:
			"Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
		client: {
			name: "Ethan Williams",
			position: "Digital Marketing Specialist",
			image: client1,
		},
	},
	{
		id: 4,
		content:
			"Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
		client: {
			name: "Daniel Thompson",
			position: "Product Designer",
			image: client2,
		},
	},
];

const Carousel: React.FC<PropType> = (props) => {
	const { emblaRef } = props;

	return (
		<section className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="flex embla__container">
					{testimonials.map((testimonial) => (
						<div
							className="embla__slide py-8 px-6 bg-white rounded-2xl ml-6"
							key={testimonial.id}
						>
							<div className="flex gap-1 mb-4">
								<Image src={star} alt="star" />
								<Image src={star} alt="star" />
								<Image src={star} alt="star" />
								<Image src={star} alt="star" />
								<Image src={star} alt="star" />
							</div>
							<p>{testimonial.content}</p>
							<div className="mt-8 flex items-center gap-2">
								<div>
									<Image
										src={testimonial.client.image}
										alt={testimonial.client.name}
									/>
								</div>
								<div>
									<h4 className="font-semibold">{testimonial.client.name}</h4>
									<p className="text-sm text-theme-gray">
										{testimonial.client.position}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Carousel;
