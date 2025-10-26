import Image from "next/image";
import appStore from "/public/images/hero/appStore.png";
import playStore from "/public/images/hero/playStore.png";
import bannerProfile from "/public/images/hero/bannerImg.png";
import underline from "/public/images/hero/underline.png";
import Navbar from "@/components/common/navbar/Navbar";

export default function Banner() {
	return (
		<section
			style={{
				backgroundImage: "url('/images/hero/hero-bg.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
			className="m-6 rounded-3xl mb-[120px]"
		>
			<div className="max-w-[1170px] mx-auto px-4">
				<Navbar />
				<div className="flex flex-col-reverse md:flex-col-reverse lg:justify-between lg:flex-row xl:relative lg:items-center">
					<div className="pb-10 pt-20 w-full lg:max-w-[638px] lg:h-[580px]">
						<div className="max-w-[638px]">
							<h4 className="text-sm lg:text-base font-semibold text-theme-text uppercase">
								EasyPayment
							</h4>
							<h1 className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-[64px] text-theme-dark leading-[120%]">
								Pay fast and smarter
							</h1>
							<Image src={underline} alt="Underline" className="xl:ml-auto" />
							<h1 className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-[64px] text-theme-dark leading-[120%]">
								from anywhere
							</h1>
							<p className="text-base lg:text-lg text-theme-gray font-normal leading-[150%]">
								Experience the future of payments: fast, secure, and tailored
								for the next generation&apos;s convenience and trust.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-2 mt-12">
							<Image
								src={appStore}
								alt="Apple Store"
								className="cursor-pointer hover:scale-105 transition-transform duration-300"
							/>
							<Image
								src={playStore}
								alt="Play Store"
								className="cursor-pointer hover:scale-105 transition-transform duration-300"
							/>
						</div>
					</div>

					<div className="xl:absolute xl:bottom-0 xl:right-0 w-full xl:max-w-[643px] mx-auto xl:mt-auto">
						<Image src={bannerProfile} alt="Men" />
					</div>
				</div>
			</div>
		</section>
	);
}
