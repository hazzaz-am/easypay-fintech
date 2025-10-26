import { footerLinks1, footerLinks2 } from "@/data";
import Logo from "../Logo";
import FooterLinks from "./FooterLinks";

export default function Footer() {
	return (
		<section
			style={{
				backgroundImage: "url('/images/bg-shades-bottom.png')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
			className="max-w-[1170px] mx-auto px-4 pb-8 pt-8 md:pt-12"
		>
			<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 mb-8 md:mb-12">
				<div className="space-y-4 max-w-full md:max-w-[278px] mx-auto md:mx-0">
					<Logo />
					<p className="text-theme-gray text-sm md:text-base leading-[150%] font-normal">
						Easy Pay offers secure, seamless, and fee-free payments for
						effortless global transactions.
					</p>
				</div>
				<div className="flex flex-col sm:flex-row lg:flex-row items-start gap-8 sm:gap-12 lg:gap-[100px] justify-between w-full md:w-auto">
					<FooterLinks title="Short links" links={footerLinks1} />
					<FooterLinks title="Other pages" links={footerLinks2} />
				</div>
			</div>
			<div className="border-t border-[#E7E7E8] text-center pt-6 md:pt-8 mt-6 md:mt-8">
				<p className="text-footer-text text-xs md:text-sm lg:text-base leading-[150%] font-light px-4">
					2025 ©Easy Pay. All rights reserved. Fintech Landing Page by Hazzaz
				</p>
			</div>
		</section>
	);
}
