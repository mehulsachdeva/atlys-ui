import { formatDate } from "./date"

export const formatCommentTimestamp = (date: string) => {
	const now = new Date().getTime()
	const givenData = new Date(date).getTime()
	const diffMs = now - givenData // Difference in milliseconds
	const diffSec = Math.floor(diffMs / 1000) // Difference in seconds
	const diffMin = Math.floor(diffSec / 60) // Difference in minutes
	const diffHr = Math.floor(diffMin / 60) // Difference in hours

	if (diffSec < 10) {
		return "Just now"
	} else if (diffSec < 60) {
		// Less than 1 minute
		return `${diffSec} sec${diffSec !== 1 ? "s" : ""} ago`
	} else if (diffSec < 3600) {
		// Less than 1 hour
		return `${diffMin} min${diffMin !== 1 ? "s" : ""} ago`
	} else if (diffHr < 24) {
		// Less than 1 day
		return `${diffHr} hr${diffHr !== 1 ? "s" : ""} ago`
	} else {
		return formatDate(date)
	}
}
