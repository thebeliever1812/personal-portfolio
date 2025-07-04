const fadeIn = (
	direction: string = "",
	delay: number = 0,
	type: "tween" | "spring" = "tween"
) => {
	return {
		hidden: {
			opacity: 0,
			y: direction === "up" ? -20 : direction === "down" ? 20 : 0,
			x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
		},
		show: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: 0.5,
				delay: delay,
				ease: "easeInOut" as const,
				type: type,
			},
		},
		view: {
			opacity: 1,
			transition: {
				duration: 0.5,
				delay: 0.2,
				ease: "easeInOut" as const,
				type: "tween" as const,
			},
		},
	};
};

export default fadeIn;
