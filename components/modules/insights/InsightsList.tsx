import { insights } from "@/data";
import InsightArticle from "./InsightArticle";

export default function InsightsList() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
			{insights.map((insight) => (
				<InsightArticle key={insight.id} insight={insight} />
			))}
		</div>
	);
}
