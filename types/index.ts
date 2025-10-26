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

export type { ISecurity, IFeature };
