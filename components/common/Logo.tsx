import Image from "next/image";
import logo from "/public/images/logo.png";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" className="flex items-center -ml-5">
			<Image src={logo} alt="Easy Pay" height={73} className="mt-4 -mr-3" />
			<h4 className="font-bold text-[28px]">Easy Pay</h4>
		</Link>
	);
}
