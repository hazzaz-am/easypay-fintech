import Logo from "./Logo";

export default function Footer() {
	return (
		<section
			style={{
				backgroundImage: "url('/images/bg-shades-bottom.png')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
			className="max-w-[1170px] mx-auto pb-8"
		>
			<div className="flex items-center justify-between">
				<div className="space-y-4 max-w-[278px]">
					<Logo />
					<p className="text-theme-gray text-base leading-[150%]">
						Easy Pay offers secure, seamless, and fee-free payments for
						effortless global transactions.
					</p>
				</div>
				<div className="flex items-start gap-[100px] justify-between">
					<div>
						<h4 className="text-xl leading-[120%] font-bold text-theme-dark mb-4">
							Short links
						</h4>
						<menu className="space-y-3">
							<li className="text-base leading-[150%] text-theme-gray">
								Features
							</li>
							<li className="text-base leading-[150%] text-theme-gray">
								How it works
							</li>
							<li className="text-base leading-[150%] text-theme-gray">
								Security
							</li>
							<li className="text-base leading-[150%] text-theme-gray">
								Testimonial
							</li>
						</menu>
					</div>
					<div>
						<h4 className="text-xl leading-[120%] font-bold text-theme-dark mb-4">
							Other pages
						</h4>
						<menu className="space-y-3">
							<li className="text-base leading-[150%] text-theme-gray">
								Privacy policy
							</li>
							<li className="text-base leading-[150%] text-theme-gray">
								Terms & conditions
							</li>
							<li className="text-base leading-[150%] text-theme-gray">404</li>
						</menu>
					</div>
				</div>
			</div>
			<div className="border-t border-[#E7E7E8] text-center mt-[5px]">
				<p className="text-footer-text text-base leading-[150%] font-normal">
					2024 ©Easy Pay. All rights reserved. Fintech Landing Page by Hazzaz
				</p>
			</div>
		</section>
	);
}
