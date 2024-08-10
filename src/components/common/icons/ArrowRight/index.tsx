import { convertToPixels } from "utils"

type ArrowRightType = {
	width?: string | number
	height?: string | number
	fill?: string
}

const ArrowRight = (props: ArrowRightType) => {
	const { width = "1em", height = "1em", fill = "currentColor" } = props

	return (
		<svg width={convertToPixels(width)} height={convertToPixels(height)} viewBox="0 0 24 24">
			<path
				fill={fill}
				d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
			></path>
		</svg>
	)
}

export { ArrowRight }
