import Footer from "@/components/common/Footer";

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
