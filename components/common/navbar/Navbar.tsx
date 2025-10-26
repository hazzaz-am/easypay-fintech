"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../ui/button";
import Logo from "../Logo";
import MobileMenuOverlay from "./MobileMenuOverlay";

const navigationLinks = [
	{ name: "Features", href: "#features" },
	{ name: "Pricing", href: "#pricing" },
	{ name: "Security", href: "#security" },
	{ name: "Benefits", href: "#benefits" },
];

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const renderNavLinks = (isMobile = false) => {
		return navigationLinks.map((link) => (
			<li key={link.name}>
				<Link
					href={link.href}
					onClick={isMobile ? closeMobileMenu : undefined}
					className={`
						relative font-semibold text-theme-gray text-lg leading-[120%] font-urbanist
						transition-all duration-300 ease-in-out
						hover:text-theme-dark
						after:content-[''] after:absolute after:bottom-0 after:left-0
						after:w-0 after:h-0.5 after:bg-theme-dark
						after:transition-all after:duration-300 after:ease-in-out
						hover:after:w-full
						${isMobile ? "text-2xl py-2" : ""}
					`}
				>
					{link.name}
				</Link>
			</li>
		));
	};

	return (
		<>
			<nav className="flex items-center justify-between py-6 lg:h-[121px] h-20 relative">
				<Logo />

				{/* Desktop Navigation */}
				<menu className="hidden lg:flex space-x-8">{renderNavLinks()}</menu>

				{/* Desktop Contact Button */}
				<div className="hidden lg:block">
					<Button>Contact Us</Button>
				</div>

				{/* Mobile Hamburger Button */}
				<button
					onClick={toggleMobileMenu}
					className="lg:hidden p-2 text-theme-gray hover:text-primary transition-colors duration-300"
					aria-label="Toggle menu"
				>
					{isMobileMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</nav>

			<MobileMenuOverlay
				isMobileMenuOpen={isMobileMenuOpen}
				closeMobileMenu={closeMobileMenu}
				renderNavLinks={renderNavLinks}
			/>
		</>
	);
}
