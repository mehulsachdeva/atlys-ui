export const convertToPixels = (value: string | number) => {
	return typeof value === "number" ? `${value}px` : value
}
