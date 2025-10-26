import { Button } from "@/components/ui/button";

export default function CallToAction() {
	return (
		<section
			style={{
				backgroundImage: "url('/images/contact-section-bg.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="my-[120px] max-w-[1170px] mx-auto rounded-2xl"
		>
			<div className="py-[100px] bg-black/70 w-full h-full overflow-hidden rounded-2xl">
				<div className="max-w-[580px] mx-auto text-center text-white space-y-3">
					<h2 className="font-bold text-[40px] leading-[120%]">
						Ready to experience seamless secure payments globally
					</h2>
					<p className="font-normal text-base leading-[150%]">
						Ready for hassle-free, secure payments anywhere in the world? Start
						using Monks Pay today it&apos;s fast, free, and focused on keeping
						your transactions secure!
					</p>
				</div>
				<div className="flex items-center justify-center gap-3 mt-10">
					<Button>Download the App</Button>
					<Button variant="outline" className="text-white border-white">
						Get Started Now
					</Button>
				</div>
			</div>
		</section>
	);
}
