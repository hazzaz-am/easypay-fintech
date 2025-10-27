"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "motion/react";
import { Button } from "../../ui/button";
import Logo from "../Logo";
import MobileMenuOverlay from "./MobileMenuOverlay";

const navigationLinks = [
	{ name: "Features", href: "#features" },
	{ name: "Pricing", href: "#pricing" },
	{ name: "Security", href: "#security" },
	{ name: "Benefits", href: "#benefits" },
];

const navbarVariants: Variants = {
	hidden: { y: -100, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: "easeOut",
			staggerChildren: 0.1,
		},
	},
};

const navLinkVariants: Variants = {
	hidden: { y: -20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: "easeOut",
		},
	},
};

const buttonVariants: Variants = {
	hidden: { scale: 0, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "backOut",
			delay: 0.4,
		},
	},
};

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const renderNavLinks = (isMobile = false) => {
		return navigationLinks.map((link, index) => (
			<motion.li
				key={link.name}
				variants={navLinkVariants}
				initial="hidden"
				animate="visible"
				custom={index}
			>
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
			</motion.li>
		));
	};

	return (
		<>
			<motion.nav
				className="flex items-center justify-between py-6 lg:h-[121px] h-20 relative"
				variants={navbarVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.div variants={navLinkVariants}>
					<Logo />
				</motion.div>

				{/* Desktop Navigation */}
				<motion.menu
					className="hidden lg:flex space-x-8"
					variants={navbarVariants}
					initial="hidden"
					animate="visible"
				>
					{renderNavLinks()}
				</motion.menu>

				{/* Desktop Contact Button */}
				<motion.div
					className="hidden lg:block"
					variants={buttonVariants}
					initial="hidden"
					animate="visible"
				>
					<Button>Contact Us</Button>
				</motion.div>

				{/* Mobile Hamburger Button */}
				<motion.button
					onClick={toggleMobileMenu}
					className="lg:hidden p-2 text-theme-gray hover:text-primary transition-colors duration-300"
					aria-label="Toggle menu"
					variants={buttonVariants}
					initial="hidden"
					animate="visible"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					{isMobileMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</motion.button>
			</motion.nav>

			<MobileMenuOverlay
				isMobileMenuOpen={isMobileMenuOpen}
				closeMobileMenu={closeMobileMenu}
				renderNavLinks={renderNavLinks}
			/>
		</>
	);
}
