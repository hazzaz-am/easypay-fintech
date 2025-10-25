import type { Metadata } from "next";
import { Urbanist, Outfit } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
	subsets: ["latin"],
	variable: "--font-urbanist",
});

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
});

export const metadata: Metadata = {
	title: "EasyPay - The easy way to pay",
	description: "A simple and secure payment solution for everyone.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${outfit.variable} ${urbanist.variable} antialiased`}>{children}</body>
		</html>
	);
}
