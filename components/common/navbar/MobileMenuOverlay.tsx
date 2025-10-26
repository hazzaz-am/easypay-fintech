import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import { X } from "lucide-react";
import { type ReactNode } from "react";

interface IProps {
	isMobileMenuOpen: boolean;
	closeMobileMenu: () => void;
	renderNavLinks: (isMobile: boolean) => ReactNode;
}

export default function MobileMenuOverlay({
	isMobileMenuOpen,
	closeMobileMenu,
	renderNavLinks,
}: IProps) {
	return (
		<div
			className={`
					fixed inset-0 bg-theme-dark/70 backdrop-blur-sm z-50 lg:hidden
					transition-all duration-300 ease-in-out
					${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
				`}
			onClick={closeMobileMenu}
		>
			{/* Mobile Menu Content */}
			<div
				className={`
						fixed right-0 top-0 h-full w-full sm:w-80 bg-white
						shadow-2xl transform transition-transform duration-300 ease-in-out
						${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
					`}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Mobile Menu Header */}
				<div className="flex items-center justify-between p-6 border-b border-gray-200">
					<Logo />
					<button
						onClick={closeMobileMenu}
						className="p-2 text-theme-gray hover:text-primary transition-colors duration-300"
						aria-label="Close menu"
					>
						<X className="w-6 h-6" />
					</button>
				</div>

				{/* Mobile Menu Links */}
				<menu className="flex flex-col space-y-6 p-6">
					{renderNavLinks(true)}
				</menu>

				{/* Mobile Contact Button */}
				<div className="px-6 py-4">
					<Button className="w-full" onClick={closeMobileMenu}>
						Contact Us
					</Button>
				</div>
			</div>
		</div>
	);
}
