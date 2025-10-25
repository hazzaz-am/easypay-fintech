import Link from "next/link";
import Logo from "./Logo";
import { Button } from "../ui/button";

const navigationLinks = [
	{ name: "Features", href: "#features" },
	{ name: "Pricing", href: "#pricing" },
	{ name: "Security", href: "#security" },
	{ name: "Benefits", href: "#benefits" },
];

export default function Navbar() {
	const renderNavLinks = () => {
		return navigationLinks.map((link) => (
			<li key={link.name}>
				<Link
					href={link.href}
					className="font-semibold text-theme-gray text-lg"
				>
					{link.name}
				</Link>
			</li>
		));
	};
	return (
		<nav className="flex items-center justify-between py-6 max-w-[1170px] mx-auto h-[121px]">
			<Logo />
			<menu className="flex space-x-8">{renderNavLinks()}</menu>
			<div>
				<Button>Contact Us</Button>
			</div>
		</nav>
	);
}
