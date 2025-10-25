"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
	return (
		<div
			style={{
				backgroundImage: "url('/images/bg-shades-bottom.png')",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "bottom center",
			}}
			className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
		>
			<div className="max-w-2xl w-full text-center">
				{/* 404 Number */}
				<div className="mb-8">
					<h1 className="text-[120px] sm:text-[180px] lg:text-[220px] font-bold leading-none opacity-20 select-none text-theme-primary">
						404
					</h1>
				</div>

				{/* Heading */}
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
					Page Not Found
				</h2>

				{/* Description */}
				<p className="text-lg sm:text-xl mb-8 max-w-md mx-auto">
					Oops! The page you&apos;re looking for doesn&apos;t exist. It might
					have been moved or deleted.
				</p>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Link
						href="/"
						className="group inline-flex items-center gap-2 bg-theme-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
					>
						<Home className="w-5 h-5" />
						Back to Home
					</Link>

					<button
						onClick={() => window.history.back()}
						className="group inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-theme-dark px-6 py-3 rounded-xl font-semibold hover:border-theme-primary hover:text-theme-primary transition-all duration-300 w-full sm:w-auto justify-center cursor-pointer"
					>
						<ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
						Go Back
					</button>
				</div>

				{/* Help Text */}
				<div className="mt-12 pt-8 border-t border-gray-200">
					<p className="text-sm text-theme-text">
						Need help?{" "}
						<Link
							href="/"
							className="text-theme-primary hover:underline font-semibold"
						>
							Contact Support
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
