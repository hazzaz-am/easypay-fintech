import { workingSteps } from "@/data";
import Step from "./Step";

export default function StepList() {
	return (
		<div className="bg-white rounded-2xl p-6">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{workingSteps.map((step) => (
					<Step key={step.id} step={step} />
				))}
			</div>
		</div>
	);
}
