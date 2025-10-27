import { IInsight } from "@/types";
import Image from "next/image";

interface IProps {
	insight: IInsight;
}

export default function InsightArticle({ insight }: IProps) {
	return (
		<article className="bg-white rounded-2xl border border-[#E7E7E8] overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-theme-primary group cursor-pointer">
			<div className="relative h-60 w-full bg-[#F3F3F3] overflow-hidden">
				<Image
					src={insight.image}
					alt={insight.title}
					layout="fill"
					objectFit="cover"
				/>
				{/* Category Badge */}
				<div
					className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold"
					style={{ backgroundColor: insight.categoryColor }}
				>
					{insight.category}
				</div>
			</div>

			<div className="p-6">
				<h3 className="font-bold text-base md:text-[20px] leading-[120%] text-theme-dark mb-3 group-hover:text-theme-primary transition-colors duration-200">
					{insight.title}
				</h3>

				<p className="text-sm md:text-base leading-[150%] text-theme-gray mb-6">
					{insight.excerpt}
				</p>

				<div className="flex items-center justify-between pt-4 border-t border-[#E7E7E8]">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 rounded-full bg-linear-to-br from-theme-primary to-theme-secondary flex items-center justify-center text-white text-sm font-semibold">
							{insight.author
								.split(" ")
								.map((n) => n[0])
								.join("")}
						</div>
						<div>
							<p className="text-xs md:text-sm font-semibold text-theme-dark">
								{insight.author}
							</p>
							<p className="text-xs text-theme-text">{insight.date}</p>
						</div>
					</div>

					<span className="text-xs md:text-sm text-theme-text">
						{insight.readTime}
					</span>
				</div>
			</div>
		</article>
	);
}
