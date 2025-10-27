"use client";

import Image from "next/image";
import appStore from "/public/images/hero/appStore.png";
import bannerProfile from "/public/images/hero/bannerImg.png";
import underline from "/public/images/hero/underline.png";
import Navbar from "@/components/common/navbar/Navbar";
import playStore from "/public/images/hero/playStoreBtn.png";
import { motion, Variants } from "motion/react";

export default function Banner() {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const imageVariants: Variants = {
		hidden: { opacity: 0, x: 100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const buttonVariants: Variants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.section
			style={{
				backgroundImage: "url('/images/hero/hero-bg.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
			className="m-6 rounded-3xl"
			variants={{
				hidden: {
					opacity: 0,
				},
				visible: {
					opacity: 1,
				},
			}}
			initial="hidden"
			animate="visible"
		>
			<div className="max-w-[1170px] mx-auto px-4">
				<Navbar />
				<div className="flex flex-col-reverse md:flex-col-reverse lg:justify-between lg:flex-row xl:relative lg:items-center">
					<motion.div
						className="pb-10 pt-20 w-full lg:max-w-[638px] lg:h-[580px]"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						<div className="max-w-[638px]">
							<motion.h4
								className="text-sm lg:text-base font-semibold text-theme-text uppercase"
								variants={itemVariants}
							>
								EasyPayment
							</motion.h4>
							<motion.h1
								className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-[64px] text-theme-dark leading-[120%]"
								variants={itemVariants}
							>
								Pay fast and smarter
							</motion.h1>
							<motion.div variants={itemVariants}>
								<Image src={underline} alt="Underline" className="xl:ml-auto" />
							</motion.div>
							<motion.h1
								className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-[64px] text-theme-dark leading-[120%]"
								variants={itemVariants}
							>
								from anywhere
							</motion.h1>
							<motion.p
								className="text-base lg:text-lg text-theme-gray font-normal leading-[150%]"
								variants={itemVariants}
							>
								Experience the future of payments: fast, secure, and tailored
								for the next generation&apos;s convenience and trust.
							</motion.p>
						</div>
						<motion.div
							className="flex flex-col sm:flex-row gap-2 mt-12"
							variants={containerVariants}
						>
							<motion.div variants={buttonVariants}>
								<Image
									src={appStore}
									alt="Apple Store"
									className="cursor-pointer hover:scale-105 transition-transform duration-300"
								/>
							</motion.div>
							<motion.div variants={buttonVariants}>
								<Image
									src={playStore}
									alt="Play Store"
									className="cursor-pointer hover:scale-105 transition-transform duration-300"
								/>
							</motion.div>
						</motion.div>
					</motion.div>

					<motion.div
						className="xl:absolute xl:bottom-0 xl:right-0 w-full xl:max-w-[643px] mx-auto xl:mt-auto"
						variants={imageVariants}
						initial="hidden"
						animate="visible"
					>
						<Image src={bannerProfile} alt="Men" />
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}
