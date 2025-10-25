import { MovingClientLogos } from "@/components/modules/features/MovingClientLogos";

export default function ClientLogos() {
	return (
		<div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mb-[120px]">
			<MovingClientLogos direction="right" speed="normal" />
		</div>
	);
}
