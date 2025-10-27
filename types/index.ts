import { type StaticImageData } from "next/image";

interface ISecurity {
	id: number;
	title: string;
	description: string;
	color: string;
	border: boolean;
}
interface IFeature {
	id: string;
	title: string;
	description: string;
	bgColor: string;
	icon: StaticImageData;
}

interface IWorkingStep {
	id: string;
	title: string;
	description: string;
	icon: StaticImageData;
	border: boolean;
}

interface IPricingPlan {
	id: number;
	name: string;
	subTitle: string;
	price: string;
	billingCycle: string;
	features: string[];
	purchaseText: string;
}

export type { ISecurity, IFeature, IWorkingStep, IPricingPlan };
