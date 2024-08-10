type ArrowRightType = {
	fill?: string
}

const ArrowRight = (props: ArrowRightType) => {
	const { fill = "currentColor" } = props

	return (
		<svg width="1em" height="1em" viewBox="0 0 24 24">
			<path fill={fill} d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
		</svg>
	)
}

export { ArrowRight }
