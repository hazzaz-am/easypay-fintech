import SecurityServices from "./SecurityServices";
import SecurityHeader from "./SecurityHeader";

export default function Security() {
	return (
		<section
			id="security"
			className="max-w-[1170px] mx-auto pt-12 md:pt-20 lg:pt-[120px] px-4 md:px-6 lg:px-8"
		>
			<SecurityHeader />
			<SecurityServices />
		</section>
	);
}
