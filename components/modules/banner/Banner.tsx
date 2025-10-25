import Navbar from "@/components/common/Navbar";
import Image from "next/image";

import appStore from "/public/images/hero/appStore.png";
import playStore from "/public/images/hero/playStore.png";
import bannerProfile from "/public/images/hero/bannerImg.png";
import underline from "/public/images/hero/underline.png";

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
			<div className="max-w-[1170px] mx-auto">
				<Navbar />
				<div className="flex justify-between">
					<div className="pt-20">
						<div className="w-[638px]">
							<h4 className="text-base font-semibold text-theme-text uppercase">
								EasyPayment
							</h4>
							<h1 className="font-bold text-[64px] text-theme-dark leading-[120%]">
								Pay fast and smarter
							</h1>
							<Image src={underline} alt="Underline" className="ml-auto" />
							<h1 className="font-bold text-[64px] text-theme-dark leading-[120%]">
								from anywhere
							</h1>
							<p className="text-lg text-theme-gray">
								Experience the future of payments: fast, secure, and tailored
								for the next generation&apos;s convenience and trust.
							</p>
						</div>
						<div className="flex gap-2 mt-12">
							<Image
								src={appStore}
								alt="Apple Store"
								className="cursor-pointer"
							/>
							<Image
								src={playStore}
								alt="Play Store"
								className="cursor-pointer"
							/>
						</div>
					</div>
					<div>
						<Image src={bannerProfile} alt="Men" />
					</div>
				</div>
			</div>
		</section>
	);
}
