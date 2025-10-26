interface IProps {
	title: string;
	links: string[];
}

export default function FooterLinks({ title, links }: IProps) {
	return (
		<div className="w-full sm:w-auto">
			<h4 className="text-lg md:text-xl leading-[120%] font-bold text-theme-dark mb-3 md:mb-4">
				{title}
			</h4>
			<menu className="space-y-2 md:space-y-3">
				{links.map((link) => (
					<li
						key={link}
						className="text-sm md:text-base leading-[150%] text-theme-gray cursor-pointer hover:text-theme-text transition-colors font-normal"
					>
						{link}
					</li>
				))}
			</menu>
		</div>
	);
}
