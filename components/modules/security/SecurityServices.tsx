import { securityServices } from "@/data";
import SecurityCard from "./SecurityCard";

export default function SecurityServices() {
	return (
		<div
			style={{
				backgroundImage: "url('/images/security/security-bg.png')",
				backgroundSize: "cover",
				backgroundPosition: "center bottom",
			}}
			className="rounded-xl md:rounded-2xl py-6 md:py-8 lg:py-10 px-4 md:px-6 bg-[#F6F6F6]"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
				{securityServices.map((service) => (
					<SecurityCard key={service.id} service={service} />
				))}
			</div>
		</div>
	);
}
