import { convertToPixels } from "utils"

type EyeType = {
	width?: string | number
	height?: string | number
	fill?: string
}

const Eye = (props: EyeType) => {
	const { width = "1em", height = "1em", fill = "currentColor" } = props

	return (
		<svg width={convertToPixels(width)} height={convertToPixels(height)} viewBox="0 0 20 16">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.41667 8C2.41667 7.19329 2.93513 5.70472 4.18608 4.40565C5.40721 3.13755 7.29888 2.08334 10 2.08334C12.7011 2.08334 14.5928 3.13755 15.8139 4.40565C17.0649 5.70472 17.5833 7.19329 17.5833 8C17.5833 8.80671 17.0649 10.2953 15.8139 11.5944C14.5928 12.8624 12.7011 13.9167 10 13.9167C7.29888 13.9167 5.40721 12.8624 4.18608 11.5944C2.93513 10.2953 2.41667 8.80671 2.41667 8ZM10 0.583336C6.8678 0.583336 4.5928 1.82078 3.1056 3.36519C1.64822 4.87862 0.916672 6.72338 0.916672 8C0.916672 9.27662 1.64822 11.1214 3.1056 12.6348C4.5928 14.1792 6.8678 15.4167 10 15.4167C13.1322 15.4167 15.4072 14.1792 16.8944 12.6348C18.3518 11.1214 19.0833 9.27662 19.0833 8C19.0833 6.72338 18.3518 4.87862 16.8944 3.36519C15.4072 1.82078 13.1322 0.583336 10 0.583336ZM8.24993 8C8.24993 7.0335 9.03343 6.25 9.99993 6.25C10.9664 6.25 11.7499 7.0335 11.7499 8C11.7499 8.9665 10.9664 9.75 9.99993 9.75C9.03343 9.75 8.24993 8.9665 8.24993 8ZM9.99993 4.75C8.205 4.75 6.74993 6.20508 6.74993 8C6.74993 9.79493 8.205 11.25 9.99993 11.25C11.7949 11.25 13.2499 9.79493 13.2499 8C13.2499 6.20508 11.7949 4.75 9.99993 4.75Z"
				fill={fill}
			/>
		</svg>
	)
}

export { Eye }
