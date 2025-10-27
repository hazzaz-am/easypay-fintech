import { Button } from "@/components/ui/button";

export default function CallToAction() {
	return (
		<section
			style={{
				backgroundImage: "url('/images/contact-section-bg.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className="my-[120px] max-w-[1170px] xl:mx-auto rounded-2xl mx-4"
		>
			<div className="py-[100px] px-4 bg-black/70 w-full h-full overflow-hidden rounded-2xl">
				<div className="max-w-[580px] mx-auto text-center text-white space-y-3">
					<h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[40px] leading-[120%]">
						Ready to experience seamless secure payments globally
					</h2>
					<p className="text-sm xl:text-base leading-[150%] font-normal ">
						Ready for hassle-free, secure payments anywhere in the world? Start
						using Monks Pay today it&apos;s fast, free, and focused on keeping
						your transactions secure!
					</p>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-10">
					<Button>Download the App</Button>
					<Button variant="outline" className="text-white border-white">
						Get Started Now
					</Button>
				</div>
			</div>
		</section>
	);
}
