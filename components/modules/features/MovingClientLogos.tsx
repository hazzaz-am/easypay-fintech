"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import clientLogo1 from "/public/images/clients/client-logo-1.png";
import clientLogo2 from "/public/images/clients/client-logo-2.png";
import clientLogo3 from "/public/images/clients/client-logo-3.png";
import clientLogo4 from "/public/images/clients/client-logo-4.png";
import clientLogo5 from "/public/images/clients/client-logo-5.png";
import clientLogo6 from "/public/images/clients/client-logo-6.png";
import clientLogo7 from "/public/images/clients/client-logo-7.png";
import clientLogo8 from "/public/images/clients/client-logo-8.png";
import Image from "next/image";

const clientLogos = [
	{ src: clientLogo1, alt: "Client Logo 1" },
	{ src: clientLogo2, alt: "Client Logo 2" },
	{ src: clientLogo3, alt: "Client Logo 3" },
	{ src: clientLogo4, alt: "Client Logo 4" },
	{ src: clientLogo5, alt: "Client Logo 5" },
	{ src: clientLogo6, alt: "Client Logo 6" },
	{ src: clientLogo7, alt: "Client Logo 7" },
	{ src: clientLogo8, alt: "Client Logo 8" },
];

export const MovingClientLogos = ({
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);
	const [start, setStart] = useState(false);

	useEffect(() => {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			// eslint-disable-next-line react-hooks/set-state-in-effect
			setStart(true);
		}
	}, []);

	useEffect(() => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	}, [direction]);

	useEffect(() => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	}, [speed]);

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 mx-auto overflow-hidden select-none",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex w-max min-w-full shrink-0 flex-nowrap gap-24",
					start && "animate-scroll",
					pauseOnHover && "hover:paused"
				)}
			>
				{clientLogos.map((item) => (
					<Image key={item.alt} src={item.src} alt={item.alt} />
				))}
			</ul>
		</div>
	);
};
