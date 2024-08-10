import { INPUT_DIMENSIONS } from "./constants"

export const calcHeight = (value: string) => {
	const lineBreaks = (value.match(/\n/g) || []).length
	// min-height + lines x line-height + padding + border
	const newHeight = INPUT_DIMENSIONS.MIN_HEIGHT + lineBreaks * INPUT_DIMENSIONS.LINE_HEIGHT + 12 + 2
	return newHeight
}
